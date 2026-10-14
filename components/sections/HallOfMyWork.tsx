"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import DeviceShowcase from "@/components/devices/DeviceShowcase";
import { projects, type Project } from "@/lib/projects";

const [featured, ...rest] = projects;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Meta = ({ project }: { project: Project }) => (
  <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-primary-100">
    {project.context} · {project.period}
  </p>
);

const StackTags = ({ stack, limit }: { stack: string[]; limit?: number }) => {
  const shown = limit ? stack.slice(0, limit) : stack;
  const hidden = stack.length - shown.length;
  return (
    <div className="flex flex-wrap gap-2">
      {shown.map((tech) => (
        <span
          key={tech}
          className="rounded-full border border-primary-300/40 px-3 py-1 text-xs text-white/80"
        >
          {tech}
        </span>
      ))}
      {hidden > 0 && (
        <span className="rounded-full px-2 py-1 text-xs text-white/50">
          +{hidden}
        </span>
      )}
    </div>
  );
};

function FeaturedProject({ project }: { project: Project }) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative overflow-hidden rounded-3xl border border-primary-400/40 bg-gradient-to-br from-primary-500/80 via-[#0b151a] to-[#0b151a]"
    >
      <div className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-primary-300/20 blur-[120px]" />
      <div className="relative grid items-center gap-10 p-6 md:p-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-6 lg:p-14">
        <div className="flex flex-col gap-6">
          <span className="w-fit rounded-full bg-primary-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary-500">
            Featured
          </span>
          <Meta project={project} />
          <div>
            <h3 className="text-5xl font-bold md:text-7xl">{project.title}</h3>
            <p className="mt-3 text-lg text-white/70 md:text-xl">
              {project.tagline}
            </p>
          </div>
          <p className="text-base leading-relaxed text-white/80">
            {project.summary}
          </p>
          <p className="text-sm text-white/60">
            <span className="text-white">My role:</span> {project.role}
          </p>
          <StackTags stack={project.stack} limit={8} />
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href={`/work/${project.slug}`}
              className="group inline-flex items-center gap-2 rounded-full bg-primary-200 px-5 py-3 text-sm font-bold text-primary-500 transition-colors hover:bg-primary-100"
            >
              Read case study
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm text-white transition-colors hover:border-primary-100 hover:text-primary-100"
              >
                Visit live site <ArrowUpRight size={16} />
              </a>
            )}
          </div>
        </div>
        <DeviceShowcase
          title={project.title}
          desktop={project.devices.desktop}
          tablet={project.devices.tablet}
          mobile={project.devices.mobile}
          intensity="hero"
          className="order-first lg:order-none"
        />
      </div>
    </motion.article>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: (index % 2) * 0.15 }}
    >
      <Link
        href={`/work/${project.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-3xl border border-primary-400/30 bg-primary-500/30 transition-colors duration-300 hover:border-primary-200/60 hover:bg-primary-500/50"
      >
        <div className="relative bg-gradient-to-b from-primary-400/30 to-transparent px-4 pt-8 md:px-8">
          <DeviceShowcase
            title={project.title}
            desktop={project.devices.desktop}
            tablet={project.devices.tablet}
            mobile={project.devices.mobile}
            intensity="card"
          />
        </div>
        <div className="flex flex-1 flex-col gap-4 p-6 md:p-8">
          <Meta project={project} />
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-3xl font-bold">{project.title}</h3>
              <p className="mt-1 text-white/70">{project.tagline}</p>
            </div>
            <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:border-primary-100 group-hover:bg-primary-100 group-hover:text-primary-500">
              <ArrowUpRight size={18} />
            </span>
          </div>
          <div className="mt-auto pt-2">
            <StackTags stack={project.stack} limit={4} />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export default function HallOfMyWork() {
  return (
    <section
      id="work"
      className="container mx-auto flex flex-col gap-10 py-24 md:gap-14"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-4 text-center"
      >
        <h1 className="text-5xl font-bold font-sans md:text-7xl">
          Hall of My Work
        </h1>
        <p className="max-w-2xl text-white/70">
          Things I&apos;ve built for clients, companies and myself. Open any
          project for the full story: the problem, what I did, and how it
          turned out.
        </p>
      </motion.div>

      <FeaturedProject project={featured} />

      <div className="grid gap-6 md:grid-cols-2 md:gap-8">
        {rest.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
