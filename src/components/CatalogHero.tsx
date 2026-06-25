"use client";

import { motion } from "motion/react";
import Image from "next/image";

interface CatalogHeroProps {
  /** Main hero line; omit when not needed. */
  title?: string;
  /** Small uppercase line above the title; omit when not needed. */
  subtitle?: string;
  backgroundImage: string;
  /** Image alt when `title` / `subtitle` are omitted. */
  imageAlt?: string;
  /** Stronger dark overlay for busy or bright hero photos. */
  overlayDepth?: "default" | "deep";
}

export function CatalogHero({
  title,
  subtitle,
  backgroundImage,
  imageAlt,
  overlayDepth = "default",
}: CatalogHeroProps) {
  const overlayClassName =
    overlayDepth === "deep"
      ? "bg-linear-to-t from-black/55 via-black/28 to-black/18"
      : "bg-linear-to-t from-black/30 via-transparent to-transparent";

  const imgAlt =
    title?.trim() ||
    imageAlt?.trim() ||
    subtitle?.trim() ||
    "Zen Spa";

  return (
    <section className="relative isolate z-20 w-full overflow-hidden h-dvh min-h-[600px] bg-zen-wine">
      {/* Background Image — full cover */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={imgAlt}
          fill
          className="object-cover object-center opacity-80"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      {/* Overlay gradient — readability vs. photo visibility */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 z-10 ${overlayClassName}`}
      />

      {/* Content — centered vertically and horizontally */}
      <div className="relative z-20 h-full flex items-center justify-center">
        <motion.div
          className="text-center px-6 md:px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {subtitle?.trim() ? (
            <h2 className="text-[10px] sm:text-xs md:text-sm tracking-[0.25em] md:tracking-[0.35em] uppercase text-zen-beige/80 mb-5 md:mb-6 font-sans font-medium">
              {subtitle}
            </h2>
          ) : null}
          {title?.trim() ? (
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white leading-none tracking-tight drop-shadow-2xl">
              {title}
            </h1>
          ) : null}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="h-px w-20 md:w-28 mx-auto bg-zen-pink shadow-[0_0_12px_rgba(229,152,168,0.7)] mt-8 md:mt-10"
          />
        </motion.div>
      </div>

      {/* Bottom Wave/Cap Decorative Element */}
      <div className="absolute bottom-0 left-0 w-full z-30 pointer-events-none translate-y-[1px]">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L1440 120L1440 0C1440 0 1140 120 720 120C300 120 0 0 0 0L0 120Z"
            fill="#efdbd5" /* matches zen-beige */
          />
        </svg>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-16 md:bottom-20 left-1/2 z-20 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-5 h-8 border border-white/40 rounded-full flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

