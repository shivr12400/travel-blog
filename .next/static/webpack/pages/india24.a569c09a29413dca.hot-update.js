"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/india24",{

/***/ "./pages/india24.js":
/*!**************************!*\
  !*** ./pages/india24.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Timeline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Timeline */ \"./components/Timeline.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _barrel_optimize_names_Typography_styled_mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Typography,styled!=!@mui/material */ \"__barrel_optimize__?names=Typography,styled!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var _components_BackButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/BackButton */ \"./components/BackButton.js\");\n/* harmony import */ var _components_TripFilter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/TripFilter */ \"./components/TripFilter.js\");\n/* harmony import */ var _components_HeroImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/HeroImage */ \"./components/HeroImage.js\");\n/* harmony import */ var _tripData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tripData */ \"./tripData.js\");\n/* harmony import */ var _travelersData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../travelersData */ \"./travelersData.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst India24 = ()=>{\n    _s();\n    const [selectedCategories, setSelectedCategories] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const tripData = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>_tripData__WEBPACK_IMPORTED_MODULE_8__.data.india24, []);\n    const categories = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>[\n            ...new Set(tripData.map((day)=>day.category))\n        ], [\n        tripData\n    ]);\n    const filteredTripData = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>selectedCategories.length === 0 ? tripData : tripData.filter((day)=>selectedCategories.includes(day.category)), [\n        tripData,\n        selectedCategories\n    ]);\n    const handleCategoryToggle = (category)=>{\n        setSelectedCategories((prev)=>prev.includes(category) ? prev.filter((c)=>c !== category) : [\n                ...prev,\n                category\n            ]);\n    };\n    const Title = (0,_barrel_optimize_names_Typography_styled_mui_material__WEBPACK_IMPORTED_MODULE_10__.styled)(_barrel_optimize_names_Typography_styled_mui_material__WEBPACK_IMPORTED_MODULE_10__.Typography)((param)=>{\n        let { theme } = param;\n        return {\n            marginTop: \"60px\"\n        };\n    });\n    const travelers = [\n        travelers.AJ,\n        travelers.LM,\n        travelers.AkashChoksi,\n        travelers.SR,\n        travelers.SaumyaD\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BackButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/shivrathod/Desktop/Projects/travel-blog/pages/india24.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HeroImage__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                imageUrl: \"/images/india24.jpg\",\n                title: \"Lalji Maharaj's Wedding\",\n                subtitle: \"July 3 - 17, 2024\",\n                travelers: travelers\n            }, void 0, false, {\n                fileName: \"/Users/shivrathod/Desktop/Projects/travel-blog/pages/india24.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TripFilter__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                categories: categories,\n                selectedCategories: selectedCategories,\n                onCategoryToggle: handleCategoryToggle\n            }, void 0, false, {\n                fileName: \"/Users/shivrathod/Desktop/Projects/travel-blog/pages/india24.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Timeline__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                tripData: filteredTripData\n            }, void 0, false, {\n                fileName: \"/Users/shivrathod/Desktop/Projects/travel-blog/pages/india24.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/shivrathod/Desktop/Projects/travel-blog/pages/india24.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shivrathod/Desktop/Projects/travel-blog/pages/india24.js\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_s(India24, \"AzMuCJiwLx5xEYNPwOuIq1heNp0=\");\n_c = India24;\n/* harmony default export */ __webpack_exports__[\"default\"] = (India24);\nvar _c;\n$RefreshReg$(_c, \"India24\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRpYTI0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDUjtBQUNBO0FBQ0E7QUFDUztBQUNEO0FBQ0E7QUFDRjtBQUNiO0FBQ2M7QUFHakQsTUFBTVksVUFBVTs7SUFFZCxNQUFNLENBQUNDLG9CQUFvQkMsc0JBQXNCLEdBQUdYLCtDQUFRQSxDQUFDLEVBQUU7SUFFL0QsTUFBTVksV0FBV1gsOENBQU9BLENBQUMsSUFBTU0sMkNBQUlBLENBQUNNLE9BQU8sRUFBRSxFQUFFO0lBRS9DLE1BQU1DLGFBQWFiLDhDQUFPQSxDQUFDLElBQ3pCO2VBQUksSUFBSWMsSUFBSUgsU0FBU0ksR0FBRyxDQUFDQyxDQUFBQSxNQUFPQSxJQUFJQyxRQUFRO1NBQUcsRUFDL0M7UUFBQ047S0FBUztJQUdaLE1BQU1PLG1CQUFtQmxCLDhDQUFPQSxDQUFDLElBQy9CUyxtQkFBbUJVLE1BQU0sS0FBSyxJQUMxQlIsV0FDQUEsU0FBU1MsTUFBTSxDQUFDSixDQUFBQSxNQUFPUCxtQkFBbUJZLFFBQVEsQ0FBQ0wsSUFBSUMsUUFBUSxJQUNuRTtRQUFDTjtRQUFVRjtLQUFtQjtJQUdoQyxNQUFNYSx1QkFBdUIsQ0FBQ0w7UUFDNUJQLHNCQUFzQmEsQ0FBQUEsT0FDcEJBLEtBQUtGLFFBQVEsQ0FBQ0osWUFDVk0sS0FBS0gsTUFBTSxDQUFDSSxDQUFBQSxJQUFLQSxNQUFNUCxZQUN2QjttQkFBSU07Z0JBQU1OO2FBQVM7SUFFM0I7SUFFQSxNQUFNUSxRQUFRdkIsOEZBQU1BLENBQUNELDhGQUFVQSxFQUFFO1lBQUMsRUFBRXlCLEtBQUssRUFBRTtlQUFNO1lBQy9DQyxXQUFXO1FBQ2I7SUFBQTtJQUNBLE1BQU1DLFlBQVk7UUFDaEJBLFVBQVVDLEVBQUU7UUFBRUQsVUFBVUUsRUFBRTtRQUFFRixVQUFVRyxXQUFXO1FBQUVILFVBQVVJLEVBQUU7UUFBRUosVUFBVUssT0FBTztLQUNuRjtJQUVELHFCQUNFLDhEQUFDcEMsMERBQU1BOzswQkFDTCw4REFBQ00sOERBQVVBOzs7OzswQkFDWCw4REFBQ0UsNkRBQVNBO2dCQUNSNkIsVUFBUztnQkFDVEMsT0FBTTtnQkFDTkMsVUFBUztnQkFDVFIsV0FBV0E7Ozs7OzswQkFFYiw4REFBQ3hCLDhEQUFVQTtnQkFDVFMsWUFBWUE7Z0JBQ1pKLG9CQUFvQkE7Z0JBQ3BCNEIsa0JBQWtCZjs7Ozs7OzBCQUVwQiw4REFBQzFCLDREQUFZQTtnQkFBQ2UsVUFBVU87Ozs7OzswQkFDeEIsOERBQUNwQiwwREFBTUE7Ozs7Ozs7Ozs7O0FBR2I7R0FuRE1VO0tBQUFBO0FBcUROLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGlhMjQuanM/M2MyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJpcFRpbWVsaW5lIGZyb20gXCIuLi9jb21wb25lbnRzL1RpbWVsaW5lXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUeXBvZ3JhcGh5LCBzdHlsZWQgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IEJhY2tCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQmFja0J1dHRvblwiO1xuaW1wb3J0IFRyaXBGaWx0ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvVHJpcEZpbHRlclwiO1xuaW1wb3J0IEhlcm9JbWFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9IZXJvSW1hZ2VcIjtcbmltcG9ydCB7IGRhdGEgfSBmcm9tIFwiLi4vdHJpcERhdGFcIjtcbmltcG9ydCB7IHRyYXZlbGVyc0RhdGEgfSBmcm9tIFwiLi4vdHJhdmVsZXJzRGF0YVwiO1xuXG5cbmNvbnN0IEluZGlhMjQgPSAoKSA9PiB7XG5cbiAgY29uc3QgW3NlbGVjdGVkQ2F0ZWdvcmllcywgc2V0U2VsZWN0ZWRDYXRlZ29yaWVzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCB0cmlwRGF0YSA9IHVzZU1lbW8oKCkgPT4gZGF0YS5pbmRpYTI0LCBbXSk7XG5cbiAgY29uc3QgY2F0ZWdvcmllcyA9IHVzZU1lbW8oKCkgPT5cbiAgICBbLi4ubmV3IFNldCh0cmlwRGF0YS5tYXAoZGF5ID0+IGRheS5jYXRlZ29yeSkpXSxcbiAgICBbdHJpcERhdGFdXG4gICk7XG5cbiAgY29uc3QgZmlsdGVyZWRUcmlwRGF0YSA9IHVzZU1lbW8oKCkgPT5cbiAgICBzZWxlY3RlZENhdGVnb3JpZXMubGVuZ3RoID09PSAwXG4gICAgICA/IHRyaXBEYXRhXG4gICAgICA6IHRyaXBEYXRhLmZpbHRlcihkYXkgPT4gc2VsZWN0ZWRDYXRlZ29yaWVzLmluY2x1ZGVzKGRheS5jYXRlZ29yeSkpLFxuICAgIFt0cmlwRGF0YSwgc2VsZWN0ZWRDYXRlZ29yaWVzXVxuICApO1xuXG4gIGNvbnN0IGhhbmRsZUNhdGVnb3J5VG9nZ2xlID0gKGNhdGVnb3J5KSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRDYXRlZ29yaWVzKHByZXYgPT5cbiAgICAgIHByZXYuaW5jbHVkZXMoY2F0ZWdvcnkpXG4gICAgICAgID8gcHJldi5maWx0ZXIoYyA9PiBjICE9PSBjYXRlZ29yeSlcbiAgICAgICAgOiBbLi4ucHJldiwgY2F0ZWdvcnldXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBUaXRsZSA9IHN0eWxlZChUeXBvZ3JhcGh5KSgoeyB0aGVtZSB9KSA9PiAoe1xuICAgIG1hcmdpblRvcDogXCI2MHB4XCJcbiAgfSkpO1xuICBjb25zdCB0cmF2ZWxlcnMgPSBbXG4gICAgdHJhdmVsZXJzLkFKLCB0cmF2ZWxlcnMuTE0sIHRyYXZlbGVycy5Ba2FzaENob2tzaSwgdHJhdmVsZXJzLlNSLCB0cmF2ZWxlcnMuU2F1bXlhRCxcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8QmFja0J1dHRvbiAvPlxuICAgICAgPEhlcm9JbWFnZVxuICAgICAgICBpbWFnZVVybD1cIi9pbWFnZXMvaW5kaWEyNC5qcGdcIlxuICAgICAgICB0aXRsZT1cIkxhbGppIE1haGFyYWoncyBXZWRkaW5nXCJcbiAgICAgICAgc3VidGl0bGU9XCJKdWx5IDMgLSAxNywgMjAyNFwiXG4gICAgICAgIHRyYXZlbGVycz17dHJhdmVsZXJzfVxuICAgICAgLz5cbiAgICAgIDxUcmlwRmlsdGVyXG4gICAgICAgIGNhdGVnb3JpZXM9e2NhdGVnb3JpZXN9XG4gICAgICAgIHNlbGVjdGVkQ2F0ZWdvcmllcz17c2VsZWN0ZWRDYXRlZ29yaWVzfVxuICAgICAgICBvbkNhdGVnb3J5VG9nZ2xlPXtoYW5kbGVDYXRlZ29yeVRvZ2dsZX1cbiAgICAgIC8+XG4gICAgICA8VHJpcFRpbWVsaW5lIHRyaXBEYXRhPXtmaWx0ZXJlZFRyaXBEYXRhfSAvPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kaWEyNDsiXSwibmFtZXMiOlsiVHJpcFRpbWVsaW5lIiwiTGF5b3V0IiwiRm9vdGVyIiwidXNlU3RhdGUiLCJ1c2VNZW1vIiwiVHlwb2dyYXBoeSIsInN0eWxlZCIsIkJhY2tCdXR0b24iLCJUcmlwRmlsdGVyIiwiSGVyb0ltYWdlIiwiZGF0YSIsInRyYXZlbGVyc0RhdGEiLCJJbmRpYTI0Iiwic2VsZWN0ZWRDYXRlZ29yaWVzIiwic2V0U2VsZWN0ZWRDYXRlZ29yaWVzIiwidHJpcERhdGEiLCJpbmRpYTI0IiwiY2F0ZWdvcmllcyIsIlNldCIsIm1hcCIsImRheSIsImNhdGVnb3J5IiwiZmlsdGVyZWRUcmlwRGF0YSIsImxlbmd0aCIsImZpbHRlciIsImluY2x1ZGVzIiwiaGFuZGxlQ2F0ZWdvcnlUb2dnbGUiLCJwcmV2IiwiYyIsIlRpdGxlIiwidGhlbWUiLCJtYXJnaW5Ub3AiLCJ0cmF2ZWxlcnMiLCJBSiIsIkxNIiwiQWthc2hDaG9rc2kiLCJTUiIsIlNhdW15YUQiLCJpbWFnZVVybCIsInRpdGxlIiwic3VidGl0bGUiLCJvbkNhdGVnb3J5VG9nZ2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/india24.js\n"));

/***/ })

});