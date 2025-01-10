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
    <div className="menu-container relative h-screen">
      <div className="relative z-10 menu-bar flex justify-between items-center p-4">
        <div className="menu-logo text-white font-bold text-xl">
          <Link href="/">Codegrid</Link>
        </div>
        <div
          className="menu-open cursor-pointer text-white"
          onClick={toggleMenu}
        >
          <p>Menu</p>
        </div>
      </div>

      {isMenuOpen && (
        <div className="menu-overlay z-20">
          <div className="menu-overlay-bar flex justify-between items-center w-full px-8 py-4 text-white">
            <div className="menu-logo">
              <Link href="/">Codegrid</Link>
            </div>
            <div
              className="menu-close cursor-pointer"
              onClick={toggleMenu}
            >
              <p>Close</p>
            </div>
          </div>
          <div className="menu-links space-y-6 mt-12 text-center">
            {menuLink.map((link, index) => (
              <div
                className="menu-link-item text-white text-lg font-medium"
                key={index}
              >
                <Link href={link.path} onClick={toggleMenu}>
                  {link.label}
                </Link>
              </div>
            ))}
          </div>
          <div className="menu-info mt-8 text-center text-gray-300">
            <p>Nyssnigeng@gmail.com</p>
            <p>087627681568</p>
          </div>
          <div className="menu-social-links flex space-x-4 mt-6 text-gray-300">
            <a href="#" className="hover:text-white">
              Instagram &#8599;
            </a>
            <a href="#" className="hover:text-white">
              X &#8599;
            </a>
          </div>
          <div className="menu-preview mt-12 text-gray-300 cursor-pointer">
            <p>View Showreel</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
