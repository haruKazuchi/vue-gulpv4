!function(t){var e={};function n(i){if(e[i])return e[i].exports;var l=e[i]={i:i,l:!1,exports:{}};return t[i].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var l in t)n.d(i,l,function(e){return t[e]}.bind(null,l));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n.r(e);new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.buildComponent()}var e,n,l;return e=t,(n=[{key:"buildComponent",value:function(){Vue.component("header-item",{props:["logo","logosrc","menu","logolink","menulink"],template:'\n\t\t\t<div class="container">\n\t\t\t\t<h1 class="logo"><a><img :src="logosrc" :alt="logo"></a></h1>\n\t\t\t\t<ul class="navi">\n\t\t\t\t\t<li v-for="(value, index) in items"><a :href="links[index]"><span>{{value}}</span></a></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t',data:function(){return{items:this.menu.split(","),links:this.menulink.split(",")}}}),new Vue({el:"#header"}),Vue.component("main-visual",{props:["title","text","button","link"],template:'\n\t\t\t<div class="container">\n\t\t\t\t<div class="image-box">\n\t\t\t\t\t<div class="image-desc">\n\t\t\t\t\t\t<div class="title" v-html="title"></div>\n\t\t\t\t\t\t<div class="text" v-html="text"></div>\n\t\t\t\t\t\t<div class="button"><a :href="link">{{button}}</a></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t'}),new Vue({el:"#mainvisual"}),Vue.component("service",{props:["title","text","imgsrc"],template:'\n\t\t\t<div class="container">\n\t\t\t\t<div class="service-box">\n\t\t\t\t\t<div class="title" v-html="title"></div>\n\t\t\t\t\t<div class="text" v-html="text"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t'}),new Vue({el:"#service"})}}])&&i(e.prototype,n),l&&i(e,l),t}())}]);