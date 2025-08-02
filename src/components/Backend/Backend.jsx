import React, { useState } from "react";
import "./Backend.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
  FaPaperPlane
} from "react-icons/fa";
import { FiShare2 } from "react-icons/fi"; 
import eventImage3 from '../../assets/Backend.png';
import Reactpic from '../../assets/back.jpg'



const Back= () => {
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
            <img src={eventImage3} alt="Artificial Intelligence" />
          </div>
          <p className="ai-paragraph">
            Step into the world behind the scenes! This course introduces students to the backbone of modern web applications, where data flows and logic comes to life. From building APIs and handling databases to securing servers and optimizing performance, learners explore the tools that make websites functional and scalable. With hands-on projects and real-world infrastructure, students gain the skills to power robust digital experiences from the inside out.
          </p>
              <div>
              <div className="ai-image-wrapper">
                <img src={Reactpic} alt="Full Stack Development" />
              </div>
            </div>
            </section>
            
    <section>
      <div className="ai-quote-card">
      <p className="ai-quote-heading">Backend Development Course</p>
      <blockquote className="ai-quote-paragraph">
        This course dives deep into the server-side of web development, equipping you with the skills to build secure, scalable, and efficient backend systems. You'll start with Node.js and Express to create robust APIs and handle server logic. You'll then integrate MongoDB or PostgreSQL for database management. The course also covers authentication, authorization, RESTful API design, and deployment. Through real-world projects , you'll learn how to power the logic behind any full-stack application.
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
          
        <div className="nav-buttons">
  <a href="/frontend-development" >
      <button className="btn btn-blue">Previous</button>

  </a>

  <a href="/business-development">
      <button className="btn btn-blue">Next</button>

  </a>
</div>
    
          </section>
        </section>
      );
    };

export default Back;
