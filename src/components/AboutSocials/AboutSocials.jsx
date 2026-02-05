import React, { useState, useEffect, useRef } from "react";
import "./AboutSocials.css"
import Globeicon from "../../assets/Review-Assets/Globe-icon.svg"
import Thumbsup  from "../../assets/Review-Assets/Thumbsup-icon.svg"



const AboutSocials = () => {
    const [progress1, setProgress1] = useState(0);
    const [progress2, setProgress2] = useState(0);

    useEffect(() => {
    const animate = (setProgress, target, duration) => {
        let start = 0;
        const stepTime = Math.max(Math.floor(duration / target), 10);
        const timer = setInterval(() => {
        start += 1;
        setProgress(start);
        if (start >= target) {
            clearInterval(timer);
        }
        }, stepTime);
    };

  animate(setProgress1, 98, 5000); // animate to 98 in 2 seconds
  animate(setProgress2, 92, 5000); // animate to 92 in 2 seconds

}, []);


    return(
        <section  className="About-Socials">
            <div className=" Socials-Container">

                <div>
                    
                </div>
                <div className="soc">
                    <div className="SocialDiv SocialDiv1">
                        <img src= {Globeicon} alt="Icon of the Globe" className="socialicons worldicon" />
                        <div className="div-maintext">
                            Operating All over the World
                        </div>
                        <div className="div-othertext">
                            Occaecati tellus porta occaecat bibendum placeat porta beatae sunt, taciti.
                        </div>
                </div>
                <div className="SocialDiv SocialDiv2">
                        <img src= {Thumbsup} alt="Icon of the Globe" className="socialicons Thumbsup " />
                        <div className="div-maintext">
                            Trusted by agile Company
                        </div>
                        <div className="div-othertext">
                                Occaecati tellus porta occaecat bibendum placeat porta beatae sunt, taciti.
                        </div>
                </div>

                </div>
                        
                <div className="Percentbar-Div">
                    <h2 className="maintext-social">Giving <span className="maintextsocial-span"> Solution </span> For Social Media</h2>
                    <div className="Socials-sectext">
                        Erat dolore consequuntur facere consectetuer beatae beatae
                        habitant conubia porttitor ridiculus cill.
                    </div>

                    <div className="percentbar-item">
                        <div className="label">
                            Social Media Branding <span className="percentage">{progress1}%</span>
                        </div>
                        <div className="progress-bar">
                            <div
                            className="progress-fill"
                            style={{ width: `${progress1}%` }}
                            ></div>
                        </div>
                    </div>
                    <div className="percentbar-item">
                        <div className="label">
                            Engagement Reach <span className="percentage">{progress2}%</span>
                        </div>
                        <div className="progress-bar">
                            <div
                            className="progress-fill"
                            style={{ width: `${progress2}%` }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSocials;