"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomTabs = exports.CustomTabPanel = exports.CustomTabList = exports.CustomTab = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _reactTabs = require("react-tabs");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

var standardTab = (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  background-color: var(--color-primary-05);\n  font-weight: var(--font-weight-semi-bold);\n  transition: all 0.2s;\n\n  &.is-selected {\n    background-color: var(--color-primary-01);\n    color: var(--color-primary-05);\n  }\n\n  & + li::before {\n    content: \"\";\n    border-left: 1px solid var(--color-primary-03);\n    position: absolute;\n    left: 0;\n    height: 1.5rem;\n  }\n\n  &.is-selected::before,\n  &.is-selected + li::before {\n    border: none;\n  }\n"])));
var underScoredTab = (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n  &.is-selected {\n    font-weight: var(--font-weight-semi-bold);\n    color: var(--color-primary-01);\n    border-bottom: 3px solid var(--color-primary-01);\n  }\n"])));
var CustomTabs = (0, _styledComponents.default)(_reactTabs.Tabs)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2.default)(["\n  -webkit-tap-highlight-color: transparent;\n"])));
exports.CustomTabs = CustomTabs;
var CustomTabList = (0, _styledComponents.default)(_reactTabs.TabList)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2.default)(["\n  display: inline-block;\n  padding: 0;\n  white-space: nowrap;\n  width: 100%;\n  background-color: var(--color-primary-05);\n  border-radius: 0.5rem 0.5rem 0 0;\n"])));
exports.CustomTabList = CustomTabList;
var CustomTab = (0, _styledComponents.default)(_reactTabs.Tab)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2.default)(["\n  color: var(--color-primary-03);\n  align-items: center;\n  display: inline-flex;\n  justify-content: center;\n  list-style: none;\n  padding: 0.375rem 0.75rem;\n  cursor: pointer;\n  height: 2.8125rem;\n  position: relative;\n\n  ", "\n\n  :first-child {\n    border-radius: 0.5rem 0 0 0;\n  }\n\n  :last-child {\n    border-radius: 0 0.5rem 0 0;\n  }\n\n  &.is-disabled {\n    cursor: not-allowed;\n  }\n"])), function (_ref) {
  var variant = _ref.variant;
  return variant === "underscore" ? underScoredTab : standardTab;
});
exports.CustomTab = CustomTab;
var CustomTabPanel = (0, _styledComponents.default)(_reactTabs.TabPanel)(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2.default)(["\n  background-color: var(--color-primary-05);\n  border-radius: 0 0 0.5rem 0.5rem;\n  display: none;\n  padding: 2rem;\n  overflow: hidden;\n  height: 100%;\n\n  &.is-selected {\n    display: block;\n  }\n"])));
exports.CustomTabPanel = CustomTabPanel;