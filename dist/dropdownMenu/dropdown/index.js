"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _styles = require("./styles");

var DropdownMenu = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      _ref$isMenuOpen = _ref.isMenuOpen,
      isMenuOpen = _ref$isMenuOpen === void 0 ? false : _ref$isMenuOpen,
      positionRef = _ref.positionRef;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      position = _useState2[0],
      setPosition = _useState2[1];

  (0, _react.useEffect)(function () {
    var distances = positionRef.current.parentElement.getBoundingClientRect();
    setPosition({
      top: distances.top + document.querySelector("html").scrollTop,
      right: document.body.clientWidth - distances.right,
      fieldSizeY: positionRef.current.parentElement.clientHeight
    });
  }, [isMenuOpen, positionRef]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_reactDom.default.createPortal( /*#__PURE__*/_react.default.createElement(_styles.DropdownList, {
    open: isMenuOpen,
    position: position,
    ref: ref
  }, children), document.querySelector("#root")));
});

var _default = DropdownMenu;
exports.default = _default;