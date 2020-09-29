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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"#app {\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\n.hide {\\r\\n  display: none !important;\\r\\n}\\r\\n\\r\\n.content {\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  right: 0;\\r\\n  left: 200px;\\r\\n  min-height: 100vh;\\r\\n  padding-bottom: 50px;\\r\\n}\\r\\n\\r\\n.sidebar {\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  bottom: 0;\\r\\n  left: 0;\\r\\n  width: 200px;\\r\\n  z-index: 100;\\r\\n  padding: 10px;\\r\\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);\\r\\n  overflow-y: auto;\\r\\n}\\r\\n\\r\\n  .center {\\r\\n    text-align: center;\\r\\n    margin: 0 auto;\\r\\n  }\\r\\n\\r\\n  img {\\r\\n    max-width: 100%;\\r\\n    height: auto;\\r\\n}\\r\\n\\r\\n.post__cards {\\r\\n    display: grid;\\r\\n    grid-template-columns: repeat(8, 1fr);\\r\\n    grid-column-gap: 50px;\\r\\n    grid-row-gap: 30px;\\r\\n    margin: 20px;\\r\\n}\\r\\n\\r\\n.post__card {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    grid-column: span 2;\\r\\n}\\r\\n\\r\\n.post__card-pic {\\r\\n    margin-bottom: 20px;\\r\\n}\\r\\n\\r\\n.post__card-pic img {\\r\\n  object-fit: cover;\\r\\n}\\r\\n\\r\\n.post__card-title {\\r\\n    font-weight: 500;\\r\\n    font-size: 18px;\\r\\n    line-height: 24px;\\r\\n    color: black;\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n.post__card-desc {\\r\\n    font-size: 16px;\\r\\n    line-height: 24px;\\r\\n}\\r\\n\\r\\n.movie__title {\\r\\n  text-align: center;\\r\\n  margin-bottom: 40px;\\r\\n}\\r\\n\\r\\n.movie__posters {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.desc {\\r\\n  max-width: 400px;\\r\\n  margin: 15px;\\r\\n}\\r\\n\\r\\n.poster {\\r\\n  max-width: 400px;\\r\\n  margin: 15px;\\r\\n}\\r\\n\\r\\nnav {\\r\\n  position: absolute;\\r\\n  bottom: 0;\\r\\n  left: 0;\\r\\n  right: 0;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/components/movies.component.js":
/*!********************************************!*\
  !*** ./src/components/movies.component.js ***!
  \********************************************/
/*! exports provided: moviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"moviesComponent\", function() { return moviesComponent; });\n/* harmony import */ var _templates_movie_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates/movie.template */ \"./src/templates/movie.template.js\");\n/* harmony import */ var _templates_person_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../templates/person.template */ \"./src/templates/person.template.js\");\n/* harmony import */ var _components_pagination_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/pagination.component */ \"./src/components/pagination.component.js\");\n\r\n\r\n\r\n\r\nfunction moviesComponent(data, type) {\r\n\r\n    site.innerHTML = ''\r\n    movieInfo.innerHTML = ''\r\n\r\n    if (type === \"movie\") {\r\n        data.forEach((element) => {\r\n            const html = Object(_templates_movie_template__WEBPACK_IMPORTED_MODULE_0__[\"renderPost\"])(element)\r\n            site.insertAdjacentHTML(\"beforeend\", html);\r\n        });\r\n    } else {\r\n        data.forEach((element) => {\r\n            const html = Object(_templates_person_template__WEBPACK_IMPORTED_MODULE_1__[\"renderPerson\"])(element)\r\n            site.insertAdjacentHTML(\"beforeend\", html);\r\n        });\r\n    }   \r\n\r\n    Object(_components_pagination_component__WEBPACK_IMPORTED_MODULE_2__[\"showContent\"])()\r\n}\r\n\r\nconst site = document.querySelector(\".post__cards\");\r\nconst movieInfo = document.querySelector(\".movie__info\");\r\n\n\n//# sourceURL=webpack:///./src/components/movies.component.js?");

