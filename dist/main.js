/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/bg-image-darken.jpg */ \"./src/assets/bg-image-darken.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body{\r\n    min-height: 100%;\r\n    width: 100%;\r\n    background-image:url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n}\r\nhtml{\r\n    height: 100%;\r\n}\r\n*{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-size: 20px;\r\n    font-family: 'Poppins', sans-serif; \r\n}\r\n#content{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\na{\r\n    text-decoration: none;\r\n    color: rgb(238, 217, 180);\r\n}\r\nheader{\r\n    width: 100%;\r\n    height: 90px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 10px 40px;\r\n    background-color: black;\r\n    position: absolute;\r\n    top: 0;\r\n}\r\n.header-left{\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n.header_logo{\r\n    width: 60px;\r\n    height: 60px;\r\n    margin-right: 20px;\r\n}\r\n.header_title{\r\n    font-weight: bold;\r\n    font-size: 1.5rem;\r\n}\r\n.header-list{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n}\r\n.header-list li{\r\n    list-style: none;\r\n    margin: 18px;\r\n    color: rgb(238, 217, 180);\r\n    cursor: pointer;\r\n}\r\n.header-list li:hover{\r\n    transform: translateY(3px);\r\n    transition: 0.2s;\r\n}\r\n.burger_menu .burger_img{\r\n    display: none;\r\n    width: 60px;\r\n    height: 60px;\r\n    margin-right: 20px;\r\n    background-color: #7e7ce8;\r\n    border-radius: 10px;\r\n}\r\n.inactive{\r\n    display: none;\r\n}\r\n.home-container,\r\n.about-container{\r\n    height: 100vh;\r\n    width: 100vw;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    overflow: scroll;\r\n}\r\n.home-title,\r\n.about-title{\r\n    color: rgb(203, 145, 44);\r\n    font-weight: bold;\r\n    font-size: 1.5rem;\r\n}\r\n.home-intro{\r\n    text-align: center;\r\n    line-height: 2rem;\r\n    margin: 4rem 0;\r\n    color: white;\r\n    font-weight: bold;\r\n}\r\n.home-button{\r\n    padding: 10px;\r\n    border-radius: 8px;\r\n    background: #cb912c;\r\n    color: white;\r\n    font-weight: bold;\r\n    border: none;\r\n}\r\n.home-button:hover{\r\n    transition: .2s;\r\n    transform: scale(1.3);\r\n}\r\n.about-developer,\r\n.about-github,\r\n.about-text,\r\n.recipeName{\r\n    text-align: center;\r\n    line-height: 2rem;\r\n    color: white;\r\n    font-weight: bold;\r\n}\r\n/* RECIPES */\r\n.recipe-container{\r\n    height: 100vh;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    gap: 20px;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    overflow: scroll;\r\n}\r\n.recipe-card{\r\n    display: flex;\r\n    width: 200px;\r\n    height: 280px;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n    background: rgb(203, 145, 44);\r\n    padding: 10px;\r\n    border-radius: 10px;\r\n}\r\n.recipe-card:hover{\r\n    transform: translateY(10px);\r\n    transition: .3s;\r\n}\r\n.recipeImg{\r\n    width: 150px;\r\n    height: 150px;\r\n    border-radius: 20px;\r\n}\r\n.github_link{\r\n    text-decoration: none;\r\n    color: rgb(203, 145, 44);\r\n}\r\nfooter{\r\n    position: fixed;\r\n    margin-top: auto;\r\n    bottom: 0;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    background-color: black;\r\n}\r\n.p_footer{\r\n    width: 30%;\r\n    text-align: center;\r\n    font-size: .6rem;\r\n    color: rgb(238, 217, 180);\r\n}\r\nspan{\r\n    color: rgb(203, 145, 44);\r\n}\r\nspan,\r\n.github_link{\r\n    font-size: .8rem;\r\n}\r\n.developer{\r\n    margin-top: 2px;\r\n    padding: 4px;\r\n    background-color: rgb(89, 80, 80);\r\n    border-radius: 8px;\r\n}\r\n\r\n/* MOBILE MENU */\r\n.mobile_menu{\r\n    width: 100%;\r\n    height: 40vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    margin-top: 90px;\r\n    background-color: #7e7ce8;\r\n    border-radius: 0 0 20px 20px;\r\n    color: white;\r\n}\r\n.mobile_ul{\r\n    gap: 10px;\r\n    list-style: none;\r\n}\r\n.mobile_option{\r\n    margin: 20px 0;\r\n    text-align: center;\r\n    width: 100%;\r\n    cursor: pointer;\r\n    font-size: 3rem;\r\n    border-bottom: white solid 4px;\r\n}\r\n\r\n/* MEDIA QUERIES */\r\n@media ( max-width: 700px ){\r\n    header{\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: space-between;\r\n        padding: 10px;\r\n    }\r\n    *{\r\n        font-size: 16px;\r\n    }\r\n    .header-list{\r\n        display: none;\r\n    }\r\n    .burger_menu .burger_img{\r\n        display: block;\r\n        width: 54px;\r\n        height: 54px;\r\n    }\r\n    .header_title{\r\n    display: none;\r\n    }\r\n    .header_logo{\r\n    width: 60px;\r\n    height: 60px;\r\n    }\r\n    .p_footer{\r\n        display: none;\r\n    }\r\n    .developer{\r\n        display: block;\r\n    }\r\n    .recipe-card{\r\n        width: 200px;\r\n        height: 200px;\r\n        padding: 5px;\r\n        border-radius: 10px;\r\n    }\r\n    .recipe-container{\r\n        align-content: center;\r\n        gap: 14px;\r\n        overflow: scroll;\r\n    }\r\n    .recipeImg{\r\n        width: 100px;\r\n        height: 100px;\r\n        border-radius: 20px;\r\n    }\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-recipes/./src/styles/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-recipes/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://odin-recipes/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-recipes/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-recipes/./src/styles/main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-recipes/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-recipes/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-recipes/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-recipes/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-recipes/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-recipes/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/navbar */ \"./src/modules/navbar.js\");\n/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_recipes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/recipes */ \"./src/modules/recipes.js\");\n/* harmony import */ var _modules_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/about */ \"./src/modules/about.js\");\n/* harmony import */ var _modules_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/footer */ \"./src/modules/footer.js\");\n/* harmony import */ var _modules_mobile_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/mobile_menu */ \"./src/modules/mobile_menu.js\");\n/* harmony import */ var _src_styles_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/styles/main.css */ \"./src/styles/main.css\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Get the main div where HTML will be injected\r\nconst content = document.querySelector(\"#content\");\r\n\r\n// The RenderXpage function creates the elements needed for the page to load properly\r\nfunction renderHomePage(){\r\n    content.appendChild(_modules_navbar__WEBPACK_IMPORTED_MODULE_0__.header_main);\r\n    content.appendChild(_modules_home__WEBPACK_IMPORTED_MODULE_1__.home);\r\n    content.appendChild(_modules_footer__WEBPACK_IMPORTED_MODULE_4__.footer_main);\r\n}\r\nfunction renderRecipesPage(){\r\n    content.appendChild(_modules_navbar__WEBPACK_IMPORTED_MODULE_0__.header_main);\r\n    content.appendChild(_modules_recipes__WEBPACK_IMPORTED_MODULE_2__.recipes);\r\n    content.appendChild(_modules_footer__WEBPACK_IMPORTED_MODULE_4__.footer_main);\r\n}\r\nfunction renderAboutPage(){\r\n    content.appendChild(_modules_navbar__WEBPACK_IMPORTED_MODULE_0__.header_main);\r\n    content.appendChild(_modules_about__WEBPACK_IMPORTED_MODULE_3__.renderAbout);\r\n    content.appendChild(_modules_footer__WEBPACK_IMPORTED_MODULE_4__.footer_main);\r\n}\r\nfunction renderMobileMenu(){\r\n    content.appendChild(_modules_navbar__WEBPACK_IMPORTED_MODULE_0__.header_main);\r\n    content.appendChild(_modules_mobile_menu__WEBPACK_IMPORTED_MODULE_5__.mobile_menu);\r\n    content.appendChild(_modules_footer__WEBPACK_IMPORTED_MODULE_4__.footer_main);\r\n}\r\n\r\n// Function that handles the button events and render the page as needed using the required function\r\n\r\n// This Function also checks if burger-menu is visible\r\n\r\ndocument.addEventListener(\"click\", (e)=>{\r\n    const idBtn = e.target.id;\r\n\r\n    switch(idBtn){\r\n        case \"homeBtn\":\r\n        case \"homeBtnMobile\":\r\n            content.innerHTML = \"\"\r\n            renderHomePage();\r\n            break;\r\n        case \"aboutBtn\":\r\n        case \"aboutBtnMobile\":\r\n            content.innerHTML = \"\"\r\n            renderAboutPage();\r\n            break;\r\n        case \"recipesBtn\":\r\n        case \"toRecipes\":\r\n        case \"recipesBtnMobile\":\r\n            content.innerHTML = \"\"\r\n            renderRecipesPage();\r\n            break;\r\n        case \"burguerVisible\":\r\n            content.innerHTML = \"\"\r\n            renderMobileMenu();\r\n            break\r\n\r\n\r\n    }\r\n})\r\n\r\n\r\n\r\n// This renders home page by default for the moment\r\nrenderHomePage()\r\n\r\n\r\n\n\n//# sourceURL=webpack://odin-recipes/./src/index.js?");

