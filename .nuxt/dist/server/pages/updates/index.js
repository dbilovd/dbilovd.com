exports.ids = [7];
exports.modules = {

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/updates/index.vue?vue&type=template&id=05bfc3ce&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', {
    staticClass: "home bg-gray-100"
  }, [_vm._ssrNode("<div class=\"bg-gray-100 py-12 max-w-2xl mx-auto text-center\"><p class=\"font-semibold italic text-xl my-10 p-6 text-lg\">\n\t\t\t\t&quot;God is most glorified in us when we are most satisfied in him.&quot; <span>~ John Piper</span></p></div> <div class=\"bg-white py-20 px-10\"><div class=\"max-w-4xl mx-auto\"><div class=\"flex flex-row justify-between items-center mb-10\"><h3 class=\"uppercase font-semibold text-xl\">Updates</h3></div> " + (_vm.posts.length == 0 ? "<h3 class=\"capitalize text-3xl mb-20\">No Update Right Now</h3>" : "<div class=\"flex flex-col md:flex-row flex-wrap justify-start mb-20 md:-ml-6\">" + _vm._ssrList(_vm.posts, function (post, postIndex) {
    return "<div class=\"w-full md:w-1/3 mt-6 md:pl-6\"><div class=\"bg-white shadow-lg border rounded w-full overflow-hidden\"><img" + _vm._ssrAttr("src", post.image) + _vm._ssrAttr("alt", post.title) + " class=\"w-full h-48 object-cover object-top\"> <div class=\"p-4\"><h3 class=\"font-semibold capitalize text-lg\"><a" + _vm._ssrAttr("href", `/updates/${post.slug}`) + ">" + _vm._ssrEscape(_vm._s(post.title)) + "</a></h3> <p class=\"text-gray-600 h-20 overflow-hidden\">" + _vm._ssrEscape(_vm._s(post.intro)) + "</p> <a" + _vm._ssrAttr("href", `/updates/${post.slug}`) + " class=\"inline-block mt-2 capitalize tracking-wide text-xs font-semibold border-b border-gray-800\">Continue...</a></div></div></div>";
  }) + "</div>") + "</div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/updates/index.vue?vue&type=template&id=05bfc3ce&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/updates/index.vue?vue&type=script&lang=js&



const Releases = {
  data: () => ({}),
  created() {
    this.fetchPosts();
  },
  computed: {
    ...Object(external_vuex_["mapState"])(['posts'])
  },
  head() {
    return {
      title: "Latest Updates | Dbilovd"
    };
  },
  methods: {
    ...Object(external_vuex_["mapActions"])(['fetchPosts'])
  }
};
/* harmony default export */ var updatesvue_type_script_lang_js_ = (Releases);
// CONCATENATED MODULE: ./pages/updates/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_updatesvue_type_script_lang_js_ = (updatesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/updates/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_updatesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "53310a39"
  
)

/* harmony default export */ var updates = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map