import Link from "next/link";
import React from "react";
import GlowingCircle from "../GlowingCircle";

export default function Contact() {
  return (
    <section
      id="contact"
      className="pt-20 pb-20 flex items-center justify-center flex-col gap-10 relative h-[100dvh]"
    >
      <GlowingCircle
        className="top-[10%] left-[20%]"
        animation="move-horizontal 4s ease-in-out infinite"
      />
      <GlowingCircle
        className="bottom-[10%] right-[10%] rotate-180"
        animation="move-vertical 4s ease-in-out infinite"
      />
      <h1 className="text-7xl font-bold font-sans max-w-xl text-center">
        Have a Project in Mind?
      </h1>
      <p className="text-white text-2xl container text-center max-w-5xl">
        I&apos;m currently available for new opportunities. Whether you have a
        question or just want to say hi, I&apos;ll try my best to get back to
        you!
      </p>
      <div className="flex items-center justify-center gap-8">
        <Link
          href="mailto:reihanmanzis1@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Gmail"
          className="text-white text-lg font-mono underline"
        >
          Gmail
        </Link>
        <Link
          href="https://www.linkedin.com/in/reihan-manzis/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-white text-lg font-mono underline"
        >
          LinkedIn
        </Link>
        <Link
          href="https://github.com/reihanmanzis"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-white text-lg font-mono underline"
        >
          GitHub
        </Link>
        <Link
          href="https://www.instagram.com/reihan.manzis/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-white text-lg font-mono underline"
        >
          Instagram
        </Link>
      </div>
    </section>
  );
}

