(function(e){function t(t){for(var a,o,s=t[0],u=t[1],c=t[2],l=0,p=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);m&&m(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var s=n[o];0!==r[s]&&(a=!1)}a&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},o={app:0},r={app:0},i=[];function s(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"0fdc1c38"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"f5f7b560"}[e]+".css",r=u.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===a||l===r))return t()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){c=p[s],l=c.getAttribute("data-href");if(l===a||l===r)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var a=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete o[e],m.parentNode.removeChild(m),n(i)},m.href=r;var d=document.getElementsByTagName("head")[0];d.appendChild(m)})).then((function(){o[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(e);var p=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(m);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",p.name="ChunkLoadError",p.type=a,p.request=o,n[1](p)}r[e]=void 0}};var m=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var p=0;p<c.length;p++)t(c[p]);var m=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{dark:""}},[n("v-app-bar",{attrs:{app:"",color:"black",dark:""}},[n("v-img",{attrs:{src:"https://mappingcemeteries.commons.gc.cuny.edu/wp-content/blogs.dir/16656/files/2021/05/mapping-cemeteries-logo-for-header-zoomed.jpeg",height:"50","max-width":"200"},on:{click:e.goToTimeline}}),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.$vuetify.breakpoint.mdAndUp,expression:"$vuetify.breakpoint.mdAndUp"}],staticClass:"ml-auto",attrs:{small:"",plain:"",text:"",dark:"",elevation:"5",to:"/"}},[e._v("Map")]),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.$vuetify.breakpoint.smAndDown,expression:"$vuetify.breakpoint.smAndDown"}],staticClass:"ml-auto",staticStyle:{"font-size":"8px"},attrs:{"x-small":"",plain:"",text:"",dark:"",elevation:"5",to:"/"}},[e._v("Map")]),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.$vuetify.breakpoint.mdAndUp,expression:"$vuetify.breakpoint.mdAndUp"}],attrs:{small:"",plain:"",text:"",dark:"",elevation:"5",to:"/timeline"}},[e._v("Timeline")]),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.$vuetify.breakpoint.smAndDown,expression:"$vuetify.breakpoint.smAndDown"}],staticClass:"ml-auto",staticStyle:{"font-size":"8px"},attrs:{"x-small":"",plain:"",text:"",dark:"",elevation:"5",to:"/timeline"}},[e._v("Timeline")]),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.$vuetify.breakpoint.mdAndUp,expression:"$vuetify.breakpoint.mdAndUp"}],attrs:{small:"",plain:"",text:"",dark:"",elevation:"5",to:"/about"}},[e._v("About")]),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.$vuetify.breakpoint.smAndDown,expression:"$vuetify.breakpoint.smAndDown"}],staticClass:"ml-auto",staticStyle:{"font-size":"8px"},attrs:{"x-small":"",plain:"",text:"",dark:"",elevation:"5",to:"/about"}},[e._v("About")])],1),n("v-main",[n("router-view")],1),n("v-footer",{attrs:{dark:"",fixed:"",height:"auto",color:"",width:"15%"}},e._l(e.icons,(function(t,a){return n("v-btn",{key:a,attrs:{href:t.link,icon:"",target:"_blank"}},[n("v-icon",{attrs:{size:"15px"}},[e._v(e._s(t.i))])],1)})),1)],1)},r=[],i={name:"App",components:{},data:function(){return{icons:[{i:"fab fa-wordpress",link:"https://mappingcemeteries.commons.gc.cuny.edu/"},{i:"fab fa-soundcloud",link:"https://soundcloud.com/mappingcemeteries"},{i:"fab fa-facebook",link:"https://www.facebook.com/mappingcemeteriesnyc"},{i:"fab fa-instagram",link:"https://www.instagram.com/mappingcemeteries/"}]}},methods:{goToTimeline:function(){this.$router.push("/Timeline")}}},s=i,u=(n("034f"),n("2877")),c=n("6544"),l=n.n(c),p=n("7496"),m=n("40dc"),d=n("8336"),f=n("553a"),v=n("132d"),h=n("adda"),b=n("f6c4"),g=Object(u["a"])(s,o,r,!1,null,null,null),y=g.exports;l()(g,{VApp:p["a"],VAppBar:m["a"],VBtn:d["a"],VFooter:f["a"],VIcon:v["a"],VImg:h["a"],VMain:b["a"]});n("d3b7"),n("3ca3"),n("ddb0");var w=n("8c4f"),k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home",attrs:{id:"map"}})},x=[],A=(n("fb6a"),n("e192")),_=n.n(A),T={name:"home",data:function(){return{accessToken:"pk.eyJ1IjoibmFkeTE5NiIsImEiOiJjazg1em9vangwMDJpM2RvNHkydXRoOHF3In0.x7fkytbDIi9m9NIA6_MoRg"}},mounted:function(){_.a.accessToken=this.accessToken;var e=new _.a.Map({container:"map",style:"mapbox://styles/nady196/ckm009izz785t17nlcbv8tqob",center:[-73.99,40.72],zoom:12.3}),t=new _.a.Popup({offset:[0,-7],closeButton:!1,closeOnClick:!1,className:"pop-up"});e.on("load",(function(){e.on("click","map-an0td9",(function(e){var t=e.features[0].properties.Caption;window.location.href="New York Marble Cemetery"==t?"#/Historical":"African Burial Ground National Monument"==t?"#/Rediscovered":"City Hall Park"==t?"#/Park":"General Worth Monument"==t?"#/WarMemorial":"#/Hidden"})),e.on("mouseenter","map-an0td9",(function(n){console.log("hover"),e.getCanvas().style.cursor="pointer";var a=n.features[0].geometry.coordinates.slice(),o=n.features[0].properties.Caption,r=n.features[0].properties.Gravatar;console.log("lol "+n.features[0].properties.Gravatar);while(Math.abs(n.lngLat.lng-a[0])>180)a[0]+=n.lngLat.lng>a[0]?360:-360;t.setLngLat(a).setHTML("<h3>"+o+"</h3><img style=' border:2px solid black; width:100px;  display: block; margin-left: auto; margin-right: auto; height:100px;  border-radius: 50%; ' src="+r+"></img>").addTo(e)})),e.on("mouseleave","test",(function(){e.getCanvas().style.cursor="",t.remove()}))}))}},C=T,M=(n("ffcc"),Object(u["a"])(C,k,x,!1,null,"f58a906c",null)),N=M.exports;a["a"].use(w["a"]);var O=[{path:"/",name:"Home",component:N},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/timeline",name:"Timeline",component:function(){return n.e("about").then(n.bind(null,"f67a"))}},{path:"/WarMemorial",name:"WarMemorial",component:function(){return n.e("about").then(n.bind(null,"7d78"))}},{path:"/Rediscovered",name:"Rediscovered",component:function(){return n.e("about").then(n.bind(null,"b9b6"))}},{path:"/Hidden",name:"Hidden",component:function(){return n.e("about").then(n.bind(null,"8054"))}},{path:"/Park",name:"Park",component:function(){return n.e("about").then(n.bind(null,"0d26"))}},{path:"/Historical",name:"Historical",component:function(){return n.e("about").then(n.bind(null,"9719"))}}],j=new w["a"]({routes:O,scrollBehavior:function(){return{x:0,y:20}}}),$=j,P=n("f309");a["a"].use(P["a"]);var E=new P["a"]({});n("15f5");a["a"].config.productionTip=!1,new a["a"]({router:$,vuetify:E,iconfont:"fa",render:function(e){return e(y)}}).$mount("#app")},"5d5f":function(e,t,n){},"85ec":function(e,t,n){},ffcc:function(e,t,n){"use strict";n("5d5f")}});
//# sourceMappingURL=app.c50ba612bffbf5200208.bundle.js.map