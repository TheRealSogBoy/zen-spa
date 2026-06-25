"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { MapPin, Phone } from "lucide-react";
import { useRef } from "react";

export function Location() {
  const containerRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <motion.section
      ref={containerRef}
      className="relative h-[80vh] min-h-[600px] w-full overflow-hidden bg-zen-beige"
    >
      {/* Map Background (Simulated with an image for aesthetic control, or an iframe) */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 w-full h-[120%] -top-[10%] z-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop"
          alt="Vintage Map Texture"
          fill
          sizes="100vw"
          className="object-cover opacity-40 sepia-[0.3] hue-rotate-[-10deg] saturate-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-zen-beige/60 mix-blend-overlay" />
      </motion.div>

      {/* Overlay Card */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-white p-8 md:p-12 shadow-2xl max-w-md w-full border border-zen-brown/10"
        >
          <div className="relative aspect-[16/10] w-full mb-6 overflow-hidden rounded-xl shadow-md border border-zen-brown/10 after:absolute after:inset-0 after:bg-zen-wine/5 after:mix-blend-multiply after:pointer-events-none">
            <Image
              src="/images/zen-spa-entrada-foto.webp"
              alt="Fachada de Zen Spa Roldanillo"
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover"
              priority
            />
          </div>
          <span className="text-zen-brown text-xs font-bold tracking-[0.3em] uppercase mb-2 block">
            El Santuario
          </span>
          <h3 className="text-3xl font-serif text-zen-wine mb-6">
            Encuéntranos
          </h3>

          <div className="flex items-start gap-4 mb-6">
            <MapPin className="w-5 h-5 text-zen-brown shrink-0 mt-1" />
            <p className="font-sans text-zen-wine/80 text-sm leading-relaxed">
              Calle de los Poetas #8-31 <br />
              Roldanillo, Valle del Cauca
            </p>
          </div>

          <a 
            href="https://wa.me/573156881765" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full bg-zen-wine text-zen-beige py-4 px-6 font-sans text-sm tracking-widest uppercase hover:bg-zen-brown transition-colors duration-300"
          >
            <Phone className="w-4 h-4" />
            Reservar por WhatsApp
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
