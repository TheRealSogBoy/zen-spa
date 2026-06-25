"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { CORPORATE_WHATSAPP_HREF } from "./corporativo-data";

export function CorporativoHero() {
  return (
    <section className="relative isolate z-20 w-full overflow-hidden h-dvh min-h-[600px] bg-zen-wine">
      {/* Background Image — full cover */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/corporativo/hero-corporativo.webp"
          alt="Zen Spa Bienestar Corporativo B2B"
          fill
          className="object-cover object-center opacity-75"
          priority
          sizes="100vw"
        />
        {/* Dark elegant overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-zen-wine/90 via-zen-wine/50 to-black/35 z-10" />
      </div>

      {/* Content — centered vertically and horizontally */}
      <div className="relative z-20 h-full flex items-center justify-center px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight tracking-tight drop-shadow-lg mb-6"
          >
            Transforme el estrés de su equipo en{" "}
            <span className="italic text-zen-pink">productividad</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-sm sm:text-base md:text-lg text-zen-beige/90 leading-relaxed max-w-2xl mb-10 font-light"
          >
            En Zen Spa no vendemos &ldquo;masajes&rdquo;; ofrecemos soluciones
            estratégicas de bienestar corporativo diseñadas para resolver sus
            mayores desafíos de negocio y convertir el cuidado de sus empleados
            en la inversión más rentable para su empresa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href={CORPORATE_WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-zen-pink hover:bg-white text-zen-wine hover:text-zen-wine px-8 py-4 font-sans text-xs tracking-[0.2em] uppercase transition-all duration-300 shadow-xl font-semibold rounded-sm"
            >
              Cotizar Solución Corporativa
            </a>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="h-px w-24 bg-zen-pink shadow-[0_0_12px_rgba(229,152,168,0.7)] mt-12"
          />
        </div>
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
            fill="#efdbd5" /* Arena Orgánica (#efdbd5) */
          />
        </svg>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-16 md:bottom-20 left-1/2 z-20 -translate-x-1/2 hidden sm:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-5 h-8 border border-white/30 rounded-full flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
