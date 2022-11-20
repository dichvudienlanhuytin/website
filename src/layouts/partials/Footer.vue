<template>
  <footer class="page-footer font-small teal py-4">
    <footer class="bg-footer">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <div class="footer-col">
              <div class="h3 title-footer">
                {{ $static.metadata.company.name }}
              </div>
              <ul class="no-ul news-detail">
                <li class="mb-1">
                  Trụ sở:
                  <b>{{ $static.metadata.company.address }}</b>
                </li>
                <li>
                  Website: <b><a href="/">dienlanhtamduc.com</a></b>
                </li>
              </ul>
              <div class="news-detail form-group">
                <b>Gọi cho chúng tôi</b>
              </div>
              <b-link
                :href="'tel:' + $static.metadata.company.telephone1"
                class="hot-contact hot-bord"
              >
                <i class="fas fa-phone"></i>
                {{ $static.metadata.company.telephone1 }}
              </b-link>
              <b-link
                :href="'tel:' + $static.metadata.company.telephone2"
                class="hot-contact hot-bord"
              >
                <i class="fas fa-phone"></i>
                {{ $static.metadata.company.telephone2 }}
              </b-link>
            </div>
          </div>
          <div class="col-md-3">
            <div class="footer-col">
              <div class="title-footer h3">CHÍNH SÁCH</div>
              <ul class="no-ul ul-footer">
                <li v-for="edge in $static.rules.edges" :key="edge.node.id">
                  <g-link :to="edge.node.path">{{ edge.node.name }}</g-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-3">
            <div class="footer-col">
              <div class="h3 title-footer">DỊCH VỤ</div>
              <ul class="no-ul ul-footer">
                <li v-for="edge in $static.services.edges" :key="edge.node.id">
                  <g-link :to="edge.node.path">{{ edge.node.name }}</g-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-3">
            <div class="footer-col">
              <div class="title-footer h3">CHI NHÁNH</div>
              <div class="row">
                <div class="col-md-12" v-for="(b, index) in $static.metadata.company.branch" :key="index">
                  <div class="diachi">
                    <strong>Chi nhánh {{index + 1}}:</strong> {{b}}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="below-footer">
          Copyright © 2018 <span>{{$static.metadata.company.name}}</span>
        </div>
      </div>

      <div class="giuseart-nav d-block d-md-none">
        <ul>
          <li>
            <a href="/" rel="nofollow" target="_blank">
              <b-icon icon="icon-home-w"></b-icon>Home
            </a>
          </li>
          <li>
            <g-link to="/contact" class="chat_animation">
              <b-icon icon="ticon-chat-sms" title="Chát trực tiếp"/>
              Liên hệ
            </g-link>
          </li>
        </ul>
      </div>
      <b-button
        type="button"
        class="btn-uptop"
        @click="scrollTop(0,0)"
        style="display: inline-block"
      >
        <b-icon icon="arrow-up" />
      </b-button>
    </footer>
  </footer>
</template>
<static-query>
  query {
    metadata {
      company {
        name
        telephone1
        telephone2
        fax
        address
        description
        branch
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
</static-query>
<script>
export default {
  methods: {
    scrollTop() {
      scroll(0, 0)
    }
  }
}
</script>

<style lang="scss">
footer {
  width: 100%;
  margin-top: 6rem;
}
</style>
