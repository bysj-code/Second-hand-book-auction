(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-discussershoushuji-add-or-update"],{2786:function(e,t,r){var n=r("5101");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=r("4f06").default;i("029db938",n,!0,{sourceMap:!1,shadowMode:!1})},"2fb2":function(e,t,r){"use strict";r.r(t);var n=r("c50a"),i=r.n(n);for(var a in n)"default"!==a&&function(e){r.d(t,e,(function(){return n[e]}))}(a);t["default"]=i.a},5101:function(e,t,r){var n=r("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-5dbcb18e]{min-height:calc(100vh - 44px);box-sizing:border-box}',""]),e.exports=t},c50a:function(e,t,r){"use strict";var n=r("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("a481"),r("c5f6"),r("f559"),r("ac6a"),r("28a5"),r("96cf");var i=n(r("3b8d")),a=n(r("e2b1")),s=n(r("064f")),u={data:function(){return{cross:"",ruleForm:{refid:"",userid:"",avatarurl:"",nickname:"",content:"",reply:""},user:{},ro:{refid:!1,userid:!1,avatarurl:!1,nickname:!1,content:!1,reply:!1}}},components:{wPicker:a.default,xiaEditor:s.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(t){var r,n,i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=uni.getStorageSync("nowTable"),e.next=3,this.$api.session(r);case 3:if(n=e.sent,this.user=n.data,this.ruleForm.userid=uni.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!t.id){e.next=13;break}return this.ruleForm.id=t.id,e.next=11,this.$api.info("discussershoushuji",this.ruleForm.id);case 11:n=e.sent,this.ruleForm=n.data;case 13:if(this.cross=t.cross,!t.cross){e.next=45;break}i=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(i);case 17:if((e.t1=e.t0()).done){e.next=45;break}if(a=e.t1.value,"refid"!=a){e.next=23;break}return this.ruleForm.refid=i[a],this.ro.refid=!0,e.abrupt("continue",17);case 23:if("userid"!=a){e.next=27;break}return this.ruleForm.userid=i[a],this.ro.userid=!0,e.abrupt("continue",17);case 27:if("avatarurl"!=a){e.next=31;break}return this.ruleForm.avatarurl=i[a].split(",")[0],this.ro.avatarurl=!0,e.abrupt("continue",17);case 31:if("nickname"!=a){e.next=35;break}return this.ruleForm.nickname=i[a],this.ro.nickname=!0,e.abrupt("continue",17);case 35:if("content"!=a){e.next=39;break}return this.ruleForm.content=i[a],this.ro.content=!0,e.abrupt("continue",17);case 39:if("reply"!=a){e.next=43;break}return this.ruleForm.reply=i[a],this.ro.reply=!0,e.abrupt("continue",17);case 43:e.next=17;break;case 45:this.styleChange();case 46:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),methods:{styleChange:function(){this.$nextTick((function(){}))},avatarurlTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.avatarurl="upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(){var t,r,n,i,a,s,u,o,c,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.avatarurl=uni.getStorageSync("headportrait")?uni.getStorageSync("headportrait"):"",this.ruleForm.refid){e.next=4;break}return this.$utils.msg("关联表id不能为空"),e.abrupt("return");case 4:if(this.ruleForm.userid){e.next=7;break}return this.$utils.msg("用户id不能为空"),e.abrupt("return");case 7:if(this.ruleForm.content){e.next=10;break}return this.$utils.msg("评论内容不能为空"),e.abrupt("return");case 10:if(!this.cross){e.next=26;break}if(a=uni.getStorageSync("statusColumnName"),s=uni.getStorageSync("statusColumnValue"),""==a){e.next=26;break}if(t||(t=uni.getStorageSync("crossObj")),a.startsWith("[")){e.next=22;break}for(u in t)u==a&&(t[u]=s);return o=uni.getStorageSync("crossTable"),e.next=20,this.$api.update("".concat(o),t);case 20:e.next=26;break;case 22:r=Number(uni.getStorageSync("userid")),n=t["id"],i=uni.getStorageSync("statusColumnName"),i=i.replace(/\[/,"").replace(/\]/,"");case 26:if(!n||!r){e.next=49;break}return this.ruleForm.crossuserid=r,this.ruleForm.crossrefid=n,c={page:1,limit:10,crossuserid:r,crossrefid:n},e.next=32,this.$api.list("discussershoushuji",c);case 32:if(d=e.sent,!(d.data.total>=i)){e.next=38;break}return this.$utils.msg(uni.getStorageSync("tips")),e.abrupt("return",!1);case 38:if(!this.ruleForm.id){e.next=43;break}return e.next=41,this.$api.update("discussershoushuji",this.ruleForm);case 41:e.next=45;break;case 43:return e.next=45,this.$api.add("discussershoushuji",this.ruleForm);case 45:uni.setStorageSync("discussershoushujiCleanType",!0),this.$utils.msgBack("提交成功");case 47:e.next=58;break;case 49:if(!this.ruleForm.id){e.next=54;break}return e.next=52,this.$api.update("discussershoushuji",this.ruleForm);case 52:e.next=56;break;case 54:return e.next=56,this.$api.add("discussershoushuji",this.ruleForm);case 56:uni.setStorageSync("discussershoushujiCleanType",!0),this.$utils.msgBack("提交成功");case 58:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,r=t.getFullYear(),n=t.getMonth()+1,i=t.getDate();return"start"===e?r-=60:"end"===e&&(r+=2),n=n>9?n:"0"+n,i=i>9?i:"0"+i,"".concat(r,"-").concat(n,"-").concat(i)},toggleTab:function(e){this.$refs[e].show()}}};t.default=u},ea46:function(e,t,r){"use strict";var n=r("2786"),i=r.n(n);i.a},edf2:function(e,t,r){"use strict";r.r(t);var n=r("f00c"),i=r("2fb2");for(var a in i)"default"!==a&&function(e){r.d(t,e,(function(){return i[e]}))}(a);r("ea46");var s,u=r("f0c5"),o=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,"5dbcb18e",null,!1,n["a"],s);t["default"]=o.exports},f00c:function(e,t,r){"use strict";var n,i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",{staticClass:"content"},[r("v-uni-view",{style:{minHeight:"100vh",width:"100%",padding:"0",position:"relative",background:"url(http://codegen.caihongy.cn/20221021/ae428fdc305b447f9c5f678cb644ddf9.jpg) no-repeat center top / 100% 100%,#3e4cc6",height:"100%"}},[r("v-uni-form",{staticClass:"app-update-pv",style:{width:"100%",padding:"24rpx",background:"none",display:"block",height:"auto"}},[r("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#846cc1",alignItems:"flex-start",borderWidth:"0 0 2rpx 0",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#dfddef",textAlign:"right"}},[e._v("评论内容")]),r("v-uni-textarea",{style:{border:"0",minHeight:"240rpx",padding:"24rpx",margin:"0px",color:"#dfddef",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{placeholder:"评论内容"},model:{value:e.ruleForm.content,callback:function(t){e.$set(e.ruleForm,"content",t)},expression:"ruleForm.content"}})],1),r("v-uni-view",{staticClass:"btn",style:{width:"100%",justifyContent:"center",display:"flex",height:"auto"}},[r("v-uni-button",{staticClass:"bg-red",style:{border:"2rpx solid #f99203",padding:"0px",boxShadow:"2rpx 4rpx 8rpx #624b69",margin:"0 4% 0 0",color:"rgb(255, 255, 255)",borderRadius:"16rpx",background:"-webkit-linear-gradient(top,#ebb270,#f99203)",width:"28%",lineHeight:"80rpx",fontSize:"28rpx",height:"80rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1)],1)],1)},a=[];r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return a})),r.d(t,"a",(function(){return n}))}}]);