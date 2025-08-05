import React from "react";
import "./Footer.css";
import logo from "../../assets/elevateher_logo_black.svg";

const Footer = ({ wavePosition = "bottom",  waveColor = { primary: '#000000', secondary: '#423f3fff', tetiary: '#ffffff'} }) => {
  return (
    <footer className={`footer ${wavePosition === "top" ? "wave-top" : "wave-bottom"}`}>
      {wavePosition === "top" && (
        <div className="footer-wave svg">
          <svg viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path
          d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,0 L0,0 Z"
          fill={waveColor.primary}
          opacity="0.9"
        />
        <path
          d="M0,0 C150,80 350,10 600,40 C850,70 1050,10 1200,40 L1200,0 L0,0 Z"
          fill={waveColor.secondary}
          opacity="0.5"
        />
      </svg>
        </div>
      )}

      <div className="container footer-content">
        <div className="footer-box">
          <img src={logo} alt="ElevateHer Logo" className="footer-logo" />
          <p>
            At ElevateHer, we empower women to become Full-Stack, AI, and DevOps
            professionals, and connect them with international remote jobs.
          </p>
        </div>
        <div className="footer-box">
          <h3>Useful Links</h3>
          <div className="divider"></div>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-box">
          <h3>Contact</h3>
          <div className="divider"></div>
          <p>No. 1A Asma'u Yakubu Street,<br />off Lamido Crescent, Kano, Nigeria</p>
          <p>Email: <a href="mailto:info@elevateher.nigeria">info@elevateher.nigeria</a></p>
          <p>Phone: +234 800 000 0000</p>
        </div>

        <div className="footer-box">
          <h3>Sign Up</h3>
          <div className="divider"></div>
          <p>Stay updated with news, programs, and offers from ElevateHer</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter Your Email" />
            <button type="submit" className="btn">SUBMIT</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025. All Rights Reserved. Powered by ElevateHer </p>
      </div>

      {wavePosition === "bottom" && (
        <div className="footer-wave svg">
            <svg viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path
          d="M0,0 C150,80 350,10 600,40 C850,70 1050,10 1200,40 L1200,100 L0,100 Z"
          fill={waveColor.tetiary}
        />
      </svg>
        </div>
      )}
    </footer>
  );
};

export default Footer;
