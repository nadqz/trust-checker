import React from "react";
import Navbar from "../components/Navbar";
import "../styles/LastCoverStyle.css";

const LastCover = () => {
    return (
        <div>
            <Navbar />
            <div className="about-container">
                <h1>About Us</h1>
                <div className="about-content">
                    <div className="about-section">
                        <h2>Our Mission</h2>
                        <p>
                            Our mission is to provide a reliable and user-friendly platform for verifying the authenticity of files. We aim to empower individuals and organizations by ensuring the integrity and trustworthiness of their digital documents.
                        </p>
                    </div>
                    <div className="about-section">
                        <h2>Our Vision</h2>
                        <p>
                            Our vision is to create a world where digital file integrity is guaranteed, fostering a secure and transparent digital environment. We strive to be the leading solution for file authenticity verification, contributing to the broader goals of trust and security in the digital age.
                        </p>
                    </div>
                    <div className="about-section">
                        <h2>How This Project Relates to SDGs</h2>
                        <h3>Quality Education</h3>
                        <p>
                            This system can help ensure the authenticity and integrity of student assignments, research reports, and other academic documents, which are crucial for maintaining standards of honesty and educational quality.
                        </p>
                        <h3>Decent Work and Economic Growth</h3>
                        <p>
                            This system can help build trust in the business environment and reduce the risk of fraud, which in turn can support the creation of decent jobs and sustainable economic growth.
                        </p>
                        <h3>Peace, Justice, and Strong Institutions</h3>
                        <p>
                            Validation of document authenticity can help strengthen the justice system and institutions by ensuring data integrity, reducing the risk of document manipulation or forgery, and supporting transparency in legal and administrative processes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LastCover;
