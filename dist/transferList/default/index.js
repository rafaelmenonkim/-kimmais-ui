"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/toConsumableArray"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectSpread2"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _listPanel = _interopRequireDefault(require("./listPanel"));

var _listTable = _interopRequireDefault(require("./listTable"));

var _styles = require("./listPanel/styles");

var _lodash = _interopRequireDefault(require("lodash"));

var intersection = function intersection(a, b) {
  return a.filter(function (item) {
    return b.includes(item.id);
  });
};

var notIn = function notIn(a, b) {
  return a.filter(function (item) {
    return !b.includes(item.id);
  });
};

var TransferList = function TransferList(_ref) {
  var left = _ref.left,
      leftName = _ref.leftName,
      setLeft = _ref.setLeft,
      right = _ref.right,
      rightName = _ref.rightName,
      setRight = _ref.setRight,
      displayName = _ref.displayName,
      loading = _ref.loading;

  var _useState = (0, _react.useState)(""),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      filterLeft = _useState2[0],
      setFilterLeft = _useState2[1];

  var _useState3 = (0, _react.useState)(""),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      filterRight = _useState4[0],
      setFilterRight = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      checkedItems = _useState6[0],
      setCheckedItems = _useState6[1];

  (0, _react.useMemo)(function () {
    setLeft(left.map(function (item) {
      return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, item), {}, {
        id: _lodash.default.uniqueId()
      });
    }));
    setRight(right.map(function (item) {
      return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, item), {}, {
        id: _lodash.default.uniqueId()
      });
    })); // eslint-disable-next-line
  }, []);

  var sendToRight = function sendToRight() {
    setRight(right.concat(intersection(left, checkedItems)));
    setLeft(notIn(left, checkedItems));
    clearCheckedsAndFilters();
  };

  var sendToLeft = function sendToLeft() {
    setLeft(left.concat(intersection(right, checkedItems)));
    setRight(notIn(right, checkedItems));
    clearCheckedsAndFilters();
  };

  var allLeft = function allLeft() {
    if (!checkIfIsAllChecked(left)) {
      var notCheckedsIds = notIn(left, checkedItems).map(function (item) {
        return item.id;
      });
      setCheckedItems(checkedItems.concat(notCheckedsIds));
    } else {
      setCheckedItems(intersection(right, checkedItems).map(function (item) {
        return item.id;
      }));
    }
  };

  var allRight = function allRight() {
    if (!checkIfIsAllChecked(right)) {
      var notCheckedsIds = notIn(right, checkedItems).map(function (item) {
        return item.id;
      });
      setCheckedItems(checkedItems.concat(notCheckedsIds));
    } else {
      setCheckedItems(intersection(left, checkedItems).map(function (item) {
        return item.id;
      }));
    }
  };

  var clearCheckedsAndFilters = function clearCheckedsAndFilters() {
    setFilterLeft("");
    setFilterRight("");
    setCheckedItems([]);
  };

  function checkIfIsAllChecked(side) {
    return side.length === intersection(side, checkedItems).length && side.length > 0;
  }

  function handleCheckBoxClick(item) {
    var checkedIndex = checkedItems.indexOf(item);
    var newCheckeds = (0, _toConsumableArray2.default)(checkedItems);
    checkedIndex === -1 ? newCheckeds.push(item) : newCheckeds.splice(checkedIndex, 1);
    setCheckedItems(newCheckeds);
  }

  var isAllLeftChecked = checkIfIsAllChecked(left);
  var isAllRightChecked = checkIfIsAllChecked(right);
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/_react.default.createElement(_listPanel.default, {
    filter: filterLeft,
    setFilter: setFilterLeft,
    title: leftName
  }, /*#__PURE__*/_react.default.createElement(_listTable.default, {
    allClick: allLeft,
    checkedItems: checkedItems,
    checkboxClick: handleCheckBoxClick,
    displayName: displayName,
    filter: filterLeft,
    isAllChecked: isAllLeftChecked,
    list: left,
    loading: loading
  })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles.IconArrows, {
    name: "arrow-right",
    onClick: sendToRight
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_styles.IconArrows, {
    name: "arrow-right",
    onClick: sendToLeft
  })), /*#__PURE__*/_react.default.createElement(_listPanel.default, {
    filter: filterRight,
    setFilter: setFilterRight,
    title: rightName
  }, /*#__PURE__*/_react.default.createElement(_listTable.default, {
    allClick: allRight,
    checkedItems: checkedItems,
    checkboxClick: handleCheckBoxClick,
    displayName: displayName,
    filter: filterRight,
    isAllChecked: isAllRightChecked,
    list: right,
    loading: loading
  })));
};

var _default = TransferList;
exports.default = _default;