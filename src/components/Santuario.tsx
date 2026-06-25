"use client";

import { motion } from "motion/react";

export function Santuario() {
  return (
    <section className="relative py-24 md:py-32 bg-white px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story & Copywriting */}
          <div className="lg:col-span-6 space-y-6 text-zen-wine">
            <span className="text-zen-brown text-xs font-bold tracking-[0.3em] uppercase mb-2 block">
              El Refugio
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
              Nuestro <span className="italic text-zen-brown">Santuario</span>
            </h2>
            <div className="w-12 h-px bg-zen-brown/30" />
            
            <p className="font-sans text-sm md:text-base leading-relaxed text-zen-wine/80 font-light text-justify">
              Cruza el umbral de nuestra puerta y desconéctate del ruido exterior.
              Ubicados en la peatonal del Museo Rayo, en la mítica Calle de los
              Poetas, hemos creado un santuario insonorizado donde el aroma a
              lavanda, la luz tenue de las velas y la calidez de nuestras
              terapeutas te guiarán de regreso a tu bienestar esencial.
            </p>
          </div>

          {/* Right Column: Video Loop Player */}
          <div className="lg:col-span-6 relative aspect-video w-full overflow-hidden rounded-3xl shadow-[0_20px_60px_-15px_rgba(63,12,8,0.25)] ring-1 ring-zen-brown/10 after:absolute after:inset-0 after:bg-zen-wine/5 after:mix-blend-multiply after:pointer-events-none">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
            >
              <source src="/videos/video-zen-spa-local.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
