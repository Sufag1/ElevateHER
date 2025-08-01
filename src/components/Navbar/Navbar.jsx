import React, { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../assets/elevateher_logo_black.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (menuRef.current) {
      if (menuOpen) {
        menuRef.current.style.maxHeight = `${menuRef.current.scrollHeight}px`;
      } else {
        menuRef.current.style.maxHeight = "0px";
      }
    }
  }, [menuOpen]);

  // Detect active link based on current URL
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setActiveLink("Home");
        break;
      case "/courses":
        setActiveLink("Courses");
        break;
      case "/events":
        setActiveLink("Events");
        break;
      case "/about":
        setActiveLink("About Us");
        break;
      case "/contact":
        setActiveLink("Contact Us");
        break;
      default:
        setActiveLink("");
    }
  }, [location.pathname]);

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
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/courses" 
                className={activeLink === "Courses" ? "active" : ""} 
                onClick={() => setMenuOpen(false)}
              >
                Courses
              </Link>
              <Link 
                to="/events" 
                className={activeLink === "Events" ? "active" : ""} 
                onClick={() => setMenuOpen(false)}
              >
                Events
              </Link>
              <Link 
                to="/about" 
                className={activeLink === "About Us" ? "active" : ""} 
                onClick={() => setMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/contact" 
                className={activeLink === "Contact Us" ? "active" : ""} 
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </Link>
            </nav>
            <div className="navbar-bottom-border"></div>
          </div>
          <Link to="/get-started">
            <button className="get-started">Get Started</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
