import React, { useCallback } from "react"
import "./styles.scss"
import { useDropzone } from "react-dropzone"
import { FiUpload } from "react-icons/fi"

const Dropzone = () => {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles)
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>
          <FiUpload />
          Solte o arquivo aqui ...
        </p>
      ) : (
        <p>
          <FiUpload />
          Arraste e solte o arquivo aqui, ou clique para selecionar um arquivo.
        </p>
      )}
    </div>
  )
}
export default Dropzone
