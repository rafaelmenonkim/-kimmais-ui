"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeSpecialCharacters = exports.reduceBigTextLines = exports.minTwoDigits = exports.isValidDate = exports.hideDocument = exports.formatMoney = exports.findOption = exports.download = void 0;

var minTwoDigits = function minTwoDigits(number) {
  return number ? ("0" + number).slice(-2) : "00";
};

exports.minTwoDigits = minTwoDigits;

var hideDocument = function hideDocument(document) {
  if (!document) return;
  var hidedDoc = "***.".concat(document.slice(3, 6), ".").concat(document.slice(6, 9), "-**");
  return hidedDoc;
};

exports.hideDocument = hideDocument;

var removeSpecialCharacters = function removeSpecialCharacters(string) {
  return string === null || string === void 0 ? void 0 : string.replace(/[^0-9|a-z]/gi, "");
};

exports.removeSpecialCharacters = removeSpecialCharacters;

var reduceBigTextLines = function reduceBigTextLines(text, limit) {
  return text.length > limit ? text.slice(0, limit) + " . . ." : text;
};

exports.reduceBigTextLines = reduceBigTextLines;

var isValidDate = function isValidDate(date) {
  return date instanceof Date && !isNaN(date);
};

exports.isValidDate = isValidDate;

var formatMoney = function formatMoney() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return parseFloat(value).toLocaleString("pt-br", {
    minimumFractionDigits: 2
  });
};

exports.formatMoney = formatMoney;

var findOption = function findOption(options, key, keyValue) {
  var option = options.find(function (item) {
    return item[key] === keyValue;
  });
  return option;
};

exports.findOption = findOption;

var download = function download(url) {
  var filename = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "file";
  var a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

exports.download = download;