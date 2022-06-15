"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CrumbsContainer = exports.Crumb = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

var CrumbsContainer = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  align-items: center;\n"])));

exports.CrumbsContainer = CrumbsContainer;

var Crumb = _styledComponents.default.div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n  cursor: ", ";\n  font-size: 0.875rem;\n  letter-spacing: 0.01375rem;\n  white-space: nowrap;\n\n  & + & {\n    margin-left: 8px;\n  }\n\n  & + &::before {\n    color: initial;\n    content: \">\";\n    font-weight: initial;\n    margin-right: 8px;\n  }\n\n  &:last-child {\n    color: var(--color-primary-01);\n    font-weight: var(--font-weight-semi-bold);\n  }\n"])), function (_ref) {
  var isLast = _ref.isLast;
  return !isLast ? "pointer" : "default";
});

exports.Crumb = Crumb;