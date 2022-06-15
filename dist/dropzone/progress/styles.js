"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UploadPercentage = exports.ProgressBar = exports.FilledPercentage = exports.FileSize = exports.FileName = exports.Container = exports.CloseIcon = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _icon = _interopRequireDefault(require("../../icon"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

var Container = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  background-color: var(--color-primary-05);\n  border: 1px solid var(--color-secundary-04);\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  height: 60px;\n  width: 100%;\n"])));

exports.Container = Container;

var ProgressBar = _styledComponents.default.div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n  background-color: var(--color-secundary-04);\n  border-radius: 5px;\n  margin-top: 8px;\n  height: 6px;\n  width: 100%;\n  overflow: hidden;\n"])));

exports.ProgressBar = ProgressBar;

var FilledPercentage = _styledComponents.default.div(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2.default)(["\n  background-color: var(--color-primary-02);\n  border-radius: 5px;\n  height: 100%;\n  width: ", ";\n"])), function (_ref) {
  var sended = _ref.sended;
  return sended + "%";
});

exports.FilledPercentage = FilledPercentage;
var CloseIcon = (0, _styledComponents.default)(_icon.default)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2.default)(["\n  cursor: pointer;\n  height: 20px;\n  width: 20px;\n  stroke: var(--color-secundary-06);\n"])));
exports.CloseIcon = CloseIcon;

var FileName = _styledComponents.default.p(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2.default)(["\n  display: inline;\n  color: var(--color-primary-03);\n  font-size: 0.75rem;\n  font-weight: var(--font-weight-bold);\n  letter-spacing: 0;\n"])));

exports.FileName = FileName;

var FileSize = _styledComponents.default.p(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2.default)(["\n  color: font-variant(--color-secundary-06);\n  display: inline;\n  font-size: 0.6875rem;\n  margin-left: 8px;\n  text-transform: capitalize;\n"])));

exports.FileSize = FileSize;

var UploadPercentage = _styledComponents.default.p(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2.default)(["\n  display: inline;\n  color: var(--color-primary-03);\n  font-size: 0.75rem;\n  letter-spacing: 0;\n  position: absolute;\n  right: 0;\n"])));

exports.UploadPercentage = UploadPercentage;