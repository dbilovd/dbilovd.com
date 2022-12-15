exports.ids = [6];
exports.modules = {

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/updates/_slug.vue?vue&type=template&id=fc225ce4&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', [_vm._ssrNode("<div class=\"bg-gray-100 pt-10 pb-20 px-10\"><div class=\"max-w-2xl mx-auto p-6\"><h1 class=\"font-semibold text-2xl mt-10 capitalize\">" + _vm._ssrEscape(_vm._s(_vm.update.title)) + "</h1> <p class=\"font-semibold text-sm mt-2 mb-10\">" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.update.date))) + "</p> <div class=\"update-content text-lg\">" + _vm._s(_vm.update.content) + "</div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/updates/_slug.vue?vue&type=template&id=fc225ce4&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/updates/_slug.vue?vue&type=script&lang=js&



const Releases = {
  data: () => ({}),
  created() {
    this.fetchPosts();
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])(['postBySlug']),
    update() {
      return this.postBySlug(this.$route.params.slug);
    }
  },
  head() {
    return {
      title: `Update: ${this.update.title} | Dbilovd`
    };
  },
  methods: {
    ...Object(external_vuex_["mapActions"])(['fetchPosts']),
    formatDate(date) {
      return new Date(date).toDateString();
    }
  },
  watch: {
    update(val) {
      if (val) {
        document.title = `${val.title} : Dbilovd`;
        let meta = document.createElement('meta');
        meta.name = "description";
        meta.content = val.intro;
        document.getElementsByTagName('head')[0].appendChild(meta);
        let ogTitle = document.createElement('meta');
        ogTitle.setAttribute('property', 'og:title');
        ogTitle.content = `${val.title} : Dbilovd`;
        document.getElementsByTagName('head')[0].appendChild(ogTitle);
        let ogDescription = document.createElement('meta');
        ogDescription.setAttribute('property', 'og:description');
        ogDescription.content = val.intro;
        document.getElementsByTagName('head')[0].appendChild(ogDescription);
        if (val.image) {
          let ogImage = document.createElement('meta');
          ogImage.setAttribute('property', 'og:image');
          ogImage.content = val.image;
          document.getElementsByTagName('head')[0].appendChild(ogImage);
        }
      }
    }
  }
};
/* harmony default export */ var _slugvue_type_script_lang_js_ = (Releases);
// CONCATENATED MODULE: ./pages/updates/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var updates_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/updates/_slug.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  updates_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "517a68f1"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_slug.js.map