import type { StaticImageData } from "next/image";

import GtDesktopHome from "@/assets/projects/gotypical/desktop-home.png";
import GtDesktopTool from "@/assets/projects/gotypical/desktop-tool.png";
import GtDesktopCompare from "@/assets/projects/gotypical/desktop-compare.png";
import GtDesktopStackAudit from "@/assets/projects/gotypical/desktop-stack-audit.png";
import GtTabletTool from "@/assets/projects/gotypical/tablet-tool.png";
import GtMobileAppFeed from "@/assets/projects/gotypical/mobile-app-feed.jpg";
import GtMobileAppAgent from "@/assets/projects/gotypical/mobile-app-decision-agent.jpg";
import GtMobileAppStack from "@/assets/projects/gotypical/mobile-app-stack.jpg";
import GtMobileAppRegret from "@/assets/projects/gotypical/mobile-app-regret-index.jpg";

import Roam1 from "@/assets/roam-1.png";
import Roam2 from "@/assets/roam-2.png";
import Roam3 from "@/assets/roam-3-full.png";
import Roam4 from "@/assets/roam-4.png";

import Ideabox1 from "@/assets/Ideabox1.png";
import Ideabox2 from "@/assets/Ideabox2.png";
import Ideabox3 from "@/assets/Ideabox3.png";
import Ideabox4 from "@/assets/Ideabox4.2.png";

import Amoeba1 from "@/assets/LandingAmoeba1.png";
import Amoeba2 from "@/assets/LandingAmoeba2.png";
import Amoeba3 from "@/assets/LandingAmoeba3.png";
import Amoeba4 from "@/assets/LandingAmoeba4.png";

import Telkomsel1 from "@/assets/telkomsel-1.png";
import TelkomselSignIn from "@/assets/Sign In.png";
import Telkomsel3 from "@/assets/telkomsel-3.png";
import Telkomsel4 from "@/assets/telkomsel-4.png";

export type ProjectKind = "Client" | "Professional" | "Personal";

export interface GalleryImage {
  src: StaticImageData;
  alt: string;
}

export interface ProjectVideo {
  src: string;
  title: string;
  caption: string;
  url: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  kind: ProjectKind;
  context: string;
  period: string;
  role: string;
  summary: string;
  credit?: string;
  liveUrl?: string;
  stack: string[];
  highlights?: { value: string; label: string }[];
  contributions: string[];
  devices: {
    desktop: StaticImageData;
    tablet?: StaticImageData;
    mobile?: StaticImageData;
  };
  url?: string;
  videos?: ProjectVideo[];
  gallery: GalleryImage[];
  mobileGallery?: GalleryImage[];
}

