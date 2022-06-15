"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubText = exports.FileTitle = exports.FileName = exports.Error = exports.DropContainer = exports.Document = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

var DropContainer = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  background-color: var(--color-secundary-02);\n  border: 1px dashed\n    ", ";\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 90px;\n  width: 100%;\n  margin: auto;\n  padding: 26px;\n  cursor: pointer;\n"])), function (_ref) {
  var fileName = _ref.fileName,
      error = _ref.error;
  return error ? "var(--color-message-03)" : fileName ? "var(--color-primary-01)" : "var(--color-secundary-06)";
});

exports.DropContainer = DropContainer;

var FileTitle = _styledComponents.default.p(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n  color: var(--color-primary-04);\n  font-size: 1.125rem;\n  letter-spacing: 0;\n"])));

exports.FileTitle = FileTitle;

var SubText = _styledComponents.default.p(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2.default)(["\n  color: var(--color-primary-03);\n  font-size: 16px;\n  letter-spacing: 0;\n  margin-top: 8px;\n"])));

exports.SubText = SubText;

var Document = _styledComponents.default.div(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2.default)(["\n  > svg {\n    height: 50px;\n    width: 40px;\n    margin-right: 20px;\n    fill: ", ";\n  }\n"])), function (_ref2) {
  var fileName = _ref2.fileName;
  return fileName ? "var(--color-primary-01)" : "var(--color-primary-04)";
});

exports.Document = Document;

var FileName = _styledComponents.default.p(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2.default)(["\n  color: var(--color-primary-03);\n  margin-top: 8px;\n  white-space: nowrap;\n\n  > strong {\n    font-weight: var(--font-weight-semi-bold);\n  }\n"])));

exports.FileName = FileName;

var Error = _styledComponents.default.span(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2.default)(["\n  color: var(--color-message-03);\n  font-weight: var(--font-weight-semi-bold);\n"])));

exports.Error = Error;