"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Spinner = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _spinner = require("@/assets/spinner.svg");

var _templateObject, _templateObject2, _templateObject3;

var VARIANTS = {
  default: (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)([""]))),
  sm: (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n    height: 16px;\n    width: 16px;\n  "])))
};
var Spinner = (0, _styledComponents.default)(_spinner.ReactComponent)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2.default)(["\n  animation: loading 1.5s infinite linear;\n  ", "\n  @keyframes loading {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"])), function (_ref) {
  var variant = _ref.variant;
  return VARIANTS[variant];
});
exports.Spinner = Spinner;