"use client";

import { motion } from "framer-motion";
import React, { forwardRef } from "react";

interface ExpertiseCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
}

const ExpertiseCard = forwardRef<HTMLDivElement, ExpertiseCardProps>(
  ({ icon, title, subtitle, description }, ref) => {
    return (
      <div
        ref={ref}
        className="p-8 border border-white flex flex-col gap-6 h-full"
      >
        <div className="flex items-center gap-4">
          <div className="text-white">{icon}</div>
          <div>
            <h2 className="text-2xl font-bold font-mono">{title}</h2>
            <p className="text-lg text-primary-100">{subtitle}</p>
          </div>
        </div>
        <div className="text-white font-mono text-sm pl-4 border-l-2 border-primary-300/50">
          <p>&lt;h3&gt;</p>
          <p className="pl-4">{description}</p>
          <p>&lt;/h3&gt;</p>
        </div>
      </div>
    );
  }
);

ExpertiseCard.displayName = "ExpertiseCard";

export default motion(ExpertiseCard);

