"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectedInput = exports.SelectContainer = exports.Icon = exports.FloatingListItemLabel = exports.FloatingListItem = exports.FloatingListContent = exports.FloatingList = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;

var SelectContainer = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 40px;\n  border: 1px solid var(--color-secundary-06);\n  border-radius: 4px;\n  padding: 8px 0 8px 8px;\n  position: relative;\n  cursor: pointer;\n  ", "\n"])), function (_ref) {
  var disabled = _ref.disabled;
  return disabled && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n      background-color: hsl(0, 0%, 95%);\n      pointer-events: none;\n    "])));
});

exports.SelectContainer = SelectContainer;

var SelectedInput = _styledComponents.default.input(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2.default)(["\n  white-space: nowrap;\n  width: 100%;\n  height: 100%;\n  border: none;\n  font-size: 1rem;\n  cursor: pointer;\n"])));

exports.SelectedInput = SelectedInput;

var FloatingList = _styledComponents.default.div(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2.default)(["\n  background-color: var(--color-primary-05);\n  border-radius: 0.5rem;\n  box-shadow: 0 0.125rem 0.3125rem var(--color-secundary-04);\n  color: var(--color-primary-04);\n  position: absolute;\n  width: 100%;\n  z-index: 10001;\n  transition: all 0.2s;\n  padding: 0 16px;\n  overflow: hidden;\n  ", "\n\n  ", "\n"])), function (_ref2) {
  var visible = _ref2.visible;
  return !visible && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2.default)(["\n      opacity: 0;\n      max-height: 0;\n    "])));
}, function (_ref3) {
  var position = _ref3.position;
  return position && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2.default)(["\n      top: ", "px;\n      left: ", "px;\n      width: ", "px;\n    "])), position.top, position.left, position.fieldSizeX);
});

exports.FloatingList = FloatingList;

var FloatingListContent = _styledComponents.default.div(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2.default)(["\n  max-height: 200px;\n  overflow: auto;\n"])));

exports.FloatingListContent = FloatingListContent;

var FloatingListItem = _styledComponents.default.div(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 40px;\n  padding: 8px 0;\n  cursor: pointer;\n"])));

exports.FloatingListItem = FloatingListItem;

var FloatingListItemLabel = _styledComponents.default.div(_templateObject9 || (_templateObject9 = (0, _taggedTemplateLiteral2.default)(["\n  margin-left: 8px;\n  white-space: nowrap;\n"])));

exports.FloatingListItemLabel = FloatingListItemLabel;

var Icon = _styledComponents.default.div(_templateObject10 || (_templateObject10 = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  align-items: center;\n  min-height: 20px;\n  min-width: 20px;\n  margin: 8px;\n  svg {\n    min-height: 20px;\n    min-width: 20px;\n    ", "\n  }\n\n  svg:hover {\n    fill: var(--color-secundary-06);\n  }\n"])), function (_ref4) {
  var isfocused = _ref4.isfocused;
  return isfocused ? "fill: var(--color-primary-03);" : "fill: var(--color-secundary-03);";
});

exports.Icon = Icon;