(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{PE4R:function(t,a,e){"use strict";e.r(a);e("sMBO");var s={metaInfo:function(){return{title:this.$page.product.name}},components:{ContentDetail:e("ScAT").a}},i=e("KHd+"),n=null,l=Object(i.a)(s,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("layout",[s("div",{staticClass:"col-md-9 order-1 order-md-2"},[s("div",{staticClass:"col-lg-9 order-1 order-lg-2"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-5"},[s("div",{staticClass:"popup-gallery"},[s("g-image",{staticClass:"img-fluid",attrs:{src:e("aOwJ")("./"+t.$page.product.image+".png"),alt:t.$page.product.name,title:t.$page.product.name}})],1)]),s("div",{staticClass:"col-md-7"},[s("label",{staticClass:"font-weight-bold d-none",attrs:{"data-discount":"0"}},[t._v("0")]),s("h1",{staticClass:"pd-title"},[t._v("\n            "+t._s(t.$page.product.name)+"\n          ")]),s("div",{staticClass:"news-detail"},[s("b",[t._v("Mô tả ngắn")])]),s("div",{staticClass:"form-group"}),s("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"news-detail",domProps:{innerHTML:t._s(t.$page.product.short_content)}}),s("div",{staticClass:"form-group"}),s("ul",{staticClass:"no-ul lisde news-detail"},[s("li",[s("div",[t._v("Giá:")]),s("div",[s("span",{staticClass:"curr-price price-val",attrs:{id:"currPrice_tru"}},[t._v("\n                  "+t._s(t.$page.product.price)+"\n                ")]),s("i",{staticClass:"text-black-50"},[t._v("(Chưa bao gồm VAT)")])])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"})])])]),s("div",{staticClass:"form-group"}),s("div",{staticClass:"card"},[s("div",{staticClass:"card-header news-detail"},[s("b",[t._v("Tổng quan về sản phẩm")])]),s("div",{staticClass:"card-body"},[t.$page.product.content_html?[s("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"news-detail",domProps:{innerHTML:t._s(t.$page.product.content_html)}})]:s("content-detail",{attrs:{contents:t.$page.product.contents}})],2)])])])])}),[],!1,null,"f89cd914",null);"function"==typeof n&&n(l);a.default=l.exports},ScAT:function(t,a,e){"use strict";var s={props:{contents:{type:Array,default:function(){return[]}}}},i=e("KHd+"),n=Object(i.a)(s,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"news-detail"},[t._l(t.contents,(function(a,i){return["text"===a.type?s("p",{key:"text_"+i,staticStyle:{"margin-left":"0cm","margin-right":"0cm","text-align":"justify"}},[s("span",{staticStyle:{"font-size":"11pt"}},[s("span",{staticStyle:{"font-family":"Calibri"}},[s("span",{staticStyle:{"font-size":"14pt"}},[t._v(t._s(a.content))])])])]):"image"===a.type?[s("p",{key:"img_"+i,staticStyle:{"margin-left":"0cm","margin-right":"0cm","text-align":"center"}},[s("span",{staticStyle:{"font-size":"11pt"}},[s("span",{staticStyle:{"font-family":"Calibri"}},[s("span",{staticStyle:{"font-size":"14pt"}},[s("g-image",{attrs:{src:e("aOwJ")("./"+a.content+".png"),alt:"img_"+i,title:"img_"+i}})],1)])])]),a.title?s("p",{key:"img_em_"+i,staticStyle:{"margin-left":"0px","margin-right":"0px","text-align":"center"}},[s("span",{staticStyle:{"font-size":"16px"}},[s("em",[t._v(t._s(a.title))])])]):t._e()]:"head2"===a.type?s("h2",{key:"h2_"+i,staticStyle:{"margin-left":"0cm","margin-right":"0cm","text-align":"justify"}},[s("strong",[s("span",{staticStyle:{"font-size":"13pt"}},[s("span",{staticStyle:{"font-family":"Cambria"}},[s("span",{staticStyle:{color:"#4f81bd"}},[s("span",{staticStyle:{"font-size":"14pt"}},[t._v("\n                "+t._s(a.content)+"\n              ")])])])])])]):"head3"===a.type?s("h3",{key:"h3_"+i,staticStyle:{"margin-left":"0cm","margin-right":"0cm","text-align":"justify"}},[s("strong",[s("span",{staticStyle:{"font-size":"11pt"}},[s("span",{staticStyle:{"font-family":"Cambria"}},[s("span",{staticStyle:{color:"#4f81bd"}},[s("span",{staticStyle:{"font-size":"13pt"}},[t._v(t._s(a.content))])])])])])]):"ul"===a.type?s("ul",{key:"ul_"+i,staticStyle:{"margin-left":"0cm","margin-right":"0cm","text-align":"justify"}},t._l(a.li_items,(function(a,e){return s("li",{key:e},[s("span",{staticStyle:{"font-size":"16px"}},[t._v(t._s(a))])])})),0):t._e()]}))],2)}),[],!1,null,"c3d6b6f6",null);a.a=n.exports}}]);