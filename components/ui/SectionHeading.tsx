"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className={cn("flex max-w-3xl flex-col gap-4", className)}
    >
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary-100">
        {eyebrow}
      </p>
      <h2 className="text-4xl font-semibold md:text-6xl">{title}</h2>
      {description && (
        <p className="text-base leading-relaxed text-white/60 md:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
