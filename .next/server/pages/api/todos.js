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

/***/ "./pages/api/todos.ts":
/*!****************************!*\
  !*** ./pages/api/todos.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {\n  if (req.method === \"GET\") {\n    try {\n      // const todos = await new Promise<TodoType[]>((resolve, reject) => {\n      //   fs.readFile(\"../../data/todos.json\", (err, data) => {\n      //     //두번째 인자로 callback을 받는데, 에러값과 데이터값\n      //     if (err) {\n      //       return reject(err.message);\n      //     }\n      //     const todosData = data.toString();\n      //     if (!todosData) {\n      //       //* todos.json 값이 비어있다면(todosData = \"\") 빈 배열을 넘겨줌 ???\n      //       return resolve([]);\n      //     }\n      //     const todos = JSON.parse(data.toString());\n      //     return resolve(todos);\n      //   });\n      // });\n      // res.statusCode = 200;\n      // // todos를 결과값으로 보내준다\n      // return res.send(todos);\n\n      /** fs의 readFileSync 함수사용도 가능함\r\n       * readFileSync는 파일을 동기적으로 불러오는 함수\r\n       */\n      const todosBuffer = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(\"data/todos.json\");\n      const todosString = todosBuffer.toString();\n\n      if (!todosString) {\n        res.statusCode = 200;\n        res.send([]);\n      }\n\n      const todos = JSON.parse(todosString);\n      res.statusCode = 200;\n      return res.send(todos);\n    } catch (e) {\n      console.log(e);\n      res.statusCode = 500;\n      res.send(e);\n    }\n  }\n\n  res.statusCode = 405;\n  console.log(res.statusCode);\n  return res.end();\n}); // 터미널에 curl http://localhost:3000/api/todos => hello Next!\n// 터미널에 curl -X POST http://localhost:3000/api/todos => 405//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdG9kb3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUE7QUFFQSxpRUFBZSxPQUFPQyxHQUFQLEVBQTRCQyxHQUE1QixLQUFxRDtBQUNsRSxNQUFJRCxHQUFHLENBQUNFLE1BQUosS0FBZSxLQUFuQixFQUEwQjtBQUN4QixRQUFJO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ047QUFDQTtBQUNNLFlBQU1DLFdBQVcsR0FBR0osc0RBQUEsQ0FBZ0IsaUJBQWhCLENBQXBCO0FBQ0EsWUFBTU0sV0FBVyxHQUFHRixXQUFXLENBQUNHLFFBQVosRUFBcEI7O0FBQ0EsVUFBSSxDQUFDRCxXQUFMLEVBQWtCO0FBQ2hCSixRQUFBQSxHQUFHLENBQUNNLFVBQUosR0FBaUIsR0FBakI7QUFDQU4sUUFBQUEsR0FBRyxDQUFDTyxJQUFKLENBQVMsRUFBVDtBQUNEOztBQUNELFlBQU1DLEtBQWlCLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXTixXQUFYLENBQTFCO0FBQ0FKLE1BQUFBLEdBQUcsQ0FBQ00sVUFBSixHQUFpQixHQUFqQjtBQUNBLGFBQU9OLEdBQUcsQ0FBQ08sSUFBSixDQUFTQyxLQUFULENBQVA7QUFDRCxLQWxDRCxDQWtDRSxPQUFPRyxDQUFQLEVBQVU7QUFDVkMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLENBQVo7QUFDQVgsTUFBQUEsR0FBRyxDQUFDTSxVQUFKLEdBQWlCLEdBQWpCO0FBQ0FOLE1BQUFBLEdBQUcsQ0FBQ08sSUFBSixDQUFTSSxDQUFUO0FBQ0Q7QUFDRjs7QUFDRFgsRUFBQUEsR0FBRyxDQUFDTSxVQUFKLEdBQWlCLEdBQWpCO0FBQ0FNLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZYixHQUFHLENBQUNNLFVBQWhCO0FBQ0EsU0FBT04sR0FBRyxDQUFDYyxHQUFKLEVBQVA7QUFDRCxDQTdDRCxHQStDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktbmV4dC10b2RvLy4vcGFnZXMvYXBpL3RvZG9zLnRzP2RiODUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB7IFRvZG9UeXBlIH0gZnJvbSBcIi4uLy4uL3R5cGVzL3RvZG9cIjtcclxuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XHJcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiR0VUXCIpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIGNvbnN0IHRvZG9zID0gYXdhaXQgbmV3IFByb21pc2U8VG9kb1R5cGVbXT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAvLyAgIGZzLnJlYWRGaWxlKFwiLi4vLi4vZGF0YS90b2Rvcy5qc29uXCIsIChlcnIsIGRhdGEpID0+IHtcclxuICAgICAgLy8gICAgIC8v65GQ67KI7Ke4IOyduOyekOuhnCBjYWxsYmFja+ydhCDrsJvripTrjbAsIOyXkOufrOqwkuqzvCDrjbDsnbTthLDqsJJcclxuICAgICAgLy8gICAgIGlmIChlcnIpIHtcclxuICAgICAgLy8gICAgICAgcmV0dXJuIHJlamVjdChlcnIubWVzc2FnZSk7XHJcbiAgICAgIC8vICAgICB9XHJcblxyXG4gICAgICAvLyAgICAgY29uc3QgdG9kb3NEYXRhID0gZGF0YS50b1N0cmluZygpO1xyXG4gICAgICAvLyAgICAgaWYgKCF0b2Rvc0RhdGEpIHtcclxuICAgICAgLy8gICAgICAgLy8qIHRvZG9zLmpzb24g6rCS7J20IOu5hOyWtOyeiOuLpOuptCh0b2Rvc0RhdGEgPSBcIlwiKSDruYgg67Cw7Je07J2EIOuEmOqyqOykjCA/Pz9cclxuICAgICAgLy8gICAgICAgcmV0dXJuIHJlc29sdmUoW10pO1xyXG4gICAgICAvLyAgICAgfVxyXG5cclxuICAgICAgLy8gICAgIGNvbnN0IHRvZG9zID0gSlNPTi5wYXJzZShkYXRhLnRvU3RyaW5nKCkpO1xyXG4gICAgICAvLyAgICAgcmV0dXJuIHJlc29sdmUodG9kb3MpO1xyXG4gICAgICAvLyAgIH0pO1xyXG4gICAgICAvLyB9KTtcclxuICAgICAgLy8gcmVzLnN0YXR1c0NvZGUgPSAyMDA7XHJcbiAgICAgIC8vIC8vIHRvZG9z66W8IOqysOqzvOqwkuycvOuhnCDrs7TrgrTspIDri6RcclxuICAgICAgLy8gcmV0dXJuIHJlcy5zZW5kKHRvZG9zKTtcclxuXHJcbiAgICAgIC8qKiBmc+ydmCByZWFkRmlsZVN5bmMg7ZWo7IiY7IKs7Jqp64+EIOqwgOuKpe2VqFxyXG4gICAgICAgKiByZWFkRmlsZVN5bmPripQg7YyM7J287J2EIOuPmeq4sOyggeycvOuhnCDrtojrn6zsmKTripQg7ZWo7IiYXHJcbiAgICAgICAqL1xyXG4gICAgICBjb25zdCB0b2Rvc0J1ZmZlciA9IGZzLnJlYWRGaWxlU3luYyhcImRhdGEvdG9kb3MuanNvblwiKTtcclxuICAgICAgY29uc3QgdG9kb3NTdHJpbmcgPSB0b2Rvc0J1ZmZlci50b1N0cmluZygpO1xyXG4gICAgICBpZiAoIXRvZG9zU3RyaW5nKSB7XHJcbiAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSAyMDA7XHJcbiAgICAgICAgcmVzLnNlbmQoW10pO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHRvZG9zOiBUb2RvVHlwZVtdID0gSlNPTi5wYXJzZSh0b2Rvc1N0cmluZyk7XHJcbiAgICAgIHJlcy5zdGF0dXNDb2RlID0gMjAwO1xyXG4gICAgICByZXR1cm4gcmVzLnNlbmQodG9kb3MpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgcmVzLnN0YXR1c0NvZGUgPSA1MDA7XHJcbiAgICAgIHJlcy5zZW5kKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXMuc3RhdHVzQ29kZSA9IDQwNTtcclxuICBjb25zb2xlLmxvZyhyZXMuc3RhdHVzQ29kZSk7XHJcbiAgcmV0dXJuIHJlcy5lbmQoKTtcclxufTtcclxuXHJcbi8vIO2EsOuvuOuEkOyXkCBjdXJsIGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdG9kb3MgPT4gaGVsbG8gTmV4dCFcclxuLy8g7YSw66+464SQ7JeQIGN1cmwgLVggUE9TVCBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3RvZG9zID0+IDQwNVxyXG4iXSwibmFtZXMiOlsiZnMiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJ0b2Rvc0J1ZmZlciIsInJlYWRGaWxlU3luYyIsInRvZG9zU3RyaW5nIiwidG9TdHJpbmciLCJzdGF0dXNDb2RlIiwic2VuZCIsInRvZG9zIiwiSlNPTiIsInBhcnNlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/todos.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/todos.ts"));
module.exports = __webpack_exports__;

})();