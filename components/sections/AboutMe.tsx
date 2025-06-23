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
                I&apos;ve built products for companies and businesses ranging
                from marketing websites, internal applications to complex
                solutions and enterprise apps with focus on fast, elegant and
                accessible user experiences.
              </p>

              <p className="text-white text-base md:text-lg text-center md:text-left">
                My journey has led me to my current role as a Software Engineer
                at <strong>Synergy Financial Advisers</strong>, where I operate
                in a dynamic international setting across Singapore and
                Indonesia. Here, I&apos;m engineering a core super-app with
                Next.js, focusing on critical aspects like performance, and
                robust, multi-factor authentication (Passkey, OAuth) to deliver
                a secure and seamless experience.
              </p>

              <p className="text-white text-base md:text-lg text-center md:text-left">
                This role builds upon my full-stack foundation from{" "}
                <strong>FolkaTech</strong>, where I architected end-to-end
                solutions with Nest.js, PostgreSQL, and Docker, and my creative
                frontend work at <strong>Telkom Indonesia</strong>, where I
                crafted highly interactive interfaces using Framer Motion within
                an Agile environment.
              </p>

              <p className="text-white text-base md:text-lg text-center md:text-left">
                Driven by a desire for continuous growth, I am now seeking to
                apply my skills in a challenging. I am eager to collaborate with
                a global team to build products that not only solve complex
                problems but also deliver exceptional user experiences.
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

