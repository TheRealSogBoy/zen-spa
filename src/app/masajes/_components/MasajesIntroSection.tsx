"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function MasajesIntroSection() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-zen-beige relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[40%] h-[60%] rounded-full bg-zen-pink/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30%] h-[50%] rounded-full bg-zen-brown/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col"
        >
          <span className="text-zen-brown text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
            Pausa Consciente
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-zen-wine leading-tight mb-6">
            Paz acústica para tu{" "}
            <span className="italic text-zen-brown">recuperación</span>
          </h2>
          <div className="w-12 h-px bg-zen-brown mb-8" />
          <p className="text-lg text-zen-wine/80 font-sans leading-relaxed mb-6">
            En nuestro santuario de bienestar, el alivio físico es real. Contamos con cabinas completamente insonorizadas que garantizan una total privacidad acústica, aislando el ruido externo para que puedas desconectar plenamente.
          </p>
          <p className="text-sm text-zen-wine/60 font-sans leading-loose">
            Olvídate de la fatiga muscular extrema y el estrés diario. Déjate cuidar por manos profesionales expertas en reflexología, bambuterapia y la reconfortante calidez de las piedras volcánicas.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 relative"
        >
          <div className="relative aspect-[4/5] md:aspect-[3/2] lg:aspect-[4/5] overflow-hidden rounded-t-full rounded-b-sm shadow-[0_20px_60px_-20px_rgba(63,12,8,0.3)]">
            <Image
              src="/images/masajes/IMG-20250906-WA0098.jpg"
              alt="Masaje relajante con piedras volcánicas y bambuterapia en cabina insonorizada en el norte del Valle"
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-zen-wine/10 mix-blend-multiply" />
          </div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute -bottom-8 -left-4 md:-left-12 bg-white p-6 md:p-8 shadow-2xl max-w-[240px]"
          >
            <p className="font-serif text-zen-wine text-lg italic mb-2">
              "El bienestar es una rutina, no un evento."
            </p>
            <p className="font-sans text-xs tracking-widest text-zen-brown uppercase">
              Zen Spa 360°
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
