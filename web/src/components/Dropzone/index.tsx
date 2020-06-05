import React, { useCallback, useState } from "react"
import "./styles.scss"
import { useDropzone } from "react-dropzone"
import { FiUpload } from "react-icons/fi"

interface IProps {
  onFileUploaded: (file: File) => void
}

const Dropzone: React.FC<IProps> = ({ onFileUploaded }) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState("")

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0]
      const fileUrl = URL.createObjectURL(file)

      setSelectedFileUrl(fileUrl)
      onFileUploaded(file)
    },
    [onFileUploaded]
  )
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
  })

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />
      {selectedFileUrl ? (
        <img src={selectedFileUrl} alt="Point thumbnail" />
      ) : isDragActive ? (
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
