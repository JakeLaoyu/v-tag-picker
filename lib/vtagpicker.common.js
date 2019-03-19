module.exports =
/******/ (function(modules) { // webpackBootstrap
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

/***/ "2350":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "2571":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("bf69");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("359c2c97", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "5353":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".vtag-item[data-v-3f14732c]{display:inline-block;padding:5px 15px;border-radius:3px;font-size:14px;white-space:nowrap;-webkit-box-sizing:border-box;box-sizing:border-box;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vtag-item-default[data-v-3f14732c]{background:#efefef;color:#444}.vtag-item-light[data-v-3f14732c]{color:#fff;background:#7c6cd9}", ""]);

// exports


/***/ }),

/***/ "8599":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("5353");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("7b9e0e31", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "9bd4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tag_picker_vue_vue_type_style_index_0_id_625d57ff_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2571");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tag_picker_vue_vue_type_style_index_0_id_625d57ff_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tag_picker_vue_vue_type_style_index_0_id_625d57ff_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tag_picker_vue_vue_type_style_index_0_id_625d57ff_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "9edf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tag_picker_item_vue_vue_type_style_index_0_id_3f14732c_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8599");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tag_picker_item_vue_vue_type_style_index_0_id_3f14732c_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tag_picker_item_vue_vue_type_style_index_0_id_3f14732c_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tag_picker_item_vue_vue_type_style_index_0_id_3f14732c_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "bf69":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "@-webkit-keyframes grow-data-v-625d57ff{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.1);transform:scale(1.1)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes grow-data-v-625d57ff{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.1);transform:scale(1.1)}to{-webkit-transform:scale(1);transform:scale(1)}}.vtag-wrap[data-v-625d57ff]{position:fixed;top:0;bottom:0;left:0;right:0;background:#fff}.vtag-top[data-v-625d57ff]{height:50px;background:#f2f2f2;font-size:0;margin-bottom:15px}.vtag-top[data-v-625d57ff],.vtag-top__content[data-v-625d57ff]{-webkit-box-sizing:border-box;box-sizing:border-box;position:relative}.vtag-top__content[data-v-625d57ff]{padding:10px 15px;overflow:auto;white-space:nowrap;height:100%}.vtag-top__right[data-v-625d57ff]{text-align:right;padding-right:15px;-webkit-box-sizing:border-box;box-sizing:border-box;width:94px;position:absolute;right:0;top:0;bottom:0;background:-webkit-gradient(linear,left top,right top,from(hsla(0,0%,96.1%,0)),to(#f5f5f5));background:linear-gradient(90deg,hsla(0,0%,96.1%,0),#f5f5f5)}.vtag-top__right[data-v-625d57ff]:after{content:\"\";height:100%}.vtag-top__num[data-v-625d57ff],.vtag-top__right[data-v-625d57ff]:after{display:inline-block;vertical-align:middle}.vtag-top__num[data-v-625d57ff]{font-size:16px;color:#fff;height:32px;line-height:32px;padding:0 6px;border-radius:16px;background:#000}.vtag-top__item[data-v-625d57ff]{position:absolute;left:15px}.vtag-container[data-v-625d57ff]{text-align:center;font-size:0;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}.vtag-container[data-v-625d57ff]:before{top:0}.vtag-container[data-v-625d57ff]:after,.vtag-container[data-v-625d57ff]:before{content:\"\";position:absolute;left:0;right:0;height:30px;background:-webkit-gradient(linear,left top,left bottom,from(#fff),to(hsla(0,0%,100%,0)));background:linear-gradient(180deg,#fff,hsla(0,0%,100%,0));z-index:2}.vtag-container[data-v-625d57ff]:after{bottom:0;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.vtag-container__content[data-v-625d57ff]{min-width:100px;overflow:auto;height:100%;padding:30px 25px;-webkit-box-sizing:border-box;box-sizing:border-box}.vtag-container__item[data-v-625d57ff]{display:inline-block;margin:0 15px 15px 0;position:relative}.vtag-container__item.hide[data-v-625d57ff]{margin:0;padding:0;width:0!important;height:0!important}.vtag-container__item.animate[data-v-625d57ff]{-webkit-animation:grow-data-v-625d57ff linear alternate;animation:grow-data-v-625d57ff linear alternate}", ""]);

