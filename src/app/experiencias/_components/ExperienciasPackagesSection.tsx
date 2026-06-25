"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Check } from "lucide-react";
import { SPA_PACKAGES } from "./packages-data";

export function ExperienciasPackagesSection() {
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
          <span className="text-zen-brown text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
            Compartir Bienestar
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-zen-wine">
            Paquetes de Parejas{" "}
            <span className="italic text-zen-brown">y Amigas</span>
          </h2>
          <div className="w-12 h-px bg-zen-brown mx-auto mt-6 mb-6" />
          <p className="text-zen-wine/70 max-w-2xl mx-auto leading-relaxed font-sans">
            Todos nuestros paquetes incluyen un ambiente privado y los toques
            especiales de la casa para una experiencia inolvidable.
          </p>
        </motion.div>

        <div className="space-y-24 md:space-y-40">
          {SPA_PACKAGES.map((pkg, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={pkg.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col gap-10 lg:gap-16 items-center ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2 aspect-[4/5] sm:aspect-square lg:aspect-[3/4] overflow-hidden relative group rounded-2xl shadow-[0_12px_50px_-15px_rgba(63,12,8,0.3)] ring-1 ring-zen-brown/10 after:absolute after:inset-0 after:bg-zen-wine/5 after:mix-blend-multiply after:pointer-events-none">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zen-wine/20 via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-70" />
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <h3 className="font-serif text-3xl md:text-4xl text-zen-wine mb-2 leading-tight">
                    {pkg.title}
                  </h3>
                  <p className="font-serif italic text-zen-brown text-lg mb-6">
                    Experiencia compartida
                  </p>
                  <div className="w-10 h-px bg-zen-brown mb-6" />
                  <p className="text-zen-wine/80 leading-relaxed font-sans mb-8">
                    {pkg.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-[10px] uppercase tracking-widest text-zen-brown font-semibold mb-4 border-b border-zen-brown/20 pb-3">
                      Incluye
                    </h4>
                    <ul className="space-y-3">
                      {pkg.includes.map((item) => (
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

                  {/* Price */}
                  <div className="pt-6 border-t border-zen-beige/60 flex flex-col sm:flex-row sm:items-end justify-between gap-4 mt-auto">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-zen-brown font-semibold block mb-1">
                        Inversión
                      </span>
                      <span className="font-serif text-3xl text-zen-wine leading-none">
                        {pkg.price}
                      </span>
                    </div>

                    {/* WhatsApp CTA */}
                    <a
                      href={`https://wa.me/573156881765?text=Hola%20Zen%20Spa!%20%F0%9F%8D%B7%20Me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20y%20reservar%20el%20paquete%20de%20experiencia%20%22${encodeURIComponent(pkg.title)}%22%20%E2%9C%A8`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-zen-wine text-zen-beige hover:bg-zen-brown transition-colors duration-300 px-6 py-3.5 font-sans text-[11px] tracking-widest uppercase rounded-sm shadow-md text-center"
                    >
                      Reservar por WhatsApp
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
