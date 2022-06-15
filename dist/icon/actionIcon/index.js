"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _hoverText = _interopRequireDefault(require("./hoverText"));

var _styles = require("./styles");

var MARGIN = 10;

var ActionIcon = function ActionIcon(_ref) {
  var activePosition = _ref.activePosition,
      onClick = _ref.onClick,
      hover = _ref.hover,
      name = _ref.name,
      props = _ref.props;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isListVisible = _useState2[0],
      setIsListVisible = _useState2[1];

  var _useState3 = (0, _react.useState)({
    x: 0,
    y: 0
  }),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      position = _useState4[0],
      setPosition = _useState4[1];

  var hoverText = (0, _react.useRef)(null);

  function handleOnHover(e) {
    activePosition && positioningHoverText(e);
    setIsListVisible(!isListVisible);
  }

  function positioningHoverText(e) {
    var relativeParent = hoverText.current.offsetParent;
    var iconElement = e.currentTarget;
    var parentDistanceToBottom = window.pageYOffset + relativeParent.getBoundingClientRect().bottom;
    var iconDistanceToBottom = window.pageYOffset + iconElement.getBoundingClientRect().bottom;
    var parentDistanceToLeft = window.pageYOffset + relativeParent.getBoundingClientRect().left;
    var iconDistanceToLeft = window.pageYOffset + iconElement.getBoundingClientRect().left;
    var iconHeight = iconElement.offsetHeight;
    setPosition({
      x: iconDistanceToLeft - parentDistanceToLeft + MARGIN,
      y: parentDistanceToBottom - iconDistanceToBottom + iconHeight + MARGIN
    });
  }

  return /*#__PURE__*/_react.default.createElement(_styles.Wrapper, {
    activePosition: activePosition,
    onMouseEnter: handleOnHover
  }, /*#__PURE__*/_react.default.createElement(_styles.Icon, Object.assign({
    onClick: onClick,
    name: name
  }, props)), /*#__PURE__*/_react.default.createElement(_hoverText.default, {
    hover: hover,
    activePosition: activePosition,
    bottom: position.y,
    left: position.x,
    ref: hoverText
  }));
};

var _default = ActionIcon;
exports.default = _default;