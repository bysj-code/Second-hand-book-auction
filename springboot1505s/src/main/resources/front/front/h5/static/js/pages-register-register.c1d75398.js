(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-register-register"],{"12e8":function(e,t,i){"use strict";var r=i("a95b"),n=i.n(r);n.a},3735:function(e,t,i){"use strict";i.r(t);var r=i("ab2c"),n=i("48c7");for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);i("12e8");var s,u=i("f0c5"),o=Object(u["a"])(n["default"],r["b"],r["c"],!1,null,"19bbabbc",null,!1,r["a"],s);t["default"]=o.exports},"48c7":function(e,t,i){"use strict";i.r(t);var r=i("4e2d"),n=i.n(r);for(var a in r)"default"!==a&&function(e){i.d(t,e,(function(){return r[e]}))}(a);t["default"]=n.a},"4e2d":function(e,t,i){"use strict";var r=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("28a5"),i("96cf");var n=r(i("3b8d")),a={data:function(){return{xueshengxingbieOptions:[],xueshengxingbieIndex:0,ruleForm:{xuehao:"",xingming:"",mima:"",xingbie:"",shouji:"",touxiang:"",money:""},tableName:""}},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:[],t=uni.getStorageSync("loginTable"),this.tableName=t,"xuesheng"==this.tableName&&(this.xueshengxingbieOptions="男,女".split(","),this.ruleForm.xingbie=this.xueshengxingbieOptions[0]),this.styleChange();case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{xueshengxingbieChange:function(e){this.xueshengxingbieIndex=e.target.value,this.ruleForm.xingbie=this.xueshengxingbieOptions[this.xueshengxingbieIndex]},xueshengtouxiangTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.touxiang="upload/"+t.file,e.$forceUpdate()}))},toggleTab:function(e){this.$refs[e].show()},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.xuehao||"xuesheng"!=this.tableName){e.next=3;break}return this.$utils.msg("学号不能为空"),e.abrupt("return");case 3:if(this.ruleForm.xingming||"xuesheng"!=this.tableName){e.next=6;break}return this.$utils.msg("姓名不能为空"),e.abrupt("return");case 6:if(this.ruleForm.mima||"xuesheng"!=this.tableName){e.next=9;break}return this.$utils.msg("密码不能为空"),e.abrupt("return");case 9:if("xuesheng"!=this.tableName||this.ruleForm.mima==this.ruleForm.mima2){e.next=12;break}return this.$utils.msg("两次密码输入不一致"),e.abrupt("return");case 12:if("xuesheng"!=this.tableName||!this.ruleForm.shouji||this.$validate.isMobile(this.ruleForm.shouji)){e.next=15;break}return this.$utils.msg("手机应输入手机格式"),e.abrupt("return");case 15:if("xuesheng"!=this.tableName||!this.ruleForm.money||this.$validate.isNumber(this.ruleForm.money)){e.next=18;break}return this.$utils.msg("余额应输入数字"),e.abrupt("return");case 18:return e.next=20,this.$api.register("".concat(this.tableName),this.ruleForm);case 20:this.$utils.msgBack("注册成功");case 22:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}};t.default=a},"847f":function(e,t,i){var r=i("24fb");t=r(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-19bbabbc]{min-height:calc(100vh - 44px);box-sizing:border-box}',""]),e.exports=t},a95b:function(e,t,i){var r=i("847f");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var n=i("4f06").default;n("15f2fb5a",r,!0,{sourceMap:!1,shadowMode:!1})},ab2c:function(e,t,i){"use strict";var r,n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"box",style:{minHeight:"100vh",width:"100%",padding:"0px 0px 144rpx 0px",backgroundSize:"100% auto",background:"url(http://codegen.caihongy.cn/20221020/26acea76d8de4e2a98db762b8307b82f.jpg) #b589f3 no-repeat center bottom",height:"100%"}},[i("v-uni-view",{style:{width:"100%",padding:"0",display:"block",height:"auto"}},[i("v-uni-image",{style:{width:"100%",margin:"0 0 48rpx 0",borderRadius:"0",display:"block",height:"auto"},attrs:{src:"http://codegen.caihongy.cn/20221021/e229e80f4ed04f5fb9933f2f2b7a090d.jpg",mode:"aspectFill"}}),"xuesheng"==e.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{width:"calc(100% - 96rpx)",margin:"24rpx 48rpx",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{border:"2rpx solid #ffaa33",padding:"0px 24rpx",boxShadow:"inset 0px 0px 80rpx 0px #f9bc67",margin:"0px",color:"#9513bb",borderRadius:"8rpx",background:"rgb(255, 255, 255)",width:"100%",fontSize:"28rpx",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"学号"},model:{value:e.ruleForm.xuehao,callback:function(t){e.$set(e.ruleForm,"xuehao",t)},expression:"ruleForm.xuehao"}})],1):e._e(),"xuesheng"==e.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{width:"calc(100% - 96rpx)",margin:"24rpx 48rpx",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{border:"2rpx solid #ffaa33",padding:"0px 24rpx",boxShadow:"inset 0px 0px 80rpx 0px #f9bc67",margin:"0px",color:"#9513bb",borderRadius:"8rpx",background:"rgb(255, 255, 255)",width:"100%",fontSize:"28rpx",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"姓名"},model:{value:e.ruleForm.xingming,callback:function(t){e.$set(e.ruleForm,"xingming",t)},expression:"ruleForm.xingming"}})],1):e._e(),"xuesheng"==e.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{width:"calc(100% - 96rpx)",margin:"24rpx 48rpx",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{border:"2rpx solid #ffaa33",padding:"0px 24rpx",boxShadow:"inset 0px 0px 80rpx 0px #f9bc67",margin:"0px",color:"#9513bb",borderRadius:"8rpx",background:"rgb(255, 255, 255)",width:"100%",fontSize:"28rpx",height:"88rpx"},attrs:{type:"password",name:"",placeholder:"密码"},model:{value:e.ruleForm.mima,callback:function(t){e.$set(e.ruleForm,"mima",t)},expression:"ruleForm.mima"}})],1):e._e(),"xuesheng"==e.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{width:"calc(100% - 96rpx)",margin:"24rpx 48rpx",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{border:"2rpx solid #ffaa33",padding:"0px 24rpx",boxShadow:"inset 0px 0px 80rpx 0px #f9bc67",margin:"0px",color:"#9513bb",borderRadius:"8rpx",background:"rgb(255, 255, 255)",width:"100%",fontSize:"28rpx",height:"88rpx"},attrs:{type:"password",name:"",placeholder:"确认密码"},model:{value:e.ruleForm.mima2,callback:function(t){e.$set(e.ruleForm,"mima2",t)},expression:"ruleForm.mima2"}})],1):e._e(),"xuesheng"==e.tableName?i("v-uni-picker",{style:{border:"2rpx solid #ffaa33",padding:"0px 24rpx",boxShadow:"inset 0px 0px 80rpx 0px #f9bc67",margin:"24rpx 48rpx",borderRadius:"8rpx",background:"#fff",width:"calc(100% - 96rpx)",height:"auto"},attrs:{value:e.xueshengxingbieIndex,range:e.xueshengxingbieOptions},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.xueshengxingbieChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input",style:{width:"100%",lineHeight:"88rpx",fontSize:"28rpx",color:"#9f65b0"}},[e._v(e._s(e.ruleForm.xingbie?e.ruleForm.xingbie:"请选择性别"))])],1):e._e(),"xuesheng"==e.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{width:"calc(100% - 96rpx)",margin:"24rpx 48rpx",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{border:"2rpx solid #ffaa33",padding:"0px 24rpx",boxShadow:"inset 0px 0px 80rpx 0px #f9bc67",margin:"0px",color:"#9513bb",borderRadius:"8rpx",background:"rgb(255, 255, 255)",width:"100%",fontSize:"28rpx",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"手机"},model:{value:e.ruleForm.shouji,callback:function(t){e.$set(e.ruleForm,"shouji",t)},expression:"ruleForm.shouji"}})],1):e._e(),"xuesheng"==e.tableName?i("v-uni-view",{style:{width:"calc(100% - 96rpx)",margin:"24rpx 48rpx",height:"auto"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.xueshengtouxiangTap.apply(void 0,arguments)}}},[i("v-uni-view",[e._v("请上传头像")]),e.ruleForm.touxiang?i("v-uni-image",{staticClass:"avator",style:{width:"160rpx",borderRadius:"16rpx",display:"block",height:"160rpx"},attrs:{src:e.baseUrl+e.ruleForm.touxiang,mode:""}}):i("v-uni-image",{staticClass:"avator",style:{width:"160rpx",borderRadius:"16rpx",display:"block",height:"160rpx"},attrs:{src:"../../static/gen/upload.png",mode:""}})],1):e._e(),i("v-uni-button",{staticClass:"btn-submit",style:{border:"0",padding:"0",boxShadow:"0 0 0px #ccc",margin:"24rpx 48rpx 24rpx 48rpx",color:"#a848c4",borderRadius:"8rpx",background:"url(http://codegen.caihongy.cn/20221021/f443eadb2bf44cc186b596bf089b941f.png) no-repeat center",width:"calc(100% - 96rpx)",letterSpacing:"8rpx",lineHeight:"88rpx",fontSize:"32rpx",height:"88rpx"},attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.register.apply(void 0,arguments)}}},[e._v("注册")])],1)],1)],1)},a=[];i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return r}))}}]);