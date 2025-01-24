"use client";

import React, { useState, useEffect } from "react";
import "./Loading.css";
import { gsap } from "gsap";

const Loading = () => {
  const fullText = "Welcome.";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (index < fullText.length) {
        setText((prevText) => prevText + fullText[index]);
        setIndex(index + 1);
      } else {
        clearInterval(intervalId);

        gsap.to(".loading-container", {
          opacity: 0,
          duration: 1.5,
          ease: "power3.out",
          onComplete: () => {
            const loadingElement = document.querySelector(".loading-container");
            if (loadingElement) {
              loadingElement.style.display = "none";
            }
          },
        });
      }
    }, 300);

    return () => clearInterval(intervalId);
  }, [index]);

  return (
    <div className="loading-container">
      <div className="curtain"></div>
      <h1 className="loading-text">{text}</h1>
    </div>
  );
};

export default Loading;
