"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

var ErrorWrapper = function ErrorWrapper(_ref) {
  var children = _ref.children,
      error = _ref.error;
  return /*#__PURE__*/_react.default.createElement(_styles.Wrapper, {
    error: error
  }, children);
};

var _default = ErrorWrapper;
exports.default = _default;