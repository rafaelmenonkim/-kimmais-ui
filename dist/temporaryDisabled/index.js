"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

var TemporaryDisabled = function TemporaryDisabled(_ref) {
  var children = _ref.children,
      margin = _ref.margin;
  return /*#__PURE__*/_react.default.createElement(_styles.Disabled, {
    margin: margin
  }, children);
};

var _default = TemporaryDisabled;
exports.default = _default;