/***/ }),

/***/ "./src/components/page.component.js":
/*!******************************************!*\
  !*** ./src/components/page.component.js ***!
  \******************************************/
/*! exports provided: pageMovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pageMovieComponent\", function() { return pageMovieComponent; });\n/* harmony import */ var _services_api_info_servise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/api.info.servise */ \"./src/services/api.info.servise.js\");\n\r\n\r\nfunction pageMovieComponent(event) {\r\n\r\n    if (event.target.tagName === 'H3') {\r\n        event.preventDefault()\r\n        console.log(event.target)\r\n        const type = event.target.dataset.type\r\n        const id = event.target.dataset.id\r\n        site.innerHTML = ''\r\n        movieInfo.innerHTML = ''\r\n        Object(_services_api_info_servise__WEBPACK_IMPORTED_MODULE_0__[\"apiInfo\"])(type, id)\r\n    }\r\n}\r\n\r\nconst site = document.querySelector(\".post__cards\");\r\nconst movieInfo = document.querySelector(\".movie__info\");\n\n//# sourceURL=webpack:///./src/components/page.component.js?");

/***/ }),

/***/ "./src/components/pagination.component.js":
/*!************************************************!*\
  !*** ./src/components/pagination.component.js ***!
  \************************************************/
/*! exports provided: paginationComponent, showContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"paginationComponent\", function() { return paginationComponent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showContent\", function() { return showContent; });\nfunction paginationComponent(event) {\r\n  event.preventDefault()\r\n\r\n  if(event.target.tagName === 'A') {\r\n\r\n    document.querySelectorAll('.page-item').forEach(i => {i.classList.remove('active')})\r\n    event.target.parentNode.classList.add('active')\r\n\r\n    pageNum = event.target.textContent\r\n    console.log(pageNum)\r\n    showContent()\r\n  }\r\n}\r\n\r\nfunction showContent() {\r\n  const cardElements = Array.from(document.querySelectorAll('.post__card'))\r\n  console.log('cardElements: ', cardElements)\r\n  let start = (pageNum - 1) * notesOnPage\r\n  let end = start + notesOnPage\r\n\r\n  let notes = cardElements.slice(start, end)\r\n\r\n  cardElements.forEach(i => i.classList.add('hide'))\r\n\r\n  cardElements.forEach(el => el.classList.add('hide'))\r\n  notes.forEach(el => el.classList.remove('hide'))\r\n}\r\n\r\nlet pageNum = 1\r\nconst notesOnPage = 4;\r\n\n\n//# sourceURL=webpack:///./src/components/pagination.component.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ \"./src/styles/main.css\");\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_main_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_api_servise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/api.servise */ \"./src/services/api.servise.js\");\n/* harmony import */ var _components_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/page.component */ \"./src/components/page.component.js\");\n/* harmony import */ var _services_search_servise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/search.servise */ \"./src/services/search.servise.js\");\n/* harmony import */ var _components_pagination_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pagination.component */ \"./src/components/pagination.component.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.querySelector('#item-actors').addEventListener('click', (event) => Object(_services_api_servise__WEBPACK_IMPORTED_MODULE_1__[\"load\"])(event, 'person'))\r\ndocument.querySelector('#item-movies').addEventListener('click', (event) => Object(_services_api_servise__WEBPACK_IMPORTED_MODULE_1__[\"load\"])(event, 'movie'))\r\n\r\ndocument.querySelector('#search').oninput = _services_search_servise__WEBPACK_IMPORTED_MODULE_3__[\"search\"]\r\n\r\ndocument.querySelector('.post__cards').addEventListener('click', (event) => Object(_components_page_component__WEBPACK_IMPORTED_MODULE_2__[\"pageMovieComponent\"])(event))\r\n\r\ndocument.querySelector('.pagination').addEventListener('click', (event) => Object(_components_pagination_component__WEBPACK_IMPORTED_MODULE_4__[\"paginationComponent\"])(event))\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/services/api.info.servise.js":
/*!******************************************!*\
  !*** ./src/services/api.info.servise.js ***!
  \******************************************/
