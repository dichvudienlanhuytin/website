module.exports = {
  siteName: "Điện Lạnh",
  siteUrl: 'https://tbn133.github.io',
  pathPrefix: '/dienlanh',
  plugins: [
    {
      use: "gridsome-source-static-meta",
      options: {
        path: "settings/*.json"
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Product",
        path: "./content/products/*.json"
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Service',
        path: './content/services/*.json'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Rule',
        path: './content/rules/*.json'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'New',
        path: './content/news/*.json'
      }
    }
  ],
  templates: {
    Product: "/product/:name",
    Rule: "/rule/:name",
    New: "/new/:name",
    Service: "/service/:name"
  },
  css: {
    loaderOptions: {
      scss: {}
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set('@images', '@/assets/images')
  }
}
