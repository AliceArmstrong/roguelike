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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar font = 32;\n\nvar rows = 10;\nvar cols = 15;\nvar map = [];\nvar asciiDisplay = [];\n\nvar actors = 10;\n\nvar initKeyboard = function initKeyboard() {\n    game.input.keyboard.addCallbacks(null, null, onKeyUp);\n};\n\nvar initMap = function initMap() {\n    for (var y = 0; y < rows; y += 1) {\n        var newRow = [];\n        for (var x = 0; x < cols; x += 1) {\n            if (Math.random() > 0.8) {\n                newRow.push('#');\n            } else {\n                newRow.push('.');\n            }\n            map.push(newRow);\n        }\n    }\n};\n\nvar initCell = function initCell(chr, x, y) {\n    var style = { font: font + 'px monospace', fill: '#fff' };\n    return game.add.text(font * 0.6 * x, font * y, chr, style);\n};\n\nvar initScreen = function initScreen() {\n    for (var y = 0; y < rows; y += 1) {\n        var newRow = [];\n        console.log('initScreen', newRow);\n        asciiDisplay.push(newRow);\n\n        for (var x = 0; x < cols; x += 1) {\n            newRow.push(initCell('', x, y));\n        }\n    }\n};\n\nvar drawMap = function drawMap() {\n    for (var y = 0; y < rows; y += 1) {\n        for (var x = 0; x < cols; x += 1) {\n            asciiDisplay[y][x].content = map[y][x];\n        }\n    }\n};\n\nvar create = function create() {\n    initKeyboard();\n    initMap();\n    initScreen();\n    drawMap();\n};\n\nvar game = new Phaser.Game(cols * font * 0.6, rows * font, Phaser.AUTO, null, {\n    create: create\n});\n\nvar onKeyUp = function onKeyUp(event) {\n    switch (event.keyCode) {\n        case Keyboard.LEFT:\n        case Keyboard.RIGHT:\n        case Keyboard.UP:\n        case Keyboard.DOWN:\n        default:\n            console.log('Error');\n    }\n};\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ })

/******/ });