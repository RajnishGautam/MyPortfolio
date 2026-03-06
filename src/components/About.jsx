import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="heading">
        <i className="fas fa-user-alt"></i> About <span>Me</span>
      </h2>

      <div className="row">
        <div className="image">
          <img
            draggable="false"
            className="tilt"
            src="./assets/images/home2.png"
            alt="Rajnish"
          />
        </div>
        <div className="content">
          <h3>I'm Rajnish</h3>
<span className="tag">Full Stack Developer</span>

<p>
I am a passionate Full Stack Developer with a strong foundation in modern web technologies 
and software development. I enjoy building scalable and user friendly applications using both 
frontend and backend technologies. Along with development, I have a basic understanding of 
digital marketing and SEO which helps me create products that are not only functional but also optimized for visibility and growth. 
I also have a strong interest in Artificial Intelligence and continuously explore how AI driven solutions can enhance digital products. 
I am always eager to learn new technologies, solve real world problems, and contribute effectively in a collaborative development environment.
</p>

          <div className="box-container">
            <div className="box">
              <p>
                <span> age: </span> 23
              </p>
              <p>
                <span> phone : </span> +91 9905955461
              </p>
            </div>
            <div className="box">
              <p>
                <span> email : </span> rajnish09032003@gmail.com
              </p>
              <p>
                <span> place : </span> Nalanda ,Bihar, INDIA
              </p>
            </div>
          </div>

          <div className="resumebtn">
            <a
              href="https://drive.google.com/file/d/1vhcN0AqcjWGrk6M-w1j9M9KPUTHKefvH/view?usp=drivesdk"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              <span>Resume</span>
              <i className="fas fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
