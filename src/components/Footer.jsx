import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="box-container">

        <div className="box">
          <h3>Rajnish's Portfolio</h3>
          <p>
            Thank you for visiting my personal portfolio website. Connect with
            me over socials. <br /><br />
            Keep Rising 🚀. Connect with me over live chat!
          </p>
        </div>

        <div className="box">
          <h3>quick links</h3>

          <Link to="/">
            <i className="fas fa-chevron-circle-right"></i> home
          </Link>

          <Link to="/about">
            <i className="fas fa-chevron-circle-right"></i> about
          </Link>

          <Link to="/skills">
            <i className="fas fa-chevron-circle-right"></i> skills
          </Link>

          <Link to="/education">
            <i className="fas fa-chevron-circle-right"></i> education
          </Link>

          <Link to="/work">
            <i className="fas fa-chevron-circle-right"></i> work
          </Link>

          <Link to="/experience">
            <i className="fas fa-chevron-circle-right"></i> experience
          </Link>

        </div>

        <div className="box">
          <h3>contact info</h3>

          <p>
            <i className="fas fa-phone"></i> +91 9905955461
          </p>

          <p>
            <i className="fas fa-envelope"></i> rajnish09032003@gmail.com
          </p>

          <p>
            <i className="fas fa-map-marked-alt"></i> Salem, Tamilnadu, India
          </p>

          <div className="share">

            <a
              href="https://www.linkedin.com/in/rajnish-kumar-b0141528b"
              className="fab fa-linkedin"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
            ></a>

            <a
              href="https://github.com/RajnishGautam"
              className="fab fa-github"
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
            ></a>

            <a
              href="mailto:rajnish09032003@gmail.com"
              className="fas fa-envelope"
              aria-label="Mail"
              target="_blank"
              rel="noreferrer"
            ></a>

            <a
              href="https://t.me/rajnish_0903"
              className="fab fa-telegram-plane"
              aria-label="Telegram"
              target="_blank"
              rel="noreferrer"
            ></a>

          </div>
        </div>

      </div>

      <h1 className="credit">
        Designed with <i className="fa fa-heart pulse"></i> by{" "}
        <a
          href="https://www.linkedin.com/in/rajnish-kumar-b0141528b"
          target="_blank"
          rel="noreferrer"
        >
          Rajnish
        </a>
      </h1>
    </section>
  );
};

export default Footer;