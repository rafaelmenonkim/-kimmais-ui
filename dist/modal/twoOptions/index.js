"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _button = _interopRequireDefault(require("../../button"));

var _react = _interopRequireDefault(require("react"));

var _reactResponsiveModal = _interopRequireDefault(require("react-responsive-modal"));

var _styles = require("../styles");

var TwoOptions = function TwoOptions(_ref) {
  var open = _ref.open,
      onClose = _ref.onClose,
      onLeftClick = _ref.onLeftClick,
      _ref$leftText = _ref.leftText,
      leftText = _ref$leftText === void 0 ? "Não" : _ref$leftText,
      onRightClick = _ref.onRightClick,
      _ref$rightText = _ref.rightText,
      rightText = _ref$rightText === void 0 ? "Sim" : _ref$rightText,
      children = _ref.children;
  return /*#__PURE__*/_react.default.createElement(_reactResponsiveModal.default, {
    open: open,
    onClose: onClose,
    center: true
  }, /*#__PURE__*/_react.default.createElement(_styles.Content, null, children, /*#__PURE__*/_react.default.createElement(_styles.ButtonsWrapper, null, /*#__PURE__*/_react.default.createElement(_button.default, {
    variant: "outlined",
    onClick: onLeftClick
  }, leftText), /*#__PURE__*/_react.default.createElement(_button.default, {
    onClick: onRightClick
  }, rightText))));
};

var _default = TwoOptions;
exports.default = _default;