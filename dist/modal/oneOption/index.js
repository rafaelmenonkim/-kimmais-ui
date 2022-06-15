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

var OneOption = function OneOption(_ref) {
  var open = _ref.open,
      onClose = _ref.onClose,
      onOptionClick = _ref.onOptionClick,
      _ref$optionText = _ref.optionText,
      optionText = _ref$optionText === void 0 ? "Ok" : _ref$optionText,
      children = _ref.children;
  return /*#__PURE__*/_react.default.createElement(_reactResponsiveModal.default, {
    open: open,
    onClose: onClose,
    center: true
  }, /*#__PURE__*/_react.default.createElement(_styles.Content, null, children, /*#__PURE__*/_react.default.createElement(_styles.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_button.default, {
    onClick: onOptionClick
  }, optionText))));
};

var _default = OneOption;
exports.default = _default;