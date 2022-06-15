"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

var _icon = _interopRequireDefault(require("../icon"));

var _excluded = ["children", "icon"];

var ButtonV2 = function ButtonV2(_ref) {
  var children = _ref.children,
      icon = _ref.icon,
      props = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_styles.CustomButton, props, icon && /*#__PURE__*/_react.default.createElement(_icon.default, {
    name: icon
  }), children);
};

var _default = ButtonV2;
exports.default = _default;