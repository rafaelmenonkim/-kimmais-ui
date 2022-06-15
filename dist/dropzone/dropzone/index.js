"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _reactDropzone = _interopRequireDefault(require("react-dropzone"));

var _filesize = _interopRequireDefault(require("filesize"));

var _style = require("./style");

var _excluded = ["formatsLabel", "maxSize", "onDrop", "setError"];

var Dropzone = function Dropzone(_ref) {
  var formatsLabel = _ref.formatsLabel,
      maxSize = _ref.maxSize,
      onDrop = _ref.onDrop,
      setError = _ref.setError,
      props = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var errorMessages = {
    "file-invalid-type": "Apenas arquivos nos formatos ".concat(formatsLabel, " s\xE3o aceitos."),
    "file-too-large": "Arquivo limitado a ".concat((0, _filesize.default)(maxSize))
  };
  return /*#__PURE__*/_react.default.createElement(_reactDropzone.default, Object.assign({
    maxSize: maxSize,
    onDrop: onDrop,
    onDropRejected: function onDropRejected(e) {
      return setError && setError(errorMessages[e[0].errors[0].code]);
    }
  }, props), function (_ref2) {
    var getRootProps = _ref2.getRootProps,
        getInputProps = _ref2.getInputProps;
    return /*#__PURE__*/_react.default.createElement(_style.DropContainer, getRootProps(), /*#__PURE__*/_react.default.createElement(_style.UploadIcon, {
      name: "upload"
    }), /*#__PURE__*/_react.default.createElement(_style.MainText, null, "Arraste um arquivo ou ", /*#__PURE__*/_react.default.createElement(_style.TextDecoration, null, "busque aqui"), "."), /*#__PURE__*/_react.default.createElement(_style.SubText, null, "Formatos suportados: ", formatsLabel), /*#__PURE__*/_react.default.createElement("input", getInputProps()));
  });
};

var _default = Dropzone;
exports.default = _default;