"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Selector = exports.PagesList = exports.PagesContainer = exports.PageIndex = exports.Arrow = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _icon = _interopRequireDefault(require("../../icon"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

var PagesList = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  display: inline-flex;\n  height: 1.5rem;\n"])));

exports.PagesList = PagesList;

var PagesContainer = _styledComponents.default.ul(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n  display: inline-flex;\n  height: 100%;\n  position: relative;\n"])));

exports.PagesContainer = PagesContainer;

var PageIndex = _styledComponents.default.li(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2.default)(["\n  color: var(--color-primary-01);\n  cursor: pointer;\n  font-weight: var(--font-weight-medium);\n  font-size: 0.875rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 1.5rem;\n  width: 1.5rem;\n  border-radius: 50%;\n\n  + li {\n    margin-left: 0.5rem;\n  }\n"])));

exports.PageIndex = PageIndex;

var Selector = _styledComponents.default.div(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2.default)(["\n  background-color: var(--color-primary-01);\n  border-radius: 50%;\n  height: 1.5rem;\n  width: 1.5rem;\n  position: absolute;\n  top: 0;\n  left: ", ";\n  transition: all 0.25s ease-out;\n\n  ::before {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    color: var(--color-primary-05);\n    content: \"", "\";\n  }\n"])), function (_ref) {
  var position = _ref.position;
  return (position - 1) * 2 + "rem";
}, function (_ref2) {
  var currentPage = _ref2.currentPage;
  return currentPage ? currentPage : null;
});

exports.Selector = Selector;
var Arrow = (0, _styledComponents.default)(_icon.default)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2.default)(["\n  stroke: var(--color-primary-01);\n  cursor: pointer;\n  transform: rotate(\n    ", "\n  );\n  height: 1.5rem;\n  width: 1.5rem;\n\n  ", "\n"])), function (_ref3) {
  var direction = _ref3.direction;
  return direction === "left" ? "-90deg" : "90deg";
}, function (_ref4) {
  var disabled = _ref4.disabled;
  return disabled && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2.default)(["\n      filter: grayscale(100%);\n      pointer-events: none;\n    "])));
});
exports.Arrow = Arrow;