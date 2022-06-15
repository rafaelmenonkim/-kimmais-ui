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

var Grouped = function Grouped(_ref) {
  var displayName = _ref.displayName,
      _ref$groupBy = _ref.groupBy,
      groupBy = _ref$groupBy === void 0 ? function (item) {
    return item.group;
  } : _ref$groupBy,
      leftList = _ref.leftList,
      setLeft = _ref.setLeft,
      rightList = _ref.rightList,
      setRight = _ref.setRight,
      leftTitle = _ref.leftTitle,
      rightTitle = _ref.rightTitle,
      blockGroups = _ref.blockGroups,
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
    setLeft(leftList.map(function (item) {
      return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, item), {}, {
        id: _lodash.default.uniqueId()
      });
    }));
    setRight(rightList.map(function (item) {
      return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, item), {}, {
        id: _lodash.default.uniqueId()
      });
    })); // eslint-disable-next-line
  }, []);

  var sendToRight = function sendToRight() {
    setRight(rightList.concat(intersection(leftList, checkedItems)));
    setLeft(notIn(leftList, checkedItems));
    clearCheckedsAndFilters();
  };

  var sendToLeft = function sendToLeft() {
    setLeft(leftList.concat(intersection(rightList, checkedItems)));
    setRight(notIn(rightList, checkedItems));
    clearCheckedsAndFilters();
  };

  var allLeft = function allLeft() {
    var filteredItems = leftList.filter(function (item) {
      return item[displayName].toLowerCase().includes((filterLeft === null || filterLeft === void 0 ? void 0 : filterLeft.toLowerCase()) || "");
    });

    if (!checkIfIsAllChecked(filteredItems)) {
      var notCheckedsIds = notIn(filteredItems, checkedItems).map(function (item) {
        return blockGroups.includes(groupBy(item)) ? null : item.id;
      });
      setCheckedItems(checkedItems.concat(notCheckedsIds));
    } else {
      setCheckedItems(intersection(rightList, checkedItems).map(function (item) {
        return blockGroups.includes(groupBy(item)) ? null : item.id;
      }));
    }
  };

  var allRight = function allRight() {
    var filteredItems = rightList.filter(function (item) {
      return item[displayName].toLowerCase().includes((filterRight === null || filterRight === void 0 ? void 0 : filterRight.toLowerCase()) || "");
    });

    if (!checkIfIsAllChecked(filteredItems)) {
      var notCheckedsIds = notIn(filteredItems, checkedItems).map(function (item) {
        return item.id;
      });
      setCheckedItems(checkedItems.concat(notCheckedsIds));
    } else {
      setCheckedItems(intersection(leftList, checkedItems).map(function (item) {
        return item.id;
      }));
    }
  };

  var _checkIfGroupIsChecked = function checkIfGroupIsChecked(side, group) {
    var uncheckedItems = notIn(side, checkedItems);
    var uncheckedItemsOfGroup = uncheckedItems.filter(function (item) {
      return groupBy(item) === group;
    });
    return uncheckedItemsOfGroup.length > 0;
  };

  var _allGroup = function allGroup(side, group) {
    if (_checkIfGroupIsChecked(side, group)) {
      var uncheckedItemsOfGroup = notIn(side, checkedItems).filter(function (item) {
        return groupBy(item) === group;
      });
      var newChekedItems = checkedItems.concat(uncheckedItemsOfGroup.map(function (item) {
        return item.id;
      }));
      setCheckedItems(newChekedItems);
    } else {
      var itemsChecked = intersection(side, checkedItems);
      var checkedItemsFromAnotherGroup = itemsChecked.filter(function (item) {
        return groupBy(item) !== group;
      });
      var checkedItemsIds = checkedItemsFromAnotherGroup.map(function (item) {
        return item.id;
      });
      var otherSide = checkedItems.filter(function (id) {
        return !side.some(function (item) {
          return item.id === id;
        });
      });
      setCheckedItems(checkedItemsIds.concat(otherSide));
    }
  };

  var clearCheckedsAndFilters = function clearCheckedsAndFilters() {
    setFilterLeft("");
    setFilterRight("");
    setCheckedItems([]);
  };

  function handleCheckBoxClick(item) {
    var checkedIndex = checkedItems.indexOf(item);
    var newCheckeds = (0, _toConsumableArray2.default)(checkedItems);
    checkedIndex === -1 ? newCheckeds.push(item) : newCheckeds.splice(checkedIndex, 1);
    setCheckedItems(newCheckeds);
  }

  function createGroups(list) {
    var groupedList = {};
    list.forEach(function (item) {
      groupedList[groupBy(item)] ? groupedList[groupBy(item)].push(item) : groupedList[groupBy(item)] = [item];
    });
    return groupedList;
  }

  function checkIfIsAllChecked(side) {
    var withNoGroup = side.filter(function (item) {
      return blockGroups.includes(groupBy(item));
    });
    return side.length - withNoGroup.length === intersection(side, checkedItems).length && side.length > 0 && side.length !== withNoGroup.length;
  }

  var isAllLeftChecked = checkIfIsAllChecked(leftList.filter(function (item) {
    return item[displayName].toLowerCase().includes((filterLeft === null || filterLeft === void 0 ? void 0 : filterLeft.toLowerCase()) || "");
  }));
  var isAllRightChecked = checkIfIsAllChecked(rightList.filter(function (item) {
    return item[displayName].toLowerCase().includes((filterRight === null || filterRight === void 0 ? void 0 : filterRight.toLowerCase()) || "");
  }));
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
    title: leftTitle
  }, /*#__PURE__*/_react.default.createElement(_listTable.default, {
    grouped: true,
    allClick: allLeft,
    allGroup: function allGroup(group) {
      var filteredItems = leftList.filter(function (item) {
        return item[displayName].toLowerCase().includes((filterLeft === null || filterLeft === void 0 ? void 0 : filterLeft.toLowerCase()) || "");
      });
      return _allGroup(filteredItems, group);
    },
    checkedItems: checkedItems,
    checkboxClick: handleCheckBoxClick,
    displayName: displayName,
    filter: filterLeft,
    isAllChecked: isAllLeftChecked,
    checkIfGroupIsChecked: function checkIfGroupIsChecked(group) {
      var filteredItems = leftList.filter(function (item) {
        return item[displayName].toLowerCase().includes((filterLeft === null || filterLeft === void 0 ? void 0 : filterLeft.toLowerCase()) || "");
      });
      return _checkIfGroupIsChecked(filteredItems, group);
    },
    list: createGroups(leftList),
    blockGroups: blockGroups,
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
    title: rightTitle
  }, /*#__PURE__*/_react.default.createElement(_listTable.default, {
    allClick: allRight,
    allGroup: function allGroup(group) {
      var filteredItems = rightList.filter(function (item) {
        return item[displayName].toLowerCase().includes((filterRight === null || filterRight === void 0 ? void 0 : filterRight.toLowerCase()) || "");
      });
      return _allGroup(filteredItems, group);
    },
    checkedItems: checkedItems,
    checkboxClick: handleCheckBoxClick,
    displayName: displayName,
    filter: filterRight,
    isAllChecked: isAllRightChecked,
    checkIfGroupIsChecked: function checkIfGroupIsChecked(group) {
      var filteredItems = rightList.filter(function (item) {
        return item[displayName].toLowerCase().includes((filterRight === null || filterRight === void 0 ? void 0 : filterRight.toLowerCase()) || "");
      });
      return _checkIfGroupIsChecked(filteredItems, group);
    },
    list: createGroups(rightList),
    blockGroups: blockGroups,
    loading: loading
  })));
};

var _default = Grouped;
exports.default = _default;