import React, { useRef, useState, useEffect } from "react";
import "./Navbar.css";
import Logo from "../../assets/elevateher_logo_black.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (menuRef.current) {
      if (menuOpen) {
        menuRef.current.style.maxHeight = `${menuRef.current.scrollHeight}px`;
      } else {
        menuRef.current.style.maxHeight = "0px";
      }
    }
  }, [menuOpen]);

  const [activeLink, setActiveLink] = useState("Home");

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <header className="navbar-section">
      <div className="navbar">
        <div className="navbar-top-border"></div>
        <div className="navbar-container">
          <div className="navbar-logo">
            <img src={Logo} alt="Logo" className="logo-icon" />
          </div>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>  
          <div className="mobile-menu-wrapper" ref={menuRef}>
            <nav className="navbar-links">
              <Link
                to="/"
                className={activeLink === "Home" ? "active" : ""}
                onClick={() => handleLinkClick("Home")}
              >
                Home
              </Link>
              <a
                href="/portfolio"
                className={activeLink === "Courses" ? "active" : ""}
                onClick={() => handleLinkClick("Courses")}
              >
                Courses
              </a>
              <a
                href="#"
                className={activeLink === "Events" ? "active" : ""}
                onClick={() => handleLinkClick("Events")}
              >
                Events
              </a>
              <Link
                to="/About"
                className={activeLink === "About Us" ? "active" : ""}
                onClick={() => handleLinkClick("About Us")}
              >
                About Us
              </Link>
              <a
                href="#"
                className={activeLink === "Contact Us" ? "active" : ""}
                onClick={() => handleLinkClick("Contact Us")}
              >
                Contact Us
              </a>
            </nav>
            <div className="navbar-bottom-border"></div>
          </div>
          <button className="get-started">Get Started</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
