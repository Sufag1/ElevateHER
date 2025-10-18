import React from 'react';
import './PageHeader.css';
import BlueStar from '../../assets/PageHeader-Assets/BlueStar.svg';
import SmallCircle from '../../assets/PageHeader-Assets/SmallCircle.svg';
import BigCircle from '../../assets/PageHeader-Assets/BigCircle.svg';
import PinkStar from '../../assets/PageHeader-Assets/PinkStar.svg';
import Dots from '../../assets/PageHeader-Assets/dots.svg';
import RoundedCircle from '../../assets/PageHeader-Assets/RoundedCircle.svg';

function PageHeader({ title = "Page Title" }) {
  return (
    <div className="page-header container">
      <img src={BlueStar} alt="Blue Star" className="bg-icon blue-star" />
      <img src={SmallCircle} alt="Small Circle" className="bg-icon small-circle" />
      <img src={BigCircle} alt="Big Circle" className="bg-icon big-circle" />
      <img src={Dots} alt="Dots" className="bg-icon dots" />
      <img src={PinkStar} alt="Pink Star" className="bg-icon pink-star" />
      <img src={RoundedCircle} alt="Rounded Circle" className="bg-icon rounded-circle" />
      <h1>{title}</h1>
    </div>
  );
}

export default PageHeader;
