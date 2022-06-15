"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

var Suboption = function Suboption(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react.default.createElement(_styles.SuboptionTitle, null, children);
};

var _default = Suboption;
exports.default = _default;