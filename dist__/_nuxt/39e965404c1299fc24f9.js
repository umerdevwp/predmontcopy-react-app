(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{200:function(t,e,r){var content=r(209);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("639eda1c",content,!0,{sourceMap:!1})},201:function(t,e,r){var content=r(211);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("1cf831ce",content,!0,{sourceMap:!1})},208:function(t,e,r){"use strict";var o=r(200);r.n(o).a},209:function(t,e,r){(e=r(15)(!1)).push([t.i,".tabs[data-v-1a677668]{margin-bottom:50px}.tabs a[data-v-1a677668]{padding:6px 10px;color:#656565;font-size:14px}.activeTab[data-v-1a677668]{color:#fff!important;cursor:default;background-color:#6aa6d1;border-top-left-radius:4px;border-top-right-radius:4px}.tab-content[data-v-1a677668]{margin-top:2px;color:grey;padding:20px 10px;border:1px solid #ddd;border-radius:4px}",""]),t.exports=e},210:function(t,e,r){"use strict";var o=r(201);r.n(o).a},211:function(t,e,r){(e=r(15)(!1)).push([t.i,".content[data-v-0eae6787]{width:1170px;margin:0 auto}input[data-v-0eae6787]{margin-bottom:15px}.column[data-v-0eae6787]{width:30%;float:left;padding:0 30px}.btn-primary.btn[data-v-0eae6787]{color:#fff;background-color:#ff9948}.job-summary .btn-primary[data-v-0eae6787]{width:50%;text-transform:uppercase;font-size:16px;color:#fff;margin:0 auto 0 70px;padding:6px 15px}.product-option[data-v-0eae6787]{width:100%;float:left;margin-bottom:40px;border-radius:6px;background-color:#f7f7f7;padding:15px}.breadcrumb[data-v-0eae6787]{width:1170px;padding-top:5px;margin:0 auto;font-size:11px;background-color:unset!important}.bannerText[data-v-0eae6787]{position:relative;color:#575757;margin-top:-169px;width:450px;margin-bottom:80px;min-height:115px}.breadcrumbs-wrapper[data-v-0eae6787]{border-top:1px solid rgba(55,55,55,.1);height:28px;margin-bottom:-28px;position:relative;z-index:90;color:#fff;background:#000;background:rgba(0,0,0,.75);background:-webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.1)),color-stop(75%,transparent));background:linear-gradient(90deg,rgba(0,0,0,.1),transparent 75%)}.lightBanner[data-v-0eae6787]{color:#fff}.product-option h2[data-v-0eae6787]{font-size:14px;color:#fff;background-color:#6aa6d1;width:100%;padding:6px 10px;margin-top:10px}.badge[data-v-0eae6787]{display:inline-block;padding:4px 6px;font-size:12px;font-weight:700;line-height:1;color:#fff;text-align:center;white-space:nowrap;vertical-align:middle;background-color:#ff9948;border-radius:100%;width:20px;height:20px;margin-right:10px}",""]),t.exports=e},219:function(t,e,r){"use strict";r.r(e);r(44);var o,n=r(6),c={props:{product:Object},data:function(){return{tabs:["Product Detail","Paper Choices","Design Templates","Print Guide","Tips & Ideas"],selectedTab:"Product Detail"}}},d=(r(208),r(11)),l={components:{ProductTabs:Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tabs"},[t._l(t.tabs,(function(e,o){return r("a",{key:o,class:{activeTab:t.selectedTab===e},on:{click:function(r){t.selectedTab=e}}},[t._v("\n    "+t._s(e)+"\n\n  ")])})),t._v(" "),"Product Detail"==t.selectedTab?r("div",{staticClass:"tab-content",domProps:{innerHTML:t._s(t.product.tabDetail)}}):t._e(),t._v(" "),"Paper Choices"==t.selectedTab?r("div",{staticClass:"tab-content",domProps:{innerHTML:t._s(t.product.paperChoices)}}):t._e(),t._v(" "),"Design Templates"==t.selectedTab?r("div",{staticClass:"tab-content",domProps:{innerHTML:t._s(t.product.designTemplates)}}):t._e(),t._v(" "),"Print Guide"==t.selectedTab?r("div",{staticClass:"tab-content",domProps:{innerHTML:t._s(t.product.printGuides)}}):t._e(),t._v(" "),"Tips & Ideas"==t.selectedTab?r("div",{staticClass:"tab-content",domProps:{innerHTML:t._s(t.product.tipsIdeas)}}):t._e()],2)}),[],!1,null,"1a677668",null).exports},head:function(){return{title:"Product Detail"}},asyncData:(o=Object(n.a)(regeneratorRuntime.mark((function t(e){var r,o,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$axios,o=e.error,n=e.params,t.abrupt("return",r.get("http://piedmontcopy.com/wp/wp-json/product/v1/productID/"+n.id).then((function(t){return{product:t.data}})).catch((function(t){o({statusCode:503,message:"unable to load products at this time. please try again"})})));case 2:case"end":return t.stop()}}),t)}))),function(t){return o.apply(this,arguments)}),methods:{}},m=(r(210),Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.product?r("div",[r("div",{staticClass:"breadcrumbs-wrapper"},[r("div",{staticClass:"breadcrumb"},[r("nuxt-link",{attrs:{to:"/"}},[t._v("Home > ")]),t._v(" "),r("nuxt-link",{attrs:{to:"/products"}},[t._v(" Products > ")]),t._v(" \n      "+t._s(t.product.title)+"\n    ")],1)]),t._v(" "),r("img",{attrs:{src:t.product.bannerImage}}),t._v(" "),r("div",{staticClass:"content"},[r("div",{staticClass:"bannerText",class:{lightBanner:"light"===t.product.bannerColor}},[r("h2",[t._v(t._s(t.product.title))]),t._v("\n      "+t._s(t.product.bannerText)+"\n    ")]),t._v(" "),r("div",{staticClass:"product-option"},[r("div",{staticClass:"column"},[t._m(0),t._v(" "),r("div",{domProps:{innerHTML:t._s(t.product.productOptions)}})]),t._v(" "),t._m(1),t._v(" "),t._m(2)]),t._v(" "),r("ProductTabs",{attrs:{product:t.product}})],1)]):t._e()}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",[e("span",{staticClass:"badge"},[this._v("1")]),this._v("Product Options")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"column"},[e("h2",[e("span",{staticClass:"badge"},[this._v("2")]),this._v("Upload Design")]),this._v(" "),e("img",{attrs:{id:"frontpreviewing",src:"http://piedmontcopy.com/wp/wp-content/themes/piedmont/assets/images/upload-img.png"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"column job-summary"},[r("h2",[r("span",{staticClass:"badge"},[t._v("3")]),t._v("Job Information")]),t._v(" "),r("input",{attrs:{type:"text",placeholder:"Job Name",name:"job_name"}}),t._v(" "),r("input",{attrs:{type:"text",placeholder:"Full Name",name:"full_name"}}),t._v(" "),r("input",{attrs:{type:"text",placeholder:"Email",name:"email"}}),t._v(" "),r("input",{attrs:{type:"text",placeholder:"Phone",name:"phone"}}),t._v(" "),r("textarea",{staticClass:"form-control",attrs:{name:"additional_information",rows:"5",placeholder:"Additional Information"}}),t._v(" "),r("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"submit order",name:"submit-order"}})])}],!1,null,"0eae6787",null));e.default=m.exports}}]);