import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./Solutions.css";
import WebDev from "../../assets/Solutions-Assets/WebDev.svg";
import AI from "../../assets/Solutions-Assets/AI.svg";
import DevOps from "../../assets/Solutions-Assets/Devops.svg";
import ServiceBG from "../../assets/Solutions-Assets/Services-BG2.png";

const Solutions = () => {
  return (
    <>
      <BrowserRouter>
        <section className="solutions-section">
          <div className="solutions-container container">
            <h2 className="solutions-title container">
              Our <span>Solutions</span> & <br class="responsive-br" /> Features
            </h2>
            <p className="solutions-subtitle">
              Erat dolore consequuntur facere consectetuer beatae beatae
              habitant conubia porttitor ridiculus cillum animi hic enim dolor,
              excepteur sapienteriav perspiciatis aliquet.
            </p>
            <div className=" solutions-cards ">

              <div className="solution-card">
                <img src={ServiceBG} alt="service" className="bg-image" />
                <div className="card-text">
                  <div className="solution-icon">
                    <div className="card-style">
                      <div className="shapes webdev">
                        <img src={WebDev} alt="card-logo" className="fg-image"/>
                      </div>
                      <div className="number">
                        <h2>01</h2>
                      </div>
                    </div>
                  </div>
                  <h2>Web Development</h2>
                  <p>
                    Assumenda maecenas senectus, dignissimos phasellus
                    recusandae felis venenatis distinctio netus convallis? Odit
                    volutpat per.
                  </p>
                  <div className="learn-more-link">
                    <Link to="/learn">LEARN MORE...</Link>
                  </div>
                </div>
              </div>

              <div className="solution-card">
                <img src={ServiceBG} alt="service" className="bg-image" />
                <div className="card-text">
                  <div className="solution-icon">
                    <div className="card-style">
                      <div className="shapes ai">
                        <img src={AI} alt="card-logo" className="fg-image"/>
                      </div>
                      <div className="number">
                        <h2>02</h2>
                      </div>
                    </div>
                  </div>
                  <h2>Artificial Intelligence</h2>
                  <p>
                    Assumenda maecenas senectus, dignissimos phasellus
                    recusandae felis venenatis distinctio netus convallis? Odit
                    volutpat per.
                  </p>
                  <div className="learn-more-link">
                    <Link to="/learn">LEARN MORE...</Link>
                  </div>
                </div>
              </div>

              <div className="solution-card">
                <img src={ServiceBG} alt="service" className="bg-image" />
                <div className="card-text">
                  <div className="solution-icon">
                    <div className="card-style">
                      <div className="shapes devops">
                        <img src={DevOps} alt="card-logo" className="fg-image"/>
                      </div>
                      <div className="number">
                        <h2>03</h2>
                      </div>
                    </div>
                  </div>
                  <h2>DevOps</h2>
                  <p>
                    Assumenda maecenas senectus, dignissimos phasellus
                    recusandae felis venenatis distinctio netus convallis? Odit
                    volutpat per.
                  </p>
                  <div className="learn-more-link">
                    <Link to="/learn">LEARN MORE...</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </BrowserRouter>
    </>
  );
};

export default Solutions;