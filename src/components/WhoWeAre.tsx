"use client";

import Image from "next/image";
import { motion } from "motion/react";
export function WhoWeAre() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-zen-beige relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-zen-pink/10 blur-3xl" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-zen-blue/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="lg:col-span-5 flex flex-col justify-center"
        >
          <span className="text-zen-brown text-xs font-bold tracking-[0.3em] uppercase mb-6 block">
            El Corazón de Zen
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-zen-wine leading-tight mb-8">
            Nuestra <br />
            <span className="italic text-zen-brown">Filosofía 360°</span>
          </h2>
          <div className="w-12 h-[1px] bg-zen-brown mb-8" />
          <p className="text-lg md:text-xl text-zen-wine/80 font-sans leading-relaxed mb-10">
            No somos solo un spa; somos guías en tu camino al bienestar integral. Transformamos el estrés en vitalidad.
          </p>
          <p className="text-sm text-zen-wine/60 font-sans leading-loose">
            Creemos que la verdadera belleza nace desde adentro. Cada ritual, cada tratamiento y cada detalle está diseñado para reconectar tu cuerpo, mente y espíritu. En Zen Spa, el bienestar es una rutina, no un evento.
          </p>
        </motion.div>

        {/* Image Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2 }}
          className="lg:col-span-7 relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-sm md:aspect-[3/2] lg:aspect-[4/5]">
            <Image
              src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070&auto=format&fit=crop"
              alt="Diana y Valeria - Equipo Zen Spa"
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-zen-wine/10 mix-blend-multiply" />
          </div>
          
          {/* Floating badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute -bottom-8 -left-8 md:-left-12 bg-white p-6 md:p-8 shadow-2xl max-w-[240px]"
          >
            <p className="font-serif text-zen-wine text-lg italic mb-2">
              {"\u201C"}La calidez de un cuidador, la precisión de un sabio.{"\u201D"}
            </p>
            <p className="font-sans text-xs tracking-widest text-zen-brown uppercase">Diana & Valeria</p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}