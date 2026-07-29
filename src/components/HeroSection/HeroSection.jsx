import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";
import HeroImg1 from "../../assets/Pict/DSC_6482.webp";
import HeroImg2 from "../../assets/Pict/DSC_6394.webp";
import HeroImg3 from "../../assets/Pict/DSC_6358.webp";
import HeroImg4 from "../../assets/Pict/DSC_6101.webp";
import HeroImg5 from "../../assets/Pict/anty1.webp";
import HeroImg6 from "../../assets/Pict/allinall.webp";

const rotatingWords = ["DevOps", "Artificial Intelligence", "Web Development", "Business Development"];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(true);

  const heroImages = [HeroImg1, HeroImg2, HeroImg3, HeroImg4, HeroImg5, HeroImg6];
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

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

  useEffect(() => {
    const heroInterval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(heroInterval);
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
            {/* <button className="btn btn-primary">Explore Pathways</button> */}
            <Link to="/contact">
              <button className="btn btn-secondary">Contact Us</button>
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image">
            {heroImages.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Hero ${idx}`}
                className={idx === currentHeroIndex ? "active" : ""}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
