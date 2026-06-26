"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { MapPin, Phone, Clock } from "lucide-react";

export function Location() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-zen-beige overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <span className="text-zen-brown text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
              Sede Principal
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-zen-wine mb-8 leading-tight">
              Encuéntranos en <br />
              <span className="italic text-zen-brown">Roldanillo</span>
            </h2>
            <div className="w-12 h-px bg-zen-brown mb-8" />

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white border border-zen-brown/10 rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5 text-zen-brown" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-zen-wine mb-1">Dirección</h4>
                  <p className="font-sans text-zen-wine/80 text-sm leading-relaxed">
                    Calle 8 #8-31, Peatonal Museo Rayo (Calle de los Poetas), <br />
                    Roldanillo, Valle del Cauca.
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white border border-zen-brown/10 rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <Phone className="w-5 h-5 text-zen-brown" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-zen-wine mb-1">Teléfono</h4>
                  <a
                    href="https://wa.me/573156881765"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-zen-wine/80 text-sm hover:text-zen-pink transition-colors tabular-nums"
                  >
                    +57 315 6881765
                  </a>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white border border-zen-brown/10 rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <Clock className="w-5 h-5 text-zen-brown" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-zen-wine mb-1">Horario de Atención</h4>
                  <p className="font-sans text-zen-wine/80 text-sm leading-relaxed">
                    Lunes a Sábado: 8:00 AM - 7:00 PM <br />
                    Domingos y Festivos: 9:00 AM - 1:00 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Map Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group rounded-2xl overflow-hidden shadow-2xl border border-zen-brown/15 aspect-[4/3] w-full"
          >
            {/* Aesthetic Map Image */}
            <Image
              src="/images/zen-spa-entrada-foto.webp"
              alt="Ubicación geográfica de Zen Spa en Roldanillo"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
            />
            
            {/* Subtle overlay & CTA Button */}
            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors duration-500 flex items-center justify-center p-6">
              <a 
                href="https://maps.app.goo.gl/mYrofQv99b7zZ7p69" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#3f0c08] text-[#efdbd5] hover:bg-[#e598a8] hover:text-[#3f0c08] transition-all rounded-full font-medium shadow-md transform group-hover:scale-105 duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                ¿Cómo llegar? Abrir en Google Maps
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
