"use client";

import { motion } from "motion/react";
import { PriceCard } from "@/components/PriceCard";
import { CONTAINER, reveal } from "./constants";
import { DividerLine, SectionEyebrow } from "./SectionPrimitives";
import type { PricingGroup } from "./pricing-data";
import Image from "next/image";

export function PricingGroupBlock({
  group,
  className = "",
}: {
  group: PricingGroup;
  className?: string;
}) {
  return (
    <div className={`${CONTAINER} ${className}`}>
      <div className="flex flex-col md:flex-row gap-8 items-start md:items-end mb-16">
        <motion.div {...reveal.fromLeft} className="md:w-1/2">
          <SectionEyebrow>{group.eyebrow}</SectionEyebrow>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-zen-wine mb-6">
            {group.titleRest}
            <span className="italic text-zen-brown">{group.titleItalic}</span>
          </h2>
          <DividerLine className="mb-6" />
          <p className="text-lg text-zen-wine/80 font-sans">{group.blurb}</p>
        </motion.div>
        {group.image ? (
          <motion.div {...reveal.fromRight} className="md:w-1/2 flex justify-center lg:justify-end w-full relative pt-8 md:pt-0">
            <div className="relative w-full max-w-[400px] aspect-[4/5] overflow-hidden rounded-t-full rounded-b-sm md:aspect-[3/4] shadow-[0_4px_30px_-10px_rgba(140,92,81,0.3)]">
              <Image
                src={group.image}
                alt={`${group.eyebrow}: ${group.titleRest}${group.titleItalic}`}
                fill
                className="object-cover object-center z-0"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div
                className="pointer-events-none absolute inset-0 z-10 bg-zen-wine/10 mix-blend-multiply"
                aria-hidden
              />
            </div>
            {group.aside && (
              <div className="absolute -bottom-6 -left-4 md:-left-8 lg:-left-12 z-20 shadow-xl bg-white rounded-r-lg">
                {group.aside}
              </div>
            )}
          </motion.div>
        ) : group.aside ? (
          <motion.div {...reveal.fromRight} className="md:w-1/2 md:flex justify-end w-full">
            {group.aside}
          </motion.div>
        ) : null}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {group.cards.map((card) => (
          <PriceCard key={card.title} {...card} />
        ))}
      </div>
    </div>
  );
}
