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

var _styles = require("./styles");

var _excluded = ["activePosition", "children", "useOnClickOutside"];

var ActionMenu = function ActionMenu(_ref) {
  var activePosition = _ref.activePosition,
      children = _ref.children,
      useOnClickOutside = _ref.useOnClickOutside,
      props = (0, _objectWithoutProperties2.default)(_ref, _excluded);

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

  var list = (0, _react.useRef)(null);
  var clickOutside = useOnClickOutside(function () {
    setIsListVisible(false);
  });

  function handleOnClick(e) {
    activePosition && positioningFloatingList(e);
    setIsListVisible(!isListVisible);
  }

  function positioningFloatingList(e) {
    var relativeParent = list.current.offsetParent;
    var menuElement = e.currentTarget;
    var parentDistanceToBottom = window.pageYOffset + relativeParent.getBoundingClientRect().bottom;
    var menuDistanceToBottom = window.pageYOffset + menuElement.getBoundingClientRect().bottom;
    var parentDistanceToLeft = window.pageYOffset + relativeParent.getBoundingClientRect().left;
    var menuDistanceToLeft = window.pageYOffset + menuElement.getBoundingClientRect().left;
    var menuHeight = menuElement.offsetHeight;
    var MARGIN = 8;
    setPosition({
      x: menuDistanceToLeft - parentDistanceToLeft,
      y: parentDistanceToBottom - menuDistanceToBottom + menuHeight + MARGIN
    });
  }

  return /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, Object.assign({
    activePosition: activePosition,
    onClick: handleOnClick
  }, props, {
    ref: clickOutside
  }), /*#__PURE__*/_react.default.createElement(_styles.Dot, null), /*#__PURE__*/_react.default.createElement(_styles.Dot, null), /*#__PURE__*/_react.default.createElement(_styles.Dot, null), /*#__PURE__*/_react.default.createElement(_styles.FloatingList, {
    visible: isListVisible,
    bottom: position.y,
    left: position.x,
    ref: list,
    activePosition: activePosition
  }, children));
};

var _default = ActionMenu;
exports.default = _default;