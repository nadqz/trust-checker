import React from "react";
import "../styles/CompareResultStyle.css";
import FileInfo from "./FileInfo";

const CompareResult = ({ fileInfo1, fileInfo2 }) => {
    const areFilesIdentical = fileInfo1.fileSize === fileInfo2.fileSize && 
                              fileInfo1.fileType === fileInfo2.fileType &&
                              fileInfo1.fileName === fileInfo2.fileName;

    return (
        <div className="compare-result">
            <h2>Comparison Result</h2>
            <div className="compare-row">
                <FileInfo fileInfo={fileInfo1} />
                <FileInfo fileInfo={fileInfo2} />
            </div>
            <div className="comparison-details">
                <h3>Comparison Details</h3>
                <p>Are files identical? {areFilesIdentical ? "Yes" : "No"}</p>
                <p>File Size Comparison: {fileInfo1.fileSize} vs {fileInfo2.fileSize}</p>
                <p>File Type Comparison: {fileInfo1.fileType} vs {fileInfo2.fileType}</p>
                <p>File Name Comparison: {fileInfo1.fileName} vs {fileInfo2.fileName}</p>
            </div>
        </div>
    );
}

export default CompareResult;
