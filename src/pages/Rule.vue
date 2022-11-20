<template>
  <Layout>
    <div class="col-md-9 order-1 order-md-2">
      <h1>CHÍNH SÁCH</h1>
      <div v-for="edge in $page.rules.edges" :key="edge.node.id">
        <g-link :to="edge.node.path">{{ edge.node.name }}</g-link>
      </div>
    </div>
  </Layout>
</template>

<script lang="js">

export default {
  metaInfo: {
    title: "Shop Home",
  },
};
</script>

<page-query>
  query {
      rules: allRule {
          edges {
              node {
                  id
                  name
                  path
              }
          }
      }
  }
</page-query>
