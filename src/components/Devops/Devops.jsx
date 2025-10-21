import React, { useState } from "react";
import eventImage2 from '../../assets/DevOps.webp';
import Reactpic from '../../assets/Devs.jpg'
import '../AI/AI.css';

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
  FaPaperPlane
} from "react-icons/fa";
import { FiShare2 } from "react-icons/fi"; 

const dev = () => {
  const [showOptions, setShowOptions] = useState(false);

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

  return (
   
<section className="container">
      <section className="Ai-container">
<div className="divider-desk-con">
      <section className="ai-card-container">
          <div className="ai-image-wrapper">
            <img src={eventImage2} alt="Artificial Intelligence" />
          </div>
          <p className="ai-paragraph">
            DevOps Step into the world of seamless software delivery! This course introduces students to the dynamic field of DevOps where development and operations unite to build, test, and deploy applications faster and smarter. Through hands-on projects, students will learn how automation, collaboration, and cloud tools create modern workflows. An essential course for anyone curious about powering the tech behind the scenes.
          </p>
          <div>
          <div className="ai-image-wrapper">
            <img src={Reactpic} alt="Full Stack Development" />
          </div>
        </div>
        </section>
        
<section>
  <div className="ai-quote-card">
  <p className="ai-quote-heading">DevOps Course</p>
  <blockquote className="ai-quote-paragraph">
    This hands-on course will teach you how to bridge the gap between development and operations through automation and continuous delivery. You'll start with version control using Git, then move on to building robust CI/CD pipelines with tools like Jenkins and GitHub Actions. You'll also explore monitoring, logging, and infrastructure automation with Terraform and Ansible. By the end of the course, you’ll be able to build, test, deploy, and scale modern applications with speed and confidence.
  </blockquote>
</div>

        <div className="share-container">
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
        </div>

</section>
        
</div>
      
    {/* 🔽 PREVIOUS & NEXT ARROWS SECTION */}
<div className="nav-buttons">
  <a href="/artificial-intelligence" >
      <button className="btn btn-blue">Previous</button>

  </a>

  <a href="/frontend-development" >
      <button className="btn btn-blue">Next</button>

  </a>
</div>

      </section>
    </section>
  );
};
export default dev;
