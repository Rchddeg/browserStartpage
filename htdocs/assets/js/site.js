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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = find;
function find(selector) {
	return document.querySelectorAll(selector);
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addClass;
function addClass(elements, className) {
	elements.forEach(function(element){
		element.classList.add(className);
	});
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = removeClass;
function removeClass(elements,className) {
	elements.forEach(function(element){
		element.classList.remove(className);
	});
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_setJsAvailability__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__functions_addClass_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__functions_find_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__functions_localStorage_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__functions_removeClass_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__functions_scrollToPos_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_tabHandling_js__ = __webpack_require__(8);
// ###### import ######










// ####################
// ##### settings #####
// ####################
const selector__applyJsClassTo = "body";
const localStorage__idTab = "currentTab";
const selector__tabContent = ".tabbed-content";
const class__isActive = "sdi-js-active";

// ###### script ######
// is the DOM ready for manipulation?
document.addEventListener('DOMContentLoaded', function() {

	// ##### Toggle HTML
	Object(__WEBPACK_IMPORTED_MODULE_0__components_setJsAvailability__["a" /* default */])(selector__applyJsClassTo);

	// // ##### handle localeStorage
	// // get Id from first tab to save as fallback
	// const id__firstTab = '#' + find(selector__tabContent)[0].id;

	// // show saved tab
	// if(doLocalStorage(localStorage__idTab) === null) {
	// 	// show first tab
	// 	doLocalStorage(localStorage__idTab, id__firstTab);
	// 	addClass(find(id__firstTab), class__isActive);
	// } else {
	// 	//show saved tab
	// 	addClass(find(doLocalStorage(localStorage__idTab)), class__isActive);
	// }
});


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = setJsAvailability;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__functions_find_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__functions_addClass_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__functions_removeClass_js__ = __webpack_require__(2);
// ###### import ######




// ####################
// ##### settings #####
// ####################
const class__jsIsAvailable = 'js';
const class__jsIsNotAvailable = 'no-js';

// ###### script ######
function setJsAvailability(selector) {
	var selector = Object(__WEBPACK_IMPORTED_MODULE_0__functions_find_js__["a" /* default */])(selector);
	selector.forEach(function() {
		Object(__WEBPACK_IMPORTED_MODULE_1__functions_addClass_js__["a" /* default */])(selector, class__jsIsAvailable);
		Object(__WEBPACK_IMPORTED_MODULE_2__functions_removeClass_js__["a" /* default */])(selector, class__jsIsNotAvailable);
	});
}


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
function doLocalStorage(item,value) {
	if(value) {
		localStorage.setItem(item,value);
	} else {
		return localStorage.getItem(item);
	}
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
function scrollToPos(x,y) {
	window.scrollTo(x,y);
}


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
function tabHandling() {

	//Handle localStorage
	const tabPosition = "tabbedContentId";
	if (localStorage.getItem(tabPosition) === null) {
		console.log("localStorage is empty");
	} else {
		console.log("localStorage is set");
	};

}


/***/ })
/******/ ]);