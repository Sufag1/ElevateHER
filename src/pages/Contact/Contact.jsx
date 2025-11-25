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
            Erat dolore consequuntur facere consectetur beatae habitant conubia porttitor
            ridiculus cillum animi hic enim dolor, exceptuer sapienteria perspicitatis
            aliquet nunc occaecat illo aliquam.
          </p>
          <div className="contact-card">
            <div className="icon-wrapper">
              <img src={email} alt="Email Icon" className="icon" />
            </div>
            <div class="contact-info">
              <h3>Email Address :</h3>
              <p className="xyz">xyz@example.com</p>
            </div>
          </div>
          <div class="contact-card">
            <div class="icon-wrapper">
              <img src={phone} alt="Email Icon" class="icon" />
            </div>
            <div class="contact-info">
              <h3>Phone Number:</h3>
              <p>+(001)987 654 321 // (+23) 986-897-333</p>
            </div>
          </div>
          <div class="contact-card ccl">
            <div class="icon-wrapper">
              <img src={location} alt="Email Icon" class="icon" />
            </div>
            <div class="contact-info">
              <h3>Location Address:</h3>
              <p>23rd Street, West Road, California</p>
            </div>
          </div>
        </div>
        <form className="contact-form">
          <input type="text" placeholder="Your Name..." />
          <input type="email" placeholder="Your Email..." />
          <input type="text" placeholder="Your Subject..." />
          <textarea placeholder="Your Message (Optional)" rows="5" />
          <button className="btn" type="submit">Send Message</button>
          <div className="follow">
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
          </div>
        </form>
      </div>
      <div className="google container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094125!2d144.9537353153109!3d-37.81627974202121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ5JzAwLjYiUyAxNDTCsDU3JzE0LjMiRQ!5e0!3m2!1sen!2sus!4v1614095295417!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy">
        </iframe>
      </div>
      <Footer />
    </div>
  )
}

export default Contact