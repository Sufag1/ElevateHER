import React from "react";
import "./AboutPartners.css"
import Partner1 from "../../assets/paf-logo.webp"
import Partner2 from "../../assets/AK&A-Logo.webp"
import Partner3 from "../../assets/giz-logo.svg"
import Partner4 from "../../assets/remoting.webp"
import Partner5 from "../../assets/tvet.webp"
import Partner6 from "../../assets/logo-sikili.webp"


const AboutPartners = () => {

    return(
        <section className="Partners-Section">
            <div className="container Partners-Content">
                <h2 className="Partners-Title">
                    Our Genuine <span>Trusted</span> Partners & Clients
                </h2>
                <div className="Partners-Carousel">
                    <div className="Partners-Logos">
                        <img src={Partner1} alt="Partner 1" />
                        <img src={Partner2} alt="Partner 2" />
                        <img src={Partner3} alt="Partner 3" />
                        <img src={Partner4} alt="Partner 4" />
                        <img src={Partner5} alt="Partner 5" />
                        <img src={Partner6} alt="Partner 6" />
                        {/* repeating logos to help with infinite effect */}
                        <img src={Partner1} alt="Partner 1" />
                        <img src={Partner2} alt="Partner 2" />
                        <img src={Partner3} alt="Partner 3" />
                        <img src={Partner4} alt="Partner 4" />
                        <img src={Partner5} alt="Partner 5" />
                        <img src={Partner6} alt="Partner 6" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPartners