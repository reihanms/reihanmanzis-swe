"use client";

import React, { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { LaptopFrame, PhoneFrame, TabletFrame } from "./DeviceFrames";

interface DeviceShowcaseProps {
  title: string;
  desktop: StaticImageData;
  tablet?: StaticImageData;
  mobile?: StaticImageData;
  priority?: boolean;
  // Larger tilt and parallax for hero placements, subtler for cards.
  intensity?: "hero" | "card";
  className?: string;
}

const Screen = ({
  src,
  alt,
  sizes,
  priority,
}: {
  src: StaticImageData;
  alt: string;
  sizes: string;
  priority?: boolean;
}) => (
  <Image
    src={src}
    alt={alt}
    fill
    sizes={sizes}
    priority={priority}
    placeholder="blur"
    className="object-cover object-top"
  />
);

export default function DeviceShowcase({
  title,
  desktop,
  tablet,
  mobile,
  priority,
  intensity = "hero",
  className,
}: DeviceShowcaseProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const isHero = intensity === "hero";
  const tilt = isHero ? 10 : 6;

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const spring = { stiffness: 120, damping: 18, mass: 0.6 };
  const rotateY = useSpring(
    useTransform(pointerX, [-0.5, 0.5], [-8 - tilt / 2, -8 + tilt / 2]),
    spring
  );
  const rotateX = useSpring(
    useTransform(pointerY, [-0.5, 0.5], [6 + tilt / 2, 6 - tilt / 2]),
    spring
  );

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const travel = isHero ? 70 : 30;
  const phoneY = useTransform(scrollYProgress, [0, 1], [travel, -travel]);
  const tabletY = useTransform(
    scrollYProgress,
    [0, 1],
    [travel / 2, -travel / 2]
  );

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  const hasCompanions = Boolean(tablet || mobile);

  return (
    <div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      className={cn(
        "relative w-full [perspective:1800px]",
        isHero && mobile && "pb-[7%]",
        className
      )}
    >
      <motion.div
        style={
          reduceMotion
            ? { transformStyle: "preserve-3d" }
            : { rotateX, rotateY, transformStyle: "preserve-3d" }
        }
        className={cn(
          "relative w-full",
          hasCompanions ? "aspect-[16/11]" : "aspect-[16/11.4]"
        )}
      >
        <div
          className={cn(
            "absolute",
            hasCompanions
              ? "left-[12%] top-[4%] w-[76%]"
              : "left-[7%] top-[6%] w-[86%]"
          )}
          style={{ transform: "translateZ(0px)" }}
        >
          <LaptopFrame>
            <Screen
              src={desktop}
              alt={`${title} on desktop`}
              sizes="(min-width: 1024px) 60vw, 90vw"
              priority={priority}
            />
          </LaptopFrame>
        </div>

        {tablet && (
          <motion.div
            className="absolute bottom-[2%] left-0 w-[23%]"
            style={{
              y: reduceMotion ? 0 : tabletY,
              z: 60,
            }}
          >
            <TabletFrame>
              <Screen
                src={tablet}
                alt={`${title} on tablet`}
                sizes="(min-width: 1024px) 18vw, 25vw"
              />
            </TabletFrame>
          </motion.div>
        )}

        {mobile && (
          <motion.div
            className="absolute bottom-0 right-[3%] w-[16%]"
            style={{
              y: reduceMotion ? 0 : phoneY,
              z: 120,
            }}
          >
            <PhoneFrame>
              <Screen
                src={mobile}
                alt={`${title} on mobile`}
                sizes="(min-width: 1024px) 12vw, 20vw"
              />
            </PhoneFrame>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
