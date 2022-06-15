"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Decoration = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

var STYLES = {
  default: (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n    color: var(--color-primary-01);\n    font-weight: var(--font-weight-semi-bold);\n  "]))),
  underlined: (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n    color: var(--color-primary-01);\n    text-decoration: underline;\n  "]))),
  bold: (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2.default)(["\n    text-decoration: underline;\n    font-weight: var(--font-weight-bold);\n  "])))
};

var Decoration = _styledComponents.default.span(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2.default)(["\n  ", "\n"])), function (_ref) {
  var variant = _ref.variant;
  return STYLES[variant] || STYLES["default"];
});

exports.Decoration = Decoration;