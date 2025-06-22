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
    role: "Software Engineer (Frontend)",
    company: "Synergy Financial Advisers Ltd",
    date: "2024 - Present",
    location: "Batam & Singapore",
    website: "synergy.com.sg",
    description: (
      <p>
        Engineered a comprehensive super app using Next.js, optimizing
        performance with utilize Next.js app router features to enhance SEO and
        user experience to streamline the company&apos;s business operations,
        following industry best practices and writing well-structured,
        maintainable, and scalable code. <br /> <br />
        Developed and enhanced authentication security by implementing multiple
        authentication methods, including OAuth, Passkey, Credentials, and QR
        code authentication, ensuring robust security and seamless user
        experience.
      </p>
    ),
    skills: [
      "NextJS",
      "TypeScript",
      "Notion workflow automation",
      "Fast paced development",
      "Create Technical Documentation",
      "Code Review",
      "International Collaboration",
    ],
    logo: SynergyLogo,
  },
  {
    role: "Full Stack Engineer",
    company: "FolkaTech",
    date: "2023 - 2024",
    location: "Bandung, Indonesia",
    website: "folkatech.com",
    description: (
      <p>
        Developed and deployed robust full-stack solutions leveraging modern
        technologies, ensuring high performance, scalability, and client
        satisfaction. <br /> <br />
        Streamlined development processes by writing clean, reusable, and
        well-documented code, reducing bug occurrences and improving team
        collaboration. <br /> <br /> Optimized performance across the tech
        stack, leading to faster load times and improved application
        responsiveness.
      </p>
    ),
    skills: [
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "CI/CD",
      "Laravel",
      "NextJS",
      "Software Architecture",
    ],
    logo: FolkaTechLogo,
  },
  {
    role: "Front-End Web Developer",
    company: "Telkom Indonesia",
    date: "2023",
    location: "Bandung, Indonesia",
    website: "digitalamoeba.id",
    description: (
      <p>
        Professionally collaborated in developing application using the Agile
        Scrum method. <br />
        <br />
        Carried out on daily, weekly and monthly meetings to discuss about the
        project, doing mentoring, and reporting work progress.
        <br /> <br />• Final Project : Develop a Website-based landing page for
        Digital Amoeba that have interactive design and playful interface. Built
        with NEXT JS, Laravel, and Framer Motion for the animation and React
        Bootstrap for the UI library, the project is developed successfully and
        have positive feedback from the users.
      </p>
    ),
    skills: [
      "Agile Scrum",
      "Framer Motion",
      "NextJS",
      "Collaboration",
      "Mentoring",
      "TypeScript",
      "Business Development",
    ],
    logo: TelkomLogo,
  },
  {
    role: "Software Developer",
    company: "Telkomsel",
    date: "2022",
    location: "Jakarta, Indonesia",
    website: "telkomsel.com",
    description: (
      <p>
        Worked passionately in software development position and IT Directorate,
        Completed more than 10 class courses, contains modern technology
        framework learning modules (Next JS, Nest JS, React JS, Yii2), API
        learning modules, Software Architecture, Software testing, and how to
        work professionally in Udemy learning platform <br /> <br />
        Develop Job Portal Web Based Application that will used as telkomsel
        recruitment platform for user. Built with JavaScript modern technology
        such as Next JS, Nest JS, and MySQL as the database. Improved web
        performance, user experience and interface up to 70% from the previous
        application.
      </p>
    ),

    skills: ["React", "API Integration", "Yii2", "MySQL", "Software testing"],
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
        className="text-7xl font-bold font-sans text-center max-w-md"
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
                  <div className="w-full flex justify-between items-center">
                    <span className="font-bold text-lg text-left">
                      {exp.role} @ {exp.company}
                    </span>
                    <span className="text-right">{exp.date}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="p-4 bg-primary-500 rounded-b-lg mt-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                        <a
                          href={`https://${exp.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 hover:text-primary-100"
                        >
                          <ExternalLink size={16} />
                          <span>{exp.website}</span>
                        </a>
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
                        className="object-contain"
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

