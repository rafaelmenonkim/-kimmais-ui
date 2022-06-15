"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = errorHandler;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/toConsumableArray"));

function errorHandler(error) {
  var _error$data;

  if (!(error !== null && error !== void 0 && (_error$data = error.data) !== null && _error$data !== void 0 && _error$data.errors) || !error) {
    return {
      type: "error",
      content: "Erro Inesperado ".concat(error ? "(".concat(error.status, ")") : "")
    };
  }

  if (Array.isArray(error.data.errors)) {
    return error.data.errors.map(function (message) {
      return {
        type: "error",
        content: message
      };
    });
  }

  if (typeof error.data.errors === "object") {
    var notifications = [];

    for (var element in error.data.errors) {
      var newNotificaitons = error.data.errors[element].map(function (message) {
        return {
          type: "error",
          content: message
        };
      });
      notifications = [].concat((0, _toConsumableArray2.default)(notifications), (0, _toConsumableArray2.default)(newNotificaitons));
    }

    return notifications;
  }

  return {
    type: "error",
    content: "Erro Inesperado"
  };
}