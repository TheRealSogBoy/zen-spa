"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";

export function Hero() {
  const [videoSrc, setVideoSrc] = useState<string>("");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    setVideoSrc(mediaQuery.matches ? "/videos/zen-video-hero-horizontal.mp4" : "/videos/zen-video-hero-vertical.mp4");

    const handler = (e: MediaQueryListEvent) => {
      setVideoSrc(e.matches ? "/videos/zen-video-hero-horizontal.mp4" : "/videos/zen-video-hero-vertical.mp4");
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-zen-wine">
      {/* Background Video/Image Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Fallback Image */}
        <Image
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop"
          alt="Spa Atmosphere"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
          referrerPolicy="no-referrer"
        />

        {/* HTML5 Responsive Video */}
        {videoSrc && (
          <video
            key={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover opacity-80 transition-opacity duration-1000"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}

        <div className="absolute inset-0 bg-black/45 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 min-h-[100svh] flex flex-col items-center justify-center text-center px-4 md:px-6 pt-24 md:pt-32 pb-32 md:pb-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-5xl mx-auto px-4 sm:px-6"
        >
          <h1 className="text-[1.75rem] sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-zen-beige tracking-wide md:tracking-widest leading-snug md:leading-tight mb-4 md:mb-8">
            Donde el tiempo se detiene
            <span className="block italic font-light mt-1 md:mt-4 text-[0.85em] md:text-inherit">
              para que tú vuelvas a nacer
            </span>
          </h1>
          <p className="text-[10px] sm:text-xs md:text-lg lg:text-xl font-sans text-zen-beige/80 tracking-[0.15em] md:tracking-[0.2em] uppercase leading-relaxed max-w-2xl mx-auto">
            Ciencia, técnica y calidez en el corazón de Roldanillo
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 md:gap-4"
        >
          <span className="text-zen-beige/60 text-[10px] md:text-xs tracking-widest uppercase">Descubre el Santuario</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-zen-beige/60 to-transparent" />
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
    </section>
  );
}
