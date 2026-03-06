import React from "react";
import "../styles/Education.css";

const educationData = [
  {
    image: "./assets/images/educat/college.jpg",
    title: "Bachelor of Engineering in Computer Science",
    institution: "Dhirajlal Gandhi College Of Technology | Salem | TAMIL NADU",
    year: "2021-2025 | Pursuing",
  },
  {
    image: "./assets/images/educat/school2.jpg",
    title: "12th | Physics Chemistry Mathematics | 80.5%",
    institution: "Cambridge School | Nepura | BIHAR",
    year: "2018-2020 | Completed",
  },
  {
    image: "./assets/images/educat/school.jpg",
    title: "10th | 92%",
    institution: "Modern English School | Nawada | BIHAR",
    year: "2018 | Completed",
  },
];

const Education = () => {
  return (
    <section className="education" id="education">
      <h1 className="heading">
        <i className="fas fa-graduation-cap"></i> My <span>Education</span>
      </h1>

      <p className="qoute">
        The greatest part of you is not who you are today, but the dreams you strive to achieve.
      </p>

      <div className="box-container">
        {educationData.map((edu, index) => (
          <div className="box" key={index}>
            <div className="image">
              <img draggable="false" src={edu.image} alt={edu.title} />
            </div>
            <div className="content">
              <h3>{edu.title}</h3>
              <p>{edu.institution}</p>
              <h4>{edu.year}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
