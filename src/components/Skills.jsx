import React, { useEffect, useRef, useState } from "react";
import "../styles/Skills.css";

const skillsData = [
  { name: "Android App Development", icon: "assets/images/skills/app-dev.png" },
  { name: "Python", icon: "assets/images/skills/python.png" },
  { name: "Data Science", icon: "assets/images/skills/datascience.png" },
  { name: "Java", icon: "assets/images/skills/java.png" },
  { name: "Java Script", icon: "assets/images/skills/javascript.png" },
  { name: "Git", icon: "assets/images/skills/git.png" },
  { name: "C Programming", icon: "assets/images/skills/c.png" },
  { name: "Figma", icon: "assets/images/skills/figma.png" },
  { name: "Machine Learning", icon: "assets/images/skills/machinelearning.png" },
  { name: "Web Development", icon: "assets/images/skills/web-development.png" },
  { name: "Html, CSS", icon: "assets/images/skills/html2.png" },
  { name: "React", icon: "assets/images/skills/react.png" },
  { name: "Express", icon: "assets/images/skills/express-js.png" },
  { name: "Node.js", icon: "assets/images/skills/node-js.png" },
  { name: "Mongo DB", icon: "assets/images/skills/mongo-db.png" },
  { name: "My SQL", icon: "assets/images/skills/my-sql.png" },
  { name: "Wordpress", icon: "assets/images/skills/wordpress.png" },
  { name: "Canva", icon: "assets/images/skills/canva.png" },
];

const Skills = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`skills ${visible ? "reveal" : ""}`} id="skills" ref={sectionRef}>
      <h2 className="heading">
        <i className="fas fa-laptop-code"></i> Skills &amp; <span>Abilities</span>
      </h2>

      <div className="container">
        <div className="row" id="skillsContainer">
          {skillsData.map((skill, index) => (
            <div
              className="bar"
              key={index}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="info">
                <img src={skill.icon} alt={skill.name} />
                <span>{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;