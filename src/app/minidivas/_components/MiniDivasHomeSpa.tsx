"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Check, Calendar, Home, MessageCircle } from "lucide-react";
import { PARTY_PACKAGES } from "./minidivas-data";

export function MiniDivasHomeSpa() {
  return (
    <section className="relative z-10 py-24 md:py-32 bg-zen-beige px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-zen-wine text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
            Celebraciones Especiales
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-zen-wine">
            Fiestas <span className="italic text-zen-brown">Inolvidables</span>
          </h2>
          <div className="w-12 h-px bg-zen-brown mx-auto mt-6 mb-6" />
          <p className="text-zen-wine/70 max-w-2xl mx-auto leading-relaxed font-sans">
            ¿Quieres celebrar el cumpleaños de tu hija de una forma completamente original y diferente?
            Transformamos cualquier espacio en un mundo de fantasía.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {PARTY_PACKAGES.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_20px_60px_-15px_rgba(63,12,8,0.15)] flex flex-col h-full border border-zen-brown/5 relative overflow-hidden group"
            >
              {/* Decorative Icon Background */}
              <div className="absolute -top-10 -right-10 text-zen-pink/5 group-hover:text-zen-pink/10 transition-colors duration-500">
                {pkg.id === "cumple-suenos" ? <Calendar size={200} /> : <Home size={200} />}
              </div>

              <div className="relative mb-8 aspect-[16/10] overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <h3 className="font-serif text-3xl text-zen-wine mb-4 relative z-10">
                {pkg.title}
              </h3>
              
              <div className="w-10 h-px bg-zen-pink mb-6" />

              <p className="text-zen-wine/80 font-sans mb-8 leading-relaxed italic relative z-10">
                {pkg.description}
              </p>

              {pkg.note && (
                <p className="text-sm text-zen-wine/60 mb-8 leading-relaxed font-sans relative z-10">
                   {pkg.note}
                </p>
              )}

              <div className="mb-10 flex-grow relative z-10">
                <h4 className="text-[10px] uppercase tracking-widest text-zen-pink font-bold mb-5 border-b border-zen-pink/10 pb-2">
                  Qué incluimos
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-zen-wine/80 text-sm font-sans leading-relaxed">
                      <Check size={14} className="text-zen-pink shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 border-t border-zen-beige flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
                <div className="text-center sm:text-left">
                   <p className="text-[10px] uppercase tracking-widest text-zen-brown font-semibold mb-1">Cotización personalizada</p>
                   <p className="text-zen-wine font-serif italic">Hablemos y diseñemos juntas</p>
                </div>
                <button 
                  onClick={() => {
                    if (typeof window !== "undefined") {
                      window.dispatchEvent(
                        new CustomEvent("open-booking-modal", {
                          detail: {
                            section: "minidivas",
                            serviceName: pkg.id === "cumple-suenos" ? "¡El Cumple de sus Sueños!" : "¡Mini Divas en tu Casa!",
                            price: 0,
                          },
                        })
                      );
                    }
                  }}
                  className="bg-zen-wine text-white px-8 py-3.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase hover:bg-zen-pink transition-all duration-300 flex items-center gap-3 active:scale-95 shadow-lg shadow-zen-wine/20 cursor-pointer"
                >
                  <MessageCircle size={16} />
                  Cotizar ahora
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
