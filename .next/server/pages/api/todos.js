"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/todos";
exports.ids = ["pages/api/todos"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "./lib/data/index.ts":
/*!***************************!*\
  !*** ./lib/data/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos */ \"./lib/data/todos.ts\");\n\nconst Data = {\n  todo: _todos__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Data);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZGF0YS9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBRUEsTUFBTUMsSUFBSSxHQUFHO0FBQUVELEVBQUFBLElBQUlBLGdEQUFBQTtBQUFOLENBQWI7QUFFQSxpRUFBZUMsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL215LW5leHQtdG9kby8uL2xpYi9kYXRhL2luZGV4LnRzP2EyNTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRvZG8gZnJvbSBcIi4vdG9kb3NcIjtcclxuXHJcbmNvbnN0IERhdGEgPSB7IHRvZG8gfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGE7XHJcbiJdLCJuYW1lcyI6WyJ0b2RvIiwiRGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/data/index.ts\n");

/***/ }),

/***/ "./lib/data/todos.ts":
/*!***************************!*\
  !*** ./lib/data/todos.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/** 투두 데이터를 관리하는 함수들을 정의 */\n\n\n//투두리스트 데이터 불러오기 pages/api/todos.ts 내용을 그대로 가져옴\nconst getList = () => {\n  const todosBuffer = (0,fs__WEBPACK_IMPORTED_MODULE_0__.readFileSync)(\"data/todos.json\");\n  const todosString = todosBuffer.toString();\n\n  if (!todosString) {\n    return [];\n  }\n\n  const todos = JSON.parse(todosString);\n  return todos;\n}; //id의 투두가 있는지 확인하기\n\n/** some 함수는 일치하는 id가 있다면 true를 리턴하고, id가 없다면 false를 리턴하게 됩니다 */\n\n\nconst exist = ({\n  id\n}) => {\n  const todos = getList();\n  const todo = todos.some(todo => todo.id === id);\n  return todo;\n}; //투두리스트 저장하기\n\n\nconst write = async todos => {\n  (0,fs__WEBPACK_IMPORTED_MODULE_0__.writeFileSync)(\"data/todos.json\", JSON.stringify(todos));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  getList,\n  exist,\n  write\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZGF0YS90b2Rvcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBOztBQUdBO0FBQ0EsTUFBTUUsT0FBTyxHQUFHLE1BQU07QUFDcEIsUUFBTUMsV0FBVyxHQUFHSCxnREFBWSxDQUFDLGlCQUFELENBQWhDO0FBQ0EsUUFBTUksV0FBVyxHQUFHRCxXQUFXLENBQUNFLFFBQVosRUFBcEI7O0FBQ0EsTUFBSSxDQUFDRCxXQUFMLEVBQWtCO0FBQ2hCLFdBQU8sRUFBUDtBQUNEOztBQUNELFFBQU1FLEtBQWlCLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixXQUFYLENBQTFCO0FBQ0EsU0FBT0UsS0FBUDtBQUNELENBUkQsRUFVQTs7QUFDQTs7O0FBQ0EsTUFBTUcsS0FBSyxHQUFHLENBQUM7QUFBRUMsRUFBQUE7QUFBRixDQUFELEtBQTRCO0FBQ3hDLFFBQU1KLEtBQUssR0FBR0osT0FBTyxFQUFyQjtBQUNBLFFBQU1TLElBQUksR0FBR0wsS0FBSyxDQUFDTSxJQUFOLENBQVlELElBQUQsSUFBVUEsSUFBSSxDQUFDRCxFQUFMLEtBQVlBLEVBQWpDLENBQWI7QUFDQSxTQUFPQyxJQUFQO0FBQ0QsQ0FKRCxFQU1BOzs7QUFDQSxNQUFNRSxLQUFLLEdBQUcsTUFBT1AsS0FBUCxJQUE2QjtBQUN6Q0wsRUFBQUEsaURBQWEsQ0FBQyxpQkFBRCxFQUFvQk0sSUFBSSxDQUFDTyxTQUFMLENBQWVSLEtBQWYsQ0FBcEIsQ0FBYjtBQUNELENBRkQ7O0FBSUEsaUVBQWU7QUFBRUosRUFBQUEsT0FBRjtBQUFXTyxFQUFBQSxLQUFYO0FBQWtCSSxFQUFBQTtBQUFsQixDQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktbmV4dC10b2RvLy4vbGliL2RhdGEvdG9kb3MudHM/OGIzNCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiog7Yis65GQIOuNsOydtO2EsOulvCDqtIDrpqztlZjripQg7ZWo7IiY65Ok7J2EIOygleydmCAqL1xyXG5pbXBvcnQgeyByZWFkRmlsZVN5bmMsIHdyaXRlRmlsZVN5bmMgfSBmcm9tIFwiZnNcIjtcclxuaW1wb3J0IHsgVG9kb1R5cGUgfSBmcm9tIFwiLi4vLi4vdHlwZXMvdG9kb1wiO1xyXG5cclxuLy/tiKzrkZDrpqzsiqTtirgg642w7J207YSwIOu2iOufrOyYpOq4sCBwYWdlcy9hcGkvdG9kb3MudHMg64K07Jqp7J2EIOq3uOuMgOuhnCDqsIDsoLjsmLRcclxuY29uc3QgZ2V0TGlzdCA9ICgpID0+IHtcclxuICBjb25zdCB0b2Rvc0J1ZmZlciA9IHJlYWRGaWxlU3luYyhcImRhdGEvdG9kb3MuanNvblwiKTtcclxuICBjb25zdCB0b2Rvc1N0cmluZyA9IHRvZG9zQnVmZmVyLnRvU3RyaW5nKCk7XHJcbiAgaWYgKCF0b2Rvc1N0cmluZykge1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxuICBjb25zdCB0b2RvczogVG9kb1R5cGVbXSA9IEpTT04ucGFyc2UodG9kb3NTdHJpbmcpO1xyXG4gIHJldHVybiB0b2RvcztcclxufTtcclxuXHJcbi8vaWTsnZgg7Yis65GQ6rCAIOyeiOuKlOyngCDtmZXsnbjtlZjquLBcclxuLyoqIHNvbWUg7ZWo7IiY64qUIOydvOy5mO2VmOuKlCBpZOqwgCDsnojri6TrqbQgdHJ1ZeulvCDrpqzthLTtlZjqs6AsIGlk6rCAIOyXhuuLpOuptCBmYWxzZeulvCDrpqzthLTtlZjqsowg65Cp64uI64ukICovXHJcbmNvbnN0IGV4aXN0ID0gKHsgaWQgfTogeyBpZDogbnVtYmVyIH0pID0+IHtcclxuICBjb25zdCB0b2RvcyA9IGdldExpc3QoKTtcclxuICBjb25zdCB0b2RvID0gdG9kb3Muc29tZSgodG9kbykgPT4gdG9kby5pZCA9PT0gaWQpO1xyXG4gIHJldHVybiB0b2RvO1xyXG59O1xyXG5cclxuLy/tiKzrkZDrpqzsiqTtirgg7KCA7J6l7ZWY6riwXHJcbmNvbnN0IHdyaXRlID0gYXN5bmMgKHRvZG9zOiBUb2RvVHlwZVtdKSA9PiB7XHJcbiAgd3JpdGVGaWxlU3luYyhcImRhdGEvdG9kb3MuanNvblwiLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgeyBnZXRMaXN0LCBleGlzdCwgd3JpdGUgfTtcclxuIl0sIm5hbWVzIjpbInJlYWRGaWxlU3luYyIsIndyaXRlRmlsZVN5bmMiLCJnZXRMaXN0IiwidG9kb3NCdWZmZXIiLCJ0b2Rvc1N0cmluZyIsInRvU3RyaW5nIiwidG9kb3MiLCJKU09OIiwicGFyc2UiLCJleGlzdCIsImlkIiwidG9kbyIsInNvbWUiLCJ3cml0ZSIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/data/todos.ts\n");

