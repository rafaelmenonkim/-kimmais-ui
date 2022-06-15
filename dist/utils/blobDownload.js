"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = blobDownload;

function blobDownload(blob, filename) {
  var elem = window.document.createElement("a");
  elem.href = window.URL.createObjectURL(blob);
  elem.style.display = "none";
  elem.download = filename;
  document.body.appendChild(elem);
  elem.click();
  document.body.removeChild(elem);
}