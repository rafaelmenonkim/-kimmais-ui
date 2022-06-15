"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

var OrderIcon = function OrderIcon(_ref) {
  var clickUp = _ref.clickUp,
      clickDown = _ref.clickDown,
      props = _ref.props;
  return /*#__PURE__*/_react.default.createElement(_styles.Wrapper, props, /*#__PURE__*/_react.default.createElement(_styles.Triangle, {
    onClick: clickUp
  }), /*#__PURE__*/_react.default.createElement(_styles.Triangle, {
    onClick: clickDown,
    down: true
  }));
};

var _default = OrderIcon;
exports.default = _default;