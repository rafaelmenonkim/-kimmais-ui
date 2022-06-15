"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectSpread2"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _index = require("../../../index");

var _styles = require("./styles");

var _group = _interopRequireDefault(require("../group"));

var _lodash = _interopRequireDefault(require("lodash"));

var ListTable = function ListTable(_ref) {
  var allClick = _ref.allClick,
      allGroup = _ref.allGroup,
      checkedItems = _ref.checkedItems,
      checkboxClick = _ref.checkboxClick,
      displayName = _ref.displayName,
      filter = _ref.filter,
      isAllChecked = _ref.isAllChecked,
      checkIfGroupIsChecked = _ref.checkIfGroupIsChecked,
      list = _ref.list,
      loading = _ref.loading,
      _ref$blockGroups = _ref.blockGroups,
      blockGroups = _ref$blockGroups === void 0 ? [] : _ref$blockGroups;

  var _useState = (0, _react.useState)({}),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isVisible = _useState2[0],
      _setIsVisible = _useState2[1];

  function generateGroupsAndRows() {
    var orderedGroups = Object.keys(list).sort(function (a, b) {
      return a.localeCompare(b);
    });
    var noDepartment = orderedGroups.splice(orderedGroups.indexOf("Sem departamento"), 1);
    var noDepartmentAtEnd = [].concat((0, _toConsumableArray2.default)(orderedGroups), (0, _toConsumableArray2.default)(noDepartment));
    return noDepartmentAtEnd.map(function (group) {
      return /*#__PURE__*/_react.default.createElement(_group.default, {
        key: _lodash.default.uniqueId(),
        allGroup: allGroup,
        checked: checkedItems,
        checkboxClick: checkboxClick,
        displayName: displayName,
        checkIfGroupIsChecked: checkIfGroupIsChecked,
        group: list[group].sort(function (a, b) {
          return a[displayName].localeCompare(b[displayName]);
        }),
        groupName: group,
        filter: filter,
        disabled: blockGroups.includes(group),
        isVisible: isVisible[group],
        setIsVisible: function setIsVisible(groupName) {
          return _setIsVisible(function (state) {
            var newVisibles = (0, _objectSpread2.default)({}, state);
            newVisibles[groupName] = !newVisibles[groupName];
            return newVisibles;
          });
        }
      });
    });
  }

  function sumTotalElements() {
    var total = 0;

    for (var group in list) {
      total += list[group].length;
    }

    return total;
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.CustomTable, {
    loading: loading
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement(_index.Table.Tr, null, /*#__PURE__*/_react.default.createElement(_index.Table.Th, null, /*#__PURE__*/_react.default.createElement(_index.Input.CheckBox, {
    controlled: true,
    checked: isAllChecked,
    onClick: allClick
  }), /*#__PURE__*/_react.default.createElement("span", {
    style: {
      marginLeft: "8px"
    }
  }, "Selecionar Todos")), /*#__PURE__*/_react.default.createElement(_index.Table.Th, null, /*#__PURE__*/_react.default.createElement(_styles.Header, null, "Total: ", sumTotalElements())))), /*#__PURE__*/_react.default.createElement("tbody", null, generateGroupsAndRows())));
};

var _default = ListTable;
exports.default = _default;