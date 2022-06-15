"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Radio = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

var Radio = _styledComponents.default.label(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  border: 0.0625rem solid var(--color-primary-01);\n  border-radius: 50%;\n  display: inline-block;\n  height: 1.25rem;\n  width: 1.25rem;\n  position: relative;\n\n  input {\n    opacity: 0;\n  }\n\n  input:checked ~ div {\n    background-color: var(--color-primary-01);\n    border-radius: 50%;\n    height: 0.875rem;\n    width: 0.875rem;\n    position: absolute;\n    left: 0.125rem;\n    top: 0.125rem;\n  }\n"])));

exports.Radio = Radio;