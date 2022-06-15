"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

var Spacing = function Spacing(_ref) {
  var children = _ref.children,
      top = _ref.top,
      bottom = _ref.bottom,
      left = _ref.left,
      right = _ref.right,
      props = _ref.props;
  return /*#__PURE__*/_react.default.createElement(_styles.Body, Object.assign({
    top: top,
    bottom: bottom,
    left: left,
    right: right
  }, props), children);
};

var _default = Spacing;
exports.default = _default;