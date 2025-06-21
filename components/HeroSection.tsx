import React from "react";
import Image from "next/image";
import SkillsCarousel from "./SkillsCarousel";
import fs from "fs";
import path from "path";
import { ChevronLeft, ChevronRight } from "lucide-react";
import GlowingCircle from "./GlowingCircle";
import ScrollDownButton from "./ScrollDownButton";

const HeroSection = () => {
  const images = [
    {
      src: "/images/obj-1.png",
      alt: "Abstract object 1",
      className: "w-52 h-52 top-[20%] left-[35%] opacity-70",
    },
    {
      src: "/images/obj-2.png",
      alt: "Abstract object 2",
      className: "w-20 h-20 bottom-[20%] left-[40%] rotate-12 opacity-70",
    },
    {
      src: "/images/obj-3.png",
      alt: "Abstract object 3",
      className: "w-20 h-20 bottom-[20%] left-[45%] rotate-[-20deg] opacity-70",
    },
    {
      src: "/images/obj-1.png",
      alt: "Abstract object 4",
      className: "w-52 h-52 bottom-[20%] right-[35%] rotate-[90deg] opacity-70",
    },
    {
      src: "/images/obj-5.png",
      alt: "Abstract object 5",
      className: "w-70 h-70 opacity-70",
    },
  ];

  const iconsDir = path.join(process.cwd(), "public/icons");
  const iconFiles = fs
    .readdirSync(iconsDir)
    .filter(
      (file) =>
        !file.startsWith("obj-") &&
        (file.endsWith(".svg") || file.endsWith(".png"))
    );
  const skills = iconFiles.map((file) => ({
    src: `/icons/${file}`,
    alt: file.replace(/\.(svg|png)$/, ""),
  }));

  return (
    <section id="hero" className="relative h-[100dvh] w-full bg-[#0b1412]">
      <GlowingCircle
        className="top-[10%] right-[20%]"
        animation="move-horizontal 8s ease-in-out infinite"
      />
      <GlowingCircle
        className="bottom-[10%] left-[10%] rotate-180"
        animation="move-vertical 8s ease-in-out infinite"
      />
      <div className="absolute inset-0 flex items-center justify-center z-0">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            width={200}
            height={200}
            className={`absolute ${image.className} object-contain`}
          />
        ))}
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-[10rem] font-bold font-mono tracking-widest">
          REIHAN MS.
        </h1>
        <p className="mt-4 text-2xl font-mono">
          SOFTWARE ENGINEER, FRONT END & BACK END DEVELOPER.
        </p>
        <div className="w-full mt-20">
          <div className="max-w-screen-md mx-auto flex items-center">
            <ChevronLeft />
            <SkillsCarousel skills={skills} />
            <ChevronRight />
          </div>
        </div>
      </div>
      <ScrollDownButton />
    </section>
  );
};

export default HeroSection;