/***/ }),

/***/ "./src/modules/about.js":
/*!******************************!*\
  !*** ./src/modules/about.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderAbout: () => (/* binding */ aboutContainer)\n/* harmony export */ });\nconst aboutContainer = document.createElement(\"div\")\r\naboutContainer.classList.add(\"about-container\")\r\n\r\nconst titleContent = \"About RECIPES 😀\"\r\nconst aboutTitle = document.createElement(\"h2\")\r\naboutTitle.textContent = titleContent\r\naboutTitle.classList.add(\"about-title\")\r\n\r\nconst developerContent = \"Developed by <span class='about-span'>Burin2301</span>\"\r\nconst aboutDeveloper = document.createElement(\"p\")\r\naboutDeveloper.innerHTML = developerContent\r\naboutDeveloper.classList.add(\"about-developer\")\r\n\r\nconst githubContent = 'Github: <a class=\"github_link\" href=\"https://github.com/Burin2301\"><span>Profile</span></a>'\r\nconst aboutGitHub = document.createElement('p')\r\naboutGitHub.innerHTML = githubContent\r\naboutGitHub.classList.add(\"about-github\")\r\n\r\nconst aboutTextContent = `\r\nCreated with Webpack, HTML, CSS and vanilla JavaScript as a part of The Odin Project Curriculum.\r\nBasically this is a project where I am using knowledge that I have acquired in all of these months.\r\nI have created a youtube channel to track all of my progress, haven't uploaded anything but well\r\nI have to learn how to edit video first xDD . `\r\nconst aboutText = document.createElement('p')\r\naboutText.classList.add(\"about-text\")\r\naboutText.innerText = aboutTextContent\r\n\r\n\r\naboutContainer.appendChild(aboutTitle)\r\naboutContainer.appendChild(aboutDeveloper)\r\naboutContainer.appendChild(aboutGitHub)\r\naboutContainer.appendChild(aboutText)\r\n\r\n\r\n\n\n//# sourceURL=webpack://odin-recipes/./src/modules/about.js?");

