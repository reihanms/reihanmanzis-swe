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
        className="top-0 left-0"
        animation="move-horizontal 4s ease-in-out infinite"
      />
      <GlowingCircle
        className="bottom-0 right-0"
        animation="move-vertical 4s ease-in-out infinite"
      />
      <h1 className="text-5xl md:text-7xl font-bold font-sans max-w-xl text-center">
        Have a Project in Mind?
      </h1>
      <p className="text-white text-lg md:text-2xl container text-center max-w-5xl">
        I am open to a variety of collaborations. Whether you&apos;re looking
        for a full-time engineer for your team, a reliable freelance engineer
        for a specific project, or a passionate partner for a new venture, I
        would love to hear about it.
        <br />
        <br />
        My inbox is always open. Let&apos;s discuss how we can create something
        amazing together.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
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
          href="https://www.linkedin.com/in/reihan-manzis-syahputra/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-white text-lg font-mono underline"
        >
          LinkedIn
        </Link>
        <Link
          href="https://github.com/reihanms"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-white text-lg font-mono underline"
        >
          GitHub
        </Link>
        <Link
          href="https://www.instagram.com/reihanmanzis/"
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

