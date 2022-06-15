"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("./styles");

var Masked = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var props = Object.assign({}, _ref);
  return /*#__PURE__*/_react.default.createElement(_styles.Input, Object.assign({
    ref: ref,
    type: "text",
    isText: !!props.displayType
  }, props));
});
var _default = Masked;
exports.default = _default;