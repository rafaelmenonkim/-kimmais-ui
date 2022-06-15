"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _table = _interopRequireDefault(require("./table"));

var _td = _interopRequireDefault(require("./td"));

var _th = _interopRequireDefault(require("./th"));

var _tr = _interopRequireDefault(require("./tr"));

var Table = _table.default;
Table.Td = _td.default;
Table.Th = _th.default;
Table.Tr = _tr.default;
var _default = Table;
exports.default = _default;