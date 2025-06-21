"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const ScrollDownButton = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("expertise");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      onClick={handleScroll}
      className="absolute bottom-5 left-1/2 -translate-x-1/2 cursor-pointer z-20 pt-6 pb-2 px-1 border border-gradient-to-r from-primary-100 to-primary-200 rounded-full"
    >
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <ChevronDown className="w-8 h-8 text-primary-200" />
      </motion.div>
    </div>
  );
};

export default ScrollDownButton;