/*! exports provided: apiInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"apiInfo\", function() { return apiInfo; });\n/* harmony import */ var _templates_movie_page_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates/movie.page.template */ \"./src/templates/movie.page.template.js\");\n/* harmony import */ var _templates_actor_page_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates/actor.page.template */ \"./src/templates/actor.page.template.js\");\n\r\n\r\n\r\nasync function apiInfo(type, id) {\r\n  \r\n    const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=4c6a69b63f9516de8cf08c2d709034ab`\r\n  \r\n    const response = await fetch(url);\r\n    const data = await response.json();\r\n    document.querySelector('.pagination').classList.add('hide')\r\n\r\n    console.log('INFO: ', data)\r\n\r\n    if (type === 'movie') {\r\n        const html = Object(_templates_movie_page_template__WEBPACK_IMPORTED_MODULE_0__[\"renderPageMovie\"])(data)\r\n        site.insertAdjacentHTML(\"afterbegin\", html);\r\n    } else if (type === 'person') {\r\n        const html = Object(_templates_actor_page_template__WEBPACK_IMPORTED_MODULE_1__[\"renderPageActor\"])(data)\r\n        site.insertAdjacentHTML(\"afterbegin\", html);\r\n    }\r\n}\r\n\r\nconst site = document.querySelector(\".movie__info\");\n\n//# sourceURL=webpack:///./src/services/api.info.servise.js?");

/***/ }),

/***/ "./src/services/api.servise.js":
/*!*************************************!*\
  !*** ./src/services/api.servise.js ***!
  \*************************************/
/*! exports provided: load */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"load\", function() { return load; });\n/* harmony import */ var _components_movies_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../components/movies.component */ \"./src/components/movies.component.js\");\n\r\n\r\nasync function load(event, type) {\r\n\r\n  event.preventDefault()\r\n\r\n  const url =`https://api.themoviedb.org/3/trending/${type}/week?api_key=4c6a69b63f9516de8cf08c2d709034ab`;\r\n\r\n  const response = await fetch(url);\r\n  const data = await response.json();\r\n\r\n  document.querySelector('.pagination').classList.remove('hide')\r\n\r\n  Object(_components_movies_component__WEBPACK_IMPORTED_MODULE_0__[\"moviesComponent\"])(data.results, type)\r\n\r\n  // if (type === \"movie\") {\r\n  //   moviesComponent(data.results);\r\n  // } else {\r\n  //   personComponent(data.results);\r\n  // }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/services/api.servise.js?");

/***/ }),

/***/ "./src/services/search.servise.js":
/*!****************************************!*\
  !*** ./src/services/search.servise.js ***!
  \****************************************/
/*! exports provided: search */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"search\", function() { return search; });\nfunction search() {\r\n    let val = this.value.trim()\r\n    let searchItems = document.querySelectorAll('.post__card')\r\n    let itemsH3 = document.querySelectorAll('.post__card-title')\r\n    if (val != '') {\r\n        searchItems.forEach((el, i) => {\r\n            if (itemsH3[i].innerText.toLowerCase().search(val.toLowerCase()) == -1) {\r\n                el.classList.add('hide')\r\n            } else {\r\n                el.classList.remove('hide')\r\n            }\r\n        })\r\n    } else {\r\n        searchItems.forEach((el) => {\r\n            el.classList.remove('hide')\r\n        })\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/services/search.servise.js?");

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/main.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/styles/main.css?");

/***/ }),

/***/ "./src/templates/actor.page.template.js":
/*!**********************************************!*\
  !*** ./src/templates/actor.page.template.js ***!
  \**********************************************/
