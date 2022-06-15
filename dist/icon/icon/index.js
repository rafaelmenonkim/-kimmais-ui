"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/regeneratorRuntime"));

var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/interopRequireWildcard"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _excluded = ["down", "hover", "name"];

var Icon = function Icon(_ref) {
  var down = _ref.down,
      hover = _ref.hover,
      name = _ref.name,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);

  var ImportedIconRef = _react.default.useRef(null);

  var _React$useState = _react.default.useState(false),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      loading = _React$useState2[0],
      setLoading = _React$useState2[1];

  _react.default.useEffect(function () {
    if (!name) return;
    setLoading(true);

    var importIcon = /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee() {
        return (0, _regeneratorRuntime2.default)().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Promise.resolve("!!@svgr/webpack?-svgo,+titleProp,+ref!../../../assets/icons/".concat(name, ".svg")).then(function (s) {
                  return (0, _interopRequireWildcard2.default)(require(s));
                });

              case 3:
                ImportedIconRef.current = _context.sent.default;
                _context.next = 9;
                break;

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                throw _context.t0;

              case 9:
                _context.prev = 9;
                setLoading(false);
                return _context.finish(9);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 6, 9, 12]]);
      }));

      return function importIcon() {
        return _ref2.apply(this, arguments);
      };
    }();

    importIcon();
  }, [name]);

  if (!loading && ImportedIconRef.current) {
    var ImportedIcon = ImportedIconRef.current;
    return /*#__PURE__*/_react.default.createElement(ImportedIcon, rest);
  }

  return null;
};

var _default = Icon;
exports.default = _default;