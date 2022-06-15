"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Label = exports.GroupRow = exports.GroupName = exports.GroupContentTr = exports.CustomRow = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _table = _interopRequireDefault(require("../../../table"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

var Label = _styledComponents.default.label(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  width: 100%;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  text-transform: capitalize;\n  font-weight: var(--font-weight-medium);\n  position: relative;\n"])));

exports.Label = Label;

var GroupName = _styledComponents.default.div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  align-items: center;\n  margin-left: 16px;\n  svg {\n    margin-left: 8px;\n    height: 8px;\n    width: 8px;\n    fill: black;\n    transform: ", ";\n  }\n"])), function (_ref) {
  var visible = _ref.visible;
  return visible ? "" : "scaleY(-1)";
});

exports.GroupName = GroupName;
var GroupContentTr = (0, _styledComponents.default)(_table.default.Tr)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2.default)(["\n  display: ", ";\n  overflow: hidden;\n"])), function (_ref2) {
  var visible = _ref2.visible;
  return visible ? "auto" : "none";
});
exports.GroupContentTr = GroupContentTr;
var CustomRow = (0, _styledComponents.default)(_table.default.Tr)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2.default)(["\n  cursor: pointer;\n\n  span {\n    margin-left: 40px;\n  }\n\n  ", "\n"])), function (_ref3) {
  var disabled = _ref3.disabled;
  return disabled && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2.default)(["\n      cursor: not-allowed;\n\n      td {\n        color: var(--color-secundary-06);\n      }\n\n      label,\n      input {\n        border-color: var(--color-secundary-06);\n        cursor: not-allowed;\n      }\n    "])));
});
exports.CustomRow = CustomRow;

var GroupRow = _styledComponents.default.div(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  width: 100%;\n  align-items: center;\n"])));

exports.GroupRow = GroupRow;