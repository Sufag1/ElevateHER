import React, { useState } from "react";
import eventImage1 from '../../assets/AI.webp';
import "./AI.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
  FaPaperPlane
} from "react-icons/fa";
import { FiShare2 } from "react-icons/fi"; 
import Reactpic from '../../assets/inte.png'


const Ai = () => {
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
            <img src={eventImage1} alt="Artificial Intelligence" />
          </div>
          <p className="ai-paragraph">
            Step into the world of smart technology! This course introduces students to the exciting field of Artificial Intelligence where computers can think, learn, and solve problems like humans. Through fun, practical projects, students will discover how AI powers apps, robots, and more. A great start for anyone curious about the tech that’s changing the world.
          </p>
                  <div>
                  <div className="ai-image-wrapper">
                    <img src={Reactpic} alt="Full Stack Development" />
                  </div>
                </div>
                </section>
                
        <section>
          <div className="ai-quote-card">
          <p className="ai-quote-heading">Artficial Intelligent Course</p>
          <blockquote className="ai-quote-paragraph">
            In this hands-on course, you'll explore the fundamentals and real-world applications of Artificial Intelligence.   You'll work on projects such as a chatbot, image recognition system, sentiment analysis tool, and a recommendation engine. By the end, you'll have the practical experience and knowledge to develop AI-driven solutions for real-world challenges. Explore the world of Artificial Intelligence and learn how to build smart systems that can think.
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
  <a href="/full-stack-development" >
      <button className="btn btn-blue">Previous</button>

  </a>

  <a href="/devops" className="">
      <button className="btn btn-blue">Next</button>

  </a>
</div>
              </section>
            </section>

               );
    };
export default Ai;
