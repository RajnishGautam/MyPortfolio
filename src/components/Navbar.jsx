import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      setMenuOpen(false);

      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const height = section.offsetHeight;
        const offset = section.offsetTop - 200;
        const top = window.scrollY;
        const id = section.getAttribute("id");
        if (top > offset && top < offset + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, target) => {
    e.preventDefault();
    const el = document.querySelector(target);
    if (el) {
      window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#work", label: "Projects" },
    { href: "#experience", label: "Experience" },
  ];

  return (
    <header>
      <a href="#about" className="logo" onClick={(e) => handleNavClick(e, "#about")}>
        <i className="fab fa-node-js"></i> RAJNISH KUMAR
      </a>

      <div
        id="menu"
        className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}
        onClick={toggleMenu}
      ></div>

      <nav className={`navbar ${menuOpen ? "nav-toggle" : ""}`}>
        <ul>
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={activeSection === href.slice(1) ? "active" : ""}
                onClick={(e) => handleNavClick(e, href)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
