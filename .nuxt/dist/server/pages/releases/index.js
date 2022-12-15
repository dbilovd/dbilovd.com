exports.ids = [4];
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

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/releases/index.vue?vue&type=template&id=76c83e86&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', {
    staticClass: "home bg-gray-100"
  }, [_vm._ssrNode("<div class=\"bg-gray-100 py-12 max-w-2xl mx-auto text-center\"><p class=\"font-semibold italic text-xl my-10 p-6 text-lg\">\n\t\t\t\t&quot;God is most glorified in us when we are most satisfied in him.&quot; <span>~ John Piper</span></p></div> "), _vm._ssrNode("<div class=\"bg-white py-20 px-10\">", "</div>", [_vm._ssrNode("<div class=\"max-w-4xl mx-auto\">", "</div>", [_vm._ssrNode("<div class=\"flex flex-row justify-between items-center mb-10\"><h3 class=\"uppercase font-semibold text-xl\">Albums/Projects</h3></div> " + (_vm.albums.length == 0 ? "<h3 class=\"capitalize text-3xl mb-20\"><span class=\"block\">There is new music coming soon...</span></h3>" : "<!---->") + " "), _vm._ssrNode("<div class=\"flex flex-col justify-start\">", "</div>", _vm._l(_vm.albums, function (album, albumIndex) {
    return _vm._ssrNode("<div class=\"flex flex-col md:flex-row justify-start\">", "</div>", [_vm._ssrNode("<div class=\"w-full md:w-1/3\"><div class=\"border shadow rounded w-full overflow-hidden h-64\"><img" + _vm._ssrAttr("src", album.image) + _vm._ssrAttr("alt", album.title) + " class=\"w-full h-full object-cover object-center\"></div></div> "), _vm._ssrNode("<div class=\"w-full md:w-2/3 mt-6 md:mt-0 md:ml-6 flex flex-col justify-between\">", "</div>", [_vm._ssrNode("<div>", "</div>", [_vm._ssrNode("<h4 class=\"flex flex-row items-center justify-start font-semibold text-gray-600\"><span class=\"bg-teal-600 text-gray-100 text-xs px-3 inline-block rounded uppercase font-semibold tracking-wide mr-2\">ongoing</span> <span>" + _vm._ssrEscape("From " + _vm._s(album.releasedDate)) + "</span></h4> <h3 class=\"text-xl font-semibold mt-1\">" + _vm._ssrEscape(_vm._s(album.title)) + "</h3> <p class=\"mt-2\">" + _vm._ssrEscape(_vm._s(album.description)) + "</p> "), _vm._ssrNode("<div class=\"my-8\">", "</div>", [_vm._ssrNode("\n\t\t\t\t\t\t\t\t\tSongs: \n\t\t\t\t\t\t\t\t\t"), _vm._l(_vm.getAlbumSingles(album.id), function (single, singleId) {
      return _c('nuxt-link', {
        key: singleId,
        staticClass: "border-b border-gray-400 mr-4 font-semibold",
        attrs: {
          "to": `/releases/singles/${single.id}`
        }
      }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t" + _vm._s(single.title) + "\n\t\t\t\t\t\t\t\t\t")]);
    })], 2)], 2), _vm._ssrNode(" <div class=\"flex flex-row items-center justify-start mt-6 md:mt-0 -ml-6\">" + _vm._ssrList(album.links, function (channel, channelIndex) {
      return "<a" + _vm._ssrAttr("href", channel.url) + _vm._ssrAttr("target", `__blank_${channel.name}`) + " class=\"inline-block ml-6 text-center\"><i" + _vm._ssrClass(null, `fab ${channel.icon} block text-xl`) + "></i> <span class=\"block mt-1 text-xs\">" + _vm._ssrEscape(_vm._s(channel.name)) + "</span></a>";
    }) + "</div>")], 2)], 2);
  }), 0)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"bg-gray-100 py-20 px-10\">", "</div>", [_vm._ssrNode("<div class=\"max-w-4xl mx-auto\">", "</div>", [_vm._ssrNode("<div class=\"flex flex-row justify-between items-center mb-10\"><h3 class=\"uppercase font-semibold text-xl\">Singles</h3></div> " + (_vm.singles.length == 0 ? "<h3 class=\"capitalize text-3xl mb-20\"><span class=\"block\">There is new music coming soon...</span></h3>" : "<!---->") + " "), _vm._ssrNode("<div class=\"flex flex-col md:flex-row md:flex-wrap justify-start -mx-4\">", "</div>", _vm._l(_vm.singles, function (single) {
    return _vm._ssrNode("<div class=\"w-full md:w-1/3 mt-4 md:mt-0 md:mr-0 md:p-4\">", "</div>", [_c('SingleRelease', {
      attrs: {
        "release": single
      }
    })], 1);
  }), 0)], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/releases/index.vue?vue&type=template&id=76c83e86&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: ./components/SingleRelease.vue + 4 modules
var SingleRelease = __webpack_require__(25);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/releases/index.vue?vue&type=script&lang=js&




const Releases = {
  components: {
    SingleRelease: SingleRelease["a" /* default */]
  },
  data: () => ({}),
  computed: {
    ...Object(external_vuex_["mapGetters"])({
      'albums': 'albumReleases',
      'singles': 'singleReleases',
      'albumSingles': 'albumSingles'
    })
  },
  head() {
    return {
      title: 'Music | Dbilovd'
    };
  },
  methods: {
    getAlbumSingles(id) {
      return this.albumSingles(id);
    }
  }
};
/* harmony default export */ var releasesvue_type_script_lang_js_ = (Releases);
// CONCATENATED MODULE: ./pages/releases/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_releasesvue_type_script_lang_js_ = (releasesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/releases/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_releasesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "abcd95da"
  
)

/* harmony default export */ var releases = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map