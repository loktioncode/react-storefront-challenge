"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/StoreCard.tsx":
/*!**********************************!*\
  !*** ./components/StoreCard.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _slices_cartSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/slices/cartSlice */ \"(app-pages-browser)/./slices/cartSlice.ts\");\n/* harmony import */ var _StoreCard_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StoreCard.module.css */ \"(app-pages-browser)/./components/StoreCard.module.css\");\n/* harmony import */ var _StoreCard_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_StoreCard_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst StoreCard = (param)=>{\n    let { product, isFavorite, onFavoriteToggle } = param;\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    const handleAddToCart = ()=>{\n        dispatch((0,_slices_cartSlice__WEBPACK_IMPORTED_MODULE_2__.addToCart)(product));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_StoreCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_StoreCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().imageContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: product.image,\n                        alt: product.title\n                    }, void 0, false, {\n                        fileName: \"/Users/elishabere/Desktop/challenge-react-storefront-elisha-bere/components/StoreCard.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_StoreCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().favoriteIcon),\n                        onClick: onFavoriteToggle,\n                        children: isFavorite ? \"❤️\" : \"\\uD83E\\uDD0D\"\n                    }, void 0, false, {\n                        fileName: \"/Users/elishabere/Desktop/challenge-react-storefront-elisha-bere/components/StoreCard.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/elishabere/Desktop/challenge-react-storefront-elisha-bere/components/StoreCard.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_StoreCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().productInfo),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: product.title\n                    }, void 0, false, {\n                        fileName: \"/Users/elishabere/Desktop/challenge-react-storefront-elisha-bere/components/StoreCard.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_StoreCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().productPrice),\n                        children: [\n                            \"$\",\n                            product.price\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/elishabere/Desktop/challenge-react-storefront-elisha-bere/components/StoreCard.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Rating: ⭐ \",\n                            product.rating.rate\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/elishabere/Desktop/challenge-react-storefront-elisha-bere/components/StoreCard.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/elishabere/Desktop/challenge-react-storefront-elisha-bere/components/StoreCard.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleAddToCart,\n                className: (_StoreCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().addToCartButton),\n                children: \"Add to Cart\"\n            }, void 0, false, {\n                fileName: \"/Users/elishabere/Desktop/challenge-react-storefront-elisha-bere/components/StoreCard.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/elishabere/Desktop/challenge-react-storefront-elisha-bere/components/StoreCard.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_s(StoreCard, \"rgTLoBID190wEKCp9+G8W6F7A5M=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch\n    ];\n});\n_c = StoreCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StoreCard);\nvar _c;\n$RefreshReg$(_c, \"StoreCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvU3RvcmVDYXJkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTBCO0FBQ2dCO0FBQ0s7QUFDSDtBQVM1QyxNQUFNSSxZQUFzQztRQUFDLEVBQUVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFQyxnQkFBZ0IsRUFBRTs7SUFDcEYsTUFBTUMsV0FBV1Asd0RBQVdBO0lBRTVCLE1BQU1RLGtCQUFrQjtRQUN0QkQsU0FBU04sNERBQVNBLENBQUNHO0lBQ3JCO0lBRUEscUJBQ0UsOERBQUNLO1FBQUlDLFdBQVdSLG1FQUFXOzswQkFDekIsOERBQUNPO2dCQUFJQyxXQUFXUiw2RUFBcUI7O2tDQUNuQyw4REFBQ1c7d0JBQUlDLEtBQUtWLFFBQVFXLEtBQUs7d0JBQUVDLEtBQUtaLFFBQVFhLEtBQUs7Ozs7OztrQ0FDM0MsOERBQUNSO3dCQUFJQyxXQUFXUiwyRUFBbUI7d0JBQUVpQixTQUFTYjtrQ0FDM0NELGFBQWEsT0FBTzs7Ozs7Ozs7Ozs7OzBCQUd6Qiw4REFBQ0k7Z0JBQUlDLFdBQVdSLDBFQUFrQjs7a0NBQ2hDLDhEQUFDbUI7a0NBQUlqQixRQUFRYSxLQUFLOzs7Ozs7a0NBQ2xCLDhEQUFDSzt3QkFBRVosV0FBV1IsMkVBQW1COzs0QkFBRTs0QkFBRUUsUUFBUW9CLEtBQUs7Ozs7Ozs7a0NBQ2xELDhEQUFDRjs7NEJBQUU7NEJBQVdsQixRQUFRcUIsTUFBTSxDQUFDQyxJQUFJOzs7Ozs7Ozs7Ozs7OzBCQUVuQyw4REFBQ0M7Z0JBQU9SLFNBQVNYO2dCQUFpQkUsV0FBV1IsOEVBQXNCOzBCQUFFOzs7Ozs7Ozs7Ozs7QUFLM0U7R0F6Qk1DOztRQUNhSCxvREFBV0E7OztLQUR4Qkc7QUEyQk4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdG9yZUNhcmQudHN4PzZjMzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGFkZFRvQ2FydCB9IGZyb20gXCJAL3NsaWNlcy9jYXJ0U2xpY2VcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vU3RvcmVDYXJkLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tIFwiQC91dGlsc1wiO1xuXG5pbnRlcmZhY2UgU3RvcmVDYXJkUHJvcHMge1xuICBwcm9kdWN0OiBQcm9kdWN0O1xuICBpc0Zhdm9yaXRlOiBib29sZWFuO1xuICBvbkZhdm9yaXRlVG9nZ2xlOiAoKSA9PiB2b2lkO1xufVxuXG5jb25zdCBTdG9yZUNhcmQ6IFJlYWN0LkZDPFN0b3JlQ2FyZFByb3BzPiA9ICh7IHByb2R1Y3QsIGlzRmF2b3JpdGUsIG9uRmF2b3JpdGVUb2dnbGUgfSkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgY29uc3QgaGFuZGxlQWRkVG9DYXJ0ID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoKGFkZFRvQ2FydChwcm9kdWN0KSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZUNvbnRhaW5lcn0+XG4gICAgICAgIDxpbWcgc3JjPXtwcm9kdWN0LmltYWdlfSBhbHQ9e3Byb2R1Y3QudGl0bGV9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmF2b3JpdGVJY29ufSBvbkNsaWNrPXtvbkZhdm9yaXRlVG9nZ2xlfT5cbiAgICAgICAgICB7aXNGYXZvcml0ZSA/IFwi4p2k77iPXCIgOiBcIvCfpI1cIn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdEluZm99PlxuICAgICAgICA8aDQ+e3Byb2R1Y3QudGl0bGV9PC9oND5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdFByaWNlfT4ke3Byb2R1Y3QucHJpY2V9PC9wPlxuICAgICAgICA8cD5SYXRpbmc6IOKtkCB7cHJvZHVjdC5yYXRpbmcucmF0ZX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQWRkVG9DYXJ0fSBjbGFzc05hbWU9e3N0eWxlcy5hZGRUb0NhcnRCdXR0b259PlxuICAgICAgICBBZGQgdG8gQ2FydFxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdG9yZUNhcmQ7XG5cblxuXG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZURpc3BhdGNoIiwiYWRkVG9DYXJ0Iiwic3R5bGVzIiwiU3RvcmVDYXJkIiwicHJvZHVjdCIsImlzRmF2b3JpdGUiLCJvbkZhdm9yaXRlVG9nZ2xlIiwiZGlzcGF0Y2giLCJoYW5kbGVBZGRUb0NhcnQiLCJkaXYiLCJjbGFzc05hbWUiLCJjYXJkIiwiaW1hZ2VDb250YWluZXIiLCJpbWciLCJzcmMiLCJpbWFnZSIsImFsdCIsInRpdGxlIiwiZmF2b3JpdGVJY29uIiwib25DbGljayIsInByb2R1Y3RJbmZvIiwiaDQiLCJwIiwicHJvZHVjdFByaWNlIiwicHJpY2UiLCJyYXRpbmciLCJyYXRlIiwiYnV0dG9uIiwiYWRkVG9DYXJ0QnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/StoreCard.tsx\n"));

/***/ })

});