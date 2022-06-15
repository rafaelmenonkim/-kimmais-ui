"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StepsContainer = exports.Step = exports.DashedLine = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

var StepsContainer = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding: 0 2.5rem;\n  position: relative;\n"])));

exports.StepsContainer = StepsContainer;

var DashedLine = _styledComponents.default.div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n  border-top: 2px dashed var(--color-secundary-06);\n  width: calc(100% - 5rem);\n  position: absolute;\n  z-index: -1;\n"])));

exports.DashedLine = DashedLine;

var Step = _styledComponents.default.div(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2.default)(["\n  background-color: var(--color-primary-05);\n  border: none;\n  border-radius: 50%;\n  box-shadow: 0px 0.1875rem 0.375rem rgba(0, 0, 0, 0);\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  height: 2rem;\n  width: 2rem;\n  position: relative;\n\n  label {\n    color: var(--color-primary-03);\n    font-size: 0.875rem;\n    font-weight: var(--font-weight-regular);\n    letter-spacing: 0.01375rem;\n    top: calc(100% + 0.25rem);\n    position: absolute;\n  }\n\n  ", "\n\n  ", "\n\n  ", "\n\n    ", "\n"])), function (_ref) {
  var navigable = _ref.navigable;
  return navigable && "cursor: pointer;";
}, function (props) {
  return props.status === "notstarted" && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2.default)(["\n      border: 0.0625rem solid var(--color-secundary-04);\n      color: var(--color-secundary-04);\n      pointer-events: none;\n    "])));
}, function (props) {
  return props.status === "ongoing" && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2.default)(["\n      background-color: var(--color-primary-04);\n      border: 0.0625rem solid var(--color-primary-04);\n      color: var(--color-primary-05);\n      font-weight: var(--font-weight-bold);\n      box-shadow: 0px 0.1875rem 0.375rem #00000029;\n    "])));
}, function (props) {
  return props.status === "done" && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2.default)(["\n      border: 0.0625rem solid var(--color-primary-03);\n    "])));
});

exports.Step = Step;