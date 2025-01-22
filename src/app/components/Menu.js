"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";

const menuLink = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/work", label: "Work" },
  { path: "/contact", label: "Contact" },
];

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Pastikan posisi awal menu di luar layar
    gsap.set(".menu-overlay", { x: "100%" });
    gsap.set(".menu-link-item", { opacity: 0, y: 20 });

    const welcomeDelay = 0.3; 

    gsap.to(".menu-container", { opacity: 1, duration: 1, delay: welcomeDelay });
  }, []);

  const toggleMenu = () => {
    if (!isMenuOpen) {
      setIsMenuOpen(true);
      // Animasi masuk menu
      gsap.to(".menu-overlay", {
        x: 0,
        duration: 0.8, // Perpanjang durasi
        ease: "power3.out",
        delay: 0.5, // Tambahkan delay untuk sinkronisasi
      });
      gsap.to(".menu-link-item", {
        opacity: 1,
        y: 0,
        stagger: 0.15, // Perpanjang waktu antara tiap link
        duration: 0.6,
        delay: 0.7, // Sesuaikan delay agar animasi sinkron
        ease: "power3.out",
      });
    } else {
      // Animasi keluar menu
      gsap.to(".menu-overlay", {
        x: "100%",
        duration: 0.8, // Perpanjang durasi
        ease: "power3.inOut",
        onComplete: () => setIsMenuOpen(false), // Pastikan state diubah setelah animasi selesai
      });
      gsap.to(".menu-link-item", { opacity: 0, y: 20, duration: 0.4 });
    }
  };

  return (
    <div className="menu-container" style={{ opacity: 0 }}>
      {/* Menu Bar */}
      <div className="menu-bar">
        <div className="menu-logo">
          <Link href="/">return: Nyss;</Link>
        </div>

        {/* Burger Button */}
        <div className="menu-open" onClick={toggleMenu}>
          <p>Menu</p>
        </div>
      </div>

      {/* Menu Overlay */}
      <div
        className={`menu-overlay ${isMenuOpen ? "open" : ""}`}
        style={{ transform: "translateX(100%)" }}
      >
        <div className="menu-overlay-bar">
          <div className="menu-close-icon" onClick={toggleMenu}>
            <p>&#x2715;</p>
          </div>
        </div>

        {/* Menu Links */}
        <div className="menu-copy">
          <div className="menu-links">
            {menuLink.map((link, index) => (
              <div className="menu-link-item" key={index}>
                <div className="menu-link-item-holder" onClick={toggleMenu}>
                  <Link href={link.path} className="menu-link">
                    {link.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
