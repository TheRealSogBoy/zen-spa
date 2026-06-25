"use client";

import { motion } from "motion/react";
import { reveal, SECTION_PAD } from "./constants";
import { DividerLine, SectionEyebrow, SectionTitle } from "./SectionPrimitives";

export function BronceoIntroSection() {
  return (
    <section className={`${SECTION_PAD} container mx-auto text-center relative overflow-hidden`}>
      <motion.div
        {...reveal.fadeUpSlow}
        className="max-w-4xl mx-auto flex flex-col items-center"
      >
        <SectionEyebrow>El Arte del Color</SectionEyebrow>
        <SectionTitle className="mb-8">
          Tu Glow Up <br className="hidden md:block" />
          <span className="italic text-zen-brown">Zen</span>
        </SectionTitle>
        <DividerLine className="mb-8" />
        <p className="text-xl text-zen-brown mb-8 font-serif italic max-w-2xl mx-auto">
          Consigue un tono radiante y la marquinha perfecta de forma segura.
        </p>
        <p className="text-gray-700 leading-relaxed font-light text-lg">
          En Zen Spa, somos expertas en el arte de broncear. Entendemos que cada piel es única y requiere un cuidado especializado. Por eso, nuestro ritual de bronceo brasilero utiliza la energía controlada del sol del norte del Valle y productos avanzados formulados para estimular la melanina de manera saludable, garantizando un tono uniforme, profundo y duradero.
        </p>
      </motion.div>
    </section>
  );
}
