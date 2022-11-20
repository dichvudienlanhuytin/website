<template>
  <layout>
    <h1>{{ $page.rule.name }}</h1>
    <div v-html="$page.rule.content" />
  </layout>
</template>
<page-query>
    query Rule($id: ID!) {
        rule: rule(id: $id) {
            id
            name
            content
        }
    }
</page-query>
<script>
export default {
};
</script>
<style scoped></style>
