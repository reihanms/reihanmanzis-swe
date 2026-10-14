import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

import CustomCursor from "@/components/CustomCursor";
import MotionWrapper from "@/components/MotionWrapper";
import Footer from "@/components/sections/Footer";
import DeviceShowcase from "@/components/devices/DeviceShowcase";
import { BrowserFrame, PhoneFrame } from "@/components/devices/DeviceFrames";
import { getProject, projects } from "@/lib/projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} | Reihan Ms.`,
    description: `${project.tagline}. ${project.role}.`,
  };
}

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl font-bold md:text-4xl">{children}</h2>
);

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  const facts = [
    { label: "Role", value: project.role },
    { label: "Context", value: project.context },
    { label: "Timeline", value: project.period },
    { label: "Type", value: `${project.kind} project` },
  ];

  return (
    <main className="bg-[#0b151a]">
      <CustomCursor />

      <section className="container mx-auto flex flex-col gap-10 pb-16 pt-28 md:pt-36">
        <Link
          href="/#work"
          className="inline-flex w-fit items-center gap-2 text-sm text-white/60 transition-colors hover:text-primary-100"
        >
          <ArrowLeft size={16} /> All work
        </Link>

        <MotionWrapper className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-primary-100 md:text-sm">
              {project.context} · {project.period}
            </p>
            <h1 className="mt-4 text-5xl font-bold md:text-8xl">
              {project.title}
            </h1>
            <p className="mt-4 text-xl text-white/70 md:text-2xl">
              {project.tagline}
            </p>
          </div>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-primary-200 px-6 py-3 text-sm font-bold text-primary-500 transition-colors hover:bg-primary-100"
            >
              Visit live site <ArrowUpRight size={16} />
            </a>
          )}
        </MotionWrapper>

        {project.credit && (
          <MotionWrapper className="rounded-2xl border border-primary-300/40 bg-primary-500/40 p-5 text-white/80 md:p-6">
            <span className="font-bold text-primary-100">Credit where due. </span>
            {project.credit}
          </MotionWrapper>
        )}

        <div className="relative">
          <div className="pointer-events-none absolute inset-x-[10%] top-[10%] bottom-0 rounded-full bg-primary-300/20 blur-[120px]" />
          <DeviceShowcase
            title={project.title}
            desktop={project.devices.desktop}
            tablet={project.devices.tablet}
            mobile={project.devices.mobile}
            priority
          />
        </div>

        <MotionWrapper className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-primary-400/30 bg-primary-400/30 lg:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label} className="bg-[#0b151a] p-5 md:p-6">
              <p className="text-xs uppercase tracking-widest text-white/50">
                {fact.label}
              </p>
              <p className="mt-2 font-sans text-white">{fact.value}</p>
            </div>
          ))}
        </MotionWrapper>

        {project.highlights && (
          <MotionWrapper className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {project.highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-primary-400/30 bg-primary-500/30 p-5 md:p-6"
              >
                <p className="font-sans text-3xl font-bold text-primary-100 md:text-4xl">
                  {item.value}
                </p>
                <p className="mt-2 text-sm text-white/60">{item.label}</p>
              </div>
            ))}
          </MotionWrapper>
        )}

        <div className="grid gap-10 py-6 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16">
          <MotionWrapper className="flex flex-col gap-4">
            <SectionTitle>Overview</SectionTitle>
            <p className="leading-relaxed text-white/80">{project.summary}</p>
            <div className="flex flex-wrap gap-2 pt-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-primary-300/40 px-3 py-1 text-xs text-white/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </MotionWrapper>
          <MotionWrapper className="flex flex-col gap-4">
            <SectionTitle>What I did</SectionTitle>
            <ol className="flex flex-col">
              {project.contributions.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-5 border-b border-primary-400/30 py-4 last:border-none"
                >
                  <span className="pt-0.5 text-sm text-primary-100">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="leading-relaxed text-white/80">{item}</span>
                </li>
              ))}
            </ol>
          </MotionWrapper>
        </div>

        {project.videos && (
          <div className="flex flex-col gap-6">
            <SectionTitle>In action</SectionTitle>
            <div className="grid gap-6 lg:grid-cols-2">
              {project.videos.map((video) => (
                <MotionWrapper key={video.src} className="flex flex-col gap-3">
                  <BrowserFrame url={video.url}>
                    <video
                      src={video.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="block aspect-[1914/936] w-full bg-black object-cover"
                    />
                  </BrowserFrame>
                  <p className="text-sm text-white/70">
                    <span className="font-bold text-white">{video.title}.</span>{" "}
                    {video.caption}
                  </p>
                </MotionWrapper>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col gap-6">
          <SectionTitle>Gallery</SectionTitle>
          <div className="grid gap-6 md:grid-cols-2">
            {project.gallery.map((image) => (
              <MotionWrapper key={image.alt}>
                <BrowserFrame url={project.url}>
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 768px) 45vw, 90vw"
                      placeholder="blur"
                      className="object-cover object-top"
                    />
                  </div>
                </BrowserFrame>
              </MotionWrapper>
            ))}
          </div>

          {project.mobileGallery && (
            <div className="-mx-5 flex gap-6 overflow-x-auto px-5 pb-4 pt-6 scrollbar-hide md:mx-0 md:grid md:grid-cols-4 md:overflow-visible md:px-0">
              {project.mobileGallery.map((image) => (
                <MotionWrapper
                  key={image.alt}
                  className="w-44 shrink-0 md:w-auto"
                >
                  <PhoneFrame>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 768px) 18vw, 45vw"
                      placeholder="blur"
                      className="object-cover object-top"
                    />
                  </PhoneFrame>
                </MotionWrapper>
              ))}
            </div>
          )}
        </div>

        <Link
          href={`/work/${next.slug}`}
          className="group mt-10 flex items-center justify-between gap-6 rounded-3xl border border-primary-400/30 bg-primary-500/30 p-6 transition-colors hover:border-primary-200/60 hover:bg-primary-500/50 md:p-10"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/50">
              Next project
            </p>
            <p className="mt-2 text-3xl font-bold md:text-5xl">{next.title}</p>
            <p className="mt-1 text-white/60">{next.tagline}</p>
          </div>
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/20 transition-all group-hover:border-primary-100 group-hover:bg-primary-100 group-hover:text-primary-500">
            <ArrowRight size={22} />
          </span>
        </Link>
      </section>

      <Footer />
    </main>
  );
}
