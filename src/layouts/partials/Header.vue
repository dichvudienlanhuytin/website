<template>
  <div class="bg-header clear-fix d-none d-lg-block">
    <div class="container">
      <ul class="menu-product no-ul">
        <li v-for="element in $static.metadata.menu" :key="element.name">
          <g-link :to="element.link">{{ element.name }}</g-link>
          <ul v-if="element.id === 'service'" class="no-ul">
            <li v-for="edge in $static.services.edges" :key="edge.node.id">
              <g-link :to="edge.node.path"><b-icon icon="arrow-right-circle-fill" /> {{ edge.node.name }}</g-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
};
</script>

<static-query>
query {
  metadata {
    siteName
    menu {
      name
      link
      id
    }
  }
  services: allService {
      edges {
        node {
          id
          name
          path
        }
      }
    }
}
</static-query>
