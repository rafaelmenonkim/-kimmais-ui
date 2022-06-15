"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

var RadioButton = function RadioButton(_ref) {
  var props = Object.assign({}, _ref);
  return /*#__PURE__*/_react.default.createElement(_styles.Radio, null, /*#__PURE__*/_react.default.createElement("input", Object.assign({
    type: "radio"
  }, props)), /*#__PURE__*/_react.default.createElement("div", null));
};

var _default = RadioButton;
exports.default = _default;