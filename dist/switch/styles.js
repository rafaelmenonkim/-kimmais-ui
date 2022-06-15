"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Body = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

var Body = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  display: inline-block;\n  position: relative;\n\n  .react-switch-bg {\n    border: 1px solid ", ";\n  }\n"])), function (_ref) {
  var active = _ref.active;
  return active ? "transparent" : "#707070";
});

exports.Body = Body;