exports.ids = [5];
exports.modules = {

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/releases/singles/_release.vue?vue&type=template&id=d868c5e8&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', [_c('DownloadDialog', {
    attrs: {
      "download-link": _vm.release.downloadLink,
      "showing-dialog": _vm.showingDownloadDialog
    },
    on: {
      "close-dialog": _vm.closeDownloadDialog
    }
  }), _vm._ssrNode(" <div class=\"bg-gray-100 pt-10 pb-20 px-10\"><div class=\"max-w-4xl mx-auto\"><div class=\"flex flex-col md:flex-row justify-between items-top\"><h3 class=\"w-full md:w-1/2 uppercase font-semibold text-2xl\"><span class=\"block\">" + _vm._ssrEscape(_vm._s(_vm.release.title)) + "</span> <span class=\"block text-gray-600 text-sm\">" + _vm._ssrEscape(_vm._s(_vm.release.releasedDate)) + "</span></h3> " + (_vm.release.lyrics ? "<h4 class=\"w-full md:w-1/2 mt-6 md:mt-0 flex flex-row justify-start md:justify-end font-semibold text-gray-600\"><a" + _vm._ssrAttr("href", _vm.release.lyrics) + " class=\"uppercase tracking-wide\"><i class=\"fas fa-external-link-alt fa-lite text-xs mr-2\"></i> <span>Lyrics</span></a></h4>" : "<!---->") + "</div> <div class=\"flex flex-col md:flex-row justify-between mt-8\"><div class=\"w-full md:w-1/3\"><img" + _vm._ssrAttr("src", _vm.release.image) + " alt=\"release.title\" class=\"w-full object-cover object-center rounded shadow-lg\"></div> <div class=\"w-full md:w-2/3 md:pl-6 text-lg\"><div class=\"w-full my-10 md:my-0 md:mb-20\">" + (_vm.release.youtubeEmbed ? "<div class=\"mb-10\">" + _vm._s(_vm.release.youtubeEmbed) + "</div>" : "<!---->") + " <div>" + _vm._s(_vm.release.soundcloudEmbed) + "</div></div> <div class=\"w-full flex flex-col md:flex-row justify-between\"><div class=\"mt-6 md:mt-0 flex flex-col justify-start\">" + _vm._ssrList(_vm.release.links, function (link, linkIndex) {
    return link.url ? "<a" + _vm._ssrAttr("href", link.url) + _vm._ssrAttr("target", `__blank_${link.name}`) + " class=\"block\"><i" + _vm._ssrClass(null, `fab ${link.icon} inline-block text-xl mr-2 mb-4`) + "></i> <span>" + _vm._ssrEscape(_vm._s(link.actionText)) + "</span></a>" : "<!---->";
  }) + " " + (_vm.release.secondaryLinks.length > 0 ? "<div class=\"mt-2\"><h5 class=\"font-semibold text-gray-600 capitalize tracking-wide inline-block mr-3\">\n\t\t\t\t\t\t\t\t\t\tMore:\n\t\t\t\t\t\t\t\t\t</h5> " + _vm._ssrList(_vm.release.secondaryLinks, function (link, linkIndex) {
    return link.url ? "<a" + _vm._ssrAttr("href", link.url) + _vm._ssrAttr("target", `__blank_${link.name}`) + " class=\"inline-block mr-1 underline\"><span>" + _vm._ssrEscape(_vm._s(link.name)) + "</span> <span" + _vm._ssrStyle(null, null, {
      display: linkIndex < _vm.release.secondaryLinks.length - 1 ? '' : 'none'
    }) + ">,</span></a>" : "<!---->";
  }) + "</div>" : "<!---->") + "</div> <div class=\"mt-6 md:mt-0\">" + (_vm.release.downloadLink ? "<a class=\"w-full md:w-auto block bg-gray-800 hover:bg-gray-700 text-gray-200 font-semibold font-bold py-2 px-3 border border-gray-900 rounded shadow rounded items-center\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" class=\"fill-current w-3 h-4 mr-2 inline-block\"><path d=\"M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z\"></path></svg> <span>Download for Free</span></a>" : "<!---->") + "</div></div></div></div></div></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/releases/singles/_release.vue?vue&type=template&id=d868c5e8&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/DownloadDialog.vue?vue&type=template&id=2754e5c8&
var DownloadDialogvue_type_template_id_2754e5c8_render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', {
    staticClass: "modal fixed w-full h-full top-0 left-0 flex items-center justify-center",
    class: {
      'opacity-0 pointer-events-none': !_vm.showingDialog
    }
  }, [_vm._ssrNode("<div class=\"modal-overlay absolute w-full h-full bg-gray-900 opacity-50\"></div> <div class=\"modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto\"><div class=\"modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" class=\"fill-current text-white\"><path d=\"M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z\"></path></svg></div> <div class=\"modal-content py-4 text-left px-6\"><div class=\"flex justify-between items-center pb-3\"><p class=\"text-2xl font-bold\">Subscribe for updates</p> <div class=\"modal-close cursor-pointer z-50\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" class=\"fill-current text-black\"><path d=\"M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z\"></path></svg></div></div> <div class=\"flex flex-col\"><p class=\"text-sm text-gray-700\">Be the first to know when I release new music.</p> <form method=\"POST\"" + _vm._ssrAttr("action", _vm.subscribe.destination) + " id=\"subscription-form\" class=\"w-full max-w-lg my-6\"><div class=\"w-full flex flex-row flex-wrap md:flex-no-wrap items-center md:border-b md:border-b-2 md:border-gray-200 py-2\"><input type=\"text\" placeholder=\"John\" aria-label=\"First name\" name=\"FNAME\" required=\"required\" class=\"appearance-none bg-transparent border-none w-full md:w-1/4 text-gray-700 placeholder-gray-500 py-1 px-2 leading-tight focus:outline-none\"> <hr class=\"block md:hidden w-full border-b border-b-2 border-gray-200 mt-1\"> <input type=\"text\" placeholder=\"Doe\" aria-label=\"Last name\" name=\"LNAME\" required=\"required\" class=\"appearance-none bg-transparent border-none w-full md:w-1/4 text-gray-700 placeholder-gray-500 mt-3 md:mt-0 py-1 px-2 leading-tight focus:outline-none\"> <hr class=\"block md:hidden w-full border-b border-b-2 border-gray-200 mt-1\"> <input type=\"email\" placeholder=\"you@gmail.com\" aria-label=\"Email\" name=\"EMAIL\" required=\"required\" class=\"appearance-none bg-transparent border-none w-full md:w-2/4 text-gray-700 placeholder-gray-500 mt-3 md:mt-0 py-1 px-2 leading-tight focus:outline-none\"> <hr class=\"block md:hidden w-full border-b border-b-2 border-gray-200 mt-1\"></div></form></div> <div class=\"flex justify-between pt-2\"><a" + _vm._ssrAttr("href", _vm.downloadLink) + " target=\"__blank\" class=\"w-full md:w-auto block text-gray-700 hover:text-gray-700 font-semibold font-bold py-2 px-3 text-sm\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" class=\"fill-current w-3 h-4 mr-2 inline-block\"><path d=\"M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z\"></path></svg> <span>Only Download</span></a> <button class=\"w-full md:w-auto block bg-gray-800 hover:bg-gray-700 text-gray-200 font-semibold font-bold py-2 px-3 border border-gray-900 rounded shadow rounded items-center\"><span>Subscribe &amp; Download</span></button></div></div></div>")]);
};
var DownloadDialogvue_type_template_id_2754e5c8_staticRenderFns = [];

