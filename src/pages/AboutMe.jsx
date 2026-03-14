import React, { useEffect, useRef, useState } from "react";
import "./AboutMePro.css";

const skills = [
  { name: "React.js",       level: 90, color: "#4f8ef7" },
  { name: "Node.js",        level: 85, color: "#3ecfb2" },
  { name: "MongoDB",        level: 80, color: "#6c63ff" },
  { name: "Express.js",     level: 85, color: "#4f8ef7" },
  { name: "CSS / Tailwind", level: 88, color: "#3ecfb2" },
  { name: "Git & DevOps",   level: 75, color: "#6c63ff" },
];

const projects = [
  { name: "Punto7X",           url: "https://punto7x.com",         tag: "Business",    year: "2024" },
  { name: "7DotIT Solutions",  url: "https://7dotit.solutions",     tag: "Agency",      year: "2024" },
  { name: "JB PHS",            url: "https://jbphs.co.uk",          tag: "Healthcare",  year: "2024" },
  { name: "Home2Home",         url: "https://home2home.pro",         tag: "Real Estate", year: "2024" },
  { name: "BIEPPL Group",      url: "https://biepplgroup.com",       tag: "Corporate",   year: "2023" },
  { name: "Dr Gamaliel",       url: "https://drgamaliel.com",        tag: "Medical",     year: "2023" },
  { name: "Healthcare Mantra", url: "https://healthcaremantra.in",  tag: "Health",      year: "2023" },
  { name: "Bizlist Platform",  url: "#",                             tag: "SaaS",        year: "WIP"  },
  { name: "JD Foods",          url: "#",                             tag: "Food & Bev",  year: "WIP"  },
];

const hobbies = [
  { name: "Swimming",  icon: "🏊", desc: "Calm, focused and energized.",        grad: "135deg,#4f8ef7,#3ecfb2" },
  { name: "Cricket",   icon: "🏏", desc: "Strategy, teamwork & competition.",  grad: "135deg,#6c63ff,#4f8ef7" },
  { name: "Badminton", icon: "🏸", desc: "Fast-paced, keeps me sharp.",         grad: "135deg,#3ecfb2,#6c63ff" },
  { name: "Gym",       icon: "🏋️", desc: "Strength, discipline, consistency.", grad: "135deg,#4f8ef7,#6c63ff" },
];

const SkillBar = ({ name, level, color }) => {
  const [go, setGo] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setGo(true); }, { threshold: 0.4 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <div className="sk-row" ref={ref}>
      <div className="sk-meta">
        <span className="sk-name">{name}</span>
        <span className="sk-pct" style={{ color }}>{level}%</span>
      </div>
      <div className="sk-track">
        <div className="sk-fill" style={{ width: go ? `${level}%` : "0%", background: `linear-gradient(90deg,${color}99,${color})` }} />
      </div>
    </div>
  );
};

const Counter = ({ target, suffix = "" }) => {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let n = 0;
        const tick = () => { n = Math.min(n + Math.ceil(target / 35), target); setVal(n); if (n < target) requestAnimationFrame(tick); };
        requestAnimationFrame(tick);
        io.disconnect();
      }
    }, { threshold: 0.5 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [target]);
  return <span ref={ref}>{val}{suffix}</span>;
};

export default function AboutMasterpiece() {
  const [hov, setHov] = useState(null);

  return (
    <div className="am">
      <div className="am-orb am-orb--a" />
      <div className="am-orb am-orb--b" />
      <div className="am-orb am-orb--c" />

      <div className="am-page">

        {/* ── HERO ── */}
        <section className="am-hero">
          <div className="am-hero__left">
            <div className="am-badge">
              <span className="am-badge__dot" />
              Available for freelance &amp; full-time
            </div>

            <h1 className="am-h1">
              Hey, I'm<br />
              <span className="am-grad">Rajnish Kumar</span>
            </h1>

            <p className="am-hero__bio">
              Full Stack Developer crafting modern, interactive and visually
              stunning web experiences. I specialise in building scalable
              applications and elegant UIs using the <strong>MERN stack</strong>.
            </p>

            <div className="am-tags">
              {["React.js", "Node.js", "MongoDB", "Express", "Tailwind"].map(t => (
                <span className="am-tag" key={t}>{t}</span>
              ))}
            </div>

            <div className="am-cta-row">
              <a href="#projects" className="am-btn am-btn--fill">See My Work</a>
              <a href="mailto:rajnish@example.com" className="am-btn am-btn--line">Hire Me</a>
            </div>
          </div>

          <div className="am-hero__right">
            <div className="am-card">
              <div className="am-av-wrap">
                <div className="am-av-ring" />
                <div className="am-av">RK</div>
              </div>

              <div className="am-stats-row">
                <div className="am-stat">
                  <span className="am-stat__n"><Counter target={10} suffix="+" /></span>
                  <span className="am-stat__l">Websites</span>
                </div>
                <div className="am-stat-div" />
                <div className="am-stat">
                  <span className="am-stat__n">MERN</span>
                  <span className="am-stat__l">Full Stack</span>
                </div>
                <div className="am-stat-div" />
                <div className="am-stat">
                  <span className="am-stat__n"><Counter target={1} suffix="+" /></span>
                  <span className="am-stat__l">Yr Exp.</span>
                </div>
              </div>

              <p className="am-card__quote">
                "Clean code. Beautiful UI. Real results."
              </p>
            </div>
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section className="am-sec">
          <div className="am-sec__head">
            <span className="am-sec__kicker">What I work with</span>
            <h2 className="am-sec__h2">Tech Stack</h2>
          </div>
          <div className="am-skills">
            {skills.map(s => <SkillBar key={s.name} {...s} />)}
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section className="am-sec" id="projects">
          <div className="am-sec__head">
            <span className="am-sec__kicker">What I've shipped</span>
            <h2 className="am-sec__h2">Websites I've Built</h2>
          </div>
          <div className="am-projects">
            {projects.map((p, i) => (
              <a
                key={i}
                href={p.url}
                target={p.url !== "#" ? "_blank" : undefined}
                rel="noreferrer"
                className={`am-proj${hov === i ? " hov" : ""}`}
                onMouseEnter={() => setHov(i)}
                onMouseLeave={() => setHov(null)}
              >
                <span className="am-proj__i">0{i + 1}</span>
                <span className="am-proj__name">{p.name}</span>
                <span className="am-proj__tag">{p.tag}</span>
                <span className="am-proj__year">{p.year}</span>
                <span className="am-proj__arr">↗</span>
              </a>
            ))}
          </div>
        </section>

        {/* ── HOBBIES ── */}
        <section className="am-sec">
          <div className="am-sec__head">
            <span className="am-sec__kicker">When I'm not coding</span>
            <h2 className="am-sec__h2">Life Beyond Code</h2>
          </div>
          <div className="am-hobbies">
            {hobbies.map((h, i) => (
              <div className="am-hobby" key={i} style={{ "--g": `linear-gradient(${h.grad})` }}>
                <div className="am-hobby__top">
                  <span className="am-hobby__icon">{h.icon}</span>
                  <div className="am-hobby__shine" />
                </div>
                <h3 className="am-hobby__name">{h.name}</h3>
                <p className="am-hobby__desc">{h.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── BANNER ── */}
        <section className="am-banner">
          <div className="am-banner__orb" />
          <h2 className="am-banner__h">Let's build something great.</h2>
          <p className="am-banner__p">Open to freelance projects &amp; full-time roles.</p>
          <a href="mailto:rajnish@example.com" className="am-btn am-btn--white">Get In Touch →</a>
        </section>

      </div>
    </div>
  );
}