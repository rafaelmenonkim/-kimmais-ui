"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

var _excluded = ["hover"];

var HoverText = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var hover = _ref.hover,
      props = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_styles.FloatingBox, Object.assign({
    ref: ref
  }, props), hover, /*#__PURE__*/_react.default.createElement(_styles.Triangle, null));
});

var _default = HoverText;
exports.default = _default;