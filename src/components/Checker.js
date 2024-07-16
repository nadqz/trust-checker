import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useDropzone } from 'react-dropzone';
import '../styles/CheckerStyle.css';

const Checker = () => {
    const [file1, setFile1] = useState(null);
    const [file2, setFile2] = useState(null);
    const [comparisonResult, setComparisonResult] = useState(null);
    const [error, setError] = useState('');

    const { getRootProps: getRootProps1, getInputProps: getInputProps1 } = useDropzone({
        onDrop: acceptedFiles => setFile1(acceptedFiles[0])
    });

    const { getRootProps: getRootProps2, getInputProps: getInputProps2 } = useDropzone({
        onDrop: acceptedFiles => setFile2(acceptedFiles[0])
    });

    const handleCompare = async () => {
        if (!file1 || !file2) {
            setError('Please select both files to compare.');
            return;
        }

        const formData = new FormData();
        formData.append('file1', file1);
        formData.append('file2', file2);

        try {
            const response = await axios.post('https://greeneye.hamami.cloud/compare', formData);
            setComparisonResult(response.data);
            setError('');
        } catch (error) {
            console.error('Error comparing files:', error);
            setError('Error comparing files. Please try again.');
        }
    };

    return (
        <div className="checker">
            <div className="checker-container">
                <h1>File Authenticity</h1>
                <p>Verifying the Authenticity of a Web Page File</p>
                <p>
                    <span><FontAwesomeIcon icon={faCheckCircle} style={{color: 'green', marginRight: '3px'}} />Free  </span>
                    <span><FontAwesomeIcon icon={faCheckCircle} style={{color: 'green', marginRight: '3px'}} />Online  </span>
                    <span><FontAwesomeIcon icon={faCheckCircle} style={{color: 'green', marginRight: '3px'}} />No Limits  </span>
                </p>
                <div className="checker-upload-container">
                    <div className="upload-section">
                        <div {...getRootProps1({ className: 'dropzone' })}>
                            <input {...getInputProps1()} />
                            <h4>Upload File 1</h4>
                            <p>Drag and drop<br />your file here, or</p>
                            <button>Select File</button>
                        </div>
                    </div>
                    <div className="upload-section">
                        <div {...getRootProps2({ className: 'dropzone' })}>
                            <input {...getInputProps2()} />
                            <h4>Upload File 2</h4>
                            <p>Drag and drop<br />your file here, or</p>
                            <button>Select File</button>
                        </div>
                    </div>
                </div>
                <button onClick={handleCompare}>Compare Files</button>
            </div>

            {comparisonResult && (
                <div className="result">
                    <h2>Comparison Result</h2>
                    <div className="file-details">
                        <div className="file-info">
                            <h2>File Information</h2>
                            <div className="file-info-row">
                                <label>Source of Origin</label>
                                <input type="text" value={comparisonResult.file1.source_of_origin} readOnly />
                            </div>
                            <div className="file-info-row">
                                <label>Verification Date</label>
                                <input type="text" value={new Date().toLocaleDateString()} readOnly />
                            </div>
                            <div className="file-info-row">
                                <label>Verification Time</label>
                                <input type="text" value={new Date().toLocaleTimeString()} readOnly />
                            </div>
                            <div className="file-info-row">
                                <label>Verification Result</label>
                                <input type="text" value={comparisonResult.are_files_identical ? "Files are identical" : "Files are different"} readOnly />
                            </div>
                            <div className="file-info-row">
                                <label>File Name</label>
                                <input type="text" value={comparisonResult.file1.filename} readOnly />
                            </div>
                            <div className="file-info-row">
                                <label>File Type</label>
                                <input type="text" value={comparisonResult.file1.content_type} readOnly />
                            </div>
                            <div className="file-info-row">
                                <label>File Size</label>
                                <input type="text" value={`${(comparisonResult.file1.size / 1024 / 1024).toFixed(2)} MB`} readOnly />
                            </div>
                            <div className="file-info-row">
                                <label>Hash</label>
                                <input type="text" value={comparisonResult.file1.hash} readOnly />
                            </div>
                        </div>
                        <div className="file-info">
                            <h2>File Information</h2>
                            <div className="file-info-row">
                                <label>Source of Origin</label>
                                <input type="text" value={comparisonResult.file2.source_of_origin} readOnly />
                            </div>
                            <div className="file-info-row">
                                <label>Verification Date</label>
                                <input type="text" value={new Date().toLocaleDateString()} readOnly />
                            </div>
                            <div className="file-info-row">
                                <label>Verification Time</label>
                                <input type="text" value={new Date().toLocaleTimeString()} readOnly />
                            </div>
                            <div className="file-info-row">
                                <label>Verification Result</label>
                                <input type="text" value={comparisonResult.are_files_identical ? "Files are identical" : "Files are different"} readOnly />
                            </div>
                            <div className="file-info-row">
                                <label>File Name</label>
                                <input type="text" value={comparisonResult.file2.filename} readOnly />
                            </div>
                            <div className="file-info-row">
                                <label>File Type</label>
                                <input type="text" value={comparisonResult.file2.content_type} readOnly />
                            </div>
                            <div className="file-info-row">
                                <label>File Size</label>
                                <input type="text" value={`${(comparisonResult.file2.size / 1024 / 1024).toFixed(2)} MB`} readOnly />
                            </div>
                            <div className="file-info-row">
                                <label>Hash</label>
                                <input type="text" value={comparisonResult.file2.hash} readOnly />
                            </div>
                        </div>
                    </div>
                    <div className="comparison-summary">
                        <h3>Comparison Details</h3>
                        <p>Are files identical? {comparisonResult.are_files_identical ? "Yes" : "No"}</p>
                        <p>File Size Comparison: {(comparisonResult.file1.size / 1024 / 1024).toFixed(2)} MB vs {(comparisonResult.file2.size / 1024 / 1024).toFixed(2)} MB</p>
                        <p>File Type Comparison: {comparisonResult.file1.content_type} vs {comparisonResult.file2.content_type}</p>
                        <p>File Name Comparison: {comparisonResult.file1.filename} vs {comparisonResult.file2.filename}</p>
                    </div>
                </div>
            )}
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default Checker;
