"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/TodoList.tsx":
/*!*********************************!*\
  !*** ./components/TodoList.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_dev_sidepjt_my_next_todo_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var C_dev_sidepjt_my_next_todo_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var C_dev_sidepjt_my_next_todo_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var C_dev_sidepjt_my_next_todo_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_dev_sidepjt_my_next_todo_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/palette */ \"./styles/palette.ts\");\n/* harmony import */ var _lib_api_todos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/api/todos */ \"./lib/api/todos.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"C:\\\\dev\\\\sidepjt\\\\my-next-todo\\\\components\\\\TodoList.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_dev_sidepjt_my_next_todo_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n/* eslint-disable @typescript-eslint/no-empty-function */\n\n\n\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div.withConfig({\n  displayName: \"TodoList__Container\",\n  componentId: \"sc-19yelzw-0\"\n})([\"width:100%;.todo-list-header{padding:12px;border-bottom:1px solid \", \";.todo-list-last-todo{font-size:14px;span{margin-left:8px;}}.todo-list-header-colors{display:flex;.todo-list-header-color-num{display:flex;margin-right:8px;p{font-size:14px;line-height:16px;margin:0;margin-left:6px;}.todo-list-header-round-color{width:16px;height:16px;border-radius:50%;}}}}.bg-blue{background-color:\", \";}.bg-green{background-color:\", \";}.bg-navy{background-color:\", \";}.bg-orange{background-color:\", \";}.bg-red{background-color:\", \";}.bg-yellow{background-color:\", \";}.todo-list{.todo-item{display:flex;justify-content:space-between;align-items:center;width:100%;height:52px;border-bottom:1px solid \", \";.todo-left-side{width:100%;height:100%;display:flex;align-items:center;.todo-color-block{width:12px;height:100%;}.checked-todo-text{color:\", \";text-decoration:line-through;}.todo-text{margin-left:12px;font-size:16px;}}.todo-right-side{display:flex;margin-right:12px;svg{&:first-child{margin-right:16px;}}.todo-trash-can{width:16px;path{fill:\", \";}}.todo-check-mark{path{fill:\", \";}}.todo-button{width:20px;height:20px;border-radius:50%;border:1px solid \", \";background-color:transparent;outline:none;}}}}\"], _styles_palette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].gray, _styles_palette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].blue, _styles_palette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].green, _styles_palette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].navy, _styles_palette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].orange, _styles_palette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].red, _styles_palette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].yellow, _styles_palette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].gray, _styles_palette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].gray, _styles_palette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].deep_red, _styles_palette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].deep_green, _styles_palette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].gray);\n/** TodoList가 props로 todos를 받기 위해 타입을 설정해주어야 함 */\n\n/** interface도 type과 동일하게 타입을 지정할 수 있다\n *  export를 하지 않는 타입은 interface를 사용하는 걸 선호한다고 함. 책에서는 */\n\n/** TodoList 컴포넌트는 props로 IProps를 전달받기로 타입이 지정돼 있다는 의미 */\n\n_c = Container;\n\n// eslint-disable-next-line react/function-component-definition\nvar TodoList = function TodoList(_ref) {\n  _s();\n\n  var todos = _ref.todos;\n\n  /** todos의 타입이 IProps를 따름 !!!!! */\n\n  /** React.FC의 타입은 '<>'은 제네릭이라고 읽으며\n   * 여기서는 P(props)라는 타입(기본 값은 {} 객체?)을 제네릭을 사용하여\n   * React.FunctionComponent에 전달해주고 있음 */\n  //* 색깔 객체 구하기 2 switch 버전\n\n  /** 컴포넌트가 리렌더(전달받은 props가 변경시)될 때마다 재계산되는데 이를 방지해야 함 */\n  //useCallback은 함수에 종속성을 줄 수 있음\n  var getTodoColorNums = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function () {\n    var red = 0;\n    var orange = 0;\n    var yellow = 0;\n    var green = 0;\n    var blue = 0;\n    var navy = 0;\n    todos.forEach(function (todo) {\n      //하나의 값에 대한 조건문은 switch 사용 편리\n      switch (todo.color) {\n        case \"red\":\n          red += 1;\n          break;\n\n        case \"orange\":\n          orange += 1;\n          break;\n\n        case \"yellow\":\n          yellow += 1;\n          break;\n\n        case \"green\":\n          green += 1;\n          break;\n\n        case \"blue\":\n          blue += 1;\n          break;\n\n        case \"navy\":\n          navy += 1;\n          break;\n\n        default:\n          break;\n      }\n    });\n    return {\n      red: red,\n      orange: orange,\n      yellow: yellow,\n      green: green,\n      blue: blue,\n      navy: navy\n    };\n  }, [todos]); //useMemo는 변수에 종속성을 주어 함수의 재연산을 방지할 수 있는 hooks\n\n  var todoColorNums = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(getTodoColorNums, [todos]);\n  console.log(todoColorNums);\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(todos),\n      localTodos = _useState[0],\n      setLocalTodos = _useState[1]; //* 투두 체크하기\n\n\n  var checkTodo = /*#__PURE__*/function () {\n    var _ref2 = (0,C_dev_sidepjt_my_next_todo_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/C_dev_sidepjt_my_next_todo_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(id) {\n      var newTodos;\n      return C_dev_sidepjt_my_next_todo_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return (0,_lib_api_todos__WEBPACK_IMPORTED_MODULE_5__.checkTodoAPI)(id);\n\n            case 3:\n              console.log(\"체크하였습니다.\"); // router.reload(); //데이터 다시 받기\n              // router.push(\"/\"); //데이터 다시 받기\n              //data를 local로 저장하여 사용하기\n\n              newTodos = localTodos.map(function (todo) {\n                if (todo.id === id) {\n                  return _objectSpread(_objectSpread({}, todos), {}, {\n                    checkd: !todo.checked\n                  });\n                }\n\n                return todo;\n              });\n              setLocalTodos(newTodos);\n              _context.next = 11;\n              break;\n\n            case 8:\n              _context.prev = 8;\n              _context.t0 = _context[\"catch\"](0);\n              console.log(_context.t0);\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 8]]);\n    }));\n\n    return function checkTodo(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Container, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n      className: \"todo-list-header\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"p\", {\n        className: \"todo-list-last-todo\",\n        children: [\"\\uB0A8\\uC740 TODO\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"span\", {\n          children: [localTodos.length, \"\\uAC1C\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 211,\n          columnNumber: 18\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 210,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n        className: \"todo-list-header-colors\",\n        children: Object.keys(todoColorNums).map(function (color, index) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n            className: \"todo-list-header-color-num\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n              className: \"todo-list-header-round-color bg-\".concat(color)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 216,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"p\", {\n              children: [todoColorNums[color], \"\\uAC1C\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 217,\n              columnNumber: 15\n            }, _this)]\n          }, index, true, {\n            fileName: _jsxFileName,\n            lineNumber: 215,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 213,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 209,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"ul\", {\n      className: \"todo-list\",\n      children: localTodos.map(function (todo) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"li\", {\n          className: \"todo-item\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n            className: \"todo-left-side\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n              className: \"todo-color-block bg-\".concat(todo.color)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 226,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"p\", {\n              className: \"todo-text \".concat(todo.checked ? \"checked-todo-text\" : \"\"),\n              children: todo.text\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 227,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 225,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n            className: \"todo-right-side\",\n            children: !todo.checked && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"button\", {\n              type: \"button\",\n              className: \"todo-button\",\n              onClick: function onClick() {\n                checkTodo(todo.id);\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 246,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 235,\n            columnNumber: 13\n          }, _this)]\n        }, todo.id, true, {\n          fileName: _jsxFileName,\n          lineNumber: 224,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 222,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 208,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(TodoList, \"y3oHDYd0XeezA7Hth9vFMl/yCBQ=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter];\n});\n\n_c2 = TodoList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoList);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"TodoList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUFBLGFBREYsZUFjRTtBQUFJLGVBQVMsRUFBQyxXQUFkO0FBQUEsZ0JBQ0dYLFVBQVUsQ0FBQ0ssR0FBWCxDQUFlLFVBQUNYLElBQUQ7QUFBQSw0QkFDZDtBQUFJLG1CQUFTLEVBQUMsV0FBZDtBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBQyxnQkFBZjtBQUFBLG9DQUNFO0FBQUssdUJBQVMsZ0NBQXlCQSxJQUFJLENBQUNDLEtBQTlCO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQ0UsdUJBQVMsc0JBQ1BELElBQUksQ0FBQ2EsT0FBTCxHQUFlLG1CQUFmLEdBQXFDLEVBRDlCLENBRFg7QUFBQSx3QkFLR2IsSUFBSSxDQUFDa0I7QUFMUjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQVdFO0FBQUsscUJBQVMsRUFBQyxpQkFBZjtBQUFBLHNCQVVHLENBQUNsQixJQUFJLENBQUNhLE9BQU4saUJBQ0M7QUFDRSxrQkFBSSxFQUFDLFFBRFA7QUFFRSx1QkFBUyxFQUFDLGFBRlo7QUFHRSxxQkFBTyxFQUFFLG1CQUFNO0FBQ2JMLGdCQUFBQSxTQUFTLENBQUNSLElBQUksQ0FBQ1MsRUFBTixDQUFUO0FBQ0Q7QUFMSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFYRjtBQUFBLFdBQStCVCxJQUFJLENBQUNTLEVBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGM7QUFBQSxPQUFmO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBcURELENBL0hEOztHQUFNYjtVQWdEV1o7OztNQWhEWFk7QUFpSU4sK0RBQWVBLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ub2RvTGlzdC50c3g/MWM4YyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZW1wdHktZnVuY3Rpb24gKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgcGFsZXR0ZSBmcm9tIFwiLi4vc3R5bGVzL3BhbGV0dGVcIjtcbmltcG9ydCB7IFRvZG9UeXBlIH0gZnJvbSBcIi4uL3R5cGVzL3RvZG9cIjtcblxuaW1wb3J0IFRyYXNoQ2FuSWNvbiBmcm9tIFwiLi4vcHVibGljL3N0YXRpY3Mvc3ZnL3RyYXNoY2FuLnN2Z1wiO1xuaW1wb3J0IENoZWNrTWFya0ljb24gZnJvbSBcIi4uL3B1YmxpYy9zdGF0aWNzL3N2Zy9jaGVja21hcmsuc3ZnXCI7XG5pbXBvcnQgeyBjaGVja1RvZG9BUEkgfSBmcm9tIFwiLi4vbGliL2FwaS90b2Rvc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICAudG9kby1saXN0LWhlYWRlciB7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtwYWxldHRlLmdyYXl9O1xuICAgIC50b2RvLWxpc3QtbGFzdC10b2RvIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIHNwYW4ge1xuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgfVxuICAgIH1cbiAgICAudG9kby1saXN0LWhlYWRlci1jb2xvcnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIC50b2RvLWxpc3QtaGVhZGVyLWNvbG9yLW51bSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICBwIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRvZG8tbGlzdC1oZWFkZXItcm91bmQtY29sb3Ige1xuICAgICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmJnLWJsdWUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5ibHVlfTtcbiAgfVxuICAuYmctZ3JlZW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5ncmVlbn07XG4gIH1cbiAgLmJnLW5hdnkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5uYXZ5fTtcbiAgfVxuICAuYmctb3JhbmdlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUub3JhbmdlfTtcbiAgfVxuICAuYmctcmVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUucmVkfTtcbiAgfVxuICAuYmcteWVsbG93IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUueWVsbG93fTtcbiAgfVxuXG4gIC50b2RvLWxpc3Qge1xuICAgIC50b2RvLWl0ZW0ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogNTJweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3BhbGV0dGUuZ3JheX07XG5cbiAgICAgIC50b2RvLWxlZnQtc2lkZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIC50b2RvLWNvbG9yLWJsb2NrIHtcbiAgICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLmNoZWNrZWQtdG9kby10ZXh0IHtcbiAgICAgICAgICBjb2xvcjogJHtwYWxldHRlLmdyYXl9O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICAgICB9XG4gICAgICAgIC50b2RvLXRleHQge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLnRvZG8tcmlnaHQtc2lkZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcblxuICAgICAgICBzdmcge1xuICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC50b2RvLXRyYXNoLWNhbiB7XG4gICAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgICAgcGF0aCB7XG4gICAgICAgICAgICBmaWxsOiAke3BhbGV0dGUuZGVlcF9yZWR9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAudG9kby1jaGVjay1tYXJrIHtcbiAgICAgICAgICBwYXRoIHtcbiAgICAgICAgICAgIGZpbGw6ICR7cGFsZXR0ZS5kZWVwX2dyZWVufTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLyogZmlsbDogJHtwYWxldHRlLmRlZXBfZ3JlZW59OyAqL1xuICAgICAgICB9XG5cbiAgICAgICAgLnRvZG8tYnV0dG9uIHtcbiAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7cGFsZXR0ZS5ncmF5fTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG4vKiogVG9kb0xpc3TqsIAgcHJvcHProZwgdG9kb3Prpbwg67Cb6riwIOychO2VtCDtg4DsnoXsnYQg7ISk7KCV7ZW07KO87Ja07JW8IO2VqCAqL1xuLyoqIGludGVyZmFjZeuPhCB0eXBl6rO8IOuPmeydvO2VmOqyjCDtg4DsnoXsnYQg7KeA7KCV7ZWgIOyImCDsnojri6RcbiAqICBleHBvcnTrpbwg7ZWY7KeAIOyViuuKlCDtg4DsnoXsnYAgaW50ZXJmYWNl66W8IOyCrOyaqe2VmOuKlCDqsbgg7ISg7Zi47ZWc64uk6rOgIO2VqC4g7LGF7JeQ7ISc64qUICovXG4vKiogVG9kb0xpc3Qg7Lu07Y+s64SM7Yq464qUIHByb3Bz66GcIElQcm9wc+ulvCDsoITri6zrsJvquLDroZwg7YOA7J6F7J20IOyngOygleuPvCDsnojri6TripQg7J2Y66+4ICovXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgdG9kb3M6IFRvZG9UeXBlW107XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9mdW5jdGlvbi1jb21wb25lbnQtZGVmaW5pdGlvblxuY29uc3QgVG9kb0xpc3Q6IFJlYWN0LkZDPElQcm9wcz4gPSAoeyB0b2RvcyB9KSA9PiB7XG4gIC8qKiB0b2Rvc+ydmCDtg4DsnoXsnbQgSVByb3Bz66W8IOuUsOumhCAhISEhISAqL1xuICAvKiogUmVhY3QuRkPsnZgg7YOA7J6F7J2AICc8PifsnYAg7KCc64Sk66at7J2065286rOgIOydveycvOupsFxuICAgKiDsl6zquLDshJzripQgUChwcm9wcynrnbzripQg7YOA7J6FKOq4sOuzuCDqsJLsnYAge30g6rCd7LK0PynsnYQg7KCc64Sk66at7J2EIOyCrOyaqe2VmOyXrFxuICAgKiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudOyXkCDsoITri6ztlbTso7zqs6Ag7J6I7J2MICovXG5cbiAgLy8qIOyDieq5lCDqsJ3ssrQg6rWs7ZWY6riwIDIgc3dpdGNoIOuyhOyghFxuICAvKiog7Lu07Y+s64SM7Yq46rCAIOumrOugjOuNlCjsoITri6zrsJvsnYAgcHJvcHPqsIAg67OA6rK97IucKeuQoCDrlYzrp4jri6Qg7J6s6rOE7IKw65CY64qU642wIOydtOulvCDrsKnsp4DtlbTslbwg7ZWoICovXG4gIC8vdXNlQ2FsbGJhY2vsnYAg7ZWo7IiY7JeQIOyiheyGjeyEseydhCDspIQg7IiYIOyeiOydjFxuICBjb25zdCBnZXRUb2RvQ29sb3JOdW1zID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGxldCByZWQgPSAwO1xuICAgIGxldCBvcmFuZ2UgPSAwO1xuICAgIGxldCB5ZWxsb3cgPSAwO1xuICAgIGxldCBncmVlbiA9IDA7XG4gICAgbGV0IGJsdWUgPSAwO1xuICAgIGxldCBuYXZ5ID0gMDtcbiAgICB0b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICAvL+2VmOuCmOydmCDqsJLsl5Ag64yA7ZWcIOyhsOqxtOusuOydgCBzd2l0Y2gg7IKs7JqpIO2OuOumrFxuICAgICAgc3dpdGNoICh0b2RvLmNvbG9yKSB7XG4gICAgICAgIGNhc2UgXCJyZWRcIjpcbiAgICAgICAgICByZWQgKz0gMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIm9yYW5nZVwiOlxuICAgICAgICAgIG9yYW5nZSArPSAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwieWVsbG93XCI6XG4gICAgICAgICAgeWVsbG93ICs9IDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJncmVlblwiOlxuICAgICAgICAgIGdyZWVuICs9IDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJibHVlXCI6XG4gICAgICAgICAgYmx1ZSArPSAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwibmF2eVwiOlxuICAgICAgICAgIG5hdnkgKz0gMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4geyByZWQsIG9yYW5nZSwgeWVsbG93LCBncmVlbiwgYmx1ZSwgbmF2eSB9O1xuICB9LCBbdG9kb3NdKTtcblxuICAvL3VzZU1lbW/ripQg67OA7IiY7JeQIOyiheyGjeyEseydhCDso7zslrQg7ZWo7IiY7J2YIOyerOyXsOyCsOydhCDrsKnsp4DtlaAg7IiYIOyeiOuKlCBob29rc1xuICBjb25zdCB0b2RvQ29sb3JOdW1zID0gdXNlTWVtbyhnZXRUb2RvQ29sb3JOdW1zLCBbdG9kb3NdKTtcbiAgY29uc29sZS5sb2codG9kb0NvbG9yTnVtcyk7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtsb2NhbFRvZG9zLCBzZXRMb2NhbFRvZG9zXSA9IHVzZVN0YXRlKHRvZG9zKTtcblxuICAvLyog7Yis65GQIOyytO2BrO2VmOq4sFxuICBjb25zdCBjaGVja1RvZG8gPSBhc3luYyAoaWQ6IG51bWJlcikgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBjaGVja1RvZG9BUEkoaWQpO1xuICAgICAgY29uc29sZS5sb2coXCLssrTtgaztlZjsmIDsirXri4jri6QuXCIpO1xuXG4gICAgICAvLyByb3V0ZXIucmVsb2FkKCk7IC8v642w7J207YSwIOuLpOyLnCDrsJvquLBcblxuICAgICAgLy8gcm91dGVyLnB1c2goXCIvXCIpOyAvL+uNsOydtO2EsCDri6Tsi5wg67Cb6riwXG5cbiAgICAgIC8vZGF0YeulvCBsb2NhbOuhnCDsoIDsnqXtlZjsl6wg7IKs7Jqp7ZWY6riwXG4gICAgICBjb25zdCBuZXdUb2RvcyA9IGxvY2FsVG9kb3MubWFwKCh0b2RvKSA9PiB7XG4gICAgICAgIGlmICh0b2RvLmlkID09PSBpZCkge1xuICAgICAgICAgIHJldHVybiB7IC4uLnRvZG9zLCBjaGVja2Q6ICF0b2RvLmNoZWNrZWQgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9kbztcbiAgICAgIH0pO1xuICAgICAgc2V0TG9jYWxUb2RvcyhuZXdUb2Rvcyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd0b2RvLWxpc3QtaGVhZGVyJz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSd0b2RvLWxpc3QtbGFzdC10b2RvJz5cbiAgICAgICAgICDrgqjsnYAgVE9ETzxzcGFuPntsb2NhbFRvZG9zLmxlbmd0aH3qsJw8L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RvZG8tbGlzdC1oZWFkZXItY29sb3JzJz5cbiAgICAgICAgICB7T2JqZWN0LmtleXModG9kb0NvbG9yTnVtcykubWFwKChjb2xvciwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0b2RvLWxpc3QtaGVhZGVyLWNvbG9yLW51bScga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdG9kby1saXN0LWhlYWRlci1yb3VuZC1jb2xvciBiZy0ke2NvbG9yfWB9IC8+XG4gICAgICAgICAgICAgIDxwPnt0b2RvQ29sb3JOdW1zW2NvbG9yXX3qsJw8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx1bCBjbGFzc05hbWU9J3RvZG8tbGlzdCc+XG4gICAgICAgIHtsb2NhbFRvZG9zLm1hcCgodG9kbykgPT4gKFxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3RvZG8taXRlbScga2V5PXt0b2RvLmlkfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0b2RvLWxlZnQtc2lkZSc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdG9kby1jb2xvci1ibG9jayBiZy0ke3RvZG8uY29sb3J9YH0gLz5cbiAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0b2RvLXRleHQgJHtcbiAgICAgICAgICAgICAgICAgIHRvZG8uY2hlY2tlZCA/IFwiY2hlY2tlZC10b2RvLXRleHRcIiA6IFwiXCJcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0b2RvLnRleHR9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RvZG8tcmlnaHQtc2lkZSc+XG4gICAgICAgICAgICAgIHsvKiB7dG9kby5jaGVja2VkICYmIChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgPFRyYXNoQ2FuSWNvbiBjbGFzc05hbWU9J3RvZG8tdHJhc2gtY2FuJyBvbkNsaWNrPXsoKSA9PiB7fX0gLz5cbiAgICAgICAgICAgICAgICAgIDxDaGVja01hcmtJY29uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndG9kby1jaGVjay1tYXJrJ1xuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7fX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICl9ICovfVxuICAgICAgICAgICAgICB7IXRvZG8uY2hlY2tlZCAmJiAoXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgdHlwZT0nYnV0dG9uJ1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0b2RvLWJ1dHRvbidcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tUb2RvKHRvZG8uaWQpO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9kb0xpc3Q7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsInN0eWxlZCIsInBhbGV0dGUiLCJjaGVja1RvZG9BUEkiLCJ1c2VSb3V0ZXIiLCJDb250YWluZXIiLCJkaXYiLCJncmF5IiwiYmx1ZSIsImdyZWVuIiwibmF2eSIsIm9yYW5nZSIsInJlZCIsInllbGxvdyIsImRlZXBfcmVkIiwiZGVlcF9ncmVlbiIsIlRvZG9MaXN0IiwidG9kb3MiLCJnZXRUb2RvQ29sb3JOdW1zIiwiZm9yRWFjaCIsInRvZG8iLCJjb2xvciIsInRvZG9Db2xvck51bXMiLCJjb25zb2xlIiwibG9nIiwicm91dGVyIiwibG9jYWxUb2RvcyIsInNldExvY2FsVG9kb3MiLCJjaGVja1RvZG8iLCJpZCIsIm5ld1RvZG9zIiwibWFwIiwiY2hlY2tkIiwiY2hlY2tlZCIsImxlbmd0aCIsIk9iamVjdCIsImtleXMiLCJpbmRleCIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TodoList.tsx\n");

/***/ })

});