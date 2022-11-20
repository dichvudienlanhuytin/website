'use strict'
const spawnSync = require('child_process').spawnSync
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

class ServerlessPlugin {
  constructor(serverless, options) {
    this.serverless = serverless
    this.options = options
    this.force =
      process.argv &&
      process.argv.length > 0 &&
      process.argv.find(it => it === '--force')
    this.commands = {
      syncToS3: {
        usage: 'Deploys the `app` directory to your bucket',
        lifecycleEvents: ['sync']
      },
      domainInfo: {
        usage: 'Fetches and prints out the deployed CloudFront domain names',
        lifecycleEvents: ['domainInfo']
      },
      invalidateCache: {
        usage: 'Invalidates CloudFront cache',
        lifecycleEvents: ['invalidateCache']
      },
      build: {
        usage: 'Build vue project to dist directory',
        lifecycleEvents: ['build']
      },
      deployAll: {
        usage:
          'Build web, deploy CloudFormation and then sync source to S3, invalidate cache',
        lifecycleEvents: ['deployAll']
      }
    }

    this.hooks = {
      'syncToS3:sync': this.syncDirectory.bind(this),
      'domainInfo:domainInfo': this.domainInfo.bind(this),
      'invalidateCache:invalidateCache': this.invalidateCache.bind(this),
      'build:build': this.buildWeb.bind(this),
      'deployAll:deployAll': this.deployAll.bind(this)
    }
  }

  async runCommand(command, args, env) {
    let options = {
      shell: true,
      stdio: [null, process.stdout, process.stderr]
    }
    if (env) {
      options = Object.assign({}, options, {
        env: Object.assign({}, process.env, env)
      })
    }
    const result = spawnSync(command, args, options)
    const stdout = result.stdout
    const sterr = result.stderr
    if (stdout) {
      this.serverless.cli.log(stdout.toString())
    }
    if (sterr) {
      this.serverless.cli.log(sterr.toString())
    }
    return { stdout, sterr }
  }

  async deployAll() {
    await this.buildWeb()
    await sleep(50)
    await this.deploy()
    await sleep(50)
    await this.syncDirectory()
    await sleep(50)
    await this.invalidateCache()
    await sleep(50)
    await this.domainInfo()
  }

  getStage() {
    return this.serverless.variables.service.provider.stage || 'dev'
  }

  async buildWeb() {
    const { sterr } = await this.runCommand('npm', [
      'run',
      `build:${this.getStage()}`
    ])
    if (!sterr) {
      this.serverless.cli.log(`[buildWeb] Successful...`)
    } else {
      throw new Error(`[buildWeb] Failed with error${sterr}`)
    }
  }

  async deploy() {
    const args = ['deploy', '--stage', this.getStage()]
    if (this.force) {
      args.push('--force')
    }
    const { sterr } = await this.runCommand('sls', args)
    if (!sterr) {
      this.serverless.cli.log(`[Deploy] Successful...`)
    } else {
      throw new Error(`[Deploy] Failed with error${sterr}`)
    }
  }

  async syncDirectory() {
    const profile = this.serverless.variables.service.provider.profile

    const s3Bucket = this.serverless.variables.service.custom.s3Bucket
    const dist = this.serverless.variables.service.custom.distDir
    const args = [
      's3',
      'sync',
      `${dist}/`,
      `s3://${s3Bucket}/`,
      '--delete',
      '--profile',
      profile
    ]
    const { sterr } = await this.runCommand('aws', args)
    if (!sterr) {
      this.serverless.cli.log(`[SyncToS3] Success at bucket[${s3Bucket}]...`)
    } else {
      throw new Error(`[SyncToS3] Failed with error ${sterr}`)
    }
  }

  async domainInfo() {
    const provider = this.serverless.getProvider('aws')
    const stage = this.getStage()
    const stackName = provider.naming.getStackName(stage)
    this.serverless.cli.log(stackName)
    const result = await provider.request(
      'CloudFormation',
      'describeStacks',
      { StackName: stackName },
      stage,
      this.options.region
    )
    const outputs = result.Stacks[0].Outputs
    const output = outputs.find(
      entry => entry.OutputKey === 'WebAppCloudFrontDistributionOutput'
    )
    if (output && output.OutputValue) {
      this.serverless.cli.log(`Web App Domain: ${output.OutputValue}`)
      return output.OutputValue
    }
    this.serverless.cli.log('Web App Domain: Not Found')
    throw new Error('Could not extract Web App Domain')
  }

  async invalidateCache() {
    const provider = this.serverless.getProvider('aws')

    const domain = await this.domainInfo()

    const result = await provider.request(
      'CloudFront',
      'listDistributions',
      {},
      this.getStage(),
      this.options.region
    )

    const distributions = result.DistributionList.Items
    const distribution = distributions.find(
      entry => entry.DomainName === domain
    )

    if (distribution) {
      this.serverless.cli.log(
        `Invalidating CloudFront distribution with id: ${distribution.Id}`
      )

      const profile = this.serverless.variables.service.provider.profile
      const args = [
        '--profile',
        profile,
        'cloudfront',
        'create-invalidation',
        '--distribution-id',
        distribution.Id,
        '--paths',
        '"/*"'
      ]

      const { sterr } = this.runCommand('aws', args)
      if (!sterr) {
        this.serverless.cli.log('Successfully invalidated CloudFront cache')
      } else {
        throw new Error('Failed invalidating CloudFront cache')
      }
    } else {
      const message = `Could not find distribution with domain ${domain}`
      const error = new Error(message)
      this.serverless.cli.log(message)
      throw error
    }
  }
}

module.exports = ServerlessPlugin
