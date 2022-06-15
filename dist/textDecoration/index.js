"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

var TextDecoration = function TextDecoration(_ref) {
  var children = _ref.children,
      variant = _ref.variant;
  return /*#__PURE__*/_react.default.createElement(_styles.Decoration, {
    variant: variant
  }, children);
};

var _default = TextDecoration;
exports.default = _default;