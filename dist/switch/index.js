"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactSwitch = _interopRequireDefault(require("react-switch"));

var _hoverText = _interopRequireDefault(require("./hoverText"));

var _styles = require("./styles");

var Switch = function Switch(_ref) {
  var checked = _ref.checked,
      onChange = _ref.onChange,
      hover = _ref.hover,
      onText = _ref.onText,
      offText = _ref.offText;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isHoverVisible = _useState2[0],
      setIsHoverVisible = _useState2[1];

  return /*#__PURE__*/_react.default.createElement(_styles.Body, {
    checked: checked,
    onMouseEnter: function onMouseEnter() {
      return setIsHoverVisible(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setIsHoverVisible(false);
    }
  }, hover && /*#__PURE__*/_react.default.createElement(_hoverText.default, {
    visible: isHoverVisible,
    hover: checked ? onText : offText
  }), /*#__PURE__*/_react.default.createElement(_reactSwitch.default, {
    checked: checked,
    onChange: onChange,
    onColor: "#5e39ca",
    offColor: "#f8f8f8",
    onHandleColor: "#FFF",
    offHandleColor: "#707070",
    activeBoxShadow: "none",
    handleDiameter: 13,
    uncheckedIcon: false,
    checkedIcon: false,
    height: 20,
    width: 48,
    className: "react-switch",
    id: "material-switch"
  }));
};

var _default = Switch;
exports.default = _default;