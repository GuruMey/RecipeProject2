"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/recipes/[recipeId]",{

/***/ "./src/components/RecipeDetails/RecipeDetails.tsx":
/*!********************************************************!*\
  !*** ./src/components/RecipeDetails/RecipeDetails.tsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RecipeDetails; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction RecipeDetails() {\n    _s();\n    const [recipe, setRecipe] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { recipeId  } = router.query;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!recipeId) {\n            return;\n        }\n        async function getRecipe() {\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"\".concat(\"http://localhost:5003\", \"/api/getRecipe/\").concat(recipeId));\n                setRecipe(response.data.data);\n            } catch (error) {\n                console.error(\"Error fetching data:\", error);\n            }\n        }\n        getRecipe();\n    }, [\n        recipeId\n    ]);\n    const { _id , title , description , preparation_time , ingredients , steps  } = recipe;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"recipe-view\",\n        children: _id && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"recipe\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"title-banner\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"recipe-view-title\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/recipe/\".concat(_id),\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"/Users/odmaroo/Projects/RecipeProject/FRONT/src/components/RecipeDetails/RecipeDetails.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 60\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/odmaroo/Projects/RecipeProject/FRONT/src/components/RecipeDetails/RecipeDetails.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"recipe-view-description\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/recipe/\".concat(_id),\n                                children: description\n                            }, void 0, false, {\n                                fileName: \"/Users/odmaroo/Projects/RecipeProject/FRONT/src/components/RecipeDetails/RecipeDetails.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 66\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/odmaroo/Projects/RecipeProject/FRONT/src/components/RecipeDetails/RecipeDetails.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"recipe-view-time\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/recipe/\".concat(_id),\n                                children: [\n                                    \"Preparation time: \",\n                                    preparation_time,\n                                    \" min\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/odmaroo/Projects/RecipeProject/FRONT/src/components/RecipeDetails/RecipeDetails.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 59\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/odmaroo/Projects/RecipeProject/FRONT/src/components/RecipeDetails/RecipeDetails.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"recipe-view-tags\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/recipe/\".concat(_id),\n                                children: recipe.tags.map((tag)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"card-tag\",\n                                        children: [\n                                            tag,\n                                            \" \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/odmaroo/Projects/RecipeProject/FRONT/src/components/RecipeDetails/RecipeDetails.tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 120\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"/Users/odmaroo/Projects/RecipeProject/FRONT/src/components/RecipeDetails/RecipeDetails.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 59\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/odmaroo/Projects/RecipeProject/FRONT/src/components/RecipeDetails/RecipeDetails.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/odmaroo/Projects/RecipeProject/FRONT/src/components/RecipeDetails/RecipeDetails.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"recipe-view-text\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"recipe-view-ingredients\",\n                            children: [\n                                \"Ingredients:\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/recipe/\".concat(_id),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        children: ingredients.map((ingredient)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: ingredient\n                                            }, ingredient, false, {\n                                                fileName: \"/Users/odmaroo/Projects/RecipeProject/FRONT/src/components/RecipeDetails/RecipeDetails.tsx\",\n                                                lineNumber: 51,\n                                                columnNumber: 41\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/odmaroo/Projects/RecipeProject/FRONT/src/components/RecipeDetails/RecipeDetails.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 33\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/odmaroo/Projects/RecipeProject/FRONT/src/components/RecipeDetails/RecipeDetails.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/odmaroo/Projects/RecipeProject/FRONT/src/components/RecipeDetails/RecipeDetails.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"recipe-view-steps\",\n                            children: [\n                                \"Steps to follow:\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/recipe/\".concat(_id),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n                                        children: steps.map((step)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: step\n                                            }, step, false, {\n                                                fileName: \"/Users/odmaroo/Projects/RecipeProject/FRONT/src/components/RecipeDetails/RecipeDetails.tsx\",\n                                                lineNumber: 61,\n                                                columnNumber: 41\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/odmaroo/Projects/RecipeProject/FRONT/src/components/RecipeDetails/RecipeDetails.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 33\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/odmaroo/Projects/RecipeProject/FRONT/src/components/RecipeDetails/RecipeDetails.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/odmaroo/Projects/RecipeProject/FRONT/src/components/RecipeDetails/RecipeDetails.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/odmaroo/Projects/RecipeProject/FRONT/src/components/RecipeDetails/RecipeDetails.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, _id, true, {\n            fileName: \"/Users/odmaroo/Projects/RecipeProject/FRONT/src/components/RecipeDetails/RecipeDetails.tsx\",\n            lineNumber: 37,\n            columnNumber: 17\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/odmaroo/Projects/RecipeProject/FRONT/src/components/RecipeDetails/RecipeDetails.tsx\",\n        lineNumber: 35,\n        columnNumber: 9\n    }, this);\n}\n_s(RecipeDetails, \"6tzlB4pNtpkh4t5Th1P/mJ54r9o=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = RecipeDetails;\nvar _c;\n$RefreshReg$(_c, \"RecipeDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZWNpcGVEZXRhaWxzL1JlY2lwZURldGFpbHMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUN0QjtBQUNIO0FBQ1k7QUFFdkIsU0FBU007O0lBQ3BCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHUCwrQ0FBUUEsQ0FBTSxDQUFDO0lBRTNDLE1BQU1RLFNBQVNKLHNEQUFTQTtJQUN4QixNQUFNLEVBQUVLLFNBQVEsRUFBRSxHQUFHRCxPQUFPRTtJQUU1QlQsZ0RBQVNBLENBQUM7UUFDTixJQUFJLENBQUNRLFVBQVU7WUFDWDtRQUNKO1FBRUEsZUFBZUU7WUFDWCxJQUFJO2dCQUNBLE1BQU1DLFdBQVcsTUFBTVQsaURBQVNVLENBQUMsR0FBeURKLE9BQXRESyx1QkFBb0NFLEVBQUMsbUJBQTBCLE9BQVRQO2dCQUMxRkYsVUFBVUssU0FBU0ssS0FBS0E7WUFDNUIsRUFBRSxPQUFPQyxPQUFPO2dCQUNaQyxRQUFRRCxNQUFNLHdCQUF3QkE7WUFDMUM7UUFDSjtRQUVBUDtJQUVKLEdBQUc7UUFBQ0Y7S0FBUztJQUdiLE1BQU0sRUFBRVcsSUFBRyxFQUFFQyxNQUFLLEVBQUVDLFlBQVcsRUFBRUMsaUJBQWdCLEVBQUVDLFlBQVcsRUFBRUMsTUFBSyxFQUFFLEdBQUduQjtJQUcxRSxxQkFDSSw4REFBQ29CO1FBQUlDLFdBQVU7a0JBQ1ZQLHFCQUNHLDhEQUFDTTtZQUFjQyxXQUFVOzs4QkFDckIsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQW9CLDRFQUFDekIsa0RBQUlBO2dDQUFDMEIsTUFBTSxXQUFlLE9BQUpSOzBDQUFRQzs7Ozs7Ozs7Ozs7c0NBQ2xFLDhEQUFDSzs0QkFBSUMsV0FBVTtzQ0FBMEIsNEVBQUN6QixrREFBSUE7Z0NBQUMwQixNQUFNLFdBQWUsT0FBSlI7MENBQVFFOzs7Ozs7Ozs7OztzQ0FDeEUsOERBQUNJOzRCQUFJQyxXQUFVO3NDQUFtQiw0RUFBQ3pCLGtEQUFJQTtnQ0FBQzBCLE1BQU0sV0FBZSxPQUFKUjs7b0NBQU87b0NBQW1CRztvQ0FBaUI7Ozs7Ozs7Ozs7OztzQ0FDcEcsOERBQUNHOzRCQUFJQyxXQUFVO3NDQUFtQiw0RUFBQ3pCLGtEQUFJQTtnQ0FBQzBCLE1BQU0sV0FBZSxPQUFKUjswQ0FBUWQsT0FBT3VCLEtBQUtDLElBQUksQ0FBQ0Msb0JBQWEsOERBQUNDO3dDQUM1RkwsV0FBVTs7NENBQVlJOzRDQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFFbEMsOERBQUNMO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ0Q7NEJBQUlDLFdBQVU7O2dDQUEwQjs4Q0FFckMsOERBQUN6QixrREFBSUE7b0NBQUMwQixNQUFNLFdBQWUsT0FBSlI7OENBQ25CLDRFQUFDYTtrREFDSVQsWUFBWU0sSUFBSSxDQUFDSSwyQkFDZCw4REFBQ0M7MERBQXFCRDsrQ0FBYkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FLekIsOERBQUNSOzRCQUFJQyxXQUFVOztnQ0FBb0I7OENBRS9CLDhEQUFDekIsa0RBQUlBO29DQUFDMEIsTUFBTSxXQUFlLE9BQUpSOzhDQUNuQiw0RUFBQ2dCO2tEQUNJWCxNQUFNSyxJQUFJLENBQUNPLHFCQUNSLDhEQUFDRjswREFBZUU7K0NBQVBBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1dBeEJ2QmpCOzs7Ozs7Ozs7O0FBcUMxQjtHQXBFd0JmOztRQUdMRCxrREFBU0E7OztLQUhKQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9SZWNpcGVEZXRhaWxzL1JlY2lwZURldGFpbHMudHN4Pzg1MjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVjaXBlRGV0YWlscygpIHtcbiAgICBjb25zdCBbcmVjaXBlLCBzZXRSZWNpcGVdID0gdXNlU3RhdGU8YW55Pih7fSk7XG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIGNvbnN0IHsgcmVjaXBlSWQgfSA9IHJvdXRlci5xdWVyeVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKCFyZWNpcGVJZCkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBhc3luYyBmdW5jdGlvbiBnZXRSZWNpcGUgKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19FTkRQT0lOVF9VUkx9L2FwaS9nZXRSZWNpcGUvJHtyZWNpcGVJZH1gKTtcbiAgICAgICAgICAgICAgICBzZXRSZWNpcGUocmVzcG9uc2UuZGF0YS5kYXRhKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGRhdGE6XCIsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGdldFJlY2lwZSgpXG5cbiAgICB9LCBbcmVjaXBlSWRdKTtcblxuXG4gICAgY29uc3QgeyBfaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJlcGFyYXRpb25fdGltZSwgaW5ncmVkaWVudHMsIHN0ZXBzIH0gPSByZWNpcGU7XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjaXBlLXZpZXdcIj5cbiAgICAgICAgICAgIHtfaWQgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtfaWR9IGNsYXNzTmFtZT1cInJlY2lwZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLWJhbm5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWNpcGUtdmlldy10aXRsZVwiPjxMaW5rIGhyZWY9e2AvcmVjaXBlLyR7X2lkfWB9Pnt0aXRsZX08L0xpbms+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY2lwZS12aWV3LWRlc2NyaXB0aW9uXCI+PExpbmsgaHJlZj17YC9yZWNpcGUvJHtfaWR9YH0+e2Rlc2NyaXB0aW9ufTwvTGluaz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjaXBlLXZpZXctdGltZVwiPjxMaW5rIGhyZWY9e2AvcmVjaXBlLyR7X2lkfWB9PlByZXBhcmF0aW9uIHRpbWU6IHtwcmVwYXJhdGlvbl90aW1lfSBtaW48L0xpbms+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY2lwZS12aWV3LXRhZ3NcIj48TGluayBocmVmPXtgL3JlY2lwZS8ke19pZH1gfT57cmVjaXBlLnRhZ3MubWFwKCh0YWc6IGFueSkgPT4gPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkLXRhZ1wiPnt0YWd9IDwvc3Bhbj4pfTwvTGluaz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjaXBlLXZpZXctdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWNpcGUtdmlldy1pbmdyZWRpZW50c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZ3JlZGllbnRzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcmVjaXBlLyR7X2lkfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW5ncmVkaWVudHMubWFwKChpbmdyZWRpZW50OiBzdHJpbmcpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmdyZWRpZW50fT57aW5ncmVkaWVudH08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY2lwZS12aWV3LXN0ZXBzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RlcHMgdG8gZm9sbG93OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcmVjaXBlLyR7X2lkfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RlcHMubWFwKChzdGVwOiBzdHJpbmcpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtzdGVwfT57c3RlcH08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTGluayIsImF4aW9zIiwidXNlUm91dGVyIiwiUmVjaXBlRGV0YWlscyIsInJlY2lwZSIsInNldFJlY2lwZSIsInJvdXRlciIsInJlY2lwZUlkIiwicXVlcnkiLCJnZXRSZWNpcGUiLCJyZXNwb25zZSIsImdldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19FTkRQT0lOVF9VUkwiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwiX2lkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInByZXBhcmF0aW9uX3RpbWUiLCJpbmdyZWRpZW50cyIsInN0ZXBzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaHJlZiIsInRhZ3MiLCJtYXAiLCJ0YWciLCJzcGFuIiwidWwiLCJpbmdyZWRpZW50IiwibGkiLCJvbCIsInN0ZXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/RecipeDetails/RecipeDetails.tsx\n"));

/***/ })

});