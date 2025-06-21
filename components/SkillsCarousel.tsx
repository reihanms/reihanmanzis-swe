"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Skill {
  src: string;
  alt: string;
}

interface SkillsCarouselProps {
  skills: Skill[];
}

const SkillsCarousel: React.FC<SkillsCarouselProps> = ({ skills }) => {
  const extendedSkills = [...skills, ...skills, ...skills, ...skills];

  const skillItemWidth = 50 + 32;
  const carouselWidth = skills.length * skillItemWidth;

  return (
    <div className="w-full overflow-hidden py-4 px-8 md:px-16">
      <motion.div
        className="flex"
        animate={{
          x: [0, -carouselWidth],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 10,
            ease: "linear",
          },
        }}
      >
        {extendedSkills.map((skill, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-4 flex items-center justify-center"
            style={{ width: "50px", height: "50px" }}
          >
            <Image
              src={skill.src}
              alt={skill.alt}
              width={50}
              height={50}
              className="object-contain pointer-events-none"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillsCarousel;

