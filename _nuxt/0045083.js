(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{505:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNyIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDcgMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAuNTI4NjM2IDAuODYyMDFDMC4yNjgyODcgMS4xMjIzNiAwLjI2ODI4NyAxLjU0NDQ3IDAuNTI4NjM2IDEuODA0ODJMNC43MjM5IDYuMDAwMDhMMC41Mjg2MzcgMTAuMTk1M0MwLjI2ODI4NyAxMC40NTU3IDAuMjY4Mjg3IDEwLjg3NzggMC41Mjg2MzcgMTEuMTM4MkMwLjc4ODk4NiAxMS4zOTg1IDEuMjExMSAxMS4zOTg1IDEuNDcxNDUgMTEuMTM4Mkw2LjEzODExIDYuNDcxNDlDNi4zOTg0NiA2LjIxMTE0IDYuMzk4NDYgNS43ODkwMyA2LjEzODExIDUuNTI4NjhMMS40NzE0NSAwLjg2MjAxQzEuMjExMSAwLjYwMTY2MSAwLjc4ODk4NiAwLjYwMTY2MSAwLjUyODYzNiAwLjg2MjAxWiIgZmlsbD0iI0I0QkRDMSIvPg0KPC9zdmc+DQo="},506:function(t,e,n){t.exports=n.p+"img/footer-logo.21583fe.svg"},510:function(t,e,n){t.exports=n.p+"img/app-list.6e27ffe.svg"},514:function(t,e,n){"use strict";n(18),n(16),n(19),n(20);var r=n(2),o=n(17),c=(n(46),n(85),n(56),n(39),n(34),n(10),n(15),n(14),n(102),n(120),n(100));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={name:"Map",data:function(){return{type:"all",keywords:"",selectDepartment:{title:"",headDepartment:"",phone:"",email:"",receptionDays:"",address:""},showSearchResults:!1,showResultsInfo:!1,map:void 0,branches:{}}},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("map/fetchDepartment");case 2:ymaps.ready(t.init),setTimeout((function(){t.drawBranches()}),1e3);case 4:case"end":return e.stop()}}),e)})))()},methods:{setActive:function(t){this.type=t},setSelectDepartment:function(t){var e=this;this.selectDepartment.title=t.title,this.selectDepartment.headDepartment=t.leader.name,this.selectDepartment.phone=t.phone_number,this.selectDepartment.email=t.email,this.selectDepartment.receptionDays=t.leader.reception_days,this.selectDepartment.address=t.address;var n={lat:t.lat,long:t.long};console.log(n),this.map.setCenter([t.lat,t.long],15,{duration:600}).then((function(){e.branches[t.id].balloon.open()}))},init:function(){this.map=new ymaps.Map("map",{center:["41.349941793265764","69.27721515307616"],zoom:6,controls:["smallMapDefaultSet"],behaviors:["drag","dblClickZoom","rightMouseButtonMagnifier","multiTouch"]})},drawPlacemark:function(t){var e=t.leader.name.length?"<li><span>Boshqarma boshligʻi:</span><b>".concat(t.leader.name,"</b></li>"):"",n=t.phone_number.length?"<li><span>Telefon:</span><b>".concat(t.phone_number,"</b></li>"):"",body='\n          <div class="search-results-info">\n          <div class="info-head d-flex align-items-center">\n            <i>\n              <svg width="36" height="40" viewBox="0 0 36 40" fill="none" xmlns="http://www.w3.org/2000/svg">\n                <path\n                  d="M22.3125 0.833374C23.0403 0.833374 23.6417 1.37417 23.7369 2.07581L23.75 2.27087V6.58337H33.8125C34.6064 6.58337 35.25 7.22696 35.25 8.02087V37.7292C35.25 38.5231 34.6064 39.1667 33.8125 39.1667H28.0625C27.2686 39.1667 26.625 38.5231 26.625 37.7292V32.4584H22.7917V37.7292C22.7917 38.5231 22.1481 39.1667 21.3542 39.1667H15.6042C14.8103 39.1667 14.1667 38.5231 14.1667 37.7292V8.02087C14.1667 7.22696 14.8103 6.58337 15.6042 6.58337H20.875V3.70837H3.625V37.7292C3.625 38.5231 2.98141 39.1667 2.1875 39.1667C1.45975 39.1667 0.858309 38.6259 0.763123 37.9243L0.75 37.7292V2.27087C0.75 1.54312 1.29079 0.941683 1.99244 0.846497L2.1875 0.833374H22.3125ZM32.375 9.45837H17.0417V36.2917H19.9167V31.0209C19.9167 30.227 20.5603 29.5834 21.3542 29.5834H28.0625C28.8564 29.5834 29.5 30.227 29.5 31.0209V36.2917H32.375V9.45837ZM10.3333 29.5834V33.4167H6.5V29.5834H10.3333ZM23.75 23.8334V27.6667H19.9167V23.8334H23.75ZM29.5 23.8334V27.6667H25.6667V23.8334H29.5ZM10.3333 23.8334V27.6667H6.5V23.8334H10.3333ZM23.75 18.0834V21.9167H19.9167V18.0834H23.75ZM29.5 18.0834V21.9167H25.6667V18.0834H29.5ZM10.3333 18.0834V21.9167H6.5V18.0834H10.3333ZM10.3333 12.3334V16.1667H6.5V12.3334H10.3333ZM23.75 12.3334V16.1667H19.9167V12.3334H23.75ZM29.5 12.3334V16.1667H25.6667V12.3334H29.5ZM10.3333 6.58337V10.4167H6.5V6.58337H10.3333Z"\n                  fill="#212121"/>\n              </svg>\n            </i>\n            <h6>'.concat(t.title,"</h6>\n          </div>\n\n          <ul>")+e+n+"<li>\n              <span>E-mail:</span>\n              <b>".concat(t.email,"</b>\n            </li>\n            <li>\n              <span>Qabul kunlari:</span>\n              <b>").concat(t.receptionDays,"</b>\n            </li>\n            <li>\n              <span>Boshqarma boshligʻi:</span>\n              <b>").concat(t.headDepartment,"</b>\n            </li>\n            <li>\n              <span>Адрес:</span>\n              <b>").concat(t.address,"</b>\n            </li>\n          </ul>\n\n        </div>"),r=new ymaps.Placemark([t.lat,t.long],{balloonContentBody:body});return this.map.geoObjects.add(r),r},drawBranches:function(){var t=this;this.searchFiltered.forEach((function(e){t.branches[e.id]=t.drawPlacemark(e)}))}},computed:d(d({},Object(c.b)({department:function(t){return t.map.department}})),{},{data:function(){},categoryFiltered:function(){return"department"===this.type?this.department.filter((function(t){return"department"===t.type})):"organization"===this.type?this.department.filter((function(t){return"organization"===t.type})):this.department},searchFiltered:function(){var t=this;return this.keywords.length?(this.showSearchResults=!0,this.categoryFiltered.filter((function(e){var n=t.keywords.toLowerCase();return!(n.length>0)||e.title.toLowerCase().includes(n)}))):this.categoryFiltered}})},v=n(84),component=Object(v.a)(m,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"map-section"},[e("div",{staticClass:"info-map"},[e("div",{staticClass:"info-map__header"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 info-map__header-col"},[e("div",{staticClass:"left d-flex align-items-center"},[e("div",{staticClass:"info-map__search-box"},[e("button",{staticClass:"btn info-map__list-btn",on:{click:function(e){t.showSearchResults=!t.showSearchResults}}},[e("img",{attrs:{src:n(510),alt:"List"}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.keywords,expression:"keywords"}],staticClass:"input input--dark info-map__search-input",attrs:{type:"text",placeholder:t.$t("search_by_organization_name")},domProps:{value:t.keywords},on:{input:function(e){e.target.composing||(t.keywords=e.target.value)}}}),t._v(" "),e("button",{staticClass:"btn"},[e("svg",{attrs:{width:"19",height:"19",viewBox:"0 0 19 19",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M8 0.75C12.0041 0.75 15.25 3.99594 15.25 8C15.25 9.73187 14.6427 11.3219 13.6295 12.5688L18.5303 17.4697C18.8232 17.7626 18.8232 18.2374 18.5303 18.5303C18.2641 18.7966 17.8474 18.8208 17.5538 18.6029L17.4697 18.5303L12.5688 13.6295C11.3219 14.6427 9.73187 15.25 8 15.25C3.99594 15.25 0.75 12.0041 0.75 8C0.75 3.99594 3.99594 0.75 8 0.75ZM8 2.25C4.82436 2.25 2.25 4.82436 2.25 8C2.25 11.1756 4.82436 13.75 8 13.75C11.1756 13.75 13.75 11.1756 13.75 8C13.75 4.82436 11.1756 2.25 8 2.25Z",fill:"white"}})])])]),t._v(" "),e("div",{staticClass:"search-results",class:t.showSearchResults?"active":""},[e("ul",{},t._l(t.searchFiltered,(function(n,r){return e("li",[e("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.setSelectDepartment(n)}}},[t._v(t._s(n.title))])])})),0)])]),t._v(" "),e("nav",{staticClass:"info-map__nav"},[e("ul",[e("li",[e("button",{class:"all"===t.type?"active":"",on:{click:function(e){return t.setActive("all")}}},[t._v(t._s(t.$t("map_all")))])]),t._v(" "),e("li",[e("button",{class:"department"===t.type?"active":"",on:{click:function(e){return t.setActive("department")}}},[t._v(t._s(t.$t("regional_offices"))+"\n                    ")])]),t._v(" "),e("li",[e("button",{class:"organization"===t.type?"active":"",on:{click:function(e){return t.setActive("organization")}}},[t._v(t._s(t.$t("organization")))])])])])])])])])]),t._v(" "),t._m(0)])])}),[function(){var t=this._self._c;return t("div",{staticClass:"info-map__body"},[t("div",{attrs:{id:"map"}})])}],!1,null,"e538f2ba",null);e.a=component.exports},650:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this._self._c;return t("i",{staticClass:"ico d-flex align-items-center justify-content-center"},[t("img",{attrs:{src:n(505),alt:""}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"side-bar-nav-head d-flex"},[e("i",[e("img",{attrs:{src:n(506),alt:""}})]),t._v(" "),e("h6",[t._v(" Bog‘lanish")])])}],o=(n(18),n(16),n(14),n(19),n(15),n(20),n(63)),c=n(2),l=n(17),d=(n(46),n(10),n(34),n(39),n(514)),m=n(100);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _={name:"feedback",data:function(){return{form:{email:"",sender_name:"",type:null,message:""},complaints:[{text:this.$t("type_of_application"),value:null}],show:!0,error:!1}},methods:{onSubmit:function(t){var e=this;return Object(l.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),n.prev=1,n.next=4,e.$recaptcha.getResponse();case 4:return n.sent,n.next=7,e.$recaptcha.reset();case 7:e.preloader=!0,e.$axios.post("contact/",e.form).then((function(){e.show=!1})).finally((function(){console.log(1),e.preloader=!1})).catch((function(t){})),n.next=13;break;case 11:n.prev=11,n.t0=n.catch(1);case 13:case"end":return n.stop()}}),n,null,[[1,11]])})))()},onError:function(t){this.error=!0},onSuccess:function(t){this.error=!1},onExpired:function(){console.log("Expired")}},components:{Map:d.a},mounted:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("contacts/fetchSiteContact");case 2:return e.next=4,t.$store.dispatch("contacts/fetchApplications");case 4:case"end":return e.stop()}}),e)})))()},computed:f(f({},Object(m.b)({siteContact:function(t){return t.contacts.siteContact},applications:function(t){return t.contacts.applications}})),{},{allApplications:function(){return[].concat(Object(o.a)(this.complaints),Object(o.a)(this.applications.map((function(t){return{text:t.title}}))))}})},h=n(84),component=Object(h.a)(_,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"page form-page"},[e("div",{staticClass:"breadcrumbs"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("ul",[e("li",[e("nuxt-link",{attrs:{to:"/".concat(t.$i18n.locale)}},[t._v("\n                  "+t._s(t.$t("home"))+"\n                ")]),t._v(" "),t._m(0)],1),t._v(" "),e("li",[t._v(t._s(t.$t("feedback")))])])])])])]),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-9"},[e("div",{staticClass:"inner"},[e("h1",{staticClass:"title"},[t._v(t._s(t.$t("feedback")))]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-wrap"},[t.show?e("b-form",{on:{submit:t.onSubmit}},[e("b-form-group",{attrs:{id:"input-group-1",label:t.$t("full_namee"),"label-for":"input-1"}},[e("b-form-input",{attrs:{id:"input-1",type:"text",required:"",placeholder:t.$t("ffill_in_your_full_name")},model:{value:t.form.sender_name,callback:function(e){t.$set(t.form,"sender_name",e)},expression:"form.sender_name"}})],1),t._v(" "),e("b-form-group",{attrs:{id:"input-group-2",label:t.$t("emaill"),"label-for":"input-2"}},[e("b-form-input",{attrs:{id:"input-2",required:"",placeholder:"user@service.com"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),t._v(" "),t.allApplications.length?e("b-form-group",{attrs:{id:"input-group-3",label:t.$t("statement_type"),"label-for":"input-3"}},[e("b-form-select",{attrs:{id:"input-3",options:t.allApplications,required:""},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}}),t._v(" "),e("span",{staticClass:"ico"},[e("svg",{attrs:{width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.51849 5.22825C5.7203 6.15944 4.2797 6.15944 3.48151 5.22825L0.415023 1.6508C-0.140998 1.00213 0.319907 0 1.17427 0L8.82573 0C9.68009 0 10.141 1.00213 9.58498 1.6508L6.51849 5.22825Z",fill:"black"}})])])],1):t._e(),t._v(" "),e("b-form-group",{attrs:{id:"textarea",label:t.$t("detailed_description"),"label-for":"textarea",description:t.$t("words_500")}},[e("b-form-textarea",{attrs:{id:"textarea",required:""},model:{value:t.form.message,callback:function(e){t.$set(t.form,"message",e)},expression:"form.message"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[e("client-only",[e("recaptcha",{on:{error:t.onError,success:t.onSuccess,expired:t.onExpired}})],1),t._v(" "),t.error?e("span",{staticClass:"error"},[t._v("\n                        "+t._s(t.$t("сonfirm_you_are_not_a_robot"))+"\n                      ")]):t._e()],1),t._v(" "),e("b-button",{attrs:{type:"submit",variant:"btn btn-blue"}},[t._v(" "+t._s(t.$t("send")))])],1):e("div",{staticClass:"successfully-sent"},[e("h4",[t._v(t._s(t.$t("feedback_successfully_sent")))])])],1)]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"text"},[e("ul",[e("li",[e("span",[t._v(t._s(t.$t("address")))]),e("b",[t._v(t._s(t.siteContact.address))])]),t._v(" "),e("li",[e("span",[t._v(t._s(t.$t("e_mail"))+":")]),e("b",[e("a",{attrs:{href:"mailto:".concat(t.siteContact.email)}},[t._v(t._s(t.siteContact.email))])])]),t._v(" "),e("li",[e("span",[t._v(t._s(t.$t("phone")))]),e("b",[e("a",{attrs:{href:"tel:".concat(t.siteContact.phone_number)}},[t._v(t._s(t.siteContact.phone_number))])])])]),t._v(" "),e("hr"),t._v(" "),e("ul",[e("li",[e("span",[t._v(t._s(t.$t("buses"))+":")]),e("b",[t._v("№ "+t._s(t.siteContact.buses))])]),t._v(" "),e("li",[e("span",[t._v(t._s(t.$t("shuttle_taxi"))+":")]),e("b",[t._v(t._s(t.siteContact.mini_buses))])]),t._v(" "),e("li",[e("span",[t._v(t._s(t.$t("bus_stopp"))+":")]),e("b",[t._v(t._s(t.siteContact.bus_station))])]),t._v(" "),e("li",[e("span",[t._v(t._s(t.$t("nearest_metro_station"))+":")]),e("b",[t._v(t._s(t.siteContact.metro_station))])]),t._v(" "),e("li",[e("span",[t._v(t._s(t.$t("wworking_days"))+":")]),e("b",[t._v(t._s(t.siteContact.working_days))])]),t._v(" "),e("li",[e("span",[t._v(t._s(t.$t("working_hours"))+":")]),e("b",[t._v(t._s(t.siteContact.working_hours)+" (13:00-14:00 "+t._s(t.$t("lunch"))+")")])])])])])])])]),t._v(" "),e("div",{staticClass:"col-lg-3"},[e("div",{staticClass:"side-bar"},[e("div",{staticClass:"side-bar-nav"},[t._m(1),t._v(" "),e("ul",[e("li",[e("nuxt-link",{attrs:{to:"/".concat(t.$i18n.locale,"/contacts")}},[t._v("Qayta aloqa")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/".concat(t.$i18n.locale,"/contacts/opinion")}},[t._v("Mening fikrim")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/".concat(t.$i18n.locale,"/contacts/reception")}},[t._v("Fuqarolar qabuli")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/".concat(t.$i18n.locale,"/contacts/vacancies")}},[t._v("Bo‘sh ish o‘rinlari")])],1)])])])])])])]),t._v(" "),e("Map")],1)}),r,!1,null,"7f00bbc7",null);e.default=component.exports}}]);