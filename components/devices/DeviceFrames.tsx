import React from "react";
import { cn } from "@/lib/utils";

interface FrameProps {
  children: React.ReactNode;
  className?: string;
}

// All frames size themselves from their width, so a parent only sets the width.

export function LaptopFrame({ children, className }: FrameProps) {
  return (
    <div className={cn("relative", className)}>
      <div className="relative rounded-[2.2%/3.4%] bg-gradient-to-b from-zinc-700 to-zinc-900 p-[1.4%] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] ring-1 ring-white/10">
        <div className="absolute left-1/2 top-[0.6%] h-[1.2%] w-[1.2%] -translate-x-1/2 rounded-full bg-zinc-950 ring-1 ring-white/5" />
        <div className="relative aspect-[16/10] overflow-hidden rounded-[0.6%] bg-black">
          {children}
        </div>
      </div>
      <div className="relative mx-[-7%] h-0 pb-[3.2%]">
        <div className="absolute inset-0 rounded-b-[40%_100%] bg-gradient-to-b from-zinc-500 via-zinc-700 to-zinc-900 ring-1 ring-white/10" />
        <div className="absolute left-1/2 top-0 h-[40%] w-[14%] -translate-x-1/2 rounded-b-md bg-zinc-800" />
      </div>
    </div>
  );
}

export function TabletFrame({ children, className }: FrameProps) {
  return (
    <div
      className={cn(
        "relative rounded-[7%/5%] bg-gradient-to-b from-zinc-700 to-zinc-900 p-[3.2%] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.85)] ring-1 ring-white/10",
        className
      )}
    >
      <div className="relative aspect-[834/1194] overflow-hidden rounded-[4%/2.8%] bg-black">
        {children}
      </div>
    </div>
  );
}

export function PhoneFrame({ children, className }: FrameProps) {
  return (
    <div
      className={cn(
        "relative rounded-[16%/7.5%] bg-gradient-to-b from-zinc-600 to-zinc-900 p-[3.6%] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.9)] ring-1 ring-white/15",
        className
      )}
    >
      <div className="relative aspect-[390/844] overflow-hidden rounded-[13%/6%] bg-black">
        {children}
        <div className="absolute left-1/2 top-[1.8%] h-[3.6%] w-[30%] -translate-x-1/2 rounded-full bg-black" />
      </div>
    </div>
  );
}

interface BrowserFrameProps extends FrameProps {
  url?: string;
}

export function BrowserFrame({ children, className, url }: BrowserFrameProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl bg-zinc-900 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.8)] ring-1 ring-white/10",
        className
      )}
    >
      <div className="flex items-center gap-3 border-b border-white/10 px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        {url && (
          <div className="mx-auto max-w-xs flex-1 truncate rounded-md bg-white/5 px-3 py-1 text-center text-xs text-zinc-400">
            {url}
          </div>
        )}
        {url && <div className="w-[42px]" />}
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
