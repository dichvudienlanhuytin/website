<template>
  <Layout>
    <div class="col-md-9 order-1 order-md-2">
      <h1 class="h3-ttnews"><span>Sản phẩm</span></h1>
      <div class="form-group"></div>
      <div class="row">
        <div
          v-for="edge in $page.products.edges"
          :key="edge.node.id"
          class="col-sm-4 no-p-r"
        >
        <div class="tmb-sp">
            <g-link :to="edge.node.path" class="shadow-n">
              <span>
                <p v-html="edge.node.short_content" />
              </span>
              <div class="tmp-view-more">Xem thêm</div>
            </g-link>
            <g-link :to="edge.node.path" class="tmb-img">
              <g-image
                :alt="edge.node.name"
                :src="require(`!!assets-loader!@images/${edge.node.image}.png`)"
                class="img-fluid"
              />
            </g-link>
            <g-link :to="edge.node.path" class="tmp-title d-block">
              {{ edge.node.name }}
            </g-link>
            <div class="text-center">
              <g-link :to="edge.node.path" class="tmp-view-more mar-auto">
                {{ edge.node.price }}
              </g-link>
            </div>
          </div>
        </div>
        <Pager :info="$page.products.pageInfo" />
      </div>
    </div>
  </Layout>
</template>

<script lang="js">
import { Pager } from "gridsome";

export default {
  metaInfo: {
    title: "Shop Home",
  },
  components: {
    Pager,
  },
};
</script>

<page-query>
  query($page: Int){
      products: allProduct(perPage: 10, page: $page) @paginate {
          pageInfo {
              totalPages
              currentPage
          }
          edges {
              node {
                  id
                  name
                  image
                  short_content
                  path
              }
          }
      }
  }
</page-query>
