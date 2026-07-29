import React from 'react';
import './StartupDetail.css';
import Thumbsup from '../../assets/Review-Assets/Thumbsup-icon.svg'
import { STARTUPS_DATA } from '../../data/startupsData';

const StartupDetail = ({ slug }) => {
  const key = slug?.toLowerCase();
  const data = STARTUPS_DATA[key] || { name: slug, img: Thumbsup, description: 'Details coming soon.', images: [] };

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
          <div className="no-images">No additional images. Add them in `startupsData.js`.</div>
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
