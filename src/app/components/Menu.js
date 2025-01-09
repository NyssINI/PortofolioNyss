"use client";
import React, {useState, useRef, UseEffect} from "react";
import Link from "next/link";
import Image from "next/image";

const menuLink = [
    {path: "/", label: "Home"},
    {path: "/about", label: "About"},
    {path: "/work", label: "Work"},
    {path: "/contact", label: "Contact"},
];

const Menu = () => {
    const container = useRef();
    const  [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return ( 
        <div className="menu-container" ref={container}>
             <div className="page-content">
                    <Image src="/Assets/hero.jpg"
                    width="512"
                    height="512"
                    />
                </div>
            <div className="menu-bar">
                <div className="menu-logo">
                <Link href="/">Codegrid</Link>
            </div>
                <div className="menu-open" onClick={toggleMenu}>
                    <p>Menu</p>
                </div>
            </div>
            <div className="menu-overlay">
                <div className="menu-overlay-bar">
                    <div className="menu-logo">
                        <Link href="/">Codegrid</Link>
                    </div>
                    <div className="menu-close" onClick={toggleMenu}>
                        <p>Close</p>
                    </div>
                </div>
                <div className="menu-close-icon">
                    <p>&#x2715;</p>
                </div>
                <div className="menu-copy">
                    <div className="menu-links">
                        {menuLink.map((link, index) =>(
                            <div className="menu-link-item" key={index}>
                                <div className="menu-link-item-holder" onClick={toggleMenu}>
                                    <Link href={link.path} className="menu-link">
                                    {link.label}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="menu-info"></div>
                    <div className="menu-link-info-col">
                        <a href="#">Instagram &#8599;</a>
                        <a href="#">X &#8599;</a>
                    </div>
                     <div className="menu-info-col">
                        <p>Nyssnigeng@gmail.com</p>
                        <p>087627681568</p>
                     </div>
                </div>
                <div className="menu-preview">
                    <p>View Showreel</p>
                </div>
            </div>
        </div>
    );
};

export default Menu;