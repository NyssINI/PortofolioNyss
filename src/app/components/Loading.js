"use client";

import React, { useState, useEffect, useRef } from "react";
import "./Loading.css"; // Import CSS

const Loading = () => {
  const [text, setText] = useState("");
  const fullText = "Welcome.";
  const [index, setIndex] = useState(0);
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (index < fullText.length) {
        setText((prevText) => prevText + fullText[index]);
        setIndex(index + 1);
      } else {
        clearInterval(intervalId);
      }
    }, 300);

    return () => clearInterval(intervalId);
  }, [index]);

  return (
    <div className="loading-container" ref={containerRef}>
      <h1 className="loading-text" ref={textRef}>{text}</h1>
    </div>
  );
};

export default Loading;