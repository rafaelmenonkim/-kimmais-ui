"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectSpread2"));

var buildQuery = function buildQuery(paginator) {
  return "?Page=".concat(paginator.page, "&PageSize=").concat(paginator.pageSize).concat(__queryBuilder(paginator.query));
};

var setOrder = function setOrder(paginator, orderBy) {
  var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, paginator), {}, {
    query: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, paginator.query), {}, {
      Sort: orderBy,
      Desc: !direction
    }),
    doRequest: true
  });
};

var setFilters = function setFilters(paginator, filters) {
  return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, paginator), {}, {
    page: 1,
    query: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, paginator.query), filters),
    doRequest: true
  });
};

var overrideFilters = function overrideFilters(paginator, filters) {
  return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, paginator), {}, {
    page: 1,
    query: filters,
    doRequest: true
  });
};

var resetFilters = function resetFilters(paginator) {
  return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, paginator), {}, {
    query: {},
    doRequest: true
  });
};

var setPage = function setPage(paginator, wantedPage) {
  return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, paginator), {}, {
    page: wantedPage,
    doRequest: true
  });
};

var setPageSize = function setPageSize(paginator, newSize) {
  return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, paginator), {}, {
    page: 1,
    pageSize: newSize,
    doRequest: true
  });
};

var updatePaginator = function updatePaginator(paginator, newPaginator) {
  return (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, paginator), newPaginator), {}, {
    doRequest: false
  });
};

var refresh = function refresh(paginator) {
  return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, paginator), {}, {
    doRequest: true
  });
};

var __queryBuilder = function __queryBuilder(queryObject) {
  if (!queryObject) return "";
  var query = "";

  for (var attribute in queryObject) {
    if (!!!queryObject[attribute]) continue;
    query += "&".concat(attribute, "=").concat(queryObject[attribute]);
  }

  return query;
};

var paginatorMethods = {
  buildQuery: buildQuery,
  refresh: refresh,
  setFilters: setFilters,
  resetFilters: resetFilters,
  setOrder: setOrder,
  setPage: setPage,
  setPageSize: setPageSize,
  overrideFilters: overrideFilters,
  updatePaginator: updatePaginator
};
var _default = paginatorMethods;
exports.default = _default;