(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{505:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNyIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDcgMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAuNTI4NjM2IDAuODYyMDFDMC4yNjgyODcgMS4xMjIzNiAwLjI2ODI4NyAxLjU0NDQ3IDAuNTI4NjM2IDEuODA0ODJMNC43MjM5IDYuMDAwMDhMMC41Mjg2MzcgMTAuMTk1M0MwLjI2ODI4NyAxMC40NTU3IDAuMjY4Mjg3IDEwLjg3NzggMC41Mjg2MzcgMTEuMTM4MkMwLjc4ODk4NiAxMS4zOTg1IDEuMjExMSAxMS4zOTg1IDEuNDcxNDUgMTEuMTM4Mkw2LjEzODExIDYuNDcxNDlDNi4zOTg0NiA2LjIxMTE0IDYuMzk4NDYgNS43ODkwMyA2LjEzODExIDUuNTI4NjhMMS40NzE0NSAwLjg2MjAxQzEuMjExMSAwLjYwMTY2MSAwLjc4ODk4NiAwLjYwMTY2MSAwLjUyODYzNiAwLjg2MjAxWiIgZmlsbD0iI0I0QkRDMSIvPg0KPC9zdmc+DQo="},506:function(t,e,n){t.exports=n.p+"img/footer-logo.21583fe.svg"},693:function(t,e,n){"use strict";n.r(e);n(185),n(34);var r=[function(){var t=this._self._c;return t("i",{staticClass:"ico d-flex align-items-center justify-content-center"},[t("img",{attrs:{src:n(505),alt:""}})])},function(){var t=this._self._c;return t("i",[t("img",{attrs:{src:n(506),alt:""}})])}],c=(n(18),n(16),n(14),n(19),n(20),n(17)),l=n(2),o=(n(46),n(10),n(15),n(100));function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d={name:"DocumentCat",data:function(){return{page:1,menu:"",currentPage:1,fields:[{key:"index",label:"№"},{key:"issued_by",label:this.$t("doc_type")},{key:"law",label:this.$t("doc_date")},{key:"title",label:this.$t("doc_title")},{key:"url",label:this.$t("doc_see")}]}},watch:{page:function(t){this.$store.dispatch("tables/filterCatDocs",{slug:this.$route.params.slug,page:t})}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)({documentMenu:function(t){return t.tables.documentMenu},allDocs:function(t){return t.tables.catDocs},perPage:function(t){return t.tables.perPage},total:function(t){return t.tables.total},currentPage:function(t){return t.tables.currentPage}})),created:function(){this.page=this.currentPage},mounted:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("tables/fetchDocumentMenu");case 2:return e.next=4,t.$store.dispatch("tables/fetchCatDocs",t.$route.params.slug);case 4:t.$store.state.tables.documentMenu.forEach((function(e){t.$route.params.slug?e.slug==t.$route.params.slug&&(t.menu=e.title,console.log(t.menu)):console.log(t.menu)}));case 5:case"end":return e.stop()}}),e)})))()}},v=d,m=n(84),component=Object(m.a)(v,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"page"},[e("div",{staticClass:"breadcrumbs"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("ul",[e("li",[e("nuxt-link",{attrs:{to:"/".concat(t.$i18n.locale)}},[t._v("\n                  "+t._s(t.$t("home"))+"\n                ")]),t._v(" "),t._m(0)],1),t._v(" "),e("li",[t._v(t._s(t.menu))])])])])])]),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-9"},[e("div",{staticClass:"inner"},[e("h1",{staticClass:"title"},[t._v(t._s(t.menu))]),t._v(" "),e("div",{staticClass:"table-wrap laws"},[e("b-table",{attrs:{id:"my-table","per-page":t.perPage,"current-page":t.currentPage,striped:"",hover:"",fields:t.fields,items:t.allDocs,responsive:"lg",stacked:"lg"},scopedSlots:t._u([{key:"cell(index)",fn:function(data){return[t._v("\n                  "+t._s(15*(t.page-1)+data.index+1)+"\n                ")]}},{key:"cell(issued_by)",fn:function(data){return[t._v("\n                  "+t._s(data.item.issued_by)+"\n                ")]}},{key:"cell(law)",fn:function(data){return[e("div",{staticClass:"text-center"},[t._v("\n                    "+t._s(t.$moment(data.item.date).format("L"))),e("br"),t._v("\n                    "+t._s(data.item.law)+"\n                  ")])]}},{key:"cell(url)",fn:function(data){return[e("a",{staticClass:"d-block",staticStyle:{"min-width":"92px"},attrs:{href:data.item.url,target:"_blank"}},[e("i",[e("svg",{attrs:{width:"16",height:"12",viewBox:"0 0 16 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M8 0.666748C3.24358 0.666748 0.171194 5.57938 0.115625 5.66883C0.0408285 5.76305 8.08654e-05 5.87978 0 6.00008C9.4615e-05 6.10328 0.030128 6.20424 0.0864583 6.29071C0.0871491 6.29175 0.0878436 6.29279 0.0885417 6.29383C0.0977116 6.31275 2.67671 11.3334 8 11.3334C13.3007 11.3334 15.8759 6.36208 15.9073 6.30112C15.9094 6.29767 15.9115 6.2942 15.9135 6.29071C15.9699 6.20424 15.9999 6.10328 16 6.00008C16 5.88027 15.9596 5.76395 15.8854 5.66987C15.8851 5.66953 15.8847 5.66918 15.8844 5.66883C15.8288 5.57938 12.7564 0.666748 8 0.666748ZM8 2.26675C10.0619 2.26675 11.7333 3.93821 11.7333 6.00008C11.7333 8.06195 10.0619 9.73341 8 9.73341C5.93813 9.73341 4.26667 8.06195 4.26667 6.00008C4.26667 3.93821 5.93813 2.26675 8 2.26675ZM8 4.40008C7.57565 4.40008 7.16869 4.56865 6.86863 4.86871C6.56857 5.16877 6.4 5.57573 6.4 6.00008C6.4 6.42443 6.56857 6.83139 6.86863 7.13145C7.16869 7.43151 7.57565 7.60008 8 7.60008C8.42435 7.60008 8.83131 7.43151 9.13137 7.13145C9.43143 6.83139 9.6 6.42443 9.6 6.00008C9.6 5.57573 9.43143 5.16877 9.13137 4.86871C8.83131 4.56865 8.42435 4.40008 8 4.40008Z",fill:"#2B5CA8"}})])]),t._v(" "),e("span",[t._v(t._s(t.$t("see")))])]),t._v(" "),null!=data.item.link?e("a",{staticClass:"d-block",staticStyle:{"min-width":"92px"},attrs:{href:data.item.link,target:"_blank"}},[e("i",[e("svg",{attrs:{width:"16",height:"12",viewBox:"0 0 55 45",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M43.2143 27.1875V36.5625C43.2143 38.8867 42.3498 40.874 40.6208 42.5244C38.8918 44.1748 36.8099 45 34.375 45H8.83929C6.40439 45 4.32245 44.1748 2.59347 42.5244C0.86449 40.874 0 38.8867 0 36.5625V12.1875C0 9.86328 0.86449 7.87598 2.59347 6.22559C4.32245 4.5752 6.40439 3.75 8.83929 3.75H30.4464C30.7329 3.75 30.9682 3.83789 31.1523 4.01367C31.3365 4.18945 31.4286 4.41406 31.4286 4.6875V6.5625C31.4286 6.83594 31.3365 7.06055 31.1523 7.23633C30.9682 7.41211 30.7329 7.5 30.4464 7.5H8.83929C7.48884 7.5 6.33278 7.95898 5.37109 8.87695C4.40941 9.79492 3.92857 10.8984 3.92857 12.1875V36.5625C3.92857 37.8516 4.40941 38.9551 5.37109 39.873C6.33278 40.791 7.48884 41.25 8.83929 41.25H34.375C35.7254 41.25 36.8815 40.791 37.8432 39.873C38.8049 38.9551 39.2857 37.8516 39.2857 36.5625V27.1875C39.2857 26.9141 39.3778 26.6895 39.5619 26.5137C39.7461 26.3379 39.9814 26.25 40.2679 26.25H42.2321C42.5186 26.25 42.7539 26.3379 42.9381 26.5137C43.1222 26.6895 43.2143 26.9141 43.2143 27.1875ZM55 1.875V16.875C55 17.3828 54.8056 17.8223 54.4169 18.1934C54.0281 18.5645 53.5677 18.75 53.0357 18.75C52.5037 18.75 52.0433 18.5645 51.6546 18.1934L46.2528 13.0371L26.2416 32.1387C26.037 32.334 25.8017 32.4316 25.5357 32.4316C25.2697 32.4316 25.0344 32.334 24.8298 32.1387L21.3309 28.7988C21.1263 28.6035 21.024 28.3789 21.024 28.125C21.024 27.8711 21.1263 27.6465 21.3309 27.4512L41.3421 8.34961L35.9403 3.19336C35.5515 2.82227 35.3571 2.38281 35.3571 1.875C35.3571 1.36719 35.5515 0.927734 35.9403 0.556641C36.3291 0.185547 36.7894 0 37.3214 0H53.0357C53.5677 0 54.0281 0.185547 54.4169 0.556641C54.8056 0.927734 55 1.36719 55 1.875Z",fill:"#2C60A8"}})])]),t._v(" "),e("span",[t._v(t._s(t.$t("link")))])]):t._e()]}}])})],1),t._v(" "),e("div",{staticClass:"pagination-wrap"},[e("b-pagination",{attrs:{"total-rows":t.total,"per-page":t.perPage,"first-number":"","last-number":"","aria-controls":"my-table"},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)])]),t._v(" "),e("div",{staticClass:"col-lg-3"},[e("div",{staticClass:"side-bar"},[e("div",{staticClass:"side-bar-nav"},[e("div",{staticClass:"side-bar-nav-head d-flex"},[t._m(1),t._v(" "),e("h6",[t._v(" "+t._s(t.$t("documents")))])]),t._v(" "),e("ul",[e("li",[e("nuxt-link",{attrs:{to:"/".concat(t.$i18n.locale,"/documents")}},[t._v("\n                    "+t._s(t.$t("documents"))+"\n                  ")])],1),t._v(" "),t._l(t.documentMenu,(function(n,r){return e("li",{key:r},[e("nuxt-link",{attrs:{to:"/".concat(t.$i18n.locale,"/documents/").concat(n.slug)}},[t._v("\n                    "+t._s(n.title)+"\n                  ")])],1)}))],2)])])])])])])}),r,!1,null,"715acfc6",null);e.default=component.exports}}]);