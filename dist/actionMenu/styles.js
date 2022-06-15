"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuContainer = exports.FloatingList = exports.Dot = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _floatingList = _interopRequireDefault(require("../floatingList"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

var MenuContainer = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  flex-direction: column;\n  ", ";\n"])), function (_ref) {
  var activePosition = _ref.activePosition;
  return !activePosition && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n      position: relative;\n      div:last-child {\n        bottom: calc(100% + 0.3125rem);\n      }\n    "])));
});

exports.MenuContainer = MenuContainer;

var Dot = _styledComponents.default.div(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2.default)(["\n  background-color: var(--color-primary-03);\n  border-radius: 50%;\n  height: 0.3125rem;\n  width: 0.3125rem;\n\n  :nth-child(2) {\n    margin: 0.3125rem 0;\n  }\n"])));

exports.Dot = Dot;
var FloatingList = (0, _styledComponents.default)(_floatingList.default)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2.default)(["\n  min-width: auto;\n\n  ", ";\n"])), function (_ref2) {
  var activePosition = _ref2.activePosition;
  return activePosition && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2.default)(["\n      bottom: ", ";\n      left: ", ";\n      width: auto;\n    "])), function (_ref3) {
    var bottom = _ref3.bottom;
    return bottom + "px";
  }, function (_ref4) {
    var left = _ref4.left;
    return left + "px";
  });
});
exports.FloatingList = FloatingList;