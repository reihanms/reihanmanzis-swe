"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { name: "hero", href: "#hero" },
  { name: "expertise", href: "#expertise" },
  { name: "experience", href: "#experience" },
  { name: "my work", href: "#work" },
  { name: "about me", href: "#about" },
  { name: "contact", href: "#contact" },
];

const ScrollIndicator = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "";
      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section instanceof HTMLElement) {
          const sectionTop = section.offsetTop - window.innerHeight / 2;
          const sectionHeight = section.offsetHeight;
          if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
          ) {
            currentSection = link.href;
          }
        }
      });
      if (window.scrollY < window.innerHeight / 2) {
        currentSection = "#hero";
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-1/2 right-8 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
      {navLinks.map((link) => (
        <Link key={link.href} href={link.href}>
          <div className="relative group">
            <div
              className={`w-4 h-4 transition-all duration-300 [clip-path:polygon(50%_0%,_100%_50%,_50%_100%,_0%_50%)] ${
                activeSection === link.href
                  ? "bg-primary-100"
                  : "bg-primary-100/20"
              }`}
            ></div>
            <span className="absolute right-full top-1/2 -translate-y-1/2 mr-4 px-2 py-1 bg-primary-400 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap capitalize">
              {link.name}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ScrollIndicator;

