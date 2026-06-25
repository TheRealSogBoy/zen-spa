"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Clock, Check, CalendarDays, Sparkles } from "lucide-react";

type MassageService = {
  title: string;
  description: string;
  priceRegular: number;
  pricePromo?: number;
  duration: string;
  image: string;
  imageAlt: string;
  includes: string[];
};

const MASSAGE_SERVICES: MassageService[] = [
  {
    title: "Masaje Relajante Normal",
    description: "Masaje de relajación corporal completo de pies a cabeza con aceites esenciales y aromaterapia de grado clínico. Ideal para liberar tensiones acumuladas y recuperar la armonía.",
    priceRegular: 100000,
    duration: "60 min",
    image: "/images/masajes/IMG-20250920-WA0052.jpg",
    imageAlt: "Masaje relajante de cuerpo completo con aceites esenciales de grado clínico en cabina privada en Roldanillo",
    includes: [
      "Masaje corporal completo de pies a cabeza",
      "Aceites esenciales importados",
      "Aromaterapia de grado clínico",
      "Infusión herbal de cortesía al terminar",
    ],
  },
  {
    title: "Masaje Relajante Completo",
    description: "Nuestra terapia premium de descanso profundo. Incorpora la calidez relajante de las piedras volcánicas, la técnica drenante de bambuterapia y la estimulación de reflexología podal para un alivio muscular total.",
    priceRegular: 120000,
    pricePromo: 89000,
    duration: "60 min",
    image: "/images/masajes/IMG-20250906-WA0127.jpg",
    imageAlt: "Masaje relajante completo con piedras volcánicas, bambuterapia y reflexología podal en Roldanillo",
    includes: [
      "Masaje de cuerpo completo profundo",
      "Terapia con Piedras Volcánicas calientes",
      "Masaje con cañas de Bambú (Bambuterapia)",
      "Reflexología podal para alivio sistémico",
      "Copa de vino de cortesía",
    ],
  },
];

export function MasajesCatalogSection() {
  const [isWeekend, setIsWeekend] = useState(false);

  useEffect(() => {
    // Determine if today is Saturday (6) or Sunday (0)
    const day = new Date().getDay();
    setIsWeekend(day === 0 || day === 6);
  }, []);

  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto z-10 relative">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-zen-brown text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
            Rituales Corporales
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-zen-wine">
            Masajes <span className="italic text-zen-brown">Individuales</span>
          </h2>
          <div className="w-12 h-px bg-zen-brown mx-auto mt-6 mb-8" />
          <p className="text-zen-wine/80 max-w-xl mx-auto leading-relaxed text-sm md:text-base font-sans">
            Restaura la vitalidad de tu cuerpo. Técnicas manuales ancestrales y aparatología natural en cabinas privadas de descanso acústico absoluto.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch max-w-6xl mx-auto">
          {MASSAGE_SERVICES.map((massage, index) => {
            const hasPromo = massage.pricePromo !== undefined;
            const currentPrice = isWeekend && hasPromo ? massage.pricePromo : massage.priceRegular;
            
            return (
              <motion.div
                key={massage.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zen-beige/30 border border-zen-wine/5 p-8 md:p-12 flex flex-col justify-between rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden"
              >
                {/* Promo Badge for the weekend promotion */}
                {hasPromo && (
                  <div className={`absolute top-4 right-4 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase ${
                    isWeekend 
                      ? "bg-emerald-100 text-emerald-800 border border-emerald-200 animate-pulse" 
                      : "bg-zen-pink/10 text-zen-pink border border-zen-pink/20"
                  }`}>
                    {isWeekend ? <Sparkles size={14} /> : <CalendarDays size={14} />}
                    {isWeekend ? "¡PROMO DE FIN DE SEMANA ACTIVA!" : "PROMO SÁB/DOM: $89K"}
                  </div>
                )}

                <div>
                  {/* Image */}
                  <div className="relative aspect-[16/10] mb-8 overflow-hidden rounded-2xl shadow-sm after:absolute after:inset-0 after:bg-zen-wine/5 after:mix-blend-multiply after:pointer-events-none">
                    <Image
                      src={massage.image}
                      alt={massage.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 500px"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zen-wine/10 to-transparent" />
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-white border border-zen-brown/10 text-zen-brown text-[10px] uppercase tracking-widest rounded-full font-medium">
                      <Clock size={10} />
                      {massage.duration}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl md:text-3xl text-zen-wine mb-4">
                    {massage.title}
                  </h3>

                  <p className="text-zen-wine/80 font-sans text-sm leading-relaxed mb-8">
                    {massage.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-[10px] uppercase tracking-widest text-zen-brown font-semibold mb-4 border-b border-zen-brown/20 pb-2">
                      Inclusiones
                    </h4>
                    <ul className="space-y-3">
                      {massage.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-zen-wine/80 font-sans text-xs md:text-sm leading-relaxed">
                          <Check size={14} className="text-zen-pink shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-zen-brown/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-zen-brown font-semibold block mb-1">
                      Inversión
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="font-serif text-3xl text-zen-wine font-medium">
                        ${currentPrice?.toLocaleString()} COP
                      </span>
                      {hasPromo && isWeekend && (
                        <span className="text-xs text-zen-wine/50 line-through tabular-nums">
                          ${massage.priceRegular.toLocaleString()} COP
                        </span>
                      )}
                    </div>
                    {hasPromo && !isWeekend && (
                      <span className="text-[11px] text-zen-pink font-semibold block mt-1">
                        Sábados y Domingos: $89.000 COP
                      </span>
                    )}
                  </div>

                  <a
                    href={`https://wa.me/573156881765?text=Hola%20Zen%20Spa%2C%20quiero%20reservar%20el%20${encodeURIComponent(massage.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-zen-wine text-zen-beige hover:bg-zen-brown transition-colors duration-300 px-6 py-3 font-sans text-[11px] tracking-widest uppercase rounded-sm shadow-md"
                  >
                    Reservar Ahora
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 text-center max-w-2xl mx-auto pt-16 border-t border-zen-wine/10"
        >
          <h3 className="font-serif text-3xl text-zen-wine mb-4">Regala bienestar</h3>
          <p className="font-sans text-sm text-zen-wine/80 leading-relaxed mb-8">
            Todos nuestros masajes pueden ser adquiridos como Bonos de Regalo personalizados, ideales para sorprender a esa persona especial con un momento de descanso absoluto en Roldanillo.
          </p>
          <a
            href="https://wa.me/573156881765?text=Hola%20Zen%20Spa%2C%20quiero%20comprar%20un%20Bono%20de%20Regalo%20de%20Masaje"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex border border-zen-wine text-zen-wine hover:bg-zen-wine hover:text-zen-beige transition-colors duration-300 px-8 py-3.5 font-sans text-[11px] tracking-widest uppercase rounded-sm"
          >
            Adquirir Bono de Regalo
          </a>
        </motion.div>
        
      </div>
    </section>
  );
}
