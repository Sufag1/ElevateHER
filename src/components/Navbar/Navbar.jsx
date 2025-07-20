import "./Navbar.css";
import Logo from "../../assets/elevateher_logo_black.svg"

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-top-border"></div>
      <div className="navbar-container">
        <div className="navbar-logo">
            <img src={Logo} alt="" className="logo-icon" />
        </div>
        <nav className="navbar-links">
          <a href="#" className="active">Home</a>
          <a href="#">Courses</a>
          <a href="#">Events</a>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
        </nav>
        <button className="get-started btn">Get Started</button>
      </div>
    </header>
  );
};

export default Navbar;
