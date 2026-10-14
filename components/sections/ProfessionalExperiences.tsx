"use client";

import React from "react";
import { MapPin, ExternalLink } from "lucide-react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ProfessionalExperiences = () => {
  return (
    <section
      id="experience"
      className="py-20 flex flex-col items-center justify-center gap-10"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="text-5xl md:text-7xl font-bold font-sans text-center max-w-md"
      >
        Professional Experience
      </motion.h1>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full max-w-4xl px-4"
      >
        <Accordion type="multiple" className="w-full font-mono">
          {experienceData.map((exp, index) => (
            <motion.div variants={itemVariants} key={index}>
              <AccordionItem
                value={`item-${index}`}
                className="border-none mb-4"
              >
                <AccordionTrigger className="p-4 bg-primary-400 rounded-lg hover:no-underline cursor-pointer">
                  <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center text-left">
                    <span className="font-bold text-lg text-left">
                      {exp.role} @ {exp.company}
                    </span>
                    <span className="text-left md:text-right mt-1 md:mt-0 text-sm md:text-base">
                      {exp.date}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="p-4 bg-primary-500 rounded-b-lg mt-1">
                  {exp.logo && (
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      width={100}
                      height={100}
                      className="object-contain block md:hidden mb-4"
                    />
                  )}
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                        {exp.website && (
                        <a
                          href={`https://${exp.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 hover:text-primary-100"
                        >
                          <ExternalLink size={16} />
                          <span>{exp.website}</span>
                        </a>
                        )}
                      </div>
                      <div className="text-white font-sans mb-6">
                        {exp.description}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-primary-300/20 text-sm rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    {exp.logo && (
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        width={100}
                        height={100}
                        className="object-contain hidden md:block"
                      />
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
};

export default ProfessionalExperiences;

