"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/images/logo.png";
import { Divide as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set to true if scrolled past the hero section (100vh)
      setIsScrolled(window.scrollY > window.innerHeight * 0.1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navLinks = [
    { name: ">> hero", href: "#hero" },
    { name: "## expertise", href: "#expertise" },
    { name: "// experience", href: "#experience" },
    { name: "</> my work", href: "#work" },
    { name: "^^ about me", href: "#about" },
    { name: "@@ contact", href: "#contact" },
    {
      name: ">> LinkedIn",
      href: "https://www.linkedin.com/in/reihan-manzis-syahputra/",
      target: "_blank",
    },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
          isScrolled || isOpen
            ? "bg-primary-500/10 backdrop-blur-lg border-b border-primary-400/20"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <button onClick={scrollToTop}>
                <Image src={Logo} alt="Logo" width={120} height={120} />
              </button>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((link) => (
                  <Link key={link.name} href={link.href} target={link.target}>
                    <span className="text-white hover:text-primary-100 px-3 py-2 rounded-md text-sm font-medium">
                      {link.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="md:hidden">
              <Hamburger toggled={isOpen} toggle={setOpen} color="white" />
            </div>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="fixed top-20 left-0 w-full bg-primary-500/10 backdrop-blur-lg z-40 md:hidden">
          <div className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} target={link.target}>
                <span
                  className="text-white hover:text-primary-100 px-3 py-2 rounded-md text-sm font-medium"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