/***/ }),

/***/ "./src/modules/footer.js":
/*!*******************************!*\
  !*** ./src/modules/footer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   footer_main: () => (/* binding */ footer)\n/* harmony export */ });\nconst footer = document.createElement('footer')\r\nconst content = `\r\n    <p class=\"p_footer\">Page logo by <span>Freepik</span></p>\r\n    <p class=\"p_footer developer\">Developed by <a class=\"github_link\" href=\"https://github.com/Burin2301\" target=\"_blank\">Burin2301</a> </p>\r\n    <p class=\"p_footer\">Menu icon by <span>Md Tanvirul Haque</span></p>\r\n`;\r\n\r\nfooter.innerHTML = content;\r\n\r\n\n\n//# sourceURL=webpack://odin-recipes/./src/modules/footer.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   home: () => (/* binding */ homePage)\n/* harmony export */ });\nconst homePage = document.createElement('div')\r\nhomePage.classList.add(\"home-container\")\r\nconst homeContent = `\r\n        <h2 class=\"home-title\">Welcome to Recipes :)</h2>\r\n        <p class=\"home-intro\">\r\n            This page was created for us to share our best recipes for all situations!.\r\n            <br>\r\n            It could be that dessert that makes you feel happy and energized,\r\n            <br>\r\n            that special tea you drink and makes you feel at home,\r\n            <br>\r\n            that chicken dish you grandma used to cook that always made you want more!\r\n            <br>\r\n            Share that recipe with us and let us become a great community that shares the best dishes we had ever taste!\r\n        </p>\r\n        <button class=\"home-button\" id=\"toRecipes\">Go to the recipe list</button>\r\n`\r\n\r\nhomePage.innerHTML = homeContent\r\n\r\n\n\n//# sourceURL=webpack://odin-recipes/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/mobile_menu.js":
