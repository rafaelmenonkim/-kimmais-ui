"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Body = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

var Body = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  margin-top: ", ";\n  margin-bottom: ", ";\n  margin-left: ", ";\n  margin-right: ", ";\n"])), function (_ref) {
  var top = _ref.top;
  return top && top;
}, function (_ref2) {
  var bottom = _ref2.bottom;
  return bottom && bottom;
}, function (_ref3) {
  var left = _ref3.left;
  return left && left;
}, function (_ref4) {
  var right = _ref4.right;
  return right && right;
});

exports.Body = Body;