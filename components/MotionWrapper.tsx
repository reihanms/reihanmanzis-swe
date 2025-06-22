"use client";

import { motion } from "framer-motion";
import React from "react";

interface MotionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function MotionWrapper({
  children,
  className,
}: MotionWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
