"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Box = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2;

var Box = _styledComponents.default.label(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  border: 1px solid var(--color-primary-01);\n  border-radius: 4px;\n  display: inline-block;\n  min-height: 1.375rem;\n  min-width: 1.375rem;\n  position: relative;\n  ", ";\n\n  input {\n    opacity: 0;\n  }\n\n  input:checked ~ div {\n    background-color: var(--color-primary-01);\n    border-radius: 4px;\n    min-height: 0.875rem;\n    min-width: 0.875rem;\n    position: absolute;\n    left: 3px;\n    top: 3px;\n  }\n\n  input:disabled ~ div,\n  input:disabled {\n    cursor: not-allowed;\n    background-color: var(--color-secundary-04);\n  }\n"])), function (_ref) {
  var disabled = _ref.disabled;
  return disabled && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n      cursor: not-allowed;\n      border-color: var(--color-primary-03);\n    "])));
});

exports.Box = Box;