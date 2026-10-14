"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";

import SynergyLogo from "@/assets/company/synergy.png";
import FolkaTechLogo from "@/assets/company/folkatech.png";
import TelkomLogo from "@/assets/company/telkom.png";
import TelkomselLogo from "@/assets/company/telkomsel.png";

const experienceData = [
  {
    role: "Software Engineer II",
    company: "Synergy Financial Advisers Ltd",
    date: "2024 - Present",
    location: "Singapore · Remote",
    website: "synergy.com.sg",
    description: (
      <p>
        I build the company&apos;s core super app in Next.js, using the App
        Router to keep it fast and search-friendly while it streamlines the
        team&apos;s day-to-day business operations. <br /> <br />
        I also built sign-in with OAuth, Passkey, credentials and QR-code
        login, so accounts stay secure without slowing anyone down. Alongside that, I
        review code across the team and write the technical documentation.
      </p>
    ),
    skills: [
      "Next.js",
      "TypeScript",
      "Authentication",
      "Code Review",
      "Technical Documentation",
      "Notion Automation",
      "International Collaboration",
    ],
    logo: SynergyLogo,
  },
  {
    role: "Freelance Full-Stack Engineer",
    company: "Upwork",
    date: "2025 - Present",
    location: "Remote",
    description: (
      <p>
        Top Rated freelancer with a 100% Job Success score, building Next.js
        products for clients abroad. <br /> <br />
        My main engagement is GoTypical, a social decision layer for software
        workflows. The idea and the product are my client&apos;s; I&apos;m the
        lead engineer turning it into a working product, covering product
        engineering, UI design, cloud and DevOps, from the first screen to
        production.
      </p>
    ),
    skills: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Stripe",
      "Algolia",
      "Vercel",
      "Product Design",
    ],
  },
  {
    role: "Full Stack Engineer",
    company: "FolkaTech",
    date: "2023 - 2024",
    location: "Bandung, Indonesia",
    website: "folkatech.com",
    description: (
      <p>
        Built and shipped full-stack projects for the agency&apos;s clients:
        Next.js, React and Vue on the front end, NestJS and Laravel on the back
        end, with PostgreSQL and MySQL underneath. <br /> <br />
        I wrote reusable, documented code to cut down on bugs, tuned
        performance across the stack so apps loaded and responded faster, and
        fit each client&apos;s requirements into tight deadlines.
      </p>
    ),
    skills: [
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "CI/CD",
      "Laravel",
      "Next.js",
      "Software Architecture",
    ],
    logo: FolkaTechLogo,
  },
  {
    role: "Front-End Developer Intern",
    company: "Telkom Indonesia",
    date: "2023",
    location: "Bandung, Indonesia",
    website: "digitalamoeba.id",
    description: (
      <p>
        Front-end intern at Digital Amoeba, Telkom Indonesia&apos;s corporate
        innovation lab, working in an Agile Scrum team. <br /> <br />
        I built the lab&apos;s new landing page with Next.js and Framer Motion,
        a playful, animation-heavy page that landed well with its users, and
        worked on the front end of Ideabox, a multitenant idea platform for
        TelkomGroup.
      </p>
    ),
    skills: [
      "Next.js",
      "React",
      "Framer Motion",
      "Laravel",
      "React Bootstrap",
      "Agile Scrum",
    ],
    logo: TelkomLogo,
  },
  {
    role: "Software Developer Intern",
    company: "Telkomsel",
    date: "2022",
    location: "Jakarta, Indonesia",
    website: "telkomsel.com",
    description: (
      <p>
        Software development intern in Telkomsel&apos;s IT Directorate.{" "}
        <br /> <br />
        I built I-Recruitment, a job portal for Telkomsel&apos;s recruitment,
        with Next.js, NestJS and MySQL, plus a coaching and counseling web app
        with Yii2 and PostgreSQL. Along the way I finished 10+ courses on
        Next.js, NestJS, React, APIs, software architecture and testing.
      </p>
    ),

    skills: ["Next.js", "NestJS", "React", "Yii2", "MySQL", "Software Testing"],
    logo: TelkomselLogo,
  },
];

export default function ProfessionalExperiences() {
  return (
    <section
      id="experience"
      className="container mx-auto flex flex-col gap-12 py-24"
    >
      <SectionHeading
        eyebrow="Experience"
        title="Where I've worked"
        description="Three years of production work, plus the internships that got me started."
      />

      <ol className="relative flex flex-col">
        <span className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-primary-200/60 via-white/10 to-transparent md:left-[calc(12rem+7px)]" />
        {experienceData.map((exp, index) => (
          <motion.li
            key={`${exp.company}-${exp.role}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.05 }}
            className="relative grid gap-3 pb-12 pl-10 last:pb-0 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-10 md:pl-0"
          >
            <span
              className={`absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 md:left-48 ${
                exp.date.includes("Present")
                  ? "border-primary-200 bg-primary-200 shadow-[0_0_0_6px_rgba(80,204,96,0.15)]"
                  : "border-white/30 bg-ink"
              }`}
            />
            <p className="font-mono text-sm text-white/50 md:pt-0.5">
              {exp.date}
            </p>
            <div className="flex flex-col gap-4 md:pl-10">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold md:text-2xl">
                    {exp.role}
                  </h3>
                  <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-white/55">
                    {exp.website ? (
                      <a
                        href={`https://${exp.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-primary-100 hover:underline"
                      >
                        {exp.company} <ArrowUpRight size={14} />
                      </a>
                    ) : (
                      <span className="text-primary-100">{exp.company}</span>
                    )}
                    <span className="inline-flex items-center gap-1">
                      <MapPin size={14} /> {exp.location}
                    </span>
                  </div>
                </div>
                {exp.logo && (
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white p-1.5">
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      width={40}
                      height={40}
                      className="h-full w-full object-contain"
                    />
                  </span>
                )}
              </div>
              <div className="max-w-3xl leading-relaxed text-white/65">
                {exp.description}
              </div>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
