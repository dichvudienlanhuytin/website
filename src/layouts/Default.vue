<template>
  <div class="layout">
    <Header />
    <Banner />
    <div class="bdtcd">
      <div class="container">
        <ul class="no-ul">
          <li class="d-inline-block"><b-icon icon="house-door-fill" /></li>
          <li class="d-inline-block space_caret">
            <b-icon icon="chevron-right" />
          </li>
          <slot name="breadcrumb" />
        </ul>
      </div>
    </div>
    <b-container>
      <b-row>
        <div class="col-md-3 order-2 order-md-1">
          <slot name="custom" />
          <div class="h3 h3-ttnews">
            <a href="javascript:void(0)">Hỗ trợ khách hàng</a>
          </div>
          <div class="border">
            <b-link
              class="lihotro"
              :href="'tel:' + $static.metadata.company.telephone1"
            >
              <g-image
                class="img-responsive"
                title="support1"
                :src="require(`!!assets-loader!@images/support.png`)"
              />
              <span>Kinh doanh</span>
              <div class="text-center">
                {{ $static.metadata.company.telephone1 }}
              </div>
            </b-link>
            <b-link
              class="lihotro"
              :href="'tel:' + $static.metadata.company.telephone2"
            >
              <g-image
                class="img-responsive"
                title="support2"
                :src="require(`!!assets-loader!@images/support.png`)"
              />
              <span>Kỹ thuật</span>
              <div class="text-center">
                {{ $static.metadata.company.telephone2 }}
              </div>
            </b-link>
          </div>
          <div class="form-group"></div>
          <div class="h3 h3-ttnews">
            <g-link to="/price">Bảng giá dịch vụ</g-link>
          </div>
          <div class="border">
            <g-link to="/price">
              <img
                alt="Bảng giá dịch vụ"
                src="../assets/images/baogia.gif"
                class="img-fluid"
              />
            </g-link>
          </div>
          <div class="form-group"></div>
          <div class="h3 h3-ttnews"><g-link to="/new">Tin tức</g-link></div>
          <div class="border">
            <div
              v-for="edge in $static.news.edges"
              :key="edge.node.id"
              class="row form-group clear-fix"
            >
              <div class="col-md-4 new-pdd-r">
                <g-link :to="edge.node.path">
                  <g-image
                    :src="
                      require(`!!assets-loader!@images/${edge.node.image}.png`)
                    "
                    :alt="edge.node.title"
                    :title="edge.node.title"
                    class="img-fluid"
                  />
                </g-link>
              </div>
              <div class="col-md-8">
                <div class="info-cell">
                  <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
                </div>
              </div>
            </div>
          </div>
          <div class="form-group"></div>
        </div>
        <slot />
      </b-row>
    </b-container>
    <Footer />
  </div>
</template>
<static-query>
  query {
    metadata {
      company {
        telephone1
        telephone2
      }
    }
    news: allNew {
      edges {
        node {
          id
          name
          image
          title
          path
        }
      }
    }
  }
</static-query>

<script>
import Header from "~/layouts/partials/Header.vue"
import Footer from "~/layouts/partials/Footer.vue"
import Banner from "~/layouts/partials/Banner"

export default {
  components: {
    Header,
    Footer,
    Banner,
  },
}
</script>

<style lang="scss">
body,
html {
  height: 100%;
}

body {
  margin: 0;
  font-family: Roboto !important;
  font-weight: 400 !important;
  font-size: 62.5% !important;
  font-weight: 400 !important;
  line-height: 1.5 !important;
  color: #212529 !important;
  text-align: left !important;
  background-color: #fff !important;
}
</style>
