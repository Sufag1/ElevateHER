import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./AboutSocials.css"
import { getStartupsArray } from "../../data/startupsData";



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


    const startups = getStartupsArray();

    const truncate = (text, maxWords = 9) => {
        const words = text.trim().split(/\s+/);
        if (words.length <= maxWords) return text;
        return words.slice(0, maxWords).join(' ') + '...';
    };

    return(
        <section  className="About-Socials ">
            <div className="startups-msg">
                    <h1>Startups Developed Under Elevateher Innovation Space</h1>
                </div>
            
            <div className=" Socials-Container container">
                <div className="soc">
                    {startups.map((s) => (
                        <div key={s.slug} className={`SocialDiv ${s.slug === 'shepall' ? 'SocialDiv1' : 'SocialDiv2'}`}>
                            <img src={s.img} alt={s.name} className="socialicons" />
                            <div className="div-maintext">{s.name}</div>
                            <div className="div-othertext">{truncate(s.description, 8)}</div>
                            <div className="card-text ctd"><Link to={`/startup/${s.slug}`}>Learn More...</Link></div>
                        </div>
                    ))}

                </div>
                        
                {/* <div className="Percentbar-Div">
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
                </div> */}
            </div>
        </section>
    );
};

export default AboutSocials;