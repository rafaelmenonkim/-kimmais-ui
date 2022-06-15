"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _styles = require("./styles");

var _icon = _interopRequireDefault(require("../../icon"));

var _spinner = _interopRequireDefault(require("../../spinner"));

var _excluded = ["children", "icon", "title", "stayOpen", "loading", "variant", "useOnClickOutside"];

var DropdownButton = function DropdownButton(_ref) {
  var children = _ref.children,
      icon = _ref.icon,
      title = _ref.title,
      stayOpen = _ref.stayOpen,
      loading = _ref.loading,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? "default" : _ref$variant,
      useOnClickOutside = _ref.useOnClickOutside,
      props = (0, _objectWithoutProperties2.default)(_ref, _excluded);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isListOpen = _useState2[0],
      setIsListOpen = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      position = _useState4[0],
      setPosition = _useState4[1];

  var positionRef = (0, _react.useRef)(null);
  var buttonRef = (0, _react.useRef)(null);
  var clickOut = useOnClickOutside(function (e) {
    return !buttonRef.current.contains(e.target) && setIsListOpen(false);
  });

  function handleButtonClick(e) {
    !clickOut.current.contains(e.target) && setIsListOpen(function (state) {
      return !state;
    });
    var distances = positionRef.current.parentElement.getBoundingClientRect();
    setPosition({
      top: distances.top + document.querySelector("html").scrollTop,
      right: distances.right,
      left: distances.left,
      fieldSizeX: positionRef.current.parentElement.clientWidth,
      fieldSizeY: positionRef.current.parentElement.clientHeight
    });
  }

  return /*#__PURE__*/_react.default.createElement(_styles.CustomButton, Object.assign({
    variant: variant,
    onClick: handleButtonClick,
    ref: buttonRef
  }, props), loading ? /*#__PURE__*/_react.default.createElement(_spinner.default, null) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, icon ? /*#__PURE__*/_react.default.createElement(_icon.default, {
    name: icon
  }) : null, /*#__PURE__*/_react.default.createElement(_styles.ButtonTitle, {
    ref: positionRef
  }, title), /*#__PURE__*/_react.default.createElement(_icon.default, {
    name: "arrow-down"
  })), /*#__PURE__*/_reactDom.default.createPortal( /*#__PURE__*/_react.default.createElement(_styles.DropdownList, {
    open: isListOpen,
    position: position,
    ref: clickOut,
    onClick: function onClick() {
      return !stayOpen && setIsListOpen(false);
    }
  }, children), document.querySelector("#root")));
};

var _default = DropdownButton;
exports.default = _default;