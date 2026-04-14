import React, { useEffect, useState } from "react";
import "./Introanimation.css";

const greetings = [
  "Hello",
  "नमस्ते",
  "Bonjour",
  "Hola",
  "Ciao",
  "こんにちは",
  "안녕하세요",
  "مرحبا",
];

const Intro = ({ onFinish }) => {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    let timeout;

    if (index < greetings.length) {
      timeout = setTimeout(() => {
        setAnimate(false);

        setTimeout(() => {
          setIndex((prev) => prev + 1);
          setAnimate(true);
        }, 120);
      }, 250);
    } else {
      // Start exit immediately
      setExit(true);
    }

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <div
      className={`intro-screen ${exit ? "intro-exit" : ""}`}
      onAnimationEnd={() => {
        if (exit) onFinish(); // perfectly synced with CSS
      }}
    >
      {index < greetings.length && (
        <h1 className={`intro-text ${animate ? "zoom-in" : "zoom-out"}`}>
          {greetings[index]}
        </h1>
      )}
    </div>
  );
};

export default Intro;