export const projects: Project[] = [
  {
    slug: "gotypical",
    title: "GoTypical",
    tagline: "The social decision layer for software workflows",
    kind: "Client",
    context: "Freelance client via Upwork",
    period: "2026 – Present",
    role: "Lead engineer: product, design, cloud & DevOps",
    summary:
      "GoTypical helps people find out which of their AI tools are actually worth what they pay. Members share verdicts on tools (Worth It, Situational, Not Worth It), audit their whole stack in five minutes, compare tools side by side, and ask an AI agent before they commit to a subscription.",
    credit:
      "GoTypical is my client's idea and product. The vision and the concept are theirs; my job is turning that vision into a real, working product, from the first screen to production.",
    liveUrl: "https://www.gotypical.com",
    url: "gotypical.com",
    stack: [
      "Next.js 16",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Algolia",
      "Stripe",
      "Pusher",
      "Resend",
      "Vercel",
      "Sentry",
    ],
    highlights: [
      { value: "420+", label: "Programmatic SEO pages" },
      { value: "94 → 100", label: "Technical SEO health score" },
      { value: "166 → 2", label: "Site crawl errors" },
      { value: "v1.7", label: "Versioned production releases" },
    ],
    contributions: [
      "Built the product end to end in Next.js 16: the marketing site, the logged-in app, the admin area, and more than 420 programmatic SEO pages for tools, comparisons, alternatives and use cases.",
      "Designed the interface: a dark, instrument-panel design system shared by the marketing pages and the denser app.",
      "Shipped Premium on Stripe, with webhook handling that processes every payment event exactly once and a daily job that catches anything Stripe missed.",
      "Built ⌘K search on Algolia across tools, stacks, people and guides, plus a daily reconcile job that keeps the index in sync with the database and keeps private profiles out of search.",
      "Added realtime direct messages with Pusher and transactional email with Resend.",
      "Run the cloud and DevOps side on Vercel: a two-step release pipeline with versioned tags, daily backups with a rehearsed disaster-recovery runbook, bot protection and rate limits, and error monitoring with Sentry.",
      "Took the site from a 94 to a 100 technical SEO health score and cut crawl errors from 166 to 2 in about ten weeks, tracked through weekly Ahrefs audits.",
    ],
    devices: {
      desktop: GtDesktopHome,
      tablet: GtTabletTool,
      mobile: GtMobileAppFeed,
    },
    videos: [
      {
        src: "/videos/gotypical-decision-agent.mp4",
        title: "Decision Agent",
        caption:
          "Ask an AI agent about a tool before you pay for it, grounded in community verdicts.",
        url: "gotypical.com/directory",
      },
      {
        src: "/videos/gotypical-command-palette.mp4",
        title: "⌘K command palette",
        caption: "Instant search across tools, stacks, people and guides.",
        url: "gotypical.com",
      },
    ],
    gallery: [
      { src: GtDesktopHome, alt: "GoTypical landing page" },
      { src: GtDesktopTool, alt: "GoTypical tool page with community verdict" },
      { src: GtDesktopCompare, alt: "GoTypical side-by-side tool comparison" },
      { src: GtDesktopStackAudit, alt: "GoTypical five-minute stack audit" },
    ],
    mobileGallery: [
      { src: GtMobileAppFeed, alt: "GoTypical home on mobile" },
      { src: GtMobileAppAgent, alt: "GoTypical Decision Agent on mobile" },
      { src: GtMobileAppStack, alt: "GoTypical stack page on mobile" },
      { src: GtMobileAppRegret, alt: "GoTypical Regret Index on mobile" },
    ],
  },
  {
    slug: "roam",
    title: "Roam",
    tagline: "Travel together, plan together",
    kind: "Personal",
    context: "Personal project",
    period: "2025",
    role: "Full-stack developer",
    summary:
      "A full-stack web app that connects travelers worldwide. People create, discover and join group trips on an interactive map, coordinate in real-time chat, and build trust through a review system and photo galleries for each destination.",
    liveUrl: "https://roam-travel.vercel.app/",
    url: "roam-travel.vercel.app",
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    contributions: [
      "Designed and built the whole app on my own, from the data model to the UI.",
      "Interactive map for creating, discovering and joining group trips.",
      "Real-time chat for trip coordination, built on Supabase.",
      "User reviews and destination photo galleries to build trust between travelers.",
    ],
    devices: { desktop: Roam1 },
    gallery: [
      { src: Roam1, alt: "Roam landing page" },
      { src: Roam2, alt: "Roam destination explorer with interactive map" },
      { src: Roam4, alt: "Roam dashboard with trips created and joined" },
      { src: Roam3, alt: "Roam trip page with route map and destination photos" },
    ],
  },
  {
    slug: "ideabox",
    title: "Ideabox",
    tagline: "Multitenant innovation platform for TelkomGroup",
    kind: "Professional",
    context: "Telkom Indonesia · Digital Amoeba",
    period: "2023",
    role: "Front-end developer",
    summary:
      "An internal innovation platform for TelkomGroup, built on a multitenant architecture so each division gets its own space. Employees submit ideas, discuss them in a live feed, and form teams to develop the best ones.",
    stack: ["Next.js", "React", "Laravel", "MySQL", "React Bootstrap"],
    contributions: [
      "Built the front end in Next.js and React Bootstrap on top of a Laravel API.",
      "Idea feeds, idea detail pages, likes, comments and team formation.",
      "Worked in an Agile Scrum team alongside designers, back-end developers and the project owner.",
    ],
    devices: { desktop: Ideabox1 },
    gallery: [
      { src: Ideabox1, alt: "Ideabox home feed with trending ideas" },
      { src: Ideabox2, alt: "Ideabox My Ideas page" },
      { src: Ideabox3, alt: "Ideabox events and Telkomathon page" },
      { src: Ideabox4, alt: "Ideabox sign-in page" },
    ],
  },
  {
    slug: "amoeba-landing-page",
    title: "Amoeba Landing Page",
    tagline: "A playful landing page for Telkom's innovation lab",
    kind: "Professional",
    context: "Telkom Indonesia · Digital Amoeba",
    period: "2023",
    role: "Front-end developer",
    summary:
      "A new landing page for Digital Amoeba, Telkom Indonesia's corporate innovation lab. The brief was playful and memorable, so the page leans on fluid Framer Motion animation and an interactive layout.",
    url: "digitalamoeba.id",
    stack: ["Next.js", "Framer Motion", "Laravel", "React Bootstrap"],
    contributions: [
      "Built the landing page in Next.js with Framer Motion animations throughout.",
      "Turned the design team's playful concept into a responsive, interactive page.",
    ],
    devices: { desktop: Amoeba1 },
    gallery: [
      { src: Amoeba1, alt: "Amoeba landing page hero" },
      { src: Amoeba4, alt: "Amoeba brand story section" },
      { src: Amoeba2, alt: "Amoeba logo section" },
      { src: Amoeba3, alt: "Amoeba brand colors section" },
    ],
  },
  {
    slug: "telkomsel-i-recruitment",
    title: "Telkomsel I-Recruitment",
    tagline: "Telkomsel's recruitment portal",
    kind: "Professional",
    context: "Telkomsel · IT Directorate",
    period: "2022",
    role: "Software developer",
    summary:
      "A web portal for Telkomsel's recruitment. Candidates browse and apply for open positions and track the status of every application in one place.",
    stack: ["Next.js", "NestJS", "TypeScript", "MySQL", "Material UI"],
    contributions: [
      "Built application and job-listing flows with Next.js and a NestJS API.",
      "Worked with the project manager and the IT Directorate team through the full build.",
    ],
    devices: { desktop: Telkomsel1 },
    gallery: [
      { src: Telkomsel1, alt: "I-Recruitment landing page with job search" },
      { src: Telkomsel4, alt: "I-Recruitment job detail page" },
      { src: Telkomsel3, alt: "I-Recruitment application status tracker" },
      { src: TelkomselSignIn, alt: "I-Recruitment sign-in page" },
    ],
  },
];

export const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug);
