import React, { useEffect, useRef } from "react";
import "../styles/Home.css";
import ParticlesBackground from "./ParticlesBackground";

const Home = () => {
  const typingRef = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    const initTyped = () => {
      if (!typingRef.current) return;

      // Destroy any previous instance before creating a new one
      if (typedInstance.current) {
        typedInstance.current.destroy();
        typedInstance.current = null;
      }

      typedInstance.current = new window.Typed(typingRef.current, {
        strings: [
          "Data Science",
          "Full Stack Development",
          "Web Development",
          "Frontend Development",
          "Backend Development",
        ],
        loop: true,
        typeSpeed: 60,
        backSpeed: 30,
        backDelay: 1500,
        startDelay: 300,
        showCursor: true,
        cursorChar: "|",
        smartBackspace: true,
      });
    };

    // If already loaded, init immediately
    if (window.Typed) {
      initTyped();
      return;
    }

    // If script tag already exists, wait for it
    if (document.getElementById("typed-js-script")) {
      const wait = setInterval(() => {
        if (window.Typed) {
          clearInterval(wait);
          initTyped();
        }
      }, 50);
      return () => clearInterval(wait);
    }

    // First time: inject script
    const script = document.createElement("script");
    script.id = "typed-js-script";
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.5/typed.min.js";
    script.onload = initTyped;
    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
        typedInstance.current = null;
      }
    };
  }, []);

  return (
    <section className="home" id="home">
      <ParticlesBackground />

      <div className="content">
        <h2>
          Hi There,
          <br /> I'm Rajnish <span>kumar</span>
        </h2>
        <p>
          I am into <span ref={typingRef}></span>
        </p>
        <a href="#about" className="btn">
          <span>About Me</span>
          <i className="fas fa-arrow-circle-down"></i>
        </a>
        <div className="socials">
          <ul className="social-icons">
            <li>
              <a
                className="linkedin"
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/rajnish-kumar-b0141528b"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                className="github"
                aria-label="GitHub"
                href="https://github.com/RajnishGautam"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a
                className="telegram"
                aria-label="Telegram"
                href="http://t.me/rajnish_0903"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-telegram-plane"></i>
              </a>
            </li>
            <li>
              <a
                className="instagram"
                aria-label="Instagram"
                href="https://www.instagram.com/rajnish_gautam09"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                className="whatsapp"
                aria-label="whatsapp"
                href="https://wa.me/919905955461"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="image">
        <img
          draggable="false"
          className="tilt"
          src="/assets/images/hero-section.jpg"
          alt="Rajnish Kumar"
        />
      </div>
    </section>
  );
};

export default Home;