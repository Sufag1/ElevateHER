import React, { useEffect, useState } from "react";
import "./HeroSection.css";
import HeroImage from "../../assets/hero-image-with-bg.webp";

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
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-image">
          <img className="hero-person" src={HeroImage} alt="Hero" />
        </div>
        <div className="hero-right">
          <p className="tagline">
            <span role="img" aria-label="wave">👋</span> We Are Shaping the Future of Women!
          </p>
          <h1>
            Empowering Digital<br /> Dreams Through<br />
            <span
              className={`rotating-word ${isSliding ? "slide-bounce" : ""}`}
            >
              {rotatingWords[currentIndex]}
            </span>
          </h1>
          <p className="hero-subtitle">
            We train women to excel and connect them to global  remote opportunities around the world.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-blue">Get Started</button>
            <button className="btn btn-orange">Apply Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
