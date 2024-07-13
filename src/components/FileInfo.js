import React from "react";
import "../styles/FileInfoStyle.css";

const FileInfo = ({ fileInfo }) => {
    if (!fileInfo) {
        return null; // atau bisa mengganti dengan loading spinner atau pesan
    }

    return (
        <div className="file-info">
            <h2>File Information</h2>
            <div className="file-info-row">
                <label>Source of Origin</label>
                <input type="text" value="Uploaded from user's device" readOnly />
            </div>
            <div className="file-info-row">
                <label>Verification Date</label>
                <input type="text" value={fileInfo.verificationDate} readOnly />
            </div>
            <div className="file-info-row">
                <label>Verification Time</label>
                <input type="text" value={fileInfo.verificationTime} readOnly />
            </div>
            <div className="file-info-row">
                <label>Verification Result</label>
                <input type="text" value={fileInfo.verificationResult} readOnly />
            </div>
            <div className="file-info-bawah">
                <div className="file-info-row-bawah">
                    <label>File Name</label>
                    <input type="text" value={fileInfo.fileName} readOnly />
                </div>
                <div className="file-info-row-bawah">
                    <label>File Type</label>
                    <input type="text" value={fileInfo.fileType} readOnly />
                </div>
                <div className="file-info-row-bawah">
                    <label>File Size</label>
                    <input type="text" value={fileInfo.fileSize} readOnly />
                </div>
                <div className="file-info-row-bawah">
                    <label>Next Step</label>
                    <input type="text" value="You can confirm the authenticity of this file." readOnly />
                </div>
            </div>
        </div>
    );
}

export default FileInfo;
