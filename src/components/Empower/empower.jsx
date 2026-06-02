import './empower.css';
import EasyImage1 from "../../assets/Pict/homepg.webp";
import EasyImage2 from "../../assets/Pict/anty.webp";
import EasyImage3 from "../../assets/Pict/mana.webp";

export default function EmpowerImpact() {
  return (

    <section className='container'>
      <div className="empowerImpact-section">

        <div className="empowerImpact-hero">
          <h2 className="empowerImpact-title">
            Turning Skills Into <span className="empowerImpact-highlight">Sustainable</span> Careers
          </h2>
          <p className="empowerImpact-description">
            We equip ambitious women with the skills, confidence, and support needed to build sustainable careers and access global remote opportunities without compromising family life.
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

          <img
            src={EasyImage3}
            alt="Empowering Woman"
            className="engageCard-image"
            loading='lazy'
          />
        </div>
        {/* <div className="impact-list">
          <div className="impact-list-one">
            <div className="impact-item">
              <span className="circle accent"></span> Practical, Job-Ready Training
            </div>
            <div className="impact-item">
              <span className="circle blue"></span>Mentorship & Community Support
            </div>
          </div>
          <div className="impact-list-two">
            <div className="impact-item">
              <span className="circle purple"></span>Global Remote Opportunities
            </div>
            <div className="impact-item">
              <span className="circle dark"></span >Flexible & Family-Friendly Learning
            </div>
          </div>
        </div>
       <div className='impact-btn'>
          <button className="btn btn-blue">More About Us</button>
       </div> */}
      </div>
    </section>
  );
}