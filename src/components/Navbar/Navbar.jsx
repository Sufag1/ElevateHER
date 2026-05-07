import React, { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../assets/elevateher_logo_black.svg";

const courseLinks = [
  { path: "/artificial-intelligence", label: "Artificial Intelligence" },
  { path: "/frontend-development", label: "Frontend Development" },
  { path: "/backend-development", label: "Backend Development" },
  { path: "/full-stack-development", label: "Full Stack Development" },
  { path: "/devops", label: "DevOps" },
  { path: "/business-development", label: "Business Development" },
];

const coursePaths = courseLinks.map((course) => course.path);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [portfolioDropdown, setPortfolioDropdown] = useState(false);
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
  }, [menuOpen, portfolioDropdown]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    if (location.pathname === "/") {
      setActiveLink("Home");
    } else if (location.pathname === "/portfolio" || coursePaths.includes(location.pathname)) {
      setActiveLink("Portfolio");
    } else if (location.pathname === "/blog") {
      setActiveLink("Blog");
    } else if (location.pathname === "/about") {
      setActiveLink("About Us");
    } else if (location.pathname === "/contact") {
      setActiveLink("Contact");
    } else {
      setActiveLink("");
    }
  }, [location.pathname]);

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setPortfolioDropdown(false);
  };

  return (
    <header className="navbar-section">
      <div className={`navbar ${scrolled ? "solid" : "transparent"}`}>
        <div className="navbar-top-border"></div>
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo">
            <img src={Logo} alt="Logo" className="logo-icon" />
          </Link>

          <button
            className="hamburger"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`bar ${menuOpen ? "active" : ""}`}></span>
            <span className={`bar ${menuOpen ? "active" : ""}`}></span>
            <span className={`bar ${menuOpen ? "active" : ""}`}></span>
          </button>

          <div className="mobile-menu-wrapper" ref={menuRef} aria-hidden={!menuOpen}>
            <nav className="navbar-links">
              <Link
                to="/"
                className={activeLink === "Home" ? "active" : ""}
                onClick={closeMobileMenu}
              >
                Home
              </Link>

              <div className="nav-dropdown portfolio-dropdown">
                <div className={`portfolio-dropdown-trigger ${activeLink === "Portfolio" ? "active" : ""}`}>
                  <Link
                    to="/portfolio"
                    className={`portfolio-link ${activeLink === "Portfolio" ? "active" : ""}`}
                    onClick={closeMobileMenu}
                  >
                    Portfolio
                  </Link>
                  <button
                    type="button"
                    className={`dropdown-toggle portfolio-toggle ${activeLink === "Portfolio" ? "active" : ""}`}
                    aria-label="Toggle portfolio courses"
                    aria-expanded={portfolioDropdown}
                    onClick={() => setPortfolioDropdown(!portfolioDropdown)}
                  >
                    <span aria-hidden="true">{portfolioDropdown ? "v" : ">"}</span>
                  </button>
                </div>

                {portfolioDropdown && (
                  <div className="dropdown-menu">
                    {courseLinks.map((course) => (
                      <Link
                        key={course.path}
                        to={course.path}
                        className="dropdown-item"
                        onClick={closeMobileMenu}
                      >
                        {course.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/blog"
                className={activeLink === "Blog" ? "active" : ""}
                onClick={closeMobileMenu}
              >
                Blog
              </Link>

              <Link
                to="/about"
                className={activeLink === "About Us" ? "active" : ""}
                onClick={closeMobileMenu}
              >
                About Us
              </Link>

              <Link
                to="/contact"
                className={activeLink === "Contact" ? "active" : ""}
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </nav>
          </div>

          <div
            className={`mobile-overlay ${menuOpen ? "open" : ""}`}
            onClick={closeMobileMenu}
          ></div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
