<template>
  <div class="news-detail">
    <template v-for="(content, i) in contents">
      <p v-if="content.type === 'text'" :key="'text_' + i" style="margin-left: 0cm; margin-right: 0cm; text-align: justify">
        <span style="font-size: 11pt">
          <span style="font-family: Calibri">
            <span style="font-size: 14pt">{{content.content}}</span>
          </span>
        </span>
      </p>
      <template v-else-if="content.type === 'image'">
        <p :key="'img_' + i" style="margin-left: 0cm; margin-right: 0cm; text-align: center">
          <span style="font-size: 11pt">
            <span style="font-family: Calibri">
              <span style="font-size: 14pt">
                <g-image
                  :src="require(`!!assets-loader!@images/${content.content}.png`)"
                  :alt="'img_'+i"
                  :title="'img_'+i"
                />
              </span>
            </span>
          </span>
        </p>
        <p v-if="content.title" :key="'img_em_' + i" style="margin-left:0px; margin-right:0px; text-align:center">
          <span style="font-size:16px"><em>{{content.title}}</em></span>
        </p>
      </template>
      <h2 v-else-if="content.type === 'head2'" :key="'h2_' + i" style="margin-left:0cm; margin-right:0cm; text-align:justify">
        <strong>
          <span style="font-size:13pt">
            <span style="font-family:Cambria,">
              <span style="color:#4f81bd">
                <span style="font-size:14.0pt">
                  {{content.content}}
                </span>
              </span>
            </span>
          </span>
        </strong>
      </h2>
      <h3 v-else-if="content.type === 'head3'" :key="'h3_' + i" style="margin-left:0cm; margin-right:0cm; text-align:justify">
        <strong>
          <span style="font-size:11pt">
            <span style="font-family:Cambria,">
              <span style="color:#4f81bd">
                <span style="font-size:13.0pt">{{content.content}}</span>
              </span>
            </span>
          </span>
        </strong>
      </h3>
      <ul v-else-if="content.type === 'ul'" :key="'ul_' + i" style="margin-left:0cm; margin-right:0cm; text-align:justify">
        <li v-for="(it, j) in content.li_items" :key="j">
          <span style="font-size:16px">{{it}}</span>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    contents: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style scoped></style>
