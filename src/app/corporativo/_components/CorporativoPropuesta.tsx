"use client";

import { motion } from "motion/react";
import { TrendingUp, UserCheck, Smile } from "lucide-react";
import { VALUE_PROPOSITIONS } from "./corporativo-data";

export function CorporativoPropuesta() {
  const icons = [
    <TrendingUp key="0" className="w-8 h-8 text-zen-brown mb-6" />,
    <UserCheck key="1" className="w-8 h-8 text-zen-brown mb-6" />,
    <Smile key="2" className="w-8 h-8 text-zen-brown mb-6" />,
  ];

  return (
    <section className="relative z-10 py-24 md:py-32 bg-zen-beige px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <span className="text-zen-brown text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
            Impacto Estratégico
          </span>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-zen-wine leading-tight">
            ¿Por qué invertir en el bienestar de su equipo?
          </h2>
          <div className="w-12 h-px bg-zen-brown mx-auto mt-6 mb-6" />
          <p className="font-sans text-zen-wine/80 leading-relaxed font-light">
            Las empresas líderes entienden que el bienestar físico y mental de sus colaboradores no es un lujo, sino un activo crítico de productividad y rentabilidad corporativa.
          </p>
        </motion.div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {VALUE_PROPOSITIONS.map((prop, idx) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="bg-white/50 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-zen-brown/10 flex flex-col items-center text-center"
            >
              {icons[idx]}
              <h3 className="font-serif text-xl md:text-2xl text-zen-wine mb-4">
                {prop.title}
              </h3>
              <p className="font-sans text-sm text-zen-wine/75 leading-relaxed font-light">
                {prop.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
