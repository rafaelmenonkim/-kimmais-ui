"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ItemsList = exports.FloatingContainer = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

var FloatingContainer = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  background-color: var(--color-primary-05);\n  border-radius: 0.5rem;\n  box-shadow: 0 0.125rem 0.3125rem var(--color-secundary-04);\n  color: var(--color-primary-04);\n  text-align: left;\n  max-height: ", ";\n  overflow: hidden;\n  position: absolute;\n  transition: max-height 0.5s ease-in-out;\n  z-index: 5;\n  min-width: 100%;\n"])), function (_ref) {
  var visible = _ref.visible;
  return visible ? "93.75rem" : "0";
});

exports.FloatingContainer = FloatingContainer;

var ItemsList = _styledComponents.default.ul(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n  height: 100%;\n  width: 100%;\n\n  > *:hover {\n    background-color: ", ";\n  }\n\n  > * {\n    align-items: center;\n    border: none;\n    background-color: transparent;\n    color: var(--color-primary-04);\n    display: flex;\n    font-size: inherit;\n    font-weight: inherit;\n    height: 2.1875rem;\n    padding: 0.5rem 1rem;\n    transition: all 0.15s;\n  }\n"])), function (_ref2) {
  var hover = _ref2.hover;
  return hover ? "var(--color-secundary-04)" : null;
});

exports.ItemsList = ItemsList;