"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScrollWrapper = exports.Border = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

var Border = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  padding: ", ";\n"])), function (_ref) {
  var paddingSize = _ref.paddingSize;
  return paddingSize;
});

exports.Border = Border;

var ScrollWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n  overflow-x: auto;\n  width: 100%;\n"])));

exports.ScrollWrapper = ScrollWrapper;