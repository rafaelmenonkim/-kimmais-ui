"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

var Wrapper = _styledComponents.default.span(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  position: relative;\n\n  > * {\n    transition: all 0.25s;\n  }\n\n  > div,\n  label {\n    color: ", ";\n  }\n\n  input,\n  .Select__control {\n    border: ", ";\n  }\n\n  > p {\n    position: absolute;\n  }\n"])), function (_ref) {
  var error = _ref.error;
  return error && "var(--color-status-02)";
}, function (_ref2) {
  var error = _ref2.error;
  return error && "1px solid var(--color-status-02)";
});

exports.Wrapper = Wrapper;