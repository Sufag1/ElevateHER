import React from 'react';
import './AboutUsSection.css'; // Import your CSS here
import profileImage from '../../assets/testimonial-user.png'; // Replace with actual path
import engagementImage from '../../assets/social-engagement.png'; // Replace with actual path
import salesChart from '../../assets/sales-chart.png'; // Optional static image for chart or use a library

const AboutUsSection = () => {
  return (
    <section className="about-us-section">
      <div className="about-us-container">
        {/* Left Column */}
        <div className="about-us-left">
          <h2 className="about-us-title">
            Now Engaging More, <span className="highlight">Refreshing</span> Result
          </h2>
          <p className="about-us-description">
            Erat dolore consequuntur facere consectetur beatae beatae habitant conubia porttitor ridiculus cillum animi hic enim dolor,
            excepteur sapienterav perspiciatis aliquet nunc occaecat illo aliquam Erat dolorecelx consequuntur facere consectetur beatae beatae.
          </p>

          <div className="about-us-metrics">
            <div className="about-us-person">
              <img src={profileImage} alt="Surprised man pointing" className="about-us-person-img" />
            </div>
            <div className="about-us-engagement-box">
              <div className="engagement-percent">
                <div className="icon-circle">📊</div>
                <div>
                  <h3>120%</h3>
                  <span>ENGAGEMENT</span>
                </div>
              </div>
              <div className="sales-chart">
                <p>Increase Sales</p>
                <h4>+65.4%</h4>
                <img src={salesChart} alt="Sales Chart" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="about-us-right">
          <div className="video-thumbnail">
            <img src={engagementImage} alt="Social engagement graphics" className="video-img" />
            <div className="play-button">▶</div>
          </div>

          <ul className="about-us-list">
            <li>🔹 Nostrud ad dignissim, facilisis quo massa, nemo officia.</li>
            <li>🔹 Quis ipsa, laboriosam dui odio senectus, senectus per.</li>
            <li>🔹 At laboriosam, odio asperiores, quasi lorem vel integer.</li>
          </ul>

          <div className="testimonial">
            <img src={profileImage} alt="Meggie Wilson" className="testimonial-img" />
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
      </div>
    </section>
  );
};

export default AboutUsSection;
