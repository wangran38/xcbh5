(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/MyPoints-records/MyPoints-records"],{1903:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.pageData,(function(e,n){var a=t.__get_orig(e),r=t.formatDate(e.Created);return{$orig:a,m0:r}})));t.$mp.data=Object.assign({},{$root:{l0:n}})},r=[]},3244:function(t,e,n){"use strict";n.r(e);var a=n("1903"),r=n("998d");for(var u in r)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(u);n("e9e3");var c=n("828b"),o=Object(c["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);e["default"]=o.exports},"45ff":function(t,e,n){"use strict";(function(t,e){var a=n("47a9");n("2864");a(n("3240"));var r=a(n("3244"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(r.default)}).call(this,n("3223")["default"],n("df3c")["createPage"])},"8e36":function(t,e,n){},"998d":function(t,e,n){"use strict";n.r(e);var a=n("cc93"),r=n.n(a);for(var u in a)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(u);e["default"]=r.a},cc93:function(t,e,n){"use strict";(function(t){var a=n("47a9");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("7eb4")),u=a(n("ee10")),c=n("6213"),o=a(n("578c")),i={data:function(){return{pageData:[]}},onShow:function(){this.reloadData()},mixins:[o.default],methods:{fetchData:function(t){return(0,u.default)(r.default.mark((function e(){var n;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c.api.scorelist(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))()},formatPhoneNumber:function(t){return t?t.replace(/(\d{3})\d{4}(\d{4})/,"$1****$2"):""},formatDate:function(t){return t.replace(/T/," ").replace(/(\+\d{2}:\d{2})/,"")},gotojackpot:function(){t.navigateTo({url:"/pages/jackpot/jackpot"})}}};e.default=i}).call(this,n("df3c")["default"])},e9e3:function(t,e,n){"use strict";var a=n("8e36"),r=n.n(a);r.a}},[["45ff","common/runtime","common/vendor"]]]);