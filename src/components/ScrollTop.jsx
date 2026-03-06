import React, { useEffect, useState } from "react";

const ScrollTop = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsActive(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <a
      href="#home"
      aria-label="ScrollTop"
      className={`fas fa-angle-up ${isActive ? "active" : ""}`}
      id="scroll-top"
      onClick={handleClick}
    ></a>
  );
};

export default ScrollTop;
