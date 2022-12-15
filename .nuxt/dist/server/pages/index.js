exports.ids = [3];
exports.modules = {

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/SingleRelease.vue?vue&type=template&id=60ef2134&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('nuxt-link', {
    attrs: {
      "to": _vm.link
    }
  }, [_c('div', {
    staticClass: "border shadow rounded w-full overflow-hidden h-64"
  }, [_c('img', {
    staticClass: "w-full h-full object-cover object-center",
    attrs: {
      "src": _vm.release.image,
      "alt": _vm.release.title
    }
  })])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/SingleRelease.vue?vue&type=template&id=60ef2134&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SingleRelease.vue?vue&type=script&lang=js&
const SingleReleaseComponent = {
  props: {
    release: {
      type: Object,
      required: true
    }
  },
  data: () => ({}),
  computed: {
    link() {
      return `/releases/singles/${this.release.id}`;
    }
  }
};
/* harmony default export */ var SingleReleasevue_type_script_lang_js_ = (SingleReleaseComponent);
// CONCATENATED MODULE: ./components/SingleRelease.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SingleReleasevue_type_script_lang_js_ = (SingleReleasevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/SingleRelease.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SingleReleasevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "98d06c42"
  
)

/* harmony default export */ var SingleRelease = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=ed3f1314&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', {
    staticClass: "home"
  }, [_vm._ssrNode("<div class=\"w-full h-screen\"><div class=\"w-full h-full\"><img src=\"/images/header-slider-3.jpg\" alt class=\"w-full h-full object-cover object-right md:object-center\"></div></div> <div class=\"bg-gray-100 py-20\"><div class=\"max-w-2xl mx-auto text-center\"><div class=\"p-6 text-lg\"><p class=\"font-semibold italic text-xl mb-10\">\n          &quot;God is most glorified in us when we are most satisfied in him.&quot; <span>~ John Piper</span></p> " + _vm._ssrList(_vm.descriptionLines, function (line) {
    return "<p class=\"mb-2\">" + _vm._ssrEscape(_vm._s(line)) + "</p>";
  }) + "</div></div></div> "), _vm._ssrNode("<div class=\"bg-gray-100 py-20 px-10\">", "</div>", [_vm._ssrNode("<div class=\"max-w-4xl mx-auto\">", "</div>", [_vm._ssrNode("<div class=\"flex flex-col md:flex-row md:justify-between items-start md:items-center mb-10\">", "</div>", [_vm._ssrNode("<h3 class=\"uppercase font-semibold text-xl\">Latest Releases</h3> "), _c('nuxt-link', {
    staticClass: "block uppercase tracking-wide text-gray-600 border-b-4 border-gray-600 mt-4 md:mt-0",
    attrs: {
      "to": "/releases"
    }
  }, [_vm._v("\n          See More ...\n        ")])], 2), _vm._ssrNode(" " + (_vm.singles.length == 0 ? "<h3 class=\"capitalize text-3xl mb-20\"><span class=\"block\">Keep watching this space</span> <span class=\"block\">There is new music coming soon...</span></h3>" : "<!---->") + " "), _vm._ssrNode("<div class=\"flex flex-col md:flex-row justify-start\">", "</div>", _vm._l(_vm.singles, function (single) {
    return _vm._ssrNode("<div class=\"w-full md:w-1/3 mt-4 md:mt-0 md:mr-4\">", "</div>", [_c('SingleRelease', {
      attrs: {
        "release": single
      }
    })], 1);
  }), 0), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"mt-10 mb-0 md:mb-20 pt-6 flex flex-col md:flex-row justify-between\">", "</div>", [_vm._ssrNode("<div class=\"flex flex-row items-center justify-center -ml-8 md:-ml-6 mb-10 md:mb-0\">" + _vm._ssrList(_vm.streams, function (channel, channelIndex) {
    return "<a" + _vm._ssrAttr("href", channel.url) + _vm._ssrAttr("target", channel.url == '#' ? '' : `__blank_${channel.name}`) + " class=\"inline-block ml-8 md:ml-6 text-center text-gray-800\"><i" + _vm._ssrClass(null, `fab ${channel.icon} block text-xl`) + "></i> <span class=\"hidden md:block mt-2\">" + _vm._ssrEscape(_vm._s(channel.name)) + "</span></a>";
  }) + "</div> "), _vm._ssrNode("<div>", "</div>", [_c('nuxt-link', {
    staticClass: "w-full md:w-auto block bg-gray-800 hover:bg-gray-700 text-gray-200 font-semibold font-bold py-2 px-3 border border-gray-900 rounded shadow rounded text-center",
    attrs: {
      "to": "/releases"
    }
  }, [_c('svg', {
    staticClass: "fill-current w-4 h-4 mr-4 inline-block",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 20 20"
    }
  }, [_c('path', {
    attrs: {
      "d": "M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"
    }
  })]), _vm._v(" "), _c('span', [_vm._v("Free Downloads")])])], 1)], 2)], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=ed3f1314&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: ./components/SingleRelease.vue + 4 modules
var SingleRelease = __webpack_require__(25);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&




const HomePage = {
  components: {
    SingleRelease: SingleRelease["a" /* default */]
  },
  data: () => ({}),
  created() {
    // this.fetchPosts();
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])({
      'singles': 'threeMostRecentReleases',
      'streams': 'musicLinks',
      'posts': 'latestThreePosts',
      'descriptionLines': 'descriptionLines'
    })
  },
  head() {
    return {
      title: "Home | Dbilovd"
    };
  },
  methods: {
    ...Object(external_vuex_["mapActions"])(['fetchPosts'])
  }
};
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = (HomePage);
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "e0e12584"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map