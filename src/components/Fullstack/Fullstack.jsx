import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // <-- for navigation
import '../AI/AI.css';

import eventImage4 from '../../assets/Pict/FS.webp';
import Reactpic from '../../assets/react-project.png'
import Reactpic1 from '../../assets/Pict/class.webp'
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
  FaPaperPlane
} from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";

const Full = () => {
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate(); // <-- hook for navigation

  const toggleShareOptions = () => {
    setShowOptions(!showOptions);
  };

  const shareLinks = [
    { name: "Facebook", url: "https://www.facebook.com/sharer/sharer.php?u=YOUR_URL", icon: <FaFacebookF /> },
    { name: "Twitter", url: "https://twitter.com/intent/tweet?url=YOUR_URL&text=Check%20this%20out!", icon: <FaTwitter /> },
    { name: "LinkedIn", url: "https://www.linkedin.com/shareArticle?url=YOUR_URL", icon: <FaLinkedinIn /> },
    { name: "WhatsApp", url: "https://api.whatsapp.com/send?text=YOUR_URL", icon: <FaWhatsapp /> },
    { name: "Email", url: "mailto:?subject=Check%20this%20out&body=YOUR_URL", icon: <FaEnvelope /> },
    { name: "Telegram", url: "https://t.me/share/url?url=YOUR_URL", icon: <FaPaperPlane /> },
  ];

  // ⏭️ Navigate to AI page
  const goToNext = () => {
    navigate("/artificial-intelligence");
  };

  return (
    <section className="container">
      <section className="Ai-container">
        <div className="divider-desk-con">
          <section className="ai-card-container">
            <div className="ai-image-wrapper">
              <img src={eventImage4} alt="Full Stack Development" />
            </div>
            <p className="ai-paragraph empowerImpact-description">
              Step into the world of complete web creation! This course guides students through both the frontend design and backend architecture of modern applications. From building stunning interfaces to managing servers and databases, learners will explore the tools and techniques that bring full-stack solutions to life. With hands-on projects and real-world scenarios, students gain the confidence to craft and deploy powerful web experiences from scratch.
            </p>

            <div>
              <div className="ai-quote-card">
                <h2 className="blog-title course-ttl">
                  Full-Stack Web Development <span className="highlight-blog">Course</span>
                </h2>
                <blockquote className="ai-quote-paragraph empowerImpact-description">
                  This comprehensive course teaches full-stack web development from the ground up. You'll start with HTML and CSS, advance to React for frontend development, and use Node.js, Express, MongoDB, and Mongoose on the backend. Through hands-on projects like a travel site, hotel site, and recipe site, you’ll build a strong portfolio and gain the skills to create real-world applications.earn to build complete web applications from start to finish using front-end and back-end technologies.
                </blockquote>
                <p style={{ color: 'grey' }}><i>Duration: 6 months</i>  </p>

              </div>
              <div className="ai-image-wrapper">
                <h2 className="blog-title course-ttl">
                  Project <span className="highlight-blog project-smp">Sample</span>
                </h2>            
                <div className="proj-div"><img src={Reactpic} alt="Full Stack Development" /><img src={Reactpic1} alt="Full Stack Development" /></div>
                
              </div>
            </div>
          </section>

          <section>


            {/* <div className="share-container">
          <div className="share-text" onClick={toggleShareOptions}>
            <FiShare2 /> <span>Share</span>
          </div>
          {showOptions && (
            <div className="share-options-popup">
              {shareLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="popup-icon"
                  title={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="project-card-container">
          <div className="project-info">
            <p><strong>Duration:</strong> 6 months </p>
            <p><strong>Next Cohort:</strong> 12th December 2029</p>
          </div>
          <button className="btn btn-orange"> Apply Now</button>
        </div> */}

          </section>

        </div>

        {/* 🔽 PREVIOUS & NEXT ARROWS SECTION */}
        {/* <div className="nav-buttons">
  
  <a href="/artificial-intelligence">
    <div className="arrow-circle">&#8594;</div>
    <button className="btn btn-blue">Next</button>

  </a>
</div> */}

      </section>
    </section>
  );
};

export default Full;
