"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _checkBox = _interopRequireDefault(require("./checkBox"));

var _radioButton = _interopRequireDefault(require("./radioButton"));

var _text = _interopRequireDefault(require("./text"));

var _select = _interopRequireDefault(require("./select"));

var _date = _interopRequireDefault(require("./date"));

var _masked = _interopRequireDefault(require("./masked"));

var _decimal = _interopRequireDefault(require("./decimal"));

var _multiSelect = _interopRequireDefault(require("./multiSelect"));

var Input = _text.default;
Input.CheckBox = _checkBox.default;
Input.RadioButton = _radioButton.default;
Input.Select = _select.default;
Input.MultiSelect = _multiSelect.default;
Input.Date = _date.default;
Input.Masked = _masked.default;
Input.Decimal = _decimal.default;
var _default = Input;
exports.default = _default;