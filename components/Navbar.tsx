"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import Logo from "@/assets/images/logo.png";
import { cn } from "@/lib/utils";
import { sections } from "@/lib/site";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav
        className={cn(
          "mx-auto flex h-14 max-w-5xl items-center justify-between rounded-full border px-3 pl-5 transition-all duration-300",
          isScrolled || isOpen
            ? "border-white/10 bg-[#0b151a]/75 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.8)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        )}
      >
        <Link href="/" aria-label="Back to home" onClick={() => setOpen(false)}>
          <Image src={Logo} alt="Reihan Ms. logo" width={96} height={96} />
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {sections.map((section) => (
            <Link
              key={section.id}
              href={`/#${section.id}`}
              className="rounded-full px-4 py-2 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
            >
              {section.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/#contact"
            className="hidden rounded-full bg-primary-200 px-4 py-2 text-sm font-medium text-primary-500 transition-colors hover:bg-primary-100 sm:inline-flex"
          >
            Get in touch
          </Link>
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-white/5 md:hidden"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 max-w-5xl rounded-3xl border border-white/10 bg-[#0b151a]/90 p-3 backdrop-blur-xl md:hidden"
          >
            {[...sections, { id: "contact", label: "Contact" }].map(
              (section) => (
                <Link
                  key={section.id}
                  href={`/#${section.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-white/80 hover:bg-white/5 hover:text-white"
                >
                  {section.label}
                </Link>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