/***/ }),

/***/ "./pages/api/todos/index.ts":
/*!**********************************!*\
  !*** ./pages/api/todos/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/data */ \"./lib/data/index.ts\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {\n  if (req.method === \"GET\") {\n    try {\n      const todos = _lib_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todo.getList();\n      res.statusCode = 200;\n      return res.send(todos);\n    } catch (e) {\n      console.log(e);\n      res.statusCode = 500;\n      res.send(e);\n    }\n  }\n\n  if (req.method === \"POST\") {\n    // 값을 잘 받았는지 확인\n    const {\n      text,\n      color\n    } = req.body;\n    console.log(text, color);\n\n    if (!text || !color) {\n      res.statusCode = 400;\n      return res.send(\"text 혹은 color가 없습니다.\");\n    }\n\n    const todos = _lib_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todo.getList();\n    let todoId;\n\n    if (todos.length > 0) {\n      //마지막 투두 id + 1\n      todoId = todos[todos.length - 1].id + 1;\n    } else {\n      todoId = 1;\n    }\n\n    const newTodo = {\n      id: todoId,\n      text,\n      color,\n      checked: false\n    };\n    _lib_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todo.write([...todos, newTodo]);\n    res.statusCode = 200;\n    res.end();\n  }\n\n  res.statusCode = 405;\n  console.log(res.statusCode);\n  return res.end();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdG9kb3MvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQTtBQUVBLGlFQUFlLE9BQU9DLEdBQVAsRUFBNEJDLEdBQTVCLEtBQXFEO0FBQ2xFLE1BQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLEtBQW5CLEVBQTBCO0FBQ3hCLFFBQUk7QUFDRixZQUFNQyxLQUFLLEdBQUdKLDhEQUFBLEVBQWQ7QUFDQUUsTUFBQUEsR0FBRyxDQUFDSyxVQUFKLEdBQWlCLEdBQWpCO0FBQ0EsYUFBT0wsR0FBRyxDQUFDTSxJQUFKLENBQVNKLEtBQVQsQ0FBUDtBQUNELEtBSkQsQ0FJRSxPQUFPSyxDQUFQLEVBQVU7QUFDVkMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLENBQVo7QUFDQVAsTUFBQUEsR0FBRyxDQUFDSyxVQUFKLEdBQWlCLEdBQWpCO0FBQ0FMLE1BQUFBLEdBQUcsQ0FBQ00sSUFBSixDQUFTQyxDQUFUO0FBQ0Q7QUFDRjs7QUFFRCxNQUFJUixHQUFHLENBQUNFLE1BQUosS0FBZSxNQUFuQixFQUEyQjtBQUN6QjtBQUNBLFVBQU07QUFBRVMsTUFBQUEsSUFBRjtBQUFRQyxNQUFBQTtBQUFSLFFBQWtCWixHQUFHLENBQUNhLElBQTVCO0FBQ0FKLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxJQUFaLEVBQWtCQyxLQUFsQjs7QUFDQSxRQUFJLENBQUNELElBQUQsSUFBUyxDQUFDQyxLQUFkLEVBQXFCO0FBQ25CWCxNQUFBQSxHQUFHLENBQUNLLFVBQUosR0FBaUIsR0FBakI7QUFDQSxhQUFPTCxHQUFHLENBQUNNLElBQUosQ0FBUyxzQkFBVCxDQUFQO0FBQ0Q7O0FBQ0QsVUFBTUosS0FBSyxHQUFHSiw4REFBQSxFQUFkO0FBQ0EsUUFBSWUsTUFBSjs7QUFDQSxRQUFJWCxLQUFLLENBQUNZLE1BQU4sR0FBZSxDQUFuQixFQUFzQjtBQUNwQjtBQUNBRCxNQUFBQSxNQUFNLEdBQUdYLEtBQUssQ0FBQ0EsS0FBSyxDQUFDWSxNQUFOLEdBQWUsQ0FBaEIsQ0FBTCxDQUF3QkMsRUFBeEIsR0FBNkIsQ0FBdEM7QUFDRCxLQUhELE1BR087QUFDTEYsTUFBQUEsTUFBTSxHQUFHLENBQVQ7QUFDRDs7QUFFRCxVQUFNRyxPQUFPLEdBQUc7QUFDZEQsTUFBQUEsRUFBRSxFQUFFRixNQURVO0FBRWRILE1BQUFBLElBRmM7QUFHZEMsTUFBQUEsS0FIYztBQUlkTSxNQUFBQSxPQUFPLEVBQUU7QUFKSyxLQUFoQjtBQU9BbkIsSUFBQUEsNERBQUEsQ0FBZ0IsQ0FBQyxHQUFHSSxLQUFKLEVBQVdjLE9BQVgsQ0FBaEI7QUFDQWhCLElBQUFBLEdBQUcsQ0FBQ0ssVUFBSixHQUFpQixHQUFqQjtBQUNBTCxJQUFBQSxHQUFHLENBQUNtQixHQUFKO0FBQ0Q7O0FBQ0RuQixFQUFBQSxHQUFHLENBQUNLLFVBQUosR0FBaUIsR0FBakI7QUFDQUcsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlULEdBQUcsQ0FBQ0ssVUFBaEI7QUFDQSxTQUFPTCxHQUFHLENBQUNtQixHQUFKLEVBQVA7QUFDRCxDQTVDRCIsInNvdXJjZXMiOlsid2VicGFjazovL215LW5leHQtdG9kby8uL3BhZ2VzL2FwaS90b2Rvcy9pbmRleC50cz8wMmQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgRGF0YSBmcm9tIFwiLi4vLi4vLi4vbGliL2RhdGFcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xyXG4gIGlmIChyZXEubWV0aG9kID09PSBcIkdFVFwiKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB0b2RvcyA9IERhdGEudG9kby5nZXRMaXN0KCk7XHJcbiAgICAgIHJlcy5zdGF0dXNDb2RlID0gMjAwO1xyXG4gICAgICByZXR1cm4gcmVzLnNlbmQodG9kb3MpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgcmVzLnN0YXR1c0NvZGUgPSA1MDA7XHJcbiAgICAgIHJlcy5zZW5kKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XHJcbiAgICAvLyDqsJLsnYQg7J6YIOuwm+yVmOuKlOyngCDtmZXsnbhcclxuICAgIGNvbnN0IHsgdGV4dCwgY29sb3IgfSA9IHJlcS5ib2R5O1xyXG4gICAgY29uc29sZS5sb2codGV4dCwgY29sb3IpO1xyXG4gICAgaWYgKCF0ZXh0IHx8ICFjb2xvcikge1xyXG4gICAgICByZXMuc3RhdHVzQ29kZSA9IDQwMDtcclxuICAgICAgcmV0dXJuIHJlcy5zZW5kKFwidGV4dCDtmLnsnYAgY29sb3LqsIAg7JeG7Iq164uI64ukLlwiKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHRvZG9zID0gRGF0YS50b2RvLmdldExpc3QoKTtcclxuICAgIGxldCB0b2RvSWQ6IG51bWJlcjtcclxuICAgIGlmICh0b2Rvcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIC8v66eI7KeA66eJIO2IrOuRkCBpZCArIDFcclxuICAgICAgdG9kb0lkID0gdG9kb3NbdG9kb3MubGVuZ3RoIC0gMV0uaWQgKyAxO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdG9kb0lkID0gMTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBuZXdUb2RvID0ge1xyXG4gICAgICBpZDogdG9kb0lkLFxyXG4gICAgICB0ZXh0LFxyXG4gICAgICBjb2xvcixcclxuICAgICAgY2hlY2tlZDogZmFsc2UsXHJcbiAgICB9O1xyXG5cclxuICAgIERhdGEudG9kby53cml0ZShbLi4udG9kb3MsIG5ld1RvZG9dKTtcclxuICAgIHJlcy5zdGF0dXNDb2RlID0gMjAwO1xyXG4gICAgcmVzLmVuZCgpO1xyXG4gIH1cclxuICByZXMuc3RhdHVzQ29kZSA9IDQwNTtcclxuICBjb25zb2xlLmxvZyhyZXMuc3RhdHVzQ29kZSk7XHJcbiAgcmV0dXJuIHJlcy5lbmQoKTtcclxufTtcclxuIl0sIm5hbWVzIjpbIkRhdGEiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJ0b2RvcyIsInRvZG8iLCJnZXRMaXN0Iiwic3RhdHVzQ29kZSIsInNlbmQiLCJlIiwiY29uc29sZSIsImxvZyIsInRleHQiLCJjb2xvciIsImJvZHkiLCJ0b2RvSWQiLCJsZW5ndGgiLCJpZCIsIm5ld1RvZG8iLCJjaGVja2VkIiwid3JpdGUiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/todos/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/todos/index.ts"));
module.exports = __webpack_exports__;

})();