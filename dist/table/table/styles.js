"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableContainer = exports.CustomTable = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

var CustomTable = _styledComponents.default.table(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  border-collapse: collapse;\n  width: 100%;\n"])));

exports.CustomTable = CustomTable;

var TableContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n  width: 100%;\n  overflow: auto;\n  max-height: 522px;\n"])));

exports.TableContainer = TableContainer;