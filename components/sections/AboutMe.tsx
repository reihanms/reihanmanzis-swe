"use client";

import Image from "next/image";
import React from "react";
import ProfileAbstract from "@/assets/images/about-me.png";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section id="about">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
        className="min-h-[90dvh] bg-primary-400 mt-20 py-16 md:py-0"
      >
        <div className="container flex h-full items-center">
          <div className="flex w-full flex-col md:flex-row gap-8">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 flex flex-col gap-4 justify-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold font-sans max-w-md text-center md:text-left">
                Over the years,
              </h1>
              <p className="text-white text-base md:text-lg text-center md:text-left">
                I&apos;ve built products for companies and businesses, from
                marketing websites and internal tools to complex enterprise
                apps, always with a focus on fast, elegant and accessible user
                experiences.
              </p>

              <p className="text-white text-base md:text-lg text-center md:text-left">
                Today I&apos;m a Software Engineer II at{" "}
                <strong>Synergy Financial Advisers</strong>, a Singapore
                company, working remotely on its Singapore team. I build its core
                super app in Next.js, with a focus on performance and secure
                sign-in (Passkey, OAuth). On the side, I freelance on Upwork as
                a Top Rated engineer, where I lead the build of{" "}
                <strong>GoTypical</strong> for a client.
              </p>

              <p className="text-white text-base md:text-lg text-center md:text-left">
                That builds on my full-stack foundation from{" "}
                <strong>FolkaTech</strong>, where I architected end-to-end
                solutions with Nest.js, PostgreSQL, and Docker, and my creative
                frontend work at <strong>Telkom Indonesia</strong>, where I
                crafted highly interactive interfaces using Framer Motion within
                an Agile environment.
              </p>

              <p className="text-white text-base md:text-lg text-center md:text-left">
                Next, I want to work with a global team on products that solve
                hard problems and still feel great to use.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-full md:w-1/2"
            >
              <Image
                src={ProfileAbstract}
                alt="Profile Abstract"
                className="w-full h-auto md:h-full object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

