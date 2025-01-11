"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";

const menuLink = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/work", label: "Work" },
  { path: "/contact", label: "Contact" },
];

const Menu = () => {
  const container = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="menu-container" ref={container}>
      {/* Menu Bar */}
      <div className="menu-bar">
        <div className="menu-logo">
          <Link href="/">Codegrid</Link>
        </div>
        <div className="menu-open" onClick={toggleMenu}>
          <p>Menu</p>
        </div>
      </div>

      {/* Menu Overlay */}
      {isMenuOpen && (
        <div className="menu-overlay">
          {/* Overlay Bar */}
          <div className="menu-overlay-bar">
            <div className="menu-logo">
              <Link href="/">Codegrid</Link>
            </div>
            {/* Close Icon */}
            <div
              className="menu-close-icon"
              onClick={toggleMenu} // Tambahkan handler di sini
            >
              <p>&#x2715;</p> {/* Simbol 'X' untuk close */}
            </div>
          </div>

          {/* Menu Links */}
          <div className="menu-copy">
            <div className="menu-links">
              {menuLink.map((link, index) => (
                <div className="menu-link-item" key={index}>
                  <div
                    className="menu-link-item-holder"
                    onClick={toggleMenu} // Menutup menu saat link diklik
                  >
                    <Link href={link.path} className="menu-link">
                      {link.label}
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Info Section */}
            <div className="menu-info">
              <div className="menu-info-col">
                <p>Nyssnigeng@gmail.com</p>
                <p>087627681568</p>
              </div>
              <div className="menu-link-info-col">
                <a href="#">Instagram &#8599;</a>
                <a href="#">X &#8599;</a>
              </div>
            </div>
          </div>

          {/* Menu Preview */}
          <div className="menu-preview">
            <p>View Showreel</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
