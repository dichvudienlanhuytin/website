(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{PE4R:function(t,a,s){"use strict";s.r(a);s("sMBO");var i={components:{ContentDetail:s("ScAT").a},methods:{addToCart:function(){this.$store.commit("cart/add",{id:this.$page.product.id,name:this.$page.product.name,price:this.$page.product.price,path:this.$page.product.path})}}},e=s("KHd+"),n=null,c=Object(e.a)(i,(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("layout",[i("div",{staticClass:"col-md-9 order-1 order-md-2"},[i("div",{staticClass:"col-lg-9 order-1 order-lg-2"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-5"},[i("div",{staticClass:"popup-gallery"},[i("g-image",{staticClass:"img-fluid",attrs:{src:s("aOwJ")("./"+t.$page.product.image+".png"),alt:t.$page.product.name,title:t.$page.product.name}})],1)]),i("div",{staticClass:"col-md-7"},[i("label",{staticClass:"font-weight-bold d-none",attrs:{"data-discount":"0"}},[t._v("0")]),i("h1",{staticClass:"pd-title"},[t._v("\n            "+t._s(t.$page.product.name)+"\n          ")]),i("div",{staticClass:"news-detail"},[i("b",[t._v("Mô tả ngắn")])]),i("div",{staticClass:"form-group"}),i("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"news-detail",domProps:{innerHTML:t._s(t.$page.product.short_content)}}),i("div",{staticClass:"form-group"}),i("ul",{staticClass:"no-ul lisde news-detail"},[i("li",[i("div",[t._v("Giá:")]),i("div",[i("span",{staticClass:"curr-price price-val",attrs:{id:"currPrice_tru"}},[t._v("\n                  "+t._s(t.$page.product.price)+"\n                ")]),i("i",{staticClass:"text-black-50"},[t._v("(Chưa bao gồm VAT)")])])])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6"},[i("button",{staticClass:"bt-cart btaddcart btaddcart-detail",on:{click:t.addToCart}},[i("div",{staticClass:"r_1"},[t._v("MUA NGAY")])])])])])]),i("div",{staticClass:"form-group"}),i("div",{staticClass:"card"},[i("div",{staticClass:"card-header news-detail"},[i("b",[t._v("Tổng quan về sản phẩm")])]),i("div",{staticClass:"card-body"},[i("content-detail",{attrs:{contents:t.$page.product.contents}})],1)])])])])}),[],!1,null,"08a46222",null);"function"==typeof n&&n(c);a.default=c.exports},ScAT:function(t,a,s){"use strict";var i={props:{contents:{type:Array,default:function(){return[]}}}},e=s("KHd+"),n=Object(e.a)(i,(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"news-detail"},[t._l(t.contents,(function(a,e){return["text"===a.type?i("p",{key:"text_"+e,staticStyle:{"margin-left":"0cm","margin-right":"0cm","text-align":"justify"}},[i("span",{staticStyle:{"font-size":"11pt"}},[i("span",{staticStyle:{"font-family":"Calibri"}},[i("span",{staticStyle:{"font-size":"14pt"}},[t._v(t._s(a.content))])])])]):"image"===a.type?[i("p",{key:"img_"+e,staticStyle:{"margin-left":"0cm","margin-right":"0cm","text-align":"center"}},[i("span",{staticStyle:{"font-size":"11pt"}},[i("span",{staticStyle:{"font-family":"Calibri"}},[i("span",{staticStyle:{"font-size":"14pt"}},[i("g-image",{attrs:{src:s("aOwJ")("./"+a.content+".png"),alt:"img_"+e,title:"img_"+e}})],1)])])]),a.title?i("p",{key:"img_em_"+e,staticStyle:{"margin-left":"0px","margin-right":"0px","text-align":"center"}},[i("span",{staticStyle:{"font-size":"16px"}},[i("em",[t._v(t._s(a.title))])])]):t._e()]:"head2"===a.type?i("h2",{key:"h2_"+e,staticStyle:{"margin-left":"0cm","margin-right":"0cm","text-align":"justify"}},[i("strong",[i("span",{staticStyle:{"font-size":"13pt"}},[i("span",{staticStyle:{"font-family":"Cambria,"}},[i("span",{staticStyle:{color:"#4f81bd"}},[i("span",{staticStyle:{"font-size":"14.0pt"}},[t._v("\n                "+t._s(a.content)+"\n              ")])])])])])]):"head3"===a.type?i("h3",{key:"h3_"+e,staticStyle:{"margin-left":"0cm","margin-right":"0cm","text-align":"justify"}},[i("strong",[i("span",{staticStyle:{"font-size":"11pt"}},[i("span",{staticStyle:{"font-family":"Cambria,"}},[i("span",{staticStyle:{color:"#4f81bd"}},[i("span",{staticStyle:{"font-size":"13.0pt"}},[t._v(t._s(a.content))])])])])])]):"ul"===a.type?i("ul",{key:"ul_"+e,staticStyle:{"margin-left":"0cm","margin-right":"0cm","text-align":"justify"}},t._l(a.li_items,(function(a,s){return i("li",{key:s},[i("span",{staticStyle:{"font-size":"16px"}},[t._v(t._s(a))])])})),0):t._e()]}))],2)}),[],!1,null,"4bc9ad32",null);a.a=n.exports}}]);