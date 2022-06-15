"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = blobToJson;

var _regeneratorRuntime2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/regeneratorRuntime"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/asyncToGenerator"));

function blobToJson(_x) {
  return _blobToJson.apply(this, arguments);
}

function _blobToJson() {
  _blobToJson = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee(data) {
    var parsedBlob, convertedData;
    return (0, _regeneratorRuntime2.default)().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(data instanceof Blob)) {
              _context.next = 14;
              break;
            }

            _context.prev = 1;
            _context.next = 4;
            return data.text();

          case 4:
            parsedBlob = _context.sent;
            convertedData = JSON.parse(parsedBlob);
            return _context.abrupt("return", convertedData);

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);
            return _context.abrupt("return", {});

          case 12:
            _context.next = 15;
            break;

          case 14:
            return _context.abrupt("return", data);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 9]]);
  }));
  return _blobToJson.apply(this, arguments);
}