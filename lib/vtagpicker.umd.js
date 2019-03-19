(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vtagpicker"] = factory();
	else
		root["vtagpicker"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "2e4f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tag_picker_item_vue_vue_type_style_index_0_id_4f9df60e_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5b00");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tag_picker_item_vue_vue_type_style_index_0_id_4f9df60e_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tag_picker_item_vue_vue_type_style_index_0_id_4f9df60e_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tag_picker_item_vue_vue_type_style_index_0_id_4f9df60e_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "3006":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "59a4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tag_picker_vue_vue_type_style_index_0_id_6c66d49e_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3006");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tag_picker_vue_vue_type_style_index_0_id_6c66d49e_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tag_picker_vue_vue_type_style_index_0_id_6c66d49e_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tag_picker_vue_vue_type_style_index_0_id_6c66d49e_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "5b00":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"19ba03e7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/tag-picker/src/tag-picker.vue?vue&type=template&id=6c66d49e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"vtag-wrap",staticClass:"vtag-wrap",style:({
    'z-index': _vm.zIndex
  })},[_c('div',{ref:"top",staticClass:"vtag-top"},[_c('div',{ref:"top-content",staticClass:"vtag-top__content",style:(_vm.vtagTopContentStyle),on:{"click":function (e){ _vm.handleCancelVtag(e) },"scroll":_vm.topScroll}},[_vm._l((_vm.selection),function(item,index){return _c('VTagPickerItem',{key:index,staticClass:"vtag-top__item",style:({
          transition: ("all " + (_vm.animationDuration / 1000) + "s")
        }),attrs:{"type":"light","name":item.name,"totalSelectionKey":item[_vm.OnlyKey]}})}),_c('div',{staticClass:"vtag-top-content__width",style:({
        width: _vm.vtopContentWidth,
        height: '1px'
      })})],2),(_vm.showTagNum)?_c('div',{staticClass:"vtag-top__right"},[_c('div',{staticClass:"vtag-top__num"},[_vm._v(_vm._s(("+" + _vm.rightTagNum)))])]):_vm._e()]),_vm._t("top"),_c('div',{ref:"container",staticClass:"vtag-container"},[_c('div',{staticClass:"vtag-container__content"},_vm._l((_vm.totalData),function(item,index){return _c('VTagPickerItem',{key:index,staticClass:"vtag-container__item",style:({
          transition: ("all " + (_vm.animationDuration / 1000) + "s"),
          animationDuration: ((_vm.animationDuration / 1000) + "s")
        }),attrs:{"name":item.name},on:{"click":function (e){ _vm.handleClickVtag(e,item) }}})}),1)]),_c('div',{ref:"vtag-footer",staticClass:"vtag-footer"},[_vm._t("footer")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/tag-picker/src/tag-picker.vue?vue&type=template&id=6c66d49e&scoped=true&

// CONCATENATED MODULE: ./packages/tag-picker/util.js
/**
 * 节流函数
 * @param {Function} fun 要执行的函数
 * @param {Number} delay 延迟
 * @param {Number} time time时间内，必需执行一次
 */
const throttle = (fun, delay, time) => {
  let timeout

  let startTime = new Date()

  return function () {
    let context = this

    let args = Array.prototype.slice.call(arguments)

    let curTime = new Date()

    clearTimeout(timeout)
    if (curTime - startTime >= time) {
      // 如果达到了规定的触发时间间隔，触发 handler
      fun.apply(context, args)
      startTime = curTime
    } else {
      // 没达到触发间隔，重新设定定时器
      timeout = setTimeout(function () {
        fun.apply(context, args)
      }, delay)
    }
  }
}

/**
 * 去抖
 * @param {Function} fn 要执行的函数
 * @param {Number} delay 延迟时间
 */

const debounce = (fn, delay) => {
  let timer = null

  return function () {
    // 通过 'this' 和 'arguments'
    // 获得函数的作用域和参数
    let context = this
    let args = Array.prototype.slice.call(arguments)
    // 如果事件被触发，清除 timer 并重新开始计时
    clearTimeout(timer)
    timer = setTimeout(function () {
      fn.apply(context, args)
    }, delay)
  }
}

/**
 * 睡眠函数
 * @param {Number} time 时间/ms
 */
const sleep = (time) => {
  /* eslint-disable */
  return new Promise(reslove => {
    setTimeout(() => {
      reslove()
    }, time)
  })
}

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"19ba03e7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/tag-picker/src/tag-picker-item.vue?vue&type=template&id=4f9df60e&scoped=true&
var tag_picker_itemvue_type_template_id_4f9df60e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vtag-item",class:[ ("vtag-item-" + _vm.type) ],attrs:{"totalSelection-key":_vm.totalSelectionKey},on:{"click":_vm.handleClickVtag}},[_vm._v("\n  "+_vm._s(_vm.name)+"\n")])}
var tag_picker_itemvue_type_template_id_4f9df60e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/tag-picker/src/tag-picker-item.vue?vue&type=template&id=4f9df60e&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/tag-picker/src/tag-picker-item.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var tag_picker_itemvue_type_script_lang_js_ = ({
  name: 'VTagPickerItem',
  props: {
    totalSelectionKey: {
      type: String
    },
    name: {
      type: String,
      required: true
    },
    type: { // default, light
      type: String,
      default: 'default'
    }
  },
  data () {
    return {}
  },
  methods: {
    handleClickVtag (e) {
      this.$emit('click', e)
    }
  }
});

// CONCATENATED MODULE: ./packages/tag-picker/src/tag-picker-item.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_tag_picker_itemvue_type_script_lang_js_ = (tag_picker_itemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/tag-picker/src/tag-picker-item.vue?vue&type=style&index=0&id=4f9df60e&scoped=true&lang=less&
var tag_picker_itemvue_type_style_index_0_id_4f9df60e_scoped_true_lang_less_ = __webpack_require__("2e4f");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/tag-picker/src/tag-picker-item.vue






/* normalize component */

var component = normalizeComponent(
  src_tag_picker_itemvue_type_script_lang_js_,
  tag_picker_itemvue_type_template_id_4f9df60e_scoped_true_render,
  tag_picker_itemvue_type_template_id_4f9df60e_scoped_true_staticRenderFns,
  false,
  null,
  "4f9df60e",
  null
  
)

/* harmony default export */ var tag_picker_item = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/tag-picker/src/tag-picker.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var tag_pickervue_type_script_lang_js_ = ({
  name: 'VTagPicker',
  components: {
    VTagPickerItem: tag_picker_item
  },
  props: {
    zIndex: Number,
    totalData: {
      type: Array,
      default: () => ([])
    },
    multipleSelection: {
      type: Array,
      default: () => ([])
    },
    animationDuration: {
      type: Number,
      default: 500
    },
    OnlyKey: {
      type: String,
      default: 'name'
    }
  },
  data () {
    return {
      rightTagNum: 0, // 右侧被遮挡的 tag 数量
      vtagTopContentStyle: {},
      showTagNum: false,
      selection: [], // 顶部显示数据
      domQueue: [],
      animating: false,
      totalSelection: [], // 所有已选数据
      vtopContentWidth: '100%',
      debounceResetContentTag: debounce(this.resetContentTag, this.animationDuration * 1.5),
      topScroll: throttle(this.computedTagNumShow, 100, 200),
      hasSelectionDom: [], // 缓存已选 content中的dom,用于动画结束后，合并content
      topVtagItemCache: null // 缓存顶部已选 tag第一个
    }
  },
  watch: {
    multipleSelection: {
      handler (val) {
        this.selection = JSON.parse(JSON.stringify(val))
        this.totalSelection = JSON.parse(JSON.stringify(val))
        this.$nextTick(() => {
          this.computedTagNumShow()
          this.initTagPosition()
        })
      },
      immediate: true
    },
    totalSelection (val) {
      this.$emit('change', JSON.parse(JSON.stringify(val)))
    },
    totalData: {
      handler (val) {
        this.$nextTick(() => {
          this.computedContainerHeight()
        })
      },
      immediate: true
    }
  },
  methods: {
    // 取消选中tag
    handleCancelVtag (e) {
      let $target = e.target
      let $targetWidth = $target.offsetWidth
      if ($target.classList.contains('vtag-item-default') || !$target.classList.contains('vtag-item')) return
      $target.classList.remove('vtag-item-light')
      $target.classList.add('vtag-item-default')
      let index = this.totalSelection.findIndex(item => item[this.OnlyKey] === $target.getAttribute('totalSelection-key'))
      this.totalData.push(this.totalSelection[index])
      this.totalSelection.splice(index, 1)
      $target.innerHTML = ''
      let currentNode = $target
      while (currentNode.nextElementSibling && currentNode.nextElementSibling.classList.contains('vtag-item')) {
        let nextElement = currentNode.nextElementSibling
        let transformX = Number(nextElement.getAttribute('transform-x')) - $targetWidth - 15
        nextElement.setAttribute('transform-x', transformX)
        nextElement.style.transform = `translate(${transformX}px, 0)`
        currentNode = nextElement
      }

      $target.parentNode.removeChild($target)

      this.computedTagNumShow()
    },
    // 选中 tag
    handleClickVtag (e, data) {
      if (e.target.classList.contains('vtag-item-light')) return
      e.target.classList.add('animate')
      e.target.classList.add('vtag-item-light')
      this.totalSelection.push(data)
      this.domQueue.push({
        event: e,
        data
      })
      setTimeout(() => {
        e.target.classList.remove('animate')
        if (this.animating) return
        let dom = this.domQueue.shift()
        this.moveTag(dom.event, dom.data)
      }, this.animationDuration)
    },
    async moveTag (e, data) {
      this.animating = true
      let $target = e.target
      let $targetClone = e.target.cloneNode(true)
      let $targetRect = $target.getBoundingClientRect()
      let $vtagWrap = this.$refs['vtag-wrap']
      let $topContent = this.$refs['top-content']
      $topContent.scrollLeft = 0

      $targetClone.style.position = 'fixed'
      $targetClone.style.left = `${$targetRect.x}px`
      $targetClone.style.top = `${$targetRect.y}px`

      $vtagWrap.appendChild($targetClone)

      $target.style.width = `${$target.offsetWidth}px`
      $target.style.height = `${$target.offsetHeight}px`
      $target.style.background = `transparent`
      $target.innerHTML = ''

      await sleep(10)

      this.moveExist(e)
      $targetClone.style.transform = `translate(${-$targetRect.x + 15}px,${-$targetRect.y + 10}px)`
      setTimeout(() => {
        this.hasSelectionDom.push($target)
        this.debounceResetContentTag()
        $targetClone.parentNode.removeChild($targetClone)
        this.topPrepend(e, data)
        this.animating = false
        this.computedTagNumShow()
        if (this.domQueue.length) {
          let dom = this.domQueue.shift()
          this.moveTag(dom.event, dom.data)
        }
      }, this.animationDuration)
    },
    // 向右移动已选tag
    moveExist (e) {
      let $target = e.target
      let $targetWidth = $target.offsetWidth
      let vtagItems = this.$refs['top-content'].querySelectorAll('.vtag-item')
      vtagItems.forEach(item => {
        let transformX = Number(item.getAttribute('transform-x')) + $targetWidth + 15
        item.setAttribute('transform-x', transformX)
        item.style.transform = `translate(${transformX}px, 0)`
      })
    },
    // 插入选中tag
    topPrepend (e, data) {
      let $topContent = this.$refs['top-content']
      if (!this.selection.length) {
        this.selection.unshift(data)
        this.$nextTick(() => {
          $topContent.querySelector('.vtag-item').setAttribute('totalSelection-key', data[this.OnlyKey])
          this.topVtagItemCache = $topContent.querySelector('.vtag-item').cloneNode(true)
        })
      } else {
        let newVtag = this.topVtagItemCache.cloneNode(true)
        newVtag.setAttribute('totalSelection-key', data[this.OnlyKey])
        newVtag.innerHTML = data.name
        $topContent.prepend(newVtag)
      }
    },
    // 初始化标签位置，方便后续动画
    initTagPosition () {
      let vtagItems = this.$refs['top-content'].querySelectorAll('.vtag-item')
      if (vtagItems.length) {
        this.topVtagItemCache = vtagItems[0].cloneNode(true)
      }
      vtagItems.forEach((dom, index) => {
        dom.setAttribute('transform-x', 0)
        dom.style.transform = `translate(${0}px, 0)`
        if (index === 0) {
          dom.style.left = `15px`
        } else {
          dom.style.left = `${vtagItems[index - 1].offsetLeft + vtagItems[index - 1].offsetWidth + 15}px`
        }
      })
    },
    // 判断是否显示顶部隐藏的tag数量
    computedTagNumShow () {
      const $topContent = this.$refs['top-content']
      if ($topContent.scrollWidth === $topContent.clientWidth) {
        this.showTagNum = false
        this.$set(this.vtagTopContentStyle, 'width', '100%')
        this.$set(this.vtagTopContentStyle, 'paddingRight', '15px')
      } else {
        this.showTagNum = true
        let $topContent = this.$refs['top-content']
        let vtagItems = $topContent.querySelectorAll('.vtag-item')
        let firstItem = vtagItems[vtagItems.length - 1]
        let firstItemRect = firstItem.getBoundingClientRect()
        this.$set(this.vtagTopContentStyle, 'paddingRight', '94px')
        this.vtopContentWidth = `${firstItem.offsetLeft + Number(firstItem.getAttribute('transform-x')) + firstItemRect.width + Number($topContent.style.paddingLeft) + 94}px`
        this.rightTagNum = 0
        vtagItems.forEach(item => {
          let domRect = item.getBoundingClientRect()
          let topContentStyle = window.getComputedStyle($topContent)
          if (domRect.left + domRect.width > $topContent.clientWidth - Number(topContentStyle.paddingLeft.replace('px', '')) - Number(topContentStyle.paddingRight.replace('px', ''))) this.rightTagNum++
        })
      }
    },
    // 计算内容区域高度
    computedContainerHeight () {
      const $vtagWrap = this.$refs['vtag-wrap']
      const $container = this.$refs.container
      const $vtagFooter = this.$refs['vtag-footer']
      $container.style.height = `${$vtagWrap.offsetHeight - $container.offsetTop - ($vtagFooter.offsetHeight || 0)}px`
    },
    resetContentTag () {
      this.hasSelectionDom.forEach(item => {
        item.classList.add('hide')
      })
    }
  },
  mounted () {
    this.bodyStyle = document.body.style
    document.body.style = `${this.bodyStyle}overflow: hidden;`
  },
  beforeDestroy () {
    document.body.style = this.bodyStyle
  }
});

// CONCATENATED MODULE: ./packages/tag-picker/src/tag-picker.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_tag_pickervue_type_script_lang_js_ = (tag_pickervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/tag-picker/src/tag-picker.vue?vue&type=style&index=0&id=6c66d49e&scoped=true&lang=less&
var tag_pickervue_type_style_index_0_id_6c66d49e_scoped_true_lang_less_ = __webpack_require__("59a4");

// CONCATENATED MODULE: ./packages/tag-picker/src/tag-picker.vue






/* normalize component */

var tag_picker_component = normalizeComponent(
  src_tag_pickervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "6c66d49e",
  null
  
)

/* harmony default export */ var tag_picker = (tag_picker_component.exports);
// CONCATENATED MODULE: ./packages/tag-picker/index.js



tag_picker.install = function (Vue) {
  Vue.component(tag_picker.name, tag_picker)
}

/* harmony default export */ var packages_tag_picker = (tag_picker);

// CONCATENATED MODULE: ./packages/index.js


const components = [
  packages_tag_picker
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

/* harmony default export */ var packages_0 = ({
  install,
  // 以下是具体的组件列表
  tagPicker: packages_tag_picker
});

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
});
//# sourceMappingURL=vtagpicker.umd.js.map