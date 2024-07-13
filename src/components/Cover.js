import React from "react";
import Navbar from "../components/Navbar";
import header from "../assets/header.png";
import {Link} from "react-router-dom";
import '../styles/CoverStyle.css'

const Cover = () => {
    return (
        <div>
            <Navbar/>
            <div className="wrapper">
                <div className="kolom">
                    <h4 className="deskripsi">TRUSTCHECKER</h4>
                    <h2>Verifying 
                        <br/>
                        the Authenticity 
                        <br/>
                        Page File</h2>
                    <p>Validating the legitimacy of uploaded file 
                        <br/>
                        to safeguard against fraudulent or tampered content.</p>
                </div>
                <Link to="/"> <img src={header} className="icon-header" alt="heade"/></Link>
            </div>
        </div>
    );
}

export default Cover;