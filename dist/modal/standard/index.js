"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactResponsiveModal = _interopRequireDefault(require("react-responsive-modal"));

var _styles = require("../styles");

var ModalV2 = function ModalV2(_ref) {
  var open = _ref.open,
      onClose = _ref.onClose,
      children = _ref.children;
  return /*#__PURE__*/_react.default.createElement(_reactResponsiveModal.default, {
    open: open,
    onClose: onClose,
    center: true
  }, /*#__PURE__*/_react.default.createElement(_styles.Content, null, children));
};

var _default = ModalV2;
exports.default = _default;