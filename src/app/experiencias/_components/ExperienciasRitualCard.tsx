"use client";

import { motion } from "motion/react";
import type { RitualCardData } from "./rituals-data";

export function ExperienciasRitualCard({
  title,
  price,
  description,
  variant,
  motionDelay = 0,
}: RitualCardData) {
  const isWine = variant === "wine";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: motionDelay }}
      className={
        isWine
          ? "bg-zen-wine text-zen-beige p-8 rounded-xl flex flex-col h-full hover:-translate-y-2 transition-transform duration-500"
          : "bg-zen-gold/10 p-8 rounded-xl flex flex-col h-full hover:-translate-y-2 transition-transform duration-500"
      }
    >
      <h3 className={`font-serif text-2xl mb-4 ${isWine ? "" : "text-zen-wine"}`}>{title}</h3>
      
      <p
        className={`leading-relaxed mb-8 flex-grow ${
          isWine ? "font-light opacity-90" : "text-zen-brown font-light"
        }`}
      >
        {description}
      </p>
      
      <div
        className={`border-t pt-5 flex flex-col gap-4 ${
          isWine ? "border-zen-beige/20" : "border-zen-gold/30"
        }`}
      >
        <div className="flex justify-between items-center">
          <span
            className={`text-sm uppercase tracking-widest font-medium ${
              isWine ? "text-zen-pink border border-zen-pink/30 px-3 py-1 rounded-full" : "text-zen-wine font-semibold"
            }`}
          >
            {price}
          </span>
        </div>

        {/* WhatsApp CTA Button */}
        <button
          onClick={() => {
            if (typeof window !== "undefined") {
              window.dispatchEvent(
                new CustomEvent("open-booking-modal", {
                  detail: {
                    section: "experiencias",
                    serviceName: title,
                    price: price,
                  },
                })
              );
            }
          }}
          className={
            isWine
              ? "w-full inline-flex items-center justify-center bg-white text-zen-wine hover:bg-zen-pink hover:text-white transition-colors duration-300 px-4 py-2.5 text-[10px] tracking-widest uppercase font-bold rounded-sm shadow-sm cursor-pointer"
              : "w-full inline-flex items-center justify-center bg-zen-wine text-zen-beige hover:bg-zen-brown transition-colors duration-300 px-4 py-2.5 text-[10px] tracking-widest uppercase font-bold rounded-sm shadow-sm cursor-pointer"
          }
        >
          Adquirir Bono
        </button>
      </div>
    </motion.div>
  );
}
