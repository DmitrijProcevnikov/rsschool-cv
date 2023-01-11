/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/nouislider/dist/nouislider.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/nouislider/dist/nouislider.css ***!
  \*******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Functional styling;\n * These styles are required for noUiSlider to function.\n * You don't need to change these rules to apply your design.\n */\n.noUi-target,\n.noUi-target * {\n  -webkit-touch-callout: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-user-select: none;\n  -ms-touch-action: none;\n  touch-action: none;\n  -ms-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.noUi-target {\n  position: relative;\n}\n.noUi-base,\n.noUi-connects {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 1;\n}\n/* Wrapper for all connect elements.\n */\n.noUi-connects {\n  overflow: hidden;\n  z-index: 0;\n}\n.noUi-connect,\n.noUi-origin {\n  will-change: transform;\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  -ms-transform-origin: 0 0;\n  -webkit-transform-origin: 0 0;\n  -webkit-transform-style: preserve-3d;\n  transform-origin: 0 0;\n  transform-style: flat;\n}\n/* Offset direction\n */\n.noUi-txt-dir-rtl.noUi-horizontal .noUi-origin {\n  left: 0;\n  right: auto;\n}\n/* Give origins 0 height/width so they don't interfere with clicking the\n * connect elements.\n */\n.noUi-vertical .noUi-origin {\n  top: -100%;\n  width: 0;\n}\n.noUi-horizontal .noUi-origin {\n  height: 0;\n}\n.noUi-handle {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  position: absolute;\n}\n.noUi-touch-area {\n  height: 100%;\n  width: 100%;\n}\n.noUi-state-tap .noUi-connect,\n.noUi-state-tap .noUi-origin {\n  -webkit-transition: transform 0.3s;\n  transition: transform 0.3s;\n}\n.noUi-state-drag * {\n  cursor: inherit !important;\n}\n/* Slider size and handle placement;\n */\n.noUi-horizontal {\n  height: 18px;\n}\n.noUi-horizontal .noUi-handle {\n  width: 34px;\n  height: 28px;\n  right: -17px;\n  top: -6px;\n}\n.noUi-vertical {\n  width: 18px;\n}\n.noUi-vertical .noUi-handle {\n  width: 28px;\n  height: 34px;\n  right: -6px;\n  bottom: -17px;\n}\n.noUi-txt-dir-rtl.noUi-horizontal .noUi-handle {\n  left: -17px;\n  right: auto;\n}\n/* Styling;\n * Giving the connect element a border radius causes issues with using transform: scale\n */\n.noUi-target {\n  background: #FAFAFA;\n  border-radius: 4px;\n  border: 1px solid #D3D3D3;\n  box-shadow: inset 0 1px 1px #F0F0F0, 0 3px 6px -5px #BBB;\n}\n.noUi-connects {\n  border-radius: 3px;\n}\n.noUi-connect {\n  background: #3FB8AF;\n}\n/* Handles and cursors;\n */\n.noUi-draggable {\n  cursor: ew-resize;\n}\n.noUi-vertical .noUi-draggable {\n  cursor: ns-resize;\n}\n.noUi-handle {\n  border: 1px solid #D9D9D9;\n  border-radius: 3px;\n  background: #FFF;\n  cursor: default;\n  box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #EBEBEB, 0 3px 6px -3px #BBB;\n}\n.noUi-active {\n  box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #DDD, 0 3px 6px -3px #BBB;\n}\n/* Handle stripes;\n */\n.noUi-handle:before,\n.noUi-handle:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 14px;\n  width: 1px;\n  background: #E8E7E6;\n  left: 14px;\n  top: 6px;\n}\n.noUi-handle:after {\n  left: 17px;\n}\n.noUi-vertical .noUi-handle:before,\n.noUi-vertical .noUi-handle:after {\n  width: 14px;\n  height: 1px;\n  left: 6px;\n  top: 14px;\n}\n.noUi-vertical .noUi-handle:after {\n  top: 17px;\n}\n/* Disabled state;\n */\n[disabled] .noUi-connect {\n  background: #B8B8B8;\n}\n[disabled].noUi-target,\n[disabled].noUi-handle,\n[disabled] .noUi-handle {\n  cursor: not-allowed;\n}\n/* Base;\n *\n */\n.noUi-pips,\n.noUi-pips * {\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.noUi-pips {\n  position: absolute;\n  color: #999;\n}\n/* Values;\n *\n */\n.noUi-value {\n  position: absolute;\n  white-space: nowrap;\n  text-align: center;\n}\n.noUi-value-sub {\n  color: #ccc;\n  font-size: 10px;\n}\n/* Markings;\n *\n */\n.noUi-marker {\n  position: absolute;\n  background: #CCC;\n}\n.noUi-marker-sub {\n  background: #AAA;\n}\n.noUi-marker-large {\n  background: #AAA;\n}\n/* Horizontal layout;\n *\n */\n.noUi-pips-horizontal {\n  padding: 10px 0;\n  height: 80px;\n  top: 100%;\n  left: 0;\n  width: 100%;\n}\n.noUi-value-horizontal {\n  -webkit-transform: translate(-50%, 50%);\n  transform: translate(-50%, 50%);\n}\n.noUi-rtl .noUi-value-horizontal {\n  -webkit-transform: translate(50%, 50%);\n  transform: translate(50%, 50%);\n}\n.noUi-marker-horizontal.noUi-marker {\n  margin-left: -1px;\n  width: 2px;\n  height: 5px;\n}\n.noUi-marker-horizontal.noUi-marker-sub {\n  height: 10px;\n}\n.noUi-marker-horizontal.noUi-marker-large {\n  height: 15px;\n}\n/* Vertical layout;\n *\n */\n.noUi-pips-vertical {\n  padding: 0 10px;\n  height: 100%;\n  top: 0;\n  left: 100%;\n}\n.noUi-value-vertical {\n  -webkit-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n  padding-left: 25px;\n}\n.noUi-rtl .noUi-value-vertical {\n  -webkit-transform: translate(0, 50%);\n  transform: translate(0, 50%);\n}\n.noUi-marker-vertical.noUi-marker {\n  width: 5px;\n  height: 2px;\n  margin-top: -1px;\n}\n.noUi-marker-vertical.noUi-marker-sub {\n  width: 10px;\n}\n.noUi-marker-vertical.noUi-marker-large {\n  width: 15px;\n}\n.noUi-tooltip {\n  display: block;\n  position: absolute;\n  border: 1px solid #D9D9D9;\n  border-radius: 3px;\n  background: #fff;\n  color: #000;\n  padding: 5px;\n  text-align: center;\n  white-space: nowrap;\n}\n.noUi-horizontal .noUi-tooltip {\n  -webkit-transform: translate(-50%, 0);\n  transform: translate(-50%, 0);\n  left: 50%;\n  bottom: 120%;\n}\n.noUi-vertical .noUi-tooltip {\n  -webkit-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n  top: 50%;\n  right: 120%;\n}\n.noUi-horizontal .noUi-origin > .noUi-tooltip {\n  -webkit-transform: translate(50%, 0);\n  transform: translate(50%, 0);\n  left: auto;\n  bottom: 10px;\n}\n.noUi-vertical .noUi-origin > .noUi-tooltip {\n  -webkit-transform: translate(0, -18px);\n  transform: translate(0, -18px);\n  top: auto;\n  right: 28px;\n}\n", "",{"version":3,"sources":["webpack://./node_modules/nouislider/dist/nouislider.css"],"names":[],"mappings":"AAAA;;;EAGE;AACF;;EAEE,2BAA2B;EAC3B,6CAA6C;EAC7C,yBAAyB;EACzB,sBAAsB;EACtB,kBAAkB;EAClB,qBAAqB;EACrB,sBAAsB;EACtB,iBAAiB;EACjB,2BAA2B;EAC3B,sBAAsB;AACxB;AACA;EACE,kBAAkB;AACpB;AACA;;EAEE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,UAAU;AACZ;AACA;EACE;AACF;EACE,gBAAgB;EAChB,UAAU;AACZ;AACA;;EAEE,sBAAsB;EACtB,kBAAkB;EAClB,UAAU;EACV,MAAM;EACN,QAAQ;EACR,YAAY;EACZ,WAAW;EACX,yBAAyB;EACzB,6BAA6B;EAC7B,oCAAoC;EACpC,qBAAqB;EACrB,qBAAqB;AACvB;AACA;EACE;AACF;EACE,OAAO;EACP,WAAW;AACb;AACA;;EAEE;AACF;EACE,UAAU;EACV,QAAQ;AACV;AACA;EACE,SAAS;AACX;AACA;EACE,mCAAmC;EACnC,2BAA2B;EAC3B,kBAAkB;AACpB;AACA;EACE,YAAY;EACZ,WAAW;AACb;AACA;;EAEE,kCAAkC;EAClC,0BAA0B;AAC5B;AACA;EACE,0BAA0B;AAC5B;AACA;EACE;AACF;EACE,YAAY;AACd;AACA;EACE,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,SAAS;AACX;AACA;EACE,WAAW;AACb;AACA;EACE,WAAW;EACX,YAAY;EACZ,WAAW;EACX,aAAa;AACf;AACA;EACE,WAAW;EACX,WAAW;AACb;AACA;;EAEE;AACF;EACE,mBAAmB;EACnB,kBAAkB;EAClB,yBAAyB;EACzB,wDAAwD;AAC1D;AACA;EACE,kBAAkB;AACpB;AACA;EACE,mBAAmB;AACrB;AACA;EACE;AACF;EACE,iBAAiB;AACnB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,4EAA4E;AAC9E;AACA;EACE,yEAAyE;AAC3E;AACA;EACE;AACF;;EAEE,WAAW;EACX,cAAc;EACd,kBAAkB;EAClB,YAAY;EACZ,UAAU;EACV,mBAAmB;EACnB,UAAU;EACV,QAAQ;AACV;AACA;EACE,UAAU;AACZ;AACA;;EAEE,WAAW;EACX,WAAW;EACX,SAAS;EACT,SAAS;AACX;AACA;EACE,SAAS;AACX;AACA;EACE;AACF;EACE,mBAAmB;AACrB;AACA;;;EAGE,mBAAmB;AACrB;AACA;;EAEE;AACF;;EAEE,2BAA2B;EAC3B,sBAAsB;AACxB;AACA;EACE,kBAAkB;EAClB,WAAW;AACb;AACA;;EAEE;AACF;EACE,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,eAAe;AACjB;AACA;;EAEE;AACF;EACE,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;;EAEE;AACF;EACE,eAAe;EACf,YAAY;EACZ,SAAS;EACT,OAAO;EACP,WAAW;AACb;AACA;EACE,uCAAuC;EACvC,+BAA+B;AACjC;AACA;EACE,sCAAsC;EACtC,8BAA8B;AAChC;AACA;EACE,iBAAiB;EACjB,UAAU;EACV,WAAW;AACb;AACA;EACE,YAAY;AACd;AACA;EACE,YAAY;AACd;AACA;;EAEE;AACF;EACE,eAAe;EACf,YAAY;EACZ,MAAM;EACN,UAAU;AACZ;AACA;EACE,qCAAqC;EACrC,6BAA6B;EAC7B,kBAAkB;AACpB;AACA;EACE,oCAAoC;EACpC,4BAA4B;AAC9B;AACA;EACE,UAAU;EACV,WAAW;EACX,gBAAgB;AAClB;AACA;EACE,WAAW;AACb;AACA;EACE,WAAW;AACb;AACA;EACE,cAAc;EACd,kBAAkB;EAClB,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;EAChB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,qCAAqC;EACrC,6BAA6B;EAC7B,SAAS;EACT,YAAY;AACd;AACA;EACE,qCAAqC;EACrC,6BAA6B;EAC7B,QAAQ;EACR,WAAW;AACb;AACA;EACE,oCAAoC;EACpC,4BAA4B;EAC5B,UAAU;EACV,YAAY;AACd;AACA;EACE,sCAAsC;EACtC,8BAA8B;EAC9B,SAAS;EACT,WAAW;AACb","sourcesContent":["/* Functional styling;\n * These styles are required for noUiSlider to function.\n * You don't need to change these rules to apply your design.\n */\n.noUi-target,\n.noUi-target * {\n  -webkit-touch-callout: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-user-select: none;\n  -ms-touch-action: none;\n  touch-action: none;\n  -ms-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.noUi-target {\n  position: relative;\n}\n.noUi-base,\n.noUi-connects {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 1;\n}\n/* Wrapper for all connect elements.\n */\n.noUi-connects {\n  overflow: hidden;\n  z-index: 0;\n}\n.noUi-connect,\n.noUi-origin {\n  will-change: transform;\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  -ms-transform-origin: 0 0;\n  -webkit-transform-origin: 0 0;\n  -webkit-transform-style: preserve-3d;\n  transform-origin: 0 0;\n  transform-style: flat;\n}\n/* Offset direction\n */\n.noUi-txt-dir-rtl.noUi-horizontal .noUi-origin {\n  left: 0;\n  right: auto;\n}\n/* Give origins 0 height/width so they don't interfere with clicking the\n * connect elements.\n */\n.noUi-vertical .noUi-origin {\n  top: -100%;\n  width: 0;\n}\n.noUi-horizontal .noUi-origin {\n  height: 0;\n}\n.noUi-handle {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  position: absolute;\n}\n.noUi-touch-area {\n  height: 100%;\n  width: 100%;\n}\n.noUi-state-tap .noUi-connect,\n.noUi-state-tap .noUi-origin {\n  -webkit-transition: transform 0.3s;\n  transition: transform 0.3s;\n}\n.noUi-state-drag * {\n  cursor: inherit !important;\n}\n/* Slider size and handle placement;\n */\n.noUi-horizontal {\n  height: 18px;\n}\n.noUi-horizontal .noUi-handle {\n  width: 34px;\n  height: 28px;\n  right: -17px;\n  top: -6px;\n}\n.noUi-vertical {\n  width: 18px;\n}\n.noUi-vertical .noUi-handle {\n  width: 28px;\n  height: 34px;\n  right: -6px;\n  bottom: -17px;\n}\n.noUi-txt-dir-rtl.noUi-horizontal .noUi-handle {\n  left: -17px;\n  right: auto;\n}\n/* Styling;\n * Giving the connect element a border radius causes issues with using transform: scale\n */\n.noUi-target {\n  background: #FAFAFA;\n  border-radius: 4px;\n  border: 1px solid #D3D3D3;\n  box-shadow: inset 0 1px 1px #F0F0F0, 0 3px 6px -5px #BBB;\n}\n.noUi-connects {\n  border-radius: 3px;\n}\n.noUi-connect {\n  background: #3FB8AF;\n}\n/* Handles and cursors;\n */\n.noUi-draggable {\n  cursor: ew-resize;\n}\n.noUi-vertical .noUi-draggable {\n  cursor: ns-resize;\n}\n.noUi-handle {\n  border: 1px solid #D9D9D9;\n  border-radius: 3px;\n  background: #FFF;\n  cursor: default;\n  box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #EBEBEB, 0 3px 6px -3px #BBB;\n}\n.noUi-active {\n  box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #DDD, 0 3px 6px -3px #BBB;\n}\n/* Handle stripes;\n */\n.noUi-handle:before,\n.noUi-handle:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 14px;\n  width: 1px;\n  background: #E8E7E6;\n  left: 14px;\n  top: 6px;\n}\n.noUi-handle:after {\n  left: 17px;\n}\n.noUi-vertical .noUi-handle:before,\n.noUi-vertical .noUi-handle:after {\n  width: 14px;\n  height: 1px;\n  left: 6px;\n  top: 14px;\n}\n.noUi-vertical .noUi-handle:after {\n  top: 17px;\n}\n/* Disabled state;\n */\n[disabled] .noUi-connect {\n  background: #B8B8B8;\n}\n[disabled].noUi-target,\n[disabled].noUi-handle,\n[disabled] .noUi-handle {\n  cursor: not-allowed;\n}\n/* Base;\n *\n */\n.noUi-pips,\n.noUi-pips * {\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.noUi-pips {\n  position: absolute;\n  color: #999;\n}\n/* Values;\n *\n */\n.noUi-value {\n  position: absolute;\n  white-space: nowrap;\n  text-align: center;\n}\n.noUi-value-sub {\n  color: #ccc;\n  font-size: 10px;\n}\n/* Markings;\n *\n */\n.noUi-marker {\n  position: absolute;\n  background: #CCC;\n}\n.noUi-marker-sub {\n  background: #AAA;\n}\n.noUi-marker-large {\n  background: #AAA;\n}\n/* Horizontal layout;\n *\n */\n.noUi-pips-horizontal {\n  padding: 10px 0;\n  height: 80px;\n  top: 100%;\n  left: 0;\n  width: 100%;\n}\n.noUi-value-horizontal {\n  -webkit-transform: translate(-50%, 50%);\n  transform: translate(-50%, 50%);\n}\n.noUi-rtl .noUi-value-horizontal {\n  -webkit-transform: translate(50%, 50%);\n  transform: translate(50%, 50%);\n}\n.noUi-marker-horizontal.noUi-marker {\n  margin-left: -1px;\n  width: 2px;\n  height: 5px;\n}\n.noUi-marker-horizontal.noUi-marker-sub {\n  height: 10px;\n}\n.noUi-marker-horizontal.noUi-marker-large {\n  height: 15px;\n}\n/* Vertical layout;\n *\n */\n.noUi-pips-vertical {\n  padding: 0 10px;\n  height: 100%;\n  top: 0;\n  left: 100%;\n}\n.noUi-value-vertical {\n  -webkit-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n  padding-left: 25px;\n}\n.noUi-rtl .noUi-value-vertical {\n  -webkit-transform: translate(0, 50%);\n  transform: translate(0, 50%);\n}\n.noUi-marker-vertical.noUi-marker {\n  width: 5px;\n  height: 2px;\n  margin-top: -1px;\n}\n.noUi-marker-vertical.noUi-marker-sub {\n  width: 10px;\n}\n.noUi-marker-vertical.noUi-marker-large {\n  width: 15px;\n}\n.noUi-tooltip {\n  display: block;\n  position: absolute;\n  border: 1px solid #D9D9D9;\n  border-radius: 3px;\n  background: #fff;\n  color: #000;\n  padding: 5px;\n  text-align: center;\n  white-space: nowrap;\n}\n.noUi-horizontal .noUi-tooltip {\n  -webkit-transform: translate(-50%, 0);\n  transform: translate(-50%, 0);\n  left: 50%;\n  bottom: 120%;\n}\n.noUi-vertical .noUi-tooltip {\n  -webkit-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n  top: 50%;\n  right: 120%;\n}\n.noUi-horizontal .noUi-origin > .noUi-tooltip {\n  -webkit-transform: translate(50%, 0);\n  transform: translate(50%, 0);\n  left: auto;\n  bottom: 10px;\n}\n.noUi-vertical .noUi-origin > .noUi-tooltip {\n  -webkit-transform: translate(0, -18px);\n  transform: translate(0, -18px);\n  top: auto;\n  right: 28px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/basket/basket.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/basket/basket.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".wrapperProduct {\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  width: 95%;\n  flex-wrap: wrap;\n}\n\n.home {\n  margin-left: 20px;\n  cursor: pointer;\n}\n\n.productNameH {\n  font-size: 20px;\n}\n\n.productFoto {\n  display: flex;\n}\n\n.productFotoMin {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n}\n\n.productFotoItem {\n  width: 200px;\n  height: 200px;\n  background-size: cover;\n  border-radius: 10px;\n  margin: 10px auto;\n  cursor: pointer;\n}\n\n.basket_circle {\n  cursor: pointer;\n}\n\n.productFotoMax {\n  width: 60vw;\n  border-radius: 20px;\n  background-size: auto;\n  background-repeat: no-repeat;\n  margin-left: 20px;\n}/*# sourceMappingURL=basket.css.map */", "",{"version":3,"sources":["webpack://./src/basket/basket.scss","webpack://./src/basket/basket.css"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,sBAAA;EACA,YAAA;EACA,UAAA;EACA,eAAA;ACCJ;;ADCA;EACI,iBAAA;EACA,eAAA;ACEJ;;ADKA;EACI,eAAA;ACFJ;;ADIA;EACI,aAAA;ACDJ;;ADGA;EACI,aAAA;EACA,eAAA;EACA,sBAAA;ACAJ;;ADGA;EACI,YAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,iBAAA;EACA,eAAA;ACAJ;;ADGA;EACI,eAAA;ACAJ;;ADGA;EACI,WAAA;EACA,mBAAA;EACA,qBAAA;EACA,4BAAA;EACA,iBAAA;ACAJ,CAAA,qCAAA","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/products_field/product_selection/product_selection.css":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/products_field/product_selection/product_selection.css ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".none {\n  display: none;\n}\n\n.noProducts {\n  width: 50vw;\n  font-size: 5vw;\n  margin: 50px auto 0 30px;\n}/*# sourceMappingURL=product_selection.css.map */", "",{"version":3,"sources":["webpack://./src/products_field/product_selection/product_selection.scss","webpack://./src/products_field/product_selection/product_selection.css"],"names":[],"mappings":"AAAA;EACI,aAAA;ACCJ;;ADCA;EACI,WAAA;EACA,cAAA;EACA,wBAAA;ACEJ,CAAA,gDAAA","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/products_field/products_field.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/products_field/products_field.css ***!
  \*************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".products_field {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n}\n\n.product_item {\n  display: block;\n  width: 300px;\n  height: 300px;\n  border: solid 2px blueviolet;\n  border-radius: 10px;\n  background-size: cover;\n  margin: 5px;\n}\n\n.title {\n  color: white;\n  text-align: center;\n  background: #000;\n  opacity: 0.9;\n  border-bottom: solid 2px black;\n}\n\n.info {\n  width: 100%;\n  height: 150px;\n  padding-top: 10px;\n  margin-top: 0;\n  text-shadow: 2px 5px 7px black;\n  color: white;\n  font-size: 20px;\n  line-height: 12px;\n  background: rgba(0, 0, 0, 0.4);\n  -webkit-backdrop-filter: blur(3px);\n          backdrop-filter: blur(3px);\n}\n\n.btn_container {\n  margin-top: 80px;\n  display: flex;\n  justify-content: space-around;\n}\n\n.btn {\n  border: solid 2px blueviolet;\n  border-radius: 10px;\n}/*# sourceMappingURL=products_field.css.map */", "",{"version":3,"sources":["webpack://./src/products_field/products_field.scss","webpack://./src/products_field/products_field.css"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,eAAA;EACA,6BAAA;ACCJ;;ADEA;EACI,cAAA;EACA,YAAA;EACA,aAAA;EACA,4BAAA;EACA,mBAAA;EACA,sBAAA;EACA,WAAA;ACCJ;;ADCA;EACI,YAAA;EACA,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,8BAAA;ACEJ;;ADAA;EACI,WAAA;EACA,aAAA;EACA,iBAAA;EACA,aAAA;EACA,8BAAA;EACA,YAAA;EACA,eAAA;EACA,iBAAA;EACA,8BAAA;EACA,kCAAA;UAAA,0BAAA;ACGJ;;ADDA;EACI,gBAAA;EACA,aAAA;EACA,6BAAA;ACIJ;;ADFA;EACI,4BAAA;EACA,mBAAA;ACKJ,CAAA,6CAAA","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/select_box/range-slider/range-slider.css":
/*!********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/select_box/range-slider/range-slider.css ***!
  \********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Chrome, Safari, Edge, Opera */\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n/* Firefox */\ninput[type=number] {\n  -moz-appearance: textfield;\n}\n\n.rangeSlider {\n  margin: 5px 0 0 17px;\n  width: calc(100% - 35px);\n}\n\n.noUi-connect {\n  background: rgb(92, 160, 249);\n}\n\n.noUi-target {\n  background: rgb(241, 254, 219);\n}\n\n.noUi-handle {\n  border: solid 3px black;\n}\n\n.inputs {\n  display: flex;\n  justify-content: space-around;\n  margin: 20px 0 10px 0;\n}/*# sourceMappingURL=range-slider.css.map */", "",{"version":3,"sources":["webpack://./src/select_box/range-slider/range-slider.scss","webpack://./src/select_box/range-slider/range-slider.css"],"names":[],"mappings":"AAAA,gCAAA;AACA;;EAEE,wBAAA;EACA,SAAA;ACCF;;ADEA,YAAA;AACA;EACE,0BAAA;ACCF;;ADEA;EACI,oBAAA;EACA,wBAAA;ACCJ;;ADEA;EACI,6BAAA;ACCJ;;ADEA;EACI,8BAAA;ACCJ;;ADEA;EACI,uBAAA;ACCJ;;ADEA;EACI,aAAA;EACA,6BAAA;EACA,qBAAA;ACCJ,CAAA,2CAAA","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/select_box/select_box.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/select_box/select_box.css ***!
  \*****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".select_btn {\n  margin: 15px 0;\n  width: 350px;\n  display: flex;\n  justify-content: space-around;\n}\n\n.inputBox {\n  text-align: center;\n  margin: 10px;\n}\n\n.divInput {\n  max-height: 280px;\n  overflow: auto;\n  background-color: rgb(241, 235, 246);\n  border-radius: 10px;\n}\n\n.pInput {\n  display: flex;\n  justify-content: space-between;\n}\n.pInput input {\n  margin: 0 20px 0 20px;\n}\n.pInput .score {\n  margin-right: 20px;\n}/*# sourceMappingURL=select_box.css.map */", "",{"version":3,"sources":["webpack://./src/select_box/select_box.scss","webpack://./src/select_box/select_box.css"],"names":[],"mappings":"AACA;EACI,cAAA;EACA,YAAA;EACA,aAAA;EACA,6BAAA;ACAJ;;ADIA;EACI,kBAAA;EACA,YAAA;ACDJ;;ADGA;EACI,iBAAA;EACA,cAAA;EACA,oCAAA;EACA,mBAAA;ACAJ;;ADEA;EACI,aAAA;EACA,8BAAA;ACCJ;ADAI;EACI,qBAAA;ACER;ADAI;EACI,kBAAA;ACER,CAAA,yCAAA","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n.total {\n  height: 80px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: black;\n  color: rgb(255, 187, 0);\n}\n.total .online_store {\n  height: 60px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: rgb(255, 187, 0);\n  cursor: pointer;\n}\n.total .online_store .online_store_page {\n  height: 60px;\n  font-size: 50px;\n  margin-left: 10px;\n}\n.total .total_price {\n  color: white;\n}\n\n.basket {\n  margin-right: 10px;\n  height: 50px;\n}\n\n.cirсle {\n  height: 20px;\n  width: 20px;\n  background-color: black;\n  font-size: 20px;\n}\n\n.basket_circle {\n  display: flex;\n  align-items: center;\n}\n\n.wrapper {\n  display: flex;\n}\n\n.select_box {\n  display: flex;\n  flex-direction: column;\n  margin: 10px;\n  width: 380px;\n  max-height: 937px;\n  flex-shrink: 0;\n  border: solid 1px rgb(240, 177, 241);\n  border-radius: 10px;\n}/*# sourceMappingURL=style.css.map */", "",{"version":3,"sources":["webpack://./src/style.css","webpack://./src/style.scss"],"names":[],"mappings":"AAAA,gBAAgB;ACAhB;EACI,YAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,uBAAA;EACA,uBAAA;ADEJ;ACAI;EACI,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,uBAAA;EACA,eAAA;ADER;ACAQ;EACI,YAAA;EACA,eAAA;EACA,iBAAA;ADEZ;ACEI;EACI,YAAA;ADAR;;ACQA;EACI,kBAAA;EACA,YAAA;ADLJ;;ACQA;EACI,YAAA;EACA,WAAA;EACA,uBAAA;EACA,eAAA;ADLJ;;ACQA;EACI,aAAA;EACA,mBAAA;ADLJ;;ACQA;EACI,aAAA;ADLJ;;ACSA;EACI,aAAA;EACA,sBAAA;EACA,YAAA;EACA,YAAA;EACA,iBAAA;EACA,cAAA;EACA,oCAAA;EACA,mBAAA;ADNJ,CAAA,oCAAA","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/nouislider/dist/nouislider.js":
/*!****************************************************!*\
  !*** ./node_modules/nouislider/dist/nouislider.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports) {

(function (global, factory) {
     true ? factory(exports) :
    0;
})(this, (function (exports) { 'use strict';

    exports.PipsMode = void 0;
    (function (PipsMode) {
        PipsMode["Range"] = "range";
        PipsMode["Steps"] = "steps";
        PipsMode["Positions"] = "positions";
        PipsMode["Count"] = "count";
        PipsMode["Values"] = "values";
    })(exports.PipsMode || (exports.PipsMode = {}));
    exports.PipsType = void 0;
    (function (PipsType) {
        PipsType[PipsType["None"] = -1] = "None";
        PipsType[PipsType["NoValue"] = 0] = "NoValue";
        PipsType[PipsType["LargeValue"] = 1] = "LargeValue";
        PipsType[PipsType["SmallValue"] = 2] = "SmallValue";
    })(exports.PipsType || (exports.PipsType = {}));
    //region Helper Methods
    function isValidFormatter(entry) {
        return isValidPartialFormatter(entry) && typeof entry.from === "function";
    }
    function isValidPartialFormatter(entry) {
        // partial formatters only need a to function and not a from function
        return typeof entry === "object" && typeof entry.to === "function";
    }
    function removeElement(el) {
        el.parentElement.removeChild(el);
    }
    function isSet(value) {
        return value !== null && value !== undefined;
    }
    // Bindable version
    function preventDefault(e) {
        e.preventDefault();
    }
    // Removes duplicates from an array.
    function unique(array) {
        return array.filter(function (a) {
            return !this[a] ? (this[a] = true) : false;
        }, {});
    }
    // Round a value to the closest 'to'.
    function closest(value, to) {
        return Math.round(value / to) * to;
    }
    // Current position of an element relative to the document.
    function offset(elem, orientation) {
        var rect = elem.getBoundingClientRect();
        var doc = elem.ownerDocument;
        var docElem = doc.documentElement;
        var pageOffset = getPageOffset(doc);
        // getBoundingClientRect contains left scroll in Chrome on Android.
        // I haven't found a feature detection that proves this. Worst case
        // scenario on mis-match: the 'tap' feature on horizontal sliders breaks.
        if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) {
            pageOffset.x = 0;
        }
        return orientation ? rect.top + pageOffset.y - docElem.clientTop : rect.left + pageOffset.x - docElem.clientLeft;
    }
    // Checks whether a value is numerical.
    function isNumeric(a) {
        return typeof a === "number" && !isNaN(a) && isFinite(a);
    }
    // Sets a class and removes it after [duration] ms.
    function addClassFor(element, className, duration) {
        if (duration > 0) {
            addClass(element, className);
            setTimeout(function () {
                removeClass(element, className);
            }, duration);
        }
    }
    // Limits a value to 0 - 100
    function limit(a) {
        return Math.max(Math.min(a, 100), 0);
    }
    // Wraps a variable as an array, if it isn't one yet.
    // Note that an input array is returned by reference!
    function asArray(a) {
        return Array.isArray(a) ? a : [a];
    }
    // Counts decimals
    function countDecimals(numStr) {
        numStr = String(numStr);
        var pieces = numStr.split(".");
        return pieces.length > 1 ? pieces[1].length : 0;
    }
    // http://youmightnotneedjquery.com/#add_class
    function addClass(el, className) {
        if (el.classList && !/\s/.test(className)) {
            el.classList.add(className);
        }
        else {
            el.className += " " + className;
        }
    }
    // http://youmightnotneedjquery.com/#remove_class
    function removeClass(el, className) {
        if (el.classList && !/\s/.test(className)) {
            el.classList.remove(className);
        }
        else {
            el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
        }
    }
    // https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/
    function hasClass(el, className) {
        return el.classList ? el.classList.contains(className) : new RegExp("\\b" + className + "\\b").test(el.className);
    }
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#Notes
    function getPageOffset(doc) {
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = (doc.compatMode || "") === "CSS1Compat";
        var x = supportPageOffset
            ? window.pageXOffset
            : isCSS1Compat
                ? doc.documentElement.scrollLeft
                : doc.body.scrollLeft;
        var y = supportPageOffset
            ? window.pageYOffset
            : isCSS1Compat
                ? doc.documentElement.scrollTop
                : doc.body.scrollTop;
        return {
            x: x,
            y: y,
        };
    }
    // we provide a function to compute constants instead
    // of accessing window.* as soon as the module needs it
    // so that we do not compute anything if not needed
    function getActions() {
        // Determine the events to bind. IE11 implements pointerEvents without
        // a prefix, which breaks compatibility with the IE10 implementation.
        return window.navigator.pointerEnabled
            ? {
                start: "pointerdown",
                move: "pointermove",
                end: "pointerup",
            }
            : window.navigator.msPointerEnabled
                ? {
                    start: "MSPointerDown",
                    move: "MSPointerMove",
                    end: "MSPointerUp",
                }
                : {
                    start: "mousedown touchstart",
                    move: "mousemove touchmove",
                    end: "mouseup touchend",
                };
    }
    // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
    // Issue #785
    function getSupportsPassive() {
        var supportsPassive = false;
        /* eslint-disable */
        try {
            var opts = Object.defineProperty({}, "passive", {
                get: function () {
                    supportsPassive = true;
                },
            });
            // @ts-ignore
            window.addEventListener("test", null, opts);
        }
        catch (e) { }
        /* eslint-enable */
        return supportsPassive;
    }
    function getSupportsTouchActionNone() {
        return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
    }
    //endregion
    //region Range Calculation
    // Determine the size of a sub-range in relation to a full range.
    function subRangeRatio(pa, pb) {
        return 100 / (pb - pa);
    }
    // (percentage) How many percent is this value of this range?
    function fromPercentage(range, value, startRange) {
        return (value * 100) / (range[startRange + 1] - range[startRange]);
    }
    // (percentage) Where is this value on this range?
    function toPercentage(range, value) {
        return fromPercentage(range, range[0] < 0 ? value + Math.abs(range[0]) : value - range[0], 0);
    }
    // (value) How much is this percentage on this range?
    function isPercentage(range, value) {
        return (value * (range[1] - range[0])) / 100 + range[0];
    }
    function getJ(value, arr) {
        var j = 1;
        while (value >= arr[j]) {
            j += 1;
        }
        return j;
    }
    // (percentage) Input a value, find where, on a scale of 0-100, it applies.
    function toStepping(xVal, xPct, value) {
        if (value >= xVal.slice(-1)[0]) {
            return 100;
        }
        var j = getJ(value, xVal);
        var va = xVal[j - 1];
        var vb = xVal[j];
        var pa = xPct[j - 1];
        var pb = xPct[j];
        return pa + toPercentage([va, vb], value) / subRangeRatio(pa, pb);
    }
    // (value) Input a percentage, find where it is on the specified range.
    function fromStepping(xVal, xPct, value) {
        // There is no range group that fits 100
        if (value >= 100) {
            return xVal.slice(-1)[0];
        }
        var j = getJ(value, xPct);
        var va = xVal[j - 1];
        var vb = xVal[j];
        var pa = xPct[j - 1];
        var pb = xPct[j];
        return isPercentage([va, vb], (value - pa) * subRangeRatio(pa, pb));
    }
    // (percentage) Get the step that applies at a certain value.
    function getStep(xPct, xSteps, snap, value) {
        if (value === 100) {
            return value;
        }
        var j = getJ(value, xPct);
        var a = xPct[j - 1];
        var b = xPct[j];
        // If 'snap' is set, steps are used as fixed points on the slider.
        if (snap) {
            // Find the closest position, a or b.
            if (value - a > (b - a) / 2) {
                return b;
            }
            return a;
        }
        if (!xSteps[j - 1]) {
            return value;
        }
        return xPct[j - 1] + closest(value - xPct[j - 1], xSteps[j - 1]);
    }
    //endregion
    //region Spectrum
    var Spectrum = /** @class */ (function () {
        function Spectrum(entry, snap, singleStep) {
            this.xPct = [];
            this.xVal = [];
            this.xSteps = [];
            this.xNumSteps = [];
            this.xHighestCompleteStep = [];
            this.xSteps = [singleStep || false];
            this.xNumSteps = [false];
            this.snap = snap;
            var index;
            var ordered = [];
            // Map the object keys to an array.
            Object.keys(entry).forEach(function (index) {
                ordered.push([asArray(entry[index]), index]);
            });
            // Sort all entries by value (numeric sort).
            ordered.sort(function (a, b) {
                return a[0][0] - b[0][0];
            });
            // Convert all entries to subranges.
            for (index = 0; index < ordered.length; index++) {
                this.handleEntryPoint(ordered[index][1], ordered[index][0]);
            }
            // Store the actual step values.
            // xSteps is sorted in the same order as xPct and xVal.
            this.xNumSteps = this.xSteps.slice(0);
            // Convert all numeric steps to the percentage of the subrange they represent.
            for (index = 0; index < this.xNumSteps.length; index++) {
                this.handleStepPoint(index, this.xNumSteps[index]);
            }
        }
        Spectrum.prototype.getDistance = function (value) {
            var distances = [];
            for (var index = 0; index < this.xNumSteps.length - 1; index++) {
                distances[index] = fromPercentage(this.xVal, value, index);
            }
            return distances;
        };
        // Calculate the percentual distance over the whole scale of ranges.
        // direction: 0 = backwards / 1 = forwards
        Spectrum.prototype.getAbsoluteDistance = function (value, distances, direction) {
            var xPct_index = 0;
            // Calculate range where to start calculation
            if (value < this.xPct[this.xPct.length - 1]) {
                while (value > this.xPct[xPct_index + 1]) {
                    xPct_index++;
                }
            }
            else if (value === this.xPct[this.xPct.length - 1]) {
                xPct_index = this.xPct.length - 2;
            }
            // If looking backwards and the value is exactly at a range separator then look one range further
            if (!direction && value === this.xPct[xPct_index + 1]) {
                xPct_index++;
            }
            if (distances === null) {
                distances = [];
            }
            var start_factor;
            var rest_factor = 1;
            var rest_rel_distance = distances[xPct_index];
            var range_pct = 0;
            var rel_range_distance = 0;
            var abs_distance_counter = 0;
            var range_counter = 0;
            // Calculate what part of the start range the value is
            if (direction) {
                start_factor = (value - this.xPct[xPct_index]) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
            }
            else {
                start_factor = (this.xPct[xPct_index + 1] - value) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
            }
            // Do until the complete distance across ranges is calculated
            while (rest_rel_distance > 0) {
                // Calculate the percentage of total range
                range_pct = this.xPct[xPct_index + 1 + range_counter] - this.xPct[xPct_index + range_counter];
                // Detect if the margin, padding or limit is larger then the current range and calculate
                if (distances[xPct_index + range_counter] * rest_factor + 100 - start_factor * 100 > 100) {
                    // If larger then take the percentual distance of the whole range
                    rel_range_distance = range_pct * start_factor;
                    // Rest factor of relative percentual distance still to be calculated
                    rest_factor = (rest_rel_distance - 100 * start_factor) / distances[xPct_index + range_counter];
                    // Set start factor to 1 as for next range it does not apply.
                    start_factor = 1;
                }
                else {
                    // If smaller or equal then take the percentual distance of the calculate percentual part of that range
                    rel_range_distance = ((distances[xPct_index + range_counter] * range_pct) / 100) * rest_factor;
                    // No rest left as the rest fits in current range
                    rest_factor = 0;
                }
                if (direction) {
                    abs_distance_counter = abs_distance_counter - rel_range_distance;
                    // Limit range to first range when distance becomes outside of minimum range
                    if (this.xPct.length + range_counter >= 1) {
                        range_counter--;
                    }
                }
                else {
                    abs_distance_counter = abs_distance_counter + rel_range_distance;
                    // Limit range to last range when distance becomes outside of maximum range
                    if (this.xPct.length - range_counter >= 1) {
                        range_counter++;
                    }
                }
                // Rest of relative percentual distance still to be calculated
                rest_rel_distance = distances[xPct_index + range_counter] * rest_factor;
            }
            return value + abs_distance_counter;
        };
        Spectrum.prototype.toStepping = function (value) {
            value = toStepping(this.xVal, this.xPct, value);
            return value;
        };
        Spectrum.prototype.fromStepping = function (value) {
            return fromStepping(this.xVal, this.xPct, value);
        };
        Spectrum.prototype.getStep = function (value) {
            value = getStep(this.xPct, this.xSteps, this.snap, value);
            return value;
        };
        Spectrum.prototype.getDefaultStep = function (value, isDown, size) {
            var j = getJ(value, this.xPct);
            // When at the top or stepping down, look at the previous sub-range
            if (value === 100 || (isDown && value === this.xPct[j - 1])) {
                j = Math.max(j - 1, 1);
            }
            return (this.xVal[j] - this.xVal[j - 1]) / size;
        };
        Spectrum.prototype.getNearbySteps = function (value) {
            var j = getJ(value, this.xPct);
            return {
                stepBefore: {
                    startValue: this.xVal[j - 2],
                    step: this.xNumSteps[j - 2],
                    highestStep: this.xHighestCompleteStep[j - 2],
                },
                thisStep: {
                    startValue: this.xVal[j - 1],
                    step: this.xNumSteps[j - 1],
                    highestStep: this.xHighestCompleteStep[j - 1],
                },
                stepAfter: {
                    startValue: this.xVal[j],
                    step: this.xNumSteps[j],
                    highestStep: this.xHighestCompleteStep[j],
                },
            };
        };
        Spectrum.prototype.countStepDecimals = function () {
            var stepDecimals = this.xNumSteps.map(countDecimals);
            return Math.max.apply(null, stepDecimals);
        };
        Spectrum.prototype.hasNoSize = function () {
            return this.xVal[0] === this.xVal[this.xVal.length - 1];
        };
        // Outside testing
        Spectrum.prototype.convert = function (value) {
            return this.getStep(this.toStepping(value));
        };
        Spectrum.prototype.handleEntryPoint = function (index, value) {
            var percentage;
            // Covert min/max syntax to 0 and 100.
            if (index === "min") {
                percentage = 0;
            }
            else if (index === "max") {
                percentage = 100;
            }
            else {
                percentage = parseFloat(index);
            }
            // Check for correct input.
            if (!isNumeric(percentage) || !isNumeric(value[0])) {
                throw new Error("noUiSlider: 'range' value isn't numeric.");
            }
            // Store values.
            this.xPct.push(percentage);
            this.xVal.push(value[0]);
            var value1 = Number(value[1]);
            // NaN will evaluate to false too, but to keep
            // logging clear, set step explicitly. Make sure
            // not to override the 'step' setting with false.
            if (!percentage) {
                if (!isNaN(value1)) {
                    this.xSteps[0] = value1;
                }
            }
            else {
                this.xSteps.push(isNaN(value1) ? false : value1);
            }
            this.xHighestCompleteStep.push(0);
        };
        Spectrum.prototype.handleStepPoint = function (i, n) {
            // Ignore 'false' stepping.
            if (!n) {
                return;
            }
            // Step over zero-length ranges (#948);
            if (this.xVal[i] === this.xVal[i + 1]) {
                this.xSteps[i] = this.xHighestCompleteStep[i] = this.xVal[i];
                return;
            }
            // Factor to range ratio
            this.xSteps[i] =
                fromPercentage([this.xVal[i], this.xVal[i + 1]], n, 0) / subRangeRatio(this.xPct[i], this.xPct[i + 1]);
            var totalSteps = (this.xVal[i + 1] - this.xVal[i]) / this.xNumSteps[i];
            var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
            var step = this.xVal[i] + this.xNumSteps[i] * highestStep;
            this.xHighestCompleteStep[i] = step;
        };
        return Spectrum;
    }());
    //endregion
    //region Options
    /*	Every input option is tested and parsed. This will prevent
        endless validation in internal methods. These tests are
        structured with an item for every option available. An
        option can be marked as required by setting the 'r' flag.
        The testing function is provided with three arguments:
            - The provided value for the option;
            - A reference to the options object;
            - The name for the option;

        The testing function returns false when an error is detected,
        or true when everything is OK. It can also modify the option
        object, to make sure all values can be correctly looped elsewhere. */
    //region Defaults
    var defaultFormatter = {
        to: function (value) {
            return value === undefined ? "" : value.toFixed(2);
        },
        from: Number,
    };
    var cssClasses = {
        target: "target",
        base: "base",
        origin: "origin",
        handle: "handle",
        handleLower: "handle-lower",
        handleUpper: "handle-upper",
        touchArea: "touch-area",
        horizontal: "horizontal",
        vertical: "vertical",
        background: "background",
        connect: "connect",
        connects: "connects",
        ltr: "ltr",
        rtl: "rtl",
        textDirectionLtr: "txt-dir-ltr",
        textDirectionRtl: "txt-dir-rtl",
        draggable: "draggable",
        drag: "state-drag",
        tap: "state-tap",
        active: "active",
        tooltip: "tooltip",
        pips: "pips",
        pipsHorizontal: "pips-horizontal",
        pipsVertical: "pips-vertical",
        marker: "marker",
        markerHorizontal: "marker-horizontal",
        markerVertical: "marker-vertical",
        markerNormal: "marker-normal",
        markerLarge: "marker-large",
        markerSub: "marker-sub",
        value: "value",
        valueHorizontal: "value-horizontal",
        valueVertical: "value-vertical",
        valueNormal: "value-normal",
        valueLarge: "value-large",
        valueSub: "value-sub",
    };
    // Namespaces of internal event listeners
    var INTERNAL_EVENT_NS = {
        tooltips: ".__tooltips",
        aria: ".__aria",
    };
    //endregion
    function testStep(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'step' is not numeric.");
        }
        // The step option can still be used to set stepping
        // for linear sliders. Overwritten if set in 'range'.
        parsed.singleStep = entry;
    }
    function testKeyboardPageMultiplier(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
        }
        parsed.keyboardPageMultiplier = entry;
    }
    function testKeyboardMultiplier(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
        }
        parsed.keyboardMultiplier = entry;
    }
    function testKeyboardDefaultStep(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
        }
        parsed.keyboardDefaultStep = entry;
    }
    function testRange(parsed, entry) {
        // Filter incorrect input.
        if (typeof entry !== "object" || Array.isArray(entry)) {
            throw new Error("noUiSlider: 'range' is not an object.");
        }
        // Catch missing start or end.
        if (entry.min === undefined || entry.max === undefined) {
            throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
        }
        parsed.spectrum = new Spectrum(entry, parsed.snap || false, parsed.singleStep);
    }
    function testStart(parsed, entry) {
        entry = asArray(entry);
        // Validate input. Values aren't tested, as the public .val method
        // will always provide a valid location.
        if (!Array.isArray(entry) || !entry.length) {
            throw new Error("noUiSlider: 'start' option is incorrect.");
        }
        // Store the number of handles.
        parsed.handles = entry.length;
        // When the slider is initialized, the .val method will
        // be called with the start options.
        parsed.start = entry;
    }
    function testSnap(parsed, entry) {
        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider: 'snap' option must be a boolean.");
        }
        // Enforce 100% stepping within subranges.
        parsed.snap = entry;
    }
    function testAnimate(parsed, entry) {
        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider: 'animate' option must be a boolean.");
        }
        // Enforce 100% stepping within subranges.
        parsed.animate = entry;
    }
    function testAnimationDuration(parsed, entry) {
        if (typeof entry !== "number") {
            throw new Error("noUiSlider: 'animationDuration' option must be a number.");
        }
        parsed.animationDuration = entry;
    }
    function testConnect(parsed, entry) {
        var connect = [false];
        var i;
        // Map legacy options
        if (entry === "lower") {
            entry = [true, false];
        }
        else if (entry === "upper") {
            entry = [false, true];
        }
        // Handle boolean options
        if (entry === true || entry === false) {
            for (i = 1; i < parsed.handles; i++) {
                connect.push(entry);
            }
            connect.push(false);
        }
        // Reject invalid input
        else if (!Array.isArray(entry) || !entry.length || entry.length !== parsed.handles + 1) {
            throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
        }
        else {
            connect = entry;
        }
        parsed.connect = connect;
    }
    function testOrientation(parsed, entry) {
        // Set orientation to an a numerical value for easy
        // array selection.
        switch (entry) {
            case "horizontal":
                parsed.ort = 0;
                break;
            case "vertical":
                parsed.ort = 1;
                break;
            default:
                throw new Error("noUiSlider: 'orientation' option is invalid.");
        }
    }
    function testMargin(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'margin' option must be numeric.");
        }
        // Issue #582
        if (entry === 0) {
            return;
        }
        parsed.margin = parsed.spectrum.getDistance(entry);
    }
    function testLimit(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'limit' option must be numeric.");
        }
        parsed.limit = parsed.spectrum.getDistance(entry);
        if (!parsed.limit || parsed.handles < 2) {
            throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.");
        }
    }
    function testPadding(parsed, entry) {
        var index;
        if (!isNumeric(entry) && !Array.isArray(entry)) {
            throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
        }
        if (Array.isArray(entry) && !(entry.length === 2 || isNumeric(entry[0]) || isNumeric(entry[1]))) {
            throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
        }
        if (entry === 0) {
            return;
        }
        if (!Array.isArray(entry)) {
            entry = [entry, entry];
        }
        // 'getDistance' returns false for invalid values.
        parsed.padding = [parsed.spectrum.getDistance(entry[0]), parsed.spectrum.getDistance(entry[1])];
        for (index = 0; index < parsed.spectrum.xNumSteps.length - 1; index++) {
            // last "range" can't contain step size as it is purely an endpoint.
            if (parsed.padding[0][index] < 0 || parsed.padding[1][index] < 0) {
                throw new Error("noUiSlider: 'padding' option must be a positive number(s).");
            }
        }
        var totalPadding = entry[0] + entry[1];
        var firstValue = parsed.spectrum.xVal[0];
        var lastValue = parsed.spectrum.xVal[parsed.spectrum.xVal.length - 1];
        if (totalPadding / (lastValue - firstValue) > 1) {
            throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.");
        }
    }
    function testDirection(parsed, entry) {
        // Set direction as a numerical value for easy parsing.
        // Invert connection for RTL sliders, so that the proper
        // handles get the connect/background classes.
        switch (entry) {
            case "ltr":
                parsed.dir = 0;
                break;
            case "rtl":
                parsed.dir = 1;
                break;
            default:
                throw new Error("noUiSlider: 'direction' option was not recognized.");
        }
    }
    function testBehaviour(parsed, entry) {
        // Make sure the input is a string.
        if (typeof entry !== "string") {
            throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
        }
        // Check if the string contains any keywords.
        // None are required.
        var tap = entry.indexOf("tap") >= 0;
        var drag = entry.indexOf("drag") >= 0;
        var fixed = entry.indexOf("fixed") >= 0;
        var snap = entry.indexOf("snap") >= 0;
        var hover = entry.indexOf("hover") >= 0;
        var unconstrained = entry.indexOf("unconstrained") >= 0;
        var dragAll = entry.indexOf("drag-all") >= 0;
        var smoothSteps = entry.indexOf("smooth-steps") >= 0;
        if (fixed) {
            if (parsed.handles !== 2) {
                throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
            }
            // Use margin to enforce fixed state
            testMargin(parsed, parsed.start[1] - parsed.start[0]);
        }
        if (unconstrained && (parsed.margin || parsed.limit)) {
            throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");
        }
        parsed.events = {
            tap: tap || snap,
            drag: drag,
            dragAll: dragAll,
            smoothSteps: smoothSteps,
            fixed: fixed,
            snap: snap,
            hover: hover,
            unconstrained: unconstrained,
        };
    }
    function testTooltips(parsed, entry) {
        if (entry === false) {
            return;
        }
        if (entry === true || isValidPartialFormatter(entry)) {
            parsed.tooltips = [];
            for (var i = 0; i < parsed.handles; i++) {
                parsed.tooltips.push(entry);
            }
        }
        else {
            entry = asArray(entry);
            if (entry.length !== parsed.handles) {
                throw new Error("noUiSlider: must pass a formatter for all handles.");
            }
            entry.forEach(function (formatter) {
                if (typeof formatter !== "boolean" && !isValidPartialFormatter(formatter)) {
                    throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");
                }
            });
            parsed.tooltips = entry;
        }
    }
    function testHandleAttributes(parsed, entry) {
        if (entry.length !== parsed.handles) {
            throw new Error("noUiSlider: must pass a attributes for all handles.");
        }
        parsed.handleAttributes = entry;
    }
    function testAriaFormat(parsed, entry) {
        if (!isValidPartialFormatter(entry)) {
            throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
        }
        parsed.ariaFormat = entry;
    }
    function testFormat(parsed, entry) {
        if (!isValidFormatter(entry)) {
            throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
        }
        parsed.format = entry;
    }
    function testKeyboardSupport(parsed, entry) {
        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
        }
        parsed.keyboardSupport = entry;
    }
    function testDocumentElement(parsed, entry) {
        // This is an advanced option. Passed values are used without validation.
        parsed.documentElement = entry;
    }
    function testCssPrefix(parsed, entry) {
        if (typeof entry !== "string" && entry !== false) {
            throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
        }
        parsed.cssPrefix = entry;
    }
    function testCssClasses(parsed, entry) {
        if (typeof entry !== "object") {
            throw new Error("noUiSlider: 'cssClasses' must be an object.");
        }
        if (typeof parsed.cssPrefix === "string") {
            parsed.cssClasses = {};
            Object.keys(entry).forEach(function (key) {
                parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
            });
        }
        else {
            parsed.cssClasses = entry;
        }
    }
    // Test all developer settings and parse to assumption-safe values.
    function testOptions(options) {
        // To prove a fix for #537, freeze options here.
        // If the object is modified, an error will be thrown.
        // Object.freeze(options);
        var parsed = {
            margin: null,
            limit: null,
            padding: null,
            animate: true,
            animationDuration: 300,
            ariaFormat: defaultFormatter,
            format: defaultFormatter,
        };
        // Tests are executed in the order they are presented here.
        var tests = {
            step: { r: false, t: testStep },
            keyboardPageMultiplier: { r: false, t: testKeyboardPageMultiplier },
            keyboardMultiplier: { r: false, t: testKeyboardMultiplier },
            keyboardDefaultStep: { r: false, t: testKeyboardDefaultStep },
            start: { r: true, t: testStart },
            connect: { r: true, t: testConnect },
            direction: { r: true, t: testDirection },
            snap: { r: false, t: testSnap },
            animate: { r: false, t: testAnimate },
            animationDuration: { r: false, t: testAnimationDuration },
            range: { r: true, t: testRange },
            orientation: { r: false, t: testOrientation },
            margin: { r: false, t: testMargin },
            limit: { r: false, t: testLimit },
            padding: { r: false, t: testPadding },
            behaviour: { r: true, t: testBehaviour },
            ariaFormat: { r: false, t: testAriaFormat },
            format: { r: false, t: testFormat },
            tooltips: { r: false, t: testTooltips },
            keyboardSupport: { r: true, t: testKeyboardSupport },
            documentElement: { r: false, t: testDocumentElement },
            cssPrefix: { r: true, t: testCssPrefix },
            cssClasses: { r: true, t: testCssClasses },
            handleAttributes: { r: false, t: testHandleAttributes },
        };
        var defaults = {
            connect: false,
            direction: "ltr",
            behaviour: "tap",
            orientation: "horizontal",
            keyboardSupport: true,
            cssPrefix: "noUi-",
            cssClasses: cssClasses,
            keyboardPageMultiplier: 5,
            keyboardMultiplier: 1,
            keyboardDefaultStep: 10,
        };
        // AriaFormat defaults to regular format, if any.
        if (options.format && !options.ariaFormat) {
            options.ariaFormat = options.format;
        }
        // Run all options through a testing mechanism to ensure correct
        // input. It should be noted that options might get modified to
        // be handled properly. E.g. wrapping integers in arrays.
        Object.keys(tests).forEach(function (name) {
            // If the option isn't set, but it is required, throw an error.
            if (!isSet(options[name]) && defaults[name] === undefined) {
                if (tests[name].r) {
                    throw new Error("noUiSlider: '" + name + "' is required.");
                }
                return;
            }
            tests[name].t(parsed, !isSet(options[name]) ? defaults[name] : options[name]);
        });
        // Forward pips options
        parsed.pips = options.pips;
        // All recent browsers accept unprefixed transform.
        // We need -ms- for IE9 and -webkit- for older Android;
        // Assume use of -webkit- if unprefixed and -ms- are not supported.
        // https://caniuse.com/#feat=transforms2d
        var d = document.createElement("div");
        var msPrefix = d.style.msTransform !== undefined;
        var noPrefix = d.style.transform !== undefined;
        parsed.transformRule = noPrefix ? "transform" : msPrefix ? "msTransform" : "webkitTransform";
        // Pips don't move, so we can place them using left/top.
        var styles = [
            ["left", "top"],
            ["right", "bottom"],
        ];
        parsed.style = styles[parsed.dir][parsed.ort];
        return parsed;
    }
    //endregion
    function scope(target, options, originalOptions) {
        var actions = getActions();
        var supportsTouchActionNone = getSupportsTouchActionNone();
        var supportsPassive = supportsTouchActionNone && getSupportsPassive();
        // All variables local to 'scope' are prefixed with 'scope_'
        // Slider DOM Nodes
        var scope_Target = target;
        var scope_Base;
        var scope_Handles;
        var scope_Connects;
        var scope_Pips;
        var scope_Tooltips;
        // Slider state values
        var scope_Spectrum = options.spectrum;
        var scope_Values = [];
        var scope_Locations = [];
        var scope_HandleNumbers = [];
        var scope_ActiveHandlesCount = 0;
        var scope_Events = {};
        // Document Nodes
        var scope_Document = target.ownerDocument;
        var scope_DocumentElement = options.documentElement || scope_Document.documentElement;
        var scope_Body = scope_Document.body;
        // For horizontal sliders in standard ltr documents,
        // make .noUi-origin overflow to the left so the document doesn't scroll.
        var scope_DirOffset = scope_Document.dir === "rtl" || options.ort === 1 ? 0 : 100;
        // Creates a node, adds it to target, returns the new node.
        function addNodeTo(addTarget, className) {
            var div = scope_Document.createElement("div");
            if (className) {
                addClass(div, className);
            }
            addTarget.appendChild(div);
            return div;
        }
        // Append a origin to the base
        function addOrigin(base, handleNumber) {
            var origin = addNodeTo(base, options.cssClasses.origin);
            var handle = addNodeTo(origin, options.cssClasses.handle);
            addNodeTo(handle, options.cssClasses.touchArea);
            handle.setAttribute("data-handle", String(handleNumber));
            if (options.keyboardSupport) {
                // https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
                // 0 = focusable and reachable
                handle.setAttribute("tabindex", "0");
                handle.addEventListener("keydown", function (event) {
                    return eventKeydown(event, handleNumber);
                });
            }
            if (options.handleAttributes !== undefined) {
                var attributes_1 = options.handleAttributes[handleNumber];
                Object.keys(attributes_1).forEach(function (attribute) {
                    handle.setAttribute(attribute, attributes_1[attribute]);
                });
            }
            handle.setAttribute("role", "slider");
            handle.setAttribute("aria-orientation", options.ort ? "vertical" : "horizontal");
            if (handleNumber === 0) {
                addClass(handle, options.cssClasses.handleLower);
            }
            else if (handleNumber === options.handles - 1) {
                addClass(handle, options.cssClasses.handleUpper);
            }
            return origin;
        }
        // Insert nodes for connect elements
        function addConnect(base, add) {
            if (!add) {
                return false;
            }
            return addNodeTo(base, options.cssClasses.connect);
        }
        // Add handles to the slider base.
        function addElements(connectOptions, base) {
            var connectBase = addNodeTo(base, options.cssClasses.connects);
            scope_Handles = [];
            scope_Connects = [];
            scope_Connects.push(addConnect(connectBase, connectOptions[0]));
            // [::::O====O====O====]
            // connectOptions = [0, 1, 1, 1]
            for (var i = 0; i < options.handles; i++) {
                // Keep a list of all added handles.
                scope_Handles.push(addOrigin(base, i));
                scope_HandleNumbers[i] = i;
                scope_Connects.push(addConnect(connectBase, connectOptions[i + 1]));
            }
        }
        // Initialize a single slider.
        function addSlider(addTarget) {
            // Apply classes and data to the target.
            addClass(addTarget, options.cssClasses.target);
            if (options.dir === 0) {
                addClass(addTarget, options.cssClasses.ltr);
            }
            else {
                addClass(addTarget, options.cssClasses.rtl);
            }
            if (options.ort === 0) {
                addClass(addTarget, options.cssClasses.horizontal);
            }
            else {
                addClass(addTarget, options.cssClasses.vertical);
            }
            var textDirection = getComputedStyle(addTarget).direction;
            if (textDirection === "rtl") {
                addClass(addTarget, options.cssClasses.textDirectionRtl);
            }
            else {
                addClass(addTarget, options.cssClasses.textDirectionLtr);
            }
            return addNodeTo(addTarget, options.cssClasses.base);
        }
        function addTooltip(handle, handleNumber) {
            if (!options.tooltips || !options.tooltips[handleNumber]) {
                return false;
            }
            return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
        }
        function isSliderDisabled() {
            return scope_Target.hasAttribute("disabled");
        }
        // Disable the slider dragging if any handle is disabled
        function isHandleDisabled(handleNumber) {
            var handleOrigin = scope_Handles[handleNumber];
            return handleOrigin.hasAttribute("disabled");
        }
        function removeTooltips() {
            if (scope_Tooltips) {
                removeEvent("update" + INTERNAL_EVENT_NS.tooltips);
                scope_Tooltips.forEach(function (tooltip) {
                    if (tooltip) {
                        removeElement(tooltip);
                    }
                });
                scope_Tooltips = null;
            }
        }
        // The tooltips option is a shorthand for using the 'update' event.
        function tooltips() {
            removeTooltips();
            // Tooltips are added with options.tooltips in original order.
            scope_Tooltips = scope_Handles.map(addTooltip);
            bindEvent("update" + INTERNAL_EVENT_NS.tooltips, function (values, handleNumber, unencoded) {
                if (!scope_Tooltips || !options.tooltips) {
                    return;
                }
                if (scope_Tooltips[handleNumber] === false) {
                    return;
                }
                var formattedValue = values[handleNumber];
                if (options.tooltips[handleNumber] !== true) {
                    formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
                }
                scope_Tooltips[handleNumber].innerHTML = formattedValue;
            });
        }
        function aria() {
            removeEvent("update" + INTERNAL_EVENT_NS.aria);
            bindEvent("update" + INTERNAL_EVENT_NS.aria, function (values, handleNumber, unencoded, tap, positions) {
                // Update Aria Values for all handles, as a change in one changes min and max values for the next.
                scope_HandleNumbers.forEach(function (index) {
                    var handle = scope_Handles[index];
                    var min = checkHandlePosition(scope_Locations, index, 0, true, true, true);
                    var max = checkHandlePosition(scope_Locations, index, 100, true, true, true);
                    var now = positions[index];
                    // Formatted value for display
                    var text = String(options.ariaFormat.to(unencoded[index]));
                    // Map to slider range values
                    min = scope_Spectrum.fromStepping(min).toFixed(1);
                    max = scope_Spectrum.fromStepping(max).toFixed(1);
                    now = scope_Spectrum.fromStepping(now).toFixed(1);
                    handle.children[0].setAttribute("aria-valuemin", min);
                    handle.children[0].setAttribute("aria-valuemax", max);
                    handle.children[0].setAttribute("aria-valuenow", now);
                    handle.children[0].setAttribute("aria-valuetext", text);
                });
            });
        }
        function getGroup(pips) {
            // Use the range.
            if (pips.mode === exports.PipsMode.Range || pips.mode === exports.PipsMode.Steps) {
                return scope_Spectrum.xVal;
            }
            if (pips.mode === exports.PipsMode.Count) {
                if (pips.values < 2) {
                    throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");
                }
                // Divide 0 - 100 in 'count' parts.
                var interval = pips.values - 1;
                var spread = 100 / interval;
                var values = [];
                // List these parts and have them handled as 'positions'.
                while (interval--) {
                    values[interval] = interval * spread;
                }
                values.push(100);
                return mapToRange(values, pips.stepped);
            }
            if (pips.mode === exports.PipsMode.Positions) {
                // Map all percentages to on-range values.
                return mapToRange(pips.values, pips.stepped);
            }
            if (pips.mode === exports.PipsMode.Values) {
                // If the value must be stepped, it needs to be converted to a percentage first.
                if (pips.stepped) {
                    return pips.values.map(function (value) {
                        // Convert to percentage, apply step, return to value.
                        return scope_Spectrum.fromStepping(scope_Spectrum.getStep(scope_Spectrum.toStepping(value)));
                    });
                }
                // Otherwise, we can simply use the values.
                return pips.values;
            }
            return []; // pips.mode = never
        }
        function mapToRange(values, stepped) {
            return values.map(function (value) {
                return scope_Spectrum.fromStepping(stepped ? scope_Spectrum.getStep(value) : value);
            });
        }
        function generateSpread(pips) {
            function safeIncrement(value, increment) {
                // Avoid floating point variance by dropping the smallest decimal places.
                return Number((value + increment).toFixed(7));
            }
            var group = getGroup(pips);
            var indexes = {};
            var firstInRange = scope_Spectrum.xVal[0];
            var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length - 1];
            var ignoreFirst = false;
            var ignoreLast = false;
            var prevPct = 0;
            // Create a copy of the group, sort it and filter away all duplicates.
            group = unique(group.slice().sort(function (a, b) {
                return a - b;
            }));
            // Make sure the range starts with the first element.
            if (group[0] !== firstInRange) {
                group.unshift(firstInRange);
                ignoreFirst = true;
            }
            // Likewise for the last one.
            if (group[group.length - 1] !== lastInRange) {
                group.push(lastInRange);
                ignoreLast = true;
            }
            group.forEach(function (current, index) {
                // Get the current step and the lower + upper positions.
                var step;
                var i;
                var q;
                var low = current;
                var high = group[index + 1];
                var newPct;
                var pctDifference;
                var pctPos;
                var type;
                var steps;
                var realSteps;
                var stepSize;
                var isSteps = pips.mode === exports.PipsMode.Steps;
                // When using 'steps' mode, use the provided steps.
                // Otherwise, we'll step on to the next subrange.
                if (isSteps) {
                    step = scope_Spectrum.xNumSteps[index];
                }
                // Default to a 'full' step.
                if (!step) {
                    step = high - low;
                }
                // If high is undefined we are at the last subrange. Make sure it iterates once (#1088)
                if (high === undefined) {
                    high = low;
                }
                // Make sure step isn't 0, which would cause an infinite loop (#654)
                step = Math.max(step, 0.0000001);
                // Find all steps in the subrange.
                for (i = low; i <= high; i = safeIncrement(i, step)) {
                    // Get the percentage value for the current step,
                    // calculate the size for the subrange.
                    newPct = scope_Spectrum.toStepping(i);
                    pctDifference = newPct - prevPct;
                    steps = pctDifference / (pips.density || 1);
                    realSteps = Math.round(steps);
                    // This ratio represents the amount of percentage-space a point indicates.
                    // For a density 1 the points/percentage = 1. For density 2, that percentage needs to be re-divided.
                    // Round the percentage offset to an even number, then divide by two
                    // to spread the offset on both sides of the range.
                    stepSize = pctDifference / realSteps;
                    // Divide all points evenly, adding the correct number to this subrange.
                    // Run up to <= so that 100% gets a point, event if ignoreLast is set.
                    for (q = 1; q <= realSteps; q += 1) {
                        // The ratio between the rounded value and the actual size might be ~1% off.
                        // Correct the percentage offset by the number of points
                        // per subrange. density = 1 will result in 100 points on the
                        // full range, 2 for 50, 4 for 25, etc.
                        pctPos = prevPct + q * stepSize;
                        indexes[pctPos.toFixed(5)] = [scope_Spectrum.fromStepping(pctPos), 0];
                    }
                    // Determine the point type.
                    type = group.indexOf(i) > -1 ? exports.PipsType.LargeValue : isSteps ? exports.PipsType.SmallValue : exports.PipsType.NoValue;
                    // Enforce the 'ignoreFirst' option by overwriting the type for 0.
                    if (!index && ignoreFirst && i !== high) {
                        type = 0;
                    }
                    if (!(i === high && ignoreLast)) {
                        // Mark the 'type' of this point. 0 = plain, 1 = real value, 2 = step value.
                        indexes[newPct.toFixed(5)] = [i, type];
                    }
                    // Update the percentage count.
                    prevPct = newPct;
                }
            });
            return indexes;
        }
        function addMarking(spread, filterFunc, formatter) {
            var _a, _b;
            var element = scope_Document.createElement("div");
            var valueSizeClasses = (_a = {},
                _a[exports.PipsType.None] = "",
                _a[exports.PipsType.NoValue] = options.cssClasses.valueNormal,
                _a[exports.PipsType.LargeValue] = options.cssClasses.valueLarge,
                _a[exports.PipsType.SmallValue] = options.cssClasses.valueSub,
                _a);
            var markerSizeClasses = (_b = {},
                _b[exports.PipsType.None] = "",
                _b[exports.PipsType.NoValue] = options.cssClasses.markerNormal,
                _b[exports.PipsType.LargeValue] = options.cssClasses.markerLarge,
                _b[exports.PipsType.SmallValue] = options.cssClasses.markerSub,
                _b);
            var valueOrientationClasses = [options.cssClasses.valueHorizontal, options.cssClasses.valueVertical];
            var markerOrientationClasses = [options.cssClasses.markerHorizontal, options.cssClasses.markerVertical];
            addClass(element, options.cssClasses.pips);
            addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);
            function getClasses(type, source) {
                var a = source === options.cssClasses.value;
                var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
                var sizeClasses = a ? valueSizeClasses : markerSizeClasses;
                return source + " " + orientationClasses[options.ort] + " " + sizeClasses[type];
            }
            function addSpread(offset, value, type) {
                // Apply the filter function, if it is set.
                type = filterFunc ? filterFunc(value, type) : type;
                if (type === exports.PipsType.None) {
                    return;
                }
                // Add a marker for every point
                var node = addNodeTo(element, false);
                node.className = getClasses(type, options.cssClasses.marker);
                node.style[options.style] = offset + "%";
                // Values are only appended for points marked '1' or '2'.
                if (type > exports.PipsType.NoValue) {
                    node = addNodeTo(element, false);
                    node.className = getClasses(type, options.cssClasses.value);
                    node.setAttribute("data-value", String(value));
                    node.style[options.style] = offset + "%";
                    node.innerHTML = String(formatter.to(value));
                }
            }
            // Append all points.
            Object.keys(spread).forEach(function (offset) {
                addSpread(offset, spread[offset][0], spread[offset][1]);
            });
            return element;
        }
        function removePips() {
            if (scope_Pips) {
                removeElement(scope_Pips);
                scope_Pips = null;
            }
        }
        function pips(pips) {
            // Fix #669
            removePips();
            var spread = generateSpread(pips);
            var filter = pips.filter;
            var format = pips.format || {
                to: function (value) {
                    return String(Math.round(value));
                },
            };
            scope_Pips = scope_Target.appendChild(addMarking(spread, filter, format));
            return scope_Pips;
        }
        // Shorthand for base dimensions.
        function baseSize() {
            var rect = scope_Base.getBoundingClientRect();
            var alt = ("offset" + ["Width", "Height"][options.ort]);
            return options.ort === 0 ? rect.width || scope_Base[alt] : rect.height || scope_Base[alt];
        }
        // Handler for attaching events trough a proxy.
        function attachEvent(events, element, callback, data) {
            // This function can be used to 'filter' events to the slider.
            // element is a node, not a nodeList
            var method = function (event) {
                var e = fixEvent(event, data.pageOffset, data.target || element);
                // fixEvent returns false if this event has a different target
                // when handling (multi-) touch events;
                if (!e) {
                    return false;
                }
                // doNotReject is passed by all end events to make sure released touches
                // are not rejected, leaving the slider "stuck" to the cursor;
                if (isSliderDisabled() && !data.doNotReject) {
                    return false;
                }
                // Stop if an active 'tap' transition is taking place.
                if (hasClass(scope_Target, options.cssClasses.tap) && !data.doNotReject) {
                    return false;
                }
                // Ignore right or middle clicks on start #454
                if (events === actions.start && e.buttons !== undefined && e.buttons > 1) {
                    return false;
                }
                // Ignore right or middle clicks on start #454
                if (data.hover && e.buttons) {
                    return false;
                }
                // 'supportsPassive' is only true if a browser also supports touch-action: none in CSS.
                // iOS safari does not, so it doesn't get to benefit from passive scrolling. iOS does support
                // touch-action: manipulation, but that allows panning, which breaks
                // sliders after zooming/on non-responsive pages.
                // See: https://bugs.webkit.org/show_bug.cgi?id=133112
                if (!supportsPassive) {
                    e.preventDefault();
                }
                e.calcPoint = e.points[options.ort];
                // Call the event handler with the event [ and additional data ].
                callback(e, data);
                return;
            };
            var methods = [];
            // Bind a closure on the target for every event type.
            events.split(" ").forEach(function (eventName) {
                element.addEventListener(eventName, method, supportsPassive ? { passive: true } : false);
                methods.push([eventName, method]);
            });
            return methods;
        }
        // Provide a clean event with standardized offset values.
        function fixEvent(e, pageOffset, eventTarget) {
            // Filter the event to register the type, which can be
            // touch, mouse or pointer. Offset changes need to be
            // made on an event specific basis.
            var touch = e.type.indexOf("touch") === 0;
            var mouse = e.type.indexOf("mouse") === 0;
            var pointer = e.type.indexOf("pointer") === 0;
            var x = 0;
            var y = 0;
            // IE10 implemented pointer events with a prefix;
            if (e.type.indexOf("MSPointer") === 0) {
                pointer = true;
            }
            // Erroneous events seem to be passed in occasionally on iOS/iPadOS after user finishes interacting with
            // the slider. They appear to be of type MouseEvent, yet they don't have usual properties set. Ignore
            // events that have no touches or buttons associated with them. (#1057, #1079, #1095)
            if (e.type === "mousedown" && !e.buttons && !e.touches) {
                return false;
            }
            // The only thing one handle should be concerned about is the touches that originated on top of it.
            if (touch) {
                // Returns true if a touch originated on the target.
                var isTouchOnTarget = function (checkTouch) {
                    var target = checkTouch.target;
                    return (target === eventTarget ||
                        eventTarget.contains(target) ||
                        (e.composed && e.composedPath().shift() === eventTarget));
                };
                // In the case of touchstart events, we need to make sure there is still no more than one
                // touch on the target so we look amongst all touches.
                if (e.type === "touchstart") {
                    var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget);
                    // Do not support more than one touch per handle.
                    if (targetTouches.length > 1) {
                        return false;
                    }
                    x = targetTouches[0].pageX;
                    y = targetTouches[0].pageY;
                }
                else {
                    // In the other cases, find on changedTouches is enough.
                    var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget);
                    // Cancel if the target touch has not moved.
                    if (!targetTouch) {
                        return false;
                    }
                    x = targetTouch.pageX;
                    y = targetTouch.pageY;
                }
            }
            pageOffset = pageOffset || getPageOffset(scope_Document);
            if (mouse || pointer) {
                x = e.clientX + pageOffset.x;
                y = e.clientY + pageOffset.y;
            }
            e.pageOffset = pageOffset;
            e.points = [x, y];
            e.cursor = mouse || pointer; // Fix #435
            return e;
        }
        // Translate a coordinate in the document to a percentage on the slider
        function calcPointToPercentage(calcPoint) {
            var location = calcPoint - offset(scope_Base, options.ort);
            var proposal = (location * 100) / baseSize();
            // Clamp proposal between 0% and 100%
            // Out-of-bound coordinates may occur when .noUi-base pseudo-elements
            // are used (e.g. contained handles feature)
            proposal = limit(proposal);
            return options.dir ? 100 - proposal : proposal;
        }
        // Find handle closest to a certain percentage on the slider
        function getClosestHandle(clickedPosition) {
            var smallestDifference = 100;
            var handleNumber = false;
            scope_Handles.forEach(function (handle, index) {
                // Disabled handles are ignored
                if (isHandleDisabled(index)) {
                    return;
                }
                var handlePosition = scope_Locations[index];
                var differenceWithThisHandle = Math.abs(handlePosition - clickedPosition);
                // Initial state
                var clickAtEdge = differenceWithThisHandle === 100 && smallestDifference === 100;
                // Difference with this handle is smaller than the previously checked handle
                var isCloser = differenceWithThisHandle < smallestDifference;
                var isCloserAfter = differenceWithThisHandle <= smallestDifference && clickedPosition > handlePosition;
                if (isCloser || isCloserAfter || clickAtEdge) {
                    handleNumber = index;
                    smallestDifference = differenceWithThisHandle;
                }
            });
            return handleNumber;
        }
        // Fire 'end' when a mouse or pen leaves the document.
        function documentLeave(event, data) {
            if (event.type === "mouseout" &&
                event.target.nodeName === "HTML" &&
                event.relatedTarget === null) {
                eventEnd(event, data);
            }
        }
        // Handle movement on document for handle and range drag.
        function eventMove(event, data) {
            // Fix #498
            // Check value of .buttons in 'start' to work around a bug in IE10 mobile (data.buttonsProperty).
            // https://connect.microsoft.com/IE/feedback/details/927005/mobile-ie10-windows-phone-buttons-property-of-pointermove-event-always-zero
            // IE9 has .buttons and .which zero on mousemove.
            // Firefox breaks the spec MDN defines.
            if (navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0) {
                return eventEnd(event, data);
            }
            // Check if we are moving up or down
            var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);
            // Convert the movement into a percentage of the slider width/height
            var proposal = (movement * 100) / data.baseSize;
            moveHandles(movement > 0, proposal, data.locations, data.handleNumbers, data.connect);
        }
        // Unbind move events on document, call callbacks.
        function eventEnd(event, data) {
            // The handle is no longer active, so remove the class.
            if (data.handle) {
                removeClass(data.handle, options.cssClasses.active);
                scope_ActiveHandlesCount -= 1;
            }
            // Unbind the move and end events, which are added on 'start'.
            data.listeners.forEach(function (c) {
                scope_DocumentElement.removeEventListener(c[0], c[1]);
            });
            if (scope_ActiveHandlesCount === 0) {
                // Remove dragging class.
                removeClass(scope_Target, options.cssClasses.drag);
                setZindex();
                // Remove cursor styles and text-selection events bound to the body.
                if (event.cursor) {
                    scope_Body.style.cursor = "";
                    scope_Body.removeEventListener("selectstart", preventDefault);
                }
            }
            if (options.events.smoothSteps) {
                data.handleNumbers.forEach(function (handleNumber) {
                    setHandle(handleNumber, scope_Locations[handleNumber], true, true, false, false);
                });
                data.handleNumbers.forEach(function (handleNumber) {
                    fireEvent("update", handleNumber);
                });
            }
            data.handleNumbers.forEach(function (handleNumber) {
                fireEvent("change", handleNumber);
                fireEvent("set", handleNumber);
                fireEvent("end", handleNumber);
            });
        }
        // Bind move events on document.
        function eventStart(event, data) {
            // Ignore event if any handle is disabled
            if (data.handleNumbers.some(isHandleDisabled)) {
                return;
            }
            var handle;
            if (data.handleNumbers.length === 1) {
                var handleOrigin = scope_Handles[data.handleNumbers[0]];
                handle = handleOrigin.children[0];
                scope_ActiveHandlesCount += 1;
                // Mark the handle as 'active' so it can be styled.
                addClass(handle, options.cssClasses.active);
            }
            // A drag should never propagate up to the 'tap' event.
            event.stopPropagation();
            // Record the event listeners.
            var listeners = [];
            // Attach the move and end events.
            var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
                // The event target has changed so we need to propagate the original one so that we keep
                // relying on it to extract target touches.
                target: event.target,
                handle: handle,
                connect: data.connect,
                listeners: listeners,
                startCalcPoint: event.calcPoint,
                baseSize: baseSize(),
                pageOffset: event.pageOffset,
                handleNumbers: data.handleNumbers,
                buttonsProperty: event.buttons,
                locations: scope_Locations.slice(),
            });
            var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
                target: event.target,
                handle: handle,
                listeners: listeners,
                doNotReject: true,
                handleNumbers: data.handleNumbers,
            });
            var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
                target: event.target,
                handle: handle,
                listeners: listeners,
                doNotReject: true,
                handleNumbers: data.handleNumbers,
            });
            // We want to make sure we pushed the listeners in the listener list rather than creating
            // a new one as it has already been passed to the event handlers.
            listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent));
            // Text selection isn't an issue on touch devices,
            // so adding cursor styles can be skipped.
            if (event.cursor) {
                // Prevent the 'I' cursor and extend the range-drag cursor.
                scope_Body.style.cursor = getComputedStyle(event.target).cursor;
                // Mark the target with a dragging state.
                if (scope_Handles.length > 1) {
                    addClass(scope_Target, options.cssClasses.drag);
                }
                // Prevent text selection when dragging the handles.
                // In noUiSlider <= 9.2.0, this was handled by calling preventDefault on mouse/touch start/move,
                // which is scroll blocking. The selectstart event is supported by FireFox starting from version 52,
                // meaning the only holdout is iOS Safari. This doesn't matter: text selection isn't triggered there.
                // The 'cursor' flag is false.
                // See: http://caniuse.com/#search=selectstart
                scope_Body.addEventListener("selectstart", preventDefault, false);
            }
            data.handleNumbers.forEach(function (handleNumber) {
                fireEvent("start", handleNumber);
            });
        }
        // Move closest handle to tapped location.
        function eventTap(event) {
            // The tap event shouldn't propagate up
            event.stopPropagation();
            var proposal = calcPointToPercentage(event.calcPoint);
            var handleNumber = getClosestHandle(proposal);
            // Tackle the case that all handles are 'disabled'.
            if (handleNumber === false) {
                return;
            }
            // Flag the slider as it is now in a transitional state.
            // Transition takes a configurable amount of ms (default 300). Re-enable the slider after that.
            if (!options.events.snap) {
                addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
            }
            setHandle(handleNumber, proposal, true, true);
            setZindex();
            fireEvent("slide", handleNumber, true);
            fireEvent("update", handleNumber, true);
            if (!options.events.snap) {
                fireEvent("change", handleNumber, true);
                fireEvent("set", handleNumber, true);
            }
            else {
                eventStart(event, { handleNumbers: [handleNumber] });
            }
        }
        // Fires a 'hover' event for a hovered mouse/pen position.
        function eventHover(event) {
            var proposal = calcPointToPercentage(event.calcPoint);
            var to = scope_Spectrum.getStep(proposal);
            var value = scope_Spectrum.fromStepping(to);
            Object.keys(scope_Events).forEach(function (targetEvent) {
                if ("hover" === targetEvent.split(".")[0]) {
                    scope_Events[targetEvent].forEach(function (callback) {
                        callback.call(scope_Self, value);
                    });
                }
            });
        }
        // Handles keydown on focused handles
        // Don't move the document when pressing arrow keys on focused handles
        function eventKeydown(event, handleNumber) {
            if (isSliderDisabled() || isHandleDisabled(handleNumber)) {
                return false;
            }
            var horizontalKeys = ["Left", "Right"];
            var verticalKeys = ["Down", "Up"];
            var largeStepKeys = ["PageDown", "PageUp"];
            var edgeKeys = ["Home", "End"];
            if (options.dir && !options.ort) {
                // On an right-to-left slider, the left and right keys act inverted
                horizontalKeys.reverse();
            }
            else if (options.ort && !options.dir) {
                // On a top-to-bottom slider, the up and down keys act inverted
                verticalKeys.reverse();
                largeStepKeys.reverse();
            }
            // Strip "Arrow" for IE compatibility. https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
            var key = event.key.replace("Arrow", "");
            var isLargeDown = key === largeStepKeys[0];
            var isLargeUp = key === largeStepKeys[1];
            var isDown = key === verticalKeys[0] || key === horizontalKeys[0] || isLargeDown;
            var isUp = key === verticalKeys[1] || key === horizontalKeys[1] || isLargeUp;
            var isMin = key === edgeKeys[0];
            var isMax = key === edgeKeys[1];
            if (!isDown && !isUp && !isMin && !isMax) {
                return true;
            }
            event.preventDefault();
            var to;
            if (isUp || isDown) {
                var direction = isDown ? 0 : 1;
                var steps = getNextStepsForHandle(handleNumber);
                var step = steps[direction];
                // At the edge of a slider, do nothing
                if (step === null) {
                    return false;
                }
                // No step set, use the default of 10% of the sub-range
                if (step === false) {
                    step = scope_Spectrum.getDefaultStep(scope_Locations[handleNumber], isDown, options.keyboardDefaultStep);
                }
                if (isLargeUp || isLargeDown) {
                    step *= options.keyboardPageMultiplier;
                }
                else {
                    step *= options.keyboardMultiplier;
                }
                // Step over zero-length ranges (#948);
                step = Math.max(step, 0.0000001);
                // Decrement for down steps
                step = (isDown ? -1 : 1) * step;
                to = scope_Values[handleNumber] + step;
            }
            else if (isMax) {
                // End key
                to = options.spectrum.xVal[options.spectrum.xVal.length - 1];
            }
            else {
                // Home key
                to = options.spectrum.xVal[0];
            }
            setHandle(handleNumber, scope_Spectrum.toStepping(to), true, true);
            fireEvent("slide", handleNumber);
            fireEvent("update", handleNumber);
            fireEvent("change", handleNumber);
            fireEvent("set", handleNumber);
            return false;
        }
        // Attach events to several slider parts.
        function bindSliderEvents(behaviour) {
            // Attach the standard drag event to the handles.
            if (!behaviour.fixed) {
                scope_Handles.forEach(function (handle, index) {
                    // These events are only bound to the visual handle
                    // element, not the 'real' origin element.
                    attachEvent(actions.start, handle.children[0], eventStart, {
                        handleNumbers: [index],
                    });
                });
            }
            // Attach the tap event to the slider base.
            if (behaviour.tap) {
                attachEvent(actions.start, scope_Base, eventTap, {});
            }
            // Fire hover events
            if (behaviour.hover) {
                attachEvent(actions.move, scope_Base, eventHover, {
                    hover: true,
                });
            }
            // Make the range draggable.
            if (behaviour.drag) {
                scope_Connects.forEach(function (connect, index) {
                    if (connect === false || index === 0 || index === scope_Connects.length - 1) {
                        return;
                    }
                    var handleBefore = scope_Handles[index - 1];
                    var handleAfter = scope_Handles[index];
                    var eventHolders = [connect];
                    var handlesToDrag = [handleBefore, handleAfter];
                    var handleNumbersToDrag = [index - 1, index];
                    addClass(connect, options.cssClasses.draggable);
                    // When the range is fixed, the entire range can
                    // be dragged by the handles. The handle in the first
                    // origin will propagate the start event upward,
                    // but it needs to be bound manually on the other.
                    if (behaviour.fixed) {
                        eventHolders.push(handleBefore.children[0]);
                        eventHolders.push(handleAfter.children[0]);
                    }
                    if (behaviour.dragAll) {
                        handlesToDrag = scope_Handles;
                        handleNumbersToDrag = scope_HandleNumbers;
                    }
                    eventHolders.forEach(function (eventHolder) {
                        attachEvent(actions.start, eventHolder, eventStart, {
                            handles: handlesToDrag,
                            handleNumbers: handleNumbersToDrag,
                            connect: connect,
                        });
                    });
                });
            }
        }
        // Attach an event to this slider, possibly including a namespace
        function bindEvent(namespacedEvent, callback) {
            scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
            scope_Events[namespacedEvent].push(callback);
            // If the event bound is 'update,' fire it immediately for all handles.
            if (namespacedEvent.split(".")[0] === "update") {
                scope_Handles.forEach(function (a, index) {
                    fireEvent("update", index);
                });
            }
        }
        function isInternalNamespace(namespace) {
            return namespace === INTERNAL_EVENT_NS.aria || namespace === INTERNAL_EVENT_NS.tooltips;
        }
        // Undo attachment of event
        function removeEvent(namespacedEvent) {
            var event = namespacedEvent && namespacedEvent.split(".")[0];
            var namespace = event ? namespacedEvent.substring(event.length) : namespacedEvent;
            Object.keys(scope_Events).forEach(function (bind) {
                var tEvent = bind.split(".")[0];
                var tNamespace = bind.substring(tEvent.length);
                if ((!event || event === tEvent) && (!namespace || namespace === tNamespace)) {
                    // only delete protected internal event if intentional
                    if (!isInternalNamespace(tNamespace) || namespace === tNamespace) {
                        delete scope_Events[bind];
                    }
                }
            });
        }
        // External event handling
        function fireEvent(eventName, handleNumber, tap) {
            Object.keys(scope_Events).forEach(function (targetEvent) {
                var eventType = targetEvent.split(".")[0];
                if (eventName === eventType) {
                    scope_Events[targetEvent].forEach(function (callback) {
                        callback.call(
                        // Use the slider public API as the scope ('this')
                        scope_Self, 
                        // Return values as array, so arg_1[arg_2] is always valid.
                        scope_Values.map(options.format.to), 
                        // Handle index, 0 or 1
                        handleNumber, 
                        // Un-formatted slider values
                        scope_Values.slice(), 
                        // Event is fired by tap, true or false
                        tap || false, 
                        // Left offset of the handle, in relation to the slider
                        scope_Locations.slice(), 
                        // add the slider public API to an accessible parameter when this is unavailable
                        scope_Self);
                    });
                }
            });
        }
        // Split out the handle positioning logic so the Move event can use it, too
        function checkHandlePosition(reference, handleNumber, to, lookBackward, lookForward, getValue, smoothSteps) {
            var distance;
            // For sliders with multiple handles, limit movement to the other handle.
            // Apply the margin option by adding it to the handle positions.
            if (scope_Handles.length > 1 && !options.events.unconstrained) {
                if (lookBackward && handleNumber > 0) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.margin, false);
                    to = Math.max(to, distance);
                }
                if (lookForward && handleNumber < scope_Handles.length - 1) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.margin, true);
                    to = Math.min(to, distance);
                }
            }
            // The limit option has the opposite effect, limiting handles to a
            // maximum distance from another. Limit must be > 0, as otherwise
            // handles would be unmovable.
            if (scope_Handles.length > 1 && options.limit) {
                if (lookBackward && handleNumber > 0) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.limit, false);
                    to = Math.min(to, distance);
                }
                if (lookForward && handleNumber < scope_Handles.length - 1) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.limit, true);
                    to = Math.max(to, distance);
                }
            }
            // The padding option keeps the handles a certain distance from the
            // edges of the slider. Padding must be > 0.
            if (options.padding) {
                if (handleNumber === 0) {
                    distance = scope_Spectrum.getAbsoluteDistance(0, options.padding[0], false);
                    to = Math.max(to, distance);
                }
                if (handleNumber === scope_Handles.length - 1) {
                    distance = scope_Spectrum.getAbsoluteDistance(100, options.padding[1], true);
                    to = Math.min(to, distance);
                }
            }
            if (!smoothSteps) {
                to = scope_Spectrum.getStep(to);
            }
            // Limit percentage to the 0 - 100 range
            to = limit(to);
            // Return false if handle can't move
            if (to === reference[handleNumber] && !getValue) {
                return false;
            }
            return to;
        }
        // Uses slider orientation to create CSS rules. a = base value;
        function inRuleOrder(v, a) {
            var o = options.ort;
            return (o ? a : v) + ", " + (o ? v : a);
        }
        // Moves handle(s) by a percentage
        // (bool, % to move, [% where handle started, ...], [index in scope_Handles, ...])
        function moveHandles(upward, proposal, locations, handleNumbers, connect) {
            var proposals = locations.slice();
            // Store first handle now, so we still have it in case handleNumbers is reversed
            var firstHandle = handleNumbers[0];
            var smoothSteps = options.events.smoothSteps;
            var b = [!upward, upward];
            var f = [upward, !upward];
            // Copy handleNumbers so we don't change the dataset
            handleNumbers = handleNumbers.slice();
            // Check to see which handle is 'leading'.
            // If that one can't move the second can't either.
            if (upward) {
                handleNumbers.reverse();
            }
            // Step 1: get the maximum percentage that any of the handles can move
            if (handleNumbers.length > 1) {
                handleNumbers.forEach(function (handleNumber, o) {
                    var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o], false, smoothSteps);
                    // Stop if one of the handles can't move.
                    if (to === false) {
                        proposal = 0;
                    }
                    else {
                        proposal = to - proposals[handleNumber];
                        proposals[handleNumber] = to;
                    }
                });
            }
            // If using one handle, check backward AND forward
            else {
                b = f = [true];
            }
            var state = false;
            // Step 2: Try to set the handles with the found percentage
            handleNumbers.forEach(function (handleNumber, o) {
                state =
                    setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o], false, smoothSteps) || state;
            });
            // Step 3: If a handle moved, fire events
            if (state) {
                handleNumbers.forEach(function (handleNumber) {
                    fireEvent("update", handleNumber);
                    fireEvent("slide", handleNumber);
                });
                // If target is a connect, then fire drag event
                if (connect != undefined) {
                    fireEvent("drag", firstHandle);
                }
            }
        }
        // Takes a base value and an offset. This offset is used for the connect bar size.
        // In the initial design for this feature, the origin element was 1% wide.
        // Unfortunately, a rounding bug in Chrome makes it impossible to implement this feature
        // in this manner: https://bugs.chromium.org/p/chromium/issues/detail?id=798223
        function transformDirection(a, b) {
            return options.dir ? 100 - a - b : a;
        }
        // Updates scope_Locations and scope_Values, updates visual state
        function updateHandlePosition(handleNumber, to) {
            // Update locations.
            scope_Locations[handleNumber] = to;
            // Convert the value to the slider stepping/range.
            scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);
            var translation = transformDirection(to, 0) - scope_DirOffset;
            var translateRule = "translate(" + inRuleOrder(translation + "%", "0") + ")";
            scope_Handles[handleNumber].style[options.transformRule] = translateRule;
            updateConnect(handleNumber);
            updateConnect(handleNumber + 1);
        }
        // Handles before the slider middle are stacked later = higher,
        // Handles after the middle later is lower
        // [[7] [8] .......... | .......... [5] [4]
        function setZindex() {
            scope_HandleNumbers.forEach(function (handleNumber) {
                var dir = scope_Locations[handleNumber] > 50 ? -1 : 1;
                var zIndex = 3 + (scope_Handles.length + dir * handleNumber);
                scope_Handles[handleNumber].style.zIndex = String(zIndex);
            });
        }
        // Test suggested values and apply margin, step.
        // if exactInput is true, don't run checkHandlePosition, then the handle can be placed in between steps (#436)
        function setHandle(handleNumber, to, lookBackward, lookForward, exactInput, smoothSteps) {
            if (!exactInput) {
                to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false, smoothSteps);
            }
            if (to === false) {
                return false;
            }
            updateHandlePosition(handleNumber, to);
            return true;
        }
        // Updates style attribute for connect nodes
        function updateConnect(index) {
            // Skip connects set to false
            if (!scope_Connects[index]) {
                return;
            }
            var l = 0;
            var h = 100;
            if (index !== 0) {
                l = scope_Locations[index - 1];
            }
            if (index !== scope_Connects.length - 1) {
                h = scope_Locations[index];
            }
            // We use two rules:
            // 'translate' to change the left/top offset;
            // 'scale' to change the width of the element;
            // As the element has a width of 100%, a translation of 100% is equal to 100% of the parent (.noUi-base)
            var connectWidth = h - l;
            var translateRule = "translate(" + inRuleOrder(transformDirection(l, connectWidth) + "%", "0") + ")";
            var scaleRule = "scale(" + inRuleOrder(connectWidth / 100, "1") + ")";
            scope_Connects[index].style[options.transformRule] =
                translateRule + " " + scaleRule;
        }
        // Parses value passed to .set method. Returns current value if not parse-able.
        function resolveToValue(to, handleNumber) {
            // Setting with null indicates an 'ignore'.
            // Inputting 'false' is invalid.
            if (to === null || to === false || to === undefined) {
                return scope_Locations[handleNumber];
            }
            // If a formatted number was passed, attempt to decode it.
            if (typeof to === "number") {
                to = String(to);
            }
            to = options.format.from(to);
            if (to !== false) {
                to = scope_Spectrum.toStepping(to);
            }
            // If parsing the number failed, use the current value.
            if (to === false || isNaN(to)) {
                return scope_Locations[handleNumber];
            }
            return to;
        }
        // Set the slider value.
        function valueSet(input, fireSetEvent, exactInput) {
            var values = asArray(input);
            var isInit = scope_Locations[0] === undefined;
            // Event fires by default
            fireSetEvent = fireSetEvent === undefined ? true : fireSetEvent;
            // Animation is optional.
            // Make sure the initial values were set before using animated placement.
            if (options.animate && !isInit) {
                addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
            }
            // First pass, without lookAhead but with lookBackward. Values are set from left to right.
            scope_HandleNumbers.forEach(function (handleNumber) {
                setHandle(handleNumber, resolveToValue(values[handleNumber], handleNumber), true, false, exactInput);
            });
            var i = scope_HandleNumbers.length === 1 ? 0 : 1;
            // Spread handles evenly across the slider if the range has no size (min=max)
            if (isInit && scope_Spectrum.hasNoSize()) {
                exactInput = true;
                scope_Locations[0] = 0;
                if (scope_HandleNumbers.length > 1) {
                    var space_1 = 100 / (scope_HandleNumbers.length - 1);
                    scope_HandleNumbers.forEach(function (handleNumber) {
                        scope_Locations[handleNumber] = handleNumber * space_1;
                    });
                }
            }
            // Secondary passes. Now that all base values are set, apply constraints.
            // Iterate all handles to ensure constraints are applied for the entire slider (Issue #1009)
            for (; i < scope_HandleNumbers.length; ++i) {
                scope_HandleNumbers.forEach(function (handleNumber) {
                    setHandle(handleNumber, scope_Locations[handleNumber], true, true, exactInput);
                });
            }
            setZindex();
            scope_HandleNumbers.forEach(function (handleNumber) {
                fireEvent("update", handleNumber);
                // Fire the event only for handles that received a new value, as per #579
                if (values[handleNumber] !== null && fireSetEvent) {
                    fireEvent("set", handleNumber);
                }
            });
        }
        // Reset slider to initial values
        function valueReset(fireSetEvent) {
            valueSet(options.start, fireSetEvent);
        }
        // Set value for a single handle
        function valueSetHandle(handleNumber, value, fireSetEvent, exactInput) {
            // Ensure numeric input
            handleNumber = Number(handleNumber);
            if (!(handleNumber >= 0 && handleNumber < scope_HandleNumbers.length)) {
                throw new Error("noUiSlider: invalid handle number, got: " + handleNumber);
            }
            // Look both backward and forward, since we don't want this handle to "push" other handles (#960);
            // The exactInput argument can be used to ignore slider stepping (#436)
            setHandle(handleNumber, resolveToValue(value, handleNumber), true, true, exactInput);
            fireEvent("update", handleNumber);
            if (fireSetEvent) {
                fireEvent("set", handleNumber);
            }
        }
        // Get the slider value.
        function valueGet(unencoded) {
            if (unencoded === void 0) { unencoded = false; }
            if (unencoded) {
                // return a copy of the raw values
                return scope_Values.length === 1 ? scope_Values[0] : scope_Values.slice(0);
            }
            var values = scope_Values.map(options.format.to);
            // If only one handle is used, return a single value.
            if (values.length === 1) {
                return values[0];
            }
            return values;
        }
        // Removes classes from the root and empties it.
        function destroy() {
            // remove protected internal listeners
            removeEvent(INTERNAL_EVENT_NS.aria);
            removeEvent(INTERNAL_EVENT_NS.tooltips);
            Object.keys(options.cssClasses).forEach(function (key) {
                removeClass(scope_Target, options.cssClasses[key]);
            });
            while (scope_Target.firstChild) {
                scope_Target.removeChild(scope_Target.firstChild);
            }
            delete scope_Target.noUiSlider;
        }
        function getNextStepsForHandle(handleNumber) {
            var location = scope_Locations[handleNumber];
            var nearbySteps = scope_Spectrum.getNearbySteps(location);
            var value = scope_Values[handleNumber];
            var increment = nearbySteps.thisStep.step;
            var decrement = null;
            // If snapped, directly use defined step value
            if (options.snap) {
                return [
                    value - nearbySteps.stepBefore.startValue || null,
                    nearbySteps.stepAfter.startValue - value || null,
                ];
            }
            // If the next value in this step moves into the next step,
            // the increment is the start of the next step - the current value
            if (increment !== false) {
                if (value + increment > nearbySteps.stepAfter.startValue) {
                    increment = nearbySteps.stepAfter.startValue - value;
                }
            }
            // If the value is beyond the starting point
            if (value > nearbySteps.thisStep.startValue) {
                decrement = nearbySteps.thisStep.step;
            }
            else if (nearbySteps.stepBefore.step === false) {
                decrement = false;
            }
            // If a handle is at the start of a step, it always steps back into the previous step first
            else {
                decrement = value - nearbySteps.stepBefore.highestStep;
            }
            // Now, if at the slider edges, there is no in/decrement
            if (location === 100) {
                increment = null;
            }
            else if (location === 0) {
                decrement = null;
            }
            // As per #391, the comparison for the decrement step can have some rounding issues.
            var stepDecimals = scope_Spectrum.countStepDecimals();
            // Round per #391
            if (increment !== null && increment !== false) {
                increment = Number(increment.toFixed(stepDecimals));
            }
            if (decrement !== null && decrement !== false) {
                decrement = Number(decrement.toFixed(stepDecimals));
            }
            return [decrement, increment];
        }
        // Get the current step size for the slider.
        function getNextSteps() {
            return scope_HandleNumbers.map(getNextStepsForHandle);
        }
        // Updatable: margin, limit, padding, step, range, animate, snap
        function updateOptions(optionsToUpdate, fireSetEvent) {
            // Spectrum is created using the range, snap, direction and step options.
            // 'snap' and 'step' can be updated.
            // If 'snap' and 'step' are not passed, they should remain unchanged.
            var v = valueGet();
            var updateAble = [
                "margin",
                "limit",
                "padding",
                "range",
                "animate",
                "snap",
                "step",
                "format",
                "pips",
                "tooltips",
            ];
            // Only change options that we're actually passed to update.
            updateAble.forEach(function (name) {
                // Check for undefined. null removes the value.
                if (optionsToUpdate[name] !== undefined) {
                    originalOptions[name] = optionsToUpdate[name];
                }
            });
            var newOptions = testOptions(originalOptions);
            // Load new options into the slider state
            updateAble.forEach(function (name) {
                if (optionsToUpdate[name] !== undefined) {
                    options[name] = newOptions[name];
                }
            });
            scope_Spectrum = newOptions.spectrum;
            // Limit, margin and padding depend on the spectrum but are stored outside of it. (#677)
            options.margin = newOptions.margin;
            options.limit = newOptions.limit;
            options.padding = newOptions.padding;
            // Update pips, removes existing.
            if (options.pips) {
                pips(options.pips);
            }
            else {
                removePips();
            }
            // Update tooltips, removes existing.
            if (options.tooltips) {
                tooltips();
            }
            else {
                removeTooltips();
            }
            // Invalidate the current positioning so valueSet forces an update.
            scope_Locations = [];
            valueSet(isSet(optionsToUpdate.start) ? optionsToUpdate.start : v, fireSetEvent);
        }
        // Initialization steps
        function setupSlider() {
            // Create the base element, initialize HTML and set classes.
            // Add handles and connect elements.
            scope_Base = addSlider(scope_Target);
            addElements(options.connect, scope_Base);
            // Attach user events.
            bindSliderEvents(options.events);
            // Use the public value method to set the start values.
            valueSet(options.start);
            if (options.pips) {
                pips(options.pips);
            }
            if (options.tooltips) {
                tooltips();
            }
            aria();
        }
        setupSlider();
        var scope_Self = {
            destroy: destroy,
            steps: getNextSteps,
            on: bindEvent,
            off: removeEvent,
            get: valueGet,
            set: valueSet,
            setHandle: valueSetHandle,
            reset: valueReset,
            // Exposed for unit testing, don't use this in your application.
            __moveHandles: function (upward, proposal, handleNumbers) {
                moveHandles(upward, proposal, scope_Locations, handleNumbers);
            },
            options: originalOptions,
            updateOptions: updateOptions,
            target: scope_Target,
            removePips: removePips,
            removeTooltips: removeTooltips,
            getPositions: function () {
                return scope_Locations.slice();
            },
            getTooltips: function () {
                return scope_Tooltips;
            },
            getOrigins: function () {
                return scope_Handles;
            },
            pips: pips, // Issue #594
        };
        return scope_Self;
    }
    // Run the standard initializer
    function initialize(target, originalOptions) {
        if (!target || !target.nodeName) {
            throw new Error("noUiSlider: create requires a single element, got: " + target);
        }
        // Throw an error if the slider was already initialized.
        if (target.noUiSlider) {
            throw new Error("noUiSlider: Slider was already initialized.");
        }
        // Test the options and create the slider environment;
        var options = testOptions(originalOptions);
        var api = scope(target, options, originalOptions);
        target.noUiSlider = api;
        return api;
    }
    var nouislider = {
        // Exposed for unit testing, don't use this in your application.
        __spectrum: Spectrum,
        // A reference to the default classes, allows global changes.
        // Use the cssClasses option for changes to one slider.
        cssClasses: cssClasses,
        create: initialize,
    };

    exports.create = initialize;
    exports.cssClasses = cssClasses;
    exports["default"] = nouislider;

    Object.defineProperty(exports, '__esModule', { value: true });

}));


/***/ }),

/***/ "./node_modules/nouislider/dist/nouislider.css":
/*!*****************************************************!*\
  !*** ./node_modules/nouislider/dist/nouislider.css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js!./nouislider.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/nouislider/dist/nouislider.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/basket/basket.css":
/*!*******************************!*\
  !*** ./src/basket/basket.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_basket_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./basket.css */ "./node_modules/css-loader/dist/cjs.js!./src/basket/basket.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_basket_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_basket_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_basket_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_basket_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/products_field/product_selection/product_selection.css":
/*!********************************************************************!*\
  !*** ./src/products_field/product_selection/product_selection.css ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_product_selection_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./product_selection.css */ "./node_modules/css-loader/dist/cjs.js!./src/products_field/product_selection/product_selection.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_product_selection_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_product_selection_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_product_selection_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_product_selection_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/products_field/products_field.css":
/*!***********************************************!*\
  !*** ./src/products_field/products_field.css ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_products_field_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./products_field.css */ "./node_modules/css-loader/dist/cjs.js!./src/products_field/products_field.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_products_field_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_products_field_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_products_field_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_products_field_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/select_box/range-slider/range-slider.css":
/*!******************************************************!*\
  !*** ./src/select_box/range-slider/range-slider.css ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_range_slider_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./range-slider.css */ "./node_modules/css-loader/dist/cjs.js!./src/select_box/range-slider/range-slider.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_range_slider_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_range_slider_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_range_slider_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_range_slider_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/select_box/select_box.css":
/*!***************************************!*\
  !*** ./src/select_box/select_box.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_select_box_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./select_box.css */ "./node_modules/css-loader/dist/cjs.js!./src/select_box/select_box.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_select_box_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_select_box_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_select_box_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_select_box_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/basket/basket.ts":
/*!******************************!*\
  !*** ./src/basket/basket.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _products_field_products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../products_field/products */ "./src/products_field/products.ts");
/* harmony import */ var _basket_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basket.css */ "./src/basket/basket.css");


class Basket {
    constructor(basketField, basketScore, basketTotal) {
        this.basketField = basketField;
        this.basketScore = basketScore;
        this.basketTotal = basketTotal;
    }
    basketResult() {
        var _a, _b;
        const btnAdd = document.querySelectorAll(".btn_add");
        const wrapper = document.querySelector('.wrapper');
        const wrapperBasket = document.querySelector('.wrapper_basket');
        const basket = document.querySelector('.basket_circle');
        const onlineStore = document.querySelector('.online_store');
        const basketArrayResult = [];
        const basketScore = this.basketScore;
        const basketTotal = this.basketTotal;
        let totalScore = 0;
        // возврат из storage
        // перезагрузка
        onlineStore === null || onlineStore === void 0 ? void 0 : onlineStore.addEventListener('click', () => {
            location.reload();
        });
        // добавление товаров в корзину
        for (let i = 0; i < btnAdd.length; i++) {
            (_a = btnAdd[i]) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
                let numberId = btnAdd[i].dataset.btn;
                if (numberId) {
                    const nowId = +numberId;
                    if (basketArrayResult.find((x) => x.id === nowId)) {
                        basketArrayResult.splice(basketArrayResult.findIndex((x) => x.id === nowId), 1);
                        btnAdd[i].innerText = 'ADD TO CART';
                        totalScore -= _products_field_products__WEBPACK_IMPORTED_MODULE_0__.products.find((x) => x.id === nowId).price;
                    }
                    else {
                        basketArrayResult.push(_products_field_products__WEBPACK_IMPORTED_MODULE_0__.products.find((x) => x.id === nowId));
                        btnAdd[i].innerText = 'DROP FROM CART';
                        totalScore += _products_field_products__WEBPACK_IMPORTED_MODULE_0__.products.find((x) => x.id === nowId).price;
                    }
                    if (basketScore) {
                        basketScore.innerText = `${basketArrayResult.length}`;
                    }
                    if (basketTotal) {
                        basketTotal.innerText = totalScore.toString();
                    }
                    const arrStorage = [];
                    for (let i = 0; i < basketArrayResult.length; i++) {
                        arrStorage.push(basketArrayResult[i].id);
                    }
                    localStorage.setItem('basket', arrStorage.join());
                }
            });
        }
        if (localStorage.getItem('basket')) {
            const arrStorageId = (_b = localStorage.getItem('basket')) === null || _b === void 0 ? void 0 : _b.split(',');
            if (arrStorageId) {
                for (let i = 0; i < (arrStorageId === null || arrStorageId === void 0 ? void 0 : arrStorageId.length); i++) {
                    btnAdd[+arrStorageId[i]].click();
                }
            }
        }
        // корзина
        basket === null || basket === void 0 ? void 0 : basket.addEventListener('click', () => {
            wrapper === null || wrapper === void 0 ? void 0 : wrapper.classList.add('none');
            wrapperBasket === null || wrapperBasket === void 0 ? void 0 : wrapperBasket.classList.remove('none');
            const home = document.querySelector('.home');
            if (home) {
                home.classList.remove('none');
                home.addEventListener('click', () => {
                    wrapper === null || wrapper === void 0 ? void 0 : wrapper.classList.remove('none');
                    wrapperBasket === null || wrapperBasket === void 0 ? void 0 : wrapperBasket.classList.add('none');
                    home.classList.add('none');
                });
            }
            for (let i = 0; i < basketArrayResult.length; i++) {
                const wrapperProduct = document.createElement('div');
                wrapperProduct.setAttribute('class', 'wrapperProduct');
                const productName = document.createElement('div');
                productName.setAttribute('class', 'productName');
                const title = document.createElement('h2');
                title.setAttribute('class', 'title');
                const price = document.createElement('p');
                price.setAttribute('class', 'price');
                const rating = document.createElement('p');
                rating.setAttribute('class', 'rating');
                const stock = document.createElement('p');
                stock.setAttribute('class', 'stock');
                const description = document.createElement('p');
                description.setAttribute('class', 'description');
                const productInfo = document.createElement('div');
                productInfo.setAttribute('class', 'productInfo');
                const productFoto = document.createElement('div');
                productFoto.setAttribute('class', 'productFoto');
                const productFotoMin = document.createElement('div');
                productFotoMin.setAttribute('class', 'productFotoMin');
                const productFotoMax = document.createElement('div');
                productFotoMax.setAttribute('class', 'productFotoMax');
                let urlMaxFoto = basketArrayResult[i].images[0];
                productFotoMax.style.backgroundImage = `url(${urlMaxFoto})`;
                for (let f = 0; f < basketArrayResult[i].images.length - 1; f++) {
                    const productFotoItem = document.createElement('div');
                    productFotoItem.setAttribute('class', 'productFotoItem');
                    const url = basketArrayResult[i].images[f];
                    productFotoItem.style.backgroundImage = `url(${url})`;
                    productFotoMin.append(productFotoItem);
                    productFotoItem.addEventListener('click', () => {
                        productFotoMax.style.backgroundImage = `url(${url})`;
                    });
                }
                ;
                title.innerText = `${basketArrayResult[i].brand}  ${basketArrayResult[i].title}`;
                price.innerText = `Price: ${basketArrayResult[i].price}`;
                rating.innerText = `Rating: ${basketArrayResult[i].rating}`;
                stock.innerText = `Stock: ${basketArrayResult[i].stock}`;
                description.innerText = `Price: ${basketArrayResult[i].description}`;
                wrapperBasket === null || wrapperBasket === void 0 ? void 0 : wrapperBasket.append(wrapperProduct);
                wrapperProduct.append(productName, productInfo, productFoto);
                productName.append(title);
                productInfo.append(price, rating, stock, description);
                productFoto.append(productFotoMin, productFotoMax);
            }
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Basket);


/***/ }),

/***/ "./src/products_field/product_selection/product_selection.ts":
/*!*******************************************************************!*\
  !*** ./src/products_field/product_selection/product_selection.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _product_selection_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product_selection.css */ "./src/products_field/product_selection/product_selection.css");
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../products */ "./src/products_field/products.ts");


class ProductSelection {
    constructor(productsFieldSelection, resetFilters, productsField) {
        this.productsFieldSelection = productsFieldSelection;
        this.resetFilters = resetFilters;
        this.productsField = productsField;
    }
    productSelection() {
        var _a, _b, _c, _d, _e, _f, _g;
        const arrIdCategory = [];
        const arrIdBrand = [];
        const arrIdPrice = [];
        const arrIdStock = [];
        const allArrId = [arrIdCategory, arrIdBrand, arrIdPrice, arrIdStock];
        const arrId = [];
        const prodField = this.productsFieldSelection;
        const productsField = this.productsField;
        const arrIdSession = [];
        const elementInputsCategory = document.querySelectorAll('.category');
        const elementInputsBrand = document.querySelectorAll('.brand');
        const rangePrice = document.getElementById('priceInput');
        const rangeStock = document.getElementById('stockInput');
        const noProducts = document.createElement('div');
        // получение значений из storage
        if (sessionStorage.getItem('selectInput')) {
            const arrSelectInput = (_a = sessionStorage.getItem('selectInput')) === null || _a === void 0 ? void 0 : _a.split(',');
            for (let i = 0; i < elementInputsCategory.length; i++) {
                if (arrSelectInput) {
                    for (let n = 0; n < arrSelectInput.length; n++) {
                        if (elementInputsCategory[i].id === arrSelectInput[n]) {
                            elementInputsCategory[i].checked = true;
                            workInput(elementInputsCategory[i], arrIdCategory);
                        }
                    }
                }
            }
            for (let i = 0; i < elementInputsBrand.length; i++) {
                if (arrSelectInput) {
                    for (let n = 0; n < arrSelectInput.length; n++) {
                        if (elementInputsBrand[i].id === arrSelectInput[n]) {
                            elementInputsBrand[i].checked = true;
                            workInput(elementInputsBrand[i], arrIdBrand);
                        }
                    }
                }
            }
        }
        if (sessionStorage.getItem('sliderPrice')) {
            const arrStorageValuePrice = (_b = sessionStorage.getItem('sliderPrice')) === null || _b === void 0 ? void 0 : _b.split(',');
            if (arrStorageValuePrice) {
                (_c = rangePrice.noUiSlider) === null || _c === void 0 ? void 0 : _c.set([+arrStorageValuePrice[0], +arrStorageValuePrice[1]]);
                workSlider(arrStorageValuePrice, arrIdPrice, 'price', 'sliderPrice');
            }
        }
        if (sessionStorage.getItem('sliderStock')) {
            const arrStorageValueStock = (_d = sessionStorage.getItem('sliderStock')) === null || _d === void 0 ? void 0 : _d.split(',');
            if (arrStorageValueStock) {
                (_e = rangeStock.noUiSlider) === null || _e === void 0 ? void 0 : _e.set([+arrStorageValueStock[0], +arrStorageValueStock[1]]);
                workSlider(arrStorageValueStock, arrIdStock, 'stock', 'sliderStock');
            }
        }
        // функция сброса поля выбора
        const reset = this.resetFilters;
        function resetFilters() {
            reset === null || reset === void 0 ? void 0 : reset.addEventListener('click', function () {
                var _a, _b;
                elementInputsCategory.forEach((x) => x.checked = false);
                elementInputsBrand.forEach((x) => x.checked = false);
                (_a = rangePrice.noUiSlider) === null || _a === void 0 ? void 0 : _a.reset();
                (_b = rangeStock.noUiSlider) === null || _b === void 0 ? void 0 : _b.reset();
                arrId.splice(0);
                prodField.forEach((x) => x.classList.remove('none'));
                arrIdSession.splice(0);
                sessionStorage.clear();
            });
        }
        resetFilters();
        // создание массивов по категориям
        for (let i = 0; i < elementInputsCategory.length; i++) {
            elementInputsCategory[i].onclick = function () {
                workInput(elementInputsCategory[i], arrIdCategory);
            };
        }
        for (let i = 0; i < elementInputsBrand.length; i++) {
            elementInputsBrand[i].onclick = function () {
                workInput(elementInputsBrand[i], arrIdBrand);
            };
        }
        // функция input
        function workInput(arr, arrId) {
            createArrInput(arr, arrId);
            createArrId();
            createProductField();
            if (arrIdSession.includes((arr.id))) {
                arrIdSession.splice(arrIdSession.indexOf(arr.id), 1);
                sessionStorage.setItem('selectInput', arrIdSession.join());
            }
            else {
                arrIdSession.push(arr.id);
                sessionStorage.setItem('selectInput', arrIdSession.join());
            }
        }
        if (rangePrice) {
            (_f = rangePrice.noUiSlider) === null || _f === void 0 ? void 0 : _f.on('change', (values) => {
                workSlider(values, arrIdPrice, 'price', 'sliderPrice');
            });
        }
        if (rangeStock) {
            (_g = rangeStock.noUiSlider) === null || _g === void 0 ? void 0 : _g.on('change', (values) => {
                workSlider(values, arrIdStock, 'stock', 'sliderStock');
            });
        }
        // функция слайдера
        function workSlider(value, arr, name, nameStorage) {
            arr.splice(0);
            createArrSlider(value, arr, name);
            createArrId();
            createProductField();
            sessionStorage.setItem(nameStorage, `${value[0]},${value[1]}`);
        }
        // функция создания массивов (отслеживает 'checkbox')
        function createArrInput(itemArr, arr) {
            var _a, _b;
            if (itemArr.checked) {
                const arrIdPlus = (_a = itemArr.dataset.id) === null || _a === void 0 ? void 0 : _a.split(',');
                if (arrIdPlus !== undefined) {
                    for (let j = 0; j < arrIdPlus.length; j++) {
                        if (!(arr.includes(+arrIdPlus[j]))) {
                            arr.push(+arrIdPlus[j]);
                        }
                    }
                }
            }
            else {
                const arrIdMinus = (_b = itemArr.dataset.id) === null || _b === void 0 ? void 0 : _b.split(',');
                if (arrIdMinus !== undefined) {
                    for (let n = 0; n < arrIdMinus.length; n++) {
                        arr.splice(arr.indexOf(+arrIdMinus[n]), 1);
                    }
                }
            }
        }
        // функция создания массивов (отслеживает слайдер)
        function createArrSlider(values, arr, name) {
            for (let i = 0; i < _products__WEBPACK_IMPORTED_MODULE_1__.products.length; i++) {
                if (+values[0] <= _products__WEBPACK_IMPORTED_MODULE_1__.products[i][name] && _products__WEBPACK_IMPORTED_MODULE_1__.products[i][name] <= +values[1]) {
                    arr.push(_products__WEBPACK_IMPORTED_MODULE_1__.products[i].id);
                }
            }
        }
        // создание финального массива выбора продуктов
        function createArrId() {
            arrId.splice(0);
            for (let i = 0; i < allArrId.length; i++) {
                if (allArrId[i].length) {
                    if (arrId.length === 0) {
                        allArrId[i].forEach((x) => arrId.push(x));
                    }
                    else {
                        const arr = [];
                        for (let j = 0; j < arrId.length; j++) {
                            if (allArrId[i].includes(arrId[j])) {
                                arr.push(arrId[j]);
                            }
                        }
                        arrId.splice(0);
                        for (let i = arr.length - 1; i >= 0; i--) {
                            arrId.push(arr[i]);
                        }
                        if (arrId.length === 0) {
                            arrId.push(0);
                        }
                    }
                }
            }
        }
        // функция построения поля продуков
        noProducts.setAttribute('class', 'noProducts');
        noProducts.innerText = 'No products found!';
        noProducts.classList.add('none');
        productsField === null || productsField === void 0 ? void 0 : productsField.append(noProducts);
        function createProductField() {
            prodField.forEach((x) => x.classList.add('none'));
            if (arrId[0] === 0) {
                noProducts.classList.remove('none');
            }
            else {
                noProducts.classList.add('none');
                if (arrId.length) {
                    for (let n = 0; n < arrId.length; n++) {
                        prodField[arrId[n] - 1].classList.remove('none');
                    }
                }
                else {
                    prodField.forEach((x) => x.classList.remove('none'));
                }
            }
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductSelection);


/***/ }),

/***/ "./src/products_field/products.ts":
/*!****************************************!*\
  !*** ./src/products_field/products.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "products": () => (/* binding */ products)
/* harmony export */ });
const products = [{ "id": 1, "title": "iPhone 9", "description": "An apple mobile which is nothing like apple", "price": 549, "discountPercentage": 12.96, "rating": 4.69, "stock": 94, "brand": "Apple", "category": "smartphones", "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/1/1.jpg", "https://i.dummyjson.com/data/products/1/3.jpg", "https://i.dummyjson.com/data/products/1/4.jpg", "https://i.dummyjson.com/data/products/1/thumbnail.jpg"] }, { "id": 2, "title": "iPhone X", "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...", "price": 899, "discountPercentage": 17.94, "rating": 4.44, "stock": 34, "brand": "Apple", "category": "smartphones", "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/2/1.jpg", "https://i.dummyjson.com/data/products/2/2.jpg", "https://i.dummyjson.com/data/products/2/3.jpg", "https://i.dummyjson.com/data/products/2/thumbnail.jpg"] }, { "id": 3, "title": "Samsung Universe 9", "description": "Samsung's new variant which goes beyond Galaxy to the Universe", "price": 1249, "discountPercentage": 15.46, "rating": 4.09, "stock": 36, "brand": "Samsung", "category": "smartphones", "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/3/1.jpg"] }, { "id": 4, "title": "OPPOF19", "description": "OPPO F19 is officially announced on April 2021.", "price": 280, "discountPercentage": 17.91, "rating": 4.3, "stock": 123, "brand": "OPPO", "category": "smartphones", "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/4/1.jpg", "https://i.dummyjson.com/data/products/4/2.jpg", "https://i.dummyjson.com/data/products/4/3.jpg", "https://i.dummyjson.com/data/products/4/4.jpg", "https://i.dummyjson.com/data/products/4/thumbnail.jpg"] }, { "id": 5, "title": "Huawei P30", "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.", "price": 499, "discountPercentage": 10.58, "rating": 4.09, "stock": 32, "brand": "Huawei", "category": "smartphones", "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/5/1.jpg", "https://i.dummyjson.com/data/products/5/2.jpg", "https://i.dummyjson.com/data/products/5/3.jpg"] }, { "id": 6, "title": "MacBook Pro", "description": "MacBook Pro 2021 with mini-LED display may launch between September, November", "price": 1749, "discountPercentage": 11.02, "rating": 4.57, "stock": 83, "brand": "APPle", "category": "laptops", "thumbnail": "https://i.dummyjson.com/data/products/6/thumbnail.png", "images": ["https://i.dummyjson.com/data/products/6/1.png", "https://i.dummyjson.com/data/products/6/2.jpg", "https://i.dummyjson.com/data/products/6/3.png", "https://i.dummyjson.com/data/products/6/4.jpg"] }, { "id": 7, "title": "Samsung Galaxy Book", "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched", "price": 1499, "discountPercentage": 4.15, "rating": 4.25, "stock": 50, "brand": "Samsung", "category": "laptops", "thumbnail": "https://i.dummyjson.com/data/products/7/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/7/1.jpg", "https://i.dummyjson.com/data/products/7/2.jpg", "https://i.dummyjson.com/data/products/7/3.jpg", "https://i.dummyjson.com/data/products/7/thumbnail.jpg"] }, { "id": 8, "title": "Microsoft Surface Laptop 4", "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.", "price": 1499, "discountPercentage": 10.23, "rating": 4.43, "stock": 68, "brand": "Microsoft Surface", "category": "laptops", "thumbnail": "https://i.dummyjson.com/data/products/8/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/8/1.jpg", "https://i.dummyjson.com/data/products/8/2.jpg", "https://i.dummyjson.com/data/products/8/3.jpg", "https://i.dummyjson.com/data/products/8/4.jpg", "https://i.dummyjson.com/data/products/8/thumbnail.jpg"] }, { "id": 9, "title": "Infinix INBOOK", "description": "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty", "price": 1099, "discountPercentage": 11.83, "rating": 4.54, "stock": 96, "brand": "Infinix", "category": "laptops", "thumbnail": "https://i.dummyjson.com/data/products/9/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/9/1.jpg", "https://i.dummyjson.com/data/products/9/2.png", "https://i.dummyjson.com/data/products/9/3.png", "https://i.dummyjson.com/data/products/9/4.jpg", "https://i.dummyjson.com/data/products/9/thumbnail.jpg"] }, { "id": 10, "title": "HP Pavilion 15-DK1056WM", "description": "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10", "price": 1099, "discountPercentage": 6.18, "rating": 4.43, "stock": 89, "brand": "HP Pavilion", "category": "laptops", "thumbnail": "https://i.dummyjson.com/data/products/10/thumbnail.jpeg", "images": ["https://i.dummyjson.com/data/products/10/1.jpg", "https://i.dummyjson.com/data/products/10/2.jpg", "https://i.dummyjson.com/data/products/10/3.jpg", "https://i.dummyjson.com/data/products/10/thumbnail.jpeg"] }, { "id": 11, "title": "perfume Oil", "description": "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil", "price": 13, "discountPercentage": 8.4, "rating": 4.26, "stock": 65, "brand": "Impression of Acqua Di Gio", "category": "fragrances", "thumbnail": "https://i.dummyjson.com/data/products/11/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/11/1.jpg", "https://i.dummyjson.com/data/products/11/2.jpg", "https://i.dummyjson.com/data/products/11/3.jpg", "https://i.dummyjson.com/data/products/11/thumbnail.jpg"] }, { "id": 12, "title": "Brown Perfume", "description": "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml", "price": 40, "discountPercentage": 15.66, "rating": 4, "stock": 52, "brand": "Royal_Mirage", "category": "fragrances", "thumbnail": "https://i.dummyjson.com/data/products/12/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/12/1.jpg", "https://i.dummyjson.com/data/products/12/2.jpg", "https://i.dummyjson.com/data/products/12/3.png", "https://i.dummyjson.com/data/products/12/4.jpg", "https://i.dummyjson.com/data/products/12/thumbnail.jpg"] }, { "id": 13, "title": "Fog Scent Xpressio Perfume", "description": "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men", "price": 13, "discountPercentage": 8.14, "rating": 4.59, "stock": 61, "brand": "Fog Scent Xpressio", "category": "fragrances", "thumbnail": "https://i.dummyjson.com/data/products/13/thumbnail.webp", "images": ["https://i.dummyjson.com/data/products/13/1.jpg", "https://i.dummyjson.com/data/products/13/2.png", "https://i.dummyjson.com/data/products/13/3.jpg", "https://i.dummyjson.com/data/products/13/4.jpg", "https://i.dummyjson.com/data/products/13/thumbnail.webp"] }, { "id": 14, "title": "Non-Alcoholic Concentrated Perfume Oil", "description": "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil", "price": 120, "discountPercentage": 15.6, "rating": 4.21, "stock": 114, "brand": "Al Munakh", "category": "fragrances", "thumbnail": "https://i.dummyjson.com/data/products/14/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/14/1.jpg", "https://i.dummyjson.com/data/products/14/2.jpg", "https://i.dummyjson.com/data/products/14/3.jpg", "https://i.dummyjson.com/data/products/14/thumbnail.jpg"] }, { "id": 15, "title": "Eau De Perfume Spray", "description": "Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality", "price": 30, "discountPercentage": 10.99, "rating": 4.7, "stock": 105, "brand": "Lord - Al-Rehab", "category": "fragrances", "thumbnail": "https://i.dummyjson.com/data/products/15/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/15/1.jpg", "https://i.dummyjson.com/data/products/15/2.jpg", "https://i.dummyjson.com/data/products/15/3.jpg", "https://i.dummyjson.com/data/products/15/4.jpg", "https://i.dummyjson.com/data/products/15/thumbnail.jpg"] }, { "id": 16, "title": "Hyaluronic Acid Serum", "description": "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid", "price": 19, "discountPercentage": 13.31, "rating": 4.83, "stock": 110, "brand": "L'Oreal Paris", "category": "skincare", "thumbnail": "https://i.dummyjson.com/data/products/16/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/16/1.png", "https://i.dummyjson.com/data/products/16/2.webp", "https://i.dummyjson.com/data/products/16/3.jpg", "https://i.dummyjson.com/data/products/16/4.jpg", "https://i.dummyjson.com/data/products/16/thumbnail.jpg"] }, { "id": 17, "title": "Tree Oil 30ml", "description": "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,", "price": 12, "discountPercentage": 4.09, "rating": 4.52, "stock": 78, "brand": "Hemani Tea", "category": "skincare", "thumbnail": "https://i.dummyjson.com/data/products/17/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/17/1.jpg", "https://i.dummyjson.com/data/products/17/2.jpg", "https://i.dummyjson.com/data/products/17/3.jpg", "https://i.dummyjson.com/data/products/17/thumbnail.jpg"] }, { "id": 18, "title": "Oil Free Moisturizer 100ml", "description": "Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.", "price": 40, "discountPercentage": 13.1, "rating": 4.56, "stock": 88, "brand": "Dermive", "category": "skincare", "thumbnail": "https://i.dummyjson.com/data/products/18/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/18/1.jpg", "https://i.dummyjson.com/data/products/18/2.jpg", "https://i.dummyjson.com/data/products/18/3.jpg", "https://i.dummyjson.com/data/products/18/4.jpg", "https://i.dummyjson.com/data/products/18/thumbnail.jpg"] }, { "id": 19, "title": "Skin Beauty Serum.", "description": "Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m", "price": 46, "discountPercentage": 10.68, "rating": 4.42, "stock": 54, "brand": "ROREC White Rice", "category": "skincare", "thumbnail": "https://i.dummyjson.com/data/products/19/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/19/1.jpg", "https://i.dummyjson.com/data/products/19/2.jpg", "https://i.dummyjson.com/data/products/19/3.png", "https://i.dummyjson.com/data/products/19/thumbnail.jpg"] }, { "id": 20, "title": "Freckle Treatment Cream- 15gm", "description": "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.", "price": 70, "discountPercentage": 16.99, "rating": 4.06, "stock": 140, "brand": "Fair & Clear", "category": "skincare", "thumbnail": "https://i.dummyjson.com/data/products/20/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/20/1.jpg", "https://i.dummyjson.com/data/products/20/2.jpg", "https://i.dummyjson.com/data/products/20/3.jpg", "https://i.dummyjson.com/data/products/20/4.jpg", "https://i.dummyjson.com/data/products/20/thumbnail.jpg"] }, { "id": 21, "title": "- Daal Masoor 500 grams", "description": "Fine quality Branded Product Keep in a cool and dry place", "price": 20, "discountPercentage": 4.81, "rating": 4.44, "stock": 133, "brand": "Saaf & Khaas", "category": "groceries", "thumbnail": "https://i.dummyjson.com/data/products/21/thumbnail.png", "images": ["https://i.dummyjson.com/data/products/21/1.png", "https://i.dummyjson.com/data/products/21/2.jpg", "https://i.dummyjson.com/data/products/21/3.jpg"] }, { "id": 22, "title": "Elbow Macaroni - 400 gm", "description": "Product details of Bake Parlor Big Elbow Macaroni - 400 gm", "price": 14, "discountPercentage": 15.58, "rating": 4.57, "stock": 146, "brand": "Bake Parlor Big", "category": "groceries", "thumbnail": "https://i.dummyjson.com/data/products/22/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/22/1.jpg", "https://i.dummyjson.com/data/products/22/2.jpg", "https://i.dummyjson.com/data/products/22/3.jpg"] }, { "id": 23, "title": "Orange Essence Food Flavou", "description": "Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item", "price": 14, "discountPercentage": 8.04, "rating": 4.85, "stock": 26, "brand": "Baking Food Items", "category": "groceries", "thumbnail": "https://i.dummyjson.com/data/products/23/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/23/1.jpg", "https://i.dummyjson.com/data/products/23/2.jpg", "https://i.dummyjson.com/data/products/23/3.jpg", "https://i.dummyjson.com/data/products/23/4.jpg", "https://i.dummyjson.com/data/products/23/thumbnail.jpg"] }, { "id": 24, "title": "cereals muesli fruit nuts", "description": "original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji", "price": 46, "discountPercentage": 16.8, "rating": 4.94, "stock": 113, "brand": "fauji", "category": "groceries", "thumbnail": "https://i.dummyjson.com/data/products/24/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/24/1.jpg", "https://i.dummyjson.com/data/products/24/2.jpg", "https://i.dummyjson.com/data/products/24/3.jpg", "https://i.dummyjson.com/data/products/24/4.jpg", "https://i.dummyjson.com/data/products/24/thumbnail.jpg"] }, { "id": 25, "title": "Gulab Powder 50 Gram", "description": "Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds", "price": 70, "discountPercentage": 13.58, "rating": 4.87, "stock": 47, "brand": "Dry Rose", "category": "groceries", "thumbnail": "https://i.dummyjson.com/data/products/25/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/25/1.png", "https://i.dummyjson.com/data/products/25/2.jpg", "https://i.dummyjson.com/data/products/25/3.png", "https://i.dummyjson.com/data/products/25/4.jpg", "https://i.dummyjson.com/data/products/25/thumbnail.jpg"] }, { "id": 26, "title": "Plant Hanger For Home", "description": "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf", "price": 41, "discountPercentage": 17.86, "rating": 4.08, "stock": 131, "brand": "Boho Decor", "category": "home-decoration", "thumbnail": "https://i.dummyjson.com/data/products/26/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/26/1.jpg", "https://i.dummyjson.com/data/products/26/2.jpg", "https://i.dummyjson.com/data/products/26/3.jpg", "https://i.dummyjson.com/data/products/26/4.jpg", "https://i.dummyjson.com/data/products/26/5.jpg", "https://i.dummyjson.com/data/products/26/thumbnail.jpg"] }, { "id": 27, "title": "Flying Wooden Bird", "description": "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm", "price": 51, "discountPercentage": 15.58, "rating": 4.41, "stock": 17, "brand": "Flying Wooden", "category": "home-decoration", "thumbnail": "https://i.dummyjson.com/data/products/27/thumbnail.webp", "images": ["https://i.dummyjson.com/data/products/27/1.jpg", "https://i.dummyjson.com/data/products/27/2.jpg", "https://i.dummyjson.com/data/products/27/3.jpg", "https://i.dummyjson.com/data/products/27/4.jpg", "https://i.dummyjson.com/data/products/27/thumbnail.webp"] }, { "id": 28, "title": "3D Embellishment Art Lamp", "description": "3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)", "price": 20, "discountPercentage": 16.49, "rating": 4.82, "stock": 54, "brand": "LED Lights", "category": "home-decoration", "thumbnail": "https://i.dummyjson.com/data/products/28/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/28/1.jpg", "https://i.dummyjson.com/data/products/28/2.jpg", "https://i.dummyjson.com/data/products/28/3.png", "https://i.dummyjson.com/data/products/28/4.jpg", "https://i.dummyjson.com/data/products/28/thumbnail.jpg"] }, { "id": 29, "title": "Handcraft Chinese style", "description": "Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate", "price": 60, "discountPercentage": 15.34, "rating": 4.44, "stock": 7, "brand": "luxury palace", "category": "home-decoration", "thumbnail": "https://i.dummyjson.com/data/products/29/thumbnail.webp", "images": ["https://i.dummyjson.com/data/products/29/1.jpg", "https://i.dummyjson.com/data/products/29/2.jpg", "https://i.dummyjson.com/data/products/29/3.webp", "https://i.dummyjson.com/data/products/29/4.webp", "https://i.dummyjson.com/data/products/29/thumbnail.webp"] }, { "id": 30, "title": "Key Holder", "description": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality", "price": 30, "discountPercentage": 2.92, "rating": 4.92, "stock": 54, "brand": "Golden", "category": "home-decoration", "thumbnail": "https://i.dummyjson.com/data/products/30/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/30/1.jpg", "https://i.dummyjson.com/data/products/30/2.jpg", "https://i.dummyjson.com/data/products/30/3.jpg", "https://i.dummyjson.com/data/products/30/thumbnail.jpg"] }, { "id": 31, "title": "Mornadi Velvet Bed", "description": "Mornadi Velvet Bed Base with Headboard Slats Support Classic Style Bedroom Furniture Bed Set", "price": 40, "discountPercentage": 17, "rating": 4.16, "stock": 140, "brand": "Furniture Bed Set", "category": "furniture", "thumbnail": "https://i.dummyjson.com/data/products/31/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/31/1.jpg", "https://i.dummyjson.com/data/products/31/2.jpg", "https://i.dummyjson.com/data/products/31/3.jpg", "https://i.dummyjson.com/data/products/31/4.jpg", "https://i.dummyjson.com/data/products/31/thumbnail.jpg"] }, { "id": 32, "title": "Sofa for Coffe Cafe", "description": "Ratttan Outdoor furniture Set Waterproof  Rattan Sofa for Coffe Cafe", "price": 50, "discountPercentage": 15.59, "rating": 4.74, "stock": 30, "brand": "Ratttan Outdoor", "category": "furniture", "thumbnail": "https://i.dummyjson.com/data/products/32/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/32/1.jpg", "https://i.dummyjson.com/data/products/32/2.jpg", "https://i.dummyjson.com/data/products/32/3.jpg", "https://i.dummyjson.com/data/products/32/thumbnail.jpg"] }, { "id": 33, "title": "3 Tier Corner Shelves", "description": "3 Tier Corner Shelves | 3 PCs Wall Mount Kitchen Shelf | Floating Bedroom Shelf", "price": 700, "discountPercentage": 17, "rating": 4.31, "stock": 106, "brand": "Kitchen Shelf", "category": "furniture", "thumbnail": "https://i.dummyjson.com/data/products/33/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/33/1.jpg", "https://i.dummyjson.com/data/products/33/2.jpg", "https://i.dummyjson.com/data/products/33/3.jpg", "https://i.dummyjson.com/data/products/33/4.jpg", "https://i.dummyjson.com/data/products/33/thumbnail.jpg"] }, { "id": 34, "title": "Plastic Table", "description": "V﻿ery good quality plastic table for multi purpose now in reasonable price", "price": 50, "discountPercentage": 4, "rating": 4.01, "stock": 136, "brand": "Multi Purpose", "category": "furniture", "thumbnail": "https://i.dummyjson.com/data/products/34/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/34/1.jpg", "https://i.dummyjson.com/data/products/34/2.jpg", "https://i.dummyjson.com/data/products/34/3.jpg", "https://i.dummyjson.com/data/products/34/4.jpg", "https://i.dummyjson.com/data/products/34/thumbnail.jpg"] }, { "id": 35, "title": "3 DOOR PORTABLE", "description": "Material: Stainless Steel and Fabric  Item Size: 110 cm x 45 cm x 175 cm Package Contents: 1 Storage Wardrobe", "price": 41, "discountPercentage": 7.98, "rating": 4.06, "stock": 68, "brand": "AmnaMart", "category": "furniture", "thumbnail": "https://i.dummyjson.com/data/products/35/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/35/1.jpg", "https://i.dummyjson.com/data/products/35/2.jpg", "https://i.dummyjson.com/data/products/35/3.jpg", "https://i.dummyjson.com/data/products/35/4.jpg", "https://i.dummyjson.com/data/products/35/thumbnail.jpg"] }, { "id": 36, "title": "Sleeve Shirt Womens", "description": "Cotton Solid Color Professional Wear Sleeve Shirt Womens Work Blouses Wholesale Clothing Casual Plain Custom Top OEM Customized", "price": 90, "discountPercentage": 10.89, "rating": 4.26, "stock": 39, "brand": "Professional Wear", "category": "tops", "thumbnail": "https://i.dummyjson.com/data/products/36/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/36/1.jpg", "https://i.dummyjson.com/data/products/36/2.webp", "https://i.dummyjson.com/data/products/36/3.webp", "https://i.dummyjson.com/data/products/36/4.jpg", "https://i.dummyjson.com/data/products/36/thumbnail.jpg"] }, { "id": 37, "title": "ank Tops for Womens/Girls", "description": "PACK OF 3 CAMISOLES ,VERY COMFORTABLE SOFT COTTON STUFF, COMFORTABLE IN ALL FOUR SEASONS", "price": 50, "discountPercentage": 12.05, "rating": 4.52, "stock": 107, "brand": "Soft Cotton", "category": "tops", "thumbnail": "https://i.dummyjson.com/data/products/37/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/37/1.jpg", "https://i.dummyjson.com/data/products/37/2.jpg", "https://i.dummyjson.com/data/products/37/3.jpg", "https://i.dummyjson.com/data/products/37/4.jpg", "https://i.dummyjson.com/data/products/37/thumbnail.jpg"] }, { "id": 38, "title": "sublimation plain kids tank", "description": "sublimation plain kids tank tops wholesale", "price": 100, "discountPercentage": 11.12, "rating": 4.8, "stock": 20, "brand": "Soft Cotton", "category": "tops", "thumbnail": "https://i.dummyjson.com/data/products/38/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/38/1.png", "https://i.dummyjson.com/data/products/38/2.jpg", "https://i.dummyjson.com/data/products/38/3.jpg", "https://i.dummyjson.com/data/products/38/4.jpg"] }, { "id": 39, "title": "Women Sweaters Wool", "description": "2021 Custom Winter Fall Zebra Knit Crop Top Women Sweaters Wool Mohair Cos Customize Crew Neck Women' S Crop Top Sweater", "price": 600, "discountPercentage": 17.2, "rating": 4.55, "stock": 55, "brand": "Top Sweater", "category": "tops", "thumbnail": "https://i.dummyjson.com/data/products/39/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/39/1.jpg", "https://i.dummyjson.com/data/products/39/2.jpg", "https://i.dummyjson.com/data/products/39/3.jpg", "https://i.dummyjson.com/data/products/39/4.jpg", "https://i.dummyjson.com/data/products/39/thumbnail.jpg"] }, { "id": 40, "title": "women winter clothes", "description": "women winter clothes thick fleece hoodie top with sweat pantjogger women sweatsuit set joggers pants two piece pants set", "price": 57, "discountPercentage": 13.39, "rating": 4.91, "stock": 84, "brand": "Top Sweater", "category": "tops", "thumbnail": "https://i.dummyjson.com/data/products/40/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/40/1.jpg", "https://i.dummyjson.com/data/products/40/2.jpg"] }, { "id": 41, "title": "NIGHT SUIT", "description": "NIGHT SUIT RED MICKY MOUSE..  For Girls. Fantastic Suits.", "price": 55, "discountPercentage": 15.05, "rating": 4.65, "stock": 21, "brand": "RED MICKY MOUSE..", "category": "womens-dresses", "thumbnail": "https://i.dummyjson.com/data/products/41/thumbnail.webp", "images": ["https://i.dummyjson.com/data/products/41/1.jpg", "https://i.dummyjson.com/data/products/41/2.webp", "https://i.dummyjson.com/data/products/41/3.jpg", "https://i.dummyjson.com/data/products/41/4.jpg", "https://i.dummyjson.com/data/products/41/thumbnail.webp"] }, { "id": 42, "title": "Stiched Kurta plus trouser", "description": "FABRIC: LILEIN CHEST: 21 LENGHT: 37 TROUSER: (38) :ARABIC LILEIN", "price": 80, "discountPercentage": 15.37, "rating": 4.05, "stock": 148, "brand": "Digital Printed", "category": "womens-dresses", "thumbnail": "https://i.dummyjson.com/data/products/42/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/42/1.png", "https://i.dummyjson.com/data/products/42/2.png", "https://i.dummyjson.com/data/products/42/3.png", "https://i.dummyjson.com/data/products/42/4.jpg", "https://i.dummyjson.com/data/products/42/thumbnail.jpg"] }, { "id": 43, "title": "frock gold printed", "description": "Ghazi fabric long frock gold printed ready to wear stitched collection (G992)", "price": 600, "discountPercentage": 15.55, "rating": 4.31, "stock": 150, "brand": "Ghazi Fabric", "category": "womens-dresses", "thumbnail": "https://i.dummyjson.com/data/products/43/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/43/1.jpg", "https://i.dummyjson.com/data/products/43/2.jpg", "https://i.dummyjson.com/data/products/43/3.jpg", "https://i.dummyjson.com/data/products/43/4.jpg", "https://i.dummyjson.com/data/products/43/thumbnail.jpg"] }, { "id": 44, "title": "Ladies Multicolored Dress", "description": "This classy shirt for women gives you a gorgeous look on everyday wear and specially for semi-casual wears.", "price": 79, "discountPercentage": 16.88, "rating": 4.03, "stock": 2, "brand": "Ghazi Fabric", "category": "womens-dresses", "thumbnail": "https://i.dummyjson.com/data/products/44/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/44/1.jpg", "https://i.dummyjson.com/data/products/44/2.jpg", "https://i.dummyjson.com/data/products/44/3.jpg", "https://i.dummyjson.com/data/products/44/4.jpg", "https://i.dummyjson.com/data/products/44/thumbnail.jpg"] }, { "id": 45, "title": "Malai Maxi Dress", "description": "Ready to wear, Unique design according to modern standard fashion, Best fitting ,Imported stuff", "price": 50, "discountPercentage": 5.07, "rating": 4.67, "stock": 96, "brand": "IELGY", "category": "womens-dresses", "thumbnail": "https://i.dummyjson.com/data/products/45/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/45/1.jpg", "https://i.dummyjson.com/data/products/45/2.webp", "https://i.dummyjson.com/data/products/45/3.jpg", "https://i.dummyjson.com/data/products/45/4.jpg", "https://i.dummyjson.com/data/products/45/thumbnail.jpg"] }, { "id": 46, "title": "women's shoes", "description": "Close: Lace, Style with bottom: Increased inside, Sole Material: Rubber", "price": 40, "discountPercentage": 16.96, "rating": 4.14, "stock": 72, "brand": "IELGY fashion", "category": "womens-shoes", "thumbnail": "https://i.dummyjson.com/data/products/46/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/46/1.webp", "https://i.dummyjson.com/data/products/46/2.jpg", "https://i.dummyjson.com/data/products/46/3.jpg", "https://i.dummyjson.com/data/products/46/4.jpg", "https://i.dummyjson.com/data/products/46/thumbnail.jpg"] }, { "id": 47, "title": "Sneaker shoes", "description": "Synthetic Leather Casual Sneaker shoes for Women/girls Sneakers For Women", "price": 120, "discountPercentage": 10.37, "rating": 4.19, "stock": 50, "brand": "Synthetic Leather", "category": "womens-shoes", "thumbnail": "https://i.dummyjson.com/data/products/47/thumbnail.jpeg", "images": ["https://i.dummyjson.com/data/products/47/1.jpg", "https://i.dummyjson.com/data/products/47/2.jpg", "https://i.dummyjson.com/data/products/47/3.jpg", "https://i.dummyjson.com/data/products/47/thumbnail.jpeg"] }, { "id": 48, "title": "Women Strip Heel", "description": "Features: Flip-flops, Mid Heel, Comfortable, Striped Heel, Antiskid, Striped", "price": 40, "discountPercentage": 10.83, "rating": 4.02, "stock": 25, "brand": "Sandals Flip Flops", "category": "womens-shoes", "thumbnail": "https://i.dummyjson.com/data/products/48/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/48/1.jpg", "https://i.dummyjson.com/data/products/48/2.jpg", "https://i.dummyjson.com/data/products/48/3.jpg", "https://i.dummyjson.com/data/products/48/4.jpg", "https://i.dummyjson.com/data/products/48/thumbnail.jpg"] }, { "id": 49, "title": "Chappals & Shoe Ladies Metallic", "description": "Womens Chappals & Shoe Ladies Metallic Tong Thong Sandal Flat Summer 2020 Maasai Sandals", "price": 23, "discountPercentage": 2.62, "rating": 4.72, "stock": 107, "brand": "Maasai Sandals", "category": "womens-shoes", "thumbnail": "https://i.dummyjson.com/data/products/49/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/49/1.jpg", "https://i.dummyjson.com/data/products/49/2.jpg", "https://i.dummyjson.com/data/products/49/3.webp", "https://i.dummyjson.com/data/products/49/thumbnail.jpg"] }, { "id": 50, "title": "Women Shoes", "description": "2020 New Arrivals Genuine Leather Fashion Trend Platform Summer Women Shoes", "price": 36, "discountPercentage": 16.87, "rating": 4.33, "stock": 46, "brand": "Arrivals Genuine", "category": "womens-shoes", "thumbnail": "https://i.dummyjson.com/data/products/50/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/50/1.jpeg", "https://i.dummyjson.com/data/products/50/2.jpg", "https://i.dummyjson.com/data/products/50/3.jpg"] }, { "id": 51, "title": "half sleeves T shirts", "description": "Many store is creating new designs and trend every month and every year. Daraz.pk have a beautiful range of men fashion brands", "price": 23, "discountPercentage": 12.76, "rating": 4.26, "stock": 132, "brand": "Vintage Apparel", "category": "mens-shirts", "thumbnail": "https://i.dummyjson.com/data/products/51/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/51/1.png", "https://i.dummyjson.com/data/products/51/2.jpg", "https://i.dummyjson.com/data/products/51/3.jpg", "https://i.dummyjson.com/data/products/51/thumbnail.jpg"] }, { "id": 52, "title": "FREE FIRE T Shirt", "description": "quality and professional print - It doesn't just look high quality, it is high quality.", "price": 10, "discountPercentage": 14.72, "rating": 4.52, "stock": 128, "brand": "FREE FIRE", "category": "mens-shirts", "thumbnail": "https://i.dummyjson.com/data/products/52/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/52/1.png", "https://i.dummyjson.com/data/products/52/2.png", "https://i.dummyjson.com/data/products/52/3.jpg", "https://i.dummyjson.com/data/products/52/4.jpg", "https://i.dummyjson.com/data/products/52/thumbnail.jpg"] }, { "id": 53, "title": "printed high quality T shirts", "description": "Brand: vintage Apparel ,Export quality", "price": 35, "discountPercentage": 7.54, "rating": 4.89, "stock": 6, "brand": "Vintage Apparel", "category": "mens-shirts", "thumbnail": "https://i.dummyjson.com/data/products/53/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/53/1.webp", "https://i.dummyjson.com/data/products/53/2.jpg", "https://i.dummyjson.com/data/products/53/3.jpg", "https://i.dummyjson.com/data/products/53/4.jpg", "https://i.dummyjson.com/data/products/53/thumbnail.jpg"] }, { "id": 54, "title": "Pubg Printed Graphic T-Shirt", "description": "Product Description Features: 100% Ultra soft Polyester Jersey. Vibrant & colorful printing on front. Feels soft as cotton without ever cracking", "price": 46, "discountPercentage": 16.44, "rating": 4.62, "stock": 136, "brand": "The Warehouse", "category": "mens-shirts", "thumbnail": "https://i.dummyjson.com/data/products/54/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/54/1.jpg", "https://i.dummyjson.com/data/products/54/2.jpg", "https://i.dummyjson.com/data/products/54/3.jpg", "https://i.dummyjson.com/data/products/54/4.jpg", "https://i.dummyjson.com/data/products/54/thumbnail.jpg"] }, { "id": 55, "title": "Money Heist Printed Summer T Shirts", "description": "Fabric Jercy, Size: M & L Wear Stylish Dual Stiched", "price": 66, "discountPercentage": 15.97, "rating": 4.9, "stock": 122, "brand": "The Warehouse", "category": "mens-shirts", "thumbnail": "https://i.dummyjson.com/data/products/55/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/55/1.jpg", "https://i.dummyjson.com/data/products/55/2.webp", "https://i.dummyjson.com/data/products/55/3.jpg", "https://i.dummyjson.com/data/products/55/4.jpg", "https://i.dummyjson.com/data/products/55/thumbnail.jpg"] }, { "id": 56, "title": "Sneakers Joggers Shoes", "description": "Gender: Men , Colors: Same as DisplayedCondition: 100% Brand New", "price": 40, "discountPercentage": 12.57, "rating": 4.38, "stock": 6, "brand": "Sneakers", "category": "mens-shoes", "thumbnail": "https://i.dummyjson.com/data/products/56/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/56/1.jpg", "https://i.dummyjson.com/data/products/56/2.jpg", "https://i.dummyjson.com/data/products/56/3.jpg", "https://i.dummyjson.com/data/products/56/4.jpg", "https://i.dummyjson.com/data/products/56/5.jpg", "https://i.dummyjson.com/data/products/56/thumbnail.jpg"] }, { "id": 57, "title": "Loafers for men", "description": "Men Shoes - Loafers for men - Rubber Shoes - Nylon Shoes - Shoes for men - Moccassion - Pure Nylon (Rubber) Expot Quality.", "price": 47, "discountPercentage": 10.91, "rating": 4.91, "stock": 20, "brand": "Rubber", "category": "mens-shoes", "thumbnail": "https://i.dummyjson.com/data/products/57/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/57/1.jpg", "https://i.dummyjson.com/data/products/57/2.jpg", "https://i.dummyjson.com/data/products/57/3.jpg", "https://i.dummyjson.com/data/products/57/4.jpg", "https://i.dummyjson.com/data/products/57/thumbnail.jpg"] }, { "id": 58, "title": "formal offices shoes", "description": "Pattern Type: Solid, Material: PU, Toe Shape: Pointed Toe ,Outsole Material: Rubber", "price": 57, "discountPercentage": 12, "rating": 4.41, "stock": 68, "brand": "The Warehouse", "category": "mens-shoes", "thumbnail": "https://i.dummyjson.com/data/products/58/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/58/1.jpg", "https://i.dummyjson.com/data/products/58/2.jpg", "https://i.dummyjson.com/data/products/58/3.jpg", "https://i.dummyjson.com/data/products/58/4.jpg", "https://i.dummyjson.com/data/products/58/thumbnail.jpg"] }, { "id": 59, "title": "Spring and summershoes", "description": "Comfortable stretch cloth, lightweight body; ,rubber sole, anti-skid wear;", "price": 20, "discountPercentage": 8.71, "rating": 4.33, "stock": 137, "brand": "Sneakers", "category": "mens-shoes", "thumbnail": "https://i.dummyjson.com/data/products/59/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/59/1.jpg", "https://i.dummyjson.com/data/products/59/2.jpg", "https://i.dummyjson.com/data/products/59/3.jpg", "https://i.dummyjson.com/data/products/59/4.jpg", "https://i.dummyjson.com/data/products/59/thumbnail.jpg"] }, { "id": 60, "title": "Stylish Casual Jeans Shoes", "description": "High Quality ,Stylish design ,Comfortable wear ,FAshion ,Durable", "price": 58, "discountPercentage": 7.55, "rating": 4.55, "stock": 129, "brand": "Sneakers", "category": "mens-shoes", "thumbnail": "https://i.dummyjson.com/data/products/60/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/60/1.jpg", "https://i.dummyjson.com/data/products/60/2.jpg", "https://i.dummyjson.com/data/products/60/3.jpg", "https://i.dummyjson.com/data/products/60/thumbnail.jpg"] }, { "id": 61, "title": "Leather Straps Wristwatch", "description": "Style:Sport ,Clasp:Buckles ,Water Resistance Depth:3Bar", "price": 120, "discountPercentage": 7.14, "rating": 4.63, "stock": 91, "brand": "Naviforce", "category": "mens-watches", "thumbnail": "https://i.dummyjson.com/data/products/61/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/61/1.jpg", "https://i.dummyjson.com/data/products/61/2.png", "https://i.dummyjson.com/data/products/61/3.jpg"] }, { "id": 62, "title": "Waterproof Leather Brand Watch", "description": "Watch Crown With Environmental IPS Bronze Electroplating; Display system of 12 hours", "price": 46, "discountPercentage": 3.15, "rating": 4.05, "stock": 95, "brand": "SKMEI 9117", "category": "mens-watches", "thumbnail": "https://i.dummyjson.com/data/products/62/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/62/1.jpg", "https://i.dummyjson.com/data/products/62/2.jpg"] }, { "id": 63, "title": "Royal Blue Premium Watch", "description": "Men Silver Chain Royal Blue Premium Watch Latest Analog Watch", "price": 50, "discountPercentage": 2.56, "rating": 4.89, "stock": 142, "brand": "SKMEI 9117", "category": "mens-watches", "thumbnail": "https://i.dummyjson.com/data/products/63/thumbnail.webp", "images": ["https://i.dummyjson.com/data/products/63/1.jpg", "https://i.dummyjson.com/data/products/63/2.jpg", "https://i.dummyjson.com/data/products/63/3.png", "https://i.dummyjson.com/data/products/63/4.jpeg"] }, { "id": 64, "title": "Leather Strap Skeleton Watch", "description": "Leather Strap Skeleton Watch for Men - Stylish and Latest Design", "price": 46, "discountPercentage": 10.2, "rating": 4.98, "stock": 61, "brand": "Strap Skeleton", "category": "mens-watches", "thumbnail": "https://i.dummyjson.com/data/products/64/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/64/1.jpg", "https://i.dummyjson.com/data/products/64/2.webp", "https://i.dummyjson.com/data/products/64/3.jpg", "https://i.dummyjson.com/data/products/64/thumbnail.jpg"] }, { "id": 65, "title": "Stainless Steel Wrist Watch", "description": "Stylish Watch For Man (Luxury) Classy Men's Stainless Steel Wrist Watch - Box Packed", "price": 47, "discountPercentage": 17.79, "rating": 4.79, "stock": 94, "brand": "Stainless", "category": "mens-watches", "thumbnail": "https://i.dummyjson.com/data/products/65/thumbnail.webp", "images": ["https://i.dummyjson.com/data/products/65/1.jpg", "https://i.dummyjson.com/data/products/65/2.webp", "https://i.dummyjson.com/data/products/65/3.jpg", "https://i.dummyjson.com/data/products/65/4.webp", "https://i.dummyjson.com/data/products/65/thumbnail.webp"] }, { "id": 66, "title": "Steel Analog Couple Watches", "description": "Elegant design, Stylish ,Unique & Trendy,Comfortable wear", "price": 35, "discountPercentage": 3.23, "rating": 4.79, "stock": 24, "brand": "Eastern Watches", "category": "womens-watches", "thumbnail": "https://i.dummyjson.com/data/products/66/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/66/1.jpg", "https://i.dummyjson.com/data/products/66/2.jpg", "https://i.dummyjson.com/data/products/66/3.jpg", "https://i.dummyjson.com/data/products/66/4.JPG", "https://i.dummyjson.com/data/products/66/thumbnail.jpg"] }, { "id": 67, "title": "Fashion Magnetic Wrist Watch", "description": "Buy this awesome  The product is originally manufactured by the company and it's a top selling product with a very reasonable", "price": 60, "discountPercentage": 16.69, "rating": 4.03, "stock": 46, "brand": "Eastern Watches", "category": "womens-watches", "thumbnail": "https://i.dummyjson.com/data/products/67/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/67/1.jpg", "https://i.dummyjson.com/data/products/67/2.jpg", "https://i.dummyjson.com/data/products/67/3.jpg", "https://i.dummyjson.com/data/products/67/4.jpg", "https://i.dummyjson.com/data/products/67/thumbnail.jpg"] }, { "id": 68, "title": "Stylish Luxury Digital Watch", "description": "Stylish Luxury Digital Watch For Girls / Women - Led Smart Ladies Watches For Girls", "price": 57, "discountPercentage": 9.03, "rating": 4.55, "stock": 77, "brand": "Luxury Digital", "category": "womens-watches", "thumbnail": "https://i.dummyjson.com/data/products/68/thumbnail.webp", "images": ["https://i.dummyjson.com/data/products/68/1.jpg", "https://i.dummyjson.com/data/products/68/2.jpg"] }, { "id": 69, "title": "Golden Watch Pearls Bracelet Watch", "description": "Product details of Golden Watch Pearls Bracelet Watch For Girls - Golden Chain Ladies Bracelate Watch for Women", "price": 47, "discountPercentage": 17.55, "rating": 4.77, "stock": 89, "brand": "Watch Pearls", "category": "womens-watches", "thumbnail": "https://i.dummyjson.com/data/products/69/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/69/1.jpg", "https://i.dummyjson.com/data/products/69/2.jpg", "https://i.dummyjson.com/data/products/69/3.webp", "https://i.dummyjson.com/data/products/69/4.jpg", "https://i.dummyjson.com/data/products/69/thumbnail.jpg"] }, { "id": 70, "title": "Stainless Steel Women", "description": "Fashion Skmei 1830 Shell Dial Stainless Steel Women Wrist Watch Lady Bracelet Watch Quartz Watches Ladies", "price": 35, "discountPercentage": 8.98, "rating": 4.08, "stock": 111, "brand": "Bracelet", "category": "womens-watches", "thumbnail": "https://i.dummyjson.com/data/products/70/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/70/1.jpg", "https://i.dummyjson.com/data/products/70/2.jpg", "https://i.dummyjson.com/data/products/70/thumbnail.jpg"] }, { "id": 71, "title": "Women Shoulder Bags", "description": "LouisWill Women Shoulder Bags Long Clutches Cross Body Bags Phone Bags PU Leather Hand Bags Large Capacity Card Holders Zipper Coin Purses Fashion Crossbody Bags for Girls Ladies", "price": 46, "discountPercentage": 14.65, "rating": 4.71, "stock": 17, "brand": "LouisWill", "category": "womens-bags", "thumbnail": "https://i.dummyjson.com/data/products/71/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/71/1.jpg", "https://i.dummyjson.com/data/products/71/2.jpg", "https://i.dummyjson.com/data/products/71/3.webp", "https://i.dummyjson.com/data/products/71/thumbnail.jpg"] }, { "id": 72, "title": "Handbag For Girls", "description": "This fashion is designed to add a charming effect to your casual outfit. This Bag is made of synthetic leather.", "price": 23, "discountPercentage": 17.5, "rating": 4.91, "stock": 27, "brand": "LouisWill", "category": "womens-bags", "thumbnail": "https://i.dummyjson.com/data/products/72/thumbnail.webp", "images": ["https://i.dummyjson.com/data/products/72/1.jpg", "https://i.dummyjson.com/data/products/72/2.png", "https://i.dummyjson.com/data/products/72/3.webp", "https://i.dummyjson.com/data/products/72/4.jpg", "https://i.dummyjson.com/data/products/72/thumbnail.webp"] }, { "id": 73, "title": "Fancy hand clutch", "description": "This fashion is designed to add a charming effect to your casual outfit. This Bag is made of synthetic leather.", "price": 44, "discountPercentage": 10.39, "rating": 4.18, "stock": 101, "brand": "Bracelet", "category": "womens-bags", "thumbnail": "https://i.dummyjson.com/data/products/73/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/73/1.jpg", "https://i.dummyjson.com/data/products/73/2.webp", "https://i.dummyjson.com/data/products/73/3.jpg", "https://i.dummyjson.com/data/products/73/thumbnail.jpg"] }, { "id": 74, "title": "Leather Hand Bag", "description": "It features an attractive design that makes it a must have accessory in your collection. We sell different kind of bags for boys, kids, women, girls and also for unisex.", "price": 57, "discountPercentage": 11.19, "rating": 4.01, "stock": 43, "brand": "Copenhagen Luxe", "category": "womens-bags", "thumbnail": "https://i.dummyjson.com/data/products/74/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/74/1.jpg", "https://i.dummyjson.com/data/products/74/2.jpg", "https://i.dummyjson.com/data/products/74/3.jpg", "https://i.dummyjson.com/data/products/74/4.jpg", "https://i.dummyjson.com/data/products/74/thumbnail.jpg"] }, { "id": 75, "title": "Seven Pocket Women Bag", "description": "Seven Pocket Women Bag Handbags Lady Shoulder Crossbody Bag Female Purse Seven Pocket Bag", "price": 68, "discountPercentage": 14.87, "rating": 4.93, "stock": 13, "brand": "Steal Frame", "category": "womens-bags", "thumbnail": "https://i.dummyjson.com/data/products/75/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/75/1.jpg", "https://i.dummyjson.com/data/products/75/2.jpg", "https://i.dummyjson.com/data/products/75/3.jpg", "https://i.dummyjson.com/data/products/75/thumbnail.jpg"] }, { "id": 76, "title": "Silver Ring Set Women", "description": "Jewelry Type:RingsCertificate Type:NonePlating:Silver PlatedShapeattern:noneStyle:CLASSICReligious", "price": 70, "discountPercentage": 13.57, "rating": 4.61, "stock": 51, "brand": "Darojay", "category": "womens-jewellery", "thumbnail": "https://i.dummyjson.com/data/products/76/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/76/1.jpg", "https://i.dummyjson.com/data/products/76/2.jpg", "https://i.dummyjson.com/data/products/76/thumbnail.jpg"] }, { "id": 77, "title": "Rose Ring", "description": "Brand: The Greetings Flower Colour: RedRing Colour: GoldenSize: Adjustable", "price": 100, "discountPercentage": 3.22, "rating": 4.21, "stock": 149, "brand": "Copenhagen Luxe", "category": "womens-jewellery", "thumbnail": "https://i.dummyjson.com/data/products/77/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/77/1.jpg", "https://i.dummyjson.com/data/products/77/2.jpg", "https://i.dummyjson.com/data/products/77/3.jpg", "https://i.dummyjson.com/data/products/77/thumbnail.jpg"] }, { "id": 78, "title": "Rhinestone Korean Style Open Rings", "description": "Fashion Jewellery 3Pcs Adjustable Pearl Rhinestone Korean Style Open Rings For Women", "price": 30, "discountPercentage": 8.02, "rating": 4.69, "stock": 9, "brand": "Fashion Jewellery", "category": "womens-jewellery", "thumbnail": "https://i.dummyjson.com/data/products/78/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/78/thumbnail.jpg"] }, { "id": 79, "title": "Elegant Female Pearl Earrings", "description": "Elegant Female Pearl Earrings Set Zircon Pearl Earings Women Party Accessories 9 Pairs/Set", "price": 30, "discountPercentage": 12.8, "rating": 4.74, "stock": 16, "brand": "Fashion Jewellery", "category": "womens-jewellery", "thumbnail": "https://i.dummyjson.com/data/products/79/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/79/1.jpg"] }, { "id": 80, "title": "Chain Pin Tassel Earrings", "description": "Pair Of Ear Cuff Butterfly Long Chain Pin Tassel Earrings - Silver ( Long Life Quality Product)", "price": 45, "discountPercentage": 17.75, "rating": 4.59, "stock": 9, "brand": "Cuff Butterfly", "category": "womens-jewellery", "thumbnail": "https://i.dummyjson.com/data/products/80/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/80/1.jpg", "https://i.dummyjson.com/data/products/80/2.jpg", "https://i.dummyjson.com/data/products/80/3.png", "https://i.dummyjson.com/data/products/80/4.jpg", "https://i.dummyjson.com/data/products/80/thumbnail.jpg"] }, { "id": 81, "title": "Round Silver Frame Sun Glasses", "description": "A pair of sunglasses can protect your eyes from being hurt. For car driving, vacation travel, outdoor activities, social gatherings,", "price": 19, "discountPercentage": 10.1, "rating": 4.94, "stock": 78, "brand": "Designer Sun Glasses", "category": "sunglasses", "thumbnail": "https://i.dummyjson.com/data/products/81/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/81/1.jpg", "https://i.dummyjson.com/data/products/81/2.jpg", "https://i.dummyjson.com/data/products/81/3.jpg", "https://i.dummyjson.com/data/products/81/4.webp", "https://i.dummyjson.com/data/products/81/thumbnail.jpg"] }, { "id": 82, "title": "Kabir Singh Square Sunglass", "description": "Orignal Metal Kabir Singh design 2020 Sunglasses Men Brand Designer Sun Glasses Kabir Singh Square Sunglass", "price": 50, "discountPercentage": 15.6, "rating": 4.62, "stock": 78, "brand": "Designer Sun Glasses", "category": "sunglasses", "thumbnail": "https://i.dummyjson.com/data/products/82/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/82/1.jpg", "https://i.dummyjson.com/data/products/82/2.webp", "https://i.dummyjson.com/data/products/82/3.jpg", "https://i.dummyjson.com/data/products/82/4.jpg", "https://i.dummyjson.com/data/products/82/thumbnail.jpg"] }, { "id": 83, "title": "Wiley X Night Vision Yellow Glasses", "description": "Wiley X Night Vision Yellow Glasses for Riders - Night Vision Anti Fog Driving Glasses - Free Night Glass Cover - Shield Eyes From Dust and Virus- For Night Sport Matches", "price": 30, "discountPercentage": 6.33, "rating": 4.97, "stock": 115, "brand": "mastar watch", "category": "sunglasses", "thumbnail": "https://i.dummyjson.com/data/products/83/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/83/1.jpg", "https://i.dummyjson.com/data/products/83/2.jpg", "https://i.dummyjson.com/data/products/83/3.jpg", "https://i.dummyjson.com/data/products/83/4.jpg", "https://i.dummyjson.com/data/products/83/thumbnail.jpg"] }, { "id": 84, "title": "Square Sunglasses", "description": "Fashion Oversized Square Sunglasses Retro Gradient Big Frame Sunglasses For Women One Piece Gafas Shade Mirror Clear Lens 17059", "price": 28, "discountPercentage": 13.89, "rating": 4.64, "stock": 64, "brand": "mastar watch", "category": "sunglasses", "thumbnail": "https://i.dummyjson.com/data/products/84/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/84/1.jpg", "https://i.dummyjson.com/data/products/84/2.jpg", "https://i.dummyjson.com/data/products/84/thumbnail.jpg"] }, { "id": 85, "title": "LouisWill Men Sunglasses", "description": "LouisWill Men Sunglasses Polarized Sunglasses UV400 Sunglasses Day Night Dual Use Safety Driving Night Vision Eyewear AL-MG Frame Sun Glasses with Free Box for Drivers", "price": 50, "discountPercentage": 11.27, "rating": 4.98, "stock": 92, "brand": "LouisWill", "category": "sunglasses", "thumbnail": "https://i.dummyjson.com/data/products/85/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/85/1.jpg", "https://i.dummyjson.com/data/products/85/2.jpg", "https://i.dummyjson.com/data/products/85/thumbnail.jpg"] }, { "id": 86, "title": "Bluetooth Aux", "description": "Bluetooth Aux Bluetooth Car Aux Car Bluetooth Transmitter Aux Audio Receiver Handfree Car Bluetooth Music Receiver Universal 3.5mm Streaming A2DP Wireless Auto AUX Audio Adapter With Mic For Phone MP3", "price": 25, "discountPercentage": 10.56, "rating": 4.57, "stock": 22, "brand": "Car Aux", "category": "automotive", "thumbnail": "https://i.dummyjson.com/data/products/86/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/86/1.jpg", "https://i.dummyjson.com/data/products/86/2.webp", "https://i.dummyjson.com/data/products/86/3.jpg", "https://i.dummyjson.com/data/products/86/4.jpg", "https://i.dummyjson.com/data/products/86/thumbnail.jpg"] }, { "id": 87, "title": "t Temperature Controller Incubator Controller", "description": "Both Heat and Cool Purpose, Temperature control range; -50 to +110, Temperature measurement accuracy; 0.1, Control accuracy; 0.1", "price": 40, "discountPercentage": 11.3, "rating": 4.54, "stock": 37, "brand": "W1209 DC12V", "category": "automotive", "thumbnail": "https://i.dummyjson.com/data/products/87/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/87/1.jpg", "https://i.dummyjson.com/data/products/87/2.jpg", "https://i.dummyjson.com/data/products/87/3.jpg", "https://i.dummyjson.com/data/products/87/4.jpg", "https://i.dummyjson.com/data/products/87/thumbnail.jpg"] }, { "id": 88, "title": "TC Reusable Silicone Magic Washing Gloves", "description": "TC Reusable Silicone Magic Washing Gloves with Scrubber, Cleaning Brush Scrubber Gloves Heat Resistant Pair for Cleaning of Kitchen, Dishes, Vegetables and Fruits, Bathroom, Car Wash, Pet Care and Multipurpose", "price": 29, "discountPercentage": 3.19, "rating": 4.98, "stock": 42, "brand": "TC Reusable", "category": "automotive", "thumbnail": "https://i.dummyjson.com/data/products/88/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/88/1.jpg", "https://i.dummyjson.com/data/products/88/2.jpg", "https://i.dummyjson.com/data/products/88/3.jpg", "https://i.dummyjson.com/data/products/88/4.webp", "https://i.dummyjson.com/data/products/88/thumbnail.jpg"] }, { "id": 89, "title": "Qualcomm original Car Charger", "description": "best Quality CHarger , Highly Recommended to all best Quality CHarger , Highly Recommended to all", "price": 40, "discountPercentage": 17.53, "rating": 4.2, "stock": 79, "brand": "TC Reusable", "category": "automotive", "thumbnail": "https://i.dummyjson.com/data/products/89/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/89/1.jpg", "https://i.dummyjson.com/data/products/89/2.jpg", "https://i.dummyjson.com/data/products/89/3.jpg", "https://i.dummyjson.com/data/products/89/4.jpg", "https://i.dummyjson.com/data/products/89/thumbnail.jpg"] }, { "id": 90, "title": "Cycle Bike Glow", "description": "Universal fitment and easy to install no special wires, can be easily installed and removed. Fits most standard tyre air stem valves of road, mountain bicycles, motocycles and cars.Bright led will turn on w", "price": 35, "discountPercentage": 11.08, "rating": 4.1, "stock": 63, "brand": "Neon LED Light", "category": "automotive", "thumbnail": "https://i.dummyjson.com/data/products/90/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/90/1.jpg", "https://i.dummyjson.com/data/products/90/2.jpg", "https://i.dummyjson.com/data/products/90/3.jpg", "https://i.dummyjson.com/data/products/90/4.jpg", "https://i.dummyjson.com/data/products/90/thumbnail.jpg"] }, { "id": 91, "title": "Black Motorbike", "description": "Engine Type:Wet sump, Single Cylinder, Four Stroke, Two Valves, Air Cooled with SOHC (Single Over Head Cam) Chain Drive Bore & Stroke:47.0 x 49.5 MM", "price": 569, "discountPercentage": 13.63, "rating": 4.04, "stock": 115, "brand": "METRO 70cc Motorcycle - MR70", "category": "motorcycle", "thumbnail": "https://i.dummyjson.com/data/products/91/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/91/1.jpg", "https://i.dummyjson.com/data/products/91/2.jpg", "https://i.dummyjson.com/data/products/91/3.jpg", "https://i.dummyjson.com/data/products/91/4.jpg", "https://i.dummyjson.com/data/products/91/thumbnail.jpg"] }, { "id": 92, "title": "HOT SALE IN EUROPE electric racing motorcycle", "description": "HOT SALE IN EUROPE electric racing motorcycle electric motorcycle for sale adult electric motorcycles", "price": 920, "discountPercentage": 14.4, "rating": 4.19, "stock": 22, "brand": "BRAVE BULL", "category": "motorcycle", "thumbnail": "https://i.dummyjson.com/data/products/92/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/92/1.jpg", "https://i.dummyjson.com/data/products/92/2.jpg", "https://i.dummyjson.com/data/products/92/3.jpg", "https://i.dummyjson.com/data/products/92/4.jpg"] }, { "id": 93, "title": "Automatic Motor Gas Motorcycles", "description": "150cc 4-Stroke Motorcycle Automatic Motor Gas Motorcycles Scooter motorcycles 150cc scooter", "price": 1050, "discountPercentage": 3.34, "rating": 4.84, "stock": 127, "brand": "shock absorber", "category": "motorcycle", "thumbnail": "https://i.dummyjson.com/data/products/93/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/93/1.jpg", "https://i.dummyjson.com/data/products/93/2.jpg", "https://i.dummyjson.com/data/products/93/3.jpg", "https://i.dummyjson.com/data/products/93/4.jpg", "https://i.dummyjson.com/data/products/93/thumbnail.jpg"] }, { "id": 94, "title": "new arrivals Fashion motocross goggles", "description": "new arrivals Fashion motocross goggles motorcycle motocross racing motorcycle", "price": 900, "discountPercentage": 3.85, "rating": 4.06, "stock": 109, "brand": "JIEPOLLY", "category": "motorcycle", "thumbnail": "https://i.dummyjson.com/data/products/94/thumbnail.webp", "images": ["https://i.dummyjson.com/data/products/94/1.webp", "https://i.dummyjson.com/data/products/94/2.jpg", "https://i.dummyjson.com/data/products/94/3.jpg", "https://i.dummyjson.com/data/products/94/thumbnail.webp"] }, { "id": 95, "title": "Wholesale cargo lashing Belt", "description": "Wholesale cargo lashing Belt Tie Down end Ratchet strap customized strap 25mm motorcycle 1500kgs with rubber handle", "price": 930, "discountPercentage": 17.67, "rating": 4.21, "stock": 144, "brand": "Xiangle", "category": "motorcycle", "thumbnail": "https://i.dummyjson.com/data/products/95/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/95/1.jpg", "https://i.dummyjson.com/data/products/95/2.jpg", "https://i.dummyjson.com/data/products/95/3.jpg", "https://i.dummyjson.com/data/products/95/4.jpg", "https://i.dummyjson.com/data/products/95/thumbnail.jpg"] }, { "id": 96, "title": "lighting ceiling kitchen", "description": "Wholesale slim hanging decorative kid room lighting ceiling kitchen chandeliers pendant light modern", "price": 30, "discountPercentage": 14.89, "rating": 4.83, "stock": 96, "brand": "lightingbrilliance", "category": "lighting", "thumbnail": "https://i.dummyjson.com/data/products/96/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/96/1.jpg", "https://i.dummyjson.com/data/products/96/2.jpg", "https://i.dummyjson.com/data/products/96/3.jpg", "https://i.dummyjson.com/data/products/96/4.jpg", "https://i.dummyjson.com/data/products/96/thumbnail.jpg"] }, { "id": 97, "title": "Metal Ceramic Flower", "description": "Metal Ceramic Flower Chandelier Home Lighting American Vintage Hanging Lighting Pendant Lamp", "price": 35, "discountPercentage": 10.94, "rating": 4.93, "stock": 146, "brand": "Ifei Home", "category": "lighting", "thumbnail": "https://i.dummyjson.com/data/products/97/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/97/1.jpg", "https://i.dummyjson.com/data/products/97/2.jpg", "https://i.dummyjson.com/data/products/97/3.jpg", "https://i.dummyjson.com/data/products/97/4.webp", "https://i.dummyjson.com/data/products/97/thumbnail.jpg"] }, { "id": 98, "title": "3 lights lndenpant kitchen islang", "description": "3 lights lndenpant kitchen islang dining room pendant rice paper chandelier contemporary led pendant light modern chandelier", "price": 34, "discountPercentage": 5.92, "rating": 4.99, "stock": 44, "brand": "DADAWU", "category": "lighting", "thumbnail": "https://i.dummyjson.com/data/products/98/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/98/1.jpg", "https://i.dummyjson.com/data/products/98/2.jpg", "https://i.dummyjson.com/data/products/98/3.jpg", "https://i.dummyjson.com/data/products/98/4.jpg", "https://i.dummyjson.com/data/products/98/thumbnail.jpg"] }, { "id": 99, "title": "American Vintage Wood Pendant Light", "description": "American Vintage Wood Pendant Light Farmhouse Antique Hanging Lamp Lampara Colgante", "price": 46, "discountPercentage": 8.84, "rating": 4.32, "stock": 138, "brand": "Ifei Home", "category": "lighting", "thumbnail": "https://i.dummyjson.com/data/products/99/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/99/1.jpg", "https://i.dummyjson.com/data/products/99/2.jpg", "https://i.dummyjson.com/data/products/99/3.jpg", "https://i.dummyjson.com/data/products/99/4.jpg", "https://i.dummyjson.com/data/products/99/thumbnail.jpg"] }, { "id": 100, "title": "Crystal chandelier maria theresa for 12 light", "description": "Crystal chandelier maria theresa for 12 light", "price": 47, "discountPercentage": 16, "rating": 4.74, "stock": 133, "brand": "YIOSI", "category": "lighting", "thumbnail": "https://i.dummyjson.com/data/products/100/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/100/1.jpg", "https://i.dummyjson.com/data/products/100/2.jpg", "https://i.dummyjson.com/data/products/100/3.jpg", "https://i.dummyjson.com/data/products/100/thumbnail.jpg"] }];


/***/ }),

/***/ "./src/products_field/products_field.ts":
/*!**********************************************!*\
  !*** ./src/products_field/products_field.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products */ "./src/products_field/products.ts");
/* harmony import */ var _products_field_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products_field.css */ "./src/products_field/products_field.css");


class Product {
    constructor(directory) {
        this.directory = directory;
    }
    product() {
        var _a;
        for (let i = 0; i < _products__WEBPACK_IMPORTED_MODULE_0__.products.length; i++) {
            const btnAdd = document.createElement('button');
            btnAdd.setAttribute('class', 'btn');
            btnAdd.classList.add('btn_add');
            btnAdd.setAttribute('data-btn', _products__WEBPACK_IMPORTED_MODULE_0__.products[i].id);
            btnAdd.innerText = 'ADD TO CART';
            const btnDetails = document.createElement("button");
            btnDetails.setAttribute('class', 'btn');
            btnDetails.innerText = 'DETAILS';
            const btnContainer = document.createElement('div');
            btnContainer.setAttribute('class', 'btn_container');
            const productItem = document.createElement('div');
            productItem.setAttribute('class', 'product_item');
            productItem.setAttribute('id', _products__WEBPACK_IMPORTED_MODULE_0__.products[i].id);
            let url = _products__WEBPACK_IMPORTED_MODULE_0__.products[i].thumbnail;
            productItem.style.backgroundImage = `url(${url})`;
            const title = document.createElement('div');
            title.setAttribute('class', 'title');
            title.innerText = _products__WEBPACK_IMPORTED_MODULE_0__.products[i].title;
            const info = document.createElement('div');
            info.setAttribute('class', 'info');
            let category = _products__WEBPACK_IMPORTED_MODULE_0__.products[i].category;
            let brand = _products__WEBPACK_IMPORTED_MODULE_0__.products[i].brand;
            let price = _products__WEBPACK_IMPORTED_MODULE_0__.products[i].price;
            let discount = _products__WEBPACK_IMPORTED_MODULE_0__.products[i].discountPercentage;
            let rating = _products__WEBPACK_IMPORTED_MODULE_0__.products[i].rating;
            let stock = _products__WEBPACK_IMPORTED_MODULE_0__.products[i].stock;
            info.innerText = `Category: ${category}\n
        Brend: ${brand}\n
        Price: ${price}\n
        Discount: ${discount}\n
        Rating: ${rating}\n
        Stock: ${stock}`;
            (_a = this.directory) === null || _a === void 0 ? void 0 : _a.append(productItem);
            productItem.append(title, info, btnContainer);
            btnContainer.append(btnAdd, btnDetails);
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product);


/***/ }),

/***/ "./src/select_box/selectArr.ts":
/*!*************************************!*\
  !*** ./src/select_box/selectArr.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _products_field_products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../products_field/products */ "./src/products_field/products.ts");
/* harmony import */ var _select_box_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select_box.css */ "./src/select_box/select_box.css");


class SelectArr {
    constructor(key, arrCategory) {
        this.key = key;
        this.arrCategory = arrCategory;
    }
    selecArr() {
        for (let i = 0; i < _products_field_products__WEBPACK_IMPORTED_MODULE_0__.products.length; i++) {
            if (this.arrCategory[0] == undefined) {
                this.arrCategory.push({
                    [this.key]: _products_field_products__WEBPACK_IMPORTED_MODULE_0__.products[i][this.key],
                    id: []
                });
            }
            if (this.arrCategory.find(item => item[this.key] == _products_field_products__WEBPACK_IMPORTED_MODULE_0__.products[i][this.key])) {
                this.arrCategory[this.arrCategory.findIndex(n => n[this.key] == _products_field_products__WEBPACK_IMPORTED_MODULE_0__.products[i][this.key])].id.push(_products_field_products__WEBPACK_IMPORTED_MODULE_0__.products[i].id);
            }
            else {
                this.arrCategory.push({
                    [this.key]: _products_field_products__WEBPACK_IMPORTED_MODULE_0__.products[i][this.key],
                    id: [_products_field_products__WEBPACK_IMPORTED_MODULE_0__.products[i].id]
                });
            }
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectArr);


/***/ }),

/***/ "./src/select_box/selectEl.ts":
/*!************************************!*\
  !*** ./src/select_box/selectEl.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/dist/nouislider.js");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nouislider_dist_nouislider_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nouislider/dist/nouislider.css */ "./node_modules/nouislider/dist/nouislider.css");
/* harmony import */ var _range_slider_range_slider_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./range-slider/range-slider.css */ "./src/select_box/range-slider/range-slider.css");



class SelectEl {
    constructor(directory, arr, name, text) {
        this.directory = directory,
            this.arr = arr,
            this.name = name,
            this.text = text;
    }
    selectEl() {
        var _a, _b;
        const createElem = document.createElement('div');
        createElem.setAttribute("class", 'inputBox');
        const createElemBox = document.createElement('div');
        createElemBox.setAttribute("class", 'divInput');
        createElem.innerText = this.text;
        (_a = this.directory) === null || _a === void 0 ? void 0 : _a.append(createElem);
        (_b = this.directory) === null || _b === void 0 ? void 0 : _b.append(createElemBox);
        for (let i = 0; i < this.arr.length; i++) {
            const elem = document.createElement("p");
            elem.setAttribute("class", "pInput");
            elem.innerHTML = `<label class="divInput"><input class="input ${this.name}" type="checkbox"
            id=${this.name}${i} data-id=${this.arr[i].id}>${this.arr[i][this.name]}</label>
            <span class="score">${this.arr[i].id.length}</span>`;
            createElemBox.append(elem);
        }
    }
    selectSliderEl() {
        var _a, _b, _c;
        const createElem = document.createElement('div');
        createElem.setAttribute("class", 'inputBox');
        const createElemBox = document.createElement('div');
        createElemBox.setAttribute("class", 'divInput');
        createElem.innerText = this.text;
        (_a = this.directory) === null || _a === void 0 ? void 0 : _a.append(createElem);
        (_b = this.directory) === null || _b === void 0 ? void 0 : _b.append(createElemBox);
        const rangeSlider = document.createElement("div");
        rangeSlider.setAttribute('class', 'rangeSlider');
        rangeSlider.setAttribute('id', `${this.name}Input`);
        const arrSort = this.arr.sort((a, b) => a[this.name] - b[this.name]);
        nouislider__WEBPACK_IMPORTED_MODULE_0__.create(rangeSlider, {
            start: [arrSort[0][this.name], arrSort[arrSort.length - 1][this.name]],
            connect: true,
            step: 1,
            range: {
                'min': arrSort[0][this.name],
                'max': arrSort[arrSort.length - 1][this.name]
            }
        });
        const inputs = document.createElement('div');
        inputs.setAttribute('class', 'inputs');
        const input0 = document.createElement('div');
        input0.setAttribute('class', 'input_value');
        input0.setAttribute('type', 'number');
        input0.setAttribute('id', `${this.name}0`);
        const input1 = document.createElement('div');
        input1.setAttribute('class', 'input_value');
        input1.setAttribute('type', 'number');
        input1.setAttribute('id', `${this.name}1`);
        const inputsArr = [input0, input1];
        (_c = rangeSlider.noUiSlider) === null || _c === void 0 ? void 0 : _c.on('update', function (values, handle) {
            inputsArr[handle].innerText = (Math.round(+values[handle])).toString();
        });
        createElemBox.append(rangeSlider);
        createElemBox.append(inputs);
        inputs.append(input0, input1);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectEl);


/***/ }),

/***/ "./src/select_box/select_box.ts":
/*!**************************************!*\
  !*** ./src/select_box/select_box.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _selectArr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectArr */ "./src/select_box/selectArr.ts");
/* harmony import */ var _selectEl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectEl */ "./src/select_box/selectEl.ts");
/* harmony import */ var _select_box_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select_box.css */ "./src/select_box/select_box.css");



class Select {
    constructor(directory) {
        this.directory = directory;
    }
    select() {
        const arrC = [];
        const arrB = [];
        const arrP = [];
        const arrS = [];
        const arrCategory = new _selectArr__WEBPACK_IMPORTED_MODULE_0__["default"]("category", arrC);
        arrCategory.selecArr();
        const arrBrand = new _selectArr__WEBPACK_IMPORTED_MODULE_0__["default"]("brand", arrB);
        arrBrand.selecArr();
        const arrPrice = new _selectArr__WEBPACK_IMPORTED_MODULE_0__["default"]("price", arrP);
        arrPrice.selecArr();
        const arrStock = new _selectArr__WEBPACK_IMPORTED_MODULE_0__["default"]("stock", arrS);
        arrStock.selecArr();
        const categoryCreate = new _selectEl__WEBPACK_IMPORTED_MODULE_1__["default"](this.directory, arrC, "category", "Category");
        categoryCreate.selectEl();
        const brandCreate = new _selectEl__WEBPACK_IMPORTED_MODULE_1__["default"](this.directory, arrB, "brand", "Brand");
        brandCreate.selectEl();
        const priceCreate = new _selectEl__WEBPACK_IMPORTED_MODULE_1__["default"](this.directory, arrP, "price", "Price $:");
        priceCreate.selectSliderEl();
        const stockCreate = new _selectEl__WEBPACK_IMPORTED_MODULE_1__["default"](this.directory, arrS, "stock", "Stock");
        stockCreate.selectSliderEl();
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Select);


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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _products_field_products_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products_field/products_field */ "./src/products_field/products_field.ts");
/* harmony import */ var _select_box_select_box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select_box/select_box */ "./src/select_box/select_box.ts");
/* harmony import */ var _products_field_product_selection_product_selection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products_field/product_selection/product_selection */ "./src/products_field/product_selection/product_selection.ts");
/* harmony import */ var _basket_basket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basket/basket */ "./src/basket/basket.ts");





const productsField = document.querySelector(".products_field");
const products = new _products_field_products_field__WEBPACK_IMPORTED_MODULE_1__["default"](productsField);
products.product();
const categoryBox = document.querySelector(".category_box");
const select = new _select_box_select_box__WEBPACK_IMPORTED_MODULE_2__["default"](categoryBox);
select.select();
const productsFieldSelection = document.querySelectorAll('.product_item');
const resetFilters = document.querySelector('.reset_filters');
const productSelection = new _products_field_product_selection_product_selection__WEBPACK_IMPORTED_MODULE_3__["default"](productsFieldSelection, resetFilters, productsField);
productSelection.productSelection();
const basketField = document.querySelector(".wrapper_basket");
const basketScore = document.querySelector(".cirсle");
const basketTotal = document.querySelector(".total_price");
const basket = new _basket_basket__WEBPACK_IMPORTED_MODULE_4__["default"](basketField, basketScore, basketTotal);
basket.basketResult();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDZ0c7QUFDakI7QUFDL0UsOEJBQThCLHNFQUEyQixDQUFDLCtFQUFxQztBQUMvRjtBQUNBLGdFQUFnRSwrSkFBK0osZ0NBQWdDLGtEQUFrRCw4QkFBOEIsMkJBQTJCLHVCQUF1QiwwQkFBMEIsMkJBQTJCLHNCQUFzQixnQ0FBZ0MsMkJBQTJCLEdBQUcsZ0JBQWdCLHVCQUF1QixHQUFHLCtCQUErQixnQkFBZ0IsaUJBQWlCLHVCQUF1QixlQUFlLEdBQUcsNkRBQTZELHFCQUFxQixlQUFlLEdBQUcsZ0NBQWdDLDJCQUEyQix1QkFBdUIsZUFBZSxXQUFXLGFBQWEsaUJBQWlCLGdCQUFnQiw4QkFBOEIsa0NBQWtDLHlDQUF5QywwQkFBMEIsMEJBQTBCLEdBQUcsNEVBQTRFLFlBQVksZ0JBQWdCLEdBQUcsb0lBQW9JLGVBQWUsYUFBYSxHQUFHLGlDQUFpQyxjQUFjLEdBQUcsZ0JBQWdCLHdDQUF3QyxnQ0FBZ0MsdUJBQXVCLEdBQUcsb0JBQW9CLGlCQUFpQixnQkFBZ0IsR0FBRyxnRUFBZ0UsdUNBQXVDLCtCQUErQixHQUFHLHNCQUFzQiwrQkFBK0IsR0FBRyxzQ0FBc0MseUJBQXlCLGlCQUFpQixHQUFHLGlDQUFpQyxnQkFBZ0IsaUJBQWlCLGlCQUFpQixjQUFjLEdBQUcsa0JBQWtCLGdCQUFnQixHQUFHLCtCQUErQixnQkFBZ0IsaUJBQWlCLGdCQUFnQixrQkFBa0IsR0FBRyxrREFBa0QsZ0JBQWdCLGdCQUFnQixHQUFHLGFBQWEsOEdBQThHLHdCQUF3Qix1QkFBdUIsOEJBQThCLDZEQUE2RCxHQUFHLGtCQUFrQix1QkFBdUIsR0FBRyxpQkFBaUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixzQkFBc0IsR0FBRyxrQ0FBa0Msc0JBQXNCLEdBQUcsZ0JBQWdCLDhCQUE4Qix1QkFBdUIscUJBQXFCLG9CQUFvQixpRkFBaUYsR0FBRyxnQkFBZ0IsOEVBQThFLEdBQUcsb0JBQW9CLGlEQUFpRCxrQkFBa0IsbUJBQW1CLHVCQUF1QixpQkFBaUIsZUFBZSx3QkFBd0IsZUFBZSxhQUFhLEdBQUcsc0JBQXNCLGVBQWUsR0FBRywwRUFBMEUsZ0JBQWdCLGdCQUFnQixjQUFjLGNBQWMsR0FBRyxxQ0FBcUMsY0FBYyxHQUFHLG9CQUFvQixpQ0FBaUMsd0JBQXdCLEdBQUcsNkVBQTZFLHdCQUF3QixHQUFHLFVBQVUsc0NBQXNDLGdDQUFnQywyQkFBMkIsR0FBRyxjQUFjLHVCQUF1QixnQkFBZ0IsR0FBRyxZQUFZLHdCQUF3Qix1QkFBdUIsd0JBQXdCLHVCQUF1QixHQUFHLG1CQUFtQixnQkFBZ0Isb0JBQW9CLEdBQUcsY0FBYyx5QkFBeUIsdUJBQXVCLHFCQUFxQixHQUFHLG9CQUFvQixxQkFBcUIsR0FBRyxzQkFBc0IscUJBQXFCLEdBQUcsdUJBQXVCLGtDQUFrQyxvQkFBb0IsaUJBQWlCLGNBQWMsWUFBWSxnQkFBZ0IsR0FBRywwQkFBMEIsNENBQTRDLG9DQUFvQyxHQUFHLG9DQUFvQywyQ0FBMkMsbUNBQW1DLEdBQUcsdUNBQXVDLHNCQUFzQixlQUFlLGdCQUFnQixHQUFHLDJDQUEyQyxpQkFBaUIsR0FBRyw2Q0FBNkMsaUJBQWlCLEdBQUcscUJBQXFCLGdDQUFnQyxvQkFBb0IsaUJBQWlCLFdBQVcsZUFBZSxHQUFHLHdCQUF3QiwwQ0FBMEMsa0NBQWtDLHVCQUF1QixHQUFHLGtDQUFrQyx5Q0FBeUMsaUNBQWlDLEdBQUcscUNBQXFDLGVBQWUsZ0JBQWdCLHFCQUFxQixHQUFHLHlDQUF5QyxnQkFBZ0IsR0FBRywyQ0FBMkMsZ0JBQWdCLEdBQUcsaUJBQWlCLG1CQUFtQix1QkFBdUIsOEJBQThCLHVCQUF1QixxQkFBcUIsZ0JBQWdCLGlCQUFpQix1QkFBdUIsd0JBQXdCLEdBQUcsa0NBQWtDLDBDQUEwQyxrQ0FBa0MsY0FBYyxpQkFBaUIsR0FBRyxnQ0FBZ0MsMENBQTBDLGtDQUFrQyxhQUFhLGdCQUFnQixHQUFHLGlEQUFpRCx5Q0FBeUMsaUNBQWlDLGVBQWUsaUJBQWlCLEdBQUcsK0NBQStDLDJDQUEyQyxtQ0FBbUMsY0FBYyxnQkFBZ0IsR0FBRyxTQUFTLGdIQUFnSCxLQUFLLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxNQUFNLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxZQUFZLE1BQU0sT0FBTyxZQUFZLE1BQU0sTUFBTSxLQUFLLE1BQU0sWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsK0NBQStDLCtKQUErSixnQ0FBZ0Msa0RBQWtELDhCQUE4QiwyQkFBMkIsdUJBQXVCLDBCQUEwQiwyQkFBMkIsc0JBQXNCLGdDQUFnQywyQkFBMkIsR0FBRyxnQkFBZ0IsdUJBQXVCLEdBQUcsK0JBQStCLGdCQUFnQixpQkFBaUIsdUJBQXVCLGVBQWUsR0FBRyw2REFBNkQscUJBQXFCLGVBQWUsR0FBRyxnQ0FBZ0MsMkJBQTJCLHVCQUF1QixlQUFlLFdBQVcsYUFBYSxpQkFBaUIsZ0JBQWdCLDhCQUE4QixrQ0FBa0MseUNBQXlDLDBCQUEwQiwwQkFBMEIsR0FBRyw0RUFBNEUsWUFBWSxnQkFBZ0IsR0FBRyxvSUFBb0ksZUFBZSxhQUFhLEdBQUcsaUNBQWlDLGNBQWMsR0FBRyxnQkFBZ0Isd0NBQXdDLGdDQUFnQyx1QkFBdUIsR0FBRyxvQkFBb0IsaUJBQWlCLGdCQUFnQixHQUFHLGdFQUFnRSx1Q0FBdUMsK0JBQStCLEdBQUcsc0JBQXNCLCtCQUErQixHQUFHLHNDQUFzQyx5QkFBeUIsaUJBQWlCLEdBQUcsaUNBQWlDLGdCQUFnQixpQkFBaUIsaUJBQWlCLGNBQWMsR0FBRyxrQkFBa0IsZ0JBQWdCLEdBQUcsK0JBQStCLGdCQUFnQixpQkFBaUIsZ0JBQWdCLGtCQUFrQixHQUFHLGtEQUFrRCxnQkFBZ0IsZ0JBQWdCLEdBQUcsYUFBYSw4R0FBOEcsd0JBQXdCLHVCQUF1Qiw4QkFBOEIsNkRBQTZELEdBQUcsa0JBQWtCLHVCQUF1QixHQUFHLGlCQUFpQix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLHNCQUFzQixHQUFHLGtDQUFrQyxzQkFBc0IsR0FBRyxnQkFBZ0IsOEJBQThCLHVCQUF1QixxQkFBcUIsb0JBQW9CLGlGQUFpRixHQUFHLGdCQUFnQiw4RUFBOEUsR0FBRyxvQkFBb0IsaURBQWlELGtCQUFrQixtQkFBbUIsdUJBQXVCLGlCQUFpQixlQUFlLHdCQUF3QixlQUFlLGFBQWEsR0FBRyxzQkFBc0IsZUFBZSxHQUFHLDBFQUEwRSxnQkFBZ0IsZ0JBQWdCLGNBQWMsY0FBYyxHQUFHLHFDQUFxQyxjQUFjLEdBQUcsb0JBQW9CLGlDQUFpQyx3QkFBd0IsR0FBRyw2RUFBNkUsd0JBQXdCLEdBQUcsVUFBVSxzQ0FBc0MsZ0NBQWdDLDJCQUEyQixHQUFHLGNBQWMsdUJBQXVCLGdCQUFnQixHQUFHLFlBQVksd0JBQXdCLHVCQUF1Qix3QkFBd0IsdUJBQXVCLEdBQUcsbUJBQW1CLGdCQUFnQixvQkFBb0IsR0FBRyxjQUFjLHlCQUF5Qix1QkFBdUIscUJBQXFCLEdBQUcsb0JBQW9CLHFCQUFxQixHQUFHLHNCQUFzQixxQkFBcUIsR0FBRyx1QkFBdUIsa0NBQWtDLG9CQUFvQixpQkFBaUIsY0FBYyxZQUFZLGdCQUFnQixHQUFHLDBCQUEwQiw0Q0FBNEMsb0NBQW9DLEdBQUcsb0NBQW9DLDJDQUEyQyxtQ0FBbUMsR0FBRyx1Q0FBdUMsc0JBQXNCLGVBQWUsZ0JBQWdCLEdBQUcsMkNBQTJDLGlCQUFpQixHQUFHLDZDQUE2QyxpQkFBaUIsR0FBRyxxQkFBcUIsZ0NBQWdDLG9CQUFvQixpQkFBaUIsV0FBVyxlQUFlLEdBQUcsd0JBQXdCLDBDQUEwQyxrQ0FBa0MsdUJBQXVCLEdBQUcsa0NBQWtDLHlDQUF5QyxpQ0FBaUMsR0FBRyxxQ0FBcUMsZUFBZSxnQkFBZ0IscUJBQXFCLEdBQUcseUNBQXlDLGdCQUFnQixHQUFHLDJDQUEyQyxnQkFBZ0IsR0FBRyxpQkFBaUIsbUJBQW1CLHVCQUF1Qiw4QkFBOEIsdUJBQXVCLHFCQUFxQixnQkFBZ0IsaUJBQWlCLHVCQUF1Qix3QkFBd0IsR0FBRyxrQ0FBa0MsMENBQTBDLGtDQUFrQyxjQUFjLGlCQUFpQixHQUFHLGdDQUFnQywwQ0FBMEMsa0NBQWtDLGFBQWEsZ0JBQWdCLEdBQUcsaURBQWlELHlDQUF5QyxpQ0FBaUMsZUFBZSxpQkFBaUIsR0FBRywrQ0FBK0MsMkNBQTJDLG1DQUFtQyxjQUFjLGdCQUFnQixHQUFHLHFCQUFxQjtBQUM5MGM7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQdkM7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLDJEQUEyRCxrQkFBa0IsMkJBQTJCLGlCQUFpQixlQUFlLG9CQUFvQixHQUFHLFdBQVcsc0JBQXNCLG9CQUFvQixHQUFHLG1CQUFtQixvQkFBb0IsR0FBRyxrQkFBa0Isa0JBQWtCLEdBQUcscUJBQXFCLGtCQUFrQixvQkFBb0IsMkJBQTJCLEdBQUcsc0JBQXNCLGlCQUFpQixrQkFBa0IsMkJBQTJCLHdCQUF3QixzQkFBc0Isb0JBQW9CLEdBQUcsb0JBQW9CLG9CQUFvQixHQUFHLHFCQUFxQixnQkFBZ0Isd0JBQXdCLDBCQUEwQixpQ0FBaUMsc0JBQXNCLEdBQUcsNkNBQTZDLDZIQUE2SCxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsaUNBQWlDO0FBQ3h1QztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUNnSDtBQUNqQjtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsaURBQWlELGtCQUFrQixHQUFHLGlCQUFpQixnQkFBZ0IsbUJBQW1CLDZCQUE2QixHQUFHLHdEQUF3RCx1TUFBdU0sVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsaUNBQWlDO0FBQzllO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSwyREFBMkQsa0JBQWtCLG9CQUFvQixrQ0FBa0MsR0FBRyxtQkFBbUIsbUJBQW1CLGlCQUFpQixrQkFBa0IsaUNBQWlDLHdCQUF3QiwyQkFBMkIsZ0JBQWdCLEdBQUcsWUFBWSxpQkFBaUIsdUJBQXVCLHFCQUFxQixpQkFBaUIsbUNBQW1DLEdBQUcsV0FBVyxnQkFBZ0Isa0JBQWtCLHNCQUFzQixrQkFBa0IsbUNBQW1DLGlCQUFpQixvQkFBb0Isc0JBQXNCLG1DQUFtQyx1Q0FBdUMsdUNBQXVDLEdBQUcsb0JBQW9CLHFCQUFxQixrQkFBa0Isa0NBQWtDLEdBQUcsVUFBVSxpQ0FBaUMsd0JBQXdCLEdBQUcscURBQXFELDZKQUE2SixVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsaUNBQWlDO0FBQ3AvQztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUNnSDtBQUNqQjtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0Esa0pBQWtKLDZCQUE2QixjQUFjLEdBQUcsdUNBQXVDLCtCQUErQixHQUFHLGtCQUFrQix5QkFBeUIsNkJBQTZCLEdBQUcsbUJBQW1CLGtDQUFrQyxHQUFHLGtCQUFrQixtQ0FBbUMsR0FBRyxrQkFBa0IsNEJBQTRCLEdBQUcsYUFBYSxrQkFBa0Isa0NBQWtDLDBCQUEwQixHQUFHLG1EQUFtRCxpTEFBaUwsTUFBTSxXQUFXLFVBQVUsTUFBTSxVQUFVLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxpQ0FBaUM7QUFDamlDO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSx1REFBdUQsbUJBQW1CLGlCQUFpQixrQkFBa0Isa0NBQWtDLEdBQUcsZUFBZSx1QkFBdUIsaUJBQWlCLEdBQUcsZUFBZSxzQkFBc0IsbUJBQW1CLHlDQUF5Qyx3QkFBd0IsR0FBRyxhQUFhLGtCQUFrQixtQ0FBbUMsR0FBRyxpQkFBaUIsMEJBQTBCLEdBQUcsa0JBQWtCLHVCQUF1QixHQUFHLGlEQUFpRCw2SUFBNkksVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsaUNBQWlDO0FBQy80QjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsNkRBQTZELFVBQVUsaUJBQWlCLGtCQUFrQixtQ0FBbUMsd0JBQXdCLDRCQUE0Qiw0QkFBNEIsR0FBRyx3QkFBd0IsaUJBQWlCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLDRCQUE0QixvQkFBb0IsR0FBRywyQ0FBMkMsaUJBQWlCLG9CQUFvQixzQkFBc0IsR0FBRyx1QkFBdUIsaUJBQWlCLEdBQUcsYUFBYSx1QkFBdUIsaUJBQWlCLEdBQUcsYUFBYSxpQkFBaUIsZ0JBQWdCLDRCQUE0QixvQkFBb0IsR0FBRyxvQkFBb0Isa0JBQWtCLHdCQUF3QixHQUFHLGNBQWMsa0JBQWtCLEdBQUcsaUJBQWlCLGtCQUFrQiwyQkFBMkIsaUJBQWlCLGlCQUFpQixzQkFBc0IsbUJBQW1CLHlDQUF5Qyx3QkFBd0IsR0FBRyw0Q0FBNEMsb0hBQW9ILE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxpQ0FBaUM7QUFDcmxEO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2ZBO0FBQ0EsSUFBSSxLQUE0RDtBQUNoRSxJQUFJLENBQzJHO0FBQy9HLENBQUMsOEJBQThCOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssNENBQTRDO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssNENBQTRDO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxJQUFJO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDRCQUE0Qix3QkFBd0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLCtCQUErQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLG1DQUFtQztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9CQUFvQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDhDQUE4QztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsb0JBQW9CO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQyxzQ0FBc0MseUNBQXlDO0FBQy9FLGtDQUFrQyxxQ0FBcUM7QUFDdkUsbUNBQW1DLHNDQUFzQztBQUN6RSxxQkFBcUIsdUJBQXVCO0FBQzVDLHVCQUF1Qix5QkFBeUI7QUFDaEQseUJBQXlCLDJCQUEyQjtBQUNwRCxvQkFBb0IsdUJBQXVCO0FBQzNDLHVCQUF1QiwwQkFBMEI7QUFDakQsaUNBQWlDLG9DQUFvQztBQUNyRSxxQkFBcUIsdUJBQXVCO0FBQzVDLDJCQUEyQiw4QkFBOEI7QUFDekQsc0JBQXNCLHlCQUF5QjtBQUMvQyxxQkFBcUIsd0JBQXdCO0FBQzdDLHVCQUF1QiwwQkFBMEI7QUFDakQseUJBQXlCLDJCQUEyQjtBQUNwRCwwQkFBMEIsNkJBQTZCO0FBQ3ZELHNCQUFzQix5QkFBeUI7QUFDL0Msd0JBQXdCLDJCQUEyQjtBQUNuRCwrQkFBK0IsaUNBQWlDO0FBQ2hFLCtCQUErQixrQ0FBa0M7QUFDakUseUJBQXlCLDJCQUEyQjtBQUNwRCwwQkFBMEIsNEJBQTRCO0FBQ3RELGdDQUFnQyxtQ0FBbUM7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHFCQUFxQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsV0FBVztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxnQkFBZ0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0ZBQWdGLGdCQUFnQjtBQUNoRztBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLCtCQUErQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0NBQWdDO0FBQ25EO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtREFBbUQsYUFBYTs7QUFFaEUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNXNFRCxNQUFxRjtBQUNyRixNQUEyRTtBQUMzRSxNQUFrRjtBQUNsRixNQUFxRztBQUNyRyxNQUE4RjtBQUM5RixNQUE4RjtBQUM5RixNQUE4RjtBQUM5RjtBQUNBOztBQUVBOztBQUVBLDRCQUE0Qix3RkFBbUI7QUFDL0Msd0JBQXdCLHFHQUFhOztBQUVyQyx1QkFBdUIsMEZBQWE7QUFDcEM7QUFDQSxpQkFBaUIsa0ZBQU07QUFDdkIsNkJBQTZCLHlGQUFrQjs7QUFFL0MsYUFBYSw2RkFBRyxDQUFDLDhFQUFPOzs7O0FBSXdDO0FBQ2hFLE9BQU8saUVBQWUsOEVBQU8sSUFBSSxxRkFBYyxHQUFHLHFGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUF1RztBQUN2RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHVGQUFPOzs7O0FBSWlEO0FBQ3pFLE9BQU8saUVBQWUsdUZBQU8sSUFBSSw4RkFBYyxHQUFHLDhGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUFxRztBQUNyRyxNQUEyRjtBQUMzRixNQUFrRztBQUNsRyxNQUFxSDtBQUNySCxNQUE4RztBQUM5RyxNQUE4RztBQUM5RyxNQUFxSDtBQUNySDtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLGtHQUFPOzs7O0FBSStEO0FBQ3ZGLE9BQU8saUVBQWUsa0dBQU8sSUFBSSx5R0FBYyxHQUFHLHlHQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUErRztBQUMvRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLCtGQUFPOzs7O0FBSXlEO0FBQ2pGLE9BQU8saUVBQWUsK0ZBQU8sSUFBSSxzR0FBYyxHQUFHLHNHQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUFxRztBQUNyRyxNQUEyRjtBQUMzRixNQUFrRztBQUNsRyxNQUFxSDtBQUNySCxNQUE4RztBQUM5RyxNQUE4RztBQUM5RyxNQUFnSDtBQUNoSDtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDZGQUFPOzs7O0FBSTBEO0FBQ2xGLE9BQU8saUVBQWUsNkZBQU8sSUFBSSxvR0FBYyxHQUFHLG9HQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUEyRztBQUMzRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDJGQUFPOzs7O0FBSXFEO0FBQzdFLE9BQU8saUVBQWUsMkZBQU8sSUFBSSxrR0FBYyxHQUFHLGtHQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmc0Q7QUFDaEM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0Esd0JBQXdCLG1CQUFtQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxtRUFBYTtBQUNuRDtBQUNBO0FBQ0EsK0NBQStDLG1FQUFhO0FBQzVEO0FBQ0Esc0NBQXNDLG1FQUFhO0FBQ25EO0FBQ0E7QUFDQSxtREFBbUQseUJBQXlCO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsOEJBQThCO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHVGQUF1RjtBQUN2SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSw0QkFBNEIsOEJBQThCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsV0FBVztBQUN6RSxnQ0FBZ0MsNENBQTRDO0FBQzVFO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRSxJQUFJO0FBQ3ZFO0FBQ0E7QUFDQSxzRUFBc0UsSUFBSTtBQUMxRSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFDQUFxQyw2QkFBNkIsRUFBRSwyQkFBMkI7QUFDL0YsNENBQTRDLDJCQUEyQjtBQUN2RSw4Q0FBOEMsNEJBQTRCO0FBQzFFLDRDQUE0QywyQkFBMkI7QUFDdkUsa0RBQWtELGlDQUFpQztBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0hXO0FBQ007QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsa0NBQWtDO0FBQzlEO0FBQ0Esb0NBQW9DLDJCQUEyQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwrQkFBK0I7QUFDM0Q7QUFDQSxvQ0FBb0MsMkJBQTJCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGtDQUFrQztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwrQkFBK0I7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELFNBQVMsR0FBRyxTQUFTO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHNCQUFzQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsdUJBQXVCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLElBQUksc0RBQWUsRUFBRTtBQUNqRCxrQ0FBa0MsK0NBQVEsYUFBYSwrQ0FBUTtBQUMvRCw2QkFBNkIsK0NBQVE7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHFCQUFxQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0Msa0JBQWtCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsUUFBUTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxrQkFBa0I7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxnQkFBZ0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pNekIsb0JBQW9CLCtlQUErZSxJQUFJLHlpQkFBeWlCLElBQUksb1hBQW9YLElBQUksa2lCQUFraUIsSUFBSSxnaEJBQWdoQixJQUFJLHlnQkFBeWdCLElBQUksK2hCQUEraEIsSUFBSSw2bkJBQTZuQixJQUFJLDhqQkFBOGpCLElBQUksNmpCQUE2akIsSUFBSSx1akJBQXVqQixJQUFJLDJqQkFBMmpCLElBQUksNm5CQUE2bkIsSUFBSSx3bEJBQXdsQixJQUFJLHdsQkFBd2xCLElBQUksOG1CQUE4bUIsSUFBSSxta0JBQW1rQixJQUFJLDJuQkFBMm5CLElBQUksNmlCQUE2aUIsSUFBSSw0cUJBQTRxQixJQUFJLDRkQUE0ZCxJQUFJLGllQUFpZSxJQUFJLGttQkFBa21CLElBQUksc3FCQUFzcUIsSUFBSSxta0JBQW1rQixJQUFJLCtvQkFBK29CLElBQUksaW9CQUFpb0IsSUFBSSwrbUJBQSttQixJQUFJLHFvQkFBcW9CLElBQUksZ2lCQUFnaUIsSUFBSSx5bUJBQXltQixJQUFJLGdpQkFBZ2lCLElBQUksNGxCQUE0bEIsSUFBSSw2a0JBQTZrQixJQUFJLCttQkFBK21CLElBQUksNG9CQUE0b0IsSUFBSSxvbUJBQW9tQixJQUFJLDZmQUE2ZixJQUFJLDZuQkFBNm5CLElBQUksZ2VBQWdlLElBQUksd2tCQUF3a0IsSUFBSSwybEJBQTJsQixJQUFJLDhsQkFBOGxCLElBQUksZ29CQUFnb0IsSUFBSSxxbUJBQXFtQixJQUFJLGlsQkFBaWxCLElBQUksdWlCQUF1aUIsSUFBSSw2bEJBQTZsQixJQUFJLG1rQkFBbWtCLElBQUksMGVBQTBlLElBQUksK2xCQUErbEIsSUFBSSxnbUJBQWdtQixJQUFJLCtqQkFBK2pCLElBQUksd3FCQUF3cUIsSUFBSSxrbEJBQWtsQixJQUFJLDRuQkFBNG5CLElBQUksNG5CQUE0bkIsSUFBSSw4bEJBQThsQixJQUFJLDBHQUEwRyw2QkFBNkIsOGNBQThjLElBQUksNmhCQUE2aEIsSUFBSSw0ZEFBNGQsSUFBSSwrSEFBK0gsNlVBQTZVLElBQUksc2hCQUFzaEIsSUFBSSx1aUJBQXVpQixJQUFJLDJtQkFBMm1CLElBQUksbWxCQUFtbEIsSUFBSSx5cEJBQXlwQixJQUFJLGdkQUFnZCxJQUFJLCtvQkFBK29CLElBQUksbWhCQUFtaEIsSUFBSSwyb0JBQTJvQixJQUFJLHluQkFBeW5CLElBQUksc2tCQUFza0IsSUFBSSxzckJBQXNyQixJQUFJLHNqQkFBc2pCLElBQUksNmdCQUE2Z0IsSUFBSSxvaUJBQW9pQixJQUFJLGdiQUFnYixJQUFJLDBhQUEwYSxJQUFJLHduQkFBd25CLElBQUksbXFCQUFtcUIsSUFBSSx1b0JBQXVvQixJQUFJLHNzQkFBc3NCLElBQUkscWlCQUFxaUIsSUFBSSxpbEJBQWlsQixJQUFJLDBzQkFBMHNCLElBQUksMklBQTJJLCtDQUErQyx1QkFBdUIsbWRBQW1kLElBQUksa3ZCQUFrdkIsSUFBSSxxbkJBQXFuQixJQUFJLHV0QkFBdXRCLElBQUksOHFCQUE4cUIsSUFBSSwra0JBQStrQixJQUFJLHVuQkFBdW5CLElBQUksMGpCQUEwakIsSUFBSSxxb0JBQXFvQixJQUFJLHluQkFBeW5CLElBQUksc21CQUFzbUIsSUFBSSw2b0JBQTZvQixJQUFJLDBtQkFBMG1CLElBQUksNGhCQUE0aEI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FodTBEO0FBQ1I7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLElBQUksc0RBQWUsRUFBRTtBQUM3QztBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsK0NBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywrQ0FBUTtBQUNuRCxzQkFBc0IsK0NBQVE7QUFDOUIsdURBQXVELElBQUk7QUFDM0Q7QUFDQTtBQUNBLDhCQUE4QiwrQ0FBUTtBQUN0QztBQUNBO0FBQ0EsMkJBQTJCLCtDQUFRO0FBQ25DLHdCQUF3QiwrQ0FBUTtBQUNoQyx3QkFBd0IsK0NBQVE7QUFDaEMsMkJBQTJCLCtDQUFRO0FBQ25DLHlCQUF5QiwrQ0FBUTtBQUNqQyx3QkFBd0IsK0NBQVE7QUFDaEMsMENBQTBDLFNBQVM7QUFDbkQsaUJBQWlCLE1BQU07QUFDdkIsaUJBQWlCLE1BQU07QUFDdkIsb0JBQW9CLFNBQVM7QUFDN0Isa0JBQWtCLE9BQU87QUFDekIsaUJBQWlCLE1BQU07QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsT0FBTyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQytCO0FBQzVCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixJQUFJLHFFQUFlLEVBQUU7QUFDN0M7QUFDQTtBQUNBLGdDQUFnQyw4REFBUTtBQUN4QztBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGdFQUFnRSw4REFBUTtBQUN4RSxnRkFBZ0YsOERBQVEsd0JBQXdCLDhEQUFRO0FBQ3hIO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyw4REFBUTtBQUN4Qyx5QkFBeUIsOERBQVE7QUFDakMsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsU0FBUyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCZ0I7QUFDRDtBQUNDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHFCQUFxQjtBQUM3QztBQUNBO0FBQ0EsNEVBQTRFLFVBQVU7QUFDdEYsaUJBQWlCLFVBQVUsRUFBRSxHQUFHLFVBQVUsZUFBZSxHQUFHLHVCQUF1QjtBQUNuRixrQ0FBa0Msc0JBQXNCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsVUFBVTtBQUNwRDtBQUNBLFFBQVEsOENBQWlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsVUFBVTtBQUMvQztBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsVUFBVTtBQUMvQztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JFWTtBQUNGO0FBQ1I7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGtEQUFTO0FBQ3pDO0FBQ0EsNkJBQTZCLGtEQUFTO0FBQ3RDO0FBQ0EsNkJBQTZCLGtEQUFTO0FBQ3RDO0FBQ0EsNkJBQTZCLGtEQUFTO0FBQ3RDO0FBQ0EsbUNBQW1DLGlEQUFRO0FBQzNDO0FBQ0EsZ0NBQWdDLGlEQUFRO0FBQ3hDO0FBQ0EsZ0NBQWdDLGlEQUFRO0FBQ3hDO0FBQ0EsZ0NBQWdDLGlEQUFRO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7OztVQzlCdEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2lDO0FBQ1Q7QUFDdUM7QUFDL0M7QUFDckM7QUFDQSxxQkFBcUIsc0VBQU87QUFDNUI7QUFDQTtBQUNBLG1CQUFtQiw4REFBTTtBQUN6QjtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsMkZBQWdCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNEQUFNO0FBQ3pCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vbm9kZV9tb2R1bGVzL25vdWlzbGlkZXIvZGlzdC9ub3Vpc2xpZGVyLmNzcyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvYmFza2V0L2Jhc2tldC5jc3MiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL3Byb2R1Y3RzX2ZpZWxkL3Byb2R1Y3Rfc2VsZWN0aW9uL3Byb2R1Y3Rfc2VsZWN0aW9uLmNzcyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvcHJvZHVjdHNfZmllbGQvcHJvZHVjdHNfZmllbGQuY3NzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9zZWxlY3RfYm94L3JhbmdlLXNsaWRlci9yYW5nZS1zbGlkZXIuY3NzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9zZWxlY3RfYm94L3NlbGVjdF9ib3guY3NzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9ub2RlX21vZHVsZXMvbm91aXNsaWRlci9kaXN0L25vdWlzbGlkZXIuanMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vbm9kZV9tb2R1bGVzL25vdWlzbGlkZXIvZGlzdC9ub3Vpc2xpZGVyLmNzcz9jM2Q1Iiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9iYXNrZXQvYmFza2V0LmNzcz85NTdlIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9wcm9kdWN0c19maWVsZC9wcm9kdWN0X3NlbGVjdGlvbi9wcm9kdWN0X3NlbGVjdGlvbi5jc3M/Njg0NCIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvcHJvZHVjdHNfZmllbGQvcHJvZHVjdHNfZmllbGQuY3NzPzM3MmUiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL3NlbGVjdF9ib3gvcmFuZ2Utc2xpZGVyL3JhbmdlLXNsaWRlci5jc3M/MjFjNiIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvc2VsZWN0X2JveC9zZWxlY3RfYm94LmNzcz81MmUwIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9iYXNrZXQvYmFza2V0LnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9wcm9kdWN0c19maWVsZC9wcm9kdWN0X3NlbGVjdGlvbi9wcm9kdWN0X3NlbGVjdGlvbi50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvcHJvZHVjdHNfZmllbGQvcHJvZHVjdHMudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL3Byb2R1Y3RzX2ZpZWxkL3Byb2R1Y3RzX2ZpZWxkLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9zZWxlY3RfYm94L3NlbGVjdEFyci50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvc2VsZWN0X2JveC9zZWxlY3RFbC50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvc2VsZWN0X2JveC9zZWxlY3RfYm94LnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBGdW5jdGlvbmFsIHN0eWxpbmc7XFxuICogVGhlc2Ugc3R5bGVzIGFyZSByZXF1aXJlZCBmb3Igbm9VaVNsaWRlciB0byBmdW5jdGlvbi5cXG4gKiBZb3UgZG9uJ3QgbmVlZCB0byBjaGFuZ2UgdGhlc2UgcnVsZXMgdG8gYXBwbHkgeW91ciBkZXNpZ24uXFxuICovXFxuLm5vVWktdGFyZ2V0LFxcbi5ub1VpLXRhcmdldCAqIHtcXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbXMtdG91Y2gtYWN0aW9uOiBub25lO1xcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLm5vVWktdGFyZ2V0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLm5vVWktYmFzZSxcXG4ubm9VaS1jb25uZWN0cyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi8qIFdyYXBwZXIgZm9yIGFsbCBjb25uZWN0IGVsZW1lbnRzLlxcbiAqL1xcbi5ub1VpLWNvbm5lY3RzIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB6LWluZGV4OiAwO1xcbn1cXG4ubm9VaS1jb25uZWN0LFxcbi5ub1VpLW9yaWdpbiB7XFxuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XFxuICB0cmFuc2Zvcm0tc3R5bGU6IGZsYXQ7XFxufVxcbi8qIE9mZnNldCBkaXJlY3Rpb25cXG4gKi9cXG4ubm9VaS10eHQtZGlyLXJ0bC5ub1VpLWhvcml6b250YWwgLm5vVWktb3JpZ2luIHtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogYXV0bztcXG59XFxuLyogR2l2ZSBvcmlnaW5zIDAgaGVpZ2h0L3dpZHRoIHNvIHRoZXkgZG9uJ3QgaW50ZXJmZXJlIHdpdGggY2xpY2tpbmcgdGhlXFxuICogY29ubmVjdCBlbGVtZW50cy5cXG4gKi9cXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1vcmlnaW4ge1xcbiAgdG9wOiAtMTAwJTtcXG4gIHdpZHRoOiAwO1xcbn1cXG4ubm9VaS1ob3Jpem9udGFsIC5ub1VpLW9yaWdpbiB7XFxuICBoZWlnaHQ6IDA7XFxufVxcbi5ub1VpLWhhbmRsZSB7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuLm5vVWktdG91Y2gtYXJlYSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm5vVWktc3RhdGUtdGFwIC5ub1VpLWNvbm5lY3QsXFxuLm5vVWktc3RhdGUtdGFwIC5ub1VpLW9yaWdpbiB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XFxufVxcbi5ub1VpLXN0YXRlLWRyYWcgKiB7XFxuICBjdXJzb3I6IGluaGVyaXQgIWltcG9ydGFudDtcXG59XFxuLyogU2xpZGVyIHNpemUgYW5kIGhhbmRsZSBwbGFjZW1lbnQ7XFxuICovXFxuLm5vVWktaG9yaXpvbnRhbCB7XFxuICBoZWlnaHQ6IDE4cHg7XFxufVxcbi5ub1VpLWhvcml6b250YWwgLm5vVWktaGFuZGxlIHtcXG4gIHdpZHRoOiAzNHB4O1xcbiAgaGVpZ2h0OiAyOHB4O1xcbiAgcmlnaHQ6IC0xN3B4O1xcbiAgdG9wOiAtNnB4O1xcbn1cXG4ubm9VaS12ZXJ0aWNhbCB7XFxuICB3aWR0aDogMThweDtcXG59XFxuLm5vVWktdmVydGljYWwgLm5vVWktaGFuZGxlIHtcXG4gIHdpZHRoOiAyOHB4O1xcbiAgaGVpZ2h0OiAzNHB4O1xcbiAgcmlnaHQ6IC02cHg7XFxuICBib3R0b206IC0xN3B4O1xcbn1cXG4ubm9VaS10eHQtZGlyLXJ0bC5ub1VpLWhvcml6b250YWwgLm5vVWktaGFuZGxlIHtcXG4gIGxlZnQ6IC0xN3B4O1xcbiAgcmlnaHQ6IGF1dG87XFxufVxcbi8qIFN0eWxpbmc7XFxuICogR2l2aW5nIHRoZSBjb25uZWN0IGVsZW1lbnQgYSBib3JkZXIgcmFkaXVzIGNhdXNlcyBpc3N1ZXMgd2l0aCB1c2luZyB0cmFuc2Zvcm06IHNjYWxlXFxuICovXFxuLm5vVWktdGFyZ2V0IHtcXG4gIGJhY2tncm91bmQ6ICNGQUZBRkE7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjRDNEM0QzO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4ICNGMEYwRjAsIDAgM3B4IDZweCAtNXB4ICNCQkI7XFxufVxcbi5ub1VpLWNvbm5lY3RzIHtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuLm5vVWktY29ubmVjdCB7XFxuICBiYWNrZ3JvdW5kOiAjM0ZCOEFGO1xcbn1cXG4vKiBIYW5kbGVzIGFuZCBjdXJzb3JzO1xcbiAqL1xcbi5ub1VpLWRyYWdnYWJsZSB7XFxuICBjdXJzb3I6IGV3LXJlc2l6ZTtcXG59XFxuLm5vVWktdmVydGljYWwgLm5vVWktZHJhZ2dhYmxlIHtcXG4gIGN1cnNvcjogbnMtcmVzaXplO1xcbn1cXG4ubm9VaS1oYW5kbGUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0Q5RDlEOTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJhY2tncm91bmQ6ICNGRkY7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMXB4ICNGRkYsIGluc2V0IDAgMXB4IDdweCAjRUJFQkVCLCAwIDNweCA2cHggLTNweCAjQkJCO1xcbn1cXG4ubm9VaS1hY3RpdmUge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAjRkZGLCBpbnNldCAwIDFweCA3cHggI0RERCwgMCAzcHggNnB4IC0zcHggI0JCQjtcXG59XFxuLyogSGFuZGxlIHN0cmlwZXM7XFxuICovXFxuLm5vVWktaGFuZGxlOmJlZm9yZSxcXG4ubm9VaS1oYW5kbGU6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMTRweDtcXG4gIHdpZHRoOiAxcHg7XFxuICBiYWNrZ3JvdW5kOiAjRThFN0U2O1xcbiAgbGVmdDogMTRweDtcXG4gIHRvcDogNnB4O1xcbn1cXG4ubm9VaS1oYW5kbGU6YWZ0ZXIge1xcbiAgbGVmdDogMTdweDtcXG59XFxuLm5vVWktdmVydGljYWwgLm5vVWktaGFuZGxlOmJlZm9yZSxcXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1oYW5kbGU6YWZ0ZXIge1xcbiAgd2lkdGg6IDE0cHg7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGxlZnQ6IDZweDtcXG4gIHRvcDogMTRweDtcXG59XFxuLm5vVWktdmVydGljYWwgLm5vVWktaGFuZGxlOmFmdGVyIHtcXG4gIHRvcDogMTdweDtcXG59XFxuLyogRGlzYWJsZWQgc3RhdGU7XFxuICovXFxuW2Rpc2FibGVkXSAubm9VaS1jb25uZWN0IHtcXG4gIGJhY2tncm91bmQ6ICNCOEI4Qjg7XFxufVxcbltkaXNhYmxlZF0ubm9VaS10YXJnZXQsXFxuW2Rpc2FibGVkXS5ub1VpLWhhbmRsZSxcXG5bZGlzYWJsZWRdIC5ub1VpLWhhbmRsZSB7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG4vKiBCYXNlO1xcbiAqXFxuICovXFxuLm5vVWktcGlwcyxcXG4ubm9VaS1waXBzICoge1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLm5vVWktcGlwcyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb2xvcjogIzk5OTtcXG59XFxuLyogVmFsdWVzO1xcbiAqXFxuICovXFxuLm5vVWktdmFsdWUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm5vVWktdmFsdWUtc3ViIHtcXG4gIGNvbG9yOiAjY2NjO1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbn1cXG4vKiBNYXJraW5ncztcXG4gKlxcbiAqL1xcbi5ub1VpLW1hcmtlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kOiAjQ0NDO1xcbn1cXG4ubm9VaS1tYXJrZXItc3ViIHtcXG4gIGJhY2tncm91bmQ6ICNBQUE7XFxufVxcbi5ub1VpLW1hcmtlci1sYXJnZSB7XFxuICBiYWNrZ3JvdW5kOiAjQUFBO1xcbn1cXG4vKiBIb3Jpem9udGFsIGxheW91dDtcXG4gKlxcbiAqL1xcbi5ub1VpLXBpcHMtaG9yaXpvbnRhbCB7XFxuICBwYWRkaW5nOiAxMHB4IDA7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICB0b3A6IDEwMCU7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5ub1VpLXZhbHVlLWhvcml6b250YWwge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA1MCUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNTAlKTtcXG59XFxuLm5vVWktcnRsIC5ub1VpLXZhbHVlLWhvcml6b250YWwge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDUwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDUwJSk7XFxufVxcbi5ub1VpLW1hcmtlci1ob3Jpem9udGFsLm5vVWktbWFya2VyIHtcXG4gIG1hcmdpbi1sZWZ0OiAtMXB4O1xcbiAgd2lkdGg6IDJweDtcXG4gIGhlaWdodDogNXB4O1xcbn1cXG4ubm9VaS1tYXJrZXItaG9yaXpvbnRhbC5ub1VpLW1hcmtlci1zdWIge1xcbiAgaGVpZ2h0OiAxMHB4O1xcbn1cXG4ubm9VaS1tYXJrZXItaG9yaXpvbnRhbC5ub1VpLW1hcmtlci1sYXJnZSB7XFxuICBoZWlnaHQ6IDE1cHg7XFxufVxcbi8qIFZlcnRpY2FsIGxheW91dDtcXG4gKlxcbiAqL1xcbi5ub1VpLXBpcHMtdmVydGljYWwge1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMTAwJTtcXG59XFxuLm5vVWktdmFsdWUtdmVydGljYWwge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcbn1cXG4ubm9VaS1ydGwgLm5vVWktdmFsdWUtdmVydGljYWwge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA1MCUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNTAlKTtcXG59XFxuLm5vVWktbWFya2VyLXZlcnRpY2FsLm5vVWktbWFya2VyIHtcXG4gIHdpZHRoOiA1cHg7XFxuICBoZWlnaHQ6IDJweDtcXG4gIG1hcmdpbi10b3A6IC0xcHg7XFxufVxcbi5ub1VpLW1hcmtlci12ZXJ0aWNhbC5ub1VpLW1hcmtlci1zdWIge1xcbiAgd2lkdGg6IDEwcHg7XFxufVxcbi5ub1VpLW1hcmtlci12ZXJ0aWNhbC5ub1VpLW1hcmtlci1sYXJnZSB7XFxuICB3aWR0aDogMTVweDtcXG59XFxuLm5vVWktdG9vbHRpcCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNEOUQ5RDk7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgY29sb3I6ICMwMDA7XFxuICBwYWRkaW5nOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG4ubm9VaS1ob3Jpem9udGFsIC5ub1VpLXRvb2x0aXAge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcbiAgbGVmdDogNTAlO1xcbiAgYm90dG9tOiAxMjAlO1xcbn1cXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS10b29sdGlwIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcXG4gIHRvcDogNTAlO1xcbiAgcmlnaHQ6IDEyMCU7XFxufVxcbi5ub1VpLWhvcml6b250YWwgLm5vVWktb3JpZ2luID4gLm5vVWktdG9vbHRpcCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgMCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDApO1xcbiAgbGVmdDogYXV0bztcXG4gIGJvdHRvbTogMTBweDtcXG59XFxuLm5vVWktdmVydGljYWwgLm5vVWktb3JpZ2luID4gLm5vVWktdG9vbHRpcCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xOHB4KTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xOHB4KTtcXG4gIHRvcDogYXV0bztcXG4gIHJpZ2h0OiAyOHB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvbm91aXNsaWRlci9kaXN0L25vdWlzbGlkZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7RUFHRTtBQUNGOztFQUVFLDJCQUEyQjtFQUMzQiw2Q0FBNkM7RUFDN0MseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsMkJBQTJCO0VBQzNCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7O0VBRUUsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaO0FBQ0E7RUFDRTtBQUNGO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjtBQUNBOztFQUVFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLE1BQU07RUFDTixRQUFRO0VBQ1IsWUFBWTtFQUNaLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLG9DQUFvQztFQUNwQyxxQkFBcUI7RUFDckIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRTtBQUNGO0VBQ0UsT0FBTztFQUNQLFdBQVc7QUFDYjtBQUNBOztFQUVFO0FBQ0Y7RUFDRSxVQUFVO0VBQ1YsUUFBUTtBQUNWO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFDQTtFQUNFLG1DQUFtQztFQUNuQywyQkFBMkI7RUFDM0Isa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiO0FBQ0E7O0VBRUUsa0NBQWtDO0VBQ2xDLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRTtBQUNGO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixTQUFTO0FBQ1g7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtBQUNmO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsV0FBVztBQUNiO0FBQ0E7O0VBRUU7QUFDRjtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHdEQUF3RDtBQUMxRDtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFO0FBQ0Y7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLDRFQUE0RTtBQUM5RTtBQUNBO0VBQ0UseUVBQXlFO0FBQzNFO0FBQ0E7RUFDRTtBQUNGOztFQUVFLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixRQUFRO0FBQ1Y7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBOztFQUVFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsU0FBUztFQUNULFNBQVM7QUFDWDtBQUNBO0VBQ0UsU0FBUztBQUNYO0FBQ0E7RUFDRTtBQUNGO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7OztFQUdFLG1CQUFtQjtBQUNyQjtBQUNBOztFQUVFO0FBQ0Y7O0VBRUUsMkJBQTJCO0VBQzNCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjtBQUNBOztFQUVFO0FBQ0Y7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGVBQWU7QUFDakI7QUFDQTs7RUFFRTtBQUNGO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRTtBQUNGO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixTQUFTO0VBQ1QsT0FBTztFQUNQLFdBQVc7QUFDYjtBQUNBO0VBQ0UsdUNBQXVDO0VBQ3ZDLCtCQUErQjtBQUNqQztBQUNBO0VBQ0Usc0NBQXNDO0VBQ3RDLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixXQUFXO0FBQ2I7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7O0VBRUU7QUFDRjtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osTUFBTTtFQUNOLFVBQVU7QUFDWjtBQUNBO0VBQ0UscUNBQXFDO0VBQ3JDLDZCQUE2QjtFQUM3QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLG9DQUFvQztFQUNwQyw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHFDQUFxQztFQUNyQyw2QkFBNkI7RUFDN0IsU0FBUztFQUNULFlBQVk7QUFDZDtBQUNBO0VBQ0UscUNBQXFDO0VBQ3JDLDZCQUE2QjtFQUM3QixRQUFRO0VBQ1IsV0FBVztBQUNiO0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMsNEJBQTRCO0VBQzVCLFVBQVU7RUFDVixZQUFZO0FBQ2Q7QUFDQTtFQUNFLHNDQUFzQztFQUN0Qyw4QkFBOEI7RUFDOUIsU0FBUztFQUNULFdBQVc7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBGdW5jdGlvbmFsIHN0eWxpbmc7XFxuICogVGhlc2Ugc3R5bGVzIGFyZSByZXF1aXJlZCBmb3Igbm9VaVNsaWRlciB0byBmdW5jdGlvbi5cXG4gKiBZb3UgZG9uJ3QgbmVlZCB0byBjaGFuZ2UgdGhlc2UgcnVsZXMgdG8gYXBwbHkgeW91ciBkZXNpZ24uXFxuICovXFxuLm5vVWktdGFyZ2V0LFxcbi5ub1VpLXRhcmdldCAqIHtcXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbXMtdG91Y2gtYWN0aW9uOiBub25lO1xcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLm5vVWktdGFyZ2V0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLm5vVWktYmFzZSxcXG4ubm9VaS1jb25uZWN0cyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi8qIFdyYXBwZXIgZm9yIGFsbCBjb25uZWN0IGVsZW1lbnRzLlxcbiAqL1xcbi5ub1VpLWNvbm5lY3RzIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB6LWluZGV4OiAwO1xcbn1cXG4ubm9VaS1jb25uZWN0LFxcbi5ub1VpLW9yaWdpbiB7XFxuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XFxuICB0cmFuc2Zvcm0tc3R5bGU6IGZsYXQ7XFxufVxcbi8qIE9mZnNldCBkaXJlY3Rpb25cXG4gKi9cXG4ubm9VaS10eHQtZGlyLXJ0bC5ub1VpLWhvcml6b250YWwgLm5vVWktb3JpZ2luIHtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogYXV0bztcXG59XFxuLyogR2l2ZSBvcmlnaW5zIDAgaGVpZ2h0L3dpZHRoIHNvIHRoZXkgZG9uJ3QgaW50ZXJmZXJlIHdpdGggY2xpY2tpbmcgdGhlXFxuICogY29ubmVjdCBlbGVtZW50cy5cXG4gKi9cXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1vcmlnaW4ge1xcbiAgdG9wOiAtMTAwJTtcXG4gIHdpZHRoOiAwO1xcbn1cXG4ubm9VaS1ob3Jpem9udGFsIC5ub1VpLW9yaWdpbiB7XFxuICBoZWlnaHQ6IDA7XFxufVxcbi5ub1VpLWhhbmRsZSB7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuLm5vVWktdG91Y2gtYXJlYSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm5vVWktc3RhdGUtdGFwIC5ub1VpLWNvbm5lY3QsXFxuLm5vVWktc3RhdGUtdGFwIC5ub1VpLW9yaWdpbiB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XFxufVxcbi5ub1VpLXN0YXRlLWRyYWcgKiB7XFxuICBjdXJzb3I6IGluaGVyaXQgIWltcG9ydGFudDtcXG59XFxuLyogU2xpZGVyIHNpemUgYW5kIGhhbmRsZSBwbGFjZW1lbnQ7XFxuICovXFxuLm5vVWktaG9yaXpvbnRhbCB7XFxuICBoZWlnaHQ6IDE4cHg7XFxufVxcbi5ub1VpLWhvcml6b250YWwgLm5vVWktaGFuZGxlIHtcXG4gIHdpZHRoOiAzNHB4O1xcbiAgaGVpZ2h0OiAyOHB4O1xcbiAgcmlnaHQ6IC0xN3B4O1xcbiAgdG9wOiAtNnB4O1xcbn1cXG4ubm9VaS12ZXJ0aWNhbCB7XFxuICB3aWR0aDogMThweDtcXG59XFxuLm5vVWktdmVydGljYWwgLm5vVWktaGFuZGxlIHtcXG4gIHdpZHRoOiAyOHB4O1xcbiAgaGVpZ2h0OiAzNHB4O1xcbiAgcmlnaHQ6IC02cHg7XFxuICBib3R0b206IC0xN3B4O1xcbn1cXG4ubm9VaS10eHQtZGlyLXJ0bC5ub1VpLWhvcml6b250YWwgLm5vVWktaGFuZGxlIHtcXG4gIGxlZnQ6IC0xN3B4O1xcbiAgcmlnaHQ6IGF1dG87XFxufVxcbi8qIFN0eWxpbmc7XFxuICogR2l2aW5nIHRoZSBjb25uZWN0IGVsZW1lbnQgYSBib3JkZXIgcmFkaXVzIGNhdXNlcyBpc3N1ZXMgd2l0aCB1c2luZyB0cmFuc2Zvcm06IHNjYWxlXFxuICovXFxuLm5vVWktdGFyZ2V0IHtcXG4gIGJhY2tncm91bmQ6ICNGQUZBRkE7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjRDNEM0QzO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4ICNGMEYwRjAsIDAgM3B4IDZweCAtNXB4ICNCQkI7XFxufVxcbi5ub1VpLWNvbm5lY3RzIHtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuLm5vVWktY29ubmVjdCB7XFxuICBiYWNrZ3JvdW5kOiAjM0ZCOEFGO1xcbn1cXG4vKiBIYW5kbGVzIGFuZCBjdXJzb3JzO1xcbiAqL1xcbi5ub1VpLWRyYWdnYWJsZSB7XFxuICBjdXJzb3I6IGV3LXJlc2l6ZTtcXG59XFxuLm5vVWktdmVydGljYWwgLm5vVWktZHJhZ2dhYmxlIHtcXG4gIGN1cnNvcjogbnMtcmVzaXplO1xcbn1cXG4ubm9VaS1oYW5kbGUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0Q5RDlEOTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJhY2tncm91bmQ6ICNGRkY7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMXB4ICNGRkYsIGluc2V0IDAgMXB4IDdweCAjRUJFQkVCLCAwIDNweCA2cHggLTNweCAjQkJCO1xcbn1cXG4ubm9VaS1hY3RpdmUge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAjRkZGLCBpbnNldCAwIDFweCA3cHggI0RERCwgMCAzcHggNnB4IC0zcHggI0JCQjtcXG59XFxuLyogSGFuZGxlIHN0cmlwZXM7XFxuICovXFxuLm5vVWktaGFuZGxlOmJlZm9yZSxcXG4ubm9VaS1oYW5kbGU6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMTRweDtcXG4gIHdpZHRoOiAxcHg7XFxuICBiYWNrZ3JvdW5kOiAjRThFN0U2O1xcbiAgbGVmdDogMTRweDtcXG4gIHRvcDogNnB4O1xcbn1cXG4ubm9VaS1oYW5kbGU6YWZ0ZXIge1xcbiAgbGVmdDogMTdweDtcXG59XFxuLm5vVWktdmVydGljYWwgLm5vVWktaGFuZGxlOmJlZm9yZSxcXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1oYW5kbGU6YWZ0ZXIge1xcbiAgd2lkdGg6IDE0cHg7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGxlZnQ6IDZweDtcXG4gIHRvcDogMTRweDtcXG59XFxuLm5vVWktdmVydGljYWwgLm5vVWktaGFuZGxlOmFmdGVyIHtcXG4gIHRvcDogMTdweDtcXG59XFxuLyogRGlzYWJsZWQgc3RhdGU7XFxuICovXFxuW2Rpc2FibGVkXSAubm9VaS1jb25uZWN0IHtcXG4gIGJhY2tncm91bmQ6ICNCOEI4Qjg7XFxufVxcbltkaXNhYmxlZF0ubm9VaS10YXJnZXQsXFxuW2Rpc2FibGVkXS5ub1VpLWhhbmRsZSxcXG5bZGlzYWJsZWRdIC5ub1VpLWhhbmRsZSB7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG4vKiBCYXNlO1xcbiAqXFxuICovXFxuLm5vVWktcGlwcyxcXG4ubm9VaS1waXBzICoge1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLm5vVWktcGlwcyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb2xvcjogIzk5OTtcXG59XFxuLyogVmFsdWVzO1xcbiAqXFxuICovXFxuLm5vVWktdmFsdWUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm5vVWktdmFsdWUtc3ViIHtcXG4gIGNvbG9yOiAjY2NjO1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbn1cXG4vKiBNYXJraW5ncztcXG4gKlxcbiAqL1xcbi5ub1VpLW1hcmtlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kOiAjQ0NDO1xcbn1cXG4ubm9VaS1tYXJrZXItc3ViIHtcXG4gIGJhY2tncm91bmQ6ICNBQUE7XFxufVxcbi5ub1VpLW1hcmtlci1sYXJnZSB7XFxuICBiYWNrZ3JvdW5kOiAjQUFBO1xcbn1cXG4vKiBIb3Jpem9udGFsIGxheW91dDtcXG4gKlxcbiAqL1xcbi5ub1VpLXBpcHMtaG9yaXpvbnRhbCB7XFxuICBwYWRkaW5nOiAxMHB4IDA7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICB0b3A6IDEwMCU7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5ub1VpLXZhbHVlLWhvcml6b250YWwge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA1MCUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNTAlKTtcXG59XFxuLm5vVWktcnRsIC5ub1VpLXZhbHVlLWhvcml6b250YWwge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDUwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDUwJSk7XFxufVxcbi5ub1VpLW1hcmtlci1ob3Jpem9udGFsLm5vVWktbWFya2VyIHtcXG4gIG1hcmdpbi1sZWZ0OiAtMXB4O1xcbiAgd2lkdGg6IDJweDtcXG4gIGhlaWdodDogNXB4O1xcbn1cXG4ubm9VaS1tYXJrZXItaG9yaXpvbnRhbC5ub1VpLW1hcmtlci1zdWIge1xcbiAgaGVpZ2h0OiAxMHB4O1xcbn1cXG4ubm9VaS1tYXJrZXItaG9yaXpvbnRhbC5ub1VpLW1hcmtlci1sYXJnZSB7XFxuICBoZWlnaHQ6IDE1cHg7XFxufVxcbi8qIFZlcnRpY2FsIGxheW91dDtcXG4gKlxcbiAqL1xcbi5ub1VpLXBpcHMtdmVydGljYWwge1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMTAwJTtcXG59XFxuLm5vVWktdmFsdWUtdmVydGljYWwge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcbn1cXG4ubm9VaS1ydGwgLm5vVWktdmFsdWUtdmVydGljYWwge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA1MCUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNTAlKTtcXG59XFxuLm5vVWktbWFya2VyLXZlcnRpY2FsLm5vVWktbWFya2VyIHtcXG4gIHdpZHRoOiA1cHg7XFxuICBoZWlnaHQ6IDJweDtcXG4gIG1hcmdpbi10b3A6IC0xcHg7XFxufVxcbi5ub1VpLW1hcmtlci12ZXJ0aWNhbC5ub1VpLW1hcmtlci1zdWIge1xcbiAgd2lkdGg6IDEwcHg7XFxufVxcbi5ub1VpLW1hcmtlci12ZXJ0aWNhbC5ub1VpLW1hcmtlci1sYXJnZSB7XFxuICB3aWR0aDogMTVweDtcXG59XFxuLm5vVWktdG9vbHRpcCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNEOUQ5RDk7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgY29sb3I6ICMwMDA7XFxuICBwYWRkaW5nOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG4ubm9VaS1ob3Jpem9udGFsIC5ub1VpLXRvb2x0aXAge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcbiAgbGVmdDogNTAlO1xcbiAgYm90dG9tOiAxMjAlO1xcbn1cXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS10b29sdGlwIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcXG4gIHRvcDogNTAlO1xcbiAgcmlnaHQ6IDEyMCU7XFxufVxcbi5ub1VpLWhvcml6b250YWwgLm5vVWktb3JpZ2luID4gLm5vVWktdG9vbHRpcCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgMCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDApO1xcbiAgbGVmdDogYXV0bztcXG4gIGJvdHRvbTogMTBweDtcXG59XFxuLm5vVWktdmVydGljYWwgLm5vVWktb3JpZ2luID4gLm5vVWktdG9vbHRpcCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xOHB4KTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xOHB4KTtcXG4gIHRvcDogYXV0bztcXG4gIHJpZ2h0OiAyOHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIud3JhcHBlclByb2R1Y3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogOTUlO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uaG9tZSB7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2R1Y3ROYW1lSCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5wcm9kdWN0Rm90byB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ucHJvZHVjdEZvdG9NaW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5wcm9kdWN0Rm90b0l0ZW0ge1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5iYXNrZXRfY2lyY2xlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2R1Y3RGb3RvTWF4IHtcXG4gIHdpZHRoOiA2MHZ3O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJhY2tncm91bmQtc2l6ZTogYXV0bztcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG59LyojIHNvdXJjZU1hcHBpbmdVUkw9YmFza2V0LmNzcy5tYXAgKi9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYmFza2V0L2Jhc2tldC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvYmFza2V0L2Jhc2tldC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNDSjs7QURDQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQ0VKOztBREtBO0VBQ0ksZUFBQTtBQ0ZKOztBRElBO0VBQ0ksYUFBQTtBQ0RKOztBREdBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQ0FKOztBREdBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7QUNBSixDQUFBLHFDQUFBXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubm9uZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubm9Qcm9kdWN0cyB7XFxuICB3aWR0aDogNTB2dztcXG4gIGZvbnQtc2l6ZTogNXZ3O1xcbiAgbWFyZ2luOiA1MHB4IGF1dG8gMCAzMHB4O1xcbn0vKiMgc291cmNlTWFwcGluZ1VSTD1wcm9kdWN0X3NlbGVjdGlvbi5jc3MubWFwICovXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Byb2R1Y3RzX2ZpZWxkL3Byb2R1Y3Rfc2VsZWN0aW9uL3Byb2R1Y3Rfc2VsZWN0aW9uLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9wcm9kdWN0c19maWVsZC9wcm9kdWN0X3NlbGVjdGlvbi9wcm9kdWN0X3NlbGVjdGlvbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxhQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0FDRUosQ0FBQSxnREFBQVwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnByb2R1Y3RzX2ZpZWxkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLnByb2R1Y3RfaXRlbSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMzAwcHg7XFxuICBib3JkZXI6IHNvbGlkIDJweCBibHVldmlvbGV0O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBtYXJnaW46IDVweDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICMwMDA7XFxuICBvcGFjaXR5OiAwLjk7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggYmxhY2s7XFxufVxcblxcbi5pbmZvIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIHRleHQtc2hhZG93OiAycHggNXB4IDdweCBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXG4gICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxufVxcblxcbi5idG5fY29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDgwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5idG4ge1xcbiAgYm9yZGVyOiBzb2xpZCAycHggYmx1ZXZpb2xldDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufS8qIyBzb3VyY2VNYXBwaW5nVVJMPXByb2R1Y3RzX2ZpZWxkLmNzcy5tYXAgKi9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcHJvZHVjdHNfZmllbGQvcHJvZHVjdHNfZmllbGQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Byb2R1Y3RzX2ZpZWxkL3Byb2R1Y3RzX2ZpZWxkLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURDQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0FDRUo7O0FEQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtBQ0dKOztBRERBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUNJSjs7QURGQTtFQUNJLDRCQUFBO0VBQ0EsbUJBQUE7QUNLSixDQUFBLDZDQUFBXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBDaHJvbWUsIFNhZmFyaSwgRWRnZSwgT3BlcmEgKi9cXG5pbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcXG5pbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qIEZpcmVmb3ggKi9cXG5pbnB1dFt0eXBlPW51bWJlcl0ge1xcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxufVxcblxcbi5yYW5nZVNsaWRlciB7XFxuICBtYXJnaW46IDVweCAwIDAgMTdweDtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzNXB4KTtcXG59XFxuXFxuLm5vVWktY29ubmVjdCB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoOTIsIDE2MCwgMjQ5KTtcXG59XFxuXFxuLm5vVWktdGFyZ2V0IHtcXG4gIGJhY2tncm91bmQ6IHJnYigyNDEsIDI1NCwgMjE5KTtcXG59XFxuXFxuLm5vVWktaGFuZGxlIHtcXG4gIGJvcmRlcjogc29saWQgM3B4IGJsYWNrO1xcbn1cXG5cXG4uaW5wdXRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIG1hcmdpbjogMjBweCAwIDEwcHggMDtcXG59LyojIHNvdXJjZU1hcHBpbmdVUkw9cmFuZ2Utc2xpZGVyLmNzcy5tYXAgKi9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2VsZWN0X2JveC9yYW5nZS1zbGlkZXIvcmFuZ2Utc2xpZGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zZWxlY3RfYm94L3JhbmdlLXNsaWRlci9yYW5nZS1zbGlkZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdDQUFBO0FBQ0E7O0VBRUUsd0JBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FERUEsWUFBQTtBQUNBO0VBQ0UsMEJBQUE7QUNDRjs7QURFQTtFQUNJLG9CQUFBO0VBQ0Esd0JBQUE7QUNDSjs7QURFQTtFQUNJLDZCQUFBO0FDQ0o7O0FERUE7RUFDSSw4QkFBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0FDQ0osQ0FBQSwyQ0FBQVwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnNlbGVjdF9idG4ge1xcbiAgbWFyZ2luOiAxNXB4IDA7XFxuICB3aWR0aDogMzUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5pbnB1dEJveCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi5kaXZJbnB1dCB7XFxuICBtYXgtaGVpZ2h0OiAyODBweDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MSwgMjM1LCAyNDYpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLnBJbnB1dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4ucElucHV0IGlucHV0IHtcXG4gIG1hcmdpbjogMCAyMHB4IDAgMjBweDtcXG59XFxuLnBJbnB1dCAuc2NvcmUge1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbn0vKiMgc291cmNlTWFwcGluZ1VSTD1zZWxlY3RfYm94LmNzcy5tYXAgKi9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2VsZWN0X2JveC9zZWxlY3RfYm94LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zZWxlY3RfYm94L3NlbGVjdF9ib3guY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUNBSjs7QURJQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQ0RKOztBREdBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREVBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FDQ0o7QURBSTtFQUNJLHFCQUFBO0FDRVI7QURBSTtFQUNJLGtCQUFBO0FDRVIsQ0FBQSx5Q0FBQVwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG4udG90YWwge1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiByZ2IoMjU1LCAxODcsIDApO1xcbn1cXG4udG90YWwgLm9ubGluZV9zdG9yZSB7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHJnYigyNTUsIDE4NywgMCk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50b3RhbCAub25saW5lX3N0b3JlIC5vbmxpbmVfc3RvcmVfcGFnZSB7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBmb250LXNpemU6IDUwcHg7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuLnRvdGFsIC50b3RhbF9wcmljZSB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5iYXNrZXQge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4uY2ly0YFsZSB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uYmFza2V0X2NpcmNsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnNlbGVjdF9ib3gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IDEwcHg7XFxuICB3aWR0aDogMzgwcHg7XFxuICBtYXgtaGVpZ2h0OiA5MzdweDtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggcmdiKDI0MCwgMTc3LCAyNDEpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59LyojIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGUuY3NzLm1hcCAqL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7QURFSjtBQ0FJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FERVI7QUNBUTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QURFWjtBQ0VJO0VBQ0ksWUFBQTtBREFSOztBQ1FBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FETEo7O0FDUUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBRExKOztBQ1FBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FETEo7O0FDUUE7RUFDSSxhQUFBO0FETEo7O0FDU0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7QUROSixDQUFBLG9DQUFBXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gZmFjdG9yeShleHBvcnRzKSA6XG4gICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnZXhwb3J0cyddLCBmYWN0b3J5KSA6XG4gICAgKGdsb2JhbCA9IHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbFRoaXMgOiBnbG9iYWwgfHwgc2VsZiwgZmFjdG9yeShnbG9iYWwubm9VaVNsaWRlciA9IHt9KSk7XG59KSh0aGlzLCAoZnVuY3Rpb24gKGV4cG9ydHMpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gICAgZXhwb3J0cy5QaXBzTW9kZSA9IHZvaWQgMDtcbiAgICAoZnVuY3Rpb24gKFBpcHNNb2RlKSB7XG4gICAgICAgIFBpcHNNb2RlW1wiUmFuZ2VcIl0gPSBcInJhbmdlXCI7XG4gICAgICAgIFBpcHNNb2RlW1wiU3RlcHNcIl0gPSBcInN0ZXBzXCI7XG4gICAgICAgIFBpcHNNb2RlW1wiUG9zaXRpb25zXCJdID0gXCJwb3NpdGlvbnNcIjtcbiAgICAgICAgUGlwc01vZGVbXCJDb3VudFwiXSA9IFwiY291bnRcIjtcbiAgICAgICAgUGlwc01vZGVbXCJWYWx1ZXNcIl0gPSBcInZhbHVlc1wiO1xuICAgIH0pKGV4cG9ydHMuUGlwc01vZGUgfHwgKGV4cG9ydHMuUGlwc01vZGUgPSB7fSkpO1xuICAgIGV4cG9ydHMuUGlwc1R5cGUgPSB2b2lkIDA7XG4gICAgKGZ1bmN0aW9uIChQaXBzVHlwZSkge1xuICAgICAgICBQaXBzVHlwZVtQaXBzVHlwZVtcIk5vbmVcIl0gPSAtMV0gPSBcIk5vbmVcIjtcbiAgICAgICAgUGlwc1R5cGVbUGlwc1R5cGVbXCJOb1ZhbHVlXCJdID0gMF0gPSBcIk5vVmFsdWVcIjtcbiAgICAgICAgUGlwc1R5cGVbUGlwc1R5cGVbXCJMYXJnZVZhbHVlXCJdID0gMV0gPSBcIkxhcmdlVmFsdWVcIjtcbiAgICAgICAgUGlwc1R5cGVbUGlwc1R5cGVbXCJTbWFsbFZhbHVlXCJdID0gMl0gPSBcIlNtYWxsVmFsdWVcIjtcbiAgICB9KShleHBvcnRzLlBpcHNUeXBlIHx8IChleHBvcnRzLlBpcHNUeXBlID0ge30pKTtcbiAgICAvL3JlZ2lvbiBIZWxwZXIgTWV0aG9kc1xuICAgIGZ1bmN0aW9uIGlzVmFsaWRGb3JtYXR0ZXIoZW50cnkpIHtcbiAgICAgICAgcmV0dXJuIGlzVmFsaWRQYXJ0aWFsRm9ybWF0dGVyKGVudHJ5KSAmJiB0eXBlb2YgZW50cnkuZnJvbSA9PT0gXCJmdW5jdGlvblwiO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc1ZhbGlkUGFydGlhbEZvcm1hdHRlcihlbnRyeSkge1xuICAgICAgICAvLyBwYXJ0aWFsIGZvcm1hdHRlcnMgb25seSBuZWVkIGEgdG8gZnVuY3Rpb24gYW5kIG5vdCBhIGZyb20gZnVuY3Rpb25cbiAgICAgICAgcmV0dXJuIHR5cGVvZiBlbnRyeSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgZW50cnkudG8gPT09IFwiZnVuY3Rpb25cIjtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVtb3ZlRWxlbWVudChlbCkge1xuICAgICAgICBlbC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGVsKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNTZXQodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8vIEJpbmRhYmxlIHZlcnNpb25cbiAgICBmdW5jdGlvbiBwcmV2ZW50RGVmYXVsdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgLy8gUmVtb3ZlcyBkdXBsaWNhdGVzIGZyb20gYW4gYXJyYXkuXG4gICAgZnVuY3Rpb24gdW5pcXVlKGFycmF5KSB7XG4gICAgICAgIHJldHVybiBhcnJheS5maWx0ZXIoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgIHJldHVybiAhdGhpc1thXSA/ICh0aGlzW2FdID0gdHJ1ZSkgOiBmYWxzZTtcbiAgICAgICAgfSwge30pO1xuICAgIH1cbiAgICAvLyBSb3VuZCBhIHZhbHVlIHRvIHRoZSBjbG9zZXN0ICd0bycuXG4gICAgZnVuY3Rpb24gY2xvc2VzdCh2YWx1ZSwgdG8pIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUgLyB0bykgKiB0bztcbiAgICB9XG4gICAgLy8gQ3VycmVudCBwb3NpdGlvbiBvZiBhbiBlbGVtZW50IHJlbGF0aXZlIHRvIHRoZSBkb2N1bWVudC5cbiAgICBmdW5jdGlvbiBvZmZzZXQoZWxlbSwgb3JpZW50YXRpb24pIHtcbiAgICAgICAgdmFyIHJlY3QgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB2YXIgZG9jID0gZWxlbS5vd25lckRvY3VtZW50O1xuICAgICAgICB2YXIgZG9jRWxlbSA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHZhciBwYWdlT2Zmc2V0ID0gZ2V0UGFnZU9mZnNldChkb2MpO1xuICAgICAgICAvLyBnZXRCb3VuZGluZ0NsaWVudFJlY3QgY29udGFpbnMgbGVmdCBzY3JvbGwgaW4gQ2hyb21lIG9uIEFuZHJvaWQuXG4gICAgICAgIC8vIEkgaGF2ZW4ndCBmb3VuZCBhIGZlYXR1cmUgZGV0ZWN0aW9uIHRoYXQgcHJvdmVzIHRoaXMuIFdvcnN0IGNhc2VcbiAgICAgICAgLy8gc2NlbmFyaW8gb24gbWlzLW1hdGNoOiB0aGUgJ3RhcCcgZmVhdHVyZSBvbiBob3Jpem9udGFsIHNsaWRlcnMgYnJlYWtzLlxuICAgICAgICBpZiAoL3dlYmtpdC4qQ2hyb21lLipNb2JpbGUvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICBwYWdlT2Zmc2V0LnggPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvcmllbnRhdGlvbiA/IHJlY3QudG9wICsgcGFnZU9mZnNldC55IC0gZG9jRWxlbS5jbGllbnRUb3AgOiByZWN0LmxlZnQgKyBwYWdlT2Zmc2V0LnggLSBkb2NFbGVtLmNsaWVudExlZnQ7XG4gICAgfVxuICAgIC8vIENoZWNrcyB3aGV0aGVyIGEgdmFsdWUgaXMgbnVtZXJpY2FsLlxuICAgIGZ1bmN0aW9uIGlzTnVtZXJpYyhhKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgYSA9PT0gXCJudW1iZXJcIiAmJiAhaXNOYU4oYSkgJiYgaXNGaW5pdGUoYSk7XG4gICAgfVxuICAgIC8vIFNldHMgYSBjbGFzcyBhbmQgcmVtb3ZlcyBpdCBhZnRlciBbZHVyYXRpb25dIG1zLlxuICAgIGZ1bmN0aW9uIGFkZENsYXNzRm9yKGVsZW1lbnQsIGNsYXNzTmFtZSwgZHVyYXRpb24pIHtcbiAgICAgICAgaWYgKGR1cmF0aW9uID4gMCkge1xuICAgICAgICAgICAgYWRkQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gICAgICAgICAgICB9LCBkdXJhdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gTGltaXRzIGEgdmFsdWUgdG8gMCAtIDEwMFxuICAgIGZ1bmN0aW9uIGxpbWl0KGEpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KE1hdGgubWluKGEsIDEwMCksIDApO1xuICAgIH1cbiAgICAvLyBXcmFwcyBhIHZhcmlhYmxlIGFzIGFuIGFycmF5LCBpZiBpdCBpc24ndCBvbmUgeWV0LlxuICAgIC8vIE5vdGUgdGhhdCBhbiBpbnB1dCBhcnJheSBpcyByZXR1cm5lZCBieSByZWZlcmVuY2UhXG4gICAgZnVuY3Rpb24gYXNBcnJheShhKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KGEpID8gYSA6IFthXTtcbiAgICB9XG4gICAgLy8gQ291bnRzIGRlY2ltYWxzXG4gICAgZnVuY3Rpb24gY291bnREZWNpbWFscyhudW1TdHIpIHtcbiAgICAgICAgbnVtU3RyID0gU3RyaW5nKG51bVN0cik7XG4gICAgICAgIHZhciBwaWVjZXMgPSBudW1TdHIuc3BsaXQoXCIuXCIpO1xuICAgICAgICByZXR1cm4gcGllY2VzLmxlbmd0aCA+IDEgPyBwaWVjZXNbMV0ubGVuZ3RoIDogMDtcbiAgICB9XG4gICAgLy8gaHR0cDovL3lvdW1pZ2h0bm90bmVlZGpxdWVyeS5jb20vI2FkZF9jbGFzc1xuICAgIGZ1bmN0aW9uIGFkZENsYXNzKGVsLCBjbGFzc05hbWUpIHtcbiAgICAgICAgaWYgKGVsLmNsYXNzTGlzdCAmJiAhL1xccy8udGVzdChjbGFzc05hbWUpKSB7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbC5jbGFzc05hbWUgKz0gXCIgXCIgKyBjbGFzc05hbWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gaHR0cDovL3lvdW1pZ2h0bm90bmVlZGpxdWVyeS5jb20vI3JlbW92ZV9jbGFzc1xuICAgIGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsLCBjbGFzc05hbWUpIHtcbiAgICAgICAgaWYgKGVsLmNsYXNzTGlzdCAmJiAhL1xccy8udGVzdChjbGFzc05hbWUpKSB7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbC5jbGFzc05hbWUgPSBlbC5jbGFzc05hbWUucmVwbGFjZShuZXcgUmVnRXhwKFwiKF58XFxcXGIpXCIgKyBjbGFzc05hbWUuc3BsaXQoXCIgXCIpLmpvaW4oXCJ8XCIpICsgXCIoXFxcXGJ8JClcIiwgXCJnaVwiKSwgXCIgXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGh0dHBzOi8vcGxhaW5qcy5jb20vamF2YXNjcmlwdC9hdHRyaWJ1dGVzL2FkZGluZy1yZW1vdmluZy1hbmQtdGVzdGluZy1mb3ItY2xhc3Nlcy05L1xuICAgIGZ1bmN0aW9uIGhhc0NsYXNzKGVsLCBjbGFzc05hbWUpIHtcbiAgICAgICAgcmV0dXJuIGVsLmNsYXNzTGlzdCA/IGVsLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpIDogbmV3IFJlZ0V4cChcIlxcXFxiXCIgKyBjbGFzc05hbWUgKyBcIlxcXFxiXCIpLnRlc3QoZWwuY2xhc3NOYW1lKTtcbiAgICB9XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvdy9zY3JvbGxZI05vdGVzXG4gICAgZnVuY3Rpb24gZ2V0UGFnZU9mZnNldChkb2MpIHtcbiAgICAgICAgdmFyIHN1cHBvcnRQYWdlT2Zmc2V0ID0gd2luZG93LnBhZ2VYT2Zmc2V0ICE9PSB1bmRlZmluZWQ7XG4gICAgICAgIHZhciBpc0NTUzFDb21wYXQgPSAoZG9jLmNvbXBhdE1vZGUgfHwgXCJcIikgPT09IFwiQ1NTMUNvbXBhdFwiO1xuICAgICAgICB2YXIgeCA9IHN1cHBvcnRQYWdlT2Zmc2V0XG4gICAgICAgICAgICA/IHdpbmRvdy5wYWdlWE9mZnNldFxuICAgICAgICAgICAgOiBpc0NTUzFDb21wYXRcbiAgICAgICAgICAgICAgICA/IGRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdFxuICAgICAgICAgICAgICAgIDogZG9jLmJvZHkuc2Nyb2xsTGVmdDtcbiAgICAgICAgdmFyIHkgPSBzdXBwb3J0UGFnZU9mZnNldFxuICAgICAgICAgICAgPyB3aW5kb3cucGFnZVlPZmZzZXRcbiAgICAgICAgICAgIDogaXNDU1MxQ29tcGF0XG4gICAgICAgICAgICAgICAgPyBkb2MuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcFxuICAgICAgICAgICAgICAgIDogZG9jLmJvZHkuc2Nyb2xsVG9wO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogeCxcbiAgICAgICAgICAgIHk6IHksXG4gICAgICAgIH07XG4gICAgfVxuICAgIC8vIHdlIHByb3ZpZGUgYSBmdW5jdGlvbiB0byBjb21wdXRlIGNvbnN0YW50cyBpbnN0ZWFkXG4gICAgLy8gb2YgYWNjZXNzaW5nIHdpbmRvdy4qIGFzIHNvb24gYXMgdGhlIG1vZHVsZSBuZWVkcyBpdFxuICAgIC8vIHNvIHRoYXQgd2UgZG8gbm90IGNvbXB1dGUgYW55dGhpbmcgaWYgbm90IG5lZWRlZFxuICAgIGZ1bmN0aW9uIGdldEFjdGlvbnMoKSB7XG4gICAgICAgIC8vIERldGVybWluZSB0aGUgZXZlbnRzIHRvIGJpbmQuIElFMTEgaW1wbGVtZW50cyBwb2ludGVyRXZlbnRzIHdpdGhvdXRcbiAgICAgICAgLy8gYSBwcmVmaXgsIHdoaWNoIGJyZWFrcyBjb21wYXRpYmlsaXR5IHdpdGggdGhlIElFMTAgaW1wbGVtZW50YXRpb24uXG4gICAgICAgIHJldHVybiB3aW5kb3cubmF2aWdhdG9yLnBvaW50ZXJFbmFibGVkXG4gICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICBzdGFydDogXCJwb2ludGVyZG93blwiLFxuICAgICAgICAgICAgICAgIG1vdmU6IFwicG9pbnRlcm1vdmVcIixcbiAgICAgICAgICAgICAgICBlbmQ6IFwicG9pbnRlcnVwXCIsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA6IHdpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZFxuICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICBzdGFydDogXCJNU1BvaW50ZXJEb3duXCIsXG4gICAgICAgICAgICAgICAgICAgIG1vdmU6IFwiTVNQb2ludGVyTW92ZVwiLFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IFwiTVNQb2ludGVyVXBcIixcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBcIm1vdXNlZG93biB0b3VjaHN0YXJ0XCIsXG4gICAgICAgICAgICAgICAgICAgIG1vdmU6IFwibW91c2Vtb3ZlIHRvdWNobW92ZVwiLFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IFwibW91c2V1cCB0b3VjaGVuZFwiLFxuICAgICAgICAgICAgICAgIH07XG4gICAgfVxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9XSUNHL0V2ZW50TGlzdGVuZXJPcHRpb25zL2Jsb2IvZ2gtcGFnZXMvZXhwbGFpbmVyLm1kXG4gICAgLy8gSXNzdWUgIzc4NVxuICAgIGZ1bmN0aW9uIGdldFN1cHBvcnRzUGFzc2l2ZSgpIHtcbiAgICAgICAgdmFyIHN1cHBvcnRzUGFzc2l2ZSA9IGZhbHNlO1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIG9wdHMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sIFwicGFzc2l2ZVwiLCB7XG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1cHBvcnRzUGFzc2l2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ0ZXN0XCIsIG51bGwsIG9wdHMpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7IH1cbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSAqL1xuICAgICAgICByZXR1cm4gc3VwcG9ydHNQYXNzaXZlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRTdXBwb3J0c1RvdWNoQWN0aW9uTm9uZSgpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5DU1MgJiYgQ1NTLnN1cHBvcnRzICYmIENTUy5zdXBwb3J0cyhcInRvdWNoLWFjdGlvblwiLCBcIm5vbmVcIik7XG4gICAgfVxuICAgIC8vZW5kcmVnaW9uXG4gICAgLy9yZWdpb24gUmFuZ2UgQ2FsY3VsYXRpb25cbiAgICAvLyBEZXRlcm1pbmUgdGhlIHNpemUgb2YgYSBzdWItcmFuZ2UgaW4gcmVsYXRpb24gdG8gYSBmdWxsIHJhbmdlLlxuICAgIGZ1bmN0aW9uIHN1YlJhbmdlUmF0aW8ocGEsIHBiKSB7XG4gICAgICAgIHJldHVybiAxMDAgLyAocGIgLSBwYSk7XG4gICAgfVxuICAgIC8vIChwZXJjZW50YWdlKSBIb3cgbWFueSBwZXJjZW50IGlzIHRoaXMgdmFsdWUgb2YgdGhpcyByYW5nZT9cbiAgICBmdW5jdGlvbiBmcm9tUGVyY2VudGFnZShyYW5nZSwgdmFsdWUsIHN0YXJ0UmFuZ2UpIHtcbiAgICAgICAgcmV0dXJuICh2YWx1ZSAqIDEwMCkgLyAocmFuZ2Vbc3RhcnRSYW5nZSArIDFdIC0gcmFuZ2Vbc3RhcnRSYW5nZV0pO1xuICAgIH1cbiAgICAvLyAocGVyY2VudGFnZSkgV2hlcmUgaXMgdGhpcyB2YWx1ZSBvbiB0aGlzIHJhbmdlP1xuICAgIGZ1bmN0aW9uIHRvUGVyY2VudGFnZShyYW5nZSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGZyb21QZXJjZW50YWdlKHJhbmdlLCByYW5nZVswXSA8IDAgPyB2YWx1ZSArIE1hdGguYWJzKHJhbmdlWzBdKSA6IHZhbHVlIC0gcmFuZ2VbMF0sIDApO1xuICAgIH1cbiAgICAvLyAodmFsdWUpIEhvdyBtdWNoIGlzIHRoaXMgcGVyY2VudGFnZSBvbiB0aGlzIHJhbmdlP1xuICAgIGZ1bmN0aW9uIGlzUGVyY2VudGFnZShyYW5nZSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICh2YWx1ZSAqIChyYW5nZVsxXSAtIHJhbmdlWzBdKSkgLyAxMDAgKyByYW5nZVswXTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0Sih2YWx1ZSwgYXJyKSB7XG4gICAgICAgIHZhciBqID0gMTtcbiAgICAgICAgd2hpbGUgKHZhbHVlID49IGFycltqXSkge1xuICAgICAgICAgICAgaiArPSAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBqO1xuICAgIH1cbiAgICAvLyAocGVyY2VudGFnZSkgSW5wdXQgYSB2YWx1ZSwgZmluZCB3aGVyZSwgb24gYSBzY2FsZSBvZiAwLTEwMCwgaXQgYXBwbGllcy5cbiAgICBmdW5jdGlvbiB0b1N0ZXBwaW5nKHhWYWwsIHhQY3QsIHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSA+PSB4VmFsLnNsaWNlKC0xKVswXSkge1xuICAgICAgICAgICAgcmV0dXJuIDEwMDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaiA9IGdldEoodmFsdWUsIHhWYWwpO1xuICAgICAgICB2YXIgdmEgPSB4VmFsW2ogLSAxXTtcbiAgICAgICAgdmFyIHZiID0geFZhbFtqXTtcbiAgICAgICAgdmFyIHBhID0geFBjdFtqIC0gMV07XG4gICAgICAgIHZhciBwYiA9IHhQY3Rbal07XG4gICAgICAgIHJldHVybiBwYSArIHRvUGVyY2VudGFnZShbdmEsIHZiXSwgdmFsdWUpIC8gc3ViUmFuZ2VSYXRpbyhwYSwgcGIpO1xuICAgIH1cbiAgICAvLyAodmFsdWUpIElucHV0IGEgcGVyY2VudGFnZSwgZmluZCB3aGVyZSBpdCBpcyBvbiB0aGUgc3BlY2lmaWVkIHJhbmdlLlxuICAgIGZ1bmN0aW9uIGZyb21TdGVwcGluZyh4VmFsLCB4UGN0LCB2YWx1ZSkge1xuICAgICAgICAvLyBUaGVyZSBpcyBubyByYW5nZSBncm91cCB0aGF0IGZpdHMgMTAwXG4gICAgICAgIGlmICh2YWx1ZSA+PSAxMDApIHtcbiAgICAgICAgICAgIHJldHVybiB4VmFsLnNsaWNlKC0xKVswXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaiA9IGdldEoodmFsdWUsIHhQY3QpO1xuICAgICAgICB2YXIgdmEgPSB4VmFsW2ogLSAxXTtcbiAgICAgICAgdmFyIHZiID0geFZhbFtqXTtcbiAgICAgICAgdmFyIHBhID0geFBjdFtqIC0gMV07XG4gICAgICAgIHZhciBwYiA9IHhQY3Rbal07XG4gICAgICAgIHJldHVybiBpc1BlcmNlbnRhZ2UoW3ZhLCB2Yl0sICh2YWx1ZSAtIHBhKSAqIHN1YlJhbmdlUmF0aW8ocGEsIHBiKSk7XG4gICAgfVxuICAgIC8vIChwZXJjZW50YWdlKSBHZXQgdGhlIHN0ZXAgdGhhdCBhcHBsaWVzIGF0IGEgY2VydGFpbiB2YWx1ZS5cbiAgICBmdW5jdGlvbiBnZXRTdGVwKHhQY3QsIHhTdGVwcywgc25hcCwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSAxMDApIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaiA9IGdldEoodmFsdWUsIHhQY3QpO1xuICAgICAgICB2YXIgYSA9IHhQY3RbaiAtIDFdO1xuICAgICAgICB2YXIgYiA9IHhQY3Rbal07XG4gICAgICAgIC8vIElmICdzbmFwJyBpcyBzZXQsIHN0ZXBzIGFyZSB1c2VkIGFzIGZpeGVkIHBvaW50cyBvbiB0aGUgc2xpZGVyLlxuICAgICAgICBpZiAoc25hcCkge1xuICAgICAgICAgICAgLy8gRmluZCB0aGUgY2xvc2VzdCBwb3NpdGlvbiwgYSBvciBiLlxuICAgICAgICAgICAgaWYgKHZhbHVlIC0gYSA+IChiIC0gYSkgLyAyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXhTdGVwc1tqIC0gMV0pIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geFBjdFtqIC0gMV0gKyBjbG9zZXN0KHZhbHVlIC0geFBjdFtqIC0gMV0sIHhTdGVwc1tqIC0gMV0pO1xuICAgIH1cbiAgICAvL2VuZHJlZ2lvblxuICAgIC8vcmVnaW9uIFNwZWN0cnVtXG4gICAgdmFyIFNwZWN0cnVtID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBTcGVjdHJ1bShlbnRyeSwgc25hcCwgc2luZ2xlU3RlcCkge1xuICAgICAgICAgICAgdGhpcy54UGN0ID0gW107XG4gICAgICAgICAgICB0aGlzLnhWYWwgPSBbXTtcbiAgICAgICAgICAgIHRoaXMueFN0ZXBzID0gW107XG4gICAgICAgICAgICB0aGlzLnhOdW1TdGVwcyA9IFtdO1xuICAgICAgICAgICAgdGhpcy54SGlnaGVzdENvbXBsZXRlU3RlcCA9IFtdO1xuICAgICAgICAgICAgdGhpcy54U3RlcHMgPSBbc2luZ2xlU3RlcCB8fCBmYWxzZV07XG4gICAgICAgICAgICB0aGlzLnhOdW1TdGVwcyA9IFtmYWxzZV07XG4gICAgICAgICAgICB0aGlzLnNuYXAgPSBzbmFwO1xuICAgICAgICAgICAgdmFyIGluZGV4O1xuICAgICAgICAgICAgdmFyIG9yZGVyZWQgPSBbXTtcbiAgICAgICAgICAgIC8vIE1hcCB0aGUgb2JqZWN0IGtleXMgdG8gYW4gYXJyYXkuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhlbnRyeSkuZm9yRWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBvcmRlcmVkLnB1c2goW2FzQXJyYXkoZW50cnlbaW5kZXhdKSwgaW5kZXhdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gU29ydCBhbGwgZW50cmllcyBieSB2YWx1ZSAobnVtZXJpYyBzb3J0KS5cbiAgICAgICAgICAgIG9yZGVyZWQuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICAgIHJldHVybiBhWzBdWzBdIC0gYlswXVswXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gQ29udmVydCBhbGwgZW50cmllcyB0byBzdWJyYW5nZXMuXG4gICAgICAgICAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBvcmRlcmVkLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRW50cnlQb2ludChvcmRlcmVkW2luZGV4XVsxXSwgb3JkZXJlZFtpbmRleF1bMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU3RvcmUgdGhlIGFjdHVhbCBzdGVwIHZhbHVlcy5cbiAgICAgICAgICAgIC8vIHhTdGVwcyBpcyBzb3J0ZWQgaW4gdGhlIHNhbWUgb3JkZXIgYXMgeFBjdCBhbmQgeFZhbC5cbiAgICAgICAgICAgIHRoaXMueE51bVN0ZXBzID0gdGhpcy54U3RlcHMuc2xpY2UoMCk7XG4gICAgICAgICAgICAvLyBDb252ZXJ0IGFsbCBudW1lcmljIHN0ZXBzIHRvIHRoZSBwZXJjZW50YWdlIG9mIHRoZSBzdWJyYW5nZSB0aGV5IHJlcHJlc2VudC5cbiAgICAgICAgICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IHRoaXMueE51bVN0ZXBzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlU3RlcFBvaW50KGluZGV4LCB0aGlzLnhOdW1TdGVwc1tpbmRleF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS5nZXREaXN0YW5jZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIGRpc3RhbmNlcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMueE51bVN0ZXBzLmxlbmd0aCAtIDE7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBkaXN0YW5jZXNbaW5kZXhdID0gZnJvbVBlcmNlbnRhZ2UodGhpcy54VmFsLCB2YWx1ZSwgaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRpc3RhbmNlcztcbiAgICAgICAgfTtcbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBwZXJjZW50dWFsIGRpc3RhbmNlIG92ZXIgdGhlIHdob2xlIHNjYWxlIG9mIHJhbmdlcy5cbiAgICAgICAgLy8gZGlyZWN0aW9uOiAwID0gYmFja3dhcmRzIC8gMSA9IGZvcndhcmRzXG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS5nZXRBYnNvbHV0ZURpc3RhbmNlID0gZnVuY3Rpb24gKHZhbHVlLCBkaXN0YW5jZXMsIGRpcmVjdGlvbikge1xuICAgICAgICAgICAgdmFyIHhQY3RfaW5kZXggPSAwO1xuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHJhbmdlIHdoZXJlIHRvIHN0YXJ0IGNhbGN1bGF0aW9uXG4gICAgICAgICAgICBpZiAodmFsdWUgPCB0aGlzLnhQY3RbdGhpcy54UGN0Lmxlbmd0aCAtIDFdKSB7XG4gICAgICAgICAgICAgICAgd2hpbGUgKHZhbHVlID4gdGhpcy54UGN0W3hQY3RfaW5kZXggKyAxXSkge1xuICAgICAgICAgICAgICAgICAgICB4UGN0X2luZGV4Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUgPT09IHRoaXMueFBjdFt0aGlzLnhQY3QubGVuZ3RoIC0gMV0pIHtcbiAgICAgICAgICAgICAgICB4UGN0X2luZGV4ID0gdGhpcy54UGN0Lmxlbmd0aCAtIDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBsb29raW5nIGJhY2t3YXJkcyBhbmQgdGhlIHZhbHVlIGlzIGV4YWN0bHkgYXQgYSByYW5nZSBzZXBhcmF0b3IgdGhlbiBsb29rIG9uZSByYW5nZSBmdXJ0aGVyXG4gICAgICAgICAgICBpZiAoIWRpcmVjdGlvbiAmJiB2YWx1ZSA9PT0gdGhpcy54UGN0W3hQY3RfaW5kZXggKyAxXSkge1xuICAgICAgICAgICAgICAgIHhQY3RfaW5kZXgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkaXN0YW5jZXMgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBkaXN0YW5jZXMgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBzdGFydF9mYWN0b3I7XG4gICAgICAgICAgICB2YXIgcmVzdF9mYWN0b3IgPSAxO1xuICAgICAgICAgICAgdmFyIHJlc3RfcmVsX2Rpc3RhbmNlID0gZGlzdGFuY2VzW3hQY3RfaW5kZXhdO1xuICAgICAgICAgICAgdmFyIHJhbmdlX3BjdCA9IDA7XG4gICAgICAgICAgICB2YXIgcmVsX3JhbmdlX2Rpc3RhbmNlID0gMDtcbiAgICAgICAgICAgIHZhciBhYnNfZGlzdGFuY2VfY291bnRlciA9IDA7XG4gICAgICAgICAgICB2YXIgcmFuZ2VfY291bnRlciA9IDA7XG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgd2hhdCBwYXJ0IG9mIHRoZSBzdGFydCByYW5nZSB0aGUgdmFsdWUgaXNcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBzdGFydF9mYWN0b3IgPSAodmFsdWUgLSB0aGlzLnhQY3RbeFBjdF9pbmRleF0pIC8gKHRoaXMueFBjdFt4UGN0X2luZGV4ICsgMV0gLSB0aGlzLnhQY3RbeFBjdF9pbmRleF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RhcnRfZmFjdG9yID0gKHRoaXMueFBjdFt4UGN0X2luZGV4ICsgMV0gLSB2YWx1ZSkgLyAodGhpcy54UGN0W3hQY3RfaW5kZXggKyAxXSAtIHRoaXMueFBjdFt4UGN0X2luZGV4XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBEbyB1bnRpbCB0aGUgY29tcGxldGUgZGlzdGFuY2UgYWNyb3NzIHJhbmdlcyBpcyBjYWxjdWxhdGVkXG4gICAgICAgICAgICB3aGlsZSAocmVzdF9yZWxfZGlzdGFuY2UgPiAwKSB7XG4gICAgICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBwZXJjZW50YWdlIG9mIHRvdGFsIHJhbmdlXG4gICAgICAgICAgICAgICAgcmFuZ2VfcGN0ID0gdGhpcy54UGN0W3hQY3RfaW5kZXggKyAxICsgcmFuZ2VfY291bnRlcl0gLSB0aGlzLnhQY3RbeFBjdF9pbmRleCArIHJhbmdlX2NvdW50ZXJdO1xuICAgICAgICAgICAgICAgIC8vIERldGVjdCBpZiB0aGUgbWFyZ2luLCBwYWRkaW5nIG9yIGxpbWl0IGlzIGxhcmdlciB0aGVuIHRoZSBjdXJyZW50IHJhbmdlIGFuZCBjYWxjdWxhdGVcbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2VzW3hQY3RfaW5kZXggKyByYW5nZV9jb3VudGVyXSAqIHJlc3RfZmFjdG9yICsgMTAwIC0gc3RhcnRfZmFjdG9yICogMTAwID4gMTAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIGxhcmdlciB0aGVuIHRha2UgdGhlIHBlcmNlbnR1YWwgZGlzdGFuY2Ugb2YgdGhlIHdob2xlIHJhbmdlXG4gICAgICAgICAgICAgICAgICAgIHJlbF9yYW5nZV9kaXN0YW5jZSA9IHJhbmdlX3BjdCAqIHN0YXJ0X2ZhY3RvcjtcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVzdCBmYWN0b3Igb2YgcmVsYXRpdmUgcGVyY2VudHVhbCBkaXN0YW5jZSBzdGlsbCB0byBiZSBjYWxjdWxhdGVkXG4gICAgICAgICAgICAgICAgICAgIHJlc3RfZmFjdG9yID0gKHJlc3RfcmVsX2Rpc3RhbmNlIC0gMTAwICogc3RhcnRfZmFjdG9yKSAvIGRpc3RhbmNlc1t4UGN0X2luZGV4ICsgcmFuZ2VfY291bnRlcl07XG4gICAgICAgICAgICAgICAgICAgIC8vIFNldCBzdGFydCBmYWN0b3IgdG8gMSBhcyBmb3IgbmV4dCByYW5nZSBpdCBkb2VzIG5vdCBhcHBseS5cbiAgICAgICAgICAgICAgICAgICAgc3RhcnRfZmFjdG9yID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHNtYWxsZXIgb3IgZXF1YWwgdGhlbiB0YWtlIHRoZSBwZXJjZW50dWFsIGRpc3RhbmNlIG9mIHRoZSBjYWxjdWxhdGUgcGVyY2VudHVhbCBwYXJ0IG9mIHRoYXQgcmFuZ2VcbiAgICAgICAgICAgICAgICAgICAgcmVsX3JhbmdlX2Rpc3RhbmNlID0gKChkaXN0YW5jZXNbeFBjdF9pbmRleCArIHJhbmdlX2NvdW50ZXJdICogcmFuZ2VfcGN0KSAvIDEwMCkgKiByZXN0X2ZhY3RvcjtcbiAgICAgICAgICAgICAgICAgICAgLy8gTm8gcmVzdCBsZWZ0IGFzIHRoZSByZXN0IGZpdHMgaW4gY3VycmVudCByYW5nZVxuICAgICAgICAgICAgICAgICAgICByZXN0X2ZhY3RvciA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgYWJzX2Rpc3RhbmNlX2NvdW50ZXIgPSBhYnNfZGlzdGFuY2VfY291bnRlciAtIHJlbF9yYW5nZV9kaXN0YW5jZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gTGltaXQgcmFuZ2UgdG8gZmlyc3QgcmFuZ2Ugd2hlbiBkaXN0YW5jZSBiZWNvbWVzIG91dHNpZGUgb2YgbWluaW11bSByYW5nZVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy54UGN0Lmxlbmd0aCArIHJhbmdlX2NvdW50ZXIgPj0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2VfY291bnRlci0tO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhYnNfZGlzdGFuY2VfY291bnRlciA9IGFic19kaXN0YW5jZV9jb3VudGVyICsgcmVsX3JhbmdlX2Rpc3RhbmNlO1xuICAgICAgICAgICAgICAgICAgICAvLyBMaW1pdCByYW5nZSB0byBsYXN0IHJhbmdlIHdoZW4gZGlzdGFuY2UgYmVjb21lcyBvdXRzaWRlIG9mIG1heGltdW0gcmFuZ2VcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMueFBjdC5sZW5ndGggLSByYW5nZV9jb3VudGVyID49IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlX2NvdW50ZXIrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBSZXN0IG9mIHJlbGF0aXZlIHBlcmNlbnR1YWwgZGlzdGFuY2Ugc3RpbGwgdG8gYmUgY2FsY3VsYXRlZFxuICAgICAgICAgICAgICAgIHJlc3RfcmVsX2Rpc3RhbmNlID0gZGlzdGFuY2VzW3hQY3RfaW5kZXggKyByYW5nZV9jb3VudGVyXSAqIHJlc3RfZmFjdG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlICsgYWJzX2Rpc3RhbmNlX2NvdW50ZXI7XG4gICAgICAgIH07XG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS50b1N0ZXBwaW5nID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRvU3RlcHBpbmcodGhpcy54VmFsLCB0aGlzLnhQY3QsIHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLmZyb21TdGVwcGluZyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZyb21TdGVwcGluZyh0aGlzLnhWYWwsIHRoaXMueFBjdCwgdmFsdWUpO1xuICAgICAgICB9O1xuICAgICAgICBTcGVjdHJ1bS5wcm90b3R5cGUuZ2V0U3RlcCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFsdWUgPSBnZXRTdGVwKHRoaXMueFBjdCwgdGhpcy54U3RlcHMsIHRoaXMuc25hcCwgdmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9O1xuICAgICAgICBTcGVjdHJ1bS5wcm90b3R5cGUuZ2V0RGVmYXVsdFN0ZXAgPSBmdW5jdGlvbiAodmFsdWUsIGlzRG93biwgc2l6ZSkge1xuICAgICAgICAgICAgdmFyIGogPSBnZXRKKHZhbHVlLCB0aGlzLnhQY3QpO1xuICAgICAgICAgICAgLy8gV2hlbiBhdCB0aGUgdG9wIG9yIHN0ZXBwaW5nIGRvd24sIGxvb2sgYXQgdGhlIHByZXZpb3VzIHN1Yi1yYW5nZVxuICAgICAgICAgICAgaWYgKHZhbHVlID09PSAxMDAgfHwgKGlzRG93biAmJiB2YWx1ZSA9PT0gdGhpcy54UGN0W2ogLSAxXSkpIHtcbiAgICAgICAgICAgICAgICBqID0gTWF0aC5tYXgoaiAtIDEsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICh0aGlzLnhWYWxbal0gLSB0aGlzLnhWYWxbaiAtIDFdKSAvIHNpemU7XG4gICAgICAgIH07XG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS5nZXROZWFyYnlTdGVwcyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIGogPSBnZXRKKHZhbHVlLCB0aGlzLnhQY3QpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzdGVwQmVmb3JlOiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0VmFsdWU6IHRoaXMueFZhbFtqIC0gMl0sXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA6IHRoaXMueE51bVN0ZXBzW2ogLSAyXSxcbiAgICAgICAgICAgICAgICAgICAgaGlnaGVzdFN0ZXA6IHRoaXMueEhpZ2hlc3RDb21wbGV0ZVN0ZXBbaiAtIDJdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGhpc1N0ZXA6IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRWYWx1ZTogdGhpcy54VmFsW2ogLSAxXSxcbiAgICAgICAgICAgICAgICAgICAgc3RlcDogdGhpcy54TnVtU3RlcHNbaiAtIDFdLFxuICAgICAgICAgICAgICAgICAgICBoaWdoZXN0U3RlcDogdGhpcy54SGlnaGVzdENvbXBsZXRlU3RlcFtqIC0gMV0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdGVwQWZ0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRWYWx1ZTogdGhpcy54VmFsW2pdLFxuICAgICAgICAgICAgICAgICAgICBzdGVwOiB0aGlzLnhOdW1TdGVwc1tqXSxcbiAgICAgICAgICAgICAgICAgICAgaGlnaGVzdFN0ZXA6IHRoaXMueEhpZ2hlc3RDb21wbGV0ZVN0ZXBbal0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS5jb3VudFN0ZXBEZWNpbWFscyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzdGVwRGVjaW1hbHMgPSB0aGlzLnhOdW1TdGVwcy5tYXAoY291bnREZWNpbWFscyk7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5tYXguYXBwbHkobnVsbCwgc3RlcERlY2ltYWxzKTtcbiAgICAgICAgfTtcbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLmhhc05vU2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnhWYWxbMF0gPT09IHRoaXMueFZhbFt0aGlzLnhWYWwubGVuZ3RoIC0gMV07XG4gICAgICAgIH07XG4gICAgICAgIC8vIE91dHNpZGUgdGVzdGluZ1xuICAgICAgICBTcGVjdHJ1bS5wcm90b3R5cGUuY29udmVydCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RlcCh0aGlzLnRvU3RlcHBpbmcodmFsdWUpKTtcbiAgICAgICAgfTtcbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLmhhbmRsZUVudHJ5UG9pbnQgPSBmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgcGVyY2VudGFnZTtcbiAgICAgICAgICAgIC8vIENvdmVydCBtaW4vbWF4IHN5bnRheCB0byAwIGFuZCAxMDAuXG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IFwibWluXCIpIHtcbiAgICAgICAgICAgICAgICBwZXJjZW50YWdlID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGluZGV4ID09PSBcIm1heFwiKSB7XG4gICAgICAgICAgICAgICAgcGVyY2VudGFnZSA9IDEwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2UgPSBwYXJzZUZsb2F0KGluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIENoZWNrIGZvciBjb3JyZWN0IGlucHV0LlxuICAgICAgICAgICAgaWYgKCFpc051bWVyaWMocGVyY2VudGFnZSkgfHwgIWlzTnVtZXJpYyh2YWx1ZVswXSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAncmFuZ2UnIHZhbHVlIGlzbid0IG51bWVyaWMuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU3RvcmUgdmFsdWVzLlxuICAgICAgICAgICAgdGhpcy54UGN0LnB1c2gocGVyY2VudGFnZSk7XG4gICAgICAgICAgICB0aGlzLnhWYWwucHVzaCh2YWx1ZVswXSk7XG4gICAgICAgICAgICB2YXIgdmFsdWUxID0gTnVtYmVyKHZhbHVlWzFdKTtcbiAgICAgICAgICAgIC8vIE5hTiB3aWxsIGV2YWx1YXRlIHRvIGZhbHNlIHRvbywgYnV0IHRvIGtlZXBcbiAgICAgICAgICAgIC8vIGxvZ2dpbmcgY2xlYXIsIHNldCBzdGVwIGV4cGxpY2l0bHkuIE1ha2Ugc3VyZVxuICAgICAgICAgICAgLy8gbm90IHRvIG92ZXJyaWRlIHRoZSAnc3RlcCcgc2V0dGluZyB3aXRoIGZhbHNlLlxuICAgICAgICAgICAgaWYgKCFwZXJjZW50YWdlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05hTih2YWx1ZTEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMueFN0ZXBzWzBdID0gdmFsdWUxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMueFN0ZXBzLnB1c2goaXNOYU4odmFsdWUxKSA/IGZhbHNlIDogdmFsdWUxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMueEhpZ2hlc3RDb21wbGV0ZVN0ZXAucHVzaCgwKTtcbiAgICAgICAgfTtcbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLmhhbmRsZVN0ZXBQb2ludCA9IGZ1bmN0aW9uIChpLCBuKSB7XG4gICAgICAgICAgICAvLyBJZ25vcmUgJ2ZhbHNlJyBzdGVwcGluZy5cbiAgICAgICAgICAgIGlmICghbikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFN0ZXAgb3ZlciB6ZXJvLWxlbmd0aCByYW5nZXMgKCM5NDgpO1xuICAgICAgICAgICAgaWYgKHRoaXMueFZhbFtpXSA9PT0gdGhpcy54VmFsW2kgKyAxXSkge1xuICAgICAgICAgICAgICAgIHRoaXMueFN0ZXBzW2ldID0gdGhpcy54SGlnaGVzdENvbXBsZXRlU3RlcFtpXSA9IHRoaXMueFZhbFtpXTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBGYWN0b3IgdG8gcmFuZ2UgcmF0aW9cbiAgICAgICAgICAgIHRoaXMueFN0ZXBzW2ldID1cbiAgICAgICAgICAgICAgICBmcm9tUGVyY2VudGFnZShbdGhpcy54VmFsW2ldLCB0aGlzLnhWYWxbaSArIDFdXSwgbiwgMCkgLyBzdWJSYW5nZVJhdGlvKHRoaXMueFBjdFtpXSwgdGhpcy54UGN0W2kgKyAxXSk7XG4gICAgICAgICAgICB2YXIgdG90YWxTdGVwcyA9ICh0aGlzLnhWYWxbaSArIDFdIC0gdGhpcy54VmFsW2ldKSAvIHRoaXMueE51bVN0ZXBzW2ldO1xuICAgICAgICAgICAgdmFyIGhpZ2hlc3RTdGVwID0gTWF0aC5jZWlsKE51bWJlcih0b3RhbFN0ZXBzLnRvRml4ZWQoMykpIC0gMSk7XG4gICAgICAgICAgICB2YXIgc3RlcCA9IHRoaXMueFZhbFtpXSArIHRoaXMueE51bVN0ZXBzW2ldICogaGlnaGVzdFN0ZXA7XG4gICAgICAgICAgICB0aGlzLnhIaWdoZXN0Q29tcGxldGVTdGVwW2ldID0gc3RlcDtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFNwZWN0cnVtO1xuICAgIH0oKSk7XG4gICAgLy9lbmRyZWdpb25cbiAgICAvL3JlZ2lvbiBPcHRpb25zXG4gICAgLypcdEV2ZXJ5IGlucHV0IG9wdGlvbiBpcyB0ZXN0ZWQgYW5kIHBhcnNlZC4gVGhpcyB3aWxsIHByZXZlbnRcbiAgICAgICAgZW5kbGVzcyB2YWxpZGF0aW9uIGluIGludGVybmFsIG1ldGhvZHMuIFRoZXNlIHRlc3RzIGFyZVxuICAgICAgICBzdHJ1Y3R1cmVkIHdpdGggYW4gaXRlbSBmb3IgZXZlcnkgb3B0aW9uIGF2YWlsYWJsZS4gQW5cbiAgICAgICAgb3B0aW9uIGNhbiBiZSBtYXJrZWQgYXMgcmVxdWlyZWQgYnkgc2V0dGluZyB0aGUgJ3InIGZsYWcuXG4gICAgICAgIFRoZSB0ZXN0aW5nIGZ1bmN0aW9uIGlzIHByb3ZpZGVkIHdpdGggdGhyZWUgYXJndW1lbnRzOlxuICAgICAgICAgICAgLSBUaGUgcHJvdmlkZWQgdmFsdWUgZm9yIHRoZSBvcHRpb247XG4gICAgICAgICAgICAtIEEgcmVmZXJlbmNlIHRvIHRoZSBvcHRpb25zIG9iamVjdDtcbiAgICAgICAgICAgIC0gVGhlIG5hbWUgZm9yIHRoZSBvcHRpb247XG5cbiAgICAgICAgVGhlIHRlc3RpbmcgZnVuY3Rpb24gcmV0dXJucyBmYWxzZSB3aGVuIGFuIGVycm9yIGlzIGRldGVjdGVkLFxuICAgICAgICBvciB0cnVlIHdoZW4gZXZlcnl0aGluZyBpcyBPSy4gSXQgY2FuIGFsc28gbW9kaWZ5IHRoZSBvcHRpb25cbiAgICAgICAgb2JqZWN0LCB0byBtYWtlIHN1cmUgYWxsIHZhbHVlcyBjYW4gYmUgY29ycmVjdGx5IGxvb3BlZCBlbHNld2hlcmUuICovXG4gICAgLy9yZWdpb24gRGVmYXVsdHNcbiAgICB2YXIgZGVmYXVsdEZvcm1hdHRlciA9IHtcbiAgICAgICAgdG86IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyBcIlwiIDogdmFsdWUudG9GaXhlZCgyKTtcbiAgICAgICAgfSxcbiAgICAgICAgZnJvbTogTnVtYmVyLFxuICAgIH07XG4gICAgdmFyIGNzc0NsYXNzZXMgPSB7XG4gICAgICAgIHRhcmdldDogXCJ0YXJnZXRcIixcbiAgICAgICAgYmFzZTogXCJiYXNlXCIsXG4gICAgICAgIG9yaWdpbjogXCJvcmlnaW5cIixcbiAgICAgICAgaGFuZGxlOiBcImhhbmRsZVwiLFxuICAgICAgICBoYW5kbGVMb3dlcjogXCJoYW5kbGUtbG93ZXJcIixcbiAgICAgICAgaGFuZGxlVXBwZXI6IFwiaGFuZGxlLXVwcGVyXCIsXG4gICAgICAgIHRvdWNoQXJlYTogXCJ0b3VjaC1hcmVhXCIsXG4gICAgICAgIGhvcml6b250YWw6IFwiaG9yaXpvbnRhbFwiLFxuICAgICAgICB2ZXJ0aWNhbDogXCJ2ZXJ0aWNhbFwiLFxuICAgICAgICBiYWNrZ3JvdW5kOiBcImJhY2tncm91bmRcIixcbiAgICAgICAgY29ubmVjdDogXCJjb25uZWN0XCIsXG4gICAgICAgIGNvbm5lY3RzOiBcImNvbm5lY3RzXCIsXG4gICAgICAgIGx0cjogXCJsdHJcIixcbiAgICAgICAgcnRsOiBcInJ0bFwiLFxuICAgICAgICB0ZXh0RGlyZWN0aW9uTHRyOiBcInR4dC1kaXItbHRyXCIsXG4gICAgICAgIHRleHREaXJlY3Rpb25SdGw6IFwidHh0LWRpci1ydGxcIixcbiAgICAgICAgZHJhZ2dhYmxlOiBcImRyYWdnYWJsZVwiLFxuICAgICAgICBkcmFnOiBcInN0YXRlLWRyYWdcIixcbiAgICAgICAgdGFwOiBcInN0YXRlLXRhcFwiLFxuICAgICAgICBhY3RpdmU6IFwiYWN0aXZlXCIsXG4gICAgICAgIHRvb2x0aXA6IFwidG9vbHRpcFwiLFxuICAgICAgICBwaXBzOiBcInBpcHNcIixcbiAgICAgICAgcGlwc0hvcml6b250YWw6IFwicGlwcy1ob3Jpem9udGFsXCIsXG4gICAgICAgIHBpcHNWZXJ0aWNhbDogXCJwaXBzLXZlcnRpY2FsXCIsXG4gICAgICAgIG1hcmtlcjogXCJtYXJrZXJcIixcbiAgICAgICAgbWFya2VySG9yaXpvbnRhbDogXCJtYXJrZXItaG9yaXpvbnRhbFwiLFxuICAgICAgICBtYXJrZXJWZXJ0aWNhbDogXCJtYXJrZXItdmVydGljYWxcIixcbiAgICAgICAgbWFya2VyTm9ybWFsOiBcIm1hcmtlci1ub3JtYWxcIixcbiAgICAgICAgbWFya2VyTGFyZ2U6IFwibWFya2VyLWxhcmdlXCIsXG4gICAgICAgIG1hcmtlclN1YjogXCJtYXJrZXItc3ViXCIsXG4gICAgICAgIHZhbHVlOiBcInZhbHVlXCIsXG4gICAgICAgIHZhbHVlSG9yaXpvbnRhbDogXCJ2YWx1ZS1ob3Jpem9udGFsXCIsXG4gICAgICAgIHZhbHVlVmVydGljYWw6IFwidmFsdWUtdmVydGljYWxcIixcbiAgICAgICAgdmFsdWVOb3JtYWw6IFwidmFsdWUtbm9ybWFsXCIsXG4gICAgICAgIHZhbHVlTGFyZ2U6IFwidmFsdWUtbGFyZ2VcIixcbiAgICAgICAgdmFsdWVTdWI6IFwidmFsdWUtc3ViXCIsXG4gICAgfTtcbiAgICAvLyBOYW1lc3BhY2VzIG9mIGludGVybmFsIGV2ZW50IGxpc3RlbmVyc1xuICAgIHZhciBJTlRFUk5BTF9FVkVOVF9OUyA9IHtcbiAgICAgICAgdG9vbHRpcHM6IFwiLl9fdG9vbHRpcHNcIixcbiAgICAgICAgYXJpYTogXCIuX19hcmlhXCIsXG4gICAgfTtcbiAgICAvL2VuZHJlZ2lvblxuICAgIGZ1bmN0aW9uIHRlc3RTdGVwKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKCFpc051bWVyaWMoZW50cnkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnc3RlcCcgaXMgbm90IG51bWVyaWMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRoZSBzdGVwIG9wdGlvbiBjYW4gc3RpbGwgYmUgdXNlZCB0byBzZXQgc3RlcHBpbmdcbiAgICAgICAgLy8gZm9yIGxpbmVhciBzbGlkZXJzLiBPdmVyd3JpdHRlbiBpZiBzZXQgaW4gJ3JhbmdlJy5cbiAgICAgICAgcGFyc2VkLnNpbmdsZVN0ZXAgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdEtleWJvYXJkUGFnZU11bHRpcGxpZXIocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAoIWlzTnVtZXJpYyhlbnRyeSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdrZXlib2FyZFBhZ2VNdWx0aXBsaWVyJyBpcyBub3QgbnVtZXJpYy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmtleWJvYXJkUGFnZU11bHRpcGxpZXIgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdEtleWJvYXJkTXVsdGlwbGllcihwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICghaXNOdW1lcmljKGVudHJ5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2tleWJvYXJkTXVsdGlwbGllcicgaXMgbm90IG51bWVyaWMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5rZXlib2FyZE11bHRpcGxpZXIgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdEtleWJvYXJkRGVmYXVsdFN0ZXAocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAoIWlzTnVtZXJpYyhlbnRyeSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdrZXlib2FyZERlZmF1bHRTdGVwJyBpcyBub3QgbnVtZXJpYy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmtleWJvYXJkRGVmYXVsdFN0ZXAgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdFJhbmdlKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgLy8gRmlsdGVyIGluY29ycmVjdCBpbnB1dC5cbiAgICAgICAgaWYgKHR5cGVvZiBlbnRyeSAhPT0gXCJvYmplY3RcIiB8fCBBcnJheS5pc0FycmF5KGVudHJ5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3JhbmdlJyBpcyBub3QgYW4gb2JqZWN0LlwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDYXRjaCBtaXNzaW5nIHN0YXJ0IG9yIGVuZC5cbiAgICAgICAgaWYgKGVudHJ5Lm1pbiA9PT0gdW5kZWZpbmVkIHx8IGVudHJ5Lm1heCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiBNaXNzaW5nICdtaW4nIG9yICdtYXgnIGluICdyYW5nZScuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5zcGVjdHJ1bSA9IG5ldyBTcGVjdHJ1bShlbnRyeSwgcGFyc2VkLnNuYXAgfHwgZmFsc2UsIHBhcnNlZC5zaW5nbGVTdGVwKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdFN0YXJ0KHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgZW50cnkgPSBhc0FycmF5KGVudHJ5KTtcbiAgICAgICAgLy8gVmFsaWRhdGUgaW5wdXQuIFZhbHVlcyBhcmVuJ3QgdGVzdGVkLCBhcyB0aGUgcHVibGljIC52YWwgbWV0aG9kXG4gICAgICAgIC8vIHdpbGwgYWx3YXlzIHByb3ZpZGUgYSB2YWxpZCBsb2NhdGlvbi5cbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGVudHJ5KSB8fCAhZW50cnkubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnc3RhcnQnIG9wdGlvbiBpcyBpbmNvcnJlY3QuXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFN0b3JlIHRoZSBudW1iZXIgb2YgaGFuZGxlcy5cbiAgICAgICAgcGFyc2VkLmhhbmRsZXMgPSBlbnRyeS5sZW5ndGg7XG4gICAgICAgIC8vIFdoZW4gdGhlIHNsaWRlciBpcyBpbml0aWFsaXplZCwgdGhlIC52YWwgbWV0aG9kIHdpbGxcbiAgICAgICAgLy8gYmUgY2FsbGVkIHdpdGggdGhlIHN0YXJ0IG9wdGlvbnMuXG4gICAgICAgIHBhcnNlZC5zdGFydCA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0U25hcChwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgZW50cnkgIT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnc25hcCcgb3B0aW9uIG11c3QgYmUgYSBib29sZWFuLlwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBFbmZvcmNlIDEwMCUgc3RlcHBpbmcgd2l0aGluIHN1YnJhbmdlcy5cbiAgICAgICAgcGFyc2VkLnNuYXAgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdEFuaW1hdGUocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAodHlwZW9mIGVudHJ5ICE9PSBcImJvb2xlYW5cIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2FuaW1hdGUnIG9wdGlvbiBtdXN0IGJlIGEgYm9vbGVhbi5cIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRW5mb3JjZSAxMDAlIHN0ZXBwaW5nIHdpdGhpbiBzdWJyYW5nZXMuXG4gICAgICAgIHBhcnNlZC5hbmltYXRlID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RBbmltYXRpb25EdXJhdGlvbihwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgZW50cnkgIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdhbmltYXRpb25EdXJhdGlvbicgb3B0aW9uIG11c3QgYmUgYSBudW1iZXIuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5hbmltYXRpb25EdXJhdGlvbiA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0Q29ubmVjdChwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIHZhciBjb25uZWN0ID0gW2ZhbHNlXTtcbiAgICAgICAgdmFyIGk7XG4gICAgICAgIC8vIE1hcCBsZWdhY3kgb3B0aW9uc1xuICAgICAgICBpZiAoZW50cnkgPT09IFwibG93ZXJcIikge1xuICAgICAgICAgICAgZW50cnkgPSBbdHJ1ZSwgZmFsc2VdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGVudHJ5ID09PSBcInVwcGVyXCIpIHtcbiAgICAgICAgICAgIGVudHJ5ID0gW2ZhbHNlLCB0cnVlXTtcbiAgICAgICAgfVxuICAgICAgICAvLyBIYW5kbGUgYm9vbGVhbiBvcHRpb25zXG4gICAgICAgIGlmIChlbnRyeSA9PT0gdHJ1ZSB8fCBlbnRyeSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDE7IGkgPCBwYXJzZWQuaGFuZGxlczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29ubmVjdC5wdXNoKGVudHJ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbm5lY3QucHVzaChmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVqZWN0IGludmFsaWQgaW5wdXRcbiAgICAgICAgZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkoZW50cnkpIHx8ICFlbnRyeS5sZW5ndGggfHwgZW50cnkubGVuZ3RoICE9PSBwYXJzZWQuaGFuZGxlcyArIDEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdjb25uZWN0JyBvcHRpb24gZG9lc24ndCBtYXRjaCBoYW5kbGUgY291bnQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29ubmVjdCA9IGVudHJ5O1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5jb25uZWN0ID0gY29ubmVjdDtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdE9yaWVudGF0aW9uKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgLy8gU2V0IG9yaWVudGF0aW9uIHRvIGFuIGEgbnVtZXJpY2FsIHZhbHVlIGZvciBlYXN5XG4gICAgICAgIC8vIGFycmF5IHNlbGVjdGlvbi5cbiAgICAgICAgc3dpdGNoIChlbnRyeSkge1xuICAgICAgICAgICAgY2FzZSBcImhvcml6b250YWxcIjpcbiAgICAgICAgICAgICAgICBwYXJzZWQub3J0ID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ2ZXJ0aWNhbFwiOlxuICAgICAgICAgICAgICAgIHBhcnNlZC5vcnQgPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnb3JpZW50YXRpb24nIG9wdGlvbiBpcyBpbnZhbGlkLlwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0TWFyZ2luKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKCFpc051bWVyaWMoZW50cnkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnbWFyZ2luJyBvcHRpb24gbXVzdCBiZSBudW1lcmljLlwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJc3N1ZSAjNTgyXG4gICAgICAgIGlmIChlbnRyeSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5tYXJnaW4gPSBwYXJzZWQuc3BlY3RydW0uZ2V0RGlzdGFuY2UoZW50cnkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0TGltaXQocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAoIWlzTnVtZXJpYyhlbnRyeSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdsaW1pdCcgb3B0aW9uIG11c3QgYmUgbnVtZXJpYy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmxpbWl0ID0gcGFyc2VkLnNwZWN0cnVtLmdldERpc3RhbmNlKGVudHJ5KTtcbiAgICAgICAgaWYgKCFwYXJzZWQubGltaXQgfHwgcGFyc2VkLmhhbmRsZXMgPCAyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnbGltaXQnIG9wdGlvbiBpcyBvbmx5IHN1cHBvcnRlZCBvbiBsaW5lYXIgc2xpZGVycyB3aXRoIDIgb3IgbW9yZSBoYW5kbGVzLlwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0UGFkZGluZyhwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIHZhciBpbmRleDtcbiAgICAgICAgaWYgKCFpc051bWVyaWMoZW50cnkpICYmICFBcnJheS5pc0FycmF5KGVudHJ5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3BhZGRpbmcnIG9wdGlvbiBtdXN0IGJlIG51bWVyaWMgb3IgYXJyYXkgb2YgZXhhY3RseSAyIG51bWJlcnMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGVudHJ5KSAmJiAhKGVudHJ5Lmxlbmd0aCA9PT0gMiB8fCBpc051bWVyaWMoZW50cnlbMF0pIHx8IGlzTnVtZXJpYyhlbnRyeVsxXSkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAncGFkZGluZycgb3B0aW9uIG11c3QgYmUgbnVtZXJpYyBvciBhcnJheSBvZiBleGFjdGx5IDIgbnVtYmVycy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVudHJ5ID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGVudHJ5KSkge1xuICAgICAgICAgICAgZW50cnkgPSBbZW50cnksIGVudHJ5XTtcbiAgICAgICAgfVxuICAgICAgICAvLyAnZ2V0RGlzdGFuY2UnIHJldHVybnMgZmFsc2UgZm9yIGludmFsaWQgdmFsdWVzLlxuICAgICAgICBwYXJzZWQucGFkZGluZyA9IFtwYXJzZWQuc3BlY3RydW0uZ2V0RGlzdGFuY2UoZW50cnlbMF0pLCBwYXJzZWQuc3BlY3RydW0uZ2V0RGlzdGFuY2UoZW50cnlbMV0pXTtcbiAgICAgICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgcGFyc2VkLnNwZWN0cnVtLnhOdW1TdGVwcy5sZW5ndGggLSAxOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAvLyBsYXN0IFwicmFuZ2VcIiBjYW4ndCBjb250YWluIHN0ZXAgc2l6ZSBhcyBpdCBpcyBwdXJlbHkgYW4gZW5kcG9pbnQuXG4gICAgICAgICAgICBpZiAocGFyc2VkLnBhZGRpbmdbMF1baW5kZXhdIDwgMCB8fCBwYXJzZWQucGFkZGluZ1sxXVtpbmRleF0gPCAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3BhZGRpbmcnIG9wdGlvbiBtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyKHMpLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgdG90YWxQYWRkaW5nID0gZW50cnlbMF0gKyBlbnRyeVsxXTtcbiAgICAgICAgdmFyIGZpcnN0VmFsdWUgPSBwYXJzZWQuc3BlY3RydW0ueFZhbFswXTtcbiAgICAgICAgdmFyIGxhc3RWYWx1ZSA9IHBhcnNlZC5zcGVjdHJ1bS54VmFsW3BhcnNlZC5zcGVjdHJ1bS54VmFsLmxlbmd0aCAtIDFdO1xuICAgICAgICBpZiAodG90YWxQYWRkaW5nIC8gKGxhc3RWYWx1ZSAtIGZpcnN0VmFsdWUpID4gMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3BhZGRpbmcnIG9wdGlvbiBtdXN0IG5vdCBleGNlZWQgMTAwJSBvZiB0aGUgcmFuZ2UuXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3REaXJlY3Rpb24ocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICAvLyBTZXQgZGlyZWN0aW9uIGFzIGEgbnVtZXJpY2FsIHZhbHVlIGZvciBlYXN5IHBhcnNpbmcuXG4gICAgICAgIC8vIEludmVydCBjb25uZWN0aW9uIGZvciBSVEwgc2xpZGVycywgc28gdGhhdCB0aGUgcHJvcGVyXG4gICAgICAgIC8vIGhhbmRsZXMgZ2V0IHRoZSBjb25uZWN0L2JhY2tncm91bmQgY2xhc3Nlcy5cbiAgICAgICAgc3dpdGNoIChlbnRyeSkge1xuICAgICAgICAgICAgY2FzZSBcImx0clwiOlxuICAgICAgICAgICAgICAgIHBhcnNlZC5kaXIgPSAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInJ0bFwiOlxuICAgICAgICAgICAgICAgIHBhcnNlZC5kaXIgPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnZGlyZWN0aW9uJyBvcHRpb24gd2FzIG5vdCByZWNvZ25pemVkLlwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0QmVoYXZpb3VyKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgLy8gTWFrZSBzdXJlIHRoZSBpbnB1dCBpcyBhIHN0cmluZy5cbiAgICAgICAgaWYgKHR5cGVvZiBlbnRyeSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2JlaGF2aW91cicgbXVzdCBiZSBhIHN0cmluZyBjb250YWluaW5nIG9wdGlvbnMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBzdHJpbmcgY29udGFpbnMgYW55IGtleXdvcmRzLlxuICAgICAgICAvLyBOb25lIGFyZSByZXF1aXJlZC5cbiAgICAgICAgdmFyIHRhcCA9IGVudHJ5LmluZGV4T2YoXCJ0YXBcIikgPj0gMDtcbiAgICAgICAgdmFyIGRyYWcgPSBlbnRyeS5pbmRleE9mKFwiZHJhZ1wiKSA+PSAwO1xuICAgICAgICB2YXIgZml4ZWQgPSBlbnRyeS5pbmRleE9mKFwiZml4ZWRcIikgPj0gMDtcbiAgICAgICAgdmFyIHNuYXAgPSBlbnRyeS5pbmRleE9mKFwic25hcFwiKSA+PSAwO1xuICAgICAgICB2YXIgaG92ZXIgPSBlbnRyeS5pbmRleE9mKFwiaG92ZXJcIikgPj0gMDtcbiAgICAgICAgdmFyIHVuY29uc3RyYWluZWQgPSBlbnRyeS5pbmRleE9mKFwidW5jb25zdHJhaW5lZFwiKSA+PSAwO1xuICAgICAgICB2YXIgZHJhZ0FsbCA9IGVudHJ5LmluZGV4T2YoXCJkcmFnLWFsbFwiKSA+PSAwO1xuICAgICAgICB2YXIgc21vb3RoU3RlcHMgPSBlbnRyeS5pbmRleE9mKFwic21vb3RoLXN0ZXBzXCIpID49IDA7XG4gICAgICAgIGlmIChmaXhlZCkge1xuICAgICAgICAgICAgaWYgKHBhcnNlZC5oYW5kbGVzICE9PSAyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2ZpeGVkJyBiZWhhdmlvdXIgbXVzdCBiZSB1c2VkIHdpdGggMiBoYW5kbGVzXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVXNlIG1hcmdpbiB0byBlbmZvcmNlIGZpeGVkIHN0YXRlXG4gICAgICAgICAgICB0ZXN0TWFyZ2luKHBhcnNlZCwgcGFyc2VkLnN0YXJ0WzFdIC0gcGFyc2VkLnN0YXJ0WzBdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodW5jb25zdHJhaW5lZCAmJiAocGFyc2VkLm1hcmdpbiB8fCBwYXJzZWQubGltaXQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAndW5jb25zdHJhaW5lZCcgYmVoYXZpb3VyIGNhbm5vdCBiZSB1c2VkIHdpdGggbWFyZ2luIG9yIGxpbWl0XCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5ldmVudHMgPSB7XG4gICAgICAgICAgICB0YXA6IHRhcCB8fCBzbmFwLFxuICAgICAgICAgICAgZHJhZzogZHJhZyxcbiAgICAgICAgICAgIGRyYWdBbGw6IGRyYWdBbGwsXG4gICAgICAgICAgICBzbW9vdGhTdGVwczogc21vb3RoU3RlcHMsXG4gICAgICAgICAgICBmaXhlZDogZml4ZWQsXG4gICAgICAgICAgICBzbmFwOiBzbmFwLFxuICAgICAgICAgICAgaG92ZXI6IGhvdmVyLFxuICAgICAgICAgICAgdW5jb25zdHJhaW5lZDogdW5jb25zdHJhaW5lZCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdFRvb2x0aXBzKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKGVudHJ5ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbnRyeSA9PT0gdHJ1ZSB8fCBpc1ZhbGlkUGFydGlhbEZvcm1hdHRlcihlbnRyeSkpIHtcbiAgICAgICAgICAgIHBhcnNlZC50b29sdGlwcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJzZWQuaGFuZGxlczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnRvb2x0aXBzLnB1c2goZW50cnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZW50cnkgPSBhc0FycmF5KGVudHJ5KTtcbiAgICAgICAgICAgIGlmIChlbnRyeS5sZW5ndGggIT09IHBhcnNlZC5oYW5kbGVzKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogbXVzdCBwYXNzIGEgZm9ybWF0dGVyIGZvciBhbGwgaGFuZGxlcy5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbnRyeS5mb3JFYWNoKGZ1bmN0aW9uIChmb3JtYXR0ZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZvcm1hdHRlciAhPT0gXCJib29sZWFuXCIgJiYgIWlzVmFsaWRQYXJ0aWFsRm9ybWF0dGVyKGZvcm1hdHRlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3Rvb2x0aXBzJyBtdXN0IGJlIHBhc3NlZCBhIGZvcm1hdHRlciBvciAnZmFsc2UnLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHBhcnNlZC50b29sdGlwcyA9IGVudHJ5O1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RIYW5kbGVBdHRyaWJ1dGVzKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKGVudHJ5Lmxlbmd0aCAhPT0gcGFyc2VkLmhhbmRsZXMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6IG11c3QgcGFzcyBhIGF0dHJpYnV0ZXMgZm9yIGFsbCBoYW5kbGVzLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQuaGFuZGxlQXR0cmlidXRlcyA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0QXJpYUZvcm1hdChwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICghaXNWYWxpZFBhcnRpYWxGb3JtYXR0ZXIoZW50cnkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnYXJpYUZvcm1hdCcgcmVxdWlyZXMgJ3RvJyBtZXRob2QuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5hcmlhRm9ybWF0ID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RGb3JtYXQocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAoIWlzVmFsaWRGb3JtYXR0ZXIoZW50cnkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnZm9ybWF0JyByZXF1aXJlcyAndG8nIGFuZCAnZnJvbScgbWV0aG9kcy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmZvcm1hdCA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0S2V5Ym9hcmRTdXBwb3J0KHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbnRyeSAhPT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdrZXlib2FyZFN1cHBvcnQnIG9wdGlvbiBtdXN0IGJlIGEgYm9vbGVhbi5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmtleWJvYXJkU3VwcG9ydCA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0RG9jdW1lbnRFbGVtZW50KHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgLy8gVGhpcyBpcyBhbiBhZHZhbmNlZCBvcHRpb24uIFBhc3NlZCB2YWx1ZXMgYXJlIHVzZWQgd2l0aG91dCB2YWxpZGF0aW9uLlxuICAgICAgICBwYXJzZWQuZG9jdW1lbnRFbGVtZW50ID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RDc3NQcmVmaXgocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAodHlwZW9mIGVudHJ5ICE9PSBcInN0cmluZ1wiICYmIGVudHJ5ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2Nzc1ByZWZpeCcgbXVzdCBiZSBhIHN0cmluZyBvciBgZmFsc2VgLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQuY3NzUHJlZml4ID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RDc3NDbGFzc2VzKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbnRyeSAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2Nzc0NsYXNzZXMnIG11c3QgYmUgYW4gb2JqZWN0LlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHBhcnNlZC5jc3NQcmVmaXggPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHBhcnNlZC5jc3NDbGFzc2VzID0ge307XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhlbnRyeSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkLmNzc0NsYXNzZXNba2V5XSA9IHBhcnNlZC5jc3NQcmVmaXggKyBlbnRyeVtrZXldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwYXJzZWQuY3NzQ2xhc3NlcyA9IGVudHJ5O1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIFRlc3QgYWxsIGRldmVsb3BlciBzZXR0aW5ncyBhbmQgcGFyc2UgdG8gYXNzdW1wdGlvbi1zYWZlIHZhbHVlcy5cbiAgICBmdW5jdGlvbiB0ZXN0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICAgIC8vIFRvIHByb3ZlIGEgZml4IGZvciAjNTM3LCBmcmVlemUgb3B0aW9ucyBoZXJlLlxuICAgICAgICAvLyBJZiB0aGUgb2JqZWN0IGlzIG1vZGlmaWVkLCBhbiBlcnJvciB3aWxsIGJlIHRocm93bi5cbiAgICAgICAgLy8gT2JqZWN0LmZyZWV6ZShvcHRpb25zKTtcbiAgICAgICAgdmFyIHBhcnNlZCA9IHtcbiAgICAgICAgICAgIG1hcmdpbjogbnVsbCxcbiAgICAgICAgICAgIGxpbWl0OiBudWxsLFxuICAgICAgICAgICAgcGFkZGluZzogbnVsbCxcbiAgICAgICAgICAgIGFuaW1hdGU6IHRydWUsXG4gICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogMzAwLFxuICAgICAgICAgICAgYXJpYUZvcm1hdDogZGVmYXVsdEZvcm1hdHRlcixcbiAgICAgICAgICAgIGZvcm1hdDogZGVmYXVsdEZvcm1hdHRlcixcbiAgICAgICAgfTtcbiAgICAgICAgLy8gVGVzdHMgYXJlIGV4ZWN1dGVkIGluIHRoZSBvcmRlciB0aGV5IGFyZSBwcmVzZW50ZWQgaGVyZS5cbiAgICAgICAgdmFyIHRlc3RzID0ge1xuICAgICAgICAgICAgc3RlcDogeyByOiBmYWxzZSwgdDogdGVzdFN0ZXAgfSxcbiAgICAgICAgICAgIGtleWJvYXJkUGFnZU11bHRpcGxpZXI6IHsgcjogZmFsc2UsIHQ6IHRlc3RLZXlib2FyZFBhZ2VNdWx0aXBsaWVyIH0sXG4gICAgICAgICAgICBrZXlib2FyZE11bHRpcGxpZXI6IHsgcjogZmFsc2UsIHQ6IHRlc3RLZXlib2FyZE11bHRpcGxpZXIgfSxcbiAgICAgICAgICAgIGtleWJvYXJkRGVmYXVsdFN0ZXA6IHsgcjogZmFsc2UsIHQ6IHRlc3RLZXlib2FyZERlZmF1bHRTdGVwIH0sXG4gICAgICAgICAgICBzdGFydDogeyByOiB0cnVlLCB0OiB0ZXN0U3RhcnQgfSxcbiAgICAgICAgICAgIGNvbm5lY3Q6IHsgcjogdHJ1ZSwgdDogdGVzdENvbm5lY3QgfSxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogeyByOiB0cnVlLCB0OiB0ZXN0RGlyZWN0aW9uIH0sXG4gICAgICAgICAgICBzbmFwOiB7IHI6IGZhbHNlLCB0OiB0ZXN0U25hcCB9LFxuICAgICAgICAgICAgYW5pbWF0ZTogeyByOiBmYWxzZSwgdDogdGVzdEFuaW1hdGUgfSxcbiAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiB7IHI6IGZhbHNlLCB0OiB0ZXN0QW5pbWF0aW9uRHVyYXRpb24gfSxcbiAgICAgICAgICAgIHJhbmdlOiB7IHI6IHRydWUsIHQ6IHRlc3RSYW5nZSB9LFxuICAgICAgICAgICAgb3JpZW50YXRpb246IHsgcjogZmFsc2UsIHQ6IHRlc3RPcmllbnRhdGlvbiB9LFxuICAgICAgICAgICAgbWFyZ2luOiB7IHI6IGZhbHNlLCB0OiB0ZXN0TWFyZ2luIH0sXG4gICAgICAgICAgICBsaW1pdDogeyByOiBmYWxzZSwgdDogdGVzdExpbWl0IH0sXG4gICAgICAgICAgICBwYWRkaW5nOiB7IHI6IGZhbHNlLCB0OiB0ZXN0UGFkZGluZyB9LFxuICAgICAgICAgICAgYmVoYXZpb3VyOiB7IHI6IHRydWUsIHQ6IHRlc3RCZWhhdmlvdXIgfSxcbiAgICAgICAgICAgIGFyaWFGb3JtYXQ6IHsgcjogZmFsc2UsIHQ6IHRlc3RBcmlhRm9ybWF0IH0sXG4gICAgICAgICAgICBmb3JtYXQ6IHsgcjogZmFsc2UsIHQ6IHRlc3RGb3JtYXQgfSxcbiAgICAgICAgICAgIHRvb2x0aXBzOiB7IHI6IGZhbHNlLCB0OiB0ZXN0VG9vbHRpcHMgfSxcbiAgICAgICAgICAgIGtleWJvYXJkU3VwcG9ydDogeyByOiB0cnVlLCB0OiB0ZXN0S2V5Ym9hcmRTdXBwb3J0IH0sXG4gICAgICAgICAgICBkb2N1bWVudEVsZW1lbnQ6IHsgcjogZmFsc2UsIHQ6IHRlc3REb2N1bWVudEVsZW1lbnQgfSxcbiAgICAgICAgICAgIGNzc1ByZWZpeDogeyByOiB0cnVlLCB0OiB0ZXN0Q3NzUHJlZml4IH0sXG4gICAgICAgICAgICBjc3NDbGFzc2VzOiB7IHI6IHRydWUsIHQ6IHRlc3RDc3NDbGFzc2VzIH0sXG4gICAgICAgICAgICBoYW5kbGVBdHRyaWJ1dGVzOiB7IHI6IGZhbHNlLCB0OiB0ZXN0SGFuZGxlQXR0cmlidXRlcyB9LFxuICAgICAgICB9O1xuICAgICAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBjb25uZWN0OiBmYWxzZSxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogXCJsdHJcIixcbiAgICAgICAgICAgIGJlaGF2aW91cjogXCJ0YXBcIixcbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIixcbiAgICAgICAgICAgIGtleWJvYXJkU3VwcG9ydDogdHJ1ZSxcbiAgICAgICAgICAgIGNzc1ByZWZpeDogXCJub1VpLVwiLFxuICAgICAgICAgICAgY3NzQ2xhc3NlczogY3NzQ2xhc3NlcyxcbiAgICAgICAgICAgIGtleWJvYXJkUGFnZU11bHRpcGxpZXI6IDUsXG4gICAgICAgICAgICBrZXlib2FyZE11bHRpcGxpZXI6IDEsXG4gICAgICAgICAgICBrZXlib2FyZERlZmF1bHRTdGVwOiAxMCxcbiAgICAgICAgfTtcbiAgICAgICAgLy8gQXJpYUZvcm1hdCBkZWZhdWx0cyB0byByZWd1bGFyIGZvcm1hdCwgaWYgYW55LlxuICAgICAgICBpZiAob3B0aW9ucy5mb3JtYXQgJiYgIW9wdGlvbnMuYXJpYUZvcm1hdCkge1xuICAgICAgICAgICAgb3B0aW9ucy5hcmlhRm9ybWF0ID0gb3B0aW9ucy5mb3JtYXQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUnVuIGFsbCBvcHRpb25zIHRocm91Z2ggYSB0ZXN0aW5nIG1lY2hhbmlzbSB0byBlbnN1cmUgY29ycmVjdFxuICAgICAgICAvLyBpbnB1dC4gSXQgc2hvdWxkIGJlIG5vdGVkIHRoYXQgb3B0aW9ucyBtaWdodCBnZXQgbW9kaWZpZWQgdG9cbiAgICAgICAgLy8gYmUgaGFuZGxlZCBwcm9wZXJseS4gRS5nLiB3cmFwcGluZyBpbnRlZ2VycyBpbiBhcnJheXMuXG4gICAgICAgIE9iamVjdC5rZXlzKHRlc3RzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgb3B0aW9uIGlzbid0IHNldCwgYnV0IGl0IGlzIHJlcXVpcmVkLCB0aHJvdyBhbiBlcnJvci5cbiAgICAgICAgICAgIGlmICghaXNTZXQob3B0aW9uc1tuYW1lXSkgJiYgZGVmYXVsdHNbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGlmICh0ZXN0c1tuYW1lXS5yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdcIiArIG5hbWUgKyBcIicgaXMgcmVxdWlyZWQuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0ZXN0c1tuYW1lXS50KHBhcnNlZCwgIWlzU2V0KG9wdGlvbnNbbmFtZV0pID8gZGVmYXVsdHNbbmFtZV0gOiBvcHRpb25zW25hbWVdKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEZvcndhcmQgcGlwcyBvcHRpb25zXG4gICAgICAgIHBhcnNlZC5waXBzID0gb3B0aW9ucy5waXBzO1xuICAgICAgICAvLyBBbGwgcmVjZW50IGJyb3dzZXJzIGFjY2VwdCB1bnByZWZpeGVkIHRyYW5zZm9ybS5cbiAgICAgICAgLy8gV2UgbmVlZCAtbXMtIGZvciBJRTkgYW5kIC13ZWJraXQtIGZvciBvbGRlciBBbmRyb2lkO1xuICAgICAgICAvLyBBc3N1bWUgdXNlIG9mIC13ZWJraXQtIGlmIHVucHJlZml4ZWQgYW5kIC1tcy0gYXJlIG5vdCBzdXBwb3J0ZWQuXG4gICAgICAgIC8vIGh0dHBzOi8vY2FuaXVzZS5jb20vI2ZlYXQ9dHJhbnNmb3JtczJkXG4gICAgICAgIHZhciBkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdmFyIG1zUHJlZml4ID0gZC5zdHlsZS5tc1RyYW5zZm9ybSAhPT0gdW5kZWZpbmVkO1xuICAgICAgICB2YXIgbm9QcmVmaXggPSBkLnN0eWxlLnRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkO1xuICAgICAgICBwYXJzZWQudHJhbnNmb3JtUnVsZSA9IG5vUHJlZml4ID8gXCJ0cmFuc2Zvcm1cIiA6IG1zUHJlZml4ID8gXCJtc1RyYW5zZm9ybVwiIDogXCJ3ZWJraXRUcmFuc2Zvcm1cIjtcbiAgICAgICAgLy8gUGlwcyBkb24ndCBtb3ZlLCBzbyB3ZSBjYW4gcGxhY2UgdGhlbSB1c2luZyBsZWZ0L3RvcC5cbiAgICAgICAgdmFyIHN0eWxlcyA9IFtcbiAgICAgICAgICAgIFtcImxlZnRcIiwgXCJ0b3BcIl0sXG4gICAgICAgICAgICBbXCJyaWdodFwiLCBcImJvdHRvbVwiXSxcbiAgICAgICAgXTtcbiAgICAgICAgcGFyc2VkLnN0eWxlID0gc3R5bGVzW3BhcnNlZC5kaXJdW3BhcnNlZC5vcnRdO1xuICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgIH1cbiAgICAvL2VuZHJlZ2lvblxuICAgIGZ1bmN0aW9uIHNjb3BlKHRhcmdldCwgb3B0aW9ucywgb3JpZ2luYWxPcHRpb25zKSB7XG4gICAgICAgIHZhciBhY3Rpb25zID0gZ2V0QWN0aW9ucygpO1xuICAgICAgICB2YXIgc3VwcG9ydHNUb3VjaEFjdGlvbk5vbmUgPSBnZXRTdXBwb3J0c1RvdWNoQWN0aW9uTm9uZSgpO1xuICAgICAgICB2YXIgc3VwcG9ydHNQYXNzaXZlID0gc3VwcG9ydHNUb3VjaEFjdGlvbk5vbmUgJiYgZ2V0U3VwcG9ydHNQYXNzaXZlKCk7XG4gICAgICAgIC8vIEFsbCB2YXJpYWJsZXMgbG9jYWwgdG8gJ3Njb3BlJyBhcmUgcHJlZml4ZWQgd2l0aCAnc2NvcGVfJ1xuICAgICAgICAvLyBTbGlkZXIgRE9NIE5vZGVzXG4gICAgICAgIHZhciBzY29wZV9UYXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHZhciBzY29wZV9CYXNlO1xuICAgICAgICB2YXIgc2NvcGVfSGFuZGxlcztcbiAgICAgICAgdmFyIHNjb3BlX0Nvbm5lY3RzO1xuICAgICAgICB2YXIgc2NvcGVfUGlwcztcbiAgICAgICAgdmFyIHNjb3BlX1Rvb2x0aXBzO1xuICAgICAgICAvLyBTbGlkZXIgc3RhdGUgdmFsdWVzXG4gICAgICAgIHZhciBzY29wZV9TcGVjdHJ1bSA9IG9wdGlvbnMuc3BlY3RydW07XG4gICAgICAgIHZhciBzY29wZV9WYWx1ZXMgPSBbXTtcbiAgICAgICAgdmFyIHNjb3BlX0xvY2F0aW9ucyA9IFtdO1xuICAgICAgICB2YXIgc2NvcGVfSGFuZGxlTnVtYmVycyA9IFtdO1xuICAgICAgICB2YXIgc2NvcGVfQWN0aXZlSGFuZGxlc0NvdW50ID0gMDtcbiAgICAgICAgdmFyIHNjb3BlX0V2ZW50cyA9IHt9O1xuICAgICAgICAvLyBEb2N1bWVudCBOb2Rlc1xuICAgICAgICB2YXIgc2NvcGVfRG9jdW1lbnQgPSB0YXJnZXQub3duZXJEb2N1bWVudDtcbiAgICAgICAgdmFyIHNjb3BlX0RvY3VtZW50RWxlbWVudCA9IG9wdGlvbnMuZG9jdW1lbnRFbGVtZW50IHx8IHNjb3BlX0RvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgdmFyIHNjb3BlX0JvZHkgPSBzY29wZV9Eb2N1bWVudC5ib2R5O1xuICAgICAgICAvLyBGb3IgaG9yaXpvbnRhbCBzbGlkZXJzIGluIHN0YW5kYXJkIGx0ciBkb2N1bWVudHMsXG4gICAgICAgIC8vIG1ha2UgLm5vVWktb3JpZ2luIG92ZXJmbG93IHRvIHRoZSBsZWZ0IHNvIHRoZSBkb2N1bWVudCBkb2Vzbid0IHNjcm9sbC5cbiAgICAgICAgdmFyIHNjb3BlX0Rpck9mZnNldCA9IHNjb3BlX0RvY3VtZW50LmRpciA9PT0gXCJydGxcIiB8fCBvcHRpb25zLm9ydCA9PT0gMSA/IDAgOiAxMDA7XG4gICAgICAgIC8vIENyZWF0ZXMgYSBub2RlLCBhZGRzIGl0IHRvIHRhcmdldCwgcmV0dXJucyB0aGUgbmV3IG5vZGUuXG4gICAgICAgIGZ1bmN0aW9uIGFkZE5vZGVUbyhhZGRUYXJnZXQsIGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgdmFyIGRpdiA9IHNjb3BlX0RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MoZGl2LCBjbGFzc05hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWRkVGFyZ2V0LmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgICAgICByZXR1cm4gZGl2O1xuICAgICAgICB9XG4gICAgICAgIC8vIEFwcGVuZCBhIG9yaWdpbiB0byB0aGUgYmFzZVxuICAgICAgICBmdW5jdGlvbiBhZGRPcmlnaW4oYmFzZSwgaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICB2YXIgb3JpZ2luID0gYWRkTm9kZVRvKGJhc2UsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5vcmlnaW4pO1xuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IGFkZE5vZGVUbyhvcmlnaW4sIG9wdGlvbnMuY3NzQ2xhc3Nlcy5oYW5kbGUpO1xuICAgICAgICAgICAgYWRkTm9kZVRvKGhhbmRsZSwgb3B0aW9ucy5jc3NDbGFzc2VzLnRvdWNoQXJlYSk7XG4gICAgICAgICAgICBoYW5kbGUuc2V0QXR0cmlidXRlKFwiZGF0YS1oYW5kbGVcIiwgU3RyaW5nKGhhbmRsZU51bWJlcikpO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMua2V5Ym9hcmRTdXBwb3J0KSB7XG4gICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRNTC9HbG9iYWxfYXR0cmlidXRlcy90YWJpbmRleFxuICAgICAgICAgICAgICAgIC8vIDAgPSBmb2N1c2FibGUgYW5kIHJlYWNoYWJsZVxuICAgICAgICAgICAgICAgIGhhbmRsZS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIjBcIik7XG4gICAgICAgICAgICAgICAgaGFuZGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnRLZXlkb3duKGV2ZW50LCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuaGFuZGxlQXR0cmlidXRlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdmFyIGF0dHJpYnV0ZXNfMSA9IG9wdGlvbnMuaGFuZGxlQXR0cmlidXRlc1toYW5kbGVOdW1iZXJdO1xuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXNfMSkuZm9yRWFjaChmdW5jdGlvbiAoYXR0cmlidXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCBhdHRyaWJ1dGVzXzFbYXR0cmlidXRlXSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoYW5kbGUuc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcInNsaWRlclwiKTtcbiAgICAgICAgICAgIGhhbmRsZS5zZXRBdHRyaWJ1dGUoXCJhcmlhLW9yaWVudGF0aW9uXCIsIG9wdGlvbnMub3J0ID8gXCJ2ZXJ0aWNhbFwiIDogXCJob3Jpem9udGFsXCIpO1xuICAgICAgICAgICAgaWYgKGhhbmRsZU51bWJlciA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzKGhhbmRsZSwgb3B0aW9ucy5jc3NDbGFzc2VzLmhhbmRsZUxvd2VyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGhhbmRsZU51bWJlciA9PT0gb3B0aW9ucy5oYW5kbGVzIC0gMSkge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzKGhhbmRsZSwgb3B0aW9ucy5jc3NDbGFzc2VzLmhhbmRsZVVwcGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvcmlnaW47XG4gICAgICAgIH1cbiAgICAgICAgLy8gSW5zZXJ0IG5vZGVzIGZvciBjb25uZWN0IGVsZW1lbnRzXG4gICAgICAgIGZ1bmN0aW9uIGFkZENvbm5lY3QoYmFzZSwgYWRkKSB7XG4gICAgICAgICAgICBpZiAoIWFkZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhZGROb2RlVG8oYmFzZSwgb3B0aW9ucy5jc3NDbGFzc2VzLmNvbm5lY3QpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFkZCBoYW5kbGVzIHRvIHRoZSBzbGlkZXIgYmFzZS5cbiAgICAgICAgZnVuY3Rpb24gYWRkRWxlbWVudHMoY29ubmVjdE9wdGlvbnMsIGJhc2UpIHtcbiAgICAgICAgICAgIHZhciBjb25uZWN0QmFzZSA9IGFkZE5vZGVUbyhiYXNlLCBvcHRpb25zLmNzc0NsYXNzZXMuY29ubmVjdHMpO1xuICAgICAgICAgICAgc2NvcGVfSGFuZGxlcyA9IFtdO1xuICAgICAgICAgICAgc2NvcGVfQ29ubmVjdHMgPSBbXTtcbiAgICAgICAgICAgIHNjb3BlX0Nvbm5lY3RzLnB1c2goYWRkQ29ubmVjdChjb25uZWN0QmFzZSwgY29ubmVjdE9wdGlvbnNbMF0pKTtcbiAgICAgICAgICAgIC8vIFs6Ojo6Tz09PT1PPT09PU89PT09XVxuICAgICAgICAgICAgLy8gY29ubmVjdE9wdGlvbnMgPSBbMCwgMSwgMSwgMV1cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb3B0aW9ucy5oYW5kbGVzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAvLyBLZWVwIGEgbGlzdCBvZiBhbGwgYWRkZWQgaGFuZGxlcy5cbiAgICAgICAgICAgICAgICBzY29wZV9IYW5kbGVzLnB1c2goYWRkT3JpZ2luKGJhc2UsIGkpKTtcbiAgICAgICAgICAgICAgICBzY29wZV9IYW5kbGVOdW1iZXJzW2ldID0gaTtcbiAgICAgICAgICAgICAgICBzY29wZV9Db25uZWN0cy5wdXNoKGFkZENvbm5lY3QoY29ubmVjdEJhc2UsIGNvbm5lY3RPcHRpb25zW2kgKyAxXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEluaXRpYWxpemUgYSBzaW5nbGUgc2xpZGVyLlxuICAgICAgICBmdW5jdGlvbiBhZGRTbGlkZXIoYWRkVGFyZ2V0KSB7XG4gICAgICAgICAgICAvLyBBcHBseSBjbGFzc2VzIGFuZCBkYXRhIHRvIHRoZSB0YXJnZXQuXG4gICAgICAgICAgICBhZGRDbGFzcyhhZGRUYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy50YXJnZXQpO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuZGlyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MoYWRkVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMubHRyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzKGFkZFRhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLnJ0bCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5vcnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzcyhhZGRUYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5ob3Jpem9udGFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzKGFkZFRhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLnZlcnRpY2FsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB0ZXh0RGlyZWN0aW9uID0gZ2V0Q29tcHV0ZWRTdHlsZShhZGRUYXJnZXQpLmRpcmVjdGlvbjtcbiAgICAgICAgICAgIGlmICh0ZXh0RGlyZWN0aW9uID09PSBcInJ0bFwiKSB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MoYWRkVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMudGV4dERpcmVjdGlvblJ0bCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzcyhhZGRUYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy50ZXh0RGlyZWN0aW9uTHRyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhZGROb2RlVG8oYWRkVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMuYmFzZSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gYWRkVG9vbHRpcChoYW5kbGUsIGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zLnRvb2x0aXBzIHx8ICFvcHRpb25zLnRvb2x0aXBzW2hhbmRsZU51bWJlcl0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWRkTm9kZVRvKGhhbmRsZS5maXJzdENoaWxkLCBvcHRpb25zLmNzc0NsYXNzZXMudG9vbHRpcCk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaXNTbGlkZXJEaXNhYmxlZCgpIHtcbiAgICAgICAgICAgIHJldHVybiBzY29wZV9UYXJnZXQuaGFzQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRGlzYWJsZSB0aGUgc2xpZGVyIGRyYWdnaW5nIGlmIGFueSBoYW5kbGUgaXMgZGlzYWJsZWRcbiAgICAgICAgZnVuY3Rpb24gaXNIYW5kbGVEaXNhYmxlZChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGVPcmlnaW4gPSBzY29wZV9IYW5kbGVzW2hhbmRsZU51bWJlcl07XG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlT3JpZ2luLmhhc0F0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZVRvb2x0aXBzKCkge1xuICAgICAgICAgICAgaWYgKHNjb3BlX1Rvb2x0aXBzKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlRXZlbnQoXCJ1cGRhdGVcIiArIElOVEVSTkFMX0VWRU5UX05TLnRvb2x0aXBzKTtcbiAgICAgICAgICAgICAgICBzY29wZV9Ub29sdGlwcy5mb3JFYWNoKGZ1bmN0aW9uICh0b29sdGlwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b29sdGlwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVFbGVtZW50KHRvb2x0aXApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc2NvcGVfVG9vbHRpcHMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFRoZSB0b29sdGlwcyBvcHRpb24gaXMgYSBzaG9ydGhhbmQgZm9yIHVzaW5nIHRoZSAndXBkYXRlJyBldmVudC5cbiAgICAgICAgZnVuY3Rpb24gdG9vbHRpcHMoKSB7XG4gICAgICAgICAgICByZW1vdmVUb29sdGlwcygpO1xuICAgICAgICAgICAgLy8gVG9vbHRpcHMgYXJlIGFkZGVkIHdpdGggb3B0aW9ucy50b29sdGlwcyBpbiBvcmlnaW5hbCBvcmRlci5cbiAgICAgICAgICAgIHNjb3BlX1Rvb2x0aXBzID0gc2NvcGVfSGFuZGxlcy5tYXAoYWRkVG9vbHRpcCk7XG4gICAgICAgICAgICBiaW5kRXZlbnQoXCJ1cGRhdGVcIiArIElOVEVSTkFMX0VWRU5UX05TLnRvb2x0aXBzLCBmdW5jdGlvbiAodmFsdWVzLCBoYW5kbGVOdW1iZXIsIHVuZW5jb2RlZCkge1xuICAgICAgICAgICAgICAgIGlmICghc2NvcGVfVG9vbHRpcHMgfHwgIW9wdGlvbnMudG9vbHRpcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc2NvcGVfVG9vbHRpcHNbaGFuZGxlTnVtYmVyXSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgZm9ybWF0dGVkVmFsdWUgPSB2YWx1ZXNbaGFuZGxlTnVtYmVyXTtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy50b29sdGlwc1toYW5kbGVOdW1iZXJdICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZFZhbHVlID0gb3B0aW9ucy50b29sdGlwc1toYW5kbGVOdW1iZXJdLnRvKHVuZW5jb2RlZFtoYW5kbGVOdW1iZXJdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2NvcGVfVG9vbHRpcHNbaGFuZGxlTnVtYmVyXS5pbm5lckhUTUwgPSBmb3JtYXR0ZWRWYWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGFyaWEoKSB7XG4gICAgICAgICAgICByZW1vdmVFdmVudChcInVwZGF0ZVwiICsgSU5URVJOQUxfRVZFTlRfTlMuYXJpYSk7XG4gICAgICAgICAgICBiaW5kRXZlbnQoXCJ1cGRhdGVcIiArIElOVEVSTkFMX0VWRU5UX05TLmFyaWEsIGZ1bmN0aW9uICh2YWx1ZXMsIGhhbmRsZU51bWJlciwgdW5lbmNvZGVkLCB0YXAsIHBvc2l0aW9ucykge1xuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBBcmlhIFZhbHVlcyBmb3IgYWxsIGhhbmRsZXMsIGFzIGEgY2hhbmdlIGluIG9uZSBjaGFuZ2VzIG1pbiBhbmQgbWF4IHZhbHVlcyBmb3IgdGhlIG5leHQuXG4gICAgICAgICAgICAgICAgc2NvcGVfSGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaGFuZGxlID0gc2NvcGVfSGFuZGxlc1tpbmRleF07XG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4gPSBjaGVja0hhbmRsZVBvc2l0aW9uKHNjb3BlX0xvY2F0aW9ucywgaW5kZXgsIDAsIHRydWUsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4ID0gY2hlY2tIYW5kbGVQb3NpdGlvbihzY29wZV9Mb2NhdGlvbnMsIGluZGV4LCAxMDAsIHRydWUsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbm93ID0gcG9zaXRpb25zW2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgLy8gRm9ybWF0dGVkIHZhbHVlIGZvciBkaXNwbGF5XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZXh0ID0gU3RyaW5nKG9wdGlvbnMuYXJpYUZvcm1hdC50byh1bmVuY29kZWRbaW5kZXhdKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIE1hcCB0byBzbGlkZXIgcmFuZ2UgdmFsdWVzXG4gICAgICAgICAgICAgICAgICAgIG1pbiA9IHNjb3BlX1NwZWN0cnVtLmZyb21TdGVwcGluZyhtaW4pLnRvRml4ZWQoMSk7XG4gICAgICAgICAgICAgICAgICAgIG1heCA9IHNjb3BlX1NwZWN0cnVtLmZyb21TdGVwcGluZyhtYXgpLnRvRml4ZWQoMSk7XG4gICAgICAgICAgICAgICAgICAgIG5vdyA9IHNjb3BlX1NwZWN0cnVtLmZyb21TdGVwcGluZyhub3cpLnRvRml4ZWQoMSk7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZS5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoXCJhcmlhLXZhbHVlbWluXCIsIG1pbik7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZS5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoXCJhcmlhLXZhbHVlbWF4XCIsIG1heCk7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZS5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoXCJhcmlhLXZhbHVlbm93XCIsIG5vdyk7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZS5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoXCJhcmlhLXZhbHVldGV4dFwiLCB0ZXh0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGdldEdyb3VwKHBpcHMpIHtcbiAgICAgICAgICAgIC8vIFVzZSB0aGUgcmFuZ2UuXG4gICAgICAgICAgICBpZiAocGlwcy5tb2RlID09PSBleHBvcnRzLlBpcHNNb2RlLlJhbmdlIHx8IHBpcHMubW9kZSA9PT0gZXhwb3J0cy5QaXBzTW9kZS5TdGVwcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZV9TcGVjdHJ1bS54VmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBpcHMubW9kZSA9PT0gZXhwb3J0cy5QaXBzTW9kZS5Db3VudCkge1xuICAgICAgICAgICAgICAgIGlmIChwaXBzLnZhbHVlcyA8IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3ZhbHVlcycgKD49IDIpIHJlcXVpcmVkIGZvciBtb2RlICdjb3VudCcuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBEaXZpZGUgMCAtIDEwMCBpbiAnY291bnQnIHBhcnRzLlxuICAgICAgICAgICAgICAgIHZhciBpbnRlcnZhbCA9IHBpcHMudmFsdWVzIC0gMTtcbiAgICAgICAgICAgICAgICB2YXIgc3ByZWFkID0gMTAwIC8gaW50ZXJ2YWw7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgICAgICAgICAgICAgIC8vIExpc3QgdGhlc2UgcGFydHMgYW5kIGhhdmUgdGhlbSBoYW5kbGVkIGFzICdwb3NpdGlvbnMnLlxuICAgICAgICAgICAgICAgIHdoaWxlIChpbnRlcnZhbC0tKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlc1tpbnRlcnZhbF0gPSBpbnRlcnZhbCAqIHNwcmVhZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFsdWVzLnB1c2goMTAwKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWFwVG9SYW5nZSh2YWx1ZXMsIHBpcHMuc3RlcHBlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGlwcy5tb2RlID09PSBleHBvcnRzLlBpcHNNb2RlLlBvc2l0aW9ucykge1xuICAgICAgICAgICAgICAgIC8vIE1hcCBhbGwgcGVyY2VudGFnZXMgdG8gb24tcmFuZ2UgdmFsdWVzLlxuICAgICAgICAgICAgICAgIHJldHVybiBtYXBUb1JhbmdlKHBpcHMudmFsdWVzLCBwaXBzLnN0ZXBwZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBpcHMubW9kZSA9PT0gZXhwb3J0cy5QaXBzTW9kZS5WYWx1ZXMpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgdmFsdWUgbXVzdCBiZSBzdGVwcGVkLCBpdCBuZWVkcyB0byBiZSBjb252ZXJ0ZWQgdG8gYSBwZXJjZW50YWdlIGZpcnN0LlxuICAgICAgICAgICAgICAgIGlmIChwaXBzLnN0ZXBwZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBpcHMudmFsdWVzLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvbnZlcnQgdG8gcGVyY2VudGFnZSwgYXBwbHkgc3RlcCwgcmV0dXJuIHRvIHZhbHVlLlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNjb3BlX1NwZWN0cnVtLmZyb21TdGVwcGluZyhzY29wZV9TcGVjdHJ1bS5nZXRTdGVwKHNjb3BlX1NwZWN0cnVtLnRvU3RlcHBpbmcodmFsdWUpKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UsIHdlIGNhbiBzaW1wbHkgdXNlIHRoZSB2YWx1ZXMuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBpcHMudmFsdWVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFtdOyAvLyBwaXBzLm1vZGUgPSBuZXZlclxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIG1hcFRvUmFuZ2UodmFsdWVzLCBzdGVwcGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWVzLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVfU3BlY3RydW0uZnJvbVN0ZXBwaW5nKHN0ZXBwZWQgPyBzY29wZV9TcGVjdHJ1bS5nZXRTdGVwKHZhbHVlKSA6IHZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGdlbmVyYXRlU3ByZWFkKHBpcHMpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIHNhZmVJbmNyZW1lbnQodmFsdWUsIGluY3JlbWVudCkge1xuICAgICAgICAgICAgICAgIC8vIEF2b2lkIGZsb2F0aW5nIHBvaW50IHZhcmlhbmNlIGJ5IGRyb3BwaW5nIHRoZSBzbWFsbGVzdCBkZWNpbWFsIHBsYWNlcy5cbiAgICAgICAgICAgICAgICByZXR1cm4gTnVtYmVyKCh2YWx1ZSArIGluY3JlbWVudCkudG9GaXhlZCg3KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZ3JvdXAgPSBnZXRHcm91cChwaXBzKTtcbiAgICAgICAgICAgIHZhciBpbmRleGVzID0ge307XG4gICAgICAgICAgICB2YXIgZmlyc3RJblJhbmdlID0gc2NvcGVfU3BlY3RydW0ueFZhbFswXTtcbiAgICAgICAgICAgIHZhciBsYXN0SW5SYW5nZSA9IHNjb3BlX1NwZWN0cnVtLnhWYWxbc2NvcGVfU3BlY3RydW0ueFZhbC5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIHZhciBpZ25vcmVGaXJzdCA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIGlnbm9yZUxhc3QgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBwcmV2UGN0ID0gMDtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIGNvcHkgb2YgdGhlIGdyb3VwLCBzb3J0IGl0IGFuZCBmaWx0ZXIgYXdheSBhbGwgZHVwbGljYXRlcy5cbiAgICAgICAgICAgIGdyb3VwID0gdW5pcXVlKGdyb3VwLnNsaWNlKCkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICAgIHJldHVybiBhIC0gYjtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgcmFuZ2Ugc3RhcnRzIHdpdGggdGhlIGZpcnN0IGVsZW1lbnQuXG4gICAgICAgICAgICBpZiAoZ3JvdXBbMF0gIT09IGZpcnN0SW5SYW5nZSkge1xuICAgICAgICAgICAgICAgIGdyb3VwLnVuc2hpZnQoZmlyc3RJblJhbmdlKTtcbiAgICAgICAgICAgICAgICBpZ25vcmVGaXJzdCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBMaWtld2lzZSBmb3IgdGhlIGxhc3Qgb25lLlxuICAgICAgICAgICAgaWYgKGdyb3VwW2dyb3VwLmxlbmd0aCAtIDFdICE9PSBsYXN0SW5SYW5nZSkge1xuICAgICAgICAgICAgICAgIGdyb3VwLnB1c2gobGFzdEluUmFuZ2UpO1xuICAgICAgICAgICAgICAgIGlnbm9yZUxhc3QgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ3JvdXAuZm9yRWFjaChmdW5jdGlvbiAoY3VycmVudCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGN1cnJlbnQgc3RlcCBhbmQgdGhlIGxvd2VyICsgdXBwZXIgcG9zaXRpb25zLlxuICAgICAgICAgICAgICAgIHZhciBzdGVwO1xuICAgICAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgICAgIHZhciBxO1xuICAgICAgICAgICAgICAgIHZhciBsb3cgPSBjdXJyZW50O1xuICAgICAgICAgICAgICAgIHZhciBoaWdoID0gZ3JvdXBbaW5kZXggKyAxXTtcbiAgICAgICAgICAgICAgICB2YXIgbmV3UGN0O1xuICAgICAgICAgICAgICAgIHZhciBwY3REaWZmZXJlbmNlO1xuICAgICAgICAgICAgICAgIHZhciBwY3RQb3M7XG4gICAgICAgICAgICAgICAgdmFyIHR5cGU7XG4gICAgICAgICAgICAgICAgdmFyIHN0ZXBzO1xuICAgICAgICAgICAgICAgIHZhciByZWFsU3RlcHM7XG4gICAgICAgICAgICAgICAgdmFyIHN0ZXBTaXplO1xuICAgICAgICAgICAgICAgIHZhciBpc1N0ZXBzID0gcGlwcy5tb2RlID09PSBleHBvcnRzLlBpcHNNb2RlLlN0ZXBzO1xuICAgICAgICAgICAgICAgIC8vIFdoZW4gdXNpbmcgJ3N0ZXBzJyBtb2RlLCB1c2UgdGhlIHByb3ZpZGVkIHN0ZXBzLlxuICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgd2UnbGwgc3RlcCBvbiB0byB0aGUgbmV4dCBzdWJyYW5nZS5cbiAgICAgICAgICAgICAgICBpZiAoaXNTdGVwcykge1xuICAgICAgICAgICAgICAgICAgICBzdGVwID0gc2NvcGVfU3BlY3RydW0ueE51bVN0ZXBzW2luZGV4XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gRGVmYXVsdCB0byBhICdmdWxsJyBzdGVwLlxuICAgICAgICAgICAgICAgIGlmICghc3RlcCkge1xuICAgICAgICAgICAgICAgICAgICBzdGVwID0gaGlnaCAtIGxvdztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gSWYgaGlnaCBpcyB1bmRlZmluZWQgd2UgYXJlIGF0IHRoZSBsYXN0IHN1YnJhbmdlLiBNYWtlIHN1cmUgaXQgaXRlcmF0ZXMgb25jZSAoIzEwODgpXG4gICAgICAgICAgICAgICAgaWYgKGhpZ2ggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBoaWdoID0gbG93O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBNYWtlIHN1cmUgc3RlcCBpc24ndCAwLCB3aGljaCB3b3VsZCBjYXVzZSBhbiBpbmZpbml0ZSBsb29wICgjNjU0KVxuICAgICAgICAgICAgICAgIHN0ZXAgPSBNYXRoLm1heChzdGVwLCAwLjAwMDAwMDEpO1xuICAgICAgICAgICAgICAgIC8vIEZpbmQgYWxsIHN0ZXBzIGluIHRoZSBzdWJyYW5nZS5cbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBsb3c7IGkgPD0gaGlnaDsgaSA9IHNhZmVJbmNyZW1lbnQoaSwgc3RlcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBwZXJjZW50YWdlIHZhbHVlIGZvciB0aGUgY3VycmVudCBzdGVwLFxuICAgICAgICAgICAgICAgICAgICAvLyBjYWxjdWxhdGUgdGhlIHNpemUgZm9yIHRoZSBzdWJyYW5nZS5cbiAgICAgICAgICAgICAgICAgICAgbmV3UGN0ID0gc2NvcGVfU3BlY3RydW0udG9TdGVwcGluZyhpKTtcbiAgICAgICAgICAgICAgICAgICAgcGN0RGlmZmVyZW5jZSA9IG5ld1BjdCAtIHByZXZQY3Q7XG4gICAgICAgICAgICAgICAgICAgIHN0ZXBzID0gcGN0RGlmZmVyZW5jZSAvIChwaXBzLmRlbnNpdHkgfHwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHJlYWxTdGVwcyA9IE1hdGgucm91bmQoc3RlcHMpO1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIHJhdGlvIHJlcHJlc2VudHMgdGhlIGFtb3VudCBvZiBwZXJjZW50YWdlLXNwYWNlIGEgcG9pbnQgaW5kaWNhdGVzLlxuICAgICAgICAgICAgICAgICAgICAvLyBGb3IgYSBkZW5zaXR5IDEgdGhlIHBvaW50cy9wZXJjZW50YWdlID0gMS4gRm9yIGRlbnNpdHkgMiwgdGhhdCBwZXJjZW50YWdlIG5lZWRzIHRvIGJlIHJlLWRpdmlkZWQuXG4gICAgICAgICAgICAgICAgICAgIC8vIFJvdW5kIHRoZSBwZXJjZW50YWdlIG9mZnNldCB0byBhbiBldmVuIG51bWJlciwgdGhlbiBkaXZpZGUgYnkgdHdvXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvIHNwcmVhZCB0aGUgb2Zmc2V0IG9uIGJvdGggc2lkZXMgb2YgdGhlIHJhbmdlLlxuICAgICAgICAgICAgICAgICAgICBzdGVwU2l6ZSA9IHBjdERpZmZlcmVuY2UgLyByZWFsU3RlcHM7XG4gICAgICAgICAgICAgICAgICAgIC8vIERpdmlkZSBhbGwgcG9pbnRzIGV2ZW5seSwgYWRkaW5nIHRoZSBjb3JyZWN0IG51bWJlciB0byB0aGlzIHN1YnJhbmdlLlxuICAgICAgICAgICAgICAgICAgICAvLyBSdW4gdXAgdG8gPD0gc28gdGhhdCAxMDAlIGdldHMgYSBwb2ludCwgZXZlbnQgaWYgaWdub3JlTGFzdCBpcyBzZXQuXG4gICAgICAgICAgICAgICAgICAgIGZvciAocSA9IDE7IHEgPD0gcmVhbFN0ZXBzOyBxICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSByYXRpbyBiZXR3ZWVuIHRoZSByb3VuZGVkIHZhbHVlIGFuZCB0aGUgYWN0dWFsIHNpemUgbWlnaHQgYmUgfjElIG9mZi5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvcnJlY3QgdGhlIHBlcmNlbnRhZ2Ugb2Zmc2V0IGJ5IHRoZSBudW1iZXIgb2YgcG9pbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwZXIgc3VicmFuZ2UuIGRlbnNpdHkgPSAxIHdpbGwgcmVzdWx0IGluIDEwMCBwb2ludHMgb24gdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmdWxsIHJhbmdlLCAyIGZvciA1MCwgNCBmb3IgMjUsIGV0Yy5cbiAgICAgICAgICAgICAgICAgICAgICAgIHBjdFBvcyA9IHByZXZQY3QgKyBxICogc3RlcFNpemU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleGVzW3BjdFBvcy50b0ZpeGVkKDUpXSA9IFtzY29wZV9TcGVjdHJ1bS5mcm9tU3RlcHBpbmcocGN0UG9zKSwgMF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gRGV0ZXJtaW5lIHRoZSBwb2ludCB0eXBlLlxuICAgICAgICAgICAgICAgICAgICB0eXBlID0gZ3JvdXAuaW5kZXhPZihpKSA+IC0xID8gZXhwb3J0cy5QaXBzVHlwZS5MYXJnZVZhbHVlIDogaXNTdGVwcyA/IGV4cG9ydHMuUGlwc1R5cGUuU21hbGxWYWx1ZSA6IGV4cG9ydHMuUGlwc1R5cGUuTm9WYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gRW5mb3JjZSB0aGUgJ2lnbm9yZUZpcnN0JyBvcHRpb24gYnkgb3ZlcndyaXRpbmcgdGhlIHR5cGUgZm9yIDAuXG4gICAgICAgICAgICAgICAgICAgIGlmICghaW5kZXggJiYgaWdub3JlRmlyc3QgJiYgaSAhPT0gaGlnaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoaSA9PT0gaGlnaCAmJiBpZ25vcmVMYXN0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWFyayB0aGUgJ3R5cGUnIG9mIHRoaXMgcG9pbnQuIDAgPSBwbGFpbiwgMSA9IHJlYWwgdmFsdWUsIDIgPSBzdGVwIHZhbHVlLlxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhlc1tuZXdQY3QudG9GaXhlZCg1KV0gPSBbaSwgdHlwZV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBwZXJjZW50YWdlIGNvdW50LlxuICAgICAgICAgICAgICAgICAgICBwcmV2UGN0ID0gbmV3UGN0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGluZGV4ZXM7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gYWRkTWFya2luZyhzcHJlYWQsIGZpbHRlckZ1bmMsIGZvcm1hdHRlcikge1xuICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gc2NvcGVfRG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHZhciB2YWx1ZVNpemVDbGFzc2VzID0gKF9hID0ge30sXG4gICAgICAgICAgICAgICAgX2FbZXhwb3J0cy5QaXBzVHlwZS5Ob25lXSA9IFwiXCIsXG4gICAgICAgICAgICAgICAgX2FbZXhwb3J0cy5QaXBzVHlwZS5Ob1ZhbHVlXSA9IG9wdGlvbnMuY3NzQ2xhc3Nlcy52YWx1ZU5vcm1hbCxcbiAgICAgICAgICAgICAgICBfYVtleHBvcnRzLlBpcHNUeXBlLkxhcmdlVmFsdWVdID0gb3B0aW9ucy5jc3NDbGFzc2VzLnZhbHVlTGFyZ2UsXG4gICAgICAgICAgICAgICAgX2FbZXhwb3J0cy5QaXBzVHlwZS5TbWFsbFZhbHVlXSA9IG9wdGlvbnMuY3NzQ2xhc3Nlcy52YWx1ZVN1YixcbiAgICAgICAgICAgICAgICBfYSk7XG4gICAgICAgICAgICB2YXIgbWFya2VyU2l6ZUNsYXNzZXMgPSAoX2IgPSB7fSxcbiAgICAgICAgICAgICAgICBfYltleHBvcnRzLlBpcHNUeXBlLk5vbmVdID0gXCJcIixcbiAgICAgICAgICAgICAgICBfYltleHBvcnRzLlBpcHNUeXBlLk5vVmFsdWVdID0gb3B0aW9ucy5jc3NDbGFzc2VzLm1hcmtlck5vcm1hbCxcbiAgICAgICAgICAgICAgICBfYltleHBvcnRzLlBpcHNUeXBlLkxhcmdlVmFsdWVdID0gb3B0aW9ucy5jc3NDbGFzc2VzLm1hcmtlckxhcmdlLFxuICAgICAgICAgICAgICAgIF9iW2V4cG9ydHMuUGlwc1R5cGUuU21hbGxWYWx1ZV0gPSBvcHRpb25zLmNzc0NsYXNzZXMubWFya2VyU3ViLFxuICAgICAgICAgICAgICAgIF9iKTtcbiAgICAgICAgICAgIHZhciB2YWx1ZU9yaWVudGF0aW9uQ2xhc3NlcyA9IFtvcHRpb25zLmNzc0NsYXNzZXMudmFsdWVIb3Jpem9udGFsLCBvcHRpb25zLmNzc0NsYXNzZXMudmFsdWVWZXJ0aWNhbF07XG4gICAgICAgICAgICB2YXIgbWFya2VyT3JpZW50YXRpb25DbGFzc2VzID0gW29wdGlvbnMuY3NzQ2xhc3Nlcy5tYXJrZXJIb3Jpem9udGFsLCBvcHRpb25zLmNzc0NsYXNzZXMubWFya2VyVmVydGljYWxdO1xuICAgICAgICAgICAgYWRkQ2xhc3MoZWxlbWVudCwgb3B0aW9ucy5jc3NDbGFzc2VzLnBpcHMpO1xuICAgICAgICAgICAgYWRkQ2xhc3MoZWxlbWVudCwgb3B0aW9ucy5vcnQgPT09IDAgPyBvcHRpb25zLmNzc0NsYXNzZXMucGlwc0hvcml6b250YWwgOiBvcHRpb25zLmNzc0NsYXNzZXMucGlwc1ZlcnRpY2FsKTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldENsYXNzZXModHlwZSwgc291cmNlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGEgPSBzb3VyY2UgPT09IG9wdGlvbnMuY3NzQ2xhc3Nlcy52YWx1ZTtcbiAgICAgICAgICAgICAgICB2YXIgb3JpZW50YXRpb25DbGFzc2VzID0gYSA/IHZhbHVlT3JpZW50YXRpb25DbGFzc2VzIDogbWFya2VyT3JpZW50YXRpb25DbGFzc2VzO1xuICAgICAgICAgICAgICAgIHZhciBzaXplQ2xhc3NlcyA9IGEgPyB2YWx1ZVNpemVDbGFzc2VzIDogbWFya2VyU2l6ZUNsYXNzZXM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNvdXJjZSArIFwiIFwiICsgb3JpZW50YXRpb25DbGFzc2VzW29wdGlvbnMub3J0XSArIFwiIFwiICsgc2l6ZUNsYXNzZXNbdHlwZV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBhZGRTcHJlYWQob2Zmc2V0LCB2YWx1ZSwgdHlwZSkge1xuICAgICAgICAgICAgICAgIC8vIEFwcGx5IHRoZSBmaWx0ZXIgZnVuY3Rpb24sIGlmIGl0IGlzIHNldC5cbiAgICAgICAgICAgICAgICB0eXBlID0gZmlsdGVyRnVuYyA/IGZpbHRlckZ1bmModmFsdWUsIHR5cGUpIDogdHlwZTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gZXhwb3J0cy5QaXBzVHlwZS5Ob25lKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQWRkIGEgbWFya2VyIGZvciBldmVyeSBwb2ludFxuICAgICAgICAgICAgICAgIHZhciBub2RlID0gYWRkTm9kZVRvKGVsZW1lbnQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBub2RlLmNsYXNzTmFtZSA9IGdldENsYXNzZXModHlwZSwgb3B0aW9ucy5jc3NDbGFzc2VzLm1hcmtlcik7XG4gICAgICAgICAgICAgICAgbm9kZS5zdHlsZVtvcHRpb25zLnN0eWxlXSA9IG9mZnNldCArIFwiJVwiO1xuICAgICAgICAgICAgICAgIC8vIFZhbHVlcyBhcmUgb25seSBhcHBlbmRlZCBmb3IgcG9pbnRzIG1hcmtlZCAnMScgb3IgJzInLlxuICAgICAgICAgICAgICAgIGlmICh0eXBlID4gZXhwb3J0cy5QaXBzVHlwZS5Ob1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgPSBhZGROb2RlVG8oZWxlbWVudCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBub2RlLmNsYXNzTmFtZSA9IGdldENsYXNzZXModHlwZSwgb3B0aW9ucy5jc3NDbGFzc2VzLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIsIFN0cmluZyh2YWx1ZSkpO1xuICAgICAgICAgICAgICAgICAgICBub2RlLnN0eWxlW29wdGlvbnMuc3R5bGVdID0gb2Zmc2V0ICsgXCIlXCI7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaW5uZXJIVE1MID0gU3RyaW5nKGZvcm1hdHRlci50byh2YWx1ZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEFwcGVuZCBhbGwgcG9pbnRzLlxuICAgICAgICAgICAgT2JqZWN0LmtleXMoc3ByZWFkKS5mb3JFYWNoKGZ1bmN0aW9uIChvZmZzZXQpIHtcbiAgICAgICAgICAgICAgICBhZGRTcHJlYWQob2Zmc2V0LCBzcHJlYWRbb2Zmc2V0XVswXSwgc3ByZWFkW29mZnNldF1bMV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiByZW1vdmVQaXBzKCkge1xuICAgICAgICAgICAgaWYgKHNjb3BlX1BpcHMpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVFbGVtZW50KHNjb3BlX1BpcHMpO1xuICAgICAgICAgICAgICAgIHNjb3BlX1BpcHMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHBpcHMocGlwcykge1xuICAgICAgICAgICAgLy8gRml4ICM2NjlcbiAgICAgICAgICAgIHJlbW92ZVBpcHMoKTtcbiAgICAgICAgICAgIHZhciBzcHJlYWQgPSBnZW5lcmF0ZVNwcmVhZChwaXBzKTtcbiAgICAgICAgICAgIHZhciBmaWx0ZXIgPSBwaXBzLmZpbHRlcjtcbiAgICAgICAgICAgIHZhciBmb3JtYXQgPSBwaXBzLmZvcm1hdCB8fCB7XG4gICAgICAgICAgICAgICAgdG86IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nKE1hdGgucm91bmQodmFsdWUpKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNjb3BlX1BpcHMgPSBzY29wZV9UYXJnZXQuYXBwZW5kQ2hpbGQoYWRkTWFya2luZyhzcHJlYWQsIGZpbHRlciwgZm9ybWF0KSk7XG4gICAgICAgICAgICByZXR1cm4gc2NvcGVfUGlwcztcbiAgICAgICAgfVxuICAgICAgICAvLyBTaG9ydGhhbmQgZm9yIGJhc2UgZGltZW5zaW9ucy5cbiAgICAgICAgZnVuY3Rpb24gYmFzZVNpemUoKSB7XG4gICAgICAgICAgICB2YXIgcmVjdCA9IHNjb3BlX0Jhc2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICB2YXIgYWx0ID0gKFwib2Zmc2V0XCIgKyBbXCJXaWR0aFwiLCBcIkhlaWdodFwiXVtvcHRpb25zLm9ydF0pO1xuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMub3J0ID09PSAwID8gcmVjdC53aWR0aCB8fCBzY29wZV9CYXNlW2FsdF0gOiByZWN0LmhlaWdodCB8fCBzY29wZV9CYXNlW2FsdF07XG4gICAgICAgIH1cbiAgICAgICAgLy8gSGFuZGxlciBmb3IgYXR0YWNoaW5nIGV2ZW50cyB0cm91Z2ggYSBwcm94eS5cbiAgICAgICAgZnVuY3Rpb24gYXR0YWNoRXZlbnQoZXZlbnRzLCBlbGVtZW50LCBjYWxsYmFjaywgZGF0YSkge1xuICAgICAgICAgICAgLy8gVGhpcyBmdW5jdGlvbiBjYW4gYmUgdXNlZCB0byAnZmlsdGVyJyBldmVudHMgdG8gdGhlIHNsaWRlci5cbiAgICAgICAgICAgIC8vIGVsZW1lbnQgaXMgYSBub2RlLCBub3QgYSBub2RlTGlzdFxuICAgICAgICAgICAgdmFyIG1ldGhvZCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIHZhciBlID0gZml4RXZlbnQoZXZlbnQsIGRhdGEucGFnZU9mZnNldCwgZGF0YS50YXJnZXQgfHwgZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgLy8gZml4RXZlbnQgcmV0dXJucyBmYWxzZSBpZiB0aGlzIGV2ZW50IGhhcyBhIGRpZmZlcmVudCB0YXJnZXRcbiAgICAgICAgICAgICAgICAvLyB3aGVuIGhhbmRsaW5nIChtdWx0aS0pIHRvdWNoIGV2ZW50cztcbiAgICAgICAgICAgICAgICBpZiAoIWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBkb05vdFJlamVjdCBpcyBwYXNzZWQgYnkgYWxsIGVuZCBldmVudHMgdG8gbWFrZSBzdXJlIHJlbGVhc2VkIHRvdWNoZXNcbiAgICAgICAgICAgICAgICAvLyBhcmUgbm90IHJlamVjdGVkLCBsZWF2aW5nIHRoZSBzbGlkZXIgXCJzdHVja1wiIHRvIHRoZSBjdXJzb3I7XG4gICAgICAgICAgICAgICAgaWYgKGlzU2xpZGVyRGlzYWJsZWQoKSAmJiAhZGF0YS5kb05vdFJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFN0b3AgaWYgYW4gYWN0aXZlICd0YXAnIHRyYW5zaXRpb24gaXMgdGFraW5nIHBsYWNlLlxuICAgICAgICAgICAgICAgIGlmIChoYXNDbGFzcyhzY29wZV9UYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy50YXApICYmICFkYXRhLmRvTm90UmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gSWdub3JlIHJpZ2h0IG9yIG1pZGRsZSBjbGlja3Mgb24gc3RhcnQgIzQ1NFxuICAgICAgICAgICAgICAgIGlmIChldmVudHMgPT09IGFjdGlvbnMuc3RhcnQgJiYgZS5idXR0b25zICE9PSB1bmRlZmluZWQgJiYgZS5idXR0b25zID4gMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIElnbm9yZSByaWdodCBvciBtaWRkbGUgY2xpY2tzIG9uIHN0YXJ0ICM0NTRcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5ob3ZlciAmJiBlLmJ1dHRvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAnc3VwcG9ydHNQYXNzaXZlJyBpcyBvbmx5IHRydWUgaWYgYSBicm93c2VyIGFsc28gc3VwcG9ydHMgdG91Y2gtYWN0aW9uOiBub25lIGluIENTUy5cbiAgICAgICAgICAgICAgICAvLyBpT1Mgc2FmYXJpIGRvZXMgbm90LCBzbyBpdCBkb2Vzbid0IGdldCB0byBiZW5lZml0IGZyb20gcGFzc2l2ZSBzY3JvbGxpbmcuIGlPUyBkb2VzIHN1cHBvcnRcbiAgICAgICAgICAgICAgICAvLyB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbiwgYnV0IHRoYXQgYWxsb3dzIHBhbm5pbmcsIHdoaWNoIGJyZWFrc1xuICAgICAgICAgICAgICAgIC8vIHNsaWRlcnMgYWZ0ZXIgem9vbWluZy9vbiBub24tcmVzcG9uc2l2ZSBwYWdlcy5cbiAgICAgICAgICAgICAgICAvLyBTZWU6IGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xMzMxMTJcbiAgICAgICAgICAgICAgICBpZiAoIXN1cHBvcnRzUGFzc2l2ZSkge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGUuY2FsY1BvaW50ID0gZS5wb2ludHNbb3B0aW9ucy5vcnRdO1xuICAgICAgICAgICAgICAgIC8vIENhbGwgdGhlIGV2ZW50IGhhbmRsZXIgd2l0aCB0aGUgZXZlbnQgWyBhbmQgYWRkaXRpb25hbCBkYXRhIF0uXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZSwgZGF0YSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBtZXRob2RzID0gW107XG4gICAgICAgICAgICAvLyBCaW5kIGEgY2xvc3VyZSBvbiB0aGUgdGFyZ2V0IGZvciBldmVyeSBldmVudCB0eXBlLlxuICAgICAgICAgICAgZXZlbnRzLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBtZXRob2QsIHN1cHBvcnRzUGFzc2l2ZSA/IHsgcGFzc2l2ZTogdHJ1ZSB9IDogZmFsc2UpO1xuICAgICAgICAgICAgICAgIG1ldGhvZHMucHVzaChbZXZlbnROYW1lLCBtZXRob2RdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIG1ldGhvZHM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUHJvdmlkZSBhIGNsZWFuIGV2ZW50IHdpdGggc3RhbmRhcmRpemVkIG9mZnNldCB2YWx1ZXMuXG4gICAgICAgIGZ1bmN0aW9uIGZpeEV2ZW50KGUsIHBhZ2VPZmZzZXQsIGV2ZW50VGFyZ2V0KSB7XG4gICAgICAgICAgICAvLyBGaWx0ZXIgdGhlIGV2ZW50IHRvIHJlZ2lzdGVyIHRoZSB0eXBlLCB3aGljaCBjYW4gYmVcbiAgICAgICAgICAgIC8vIHRvdWNoLCBtb3VzZSBvciBwb2ludGVyLiBPZmZzZXQgY2hhbmdlcyBuZWVkIHRvIGJlXG4gICAgICAgICAgICAvLyBtYWRlIG9uIGFuIGV2ZW50IHNwZWNpZmljIGJhc2lzLlxuICAgICAgICAgICAgdmFyIHRvdWNoID0gZS50eXBlLmluZGV4T2YoXCJ0b3VjaFwiKSA9PT0gMDtcbiAgICAgICAgICAgIHZhciBtb3VzZSA9IGUudHlwZS5pbmRleE9mKFwibW91c2VcIikgPT09IDA7XG4gICAgICAgICAgICB2YXIgcG9pbnRlciA9IGUudHlwZS5pbmRleE9mKFwicG9pbnRlclwiKSA9PT0gMDtcbiAgICAgICAgICAgIHZhciB4ID0gMDtcbiAgICAgICAgICAgIHZhciB5ID0gMDtcbiAgICAgICAgICAgIC8vIElFMTAgaW1wbGVtZW50ZWQgcG9pbnRlciBldmVudHMgd2l0aCBhIHByZWZpeDtcbiAgICAgICAgICAgIGlmIChlLnR5cGUuaW5kZXhPZihcIk1TUG9pbnRlclwiKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHBvaW50ZXIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRXJyb25lb3VzIGV2ZW50cyBzZWVtIHRvIGJlIHBhc3NlZCBpbiBvY2Nhc2lvbmFsbHkgb24gaU9TL2lQYWRPUyBhZnRlciB1c2VyIGZpbmlzaGVzIGludGVyYWN0aW5nIHdpdGhcbiAgICAgICAgICAgIC8vIHRoZSBzbGlkZXIuIFRoZXkgYXBwZWFyIHRvIGJlIG9mIHR5cGUgTW91c2VFdmVudCwgeWV0IHRoZXkgZG9uJ3QgaGF2ZSB1c3VhbCBwcm9wZXJ0aWVzIHNldC4gSWdub3JlXG4gICAgICAgICAgICAvLyBldmVudHMgdGhhdCBoYXZlIG5vIHRvdWNoZXMgb3IgYnV0dG9ucyBhc3NvY2lhdGVkIHdpdGggdGhlbS4gKCMxMDU3LCAjMTA3OSwgIzEwOTUpXG4gICAgICAgICAgICBpZiAoZS50eXBlID09PSBcIm1vdXNlZG93blwiICYmICFlLmJ1dHRvbnMgJiYgIWUudG91Y2hlcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFRoZSBvbmx5IHRoaW5nIG9uZSBoYW5kbGUgc2hvdWxkIGJlIGNvbmNlcm5lZCBhYm91dCBpcyB0aGUgdG91Y2hlcyB0aGF0IG9yaWdpbmF0ZWQgb24gdG9wIG9mIGl0LlxuICAgICAgICAgICAgaWYgKHRvdWNoKSB7XG4gICAgICAgICAgICAgICAgLy8gUmV0dXJucyB0cnVlIGlmIGEgdG91Y2ggb3JpZ2luYXRlZCBvbiB0aGUgdGFyZ2V0LlxuICAgICAgICAgICAgICAgIHZhciBpc1RvdWNoT25UYXJnZXQgPSBmdW5jdGlvbiAoY2hlY2tUb3VjaCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gY2hlY2tUb3VjaC50YXJnZXQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAodGFyZ2V0ID09PSBldmVudFRhcmdldCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRUYXJnZXQuY29udGFpbnModGFyZ2V0KSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgKGUuY29tcG9zZWQgJiYgZS5jb21wb3NlZFBhdGgoKS5zaGlmdCgpID09PSBldmVudFRhcmdldCkpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgLy8gSW4gdGhlIGNhc2Ugb2YgdG91Y2hzdGFydCBldmVudHMsIHdlIG5lZWQgdG8gbWFrZSBzdXJlIHRoZXJlIGlzIHN0aWxsIG5vIG1vcmUgdGhhbiBvbmVcbiAgICAgICAgICAgICAgICAvLyB0b3VjaCBvbiB0aGUgdGFyZ2V0IHNvIHdlIGxvb2sgYW1vbmdzdCBhbGwgdG91Y2hlcy5cbiAgICAgICAgICAgICAgICBpZiAoZS50eXBlID09PSBcInRvdWNoc3RhcnRcIikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0VG91Y2hlcyA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbChlLnRvdWNoZXMsIGlzVG91Y2hPblRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIERvIG5vdCBzdXBwb3J0IG1vcmUgdGhhbiBvbmUgdG91Y2ggcGVyIGhhbmRsZS5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldFRvdWNoZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHggPSB0YXJnZXRUb3VjaGVzWzBdLnBhZ2VYO1xuICAgICAgICAgICAgICAgICAgICB5ID0gdGFyZ2V0VG91Y2hlc1swXS5wYWdlWTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEluIHRoZSBvdGhlciBjYXNlcywgZmluZCBvbiBjaGFuZ2VkVG91Y2hlcyBpcyBlbm91Z2guXG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXRUb3VjaCA9IEFycmF5LnByb3RvdHlwZS5maW5kLmNhbGwoZS5jaGFuZ2VkVG91Y2hlcywgaXNUb3VjaE9uVGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2FuY2VsIGlmIHRoZSB0YXJnZXQgdG91Y2ggaGFzIG5vdCBtb3ZlZC5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0YXJnZXRUb3VjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHggPSB0YXJnZXRUb3VjaC5wYWdlWDtcbiAgICAgICAgICAgICAgICAgICAgeSA9IHRhcmdldFRvdWNoLnBhZ2VZO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhZ2VPZmZzZXQgPSBwYWdlT2Zmc2V0IHx8IGdldFBhZ2VPZmZzZXQoc2NvcGVfRG9jdW1lbnQpO1xuICAgICAgICAgICAgaWYgKG1vdXNlIHx8IHBvaW50ZXIpIHtcbiAgICAgICAgICAgICAgICB4ID0gZS5jbGllbnRYICsgcGFnZU9mZnNldC54O1xuICAgICAgICAgICAgICAgIHkgPSBlLmNsaWVudFkgKyBwYWdlT2Zmc2V0Lnk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLnBhZ2VPZmZzZXQgPSBwYWdlT2Zmc2V0O1xuICAgICAgICAgICAgZS5wb2ludHMgPSBbeCwgeV07XG4gICAgICAgICAgICBlLmN1cnNvciA9IG1vdXNlIHx8IHBvaW50ZXI7IC8vIEZpeCAjNDM1XG4gICAgICAgICAgICByZXR1cm4gZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUcmFuc2xhdGUgYSBjb29yZGluYXRlIGluIHRoZSBkb2N1bWVudCB0byBhIHBlcmNlbnRhZ2Ugb24gdGhlIHNsaWRlclxuICAgICAgICBmdW5jdGlvbiBjYWxjUG9pbnRUb1BlcmNlbnRhZ2UoY2FsY1BvaW50KSB7XG4gICAgICAgICAgICB2YXIgbG9jYXRpb24gPSBjYWxjUG9pbnQgLSBvZmZzZXQoc2NvcGVfQmFzZSwgb3B0aW9ucy5vcnQpO1xuICAgICAgICAgICAgdmFyIHByb3Bvc2FsID0gKGxvY2F0aW9uICogMTAwKSAvIGJhc2VTaXplKCk7XG4gICAgICAgICAgICAvLyBDbGFtcCBwcm9wb3NhbCBiZXR3ZWVuIDAlIGFuZCAxMDAlXG4gICAgICAgICAgICAvLyBPdXQtb2YtYm91bmQgY29vcmRpbmF0ZXMgbWF5IG9jY3VyIHdoZW4gLm5vVWktYmFzZSBwc2V1ZG8tZWxlbWVudHNcbiAgICAgICAgICAgIC8vIGFyZSB1c2VkIChlLmcuIGNvbnRhaW5lZCBoYW5kbGVzIGZlYXR1cmUpXG4gICAgICAgICAgICBwcm9wb3NhbCA9IGxpbWl0KHByb3Bvc2FsKTtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmRpciA/IDEwMCAtIHByb3Bvc2FsIDogcHJvcG9zYWw7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmluZCBoYW5kbGUgY2xvc2VzdCB0byBhIGNlcnRhaW4gcGVyY2VudGFnZSBvbiB0aGUgc2xpZGVyXG4gICAgICAgIGZ1bmN0aW9uIGdldENsb3Nlc3RIYW5kbGUoY2xpY2tlZFBvc2l0aW9uKSB7XG4gICAgICAgICAgICB2YXIgc21hbGxlc3REaWZmZXJlbmNlID0gMTAwO1xuICAgICAgICAgICAgdmFyIGhhbmRsZU51bWJlciA9IGZhbHNlO1xuICAgICAgICAgICAgc2NvcGVfSGFuZGxlcy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGUsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgLy8gRGlzYWJsZWQgaGFuZGxlcyBhcmUgaWdub3JlZFxuICAgICAgICAgICAgICAgIGlmIChpc0hhbmRsZURpc2FibGVkKGluZGV4KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBoYW5kbGVQb3NpdGlvbiA9IHNjb3BlX0xvY2F0aW9uc1tpbmRleF07XG4gICAgICAgICAgICAgICAgdmFyIGRpZmZlcmVuY2VXaXRoVGhpc0hhbmRsZSA9IE1hdGguYWJzKGhhbmRsZVBvc2l0aW9uIC0gY2xpY2tlZFBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAvLyBJbml0aWFsIHN0YXRlXG4gICAgICAgICAgICAgICAgdmFyIGNsaWNrQXRFZGdlID0gZGlmZmVyZW5jZVdpdGhUaGlzSGFuZGxlID09PSAxMDAgJiYgc21hbGxlc3REaWZmZXJlbmNlID09PSAxMDA7XG4gICAgICAgICAgICAgICAgLy8gRGlmZmVyZW5jZSB3aXRoIHRoaXMgaGFuZGxlIGlzIHNtYWxsZXIgdGhhbiB0aGUgcHJldmlvdXNseSBjaGVja2VkIGhhbmRsZVxuICAgICAgICAgICAgICAgIHZhciBpc0Nsb3NlciA9IGRpZmZlcmVuY2VXaXRoVGhpc0hhbmRsZSA8IHNtYWxsZXN0RGlmZmVyZW5jZTtcbiAgICAgICAgICAgICAgICB2YXIgaXNDbG9zZXJBZnRlciA9IGRpZmZlcmVuY2VXaXRoVGhpc0hhbmRsZSA8PSBzbWFsbGVzdERpZmZlcmVuY2UgJiYgY2xpY2tlZFBvc2l0aW9uID4gaGFuZGxlUG9zaXRpb247XG4gICAgICAgICAgICAgICAgaWYgKGlzQ2xvc2VyIHx8IGlzQ2xvc2VyQWZ0ZXIgfHwgY2xpY2tBdEVkZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVyID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIHNtYWxsZXN0RGlmZmVyZW5jZSA9IGRpZmZlcmVuY2VXaXRoVGhpc0hhbmRsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVOdW1iZXI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlyZSAnZW5kJyB3aGVuIGEgbW91c2Ugb3IgcGVuIGxlYXZlcyB0aGUgZG9jdW1lbnQuXG4gICAgICAgIGZ1bmN0aW9uIGRvY3VtZW50TGVhdmUoZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChldmVudC50eXBlID09PSBcIm1vdXNlb3V0XCIgJiZcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQubm9kZU5hbWUgPT09IFwiSFRNTFwiICYmXG4gICAgICAgICAgICAgICAgZXZlbnQucmVsYXRlZFRhcmdldCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGV2ZW50RW5kKGV2ZW50LCBkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBIYW5kbGUgbW92ZW1lbnQgb24gZG9jdW1lbnQgZm9yIGhhbmRsZSBhbmQgcmFuZ2UgZHJhZy5cbiAgICAgICAgZnVuY3Rpb24gZXZlbnRNb3ZlKGV2ZW50LCBkYXRhKSB7XG4gICAgICAgICAgICAvLyBGaXggIzQ5OFxuICAgICAgICAgICAgLy8gQ2hlY2sgdmFsdWUgb2YgLmJ1dHRvbnMgaW4gJ3N0YXJ0JyB0byB3b3JrIGFyb3VuZCBhIGJ1ZyBpbiBJRTEwIG1vYmlsZSAoZGF0YS5idXR0b25zUHJvcGVydHkpLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9jb25uZWN0Lm1pY3Jvc29mdC5jb20vSUUvZmVlZGJhY2svZGV0YWlscy85MjcwMDUvbW9iaWxlLWllMTAtd2luZG93cy1waG9uZS1idXR0b25zLXByb3BlcnR5LW9mLXBvaW50ZXJtb3ZlLWV2ZW50LWFsd2F5cy16ZXJvXG4gICAgICAgICAgICAvLyBJRTkgaGFzIC5idXR0b25zIGFuZCAud2hpY2ggemVybyBvbiBtb3VzZW1vdmUuXG4gICAgICAgICAgICAvLyBGaXJlZm94IGJyZWFrcyB0aGUgc3BlYyBNRE4gZGVmaW5lcy5cbiAgICAgICAgICAgIGlmIChuYXZpZ2F0b3IuYXBwVmVyc2lvbi5pbmRleE9mKFwiTVNJRSA5XCIpID09PSAtMSAmJiBldmVudC5idXR0b25zID09PSAwICYmIGRhdGEuYnV0dG9uc1Byb3BlcnR5ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50RW5kKGV2ZW50LCBkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHdlIGFyZSBtb3ZpbmcgdXAgb3IgZG93blxuICAgICAgICAgICAgdmFyIG1vdmVtZW50ID0gKG9wdGlvbnMuZGlyID8gLTEgOiAxKSAqIChldmVudC5jYWxjUG9pbnQgLSBkYXRhLnN0YXJ0Q2FsY1BvaW50KTtcbiAgICAgICAgICAgIC8vIENvbnZlcnQgdGhlIG1vdmVtZW50IGludG8gYSBwZXJjZW50YWdlIG9mIHRoZSBzbGlkZXIgd2lkdGgvaGVpZ2h0XG4gICAgICAgICAgICB2YXIgcHJvcG9zYWwgPSAobW92ZW1lbnQgKiAxMDApIC8gZGF0YS5iYXNlU2l6ZTtcbiAgICAgICAgICAgIG1vdmVIYW5kbGVzKG1vdmVtZW50ID4gMCwgcHJvcG9zYWwsIGRhdGEubG9jYXRpb25zLCBkYXRhLmhhbmRsZU51bWJlcnMsIGRhdGEuY29ubmVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVW5iaW5kIG1vdmUgZXZlbnRzIG9uIGRvY3VtZW50LCBjYWxsIGNhbGxiYWNrcy5cbiAgICAgICAgZnVuY3Rpb24gZXZlbnRFbmQoZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgICAgIC8vIFRoZSBoYW5kbGUgaXMgbm8gbG9uZ2VyIGFjdGl2ZSwgc28gcmVtb3ZlIHRoZSBjbGFzcy5cbiAgICAgICAgICAgIGlmIChkYXRhLmhhbmRsZSkge1xuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzKGRhdGEuaGFuZGxlLCBvcHRpb25zLmNzc0NsYXNzZXMuYWN0aXZlKTtcbiAgICAgICAgICAgICAgICBzY29wZV9BY3RpdmVIYW5kbGVzQ291bnQgLT0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFVuYmluZCB0aGUgbW92ZSBhbmQgZW5kIGV2ZW50cywgd2hpY2ggYXJlIGFkZGVkIG9uICdzdGFydCcuXG4gICAgICAgICAgICBkYXRhLmxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICAgICAgc2NvcGVfRG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoY1swXSwgY1sxXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChzY29wZV9BY3RpdmVIYW5kbGVzQ291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgZHJhZ2dpbmcgY2xhc3MuXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3Moc2NvcGVfVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMuZHJhZyk7XG4gICAgICAgICAgICAgICAgc2V0WmluZGV4KCk7XG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGN1cnNvciBzdHlsZXMgYW5kIHRleHQtc2VsZWN0aW9uIGV2ZW50cyBib3VuZCB0byB0aGUgYm9keS5cbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuY3Vyc29yKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlX0JvZHkuc3R5bGUuY3Vyc29yID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVfQm9keS5yZW1vdmVFdmVudExpc3RlbmVyKFwic2VsZWN0c3RhcnRcIiwgcHJldmVudERlZmF1bHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25zLmV2ZW50cy5zbW9vdGhTdGVwcykge1xuICAgICAgICAgICAgICAgIGRhdGEuaGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0SGFuZGxlKGhhbmRsZU51bWJlciwgc2NvcGVfTG9jYXRpb25zW2hhbmRsZU51bWJlcl0sIHRydWUsIHRydWUsIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZGF0YS5oYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJ1cGRhdGVcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRhdGEuaGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJjaGFuZ2VcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJzZXRcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJlbmRcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIEJpbmQgbW92ZSBldmVudHMgb24gZG9jdW1lbnQuXG4gICAgICAgIGZ1bmN0aW9uIGV2ZW50U3RhcnQoZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgICAgIC8vIElnbm9yZSBldmVudCBpZiBhbnkgaGFuZGxlIGlzIGRpc2FibGVkXG4gICAgICAgICAgICBpZiAoZGF0YS5oYW5kbGVOdW1iZXJzLnNvbWUoaXNIYW5kbGVEaXNhYmxlZCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaGFuZGxlO1xuICAgICAgICAgICAgaWYgKGRhdGEuaGFuZGxlTnVtYmVycy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICB2YXIgaGFuZGxlT3JpZ2luID0gc2NvcGVfSGFuZGxlc1tkYXRhLmhhbmRsZU51bWJlcnNbMF1dO1xuICAgICAgICAgICAgICAgIGhhbmRsZSA9IGhhbmRsZU9yaWdpbi5jaGlsZHJlblswXTtcbiAgICAgICAgICAgICAgICBzY29wZV9BY3RpdmVIYW5kbGVzQ291bnQgKz0gMTtcbiAgICAgICAgICAgICAgICAvLyBNYXJrIHRoZSBoYW5kbGUgYXMgJ2FjdGl2ZScgc28gaXQgY2FuIGJlIHN0eWxlZC5cbiAgICAgICAgICAgICAgICBhZGRDbGFzcyhoYW5kbGUsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5hY3RpdmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQSBkcmFnIHNob3VsZCBuZXZlciBwcm9wYWdhdGUgdXAgdG8gdGhlICd0YXAnIGV2ZW50LlxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAvLyBSZWNvcmQgdGhlIGV2ZW50IGxpc3RlbmVycy5cbiAgICAgICAgICAgIHZhciBsaXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgICAgIC8vIEF0dGFjaCB0aGUgbW92ZSBhbmQgZW5kIGV2ZW50cy5cbiAgICAgICAgICAgIHZhciBtb3ZlRXZlbnQgPSBhdHRhY2hFdmVudChhY3Rpb25zLm1vdmUsIHNjb3BlX0RvY3VtZW50RWxlbWVudCwgZXZlbnRNb3ZlLCB7XG4gICAgICAgICAgICAgICAgLy8gVGhlIGV2ZW50IHRhcmdldCBoYXMgY2hhbmdlZCBzbyB3ZSBuZWVkIHRvIHByb3BhZ2F0ZSB0aGUgb3JpZ2luYWwgb25lIHNvIHRoYXQgd2Uga2VlcFxuICAgICAgICAgICAgICAgIC8vIHJlbHlpbmcgb24gaXQgdG8gZXh0cmFjdCB0YXJnZXQgdG91Y2hlcy5cbiAgICAgICAgICAgICAgICB0YXJnZXQ6IGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgICAgICBoYW5kbGU6IGhhbmRsZSxcbiAgICAgICAgICAgICAgICBjb25uZWN0OiBkYXRhLmNvbm5lY3QsXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzOiBsaXN0ZW5lcnMsXG4gICAgICAgICAgICAgICAgc3RhcnRDYWxjUG9pbnQ6IGV2ZW50LmNhbGNQb2ludCxcbiAgICAgICAgICAgICAgICBiYXNlU2l6ZTogYmFzZVNpemUoKSxcbiAgICAgICAgICAgICAgICBwYWdlT2Zmc2V0OiBldmVudC5wYWdlT2Zmc2V0LFxuICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlcnM6IGRhdGEuaGFuZGxlTnVtYmVycyxcbiAgICAgICAgICAgICAgICBidXR0b25zUHJvcGVydHk6IGV2ZW50LmJ1dHRvbnMsXG4gICAgICAgICAgICAgICAgbG9jYXRpb25zOiBzY29wZV9Mb2NhdGlvbnMuc2xpY2UoKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIGVuZEV2ZW50ID0gYXR0YWNoRXZlbnQoYWN0aW9ucy5lbmQsIHNjb3BlX0RvY3VtZW50RWxlbWVudCwgZXZlbnRFbmQsIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgICAgICBoYW5kbGU6IGhhbmRsZSxcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IGxpc3RlbmVycyxcbiAgICAgICAgICAgICAgICBkb05vdFJlamVjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXJzOiBkYXRhLmhhbmRsZU51bWJlcnMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBvdXRFdmVudCA9IGF0dGFjaEV2ZW50KFwibW91c2VvdXRcIiwgc2NvcGVfRG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudExlYXZlLCB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiBldmVudC50YXJnZXQsXG4gICAgICAgICAgICAgICAgaGFuZGxlOiBoYW5kbGUsXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzOiBsaXN0ZW5lcnMsXG4gICAgICAgICAgICAgICAgZG9Ob3RSZWplY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVyczogZGF0YS5oYW5kbGVOdW1iZXJzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBXZSB3YW50IHRvIG1ha2Ugc3VyZSB3ZSBwdXNoZWQgdGhlIGxpc3RlbmVycyBpbiB0aGUgbGlzdGVuZXIgbGlzdCByYXRoZXIgdGhhbiBjcmVhdGluZ1xuICAgICAgICAgICAgLy8gYSBuZXcgb25lIGFzIGl0IGhhcyBhbHJlYWR5IGJlZW4gcGFzc2VkIHRvIHRoZSBldmVudCBoYW5kbGVycy5cbiAgICAgICAgICAgIGxpc3RlbmVycy5wdXNoLmFwcGx5KGxpc3RlbmVycywgbW92ZUV2ZW50LmNvbmNhdChlbmRFdmVudCwgb3V0RXZlbnQpKTtcbiAgICAgICAgICAgIC8vIFRleHQgc2VsZWN0aW9uIGlzbid0IGFuIGlzc3VlIG9uIHRvdWNoIGRldmljZXMsXG4gICAgICAgICAgICAvLyBzbyBhZGRpbmcgY3Vyc29yIHN0eWxlcyBjYW4gYmUgc2tpcHBlZC5cbiAgICAgICAgICAgIGlmIChldmVudC5jdXJzb3IpIHtcbiAgICAgICAgICAgICAgICAvLyBQcmV2ZW50IHRoZSAnSScgY3Vyc29yIGFuZCBleHRlbmQgdGhlIHJhbmdlLWRyYWcgY3Vyc29yLlxuICAgICAgICAgICAgICAgIHNjb3BlX0JvZHkuc3R5bGUuY3Vyc29yID0gZ2V0Q29tcHV0ZWRTdHlsZShldmVudC50YXJnZXQpLmN1cnNvcjtcbiAgICAgICAgICAgICAgICAvLyBNYXJrIHRoZSB0YXJnZXQgd2l0aCBhIGRyYWdnaW5nIHN0YXRlLlxuICAgICAgICAgICAgICAgIGlmIChzY29wZV9IYW5kbGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkQ2xhc3Moc2NvcGVfVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMuZHJhZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFByZXZlbnQgdGV4dCBzZWxlY3Rpb24gd2hlbiBkcmFnZ2luZyB0aGUgaGFuZGxlcy5cbiAgICAgICAgICAgICAgICAvLyBJbiBub1VpU2xpZGVyIDw9IDkuMi4wLCB0aGlzIHdhcyBoYW5kbGVkIGJ5IGNhbGxpbmcgcHJldmVudERlZmF1bHQgb24gbW91c2UvdG91Y2ggc3RhcnQvbW92ZSxcbiAgICAgICAgICAgICAgICAvLyB3aGljaCBpcyBzY3JvbGwgYmxvY2tpbmcuIFRoZSBzZWxlY3RzdGFydCBldmVudCBpcyBzdXBwb3J0ZWQgYnkgRmlyZUZveCBzdGFydGluZyBmcm9tIHZlcnNpb24gNTIsXG4gICAgICAgICAgICAgICAgLy8gbWVhbmluZyB0aGUgb25seSBob2xkb3V0IGlzIGlPUyBTYWZhcmkuIFRoaXMgZG9lc24ndCBtYXR0ZXI6IHRleHQgc2VsZWN0aW9uIGlzbid0IHRyaWdnZXJlZCB0aGVyZS5cbiAgICAgICAgICAgICAgICAvLyBUaGUgJ2N1cnNvcicgZmxhZyBpcyBmYWxzZS5cbiAgICAgICAgICAgICAgICAvLyBTZWU6IGh0dHA6Ly9jYW5pdXNlLmNvbS8jc2VhcmNoPXNlbGVjdHN0YXJ0XG4gICAgICAgICAgICAgICAgc2NvcGVfQm9keS5hZGRFdmVudExpc3RlbmVyKFwic2VsZWN0c3RhcnRcIiwgcHJldmVudERlZmF1bHQsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRhdGEuaGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJzdGFydFwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTW92ZSBjbG9zZXN0IGhhbmRsZSB0byB0YXBwZWQgbG9jYXRpb24uXG4gICAgICAgIGZ1bmN0aW9uIGV2ZW50VGFwKGV2ZW50KSB7XG4gICAgICAgICAgICAvLyBUaGUgdGFwIGV2ZW50IHNob3VsZG4ndCBwcm9wYWdhdGUgdXBcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdmFyIHByb3Bvc2FsID0gY2FsY1BvaW50VG9QZXJjZW50YWdlKGV2ZW50LmNhbGNQb2ludCk7XG4gICAgICAgICAgICB2YXIgaGFuZGxlTnVtYmVyID0gZ2V0Q2xvc2VzdEhhbmRsZShwcm9wb3NhbCk7XG4gICAgICAgICAgICAvLyBUYWNrbGUgdGhlIGNhc2UgdGhhdCBhbGwgaGFuZGxlcyBhcmUgJ2Rpc2FibGVkJy5cbiAgICAgICAgICAgIGlmIChoYW5kbGVOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRmxhZyB0aGUgc2xpZGVyIGFzIGl0IGlzIG5vdyBpbiBhIHRyYW5zaXRpb25hbCBzdGF0ZS5cbiAgICAgICAgICAgIC8vIFRyYW5zaXRpb24gdGFrZXMgYSBjb25maWd1cmFibGUgYW1vdW50IG9mIG1zIChkZWZhdWx0IDMwMCkuIFJlLWVuYWJsZSB0aGUgc2xpZGVyIGFmdGVyIHRoYXQuXG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuZXZlbnRzLnNuYXApIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzc0ZvcihzY29wZV9UYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy50YXAsIG9wdGlvbnMuYW5pbWF0aW9uRHVyYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0SGFuZGxlKGhhbmRsZU51bWJlciwgcHJvcG9zYWwsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgc2V0WmluZGV4KCk7XG4gICAgICAgICAgICBmaXJlRXZlbnQoXCJzbGlkZVwiLCBoYW5kbGVOdW1iZXIsIHRydWUpO1xuICAgICAgICAgICAgZmlyZUV2ZW50KFwidXBkYXRlXCIsIGhhbmRsZU51bWJlciwgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuZXZlbnRzLnNuYXApIHtcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJjaGFuZ2VcIiwgaGFuZGxlTnVtYmVyLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJzZXRcIiwgaGFuZGxlTnVtYmVyLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGV2ZW50U3RhcnQoZXZlbnQsIHsgaGFuZGxlTnVtYmVyczogW2hhbmRsZU51bWJlcl0gfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlyZXMgYSAnaG92ZXInIGV2ZW50IGZvciBhIGhvdmVyZWQgbW91c2UvcGVuIHBvc2l0aW9uLlxuICAgICAgICBmdW5jdGlvbiBldmVudEhvdmVyKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgcHJvcG9zYWwgPSBjYWxjUG9pbnRUb1BlcmNlbnRhZ2UoZXZlbnQuY2FsY1BvaW50KTtcbiAgICAgICAgICAgIHZhciB0byA9IHNjb3BlX1NwZWN0cnVtLmdldFN0ZXAocHJvcG9zYWwpO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gc2NvcGVfU3BlY3RydW0uZnJvbVN0ZXBwaW5nKHRvKTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHNjb3BlX0V2ZW50cykuZm9yRWFjaChmdW5jdGlvbiAodGFyZ2V0RXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoXCJob3ZlclwiID09PSB0YXJnZXRFdmVudC5zcGxpdChcIi5cIilbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVfRXZlbnRzW3RhcmdldEV2ZW50XS5mb3JFYWNoKGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChzY29wZV9TZWxmLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIEhhbmRsZXMga2V5ZG93biBvbiBmb2N1c2VkIGhhbmRsZXNcbiAgICAgICAgLy8gRG9uJ3QgbW92ZSB0aGUgZG9jdW1lbnQgd2hlbiBwcmVzc2luZyBhcnJvdyBrZXlzIG9uIGZvY3VzZWQgaGFuZGxlc1xuICAgICAgICBmdW5jdGlvbiBldmVudEtleWRvd24oZXZlbnQsIGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgaWYgKGlzU2xpZGVyRGlzYWJsZWQoKSB8fCBpc0hhbmRsZURpc2FibGVkKGhhbmRsZU51bWJlcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaG9yaXpvbnRhbEtleXMgPSBbXCJMZWZ0XCIsIFwiUmlnaHRcIl07XG4gICAgICAgICAgICB2YXIgdmVydGljYWxLZXlzID0gW1wiRG93blwiLCBcIlVwXCJdO1xuICAgICAgICAgICAgdmFyIGxhcmdlU3RlcEtleXMgPSBbXCJQYWdlRG93blwiLCBcIlBhZ2VVcFwiXTtcbiAgICAgICAgICAgIHZhciBlZGdlS2V5cyA9IFtcIkhvbWVcIiwgXCJFbmRcIl07XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5kaXIgJiYgIW9wdGlvbnMub3J0KSB7XG4gICAgICAgICAgICAgICAgLy8gT24gYW4gcmlnaHQtdG8tbGVmdCBzbGlkZXIsIHRoZSBsZWZ0IGFuZCByaWdodCBrZXlzIGFjdCBpbnZlcnRlZFxuICAgICAgICAgICAgICAgIGhvcml6b250YWxLZXlzLnJldmVyc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG9wdGlvbnMub3J0ICYmICFvcHRpb25zLmRpcikge1xuICAgICAgICAgICAgICAgIC8vIE9uIGEgdG9wLXRvLWJvdHRvbSBzbGlkZXIsIHRoZSB1cCBhbmQgZG93biBrZXlzIGFjdCBpbnZlcnRlZFxuICAgICAgICAgICAgICAgIHZlcnRpY2FsS2V5cy5yZXZlcnNlKCk7XG4gICAgICAgICAgICAgICAgbGFyZ2VTdGVwS2V5cy5yZXZlcnNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTdHJpcCBcIkFycm93XCIgZm9yIElFIGNvbXBhdGliaWxpdHkuIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9LZXlib2FyZEV2ZW50L2tleVxuICAgICAgICAgICAgdmFyIGtleSA9IGV2ZW50LmtleS5yZXBsYWNlKFwiQXJyb3dcIiwgXCJcIik7XG4gICAgICAgICAgICB2YXIgaXNMYXJnZURvd24gPSBrZXkgPT09IGxhcmdlU3RlcEtleXNbMF07XG4gICAgICAgICAgICB2YXIgaXNMYXJnZVVwID0ga2V5ID09PSBsYXJnZVN0ZXBLZXlzWzFdO1xuICAgICAgICAgICAgdmFyIGlzRG93biA9IGtleSA9PT0gdmVydGljYWxLZXlzWzBdIHx8IGtleSA9PT0gaG9yaXpvbnRhbEtleXNbMF0gfHwgaXNMYXJnZURvd247XG4gICAgICAgICAgICB2YXIgaXNVcCA9IGtleSA9PT0gdmVydGljYWxLZXlzWzFdIHx8IGtleSA9PT0gaG9yaXpvbnRhbEtleXNbMV0gfHwgaXNMYXJnZVVwO1xuICAgICAgICAgICAgdmFyIGlzTWluID0ga2V5ID09PSBlZGdlS2V5c1swXTtcbiAgICAgICAgICAgIHZhciBpc01heCA9IGtleSA9PT0gZWRnZUtleXNbMV07XG4gICAgICAgICAgICBpZiAoIWlzRG93biAmJiAhaXNVcCAmJiAhaXNNaW4gJiYgIWlzTWF4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdmFyIHRvO1xuICAgICAgICAgICAgaWYgKGlzVXAgfHwgaXNEb3duKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRpcmVjdGlvbiA9IGlzRG93biA/IDAgOiAxO1xuICAgICAgICAgICAgICAgIHZhciBzdGVwcyA9IGdldE5leHRTdGVwc0ZvckhhbmRsZShoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgICAgIHZhciBzdGVwID0gc3RlcHNbZGlyZWN0aW9uXTtcbiAgICAgICAgICAgICAgICAvLyBBdCB0aGUgZWRnZSBvZiBhIHNsaWRlciwgZG8gbm90aGluZ1xuICAgICAgICAgICAgICAgIGlmIChzdGVwID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gTm8gc3RlcCBzZXQsIHVzZSB0aGUgZGVmYXVsdCBvZiAxMCUgb2YgdGhlIHN1Yi1yYW5nZVxuICAgICAgICAgICAgICAgIGlmIChzdGVwID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBzdGVwID0gc2NvcGVfU3BlY3RydW0uZ2V0RGVmYXVsdFN0ZXAoc2NvcGVfTG9jYXRpb25zW2hhbmRsZU51bWJlcl0sIGlzRG93biwgb3B0aW9ucy5rZXlib2FyZERlZmF1bHRTdGVwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGlzTGFyZ2VVcCB8fCBpc0xhcmdlRG93bikge1xuICAgICAgICAgICAgICAgICAgICBzdGVwICo9IG9wdGlvbnMua2V5Ym9hcmRQYWdlTXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN0ZXAgKj0gb3B0aW9ucy5rZXlib2FyZE11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFN0ZXAgb3ZlciB6ZXJvLWxlbmd0aCByYW5nZXMgKCM5NDgpO1xuICAgICAgICAgICAgICAgIHN0ZXAgPSBNYXRoLm1heChzdGVwLCAwLjAwMDAwMDEpO1xuICAgICAgICAgICAgICAgIC8vIERlY3JlbWVudCBmb3IgZG93biBzdGVwc1xuICAgICAgICAgICAgICAgIHN0ZXAgPSAoaXNEb3duID8gLTEgOiAxKSAqIHN0ZXA7XG4gICAgICAgICAgICAgICAgdG8gPSBzY29wZV9WYWx1ZXNbaGFuZGxlTnVtYmVyXSArIHN0ZXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpc01heCkge1xuICAgICAgICAgICAgICAgIC8vIEVuZCBrZXlcbiAgICAgICAgICAgICAgICB0byA9IG9wdGlvbnMuc3BlY3RydW0ueFZhbFtvcHRpb25zLnNwZWN0cnVtLnhWYWwubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBIb21lIGtleVxuICAgICAgICAgICAgICAgIHRvID0gb3B0aW9ucy5zcGVjdHJ1bS54VmFsWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0SGFuZGxlKGhhbmRsZU51bWJlciwgc2NvcGVfU3BlY3RydW0udG9TdGVwcGluZyh0byksIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgZmlyZUV2ZW50KFwic2xpZGVcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIGZpcmVFdmVudChcInVwZGF0ZVwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgZmlyZUV2ZW50KFwiY2hhbmdlXCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICBmaXJlRXZlbnQoXCJzZXRcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBdHRhY2ggZXZlbnRzIHRvIHNldmVyYWwgc2xpZGVyIHBhcnRzLlxuICAgICAgICBmdW5jdGlvbiBiaW5kU2xpZGVyRXZlbnRzKGJlaGF2aW91cikge1xuICAgICAgICAgICAgLy8gQXR0YWNoIHRoZSBzdGFuZGFyZCBkcmFnIGV2ZW50IHRvIHRoZSBoYW5kbGVzLlxuICAgICAgICAgICAgaWYgKCFiZWhhdmlvdXIuZml4ZWQpIHtcbiAgICAgICAgICAgICAgICBzY29wZV9IYW5kbGVzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlc2UgZXZlbnRzIGFyZSBvbmx5IGJvdW5kIHRvIHRoZSB2aXN1YWwgaGFuZGxlXG4gICAgICAgICAgICAgICAgICAgIC8vIGVsZW1lbnQsIG5vdCB0aGUgJ3JlYWwnIG9yaWdpbiBlbGVtZW50LlxuICAgICAgICAgICAgICAgICAgICBhdHRhY2hFdmVudChhY3Rpb25zLnN0YXJ0LCBoYW5kbGUuY2hpbGRyZW5bMF0sIGV2ZW50U3RhcnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlcnM6IFtpbmRleF0sXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQXR0YWNoIHRoZSB0YXAgZXZlbnQgdG8gdGhlIHNsaWRlciBiYXNlLlxuICAgICAgICAgICAgaWYgKGJlaGF2aW91ci50YXApIHtcbiAgICAgICAgICAgICAgICBhdHRhY2hFdmVudChhY3Rpb25zLnN0YXJ0LCBzY29wZV9CYXNlLCBldmVudFRhcCwge30pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRmlyZSBob3ZlciBldmVudHNcbiAgICAgICAgICAgIGlmIChiZWhhdmlvdXIuaG92ZXIpIHtcbiAgICAgICAgICAgICAgICBhdHRhY2hFdmVudChhY3Rpb25zLm1vdmUsIHNjb3BlX0Jhc2UsIGV2ZW50SG92ZXIsIHtcbiAgICAgICAgICAgICAgICAgICAgaG92ZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBNYWtlIHRoZSByYW5nZSBkcmFnZ2FibGUuXG4gICAgICAgICAgICBpZiAoYmVoYXZpb3VyLmRyYWcpIHtcbiAgICAgICAgICAgICAgICBzY29wZV9Db25uZWN0cy5mb3JFYWNoKGZ1bmN0aW9uIChjb25uZWN0LCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29ubmVjdCA9PT0gZmFsc2UgfHwgaW5kZXggPT09IDAgfHwgaW5kZXggPT09IHNjb3BlX0Nvbm5lY3RzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgaGFuZGxlQmVmb3JlID0gc2NvcGVfSGFuZGxlc1tpbmRleCAtIDFdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaGFuZGxlQWZ0ZXIgPSBzY29wZV9IYW5kbGVzW2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGV2ZW50SG9sZGVycyA9IFtjb25uZWN0XTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhhbmRsZXNUb0RyYWcgPSBbaGFuZGxlQmVmb3JlLCBoYW5kbGVBZnRlcl07XG4gICAgICAgICAgICAgICAgICAgIHZhciBoYW5kbGVOdW1iZXJzVG9EcmFnID0gW2luZGV4IC0gMSwgaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBhZGRDbGFzcyhjb25uZWN0LCBvcHRpb25zLmNzc0NsYXNzZXMuZHJhZ2dhYmxlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2hlbiB0aGUgcmFuZ2UgaXMgZml4ZWQsIHRoZSBlbnRpcmUgcmFuZ2UgY2FuXG4gICAgICAgICAgICAgICAgICAgIC8vIGJlIGRyYWdnZWQgYnkgdGhlIGhhbmRsZXMuIFRoZSBoYW5kbGUgaW4gdGhlIGZpcnN0XG4gICAgICAgICAgICAgICAgICAgIC8vIG9yaWdpbiB3aWxsIHByb3BhZ2F0ZSB0aGUgc3RhcnQgZXZlbnQgdXB3YXJkLFxuICAgICAgICAgICAgICAgICAgICAvLyBidXQgaXQgbmVlZHMgdG8gYmUgYm91bmQgbWFudWFsbHkgb24gdGhlIG90aGVyLlxuICAgICAgICAgICAgICAgICAgICBpZiAoYmVoYXZpb3VyLmZpeGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudEhvbGRlcnMucHVzaChoYW5kbGVCZWZvcmUuY2hpbGRyZW5bMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRIb2xkZXJzLnB1c2goaGFuZGxlQWZ0ZXIuY2hpbGRyZW5bMF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChiZWhhdmlvdXIuZHJhZ0FsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlc1RvRHJhZyA9IHNjb3BlX0hhbmRsZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXJzVG9EcmFnID0gc2NvcGVfSGFuZGxlTnVtYmVycztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBldmVudEhvbGRlcnMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnRIb2xkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFjaEV2ZW50KGFjdGlvbnMuc3RhcnQsIGV2ZW50SG9sZGVyLCBldmVudFN0YXJ0LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlczogaGFuZGxlc1RvRHJhZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXJzOiBoYW5kbGVOdW1iZXJzVG9EcmFnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3Q6IGNvbm5lY3QsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gQXR0YWNoIGFuIGV2ZW50IHRvIHRoaXMgc2xpZGVyLCBwb3NzaWJseSBpbmNsdWRpbmcgYSBuYW1lc3BhY2VcbiAgICAgICAgZnVuY3Rpb24gYmluZEV2ZW50KG5hbWVzcGFjZWRFdmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHNjb3BlX0V2ZW50c1tuYW1lc3BhY2VkRXZlbnRdID0gc2NvcGVfRXZlbnRzW25hbWVzcGFjZWRFdmVudF0gfHwgW107XG4gICAgICAgICAgICBzY29wZV9FdmVudHNbbmFtZXNwYWNlZEV2ZW50XS5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIC8vIElmIHRoZSBldmVudCBib3VuZCBpcyAndXBkYXRlLCcgZmlyZSBpdCBpbW1lZGlhdGVseSBmb3IgYWxsIGhhbmRsZXMuXG4gICAgICAgICAgICBpZiAobmFtZXNwYWNlZEV2ZW50LnNwbGl0KFwiLlwiKVswXSA9PT0gXCJ1cGRhdGVcIikge1xuICAgICAgICAgICAgICAgIHNjb3BlX0hhbmRsZXMuZm9yRWFjaChmdW5jdGlvbiAoYSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwidXBkYXRlXCIsIGluZGV4KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBpc0ludGVybmFsTmFtZXNwYWNlKG5hbWVzcGFjZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5hbWVzcGFjZSA9PT0gSU5URVJOQUxfRVZFTlRfTlMuYXJpYSB8fCBuYW1lc3BhY2UgPT09IElOVEVSTkFMX0VWRU5UX05TLnRvb2x0aXBzO1xuICAgICAgICB9XG4gICAgICAgIC8vIFVuZG8gYXR0YWNobWVudCBvZiBldmVudFxuICAgICAgICBmdW5jdGlvbiByZW1vdmVFdmVudChuYW1lc3BhY2VkRXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBldmVudCA9IG5hbWVzcGFjZWRFdmVudCAmJiBuYW1lc3BhY2VkRXZlbnQuc3BsaXQoXCIuXCIpWzBdO1xuICAgICAgICAgICAgdmFyIG5hbWVzcGFjZSA9IGV2ZW50ID8gbmFtZXNwYWNlZEV2ZW50LnN1YnN0cmluZyhldmVudC5sZW5ndGgpIDogbmFtZXNwYWNlZEV2ZW50O1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoc2NvcGVfRXZlbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChiaW5kKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRFdmVudCA9IGJpbmQuc3BsaXQoXCIuXCIpWzBdO1xuICAgICAgICAgICAgICAgIHZhciB0TmFtZXNwYWNlID0gYmluZC5zdWJzdHJpbmcodEV2ZW50Lmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgaWYgKCghZXZlbnQgfHwgZXZlbnQgPT09IHRFdmVudCkgJiYgKCFuYW1lc3BhY2UgfHwgbmFtZXNwYWNlID09PSB0TmFtZXNwYWNlKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBvbmx5IGRlbGV0ZSBwcm90ZWN0ZWQgaW50ZXJuYWwgZXZlbnQgaWYgaW50ZW50aW9uYWxcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0ludGVybmFsTmFtZXNwYWNlKHROYW1lc3BhY2UpIHx8IG5hbWVzcGFjZSA9PT0gdE5hbWVzcGFjZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHNjb3BlX0V2ZW50c1tiaW5kXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIEV4dGVybmFsIGV2ZW50IGhhbmRsaW5nXG4gICAgICAgIGZ1bmN0aW9uIGZpcmVFdmVudChldmVudE5hbWUsIGhhbmRsZU51bWJlciwgdGFwKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzY29wZV9FdmVudHMpLmZvckVhY2goZnVuY3Rpb24gKHRhcmdldEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50VHlwZSA9IHRhcmdldEV2ZW50LnNwbGl0KFwiLlwiKVswXTtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnROYW1lID09PSBldmVudFR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVfRXZlbnRzW3RhcmdldEV2ZW50XS5mb3JFYWNoKGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVzZSB0aGUgc2xpZGVyIHB1YmxpYyBBUEkgYXMgdGhlIHNjb3BlICgndGhpcycpXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZV9TZWxmLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJldHVybiB2YWx1ZXMgYXMgYXJyYXksIHNvIGFyZ18xW2FyZ18yXSBpcyBhbHdheXMgdmFsaWQuXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZV9WYWx1ZXMubWFwKG9wdGlvbnMuZm9ybWF0LnRvKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgaW5kZXgsIDAgb3IgMVxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVyLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVuLWZvcm1hdHRlZCBzbGlkZXIgdmFsdWVzXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZV9WYWx1ZXMuc2xpY2UoKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBFdmVudCBpcyBmaXJlZCBieSB0YXAsIHRydWUgb3IgZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcCB8fCBmYWxzZSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBMZWZ0IG9mZnNldCBvZiB0aGUgaGFuZGxlLCBpbiByZWxhdGlvbiB0byB0aGUgc2xpZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZV9Mb2NhdGlvbnMuc2xpY2UoKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhZGQgdGhlIHNsaWRlciBwdWJsaWMgQVBJIHRvIGFuIGFjY2Vzc2libGUgcGFyYW1ldGVyIHdoZW4gdGhpcyBpcyB1bmF2YWlsYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVfU2VsZik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNwbGl0IG91dCB0aGUgaGFuZGxlIHBvc2l0aW9uaW5nIGxvZ2ljIHNvIHRoZSBNb3ZlIGV2ZW50IGNhbiB1c2UgaXQsIHRvb1xuICAgICAgICBmdW5jdGlvbiBjaGVja0hhbmRsZVBvc2l0aW9uKHJlZmVyZW5jZSwgaGFuZGxlTnVtYmVyLCB0bywgbG9va0JhY2t3YXJkLCBsb29rRm9yd2FyZCwgZ2V0VmFsdWUsIHNtb290aFN0ZXBzKSB7XG4gICAgICAgICAgICB2YXIgZGlzdGFuY2U7XG4gICAgICAgICAgICAvLyBGb3Igc2xpZGVycyB3aXRoIG11bHRpcGxlIGhhbmRsZXMsIGxpbWl0IG1vdmVtZW50IHRvIHRoZSBvdGhlciBoYW5kbGUuXG4gICAgICAgICAgICAvLyBBcHBseSB0aGUgbWFyZ2luIG9wdGlvbiBieSBhZGRpbmcgaXQgdG8gdGhlIGhhbmRsZSBwb3NpdGlvbnMuXG4gICAgICAgICAgICBpZiAoc2NvcGVfSGFuZGxlcy5sZW5ndGggPiAxICYmICFvcHRpb25zLmV2ZW50cy51bmNvbnN0cmFpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxvb2tCYWNrd2FyZCAmJiBoYW5kbGVOdW1iZXIgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gc2NvcGVfU3BlY3RydW0uZ2V0QWJzb2x1dGVEaXN0YW5jZShyZWZlcmVuY2VbaGFuZGxlTnVtYmVyIC0gMV0sIG9wdGlvbnMubWFyZ2luLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHRvID0gTWF0aC5tYXgodG8sIGRpc3RhbmNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGxvb2tGb3J3YXJkICYmIGhhbmRsZU51bWJlciA8IHNjb3BlX0hhbmRsZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IHNjb3BlX1NwZWN0cnVtLmdldEFic29sdXRlRGlzdGFuY2UocmVmZXJlbmNlW2hhbmRsZU51bWJlciArIDFdLCBvcHRpb25zLm1hcmdpbiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRvID0gTWF0aC5taW4odG8sIGRpc3RhbmNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBUaGUgbGltaXQgb3B0aW9uIGhhcyB0aGUgb3Bwb3NpdGUgZWZmZWN0LCBsaW1pdGluZyBoYW5kbGVzIHRvIGFcbiAgICAgICAgICAgIC8vIG1heGltdW0gZGlzdGFuY2UgZnJvbSBhbm90aGVyLiBMaW1pdCBtdXN0IGJlID4gMCwgYXMgb3RoZXJ3aXNlXG4gICAgICAgICAgICAvLyBoYW5kbGVzIHdvdWxkIGJlIHVubW92YWJsZS5cbiAgICAgICAgICAgIGlmIChzY29wZV9IYW5kbGVzLmxlbmd0aCA+IDEgJiYgb3B0aW9ucy5saW1pdCkge1xuICAgICAgICAgICAgICAgIGlmIChsb29rQmFja3dhcmQgJiYgaGFuZGxlTnVtYmVyID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IHNjb3BlX1NwZWN0cnVtLmdldEFic29sdXRlRGlzdGFuY2UocmVmZXJlbmNlW2hhbmRsZU51bWJlciAtIDFdLCBvcHRpb25zLmxpbWl0LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHRvID0gTWF0aC5taW4odG8sIGRpc3RhbmNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGxvb2tGb3J3YXJkICYmIGhhbmRsZU51bWJlciA8IHNjb3BlX0hhbmRsZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IHNjb3BlX1NwZWN0cnVtLmdldEFic29sdXRlRGlzdGFuY2UocmVmZXJlbmNlW2hhbmRsZU51bWJlciArIDFdLCBvcHRpb25zLmxpbWl0LCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgdG8gPSBNYXRoLm1heCh0bywgZGlzdGFuY2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFRoZSBwYWRkaW5nIG9wdGlvbiBrZWVwcyB0aGUgaGFuZGxlcyBhIGNlcnRhaW4gZGlzdGFuY2UgZnJvbSB0aGVcbiAgICAgICAgICAgIC8vIGVkZ2VzIG9mIHRoZSBzbGlkZXIuIFBhZGRpbmcgbXVzdCBiZSA+IDAuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5wYWRkaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKGhhbmRsZU51bWJlciA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IHNjb3BlX1NwZWN0cnVtLmdldEFic29sdXRlRGlzdGFuY2UoMCwgb3B0aW9ucy5wYWRkaW5nWzBdLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHRvID0gTWF0aC5tYXgodG8sIGRpc3RhbmNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGhhbmRsZU51bWJlciA9PT0gc2NvcGVfSGFuZGxlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gc2NvcGVfU3BlY3RydW0uZ2V0QWJzb2x1dGVEaXN0YW5jZSgxMDAsIG9wdGlvbnMucGFkZGluZ1sxXSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRvID0gTWF0aC5taW4odG8sIGRpc3RhbmNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXNtb290aFN0ZXBzKSB7XG4gICAgICAgICAgICAgICAgdG8gPSBzY29wZV9TcGVjdHJ1bS5nZXRTdGVwKHRvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIExpbWl0IHBlcmNlbnRhZ2UgdG8gdGhlIDAgLSAxMDAgcmFuZ2VcbiAgICAgICAgICAgIHRvID0gbGltaXQodG8pO1xuICAgICAgICAgICAgLy8gUmV0dXJuIGZhbHNlIGlmIGhhbmRsZSBjYW4ndCBtb3ZlXG4gICAgICAgICAgICBpZiAodG8gPT09IHJlZmVyZW5jZVtoYW5kbGVOdW1iZXJdICYmICFnZXRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0bztcbiAgICAgICAgfVxuICAgICAgICAvLyBVc2VzIHNsaWRlciBvcmllbnRhdGlvbiB0byBjcmVhdGUgQ1NTIHJ1bGVzLiBhID0gYmFzZSB2YWx1ZTtcbiAgICAgICAgZnVuY3Rpb24gaW5SdWxlT3JkZXIodiwgYSkge1xuICAgICAgICAgICAgdmFyIG8gPSBvcHRpb25zLm9ydDtcbiAgICAgICAgICAgIHJldHVybiAobyA/IGEgOiB2KSArIFwiLCBcIiArIChvID8gdiA6IGEpO1xuICAgICAgICB9XG4gICAgICAgIC8vIE1vdmVzIGhhbmRsZShzKSBieSBhIHBlcmNlbnRhZ2VcbiAgICAgICAgLy8gKGJvb2wsICUgdG8gbW92ZSwgWyUgd2hlcmUgaGFuZGxlIHN0YXJ0ZWQsIC4uLl0sIFtpbmRleCBpbiBzY29wZV9IYW5kbGVzLCAuLi5dKVxuICAgICAgICBmdW5jdGlvbiBtb3ZlSGFuZGxlcyh1cHdhcmQsIHByb3Bvc2FsLCBsb2NhdGlvbnMsIGhhbmRsZU51bWJlcnMsIGNvbm5lY3QpIHtcbiAgICAgICAgICAgIHZhciBwcm9wb3NhbHMgPSBsb2NhdGlvbnMuc2xpY2UoKTtcbiAgICAgICAgICAgIC8vIFN0b3JlIGZpcnN0IGhhbmRsZSBub3csIHNvIHdlIHN0aWxsIGhhdmUgaXQgaW4gY2FzZSBoYW5kbGVOdW1iZXJzIGlzIHJldmVyc2VkXG4gICAgICAgICAgICB2YXIgZmlyc3RIYW5kbGUgPSBoYW5kbGVOdW1iZXJzWzBdO1xuICAgICAgICAgICAgdmFyIHNtb290aFN0ZXBzID0gb3B0aW9ucy5ldmVudHMuc21vb3RoU3RlcHM7XG4gICAgICAgICAgICB2YXIgYiA9IFshdXB3YXJkLCB1cHdhcmRdO1xuICAgICAgICAgICAgdmFyIGYgPSBbdXB3YXJkLCAhdXB3YXJkXTtcbiAgICAgICAgICAgIC8vIENvcHkgaGFuZGxlTnVtYmVycyBzbyB3ZSBkb24ndCBjaGFuZ2UgdGhlIGRhdGFzZXRcbiAgICAgICAgICAgIGhhbmRsZU51bWJlcnMgPSBoYW5kbGVOdW1iZXJzLnNsaWNlKCk7XG4gICAgICAgICAgICAvLyBDaGVjayB0byBzZWUgd2hpY2ggaGFuZGxlIGlzICdsZWFkaW5nJy5cbiAgICAgICAgICAgIC8vIElmIHRoYXQgb25lIGNhbid0IG1vdmUgdGhlIHNlY29uZCBjYW4ndCBlaXRoZXIuXG4gICAgICAgICAgICBpZiAodXB3YXJkKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVycy5yZXZlcnNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTdGVwIDE6IGdldCB0aGUgbWF4aW11bSBwZXJjZW50YWdlIHRoYXQgYW55IG9mIHRoZSBoYW5kbGVzIGNhbiBtb3ZlXG4gICAgICAgICAgICBpZiAoaGFuZGxlTnVtYmVycy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIsIG8pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRvID0gY2hlY2tIYW5kbGVQb3NpdGlvbihwcm9wb3NhbHMsIGhhbmRsZU51bWJlciwgcHJvcG9zYWxzW2hhbmRsZU51bWJlcl0gKyBwcm9wb3NhbCwgYltvXSwgZltvXSwgZmFsc2UsIHNtb290aFN0ZXBzKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gU3RvcCBpZiBvbmUgb2YgdGhlIGhhbmRsZXMgY2FuJ3QgbW92ZS5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcG9zYWwgPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcG9zYWwgPSB0byAtIHByb3Bvc2Fsc1toYW5kbGVOdW1iZXJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcG9zYWxzW2hhbmRsZU51bWJlcl0gPSB0bztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdXNpbmcgb25lIGhhbmRsZSwgY2hlY2sgYmFja3dhcmQgQU5EIGZvcndhcmRcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGIgPSBmID0gW3RydWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHN0YXRlID0gZmFsc2U7XG4gICAgICAgICAgICAvLyBTdGVwIDI6IFRyeSB0byBzZXQgdGhlIGhhbmRsZXMgd2l0aCB0aGUgZm91bmQgcGVyY2VudGFnZVxuICAgICAgICAgICAgaGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIsIG8pIHtcbiAgICAgICAgICAgICAgICBzdGF0ZSA9XG4gICAgICAgICAgICAgICAgICAgIHNldEhhbmRsZShoYW5kbGVOdW1iZXIsIGxvY2F0aW9uc1toYW5kbGVOdW1iZXJdICsgcHJvcG9zYWwsIGJbb10sIGZbb10sIGZhbHNlLCBzbW9vdGhTdGVwcykgfHwgc3RhdGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIFN0ZXAgMzogSWYgYSBoYW5kbGUgbW92ZWQsIGZpcmUgZXZlbnRzXG4gICAgICAgICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJ1cGRhdGVcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwic2xpZGVcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyBJZiB0YXJnZXQgaXMgYSBjb25uZWN0LCB0aGVuIGZpcmUgZHJhZyBldmVudFxuICAgICAgICAgICAgICAgIGlmIChjb25uZWN0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJkcmFnXCIsIGZpcnN0SGFuZGxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGFrZXMgYSBiYXNlIHZhbHVlIGFuZCBhbiBvZmZzZXQuIFRoaXMgb2Zmc2V0IGlzIHVzZWQgZm9yIHRoZSBjb25uZWN0IGJhciBzaXplLlxuICAgICAgICAvLyBJbiB0aGUgaW5pdGlhbCBkZXNpZ24gZm9yIHRoaXMgZmVhdHVyZSwgdGhlIG9yaWdpbiBlbGVtZW50IHdhcyAxJSB3aWRlLlxuICAgICAgICAvLyBVbmZvcnR1bmF0ZWx5LCBhIHJvdW5kaW5nIGJ1ZyBpbiBDaHJvbWUgbWFrZXMgaXQgaW1wb3NzaWJsZSB0byBpbXBsZW1lbnQgdGhpcyBmZWF0dXJlXG4gICAgICAgIC8vIGluIHRoaXMgbWFubmVyOiBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD03OTgyMjNcbiAgICAgICAgZnVuY3Rpb24gdHJhbnNmb3JtRGlyZWN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmRpciA/IDEwMCAtIGEgLSBiIDogYTtcbiAgICAgICAgfVxuICAgICAgICAvLyBVcGRhdGVzIHNjb3BlX0xvY2F0aW9ucyBhbmQgc2NvcGVfVmFsdWVzLCB1cGRhdGVzIHZpc3VhbCBzdGF0ZVxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVIYW5kbGVQb3NpdGlvbihoYW5kbGVOdW1iZXIsIHRvKSB7XG4gICAgICAgICAgICAvLyBVcGRhdGUgbG9jYXRpb25zLlxuICAgICAgICAgICAgc2NvcGVfTG9jYXRpb25zW2hhbmRsZU51bWJlcl0gPSB0bztcbiAgICAgICAgICAgIC8vIENvbnZlcnQgdGhlIHZhbHVlIHRvIHRoZSBzbGlkZXIgc3RlcHBpbmcvcmFuZ2UuXG4gICAgICAgICAgICBzY29wZV9WYWx1ZXNbaGFuZGxlTnVtYmVyXSA9IHNjb3BlX1NwZWN0cnVtLmZyb21TdGVwcGluZyh0byk7XG4gICAgICAgICAgICB2YXIgdHJhbnNsYXRpb24gPSB0cmFuc2Zvcm1EaXJlY3Rpb24odG8sIDApIC0gc2NvcGVfRGlyT2Zmc2V0O1xuICAgICAgICAgICAgdmFyIHRyYW5zbGF0ZVJ1bGUgPSBcInRyYW5zbGF0ZShcIiArIGluUnVsZU9yZGVyKHRyYW5zbGF0aW9uICsgXCIlXCIsIFwiMFwiKSArIFwiKVwiO1xuICAgICAgICAgICAgc2NvcGVfSGFuZGxlc1toYW5kbGVOdW1iZXJdLnN0eWxlW29wdGlvbnMudHJhbnNmb3JtUnVsZV0gPSB0cmFuc2xhdGVSdWxlO1xuICAgICAgICAgICAgdXBkYXRlQ29ubmVjdChoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgdXBkYXRlQ29ubmVjdChoYW5kbGVOdW1iZXIgKyAxKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBIYW5kbGVzIGJlZm9yZSB0aGUgc2xpZGVyIG1pZGRsZSBhcmUgc3RhY2tlZCBsYXRlciA9IGhpZ2hlcixcbiAgICAgICAgLy8gSGFuZGxlcyBhZnRlciB0aGUgbWlkZGxlIGxhdGVyIGlzIGxvd2VyXG4gICAgICAgIC8vIFtbN10gWzhdIC4uLi4uLi4uLi4gfCAuLi4uLi4uLi4uIFs1XSBbNF1cbiAgICAgICAgZnVuY3Rpb24gc2V0WmluZGV4KCkge1xuICAgICAgICAgICAgc2NvcGVfSGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGlyID0gc2NvcGVfTG9jYXRpb25zW2hhbmRsZU51bWJlcl0gPiA1MCA/IC0xIDogMTtcbiAgICAgICAgICAgICAgICB2YXIgekluZGV4ID0gMyArIChzY29wZV9IYW5kbGVzLmxlbmd0aCArIGRpciAqIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICAgICAgc2NvcGVfSGFuZGxlc1toYW5kbGVOdW1iZXJdLnN0eWxlLnpJbmRleCA9IFN0cmluZyh6SW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGVzdCBzdWdnZXN0ZWQgdmFsdWVzIGFuZCBhcHBseSBtYXJnaW4sIHN0ZXAuXG4gICAgICAgIC8vIGlmIGV4YWN0SW5wdXQgaXMgdHJ1ZSwgZG9uJ3QgcnVuIGNoZWNrSGFuZGxlUG9zaXRpb24sIHRoZW4gdGhlIGhhbmRsZSBjYW4gYmUgcGxhY2VkIGluIGJldHdlZW4gc3RlcHMgKCM0MzYpXG4gICAgICAgIGZ1bmN0aW9uIHNldEhhbmRsZShoYW5kbGVOdW1iZXIsIHRvLCBsb29rQmFja3dhcmQsIGxvb2tGb3J3YXJkLCBleGFjdElucHV0LCBzbW9vdGhTdGVwcykge1xuICAgICAgICAgICAgaWYgKCFleGFjdElucHV0KSB7XG4gICAgICAgICAgICAgICAgdG8gPSBjaGVja0hhbmRsZVBvc2l0aW9uKHNjb3BlX0xvY2F0aW9ucywgaGFuZGxlTnVtYmVyLCB0bywgbG9va0JhY2t3YXJkLCBsb29rRm9yd2FyZCwgZmFsc2UsIHNtb290aFN0ZXBzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0byA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cGRhdGVIYW5kbGVQb3NpdGlvbihoYW5kbGVOdW1iZXIsIHRvKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIFVwZGF0ZXMgc3R5bGUgYXR0cmlidXRlIGZvciBjb25uZWN0IG5vZGVzXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZUNvbm5lY3QoaW5kZXgpIHtcbiAgICAgICAgICAgIC8vIFNraXAgY29ubmVjdHMgc2V0IHRvIGZhbHNlXG4gICAgICAgICAgICBpZiAoIXNjb3BlX0Nvbm5lY3RzW2luZGV4XSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBsID0gMDtcbiAgICAgICAgICAgIHZhciBoID0gMTAwO1xuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgbCA9IHNjb3BlX0xvY2F0aW9uc1tpbmRleCAtIDFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSBzY29wZV9Db25uZWN0cy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgaCA9IHNjb3BlX0xvY2F0aW9uc1tpbmRleF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBXZSB1c2UgdHdvIHJ1bGVzOlxuICAgICAgICAgICAgLy8gJ3RyYW5zbGF0ZScgdG8gY2hhbmdlIHRoZSBsZWZ0L3RvcCBvZmZzZXQ7XG4gICAgICAgICAgICAvLyAnc2NhbGUnIHRvIGNoYW5nZSB0aGUgd2lkdGggb2YgdGhlIGVsZW1lbnQ7XG4gICAgICAgICAgICAvLyBBcyB0aGUgZWxlbWVudCBoYXMgYSB3aWR0aCBvZiAxMDAlLCBhIHRyYW5zbGF0aW9uIG9mIDEwMCUgaXMgZXF1YWwgdG8gMTAwJSBvZiB0aGUgcGFyZW50ICgubm9VaS1iYXNlKVxuICAgICAgICAgICAgdmFyIGNvbm5lY3RXaWR0aCA9IGggLSBsO1xuICAgICAgICAgICAgdmFyIHRyYW5zbGF0ZVJ1bGUgPSBcInRyYW5zbGF0ZShcIiArIGluUnVsZU9yZGVyKHRyYW5zZm9ybURpcmVjdGlvbihsLCBjb25uZWN0V2lkdGgpICsgXCIlXCIsIFwiMFwiKSArIFwiKVwiO1xuICAgICAgICAgICAgdmFyIHNjYWxlUnVsZSA9IFwic2NhbGUoXCIgKyBpblJ1bGVPcmRlcihjb25uZWN0V2lkdGggLyAxMDAsIFwiMVwiKSArIFwiKVwiO1xuICAgICAgICAgICAgc2NvcGVfQ29ubmVjdHNbaW5kZXhdLnN0eWxlW29wdGlvbnMudHJhbnNmb3JtUnVsZV0gPVxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVJ1bGUgKyBcIiBcIiArIHNjYWxlUnVsZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBQYXJzZXMgdmFsdWUgcGFzc2VkIHRvIC5zZXQgbWV0aG9kLiBSZXR1cm5zIGN1cnJlbnQgdmFsdWUgaWYgbm90IHBhcnNlLWFibGUuXG4gICAgICAgIGZ1bmN0aW9uIHJlc29sdmVUb1ZhbHVlKHRvLCBoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgIC8vIFNldHRpbmcgd2l0aCBudWxsIGluZGljYXRlcyBhbiAnaWdub3JlJy5cbiAgICAgICAgICAgIC8vIElucHV0dGluZyAnZmFsc2UnIGlzIGludmFsaWQuXG4gICAgICAgICAgICBpZiAodG8gPT09IG51bGwgfHwgdG8gPT09IGZhbHNlIHx8IHRvID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVfTG9jYXRpb25zW2hhbmRsZU51bWJlcl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBhIGZvcm1hdHRlZCBudW1iZXIgd2FzIHBhc3NlZCwgYXR0ZW1wdCB0byBkZWNvZGUgaXQuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRvID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdG8gPSBTdHJpbmcodG8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG8gPSBvcHRpb25zLmZvcm1hdC5mcm9tKHRvKTtcbiAgICAgICAgICAgIGlmICh0byAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0byA9IHNjb3BlX1NwZWN0cnVtLnRvU3RlcHBpbmcodG8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgcGFyc2luZyB0aGUgbnVtYmVyIGZhaWxlZCwgdXNlIHRoZSBjdXJyZW50IHZhbHVlLlxuICAgICAgICAgICAgaWYgKHRvID09PSBmYWxzZSB8fCBpc05hTih0bykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVfTG9jYXRpb25zW2hhbmRsZU51bWJlcl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdG87XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2V0IHRoZSBzbGlkZXIgdmFsdWUuXG4gICAgICAgIGZ1bmN0aW9uIHZhbHVlU2V0KGlucHV0LCBmaXJlU2V0RXZlbnQsIGV4YWN0SW5wdXQpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZXMgPSBhc0FycmF5KGlucHV0KTtcbiAgICAgICAgICAgIHZhciBpc0luaXQgPSBzY29wZV9Mb2NhdGlvbnNbMF0gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIC8vIEV2ZW50IGZpcmVzIGJ5IGRlZmF1bHRcbiAgICAgICAgICAgIGZpcmVTZXRFdmVudCA9IGZpcmVTZXRFdmVudCA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IGZpcmVTZXRFdmVudDtcbiAgICAgICAgICAgIC8vIEFuaW1hdGlvbiBpcyBvcHRpb25hbC5cbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgaW5pdGlhbCB2YWx1ZXMgd2VyZSBzZXQgYmVmb3JlIHVzaW5nIGFuaW1hdGVkIHBsYWNlbWVudC5cbiAgICAgICAgICAgIGlmIChvcHRpb25zLmFuaW1hdGUgJiYgIWlzSW5pdCkge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzRm9yKHNjb3BlX1RhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLnRhcCwgb3B0aW9ucy5hbmltYXRpb25EdXJhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBGaXJzdCBwYXNzLCB3aXRob3V0IGxvb2tBaGVhZCBidXQgd2l0aCBsb29rQmFja3dhcmQuIFZhbHVlcyBhcmUgc2V0IGZyb20gbGVmdCB0byByaWdodC5cbiAgICAgICAgICAgIHNjb3BlX0hhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgc2V0SGFuZGxlKGhhbmRsZU51bWJlciwgcmVzb2x2ZVRvVmFsdWUodmFsdWVzW2hhbmRsZU51bWJlcl0sIGhhbmRsZU51bWJlciksIHRydWUsIGZhbHNlLCBleGFjdElucHV0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIGkgPSBzY29wZV9IYW5kbGVOdW1iZXJzLmxlbmd0aCA9PT0gMSA/IDAgOiAxO1xuICAgICAgICAgICAgLy8gU3ByZWFkIGhhbmRsZXMgZXZlbmx5IGFjcm9zcyB0aGUgc2xpZGVyIGlmIHRoZSByYW5nZSBoYXMgbm8gc2l6ZSAobWluPW1heClcbiAgICAgICAgICAgIGlmIChpc0luaXQgJiYgc2NvcGVfU3BlY3RydW0uaGFzTm9TaXplKCkpIHtcbiAgICAgICAgICAgICAgICBleGFjdElucHV0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzY29wZV9Mb2NhdGlvbnNbMF0gPSAwO1xuICAgICAgICAgICAgICAgIGlmIChzY29wZV9IYW5kbGVOdW1iZXJzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNwYWNlXzEgPSAxMDAgLyAoc2NvcGVfSGFuZGxlTnVtYmVycy5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVfSGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlX0xvY2F0aW9uc1toYW5kbGVOdW1iZXJdID0gaGFuZGxlTnVtYmVyICogc3BhY2VfMTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU2Vjb25kYXJ5IHBhc3Nlcy4gTm93IHRoYXQgYWxsIGJhc2UgdmFsdWVzIGFyZSBzZXQsIGFwcGx5IGNvbnN0cmFpbnRzLlxuICAgICAgICAgICAgLy8gSXRlcmF0ZSBhbGwgaGFuZGxlcyB0byBlbnN1cmUgY29uc3RyYWludHMgYXJlIGFwcGxpZWQgZm9yIHRoZSBlbnRpcmUgc2xpZGVyIChJc3N1ZSAjMTAwOSlcbiAgICAgICAgICAgIGZvciAoOyBpIDwgc2NvcGVfSGFuZGxlTnVtYmVycy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIHNjb3BlX0hhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEhhbmRsZShoYW5kbGVOdW1iZXIsIHNjb3BlX0xvY2F0aW9uc1toYW5kbGVOdW1iZXJdLCB0cnVlLCB0cnVlLCBleGFjdElucHV0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldFppbmRleCgpO1xuICAgICAgICAgICAgc2NvcGVfSGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJ1cGRhdGVcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgICAgICAvLyBGaXJlIHRoZSBldmVudCBvbmx5IGZvciBoYW5kbGVzIHRoYXQgcmVjZWl2ZWQgYSBuZXcgdmFsdWUsIGFzIHBlciAjNTc5XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlc1toYW5kbGVOdW1iZXJdICE9PSBudWxsICYmIGZpcmVTZXRFdmVudCkge1xuICAgICAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJzZXRcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBSZXNldCBzbGlkZXIgdG8gaW5pdGlhbCB2YWx1ZXNcbiAgICAgICAgZnVuY3Rpb24gdmFsdWVSZXNldChmaXJlU2V0RXZlbnQpIHtcbiAgICAgICAgICAgIHZhbHVlU2V0KG9wdGlvbnMuc3RhcnQsIGZpcmVTZXRFdmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2V0IHZhbHVlIGZvciBhIHNpbmdsZSBoYW5kbGVcbiAgICAgICAgZnVuY3Rpb24gdmFsdWVTZXRIYW5kbGUoaGFuZGxlTnVtYmVyLCB2YWx1ZSwgZmlyZVNldEV2ZW50LCBleGFjdElucHV0KSB7XG4gICAgICAgICAgICAvLyBFbnN1cmUgbnVtZXJpYyBpbnB1dFxuICAgICAgICAgICAgaGFuZGxlTnVtYmVyID0gTnVtYmVyKGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICBpZiAoIShoYW5kbGVOdW1iZXIgPj0gMCAmJiBoYW5kbGVOdW1iZXIgPCBzY29wZV9IYW5kbGVOdW1iZXJzLmxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiBpbnZhbGlkIGhhbmRsZSBudW1iZXIsIGdvdDogXCIgKyBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTG9vayBib3RoIGJhY2t3YXJkIGFuZCBmb3J3YXJkLCBzaW5jZSB3ZSBkb24ndCB3YW50IHRoaXMgaGFuZGxlIHRvIFwicHVzaFwiIG90aGVyIGhhbmRsZXMgKCM5NjApO1xuICAgICAgICAgICAgLy8gVGhlIGV4YWN0SW5wdXQgYXJndW1lbnQgY2FuIGJlIHVzZWQgdG8gaWdub3JlIHNsaWRlciBzdGVwcGluZyAoIzQzNilcbiAgICAgICAgICAgIHNldEhhbmRsZShoYW5kbGVOdW1iZXIsIHJlc29sdmVUb1ZhbHVlKHZhbHVlLCBoYW5kbGVOdW1iZXIpLCB0cnVlLCB0cnVlLCBleGFjdElucHV0KTtcbiAgICAgICAgICAgIGZpcmVFdmVudChcInVwZGF0ZVwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgaWYgKGZpcmVTZXRFdmVudCkge1xuICAgICAgICAgICAgICAgIGZpcmVFdmVudChcInNldFwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEdldCB0aGUgc2xpZGVyIHZhbHVlLlxuICAgICAgICBmdW5jdGlvbiB2YWx1ZUdldCh1bmVuY29kZWQpIHtcbiAgICAgICAgICAgIGlmICh1bmVuY29kZWQgPT09IHZvaWQgMCkgeyB1bmVuY29kZWQgPSBmYWxzZTsgfVxuICAgICAgICAgICAgaWYgKHVuZW5jb2RlZCkge1xuICAgICAgICAgICAgICAgIC8vIHJldHVybiBhIGNvcHkgb2YgdGhlIHJhdyB2YWx1ZXNcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVfVmFsdWVzLmxlbmd0aCA9PT0gMSA/IHNjb3BlX1ZhbHVlc1swXSA6IHNjb3BlX1ZhbHVlcy5zbGljZSgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZXMgPSBzY29wZV9WYWx1ZXMubWFwKG9wdGlvbnMuZm9ybWF0LnRvKTtcbiAgICAgICAgICAgIC8vIElmIG9ubHkgb25lIGhhbmRsZSBpcyB1c2VkLCByZXR1cm4gYSBzaW5nbGUgdmFsdWUuXG4gICAgICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZXNbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJlbW92ZXMgY2xhc3NlcyBmcm9tIHRoZSByb290IGFuZCBlbXB0aWVzIGl0LlxuICAgICAgICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICAgICAgLy8gcmVtb3ZlIHByb3RlY3RlZCBpbnRlcm5hbCBsaXN0ZW5lcnNcbiAgICAgICAgICAgIHJlbW92ZUV2ZW50KElOVEVSTkFMX0VWRU5UX05TLmFyaWEpO1xuICAgICAgICAgICAgcmVtb3ZlRXZlbnQoSU5URVJOQUxfRVZFTlRfTlMudG9vbHRpcHMpO1xuICAgICAgICAgICAgT2JqZWN0LmtleXMob3B0aW9ucy5jc3NDbGFzc2VzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzcyhzY29wZV9UYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlc1trZXldKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgd2hpbGUgKHNjb3BlX1RhcmdldC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgc2NvcGVfVGFyZ2V0LnJlbW92ZUNoaWxkKHNjb3BlX1RhcmdldC5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlbGV0ZSBzY29wZV9UYXJnZXQubm9VaVNsaWRlcjtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZXROZXh0U3RlcHNGb3JIYW5kbGUoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICB2YXIgbG9jYXRpb24gPSBzY29wZV9Mb2NhdGlvbnNbaGFuZGxlTnVtYmVyXTtcbiAgICAgICAgICAgIHZhciBuZWFyYnlTdGVwcyA9IHNjb3BlX1NwZWN0cnVtLmdldE5lYXJieVN0ZXBzKGxvY2F0aW9uKTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHNjb3BlX1ZhbHVlc1toYW5kbGVOdW1iZXJdO1xuICAgICAgICAgICAgdmFyIGluY3JlbWVudCA9IG5lYXJieVN0ZXBzLnRoaXNTdGVwLnN0ZXA7XG4gICAgICAgICAgICB2YXIgZGVjcmVtZW50ID0gbnVsbDtcbiAgICAgICAgICAgIC8vIElmIHNuYXBwZWQsIGRpcmVjdGx5IHVzZSBkZWZpbmVkIHN0ZXAgdmFsdWVcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnNuYXApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSAtIG5lYXJieVN0ZXBzLnN0ZXBCZWZvcmUuc3RhcnRWYWx1ZSB8fCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBuZWFyYnlTdGVwcy5zdGVwQWZ0ZXIuc3RhcnRWYWx1ZSAtIHZhbHVlIHx8IG51bGwsXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZSBuZXh0IHZhbHVlIGluIHRoaXMgc3RlcCBtb3ZlcyBpbnRvIHRoZSBuZXh0IHN0ZXAsXG4gICAgICAgICAgICAvLyB0aGUgaW5jcmVtZW50IGlzIHRoZSBzdGFydCBvZiB0aGUgbmV4dCBzdGVwIC0gdGhlIGN1cnJlbnQgdmFsdWVcbiAgICAgICAgICAgIGlmIChpbmNyZW1lbnQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlICsgaW5jcmVtZW50ID4gbmVhcmJ5U3RlcHMuc3RlcEFmdGVyLnN0YXJ0VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5jcmVtZW50ID0gbmVhcmJ5U3RlcHMuc3RlcEFmdGVyLnN0YXJ0VmFsdWUgLSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgdmFsdWUgaXMgYmV5b25kIHRoZSBzdGFydGluZyBwb2ludFxuICAgICAgICAgICAgaWYgKHZhbHVlID4gbmVhcmJ5U3RlcHMudGhpc1N0ZXAuc3RhcnRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGRlY3JlbWVudCA9IG5lYXJieVN0ZXBzLnRoaXNTdGVwLnN0ZXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChuZWFyYnlTdGVwcy5zdGVwQmVmb3JlLnN0ZXAgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgZGVjcmVtZW50ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBhIGhhbmRsZSBpcyBhdCB0aGUgc3RhcnQgb2YgYSBzdGVwLCBpdCBhbHdheXMgc3RlcHMgYmFjayBpbnRvIHRoZSBwcmV2aW91cyBzdGVwIGZpcnN0XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkZWNyZW1lbnQgPSB2YWx1ZSAtIG5lYXJieVN0ZXBzLnN0ZXBCZWZvcmUuaGlnaGVzdFN0ZXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBOb3csIGlmIGF0IHRoZSBzbGlkZXIgZWRnZXMsIHRoZXJlIGlzIG5vIGluL2RlY3JlbWVudFxuICAgICAgICAgICAgaWYgKGxvY2F0aW9uID09PSAxMDApIHtcbiAgICAgICAgICAgICAgICBpbmNyZW1lbnQgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobG9jYXRpb24gPT09IDApIHtcbiAgICAgICAgICAgICAgICBkZWNyZW1lbnQgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQXMgcGVyICMzOTEsIHRoZSBjb21wYXJpc29uIGZvciB0aGUgZGVjcmVtZW50IHN0ZXAgY2FuIGhhdmUgc29tZSByb3VuZGluZyBpc3N1ZXMuXG4gICAgICAgICAgICB2YXIgc3RlcERlY2ltYWxzID0gc2NvcGVfU3BlY3RydW0uY291bnRTdGVwRGVjaW1hbHMoKTtcbiAgICAgICAgICAgIC8vIFJvdW5kIHBlciAjMzkxXG4gICAgICAgICAgICBpZiAoaW5jcmVtZW50ICE9PSBudWxsICYmIGluY3JlbWVudCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBpbmNyZW1lbnQgPSBOdW1iZXIoaW5jcmVtZW50LnRvRml4ZWQoc3RlcERlY2ltYWxzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGVjcmVtZW50ICE9PSBudWxsICYmIGRlY3JlbWVudCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBkZWNyZW1lbnQgPSBOdW1iZXIoZGVjcmVtZW50LnRvRml4ZWQoc3RlcERlY2ltYWxzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gW2RlY3JlbWVudCwgaW5jcmVtZW50XTtcbiAgICAgICAgfVxuICAgICAgICAvLyBHZXQgdGhlIGN1cnJlbnQgc3RlcCBzaXplIGZvciB0aGUgc2xpZGVyLlxuICAgICAgICBmdW5jdGlvbiBnZXROZXh0U3RlcHMoKSB7XG4gICAgICAgICAgICByZXR1cm4gc2NvcGVfSGFuZGxlTnVtYmVycy5tYXAoZ2V0TmV4dFN0ZXBzRm9ySGFuZGxlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBVcGRhdGFibGU6IG1hcmdpbiwgbGltaXQsIHBhZGRpbmcsIHN0ZXAsIHJhbmdlLCBhbmltYXRlLCBzbmFwXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZU9wdGlvbnMob3B0aW9uc1RvVXBkYXRlLCBmaXJlU2V0RXZlbnQpIHtcbiAgICAgICAgICAgIC8vIFNwZWN0cnVtIGlzIGNyZWF0ZWQgdXNpbmcgdGhlIHJhbmdlLCBzbmFwLCBkaXJlY3Rpb24gYW5kIHN0ZXAgb3B0aW9ucy5cbiAgICAgICAgICAgIC8vICdzbmFwJyBhbmQgJ3N0ZXAnIGNhbiBiZSB1cGRhdGVkLlxuICAgICAgICAgICAgLy8gSWYgJ3NuYXAnIGFuZCAnc3RlcCcgYXJlIG5vdCBwYXNzZWQsIHRoZXkgc2hvdWxkIHJlbWFpbiB1bmNoYW5nZWQuXG4gICAgICAgICAgICB2YXIgdiA9IHZhbHVlR2V0KCk7XG4gICAgICAgICAgICB2YXIgdXBkYXRlQWJsZSA9IFtcbiAgICAgICAgICAgICAgICBcIm1hcmdpblwiLFxuICAgICAgICAgICAgICAgIFwibGltaXRcIixcbiAgICAgICAgICAgICAgICBcInBhZGRpbmdcIixcbiAgICAgICAgICAgICAgICBcInJhbmdlXCIsXG4gICAgICAgICAgICAgICAgXCJhbmltYXRlXCIsXG4gICAgICAgICAgICAgICAgXCJzbmFwXCIsXG4gICAgICAgICAgICAgICAgXCJzdGVwXCIsXG4gICAgICAgICAgICAgICAgXCJmb3JtYXRcIixcbiAgICAgICAgICAgICAgICBcInBpcHNcIixcbiAgICAgICAgICAgICAgICBcInRvb2x0aXBzXCIsXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgLy8gT25seSBjaGFuZ2Ugb3B0aW9ucyB0aGF0IHdlJ3JlIGFjdHVhbGx5IHBhc3NlZCB0byB1cGRhdGUuXG4gICAgICAgICAgICB1cGRhdGVBYmxlLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBmb3IgdW5kZWZpbmVkLiBudWxsIHJlbW92ZXMgdGhlIHZhbHVlLlxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zVG9VcGRhdGVbbmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbE9wdGlvbnNbbmFtZV0gPSBvcHRpb25zVG9VcGRhdGVbbmFtZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgbmV3T3B0aW9ucyA9IHRlc3RPcHRpb25zKG9yaWdpbmFsT3B0aW9ucyk7XG4gICAgICAgICAgICAvLyBMb2FkIG5ldyBvcHRpb25zIGludG8gdGhlIHNsaWRlciBzdGF0ZVxuICAgICAgICAgICAgdXBkYXRlQWJsZS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnNUb1VwZGF0ZVtuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnNbbmFtZV0gPSBuZXdPcHRpb25zW25hbWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2NvcGVfU3BlY3RydW0gPSBuZXdPcHRpb25zLnNwZWN0cnVtO1xuICAgICAgICAgICAgLy8gTGltaXQsIG1hcmdpbiBhbmQgcGFkZGluZyBkZXBlbmQgb24gdGhlIHNwZWN0cnVtIGJ1dCBhcmUgc3RvcmVkIG91dHNpZGUgb2YgaXQuICgjNjc3KVxuICAgICAgICAgICAgb3B0aW9ucy5tYXJnaW4gPSBuZXdPcHRpb25zLm1hcmdpbjtcbiAgICAgICAgICAgIG9wdGlvbnMubGltaXQgPSBuZXdPcHRpb25zLmxpbWl0O1xuICAgICAgICAgICAgb3B0aW9ucy5wYWRkaW5nID0gbmV3T3B0aW9ucy5wYWRkaW5nO1xuICAgICAgICAgICAgLy8gVXBkYXRlIHBpcHMsIHJlbW92ZXMgZXhpc3RpbmcuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5waXBzKSB7XG4gICAgICAgICAgICAgICAgcGlwcyhvcHRpb25zLnBpcHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlUGlwcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVXBkYXRlIHRvb2x0aXBzLCByZW1vdmVzIGV4aXN0aW5nLlxuICAgICAgICAgICAgaWYgKG9wdGlvbnMudG9vbHRpcHMpIHtcbiAgICAgICAgICAgICAgICB0b29sdGlwcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlVG9vbHRpcHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEludmFsaWRhdGUgdGhlIGN1cnJlbnQgcG9zaXRpb25pbmcgc28gdmFsdWVTZXQgZm9yY2VzIGFuIHVwZGF0ZS5cbiAgICAgICAgICAgIHNjb3BlX0xvY2F0aW9ucyA9IFtdO1xuICAgICAgICAgICAgdmFsdWVTZXQoaXNTZXQob3B0aW9uc1RvVXBkYXRlLnN0YXJ0KSA/IG9wdGlvbnNUb1VwZGF0ZS5zdGFydCA6IHYsIGZpcmVTZXRFdmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSW5pdGlhbGl6YXRpb24gc3RlcHNcbiAgICAgICAgZnVuY3Rpb24gc2V0dXBTbGlkZXIoKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgdGhlIGJhc2UgZWxlbWVudCwgaW5pdGlhbGl6ZSBIVE1MIGFuZCBzZXQgY2xhc3Nlcy5cbiAgICAgICAgICAgIC8vIEFkZCBoYW5kbGVzIGFuZCBjb25uZWN0IGVsZW1lbnRzLlxuICAgICAgICAgICAgc2NvcGVfQmFzZSA9IGFkZFNsaWRlcihzY29wZV9UYXJnZXQpO1xuICAgICAgICAgICAgYWRkRWxlbWVudHMob3B0aW9ucy5jb25uZWN0LCBzY29wZV9CYXNlKTtcbiAgICAgICAgICAgIC8vIEF0dGFjaCB1c2VyIGV2ZW50cy5cbiAgICAgICAgICAgIGJpbmRTbGlkZXJFdmVudHMob3B0aW9ucy5ldmVudHMpO1xuICAgICAgICAgICAgLy8gVXNlIHRoZSBwdWJsaWMgdmFsdWUgbWV0aG9kIHRvIHNldCB0aGUgc3RhcnQgdmFsdWVzLlxuICAgICAgICAgICAgdmFsdWVTZXQob3B0aW9ucy5zdGFydCk7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5waXBzKSB7XG4gICAgICAgICAgICAgICAgcGlwcyhvcHRpb25zLnBpcHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMudG9vbHRpcHMpIHtcbiAgICAgICAgICAgICAgICB0b29sdGlwcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXJpYSgpO1xuICAgICAgICB9XG4gICAgICAgIHNldHVwU2xpZGVyKCk7XG4gICAgICAgIHZhciBzY29wZV9TZWxmID0ge1xuICAgICAgICAgICAgZGVzdHJveTogZGVzdHJveSxcbiAgICAgICAgICAgIHN0ZXBzOiBnZXROZXh0U3RlcHMsXG4gICAgICAgICAgICBvbjogYmluZEV2ZW50LFxuICAgICAgICAgICAgb2ZmOiByZW1vdmVFdmVudCxcbiAgICAgICAgICAgIGdldDogdmFsdWVHZXQsXG4gICAgICAgICAgICBzZXQ6IHZhbHVlU2V0LFxuICAgICAgICAgICAgc2V0SGFuZGxlOiB2YWx1ZVNldEhhbmRsZSxcbiAgICAgICAgICAgIHJlc2V0OiB2YWx1ZVJlc2V0LFxuICAgICAgICAgICAgLy8gRXhwb3NlZCBmb3IgdW5pdCB0ZXN0aW5nLCBkb24ndCB1c2UgdGhpcyBpbiB5b3VyIGFwcGxpY2F0aW9uLlxuICAgICAgICAgICAgX19tb3ZlSGFuZGxlczogZnVuY3Rpb24gKHVwd2FyZCwgcHJvcG9zYWwsIGhhbmRsZU51bWJlcnMpIHtcbiAgICAgICAgICAgICAgICBtb3ZlSGFuZGxlcyh1cHdhcmQsIHByb3Bvc2FsLCBzY29wZV9Mb2NhdGlvbnMsIGhhbmRsZU51bWJlcnMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9wdGlvbnM6IG9yaWdpbmFsT3B0aW9ucyxcbiAgICAgICAgICAgIHVwZGF0ZU9wdGlvbnM6IHVwZGF0ZU9wdGlvbnMsXG4gICAgICAgICAgICB0YXJnZXQ6IHNjb3BlX1RhcmdldCxcbiAgICAgICAgICAgIHJlbW92ZVBpcHM6IHJlbW92ZVBpcHMsXG4gICAgICAgICAgICByZW1vdmVUb29sdGlwczogcmVtb3ZlVG9vbHRpcHMsXG4gICAgICAgICAgICBnZXRQb3NpdGlvbnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVfTG9jYXRpb25zLnNsaWNlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0VG9vbHRpcHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVfVG9vbHRpcHM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0T3JpZ2luczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZV9IYW5kbGVzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBpcHM6IHBpcHMsIC8vIElzc3VlICM1OTRcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHNjb3BlX1NlbGY7XG4gICAgfVxuICAgIC8vIFJ1biB0aGUgc3RhbmRhcmQgaW5pdGlhbGl6ZXJcbiAgICBmdW5jdGlvbiBpbml0aWFsaXplKHRhcmdldCwgb3JpZ2luYWxPcHRpb25zKSB7XG4gICAgICAgIGlmICghdGFyZ2V0IHx8ICF0YXJnZXQubm9kZU5hbWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6IGNyZWF0ZSByZXF1aXJlcyBhIHNpbmdsZSBlbGVtZW50LCBnb3Q6IFwiICsgdGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUaHJvdyBhbiBlcnJvciBpZiB0aGUgc2xpZGVyIHdhcyBhbHJlYWR5IGluaXRpYWxpemVkLlxuICAgICAgICBpZiAodGFyZ2V0Lm5vVWlTbGlkZXIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6IFNsaWRlciB3YXMgYWxyZWFkeSBpbml0aWFsaXplZC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGVzdCB0aGUgb3B0aW9ucyBhbmQgY3JlYXRlIHRoZSBzbGlkZXIgZW52aXJvbm1lbnQ7XG4gICAgICAgIHZhciBvcHRpb25zID0gdGVzdE9wdGlvbnMob3JpZ2luYWxPcHRpb25zKTtcbiAgICAgICAgdmFyIGFwaSA9IHNjb3BlKHRhcmdldCwgb3B0aW9ucywgb3JpZ2luYWxPcHRpb25zKTtcbiAgICAgICAgdGFyZ2V0Lm5vVWlTbGlkZXIgPSBhcGk7XG4gICAgICAgIHJldHVybiBhcGk7XG4gICAgfVxuICAgIHZhciBub3Vpc2xpZGVyID0ge1xuICAgICAgICAvLyBFeHBvc2VkIGZvciB1bml0IHRlc3RpbmcsIGRvbid0IHVzZSB0aGlzIGluIHlvdXIgYXBwbGljYXRpb24uXG4gICAgICAgIF9fc3BlY3RydW06IFNwZWN0cnVtLFxuICAgICAgICAvLyBBIHJlZmVyZW5jZSB0byB0aGUgZGVmYXVsdCBjbGFzc2VzLCBhbGxvd3MgZ2xvYmFsIGNoYW5nZXMuXG4gICAgICAgIC8vIFVzZSB0aGUgY3NzQ2xhc3NlcyBvcHRpb24gZm9yIGNoYW5nZXMgdG8gb25lIHNsaWRlci5cbiAgICAgICAgY3NzQ2xhc3NlczogY3NzQ2xhc3NlcyxcbiAgICAgICAgY3JlYXRlOiBpbml0aWFsaXplLFxuICAgIH07XG5cbiAgICBleHBvcnRzLmNyZWF0ZSA9IGluaXRpYWxpemU7XG4gICAgZXhwb3J0cy5jc3NDbGFzc2VzID0gY3NzQ2xhc3NlcztcbiAgICBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IG5vdWlzbGlkZXI7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG59KSk7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3Vpc2xpZGVyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3Vpc2xpZGVyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9iYXNrZXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9iYXNrZXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Byb2R1Y3Rfc2VsZWN0aW9uLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcHJvZHVjdF9zZWxlY3Rpb24uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Byb2R1Y3RzX2ZpZWxkLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcHJvZHVjdHNfZmllbGQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3JhbmdlLXNsaWRlci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3JhbmdlLXNsaWRlci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2VsZWN0X2JveC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NlbGVjdF9ib3guY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHByb2R1Y3RzIH0gZnJvbSBcIi4uL3Byb2R1Y3RzX2ZpZWxkL3Byb2R1Y3RzXCI7XG5pbXBvcnQgJy4vYmFza2V0LmNzcyc7XG5jbGFzcyBCYXNrZXQge1xuICAgIGNvbnN0cnVjdG9yKGJhc2tldEZpZWxkLCBiYXNrZXRTY29yZSwgYmFza2V0VG90YWwpIHtcbiAgICAgICAgdGhpcy5iYXNrZXRGaWVsZCA9IGJhc2tldEZpZWxkO1xuICAgICAgICB0aGlzLmJhc2tldFNjb3JlID0gYmFza2V0U2NvcmU7XG4gICAgICAgIHRoaXMuYmFza2V0VG90YWwgPSBiYXNrZXRUb3RhbDtcbiAgICB9XG4gICAgYmFza2V0UmVzdWx0KCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBjb25zdCBidG5BZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ0bl9hZGRcIik7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlcicpO1xuICAgICAgICBjb25zdCB3cmFwcGVyQmFza2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXJfYmFza2V0Jyk7XG4gICAgICAgIGNvbnN0IGJhc2tldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYXNrZXRfY2lyY2xlJyk7XG4gICAgICAgIGNvbnN0IG9ubGluZVN0b3JlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9ubGluZV9zdG9yZScpO1xuICAgICAgICBjb25zdCBiYXNrZXRBcnJheVJlc3VsdCA9IFtdO1xuICAgICAgICBjb25zdCBiYXNrZXRTY29yZSA9IHRoaXMuYmFza2V0U2NvcmU7XG4gICAgICAgIGNvbnN0IGJhc2tldFRvdGFsID0gdGhpcy5iYXNrZXRUb3RhbDtcbiAgICAgICAgbGV0IHRvdGFsU2NvcmUgPSAwO1xuICAgICAgICAvLyDQstC+0LfQstGA0LDRgiDQuNC3IHN0b3JhZ2VcbiAgICAgICAgLy8g0L/QtdGA0LXQt9Cw0LPRgNGD0LfQutCwXG4gICAgICAgIG9ubGluZVN0b3JlID09PSBudWxsIHx8IG9ubGluZVN0b3JlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvbmxpbmVTdG9yZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8g0LTQvtCx0LDQstC70LXQvdC40LUg0YLQvtCy0LDRgNC+0LIg0LIg0LrQvtGA0LfQuNC90YNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBidG5BZGQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIChfYSA9IGJ0bkFkZFtpXSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG51bWJlcklkID0gYnRuQWRkW2ldLmRhdGFzZXQuYnRuO1xuICAgICAgICAgICAgICAgIGlmIChudW1iZXJJZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBub3dJZCA9ICtudW1iZXJJZDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJhc2tldEFycmF5UmVzdWx0LmZpbmQoKHgpID0+IHguaWQgPT09IG5vd0lkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFza2V0QXJyYXlSZXN1bHQuc3BsaWNlKGJhc2tldEFycmF5UmVzdWx0LmZpbmRJbmRleCgoeCkgPT4geC5pZCA9PT0gbm93SWQpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0bkFkZFtpXS5pbm5lclRleHQgPSAnQUREIFRPIENBUlQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxTY29yZSAtPSBwcm9kdWN0cy5maW5kKCh4KSA9PiB4LmlkID09PSBub3dJZCkucHJpY2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNrZXRBcnJheVJlc3VsdC5wdXNoKHByb2R1Y3RzLmZpbmQoKHgpID0+IHguaWQgPT09IG5vd0lkKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBidG5BZGRbaV0uaW5uZXJUZXh0ID0gJ0RST1AgRlJPTSBDQVJUJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsU2NvcmUgKz0gcHJvZHVjdHMuZmluZCgoeCkgPT4geC5pZCA9PT0gbm93SWQpLnByaWNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChiYXNrZXRTY29yZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFza2V0U2NvcmUuaW5uZXJUZXh0ID0gYCR7YmFza2V0QXJyYXlSZXN1bHQubGVuZ3RofWA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGJhc2tldFRvdGFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNrZXRUb3RhbC5pbm5lclRleHQgPSB0b3RhbFNjb3JlLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXJyU3RvcmFnZSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJhc2tldEFycmF5UmVzdWx0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJTdG9yYWdlLnB1c2goYmFza2V0QXJyYXlSZXN1bHRbaV0uaWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdiYXNrZXQnLCBhcnJTdG9yYWdlLmpvaW4oKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdiYXNrZXQnKSkge1xuICAgICAgICAgICAgY29uc3QgYXJyU3RvcmFnZUlkID0gKF9iID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Jhc2tldCcpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Iuc3BsaXQoJywnKTtcbiAgICAgICAgICAgIGlmIChhcnJTdG9yYWdlSWQpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChhcnJTdG9yYWdlSWQgPT09IG51bGwgfHwgYXJyU3RvcmFnZUlkID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhcnJTdG9yYWdlSWQubGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGJ0bkFkZFsrYXJyU3RvcmFnZUlkW2ldXS5jbGljaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDQutC+0YDQt9C40L3QsFxuICAgICAgICBiYXNrZXQgPT09IG51bGwgfHwgYmFza2V0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBiYXNrZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB3cmFwcGVyID09PSBudWxsIHx8IHdyYXBwZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnbm9uZScpO1xuICAgICAgICAgICAgd3JhcHBlckJhc2tldCA9PT0gbnVsbCB8fCB3cmFwcGVyQmFza2V0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiB3cmFwcGVyQmFza2V0LmNsYXNzTGlzdC5yZW1vdmUoJ25vbmUnKTtcbiAgICAgICAgICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZScpO1xuICAgICAgICAgICAgaWYgKGhvbWUpIHtcbiAgICAgICAgICAgICAgICBob21lLmNsYXNzTGlzdC5yZW1vdmUoJ25vbmUnKTtcbiAgICAgICAgICAgICAgICBob21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyID09PSBudWxsIHx8IHdyYXBwZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyQmFza2V0ID09PSBudWxsIHx8IHdyYXBwZXJCYXNrZXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHdyYXBwZXJCYXNrZXQuY2xhc3NMaXN0LmFkZCgnbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICBob21lLmNsYXNzTGlzdC5hZGQoJ25vbmUnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmFza2V0QXJyYXlSZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB3cmFwcGVyUHJvZHVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHdyYXBwZXJQcm9kdWN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnd3JhcHBlclByb2R1Y3QnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHByb2R1Y3ROYW1lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvZHVjdE5hbWUnKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgICAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0aXRsZScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgICAgIHByaWNlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpY2UnKTtcbiAgICAgICAgICAgICAgICBjb25zdCByYXRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgcmF0aW5nLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncmF0aW5nJyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgc3RvY2suc2V0QXR0cmlidXRlKCdjbGFzcycsICdzdG9jaycpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHByb2R1Y3RJbmZvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvZHVjdEluZm8nKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0Rm90byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHByb2R1Y3RGb3RvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvZHVjdEZvdG8nKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0Rm90b01pbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHByb2R1Y3RGb3RvTWluLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvZHVjdEZvdG9NaW4nKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0Rm90b01heCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHByb2R1Y3RGb3RvTWF4LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvZHVjdEZvdG9NYXgnKTtcbiAgICAgICAgICAgICAgICBsZXQgdXJsTWF4Rm90byA9IGJhc2tldEFycmF5UmVzdWx0W2ldLmltYWdlc1swXTtcbiAgICAgICAgICAgICAgICBwcm9kdWN0Rm90b01heC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dXJsTWF4Rm90b30pYDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBmID0gMDsgZiA8IGJhc2tldEFycmF5UmVzdWx0W2ldLmltYWdlcy5sZW5ndGggLSAxOyBmKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdEZvdG9JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RGb3RvSXRlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2R1Y3RGb3RvSXRlbScpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBiYXNrZXRBcnJheVJlc3VsdFtpXS5pbWFnZXNbZl07XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RGb3RvSXRlbS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dXJsfSlgO1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Rm90b01pbi5hcHBlbmQocHJvZHVjdEZvdG9JdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZvdG9JdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZvdG9NYXguc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3VybH0pYDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICB0aXRsZS5pbm5lclRleHQgPSBgJHtiYXNrZXRBcnJheVJlc3VsdFtpXS5icmFuZH0gICR7YmFza2V0QXJyYXlSZXN1bHRbaV0udGl0bGV9YDtcbiAgICAgICAgICAgICAgICBwcmljZS5pbm5lclRleHQgPSBgUHJpY2U6ICR7YmFza2V0QXJyYXlSZXN1bHRbaV0ucHJpY2V9YDtcbiAgICAgICAgICAgICAgICByYXRpbmcuaW5uZXJUZXh0ID0gYFJhdGluZzogJHtiYXNrZXRBcnJheVJlc3VsdFtpXS5yYXRpbmd9YDtcbiAgICAgICAgICAgICAgICBzdG9jay5pbm5lclRleHQgPSBgU3RvY2s6ICR7YmFza2V0QXJyYXlSZXN1bHRbaV0uc3RvY2t9YDtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBgUHJpY2U6ICR7YmFza2V0QXJyYXlSZXN1bHRbaV0uZGVzY3JpcHRpb259YDtcbiAgICAgICAgICAgICAgICB3cmFwcGVyQmFza2V0ID09PSBudWxsIHx8IHdyYXBwZXJCYXNrZXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHdyYXBwZXJCYXNrZXQuYXBwZW5kKHdyYXBwZXJQcm9kdWN0KTtcbiAgICAgICAgICAgICAgICB3cmFwcGVyUHJvZHVjdC5hcHBlbmQocHJvZHVjdE5hbWUsIHByb2R1Y3RJbmZvLCBwcm9kdWN0Rm90byk7XG4gICAgICAgICAgICAgICAgcHJvZHVjdE5hbWUuYXBwZW5kKHRpdGxlKTtcbiAgICAgICAgICAgICAgICBwcm9kdWN0SW5mby5hcHBlbmQocHJpY2UsIHJhdGluZywgc3RvY2ssIGRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgICBwcm9kdWN0Rm90by5hcHBlbmQocHJvZHVjdEZvdG9NaW4sIHByb2R1Y3RGb3RvTWF4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQmFza2V0O1xuIiwiaW1wb3J0ICcuL3Byb2R1Y3Rfc2VsZWN0aW9uLmNzcyc7XG5pbXBvcnQgeyBwcm9kdWN0cyB9IGZyb20gXCIuLi9wcm9kdWN0c1wiO1xuY2xhc3MgUHJvZHVjdFNlbGVjdGlvbiB7XG4gICAgY29uc3RydWN0b3IocHJvZHVjdHNGaWVsZFNlbGVjdGlvbiwgcmVzZXRGaWx0ZXJzLCBwcm9kdWN0c0ZpZWxkKSB7XG4gICAgICAgIHRoaXMucHJvZHVjdHNGaWVsZFNlbGVjdGlvbiA9IHByb2R1Y3RzRmllbGRTZWxlY3Rpb247XG4gICAgICAgIHRoaXMucmVzZXRGaWx0ZXJzID0gcmVzZXRGaWx0ZXJzO1xuICAgICAgICB0aGlzLnByb2R1Y3RzRmllbGQgPSBwcm9kdWN0c0ZpZWxkO1xuICAgIH1cbiAgICBwcm9kdWN0U2VsZWN0aW9uKCkge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lLCBfZiwgX2c7XG4gICAgICAgIGNvbnN0IGFycklkQ2F0ZWdvcnkgPSBbXTtcbiAgICAgICAgY29uc3QgYXJySWRCcmFuZCA9IFtdO1xuICAgICAgICBjb25zdCBhcnJJZFByaWNlID0gW107XG4gICAgICAgIGNvbnN0IGFycklkU3RvY2sgPSBbXTtcbiAgICAgICAgY29uc3QgYWxsQXJySWQgPSBbYXJySWRDYXRlZ29yeSwgYXJySWRCcmFuZCwgYXJySWRQcmljZSwgYXJySWRTdG9ja107XG4gICAgICAgIGNvbnN0IGFycklkID0gW107XG4gICAgICAgIGNvbnN0IHByb2RGaWVsZCA9IHRoaXMucHJvZHVjdHNGaWVsZFNlbGVjdGlvbjtcbiAgICAgICAgY29uc3QgcHJvZHVjdHNGaWVsZCA9IHRoaXMucHJvZHVjdHNGaWVsZDtcbiAgICAgICAgY29uc3QgYXJySWRTZXNzaW9uID0gW107XG4gICAgICAgIGNvbnN0IGVsZW1lbnRJbnB1dHNDYXRlZ29yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRlZ29yeScpO1xuICAgICAgICBjb25zdCBlbGVtZW50SW5wdXRzQnJhbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnJhbmQnKTtcbiAgICAgICAgY29uc3QgcmFuZ2VQcmljZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmljZUlucHV0Jyk7XG4gICAgICAgIGNvbnN0IHJhbmdlU3RvY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RvY2tJbnB1dCcpO1xuICAgICAgICBjb25zdCBub1Byb2R1Y3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIC8vINC/0L7Qu9GD0YfQtdC90LjQtSDQt9C90LDRh9C10L3QuNC5INC40Lcgc3RvcmFnZVxuICAgICAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnc2VsZWN0SW5wdXQnKSkge1xuICAgICAgICAgICAgY29uc3QgYXJyU2VsZWN0SW5wdXQgPSAoX2EgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdzZWxlY3RJbnB1dCcpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc3BsaXQoJywnKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudElucHV0c0NhdGVnb3J5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFyclNlbGVjdElucHV0KSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IG4gPSAwOyBuIDwgYXJyU2VsZWN0SW5wdXQubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50SW5wdXRzQ2F0ZWdvcnlbaV0uaWQgPT09IGFyclNlbGVjdElucHV0W25dKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudElucHV0c0NhdGVnb3J5W2ldLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtJbnB1dChlbGVtZW50SW5wdXRzQ2F0ZWdvcnlbaV0sIGFycklkQ2F0ZWdvcnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50SW5wdXRzQnJhbmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoYXJyU2VsZWN0SW5wdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgbiA9IDA7IG4gPCBhcnJTZWxlY3RJbnB1dC5sZW5ndGg7IG4rKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRJbnB1dHNCcmFuZFtpXS5pZCA9PT0gYXJyU2VsZWN0SW5wdXRbbl0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50SW5wdXRzQnJhbmRbaV0uY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya0lucHV0KGVsZW1lbnRJbnB1dHNCcmFuZFtpXSwgYXJySWRCcmFuZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3NsaWRlclByaWNlJykpIHtcbiAgICAgICAgICAgIGNvbnN0IGFyclN0b3JhZ2VWYWx1ZVByaWNlID0gKF9iID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnc2xpZGVyUHJpY2UnKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICBpZiAoYXJyU3RvcmFnZVZhbHVlUHJpY2UpIHtcbiAgICAgICAgICAgICAgICAoX2MgPSByYW5nZVByaWNlLm5vVWlTbGlkZXIpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5zZXQoWythcnJTdG9yYWdlVmFsdWVQcmljZVswXSwgK2FyclN0b3JhZ2VWYWx1ZVByaWNlWzFdXSk7XG4gICAgICAgICAgICAgICAgd29ya1NsaWRlcihhcnJTdG9yYWdlVmFsdWVQcmljZSwgYXJySWRQcmljZSwgJ3ByaWNlJywgJ3NsaWRlclByaWNlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3NsaWRlclN0b2NrJykpIHtcbiAgICAgICAgICAgIGNvbnN0IGFyclN0b3JhZ2VWYWx1ZVN0b2NrID0gKF9kID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnc2xpZGVyU3RvY2snKSkgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICBpZiAoYXJyU3RvcmFnZVZhbHVlU3RvY2spIHtcbiAgICAgICAgICAgICAgICAoX2UgPSByYW5nZVN0b2NrLm5vVWlTbGlkZXIpID09PSBudWxsIHx8IF9lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZS5zZXQoWythcnJTdG9yYWdlVmFsdWVTdG9ja1swXSwgK2FyclN0b3JhZ2VWYWx1ZVN0b2NrWzFdXSk7XG4gICAgICAgICAgICAgICAgd29ya1NsaWRlcihhcnJTdG9yYWdlVmFsdWVTdG9jaywgYXJySWRTdG9jaywgJ3N0b2NrJywgJ3NsaWRlclN0b2NrJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g0YTRg9C90LrRhtC40Y8g0YHQsdGA0L7RgdCwINC/0L7Qu9GPINCy0YvQsdC+0YDQsFxuICAgICAgICBjb25zdCByZXNldCA9IHRoaXMucmVzZXRGaWx0ZXJzO1xuICAgICAgICBmdW5jdGlvbiByZXNldEZpbHRlcnMoKSB7XG4gICAgICAgICAgICByZXNldCA9PT0gbnVsbCB8fCByZXNldCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVzZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgICAgICBlbGVtZW50SW5wdXRzQ2F0ZWdvcnkuZm9yRWFjaCgoeCkgPT4geC5jaGVja2VkID0gZmFsc2UpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnRJbnB1dHNCcmFuZC5mb3JFYWNoKCh4KSA9PiB4LmNoZWNrZWQgPSBmYWxzZSk7XG4gICAgICAgICAgICAgICAgKF9hID0gcmFuZ2VQcmljZS5ub1VpU2xpZGVyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVzZXQoKTtcbiAgICAgICAgICAgICAgICAoX2IgPSByYW5nZVN0b2NrLm5vVWlTbGlkZXIpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5yZXNldCgpO1xuICAgICAgICAgICAgICAgIGFycklkLnNwbGljZSgwKTtcbiAgICAgICAgICAgICAgICBwcm9kRmllbGQuZm9yRWFjaCgoeCkgPT4geC5jbGFzc0xpc3QucmVtb3ZlKCdub25lJykpO1xuICAgICAgICAgICAgICAgIGFycklkU2Vzc2lvbi5zcGxpY2UoMCk7XG4gICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UuY2xlYXIoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJlc2V0RmlsdGVycygpO1xuICAgICAgICAvLyDRgdC+0LfQtNCw0L3QuNC1INC80LDRgdGB0LjQstC+0LIg0L/QviDQutCw0YLQtdCz0L7RgNC40Y/QvFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRJbnB1dHNDYXRlZ29yeS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZWxlbWVudElucHV0c0NhdGVnb3J5W2ldLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgd29ya0lucHV0KGVsZW1lbnRJbnB1dHNDYXRlZ29yeVtpXSwgYXJySWRDYXRlZ29yeSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudElucHV0c0JyYW5kLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBlbGVtZW50SW5wdXRzQnJhbmRbaV0ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB3b3JrSW5wdXQoZWxlbWVudElucHV0c0JyYW5kW2ldLCBhcnJJZEJyYW5kKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgLy8g0YTRg9C90LrRhtC40Y8gaW5wdXRcbiAgICAgICAgZnVuY3Rpb24gd29ya0lucHV0KGFyciwgYXJySWQpIHtcbiAgICAgICAgICAgIGNyZWF0ZUFycklucHV0KGFyciwgYXJySWQpO1xuICAgICAgICAgICAgY3JlYXRlQXJySWQoKTtcbiAgICAgICAgICAgIGNyZWF0ZVByb2R1Y3RGaWVsZCgpO1xuICAgICAgICAgICAgaWYgKGFycklkU2Vzc2lvbi5pbmNsdWRlcygoYXJyLmlkKSkpIHtcbiAgICAgICAgICAgICAgICBhcnJJZFNlc3Npb24uc3BsaWNlKGFycklkU2Vzc2lvbi5pbmRleE9mKGFyci5pZCksIDEpO1xuICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3NlbGVjdElucHV0JywgYXJySWRTZXNzaW9uLmpvaW4oKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhcnJJZFNlc3Npb24ucHVzaChhcnIuaWQpO1xuICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3NlbGVjdElucHV0JywgYXJySWRTZXNzaW9uLmpvaW4oKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJhbmdlUHJpY2UpIHtcbiAgICAgICAgICAgIChfZiA9IHJhbmdlUHJpY2Uubm9VaVNsaWRlcikgPT09IG51bGwgfHwgX2YgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9mLm9uKCdjaGFuZ2UnLCAodmFsdWVzKSA9PiB7XG4gICAgICAgICAgICAgICAgd29ya1NsaWRlcih2YWx1ZXMsIGFycklkUHJpY2UsICdwcmljZScsICdzbGlkZXJQcmljZScpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJhbmdlU3RvY2spIHtcbiAgICAgICAgICAgIChfZyA9IHJhbmdlU3RvY2subm9VaVNsaWRlcikgPT09IG51bGwgfHwgX2cgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9nLm9uKCdjaGFuZ2UnLCAodmFsdWVzKSA9PiB7XG4gICAgICAgICAgICAgICAgd29ya1NsaWRlcih2YWx1ZXMsIGFycklkU3RvY2ssICdzdG9jaycsICdzbGlkZXJTdG9jaycpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g0YTRg9C90LrRhtC40Y8g0YHQu9Cw0LnQtNC10YDQsFxuICAgICAgICBmdW5jdGlvbiB3b3JrU2xpZGVyKHZhbHVlLCBhcnIsIG5hbWUsIG5hbWVTdG9yYWdlKSB7XG4gICAgICAgICAgICBhcnIuc3BsaWNlKDApO1xuICAgICAgICAgICAgY3JlYXRlQXJyU2xpZGVyKHZhbHVlLCBhcnIsIG5hbWUpO1xuICAgICAgICAgICAgY3JlYXRlQXJySWQoKTtcbiAgICAgICAgICAgIGNyZWF0ZVByb2R1Y3RGaWVsZCgpO1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShuYW1lU3RvcmFnZSwgYCR7dmFsdWVbMF19LCR7dmFsdWVbMV19YCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g0YTRg9C90LrRhtC40Y8g0YHQvtC30LTQsNC90LjRjyDQvNCw0YHRgdC40LLQvtCyICjQvtGC0YHQu9C10LbQuNCy0LDQtdGCICdjaGVja2JveCcpXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUFycklucHV0KGl0ZW1BcnIsIGFycikge1xuICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgIGlmIChpdGVtQXJyLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhcnJJZFBsdXMgPSAoX2EgPSBpdGVtQXJyLmRhdGFzZXQuaWQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgICAgIGlmIChhcnJJZFBsdXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFycklkUGx1cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoYXJyLmluY2x1ZGVzKCthcnJJZFBsdXNbal0pKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKCthcnJJZFBsdXNbal0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXJySWRNaW51cyA9IChfYiA9IGl0ZW1BcnIuZGF0YXNldC5pZCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICAgICAgaWYgKGFycklkTWludXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBuID0gMDsgbiA8IGFycklkTWludXMubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyci5zcGxpY2UoYXJyLmluZGV4T2YoK2FycklkTWludXNbbl0pLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDRhNGD0L3QutGG0LjRjyDRgdC+0LfQtNCw0L3QuNGPINC80LDRgdGB0LjQstC+0LIgKNC+0YLRgdC70LXQttC40LLQsNC10YIg0YHQu9Cw0LnQtNC10YApXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUFyclNsaWRlcih2YWx1ZXMsIGFyciwgbmFtZSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9kdWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICgrdmFsdWVzWzBdIDw9IHByb2R1Y3RzW2ldW25hbWVdICYmIHByb2R1Y3RzW2ldW25hbWVdIDw9ICt2YWx1ZXNbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2gocHJvZHVjdHNbaV0uaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDRgdC+0LfQtNCw0L3QuNC1INGE0LjQvdCw0LvRjNC90L7Qs9C+INC80LDRgdGB0LjQstCwINCy0YvQsdC+0YDQsCDQv9GA0L7QtNGD0LrRgtC+0LJcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlQXJySWQoKSB7XG4gICAgICAgICAgICBhcnJJZC5zcGxpY2UoMCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbEFycklkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFsbEFycklkW2ldLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXJySWQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxBcnJJZFtpXS5mb3JFYWNoKCh4KSA9PiBhcnJJZC5wdXNoKHgpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFyciA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhcnJJZC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbGxBcnJJZFtpXS5pbmNsdWRlcyhhcnJJZFtqXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goYXJySWRbal0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFycklkLnNwbGljZSgwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJJZC5wdXNoKGFycltpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJySWQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJySWQucHVzaCgwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDRhNGD0L3QutGG0LjRjyDQv9C+0YHRgtGA0L7QtdC90LjRjyDQv9C+0LvRjyDQv9GA0L7QtNGD0LrQvtCyXG4gICAgICAgIG5vUHJvZHVjdHMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdub1Byb2R1Y3RzJyk7XG4gICAgICAgIG5vUHJvZHVjdHMuaW5uZXJUZXh0ID0gJ05vIHByb2R1Y3RzIGZvdW5kISc7XG4gICAgICAgIG5vUHJvZHVjdHMuY2xhc3NMaXN0LmFkZCgnbm9uZScpO1xuICAgICAgICBwcm9kdWN0c0ZpZWxkID09PSBudWxsIHx8IHByb2R1Y3RzRmllbGQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByb2R1Y3RzRmllbGQuYXBwZW5kKG5vUHJvZHVjdHMpO1xuICAgICAgICBmdW5jdGlvbiBjcmVhdGVQcm9kdWN0RmllbGQoKSB7XG4gICAgICAgICAgICBwcm9kRmllbGQuZm9yRWFjaCgoeCkgPT4geC5jbGFzc0xpc3QuYWRkKCdub25lJykpO1xuICAgICAgICAgICAgaWYgKGFycklkWzBdID09PSAwKSB7XG4gICAgICAgICAgICAgICAgbm9Qcm9kdWN0cy5jbGFzc0xpc3QucmVtb3ZlKCdub25lJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBub1Byb2R1Y3RzLmNsYXNzTGlzdC5hZGQoJ25vbmUnKTtcbiAgICAgICAgICAgICAgICBpZiAoYXJySWQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IG4gPSAwOyBuIDwgYXJySWQubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2RGaWVsZFthcnJJZFtuXSAtIDFdLmNsYXNzTGlzdC5yZW1vdmUoJ25vbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZEZpZWxkLmZvckVhY2goKHgpID0+IHguY2xhc3NMaXN0LnJlbW92ZSgnbm9uZScpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0U2VsZWN0aW9uO1xuIiwiZXhwb3J0IGNvbnN0IHByb2R1Y3RzID0gW3sgXCJpZFwiOiAxLCBcInRpdGxlXCI6IFwiaVBob25lIDlcIiwgXCJkZXNjcmlwdGlvblwiOiBcIkFuIGFwcGxlIG1vYmlsZSB3aGljaCBpcyBub3RoaW5nIGxpa2UgYXBwbGVcIiwgXCJwcmljZVwiOiA1NDksIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEyLjk2LCBcInJhdGluZ1wiOiA0LjY5LCBcInN0b2NrXCI6IDk0LCBcImJyYW5kXCI6IFwiQXBwbGVcIiwgXCJjYXRlZ29yeVwiOiBcInNtYXJ0cGhvbmVzXCIsIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xL3RodW1ibmFpbC5qcGdcIiwgXCJpbWFnZXNcIjogW1wiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xLzEuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xLzMuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xLzQuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xL3RodW1ibmFpbC5qcGdcIl0gfSwgeyBcImlkXCI6IDIsIFwidGl0bGVcIjogXCJpUGhvbmUgWFwiLCBcImRlc2NyaXB0aW9uXCI6IFwiU0lNLUZyZWUsIE1vZGVsIEExOTIxMSA2LjUtaW5jaCBTdXBlciBSZXRpbmEgSEQgZGlzcGxheSB3aXRoIE9MRUQgdGVjaG5vbG9neSBBMTIgQmlvbmljIGNoaXAgd2l0aCAuLi5cIiwgXCJwcmljZVwiOiA4OTksIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE3Ljk0LCBcInJhdGluZ1wiOiA0LjQ0LCBcInN0b2NrXCI6IDM0LCBcImJyYW5kXCI6IFwiQXBwbGVcIiwgXCJjYXRlZ29yeVwiOiBcInNtYXJ0cGhvbmVzXCIsIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yL3RodW1ibmFpbC5qcGdcIiwgXCJpbWFnZXNcIjogW1wiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yLzEuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yLzIuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yLzMuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yL3RodW1ibmFpbC5qcGdcIl0gfSwgeyBcImlkXCI6IDMsIFwidGl0bGVcIjogXCJTYW1zdW5nIFVuaXZlcnNlIDlcIiwgXCJkZXNjcmlwdGlvblwiOiBcIlNhbXN1bmcncyBuZXcgdmFyaWFudCB3aGljaCBnb2VzIGJleW9uZCBHYWxheHkgdG8gdGhlIFVuaXZlcnNlXCIsIFwicHJpY2VcIjogMTI0OSwgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTUuNDYsIFwicmF0aW5nXCI6IDQuMDksIFwic3RvY2tcIjogMzYsIFwiYnJhbmRcIjogXCJTYW1zdW5nXCIsIFwiY2F0ZWdvcnlcIjogXCJzbWFydHBob25lc1wiLCBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMy90aHVtYm5haWwuanBnXCIsIFwiaW1hZ2VzXCI6IFtcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMy8xLmpwZ1wiXSB9LCB7IFwiaWRcIjogNCwgXCJ0aXRsZVwiOiBcIk9QUE9GMTlcIiwgXCJkZXNjcmlwdGlvblwiOiBcIk9QUE8gRjE5IGlzIG9mZmljaWFsbHkgYW5ub3VuY2VkIG9uIEFwcmlsIDIwMjEuXCIsIFwicHJpY2VcIjogMjgwLCBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNy45MSwgXCJyYXRpbmdcIjogNC4zLCBcInN0b2NrXCI6IDEyMywgXCJicmFuZFwiOiBcIk9QUE9cIiwgXCJjYXRlZ29yeVwiOiBcInNtYXJ0cGhvbmVzXCIsIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80L3RodW1ibmFpbC5qcGdcIiwgXCJpbWFnZXNcIjogW1wiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80LzEuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80LzIuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80LzMuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80LzQuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80L3RodW1ibmFpbC5qcGdcIl0gfSwgeyBcImlkXCI6IDUsIFwidGl0bGVcIjogXCJIdWF3ZWkgUDMwXCIsIFwiZGVzY3JpcHRpb25cIjogXCJIdWF3ZWnigJlzIHJlLWJhZGdlZCBQMzAgUHJvIE5ldyBFZGl0aW9uIHdhcyBvZmZpY2lhbGx5IHVudmVpbGVkIHllc3RlcmRheSBpbiBHZXJtYW55IGFuZCBub3cgdGhlIGRldmljZSBoYXMgbWFkZSBpdHMgd2F5IHRvIHRoZSBVSy5cIiwgXCJwcmljZVwiOiA0OTksIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEwLjU4LCBcInJhdGluZ1wiOiA0LjA5LCBcInN0b2NrXCI6IDMyLCBcImJyYW5kXCI6IFwiSHVhd2VpXCIsIFwiY2F0ZWdvcnlcIjogXCJzbWFydHBob25lc1wiLCBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNS90aHVtYm5haWwuanBnXCIsIFwiaW1hZ2VzXCI6IFtcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNS8xLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNS8yLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNS8zLmpwZ1wiXSB9LCB7IFwiaWRcIjogNiwgXCJ0aXRsZVwiOiBcIk1hY0Jvb2sgUHJvXCIsIFwiZGVzY3JpcHRpb25cIjogXCJNYWNCb29rIFBybyAyMDIxIHdpdGggbWluaS1MRUQgZGlzcGxheSBtYXkgbGF1bmNoIGJldHdlZW4gU2VwdGVtYmVyLCBOb3ZlbWJlclwiLCBcInByaWNlXCI6IDE3NDksIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDExLjAyLCBcInJhdGluZ1wiOiA0LjU3LCBcInN0b2NrXCI6IDgzLCBcImJyYW5kXCI6IFwiQVBQbGVcIiwgXCJjYXRlZ29yeVwiOiBcImxhcHRvcHNcIiwgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzYvdGh1bWJuYWlsLnBuZ1wiLCBcImltYWdlc1wiOiBbXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzYvMS5wbmdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzYvMi5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzYvMy5wbmdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzYvNC5qcGdcIl0gfSwgeyBcImlkXCI6IDcsIFwidGl0bGVcIjogXCJTYW1zdW5nIEdhbGF4eSBCb29rXCIsIFwiZGVzY3JpcHRpb25cIjogXCJTYW1zdW5nIEdhbGF4eSBCb29rIFMgKDIwMjApIExhcHRvcCBXaXRoIEludGVsIExha2VmaWVsZCBDaGlwLCA4R0Igb2YgUkFNIExhdW5jaGVkXCIsIFwicHJpY2VcIjogMTQ5OSwgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogNC4xNSwgXCJyYXRpbmdcIjogNC4yNSwgXCJzdG9ja1wiOiA1MCwgXCJicmFuZFwiOiBcIlNhbXN1bmdcIiwgXCJjYXRlZ29yeVwiOiBcImxhcHRvcHNcIiwgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcvdGh1bWJuYWlsLmpwZ1wiLCBcImltYWdlc1wiOiBbXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcvMS5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcvMi5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcvMy5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcvdGh1bWJuYWlsLmpwZ1wiXSB9LCB7IFwiaWRcIjogOCwgXCJ0aXRsZVwiOiBcIk1pY3Jvc29mdCBTdXJmYWNlIExhcHRvcCA0XCIsIFwiZGVzY3JpcHRpb25cIjogXCJTdHlsZSBhbmQgc3BlZWQuIFN0YW5kIG91dCBvbiBIRCB2aWRlbyBjYWxscyBiYWNrZWQgYnkgU3R1ZGlvIE1pY3MuIENhcHR1cmUgaWRlYXMgb24gdGhlIHZpYnJhbnQgdG91Y2hzY3JlZW4uXCIsIFwicHJpY2VcIjogMTQ5OSwgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTAuMjMsIFwicmF0aW5nXCI6IDQuNDMsIFwic3RvY2tcIjogNjgsIFwiYnJhbmRcIjogXCJNaWNyb3NvZnQgU3VyZmFjZVwiLCBcImNhdGVnb3J5XCI6IFwibGFwdG9wc1wiLCBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOC90aHVtYm5haWwuanBnXCIsIFwiaW1hZ2VzXCI6IFtcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOC8xLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOC8yLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOC8zLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOC80LmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOC90aHVtYm5haWwuanBnXCJdIH0sIHsgXCJpZFwiOiA5LCBcInRpdGxlXCI6IFwiSW5maW5peCBJTkJPT0tcIiwgXCJkZXNjcmlwdGlvblwiOiBcIkluZmluaXggSW5ib29rIFgxIENpMyAxMHRoIDhHQiAyNTZHQiAxNCBXaW4xMCBHcmV5IOKAkyAxIFllYXIgV2FycmFudHlcIiwgXCJwcmljZVwiOiAxMDk5LCBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMS44MywgXCJyYXRpbmdcIjogNC41NCwgXCJzdG9ja1wiOiA5NiwgXCJicmFuZFwiOiBcIkluZmluaXhcIiwgXCJjYXRlZ29yeVwiOiBcImxhcHRvcHNcIiwgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkvdGh1bWJuYWlsLmpwZ1wiLCBcImltYWdlc1wiOiBbXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkvMS5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkvMi5wbmdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkvMy5wbmdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkvNC5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkvdGh1bWJuYWlsLmpwZ1wiXSB9LCB7IFwiaWRcIjogMTAsIFwidGl0bGVcIjogXCJIUCBQYXZpbGlvbiAxNS1ESzEwNTZXTVwiLCBcImRlc2NyaXB0aW9uXCI6IFwiSFAgUGF2aWxpb24gMTUtREsxMDU2V00gR2FtaW5nIExhcHRvcCAxMHRoIEdlbiBDb3JlIGk1LCA4R0IsIDI1NkdCIFNTRCwgR1RYIDE2NTAgNEdCLCBXaW5kb3dzIDEwXCIsIFwicHJpY2VcIjogMTA5OSwgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogNi4xOCwgXCJyYXRpbmdcIjogNC40MywgXCJzdG9ja1wiOiA4OSwgXCJicmFuZFwiOiBcIkhQIFBhdmlsaW9uXCIsIFwiY2F0ZWdvcnlcIjogXCJsYXB0b3BzXCIsIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMC90aHVtYm5haWwuanBlZ1wiLCBcImltYWdlc1wiOiBbXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEwLzEuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMC8yLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTAvMy5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEwL3RodW1ibmFpbC5qcGVnXCJdIH0sIHsgXCJpZFwiOiAxMSwgXCJ0aXRsZVwiOiBcInBlcmZ1bWUgT2lsXCIsIFwiZGVzY3JpcHRpb25cIjogXCJNZWdhIERpc2NvdW50LCBJbXByZXNzaW9uIG9mIEFjcXVhIERpIEdpbyBieSBHaW9yZ2lvQXJtYW5pIGNvbmNlbnRyYXRlZCBhdHRhciBwZXJmdW1lIE9pbFwiLCBcInByaWNlXCI6IDEzLCBcImRpc2NvdW50UGVyY2VudGFnZVwiOiA4LjQsIFwicmF0aW5nXCI6IDQuMjYsIFwic3RvY2tcIjogNjUsIFwiYnJhbmRcIjogXCJJbXByZXNzaW9uIG9mIEFjcXVhIERpIEdpb1wiLCBcImNhdGVnb3J5XCI6IFwiZnJhZ3JhbmNlc1wiLCBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTEvdGh1bWJuYWlsLmpwZ1wiLCBcImltYWdlc1wiOiBbXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzExLzEuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMS8yLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTEvMy5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzExL3RodW1ibmFpbC5qcGdcIl0gfSwgeyBcImlkXCI6IDEyLCBcInRpdGxlXCI6IFwiQnJvd24gUGVyZnVtZVwiLCBcImRlc2NyaXB0aW9uXCI6IFwiUm95YWxfTWlyYWdlIFNwb3J0IEJyb3duIFBlcmZ1bWUgZm9yIE1lbiAmIFdvbWVuIC0gMTIwbWxcIiwgXCJwcmljZVwiOiA0MCwgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTUuNjYsIFwicmF0aW5nXCI6IDQsIFwic3RvY2tcIjogNTIsIFwiYnJhbmRcIjogXCJSb3lhbF9NaXJhZ2VcIiwgXCJjYXRlZ29yeVwiOiBcImZyYWdyYW5jZXNcIiwgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEyL3RodW1ibmFpbC5qcGdcIiwgXCJpbWFnZXNcIjogW1wiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMi8xLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTIvMi5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEyLzMucG5nXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMi80LmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTIvdGh1bWJuYWlsLmpwZ1wiXSB9LCB7IFwiaWRcIjogMTMsIFwidGl0bGVcIjogXCJGb2cgU2NlbnQgWHByZXNzaW8gUGVyZnVtZVwiLCBcImRlc2NyaXB0aW9uXCI6IFwiUHJvZHVjdCBkZXRhaWxzIG9mIEJlc3QgRm9nIFNjZW50IFhwcmVzc2lvIFBlcmZ1bWUgMTAwbWwgRm9yIE1lbiBjb29sIGxvbmcgbGFzdGluZyBwZXJmdW1lcyBmb3IgTWVuXCIsIFwicHJpY2VcIjogMTMsIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDguMTQsIFwicmF0aW5nXCI6IDQuNTksIFwic3RvY2tcIjogNjEsIFwiYnJhbmRcIjogXCJGb2cgU2NlbnQgWHByZXNzaW9cIiwgXCJjYXRlZ29yeVwiOiBcImZyYWdyYW5jZXNcIiwgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEzL3RodW1ibmFpbC53ZWJwXCIsIFwiaW1hZ2VzXCI6IFtcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTMvMS5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEzLzIucG5nXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMy8zLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTMvNC5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEzL3RodW1ibmFpbC53ZWJwXCJdIH0sIHsgXCJpZFwiOiAxNCwgXCJ0aXRsZVwiOiBcIk5vbi1BbGNvaG9saWMgQ29uY2VudHJhdGVkIFBlcmZ1bWUgT2lsXCIsIFwiZGVzY3JpcHRpb25cIjogXCJPcmlnaW5hbCBBbCBNdW5ha2jCriBieSBNYWhhbCBBbCBNdXNrIHwgT3VyIEltcHJlc3Npb24gb2YgQ2xpbWF0ZSB8IDZtbCBOb24tQWxjb2hvbGljIENvbmNlbnRyYXRlZCBQZXJmdW1lIE9pbFwiLCBcInByaWNlXCI6IDEyMCwgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTUuNiwgXCJyYXRpbmdcIjogNC4yMSwgXCJzdG9ja1wiOiAxMTQsIFwiYnJhbmRcIjogXCJBbCBNdW5ha2hcIiwgXCJjYXRlZ29yeVwiOiBcImZyYWdyYW5jZXNcIiwgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE0L3RodW1ibmFpbC5qcGdcIiwgXCJpbWFnZXNcIjogW1wiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xNC8xLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTQvMi5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE0LzMuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xNC90aHVtYm5haWwuanBnXCJdIH0sIHsgXCJpZFwiOiAxNSwgXCJ0aXRsZVwiOiBcIkVhdSBEZSBQZXJmdW1lIFNwcmF5XCIsIFwiZGVzY3JpcHRpb25cIjogXCJHZW51aW5lICBBbC1SZWhhYiBzcHJheSBwZXJmdW1lIGZyb20gVUFFL1NhdWRpIEFyYWJpYS9ZZW1lbiBIaWdoIFF1YWxpdHlcIiwgXCJwcmljZVwiOiAzMCwgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTAuOTksIFwicmF0aW5nXCI6IDQuNywgXCJzdG9ja1wiOiAxMDUsIFwiYnJhbmRcIjogXCJMb3JkIC0gQWwtUmVoYWJcIiwgXCJjYXRlZ29yeVwiOiBcImZyYWdyYW5jZXNcIiwgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE1L3RodW1ibmFpbC5qcGdcIiwgXCJpbWFnZXNcIjogW1wiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xNS8xLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTUvMi5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE1LzMuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xNS80LmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTUvdGh1bWJuYWlsLmpwZ1wiXSB9LCB7IFwiaWRcIjogMTYsIFwidGl0bGVcIjogXCJIeWFsdXJvbmljIEFjaWQgU2VydW1cIiwgXCJkZXNjcmlwdGlvblwiOiBcIkwnT3LDg8KpYWwgUGFyaXMgaW50cm9kdWNlcyBIeWFsdXJvbiBFeHBlcnQgUmVwbHVtcGluZyBTZXJ1bSBmb3JtdWxhdGVkIHdpdGggMS41JSBIeWFsdXJvbmljIEFjaWRcIiwgXCJwcmljZVwiOiAxOSwgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTMuMzEsIFwicmF0aW5nXCI6IDQuODMsIFwic3RvY2tcIjogMTEwLCBcImJyYW5kXCI6IFwiTCdPcmVhbCBQYXJpc1wiLCBcImNhdGVnb3J5XCI6IFwic2tpbmNhcmVcIiwgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE2L3RodW1ibmFpbC5qcGdcIiwgXCJpbWFnZXNcIjogW1wiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xNi8xLnBuZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTYvMi53ZWJwXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xNi8zLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTYvNC5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE2L3RodW1ibmFpbC5qcGdcIl0gfSwgeyBcImlkXCI6IDE3LCBcInRpdGxlXCI6IFwiVHJlZSBPaWwgMzBtbFwiLCBcImRlc2NyaXB0aW9uXCI6IFwiVGVhIHRyZWUgb2lsIGNvbnRhaW5zIGEgbnVtYmVyIG9mIGNvbXBvdW5kcywgaW5jbHVkaW5nIHRlcnBpbmVuLTQtb2wsIHRoYXQgaGF2ZSBiZWVuIHNob3duIHRvIGtpbGwgY2VydGFpbiBiYWN0ZXJpYSxcIiwgXCJwcmljZVwiOiAxMiwgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogNC4wOSwgXCJyYXRpbmdcIjogNC41MiwgXCJzdG9ja1wiOiA3OCwgXCJicmFuZFwiOiBcIkhlbWFuaSBUZWFcIiwgXCJjYXRlZ29yeVwiOiBcInNraW5jYXJlXCIsIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xNy90aHVtYm5haWwuanBnXCIsIFwiaW1hZ2VzXCI6IFtcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTcvMS5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE3LzIuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xNy8zLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTcvdGh1bWJuYWlsLmpwZ1wiXSB9LCB7IFwiaWRcIjogMTgsIFwidGl0bGVcIjogXCJPaWwgRnJlZSBNb2lzdHVyaXplciAxMDBtbFwiLCBcImRlc2NyaXB0aW9uXCI6IFwiRGVybWl2ZSBPaWwgRnJlZSBNb2lzdHVyaXplciB3aXRoIFNQRiAyMCBpcyBzcGVjaWZpY2FsbHkgZm9ybXVsYXRlZCB3aXRoIGNlcmFtaWRlcywgaHlhbHVyb25pYyBhY2lkICYgc3Vuc2NyZWVuLlwiLCBcInByaWNlXCI6IDQwLCBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMy4xLCBcInJhdGluZ1wiOiA0LjU2LCBcInN0b2NrXCI6IDg4LCBcImJyYW5kXCI6IFwiRGVybWl2ZVwiLCBcImNhdGVnb3J5XCI6IFwic2tpbmNhcmVcIiwgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE4L3RodW1ibmFpbC5qcGdcIiwgXCJpbWFnZXNcIjogW1wiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xOC8xLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTgvMi5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE4LzMuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xOC80LmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTgvdGh1bWJuYWlsLmpwZ1wiXSB9LCB7IFwiaWRcIjogMTksIFwidGl0bGVcIjogXCJTa2luIEJlYXV0eSBTZXJ1bS5cIiwgXCJkZXNjcmlwdGlvblwiOiBcIlByb2R1Y3QgbmFtZTogcm9yZWMgY29sbGFnZW4gaHlhbHVyb25pYyBhY2lkIHdoaXRlIGZhY2Ugc2VydW0gcmljZU5ldCB3ZWlnaHQ6IDE1IG1cIiwgXCJwcmljZVwiOiA0NiwgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTAuNjgsIFwicmF0aW5nXCI6IDQuNDIsIFwic3RvY2tcIjogNTQsIFwiYnJhbmRcIjogXCJST1JFQyBXaGl0ZSBSaWNlXCIsIFwiY2F0ZWdvcnlcIjogXCJza2luY2FyZVwiLCBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTkvdGh1bWJuYWlsLmpwZ1wiLCBcImltYWdlc1wiOiBbXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE5LzEuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xOS8yLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTkvMy5wbmdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE5L3RodW1ibmFpbC5qcGdcIl0gfSwgeyBcImlkXCI6IDIwLCBcInRpdGxlXCI6IFwiRnJlY2tsZSBUcmVhdG1lbnQgQ3JlYW0tIDE1Z21cIiwgXCJkZXNjcmlwdGlvblwiOiBcIkZhaXIgJiBDbGVhciBpcyBQYWtpc3RhbidzIG9ubHkgcHVyZSBGcmVja2xlIGNyZWFtIHdoaWNoIGhlbHBzZmFkZSBGcmVja2xlcywgRGFya3Nwb3RzIGFuZCBwaWdtZW50cy4gTWVyY3VyeSBsZXZlbCBpcyAwJSwgc28gdGhlcmUgYXJlIG5vIHNpZGUgZWZmZWN0cy5cIiwgXCJwcmljZVwiOiA3MCwgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTYuOTksIFwicmF0aW5nXCI6IDQuMDYsIFwic3RvY2tcIjogMTQwLCBcImJyYW5kXCI6IFwiRmFpciAmIENsZWFyXCIsIFwiY2F0ZWdvcnlcIjogXCJza2luY2FyZVwiLCBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjAvdGh1bWJuYWlsLmpwZ1wiLCBcImltYWdlc1wiOiBbXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIwLzEuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yMC8yLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjAvMy5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIwLzQuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yMC90aHVtYm5haWwuanBnXCJdIH0sIHsgXCJpZFwiOiAyMSwgXCJ0aXRsZVwiOiBcIi0gRGFhbCBNYXNvb3IgNTAwIGdyYW1zXCIsIFwiZGVzY3JpcHRpb25cIjogXCJGaW5lIHF1YWxpdHkgQnJhbmRlZCBQcm9kdWN0IEtlZXAgaW4gYSBjb29sIGFuZCBkcnkgcGxhY2VcIiwgXCJwcmljZVwiOiAyMCwgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogNC44MSwgXCJyYXRpbmdcIjogNC40NCwgXCJzdG9ja1wiOiAxMzMsIFwiYnJhbmRcIjogXCJTYWFmICYgS2hhYXNcIiwgXCJjYXRlZ29yeVwiOiBcImdyb2Nlcmllc1wiLCBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjEvdGh1bWJuYWlsLnBuZ1wiLCBcImltYWdlc1wiOiBbXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIxLzEucG5nXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yMS8yLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjEvMy5qcGdcIl0gfSwgeyBcImlkXCI6IDIyLCBcInRpdGxlXCI6IFwiRWxib3cgTWFjYXJvbmkgLSA0MDAgZ21cIiwgXCJkZXNjcmlwdGlvblwiOiBcIlByb2R1Y3QgZGV0YWlscyBvZiBCYWtlIFBhcmxvciBCaWcgRWxib3cgTWFjYXJvbmkgLSA0MDAgZ21cIiwgXCJwcmljZVwiOiAxNCwgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTUuNTgsIFwicmF0aW5nXCI6IDQuNTcsIFwic3RvY2tcIjogMTQ2LCBcImJyYW5kXCI6IFwiQmFrZSBQYXJsb3IgQmlnXCIsIFwiY2F0ZWdvcnlcIjogXCJncm9jZXJpZXNcIiwgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIyL3RodW1ibmFpbC5qcGdcIiwgXCJpbWFnZXNcIjogW1wiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yMi8xLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjIvMi5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIyLzMuanBnXCJdIH0sIHsgXCJpZFwiOiAyMywgXCJ0aXRsZVwiOiBcIk9yYW5nZSBFc3NlbmNlIEZvb2QgRmxhdm91XCIsIFwiZGVzY3JpcHRpb25cIjogXCJTcGVjaWZpY2F0aW9ucyBvZiBPcmFuZ2UgRXNzZW5jZSBGb29kIEZsYXZvdXIgRm9yIENha2VzIGFuZCBCYWtpbmcgRm9vZCBJdGVtXCIsIFwicHJpY2VcIjogMTQsIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDguMDQsIFwicmF0aW5nXCI6IDQuODUsIFwic3RvY2tcIjogMjYsIFwiYnJhbmRcIjogXCJCYWtpbmcgRm9vZCBJdGVtc1wiLCBcImNhdGVnb3J5XCI6IFwiZ3JvY2VyaWVzXCIsIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yMy90aHVtYm5haWwuanBnXCIsIFwiaW1hZ2VzXCI6IFtcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjMvMS5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIzLzIuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yMy8zLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjMvNC5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIzL3RodW1ibmFpbC5qcGdcIl0gfSwgeyBcImlkXCI6IDI0LCBcInRpdGxlXCI6IFwiY2VyZWFscyBtdWVzbGkgZnJ1aXQgbnV0c1wiLCBcImRlc2NyaXB0aW9uXCI6IFwib3JpZ2luYWwgZmF1amkgY2VyZWFsIG11ZXNsaSAyNTBnbSBib3ggcGFjayBvcmlnaW5hbCBmYXVqaSBjZXJlYWxzIG11ZXNsaSBmcnVpdCBudXRzIGZsYWtlcyBicmVha2Zhc3QgY2VyZWFsIGJyZWFrIGZhc3QgZmF1amljZXJlYWxzIGNlcmVscyBjZXJlbCBmb2ppIGZvdWppXCIsIFwicHJpY2VcIjogNDYsIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE2LjgsIFwicmF0aW5nXCI6IDQuOTQsIFwic3RvY2tcIjogMTEzLCBcImJyYW5kXCI6IFwiZmF1amlcIiwgXCJjYXRlZ29yeVwiOiBcImdyb2Nlcmllc1wiLCBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjQvdGh1bWJuYWlsLmpwZ1wiLCBcImltYWdlc1wiOiBbXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI0LzEuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNC8yLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjQvMy5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI0LzQuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNC90aHVtYm5haWwuanBnXCJdIH0sIHsgXCJpZFwiOiAyNSwgXCJ0aXRsZVwiOiBcIkd1bGFiIFBvd2RlciA1MCBHcmFtXCIsIFwiZGVzY3JpcHRpb25cIjogXCJEcnkgUm9zZSBGbG93ZXIgUG93ZGVyIEd1bGFiIFBvd2RlciA1MCBHcmFtIOKAoiBUcmVhdHMgV291bmRzXCIsIFwicHJpY2VcIjogNzAsIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEzLjU4LCBcInJhdGluZ1wiOiA0Ljg3LCBcInN0b2NrXCI6IDQ3LCBcImJyYW5kXCI6IFwiRHJ5IFJvc2VcIiwgXCJjYXRlZ29yeVwiOiBcImdyb2Nlcmllc1wiLCBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjUvdGh1bWJuYWlsLmpwZ1wiLCBcImltYWdlc1wiOiBbXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI1LzEucG5nXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNS8yLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjUvMy5wbmdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI1LzQuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNS90aHVtYm5haWwuanBnXCJdIH0sIHsgXCJpZFwiOiAyNiwgXCJ0aXRsZVwiOiBcIlBsYW50IEhhbmdlciBGb3IgSG9tZVwiLCBcImRlc2NyaXB0aW9uXCI6IFwiQm9obyBEZWNvciBQbGFudCBIYW5nZXIgRm9yIEhvbWUgV2FsbCBEZWNvcmF0aW9uIE1hY3JhbWUgV2FsbCBIYW5naW5nIFNoZWxmXCIsIFwicHJpY2VcIjogNDEsIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE3Ljg2LCBcInJhdGluZ1wiOiA0LjA4LCBcInN0b2NrXCI6IDEzMSwgXCJicmFuZFwiOiBcIkJvaG8gRGVjb3JcIiwgXCJjYXRlZ29yeVwiOiBcImhvbWUtZGVjb3JhdGlvblwiLCBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjYvdGh1bWJuYWlsLmpwZ1wiLCBcImltYWdlc1wiOiBbXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI2LzEuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNi8yLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjYvMy5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI2LzQuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNi81LmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjYvdGh1bWJuYWlsLmpwZ1wiXSB9LCB7IFwiaWRcIjogMjcsIFwidGl0bGVcIjogXCJGbHlpbmcgV29vZGVuIEJpcmRcIiwgXCJkZXNjcmlwdGlvblwiOiBcIlBhY2thZ2UgSW5jbHVkZSA2IEJpcmRzIHdpdGggQWRoZXNpdmUgVGFwZSBTaGFwZTogM0QgU2hhcGVkIFdvb2RlbiBCaXJkcyBNYXRlcmlhbDogV29vZGVuIE1ERiwgTGFtaW5hdGVkIDMuNW1tXCIsIFwicHJpY2VcIjogNTEsIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE1LjU4LCBcInJhdGluZ1wiOiA0LjQxLCBcInN0b2NrXCI6IDE3LCBcImJyYW5kXCI6IFwiRmx5aW5nIFdvb2RlblwiLCBcImNhdGVnb3J5XCI6IFwiaG9tZS1kZWNvcmF0aW9uXCIsIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNy90aHVtYm5haWwud2VicFwiLCBcImltYWdlc1wiOiBbXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI3LzEuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNy8yLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjcvMy5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI3LzQuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNy90aHVtYm5haWwud2VicFwiXSB9LCB7IFwiaWRcIjogMjgsIFwidGl0bGVcIjogXCIzRCBFbWJlbGxpc2htZW50IEFydCBMYW1wXCIsIFwiZGVzY3JpcHRpb25cIjogXCIzRCBsZWQgbGFtcCBzdGlja2VyIFdhbGwgc3RpY2tlciAzZCB3YWxsIGFydCBsaWdodCBvbi9vZmYgYnV0dG9uICBjZWxsIG9wZXJhdGVkIChpbmNsdWRlZClcIiwgXCJwcmljZVwiOiAyMCwgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTYuNDksIFwicmF0aW5nXCI6IDQuODIsIFwic3RvY2tcIjogNTQsIFwiYnJhbmRcIjogXCJMRUQgTGlnaHRzXCIsIFwiY2F0ZWdvcnlcIjogXCJob21lLWRlY29yYXRpb25cIiwgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI4L3RodW1ibmFpbC5qcGdcIiwgXCJpbWFnZXNcIjogW1wiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yOC8xLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjgvMi5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI4LzMucG5nXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yOC80LmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjgvdGh1bWJuYWlsLmpwZ1wiXSB9LCB7IFwiaWRcIjogMjksIFwidGl0bGVcIjogXCJIYW5kY3JhZnQgQ2hpbmVzZSBzdHlsZVwiLCBcImRlc2NyaXB0aW9uXCI6IFwiSGFuZGNyYWZ0IENoaW5lc2Ugc3R5bGUgYXJ0IGx1eHVyeSBwYWxhY2UgaG90ZWwgdmlsbGEgbWFuc2lvbiBob21lIGRlY29yIGNlcmFtaWMgdmFzZSB3aXRoIGJyYXNzIGZydWl0IHBsYXRlXCIsIFwicHJpY2VcIjogNjAsIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE1LjM0LCBcInJhdGluZ1wiOiA0LjQ0LCBcInN0b2NrXCI6IDcsIFwiYnJhbmRcIjogXCJsdXh1cnkgcGFsYWNlXCIsIFwiY2F0ZWdvcnlcIjogXCJob21lLWRlY29yYXRpb25cIiwgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI5L3RodW1ibmFpbC53ZWJwXCIsIFwiaW1hZ2VzXCI6IFtcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjkvMS5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI5LzIuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yOS8zLndlYnBcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI5LzQud2VicFwiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjkvdGh1bWJuYWlsLndlYnBcIl0gfSwgeyBcImlkXCI6IDMwLCBcInRpdGxlXCI6IFwiS2V5IEhvbGRlclwiLCBcImRlc2NyaXB0aW9uXCI6IFwiQXR0cmFjdGl2ZSBEZXNpZ25NZXRhbGxpYyBtYXRlcmlhbEZvdXIga2V5IGhvb2tzUmVsaWFibGUgJiBEdXJhYmxlUHJlbWl1bSBRdWFsaXR5XCIsIFwicHJpY2VcIjogMzAsIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDIuOTIsIFwicmF0aW5nXCI6IDQuOTIsIFwic3RvY2tcIjogNTQsIFwiYnJhbmRcIjogXCJHb2xkZW5cIiwgXCJjYXRlZ29yeVwiOiBcImhvbWUtZGVjb3JhdGlvblwiLCBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzAvdGh1bWJuYWlsLmpwZ1wiLCBcImltYWdlc1wiOiBbXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMwLzEuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zMC8yLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzAvMy5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMwL3RodW1ibmFpbC5qcGdcIl0gfSwgeyBcImlkXCI6IDMxLCBcInRpdGxlXCI6IFwiTW9ybmFkaSBWZWx2ZXQgQmVkXCIsIFwiZGVzY3JpcHRpb25cIjogXCJNb3JuYWRpIFZlbHZldCBCZWQgQmFzZSB3aXRoIEhlYWRib2FyZCBTbGF0cyBTdXBwb3J0IENsYXNzaWMgU3R5bGUgQmVkcm9vbSBGdXJuaXR1cmUgQmVkIFNldFwiLCBcInByaWNlXCI6IDQwLCBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNywgXCJyYXRpbmdcIjogNC4xNiwgXCJzdG9ja1wiOiAxNDAsIFwiYnJhbmRcIjogXCJGdXJuaXR1cmUgQmVkIFNldFwiLCBcImNhdGVnb3J5XCI6IFwiZnVybml0dXJlXCIsIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zMS90aHVtYm5haWwuanBnXCIsIFwiaW1hZ2VzXCI6IFtcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzEvMS5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMxLzIuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zMS8zLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzEvNC5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMxL3RodW1ibmFpbC5qcGdcIl0gfSwgeyBcImlkXCI6IDMyLCBcInRpdGxlXCI6IFwiU29mYSBmb3IgQ29mZmUgQ2FmZVwiLCBcImRlc2NyaXB0aW9uXCI6IFwiUmF0dHRhbiBPdXRkb29yIGZ1cm5pdHVyZSBTZXQgV2F0ZXJwcm9vZiAgUmF0dGFuIFNvZmEgZm9yIENvZmZlIENhZmVcIiwgXCJwcmljZVwiOiA1MCwgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTUuNTksIFwicmF0aW5nXCI6IDQuNzQsIFwic3RvY2tcIjogMzAsIFwiYnJhbmRcIjogXCJSYXR0dGFuIE91dGRvb3JcIiwgXCJjYXRlZ29yeVwiOiBcImZ1cm5pdHVyZVwiLCBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzIvdGh1bWJuYWlsLmpwZ1wiLCBcImltYWdlc1wiOiBbXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMyLzEuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zMi8yLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzIvMy5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMyL3RodW1ibmFpbC5qcGdcIl0gfSwgeyBcImlkXCI6IDMzLCBcInRpdGxlXCI6IFwiMyBUaWVyIENvcm5lciBTaGVsdmVzXCIsIFwiZGVzY3JpcHRpb25cIjogXCIzIFRpZXIgQ29ybmVyIFNoZWx2ZXMgfCAzIFBDcyBXYWxsIE1vdW50IEtpdGNoZW4gU2hlbGYgfCBGbG9hdGluZyBCZWRyb29tIFNoZWxmXCIsIFwicHJpY2VcIjogNzAwLCBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNywgXCJyYXRpbmdcIjogNC4zMSwgXCJzdG9ja1wiOiAxMDYsIFwiYnJhbmRcIjogXCJLaXRjaGVuIFNoZWxmXCIsIFwiY2F0ZWdvcnlcIjogXCJmdXJuaXR1cmVcIiwgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMzL3RodW1ibmFpbC5qcGdcIiwgXCJpbWFnZXNcIjogW1wiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zMy8xLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzMvMi5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMzLzMuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zMy80LmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzMvdGh1bWJuYWlsLmpwZ1wiXSB9LCB7IFwiaWRcIjogMzQsIFwidGl0bGVcIjogXCJQbGFzdGljIFRhYmxlXCIsIFwiZGVzY3JpcHRpb25cIjogXCJW77u/ZXJ5IGdvb2QgcXVhbGl0eSBwbGFzdGljIHRhYmxlIGZvciBtdWx0aSBwdXJwb3NlIG5vdyBpbiByZWFzb25hYmxlIHByaWNlXCIsIFwicHJpY2VcIjogNTAsIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDQsIFwicmF0aW5nXCI6IDQuMDEsIFwic3RvY2tcIjogMTM2LCBcImJyYW5kXCI6IFwiTXVsdGkgUHVycG9zZVwiLCBcImNhdGVnb3J5XCI6IFwiZnVybml0dXJlXCIsIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNC90aHVtYm5haWwuanBnXCIsIFwiaW1hZ2VzXCI6IFtcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzQvMS5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM0LzIuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNC8zLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzQvNC5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM0L3RodW1ibmFpbC5qcGdcIl0gfSwgeyBcImlkXCI6IDM1LCBcInRpdGxlXCI6IFwiMyBET09SIFBPUlRBQkxFXCIsIFwiZGVzY3JpcHRpb25cIjogXCJNYXRlcmlhbDogU3RhaW5sZXNzIFN0ZWVsIGFuZCBGYWJyaWMgIEl0ZW0gU2l6ZTogMTEwIGNtIHggNDUgY20geCAxNzUgY20gUGFja2FnZSBDb250ZW50czogMSBTdG9yYWdlIFdhcmRyb2JlXCIsIFwicHJpY2VcIjogNDEsIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDcuOTgsIFwicmF0aW5nXCI6IDQuMDYsIFwic3RvY2tcIjogNjgsIFwiYnJhbmRcIjogXCJBbW5hTWFydFwiLCBcImNhdGVnb3J5XCI6IFwiZnVybml0dXJlXCIsIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNS90aHVtYm5haWwuanBnXCIsIFwiaW1hZ2VzXCI6IFtcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzUvMS5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM1LzIuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNS8zLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzUvNC5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM1L3RodW1ibmFpbC5qcGdcIl0gfSwgeyBcImlkXCI6IDM2LCBcInRpdGxlXCI6IFwiU2xlZXZlIFNoaXJ0IFdvbWVuc1wiLCBcImRlc2NyaXB0aW9uXCI6IFwiQ290dG9uIFNvbGlkIENvbG9yIFByb2Zlc3Npb25hbCBXZWFyIFNsZWV2ZSBTaGlydCBXb21lbnMgV29yayBCbG91c2VzIFdob2xlc2FsZSBDbG90aGluZyBDYXN1YWwgUGxhaW4gQ3VzdG9tIFRvcCBPRU0gQ3VzdG9taXplZFwiLCBcInByaWNlXCI6IDkwLCBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMC44OSwgXCJyYXRpbmdcIjogNC4yNiwgXCJzdG9ja1wiOiAzOSwgXCJicmFuZFwiOiBcIlByb2Zlc3Npb25hbCBXZWFyXCIsIFwiY2F0ZWdvcnlcIjogXCJ0b3BzXCIsIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNi90aHVtYm5haWwuanBnXCIsIFwiaW1hZ2VzXCI6IFtcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzYvMS5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM2LzIud2VicFwiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzYvMy53ZWJwXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNi80LmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzYvdGh1bWJuYWlsLmpwZ1wiXSB9LCB7IFwiaWRcIjogMzcsIFwidGl0bGVcIjogXCJhbmsgVG9wcyBmb3IgV29tZW5zL0dpcmxzXCIsIFwiZGVzY3JpcHRpb25cIjogXCJQQUNLIE9GIDMgQ0FNSVNPTEVTICxWRVJZIENPTUZPUlRBQkxFIFNPRlQgQ09UVE9OIFNUVUZGLCBDT01GT1JUQUJMRSBJTiBBTEwgRk9VUiBTRUFTT05TXCIsIFwicHJpY2VcIjogNTAsIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEyLjA1LCBcInJhdGluZ1wiOiA0LjUyLCBcInN0b2NrXCI6IDEwNywgXCJicmFuZFwiOiBcIlNvZnQgQ290dG9uXCIsIFwiY2F0ZWdvcnlcIjogXCJ0b3BzXCIsIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNy90aHVtYm5haWwuanBnXCIsIFwiaW1hZ2VzXCI6IFtcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzcvMS5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM3LzIuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNy8zLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzcvNC5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM3L3RodW1ibmFpbC5qcGdcIl0gfSwgeyBcImlkXCI6IDM4LCBcInRpdGxlXCI6IFwic3VibGltYXRpb24gcGxhaW4ga2lkcyB0YW5rXCIsIFwiZGVzY3JpcHRpb25cIjogXCJzdWJsaW1hdGlvbiBwbGFpbiBraWRzIHRhbmsgdG9wcyB3aG9sZXNhbGVcIiwgXCJwcmljZVwiOiAxMDAsIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDExLjEyLCBcInJhdGluZ1wiOiA0LjgsIFwic3RvY2tcIjogMjAsIFwiYnJhbmRcIjogXCJTb2Z0IENvdHRvblwiLCBcImNhdGVnb3J5XCI6IFwidG9wc1wiLCBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzgvdGh1bWJuYWlsLmpwZ1wiLCBcImltYWdlc1wiOiBbXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM4LzEucG5nXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zOC8yLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzgvMy5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM4LzQuanBnXCJdIH0sIHsgXCJpZFwiOiAzOSwgXCJ0aXRsZVwiOiBcIldvbWVuIFN3ZWF0ZXJzIFdvb2xcIiwgXCJkZXNjcmlwdGlvblwiOiBcIjIwMjEgQ3VzdG9tIFdpbnRlciBGYWxsIFplYnJhIEtuaXQgQ3JvcCBUb3AgV29tZW4gU3dlYXRlcnMgV29vbCBNb2hhaXIgQ29zIEN1c3RvbWl6ZSBDcmV3IE5lY2sgV29tZW4nIFMgQ3JvcCBUb3AgU3dlYXRlclwiLCBcInByaWNlXCI6IDYwMCwgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTcuMiwgXCJyYXRpbmdcIjogNC41NSwgXCJzdG9ja1wiOiA1NSwgXCJicmFuZFwiOiBcIlRvcCBTd2VhdGVyXCIsIFwiY2F0ZWdvcnlcIjogXCJ0b3BzXCIsIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zOS90aHVtYm5haWwuanBnXCIsIFwiaW1hZ2VzXCI6IFtcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzkvMS5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM5LzIuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zOS8zLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzkvNC5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM5L3RodW1ibmFpbC5qcGdcIl0gfSwgeyBcImlkXCI6IDQwLCBcInRpdGxlXCI6IFwid29tZW4gd2ludGVyIGNsb3RoZXNcIiwgXCJkZXNjcmlwdGlvblwiOiBcIndvbWVuIHdpbnRlciBjbG90aGVzIHRoaWNrIGZsZWVjZSBob29kaWUgdG9wIHdpdGggc3dlYXQgcGFudGpvZ2dlciB3b21lbiBzd2VhdHN1aXQgc2V0IGpvZ2dlcnMgcGFudHMgdHdvIHBpZWNlIHBhbnRzIHNldFwiLCBcInByaWNlXCI6IDU3LCBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMy4zOSwgXCJyYXRpbmdcIjogNC45MSwgXCJzdG9ja1wiOiA4NCwgXCJicmFuZFwiOiBcIlRvcCBTd2VhdGVyXCIsIFwiY2F0ZWdvcnlcIjogXCJ0b3BzXCIsIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80MC90aHVtYm5haWwuanBnXCIsIFwiaW1hZ2VzXCI6IFtcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDAvMS5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQwLzIuanBnXCJdIH0sIHsgXCJpZFwiOiA0MSwgXCJ0aXRsZVwiOiBcIk5JR0hUIFNVSVRcIiwgXCJkZXNjcmlwdGlvblwiOiBcIk5JR0hUIFNVSVQgUkVEIE1JQ0tZIE1PVVNFLi4gIEZvciBHaXJscy4gRmFudGFzdGljIFN1aXRzLlwiLCBcInByaWNlXCI6IDU1LCBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNS4wNSwgXCJyYXRpbmdcIjogNC42NSwgXCJzdG9ja1wiOiAyMSwgXCJicmFuZFwiOiBcIlJFRCBNSUNLWSBNT1VTRS4uXCIsIFwiY2F0ZWdvcnlcIjogXCJ3b21lbnMtZHJlc3Nlc1wiLCBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDEvdGh1bWJuYWlsLndlYnBcIiwgXCJpbWFnZXNcIjogW1wiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80MS8xLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDEvMi53ZWJwXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80MS8zLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDEvNC5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQxL3RodW1ibmFpbC53ZWJwXCJdIH0sIHsgXCJpZFwiOiA0MiwgXCJ0aXRsZVwiOiBcIlN0aWNoZWQgS3VydGEgcGx1cyB0cm91c2VyXCIsIFwiZGVzY3JpcHRpb25cIjogXCJGQUJSSUM6IExJTEVJTiBDSEVTVDogMjEgTEVOR0hUOiAzNyBUUk9VU0VSOiAoMzgpIDpBUkFCSUMgTElMRUlOXCIsIFwicHJpY2VcIjogODAsIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE1LjM3LCBcInJhdGluZ1wiOiA0LjA1LCBcInN0b2NrXCI6IDE0OCwgXCJicmFuZFwiOiBcIkRpZ2l0YWwgUHJpbnRlZFwiLCBcImNhdGVnb3J5XCI6IFwid29tZW5zLWRyZXNzZXNcIiwgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQyL3RodW1ibmFpbC5qcGdcIiwgXCJpbWFnZXNcIjogW1wiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80Mi8xLnBuZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDIvMi5wbmdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQyLzMucG5nXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80Mi80LmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDIvdGh1bWJuYWlsLmpwZ1wiXSB9LCB7IFwiaWRcIjogNDMsIFwidGl0bGVcIjogXCJmcm9jayBnb2xkIHByaW50ZWRcIiwgXCJkZXNjcmlwdGlvblwiOiBcIkdoYXppIGZhYnJpYyBsb25nIGZyb2NrIGdvbGQgcHJpbnRlZCByZWFkeSB0byB3ZWFyIHN0aXRjaGVkIGNvbGxlY3Rpb24gKEc5OTIpXCIsIFwicHJpY2VcIjogNjAwLCBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNS41NSwgXCJyYXRpbmdcIjogNC4zMSwgXCJzdG9ja1wiOiAxNTAsIFwiYnJhbmRcIjogXCJHaGF6aSBGYWJyaWNcIiwgXCJjYXRlZ29yeVwiOiBcIndvbWVucy1kcmVzc2VzXCIsIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80My90aHVtYm5haWwuanBnXCIsIFwiaW1hZ2VzXCI6IFtcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDMvMS5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQzLzIuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80My8zLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDMvNC5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQzL3RodW1ibmFpbC5qcGdcIl0gfSwgeyBcImlkXCI6IDQ0LCBcInRpdGxlXCI6IFwiTGFkaWVzIE11bHRpY29sb3JlZCBEcmVzc1wiLCBcImRlc2NyaXB0aW9uXCI6IFwiVGhpcyBjbGFzc3kgc2hpcnQgZm9yIHdvbWVuIGdpdmVzIHlvdSBhIGdvcmdlb3VzIGxvb2sgb24gZXZlcnlkYXkgd2VhciBhbmQgc3BlY2lhbGx5IGZvciBzZW1pLWNhc3VhbCB3ZWFycy5cIiwgXCJwcmljZVwiOiA3OSwgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTYuODgsIFwicmF0aW5nXCI6IDQuMDMsIFwic3RvY2tcIjogMiwgXCJicmFuZFwiOiBcIkdoYXppIEZhYnJpY1wiLCBcImNhdGVnb3J5XCI6IFwid29tZW5zLWRyZXNzZXNcIiwgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ0L3RodW1ibmFpbC5qcGdcIiwgXCJpbWFnZXNcIjogW1wiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80NC8xLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDQvMi5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ0LzMuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80NC80LmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDQvdGh1bWJuYWlsLmpwZ1wiXSB9LCB7IFwiaWRcIjogNDUsIFwidGl0bGVcIjogXCJNYWxhaSBNYXhpIERyZXNzXCIsIFwiZGVzY3JpcHRpb25cIjogXCJSZWFkeSB0byB3ZWFyLCBVbmlxdWUgZGVzaWduIGFjY29yZGluZyB0byBtb2Rlcm4gc3RhbmRhcmQgZmFzaGlvbiwgQmVzdCBmaXR0aW5nICxJbXBvcnRlZCBzdHVmZlwiLCBcInByaWNlXCI6IDUwLCBcImRpc2NvdW50UGVyY2VudGFnZVwiOiA1LjA3LCBcInJhdGluZ1wiOiA0LjY3LCBcInN0b2NrXCI6IDk2LCBcImJyYW5kXCI6IFwiSUVMR1lcIiwgXCJjYXRlZ29yeVwiOiBcIndvbWVucy1kcmVzc2VzXCIsIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80NS90aHVtYm5haWwuanBnXCIsIFwiaW1hZ2VzXCI6IFtcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDUvMS5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ1LzIud2VicFwiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDUvMy5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ1LzQuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80NS90aHVtYm5haWwuanBnXCJdIH0sIHsgXCJpZFwiOiA0NiwgXCJ0aXRsZVwiOiBcIndvbWVuJ3Mgc2hvZXNcIiwgXCJkZXNjcmlwdGlvblwiOiBcIkNsb3NlOiBMYWNlLCBTdHlsZSB3aXRoIGJvdHRvbTogSW5jcmVhc2VkIGluc2lkZSwgU29sZSBNYXRlcmlhbDogUnViYmVyXCIsIFwicHJpY2VcIjogNDAsIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE2Ljk2LCBcInJhdGluZ1wiOiA0LjE0LCBcInN0b2NrXCI6IDcyLCBcImJyYW5kXCI6IFwiSUVMR1kgZmFzaGlvblwiLCBcImNhdGVnb3J5XCI6IFwid29tZW5zLXNob2VzXCIsIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80Ni90aHVtYm5haWwuanBnXCIsIFwiaW1hZ2VzXCI6IFtcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDYvMS53ZWJwXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80Ni8yLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDYvMy5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ2LzQuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80Ni90aHVtYm5haWwuanBnXCJdIH0sIHsgXCJpZFwiOiA0NywgXCJ0aXRsZVwiOiBcIlNuZWFrZXIgc2hvZXNcIiwgXCJkZXNjcmlwdGlvblwiOiBcIlN5bnRoZXRpYyBMZWF0aGVyIENhc3VhbCBTbmVha2VyIHNob2VzIGZvciBXb21lbi9naXJscyBTbmVha2VycyBGb3IgV29tZW5cIiwgXCJwcmljZVwiOiAxMjAsIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEwLjM3LCBcInJhdGluZ1wiOiA0LjE5LCBcInN0b2NrXCI6IDUwLCBcImJyYW5kXCI6IFwiU3ludGhldGljIExlYXRoZXJcIiwgXCJjYXRlZ29yeVwiOiBcIndvbWVucy1zaG9lc1wiLCBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDcvdGh1bWJuYWlsLmpwZWdcIiwgXCJpbWFnZXNcIjogW1wiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80Ny8xLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDcvMi5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ3LzMuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80Ny90aHVtYm5haWwuanBlZ1wiXSB9LCB7IFwiaWRcIjogNDgsIFwidGl0bGVcIjogXCJXb21lbiBTdHJpcCBIZWVsXCIsIFwiZGVzY3JpcHRpb25cIjogXCJGZWF0dXJlczogRmxpcC1mbG9wcywgTWlkIEhlZWwsIENvbWZvcnRhYmxlLCBTdHJpcGVkIEhlZWwsIEFudGlza2lkLCBTdHJpcGVkXCIsIFwicHJpY2VcIjogNDAsIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEwLjgzLCBcInJhdGluZ1wiOiA0LjAyLCBcInN0b2NrXCI6IDI1LCBcImJyYW5kXCI6IFwiU2FuZGFscyBGbGlwIEZsb3BzXCIsIFwiY2F0ZWdvcnlcIjogXCJ3b21lbnMtc2hvZXNcIiwgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ4L3RodW1ibmFpbC5qcGdcIiwgXCJpbWFnZXNcIjogW1wiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80OC8xLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDgvMi5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ4LzMuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80OC80LmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDgvdGh1bWJuYWlsLmpwZ1wiXSB9LCB7IFwiaWRcIjogNDksIFwidGl0bGVcIjogXCJDaGFwcGFscyAmIFNob2UgTGFkaWVzIE1ldGFsbGljXCIsIFwiZGVzY3JpcHRpb25cIjogXCJXb21lbnMgQ2hhcHBhbHMgJiBTaG9lIExhZGllcyBNZXRhbGxpYyBUb25nIFRob25nIFNhbmRhbCBGbGF0IFN1bW1lciAyMDIwIE1hYXNhaSBTYW5kYWxzXCIsIFwicHJpY2VcIjogMjMsIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDIuNjIsIFwicmF0aW5nXCI6IDQuNzIsIFwic3RvY2tcIjogMTA3LCBcImJyYW5kXCI6IFwiTWFhc2FpIFNhbmRhbHNcIiwgXCJjYXRlZ29yeVwiOiBcIndvbWVucy1zaG9lc1wiLCBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDkvdGh1bWJuYWlsLmpwZ1wiLCBcImltYWdlc1wiOiBbXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ5LzEuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80OS8yLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDkvMy53ZWJwXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80OS90aHVtYm5haWwuanBnXCJdIH0sIHsgXCJpZFwiOiA1MCwgXCJ0aXRsZVwiOiBcIldvbWVuIFNob2VzXCIsIFwiZGVzY3JpcHRpb25cIjogXCIyMDIwIE5ldyBBcnJpdmFscyBHZW51aW5lIExlYXRoZXIgRmFzaGlvbiBUcmVuZCBQbGF0Zm9ybSBTdW1tZXIgV29tZW4gU2hvZXNcIiwgXCJwcmljZVwiOiAzNiwgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTYuODcsIFwicmF0aW5nXCI6IDQuMzMsIFwic3RvY2tcIjogNDYsIFwiYnJhbmRcIjogXCJBcnJpdmFscyBHZW51aW5lXCIsIFwiY2F0ZWdvcnlcIjogXCJ3b21lbnMtc2hvZXNcIiwgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUwL3RodW1ibmFpbC5qcGdcIiwgXCJpbWFnZXNcIjogW1wiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81MC8xLmpwZWdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUwLzIuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81MC8zLmpwZ1wiXSB9LCB7IFwiaWRcIjogNTEsIFwidGl0bGVcIjogXCJoYWxmIHNsZWV2ZXMgVCBzaGlydHNcIiwgXCJkZXNjcmlwdGlvblwiOiBcIk1hbnkgc3RvcmUgaXMgY3JlYXRpbmcgbmV3IGRlc2lnbnMgYW5kIHRyZW5kIGV2ZXJ5IG1vbnRoIGFuZCBldmVyeSB5ZWFyLiBEYXJhei5wayBoYXZlIGEgYmVhdXRpZnVsIHJhbmdlIG9mIG1lbiBmYXNoaW9uIGJyYW5kc1wiLCBcInByaWNlXCI6IDIzLCBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMi43NiwgXCJyYXRpbmdcIjogNC4yNiwgXCJzdG9ja1wiOiAxMzIsIFwiYnJhbmRcIjogXCJWaW50YWdlIEFwcGFyZWxcIiwgXCJjYXRlZ29yeVwiOiBcIm1lbnMtc2hpcnRzXCIsIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81MS90aHVtYm5haWwuanBnXCIsIFwiaW1hZ2VzXCI6IFtcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTEvMS5wbmdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUxLzIuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81MS8zLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTEvdGh1bWJuYWlsLmpwZ1wiXSB9LCB7IFwiaWRcIjogNTIsIFwidGl0bGVcIjogXCJGUkVFIEZJUkUgVCBTaGlydFwiLCBcImRlc2NyaXB0aW9uXCI6IFwicXVhbGl0eSBhbmQgcHJvZmVzc2lvbmFsIHByaW50IC0gSXQgZG9lc24ndCBqdXN0IGxvb2sgaGlnaCBxdWFsaXR5LCBpdCBpcyBoaWdoIHF1YWxpdHkuXCIsIFwicHJpY2VcIjogMTAsIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE0LjcyLCBcInJhdGluZ1wiOiA0LjUyLCBcInN0b2NrXCI6IDEyOCwgXCJicmFuZFwiOiBcIkZSRUUgRklSRVwiLCBcImNhdGVnb3J5XCI6IFwibWVucy1zaGlydHNcIiwgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUyL3RodW1ibmFpbC5qcGdcIiwgXCJpbWFnZXNcIjogW1wiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81Mi8xLnBuZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTIvMi5wbmdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUyLzMuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81Mi80LmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTIvdGh1bWJuYWlsLmpwZ1wiXSB9LCB7IFwiaWRcIjogNTMsIFwidGl0bGVcIjogXCJwcmludGVkIGhpZ2ggcXVhbGl0eSBUIHNoaXJ0c1wiLCBcImRlc2NyaXB0aW9uXCI6IFwiQnJhbmQ6IHZpbnRhZ2UgQXBwYXJlbCAsRXhwb3J0IHF1YWxpdHlcIiwgXCJwcmljZVwiOiAzNSwgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogNy41NCwgXCJyYXRpbmdcIjogNC44OSwgXCJzdG9ja1wiOiA2LCBcImJyYW5kXCI6IFwiVmludGFnZSBBcHBhcmVsXCIsIFwiY2F0ZWdvcnlcIjogXCJtZW5zLXNoaXJ0c1wiLCBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTMvdGh1bWJuYWlsLmpwZ1wiLCBcImltYWdlc1wiOiBbXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUzLzEud2VicFwiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTMvMi5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUzLzMuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81My80LmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTMvdGh1bWJuYWlsLmpwZ1wiXSB9LCB7IFwiaWRcIjogNTQsIFwidGl0bGVcIjogXCJQdWJnIFByaW50ZWQgR3JhcGhpYyBULVNoaXJ0XCIsIFwiZGVzY3JpcHRpb25cIjogXCJQcm9kdWN0IERlc2NyaXB0aW9uIEZlYXR1cmVzOiAxMDAlIFVsdHJhIHNvZnQgUG9seWVzdGVyIEplcnNleS4gVmlicmFudCAmIGNvbG9yZnVsIHByaW50aW5nIG9uIGZyb250LiBGZWVscyBzb2Z0IGFzIGNvdHRvbiB3aXRob3V0IGV2ZXIgY3JhY2tpbmdcIiwgXCJwcmljZVwiOiA0NiwgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTYuNDQsIFwicmF0aW5nXCI6IDQuNjIsIFwic3RvY2tcIjogMTM2LCBcImJyYW5kXCI6IFwiVGhlIFdhcmVob3VzZVwiLCBcImNhdGVnb3J5XCI6IFwibWVucy1zaGlydHNcIiwgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU0L3RodW1ibmFpbC5qcGdcIiwgXCJpbWFnZXNcIjogW1wiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81NC8xLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTQvMi5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU0LzMuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81NC80LmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTQvdGh1bWJuYWlsLmpwZ1wiXSB9LCB7IFwiaWRcIjogNTUsIFwidGl0bGVcIjogXCJNb25leSBIZWlzdCBQcmludGVkIFN1bW1lciBUIFNoaXJ0c1wiLCBcImRlc2NyaXB0aW9uXCI6IFwiRmFicmljIEplcmN5LCBTaXplOiBNICYgTCBXZWFyIFN0eWxpc2ggRHVhbCBTdGljaGVkXCIsIFwicHJpY2VcIjogNjYsIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE1Ljk3LCBcInJhdGluZ1wiOiA0LjksIFwic3RvY2tcIjogMTIyLCBcImJyYW5kXCI6IFwiVGhlIFdhcmVob3VzZVwiLCBcImNhdGVnb3J5XCI6IFwibWVucy1zaGlydHNcIiwgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU1L3RodW1ibmFpbC5qcGdcIiwgXCJpbWFnZXNcIjogW1wiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81NS8xLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTUvMi53ZWJwXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81NS8zLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTUvNC5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU1L3RodW1ibmFpbC5qcGdcIl0gfSwgeyBcImlkXCI6IDU2LCBcInRpdGxlXCI6IFwiU25lYWtlcnMgSm9nZ2VycyBTaG9lc1wiLCBcImRlc2NyaXB0aW9uXCI6IFwiR2VuZGVyOiBNZW4gLCBDb2xvcnM6IFNhbWUgYXMgRGlzcGxheWVkQ29uZGl0aW9uOiAxMDAlIEJyYW5kIE5ld1wiLCBcInByaWNlXCI6IDQwLCBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMi41NywgXCJyYXRpbmdcIjogNC4zOCwgXCJzdG9ja1wiOiA2LCBcImJyYW5kXCI6IFwiU25lYWtlcnNcIiwgXCJjYXRlZ29yeVwiOiBcIm1lbnMtc2hvZXNcIiwgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU2L3RodW1ibmFpbC5qcGdcIiwgXCJpbWFnZXNcIjogW1wiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81Ni8xLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTYvMi5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU2LzMuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81Ni80LmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTYvNS5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU2L3RodW1ibmFpbC5qcGdcIl0gfSwgeyBcImlkXCI6IDU3LCBcInRpdGxlXCI6IFwiTG9hZmVycyBmb3IgbWVuXCIsIFwiZGVzY3JpcHRpb25cIjogXCJNZW4gU2hvZXMgLSBMb2FmZXJzIGZvciBtZW4gLSBSdWJiZXIgU2hvZXMgLSBOeWxvbiBTaG9lcyAtIFNob2VzIGZvciBtZW4gLSBNb2NjYXNzaW9uIC0gUHVyZSBOeWxvbiAoUnViYmVyKSBFeHBvdCBRdWFsaXR5LlwiLCBcInByaWNlXCI6IDQ3LCBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMC45MSwgXCJyYXRpbmdcIjogNC45MSwgXCJzdG9ja1wiOiAyMCwgXCJicmFuZFwiOiBcIlJ1YmJlclwiLCBcImNhdGVnb3J5XCI6IFwibWVucy1zaG9lc1wiLCBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTcvdGh1bWJuYWlsLmpwZ1wiLCBcImltYWdlc1wiOiBbXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU3LzEuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81Ny8yLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTcvMy5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU3LzQuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81Ny90aHVtYm5haWwuanBnXCJdIH0sIHsgXCJpZFwiOiA1OCwgXCJ0aXRsZVwiOiBcImZvcm1hbCBvZmZpY2VzIHNob2VzXCIsIFwiZGVzY3JpcHRpb25cIjogXCJQYXR0ZXJuIFR5cGU6IFNvbGlkLCBNYXRlcmlhbDogUFUsIFRvZSBTaGFwZTogUG9pbnRlZCBUb2UgLE91dHNvbGUgTWF0ZXJpYWw6IFJ1YmJlclwiLCBcInByaWNlXCI6IDU3LCBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMiwgXCJyYXRpbmdcIjogNC40MSwgXCJzdG9ja1wiOiA2OCwgXCJicmFuZFwiOiBcIlRoZSBXYXJlaG91c2VcIiwgXCJjYXRlZ29yeVwiOiBcIm1lbnMtc2hvZXNcIiwgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU4L3RodW1ibmFpbC5qcGdcIiwgXCJpbWFnZXNcIjogW1wiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81OC8xLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTgvMi5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU4LzMuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81OC80LmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTgvdGh1bWJuYWlsLmpwZ1wiXSB9LCB7IFwiaWRcIjogNTksIFwidGl0bGVcIjogXCJTcHJpbmcgYW5kIHN1bW1lcnNob2VzXCIsIFwiZGVzY3JpcHRpb25cIjogXCJDb21mb3J0YWJsZSBzdHJldGNoIGNsb3RoLCBsaWdodHdlaWdodCBib2R5OyAscnViYmVyIHNvbGUsIGFudGktc2tpZCB3ZWFyO1wiLCBcInByaWNlXCI6IDIwLCBcImRpc2NvdW50UGVyY2VudGFnZVwiOiA4LjcxLCBcInJhdGluZ1wiOiA0LjMzLCBcInN0b2NrXCI6IDEzNywgXCJicmFuZFwiOiBcIlNuZWFrZXJzXCIsIFwiY2F0ZWdvcnlcIjogXCJtZW5zLXNob2VzXCIsIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81OS90aHVtYm5haWwuanBnXCIsIFwiaW1hZ2VzXCI6IFtcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTkvMS5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU5LzIuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81OS8zLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTkvNC5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU5L3RodW1ibmFpbC5qcGdcIl0gfSwgeyBcImlkXCI6IDYwLCBcInRpdGxlXCI6IFwiU3R5bGlzaCBDYXN1YWwgSmVhbnMgU2hvZXNcIiwgXCJkZXNjcmlwdGlvblwiOiBcIkhpZ2ggUXVhbGl0eSAsU3R5bGlzaCBkZXNpZ24gLENvbWZvcnRhYmxlIHdlYXIgLEZBc2hpb24gLER1cmFibGVcIiwgXCJwcmljZVwiOiA1OCwgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogNy41NSwgXCJyYXRpbmdcIjogNC41NSwgXCJzdG9ja1wiOiAxMjksIFwiYnJhbmRcIjogXCJTbmVha2Vyc1wiLCBcImNhdGVnb3J5XCI6IFwibWVucy1zaG9lc1wiLCBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjAvdGh1bWJuYWlsLmpwZ1wiLCBcImltYWdlc1wiOiBbXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzYwLzEuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82MC8yLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjAvMy5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzYwL3RodW1ibmFpbC5qcGdcIl0gfSwgeyBcImlkXCI6IDYxLCBcInRpdGxlXCI6IFwiTGVhdGhlciBTdHJhcHMgV3Jpc3R3YXRjaFwiLCBcImRlc2NyaXB0aW9uXCI6IFwiU3R5bGU6U3BvcnQgLENsYXNwOkJ1Y2tsZXMgLFdhdGVyIFJlc2lzdGFuY2UgRGVwdGg6M0JhclwiLCBcInByaWNlXCI6IDEyMCwgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogNy4xNCwgXCJyYXRpbmdcIjogNC42MywgXCJzdG9ja1wiOiA5MSwgXCJicmFuZFwiOiBcIk5hdmlmb3JjZVwiLCBcImNhdGVnb3J5XCI6IFwibWVucy13YXRjaGVzXCIsIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82MS90aHVtYm5haWwuanBnXCIsIFwiaW1hZ2VzXCI6IFtcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjEvMS5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzYxLzIucG5nXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82MS8zLmpwZ1wiXSB9LCB7IFwiaWRcIjogNjIsIFwidGl0bGVcIjogXCJXYXRlcnByb29mIExlYXRoZXIgQnJhbmQgV2F0Y2hcIiwgXCJkZXNjcmlwdGlvblwiOiBcIldhdGNoIENyb3duIFdpdGggRW52aXJvbm1lbnRhbCBJUFMgQnJvbnplIEVsZWN0cm9wbGF0aW5nOyBEaXNwbGF5IHN5c3RlbSBvZiAxMiBob3Vyc1wiLCBcInByaWNlXCI6IDQ2LCBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAzLjE1LCBcInJhdGluZ1wiOiA0LjA1LCBcInN0b2NrXCI6IDk1LCBcImJyYW5kXCI6IFwiU0tNRUkgOTExN1wiLCBcImNhdGVnb3J5XCI6IFwibWVucy13YXRjaGVzXCIsIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82Mi90aHVtYm5haWwuanBnXCIsIFwiaW1hZ2VzXCI6IFtcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjIvMS5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzYyLzIuanBnXCJdIH0sIHsgXCJpZFwiOiA2MywgXCJ0aXRsZVwiOiBcIlJveWFsIEJsdWUgUHJlbWl1bSBXYXRjaFwiLCBcImRlc2NyaXB0aW9uXCI6IFwiTWVuIFNpbHZlciBDaGFpbiBSb3lhbCBCbHVlIFByZW1pdW0gV2F0Y2ggTGF0ZXN0IEFuYWxvZyBXYXRjaFwiLCBcInByaWNlXCI6IDUwLCBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAyLjU2LCBcInJhdGluZ1wiOiA0Ljg5LCBcInN0b2NrXCI6IDE0MiwgXCJicmFuZFwiOiBcIlNLTUVJIDkxMTdcIiwgXCJjYXRlZ29yeVwiOiBcIm1lbnMtd2F0Y2hlc1wiLCBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjMvdGh1bWJuYWlsLndlYnBcIiwgXCJpbWFnZXNcIjogW1wiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82My8xLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjMvMi5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzYzLzMucG5nXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82My80LmpwZWdcIl0gfSwgeyBcImlkXCI6IDY0LCBcInRpdGxlXCI6IFwiTGVhdGhlciBTdHJhcCBTa2VsZXRvbiBXYXRjaFwiLCBcImRlc2NyaXB0aW9uXCI6IFwiTGVhdGhlciBTdHJhcCBTa2VsZXRvbiBXYXRjaCBmb3IgTWVuIC0gU3R5bGlzaCBhbmQgTGF0ZXN0IERlc2lnblwiLCBcInByaWNlXCI6IDQ2LCBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMC4yLCBcInJhdGluZ1wiOiA0Ljk4LCBcInN0b2NrXCI6IDYxLCBcImJyYW5kXCI6IFwiU3RyYXAgU2tlbGV0b25cIiwgXCJjYXRlZ29yeVwiOiBcIm1lbnMtd2F0Y2hlc1wiLCBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjQvdGh1bWJuYWlsLmpwZ1wiLCBcImltYWdlc1wiOiBbXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY0LzEuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82NC8yLndlYnBcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY0LzMuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82NC90aHVtYm5haWwuanBnXCJdIH0sIHsgXCJpZFwiOiA2NSwgXCJ0aXRsZVwiOiBcIlN0YWlubGVzcyBTdGVlbCBXcmlzdCBXYXRjaFwiLCBcImRlc2NyaXB0aW9uXCI6IFwiU3R5bGlzaCBXYXRjaCBGb3IgTWFuIChMdXh1cnkpIENsYXNzeSBNZW4ncyBTdGFpbmxlc3MgU3RlZWwgV3Jpc3QgV2F0Y2ggLSBCb3ggUGFja2VkXCIsIFwicHJpY2VcIjogNDcsIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE3Ljc5LCBcInJhdGluZ1wiOiA0Ljc5LCBcInN0b2NrXCI6IDk0LCBcImJyYW5kXCI6IFwiU3RhaW5sZXNzXCIsIFwiY2F0ZWdvcnlcIjogXCJtZW5zLXdhdGNoZXNcIiwgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY1L3RodW1ibmFpbC53ZWJwXCIsIFwiaW1hZ2VzXCI6IFtcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjUvMS5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY1LzIud2VicFwiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjUvMy5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY1LzQud2VicFwiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjUvdGh1bWJuYWlsLndlYnBcIl0gfSwgeyBcImlkXCI6IDY2LCBcInRpdGxlXCI6IFwiU3RlZWwgQW5hbG9nIENvdXBsZSBXYXRjaGVzXCIsIFwiZGVzY3JpcHRpb25cIjogXCJFbGVnYW50IGRlc2lnbiwgU3R5bGlzaCAsVW5pcXVlICYgVHJlbmR5LENvbWZvcnRhYmxlIHdlYXJcIiwgXCJwcmljZVwiOiAzNSwgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMy4yMywgXCJyYXRpbmdcIjogNC43OSwgXCJzdG9ja1wiOiAyNCwgXCJicmFuZFwiOiBcIkVhc3Rlcm4gV2F0Y2hlc1wiLCBcImNhdGVnb3J5XCI6IFwid29tZW5zLXdhdGNoZXNcIiwgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY2L3RodW1ibmFpbC5qcGdcIiwgXCJpbWFnZXNcIjogW1wiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82Ni8xLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjYvMi5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY2LzMuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82Ni80LkpQR1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjYvdGh1bWJuYWlsLmpwZ1wiXSB9LCB7IFwiaWRcIjogNjcsIFwidGl0bGVcIjogXCJGYXNoaW9uIE1hZ25ldGljIFdyaXN0IFdhdGNoXCIsIFwiZGVzY3JpcHRpb25cIjogXCJCdXkgdGhpcyBhd2Vzb21lICBUaGUgcHJvZHVjdCBpcyBvcmlnaW5hbGx5IG1hbnVmYWN0dXJlZCBieSB0aGUgY29tcGFueSBhbmQgaXQncyBhIHRvcCBzZWxsaW5nIHByb2R1Y3Qgd2l0aCBhIHZlcnkgcmVhc29uYWJsZVwiLCBcInByaWNlXCI6IDYwLCBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNi42OSwgXCJyYXRpbmdcIjogNC4wMywgXCJzdG9ja1wiOiA0NiwgXCJicmFuZFwiOiBcIkVhc3Rlcm4gV2F0Y2hlc1wiLCBcImNhdGVnb3J5XCI6IFwid29tZW5zLXdhdGNoZXNcIiwgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY3L3RodW1ibmFpbC5qcGdcIiwgXCJpbWFnZXNcIjogW1wiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82Ny8xLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjcvMi5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY3LzMuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82Ny80LmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjcvdGh1bWJuYWlsLmpwZ1wiXSB9LCB7IFwiaWRcIjogNjgsIFwidGl0bGVcIjogXCJTdHlsaXNoIEx1eHVyeSBEaWdpdGFsIFdhdGNoXCIsIFwiZGVzY3JpcHRpb25cIjogXCJTdHlsaXNoIEx1eHVyeSBEaWdpdGFsIFdhdGNoIEZvciBHaXJscyAvIFdvbWVuIC0gTGVkIFNtYXJ0IExhZGllcyBXYXRjaGVzIEZvciBHaXJsc1wiLCBcInByaWNlXCI6IDU3LCBcImRpc2NvdW50UGVyY2VudGFnZVwiOiA5LjAzLCBcInJhdGluZ1wiOiA0LjU1LCBcInN0b2NrXCI6IDc3LCBcImJyYW5kXCI6IFwiTHV4dXJ5IERpZ2l0YWxcIiwgXCJjYXRlZ29yeVwiOiBcIndvbWVucy13YXRjaGVzXCIsIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82OC90aHVtYm5haWwud2VicFwiLCBcImltYWdlc1wiOiBbXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY4LzEuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82OC8yLmpwZ1wiXSB9LCB7IFwiaWRcIjogNjksIFwidGl0bGVcIjogXCJHb2xkZW4gV2F0Y2ggUGVhcmxzIEJyYWNlbGV0IFdhdGNoXCIsIFwiZGVzY3JpcHRpb25cIjogXCJQcm9kdWN0IGRldGFpbHMgb2YgR29sZGVuIFdhdGNoIFBlYXJscyBCcmFjZWxldCBXYXRjaCBGb3IgR2lybHMgLSBHb2xkZW4gQ2hhaW4gTGFkaWVzIEJyYWNlbGF0ZSBXYXRjaCBmb3IgV29tZW5cIiwgXCJwcmljZVwiOiA0NywgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTcuNTUsIFwicmF0aW5nXCI6IDQuNzcsIFwic3RvY2tcIjogODksIFwiYnJhbmRcIjogXCJXYXRjaCBQZWFybHNcIiwgXCJjYXRlZ29yeVwiOiBcIndvbWVucy13YXRjaGVzXCIsIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82OS90aHVtYm5haWwuanBnXCIsIFwiaW1hZ2VzXCI6IFtcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjkvMS5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY5LzIuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82OS8zLndlYnBcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY5LzQuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82OS90aHVtYm5haWwuanBnXCJdIH0sIHsgXCJpZFwiOiA3MCwgXCJ0aXRsZVwiOiBcIlN0YWlubGVzcyBTdGVlbCBXb21lblwiLCBcImRlc2NyaXB0aW9uXCI6IFwiRmFzaGlvbiBTa21laSAxODMwIFNoZWxsIERpYWwgU3RhaW5sZXNzIFN0ZWVsIFdvbWVuIFdyaXN0IFdhdGNoIExhZHkgQnJhY2VsZXQgV2F0Y2ggUXVhcnR6IFdhdGNoZXMgTGFkaWVzXCIsIFwicHJpY2VcIjogMzUsIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDguOTgsIFwicmF0aW5nXCI6IDQuMDgsIFwic3RvY2tcIjogMTExLCBcImJyYW5kXCI6IFwiQnJhY2VsZXRcIiwgXCJjYXRlZ29yeVwiOiBcIndvbWVucy13YXRjaGVzXCIsIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83MC90aHVtYm5haWwuanBnXCIsIFwiaW1hZ2VzXCI6IFtcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzAvMS5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcwLzIuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83MC90aHVtYm5haWwuanBnXCJdIH0sIHsgXCJpZFwiOiA3MSwgXCJ0aXRsZVwiOiBcIldvbWVuIFNob3VsZGVyIEJhZ3NcIiwgXCJkZXNjcmlwdGlvblwiOiBcIkxvdWlzV2lsbCBXb21lbiBTaG91bGRlciBCYWdzIExvbmcgQ2x1dGNoZXMgQ3Jvc3MgQm9keSBCYWdzIFBob25lIEJhZ3MgUFUgTGVhdGhlciBIYW5kIEJhZ3MgTGFyZ2UgQ2FwYWNpdHkgQ2FyZCBIb2xkZXJzIFppcHBlciBDb2luIFB1cnNlcyBGYXNoaW9uIENyb3NzYm9keSBCYWdzIGZvciBHaXJscyBMYWRpZXNcIiwgXCJwcmljZVwiOiA0NiwgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTQuNjUsIFwicmF0aW5nXCI6IDQuNzEsIFwic3RvY2tcIjogMTcsIFwiYnJhbmRcIjogXCJMb3Vpc1dpbGxcIiwgXCJjYXRlZ29yeVwiOiBcIndvbWVucy1iYWdzXCIsIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83MS90aHVtYm5haWwuanBnXCIsIFwiaW1hZ2VzXCI6IFtcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzEvMS5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcxLzIuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83MS8zLndlYnBcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcxL3RodW1ibmFpbC5qcGdcIl0gfSwgeyBcImlkXCI6IDcyLCBcInRpdGxlXCI6IFwiSGFuZGJhZyBGb3IgR2lybHNcIiwgXCJkZXNjcmlwdGlvblwiOiBcIlRoaXMgZmFzaGlvbiBpcyBkZXNpZ25lZCB0byBhZGQgYSBjaGFybWluZyBlZmZlY3QgdG8geW91ciBjYXN1YWwgb3V0Zml0LiBUaGlzIEJhZyBpcyBtYWRlIG9mIHN5bnRoZXRpYyBsZWF0aGVyLlwiLCBcInByaWNlXCI6IDIzLCBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNy41LCBcInJhdGluZ1wiOiA0LjkxLCBcInN0b2NrXCI6IDI3LCBcImJyYW5kXCI6IFwiTG91aXNXaWxsXCIsIFwiY2F0ZWdvcnlcIjogXCJ3b21lbnMtYmFnc1wiLCBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzIvdGh1bWJuYWlsLndlYnBcIiwgXCJpbWFnZXNcIjogW1wiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83Mi8xLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzIvMi5wbmdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcyLzMud2VicFwiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzIvNC5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcyL3RodW1ibmFpbC53ZWJwXCJdIH0sIHsgXCJpZFwiOiA3MywgXCJ0aXRsZVwiOiBcIkZhbmN5IGhhbmQgY2x1dGNoXCIsIFwiZGVzY3JpcHRpb25cIjogXCJUaGlzIGZhc2hpb24gaXMgZGVzaWduZWQgdG8gYWRkIGEgY2hhcm1pbmcgZWZmZWN0IHRvIHlvdXIgY2FzdWFsIG91dGZpdC4gVGhpcyBCYWcgaXMgbWFkZSBvZiBzeW50aGV0aWMgbGVhdGhlci5cIiwgXCJwcmljZVwiOiA0NCwgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTAuMzksIFwicmF0aW5nXCI6IDQuMTgsIFwic3RvY2tcIjogMTAxLCBcImJyYW5kXCI6IFwiQnJhY2VsZXRcIiwgXCJjYXRlZ29yeVwiOiBcIndvbWVucy1iYWdzXCIsIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83My90aHVtYm5haWwuanBnXCIsIFwiaW1hZ2VzXCI6IFtcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzMvMS5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzczLzIud2VicFwiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzMvMy5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzczL3RodW1ibmFpbC5qcGdcIl0gfSwgeyBcImlkXCI6IDc0LCBcInRpdGxlXCI6IFwiTGVhdGhlciBIYW5kIEJhZ1wiLCBcImRlc2NyaXB0aW9uXCI6IFwiSXQgZmVhdHVyZXMgYW4gYXR0cmFjdGl2ZSBkZXNpZ24gdGhhdCBtYWtlcyBpdCBhIG11c3QgaGF2ZSBhY2Nlc3NvcnkgaW4geW91ciBjb2xsZWN0aW9uLiBXZSBzZWxsIGRpZmZlcmVudCBraW5kIG9mIGJhZ3MgZm9yIGJveXMsIGtpZHMsIHdvbWVuLCBnaXJscyBhbmQgYWxzbyBmb3IgdW5pc2V4LlwiLCBcInByaWNlXCI6IDU3LCBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMS4xOSwgXCJyYXRpbmdcIjogNC4wMSwgXCJzdG9ja1wiOiA0MywgXCJicmFuZFwiOiBcIkNvcGVuaGFnZW4gTHV4ZVwiLCBcImNhdGVnb3J5XCI6IFwid29tZW5zLWJhZ3NcIiwgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc0L3RodW1ibmFpbC5qcGdcIiwgXCJpbWFnZXNcIjogW1wiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83NC8xLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzQvMi5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc0LzMuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83NC80LmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzQvdGh1bWJuYWlsLmpwZ1wiXSB9LCB7IFwiaWRcIjogNzUsIFwidGl0bGVcIjogXCJTZXZlbiBQb2NrZXQgV29tZW4gQmFnXCIsIFwiZGVzY3JpcHRpb25cIjogXCJTZXZlbiBQb2NrZXQgV29tZW4gQmFnIEhhbmRiYWdzIExhZHkgU2hvdWxkZXIgQ3Jvc3Nib2R5IEJhZyBGZW1hbGUgUHVyc2UgU2V2ZW4gUG9ja2V0IEJhZ1wiLCBcInByaWNlXCI6IDY4LCBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNC44NywgXCJyYXRpbmdcIjogNC45MywgXCJzdG9ja1wiOiAxMywgXCJicmFuZFwiOiBcIlN0ZWFsIEZyYW1lXCIsIFwiY2F0ZWdvcnlcIjogXCJ3b21lbnMtYmFnc1wiLCBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzUvdGh1bWJuYWlsLmpwZ1wiLCBcImltYWdlc1wiOiBbXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc1LzEuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83NS8yLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzUvMy5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc1L3RodW1ibmFpbC5qcGdcIl0gfSwgeyBcImlkXCI6IDc2LCBcInRpdGxlXCI6IFwiU2lsdmVyIFJpbmcgU2V0IFdvbWVuXCIsIFwiZGVzY3JpcHRpb25cIjogXCJKZXdlbHJ5IFR5cGU6UmluZ3NDZXJ0aWZpY2F0ZSBUeXBlOk5vbmVQbGF0aW5nOlNpbHZlciBQbGF0ZWRTaGFwZWF0dGVybjpub25lU3R5bGU6Q0xBU1NJQ1JlbGlnaW91c1wiLCBcInByaWNlXCI6IDcwLCBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMy41NywgXCJyYXRpbmdcIjogNC42MSwgXCJzdG9ja1wiOiA1MSwgXCJicmFuZFwiOiBcIkRhcm9qYXlcIiwgXCJjYXRlZ29yeVwiOiBcIndvbWVucy1qZXdlbGxlcnlcIiwgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc2L3RodW1ibmFpbC5qcGdcIiwgXCJpbWFnZXNcIjogW1wiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83Ni8xLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzYvMi5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc2L3RodW1ibmFpbC5qcGdcIl0gfSwgeyBcImlkXCI6IDc3LCBcInRpdGxlXCI6IFwiUm9zZSBSaW5nXCIsIFwiZGVzY3JpcHRpb25cIjogXCJCcmFuZDogVGhlIEdyZWV0aW5ncyBGbG93ZXIgQ29sb3VyOiBSZWRSaW5nIENvbG91cjogR29sZGVuU2l6ZTogQWRqdXN0YWJsZVwiLCBcInByaWNlXCI6IDEwMCwgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMy4yMiwgXCJyYXRpbmdcIjogNC4yMSwgXCJzdG9ja1wiOiAxNDksIFwiYnJhbmRcIjogXCJDb3BlbmhhZ2VuIEx1eGVcIiwgXCJjYXRlZ29yeVwiOiBcIndvbWVucy1qZXdlbGxlcnlcIiwgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc3L3RodW1ibmFpbC5qcGdcIiwgXCJpbWFnZXNcIjogW1wiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83Ny8xLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzcvMi5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc3LzMuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83Ny90aHVtYm5haWwuanBnXCJdIH0sIHsgXCJpZFwiOiA3OCwgXCJ0aXRsZVwiOiBcIlJoaW5lc3RvbmUgS29yZWFuIFN0eWxlIE9wZW4gUmluZ3NcIiwgXCJkZXNjcmlwdGlvblwiOiBcIkZhc2hpb24gSmV3ZWxsZXJ5IDNQY3MgQWRqdXN0YWJsZSBQZWFybCBSaGluZXN0b25lIEtvcmVhbiBTdHlsZSBPcGVuIFJpbmdzIEZvciBXb21lblwiLCBcInByaWNlXCI6IDMwLCBcImRpc2NvdW50UGVyY2VudGFnZVwiOiA4LjAyLCBcInJhdGluZ1wiOiA0LjY5LCBcInN0b2NrXCI6IDksIFwiYnJhbmRcIjogXCJGYXNoaW9uIEpld2VsbGVyeVwiLCBcImNhdGVnb3J5XCI6IFwid29tZW5zLWpld2VsbGVyeVwiLCBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzgvdGh1bWJuYWlsLmpwZ1wiLCBcImltYWdlc1wiOiBbXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc4L3RodW1ibmFpbC5qcGdcIl0gfSwgeyBcImlkXCI6IDc5LCBcInRpdGxlXCI6IFwiRWxlZ2FudCBGZW1hbGUgUGVhcmwgRWFycmluZ3NcIiwgXCJkZXNjcmlwdGlvblwiOiBcIkVsZWdhbnQgRmVtYWxlIFBlYXJsIEVhcnJpbmdzIFNldCBaaXJjb24gUGVhcmwgRWFyaW5ncyBXb21lbiBQYXJ0eSBBY2Nlc3NvcmllcyA5IFBhaXJzL1NldFwiLCBcInByaWNlXCI6IDMwLCBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMi44LCBcInJhdGluZ1wiOiA0Ljc0LCBcInN0b2NrXCI6IDE2LCBcImJyYW5kXCI6IFwiRmFzaGlvbiBKZXdlbGxlcnlcIiwgXCJjYXRlZ29yeVwiOiBcIndvbWVucy1qZXdlbGxlcnlcIiwgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc5L3RodW1ibmFpbC5qcGdcIiwgXCJpbWFnZXNcIjogW1wiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83OS8xLmpwZ1wiXSB9LCB7IFwiaWRcIjogODAsIFwidGl0bGVcIjogXCJDaGFpbiBQaW4gVGFzc2VsIEVhcnJpbmdzXCIsIFwiZGVzY3JpcHRpb25cIjogXCJQYWlyIE9mIEVhciBDdWZmIEJ1dHRlcmZseSBMb25nIENoYWluIFBpbiBUYXNzZWwgRWFycmluZ3MgLSBTaWx2ZXIgKCBMb25nIExpZmUgUXVhbGl0eSBQcm9kdWN0KVwiLCBcInByaWNlXCI6IDQ1LCBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNy43NSwgXCJyYXRpbmdcIjogNC41OSwgXCJzdG9ja1wiOiA5LCBcImJyYW5kXCI6IFwiQ3VmZiBCdXR0ZXJmbHlcIiwgXCJjYXRlZ29yeVwiOiBcIndvbWVucy1qZXdlbGxlcnlcIiwgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgwL3RodW1ibmFpbC5qcGdcIiwgXCJpbWFnZXNcIjogW1wiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84MC8xLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODAvMi5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgwLzMucG5nXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84MC80LmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODAvdGh1bWJuYWlsLmpwZ1wiXSB9LCB7IFwiaWRcIjogODEsIFwidGl0bGVcIjogXCJSb3VuZCBTaWx2ZXIgRnJhbWUgU3VuIEdsYXNzZXNcIiwgXCJkZXNjcmlwdGlvblwiOiBcIkEgcGFpciBvZiBzdW5nbGFzc2VzIGNhbiBwcm90ZWN0IHlvdXIgZXllcyBmcm9tIGJlaW5nIGh1cnQuIEZvciBjYXIgZHJpdmluZywgdmFjYXRpb24gdHJhdmVsLCBvdXRkb29yIGFjdGl2aXRpZXMsIHNvY2lhbCBnYXRoZXJpbmdzLFwiLCBcInByaWNlXCI6IDE5LCBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMC4xLCBcInJhdGluZ1wiOiA0Ljk0LCBcInN0b2NrXCI6IDc4LCBcImJyYW5kXCI6IFwiRGVzaWduZXIgU3VuIEdsYXNzZXNcIiwgXCJjYXRlZ29yeVwiOiBcInN1bmdsYXNzZXNcIiwgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgxL3RodW1ibmFpbC5qcGdcIiwgXCJpbWFnZXNcIjogW1wiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84MS8xLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODEvMi5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgxLzMuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84MS80LndlYnBcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgxL3RodW1ibmFpbC5qcGdcIl0gfSwgeyBcImlkXCI6IDgyLCBcInRpdGxlXCI6IFwiS2FiaXIgU2luZ2ggU3F1YXJlIFN1bmdsYXNzXCIsIFwiZGVzY3JpcHRpb25cIjogXCJPcmlnbmFsIE1ldGFsIEthYmlyIFNpbmdoIGRlc2lnbiAyMDIwIFN1bmdsYXNzZXMgTWVuIEJyYW5kIERlc2lnbmVyIFN1biBHbGFzc2VzIEthYmlyIFNpbmdoIFNxdWFyZSBTdW5nbGFzc1wiLCBcInByaWNlXCI6IDUwLCBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNS42LCBcInJhdGluZ1wiOiA0LjYyLCBcInN0b2NrXCI6IDc4LCBcImJyYW5kXCI6IFwiRGVzaWduZXIgU3VuIEdsYXNzZXNcIiwgXCJjYXRlZ29yeVwiOiBcInN1bmdsYXNzZXNcIiwgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgyL3RodW1ibmFpbC5qcGdcIiwgXCJpbWFnZXNcIjogW1wiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84Mi8xLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODIvMi53ZWJwXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84Mi8zLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODIvNC5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgyL3RodW1ibmFpbC5qcGdcIl0gfSwgeyBcImlkXCI6IDgzLCBcInRpdGxlXCI6IFwiV2lsZXkgWCBOaWdodCBWaXNpb24gWWVsbG93IEdsYXNzZXNcIiwgXCJkZXNjcmlwdGlvblwiOiBcIldpbGV5IFggTmlnaHQgVmlzaW9uIFllbGxvdyBHbGFzc2VzIGZvciBSaWRlcnMgLSBOaWdodCBWaXNpb24gQW50aSBGb2cgRHJpdmluZyBHbGFzc2VzIC0gRnJlZSBOaWdodCBHbGFzcyBDb3ZlciAtIFNoaWVsZCBFeWVzIEZyb20gRHVzdCBhbmQgVmlydXMtIEZvciBOaWdodCBTcG9ydCBNYXRjaGVzXCIsIFwicHJpY2VcIjogMzAsIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDYuMzMsIFwicmF0aW5nXCI6IDQuOTcsIFwic3RvY2tcIjogMTE1LCBcImJyYW5kXCI6IFwibWFzdGFyIHdhdGNoXCIsIFwiY2F0ZWdvcnlcIjogXCJzdW5nbGFzc2VzXCIsIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84My90aHVtYm5haWwuanBnXCIsIFwiaW1hZ2VzXCI6IFtcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODMvMS5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgzLzIuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84My8zLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODMvNC5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgzL3RodW1ibmFpbC5qcGdcIl0gfSwgeyBcImlkXCI6IDg0LCBcInRpdGxlXCI6IFwiU3F1YXJlIFN1bmdsYXNzZXNcIiwgXCJkZXNjcmlwdGlvblwiOiBcIkZhc2hpb24gT3ZlcnNpemVkIFNxdWFyZSBTdW5nbGFzc2VzIFJldHJvIEdyYWRpZW50IEJpZyBGcmFtZSBTdW5nbGFzc2VzIEZvciBXb21lbiBPbmUgUGllY2UgR2FmYXMgU2hhZGUgTWlycm9yIENsZWFyIExlbnMgMTcwNTlcIiwgXCJwcmljZVwiOiAyOCwgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTMuODksIFwicmF0aW5nXCI6IDQuNjQsIFwic3RvY2tcIjogNjQsIFwiYnJhbmRcIjogXCJtYXN0YXIgd2F0Y2hcIiwgXCJjYXRlZ29yeVwiOiBcInN1bmdsYXNzZXNcIiwgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg0L3RodW1ibmFpbC5qcGdcIiwgXCJpbWFnZXNcIjogW1wiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84NC8xLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODQvMi5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg0L3RodW1ibmFpbC5qcGdcIl0gfSwgeyBcImlkXCI6IDg1LCBcInRpdGxlXCI6IFwiTG91aXNXaWxsIE1lbiBTdW5nbGFzc2VzXCIsIFwiZGVzY3JpcHRpb25cIjogXCJMb3Vpc1dpbGwgTWVuIFN1bmdsYXNzZXMgUG9sYXJpemVkIFN1bmdsYXNzZXMgVVY0MDAgU3VuZ2xhc3NlcyBEYXkgTmlnaHQgRHVhbCBVc2UgU2FmZXR5IERyaXZpbmcgTmlnaHQgVmlzaW9uIEV5ZXdlYXIgQUwtTUcgRnJhbWUgU3VuIEdsYXNzZXMgd2l0aCBGcmVlIEJveCBmb3IgRHJpdmVyc1wiLCBcInByaWNlXCI6IDUwLCBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMS4yNywgXCJyYXRpbmdcIjogNC45OCwgXCJzdG9ja1wiOiA5MiwgXCJicmFuZFwiOiBcIkxvdWlzV2lsbFwiLCBcImNhdGVnb3J5XCI6IFwic3VuZ2xhc3Nlc1wiLCBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODUvdGh1bWJuYWlsLmpwZ1wiLCBcImltYWdlc1wiOiBbXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg1LzEuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84NS8yLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODUvdGh1bWJuYWlsLmpwZ1wiXSB9LCB7IFwiaWRcIjogODYsIFwidGl0bGVcIjogXCJCbHVldG9vdGggQXV4XCIsIFwiZGVzY3JpcHRpb25cIjogXCJCbHVldG9vdGggQXV4IEJsdWV0b290aCBDYXIgQXV4IENhciBCbHVldG9vdGggVHJhbnNtaXR0ZXIgQXV4IEF1ZGlvIFJlY2VpdmVyIEhhbmRmcmVlIENhciBCbHVldG9vdGggTXVzaWMgUmVjZWl2ZXIgVW5pdmVyc2FsIDMuNW1tIFN0cmVhbWluZyBBMkRQIFdpcmVsZXNzIEF1dG8gQVVYIEF1ZGlvIEFkYXB0ZXIgV2l0aCBNaWMgRm9yIFBob25lIE1QM1wiLCBcInByaWNlXCI6IDI1LCBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMC41NiwgXCJyYXRpbmdcIjogNC41NywgXCJzdG9ja1wiOiAyMiwgXCJicmFuZFwiOiBcIkNhciBBdXhcIiwgXCJjYXRlZ29yeVwiOiBcImF1dG9tb3RpdmVcIiwgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg2L3RodW1ibmFpbC5qcGdcIiwgXCJpbWFnZXNcIjogW1wiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84Ni8xLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODYvMi53ZWJwXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84Ni8zLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODYvNC5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg2L3RodW1ibmFpbC5qcGdcIl0gfSwgeyBcImlkXCI6IDg3LCBcInRpdGxlXCI6IFwidCBUZW1wZXJhdHVyZSBDb250cm9sbGVyIEluY3ViYXRvciBDb250cm9sbGVyXCIsIFwiZGVzY3JpcHRpb25cIjogXCJCb3RoIEhlYXQgYW5kIENvb2wgUHVycG9zZSwgVGVtcGVyYXR1cmUgY29udHJvbCByYW5nZTsgLTUwIHRvICsxMTAsIFRlbXBlcmF0dXJlIG1lYXN1cmVtZW50IGFjY3VyYWN5OyAwLjEsIENvbnRyb2wgYWNjdXJhY3k7IDAuMVwiLCBcInByaWNlXCI6IDQwLCBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMS4zLCBcInJhdGluZ1wiOiA0LjU0LCBcInN0b2NrXCI6IDM3LCBcImJyYW5kXCI6IFwiVzEyMDkgREMxMlZcIiwgXCJjYXRlZ29yeVwiOiBcImF1dG9tb3RpdmVcIiwgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg3L3RodW1ibmFpbC5qcGdcIiwgXCJpbWFnZXNcIjogW1wiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84Ny8xLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODcvMi5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg3LzMuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84Ny80LmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODcvdGh1bWJuYWlsLmpwZ1wiXSB9LCB7IFwiaWRcIjogODgsIFwidGl0bGVcIjogXCJUQyBSZXVzYWJsZSBTaWxpY29uZSBNYWdpYyBXYXNoaW5nIEdsb3Zlc1wiLCBcImRlc2NyaXB0aW9uXCI6IFwiVEMgUmV1c2FibGUgU2lsaWNvbmUgTWFnaWMgV2FzaGluZyBHbG92ZXMgd2l0aCBTY3J1YmJlciwgQ2xlYW5pbmcgQnJ1c2ggU2NydWJiZXIgR2xvdmVzIEhlYXQgUmVzaXN0YW50IFBhaXIgZm9yIENsZWFuaW5nIG9mIEtpdGNoZW4sIERpc2hlcywgVmVnZXRhYmxlcyBhbmQgRnJ1aXRzLCBCYXRocm9vbSwgQ2FyIFdhc2gsIFBldCBDYXJlIGFuZCBNdWx0aXB1cnBvc2VcIiwgXCJwcmljZVwiOiAyOSwgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMy4xOSwgXCJyYXRpbmdcIjogNC45OCwgXCJzdG9ja1wiOiA0MiwgXCJicmFuZFwiOiBcIlRDIFJldXNhYmxlXCIsIFwiY2F0ZWdvcnlcIjogXCJhdXRvbW90aXZlXCIsIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84OC90aHVtYm5haWwuanBnXCIsIFwiaW1hZ2VzXCI6IFtcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODgvMS5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg4LzIuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84OC8zLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODgvNC53ZWJwXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84OC90aHVtYm5haWwuanBnXCJdIH0sIHsgXCJpZFwiOiA4OSwgXCJ0aXRsZVwiOiBcIlF1YWxjb21tIG9yaWdpbmFsIENhciBDaGFyZ2VyXCIsIFwiZGVzY3JpcHRpb25cIjogXCJiZXN0IFF1YWxpdHkgQ0hhcmdlciAsIEhpZ2hseSBSZWNvbW1lbmRlZCB0byBhbGwgYmVzdCBRdWFsaXR5IENIYXJnZXIgLCBIaWdobHkgUmVjb21tZW5kZWQgdG8gYWxsXCIsIFwicHJpY2VcIjogNDAsIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE3LjUzLCBcInJhdGluZ1wiOiA0LjIsIFwic3RvY2tcIjogNzksIFwiYnJhbmRcIjogXCJUQyBSZXVzYWJsZVwiLCBcImNhdGVnb3J5XCI6IFwiYXV0b21vdGl2ZVwiLCBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODkvdGh1bWJuYWlsLmpwZ1wiLCBcImltYWdlc1wiOiBbXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg5LzEuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84OS8yLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODkvMy5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg5LzQuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84OS90aHVtYm5haWwuanBnXCJdIH0sIHsgXCJpZFwiOiA5MCwgXCJ0aXRsZVwiOiBcIkN5Y2xlIEJpa2UgR2xvd1wiLCBcImRlc2NyaXB0aW9uXCI6IFwiVW5pdmVyc2FsIGZpdG1lbnQgYW5kIGVhc3kgdG8gaW5zdGFsbCBubyBzcGVjaWFsIHdpcmVzLCBjYW4gYmUgZWFzaWx5IGluc3RhbGxlZCBhbmQgcmVtb3ZlZC4gRml0cyBtb3N0IHN0YW5kYXJkIHR5cmUgYWlyIHN0ZW0gdmFsdmVzIG9mIHJvYWQsIG1vdW50YWluIGJpY3ljbGVzLCBtb3RvY3ljbGVzIGFuZCBjYXJzLkJyaWdodCBsZWQgd2lsbCB0dXJuIG9uIHdcIiwgXCJwcmljZVwiOiAzNSwgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTEuMDgsIFwicmF0aW5nXCI6IDQuMSwgXCJzdG9ja1wiOiA2MywgXCJicmFuZFwiOiBcIk5lb24gTEVEIExpZ2h0XCIsIFwiY2F0ZWdvcnlcIjogXCJhdXRvbW90aXZlXCIsIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85MC90aHVtYm5haWwuanBnXCIsIFwiaW1hZ2VzXCI6IFtcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTAvMS5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkwLzIuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85MC8zLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTAvNC5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkwL3RodW1ibmFpbC5qcGdcIl0gfSwgeyBcImlkXCI6IDkxLCBcInRpdGxlXCI6IFwiQmxhY2sgTW90b3JiaWtlXCIsIFwiZGVzY3JpcHRpb25cIjogXCJFbmdpbmUgVHlwZTpXZXQgc3VtcCwgU2luZ2xlIEN5bGluZGVyLCBGb3VyIFN0cm9rZSwgVHdvIFZhbHZlcywgQWlyIENvb2xlZCB3aXRoIFNPSEMgKFNpbmdsZSBPdmVyIEhlYWQgQ2FtKSBDaGFpbiBEcml2ZSBCb3JlICYgU3Ryb2tlOjQ3LjAgeCA0OS41IE1NXCIsIFwicHJpY2VcIjogNTY5LCBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMy42MywgXCJyYXRpbmdcIjogNC4wNCwgXCJzdG9ja1wiOiAxMTUsIFwiYnJhbmRcIjogXCJNRVRSTyA3MGNjIE1vdG9yY3ljbGUgLSBNUjcwXCIsIFwiY2F0ZWdvcnlcIjogXCJtb3RvcmN5Y2xlXCIsIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85MS90aHVtYm5haWwuanBnXCIsIFwiaW1hZ2VzXCI6IFtcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTEvMS5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkxLzIuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85MS8zLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTEvNC5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkxL3RodW1ibmFpbC5qcGdcIl0gfSwgeyBcImlkXCI6IDkyLCBcInRpdGxlXCI6IFwiSE9UIFNBTEUgSU4gRVVST1BFIGVsZWN0cmljIHJhY2luZyBtb3RvcmN5Y2xlXCIsIFwiZGVzY3JpcHRpb25cIjogXCJIT1QgU0FMRSBJTiBFVVJPUEUgZWxlY3RyaWMgcmFjaW5nIG1vdG9yY3ljbGUgZWxlY3RyaWMgbW90b3JjeWNsZSBmb3Igc2FsZSBhZHVsdCBlbGVjdHJpYyBtb3RvcmN5Y2xlc1wiLCBcInByaWNlXCI6IDkyMCwgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTQuNCwgXCJyYXRpbmdcIjogNC4xOSwgXCJzdG9ja1wiOiAyMiwgXCJicmFuZFwiOiBcIkJSQVZFIEJVTExcIiwgXCJjYXRlZ29yeVwiOiBcIm1vdG9yY3ljbGVcIiwgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkyL3RodW1ibmFpbC5qcGdcIiwgXCJpbWFnZXNcIjogW1wiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85Mi8xLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTIvMi5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkyLzMuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85Mi80LmpwZ1wiXSB9LCB7IFwiaWRcIjogOTMsIFwidGl0bGVcIjogXCJBdXRvbWF0aWMgTW90b3IgR2FzIE1vdG9yY3ljbGVzXCIsIFwiZGVzY3JpcHRpb25cIjogXCIxNTBjYyA0LVN0cm9rZSBNb3RvcmN5Y2xlIEF1dG9tYXRpYyBNb3RvciBHYXMgTW90b3JjeWNsZXMgU2Nvb3RlciBtb3RvcmN5Y2xlcyAxNTBjYyBzY29vdGVyXCIsIFwicHJpY2VcIjogMTA1MCwgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMy4zNCwgXCJyYXRpbmdcIjogNC44NCwgXCJzdG9ja1wiOiAxMjcsIFwiYnJhbmRcIjogXCJzaG9jayBhYnNvcmJlclwiLCBcImNhdGVnb3J5XCI6IFwibW90b3JjeWNsZVwiLCBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTMvdGh1bWJuYWlsLmpwZ1wiLCBcImltYWdlc1wiOiBbXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkzLzEuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85My8yLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTMvMy5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkzLzQuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85My90aHVtYm5haWwuanBnXCJdIH0sIHsgXCJpZFwiOiA5NCwgXCJ0aXRsZVwiOiBcIm5ldyBhcnJpdmFscyBGYXNoaW9uIG1vdG9jcm9zcyBnb2dnbGVzXCIsIFwiZGVzY3JpcHRpb25cIjogXCJuZXcgYXJyaXZhbHMgRmFzaGlvbiBtb3RvY3Jvc3MgZ29nZ2xlcyBtb3RvcmN5Y2xlIG1vdG9jcm9zcyByYWNpbmcgbW90b3JjeWNsZVwiLCBcInByaWNlXCI6IDkwMCwgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMy44NSwgXCJyYXRpbmdcIjogNC4wNiwgXCJzdG9ja1wiOiAxMDksIFwiYnJhbmRcIjogXCJKSUVQT0xMWVwiLCBcImNhdGVnb3J5XCI6IFwibW90b3JjeWNsZVwiLCBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTQvdGh1bWJuYWlsLndlYnBcIiwgXCJpbWFnZXNcIjogW1wiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85NC8xLndlYnBcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk0LzIuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85NC8zLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTQvdGh1bWJuYWlsLndlYnBcIl0gfSwgeyBcImlkXCI6IDk1LCBcInRpdGxlXCI6IFwiV2hvbGVzYWxlIGNhcmdvIGxhc2hpbmcgQmVsdFwiLCBcImRlc2NyaXB0aW9uXCI6IFwiV2hvbGVzYWxlIGNhcmdvIGxhc2hpbmcgQmVsdCBUaWUgRG93biBlbmQgUmF0Y2hldCBzdHJhcCBjdXN0b21pemVkIHN0cmFwIDI1bW0gbW90b3JjeWNsZSAxNTAwa2dzIHdpdGggcnViYmVyIGhhbmRsZVwiLCBcInByaWNlXCI6IDkzMCwgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTcuNjcsIFwicmF0aW5nXCI6IDQuMjEsIFwic3RvY2tcIjogMTQ0LCBcImJyYW5kXCI6IFwiWGlhbmdsZVwiLCBcImNhdGVnb3J5XCI6IFwibW90b3JjeWNsZVwiLCBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTUvdGh1bWJuYWlsLmpwZ1wiLCBcImltYWdlc1wiOiBbXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk1LzEuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85NS8yLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTUvMy5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk1LzQuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85NS90aHVtYm5haWwuanBnXCJdIH0sIHsgXCJpZFwiOiA5NiwgXCJ0aXRsZVwiOiBcImxpZ2h0aW5nIGNlaWxpbmcga2l0Y2hlblwiLCBcImRlc2NyaXB0aW9uXCI6IFwiV2hvbGVzYWxlIHNsaW0gaGFuZ2luZyBkZWNvcmF0aXZlIGtpZCByb29tIGxpZ2h0aW5nIGNlaWxpbmcga2l0Y2hlbiBjaGFuZGVsaWVycyBwZW5kYW50IGxpZ2h0IG1vZGVyblwiLCBcInByaWNlXCI6IDMwLCBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNC44OSwgXCJyYXRpbmdcIjogNC44MywgXCJzdG9ja1wiOiA5NiwgXCJicmFuZFwiOiBcImxpZ2h0aW5nYnJpbGxpYW5jZVwiLCBcImNhdGVnb3J5XCI6IFwibGlnaHRpbmdcIiwgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk2L3RodW1ibmFpbC5qcGdcIiwgXCJpbWFnZXNcIjogW1wiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85Ni8xLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTYvMi5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk2LzMuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85Ni80LmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTYvdGh1bWJuYWlsLmpwZ1wiXSB9LCB7IFwiaWRcIjogOTcsIFwidGl0bGVcIjogXCJNZXRhbCBDZXJhbWljIEZsb3dlclwiLCBcImRlc2NyaXB0aW9uXCI6IFwiTWV0YWwgQ2VyYW1pYyBGbG93ZXIgQ2hhbmRlbGllciBIb21lIExpZ2h0aW5nIEFtZXJpY2FuIFZpbnRhZ2UgSGFuZ2luZyBMaWdodGluZyBQZW5kYW50IExhbXBcIiwgXCJwcmljZVwiOiAzNSwgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTAuOTQsIFwicmF0aW5nXCI6IDQuOTMsIFwic3RvY2tcIjogMTQ2LCBcImJyYW5kXCI6IFwiSWZlaSBIb21lXCIsIFwiY2F0ZWdvcnlcIjogXCJsaWdodGluZ1wiLCBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTcvdGh1bWJuYWlsLmpwZ1wiLCBcImltYWdlc1wiOiBbXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk3LzEuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85Ny8yLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTcvMy5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk3LzQud2VicFwiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTcvdGh1bWJuYWlsLmpwZ1wiXSB9LCB7IFwiaWRcIjogOTgsIFwidGl0bGVcIjogXCIzIGxpZ2h0cyBsbmRlbnBhbnQga2l0Y2hlbiBpc2xhbmdcIiwgXCJkZXNjcmlwdGlvblwiOiBcIjMgbGlnaHRzIGxuZGVucGFudCBraXRjaGVuIGlzbGFuZyBkaW5pbmcgcm9vbSBwZW5kYW50IHJpY2UgcGFwZXIgY2hhbmRlbGllciBjb250ZW1wb3JhcnkgbGVkIHBlbmRhbnQgbGlnaHQgbW9kZXJuIGNoYW5kZWxpZXJcIiwgXCJwcmljZVwiOiAzNCwgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogNS45MiwgXCJyYXRpbmdcIjogNC45OSwgXCJzdG9ja1wiOiA0NCwgXCJicmFuZFwiOiBcIkRBREFXVVwiLCBcImNhdGVnb3J5XCI6IFwibGlnaHRpbmdcIiwgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk4L3RodW1ibmFpbC5qcGdcIiwgXCJpbWFnZXNcIjogW1wiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85OC8xLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTgvMi5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk4LzMuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85OC80LmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTgvdGh1bWJuYWlsLmpwZ1wiXSB9LCB7IFwiaWRcIjogOTksIFwidGl0bGVcIjogXCJBbWVyaWNhbiBWaW50YWdlIFdvb2QgUGVuZGFudCBMaWdodFwiLCBcImRlc2NyaXB0aW9uXCI6IFwiQW1lcmljYW4gVmludGFnZSBXb29kIFBlbmRhbnQgTGlnaHQgRmFybWhvdXNlIEFudGlxdWUgSGFuZ2luZyBMYW1wIExhbXBhcmEgQ29sZ2FudGVcIiwgXCJwcmljZVwiOiA0NiwgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogOC44NCwgXCJyYXRpbmdcIjogNC4zMiwgXCJzdG9ja1wiOiAxMzgsIFwiYnJhbmRcIjogXCJJZmVpIEhvbWVcIiwgXCJjYXRlZ29yeVwiOiBcImxpZ2h0aW5nXCIsIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85OS90aHVtYm5haWwuanBnXCIsIFwiaW1hZ2VzXCI6IFtcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTkvMS5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk5LzIuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85OS8zLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTkvNC5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk5L3RodW1ibmFpbC5qcGdcIl0gfSwgeyBcImlkXCI6IDEwMCwgXCJ0aXRsZVwiOiBcIkNyeXN0YWwgY2hhbmRlbGllciBtYXJpYSB0aGVyZXNhIGZvciAxMiBsaWdodFwiLCBcImRlc2NyaXB0aW9uXCI6IFwiQ3J5c3RhbCBjaGFuZGVsaWVyIG1hcmlhIHRoZXJlc2EgZm9yIDEyIGxpZ2h0XCIsIFwicHJpY2VcIjogNDcsIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE2LCBcInJhdGluZ1wiOiA0Ljc0LCBcInN0b2NrXCI6IDEzMywgXCJicmFuZFwiOiBcIllJT1NJXCIsIFwiY2F0ZWdvcnlcIjogXCJsaWdodGluZ1wiLCBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTAwL3RodW1ibmFpbC5qcGdcIiwgXCJpbWFnZXNcIjogW1wiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMDAvMS5qcGdcIiwgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEwMC8yLmpwZ1wiLCBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTAwLzMuanBnXCIsIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMDAvdGh1bWJuYWlsLmpwZ1wiXSB9XTtcbiIsImltcG9ydCB7IHByb2R1Y3RzIH0gZnJvbSBcIi4vcHJvZHVjdHNcIjtcbmltcG9ydCAnLi9wcm9kdWN0c19maWVsZC5jc3MnO1xuY2xhc3MgUHJvZHVjdCB7XG4gICAgY29uc3RydWN0b3IoZGlyZWN0b3J5KSB7XG4gICAgICAgIHRoaXMuZGlyZWN0b3J5ID0gZGlyZWN0b3J5O1xuICAgIH1cbiAgICBwcm9kdWN0KCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvZHVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGJ0bkFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgYnRuQWRkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYnRuJyk7XG4gICAgICAgICAgICBidG5BZGQuY2xhc3NMaXN0LmFkZCgnYnRuX2FkZCcpO1xuICAgICAgICAgICAgYnRuQWRkLnNldEF0dHJpYnV0ZSgnZGF0YS1idG4nLCBwcm9kdWN0c1tpXS5pZCk7XG4gICAgICAgICAgICBidG5BZGQuaW5uZXJUZXh0ID0gJ0FERCBUTyBDQVJUJztcbiAgICAgICAgICAgIGNvbnN0IGJ0bkRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgYnRuRGV0YWlscy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2J0bicpO1xuICAgICAgICAgICAgYnRuRGV0YWlscy5pbm5lclRleHQgPSAnREVUQUlMUyc7XG4gICAgICAgICAgICBjb25zdCBidG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGJ0bkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2J0bl9jb250YWluZXInKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwcm9kdWN0SXRlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2R1Y3RfaXRlbScpO1xuICAgICAgICAgICAgcHJvZHVjdEl0ZW0uc2V0QXR0cmlidXRlKCdpZCcsIHByb2R1Y3RzW2ldLmlkKTtcbiAgICAgICAgICAgIGxldCB1cmwgPSBwcm9kdWN0c1tpXS50aHVtYm5haWw7XG4gICAgICAgICAgICBwcm9kdWN0SXRlbS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dXJsfSlgO1xuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGl0bGUnKTtcbiAgICAgICAgICAgIHRpdGxlLmlubmVyVGV4dCA9IHByb2R1Y3RzW2ldLnRpdGxlO1xuICAgICAgICAgICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgaW5mby5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2luZm8nKTtcbiAgICAgICAgICAgIGxldCBjYXRlZ29yeSA9IHByb2R1Y3RzW2ldLmNhdGVnb3J5O1xuICAgICAgICAgICAgbGV0IGJyYW5kID0gcHJvZHVjdHNbaV0uYnJhbmQ7XG4gICAgICAgICAgICBsZXQgcHJpY2UgPSBwcm9kdWN0c1tpXS5wcmljZTtcbiAgICAgICAgICAgIGxldCBkaXNjb3VudCA9IHByb2R1Y3RzW2ldLmRpc2NvdW50UGVyY2VudGFnZTtcbiAgICAgICAgICAgIGxldCByYXRpbmcgPSBwcm9kdWN0c1tpXS5yYXRpbmc7XG4gICAgICAgICAgICBsZXQgc3RvY2sgPSBwcm9kdWN0c1tpXS5zdG9jaztcbiAgICAgICAgICAgIGluZm8uaW5uZXJUZXh0ID0gYENhdGVnb3J5OiAke2NhdGVnb3J5fVxcblxuICAgICAgICBCcmVuZDogJHticmFuZH1cXG5cbiAgICAgICAgUHJpY2U6ICR7cHJpY2V9XFxuXG4gICAgICAgIERpc2NvdW50OiAke2Rpc2NvdW50fVxcblxuICAgICAgICBSYXRpbmc6ICR7cmF0aW5nfVxcblxuICAgICAgICBTdG9jazogJHtzdG9ja31gO1xuICAgICAgICAgICAgKF9hID0gdGhpcy5kaXJlY3RvcnkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hcHBlbmQocHJvZHVjdEl0ZW0pO1xuICAgICAgICAgICAgcHJvZHVjdEl0ZW0uYXBwZW5kKHRpdGxlLCBpbmZvLCBidG5Db250YWluZXIpO1xuICAgICAgICAgICAgYnRuQ29udGFpbmVyLmFwcGVuZChidG5BZGQsIGJ0bkRldGFpbHMpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdDtcbiIsImltcG9ydCB7IHByb2R1Y3RzIH0gZnJvbSAnLi4vcHJvZHVjdHNfZmllbGQvcHJvZHVjdHMnO1xuaW1wb3J0ICcuL3NlbGVjdF9ib3guY3NzJztcbmNsYXNzIFNlbGVjdEFyciB7XG4gICAgY29uc3RydWN0b3Ioa2V5LCBhcnJDYXRlZ29yeSkge1xuICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICAgICAgdGhpcy5hcnJDYXRlZ29yeSA9IGFyckNhdGVnb3J5O1xuICAgIH1cbiAgICBzZWxlY0FycigpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9kdWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuYXJyQ2F0ZWdvcnlbMF0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcnJDYXRlZ29yeS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgW3RoaXMua2V5XTogcHJvZHVjdHNbaV1bdGhpcy5rZXldLFxuICAgICAgICAgICAgICAgICAgICBpZDogW11cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmFyckNhdGVnb3J5LmZpbmQoaXRlbSA9PiBpdGVtW3RoaXMua2V5XSA9PSBwcm9kdWN0c1tpXVt0aGlzLmtleV0pKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcnJDYXRlZ29yeVt0aGlzLmFyckNhdGVnb3J5LmZpbmRJbmRleChuID0+IG5bdGhpcy5rZXldID09IHByb2R1Y3RzW2ldW3RoaXMua2V5XSldLmlkLnB1c2gocHJvZHVjdHNbaV0uaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcnJDYXRlZ29yeS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgW3RoaXMua2V5XTogcHJvZHVjdHNbaV1bdGhpcy5rZXldLFxuICAgICAgICAgICAgICAgICAgICBpZDogW3Byb2R1Y3RzW2ldLmlkXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0QXJyO1xuIiwiaW1wb3J0ICogYXMgbm9VaVNsaWRlciBmcm9tICdub3Vpc2xpZGVyJztcbmltcG9ydCAnbm91aXNsaWRlci9kaXN0L25vdWlzbGlkZXIuY3NzJztcbmltcG9ydCAnLi9yYW5nZS1zbGlkZXIvcmFuZ2Utc2xpZGVyLmNzcyc7XG5jbGFzcyBTZWxlY3RFbCB7XG4gICAgY29uc3RydWN0b3IoZGlyZWN0b3J5LCBhcnIsIG5hbWUsIHRleHQpIHtcbiAgICAgICAgdGhpcy5kaXJlY3RvcnkgPSBkaXJlY3RvcnksXG4gICAgICAgICAgICB0aGlzLmFyciA9IGFycixcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IG5hbWUsXG4gICAgICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgIH1cbiAgICBzZWxlY3RFbCgpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgY29uc3QgY3JlYXRlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjcmVhdGVFbGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsICdpbnB1dEJveCcpO1xuICAgICAgICBjb25zdCBjcmVhdGVFbGVtQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNyZWF0ZUVsZW1Cb3guc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgJ2RpdklucHV0Jyk7XG4gICAgICAgIGNyZWF0ZUVsZW0uaW5uZXJUZXh0ID0gdGhpcy50ZXh0O1xuICAgICAgICAoX2EgPSB0aGlzLmRpcmVjdG9yeSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFwcGVuZChjcmVhdGVFbGVtKTtcbiAgICAgICAgKF9iID0gdGhpcy5kaXJlY3RvcnkpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5hcHBlbmQoY3JlYXRlRWxlbUJveCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICAgIGVsZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwSW5wdXRcIik7XG4gICAgICAgICAgICBlbGVtLmlubmVySFRNTCA9IGA8bGFiZWwgY2xhc3M9XCJkaXZJbnB1dFwiPjxpbnB1dCBjbGFzcz1cImlucHV0ICR7dGhpcy5uYW1lfVwiIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICBpZD0ke3RoaXMubmFtZX0ke2l9IGRhdGEtaWQ9JHt0aGlzLmFycltpXS5pZH0+JHt0aGlzLmFycltpXVt0aGlzLm5hbWVdfTwvbGFiZWw+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNjb3JlXCI+JHt0aGlzLmFycltpXS5pZC5sZW5ndGh9PC9zcGFuPmA7XG4gICAgICAgICAgICBjcmVhdGVFbGVtQm94LmFwcGVuZChlbGVtKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZWxlY3RTbGlkZXJFbCgpIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgICAgIGNvbnN0IGNyZWF0ZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY3JlYXRlRWxlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCAnaW5wdXRCb3gnKTtcbiAgICAgICAgY29uc3QgY3JlYXRlRWxlbUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjcmVhdGVFbGVtQm94LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsICdkaXZJbnB1dCcpO1xuICAgICAgICBjcmVhdGVFbGVtLmlubmVyVGV4dCA9IHRoaXMudGV4dDtcbiAgICAgICAgKF9hID0gdGhpcy5kaXJlY3RvcnkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hcHBlbmQoY3JlYXRlRWxlbSk7XG4gICAgICAgIChfYiA9IHRoaXMuZGlyZWN0b3J5KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuYXBwZW5kKGNyZWF0ZUVsZW1Cb3gpO1xuICAgICAgICBjb25zdCByYW5nZVNsaWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHJhbmdlU2xpZGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncmFuZ2VTbGlkZXInKTtcbiAgICAgICAgcmFuZ2VTbGlkZXIuc2V0QXR0cmlidXRlKCdpZCcsIGAke3RoaXMubmFtZX1JbnB1dGApO1xuICAgICAgICBjb25zdCBhcnJTb3J0ID0gdGhpcy5hcnIuc29ydCgoYSwgYikgPT4gYVt0aGlzLm5hbWVdIC0gYlt0aGlzLm5hbWVdKTtcbiAgICAgICAgbm9VaVNsaWRlci5jcmVhdGUocmFuZ2VTbGlkZXIsIHtcbiAgICAgICAgICAgIHN0YXJ0OiBbYXJyU29ydFswXVt0aGlzLm5hbWVdLCBhcnJTb3J0W2FyclNvcnQubGVuZ3RoIC0gMV1bdGhpcy5uYW1lXV0sXG4gICAgICAgICAgICBjb25uZWN0OiB0cnVlLFxuICAgICAgICAgICAgc3RlcDogMSxcbiAgICAgICAgICAgIHJhbmdlOiB7XG4gICAgICAgICAgICAgICAgJ21pbic6IGFyclNvcnRbMF1bdGhpcy5uYW1lXSxcbiAgICAgICAgICAgICAgICAnbWF4JzogYXJyU29ydFthcnJTb3J0Lmxlbmd0aCAtIDFdW3RoaXMubmFtZV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGlucHV0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpbnB1dHMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpbnB1dHMnKTtcbiAgICAgICAgY29uc3QgaW5wdXQwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGlucHV0MC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2lucHV0X3ZhbHVlJyk7XG4gICAgICAgIGlucHV0MC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnbnVtYmVyJyk7XG4gICAgICAgIGlucHV0MC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7dGhpcy5uYW1lfTBgKTtcbiAgICAgICAgY29uc3QgaW5wdXQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGlucHV0MS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2lucHV0X3ZhbHVlJyk7XG4gICAgICAgIGlucHV0MS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnbnVtYmVyJyk7XG4gICAgICAgIGlucHV0MS5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7dGhpcy5uYW1lfTFgKTtcbiAgICAgICAgY29uc3QgaW5wdXRzQXJyID0gW2lucHV0MCwgaW5wdXQxXTtcbiAgICAgICAgKF9jID0gcmFuZ2VTbGlkZXIubm9VaVNsaWRlcikgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLm9uKCd1cGRhdGUnLCBmdW5jdGlvbiAodmFsdWVzLCBoYW5kbGUpIHtcbiAgICAgICAgICAgIGlucHV0c0FycltoYW5kbGVdLmlubmVyVGV4dCA9IChNYXRoLnJvdW5kKCt2YWx1ZXNbaGFuZGxlXSkpLnRvU3RyaW5nKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjcmVhdGVFbGVtQm94LmFwcGVuZChyYW5nZVNsaWRlcik7XG4gICAgICAgIGNyZWF0ZUVsZW1Cb3guYXBwZW5kKGlucHV0cyk7XG4gICAgICAgIGlucHV0cy5hcHBlbmQoaW5wdXQwLCBpbnB1dDEpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdEVsO1xuIiwiaW1wb3J0IFNlbGVjdEFyciBmcm9tICcuL3NlbGVjdEFycic7XG5pbXBvcnQgU2VsZWN0RWwgZnJvbSAnLi9zZWxlY3RFbCc7XG5pbXBvcnQgJy4vc2VsZWN0X2JveC5jc3MnO1xuY2xhc3MgU2VsZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihkaXJlY3RvcnkpIHtcbiAgICAgICAgdGhpcy5kaXJlY3RvcnkgPSBkaXJlY3Rvcnk7XG4gICAgfVxuICAgIHNlbGVjdCgpIHtcbiAgICAgICAgY29uc3QgYXJyQyA9IFtdO1xuICAgICAgICBjb25zdCBhcnJCID0gW107XG4gICAgICAgIGNvbnN0IGFyclAgPSBbXTtcbiAgICAgICAgY29uc3QgYXJyUyA9IFtdO1xuICAgICAgICBjb25zdCBhcnJDYXRlZ29yeSA9IG5ldyBTZWxlY3RBcnIoXCJjYXRlZ29yeVwiLCBhcnJDKTtcbiAgICAgICAgYXJyQ2F0ZWdvcnkuc2VsZWNBcnIoKTtcbiAgICAgICAgY29uc3QgYXJyQnJhbmQgPSBuZXcgU2VsZWN0QXJyKFwiYnJhbmRcIiwgYXJyQik7XG4gICAgICAgIGFyckJyYW5kLnNlbGVjQXJyKCk7XG4gICAgICAgIGNvbnN0IGFyclByaWNlID0gbmV3IFNlbGVjdEFycihcInByaWNlXCIsIGFyclApO1xuICAgICAgICBhcnJQcmljZS5zZWxlY0FycigpO1xuICAgICAgICBjb25zdCBhcnJTdG9jayA9IG5ldyBTZWxlY3RBcnIoXCJzdG9ja1wiLCBhcnJTKTtcbiAgICAgICAgYXJyU3RvY2suc2VsZWNBcnIoKTtcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlDcmVhdGUgPSBuZXcgU2VsZWN0RWwodGhpcy5kaXJlY3RvcnksIGFyckMsIFwiY2F0ZWdvcnlcIiwgXCJDYXRlZ29yeVwiKTtcbiAgICAgICAgY2F0ZWdvcnlDcmVhdGUuc2VsZWN0RWwoKTtcbiAgICAgICAgY29uc3QgYnJhbmRDcmVhdGUgPSBuZXcgU2VsZWN0RWwodGhpcy5kaXJlY3RvcnksIGFyckIsIFwiYnJhbmRcIiwgXCJCcmFuZFwiKTtcbiAgICAgICAgYnJhbmRDcmVhdGUuc2VsZWN0RWwoKTtcbiAgICAgICAgY29uc3QgcHJpY2VDcmVhdGUgPSBuZXcgU2VsZWN0RWwodGhpcy5kaXJlY3RvcnksIGFyclAsIFwicHJpY2VcIiwgXCJQcmljZSAkOlwiKTtcbiAgICAgICAgcHJpY2VDcmVhdGUuc2VsZWN0U2xpZGVyRWwoKTtcbiAgICAgICAgY29uc3Qgc3RvY2tDcmVhdGUgPSBuZXcgU2VsZWN0RWwodGhpcy5kaXJlY3RvcnksIGFyclMsIFwic3RvY2tcIiwgXCJTdG9ja1wiKTtcbiAgICAgICAgc3RvY2tDcmVhdGUuc2VsZWN0U2xpZGVyRWwoKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBTZWxlY3Q7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBQcm9kdWN0IGZyb20gJy4vcHJvZHVjdHNfZmllbGQvcHJvZHVjdHNfZmllbGQnO1xuaW1wb3J0IFNlbGVjdCBmcm9tICcuL3NlbGVjdF9ib3gvc2VsZWN0X2JveCc7XG5pbXBvcnQgUHJvZHVjdFNlbGVjdGlvbiBmcm9tICcuL3Byb2R1Y3RzX2ZpZWxkL3Byb2R1Y3Rfc2VsZWN0aW9uL3Byb2R1Y3Rfc2VsZWN0aW9uJztcbmltcG9ydCBCYXNrZXQgZnJvbSAnLi9iYXNrZXQvYmFza2V0JztcbmNvbnN0IHByb2R1Y3RzRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2R1Y3RzX2ZpZWxkXCIpO1xuY29uc3QgcHJvZHVjdHMgPSBuZXcgUHJvZHVjdChwcm9kdWN0c0ZpZWxkKTtcbnByb2R1Y3RzLnByb2R1Y3QoKTtcbmNvbnN0IGNhdGVnb3J5Qm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXRlZ29yeV9ib3hcIik7XG5jb25zdCBzZWxlY3QgPSBuZXcgU2VsZWN0KGNhdGVnb3J5Qm94KTtcbnNlbGVjdC5zZWxlY3QoKTtcbmNvbnN0IHByb2R1Y3RzRmllbGRTZWxlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdF9pdGVtJyk7XG5jb25zdCByZXNldEZpbHRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXRfZmlsdGVycycpO1xuY29uc3QgcHJvZHVjdFNlbGVjdGlvbiA9IG5ldyBQcm9kdWN0U2VsZWN0aW9uKHByb2R1Y3RzRmllbGRTZWxlY3Rpb24sIHJlc2V0RmlsdGVycywgcHJvZHVjdHNGaWVsZCk7XG5wcm9kdWN0U2VsZWN0aW9uLnByb2R1Y3RTZWxlY3Rpb24oKTtcbmNvbnN0IGJhc2tldEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53cmFwcGVyX2Jhc2tldFwiKTtcbmNvbnN0IGJhc2tldFNjb3JlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXLRgWxlXCIpO1xuY29uc3QgYmFza2V0VG90YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvdGFsX3ByaWNlXCIpO1xuY29uc3QgYmFza2V0ID0gbmV3IEJhc2tldChiYXNrZXRGaWVsZCwgYmFza2V0U2NvcmUsIGJhc2tldFRvdGFsKTtcbmJhc2tldC5iYXNrZXRSZXN1bHQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==