import React from "react";
import RDropzone from "react-dropzone";
import { Icon } from "@/components";
import Progress from "../progress";
import { reduceBigTextLines } from "../../utils/functionUtils";
import fileSize from "filesize";
import {
  Error,
  FileName,
  FileTitle,
  DropContainer,
  SubText,
  Document,
} from "./style";

const Dropline = ({
  cancelUpload,
  children,
  error,
  exclude,
  formatsLabel,
  maxSize,
  onDrop,
  setError,
  uploadingFile,
  ...props
}) => {
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
        <DropContainer
          fileName={uploadingFile?.name}
          error={error}
          {...getRootProps()}
        >
          {!uploadingFile?.uploading ? (
            <>
              <div style={{ display: "flex" }}>
                <Document>
                  <Icon fileName={uploadingFile?.name} name="document" />
                </Document>
                <div>
                  <FileTitle>{children}</FileTitle>
                  {uploadingFile?.name ? (
                    <FileName>
                      <strong>
                        {reduceBigTextLines(uploadingFile?.name, 25)}
                      </strong>{" "}
                      {error ? (
                        <Error>Houve uma falha no envio</Error>
                      ) : (
                        "adicionado"
                      )}
                    </FileName>
                  ) : (
                    <SubText>Formatos suportados: {formatsLabel}</SubText>
                  )}
                </div>
              </div>
              {uploadingFile?.name && (
                <Icon.ActionIcon
                  name="trash"
                  hover="Excluir"
                  onClick={(e) => {
                    e.stopPropagation();
                    exclude && exclude();
                  }}
                />
              )}
            </>
          ) : (
            <Progress uploadingFile={uploadingFile} onCancel={cancelUpload} />
          )}
          <input {...getInputProps()} />
        </DropContainer>
      )}
    </RDropzone>
  );
};

export default Dropline;
