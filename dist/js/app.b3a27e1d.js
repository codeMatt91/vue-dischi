(function(e){function t(t){for(var r,o,i=t[0],u=t[1],c=t[2],d=0,f=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(f.length)f.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(r=!1)}r&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},s=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var l=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"wrapper"}},[n("Header",{attrs:{genres:e.genres},on:{value:e.mySelected}}),n("Main",{attrs:{albums:e.albums}})],1)},s=[],o=(n("d3b7"),n("159b"),n("caad"),n("2532"),n("bc3a")),i=n.n(o),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[e._m(0),n("div",{attrs:{id:"search"}},[n("label",{attrs:{for:"search-genre"}},[e._v("Choose genre:")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],attrs:{id:"search-genre"},on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selected=t.target.multiple?n:n[0]},e.onChange]}},[n("option",{attrs:{value:"ALL"}},[e._v("ALL")]),e._l(e.genres,(function(t,r){return n("option",{key:r,domProps:{value:t}},[e._v(" "+e._s(t)+" ")])}))],2)])])},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"logo"},[n("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/768px-Spotify_logo_without_text.svg.png",alt:"logo spotify"}})])}],l={name:"Header",props:["genres"],data:function(){return{selected:""}},methods:{onChange:function(){this.$emit("value",this.selected)}}},d=l,f=(n("8d5e"),n("2877")),p=Object(f["a"])(d,u,c,!1,null,"01257ea4",null),m=p.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("div",{staticClass:"container"},[n("div",{staticClass:"albums py-5"},e._l(e.albums,(function(t,r){return n("div",{key:r,staticClass:"card"},[n("div",{staticClass:"img-album"},[n("img",{staticClass:"img-fluid",attrs:{src:t.poster,alt:"album"}})]),n("div",{staticClass:"card-body"},[n("h4",{staticClass:"card-title"},[e._v(e._s(t.title))]),n("div",{staticClass:"author text-muted h6"},[e._v(e._s(t.author))]),n("div",{staticClass:"year text-muted h6"},[e._v(e._s(t.year))])])])})),0)])])},v=[],b={name:"Main",props:["albums"],data:function(){return{}},methods:{}},g=b,_=(n("bdc7"),Object(f["a"])(g,h,v,!1,null,"1fc09e8e",null)),y=_.exports,w={name:"App",components:{Header:m,Main:y},data:function(){return{albums:[],genres:[],myChoise:""}},methods:{getAlbums:function(){var e=this;i.a.get("https://flynn.boolean.careers/exercises/api/array/music").then((function(t){e.albums=t.data.response,e.filteredAllAlbums()}))},filteredAllAlbums:function(){var e=this;return this.albums.forEach((function(t){e.genres.includes(t.genre)||e.genres.push(t.genre)}))},mySelected:function(e){this.myChoise=e}},computed:{},mounted:function(){this.getAlbums()}},x=w,C=(n("5c0b"),Object(f["a"])(x,a,s,!1,null,null,null)),O=C.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(O)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"8d5e":function(e,t,n){"use strict";n("c751")},"9c0c":function(e,t,n){},bdc7:function(e,t,n){"use strict";n("ca13")},c751:function(e,t,n){},ca13:function(e,t,n){}});
//# sourceMappingURL=app.b3a27e1d.js.map