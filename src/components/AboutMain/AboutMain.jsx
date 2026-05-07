import React from 'react';
import './AboutMain.css';
import profileImage from '../../assets/about-1.webp';

const AboutMain = () => {
  return (
    <section className="about-us-section">
      <div className="about-us-container container">
        <div className="about-us-left">
          <h2 className="about-us-title">
            Empowering Women Through <span className="highlight-about">Skills</span> and Opportunity
          </h2>

          <p className="about-us-description">
            We are committed to equipping women with practical, future-ready skills and connecting them to meaningful opportunities that enable sustainable careers, personal growth, and global impact.
          </p>

          <div className="about-us-metrics">
            <div className="about-us-person">
              <img
                src={profileImage}
                alt="Surprised man pointing"
                className="about-us-person-img"
              />
            </div>
            {/* <div className="about-us-person">
              <img
                src={profileImage2}
                alt="Surprised man pointing"
                className="about-us-person-img"
              />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMain;
