import { Link } from "react-router-dom";
import "./Solutions.css";
import WebDev from "../../assets/code.svg";
import AI from "../../assets/robot.svg";
import DevOps from "../../assets/devops.svg";
import Bizdev from "../../assets/chart.svg";
import ServiceBG from "../../assets/Services-BG2.png";


const solutionsData = [
  {
    id: 1,
    title: "Web Development",
    icon: WebDev,
    shapeClass: "webdev",
  },
  {
    id: 2,
    title: "Artificial Intelligence",
    icon: AI,
    shapeClass: "ai",
  },
  {
    id: 3,
    title: "DevOps",
    icon: DevOps,
    shapeClass: "devops",
  },
  {
    id: 4,
    title: "Business Development",
    icon: Bizdev,
    shapeClass: "bizdev",
  },
];

const Solutions = () => {

  return (
    <>
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
            <div className="solutions-cards">
              {solutionsData.map((item) => (
                <div className="solution-card" key={item.id}>
                  <img src={ServiceBG} alt="service" className="bg-image" />
                  <div className="card-text">
                    <div className="solution-icon">
                      <div className="card-style">
                        <div className={`shapes ${item.shapeClass}`}>
                          <img src={item.icon} alt="card-logo" className="fg-image" />
                        </div>
                        <div className="number">
                          <h2>{String(item.id).padStart(2, "0")}</h2>
                        </div>
                      </div>
                    </div>
                    <h2>{item.title}</h2>
                    <p>
                      Assumenda maecenas senectus, dignissimos phasellus recusandae felis
                      venenatis distinctio netus convallis? Odit volutpat per.
                    </p>
                    <div className="learn-more-link">
                      <Link to="/learn">Learn more...</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
    </>
  );
};

export default Solutions;