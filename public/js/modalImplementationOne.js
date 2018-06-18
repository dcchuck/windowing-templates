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
/******/ 	return __webpack_require__(__webpack_require__.s = "./dist/modalImplementationOne.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/modalImplementationOne.js":
/*!****************************************!*\
  !*** ./dist/modalImplementationOne.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar openFinModal_1 = __webpack_require__(/*! ./openFinModal */ \"./dist/openFinModal.js\");\r\nvar closeSpan = document.getElementById('close');\r\ncloseSpan.onclick = function () { return fin.desktop.Window.getCurrent().close(); };\r\nvar myModal1 = new openFinModal_1.default({\r\n    url: 'modal-implementation-one-modal.html'\r\n});\r\nvar showModalButton1 = document.getElementById('show-modal-1');\r\nshowModalButton1.onclick = function () {\r\n    console.log('clicked!!');\r\n    console.log(myModal1);\r\n    myModal1.show();\r\n    console.log(myModal1);\r\n};\r\nvar myModal2 = new openFinModal_1.default({\r\n    url: 'modal-implementation-one-modal.html',\r\n    xBuffer: 100,\r\n    yBuffer: 100\r\n});\r\nvar showModalButton2 = document.getElementById('show-modal-2');\r\nshowModalButton2.onclick = function () { return myModal2.show(); };\r\nvar myModal3 = new openFinModal_1.default({\r\n    url: 'modal-implementation-one-modal.html',\r\n    xBuffer: 100,\r\n    yBuffer: 100,\r\n    topOffset: 100\r\n});\r\nvar showModalButton3 = document.getElementById('show-modal-3');\r\nshowModalButton3.onclick = function () { return myModal3.show(); };\r\nvar myModal4 = new openFinModal_1.default({\r\n    url: 'modal-implementation-one-modal.html',\r\n    xBuffer: 30,\r\n    yBuffer: -50,\r\n    topOffset: -10\r\n});\r\nvar showModalButton4 = document.getElementById('show-modal-4');\r\nshowModalButton4.onclick = function () { return myModal4.show(); };\r\n\n\n//# sourceURL=webpack:///./dist/modalImplementationOne.js?");

/***/ }),

/***/ "./dist/openFinModal.js":
/*!******************************!*\
  !*** ./dist/openFinModal.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = y[op[0] & 2 ? \"return\" : op[0] ? \"throw\" : \"next\"]) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [0, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n//interface OpenFinModal extends EventEmitter\r\nvar OpenFinModal = /** @class */ (function () {\r\n    function OpenFinModal(config) {\r\n        this.url = config.url;\r\n        this.xBuffer = config.xBuffer || 0;\r\n        this.yBuffer = config.yBuffer || 0;\r\n        this.topOffset = config.topOffset || 0;\r\n        this.ready = false;\r\n        this.ofWindowName = \"OpenFinModal \" + Math.random().toString();\r\n        this.initLogic();\r\n    }\r\n    OpenFinModal.prototype.initLogic = function () {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var _a, _b;\r\n            var _this = this;\r\n            return __generator(this, function (_c) {\r\n                switch (_c.label) {\r\n                    case 0:\r\n                        _a = this;\r\n                        return [4 /*yield*/, fin.Window.create({\r\n                                url: this.url,\r\n                                name: this.ofWindowName,\r\n                                frame: false,\r\n                                opacity: 0.75\r\n                            })];\r\n                    case 1:\r\n                        _a.ofWindow = _c.sent();\r\n                        this.ofWindow.on('close-requested', function (e) {\r\n                            console.log(e);\r\n                            console.log('close requested called!');\r\n                            console.log(_this.ofWindow);\r\n                            _this.ofWindow.hide().then(function () { return console.log(_this.ofWindow); });\r\n                            console.log('hidden!');\r\n                        });\r\n                        _b = this;\r\n                        return [4 /*yield*/, fin.Window.getCurrent()];\r\n                    case 2:\r\n                        _b.parentWindow = _c.sent();\r\n                        this.ready = true;\r\n                        return [2 /*return*/];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    OpenFinModal.prototype.show = function () {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var parentWindowBounds;\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0:\r\n                        if (!this.ready) return [3 /*break*/, 7];\r\n                        console.log('IN SHOW');\r\n                        console.log(this.ofWindow);\r\n                        return [4 /*yield*/, this.parentWindow.getBounds()];\r\n                    case 1:\r\n                        parentWindowBounds = _a.sent();\r\n                        return [4 /*yield*/, this.ofWindow.resizeTo(parentWindowBounds.width + this.xBuffer, parentWindowBounds.height + this.yBuffer)];\r\n                    case 2:\r\n                        _a.sent();\r\n                        return [4 /*yield*/, this.ofWindow.bringToFront()];\r\n                    case 3:\r\n                        _a.sent();\r\n                        return [4 /*yield*/, this.ofWindow.showAt((parentWindowBounds.left - (this.xBuffer / 2)), parentWindowBounds.top - this.topOffset)];\r\n                    case 4:\r\n                        _a.sent();\r\n                        return [4 /*yield*/, this.ofWindow.focus()];\r\n                    case 5:\r\n                        _a.sent();\r\n                        return [4 /*yield*/, this.parentWindow.joinGroup(this.ofWindow)];\r\n                    case 6:\r\n                        _a.sent();\r\n                        _a.label = 7;\r\n                    case 7: return [2 /*return*/];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    return OpenFinModal;\r\n}());\r\nexports.default = OpenFinModal;\r\n\n\n//# sourceURL=webpack:///./dist/openFinModal.js?");

/***/ })

/******/ });