// exports


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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"bd2ff910-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/tag-picker/src/tag-picker.vue?vue&type=template&id=625d57ff&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"vtag-wrap",staticClass:"vtag-wrap",style:({
    'z-index': _vm.zIndex
  })},[_c('div',{ref:"top",staticClass:"vtag-top"},[_c('div',{ref:"top-content",staticClass:"vtag-top__content",style:(_vm.vtagTopContentStyle),on:{"click":function (e){ _vm.handleCancelVtag(e) },"scroll":_vm.topScroll}},[_vm._l((_vm.selection),function(item,index){return _c('VTagPickerItem',{key:index,staticClass:"vtag-top__item",style:({
          transition: ("all " + (_vm.animationDuration / 1000) + "s")
        }),attrs:{"type":"light","name":item.name,"totalSelectionKey":item[_vm.OnlyKey]}})}),_c('div',{staticClass:"vtag-top-content__width",style:({
        width: _vm.vtopContentWidth,
        height: '1px'
      })})],2),(_vm.showTagNum)?_c('div',{staticClass:"vtag-top__right"},[_c('div',{staticClass:"vtag-top__num"},[_vm._v(_vm._s(("+" + (_vm.totalSelection.length))))])]):_vm._e()]),_vm._t("top"),_c('div',{ref:"container",staticClass:"vtag-container"},[_c('div',{staticClass:"vtag-container__content"},_vm._l((_vm.totalData),function(item,index){return _c('VTagPickerItem',{key:index,staticClass:"vtag-container__item",style:({
          transition: ("all " + (_vm.animationDuration / 1000) + "s"),
          animationDuration: ((_vm.animationDuration / 1000) + "s")
        }),attrs:{"name":item.name,"totalSelectionKey":item[_vm.OnlyKey]},on:{"click":function (e){ _vm.handleClickVtag(e,item) }}})}),1)]),_c('div',{ref:"vtag-footer",staticClass:"vtag-footer"},[_vm._t("footer")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/tag-picker/src/tag-picker.vue?vue&type=template&id=625d57ff&scoped=true&

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
   /* eslint-enable */
}

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"bd2ff910-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/tag-picker/src/tag-picker-item.vue?vue&type=template&id=3f14732c&scoped=true&
var tag_picker_itemvue_type_template_id_3f14732c_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vtag-item",class:[ ("vtag-item-" + _vm.type) ],attrs:{"totalSelection-key":_vm.totalSelectionKey},on:{"click":_vm.handleClickVtag}},[_vm._v("\n  "+_vm._s(_vm.name)+"\n")])}
var tag_picker_itemvue_type_template_id_3f14732c_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/tag-picker/src/tag-picker-item.vue?vue&type=template&id=3f14732c&scoped=true&

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
  name: 'vTagPickerItem',
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
// EXTERNAL MODULE: ./packages/tag-picker/src/tag-picker-item.vue?vue&type=style&index=0&id=3f14732c&scoped=true&lang=less&
var tag_picker_itemvue_type_style_index_0_id_3f14732c_scoped_true_lang_less_ = __webpack_require__("9edf");

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
  tag_picker_itemvue_type_template_id_3f14732c_scoped_true_render,
  tag_picker_itemvue_type_template_id_3f14732c_scoped_true_staticRenderFns,
  false,
  null,
  "3f14732c",
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
//



/* harmony default export */ var tag_pickervue_type_script_lang_js_ = ({
  name: 'vTagPicker',
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
      vtagTopContentStyle: {},
      showTagNum: false,
      selection: [], // 顶部显示数据
      domQueue: [],
      animating: false,
      totalSelection: [], // 所有已选数据
      vtopContentWidth: '100%',
      topScroll: throttle(this.computedTagNumShow, 100, 200),
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
      let targetKey = $target.getAttribute('totalSelection-key')

      this.cancelTag(targetKey)
    },
    cancelTag (targetKey) {
      let $topContent = this.$refs['top-content']
      let $container = this.$refs['container']
      let $topTarget = $topContent.querySelector(`[totalSelection-key=${targetKey}]`)
      let $containerTarget = $container.querySelector(`[totalSelection-key=${targetKey}]`)

      let $targetWidth = $topTarget.offsetWidth
      if ($topTarget.classList.contains('vtag-item-default') || !$topTarget.classList.contains('vtag-item')) return
      $topTarget.classList.remove('vtag-item-light')
      $topTarget.classList.add('vtag-item-default')
      let index = this.totalSelection.findIndex(item => item[this.OnlyKey] === targetKey)
      this.totalSelection.splice(index, 1)
      $topTarget.innerHTML = ''
      let currentNode = $topTarget
      while (currentNode.nextElementSibling && currentNode.nextElementSibling.classList.contains('vtag-item')) {
        let nextElement = currentNode.nextElementSibling
        let transformX = Number(nextElement.getAttribute('transform-x')) - $targetWidth - 15
        nextElement.setAttribute('transform-x', transformX)
        nextElement.style.transform = `translate(${transformX}px, 0)`
        currentNode = nextElement
      }

      $topTarget.parentNode.removeChild($topTarget)

      $containerTarget.classList.remove('vtag-item-light')

      this.computedTagNumShow()
    },
    // 选中 tag
    handleClickVtag (e, data) {
      let $target = e.target
      let targetKey = $target.getAttribute('totalSelection-key')
      let $topContent = this.$refs['top-content']
      let $topTarget = $topContent.querySelector(`[totalSelection-key=${targetKey}]`)
      if ($target.classList.contains('vtag-item-light')) {
        if (!$topTarget) return
        this.cancelTag(targetKey)
        return
      }
      $target.classList.add('animate')
      $target.classList.add('vtag-item-light')
      this.totalSelection.push(data)
      this.domQueue.push({
        event: e,
        data
      })
      setTimeout(() => {
        $target.classList.remove('animate')
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

      // $target.style.width = `${$target.offsetWidth}px`
      // $target.style.height = `${$target.offsetHeight}px`
      // $target.style.background = `transparent`
      // $target.innerHTML = ''

      await sleep(10)

      this.moveExist(e)
      $targetClone.style.transform = `translate(${-$targetRect.x + 15}px,${-$targetRect.y + 10}px)`
      setTimeout(() => {
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
      }
    },
    // 计算内容区域高度
    computedContainerHeight () {
      const $vtagWrap = this.$refs['vtag-wrap']
      const $container = this.$refs.container
      const $vtagFooter = this.$refs['vtag-footer']
      $container.style.height = `${$vtagWrap.offsetHeight - $container.offsetTop - ($vtagFooter.offsetHeight || 0)}px`
    }
  },
  mounted () {},
  beforeDestroy () {}
});

// CONCATENATED MODULE: ./packages/tag-picker/src/tag-picker.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_tag_pickervue_type_script_lang_js_ = (tag_pickervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/tag-picker/src/tag-picker.vue?vue&type=style&index=0&id=625d57ff&scoped=true&lang=less&
var tag_pickervue_type_style_index_0_id_625d57ff_scoped_true_lang_less_ = __webpack_require__("9bd4");

// CONCATENATED MODULE: ./packages/tag-picker/src/tag-picker.vue






/* normalize component */

var tag_picker_component = normalizeComponent(
  src_tag_pickervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "625d57ff",
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
  install
});



// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
/* concated harmony reexport vTagPicker */__webpack_require__.d(__webpack_exports__, "vTagPicker", function() { return packages_tag_picker; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
//# sourceMappingURL=vtagpicker.common.js.map