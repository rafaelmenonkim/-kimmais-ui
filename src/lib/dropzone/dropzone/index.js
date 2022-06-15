import React from "react";
import RDropzone from "react-dropzone";
import fileSize from "filesize";
import {
  DropContainer,
  TextDecoration,
  MainText,
  SubText,
  UploadIcon,
} from "./style";

const Dropzone = ({ formatsLabel, maxSize, onDrop, setError, ...props }) => {
  const errorMessages = {
    "file-invalid-type": `Apenas arquivos nos formatos ${formatsLabel} são aceitos.`,
    "file-too-large": `Arquivo limitado a ${fileSize(maxSize)}`,
  };

  return (
    <RDropzone
      maxSize={maxSize}
      onDrop={onDrop}
      onDropRejected={(e) =>
        setError && setError(errorMessages[e[0].errors[0].code])
      }
      {...props}
    >
      {({ getRootProps, getInputProps }) => (
        <DropContainer {...getRootProps()}>
          <UploadIcon name="upload" />
          <MainText>
            Arraste um arquivo ou <TextDecoration>busque aqui</TextDecoration>.
          </MainText>
          <SubText>Formatos suportados: {formatsLabel}</SubText>
          <input {...getInputProps()} />
        </DropContainer>
      )}
    </RDropzone>
  );
};

export default Dropzone;
