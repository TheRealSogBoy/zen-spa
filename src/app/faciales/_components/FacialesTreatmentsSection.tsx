"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  FACIALES_TREATMENTS_BG_SRC,
  FACIALES_WHATSAPP_HREF,
} from "./faciales-constants";
import { FACIAL_TREATMENTS } from "./faciales-data";
import { FacialTreatmentCard } from "./FacialTreatmentCard";

export function FacialesTreatmentsSection() {
  return (
    <section className="relative isolate overflow-hidden py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <Image
        src={FACIALES_TREATMENTS_BG_SRC}
        alt=""
        fill
        className="object-cover object-center blur-[2px]"
        sizes="100vw"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/90 via-zen-beige/85 to-white/90"
        aria-hidden
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-zen-brown text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
            Nuestros Protocolos
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-zen-wine">
            Tratamientos{" "}
            <span className="italic text-zen-brown">Faciales</span>
          </h2>
        </motion.div>

        <div className="space-y-24 md:space-y-40">
          {FACIAL_TREATMENTS.map((treatment, index) => (
            <FacialTreatmentCard
              key={treatment.title}
              treatment={treatment}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 md:mt-32 pt-16 md:pt-24 border-t border-zen-wine/15 text-center max-w-3xl mx-auto"
        >
          <span className="text-zen-pink text-xs font-bold tracking-[0.3em] uppercase mb-6 block">
            El Bienestar Te Espera
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-zen-wine mb-4 leading-tight">
            Agenda tu cita
          </h2>
          <p className="font-serif italic text-zen-brown text-xl mb-8">
            {"\u201C"}El bienestar es una rutina, no un evento{"\u201D"}
          </p>
          <p className="font-sans text-zen-wine/80 leading-relaxed mb-10 max-w-xl mx-auto">
            Reserva tu espacio y regálate el cuidado que mereces. Nuestras
            especialistas certificadas están listas para diseñar el protocolo
            ideal para tu piel.
          </p>

          <motion.a
            href={FACIALES_WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center gap-3 bg-zen-wine text-zen-beige px-10 py-4 font-sans text-xs tracking-[0.2em] uppercase hover:bg-zen-brown transition-colors duration-300 shadow-xl"
          >
            Reservar por WhatsApp
          </motion.a>

          <p className="mt-6 text-zen-wine/50 text-xs tracking-widest">
            315 688 1765 · @zenspa.wc
          </p>
        </motion.div>
      </div>
    </section>
  );
}
