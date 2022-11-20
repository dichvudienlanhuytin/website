<template>
  <Layout>
    <div class="col-md-9 order-1 order-md-2">
      <h1>Tin Tức</h1>
      <div
        v-for="edge in $page.news.edges"
        :key="edge.node.id"
        class="row form-group"
      >
        <div class="col-sm-4">
          <div class="index_tinmoi_img">
            <g-link :to="edge.node.path">
              <g-image
                :src="require(`!!assets-loader!@images/${edge.node.image}.png`)"
                :alt="edge.node.title"
                :title="edge.node.title"
                class="img-fluid"
              />
            </g-link>
          </div>
        </div>
        <div class="col-sm-8">
          <div class="index_tinmoi_title big_index_tinmoi_title">
            <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
          </div>
          <ul class="no-ul list-detail-news">
            <li class="d-inline-block">
              <b-icon icon="tags"></b-icon><g-link to="/new">Tin tứ</g-link>
              <span class="d-inline-block ml-1 mr-1">-</span>
            </li>
            <li class="d-inline-block ml-1 mr-1">-</li>
            <li class="d-inline-block"><i class="fas fa-eye"></i> 63</li>
          </ul>
          <div class="mb-2"></div>
          <div class="news-detail">
            {{ edge.node.short_content}}
            <g-link :to="edge.node.path">Xem Thêm</g-link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script lang="js">
export default {
  metaInfo: {
    title: "Tin Tức",
  },
};
</script>

<page-query>
  query {
    news: allNew {
          edges {
              node {
                  id
                  name
                  short_content
                  title
                  path
                  image
              }
          }
      }
  }
</page-query>
