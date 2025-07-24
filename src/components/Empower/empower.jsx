import './empower.css';
import HeroImage from "../../assets/hero-image-with-bg.png";
import EasyImage from "../../assets/easy-pic.png";

export default function EmpowerImpact() {
  return (
    <div className='container'>
                  
            <section className="empowerImpact-section">
  <section className='sec-div-of-tab'>
              <div className="empowerImpact-hero">
        <h1 className="empowerImpact-title">
          Empowering Women, Delivering <span className="empowerImpact-highlight"> Refreshing </span>
          Results
        </h1>

        <p className="empowerImpact-description">
          We equip ambitious women with digital skills to thrive from <strong>AI Fullstack</strong> to <strong> DevOps </strong>
          building confidence, connections, and careers that span the globe.
        </p>
<div className="empowerImpact-divider"></div>

        <ul className="empowerImpact-list">
          <div className='tabs-look'>
<div className='tech-div'>
<li>✔Tech training programs</li>
<li> ✔Remote career support worldwide</li>
</div>
            <div className='tech-div-2'>
              <li>✔ Fullstack AI & DevOps bootcamps</li>
  <li>✔ Global community of empowered women</li>
              </div> 
  
          </div>
       
        </ul>

      </div>



      <div className="empowerImpact-divider"></div>


      <div className="empowerImpact-founder">
        < div className='buttons-divider'>
<div className='btn-blue'>
<button className="btn btn-blue">More About Us</button>
</div>
<div className="profile-card">
      <img 
        src={HeroImage} 
        alt="Profile" 
        className="profile-image" 
      />
      <h3 className="profile-name"></h3>
      <p className="profile-title">CEO, HEAD DIRECTOR</p>
    </div>
        </div>
        


        

      </div>
              </section>

      <section className='suc-dec-div'>
        <div className="engageCard-wrapper">
      {/* Card with layered image */}
      <div className="engageCard-card">
        <img
          src={EasyImage}
          alt="Empowering Woman"
          className="engageCard-image"
        />
      </div>

      {/* Stylish Badge Below Image */}
      {/* <div className="engageCard-badge">
        <span className="engageCard-icon">✨</span>
        <div className="engageCard-stats">
          <span className="engageCard-value">120%</span>
          <span className="engageCard-label">ENGAGEMENT</span>
        </div>
      </div> */}
    </div>
{/*  
               <div className="successChart-wrapper">
  <div className="successChart-card">
    <div className="successChart-header">
      <span className="successChart-value">+65.4%</span>
      <span className="successChart-label">Student Success Growth</span>
    </div>

    <div className="successChart-track">
      <div className="success-step">
        <div className="step-dot"></div>
        <span className="step-label">Started</span>
      </div>

      <div className="step-connector"></div>

      <div className="success-step">
        <div className="step-dot"></div>
        <span className="step-label">Learning</span>
      </div>

      <div className="step-connector"></div>

      <div className="success-step">
        <div className="step-dot"></div>
        <span className="step-label">Mastery</span>
      </div>

      <div className="step-connector"></div>

      <div className="success-step">
        <div className="step-dot final"></div>
        <span className="step-label">Success</span>
      </div>
    </div>
  </div>
</div> */}

      </section>

    </section>

    </div>
   
  );
}