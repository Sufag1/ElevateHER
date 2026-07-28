import React from 'react';
import './StartupDetail.css';
import Shepallogo from './startupimg/shepalllogo.png'
import MarriageM from '../StartupDetail/startupimg/Sara6.jpeg'
import Sara1 from '../StartupDetail/startupimg/Sara1.jpeg'
import Sara2 from '../StartupDetail/startupimg/Sara2.jpeg'
import Sara3 from '../StartupDetail/startupimg/Sara3.jpeg'
import Sara4 from '../StartupDetail/startupimg/Sara4.jpeg'
import Sara5 from '../StartupDetail/startupimg/Sara5.jpeg'
import Shepall1 from '../StartupDetail/startupimg/shepallnaseni.jfif'
import Shepall2 from '../StartupDetail/startupimg/shepall2.jfif'
import Thumbsup from '../../assets/Review-Assets/Thumbsup-icon.svg'

const DATA = {
  shepall: {
    name: 'Shepall',
    img: Shepallogo,
    description: 'Shepall is a secure, offline-first digital data and document management platform that helps individuals, businesses, and institutions safely store, share, and verify vital digital credentials. Based out of Kano, Nigeria, the platform utilizes AI and military-grade encryption to eliminate document fraud and paper waste across Africa.',
    description2: "Shepall proudly emerged as the Kano State Champion in the 2026 NASENI InnovateNaija Challenge, earning the number one position among innovators in the state. This outstanding achievement secured Shepall a place among the Top 15 startups nationwide, qualifying the team for the prestigious national pitch competition where Nigeria's most innovative solutions will compete for national recognition and funding.",
    images: [Shepall1, Shepall2],
  },
  schooby: {
    name: 'Schooby',
    img: Thumbsup,
    description: 'Schooby is a startup that ... add full description here.',
    images: [],
  },
  'marriage-maven': {
    name: 'Marriage Maven',
    img: MarriageM,
    description: 'Marriage Maven is an Islamic marriage education and support platform designed to help individuals and couples build healthy, successful marriages based on the Qur’an, Sunnah, and sound psychological principles. Our mission is to reduce the rate of divorce by providing practical, faith-based guidance at every stage of the marriage journey.The platform offers four core courses: Relationship Guidance, Premarital Counselling, Conflict Resolution, and Parenting, delivered through structured video lessons by verified Islamic scholars and qualified professionals. As the platform grows, additional courses on topics such as intimacy, financial management, and other marriage-related subjects will be introduced.Marriage Maven also features a Resources Library with articles and Islamic marriage guidance, access to verified scholars and marriage counsellors for private consultations, and an AI-powered Islamic assistant that provides answers to marriage and family-related questions based on authentic Islamic teachings.In the future, the platform will also include a Prophetic Store, offering carefully selected Sunnah-inspired products such as dates, black seed, honey, and other beneficial items.',
    images: [Sara1, Sara2, Sara3, Sara4],
  },
  'siwes-startup': {
    name: 'SIWES Startup',
    img: Thumbsup,
    description: 'Startup from SIWES students ... add full description here.',
    images: [],
  }
};

const StartupDetail = ({ slug }) => {
  const key = slug?.toLowerCase();
  const data = DATA[key] || { name: slug, img: Thumbsup, description: 'Details coming soon.', images: [] };

  return (
    <section className="startup-detail">
      <h1 className="startup-title">{data.name}</h1>
      <div className="startup-hero">
        <img src={data.img} alt={data.name} />
        <div className="startup-description">{data.description}</div>
      </div>

      <div className="startup-description sd2">{data.description2}</div>

      <div className="startup-gallery">
        {data.images.length === 0 ? (
          <div className="no-images">No additional images. Add them in `DATA`.</div>
        ) : (
          data.images.map((src, i) => (
            <img key={i} src={src} alt={`${data.name}-${i}`} />
          ))
        )}
      </div>
    </section>
  );
};

export default StartupDetail;
