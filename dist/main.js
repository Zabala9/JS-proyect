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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n/* harmony import */ var _scripts_character__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/character */ \"./src/scripts/character.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById('mister-game');\n  let game = new _scripts_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\n  // game.restart();\n  // game.events();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQWtDO0FBQ1U7QUFFNUNFLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBSztFQUMvQyxNQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLGFBQWEsQ0FBQztFQUVyRCxJQUFJQyxJQUFJLEdBQUcsSUFBSU4scURBQUksQ0FBQ0ksTUFBTSxDQUFDO0VBQzNCO0VBQ0E7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWUgZnJvbSBcIi4vc2NyaXB0cy9nYW1lXCI7XHJcbmltcG9ydCBDaGFyYWN0ZXIgZnJvbSBcIi4vc2NyaXB0cy9jaGFyYWN0ZXJcIjtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpPT4ge1xyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pc3Rlci1nYW1lJyk7XHJcblxyXG4gICAgbGV0IGdhbWUgPSBuZXcgR2FtZShjYW52YXMpO1xyXG4gICAgLy8gZ2FtZS5yZXN0YXJ0KCk7XHJcbiAgICAvLyBnYW1lLmV2ZW50cygpO1xyXG59KTtcclxuXHJcbiJdLCJuYW1lcyI6WyJHYW1lIiwiQ2hhcmFjdGVyIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJnYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/character.js":
/*!**********************************!*\
  !*** ./src/scripts/character.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Character; }\n/* harmony export */ });\nclass Character {\n  constructor(position) {\n    this.position = position;\n    this.velocity = {\n      x: 0,\n      y: 1\n    };\n\n    // velocity going down\n    this.height = 100;\n    this.gravity = 0.5;\n  }\n  animate(ctx, dimensions) {\n    this.draw(ctx);\n    this.updatePosition();\n    // console.log(dimensions);\n\n    /* if the bottom of the character is passing the botton\r\n    of the canvas, we know that we don't want to use updatePosition\r\n    */\n    if (this.position.y + this.height + this.velocity.y < dimensions.height) {\n      this.velocity.y += this.gravity; // updating the position\n    } else {\n      this.velocity.y = 0; //velocity is 0, so the character will not keep moving\n    }\n  }\n\n  draw(ctx) {\n    // drawing square red(character)\n    ctx.fillStyle = \"red\";\n    ctx.fillRect(this.position.x, this.position.y, 100, this.height);\n  }\n  updatePosition() {\n    // changing the pos to move the character down\n    this.position.x += this.velocity.x;\n    this.position.y += this.velocity.y;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jaGFyYWN0ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlLE1BQU1BLFNBQVM7RUFDMUJDLFdBQVdBLENBQUNDLFFBQVEsRUFBQztJQUNqQixJQUFJLENBQUNBLFFBQVEsR0FBR0EsUUFBUTtJQUN4QixJQUFJLENBQUNDLFFBQVEsR0FBRztNQUNaQyxDQUFDLEVBQUUsQ0FBQztNQUNKQyxDQUFDLEVBQUU7SUFDUCxDQUFDOztJQUVEO0lBQ0EsSUFBSSxDQUFDQyxNQUFNLEdBQUcsR0FBRztJQUNqQixJQUFJLENBQUNDLE9BQU8sR0FBRyxHQUFHO0VBQ3RCO0VBRUFDLE9BQU9BLENBQUNDLEdBQUcsRUFBRUMsVUFBVSxFQUFDO0lBQ3BCLElBQUksQ0FBQ0MsSUFBSSxDQUFDRixHQUFHLENBQUM7SUFDZCxJQUFJLENBQUNHLGNBQWMsRUFBRTtJQUNyQjs7SUFFQTtBQUNSO0FBQ0E7SUFDUSxJQUFHLElBQUksQ0FBQ1YsUUFBUSxDQUFDRyxDQUFDLEdBQUcsSUFBSSxDQUFDQyxNQUFNLEdBQUcsSUFBSSxDQUFDSCxRQUFRLENBQUNFLENBQUMsR0FBR0ssVUFBVSxDQUFDSixNQUFNLEVBQUM7TUFDbkUsSUFBSSxDQUFDSCxRQUFRLENBQUNFLENBQUMsSUFBSSxJQUFJLENBQUNFLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLENBQUMsTUFBTTtNQUNILElBQUksQ0FBQ0osUUFBUSxDQUFDRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDekI7RUFFSjs7RUFFQU0sSUFBSUEsQ0FBQ0YsR0FBRyxFQUFDO0lBQ0w7SUFDQUEsR0FBRyxDQUFDSSxTQUFTLEdBQUcsS0FBSztJQUNyQkosR0FBRyxDQUFDSyxRQUFRLENBQUMsSUFBSSxDQUFDWixRQUFRLENBQUNFLENBQUMsRUFBRSxJQUFJLENBQUNGLFFBQVEsQ0FBQ0csQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUNDLE1BQU0sQ0FBQztFQUNwRTtFQUVBTSxjQUFjQSxDQUFBLEVBQUU7SUFDWjtJQUNBLElBQUksQ0FBQ1YsUUFBUSxDQUFDRSxDQUFDLElBQUksSUFBSSxDQUFDRCxRQUFRLENBQUNDLENBQUM7SUFDbEMsSUFBSSxDQUFDRixRQUFRLENBQUNHLENBQUMsSUFBSSxJQUFJLENBQUNGLFFBQVEsQ0FBQ0UsQ0FBQztFQUN0QztBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanMtcHJvamVjdC8uL3NyYy9zY3JpcHRzL2NoYXJhY3Rlci5qcz8xODE1Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJhY3RlcntcclxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uKXtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHtcclxuICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgeTogMVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdmVsb2NpdHkgZ29pbmcgZG93blxyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMTAwO1xyXG4gICAgICAgIHRoaXMuZ3Jhdml0eSA9IDAuNTtcclxuICAgIH1cclxuXHJcbiAgICBhbmltYXRlKGN0eCwgZGltZW5zaW9ucyl7XHJcbiAgICAgICAgdGhpcy5kcmF3KGN0eCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRpbWVuc2lvbnMpO1xyXG5cclxuICAgICAgICAvKiBpZiB0aGUgYm90dG9tIG9mIHRoZSBjaGFyYWN0ZXIgaXMgcGFzc2luZyB0aGUgYm90dG9uXHJcbiAgICAgICAgb2YgdGhlIGNhbnZhcywgd2Uga25vdyB0aGF0IHdlIGRvbid0IHdhbnQgdG8gdXNlIHVwZGF0ZVBvc2l0aW9uXHJcbiAgICAgICAgKi9cclxuICAgICAgICBpZih0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodCArIHRoaXMudmVsb2NpdHkueSA8IGRpbWVuc2lvbnMuaGVpZ2h0KXtcclxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ICs9IHRoaXMuZ3Jhdml0eTsgLy8gdXBkYXRpbmcgdGhlIHBvc2l0aW9uXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gMDsgLy92ZWxvY2l0eSBpcyAwLCBzbyB0aGUgY2hhcmFjdGVyIHdpbGwgbm90IGtlZXAgbW92aW5nXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoY3R4KXtcclxuICAgICAgICAvLyBkcmF3aW5nIHNxdWFyZSByZWQoY2hhcmFjdGVyKVxyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJlZFwiO1xyXG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgMTAwLCB0aGlzLmhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlUG9zaXRpb24oKXtcclxuICAgICAgICAvLyBjaGFuZ2luZyB0aGUgcG9zIHRvIG1vdmUgdGhlIGNoYXJhY3RlciBkb3duXHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMudmVsb2NpdHkueDtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKz0gdGhpcy52ZWxvY2l0eS55O1xyXG4gICAgfVxyXG59XHJcblxyXG4iXSwibmFtZXMiOlsiQ2hhcmFjdGVyIiwiY29uc3RydWN0b3IiLCJwb3NpdGlvbiIsInZlbG9jaXR5IiwieCIsInkiLCJoZWlnaHQiLCJncmF2aXR5IiwiYW5pbWF0ZSIsImN0eCIsImRpbWVuc2lvbnMiLCJkcmF3IiwidXBkYXRlUG9zaXRpb24iLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/character.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./character */ \"./src/scripts/character.js\");\n\nconst KEYS = {\n  d: {\n    typed: false\n  },\n  a: {\n    typed: false\n  }\n};\nclass Game {\n  constructor(canvas) {\n    // initialize canvas\n    this.ctx = canvas.getContext(\"2d\");\n    this.dimensions = {\n      width: canvas.width,\n      height: canvas.height\n    };\n    this.restart();\n    this.events();\n  }\n  // more methods\n  restart() {\n    // creating instance of Character\n    this.character = new _character__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n      x: 0,\n      y: 0\n    });\n    this.animate();\n  }\n  animate() {\n    window.requestAnimationFrame(this.animate.bind(this));\n    this.ctx.fillStyle = \"white\";\n    this.ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);\n\n    // calling animate from Character class\n    this.character.animate(this.ctx, this.dimensions);\n    this.character.velocity.x = 0;\n    if (KEYS.d.typed) {\n      this.character.velocity.x = 3;\n    } else if (KEYS.a.typed) {\n      this.character.velocity.x = -3;\n    }\n  }\n  events() {\n    window.addEventListener(\"keydown\", event => {\n      //changing the typed to true if the key is typed.\n      switch (event.key) {\n        case 'd':\n        case 'ArrowRight':\n          KEYS.d.typed = true;\n          break;\n        case 'a':\n        case 'ArrowLeft':\n          KEYS.a.typed = true;\n          break;\n        case ' ':\n          this.character.velocity.y = -14;\n          break;\n      }\n    });\n\n    // if the key is no typed this will be false again.\n    window.addEventListener('keyup', event => {\n      switch (event.key) {\n        case 'd':\n        case 'ArrowRight':\n          KEYS.d.typed = false;\n          break;\n        case 'a':\n        case 'ArrowLeft':\n          KEYS.a.typed = false;\n          break;\n      }\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSxDQUFDRyxDQUFDLENBQUNELEtBQUssR0FBRyxLQUFLO1VBQ3BCO01BQU07SUFFbEIsQ0FBQyxDQUFDO0VBQ047QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2pzLXByb2plY3QvLi9zcmMvc2NyaXB0cy9nYW1lLmpzP2NkYzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoYXJhY3RlciBmcm9tIFwiLi9jaGFyYWN0ZXJcIjtcclxuXHJcbmNvbnN0IEtFWVMgPSB7XHJcbiAgICBkOiB7XHJcbiAgICAgICAgdHlwZWQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIGE6IHtcclxuICAgICAgICB0eXBlZDogZmFsc2VcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpe1xyXG4gICAgICAgIC8vIGluaXRpYWxpemUgY2FudmFzXHJcbiAgICAgICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IHsgd2lkdGg6IGNhbnZhcy53aWR0aCwgaGVpZ2h0OiBjYW52YXMuaGVpZ2h0IH07XHJcbiAgICAgICAgdGhpcy5yZXN0YXJ0KCk7XHJcbiAgICAgICAgdGhpcy5ldmVudHMoKTtcclxuICAgIH1cclxuICAgIC8vIG1vcmUgbWV0aG9kc1xyXG4gICAgcmVzdGFydCgpe1xyXG4gICAgICAgIC8vIGNyZWF0aW5nIGluc3RhbmNlIG9mIENoYXJhY3RlclxyXG4gICAgICAgIHRoaXMuY2hhcmFjdGVyID0gbmV3IENoYXJhY3Rlcih7eDowLCB5OjB9KTtcclxuICAgICAgICB0aGlzLmFuaW1hdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBhbmltYXRlKCl7XHJcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuZGltZW5zaW9ucy53aWR0aCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gY2FsbGluZyBhbmltYXRlIGZyb20gQ2hhcmFjdGVyIGNsYXNzXHJcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXIuYW5pbWF0ZSh0aGlzLmN0eCwgdGhpcy5kaW1lbnNpb25zKTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXIudmVsb2NpdHkueCA9IDA7XHJcbiAgICAgICAgaWYoS0VZUy5kLnR5cGVkKXtcclxuICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXIudmVsb2NpdHkueCA9IDM7XHJcbiAgICAgICAgfSBlbHNlIGlmKEtFWVMuYS50eXBlZCl7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyLnZlbG9jaXR5LnggPSAtMztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzKCl7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCk9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL2NoYW5naW5nIHRoZSB0eXBlZCB0byB0cnVlIGlmIHRoZSBrZXkgaXMgdHlwZWQuXHJcbiAgICAgICAgICAgIHN3aXRjaChldmVudC5rZXkpe1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnZCc6XHJcbiAgICAgICAgICAgICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcclxuICAgICAgICAgICAgICAgICAgICBLRVlTLmQudHlwZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnYSc6XHJcbiAgICAgICAgICAgICAgICBjYXNlICdBcnJvd0xlZnQnOlxyXG4gICAgICAgICAgICAgICAgICAgIEtFWVMuYS50eXBlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICcgJzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXJhY3Rlci52ZWxvY2l0eS55ID0gLTE0O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gaWYgdGhlIGtleSBpcyBubyB0eXBlZCB0aGlzIHdpbGwgYmUgZmFsc2UgYWdhaW4uXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KT0+IHtcclxuICAgICAgICAgICAgc3dpdGNoKGV2ZW50LmtleSl7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdkJzpcclxuICAgICAgICAgICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxyXG4gICAgICAgICAgICAgICAgICAgIEtFWVMuZC50eXBlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnYSc6XHJcbiAgICAgICAgICAgICAgICBjYXNlICdBcnJvd0xlZnQnOlxyXG4gICAgICAgICAgICAgICAgICAgIEtFWVMuYS50eXBlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJDaGFyYWN0ZXIiLCJLRVlTIiwiZCIsInR5cGVkIiwiYSIsIkdhbWUiLCJjb25zdHJ1Y3RvciIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJkaW1lbnNpb25zIiwid2lkdGgiLCJoZWlnaHQiLCJyZXN0YXJ0IiwiZXZlbnRzIiwiY2hhcmFjdGVyIiwieCIsInkiLCJhbmltYXRlIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYmluZCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwidmVsb2NpdHkiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJrZXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

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