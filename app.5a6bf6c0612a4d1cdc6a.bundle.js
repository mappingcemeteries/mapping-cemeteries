(function(e){function t(t){for(var o,a,c=t[0],u=t[1],l=t[2],s=0,p=[];s<c.length;s++)a=c[s],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);f&&f(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,a=1;a<n.length;a++){var c=n[a];0!==r[c]&&(o=!1)}o&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},a={app:0},r={app:0},i=[];function c(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"c1924cef"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var o="css/"+({about:"about"}[e]||e)+"."+{about:"4d5a01ca"}[e]+".css",r=u.p+o,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===o||s===r))return t()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){l=p[c],s=l.getAttribute("data-href");if(s===o||s===r)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=r;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){a[e]=0})));var o=r[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=r[e]=[t,n]}));t.push(o[2]=i);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=c(e);var p=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",p.name="ChunkLoadError",p.type=o,p.request=a,n[1](p)}r[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var p=0;p<l.length;p++)t(l[p]);var f=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{dark:""}},[n("v-app-bar",{attrs:{app:"",color:"black",dark:""}},[n("v-img",{attrs:{src:"https://mappingcemeteries.commons.gc.cuny.edu/wp-content/blogs.dir/16656/files/2021/05/mapping-cemeteries-logo-for-header-zoomed.jpeg",height:"50","max-width":"200"}}),n("v-btn",{staticClass:"ml-auto",attrs:{small:"",plain:"",text:"",dark:"",elevation:"5",to:"/"}},[e._v("Map")]),n("v-btn",{attrs:{small:"",plain:"",text:"",dark:"",elevation:"5",to:"/timeline"}},[e._v("Timeline")]),n("v-btn",{attrs:{small:"",plain:"",text:"",dark:"",elevation:"5",to:"/about"}},[e._v("About")])],1),n("v-main",[n("router-view")],1),n("v-footer",{attrs:{dark:"",fixed:"",height:"auto",color:"",width:"17%"}},e._l(e.icons,(function(t,o){return n("v-btn",{key:o,attrs:{href:t.link,icon:"",target:"_blank"}},[n("v-icon",{attrs:{size:"15px"}},[e._v(e._s(t.i))])],1)})),1)],1)},r=[],i={name:"App",components:{},data:function(){return{icons:[{i:"fab fa-wordpress",link:"https://mappingcemeteries.commons.gc.cuny.edu/"},{i:"fab fa-soundcloud",link:"https://soundcloud.com/user-637712301"},{i:"fab fa-facebook",link:"https://www.facebook.com/mappingcemeteriesnyc"},{i:"fab fa-instagram",link:"https://www.instagram.com/mappingcemeteries/"},{i:"fab fa-tiktok",link:"https://www.tiktok.com/@mappingcemeteries?lang=en"}]}}},c=i,u=(n("034f"),n("2877")),l=n("6544"),s=n.n(l),p=n("7496"),f=n("40dc"),d=n("8336"),m=n("553a"),h=n("132d"),b=n("adda"),v=n("f6c4"),g=Object(u["a"])(c,a,r,!1,null,null,null),y=g.exports;s()(g,{VApp:p["a"],VAppBar:f["a"],VBtn:d["a"],VFooter:m["a"],VIcon:h["a"],VImg:b["a"],VMain:v["a"]});n("d3b7"),n("3ca3"),n("ddb0");var k=n("8c4f"),w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home",attrs:{id:"map"}})},x=[],_=(n("fb6a"),n("e192")),M=n.n(_),O={name:"home",data:function(){return{accessToken:"pk.eyJ1IjoibmFkeTE5NiIsImEiOiJjazg1em9vangwMDJpM2RvNHkydXRoOHF3In0.x7fkytbDIi9m9NIA6_MoRg"}},mounted:function(){M.a.accessToken=this.accessToken;var e=new M.a.Map({container:"map",style:"mapbox://styles/nady196/ckm009izz785t17nlcbv8tqob",center:[-73.99,40.72],zoom:12.3}),t=new M.a.Popup({offset:[0,-7],closeButton:!1,closeOnClick:!1,className:"pop-up"});e.on("load",(function(){e.on("click","map-an0td9",(function(e){var t=e.features[0].properties.Caption;"New York Marble Cemetery"==t?window.location.href="#/Historical":"African Burial Ground National Monument"==t?window.location.href="#/Rediscovered":"City Hall Park"==t?window.location.href="#/Park":"General Worth Monument"==t&&(window.location.href="#/WarMemorial")})),e.on("mouseenter","map-an0td9",(function(n){console.log("hover"),e.getCanvas().style.cursor="pointer";var o=n.features[0].geometry.coordinates.slice(),a=n.features[0].properties.Caption,r=n.features[0].properties.Gravatar;console.log("lol "+n.features[0].properties.Gravatar);while(Math.abs(n.lngLat.lng-o[0])>180)o[0]+=n.lngLat.lng>o[0]?360:-360;t.setLngLat(o).setHTML("<h3>"+a+"</h3><img style=' border:2px solid black; width:100px;  display: block; margin-left: auto; margin-right: auto; height:100px;  border-radius: 50%; ' src="+r+"></img>").addTo(e)})),e.on("mouseleave","test",(function(){e.getCanvas().style.cursor="",t.remove()}))}))}},j=O,C=(n("7a29"),Object(u["a"])(j,w,x,!1,null,"4f09d5b3",null)),T=C.exports;o["a"].use(k["a"]);var P=[{path:"/",name:"Home",component:T},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/timeline",name:"Timeline",component:function(){return n.e("about").then(n.bind(null,"f67a"))}},{path:"/WarMemorial",name:"WarMemorial",component:function(){return n.e("about").then(n.bind(null,"7d78"))}},{path:"/Rediscovered",name:"Rediscovered",component:function(){return n.e("about").then(n.bind(null,"b9b6"))}},{path:"/Hidden",name:"Hidden",component:function(){return n.e("about").then(n.bind(null,"8054"))}},{path:"/Park",name:"Park",component:function(){return n.e("about").then(n.bind(null,"0d26"))}},{path:"/Historical",name:"Historical",component:function(){return n.e("about").then(n.bind(null,"9719"))}}],A=new k["a"]({routes:P,scrollBehavior:function(){return{x:0,y:0}}}),E=A,H=n("f309");o["a"].use(H["a"]);var N=new H["a"]({});n("15f5");o["a"].config.productionTip=!1,new o["a"]({router:E,vuetify:N,iconfont:"fa",render:function(e){return e(y)}}).$mount("#app")},"7a29":function(e,t,n){"use strict";n("f095")},"85ec":function(e,t,n){},f095:function(e,t,n){}});
//# sourceMappingURL=app.5a6bf6c0612a4d1cdc6a.bundle.js.map