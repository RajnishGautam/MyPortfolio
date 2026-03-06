import { useEffect } from "react";

const particlesConfig = {
  particles: {
    number: { value: 90, density: { enable: true, value_area: 700 } },
    color: { value: "#000000" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 5,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#000000",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 8,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
};

const ParticlesBackground = () => {
  useEffect(() => {
    const loadParticles = () => {
      if (window.particlesJS) {
        window.particlesJS("particles-js", particlesConfig);
      } else {
        setTimeout(loadParticles, 100);
      }
    };

    // Inject particles.js script if not already loaded
    if (!document.getElementById("particles-js-script")) {
      const script = document.createElement("script");
      script.id = "particles-js-script";
      script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js";
      script.onload = loadParticles;
      document.body.appendChild(script);
    } else {
      loadParticles();
    }

    return () => {
      // Cleanup canvas on unmount
      const canvas = document.querySelector(
        "#particles-js > .particles-js-canvas-el"
      );
      if (canvas) canvas.remove();
    };
  }, []);

  return <div id="particles-js"></div>;
};

export default ParticlesBackground;
