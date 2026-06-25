"use client";

import Image from "next/image";
import {
  AMBIENTE_FEATURES,
  AMBIENTE_IMAGE,
  AMBIENTE_IMAGE_ALT,
} from "./ambiente-data";

export function ExperienciasAmbienteSection() {
  return (
    <section className="py-20 bg-zen-wine/5">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={AMBIENTE_IMAGE}
              alt={AMBIENTE_IMAGE_ALT}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-serif text-3xl md:text-5xl text-zen-wine mb-6 leading-tight">
              El entorno que <br /> <span className="italic text-zen-brown">mereces</span>
            </h2>
            <p className="text-gray-700 leading-relaxed font-light mb-8">
              Las instalaciones de Zen Spa están aromaterapéuticamente aclimatadas para inducir calma
              desde el primer instante que pasas la puerta. Un deleite para todos los sentidos.
            </p>
            <ul className="space-y-4">
              {AMBIENTE_FEATURES.map((feature) => (
                <li key={feature} className="flex items-center text-zen-wine font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-zen-pink mr-4" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
