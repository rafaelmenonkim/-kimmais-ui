"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

var Text = _styledComponents.default.h2(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  color: var(--color-primary-04);\n  font-weight: var(--font-weight-semi-bold);\n  font-size: 1.5rem;\n  letter-spacing: 0;\n"])));

exports.Text = Text;