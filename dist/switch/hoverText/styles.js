"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FloatingBox = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

var FloatingBox = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  background-color: var(--color-primary-05);\n  border-radius: 4px;\n  box-shadow: 0 0.125rem 0.3125rem var(--color-secundary-04);\n  color: var(--color-primary-02);\n  text-align: center;\n  min-height: 24px;\n  position: absolute;\n  bottom: calc(100% + 6px);\n  left: 50%;\n  transform: translateX(-50%);\n  padding: 6px;\n  display: ", ";\n  text-transform: capitalize;\n  white-space: nowrap;\n  z-index: 15;\n"])), function (_ref) {
  var visible = _ref.visible;
  return visible ? "auto" : "none";
});

exports.FloatingBox = FloatingBox;