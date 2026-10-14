"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { sections } from "@/lib/site";

const links = [
  { id: "hero", label: "Home" },
  ...sections,
  { id: "contact", label: "Contact" },
];

const ScrollIndicator = () => {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const probe = window.scrollY + window.innerHeight / 2;
      let current = "hero";
      links.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= probe) current = id;
      });
      setActive(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      aria-label="Section progress"
      className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-3 xl:flex"
    >
      {links.map((link) => (
        <Link
          key={link.id}
          href={`#${link.id}`}
          className="group flex items-center gap-3"
        >
          <span className="text-xs text-white/0 transition-colors group-hover:text-white/70">
            {link.label}
          </span>
          <span
            className={cn(
              "h-px transition-all duration-300",
              active === link.id
                ? "w-8 bg-primary-100"
                : "w-4 bg-white/25 group-hover:w-6 group-hover:bg-white/60"
            )}
          />
        </Link>
      ))}
    </nav>
  );
};

export default ScrollIndicator;
