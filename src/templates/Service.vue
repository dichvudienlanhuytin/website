<template>
  <layout>
    <div class="col-md-9 order-1 order-md-2">
      <h1>{{ $page.service.title }}</h1>
      <div class="form-group"></div>
      <div class="mb-2 clear-fix"></div>
      <div class="mb-2"></div>
      <content-detail :contents="$page.service.contents" />
    </div>
  </layout>
</template>
<page-query>
query Service($id: ID!) {
  service: service(id: $id) {
    id
    name
    title
    contents {
      type,
      content,
      li_items,
      title
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
