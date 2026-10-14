"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";

import { site } from "@/lib/site";

const channels = [
  { label: "Upwork", href: site.links.upwork },
  { label: "LinkedIn", href: site.links.linkedin },
  { label: "GitHub", href: site.links.github },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  };

  return (
    <section id="contact" className="container mx-auto py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative overflow-hidden rounded-[2rem] border border-primary-300/30 bg-gradient-to-br from-primary-400/60 via-primary-500/70 to-ink px-6 py-16 md:px-16 md:py-24"
      >
        <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary-200/25 blur-[120px]" />

        <div className="relative flex flex-col items-start gap-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary-100">
            Contact
          </p>
          <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] md:text-7xl">
            Have a project or a role in mind?
          </h2>
          <p className="max-w-2xl text-lg text-white/70">
            Whether you need a full-time engineer for your team or a freelancer
            for a specific build, I&apos;d like to hear about it. I usually reply
            within a day.
          </p>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-100 px-6 py-3.5 font-medium text-primary-500 transition-colors hover:bg-white"
            >
              <Mail size={18} /> {site.email}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-white transition-colors hover:border-primary-100 hover:text-primary-100"
            >
              {copied ? <Check size={18} /> : <Copy size={18} />}
              {copied ? "Copied" : "Copy email"}
            </button>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3 pt-4">
            {channels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1 text-white/70 transition-colors hover:text-white"
              >
                {channel.label}
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
