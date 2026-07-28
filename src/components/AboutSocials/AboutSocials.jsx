import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./AboutSocials.css"
import Globeicon from "../StartupDetail/startupimg/shepalllogo.png"
import Thumbsup  from "../../assets/Review-Assets/Thumbsup-icon.svg"
import MarriageM from "../StartupDetail/startupimg/Sara6.jpeg"


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


    const startups = [
        { name: 'Shepall', slug: 'shepall', img: Globeicon, desc: 'Shepall is a secure, offline-first digital data and document management platform that helps individuals, businesses, and institutions safely store, share, and verify vital digital credentials. Based out of Kano, Nigeria, the platform utilizes AI and military-grade encryption to eliminate document fraud and paper waste across Africa' },
        { name: 'Schooby', slug: 'schooby', img: Thumbsup, desc: 'Occaecati tellus porta occaecat bibendum placeat porta beatae sunt, taciti.' },
        { name: 'Marriage Maven', slug: 'marriage-maven', img: MarriageM, desc: 'Marriage Maven is an Islamic marriage education and support platform designed to help individuals and couples build healthy, successful marriages based on the Qur’an, Sunnah, and sound psychological principles. Our mission is to reduce the rate of divorce by providing practical, faith-based guidance at every stage of the marriage journey.' },
        { name: 'SIWES Startup', slug: 'siwes-startup', img: Thumbsup, desc: 'Occaecati tellus porta occaecat bibendum placeat porta beatae sunt, taciti.' },
    ];

    const truncate = (text, maxWords = 9) => {
        const words = text.trim().split(/\s+/);
        if (words.length <= maxWords) return text;
        return words.slice(0, maxWords).join(' ') + '...';
    };

    return(
        <section  className="About-Socials ">
            
            <div className=" Socials-Container container">

                <div className="startups-msg">
                    <h1>Startups Developed Under Elevateher Innovation Space</h1>
                </div>
                <div className="soc">
                    {startups.map((s) => (
                        <div key={s.slug} className={`SocialDiv ${s.slug === 'shepall' ? 'SocialDiv1' : 'SocialDiv2'}`}>
                            <img src={s.img} alt={s.name} className="socialicons" />
                            <div className="div-maintext">{s.name}</div>
                            <div className="div-othertext">{truncate(s.desc, 9)}</div>
                            <div className="card-text"><Link to={`/startup/${s.slug}`}>Learn More...</Link></div>
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