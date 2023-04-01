/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n\n// import Character from \"./scripts/character\";\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById('mister-game');\n  let game = new _scripts_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\n  // game.restart();\n  // game.events();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBa0M7QUFDbEM7O0FBRUFDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBSztFQUMvQyxNQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLGFBQWEsQ0FBQztFQUVyRCxJQUFJQyxJQUFJLEdBQUcsSUFBSUwscURBQUksQ0FBQ0csTUFBTSxDQUFDO0VBQzNCO0VBQ0E7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWUgZnJvbSBcIi4vc2NyaXB0cy9nYW1lXCI7XHJcbi8vIGltcG9ydCBDaGFyYWN0ZXIgZnJvbSBcIi4vc2NyaXB0cy9jaGFyYWN0ZXJcIjtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpPT4ge1xyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pc3Rlci1nYW1lJyk7XHJcblxyXG4gICAgbGV0IGdhbWUgPSBuZXcgR2FtZShjYW52YXMpO1xyXG4gICAgLy8gZ2FtZS5yZXN0YXJ0KCk7XHJcbiAgICAvLyBnYW1lLmV2ZW50cygpO1xyXG59KTtcclxuXHJcbiJdLCJuYW1lcyI6WyJHYW1lIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJnYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/character.js":
/*!**********************************!*\
  !*** ./src/scripts/character.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Character; }\n/* harmony export */ });\nclass Character {\n  constructor(position) {\n    this.position = position;\n    this.velocity = {\n      x: 0,\n      y: 1\n    };\n    this.height = 70;\n    this.width = 70;\n\n    // velocity going down\n    this.gravity = 0.5;\n  }\n  animate(ctx, dimensions) {\n    this.draw(ctx);\n    this.updatePosition();\n    // console.log(dimensions);\n\n    /* if the bottom of the character is passing the botton\r\n    of the canvas, we know that we don't want to use updatePosition\r\n    */\n    if (this.position.y + this.height + this.velocity.y < dimensions.height) {\n      this.velocity.y += this.gravity; // updating the position\n    } else {\n      this.velocity.y = 0; //velocity is 0, so the character will not keep moving\n    }\n  }\n\n  draw(ctx) {\n    // drawing square red(character)\n    ctx.fillStyle = \"red\";\n    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);\n  }\n  updatePosition() {\n    this.position.x += this.velocity.x;\n\n    // changing the pos to move the character down\n    this.position.y += this.velocity.y;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jaGFyYWN0ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlLE1BQU1BLFNBQVM7RUFDMUJDLFdBQVdBLENBQUNDLFFBQVEsRUFBQztJQUNqQixJQUFJLENBQUNBLFFBQVEsR0FBR0EsUUFBUTtJQUN4QixJQUFJLENBQUNDLFFBQVEsR0FBRztNQUNaQyxDQUFDLEVBQUUsQ0FBQztNQUNKQyxDQUFDLEVBQUU7SUFDUCxDQUFDO0lBQ0QsSUFBSSxDQUFDQyxNQUFNLEdBQUcsRUFBRTtJQUNoQixJQUFJLENBQUNDLEtBQUssR0FBRyxFQUFFOztJQUVmO0lBQ0EsSUFBSSxDQUFDQyxPQUFPLEdBQUcsR0FBRztFQUN0QjtFQUVBQyxPQUFPQSxDQUFDQyxHQUFHLEVBQUVDLFVBQVUsRUFBQztJQUNwQixJQUFJLENBQUNDLElBQUksQ0FBQ0YsR0FBRyxDQUFDO0lBQ2QsSUFBSSxDQUFDRyxjQUFjLEVBQUU7SUFDckI7O0lBRUE7QUFDUjtBQUNBO0lBQ1EsSUFBRyxJQUFJLENBQUNYLFFBQVEsQ0FBQ0csQ0FBQyxHQUFHLElBQUksQ0FBQ0MsTUFBTSxHQUFHLElBQUksQ0FBQ0gsUUFBUSxDQUFDRSxDQUFDLEdBQUdNLFVBQVUsQ0FBQ0wsTUFBTSxFQUFDO01BQ25FLElBQUksQ0FBQ0gsUUFBUSxDQUFDRSxDQUFDLElBQUksSUFBSSxDQUFDRyxPQUFPLENBQUMsQ0FBQztJQUNyQyxDQUFDLE1BQU07TUFDSCxJQUFJLENBQUNMLFFBQVEsQ0FBQ0UsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3pCO0VBRUo7O0VBRUFPLElBQUlBLENBQUNGLEdBQUcsRUFBQztJQUNMO0lBQ0FBLEdBQUcsQ0FBQ0ksU0FBUyxHQUFHLEtBQUs7SUFDckJKLEdBQUcsQ0FBQ0ssUUFBUSxDQUFDLElBQUksQ0FBQ2IsUUFBUSxDQUFDRSxDQUFDLEVBQUUsSUFBSSxDQUFDRixRQUFRLENBQUNHLENBQUMsRUFBRSxJQUFJLENBQUNFLEtBQUssRUFBRSxJQUFJLENBQUNELE1BQU0sQ0FBQztFQUMzRTtFQUVBTyxjQUFjQSxDQUFBLEVBQUU7SUFDWixJQUFJLENBQUNYLFFBQVEsQ0FBQ0UsQ0FBQyxJQUFJLElBQUksQ0FBQ0QsUUFBUSxDQUFDQyxDQUFDOztJQUVsQztJQUNBLElBQUksQ0FBQ0YsUUFBUSxDQUFDRyxDQUFDLElBQUksSUFBSSxDQUFDRixRQUFRLENBQUNFLENBQUM7RUFDdEM7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2pzLXByb2plY3QvLi9zcmMvc2NyaXB0cy9jaGFyYWN0ZXIuanM/MTgxNSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFyYWN0ZXJ7XHJcbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbil7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSB7XHJcbiAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgIHk6IDFcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSA3MDtcclxuICAgICAgICB0aGlzLndpZHRoID0gNzA7XHJcblxyXG4gICAgICAgIC8vIHZlbG9jaXR5IGdvaW5nIGRvd25cclxuICAgICAgICB0aGlzLmdyYXZpdHkgPSAwLjU7XHJcbiAgICB9XHJcblxyXG4gICAgYW5pbWF0ZShjdHgsIGRpbWVuc2lvbnMpe1xyXG4gICAgICAgIHRoaXMuZHJhdyhjdHgpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkaW1lbnNpb25zKTtcclxuXHJcbiAgICAgICAgLyogaWYgdGhlIGJvdHRvbSBvZiB0aGUgY2hhcmFjdGVyIGlzIHBhc3NpbmcgdGhlIGJvdHRvblxyXG4gICAgICAgIG9mIHRoZSBjYW52YXMsIHdlIGtub3cgdGhhdCB3ZSBkb24ndCB3YW50IHRvIHVzZSB1cGRhdGVQb3NpdGlvblxyXG4gICAgICAgICovXHJcbiAgICAgICAgaWYodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQgKyB0aGlzLnZlbG9jaXR5LnkgPCBkaW1lbnNpb25zLmhlaWdodCl7XHJcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSArPSB0aGlzLmdyYXZpdHk7IC8vIHVwZGF0aW5nIHRoZSBwb3NpdGlvblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSA9IDA7IC8vdmVsb2NpdHkgaXMgMCwgc28gdGhlIGNoYXJhY3RlciB3aWxsIG5vdCBrZWVwIG1vdmluZ1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGN0eCl7XHJcbiAgICAgICAgLy8gZHJhd2luZyBzcXVhcmUgcmVkKGNoYXJhY3RlcilcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcclxuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVQb3NpdGlvbigpe1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLnZlbG9jaXR5Lng7XHJcblxyXG4gICAgICAgIC8vIGNoYW5naW5nIHRoZSBwb3MgdG8gbW92ZSB0aGUgY2hhcmFjdGVyIGRvd25cclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKz0gdGhpcy52ZWxvY2l0eS55O1xyXG4gICAgfVxyXG59XHJcblxyXG4iXSwibmFtZXMiOlsiQ2hhcmFjdGVyIiwiY29uc3RydWN0b3IiLCJwb3NpdGlvbiIsInZlbG9jaXR5IiwieCIsInkiLCJoZWlnaHQiLCJ3aWR0aCIsImdyYXZpdHkiLCJhbmltYXRlIiwiY3R4IiwiZGltZW5zaW9ucyIsImRyYXciLCJ1cGRhdGVQb3NpdGlvbiIsImZpbGxTdHlsZSIsImZpbGxSZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/character.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./character */ \"./src/scripts/character.js\");\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./level */ \"./src/scripts/level.js\");\n\n\nconst KEYS = {\n  d: {\n    typed: false\n  },\n  a: {\n    typed: false\n  }\n};\nconst IMG = \"./assets/fondo2.png\";\nclass Game {\n  constructor(canvas) {\n    // initialize canvas\n    this.ctx = canvas.getContext(\"2d\");\n    this.dimensions = {\n      width: canvas.width,\n      height: canvas.height\n    };\n    this.restart();\n    this.events();\n  }\n  // more methods\n  restart() {\n    // creating instance of Character\n    this.character = new _character__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n      x: 0,\n      y: 0\n    });\n    this.level = new _level__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      x: 0,\n      y: 0\n    }, IMG);\n    this.animate();\n  }\n  animate() {\n    window.requestAnimationFrame(this.animate.bind(this));\n    this.ctx.fillStyle = \"white\";\n    this.ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);\n\n    // creating background\n    this.level.animate(this.ctx, this.dimensions);\n\n    // calling animate from Character class\n    this.character.animate(this.ctx, this.dimensions);\n\n    //changing velocity if the key is press or type\n    this.character.velocity.x = 0;\n    if (KEYS.d.typed) {\n      this.character.velocity.x = 4;\n    } else if (KEYS.a.typed) {\n      this.character.velocity.x = -4;\n    }\n  }\n  events() {\n    window.addEventListener(\"keydown\", event => {\n      //changing the typed to true if the key is typed.\n      switch (event.key) {\n        case 'd':\n        case 'ArrowRight':\n          KEYS.d.typed = true;\n          break;\n        case 'a':\n        case 'ArrowLeft':\n          KEYS.a.typed = true;\n          break;\n        case ' ':\n          this.character.velocity.y = -14;\n          break;\n      }\n    });\n\n    // if the key is no typed this will be false again.\n    // in that way we can stop the character if the key is not press\n    window.addEventListener('keyup', event => {\n      switch (event.key) {\n        case 'd':\n        case 'ArrowRight':\n          KEYS.d.typed = false;\n          break;\n        case 'a':\n        case 'ArrowLeft':\n          KEYS.a.typed = false;\n          break;\n      }\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcsQ0FBQyxFQUFFO1VBQy9CO01BQU07SUFFbEIsQ0FBQyxDQUFDOztJQUVGO0lBQ0E7SUFDQUcsTUFBTSxDQUFDTSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUdDLEtBQUssSUFBSTtNQUN2QyxRQUFPQSxLQUFLLENBQUNDLEdBQUc7UUFDWixLQUFLLEdBQUc7UUFDUixLQUFLLFlBQVk7VUFDYjVCLElBQUksQ0FBQ0MsQ0FBQyxDQUFDQyxLQUFLLEdBQUcsS0FBSztVQUNwQjtRQUNKLEtBQUssR0FBRztRQUNSLEtBQUssV0FBVztVQUNaRixJQUFJLENBQUNHLENBQUMsQ0FBQ0QsS0FBSyxHQUFHLEtBQUs7VUFDcEI7TUFBTTtJQUVsQixDQUFDLENBQUM7RUFDTjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanMtcHJvamVjdC8uL3NyYy9zY3JpcHRzL2dhbWUuanM/Y2RjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2hhcmFjdGVyIGZyb20gXCIuL2NoYXJhY3RlclwiO1xyXG5pbXBvcnQgTGV2ZWwgZnJvbSBcIi4vbGV2ZWxcIjtcclxuXHJcbmNvbnN0IEtFWVMgPSB7XHJcbiAgICBkOiB7XHJcbiAgICAgICAgdHlwZWQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIGE6IHtcclxuICAgICAgICB0eXBlZDogZmFsc2VcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgSU1HID0gXCIuL2Fzc2V0cy9mb25kbzIucG5nXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhcyl7XHJcbiAgICAgICAgLy8gaW5pdGlhbGl6ZSBjYW52YXNcclxuICAgICAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0geyB3aWR0aDogY2FudmFzLndpZHRoLCBoZWlnaHQ6IGNhbnZhcy5oZWlnaHQgfTtcclxuICAgICAgICB0aGlzLnJlc3RhcnQoKTtcclxuICAgICAgICB0aGlzLmV2ZW50cygpO1xyXG4gICAgfVxyXG4gICAgLy8gbW9yZSBtZXRob2RzXHJcbiAgICByZXN0YXJ0KCl7XHJcbiAgICAgICAgLy8gY3JlYXRpbmcgaW5zdGFuY2Ugb2YgQ2hhcmFjdGVyXHJcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXIgPSBuZXcgQ2hhcmFjdGVyKHt4OjAsIHk6MH0pO1xyXG4gICAgICAgIHRoaXMubGV2ZWwgPSBuZXcgTGV2ZWwoe3g6MCwgeTowfSwgSU1HKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBhbmltYXRlKCl7XHJcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuZGltZW5zaW9ucy53aWR0aCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gY3JlYXRpbmcgYmFja2dyb3VuZFxyXG4gICAgICAgIHRoaXMubGV2ZWwuYW5pbWF0ZSh0aGlzLmN0eCwgdGhpcy5kaW1lbnNpb25zKTtcclxuXHJcbiAgICAgICAgLy8gY2FsbGluZyBhbmltYXRlIGZyb20gQ2hhcmFjdGVyIGNsYXNzXHJcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXIuYW5pbWF0ZSh0aGlzLmN0eCwgdGhpcy5kaW1lbnNpb25zKTtcclxuXHJcbiAgICAgICAgLy9jaGFuZ2luZyB2ZWxvY2l0eSBpZiB0aGUga2V5IGlzIHByZXNzIG9yIHR5cGVcclxuICAgICAgICB0aGlzLmNoYXJhY3Rlci52ZWxvY2l0eS54ID0gMDtcclxuICAgICAgICBpZihLRVlTLmQudHlwZWQpe1xyXG4gICAgICAgICAgICB0aGlzLmNoYXJhY3Rlci52ZWxvY2l0eS54ID0gNDtcclxuICAgICAgICB9IGVsc2UgaWYoS0VZUy5hLnR5cGVkKXtcclxuICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXIudmVsb2NpdHkueCA9IC00O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBldmVudHMoKXtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KT0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vY2hhbmdpbmcgdGhlIHR5cGVkIHRvIHRydWUgaWYgdGhlIGtleSBpcyB0eXBlZC5cclxuICAgICAgICAgICAgc3dpdGNoKGV2ZW50LmtleSl7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdkJzpcclxuICAgICAgICAgICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxyXG4gICAgICAgICAgICAgICAgICAgIEtFWVMuZC50eXBlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdhJzpcclxuICAgICAgICAgICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XHJcbiAgICAgICAgICAgICAgICAgICAgS0VZUy5hLnR5cGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJyAnOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyLnZlbG9jaXR5LnkgPSAtMTQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyBpZiB0aGUga2V5IGlzIG5vIHR5cGVkIHRoaXMgd2lsbCBiZSBmYWxzZSBhZ2Fpbi5cclxuICAgICAgICAvLyBpbiB0aGF0IHdheSB3ZSBjYW4gc3RvcCB0aGUgY2hhcmFjdGVyIGlmIHRoZSBrZXkgaXMgbm90IHByZXNzXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KT0+IHtcclxuICAgICAgICAgICAgc3dpdGNoKGV2ZW50LmtleSl7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdkJzpcclxuICAgICAgICAgICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxyXG4gICAgICAgICAgICAgICAgICAgIEtFWVMuZC50eXBlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnYSc6XHJcbiAgICAgICAgICAgICAgICBjYXNlICdBcnJvd0xlZnQnOlxyXG4gICAgICAgICAgICAgICAgICAgIEtFWVMuYS50eXBlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJDaGFyYWN0ZXIiLCJMZXZlbCIsIktFWVMiLCJkIiwidHlwZWQiLCJhIiwiSU1HIiwiR2FtZSIsImNvbnN0cnVjdG9yIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsImRpbWVuc2lvbnMiLCJ3aWR0aCIsImhlaWdodCIsInJlc3RhcnQiLCJldmVudHMiLCJjaGFyYWN0ZXIiLCJ4IiwieSIsImxldmVsIiwiYW5pbWF0ZSIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImJpbmQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInZlbG9jaXR5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwia2V5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/level.js":
/*!******************************!*\
  !*** ./src/scripts/level.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Level; }\n/* harmony export */ });\nclass Level {\n  constructor(position, imageSrc) {\n    this.position = position;\n    this.image = new Image();\n    this.image.src = imageSrc;\n    // console.log(this.position);\n    // console.log(this.image);\n    // console.log(this.image.src);\n  }\n\n  animate(ctx, dimensions) {\n    this.draw(ctx, dimensions);\n  }\n  draw(ctx, dimensions) {\n    // if the image is not loaded I want to return all together\n    if (!this.image) return;\n    ctx.drawImage(this.image, this.position.x, this.position.y, dimensions.width, dimensions.height);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9sZXZlbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsTUFBTUEsS0FBSyxDQUFDO0VBQ3ZCQyxXQUFXQSxDQUFDQyxRQUFRLEVBQUVDLFFBQVEsRUFBQztJQUMzQixJQUFJLENBQUNELFFBQVEsR0FBR0EsUUFBUTtJQUN4QixJQUFJLENBQUNFLEtBQUssR0FBRyxJQUFJQyxLQUFLLEVBQUU7SUFDeEIsSUFBSSxDQUFDRCxLQUFLLENBQUNFLEdBQUcsR0FBR0gsUUFBUTtJQUN6QjtJQUNBO0lBQ0E7RUFDSjs7RUFFQUksT0FBT0EsQ0FBQ0MsR0FBRyxFQUFFQyxVQUFVLEVBQUM7SUFDcEIsSUFBSSxDQUFDQyxJQUFJLENBQUNGLEdBQUcsRUFBRUMsVUFBVSxDQUFDO0VBQzlCO0VBRUFDLElBQUlBLENBQUNGLEdBQUcsRUFBRUMsVUFBVSxFQUFDO0lBQ2pCO0lBQ0EsSUFBRyxDQUFDLElBQUksQ0FBQ0wsS0FBSyxFQUFFO0lBQ2hCSSxHQUFHLENBQUNHLFNBQVMsQ0FBQyxJQUFJLENBQUNQLEtBQUssRUFBRSxJQUFJLENBQUNGLFFBQVEsQ0FBQ1UsQ0FBQyxFQUFFLElBQUksQ0FBQ1YsUUFBUSxDQUFDVyxDQUFDLEVBQUVKLFVBQVUsQ0FBQ0ssS0FBSyxFQUFFTCxVQUFVLENBQUNNLE1BQU0sQ0FBQztFQUNwRztBQUdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanMtcHJvamVjdC8uL3NyYy9zY3JpcHRzL2xldmVsLmpzPzAxYWEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWwge1xyXG4gICAgY29uc3RydWN0b3IocG9zaXRpb24sIGltYWdlU3JjKXtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRoaXMuaW1hZ2Uuc3JjID0gaW1hZ2VTcmM7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5wb3NpdGlvbik7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5pbWFnZSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5pbWFnZS5zcmMpO1xyXG4gICAgfVxyXG5cclxuICAgIGFuaW1hdGUoY3R4LCBkaW1lbnNpb25zKXtcclxuICAgICAgICB0aGlzLmRyYXcoY3R4LCBkaW1lbnNpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGN0eCwgZGltZW5zaW9ucyl7XHJcbiAgICAgICAgLy8gaWYgdGhlIGltYWdlIGlzIG5vdCBsb2FkZWQgSSB3YW50IHRvIHJldHVybiBhbGwgdG9nZXRoZXJcclxuICAgICAgICBpZighdGhpcy5pbWFnZSkgcmV0dXJuXHJcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgZGltZW5zaW9ucy53aWR0aCwgZGltZW5zaW9ucy5oZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG59XHJcbiJdLCJuYW1lcyI6WyJMZXZlbCIsImNvbnN0cnVjdG9yIiwicG9zaXRpb24iLCJpbWFnZVNyYyIsImltYWdlIiwiSW1hZ2UiLCJzcmMiLCJhbmltYXRlIiwiY3R4IiwiZGltZW5zaW9ucyIsImRyYXciLCJkcmF3SW1hZ2UiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/level.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1wcm9qZWN0Ly4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;