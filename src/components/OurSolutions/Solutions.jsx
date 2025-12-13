import { Link } from "react-router-dom";
import "./Solutions.css";
import WebDev from "../../assets/code.svg";
import AI from "../../assets/robot.svg";
import DevOps from "../../assets/devops.svg";
import Bizdev from "../../assets/chart.svg";
import ServiceBG from "../../assets/Services-BG2.png";

const solutionsData = [
  { id: 1, title: "Web Development", icon: WebDev, shapeClass: "webdev", text: "Learn to build responsive, user-friendly websites and applications while gaining the skills needed for real-world digital projects." },
  { id: 2, title: "Artificial Intelligence", icon: AI, shapeClass: "ai", text: "Learn to build intelligent, data-driven systems and applications while gaining the skills needed for real-world AI projects."},
  { id: 3, title: "DevOps", icon: DevOps, shapeClass: "devops", text: "Learn to build, deploy, and maintain scalable systems while developing skills essential for modern IT operations." },
  { id: 4, title: "Business Development", icon: Bizdev, shapeClass: "bizdev", text: "Gain practical skills in strategy, entrepreneurship, and market development to thrive in the global business landscape." },
];

const Solutions = () => {
  return (
    <section className="solutions-section">
      <div className="solutions-container container">
        <h2 className="solutions-title container">
          Our <span>Learning</span> <br className="responsive-br" /> Pathways
        </h2>
        <p className="solutions-subtitle">
          {/* Erat dolore consequuntur facere consectetuer beatae beatae
          habitant conubia porttitor ridiculus cillum animi hic enim dolor,
          excepteur sapienteriav perspiciatis aliquet. */}
          Explore structured programs designed to equip women with the skills, confidence, and mentorship needed to excel in digital careers and access global opportunities.        </p>
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
                  {item.text}
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
  );
};

export default Solutions;
