"use client";

import { CONTAINER, SECTION_PAD } from "./constants";
import { METHOD_CARDS } from "./methods-data";
import { BronceoMethodCard } from "./BronceoMethodCard";
import { SectionEyebrow } from "./SectionPrimitives";

export function BronceoMethodsSection() {
  return (
    <section className={`${SECTION_PAD} bg-white relative`}>
      <div className={CONTAINER}>
        <div className="text-center mb-20">
          <SectionEyebrow>¿Sol o Aerógrafo?</SectionEyebrow>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-zen-wine">
            Nuestros <span className="italic text-zen-brown">Métodos</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch auto-rows-[450px]">
          {METHOD_CARDS.map((m) => (
            <BronceoMethodCard key={m.title} {...m} />
          ))}
        </div>
      </div>
    </section>
  );
}
