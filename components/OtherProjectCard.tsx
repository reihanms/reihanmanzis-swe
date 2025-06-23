import Image, { StaticImageData } from "next/image";
import React from "react";

interface OtherProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: StaticImageData | string;
}

const OtherProjectCard: React.FC<OtherProjectCardProps> = ({
  title,
  description,
  technologies,
  image,
}) => {
  return (
    <div className="border border-primary-500 rounded-lg p-6 flex flex-col gap-4 hover:bg-primary-500/20 transition-all duration-300 ease-in-out transform hover:scale-105 cursor-crosshair">
      <div className="relative w-full h-48 mb-4">
        <Image
          src={image}
          alt={`${title} thumbnail`}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <h3 className="text-2xl font-bold font-sans">{title}</h3>
      <p className="text-white font-mono flex-grow">{description}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-primary-500 text-primary-100 px-3 py-1 rounded-full text-sm font-mono"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default OtherProjectCard;

