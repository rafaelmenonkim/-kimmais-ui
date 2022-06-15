"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

var HorizontalScrollWrapper = function HorizontalScrollWrapper(_ref) {
  var padding = _ref.padding,
      _ref$paddingSize = _ref.paddingSize,
      paddingSize = _ref$paddingSize === void 0 ? "32px" : _ref$paddingSize,
      children = _ref.children;
  if (!padding) return /*#__PURE__*/_react.default.createElement(_styles.ScrollWrapper, null, children);
  return /*#__PURE__*/_react.default.createElement(_styles.Border, {
    paddingSize: paddingSize
  }, /*#__PURE__*/_react.default.createElement(_styles.ScrollWrapper, null, children));
};

var _default = HorizontalScrollWrapper;
exports.default = _default;