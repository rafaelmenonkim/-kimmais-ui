"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Gradient = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

var Gradient = _styledComponents.default.p(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  background: var(--font-gradient);\n  font-size: 2rem;\n  font-weight: var(--font-weight-black);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n"])));

exports.Gradient = Gradient;