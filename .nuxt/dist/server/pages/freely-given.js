exports.ids = [2];
exports.modules = {

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/freely-given.vue?vue&type=template&id=b58af6a0&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', {
    staticClass: "home bg-gray-100"
  }, [_vm._ssrNode("<div class=\"bg-gray-100 py-12 max-w-2xl mx-auto text-center\"><p class=\"font-semibold italic text-xl mt-10 mb-4 p-6 text-lg\">\n\t\t\t&quot;... Give as freely as you have received!&quot; <span>~ Matthew 10:8</span></p> <p class=\"font-semibold italic text-xl mt-0 mb-10 p-6 text-lg\">\n\t\t\t&quot;... you say I'm King of kings but son, I don't get it how you could trust me for eternity but can't trust me for now&quot; <span>~ Propaganda</span></p></div> <div class=\"bg-white py-20 px-10\"><div class=\"max-w-2xl mx-auto flex flex-col md:flex-row md:justify-between items-center md:items-start\"><div class=\"w-full mt-10 pl-0 text-lg text-left\">" + _vm._ssrList(_vm.descriptionLines, function (line) {
    return "<p class=\"mb-2\">" + _vm._s(line) + "</p>";
  }) + " <div class=\"pb-40\"></div></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/freely-given.vue?vue&type=template&id=b58af6a0&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/freely-given.vue?vue&type=script&lang=js&



const Releases = {
  data: () => ({}),
  computed: {
    ...Object(external_vuex_["mapGetters"])({
      'descriptionLines': 'supportDescriptionLines'
    })
  },
  head() {
    return {
      title: "#FreelyGiven | Dbilovd"
    };
  }
};
/* harmony default export */ var freely_givenvue_type_script_lang_js_ = (Releases);
// CONCATENATED MODULE: ./pages/freely-given.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_freely_givenvue_type_script_lang_js_ = (freely_givenvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/freely-given.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_freely_givenvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "fe2b8b26"
  
)

/* harmony default export */ var freely_given = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=freely-given.js.map