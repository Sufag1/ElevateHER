import React, { useState } from "react";
import "./Business.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
  FaPaperPlane
} from "react-icons/fa";
import { FiShare2 } from "react-icons/fi"; 
import eventImage6 from '../../assets/business-development.png';
import Reactpic from '../../assets/busi.jpg'



const BusiDev= () => {
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
            <img src={eventImage6} alt="Artificial Intelligence" />
          </div>
          <p className="ai-paragraph">
            Step into the world of business development! This course introduces students to the backbone of modern business growth, where strategies are built and partnerships come to life. From building a strong sales pipeline and handling client relationships to securing new markets and optimizing team performance, learners explore the tools that make businesses functional and scalable. With hands-on projects and real-world case studies, students gain the skills to power robust company growth from the inside out.
          </p>
             <div>
             <div className="ai-image-wrapper">
               <img src={Reactpic} alt="Full Stack Development" />
             </div>
           </div>
           </section>
           
   <section>
     <div className="ai-quote-card">
     <p className="ai-quote-heading">Business Development Course</p>
     <blockquote className="ai-quote-paragraph">
This course empowers you with the strategies and tools needed to grow a business in today's competitive landscape. You'll learn core concepts such as market research, customer acquisition, sales funnel creation, and strategic partnerships.  Through case studies and practical projects, you'll develop the skills to identify opportunities, scale operations, and create sustainable value whether you're launching a startup or driving growth in an established company.     </blockquote>
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
  <a href="/backend-development" >
      <button className="btn btn-blue">Previous</button>

  </a>

  
</div>
   
         </section>
       </section>
     );
   };

export default BusiDev;
