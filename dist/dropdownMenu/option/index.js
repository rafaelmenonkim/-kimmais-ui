"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

var Option = function Option(_ref) {
  var children = _ref.children,
      icon = _ref.icon,
      iconColor = _ref.iconColor,
      title = _ref.title;
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.OptionContainer, null, /*#__PURE__*/_react.default.createElement(_styles.IconContainer, {
    iconColor: iconColor
  }, icon), /*#__PURE__*/_react.default.createElement(_styles.OptionTitle, null, title)), children);
};

var _default = Option;
exports.default = _default;