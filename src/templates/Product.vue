<template>
  <layout>
    <div class="col-md-9 order-1 order-md-2">
      <div v-html="$page.product.content" />
    </div>
  </layout>
</template>
<page-query>
    query Product($id: ID!) {
        product: product(id: $id) {
            id
            name
            content
            path
            content
        }
    }
</page-query>
<script>
export default {
  methods: {
    addToCart() {
      this.$store.commit("cart/add", {
        id: this.$page.product.id,
        name: this.$page.product.name,
        price: this.$page.product.price,
        path: this.$page.product.path,
      });
    },
  },
};
</script>
<style scoped></style>
