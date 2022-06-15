"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = exports.SelectPositionHolder = exports.SelectAmount = exports.Container = exports.Arrow = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _icon = _interopRequireDefault(require("../../icon"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

var Container = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  display: inline-flex;\n  align-items: center;\n"])));

exports.Container = Container;

var Text = _styledComponents.default.p(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n  display: inline-block;\n  color: var(--color-primary-04);\n  font-size: 1rem;\n  font-weight: var(--font-weight-regular);\n"])));

exports.Text = Text;

var SelectPositionHolder = _styledComponents.default.div(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2.default)(["\n  position: relative;\n  height: 2.3125rem;\n  max-height: 90rem;\n  width: 4.625rem;\n  margin: 0 0.5rem;\n"])));

exports.SelectPositionHolder = SelectPositionHolder;

var SelectAmount = _styledComponents.default.ul(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2.default)(["\n  background-color: var(--color-primary-05);\n  color: var(--color-primary-01);\n  display: inline-block;\n  border: none;\n  border-radius: 0.5rem;\n  max-height: ", ";\n  width: 4.625rem;\n  box-shadow: 0px 0.1875rem 0.375rem #00000029;\n  overflow: hidden;\n  position: absolute;\n  transition: all 0.25s ease-in-out;\n  padding-left: 0.625rem;\n  cursor: pointer;\n  z-index: 15;\n\n  > svg {\n    stroke: var(--color-primary-01);\n    height: 2.125rem;\n    width: 2.125rem;\n    top: 50%;\n    transform: translateY(-50%);\n    right: 0.375rem;\n  }\n\n  > li {\n    font-size: 1rem;\n    display: flex;\n    align-items: center;\n    font-weight: var(--font-weight-medium);\n    height: 2.3125rem;\n    width: 100%;\n  }\n"])), function (_ref) {
  var opened = _ref.opened;
  return opened ? "32.3125rem" : "2.3125rem";
});

exports.SelectAmount = SelectAmount;
var Arrow = (0, _styledComponents.default)(_icon.default)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2.default)(["\n  cursor: pointer;\n  height: 2rem;\n  width: 2rem;\n  stroke: var(--color-primary-01);\n  position: absolute;\n  right: 8px;\n  top: calc(50% - 1rem);\n  z-index: 16;\n"])));
exports.Arrow = Arrow;