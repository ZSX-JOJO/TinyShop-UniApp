(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/sales-return"],{"0351":function(n,e,t){"use strict";t.r(e);var r=t("9492"),u=t("8f3b");for(var i in u)"default"!==i&&function(n){t.d(e,n,(function(){return u[n]}))}(i);t("9a08");var o=t("2877"),a=Object(o["a"])(u["default"],r["a"],r["b"],!1,null,null,null);e["default"]=a.exports},"43f8":function(n,e,t){"use strict";(function(n){t("6cdc"),t("921b");r(t("66fd"));var e=r(t("0351"));function r(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("6e42")["createPage"])},"5fad":function(n,e,t){},"8f3b":function(n,e,t){"use strict";t.r(e);var r=t("ac45"),u=t.n(r);for(var i in r)"default"!==i&&function(n){t.d(e,n,(function(){return r[n]}))}(i);e["default"]=u.a},9492:function(n,e,t){"use strict";var r=function(){var n=this,e=n.$createElement;n._self._c},u=[];t.d(e,"a",(function(){return r})),t.d(e,"b",(function(){return u}))},"9a08":function(n,e,t){"use strict";var r=t("5fad"),u=t.n(r);u.a},ac45:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(t("a34a")),u=t("802d");function i(n){return n&&n.__esModule?n:{default:n}}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){c(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function s(n,e,t,r,u,i,o){try{var a=n[i](o),c=a.value}catch(s){return void t(s)}a.done?e(c):Promise.resolve(c).then(r,u)}function f(n){return function(){var e=this,t=arguments;return new Promise((function(r,u){var i=n.apply(e,t);function o(n){s(i,r,u,o,a,"next",n)}function a(n){s(i,r,u,o,a,"throw",n)}o(void 0)}))}}var d=function(){return t.e("components/uni-icons/uni-icons").then(t.bind(null,"2ba4"))},l={components:{uniIcons:d},data:function(){return{productInfo:{},token:null,salesReturn:{id:void 0,refund_shipping_code:void 0,refund_shipping_company:void 0}}},onLoad:function(n){this.initData(n)},methods:{initData:function(n){this.productInfo=JSON.parse(n.data)},handleRefundShippingCompanyChange:function(n){this.salesReturn.refund_shipping_company=n.detail.value},handleRefundShippingCodeChange:function(n){this.salesReturn.refund_shipping_code=n.detail.value},handleSalesReturn:function(){var e=f(r.default.mark((function e(){var t;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.salesReturn.id=this.productInfo.id,this.salesReturn.refund_shipping_company){e.next=4;break}return this.$api.msg("请输入物流公司"),e.abrupt("return");case 4:if(void 0!==!this.salesReturn.refund_shipping_code){e.next=7;break}return this.$api.msg("请输入物流单号"),e.abrupt("return");case 7:return n.showLoading({title:"加载中..."}),t=u.orderProductSalesReturn,4==this.productInfo.order_status&&(t=u.orderCustomerSalesReturn),e.next=12,this.$post("".concat(t),a({},this.salesReturn)).then((function(){n.navigateBack({delta:2})}));case 12:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}};e.default=l}).call(this,t("6e42")["default"])}},[["43f8","common/runtime","common/vendor"]]]);