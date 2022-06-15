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

var _modal = _interopRequireDefault(require("../modal"));

var _excluded = ["cancel", "cancelText", "history", "confirm", "confirmText", "children", "onlyConfirm", "bypass"];

var PageChangePrompt = function PageChangePrompt(_ref) {
  var cancel = _ref.cancel,
      cancelText = _ref.cancelText,
      history = _ref.history,
      _ref$confirm = _ref.confirm,
      confirm = _ref$confirm === void 0 ? function (unlock, path) {
    unlock();
    history.push(path);
  } : _ref$confirm,
      confirmText = _ref.confirmText,
      children = _ref.children,
      onlyConfirm = _ref.onlyConfirm,
      _ref$bypass = _ref.bypass,
      bypass = _ref$bypass === void 0 ? [] : _ref$bypass,
      props = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var unblockHandle = (0, _react.useRef)();

  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      newPath = _useState2[0],
      setNewPath = _useState2[1];

  (0, _react.useEffect)(function () {
    unblockHandle.current = history.block(function (targetLocation) {
      var _targetLocation$state;

      setNewPath(targetLocation);
      return !!((_targetLocation$state = targetLocation.state) !== null && _targetLocation$state !== void 0 && _targetLocation$state.bypass);
    });
    return function () {
      unblockHandle.current && unblockHandle.current();
    };
  }, [bypass]);
  return /*#__PURE__*/_react.default.createElement(_modal.default, {
    cancel: cancel ? function () {
      return cancel(unblockHandle.current, newPath);
    } : null,
    cancelText: cancelText,
    confirm: confirm ? function () {
      confirm(unblockHandle.current, newPath);
      setNewPath(null);
    } : null,
    confirmText: confirmText,
    onlyConfirm: onlyConfirm,
    open: !!newPath,
    close: function close() {
      return setNewPath(null);
    }
  }, children);
};

var _default = PageChangePrompt;
exports.default = _default;