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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common */ \"./src/common/index.js\");\n/* harmony import */ var _src_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/url */ \"./src/url/index.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  common: _src_common__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  url: _src_url__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./src/common/index.js":
/*!*****************************!*\
  !*** ./src/common/index.js ***!
  \*****************************/
/*! exports provided: isObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isObject\", function() { return isObject; });\n/**\n * @description 判断是否是Object\n * @param {*} obj\n */\nconst isObject = (obj) => {\n  return Object.prototype.toString.call(obj) === '[object Object]'\n}\n\n\n//# sourceURL=webpack:///./src/common/index.js?");

/***/ }),

/***/ "./src/url/index.js":
/*!**************************!*\
  !*** ./src/url/index.js ***!
  \**************************/
/*! exports provided: objectToQueryString, queryStringToObject, getUrlParam */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"objectToQueryString\", function() { return objectToQueryString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"queryStringToObject\", function() { return queryStringToObject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUrlParam\", function() { return getUrlParam; });\nconst common = __webpack_require__(/*! ../common */ \"./src/common/index.js\")\n\n/**\n * @description 把对象变成urlencoded字符串\n * @param obj {Object} {'a':'b','c':'d','e':'','':'f'}\n * @return a=b&c=d\n */\nconst objectToQueryString = (obj) => {\n  if (!common.isObject(obj)) return ''\n  if (Object.prototype.toString.call(obj) !== '[object Object]') return ''\n  return Object.keys(obj)\n    .map(key => {\n      if (!key || !obj[key]) return ''\n      return `${key}=${encodeURIComponent(obj[key])}`\n    })\n    .filter(item => item !== '')\n    .join('&')\n}\n\n/**\n * @description 把urlencoded字符串变成对象\n * @param str {String} a=b&c=d\n * @return {Object} {'a':'b', 'c':'d'}\n */\nconst queryStringToObject = (str) => {\n  const result = {}\n  str.split('&')\n    .forEach(item => {\n      if (!item) return\n      result[item.split('=')[0]] = item.split('=')[1]\n    })\n  return result\n}\n\n/**\n * @description 获取url中的某个参数\n * @param {String} url http://www.baidu.com?a=1&b=2\n * @param {String} name a\n * @return {String} 1\n */\nconst getUrlParam = (url, name) => {\n  const search = url.split('?')[1]\n  if (!search || !name) return ''\n  const obj = queryStringToObject(search)\n  return obj[name] || ''\n}\n\n\n//# sourceURL=webpack:///./src/url/index.js?");

/***/ })

/******/ });