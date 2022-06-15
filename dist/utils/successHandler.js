"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = successHandler;

function successHandler(message) {
  return {
    type: "success",
    content: message || "Operação realizada com sucesso"
  };
}