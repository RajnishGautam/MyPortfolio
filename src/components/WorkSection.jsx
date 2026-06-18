import React, { useState, useEffect } from "react";
import "./WorkSection.css";

const workData = [
  {
    id: 1,
    company: "Punto 7x",
    image: "/projects/site1.jpg",
    link: "https://punto7x.com",
  },
  {
    id: 2,
    company: "7DotIT Solutions",
    image: "/projects/site2.jpg",
    link: "https://7dot.com",
  },
  {
    id: 3,
    company: "Dr Gamaliel",
    image: "/projects/site3.jpg",
    link: "https://drgamaliel.com",
  },
  {
    id: 4,
    company: "JBPHS",
    image: "/projects/site4.jpg",
    link: "https://jbphs.co.uk/",
  },
];

const WorkSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // touch state
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth >= 768 && window.innerWidth <= 1279);
      setIsMobile(window.innerWidth <= 767);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prevWork = () => {
    if (isTablet) {
      setCurrentIndex((prev) =>
        prev === 0 ? workData.length - 2 : prev - 2
      );
    } else {
      setCurrentIndex((prev) =>
        prev === 0 ? workData.length - 1 : prev - 1
      );
    }
  };

  const nextWork = () => {
    if (isTablet) {
      setCurrentIndex((prev) =>
        prev >= workData.length - 2 ? 0 : prev + 2
      );
    } else {
      setCurrentIndex((prev) =>
        prev === workData.length - 1 ? 0 : prev + 1
      );
    }
  };

  // swipe handlers
  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;

    const distance = touchStartX - touchEndX;

    if (distance > 50) {
      // swipe left → next
      nextWork();
    } else if (distance < -50) {
      // swipe right → prev
      prevWork();
    }

    setTouchStartX(0);
    setTouchEndX(0);
  };

  // Auto-switch every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextWork();
    }, 2000); // 5000ms = 5 seconds

    return () => clearInterval(interval);
  }, [isTablet, isMobile]);

  return (
    <section className="work-section">
      <div className="work-container">
        <h2 className="heading">
        <i className="fas fa-laptop-code"></i> Projects <span>Made</span>
      </h2>

        {/* Desktop Grid */}
        <div className="work-grid">
          {workData.map((item) => (
            <div className="work-card" key={item.id}>
              <div className="preview-box">
                <img
                  src={item.image}
                  alt={item.company}
                  className="scroll-preview"
                />
              </div>
              <h3 className="company-name">{item.company}</h3>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="visit-link"
              >
                Visit Website <span className="arrow">→</span>
              </a>
            </div>
          ))}
        </div>

        {/* Slider for Tablet & Mobile */}
        <div className="work-slider">
          <div className="slider-row">
            {workData.map((item, index) => {
              let visible = false;
              if (isTablet) {
                visible = index === currentIndex || index === currentIndex + 1;
              } else if (isMobile) {
                visible = index === currentIndex;
              }
              return (
                <div
                  key={item.id}
                  className={`work-card ${visible ? "active" : "hidden"}`}
                >
                  <div
                    className="preview-box"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                  >
                    <img
                      src={item.image}
                      alt={item.company}
                      className="scroll-preview"
                    />
                  </div>
                  <h3 className="company-name">{item.company}</h3>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="visit-link"
                  >
                    Visit Website
                  </a>
                </div>
              );
            })}
          </div>

          <div className="arrows">
            <button onClick={prevWork}>&lt;</button>
            <button onClick={nextWork}>&gt;</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;