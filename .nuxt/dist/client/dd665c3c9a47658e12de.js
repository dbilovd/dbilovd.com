(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{192:function(t,e,n){"use strict";n.r(e);n(54),n(30),n(20),n(13),n(39),n(55);var r=n(21),o=n(31);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={data:function(){return{}},created:function(){this.fetchPosts()},computed:l({},Object(o.c)(["postBySlug"]),{update:function(){return this.postBySlug(this.$route.params.slug)}}),head:function(){return{title:"Update: ".concat(this.update.title," | Dbilovd")}},methods:l({},Object(o.b)(["fetchPosts"]),{formatDate:function(t){return new Date(t).toDateString()}}),watch:{update:function(t){if(t){document.title="".concat(t.title," : Dbilovd");var meta=document.createElement("meta");meta.name="description",meta.content=t.intro,document.getElementsByTagName("head")[0].appendChild(meta);var e=document.createElement("meta");e.setAttribute("property","og:title"),e.content="".concat(t.title," : Dbilovd"),document.getElementsByTagName("head")[0].appendChild(e);var n=document.createElement("meta");if(n.setAttribute("property","og:description"),n.content=t.intro,document.getElementsByTagName("head")[0].appendChild(n),t.image){var r=document.createElement("meta");r.setAttribute("property","og:image"),r.content=t.image,document.getElementsByTagName("head")[0].appendChild(r)}}}}},m=n(14),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"bg-gray-100 pt-10 pb-20 px-10"},[n("div",{staticClass:"max-w-2xl mx-auto p-6"},[n("h1",{staticClass:"font-semibold text-2xl mt-10 capitalize"},[t._v(t._s(t.update.title))]),t._v(" "),n("p",{staticClass:"font-semibold text-sm mt-2 mb-10"},[t._v(t._s(t.formatDate(t.update.date)))]),t._v(" "),n("div",{staticClass:"update-content text-lg",domProps:{innerHTML:t._s(t.update.content)}})])])])}),[],!1,null,null,null);e.default=component.exports}}]);