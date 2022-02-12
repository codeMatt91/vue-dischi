(function(e){function t(t){for(var r,s,i=t[0],u=t[1],c=t[2],d=0,f=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"4ee2":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"wrapper"}},[n("Header",{attrs:{genres:e.genres},on:{value:e.mySelected}}),n("Main",{attrs:{albums:e.albums,choose:e.choose}})],1)},a=[],s=(n("d3b7"),n("159b"),n("caad"),n("2532"),n("bc3a")),i=n.n(s),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[e._m(0),n("div",{attrs:{id:"search"}},[n("label",{attrs:{for:"search-genre"}},[e._v("Choose genre:")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],attrs:{id:"search-genre"},on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selected=t.target.multiple?n:n[0]},e.onChange]}},[n("option",{attrs:{value:"ALL"}},[e._v("ALL")]),e._l(e.genres,(function(t,r){return n("option",{key:r,domProps:{value:t}},[e._v(" "+e._s(t)+" ")])}))],2)])])},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"logo"},[n("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/768px-Spotify_logo_without_text.svg.png",alt:"logo spotify"}})])}],l={name:"Header",props:["genres"],data:function(){return{selected:"ALL"}},methods:{onChange:function(){this.$emit("value",this.selected)}}},d=l,f=(n("fd07"),n("2877")),p=Object(f["a"])(d,u,c,!1,null,"c3422876",null),h=p.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("div",{staticClass:"container"},[n("div",{staticClass:"albums py-5"},e._l(e.getGenreAlbum,(function(t,r){return n("div",{key:r,staticClass:"card"},[n("div",{staticClass:"img-album"},[n("img",{staticClass:"img-fluid",attrs:{src:t.poster,alt:t.genre}})]),n("div",{staticClass:"card-body"},[n("h4",{staticClass:"card-title"},[e._v(e._s(t.title))]),n("div",{staticClass:"author text-muted h6"},[e._v(e._s(t.author))]),n("div",{staticClass:"year text-muted h6"},[e._v(e._s(t.year))])])])})),0)])])},v=[],g=(n("4de4"),{name:"Main",props:{albums:Array,choose:String},data:function(){return{}},methods:{},computed:{getGenreAlbum:function(){var e=this;return this.albums.filter((function(t){return t.genre===e.choose}))}}}),b=g,_=(n("72ec"),Object(f["a"])(b,m,v,!1,null,"297e3493",null)),y=_.exports,w={name:"App",components:{Header:h,Main:y},data:function(){return{albums:[],genres:[],choose:""}},methods:{getAlbums:function(){var e=this;i.a.get("https://flynn.boolean.careers/exercises/api/array/music").then((function(t){e.albums=t.data.response,e.filteredAllAlbums()}))},filteredAllAlbums:function(){var e=this;return this.albums.forEach((function(t){e.genres.includes(t.genre)||e.genres.push(t.genre)}))},mySelected:function(e){this.choose=e}},computed:{},mounted:function(){this.getAlbums()}},x=w,A=(n("5c0b"),Object(f["a"])(x,o,a,!1,null,null,null)),O=A.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(O)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"72ec":function(e,t,n){"use strict";n("4ee2")},"792d":function(e,t,n){},"9c0c":function(e,t,n){},fd07:function(e,t,n){"use strict";n("792d")}});
//# sourceMappingURL=app.9ff710bc.js.map