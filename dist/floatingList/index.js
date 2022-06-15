"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

var _excluded = ["children", "hover", "visible"];

var FloatingList = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      hover = _ref.hover,
      visible = _ref.visible,
      props = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_styles.FloatingContainer, Object.assign({
    visible: visible
  }, props, {
    ref: ref
  }), /*#__PURE__*/_react.default.createElement(_styles.ItemsList, {
    hover: hover
  }, children));
});

var _default = FloatingList;
exports.default = _default;