"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { reveal } from "./constants";
import type { MethodCardData } from "./methods-data";

export function BronceoMethodCard({
  image,
  alt,
  tag,
  title,
  description,
  durationLabel,
  motionDelay = 0,
}: MethodCardData) {
  return (
    <motion.div
      {...reveal.fadeUp(motionDelay)}
      className="relative rounded-sm overflow-hidden bg-zen-beige group h-full cursor-none"
    >
      <Image
        src={image}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-1000 group-hover:scale-105"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-linear-to-t from-zen-wine/95 via-zen-wine/30 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />

      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <div className="transform transition-transform duration-500 translate-y-0 md:translate-y-6 md:group-hover:translate-y-0">
          <span className="text-zen-pink text-xs font-bold tracking-[0.3em] uppercase mb-3 block opacity-90 transition-opacity duration-500 group-hover:opacity-100">
            {tag}
          </span>
          <h3 className="text-3xl md:text-4xl font-serif text-white mb-4">{title}</h3>
          <div className="opacity-100 md:opacity-0 md:max-h-0 md:overflow-hidden md:group-hover:opacity-100 md:group-hover:max-h-112 transition-all duration-500">
            <p className="font-sans text-sm md:text-base text-zen-beige/90 leading-relaxed mb-6 pt-2">
              {description}
            </p>
            <div className="inline-flex items-center text-xs tracking-widest uppercase border border-zen-pink/30 rounded-full px-4 py-1.5 backdrop-blur-sm text-white">
              {durationLabel}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
