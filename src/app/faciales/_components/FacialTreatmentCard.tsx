"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { Clock, Check } from "lucide-react";
import type { FacialTreatment } from "./faciales-data";

const EASE = [0.16, 1, 0.3, 1] as const;

export function FacialTreatmentCard({
  treatment,
  index,
}: {
  treatment: FacialTreatment;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const isEven = index % 2 === 0;
  const parallaxY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, ease: EASE, delay: treatment.motionDelay ?? 0 }}
      className={`flex flex-col gap-8 lg:gap-16 items-center ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      {/* Image */}
      <motion.div
        style={{ y: parallaxY }}
        className="w-full lg:w-1/2 aspect-[4/5] sm:aspect-square lg:aspect-[3/4] overflow-hidden bg-zen-beige/40 relative group rounded-2xl shadow-[0_12px_50px_-15px_rgba(63,12,8,0.3)] ring-1 ring-zen-brown/10 after:absolute after:inset-0 after:bg-zen-wine/5 after:mix-blend-multiply after:pointer-events-none"
      >
        <Image
          src={treatment.image}
          alt={treatment.imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center transition-transform duration-[1200ms] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zen-wine/20 via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-70" />
      </motion.div>

      {/* Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        {treatment.duration && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-zen-beige border border-zen-brown/20 text-zen-brown text-[11px] uppercase tracking-widest rounded-full font-medium w-fit mb-6">
            <Clock size={12} />
            {treatment.duration}
          </span>
        )}

        <h3 className="font-serif text-3xl md:text-4xl text-zen-wine mb-2 leading-tight">
          {treatment.title}
        </h3>
        <p className="font-serif italic text-zen-brown text-lg mb-6">
          {treatment.subtitle}
        </p>
        <div className="w-10 h-px bg-zen-brown mb-6" />
        <p className="text-zen-wine/80 leading-relaxed font-sans mb-8">
          {treatment.description}
        </p>

        {treatment.includes && treatment.includes.length > 0 && (
          <div className="mb-8">
            <h4 className="text-[10px] uppercase tracking-widest text-zen-brown font-semibold mb-4 border-b border-zen-brown/20 pb-3">
              Incluye
            </h4>
            <ul className="space-y-3">
              {treatment.includes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-zen-wine/80 font-sans text-sm leading-relaxed"
                >
                  <Check
                    size={14}
                    className="text-zen-pink shrink-0 mt-0.5"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Price */}
        <div className="pt-6 border-t border-zen-beige/60 flex items-end gap-4">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-zen-brown font-semibold block mb-1">
              Inversión
            </span>
            <span className="font-serif text-3xl text-zen-wine leading-none">
              {treatment.price}
            </span>
            {treatment.priceNote && (
              <p className="text-xs text-zen-brown/70 mt-2 max-w-xs leading-relaxed">
                {treatment.priceNote}
              </p>
            )}
          </div>
        </div>

        {/* WhatsApp Reserva CTA */}
        <div className="mt-8 pt-6 border-t border-zen-beige/60">
          <a
            href={`https://wa.me/573156881765?text=Hola%20Zen%20Spa!%20%F0%9F%8C%B8%20Me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20y%20reservar%20el%20tratamiento%20facial%20${encodeURIComponent(treatment.title)}%20%E2%9C%A8`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-zen-wine text-zen-beige hover:bg-zen-brown transition-colors duration-300 px-6 py-3.5 font-sans text-[11px] tracking-widest uppercase rounded-sm shadow-md"
          >
            Reservar por WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  );
}
