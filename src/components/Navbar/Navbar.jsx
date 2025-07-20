import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-top-border"></div>
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-icon">❄</span>
          <span className="logo-text">
            PHLOX <strong>Business</strong>
          </span>
        </div>
        <nav className="navbar-links">
          <a href="#" className="active">Home</a>
          <a href="#">Blog</a>
          <a href="#">Portfolio</a>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
        </nav>
        <button className="get-started">Get Started</button>
      </div>
    </header>
  );
};

export default Navbar;
