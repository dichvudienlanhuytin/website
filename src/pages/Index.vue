<template>
  <Layout>
    <div class="col-md-9 order-1 order-md-2">
      <div class="row">
        <div class="col-lg-12 form-group">
          <b-carousel
            id="carousel-1"
            :interval="3000"
            controls
            indicators
            background="#ababab"
            style="text-shadow: 1px 1px 2px #333"
          >
            <b-carousel-slide v-for="i in [1,2,3,4,5,6,7,8]" :key="i">
              <template #img>
                <g-image
                  width="1024"
                  height="480"
                  :src="require(`!!assets-loader!@images/slide/${i}.png`)"
                  :alt="'img_'+i"
                  :title="'img_'+i"
                />
              </template>
            </b-carousel-slide>
          </b-carousel>
        </div>
      </div>
      <h1 class="h3-ttnews"><span>Dịch vụ điện lạnh</span></h1>
      <div class="row">
        <div
          v-for="(edge, index) in $page.services.edges"
          :key="edge.node.id"
          class="col-lg-6 form-group"
        >
          <template v-if="index === 0">
            <g-link :to="edge.node.path">
              <g-image
                :src="require(`!!assets-loader!@images/${edge.node.image}.png`)"
                :alt="edge.node.name"
                :title="edge.node.name"
                class="img-fluid"
              />
            </g-link>
            <g-link :to="edge.node.path">
              <h2 class="ti-news">{{ edge.node.name }}</h2>
            </g-link>
            <div class="news-detail" v-html="edge.node.short_content" />
          </template>
          <div v-else class="thum clear-fix">
            <g-link :to="edge.node.path">
              <g-image
                :src="require(`!!assets-loader!@images/${edge.node.image}.png`)"
                :alt="edge.node.name"
                :title="edge.node.name"
                class="img-fluid"
              />
            </g-link>
            <g-link :to="edge.node.path">
              <h2 class="ti-news">{{ edge.node.name }}</h2>
            </g-link>
            <div class="news-detail" v-html="edge.node.short_content" />
          </div>
        </div>
      </div>
      <h3 class="h3-ttnews">
        <g-link to="/product">Sản phẩm tiêu biểu</g-link>
      </h3>
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
      </div>

      <div class="row">
        <div class="col-md-6 form-group">
          <h3 class="h3-ttnews">
            <a href="">Kinh nghiệm sửa chữa</a>
          </h3>
          <a href="">
            <div class="ti-news small-ti-news">
              8 sai lầm làm giảm tuổi thọ máy giặt
            </div>
          </a>
          <div class="news-detail">
            Những thói quen giặt giũ tưởng chừng như vô hại lại tiềm ẩn nguy cơ
            gây hại rất lớn đến tuổi thọ của máy giặt. Máy giặt là thiết bị gia
            dụng vô cùng cần thiết và nó cũng là một khoản đầu tư tài chính tốn
            kém. Điện lạnh Tâm Đức xin mách bạn cách phòng tránh những thói
            quen giặt giũ sai lầm hàng ngày đang tiềm ẩn nguy cơ gây hại và làm
            giảm tuổi thọ của máy giặt... có thể là vĩnh viễn.
          </div>
        </div>
        <div class="col-md-6 form-group">
          <h3 class="h3-ttnews">
            <g-link to="/support">Tư vấn sử dụng</g-link>
          </h3>
          <a href="/">
            <div class="ti-news small-ti-news">
              Cách khắc phục khi máy lạnh chạy ồn kêu to
            </div>
          </a>
          <div class="news-detail">
            Máy lạnh nhà bạn chạy ồn, kêu to, rung mạnh, gây ra cảm giác khó
            chịu, bạn đang tìm nguyên nhân do đâu và cách khắc phục nhanh nhất,
            sau đây là những nguyên nhân dẫn đến máy lạnh chạy ồn và cách khắc
            phục khi gặp sự cố trên.
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
  query {
    services: allService {
      edges {
        node {
          id
          name
          path
          short_content
          image
        }
      }
    }
    products: allProduct {
      edges {
        node {
          id
          name
          path
          short_content
          image
          price
        }
      }
    }
  }
</page-query>
<script lang="js">
export default {
  metaInfo: {
    title: "Trang Chủ",
  },
  components: {},
};
</script>
