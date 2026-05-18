import React, { useEffect, useState } from "react";
import "./HeroSection.css";
import HeroImageSide from "../../assets/Pict/DSC_6358.webp";
import HeroImageFront from "../../assets/Pict/DSC_6482.webp";

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
    <section className="hero" >
      <div className="hero-container container">
        <div className="hero-text">
          <p className="tagline">
            Empowering Women in Tech
          </p>
          <h1>
            Unlock Your Potential in<br />
            <span
              className={`rotating-word ${isSliding ? "slide-bounce" : ""}`}
            >
              {rotatingWords[currentIndex]}
            </span>
          </h1>
          <p className="hero-subtitle">
            We equip women with in-demand digital skills, mentorship, and global career opportunities to thrive in the technology industry.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Explore Pathways</button>
            <button className="btn btn-secondary">Schedule Call</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image">
            {/* <img className="hero-person" src={HeroImageFront} alt="Hero" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