/*! exports provided: renderPageActor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderPageActor\", function() { return renderPageActor; });\nfunction renderPageActor(element) {\r\n    return `\r\n        <div class=\"movie__wrapper\">\r\n            <h2 class=\"movie__title\">${element.name}</h2>\r\n            <div class=\"movie__posters\">\r\n                <div class=\"desc\">\r\n                    <p>${element.biography}</p>\r\n                    <ul>\r\n                        <li>День рождения: ${element.birthday}</li>\r\n                        <li>Родился в: ${element.place_of_birth}</li>\r\n                        <li>Рейтинг: ${element.popularity} </li>\r\n                        <li>Статус: ${element.known_for_department}</li>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"poster\">\r\n                    <img src=\"https://image.tmdb.org/t/p/w500${element.profile_path}\" alt=\"${element.name}\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    `;\r\n}\n\n//# sourceURL=webpack:///./src/templates/actor.page.template.js?");

/***/ }),

/***/ "./src/templates/movie.page.template.js":
/*!**********************************************!*\
  !*** ./src/templates/movie.page.template.js ***!
  \**********************************************/
/*! exports provided: renderPageMovie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderPageMovie\", function() { return renderPageMovie; });\nfunction renderPageMovie(element) {\r\n    // console.log('Render: ', element)\r\n    return `\r\n        <div class=\"movie__wrapper\">\r\n            <h2 class=\"movie__title\">${element.title}</h2>\r\n            <div class=\"movie__posters\">\r\n                <div class=\"desc\">\r\n                    <p>${element.overview}</p>\r\n                    <ul>\r\n                        <li>Бюджет: ${element.budget} </li>\r\n                        <li>Жанр: </li>\r\n                        <li>Страна: ${element.production_countries.map(i => i.name)}</li>\r\n                        <li>Дата релиза: ${element.release_date}</li>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"poster\">\r\n                    <img src=\"https://image.tmdb.org/t/p/w500${element.poster_path}\" alt=\"${element.original_title}\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    `\r\n}\n\n//# sourceURL=webpack:///./src/templates/movie.page.template.js?");

/***/ }),

/***/ "./src/templates/movie.template.js":
/*!*****************************************!*\
  !*** ./src/templates/movie.template.js ***!
  \*****************************************/
/*! exports provided: renderPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderPost\", function() { return renderPost; });\nfunction renderPost(element) {\r\n  return `\r\n        <div class=\"post__card hide\">\r\n                <div class=\"post__card-pic\">\r\n                    <img src=\" https://image.tmdb.org/t/p/w500${element.poster_path} \" alt=\" ${element.title} \"/>\r\n                </div>\r\n                <a href=\"#\" class=\"post-link\"><h3 class=\"post__card-title\" data-id=\"${element.id}\" data-type=\"movie\">${element.title} (${element.release_date.split('-').join('.')})</h3></a>\r\n                <p class=\"post__card-desc\">\r\n                    ${element.overview}\r\n                </p>\r\n        </div>\r\n    `;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/templates/movie.template.js?");

/***/ }),

/***/ "./src/templates/person.template.js":
/*!******************************************!*\
  !*** ./src/templates/person.template.js ***!
  \******************************************/
/*! exports provided: renderPerson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderPerson\", function() { return renderPerson; });\nfunction renderPerson(element) {\r\n  return `\r\n          <div class=\"post__card hide\">\r\n              <div class=\"post__card-pic\">\r\n                  <img src=\" https://image.tmdb.org/t/p/w500${element.profile_path} \" alt=\" ${element.name} \"/>\r\n              </div>\r\n              <a href=\"#\" class=\"person-link\"><h3 class=\"post__card-title\" data-id=\"${element.id}\" data-type=\"person\">${element.name}</h3></a>\r\n          </div>\r\n      `;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/templates/person.template.js?");

/***/ })

/******/ });