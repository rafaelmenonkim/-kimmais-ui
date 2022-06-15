"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _styles = require("./styles");

var _excluded = ["type"];
var Text = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var type = _ref.type,
      props = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_styles.Input, Object.assign({
    ref: ref,
    type: type ? type : "text"
  }, props));
});
var _default = Text;
exports.default = _default;