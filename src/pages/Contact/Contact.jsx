import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader"
import "./Contact.css"
import code from "../../assets/code.svg";
import phone from "../../assets/phone.png"
import email from "../../assets/email.png"
import location from "../../assets/location.png"
import Facebook from "../../assets/Facebook.svg"
import Youtube from "../../assets/Youtube.svg"
import Instagram from "../../assets/Instagram.svg"
import Whatsapp from "../../assets/Whatsapp.svg"
import LinkedIn from "../../assets/LinkedIn.svg"
import Footer from "../../components/Footer/Footer";



const Contact = () => {
  return (
    <div className="contact-div">
      <PageHeader title="Contact Us" />
      <div className="contact-container container">
        <div className="contact-info">
          <h2>Feel Free To <span>Contact</span> & Get In Touch !</h2>
          <p>
            <p>
  We'd love to hear from you. Whether you have a question, need support, or want to learn more about our programs and services, our team is here to help. Fill out the form, and we'll get back to you as soon as possible.
</p>
          </p>
          <div className="contact-card">
            <div className="icon-wrapper">
              <img src={email} alt="Email Icon" className="icon" />
            </div>
            <div className="contact-info">
              <h3>Email Address :</h3>
              <p className="xyz">khadija@elevateher.com.ng</p>
            </div>
          </div>
          <div className="contact-card">
            <div className="icon-wrapper">
              <img src={phone} alt="Email Icon" className="icon" />
            </div>
            <div className="contact-info">
              <h3>Phone Number:</h3>
              <p>+2349016966819 <br/> +2348155185040</p>
            </div>
          </div>
          <div className="contact-card ccl">
            <div className="icon-wrapper">
              <img src={location} alt="Email Icon" className="icon" />
            </div>
            <div className="contact-info">
              <h3>Location Address:</h3>
              <p>No. 1A Asma'u Yakubu Street,
off Lamido Crescent, Kano, Nigeria.</p>
            </div>
          </div>
        </div>
        <form
          className="contact-form"
          action="https://formsubmit.co/khadija@elevateher.com.ng"
          method="POST"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New message from ElevateHer contact form" />
          <input type="text" name="name" placeholder="Your Name..." required />
          <input type="email" name="email" placeholder="Your Email..." required />
          <input type="text" name="subject" placeholder="Your Subject..." />
          <textarea name="message" placeholder="Your Message (Optional)" rows="5" />
          <button className="btn" type="submit">Send Message</button>
          {/* <div className="follow">
            <h3>Follow us on social media:</h3>
            <div className="social">
              <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={Facebook} alt="facebook" />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={Whatsapp} alt="whatsapp" />
                    </a>
              
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={Youtube} alt="youtube" />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={Instagram} alt="instagram" />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={LinkedIn} alt="linked in" />
                    </a>
            </div>
          </div> */}
        </form>
      </div>
      <div className="google container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094125!2d8.56380!3d11.9898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z11.9898,8.56380!5e0!3m2!1sen!2sus!4v1614095295417!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        >
        </iframe>
      </div>
      <Footer />
    </div>
  )
}

export default Contact