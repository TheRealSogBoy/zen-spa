"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { EXPERIENCIAS_RITUALS_BG_IMAGE } from "./constants";
import { RITUAL_CARDS } from "./rituals-data";
import { ExperienciasRitualCard } from "./ExperienciasRitualCard";

export function ExperienciasRitualsSection() {
  return (
    <section className="relative isolate overflow-hidden py-16 md:py-24">
      <Image
        src={EXPERIENCIAS_RITUALS_BG_IMAGE}
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
        aria-hidden
      />
      {/* Light scrim so headings stay readable; cards keep their own surfaces */}
      <div
        className="pointer-events-none absolute inset-0 bg-white/78"
        aria-hidden
      />

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-zen-brown uppercase tracking-widest text-sm mb-4">
            Para Esa Persona Especial
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-zen-wine mb-6">
            Bonos de Regalo (Gift Cards)
          </h2>
          <p className="max-w-xl mx-auto text-zen-brown leading-relaxed mb-6">
            Ofrece la flexibilidad de regalar bienestar. Un bono es el regalo perfecto para
            cumpleaños, fechas especiales o simplemente para sorprender a alguien. Cada bono es para
            una sola persona.
          </p>
          <p className="text-zen-gold font-serif italic max-w-xl mx-auto">
            ¡Todos nuestros paquetes y bonos de regalo incluyen una tarjeta digital personalizada!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {RITUAL_CARDS.map((ritual, idx) => (
            <ExperienciasRitualCard
              key={ritual.title}
              {...ritual}
              motionDelay={0.1 * (idx % 3)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
