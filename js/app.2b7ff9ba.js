(function(e){function t(t){for(var a,r,c=t[0],u=t[1],s=t[2],l=0,p=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);f&&f(t);while(p.length)p.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},r={app:0},o={app:0},i=[];function c(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"c09663f8"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"0d29c75e"}[e]+".css",o=u.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===a||l===o))return t()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){s=p[c],l=s.getAttribute("data-href");if(l===a||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[e],f.parentNode.removeChild(f),n(i)},f.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e);var p=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",p.name="ChunkLoadError",p.type=a,p.request=r,n[1](p)}o[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{dark:""}},[n("v-app-bar",{attrs:{app:"",color:"black",dark:""}},[n("v-toolbar-title",{staticClass:"headline",attrs:{"x-large":"",color:"white"}},[e._v("Mapping Cemeteries")]),n("v-btn",{staticClass:"ml-auto",attrs:{small:"",plain:"",text:"",dark:"",elevation:"5",to:"/"}},[e._v("Map")]),n("v-btn",{attrs:{small:"",plain:"",text:"",dark:"",elevation:"5",to:"/timeline"}},[e._v("Timeline")]),n("v-btn",{attrs:{small:"",plain:"",text:"",dark:"",elevation:"5",to:"/about"}},[e._v("About")])],1),n("v-main",[n("router-view")],1),n("v-footer",{attrs:{dark:"",fixed:"",height:"auto",width:"30%"}},[n("v-card",{attrs:{tile:""}},[n("v-card-text",e._l(e.icons,(function(t,a){return n("v-btn",{key:a,staticClass:"mx-3 white--text",attrs:{href:t.link,icon:"",target:"_blank"}},[n("v-icon",{attrs:{size:"24px"}},[e._v(e._s(t.i))])],1)})),1),n("v-divider")],1)],1)],1)},o=[],i={name:"App",components:{},data:function(){return{icons:[{i:"fab fa-facebook",link:"https://www.facebook.com/mappingcemeteriesnyc"},{i:"fab fa-instagram",link:"https://www.instagram.com/mappingcemeteries/"},{i:"fab fa-tiktok",link:"https://www.tiktok.com/@mappingcemeteries?lang=en"},{i:"fab fa-wordpress",link:"https://mappingcemeteries.commons.gc.cuny.edu/"}]}}},c=i,u=(n("034f"),n("2877")),s=n("6544"),l=n.n(s),p=n("7496"),f=n("40dc"),d=n("8336"),m=n("b0af"),h=n("99d9"),v=n("ce7e"),b=n("553a"),g=n("132d"),w=n("f6c4"),k=n("2a7f"),y=Object(u["a"])(c,r,o,!1,null,null,null),_=y.exports;l()(y,{VApp:p["a"],VAppBar:f["a"],VBtn:d["a"],VCard:m["a"],VCardText:h["b"],VDivider:v["a"],VFooter:b["a"],VIcon:g["a"],VMain:w["a"],VToolbarTitle:k["a"]});n("d3b7"),n("3ca3"),n("ddb0");var x=n("8c4f"),C=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},T=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home",attrs:{id:"map"}},[n("div",{staticClass:"text-box"},[n("p",[e._v("This website is under construction. Head over "),n("a",{attrs:{href:"https://mappingcemeteries.commons.gc.cuny.edu/",target:"_blank"}},[e._v("here")]),e._v(" to learn more.")])])])}],M=(n("fb6a"),n("e192")),O=n.n(M),j={name:"home",data:function(){return{accessToken:"pk.eyJ1IjoibmFkeTE5NiIsImEiOiJjazg1em9vangwMDJpM2RvNHkydXRoOHF3In0.x7fkytbDIi9m9NIA6_MoRg"}},mounted:function(){O.a.accessToken=this.accessToken;var e=new O.a.Map({container:"map",style:"mapbox://styles/nady196/ckm009izz785t17nlcbv8tqob",center:[-73.99,40.72],zoom:12.3}),t=new O.a.Popup({offset:[0,-7],closeButton:!1,closeOnClick:!1,className:"pop-up"});e.on("load",(function(){e.on("click","map-an0td9",(function(e){var t=e.features[0].properties.Caption;"New York Marble Cemetery"==t?window.location.href="#/Historical":"African Burial Ground National Monument"==t?window.location.href="#/Rediscovered":"City Hall Park"==t?window.location.href="#/Park":"General Worth Monument"==t&&(window.location.href="#/WarMemorial")})),e.on("mouseenter","map-an0td9",(function(n){console.log("hover"),e.getCanvas().style.cursor="pointer";var a=n.features[0].geometry.coordinates.slice(),r=n.features[0].properties.Caption;while(Math.abs(n.lngLat.lng-a[0])>180)a[0]+=n.lngLat.lng>a[0]?360:-360;t.setLngLat(a).setHTML("<h3>"+r+"</h3><p>").addTo(e)})),e.on("mouseleave","test",(function(){e.getCanvas().style.cursor="",t.remove()}))}))}},P=j,E=(n("a0df"),Object(u["a"])(P,C,T,!1,null,"7f19942c",null)),A=E.exports;a["a"].use(x["a"]);var H=[{path:"/",name:"Home",component:A},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/timeline",name:"Timeline",component:function(){return n.e("about").then(n.bind(null,"f67a"))}},{path:"/WarMemorial",name:"WarMemorial",component:function(){return n.e("about").then(n.bind(null,"7d78"))}},{path:"/Rediscovered",name:"Rediscovered",component:function(){return n.e("about").then(n.bind(null,"b9b6"))}},{path:"/Hidden",name:"Hidden",component:function(){return n.e("about").then(n.bind(null,"8054"))}},{path:"/Park",name:"Park",component:function(){return n.e("about").then(n.bind(null,"0d26"))}},{path:"/Historical",name:"Historical",component:function(){return n.e("about").then(n.bind(null,"9719"))}}],N=new x["a"]({routes:H}),L=N,V=n("f309");a["a"].use(V["a"]);var S=new V["a"]({});n("15f5");a["a"].config.productionTip=!1,new a["a"]({router:L,vuetify:S,iconfont:"fa",render:function(e){return e(_)}}).$mount("#app")},"85ec":function(e,t,n){},a0df:function(e,t,n){"use strict";n("c5dd")},c5dd:function(e,t,n){}});
//# sourceMappingURL=app.2b7ff9ba.js.map