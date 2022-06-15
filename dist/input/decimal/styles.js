"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DecimalInput = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _masked = _interopRequireDefault(require("../masked"));

var _templateObject, _templateObject2;

var variants = {
  invisible: "\n    border: none;\n    height: 35px;\n    border-radius: 8px;\n    padding: 0 8px;\n    border: 1px solid transparent;\n    background: none;\n    ".concat(function (_ref) {
    var displayType = _ref.displayType;
    return displayType !== "text" && (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n        :hover,\n        :focus {\n          border: 1px solid var(--color-secundary-05);\n          background: var(--color-primary-05);\n        }\n      "])));
  }, "\n    \n  ")
};
var DecimalInput = (0, _styledComponents.default)(_masked.default)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n  ", "\n"])), function (_ref2) {
  var variant = _ref2.variant;
  return variants[variant];
});
exports.DecimalInput = DecimalInput;