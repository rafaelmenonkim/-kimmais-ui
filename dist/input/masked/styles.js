"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactNumberFormat = _interopRequireDefault(require("react-number-format"));

var _templateObject;

var Input = (0, _styledComponents.default)(_reactNumberFormat.default)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  border: 1px solid var(--color-secundary-06);\n  border-radius: 0.25rem;\n  font-size: 0.875rem;\n  font-weight: var(--font-weight-regular);\n  padding: 0 1rem;\n  outline: none;\n  height: 2.5rem;\n  width: 100%;\n\n  ::placeholder {\n    color: var(--color-primary-03);\n  }\n\n  ", "\n"])), function (_ref) {
  var isText = _ref.isText;
  return isText && "\n        border: none;\n        font-size: 1rem;\n    ";
});
exports.Input = Input;