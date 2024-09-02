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

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _components_StoreCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/StoreCard */ \"(app-pages-browser)/./components/StoreCard.tsx\");\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/NavBar */ \"(app-pages-browser)/./components/NavBar.tsx\");\n/* harmony import */ var _slices_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/slices/products */ \"(app-pages-browser)/./slices/products.ts\");\n/* harmony import */ var _slices_favoritesSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/slices/favoritesSlice */ \"(app-pages-browser)/./slices/favoritesSlice.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n // Import the favorites slice\nconst StorePage = ()=>{\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();\n    const { all_products, loading, error } = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>state.products);\n    const favorites = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>state.favorites.items);\n    const [filteredProducts, setFilteredProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_slices_products__WEBPACK_IMPORTED_MODULE_4__.fetchProducts)());\n    }, [\n        dispatch\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setFilteredProducts(all_products);\n    }, [\n        all_products\n    ]);\n    const handleFilter = (criteria)=>{\n        let sortedProducts = [\n            ...all_products\n        ];\n        if (criteria === \"price-high-low\") {\n            sortedProducts.sort((a, b)=>b.price - a.price);\n        } else if (criteria === \"a-z\") {\n            sortedProducts.sort((a, b)=>a.title.localeCompare(b.title));\n        }\n        setFilteredProducts(sortedProducts);\n    };\n    const handleFavoriteToggle = (productId)=>{\n        dispatch((0,_slices_favoritesSlice__WEBPACK_IMPORTED_MODULE_5__.toggleFavorite)(productId));\n    };\n    if (loading === \"pending\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/elishabere/Desktop/challenge-react-storefront-elisha-bere/app/page.tsx\",\n            lineNumber: 41,\n            columnNumber: 12\n        }, undefined);\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                \"Error: \",\n                error\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/elishabere/Desktop/challenge-react-storefront-elisha-bere/app/page.tsx\",\n            lineNumber: 45,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/elishabere/Desktop/challenge-react-storefront-elisha-bere/app/page.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>handleFilter(\"price-high-low\"),\n                        children: \"Price: High to Low\"\n                    }, void 0, false, {\n                        fileName: \"/Users/elishabere/Desktop/challenge-react-storefront-elisha-bere/app/page.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>handleFilter(\"a-z\"),\n                        children: \"A-Z\"\n                    }, void 0, false, {\n                        fileName: \"/Users/elishabere/Desktop/challenge-react-storefront-elisha-bere/app/page.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/elishabere/Desktop/challenge-react-storefront-elisha-bere/app/page.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"grid\",\n                    gridTemplateColumns: \"repeat(auto-fill, minmax(200px, 4fr))\",\n                    gap: \"20px\",\n                    marginTop: \"20px\"\n                },\n                children: filteredProducts === null || filteredProducts === void 0 ? void 0 : filteredProducts.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_StoreCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        product: product,\n                        isFavorite: favorites.includes(product.id),\n                        onFavoriteToggle: ()=>handleFavoriteToggle(product.id)\n                    }, product.id, false, {\n                        fileName: \"/Users/elishabere/Desktop/challenge-react-storefront-elisha-bere/app/page.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/elishabere/Desktop/challenge-react-storefront-elisha-bere/app/page.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/elishabere/Desktop/challenge-react-storefront-elisha-bere/app/page.tsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, undefined);\n};\n_s(StorePage, \"1ddu1TWFVSuuFpYoT4+yldb9vzE=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector\n    ];\n});\n_c = StorePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StorePage);\nvar _c;\n$RefreshReg$(_c, \"StorePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUU0QztBQUNXO0FBRVA7QUFDTjtBQUVRO0FBQ08sQ0FBQyw2QkFBNkI7QUFFdkYsTUFBTVEsWUFBWTs7SUFDaEIsTUFBTUMsV0FBV1Asd0RBQVdBO0lBQzVCLE1BQU0sRUFBRVEsWUFBWSxFQUFFQyxPQUFPLEVBQUVDLEtBQUssRUFBRSxHQUFHVCx3REFBV0EsQ0FBQyxDQUFDVSxRQUFxQkEsTUFBTUMsUUFBUTtJQUN6RixNQUFNQyxZQUFZWix3REFBV0EsQ0FBQyxDQUFDVSxRQUFxQkEsTUFBTUUsU0FBUyxDQUFDQyxLQUFLO0lBQ3pFLE1BQU0sQ0FBQ0Msa0JBQWtCQyxvQkFBb0IsR0FBR2pCLCtDQUFRQSxDQUFZLEVBQUU7SUFFdEVELGdEQUFTQSxDQUFDO1FBQ1JTLFNBQVNILCtEQUFhQTtJQUN4QixHQUFHO1FBQUNHO0tBQVM7SUFFYlQsZ0RBQVNBLENBQUM7UUFDUmtCLG9CQUFvQlI7SUFDdEIsR0FBRztRQUFDQTtLQUFhO0lBRWpCLE1BQU1TLGVBQWUsQ0FBQ0M7UUFDcEIsSUFBSUMsaUJBQWlCO2VBQUlYO1NBQWE7UUFDdEMsSUFBSVUsYUFBYSxrQkFBa0I7WUFDakNDLGVBQWVDLElBQUksQ0FBQyxDQUFDQyxHQUFHQyxJQUFNQSxFQUFFQyxLQUFLLEdBQUdGLEVBQUVFLEtBQUs7UUFDakQsT0FBTyxJQUFJTCxhQUFhLE9BQU87WUFDN0JDLGVBQWVDLElBQUksQ0FBQyxDQUFDQyxHQUFHQyxJQUFNRCxFQUFFRyxLQUFLLENBQUNDLGFBQWEsQ0FBQ0gsRUFBRUUsS0FBSztRQUM3RDtRQUNBUixvQkFBb0JHO0lBQ3RCO0lBRUEsTUFBTU8sdUJBQXVCLENBQUNDO1FBQzVCcEIsU0FBU0Ysc0VBQWNBLENBQUNzQjtJQUMxQjtJQUVBLElBQUlsQixZQUFZLFdBQVc7UUFDekIscUJBQU8sOERBQUNtQjtzQkFBSTs7Ozs7O0lBQ2Q7SUFFQSxJQUFJbEIsT0FBTztRQUNULHFCQUFPLDhEQUFDa0I7O2dCQUFJO2dCQUFRbEI7Ozs7Ozs7SUFDdEI7SUFFQSxxQkFDRSw4REFBQ2tCOzswQkFDQyw4REFBQ3pCLDBEQUFNQTs7Ozs7MEJBQ1AsOERBQUN5Qjs7a0NBQ0MsOERBQUNDO3dCQUFPQyxTQUFTLElBQU1iLGFBQWE7a0NBQW1COzs7Ozs7a0NBQ3ZELDhEQUFDWTt3QkFBT0MsU0FBUyxJQUFNYixhQUFhO2tDQUFROzs7Ozs7Ozs7Ozs7MEJBRzlDLDhEQUFDVztnQkFBSUcsT0FBTztvQkFBRUMsU0FBUztvQkFBUUMscUJBQXFCO29CQUF5Q0MsS0FBSztvQkFBUUMsV0FBVztnQkFBTzswQkFDekhwQiw2QkFBQUEsdUNBQUFBLGlCQUFrQnFCLEdBQUcsQ0FBQyxDQUFDQyx3QkFDdEIsOERBQUNuQyw2REFBU0E7d0JBRVJtQyxTQUFTQTt3QkFDVEMsWUFBWXpCLFVBQVUwQixRQUFRLENBQUNGLFFBQVFHLEVBQUU7d0JBQ3pDQyxrQkFBa0IsSUFBTWYscUJBQXFCVyxRQUFRRyxFQUFFO3VCQUhsREgsUUFBUUcsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQVMzQjtHQXhETWxDOztRQUNhTixvREFBV0E7UUFDYUMsb0RBQVdBO1FBQ2xDQSxvREFBV0E7OztLQUh6Qks7QUEwRE4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UudHN4Pzc2MDMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi9zdG9yZVwiO1xuaW1wb3J0IFN0b3JlQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9TdG9yZUNhcmRcIjtcbmltcG9ydCBOYXZCYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2QmFyXCI7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSBcIkAvdXRpbHNcIjtcbmltcG9ydCB7IGZldGNoUHJvZHVjdHMgfSBmcm9tIFwiQC9zbGljZXMvcHJvZHVjdHNcIjtcbmltcG9ydCB7IHRvZ2dsZUZhdm9yaXRlIH0gZnJvbSBcIkAvc2xpY2VzL2Zhdm9yaXRlc1NsaWNlXCI7IC8vIEltcG9ydCB0aGUgZmF2b3JpdGVzIHNsaWNlXG5cbmNvbnN0IFN0b3JlUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCB7IGFsbF9wcm9kdWN0cywgbG9hZGluZywgZXJyb3IgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5wcm9kdWN0cyk7XG4gIGNvbnN0IGZhdm9yaXRlcyA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5mYXZvcml0ZXMuaXRlbXMpO1xuICBjb25zdCBbZmlsdGVyZWRQcm9kdWN0cywgc2V0RmlsdGVyZWRQcm9kdWN0c10gPSB1c2VTdGF0ZTxQcm9kdWN0W10+KFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKGZldGNoUHJvZHVjdHMoKSBhcyBhbnkpO1xuICB9LCBbZGlzcGF0Y2hdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEZpbHRlcmVkUHJvZHVjdHMoYWxsX3Byb2R1Y3RzKTtcbiAgfSwgW2FsbF9wcm9kdWN0c10pO1xuXG4gIGNvbnN0IGhhbmRsZUZpbHRlciA9IChjcml0ZXJpYTogc3RyaW5nKSA9PiB7XG4gICAgbGV0IHNvcnRlZFByb2R1Y3RzID0gWy4uLmFsbF9wcm9kdWN0c107XG4gICAgaWYgKGNyaXRlcmlhID09PSBcInByaWNlLWhpZ2gtbG93XCIpIHtcbiAgICAgIHNvcnRlZFByb2R1Y3RzLnNvcnQoKGEsIGIpID0+IGIucHJpY2UgLSBhLnByaWNlKTtcbiAgICB9IGVsc2UgaWYgKGNyaXRlcmlhID09PSBcImEtelwiKSB7XG4gICAgICBzb3J0ZWRQcm9kdWN0cy5zb3J0KChhLCBiKSA9PiBhLnRpdGxlLmxvY2FsZUNvbXBhcmUoYi50aXRsZSkpO1xuICAgIH1cbiAgICBzZXRGaWx0ZXJlZFByb2R1Y3RzKHNvcnRlZFByb2R1Y3RzKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVGYXZvcml0ZVRvZ2dsZSA9IChwcm9kdWN0SWQ6IG51bWJlcikgPT4ge1xuICAgIGRpc3BhdGNoKHRvZ2dsZUZhdm9yaXRlKHByb2R1Y3RJZCkpO1xuICB9O1xuXG4gIGlmIChsb2FkaW5nID09PSBcInBlbmRpbmdcIikge1xuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG4gIH1cblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gPGRpdj5FcnJvcjoge2Vycm9yfTwvZGl2PjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxOYXZCYXIgLz5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlRmlsdGVyKFwicHJpY2UtaGlnaC1sb3dcIil9PlByaWNlOiBIaWdoIHRvIExvdzwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUZpbHRlcihcImEtelwiKX0+QS1aPC9idXR0b24+XG4gICAgICAgIHsvKiBBZGQgY2F0ZWdvcnkgZmlsdGVyIGJ1dHRvbnMgb3IgZHJvcGRvd25zIGhlcmUgKi99XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJncmlkXCIsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwicmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDIwMHB4LCA0ZnIpKVwiLCBnYXA6IFwiMjBweFwiLCBtYXJnaW5Ub3A6IFwiMjBweFwiIH19PlxuICAgICAgICB7ZmlsdGVyZWRQcm9kdWN0cz8ubWFwKChwcm9kdWN0OiBQcm9kdWN0KSA9PiAoXG4gICAgICAgICAgPFN0b3JlQ2FyZCBcbiAgICAgICAgICAgIGtleT17cHJvZHVjdC5pZH0gXG4gICAgICAgICAgICBwcm9kdWN0PXtwcm9kdWN0fSBcbiAgICAgICAgICAgIGlzRmF2b3JpdGU9e2Zhdm9yaXRlcy5pbmNsdWRlcyhwcm9kdWN0LmlkKX1cbiAgICAgICAgICAgIG9uRmF2b3JpdGVUb2dnbGU9eygpID0+IGhhbmRsZUZhdm9yaXRlVG9nZ2xlKHByb2R1Y3QuaWQpfSBcbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RvcmVQYWdlO1xuXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiU3RvcmVDYXJkIiwiTmF2QmFyIiwiZmV0Y2hQcm9kdWN0cyIsInRvZ2dsZUZhdm9yaXRlIiwiU3RvcmVQYWdlIiwiZGlzcGF0Y2giLCJhbGxfcHJvZHVjdHMiLCJsb2FkaW5nIiwiZXJyb3IiLCJzdGF0ZSIsInByb2R1Y3RzIiwiZmF2b3JpdGVzIiwiaXRlbXMiLCJmaWx0ZXJlZFByb2R1Y3RzIiwic2V0RmlsdGVyZWRQcm9kdWN0cyIsImhhbmRsZUZpbHRlciIsImNyaXRlcmlhIiwic29ydGVkUHJvZHVjdHMiLCJzb3J0IiwiYSIsImIiLCJwcmljZSIsInRpdGxlIiwibG9jYWxlQ29tcGFyZSIsImhhbmRsZUZhdm9yaXRlVG9nZ2xlIiwicHJvZHVjdElkIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayIsInN0eWxlIiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJnYXAiLCJtYXJnaW5Ub3AiLCJtYXAiLCJwcm9kdWN0IiwiaXNGYXZvcml0ZSIsImluY2x1ZGVzIiwiaWQiLCJvbkZhdm9yaXRlVG9nZ2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});