// CONCATENATED MODULE: ./components/DownloadDialog.vue?vue&type=template&id=2754e5c8&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(22);

// EXTERNAL MODULE: external "jsonp"
var external_jsonp_ = __webpack_require__(23);

// EXTERNAL MODULE: external "query-string"
var external_query_string_ = __webpack_require__(24);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DownloadDialog.vue?vue&type=script&lang=js&



const DownloadDialog = {
  props: {
    showingDialog: {
      type: Boolean,
      required: true,
      default: false
    },
    downloadLink: {
      type: String,
      required: true,
      default: ''
    }
  },
  data: () => ({
    subscribe: {
      destination: 'https://dbilovd.us4.list-manage.com/subscribe/post?u=d09bba37346feb884f1d288c3&amp;id=b82fd59c83',
      firstName: '',
      lastName: '',
      email: ''
    }
  }),
  methods: {
    closeDialog() {
      this.$emit('close-dialog');
    },
    subscribeAndDownload() {
      // let downloadTab = window.open(this.downloadLink, '__blank');
      // downloadTab.focus();

      let formElement = document.getElementById('subscription-form');
      formElement.submit();
      return;
      /*
      let formData = Object.fromEntries(
      	new FormData(formElement)
      );
      debugger;
      fetch(this.subscribe.destination, {
      		params: formData
      	})
      	.then((resp) => {
      		debugger;
      	})
      	.catch((err) => {
      		debugger;
      	});
      */

      // // formData being an object with your form data like:
      // // { EMAIL: 'emailofyouruser@gmail.com' }

      // 	jsonp(`${this.subscribe.destination}&${queryString.stringify(formData)}`, {}, (err, data) => {
      //   	console.log(err);
      //   	console.log(data);
      // 	});
    }
  }
};

/* harmony default export */ var DownloadDialogvue_type_script_lang_js_ = (DownloadDialog);
// CONCATENATED MODULE: ./components/DownloadDialog.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DownloadDialogvue_type_script_lang_js_ = (DownloadDialogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/DownloadDialog.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_DownloadDialogvue_type_script_lang_js_,
  DownloadDialogvue_type_template_id_2754e5c8_render,
  DownloadDialogvue_type_template_id_2754e5c8_staticRenderFns,
  false,
  null,
  null,
  "78f2c760"
  
)

/* harmony default export */ var components_DownloadDialog = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/releases/singles/_release.vue?vue&type=script&lang=js&




const Releases = {
  components: {
    DownloadDialog: components_DownloadDialog
  },
  data: () => ({
    showingDownloadDialog: false
  }),
  computed: {
    ...Object(external_vuex_["mapGetters"])({
      'releaseById': 'release'
    }),
    release() {
      return this.releaseById(this.$route.params.release);
    }
  },
  head() {
    return {
      title: `${this.release.title} | Dbilovd`
    };
  },
  methods: {
    closeDownloadDialog() {
      this.showingDownloadDialog = false;
      document.querySelector('body').classList.remove('modal-active');
    },
    showDownloadDialog() {
      document.querySelector('body').classList.add('modal-active');
      this.showingDownloadDialog = true;
    }
  }
};
/* harmony default export */ var _releasevue_type_script_lang_js_ = (Releases);
// CONCATENATED MODULE: ./pages/releases/singles/_release.vue?vue&type=script&lang=js&
 /* harmony default export */ var singles_releasevue_type_script_lang_js_ = (_releasevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/releases/singles/_release.vue





/* normalize component */

var _release_component = Object(componentNormalizer["a" /* default */])(
  singles_releasevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "add63d0a"
  
)

/* harmony default export */ var _release = __webpack_exports__["default"] = (_release_component.exports);

/***/ })

};;
//# sourceMappingURL=_release.js.map