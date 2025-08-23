/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gallery.ts":
/*!************************!*\
  !*** ./src/gallery.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gallery: () => (/* binding */ gallery)\n/* harmony export */ });\nconst gallery = [\n    {\n        name: \"once\",\n        displays: [\n            {\n                name: \".\",\n                images: [\n                    \"_DSC8600.jpg\",\n                    \"ORG__DSC4761_(2).jpg\",\n                    \"ORG__DSC5112.jpg\",\n                    \"ORG__DSC5650.jpg\"\n                ]\n            },\n            {\n                name: \".\",\n                images: [\n                    \"ORG__DSC6372.jpg\",\n                    \"_DSC3606+2.jpg\",\n                    \"ORG__DSC6845.jpg\",\n                ]\n            },\n            {\n                name: \".\",\n                images: [\n                    \"_DSC8012-2.jpg\",\n                    \"_DSC2336.jpg\",\n                    \"_DSC4784.jpg\",\n                    \"_DSC2660.jpg\"\n                ]\n            },\n            {\n                name: \".\",\n                images: [\n                    \"_DSC6280.jpg\",\n                    \"_DSC6483.jpg\"\n                ]\n            }\n        ]\n    },\n    {\n        name: \"then\",\n        displays: [\n            {\n                name: \"\",\n                images: [\n                    \"_DSC2645.jpg\",\n                ]\n            },\n            {\n                name: \"\",\n                images: [\n                    \"_DSC9651.jpg\",\n                ]\n            },\n            {\n                name: \"\",\n                images: [\n                    \"_DSC3806.jpg\",\n                ]\n            },\n            {\n                name: \"\",\n                images: [\n                    \"_DSC4207.jpg\",\n                ]\n            }\n        ]\n    },\n    {\n        name: \"beating\",\n        displays: [\n            {\n                name: \"\",\n                images: [\n                    \"_DSC1513.jpg\",\n                    \"_DSC1656.jpg\",\n                    \"_DSC1660.jpg\",\n                ]\n            },\n            {\n                name: \"\",\n                images: [\n                    \"_DSC1708-2.jpg\",\n                    \"_DSC1335-2.jpg\",\n                    \"_DSC7995.jpg\",\n                ]\n            },\n            {\n                name: \"\",\n                images: [\n                    \"_DSC5148.jpg\",\n                    \"_DSC3774_(1).jpg\",\n                    \"_DSC5117.jpg\",\n                    \"_DSC4141.jpg\"\n                ]\n            },\n            {\n                name: \"\",\n                images: [\n                    \"_DSC9532.jpg\",\n                    \"_DSC1350.jpg\",\n                ]\n            },\n            {\n                name: \"\",\n                images: [\n                    \"_DSC3662_2.jpg\",\n                    \"_DSC0739.jpg\",\n                    \"_DSC9338_(2).jpg\",\n                    \"_DSC5898.jpg\"\n                ]\n            },\n            {\n                name: \"\",\n                images: [\n                    \"_DSC9598.jpg\",\n                    \"ORG__DSC4458.jpg\",\n                    \"_DSC3690.jpg\",\n                ]\n            },\n        ]\n    },\n    {\n        name: \"setting\",\n        displays: [\n            {\n                name: \"\",\n                images: [\n                    \"_DSC7480.jpg\",\n                    \"_DSC3799.jpg\",\n                ]\n            },\n            {\n                name: \"\",\n                images: [\n                    \"_DSC4470.jpg\",\n                    \"_DSC6310.jpg\",\n                ]\n            },\n            {\n                name: \"\",\n                images: [\n                    \"_DSC2381.jpg\",\n                    \"_DSC3565.jpg\",\n                ]\n            },\n            {\n                name: \"\",\n                images: [\n                    \"_DSC2405.jpg\",\n                ]\n            },\n            {\n                name: \"\",\n                images: [\n                    \"_DSC7399.jpg\",\n                ]\n            }\n        ]\n    }\n];\n\n\n//# sourceURL=webpack://pabwarno/./src/gallery.ts?\n}");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gallery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gallery */ \"./src/gallery.ts\");\n\nclass Page {\n    constructor(collection) {\n        this.name = collection.name;\n    }\n}\nconst germinate = () => {\n    const root = document.getElementById(\"root\");\n    if (root) {\n        _gallery__WEBPACK_IMPORTED_MODULE_0__.gallery.forEach((collection) => {\n            const page = new Page(collection);\n            const section = document.createElement(\"section\");\n            section.id = page.name;\n            section.className = \"collection\";\n            section.innerHTML = `<h2>${page.name}</h2>`;\n            collection.displays.forEach((display) => {\n                const displayDiv = document.createElement(\"div\");\n                displayDiv.className = \"display\";\n                displayDiv.innerHTML = `<h3>${display.name}</h3>`;\n                display.images.forEach((image) => {\n                    const img = document.createElement(\"img\");\n                    img.dataset.src = `media/images/${collection.name}/${display.name}/${image}`;\n                    img.alt = image;\n                    img.loading = \"lazy\";\n                    displayDiv.appendChild(img);\n                });\n                section.appendChild(displayDiv);\n            });\n            root.appendChild(section);\n        });\n        // Lazy load images on scroll using Intersection Observer\n        const lazyImages = Array.from(document.querySelectorAll('img[data-src]'));\n        if ('IntersectionObserver' in window) {\n            const observer = new IntersectionObserver((entries, obs) => {\n                entries.forEach(entry => {\n                    if (entry.isIntersecting) {\n                        const img = entry.target;\n                        img.src = img.dataset.src || \"\";\n                        img.removeAttribute('data-src');\n                        obs.unobserve(img);\n                    }\n                });\n            }, { rootMargin: \"100px\" });\n            lazyImages.forEach(img => observer.observe(img));\n        }\n        else {\n            // Fallback: load all images if IntersectionObserver is not supported\n            lazyImages.forEach(img => {\n                img.src = img.dataset.src || \"\";\n                img.removeAttribute('data-src');\n            });\n        }\n    }\n};\ndocument.addEventListener(\"load\", germinate);\n\n\n//# sourceURL=webpack://pabwarno/./src/index.ts?\n}");

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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;