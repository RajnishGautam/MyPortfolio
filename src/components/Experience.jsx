import React from "react";
import "../styles/Experience.css";

const experienceData = [
  {
    side: "left",
    title: "Full Stack Development",
    company: "Punto 7X",
    period: "01 July 2025 till present",
  },
  {
    side: "right",
    title: "Full Stack Development",
    company: "Startnet Ventures Private Limited",
    period: "25 July 2024 till present",
  },
  {
    side: "left",
    title: "Full Stack Development Internship",
    company: "Full Stack Development internship at Sure Trust",
    period: "22 May 2024 till present",
  },
  {
    side: "right",
    title: "DATA SCIENCE INTERNSHIP",
    company: "Virtual data science internship at TechnoHacks Solutions Pvt. Ltd.",
    period: "23 May 2024 to 22 June 2024",
  },
  {
    side: "left",
    title: "DATA SCIENCE INTERNSHIP",
    company: "Virtual data science internship at CODXO",
    period: "10 June 2024 to 09 July 2024",
  },
  
];

const Experience = () => {
  return (

    <section className="experience" id="experience">

      <h2 className="heading">
        <i className="fas fa-briefcase"></i> Experience
      </h2>

      <div className="timeline">

        {experienceData.map((exp, index) => (
          <div className={`container ${exp.side}`} key={index}>

            <div className="content">

              <div className="tag">
                <h2>{exp.title}</h2>
              </div>

              <div className="desc">
                <h3>{exp.company}</h3>
                <p>{exp.period}</p>
              </div>

            </div>

          </div>
        ))}

      </div>

      <div className="experience-viewall">
        <a href="/experience" className="btn">
          <span>View All</span>
          <i className="fas fa-arrow-right"></i>
        </a>
      </div>

    </section>
  );
};

export default Experience;