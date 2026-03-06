import React from "react";
import "../styles/Work.css"

const projectsData = [
  {
    image: "assets/images/projects/DPSpotter.png",
    name: "DPSpotter",
    desc: "DPSpotter is a chrome extension that helps user to identify and highlight dark patterns in an E-Commerce Website.",
    links: {
      view: "https://drive.google.com/file/d/10Vj_JKnV56JBnzF10NmYZMdjeMfFMnRQ/view?usp=drivesdk",
      code: "https://github.com/RajnishGautam/Darkpattern23.git",
    },
  },
  {
    image: "assets/images/projects/portfolio.png",
    name: "Portfolio",
    desc: "This is a Personal portfolio Website.",
    links: {
      view: "https://github.com/RajnishGautam/portfolio.git",
      code: "https://github.com/RajnishGautam/portfolio.git",
    },
  },
  {
    image: "assets/images/projects/jarvis.png",
    name: "VOICE ASSISTANT - jarvis.",
    desc: "A customizable voice assistant like alexa and google voice assistant.",
    links: {
      view: "https://github.com/RajnishGautam/JARVIS.git",
      code: "https://github.com/RajnishGautam/JARVIS.git",
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
          <div className="box tilt" key={index}>
            <img draggable="false" src={project.image} alt={project.name} />

            <div className="content">
              <div className="tag">
                <h3>{project.name}</h3>
              </div>

              <div className="desc">
                <p>{project.desc}</p>

                <div className="btns">
                  <a href={project.links.view} className="btn" target="_blank" rel="noreferrer">
                    <i className="fas fa-eye"></i> View
                  </a>

                  <a href={project.links.code} className="btn" target="_blank" rel="noreferrer">
                    Code <i className="fas fa-code"></i>
                  </a>
                </div>

              </div>
            </div>

          </div>
        ))}
      </div>

      <div className="work-viewall">
        <a href="/work" className="btn">
          <span>View All</span>
          <i className="fas fa-arrow-right"></i>
        </a>
      </div>

    </section>
  );
};

export default Work;