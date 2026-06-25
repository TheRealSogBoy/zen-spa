"use client";

import { motion } from "motion/react";
import { Clock, Check, Sparkles } from "lucide-react";

interface PriceCardProps {
  title: string;
  price: string;
  duration?: string;
  description: string;
  savings?: string;
  includes?: string;
  index?: number;
}

export function PriceCard({
  title,
  price,
  duration,
  description,
  savings,
  includes,
  index = 0,
}: PriceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }}
      whileHover={{ y: -8, boxShadow: "0 20px 40px -15px rgba(140,92,81,0.2)", transition: { duration: 0.4, ease: "easeOut", delay: 0 } }}
      className="relative p-8 bg-white rounded-2xl shadow-[0_4px_20px_-10px_rgba(140,92,81,0.15)] border border-zen-beige/30 h-full flex flex-col overflow-hidden group"
    >
      {/* Top accent gradient line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-zen-wine via-zen-brown to-zen-pink opacity-80" />
      
      {/* Decorative background icon */}
      <div className="absolute -right-6 -top-6 text-zen-beige/50 transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110 pointer-events-none">
        <Sparkles size={120} strokeWidth={1} />
      </div>

      <div className="relative z-10 mb-5">
        <h3 className="font-serif text-3xl text-zen-wine mb-4 leading-tight pr-6">{title}</h3>
        {duration && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-zen-beige/40 text-zen-wine text-[11px] uppercase tracking-widest rounded-full font-medium">
            <Clock size={14} className="text-zen-brown" />
            {duration}
          </span>
        )}
      </div>

      <div className="relative z-10 mb-8 flex-grow">
        <p className="text-gray-600 leading-relaxed font-light text-[15px]">{description}</p>
        
        {includes && (
          <div className="mt-6 p-5 bg-zen-pink/5 border-l-2 border-zen-pink/40 rounded-r-xl">
            <p className="flex items-center gap-2 text-[11px] font-bold text-zen-wine uppercase tracking-widest mb-2">
              <Check size={14} className="text-zen-pink" />
              Incluye:
            </p>
            <p className="text-sm text-gray-700 font-light leading-relaxed">{includes}</p>
          </div>
        )}
      </div>

      <div className="relative z-10 mt-auto pt-6 border-t border-zen-beige/50 flex flex-col gap-4">
        <div className="flex justify-between items-end gap-2">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-zen-brown mb-1 font-semibold">
              Inversión
            </span>
            <span className="font-serif text-3xl text-zen-wine leading-none">{price}</span>
          </div>
          {savings && (
            <div className="bg-zen-wine text-zen-beige text-[10px] px-3 py-1.5 rounded-full uppercase tracking-widest font-bold shrink-0 shadow-sm border border-zen-wine/20">
              {savings}
            </div>
          )}
        </div>

        {/* WhatsApp Reservation Button */}
        <a
          href={`https://wa.me/573156881765?text=Hola%20Zen%20Spa!%20%E2%98%80%EF%B8%8F%20Me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20y%20reservar%20el%20servicio%20de%20Bronceado:%20${encodeURIComponent(title)}%20%F0%9F%91%99%20%E2%9C%A8`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center bg-zen-wine text-zen-beige hover:bg-zen-brown transition-colors duration-300 px-5 py-2.5 font-sans text-[11px] tracking-widest uppercase rounded-sm shadow-md"
        >
          Reservar por WhatsApp
        </a>
      </div>
    </motion.div>
  );
}