/*!************************************!*\
  !*** ./src/modules/mobile_menu.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mobile_menu: () => (/* binding */ mobile_menu)\n/* harmony export */ });\nconst mobile_menu = document.createElement('div');\r\nmobile_menu.classList.add('mobile_menu')\r\nmobile_menu.setAttribute(\"id\",'mobileMenu');\r\n\r\nconst mobile_list = document.createElement('ul')\r\nmobile_list.classList.add('mobile_ul')\r\n\r\nconst mobile_options_home = document.createElement('li')\r\nmobile_options_home.classList.add('mobile_option')\r\nmobile_options_home.innerText = \"Home\"\r\nmobile_options_home.setAttribute(\"id\",'homeBtnMobile');\r\n\r\nconst mobile_options_recipes = document.createElement('li')\r\nmobile_options_recipes.classList.add('mobile_option')\r\nmobile_options_recipes.innerText = \"Recipes\"\r\nmobile_options_recipes.setAttribute('id','recipesBtnMobile');\r\n\r\nconst mobile_options_about = document.createElement('li')\r\nmobile_options_about.classList.add('mobile_option')\r\nmobile_options_about.innerText = \"About\"\r\nmobile_options_about.setAttribute('id','aboutBtnMobile');\r\n\r\nmobile_menu.appendChild(mobile_list)\r\n\r\nmobile_list.appendChild(mobile_options_home)\r\nmobile_list.appendChild(mobile_options_recipes)\r\nmobile_list.appendChild(mobile_options_about)\r\n\r\n\n\n//# sourceURL=webpack://odin-recipes/./src/modules/mobile_menu.js?");

/***/ }),

/***/ "./src/modules/navbar.js":
/*!*******************************!*\
  !*** ./src/modules/navbar.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   header_main: () => (/* binding */ header)\n/* harmony export */ });\n/* harmony import */ var _assets_libro_de_recetas_freepik_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/libro-de-recetas-freepik.png */ \"./src/assets/libro-de-recetas-freepik.png\");\n/* harmony import */ var _assets_barra_menu_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/barra-menu.png */ \"./src/assets/barra-menu.png\");\n\r\n\r\n\r\nconst header = document.createElement(\"header\")\r\n\r\nconst content = `\r\n<div class=\"header-left\">\r\n    <a href=\"#\"><img class=\"header_logo\" src=\"${_assets_libro_de_recetas_freepik_png__WEBPACK_IMPORTED_MODULE_0__}\" alt=\"\"></a>\r\n    <a href=\"#\" class=\"header_title\">RECIPES 😀</a>\r\n</div>\r\n\r\n<div id=\"mobile_menu\" class=\"burger_menu\">\r\n    <img id=\"burguerVisible\" class=\"burger_img\" src=\"${_assets_barra_menu_png__WEBPACK_IMPORTED_MODULE_1__}\" alt=\"burguerMenu\">\r\n</div>\r\n\r\n<ul class=\"header-list\">\r\n    <li id=\"homeBtn\" class=\"header-list-element\">Home</li>\r\n    <li id=\"recipesBtn\" class=\"header-list-element\">Recipes</li>\r\n    <li id=\"aboutBtn\" class=\"header-list-element\">About</li>\r\n</ul>\r\n`\r\nheader.innerHTML = content\r\n\r\n\r\n\n\n//# sourceURL=webpack://odin-recipes/./src/modules/navbar.js?");

