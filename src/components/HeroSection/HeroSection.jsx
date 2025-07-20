import React, { useEffect, useState } from "react";
import "./HeroSection.css";
import HeroImage from "../../assets/hero-image-with-bg.png";

const rotatingWords = ["DevOps", "Artificial Intelligence", "Web Development", "Business Development"];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSliding(false); // Reset animation
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
        setIsSliding(true); // Trigger animation again
      }, 50);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero container">
      <div className="hero-content">
        <p className="tagline">
          <span role="img" aria-label="wave">👋</span> We Are WordPress Agency
        </p>
        <h1>
          Digital Age<br /> Adventure In <br />
          <span
            className={`rotating-word ${isSliding ? "slide-bounce" : ""}`}
          >
            {rotatingWords[currentIndex]}
          </span>
        </h1>
        <p className="subtitle">
          When, while lovely valley teems with vapour around me and meridian sun strikes the upper impenetrable.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-purple">Get Start Today</button>
          <button className="btn btn-orange">Get Start Today</button>
        </div>
      </div>
      <div className="hero-image">
        <img className="person-placeholder" src={HeroImage} alt="Hero" />
      </div>
    </section>
  );
};

export default HeroSection;
