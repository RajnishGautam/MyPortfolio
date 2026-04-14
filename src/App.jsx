import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import ScrollToTopOnRoute from "./components/ScrollToTopOnRoute";

import NotFound from "./pages/NotFound";
import AboutMasterpiece from "./pages/AboutMe";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import Intro from "./components/IntroAnimation";

function MainPage() {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Education />
      <Work />
      <Experience />
      <Contact />
    </>
  );
}

function App() {
  // ✅ INTRO STATE (ADDED)
  const [showIntro, setShowIntro] = useState(true);

  // Tab visibility change
  useEffect(() => {
    const handleVisibility = () => {
      document.title =
        document.visibilityState === "visible"
          ? "Portfolio | Rajnish"
          : "Portfolio | Rajnish";
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  // VanillaTilt
  useEffect(() => {
    let interval;

    const initTilt = () => {
      const elements = document.querySelectorAll(".tilt");
      if (!elements.length) return;

      window.VanillaTilt.init(elements, {
        max: 10,
        speed: 400,
        glare: false,
        "max-glare": 0,
      });
    };

    const loadTilt = () => {
      if (window.VanillaTilt) {
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
      document.querySelectorAll(".tilt").forEach((el) => {
        if (el.vanillaTilt) el.vanillaTilt.destroy();
      });
    };
  }, []);

  // ScrollReveal
  useEffect(() => {
    let interval;

    const initScrollReveal = () => {
      const sr = window.ScrollReveal({
        origin: "bottom",
        distance: "30px",
        duration: 600,
        delay: 100,
        easing: "ease-out",
        reset: false,
        mobile: true,
        useDelay: "always",
        viewFactor: 0.1,
      });

      sr.reveal(".home .content h2", { delay: 100 });
      sr.reveal(".home .content p", { delay: 200 });
      sr.reveal(".home .btn", { delay: 300 });
      sr.reveal(".home .image", { delay: 200, origin: "right" });
      sr.reveal(".home .social-icons li", { interval: 100, delay: 400 });

      sr.reveal(".about .row .image", { delay: 100, origin: "left" });
      sr.reveal(".about .content h3", { delay: 150 });
      sr.reveal(".about .content .tag", { delay: 200 });
      sr.reveal(".about .content p", { delay: 250 });
      sr.reveal(".about .box-container", { delay: 300 });
      sr.reveal(".resumebtn", { delay: 350 });

      sr.reveal(".skills .container", { delay: 100 });
      sr.reveal(".education .box", { interval: 150 });
      sr.reveal(".work .box", { interval: 150 });
      sr.reveal(".experience .container", { interval: 200 });
      sr.reveal(".contact .container", { delay: 100 });
      sr.reveal(".footer .box", { interval: 150 });
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

    const timer = setTimeout(loadScrollReveal, 300);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {/* ✅ INTRO SCREEN */}
      {showIntro && <Intro onFinish={() => setShowIntro(false)} />}

      {/* ✅ MAIN APP (UNCHANGED, JUST WRAPPED) */}
      {!showIntro && (
        <Router>
          <ScrollToTopOnRoute />
          <Navbar />

          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/confidential" element={<NotFound />} />
            <Route path="/about" element={<AboutMasterpiece />} />
          </Routes>

          <Footer />
          <ScrollTop />
          <Analytics />
          <SpeedInsights />
        </Router>
      )}
    </>
  );
}

export default App;