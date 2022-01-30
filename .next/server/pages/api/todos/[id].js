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
exports.id = "pages/api/todos/[id]";
exports.ids = ["pages/api/todos/[id]"];
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

/***/ "./pages/api/todos/[id].ts":
/*!*********************************!*\
  !*** ./pages/api/todos/[id].ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/data */ \"./lib/data/index.ts\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {\n  if (req.method === \"PATCH\") {\n    try {\n      const todoId = Number(req.query.id);\n      const todo = _lib_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todo.exist({\n        id: todoId\n      });\n\n      if (!todo) {\n        res.statusCode = 404;\n        res.end();\n      } //todolist 저장하기\n\n\n      const todos = _lib_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todo.getList();\n      const changedTodos = todos.map(todo => {\n        if (todo.id === todoId) {\n          return _objectSpread(_objectSpread({}, todo), {}, {\n            checked: !todo.checked\n          });\n        }\n\n        return todo;\n      });\n      _lib_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todo.write(changedTodos);\n      res.statusCode = 200;\n      return res.end();\n    } catch (e) {\n      console.log(e);\n      res.statusCode = 500;\n      res.send(e);\n    }\n  }\n\n  res.statusCode = 405;\n  return res.end();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdG9kb3MvW2lkXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBO0FBRUEsaUVBQWUsT0FBT0MsR0FBUCxFQUE0QkMsR0FBNUIsS0FBcUQ7QUFDbEUsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsT0FBbkIsRUFBNEI7QUFDMUIsUUFBSTtBQUNGLFlBQU1DLE1BQU0sR0FBR0MsTUFBTSxDQUFDSixHQUFHLENBQUNLLEtBQUosQ0FBVUMsRUFBWCxDQUFyQjtBQUNBLFlBQU1DLElBQUksR0FBR1IsNERBQUEsQ0FBZ0I7QUFBRU8sUUFBQUEsRUFBRSxFQUFFSDtBQUFOLE9BQWhCLENBQWI7O0FBQ0EsVUFBSSxDQUFDSSxJQUFMLEVBQVc7QUFDVE4sUUFBQUEsR0FBRyxDQUFDUSxVQUFKLEdBQWlCLEdBQWpCO0FBQ0FSLFFBQUFBLEdBQUcsQ0FBQ1MsR0FBSjtBQUNELE9BTkMsQ0FRRjs7O0FBQ0EsWUFBTUMsS0FBSyxHQUFHWiw4REFBQSxFQUFkO0FBQ0EsWUFBTWMsWUFBWSxHQUFHRixLQUFLLENBQUNHLEdBQU4sQ0FBV1AsSUFBRCxJQUFVO0FBQ3ZDLFlBQUlBLElBQUksQ0FBQ0QsRUFBTCxLQUFZSCxNQUFoQixFQUF3QjtBQUN0QixpREFBWUksSUFBWjtBQUFrQlEsWUFBQUEsT0FBTyxFQUFFLENBQUNSLElBQUksQ0FBQ1E7QUFBakM7QUFDRDs7QUFDRCxlQUFPUixJQUFQO0FBQ0QsT0FMb0IsQ0FBckI7QUFNQVIsTUFBQUEsNERBQUEsQ0FBZ0JjLFlBQWhCO0FBRUFaLE1BQUFBLEdBQUcsQ0FBQ1EsVUFBSixHQUFpQixHQUFqQjtBQUNBLGFBQU9SLEdBQUcsQ0FBQ1MsR0FBSixFQUFQO0FBQ0QsS0FwQkQsQ0FvQkUsT0FBT08sQ0FBUCxFQUFVO0FBQ1ZDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFaO0FBQ0FoQixNQUFBQSxHQUFHLENBQUNRLFVBQUosR0FBaUIsR0FBakI7QUFDQVIsTUFBQUEsR0FBRyxDQUFDbUIsSUFBSixDQUFTSCxDQUFUO0FBQ0Q7QUFDRjs7QUFDRGhCLEVBQUFBLEdBQUcsQ0FBQ1EsVUFBSixHQUFpQixHQUFqQjtBQUNBLFNBQU9SLEdBQUcsQ0FBQ1MsR0FBSixFQUFQO0FBQ0QsQ0E5QkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1uZXh0LXRvZG8vLi9wYWdlcy9hcGkvdG9kb3MvW2lkXS50cz83Yjk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgRGF0YSBmcm9tIFwiLi4vLi4vLi4vbGliL2RhdGFcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xyXG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBBVENIXCIpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHRvZG9JZCA9IE51bWJlcihyZXEucXVlcnkuaWQpO1xyXG4gICAgICBjb25zdCB0b2RvID0gRGF0YS50b2RvLmV4aXN0KHsgaWQ6IHRvZG9JZCB9KTtcclxuICAgICAgaWYgKCF0b2RvKSB7XHJcbiAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSA0MDQ7XHJcbiAgICAgICAgcmVzLmVuZCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvL3RvZG9saXN0IOyggOyepe2VmOq4sFxyXG4gICAgICBjb25zdCB0b2RvcyA9IERhdGEudG9kby5nZXRMaXN0KCk7XHJcbiAgICAgIGNvbnN0IGNoYW5nZWRUb2RvcyA9IHRvZG9zLm1hcCgodG9kbykgPT4ge1xyXG4gICAgICAgIGlmICh0b2RvLmlkID09PSB0b2RvSWQpIHtcclxuICAgICAgICAgIHJldHVybiB7IC4uLnRvZG8sIGNoZWNrZWQ6ICF0b2RvLmNoZWNrZWQgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRvZG87XHJcbiAgICAgIH0pO1xyXG4gICAgICBEYXRhLnRvZG8ud3JpdGUoY2hhbmdlZFRvZG9zKTtcclxuXHJcbiAgICAgIHJlcy5zdGF0dXNDb2RlID0gMjAwO1xyXG4gICAgICByZXR1cm4gcmVzLmVuZCgpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgcmVzLnN0YXR1c0NvZGUgPSA1MDA7XHJcbiAgICAgIHJlcy5zZW5kKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXMuc3RhdHVzQ29kZSA9IDQwNTtcclxuICByZXR1cm4gcmVzLmVuZCgpO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiRGF0YSIsInJlcSIsInJlcyIsIm1ldGhvZCIsInRvZG9JZCIsIk51bWJlciIsInF1ZXJ5IiwiaWQiLCJ0b2RvIiwiZXhpc3QiLCJzdGF0dXNDb2RlIiwiZW5kIiwidG9kb3MiLCJnZXRMaXN0IiwiY2hhbmdlZFRvZG9zIiwibWFwIiwiY2hlY2tlZCIsIndyaXRlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJzZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/todos/[id].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/todos/[id].ts"));
module.exports = __webpack_exports__;

})();