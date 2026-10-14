"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Cloud,
  CreditCard,
  Layers,
  LayoutTemplate,
  PenTool,
  ShieldCheck,
} from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

interface Expertise {
  icon: React.ReactNode;
  title: string;
  description: string;
  proof: string;
  tools: string[];
  className?: string;
}

const expertise: Expertise[] = [
  {
    icon: <LayoutTemplate size={22} />,
    title: "Front-end engineering",
    description:
      "Fast, accessible interfaces with the Next.js App Router, server rendering and careful caching, plus motion where it actually helps.",
    proof: "GoTypical's marketing site and app · Synergy's super app",
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    className: "md:col-span-2",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Auth & security",
    description:
      "Sign-in that is secure without getting in the way: OAuth, Passkey, credentials and QR-code login.",
    proof: "Synergy · thesis on Next.js security against the OWASP Top 10",
    tools: ["OAuth", "Passkey", "OWASP"],
  },
  {
    icon: <Layers size={22} />,
    title: "Back end & data",
    description:
      "APIs, server actions and data models that stay clean as the product grows.",
    proof: "GoTypical · Folkatech client projects · Telkomsel I-Recruitment",
    tools: ["NestJS", "Node.js", "Prisma", "PostgreSQL", "MySQL"],
  },
  {
    icon: <CreditCard size={22} />,
    title: "Payments, search & realtime",
    description:
      "The product plumbing: subscriptions with webhooks that run exactly once, instant search, and live messaging.",
    proof: "GoTypical Premium, ⌘K search and direct messages",
    tools: ["Stripe", "Algolia", "Pusher", "Supabase"],
  },
  {
    icon: <Cloud size={22} />,
    title: "Cloud & DevOps",
    description:
      "Versioned releases, backups with a tested restore path, bot protection and error monitoring.",
    proof: "GoTypical on Vercel · CI/CD and containers at Synergy",
    tools: ["Vercel", "Docker", "CI/CD", "Sentry"],
  },
  {
    icon: <PenTool size={22} />,
    title: "Product & UI design",
    description:
      "From a client's idea to a design system and a shipped product, with AI tools speeding up the loop.",
    proof: "GoTypical's design system · Claude Code and Cursor every day",
    tools: ["Design systems", "UI design", "Claude Code", "Cursor"],
    className: "md:col-span-3",
  },
];

export default function ExpertiseSection() {
  return (
    <section
      id="expertise"
      className="container mx-auto flex flex-col gap-12 py-24"
    >
      <SectionHeading
        eyebrow="Expertise"
        title="What I bring to a team"
        description="The work I do most, and where you can see it."
      />

      <div className="grid gap-4 md:grid-cols-3">
        {expertise.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: (index % 3) * 0.08,
            }}
            className={cn(
              "group relative flex flex-col gap-5 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-primary-200/40 md:p-8",
              item.className
            )}
          >
            <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-primary-300/0 blur-3xl transition-colors duration-500 group-hover:bg-primary-300/20" />
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary-200/30 bg-primary-500/60 text-primary-100">
              {item.icon}
            </span>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold md:text-2xl">
                {item.title}
              </h3>
              <p className="leading-relaxed text-white/60">
                {item.description}
              </p>
            </div>
            <p className="font-mono text-xs leading-relaxed text-primary-100/80">
              ↳ {item.proof}
            </p>
            <div className="mt-auto flex flex-wrap gap-2">
              {item.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
