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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _components_StoreCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/StoreCard */ \"(app-pages-browser)/./components/StoreCard.tsx\");\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/NavBar */ \"(app-pages-browser)/./components/NavBar.tsx\");\n/* harmony import */ var _slices_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/slices/products */ \"(app-pages-browser)/./slices/products.ts\");\n/* harmony import */ var _slices_favoritesSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/slices/favoritesSlice */ \"(app-pages-browser)/./slices/favoritesSlice.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n // Import the favorites slice\nconst StorePage = ()=>{\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();\n    const { all_products, loading, error } = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>state.products);\n    const favorites = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>state.favorites.items);\n    const [filteredProducts, setFilteredProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_slices_products__WEBPACK_IMPORTED_MODULE_4__.fetchProducts)());\n    }, [\n        dispatch\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setFilteredProducts(all_products);\n    }, [\n        all_products\n    ]);\n    const handleFilter = (criteria)=>{\n        let sortedProducts = [\n            ...all_products\n        ];\n        if (criteria === \"price-high-low\") {\n            sortedProducts.sort((a, b)=>b.price - a.price);\n        } else if (criteria === \"a-z\") {\n            sortedProducts.sort((a, b)=>a.title.localeCompare(b.title));\n        }\n        setFilteredProducts(sortedProducts);\n    };\n    const handleFavoriteToggle = (productId)=>{\n        dispatch((0,_slices_favoritesSlice__WEBPACK_IMPORTED_MODULE_5__.toggleFavorite)(productId));\n    };\n    if (loading === \"pending\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/elishabere/Desktop/challenge-react-storefront-elisha-bere/app/page.tsx\",\n            lineNumber: 41,\n            columnNumber: 12\n        }, undefined);\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                \"Error: \",\n                error\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/elishabere/Desktop/challenge-react-storefront-elisha-bere/app/page.tsx\",\n            lineNumber: 45,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/elishabere/Desktop/challenge-react-storefront-elisha-bere/app/page.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>handleFilter(\"price-high-low\"),\n                        children: \"Price: High to Low\"\n                    }, void 0, false, {\n                        fileName: \"/Users/elishabere/Desktop/challenge-react-storefront-elisha-bere/app/page.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>handleFilter(\"a-z\"),\n                        children: \"A-Z\"\n                    }, void 0, false, {\n                        fileName: \"/Users/elishabere/Desktop/challenge-react-storefront-elisha-bere/app/page.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/elishabere/Desktop/challenge-react-storefront-elisha-bere/app/page.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"grid\",\n                    gridTemplateColumns: \"repeat(auto-fit, minmax(200px, 1fr))\",\n                    gap: \"20px\",\n                    marginTop: \"20px\"\n                },\n                children: filteredProducts === null || filteredProducts === void 0 ? void 0 : filteredProducts.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_StoreCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        product: product,\n                        isFavorite: favorites.includes(product.id),\n                        onFavoriteToggle: ()=>handleFavoriteToggle(product.id)\n                    }, product.id, false, {\n                        fileName: \"/Users/elishabere/Desktop/challenge-react-storefront-elisha-bere/app/page.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/elishabere/Desktop/challenge-react-storefront-elisha-bere/app/page.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/elishabere/Desktop/challenge-react-storefront-elisha-bere/app/page.tsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, undefined);\n};\n_s(StorePage, \"1ddu1TWFVSuuFpYoT4+yldb9vzE=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector\n    ];\n});\n_c = StorePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StorePage);\nvar _c;\n$RefreshReg$(_c, \"StorePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUU0QztBQUNXO0FBRVA7QUFDTjtBQUVRO0FBQ08sQ0FBQyw2QkFBNkI7QUFFdkYsTUFBTVEsWUFBWTs7SUFDaEIsTUFBTUMsV0FBV1Asd0RBQVdBO0lBQzVCLE1BQU0sRUFBRVEsWUFBWSxFQUFFQyxPQUFPLEVBQUVDLEtBQUssRUFBRSxHQUFHVCx3REFBV0EsQ0FBQyxDQUFDVSxRQUFxQkEsTUFBTUMsUUFBUTtJQUN6RixNQUFNQyxZQUFZWix3REFBV0EsQ0FBQyxDQUFDVSxRQUFxQkEsTUFBTUUsU0FBUyxDQUFDQyxLQUFLO0lBQ3pFLE1BQU0sQ0FBQ0Msa0JBQWtCQyxvQkFBb0IsR0FBR2pCLCtDQUFRQSxDQUFZLEVBQUU7SUFFdEVELGdEQUFTQSxDQUFDO1FBQ1JTLFNBQVNILCtEQUFhQTtJQUN4QixHQUFHO1FBQUNHO0tBQVM7SUFFYlQsZ0RBQVNBLENBQUM7UUFDUmtCLG9CQUFvQlI7SUFDdEIsR0FBRztRQUFDQTtLQUFhO0lBRWpCLE1BQU1TLGVBQWUsQ0FBQ0M7UUFDcEIsSUFBSUMsaUJBQWlCO2VBQUlYO1NBQWE7UUFDdEMsSUFBSVUsYUFBYSxrQkFBa0I7WUFDakNDLGVBQWVDLElBQUksQ0FBQyxDQUFDQyxHQUFHQyxJQUFNQSxFQUFFQyxLQUFLLEdBQUdGLEVBQUVFLEtBQUs7UUFDakQsT0FBTyxJQUFJTCxhQUFhLE9BQU87WUFDN0JDLGVBQWVDLElBQUksQ0FBQyxDQUFDQyxHQUFHQyxJQUFNRCxFQUFFRyxLQUFLLENBQUNDLGFBQWEsQ0FBQ0gsRUFBRUUsS0FBSztRQUM3RDtRQUNBUixvQkFBb0JHO0lBQ3RCO0lBRUEsTUFBTU8sdUJBQXVCLENBQUNDO1FBQzVCcEIsU0FBU0Ysc0VBQWNBLENBQUNzQjtJQUMxQjtJQUVBLElBQUlsQixZQUFZLFdBQVc7UUFDekIscUJBQU8sOERBQUNtQjtzQkFBSTs7Ozs7O0lBQ2Q7SUFFQSxJQUFJbEIsT0FBTztRQUNULHFCQUFPLDhEQUFDa0I7O2dCQUFJO2dCQUFRbEI7Ozs7Ozs7SUFDdEI7SUFFQSxxQkFDRSw4REFBQ2tCOzswQkFDQyw4REFBQ3pCLDBEQUFNQTs7Ozs7MEJBQ1AsOERBQUN5Qjs7a0NBQ0MsOERBQUNDO3dCQUFPQyxTQUFTLElBQU1iLGFBQWE7a0NBQW1COzs7Ozs7a0NBQ3ZELDhEQUFDWTt3QkFBT0MsU0FBUyxJQUFNYixhQUFhO2tDQUFROzs7Ozs7Ozs7Ozs7MEJBRzlDLDhEQUFDVztnQkFBSUcsT0FBTztvQkFDUkMsU0FBUztvQkFDVEMscUJBQXFCO29CQUNyQkMsS0FBSztvQkFDTEMsV0FBVztnQkFDYjswQkFDQ3BCLDZCQUFBQSx1Q0FBQUEsaUJBQWtCcUIsR0FBRyxDQUFDLENBQUNDLHdCQUN0Qiw4REFBQ25DLDZEQUFTQTt3QkFFUm1DLFNBQVNBO3dCQUNUQyxZQUFZekIsVUFBVTBCLFFBQVEsQ0FBQ0YsUUFBUUcsRUFBRTt3QkFDekNDLGtCQUFrQixJQUFNZixxQkFBcUJXLFFBQVFHLEVBQUU7dUJBSGxESCxRQUFRRyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0FBUzNCO0dBN0RNbEM7O1FBQ2FOLG9EQUFXQTtRQUNhQyxvREFBV0E7UUFDbENBLG9EQUFXQTs7O0tBSHpCSztBQStETiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIi4uL3N0b3JlXCI7XG5pbXBvcnQgU3RvcmVDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL1N0b3JlQ2FyZFwiO1xuaW1wb3J0IE5hdkJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZCYXJcIjtcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tIFwiQC91dGlsc1wiO1xuaW1wb3J0IHsgZmV0Y2hQcm9kdWN0cyB9IGZyb20gXCJAL3NsaWNlcy9wcm9kdWN0c1wiO1xuaW1wb3J0IHsgdG9nZ2xlRmF2b3JpdGUgfSBmcm9tIFwiQC9zbGljZXMvZmF2b3JpdGVzU2xpY2VcIjsgLy8gSW1wb3J0IHRoZSBmYXZvcml0ZXMgc2xpY2VcblxuY29uc3QgU3RvcmVQYWdlID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHsgYWxsX3Byb2R1Y3RzLCBsb2FkaW5nLCBlcnJvciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnByb2R1Y3RzKTtcbiAgY29uc3QgZmF2b3JpdGVzID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmZhdm9yaXRlcy5pdGVtcyk7XG4gIGNvbnN0IFtmaWx0ZXJlZFByb2R1Y3RzLCBzZXRGaWx0ZXJlZFByb2R1Y3RzXSA9IHVzZVN0YXRlPFByb2R1Y3RbXT4oW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goZmV0Y2hQcm9kdWN0cygpIGFzIGFueSk7XG4gIH0sIFtkaXNwYXRjaF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0RmlsdGVyZWRQcm9kdWN0cyhhbGxfcHJvZHVjdHMpO1xuICB9LCBbYWxsX3Byb2R1Y3RzXSk7XG5cbiAgY29uc3QgaGFuZGxlRmlsdGVyID0gKGNyaXRlcmlhOiBzdHJpbmcpID0+IHtcbiAgICBsZXQgc29ydGVkUHJvZHVjdHMgPSBbLi4uYWxsX3Byb2R1Y3RzXTtcbiAgICBpZiAoY3JpdGVyaWEgPT09IFwicHJpY2UtaGlnaC1sb3dcIikge1xuICAgICAgc29ydGVkUHJvZHVjdHMuc29ydCgoYSwgYikgPT4gYi5wcmljZSAtIGEucHJpY2UpO1xuICAgIH0gZWxzZSBpZiAoY3JpdGVyaWEgPT09IFwiYS16XCIpIHtcbiAgICAgIHNvcnRlZFByb2R1Y3RzLnNvcnQoKGEsIGIpID0+IGEudGl0bGUubG9jYWxlQ29tcGFyZShiLnRpdGxlKSk7XG4gICAgfVxuICAgIHNldEZpbHRlcmVkUHJvZHVjdHMoc29ydGVkUHJvZHVjdHMpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUZhdm9yaXRlVG9nZ2xlID0gKHByb2R1Y3RJZDogbnVtYmVyKSA9PiB7XG4gICAgZGlzcGF0Y2godG9nZ2xlRmF2b3JpdGUocHJvZHVjdElkKSk7XG4gIH07XG5cbiAgaWYgKGxvYWRpbmcgPT09IFwicGVuZGluZ1wiKSB7XG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcbiAgfVxuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiA8ZGl2PkVycm9yOiB7ZXJyb3J9PC9kaXY+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPE5hdkJhciAvPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVGaWx0ZXIoXCJwcmljZS1oaWdoLWxvd1wiKX0+UHJpY2U6IEhpZ2ggdG8gTG93PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlRmlsdGVyKFwiYS16XCIpfT5BLVo8L2J1dHRvbj5cbiAgICAgICAgey8qIEFkZCBjYXRlZ29yeSBmaWx0ZXIgYnV0dG9ucyBvciBkcm9wZG93bnMgaGVyZSAqL31cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT17eyBcbiAgICAgICAgICBkaXNwbGF5OiBcImdyaWRcIiwgXG4gICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCJyZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSlcIiwgXG4gICAgICAgICAgZ2FwOiBcIjIwcHhcIiwgXG4gICAgICAgICAgbWFyZ2luVG9wOiBcIjIwcHhcIiBcbiAgICAgICAgfX0+XG4gICAgICAgIHtmaWx0ZXJlZFByb2R1Y3RzPy5tYXAoKHByb2R1Y3Q6IFByb2R1Y3QpID0+IChcbiAgICAgICAgICA8U3RvcmVDYXJkIFxuICAgICAgICAgICAga2V5PXtwcm9kdWN0LmlkfSBcbiAgICAgICAgICAgIHByb2R1Y3Q9e3Byb2R1Y3R9IFxuICAgICAgICAgICAgaXNGYXZvcml0ZT17ZmF2b3JpdGVzLmluY2x1ZGVzKHByb2R1Y3QuaWQpfVxuICAgICAgICAgICAgb25GYXZvcml0ZVRvZ2dsZT17KCkgPT4gaGFuZGxlRmF2b3JpdGVUb2dnbGUocHJvZHVjdC5pZCl9IFxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdG9yZVBhZ2U7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiU3RvcmVDYXJkIiwiTmF2QmFyIiwiZmV0Y2hQcm9kdWN0cyIsInRvZ2dsZUZhdm9yaXRlIiwiU3RvcmVQYWdlIiwiZGlzcGF0Y2giLCJhbGxfcHJvZHVjdHMiLCJsb2FkaW5nIiwiZXJyb3IiLCJzdGF0ZSIsInByb2R1Y3RzIiwiZmF2b3JpdGVzIiwiaXRlbXMiLCJmaWx0ZXJlZFByb2R1Y3RzIiwic2V0RmlsdGVyZWRQcm9kdWN0cyIsImhhbmRsZUZpbHRlciIsImNyaXRlcmlhIiwic29ydGVkUHJvZHVjdHMiLCJzb3J0IiwiYSIsImIiLCJwcmljZSIsInRpdGxlIiwibG9jYWxlQ29tcGFyZSIsImhhbmRsZUZhdm9yaXRlVG9nZ2xlIiwicHJvZHVjdElkIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayIsInN0eWxlIiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJnYXAiLCJtYXJnaW5Ub3AiLCJtYXAiLCJwcm9kdWN0IiwiaXNGYXZvcml0ZSIsImluY2x1ZGVzIiwiaWQiLCJvbkZhdm9yaXRlVG9nZ2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});