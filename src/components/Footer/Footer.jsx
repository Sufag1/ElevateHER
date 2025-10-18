import React from "react";
import "./Footer.css";
import logo from "../../assets/elevateher_logo_black.svg";

const Footer = ({ wavePosition = "bottom" }) => {
  return (
    <footer className={`footer ${wavePosition === "top" ? "wave-top" : "wave-bottom"}`}>
      {wavePosition === "top" && (
        <div className="footer-wave svg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
              <path class="elementor-shape-fill" opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"/>
              <path class="elementor-shape-fill" opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"/>
              <path class="elementor-shape-fill" d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"/>
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
            <li><a href="/">Home</a></li>
            <li><a href="/portfolio">Courses</a></li>
            <li><a href="/blog">Events</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" style={{ transform: 'rotate(180deg)' }}>
              <path fill="#FFFFFF" opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"/>
              
              <path fill="#FFFFFF" opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"/>
              
              <path fill="#FFFFFF" d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"/>
            </svg>


      </div>
    )}
    </footer>
  );
};

export default Footer;
