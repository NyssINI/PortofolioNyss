"use client";
import React, {useState, useRef, UseEffect} from "react";
import Link from "next/link";


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
            <div className="menu-bar">
                <div className="menu-logo">
                <Link href="/">Codegrid</Link>
            </div>
                <div className="menu-open">
                    <p>Menu</p>
                </div>
            </div>
            <div className="menu-overlay">
                <div className="menu-overlay-bar">
                    <div className="menu-logo">
                        <Link href="/">Codegrid</Link>
                    </div>
                    <div className="menu-close">
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
                                <div className="menu-link-item-holder">
                                    {/* <Link></Link> */}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="menu-info"></div>
                </div>
                <div className="menu-preview"></div>
            </div>
        </div>
    );
};

export default Menu;