/***/ }),

/***/ "./src/modules/recipes.js":
/*!********************************!*\
  !*** ./src/modules/recipes.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   recipes: () => (/* binding */ recipesContainer)\n/* harmony export */ });\nconst recipesContainer = document.createElement(\"div\")\r\nrecipesContainer.classList.add(\"recipe-container\")\r\n\r\n\r\n\r\nconst recipes = [\r\n    {\r\n        name: \"Crispy Ginger Beef\",\r\n        image: \"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8335137.jpg&q=60&c=sc&orient=true&poi=auto&h=512\",\r\n        link: \"../src/recipes/crispy-ginger-beef.html\"\r\n    },\r\n    {\r\n        name: \"Lasagna\",\r\n        image: \"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets.meredithcorp.io%2Ff5fb06bae980ae5f3bc67b14d71ff4f5%2F167322074749016732207242795520976048088202107.jpg&q=60&c=sc&orient=true&poi=auto&h=512\",\r\n        link: \"../src/recipes/lasagna.html\"\r\n    },\r\n    {\r\n        name: \"Crispy Shrimp Tempura\",\r\n        image: \"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F418857.jpg&q=60&c=sc&orient=true&poi=auto&h=512\",\r\n        link: \"../src/recipes/crispy-shrimp-tempura.html\"\r\n    }\r\n]\r\n\r\nrecipes.forEach((item)=>{\r\n\r\n    const recipeCard = document.createElement(\"a\")\r\n    recipeCard.href = item.link\r\n    recipeCard.classList.add(\"recipe-card\")\r\n\r\n    const name = item.name;\r\n    const img = item.image;\r\n\r\n    const recipeName = document.createElement(\"h3\");\r\n    recipeName.innerText = name\r\n    recipeName.classList.add(\"recipeName\");\r\n\r\n    const recipeImg = document.createElement(\"img\");\r\n    recipeImg.src = img\r\n    recipeImg.classList.add(\"recipeImg\");\r\n\r\n    const recipeBtn = document.createElement(\"h4\")\r\n    recipeBtn.innerText = \"Go to Recipe\"\r\n    recipeBtn.classList.add(\"recipeBtn\")\r\n\r\n    recipeCard.appendChild(recipeName)\r\n    recipeCard.appendChild(recipeImg)\r\n    recipeCard.appendChild(recipeBtn)\r\n\r\n    recipesContainer.appendChild(recipeCard)\r\n\r\n    return recipeCard;\r\n\r\n})\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://odin-recipes/./src/modules/recipes.js?");

/***/ }),

/***/ "./src/assets/barra-menu.png":
/*!***********************************!*\
  !*** ./src/assets/barra-menu.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9f064b142ba2c71c721d.png\";\n\n//# sourceURL=webpack://odin-recipes/./src/assets/barra-menu.png?");

/***/ }),

/***/ "./src/assets/bg-image-darken.jpg":
/*!****************************************!*\
  !*** ./src/assets/bg-image-darken.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b971b88e80ec027e26b5.jpg\";\n\n//# sourceURL=webpack://odin-recipes/./src/assets/bg-image-darken.jpg?");

/***/ }),

/***/ "./src/assets/libro-de-recetas-freepik.png":
/*!*************************************************!*\
  !*** ./src/assets/libro-de-recetas-freepik.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a25527244577065821d9.png\";\n\n//# sourceURL=webpack://odin-recipes/./src/assets/libro-de-recetas-freepik.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;