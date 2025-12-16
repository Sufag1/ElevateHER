import React from "react";
import "./Courses.css";

import eventImage1 from '../../assets/AI-png.png';
import eventImage2 from '../../assets/devops-png.png';
import eventImage3 from '../../assets/backend-png.png';
import eventImage4 from '../../assets/fullstack-dev-png.png';
import eventImage5 from '../../assets/Frontend-png.png';
import eventImage6 from '../../assets/business-development-2.png';

function Courses() {
  const courseList = [
    {
      title: "Full Stack Development",
      category: "Web Development",
      path: "/full-stack-development",
      image: eventImage4,
    },
    {
      title: "Artificial Intelligence",
      category: "Tech & Innovation",
      path: "/artificial-intelligence",
      image: eventImage1,
    },
    {
      title: "DevOps",
      category: "Tech & IT",
      path: "/devops",
      image: eventImage2,
    },
    {
      title: "Frontend Development",
      category: "Web Development",
      path: "/frontend-development",
      image: eventImage5,
    },
    {
      title: "Backend Development",
      category: "Web Development",
      path: "/backend-development",
      image: eventImage3,
    },
    {
      title: "Business Development",
      category: "Business & Strategy",
      path: "/business-development",
      image: eventImage6,
    },
  ];

  return (
    <section className="container">

      <div className="latest-projects-section">
        <h2 className="latest-projects-heading">
          <span className="latest-text">Latest</span>
          <span className="projects-text">Courses</span>
        </h2>
        <p className="latest-projects-description">
          Explore our most recent courses designed to equip you with the skills needed in today’s digital world. From beginner-friendly modules to advanced training.
        </p>
      </div>

      <div className="project-grid-section">
        <div className="project-grid-container">
          {courseList.map((course, index) => (
            <a key={index} href={course.path} className="project-card">
              <div className="project-image-wrapper">
                <img src={course.image} alt={course.title} className="project-image" />
              </div>
              <h3 className="project-title">{course.title}</h3>
              <p className="project-category">{course.category}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;
