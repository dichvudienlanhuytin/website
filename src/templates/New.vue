<template>
  <layout>
    <template v-slot:custom>
      <div class="h3 h3-ttnews"><span>Danh sách dịch vụ</span></div>
      <ul class="no-ul box-lst">
        <li v-for="edge in $page.services.edges" :key="edge.node.id">
          <g-link :to="edge.node.path">
            <b-icon icon="arrow-circle-right" />{{ edge.node.name }}
          </g-link>
        </li>
      </ul>
    </template>
    <div class="col-md-9 order-1 order-md-2">
      <h1>{{ $page.new.title }}</h1>
      <div class="form-group"></div>
      <div class="mb-2 clear-fix"></div>
      <div class="mb-2"></div>
      <content-detail :contents="$page.new.contents" />
    </div>
  </layout>
</template>
<page-query>
  query New($id: ID!) {
    new: new(id: $id) {
      id
      name
      title
      contents {
        type,
        content,
        title
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
</page-query>
<script>
import ContentDetail from '~/components/ContentDetail'

export default {
  components: {
    ContentDetail
  }
}
</script>

<style scoped></style>
