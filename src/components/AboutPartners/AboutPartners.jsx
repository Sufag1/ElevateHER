import React from "react";
import "./AboutPartners.css"
import Partner1 from "../../assets/Review-Assets/Partner1.svg"
import Partner2 from "../../assets/Review-Assets/Partner2.svg"
import Partner3 from "../../assets/Review-Assets/Partner3.svg"
import Partner4 from "../../assets/Review-Assets/Partner4.svg"
import Partner5 from "../../assets/Review-Assets/Partner5.svg"


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
                        {/* repeating logos to help with infinite effect */}
                        <img src={Partner1} alt="Partner 1" />
                        <img src={Partner2} alt="Partner 2" />
                        <img src={Partner3} alt="Partner 3" />
                        <img src={Partner4} alt="Partner 4" />
                        <img src={Partner5} alt="Partner 5" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPartners