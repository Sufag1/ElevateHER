import './empower.css';
import HeroImage from "../../assets/hero-image-with-bg.png";
import EasyImage from "../../assets/easy-pic.png";

export default function EmpowerImpact() {
  return (

 <section className='container'>
    <div className="empowerImpact-section">

      <div className="empowerImpact-hero">
        <h2 className="empowerImpact-title">
          Empowering Women, Delivering <span className="empowerImpact-highlight"> Remarkable </span>
            Results
        </h2>
        <p className="empowerImpact-description">
        We equip ambitious women with digital skills to thrive from AI Fullstack to DevOps
        building confidence, connections, and careers that span the globe.
        </p>
      </div>
        <div className='empower-image-container'>
          <img
              src={EasyImage}
              alt="Empowering Woman"
              className="engageCard-image"
              loading='lazy'
          />
          <img
          src={EasyImage}
          alt="Empowering Woman"
          className="engageCard-image-desktop"
          loading='lazy'
          />
        </div>
        <div className="impact-list">
          <div className="impact-list-one">
            <div className="impact-item">
              <span className="circle accent"></span> Fullstack AI & DevOps bootcamps 
            </div>
            <div className="impact-item">
              <span className="circle blue"></span>Global community of empowered
            </div>
          </div>
          <div className="impact-list-two">
            <div className="impact-item">
              <span className="circle purple"></span>Remote career support worldwide
            </div>
            <div className="impact-item">
              <span className="circle dark"></span >Tech training programs
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