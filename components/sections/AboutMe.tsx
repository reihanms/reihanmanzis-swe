"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Portrait from "@/assets/images/reihan.jpg";
import SectionHeading from "@/components/ui/SectionHeading";

const facts = [
  {
    label: "Education",
    value:
      "B.CompSc, Universitas Pendidikan Indonesia. GPA 3.90/4.00, cum laude",
  },
  { label: "Languages", value: "English (fluent), Indonesian (native)" },
  { label: "Time zone", value: "UTC+7, used to working with Singapore" },
  { label: "Open to", value: "Remote full-time roles and freelance projects" },
];

export default function AboutMe() {
  return (
    <section id="about" className="container mx-auto py-24">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        <motion.figure
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-primary-300/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
            <Image
              src={Portrait}
              alt="Reihan Manzis on a rooftop at sunset"
              placeholder="blur"
              sizes="(min-width: 1024px) 28rem, 90vw"
              className="aspect-[4/5] h-auto w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
            <figcaption className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl border border-white/15 bg-black/40 px-4 py-3 text-sm backdrop-blur-md">
              <span className="font-medium">Reihan Manzis</span>
              <span className="text-white/70">Indonesia · UTC+7</span>
            </figcaption>
          </div>
        </motion.figure>

        <div className="flex flex-col gap-8">
          <SectionHeading eyebrow="About" title="A bit about me" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col gap-5 text-lg leading-relaxed text-white/70"
          >
            <p>
              I&apos;ve built products for companies and businesses, from
              marketing websites and internal tools to complex enterprise apps,
              always with a focus on fast, elegant and accessible user
              experiences.
            </p>
            <p>
              Today I&apos;m a Software Engineer II at{" "}
              <strong className="text-white">Synergy Financial Advisers</strong>
              , a Singapore company, working remotely on its Singapore team. I
              build its core super app in Next.js, with a focus on performance
              and secure sign-in (Passkey, OAuth). On the side, I freelance on
              Upwork as a Top Rated engineer, where I lead the build of{" "}
              <strong className="text-white">GoTypical</strong> for a client.
            </p>
            <p>
              That builds on my full-stack foundation from{" "}
              <strong className="text-white">FolkaTech</strong>, where I built
              end-to-end solutions with Nest.js, PostgreSQL and Docker, and my
              front-end work at{" "}
              <strong className="text-white">Telkom Indonesia</strong>, where I
              crafted highly interactive interfaces with Framer Motion in an
              Agile team.
            </p>
            <p>
              Next, I want to work with a global team on products that solve
              hard problems and still feel great to use.
            </p>
          </motion.div>

          <dl className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
            {facts.map((fact) => (
              <div key={fact.label} className="bg-ink p-5">
                <dt className="font-mono text-xs uppercase tracking-[0.2em] text-white/45">
                  {fact.label}
                </dt>
                <dd className="mt-2 text-white/85">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
