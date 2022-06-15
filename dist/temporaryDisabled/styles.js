"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Disabled = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

var Disabled = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  filter: grayscale(100%);\n  margin: ", ";\n  pointer-events: none;\n  * {\n    cursor: not-allowed !important;\n  }\n"])), function (_ref) {
  var margin = _ref.margin;
  return margin;
});

exports.Disabled = Disabled;