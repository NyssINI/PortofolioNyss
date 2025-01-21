'use client';

import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { useRouter } from "next/navigation"; 
import "./components/Loading.css"; 

const Home = () => {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false); 
  const router = useRouter(); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoadingComplete(true); 
    }, 100);

    return () => clearTimeout(timer); 
  }, []);

  useEffect(() => {
    if (isLoadingComplete) {
      const letters = document.querySelectorAll(".animated-letter");

      gsap.fromTo(letters, 
        { opacity: 0 }, 
        { 
          opacity: 1, 
          duration: 1, 
          stagger: 0.2, 
          delay: 1, 
          repeat: -1, 
          yoyo: true,
        }
      );
    }
  }, [isLoadingComplete]); 

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      {/* Name Animation */}
      <h1>
        <span className="animated-letter">D</span>
        <span className="animated-letter">e</span>
        <span className="animated-letter">n</span>
        <span className="animated-letter">y</span>
        <span className="animated-letter">s</span>
        {" | "}
        <span className="animated-letter">Y</span>
        <span className="animated-letter">u</span>
        <span className="animated-letter">d</span>
        <span className="animated-letter">i</span>
        <span className="animated-letter">a</span>
        <span className="animated-letter">n</span>
        <span className="animated-letter">t</span>
        <span className="animated-letter">a</span>
        <span className="animated-letter">r</span>
        <span className="animated-letter">a</span>
      </h1>
    </div>
  );
};

export default Home;
