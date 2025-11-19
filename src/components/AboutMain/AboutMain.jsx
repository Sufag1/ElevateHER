import React from 'react';
import './AboutMain.css';
import profileImage from '../../assets/easy-pic.png';

const AboutMain = () => {
  return (
    <section className="about-us-section">
      <div className="about-us-container container">

        {/* LEFT SECTION */}
        <div className="about-us-left">
          <h2 className="about-us-title">
            Now Engaging More, <span className="highlight-about">Refreshing</span> Result
          </h2>

          <p className="about-us-description">
            Erat dolore consequuntur facere consectetur beatae beatae habitant conubia
            porttitor ridiculus cillum animi hic enim dolor, excepteur sapienterav
            perspiciatis aliquet nunc occaecat illo aliquam Erat dolorecelx consequuntur
            facere consectetur beatae beatae.
          </p>

          <div className="about-us-metrics">
            <div className="about-us-person">
              <img
                src={profileImage}
                alt="Surprised man pointing"
                className="about-us-person-img"
              />
            </div>
            <div className="about-us-person">
              <img
                src={profileImage}
                alt="Surprised man pointing"
                className="about-us-person-img"
              />
            </div>
          </div>
        </div>

        {/* RIGHT SECTION — COMMENTED OUT */}
        {/*
        <div className="about-us-right">

          <div className="video-thumbnail">
            <div className="play-button">▶</div>
          </div>

          <ul className="about-us-list">
            <li>🔹 Nostrud ad dignissim, facilisis quo massa, nemo officia.</li>
            <li>🔹 Quis ipsa, laboriosam dui odio senectus, senectus per.</li>
            <li>🔹 At laboriosam, odio asperiores, quasi lorem vel integer.</li>
          </ul>

          <div className="testimonial">
            <div>
              <h4>Meggie Wilson</h4>
              <p className="testimonial-role">CEO, HEAD DIRECTOR</p>
            </div>
            <div className="testimonial-rating">
              ⭐⭐⭐⭐☆
              <p>(15k+ Positive Reviews)</p>
            </div>
          </div>

        </div>
        */}

      </div>
    </section>
  );
};

export default AboutMain;
