import React, { useRef, useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/NavbarStyle.css";

const Navbar = () => {
  const navRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <Link to="/">
        <img src={Logo} className="icon" alt="Logo" />
      </Link>
      <nav className={`navbar ${isOpen ? "responsive_nav" : ""}`} ref={navRef}>
        <div className="nav-items">
          <Link to="/" onClick={toggleNavbar}>
            Home
          </Link>
          <Link to="/fileChecker" onClick={toggleNavbar}>
            File Checker
          </Link>
          <Link to="/about" onClick={toggleNavbar}>
            About
          </Link>
        </div>
        <button className="nav-btn" onClick={toggleNavbar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
