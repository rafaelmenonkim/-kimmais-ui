"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

var ErrorMessage = function ErrorMessage(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react.default.createElement(_styles.Message, null, children);
};

var _default = ErrorMessage;
exports.default = _default;