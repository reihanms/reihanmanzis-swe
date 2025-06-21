import { cn } from "@/lib/utils";
import React from "react";

export default function GlowingCircle({
  className,
  animation,
}: {
  className?: string;
  animation?: string;
}) {
  return (
    <div
      className={cn("absolute", className)}
      style={{ animation: animation || "8s ease-in-out infinite" }}
    >
      <div className="relative w-72 h-72">
        <div className="absolute inset-0 rounded-full bg-[#012d21]/30 blur-[120px] shadow-[0_0_40px_#96ee89]"></div>
        <div className="absolute inset-12 rounded-full bg-[#08542f]/40 blur-[90px] shadow-[0_0_40px_#96ee89]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-gradient-to-bl from-[#012d21] to-[#96ee89] shadow-[0_0_40px_#96ee89]"></div>
      </div>
    </div>
  );
}

