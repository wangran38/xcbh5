(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-edit-user-edit"],{"0d91":function(t,e,i){var n=i("c86c");e=n(!1),e.push([t.i,".me-container[data-v-09b5103f]{overflow:hidden;width:100%;box-sizing:border-box;padding:%?0?% %?40?% 0 %?40?%;color:#fff;z-index:1;background-color:#f8f8f8;display:flex;flex-direction:column;justify-content:center}.content[data-v-09b5103f]{height:%?500?%;display:flex;flex-direction:column;background-color:#fff;color:#000;padding:%?20?%;flex:5}.name[data-v-09b5103f],\n.phone[data-v-09b5103f],\n.sex[data-v-09b5103f],\n.avatar[data-v-09b5103f]{flex:1;display:flex;flex-direction:row;align-items:center;justify-content:space-between}.name-item[data-v-09b5103f]{height:%?100?%;width:50%;display:flex;flex-direction:row;justify-content:center;align-items:center\n\t/* background-color: aqua; */}.avatar-box[data-v-09b5103f]{height:%?100?%;width:%?100?%;display:flex;flex-direction:row;justify-content:center;align-items:center;box-sizing:border-box\n\t/* background-color: aqua; */}.avatar-image[data-v-09b5103f]{width:100%;height:100%;object-fit:cover;border-radius:50%}.title[data-v-09b5103f]{height:%?100?%;width:%?80?%;text-align:center;line-height:%?100?%;font-size:%?34?%;color:#666}.input-text[data-v-09b5103f]{height:%?80?%;width:100%;color:#000;text-align:right;line-height:%?80?%;margin-right:%?20?%\n\t/* background-color: #007aff; */}.rigicon[data-v-09b5103f]{height:%?80?%;width:%?50?%;text-align:center;line-height:%?80?%}.submit[data-v-09b5103f]{height:%?80?%;text-align:center;line-height:%?80?%;color:#fff;font-size:%?36?%;font-weight:500;margin:%?20?% 0;background-color:#007aff;border-radius:%?20?%}.submit[disabled][data-v-09b5103f]{color:#ccc /* 提交按钮禁用时的颜色 */}",""]),t.exports=e},"22b7":function(t,e,i){"use strict";i.r(e);var n=i("b2a8"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},5721:function(t,e,i){"use strict";i.r(e);var n=i("b23c"),a=i("22b7");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("b992");var s=i("828b"),r=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"09b5103f",null,!1,n["a"],void 0);e["default"]=r.exports},"83a5":function(t,e,i){var n=i("0d91");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("967d").default;a("47b5a354",n,!0,{sourceMap:!1,shadowMode:!1})},"871e":function(t,e,i){"use strict";i("6a54");var n=i("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.useUpload=void 0;var a=n(i("2634")),o=n(i("2fdc"));i("bf0f");var s=n(i("6213"));e.useUpload=function(t){var e=t.uploadPath,i=t.tempFilePaths,n=t.FormData,r=t.file;return{upload:function(){return new Promise(function(){var t=(0,o.default)((0,a.default)().mark((function t(o,c){return(0,a.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:uni.showLoading({title:"上传中",mask:!0}),uni.uploadFile({url:s.default.UPLOAD_URL+e,name:"file",file:r,filePath:i,formData:n,header:{},success:function(t){uni.showToast({title:"上传成功"}),uni.hideLoading(),o(null===t||void 0===t?void 0:t.data)},fail:function(t){console.log(t),uni.showToast({title:"上传失败",icon:"error"}),uni.hideLoading()}});case 2:case"end":return t.stop()}}),t)})));return function(e,i){return t.apply(this,arguments)}}())}}}},b23c:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uniIcons:i("15f4").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"me-container"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"avatar"},[i("v-uni-view",{staticClass:"title"},[t._v("头像")]),i("v-uni-view",{staticClass:"avatar-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseImage.apply(void 0,arguments)}}},[i("v-uni-image",{staticClass:"avatar-image",attrs:{src:t.user.Headimgurl,mode:"aspectFill"}})],1)],1),i("v-uni-view",{staticClass:"name"},[i("v-uni-view",{staticClass:"title"},[t._v("昵称")]),i("v-uni-view",{staticClass:"name-item"},[i("v-uni-input",{staticClass:"input-text",attrs:{type:"text",placeholder:"请输入昵称"},model:{value:t.user.nickname,callback:function(e){t.$set(t.user,"nickname",e)},expression:"user.nickname"}}),i("uni-icons",{staticClass:"rigicon",attrs:{type:"right",size:"14",color:"rgb(229, 229, 229)"}})],1)],1),i("v-uni-view",{staticClass:"phone"},[i("v-uni-view",{staticClass:"title"},[t._v("电话")]),i("v-uni-view",{staticClass:"name-item"},[i("v-uni-input",{staticClass:"input-text",attrs:{type:"text",placeholder:"请输入电话"},model:{value:t.user.phone,callback:function(e){t.$set(t.user,"phone",e)},expression:"user.phone"}}),i("uni-icons",{staticClass:"rigicon",attrs:{type:"right",size:"14",color:"rgb(229, 229, 229)"}})],1)],1),i("v-uni-view",{staticClass:"sex"},[i("v-uni-view",{staticClass:"title"},[t._v("性别")]),i("v-uni-view",{staticClass:"name-item"},[i("v-uni-picker",{staticClass:"input-text",attrs:{range:t.sexOptions},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.handleSexChange.apply(void 0,arguments)}}},[t._v(t._s(t.sexOptions[t.user.sex]))]),i("uni-icons",{staticClass:"rigicon",attrs:{type:"right",size:"14",color:"rgb(229, 229, 229)"}})],1)],1),i("v-uni-button",{staticClass:"submit",attrs:{disabled:t.isSubmitting},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submitForm.apply(void 0,arguments)}}},[t._v("提交")])],1)],1)},o=[]},b2a8:function(t,e,i){"use strict";i("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("64aa"),i("bf0f");var n=i("6213"),a=i("871e"),o={data:function(){return{user:{Headimgurl:"",nickname:"",phone:"",sex:""},sexOptions:["未知","男","女"],isSubmitting:!1}},onLoad:function(){var t=this,e=uni.getStorageSync("token");e?n.api.getUserProfile(e).then((function(e){console.log("用户数据:",e.data),t.user=e.data,t.user.nickname=e.data.name,t.user.sex=t.mapSexFromBackend(e.data.sex)})).catch((function(t){console.error("获取用户数据失败",t),uni.showToast({title:"获取用户数据失败",icon:"none"})})):uni.showToast({title:"请先登录",icon:"none"})},methods:{handleSexChange:function(t){this.user.sex=Number(t.detail.value)},mapSexFromBackend:function(t){return 2===t?2:1===t?1:0},mapSexToBackend:function(t){return 2===t?2:1===t?1:0},chooseImage:function(){var t=this;uni.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(e){var i=e.tempFilePaths;if(i.length>0){console.log(i);var n=(0,a.useUpload)({uploadPath:"/group1/upload",tempFilePaths:i[0]}),o=n.upload;n.request;o().then((function(e){t.user.Headimgurl=e}))}}})},submitForm:function(){var t=this,e=uni.getStorageSync("token");e?(this.isSubmitting=!0,n.api.editUserProfile(e,this.user).then((function(t){console.log("修改成功",t),uni.showToast({title:"修改成功",icon:"success"})})).catch((function(t){console.error("修改失败",t),uni.showToast({title:"修改失败",icon:"none"})})).finally((function(){t.isSubmitting=!1}))):uni.showToast({title:"请先登录",icon:"none"})}}};e.default=o},b992:function(t,e,i){"use strict";var n=i("83a5"),a=i.n(n);a.a}}]);