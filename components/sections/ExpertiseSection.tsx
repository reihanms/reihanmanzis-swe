"use client";

import {
  ChevronsLeftRightEllipsis,
  Code,
  Monitor,
  Network,
  Orbit,
  PaintRoller,
  Server,
  Sparkles,
} from "lucide-react";
import ExpertiseCard from "../ExpertiseCard";
import { motion } from "framer-motion";

const expertiseData = [
  {
    icon: <Orbit size={40} />,
    title: "Frontend Development",
    subtitle: "React, Next.js, TypeScript",
    description:
      "Crafting modern, responsive, and performant web applications. My focus is on building intuitive user interfaces and seamless, interactive experiences that drive user engagement.",
  },
  {
    icon: <Sparkles size={40} />,
    title: "AI-Powered Development",
    subtitle: "AI Agents & Code Generation",
    description:
      "Leveraging modern AI agents like Windsurf AI and Cursor to accelerate development cycles, improve code quality, and solve complex problems with greater efficiency.",
  },
  {
    icon: <Code size={40} />,
    title: "Backend & BaaS",
    subtitle: "Supabase, NestJS, Python",
    description:
      "Building secure and efficient server-side solutions. I specialize in designing RESTful APIs, managing databases, and handling core business logic, whether with a custom backend or a Backend-as-a-Service.",
  },
  {
    icon: <Monitor size={40} />,
    title: "Full-Stack Development",
    subtitle: "From Concept to Deployment",
    description:
      "Taking a holistic approach to building products. I guide projects through the entire lifecycle—from planning and architectural design to development, testing, and deployment—ensuring the final result is robust and scalable.",
  },
  {
    icon: <Server size={40} />,
    title: "Deployment",
    subtitle: "Vercel, Docker",
    description:
      "Automating the path from code to production. Experienced in deploying to modern cloud platforms like Vercel for optimal performance and reliability.",
  },
  {
    icon: <Network size={40} />,
    title: "Software Architecture",
    subtitle: "Scalable & Maintainable Design",
    description:
      "Designing robust and scalable system architectures. I focus on creating clean codebases and well-structured systems that are built to last and easy to evolve over time.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ExpertiseSection() {
  return (
    <section
      id="expertise"
      className="pt-20 flex items-center justify-center flex-col gap-20"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="text-5xl md:text-7xl font-bold font-sans"
      >
        My Expertise
      </motion.h1>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative">
          {expertiseData.map((expertise, index) => (
            <ExpertiseCard key={index} variants={itemVariants} {...expertise} />
          ))}
          <div className="absolute bottom-10 right-10 rotate-70">
            <PaintRoller size={40} />
          </div>
        </div>
      </motion.div>
      <ChevronsLeftRightEllipsis
        size={60}
        className="rotate-90 text-primary-100"
        style={{
          animation: "move-horizontal 2s ease-in-out infinite",
        }}
      />
    </section>
  );
}

