import React, { useEffect } from "react";
import "./styles/global.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {

  // Tab visibility change
  useEffect(() => {
    const handleVisibility = () => {
      document.title =
        document.visibilityState === "visible"
          ? "Portfolio | Rajnish"
          : "Come Back To Portfolio";
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  // VanillaTilt — init once, wait for DOM to settle
  useEffect(() => {
    let interval;

    const initTilt = () => {
      const elements = document.querySelectorAll(".tilt");
      if (!elements.length) return;

      window.VanillaTilt.init(elements, {
        max: 10,           // reduced from 15 — less extreme = less repaints
        speed: 400,        // how fast tilt resets — smoother feel
        glare: false,      // glare causes extra compositing layer = lag
        "max-glare": 0,
      });
    };

    const loadTilt = () => {
      if (window.VanillaTilt) {
        // Wait for all components to mount before scanning for .tilt
        setTimeout(initTilt, 500);
        return;
      }

      if (document.getElementById("vanilla-tilt-script")) {
        interval = setInterval(() => {
          if (window.VanillaTilt) {
            clearInterval(interval);
            setTimeout(initTilt, 500);
          }
        }, 50);
        return;
      }

      const script = document.createElement("script");
      script.id = "vanilla-tilt-script";
      script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.7.0/vanilla-tilt.min.js";
      script.onload = () => setTimeout(initTilt, 500);
      document.body.appendChild(script);
    };

    loadTilt();

    return () => {
      clearInterval(interval);
      // Properly destroy tilt instances on unmount to free GPU memory
      document.querySelectorAll(".tilt").forEach((el) => {
        if (el.vanillaTilt) el.vanillaTilt.destroy();
      });
    };
  }, []);

  // ScrollReveal — fixed config, no reset, shorter distance
  useEffect(() => {
    let interval;

    const initScrollReveal = () => {
      const sr = window.ScrollReveal({
        origin: "bottom",      // bottom origin feels more natural than top
        distance: "30px",      // was 80px — shorter = no blur smear
        duration: 600,         // was 1000ms — faster = no animation overlap
        delay: 100,
        easing: "ease-out",
        reset: false,          // was true — THE main lag cause, animate once only
        mobile: true,
        useDelay: "always",
        viewFactor: 0.1,       // trigger when 10% visible, not 0% (default)
      });

      // Home
      sr.reveal(".home .content h2",   { delay: 100 });
      sr.reveal(".home .content p",    { delay: 200 });
      sr.reveal(".home .btn",          { delay: 300 });
      sr.reveal(".home .image",        { delay: 200, origin: "right" });
      sr.reveal(".home .social-icons li", { interval: 100, delay: 400 });

      // About
      sr.reveal(".about .row .image",  { delay: 100, origin: "left" });
      sr.reveal(".about .content h3",  { delay: 150 });
      sr.reveal(".about .content .tag",{ delay: 200 });
      sr.reveal(".about .content p",   { delay: 250 });
      sr.reveal(".about .box-container",{ delay: 300 });
      sr.reveal(".resumebtn",          { delay: 350 });

      // Skills — reveal container once, not each bar individually
      sr.reveal(".skills .container",  { delay: 100 });

      // Education
      sr.reveal(".education .box",     { interval: 150 });

      // Work
      sr.reveal(".work .box",          { interval: 150 });

      // Experience
      sr.reveal(".experience .container", { interval: 200 });

      // Contact
      sr.reveal(".contact .container", { delay: 100 });

      // Footer
      sr.reveal(".footer .box",        { interval: 150 });
    };

    const loadScrollReveal = () => {
      if (window.ScrollReveal) {
        initScrollReveal();
        return;
      }

      if (document.getElementById("scroll-reveal-script")) {
        interval = setInterval(() => {
          if (window.ScrollReveal) {
            clearInterval(interval);
            initScrollReveal();
          }
        }, 50);
        return;
      }

      const script = document.createElement("script");
      script.id = "scroll-reveal-script";
      script.src = "https://unpkg.com/scrollreveal";
      script.onload = initScrollReveal;
      document.body.appendChild(script);
    };

    // Small delay so React has finished painting all sections
    const timer = setTimeout(loadScrollReveal, 300);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Education />
      <Work />
      <Experience />
      <Contact />
      <Footer />
      <ScrollTop />
      <Analytics />
      <SpeedInsights/>
    </>
  );
}

export default App;