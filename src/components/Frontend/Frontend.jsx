import React, { useState } from "react";
import "./Frontend.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
  FaPaperPlane
} from "react-icons/fa";
import { FiShare2 } from "react-icons/fi"; 
import eventImage5 from '../../assets/Frontend.png';
import Reactpic from '../../assets/travel.png'



const Front = () => {
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
            <img src={eventImage5} alt="Artificial Intelligence" />
          </div>
          <p className="ai-paragraph">
            Step into the world of stunning digital design! This course immerses students in the art and science of creating user interfaces that captivate and perform. From HTML and CSS to advanced JavaScript frameworks, learners explore the visual and interactive elements that shape the user experience. With hands-on projects and modern design principles, students gain the skills to build responsive, accessible, and engaging web applications.
          </p>

    
              <div>
              <div className="ai-image-wrapper">
                <img src={Reactpic} alt="Full Stack Development" />
              </div>
            </div>
            </section>
            
    <section>
      <div className="ai-quote-card">
      <p className="ai-quote-heading">Frontend Development Course</p>
      <blockquote className="ai-quote-paragraph">
        This course takes you on a journey from the basics of web design to building dynamic and responsive interfaces. You'll start with HTML, CSS, and JavaScript. Then, you'll master modern frontend frameworks like React. You'll also learn APIs, manage user authentication, and optimize performance. Through real-world projects like a portfolio site and e-commerce interface you’ll build a strong foundation in UI/UX, responsive design. By the end, you’ll be ready to create  professional web apps.
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
  <a href="/devops" >
    <button className="btn btn-blue">Previous</button>

  </a>

  <a href="/backend-development">
    <button className="btn btn-blue">Next</button>

  </a>
</div>
    
          </section>
        </section>
      );
    };
    

export default Front;
