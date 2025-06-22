"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

import Roam1 from "@/assets/roam-1.png";
import Roam2 from "@/assets/roam-2.png";
import Roam3 from "@/assets/roam-3-full.png";
import Roam4 from "@/assets/roam-4.png";

import IdeaboxThumbnail from "@/assets/ideabox-device.png";
import Ideabox1 from "@/assets/Ideabox1.png";
import Ideabox2 from "@/assets/Ideabox2.png";
import Ideabox3 from "@/assets/Ideabox3.png";
import Ideabox4 from "@/assets/Ideabox4.2.png";

import AmoebaThumbail from "@/assets/amoeba-device.png";
import Amoeba1 from "@/assets/LandingAmoeba1.png";
import Amoeba2 from "@/assets/LandingAmoeba2.png";
import Amoeba3 from "@/assets/LandingAmoeba3.png";
import Amoeba4 from "@/assets/LandingAmoeba4.png";
import OtherProjectCard from "../OtherProjectCard";

import OtherProject1 from "@/assets/telkomsel-1.png";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  video?: string;
  thumbnail?: StaticImageData;
  images: (string | StaticImageData)[];
  layout: "normal" | "reversed";
  projectLink?: string;
}

const projects: Project[] = [
  {
    title: "ROAM",
    description:
      "A full-stack web application designed to connect travelers worldwide. Roam allows users to create, discover, and join group trips through an interactive map interface. Key features include real-time chat for trip coordination, a comprehensive user review system to build trust, and dynamic photo galleries for destinations, all powered by Next.js and Supabase.",
    video: "/final-roam-showcase.mov",
    images: [Roam1, Roam2, Roam3, Roam4],
    layout: "normal",
    projectLink: "https://roam-travel.vercel.app/",
  },
  {
    title: "Ideabox",
    description:
      "An internal innovation platform for TelkomGroup, designed with a multitenant architecture to serve various divisions. It provides a collaborative space for employees to submit, discuss, and develop new concepts through features like dynamic idea feeds, commenting, and project team formation.",
    thumbnail: IdeaboxThumbnail,
    images: [Ideabox1, Ideabox2, Ideabox3, Ideabox4],
    layout: "reversed",
    projectLink: "https://ideabox-test.vercel.app/",
  },
  {
    title: "Amoeba Landing Page",
    description:
      "A visually captivating landing page for Digital Amoeba, designed to engage visitors with a playful and highly interactive user interface. The page leverages Framer Motion to deliver fluid animations and a memorable, dynamic browsing experience.",
    thumbnail: AmoebaThumbail,
    images: [Amoeba1, Amoeba2, Amoeba3, Amoeba4],
    layout: "normal",
  },
];

const otherProjects = [
  {
    title: "Telkomsel I-Recruitment",
    description:
      "A web application for Telkomsel's internal recruitment process. It allows users to apply for various positions and track their application status.",
    technologies: [
      "React",
      "Node.js",
      "TypeScript",
      "Next.js",
      "React Bootstrap",
    ],
    image: OtherProject1,
  },
];

export default function HallOfMyWork() {
  return (
    <section
      id="work"
      className="pt-20 flex items-center justify-center flex-col overflow-hidden"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="text-7xl font-bold font-sans"
      >
        Hall of My Work
      </motion.h1>

      <div className="flex flex-col container mt-20">
        {projects.map((project, index) => {
          const isReversed = project.layout === "reversed";
          const textVariants = {
            hidden: { opacity: 0, x: isReversed ? 100 : -100 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.8, ease: "easeOut" as const },
            },
          };
          const mediaVariants = {
            hidden: { opacity: 0, x: isReversed ? -100 : 100 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.8, ease: "easeOut" as const },
            },
          };

          return (
            <div key={index} className="flex flex-col mb-20">
              <div
                className={`flex gap-10 ${
                  isReversed ? "flex-row-reverse" : "flex-row"
                }`}
              >
                <motion.div
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={`w-1/2 flex flex-col gap-4 justify-center ${
                    isReversed
                      ? "text-right items-end"
                      : "text-left items-start"
                  }`}
                >
                  <h2 className="text-8xl font-bold font-sans">
                    {project.title}
                  </h2>
                  <p className="text-xl text-white font-mono">
                    {project.description}
                  </p>
                  <div
                    className={`flex justify-between items-center w-full ${
                      isReversed ? "flex-row-reverse" : "flex-row"
                    }`}
                  >
                    <span className="cursor-pointer underline text-primary-100 font-sans mt-5">
                      Details
                    </span>
                    {project.projectLink && (
                      <Link href={project.projectLink} target="_blank">
                        <button className="flex items-center gap-2 bg-primary-300 text-white px-4 py-3 hover:bg-primary-400 transition-colors cursor-pointer rounded-sm">
                          <span className="font-mono font-medium">
                            VIEW PROJECT
                          </span>
                        </button>
                      </Link>
                    )}
                  </div>
                </motion.div>
                <motion.div
                  variants={mediaVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="w-1/2"
                >
                  {project.video ? (
                    <video
                      src={project.video}
                      autoPlay
                      loop
                      muted
                      className="rounded-lg"
                    />
                  ) : (
                    <Image
                      src={project.thumbnail as StaticImageData}
                      alt={`${project.title} thumbnail`}
                      className="rounded-lg object-cover"
                    />
                  )}
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-4 overflow-hidden flex gap-4"
              >
                {[...project.images, ...project.images].map((image, i) => (
                  <div key={i} className="flex-shrink-0 max-h-[225px]">
                    <Image
                      src={image}
                      alt={`${project.title} screenshot ${i + 1}`}
                      width={200}
                      height={225}
                      className="rounded-lg object-cover max-h-[225px] object-top"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          );
        })}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col mt-20"
        >
          <h1 className="text-xl font-sans font-bold mb-6">
            Other Noteworthy Projects
          </h1>
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.3 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <OtherProjectCard
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  image={project.image}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

