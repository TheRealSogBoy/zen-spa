"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Check, Sparkles, Users } from "lucide-react";
import {
  DIVA_PACKAGES,
  SHARED_PACKAGES,
  type MiniDivasPackage,
} from "./minidivas-data";

const getWhatsAppLink = (id: string, title: string) => {
  let message = `Hola Zen Spa! 🌸 Me gustaría recibir información y reservar el paquete ${title} ✨`;
  if (id === "primer-dia") {
    message = `Hola Zen Spa! 🌸 Me gustaría recibir información y reservar el paquete Mi Primer Día de Spa ✨`;
  } else if (id === "diva-premium") {
    message = `Hola Zen Spa! 👑 Me gustaría recibir información y reservar el paquete Experiencia Diva Premium ✨`;
  } else if (id === "diva-vip") {
    message = `Hola Zen Spa! 🍰 Me gustaría recibir información y reservar el paquete Celebración Diva VIP para un cumpleaños ✨`;
  } else if (id === "conexion-magica") {
    message = `Hola Zen Spa! 💖 Me gustaría recibir información y reservar el paquete Conexión Mágica de spa familiar ✨`;
  } else if (id === "vinculo-premium") {
    message = `Hola Zen Spa! 💕 Me gustaría recibir información y reservar el paquete Vínculo Premium ✨`;
  } else if (id === "recuerdo-vip") {
    message = `Hola Zen Spa! 🌟 Me gustaría recibir información y reservar el paquete Recuerdo VIP ✨`;
  }
  return `https://wa.me/573156881765?text=${encodeURIComponent(message)}`;
};

/* ── Single Package Card ─────────────────────────────────────── */

function PackageCard({
  pkg,
  index,
}: {
  pkg: MiniDivasPackage;
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col gap-10 lg:gap-16 items-center ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      {/* Image */}
      <div className="w-full lg:w-1/2 aspect-[4/5] sm:aspect-square lg:aspect-[3/4] overflow-hidden relative group rounded-2xl shadow-[0_12px_50px_-15px_rgba(229,152,168,0.4)] ring-1 ring-zen-pink/20 after:absolute after:inset-0 after:bg-zen-wine/5 after:mix-blend-multiply after:pointer-events-none">
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          loading="lazy"
          className="object-cover object-center transition-transform duration-[1200ms] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zen-wine/20 via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-70" />

        {/* Badge */}
        {pkg.badge && (
          <span className="absolute top-4 left-4 bg-zen-pink/90 backdrop-blur-sm text-white text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full font-semibold flex items-center gap-1.5">
            <Users size={12} />
            {pkg.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <h3 className="font-serif text-3xl md:text-4xl text-zen-wine mb-2 leading-tight">
          {pkg.title}
        </h3>
        <p className="font-serif italic text-zen-pink text-lg mb-6">
          Su momento de brillar
        </p>
        <div className="w-10 h-px bg-zen-pink mb-6" />
        <p className="text-zen-wine/80 leading-relaxed font-sans mb-8">
          {pkg.description}
        </p>

        {/* Includes — Para la Diva */}
        <div className="mb-6">
          <h4 className="text-[10px] uppercase tracking-widest text-zen-pink font-semibold mb-4 border-b border-zen-pink/20 pb-3 flex items-center gap-2">
            <Sparkles size={12} />
            {pkg.includesForParent ? "Para la Diva" : "Incluye"}
          </h4>
          <ul className="space-y-2.5">
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

        {/* Includes — Para Mamá/Papá (only for shared packages) */}
        {pkg.includesForParent && (
          <div className="mb-8">
            <h4 className="text-[10px] uppercase tracking-widest text-zen-brown font-semibold mb-4 border-b border-zen-brown/20 pb-3 flex items-center gap-2">
              <Users size={12} />
              Para Mamá / Papá
            </h4>
            <ul className="space-y-2.5">
              {pkg.includesForParent.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-zen-wine/80 font-sans text-sm leading-relaxed"
                >
                  <Check
                    size={14}
                    className="text-zen-brown shrink-0 mt-0.5"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Pricing Tiers */}
        {pkg.priceTiers.length > 0 && (
          <div className="pt-6 border-t border-zen-pink/15">
            <span className="text-[10px] uppercase tracking-widest text-zen-pink font-semibold block mb-4">
              Inversión
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {pkg.priceTiers.map((tier) => (
                <div
                  key={tier.label}
                  className="flex items-center justify-between bg-zen-wine/5 rounded-xl px-4 py-3 border border-zen-wine/10"
                >
                  <span className="text-zen-wine/70 text-sm font-sans">
                    {tier.label}
                  </span>
                  <span className="font-serif text-zen-wine text-lg font-medium">
                    {tier.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* WhatsApp Reserva CTA */}
        <div className="mt-8 pt-6 border-t border-zen-pink/15">
          <button
            onClick={() => {
              if (typeof window !== "undefined") {
                window.dispatchEvent(
                  new CustomEvent("open-booking-modal", {
                    detail: {
                      section: "minidivas",
                      serviceName: pkg.title,
                      price: pkg.priceTiers[0]?.price || 135000,
                    },
                  })
                );
              }
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-zen-wine text-zen-beige hover:bg-zen-pink hover:text-white transition-colors duration-300 px-8 py-3.5 font-sans text-[11px] tracking-[0.2em] uppercase rounded-full shadow-md font-semibold active:scale-95 text-center cursor-pointer"
          >
            Reservar Ahora
          </button>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Main Section Component ──────────────────────────────────── */

export function MiniDivasPackages() {
  return (
    <>
      {/* ═══ Paquetes de Ensueño Diva ═══ */}
      <section className="relative z-10 py-24 md:py-32 bg-zen-beige px-6 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <span className="text-zen-pink text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
              Spa Infantil
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-zen-wine">
              Paquetes de{" "}
              <span className="italic text-zen-pink">Ensueño</span>
            </h2>
            <div className="w-12 h-px bg-zen-pink mx-auto mt-6 mb-6" />
            <p className="text-zen-wine/70 max-w-2xl mx-auto leading-relaxed font-sans">
              Más que un juego, una iniciación al amor propio. Hemos creado
              paquetes de ensueño para que las más pequeñas aprendan a
              cuidarse y a celebrar su esencia en un ambiente seguro,
              profesional y lleno de magia.
            </p>
          </motion.div>

          <div className="space-y-24 md:space-y-40">
            {DIVA_PACKAGES.map((pkg, index) => (
              <PackageCard key={pkg.id} pkg={pkg} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Paquetes para Compartir ═══ */}
      <section className="relative z-10 py-24 md:py-32 bg-gradient-to-b from-zen-beige via-[#fdf0f2] to-zen-beige px-6 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <span className="text-zen-brown text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
              Con Mamá o Papá
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-zen-wine">
              Paquetes para{" "}
              <span className="italic text-zen-brown">Compartir</span>
            </h2>
            <div className="w-12 h-px bg-zen-brown mx-auto mt-6 mb-6" />
            <p className="text-zen-wine/70 max-w-2xl mx-auto leading-relaxed font-sans">
              Diseñamos momentos de conexión únicos para que compartan una
              experiencia de bienestar juntos. Porque los mejores recuerdos
              se crean en calma y complicidad. Los paquetes pueden ser con
              mamá, papá o ambos.
            </p>
          </motion.div>

          <div className="space-y-24 md:space-y-40">
            {SHARED_PACKAGES.map((pkg, index) => (
              <PackageCard key={pkg.id} pkg={pkg} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
