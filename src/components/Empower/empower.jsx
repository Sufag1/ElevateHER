import './empower.css';
import HeroImage from "../../assets/hero-image-with-bg.png";
import EasyImage1 from "../../assets/easy-pic-1.png";
import EasyImage2 from "../../assets/easy-pic-2.png";

export default function EmpowerImpact() {
  return (

 <section className='container'>
    <div className="empowerImpact-section">

      <div className="empowerImpact-hero">
        <h2 className="empowerImpact-title">
          Turning Skills Into <span className="empowerImpact-highlight">Sustainable</span> Careers
          {/* Empowering Women, Delivering <span className="empowerImpact-highlight"> Remarkable </span>
            Results */}
        </h2>
        <p className="empowerImpact-description">
          We equip ambitious women with the skills, confidence, and support needed to build sustainable careers and access global remote opportunities without compromising family life.
        {/* We equip ambitious women with digital skills to thrive from AI Fullstack to DevOps
        building confidence, connections, and careers that span the globe. */}
        </p>
      </div>
        <div className='empower-image-container'>
          <img
              src={EasyImage1}
              alt="Empowering Woman"
              className="engageCard-image"
              loading='lazy'
          />
          <img
          src={EasyImage2}
          alt="Empowering Woman"
          className="engageCard-image-desktop"
          loading='lazy'
          />
        </div>
        <div className="impact-list">
          <div className="impact-list-one">
            <div className="impact-item">
              {/* <span className="circle accent"></span> Fullstack AI & DevOps bootcamps  */}
              <span className="circle accent"></span> Practical, Job-Ready Training
            </div>
            <div className="impact-item">
              {/* <span className="circle blue"></span>Global community of empowered */}
              <span className="circle blue"></span>Mentorship & Community Support
            </div>
          </div>
          <div className="impact-list-two">
            <div className="impact-item">
              {/* <span className="circle purple"></span>Remote career support worldwide */}
              <span className="circle purple"></span>Global Remote Opportunities
            </div>
            <div className="impact-item">
              {/* <span className="circle dark"></span >Tech training programs */}
              <span className="circle dark"></span >Flexible & Family-Friendly Learning
            </div>
          </div>
        </div>
       <div className='impact-btn'>
          <button className="btn btn-blue">More About Us</button>
       </div>
       {/* <div className="profile-section">
        <div className="profile-card">
          <img 
            src={HeroImage} 
            alt="Profile" 
            className="profile-image" 
          />
          <div className="profile-details">
            <h3 className="profile-name">Aisha Kwaku</h3>
            <p className="profile-title">CEO, HEAD DIRECTOR</p>
          </div>
        </div>
        <div className="profile-card">
          <img 
            src={HeroImage} 
            alt="Profile" 
            className="profile-image" 
          />
          <div className="profile-details">
            <h3 className="profile-name">Aisha Kwaku</h3>
            <p className="profile-title">CEO, HEAD DIRECTOR</p>
          </div>
        </div>
       </div> */}
    </div>
</section>
   
  );
}