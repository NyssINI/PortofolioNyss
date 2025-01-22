'use client';

import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import Link from 'next/link'; // Import Link here

const Home = () => {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoadingComplete(true); 
    }, 100);

    return () => clearTimeout(timer); 
  }, []);

  useEffect(() => {
    if (isLoadingComplete) {
      const tl = gsap.timeline();
      tl.set(".animated-letter", { opacity: 0 })
        .to(".animated-letter", {
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          delay: 0.5,
        });
    }
  }, [isLoadingComplete]);

  return (
    <div className="menu-container">
      {/* Animated Name Section */}
      <h3 className="animated-name">
        <span className="animated-letter">D</span>
        <span className="animated-letter">e</span>
        <span className="animated-letter">n</span>
        <span className="animated-letter">y</span>
        <span className="animated-letter">s</span>
        <span>&nbsp;</span>
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
    </h3>

      
      {/* Subtitle Section */}
      <p className="subtitle">
        — Web Developer | Designer —
      </p>

      {/* Button Section */}
      <div className="flex justify-center pt-5">
        <Link
          href="#about"
          className="button-start-explore"
        >
          Start Explore
        </Link>
      </div>
    </div>
  );
};

export default Home;
