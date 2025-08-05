import React from "react";
import "./Footer.css";
import logo from "../../assets/elevateher_logo_black.svg";

const Footer = ({ wavePosition = "bottom" }) => {
  return (
    <footer className={`footer ${wavePosition === "top" ? "wave-top" : "wave-bottom"}`}>
      {wavePosition === "top" && (
        <div className="footer-wave svg">
          <svg viewBox="0 0 1440 320" class="top-wave-svg" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path fill="#8d8f96" fill-opacity="1"
                d="M0,64L48,74.7C96,85,192,107,288,117.3C384,128,480,128,576,117.3C672,107,768,85,864,106.7C960,128,1056,192,1152,202.7C1248,213,1344,171,1392,149.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
            </path>
            <path fill="#2d2d2d" fill-opacity="0.9"
                d="M0,96L48,112C96,128,192,160,288,176C384,192,480,192,576,170.7C672,149,768,107,864,117.3C960,128,1056,192,1152,197.3C1248,203,1344,149,1392,122.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
            </path>
            <path fill="#000000" fill-opacity="0.7"
                d="M0,160L48,149.3C96,139,192,117,288,117.3C384,117,480,139,576,160C672,181,768,203,864,181.3C960,160,1056,96,1152,74.7C1248,53,1344,75,1392,85.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
            </path>
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
          <svg viewBox="0 0 1440 320" class="wave-svg" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path fill="#ffffff" fill-opacity="1"
              d="M0,160L48,176C96,192,192,224,288,229.3C384,235,480,213,576,192C672,171,768,149,864,160C960,171,1056,213,1152,224C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            </path>
            <path fill="#f1f4fb" fill-opacity="0.7"
              d="M0,128L48,112C96,96,192,64,288,80C384,96,480,160,576,165.3C672,171,768,117,864,101.3C960,85,1056,107,1152,133.3C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            </path>
            <path fill="#ebeffa" fill-opacity="0.5"
              d="M0,96L48,106.7C96,117,192,139,288,128C384,117,480,75,576,90.7C672,107,768,181,864,202.7C960,224,1056,192,1152,176C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            </path>
        </svg>
      </div>
    )}
    </footer>
  );
};

export default Footer;
