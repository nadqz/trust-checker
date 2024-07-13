import React from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import "../styles/FileUploadStyle.css";

const FileUpload = ({ setFileInfo, fileNumber }) => {
    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        const formData = new FormData();
        formData.append('file', file);

        axios.post('http://localhost:5000/verify', formData)
            .then(response => {
                const result = response.data;
                setFileInfo({
                    fileName: file.name,
                    fileType: file.type,
                    fileSize: (file.size / (1024 * 1024)).toFixed(2) + " MB",
                    verificationDate: new Date().toLocaleDateString(),
                    verificationTime: new Date().toLocaleTimeString(),
                    verificationResult: result.isTrusted ? "File originates from a trusted source" : "File is not from a trusted source",
                    fileHash: result.fileHash
                });
            })
            .catch(error => {
                console.error("There was an error verifying the file!", error);
            });
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <div {...getRootProps({ className: 'dropzone' })}>
            <input {...getInputProps()} />
            <h4>Upload File {fileNumber}</h4>
            <p>Drag and drop your file here, or</p>
            <button>Select File</button>
        </div>
    );
}

export default FileUpload;
