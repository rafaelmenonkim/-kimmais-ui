"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tabs = exports.TabPanel = exports.TabList = exports.Tab = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

var _excluded = ["children"],
    _excluded2 = ["children"],
    _excluded3 = ["children"],
    _excluded4 = ["children"];

var Tabs = function Tabs(_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_styles.CustomTabs, props, children);
};

exports.Tabs = Tabs;

var TabList = function TabList(_ref2) {
  var children = _ref2.children,
      props = (0, _objectWithoutProperties2.default)(_ref2, _excluded2);
  return /*#__PURE__*/_react.default.createElement(_styles.CustomTabList, props, children);
};

exports.TabList = TabList;
TabList.tabsRole = "TabList";

var Tab = function Tab(_ref3) {
  var children = _ref3.children,
      props = (0, _objectWithoutProperties2.default)(_ref3, _excluded3);
  return /*#__PURE__*/_react.default.createElement(_styles.CustomTab, props, children);
};

exports.Tab = Tab;
Tab.tabsRole = "Tab";

var TabPanel = function TabPanel(_ref4) {
  var children = _ref4.children,
      props = (0, _objectWithoutProperties2.default)(_ref4, _excluded4);
  return /*#__PURE__*/_react.default.createElement(_styles.CustomTabPanel, props, children);
};

exports.TabPanel = TabPanel;
TabPanel.tabsRole = "TabPanel";