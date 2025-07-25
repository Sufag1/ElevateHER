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
             {/* <div className="empowerImpact-divider"></div> */}
 </div>

  <div className="impact-container">
      <div className="impact-list">
        <div className="impact-item">
          <span className="circle-badge"></span> Fullstack AI & DevOps bootcamps 
        </div>
        <div className="impact-item">
          <span className="circle-badge"></span> Global community of empowered women 
        </div>
        <div className="impact-item">
          <span className="circle-badge"></span> Remote career support worldwide
        </div>
        <div className="impact-item">
          <span className="circle-badge"></span >  Tech training   programs
        </div>
      </div>
    </div>

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
               <div className="engageCard-card">
                  <img
                     src={EasyImage}
                     alt="Empowering Woman"
                     className="engageCard-image"
                  />
               </div>
              </div>
      </section>
    </section>
</div>
   
  );
}