"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import Portrait from "@/assets/images/reihan.jpg";

const stats = [
  { value: "Top Rated", label: "on Upwork, with 100% Job Success" },
  { value: "1,000+", label: "freelance hours delivered" },
  { value: "SE II", label: "at a Singapore financial advisory firm" },
  { value: "3 years", label: "shipping production web apps" },
];

const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "NestJS",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "Tailwind CSS",
  "Framer Motion",
  "Supabase",
  "Stripe",
  "Algolia",
  "Docker",
  "Vercel",
];

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" as const, delay },
});

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden pb-12 pt-32"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div className="pointer-events-none absolute left-1/2 top-[-20%] h-[40rem] w-[60rem] -translate-x-1/2 rounded-full bg-primary-300/25 blur-[140px]" />

      <div className="container relative mx-auto flex flex-col gap-10">
        <motion.div
          {...rise(0)}
          className="flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/5 py-1.5 pl-1.5 pr-4 backdrop-blur"
        >
          <Image
            src={Portrait}
            alt="Reihan Manzis"
            width={32}
            height={32}
            className="h-8 w-8 rounded-full object-cover object-top"
            priority
          />
          <span className="flex flex-col text-sm text-white/80 sm:flex-row sm:items-center">
            Reihan Manzis
            <span className="mx-2 hidden text-white/30 sm:inline">·</span>
            <span className="inline-flex items-center gap-2 text-primary-100">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-200 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-200" />
              </span>
              Open to remote roles & freelance work
            </span>
          </span>
        </motion.div>

        <motion.h1
          {...rise(0.1)}
          className="max-w-5xl text-5xl font-semibold leading-[1.02] md:text-7xl lg:text-[5.5rem]"
        >
          Full-stack engineer building Next.js products,{" "}
          <span className="bg-gradient-to-r from-primary-100 to-primary-200 bg-clip-text text-transparent">
            end to end.
          </span>
        </motion.h1>

        <motion.p
          {...rise(0.2)}
          className="max-w-2xl text-lg leading-relaxed text-white/65 md:text-xl"
        >
          I&apos;m a Software Engineer II at a Singapore company and a Top Rated
          freelancer on Upwork. I work across TypeScript, Next.js and NestJS,
          from the first screen to production.
        </motion.p>

        <motion.div {...rise(0.3)} className="flex flex-wrap gap-3">
          <Link
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-primary-200 px-6 py-3.5 font-medium text-primary-500 transition-colors hover:bg-primary-100"
          >
            See my work
            <ArrowDown
              size={18}
              className="transition-transform group-hover:translate-y-0.5"
            />
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-white transition-colors hover:border-primary-100 hover:text-primary-100"
          >
            Get in touch <ArrowUpRight size={18} />
          </Link>
        </motion.div>

        <motion.dl
          {...rise(0.4)}
          className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.value} className="bg-ink/90 p-5 md:p-6">
              <dt className="text-2xl font-semibold text-white md:text-3xl">
                {stat.value}
              </dt>
              <dd className="mt-1 text-sm text-white/55">{stat.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <motion.div
        {...rise(0.5)}
        className="relative mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
      >
        <div className="animate-scroll flex w-max gap-10 font-mono text-sm uppercase tracking-[0.2em] text-white/40">
          {[...stack, ...stack].map((tech, i) => (
            <span key={i} className="flex items-center gap-10">
              {tech}
              <span className="h-1 w-1 rounded-full bg-primary-200/60" />
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
