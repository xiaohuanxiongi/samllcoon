(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{241:function(t,n,e){var content=e(246);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(122).default)("67cb6878",content,!0,{sourceMap:!1})},245:function(t,n,e){"use strict";e(241)},246:function(t,n,e){var o=e(121)(!1);o.push([t.i,".warp header[data-v-57b1d5c9]{height:60px;background-color:hsla(0,0%,100%,.5);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px);position:fixed;top:0}.warp header.navOn[data-v-57b1d5c9]{transform:translateZ(0)}.warp header.navOff[data-v-57b1d5c9],.warp header.navOn[data-v-57b1d5c9]{position:fixed;top:0;left:0;right:0;transition:all .2s ease-in-out .2s}.warp header.navOff[data-v-57b1d5c9]{transform:translate3d(0,-100%,0)}.warp .body[data-v-57b1d5c9]{height:3000px;background-color:#48dbfb;margin-top:60px}",""]),t.exports=o},255:function(t,n,e){"use strict";e.r(n);var o={name:"HomeIndex",data:function(){return{title:"测试滚动头部",des:"内容爱仕达卡",navShow:!1,top:0}},head:function(){return{title:this.title,meta:[{hid:"keywords",name:"keywords",content:"nuxt,小浣熊,ssr"},{hid:"description",name:"description",content:"网页描述"}]}},watch:{top:function(t,n){t>100&&(t>n?(this.navShow=!1,console.log("向上滚动")):(this.navShow=!0,console.log("向下滚动")))}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){t.top=document.documentElement.scrollTop||document.body.scrollTop||window.pageYOffset}))}},r=(e(245),e(31)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"warp"},[e("header",{class:t.navShow?"navOn":"navOff"},[t._v("\n    表头\n  ")]),t._v(" "),e("div",{staticClass:"body"},[t._v("\n    内容\n  ")])])}),[],!1,null,"57b1d5c9",null);n.default=component.exports}}]);