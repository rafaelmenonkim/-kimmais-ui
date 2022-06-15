"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

var Decimal = function Decimal(_ref) {
  var props = Object.assign({}, _ref);
  return /*#__PURE__*/_react.default.createElement(_styles.DecimalInput, Object.assign({
    decimalSeparator: ",",
    thousandSeparator: ".",
    decimalScale: 2,
    fixedDecimalScale: true
  }, props));
};

var _default = Decimal;
exports.default = _default;