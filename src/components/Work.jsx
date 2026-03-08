import React from "react";
import { Link } from "react-router-dom";
import "../styles/Work.css";

const projectsData = [
  {
    image: "assets/images/projects/punto7x.png",
    name: "Punto7x",
    desc: "Official Punto7x website showcasing premium visual design, modern UI, brand identity, and creative digital services through a sleek, fully responsive user experience.",
    links: {
      view: "https://punto7x.com",
      code: "/confidential",
    },
  },
  {
    image: "assets/images/projects/dot.png",
    name: "7DotIT Solutions",
    desc: "Official 7DotIT Solutions website presenting IT services, company information, and business offerings with a clean, information focused layout and modern responsive UI design.",
    links: {
      view: "https://www.7dotit.solutions/",
      code: "/confidential",
    },
  },
  {
    image: "assets/images/projects/jbphs.png",
    name: "JB Plumbing & Heating",
    desc: "A customizable AI voice assistant inspired by Alexa and Google Assistant with voice commands, automation features, and smart task handling.",
    links: {
      view: "https://jbphs.co.uk/",
      code: "/confidential",
    },
  },
];

const Work = () => {
  return (
    <section className="work" id="work">
      <h2 className="heading">
        <i className="fas fa-laptop-code"></i> Projects <span>Made</span>
      </h2>

      <div className="box-container">
        {projectsData.map((project, index) => (
          <div className="box" key={index}>
            <img draggable="false" src={project.image} alt={project.name} />

            <div className="content">
              <div className="tag">
                <h3>{project.name}</h3>
              </div>

              <div className="desc">
                <p>{project.desc}</p>

                <div className="btns">
                  {/* External link → new tab */}
                  <a
                    href={project.links.view}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fas fa-eye"></i>
                    View
                  </a>

                  {/* Internal route → same tab */}
                  <Link to={project.links.code} className="btn">
                    Code
                    <i className="fas fa-code"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="work-viewall">
        <Link to="/" className="btn">
          <span>View All</span>
          <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </section>
  );
};

export default Work;