"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = exports.DateContainer = exports.CalendarIcon = exports.Calendar = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _reactNumberFormat = _interopRequireDefault(require("react-number-format"));

var _reactCalendar = _interopRequireDefault(require("react-calendar"));

var _icon = _interopRequireDefault(require("../../icon"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

var DateContainer = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  width: 100%;\n  position: relative;\n"])));

exports.DateContainer = DateContainer;
var Input = (0, _styledComponents.default)(_reactNumberFormat.default)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n  border: 1px solid var(--color-secundary-06);\n  appearance: none;\n  border-radius: 0.25rem;\n  font-size: 0.875rem;\n  font-weight: var(--font-weight-regular);\n  padding: 0 1rem;\n  position: relative;\n  outline: none;\n  height: 2.5rem;\n  width: 100%;\n\n  &:disabled + svg {\n    pointer-events: none;\n  }\n"])));
exports.Input = Input;
var Calendar = (0, _styledComponents.default)(_reactCalendar.default)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2.default)(["\n  position: absolute;\n  overflow: hidden;\n  max-height: ", ";\n  min-width: ", ";\n  max-width: ", ";\n  opacity: ", ";\n  border-color: ", ";\n  transition: opacity 0.25s ease-in-out;\n  z-index: 1001;\n  ", "\n"])), function (_ref) {
  var visible = _ref.visible;
  return visible ? "100rem" : 0;
}, function (_ref2) {
  var visible = _ref2.visible;
  return visible ? "450px" : 0;
}, function (_ref3) {
  var visible = _ref3.visible;
  return visible ? "100rem" : 0;
}, function (_ref4) {
  var visible = _ref4.visible;
  return visible ? "1" : "0";
}, function (_ref5) {
  var visible = _ref5.visible;
  return visible ? "" : "transparent";
}, function (_ref6) {
  var position = _ref6.position;
  return position && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2.default)(["\n      top: ", "px;\n      left: ", "px;\n    "])), position.top + 45, position.left > 450 - position.fieldSize ? position.right - 458 : position.right - position.left);
});
exports.Calendar = Calendar;
var CalendarIcon = (0, _styledComponents.default)(_icon.default)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2.default)(["\n  stroke: var(--color-secundary-06);\n  cursor: pointer;\n  height: 1.25rem;\n  width: 1.25rem;\n  position: absolute;\n  top: 0.6875rem;\n  right: 1.625rem;\n"])));
exports.CalendarIcon = CalendarIcon;