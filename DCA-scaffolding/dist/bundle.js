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

/***/ "./src/components/Form/Form.ts":
/*!*************************************!*\
  !*** ./src/components/Form/Form.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Form = void 0;\nclass Form extends HTMLElement {\n    constructor() {\n        super();\n        this.const = {\n            name: \"\",\n            color: \"\",\n            letter: \"\",\n        };\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        const Container = this.ownerDocument.createElement(\"section\");\n        const TitleName = this.ownerDocument.createElement(\"label\");\n        TitleName.textContent = \"Name\";\n        const name = this.ownerDocument.createElement(\"input\");\n        const TitleColor = this.ownerDocument.createElement(\"label\");\n        TitleColor.textContent = \"Escoge tu Color\";\n        const color = this.ownerDocument.createElement(\"input\");\n        const TittleLetter = this.ownerDocument.createElement(\"label\");\n        TittleLetter.textContent = \"Escoge tu letra\";\n        const letter = this.ownerDocument.createElement(\"input\");\n        const btn = this.ownerDocument.createElement(\"button\");\n        btn.textContent = \"save\";\n        Container.appendChild(TitleName);\n        Container.appendChild(name);\n        Container.appendChild(TitleColor);\n        Container.appendChild(color);\n        Container.appendChild(TittleLetter);\n        Container.appendChild(letter);\n        Container.appendChild(btn);\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(Container);\n    }\n}\nexports.Form = Form;\ncustomElements.define('app-form', Form);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/Form/Form.ts?");

/***/ }),

/***/ "./src/components/export.ts":
/*!**********************************!*\
  !*** ./src/components/export.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Form = void 0;\nvar Form_1 = __webpack_require__(/*! ./Form/Form */ \"./src/components/Form/Form.ts\");\nObject.defineProperty(exports, \"Form\", ({ enumerable: true, get: function () { return Form_1.Form; } }));\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/export.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__webpack_require__(/*! ./components/export */ \"./src/components/export.ts\");\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a, _b;\n        const form = this.ownerDocument.createElement('app-form');\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(form);\n        const listgame = this.ownerDocument.createElement('app-listgame');\n        (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(listgame);\n    }\n}\ncustomElements.define('app-container', AppContainer);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/index.ts?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;