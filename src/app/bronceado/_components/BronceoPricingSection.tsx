"use client";

import { PricingGroupBlock } from "./PricingGroupBlock";
import { PRICING_GROUPS } from "./pricing-data";
import { Calendar, Users, ShieldAlert } from "lucide-react";
import { motion } from "motion/react";

export function BronceoPricingSection() {
  return (
    <section className="bg-zen-beige relative overflow-hidden pt-32 pb-24 px-6 md:px-12 lg:px-24">
      {PRICING_GROUPS.map((group) => (
        <PricingGroupBlock
          key={group.eyebrow}
          group={group}
          className="mb-24"
        />
      ))}

      {/* Reglas Operativas y Restricciones de Reserva */}
      <div className="max-w-7xl mx-auto mt-16 pt-16 border-t border-zen-wine/15">
        <div className="text-center mb-16">
          <span className="text-zen-brown text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
            Protocolo de Calidad
          </span>
          <h3 className="text-3xl md:text-4xl font-serif text-zen-wine">
            Reglas de Reserva e <span className="italic text-zen-brown">Instrucciones</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 shadow-sm border border-zen-wine/5 rounded-2xl"
          >
            <div className="w-12 h-12 bg-zen-beige flex items-center justify-center rounded-full text-zen-brown mb-6">
              <Calendar className="w-6 h-6" />
            </div>
            <h4 className="font-sans font-semibold text-lg text-zen-wine mb-3">
              Reserva Anticipada
            </h4>
            <p className="font-sans text-sm text-zen-wine/80 leading-relaxed">
              Debido a las estrictas condiciones climáticas y de preparación, se requiere reservar con anticipación. Es obligatorio seguir el protocolo de exfoliación cutánea previo (24 horas antes) para asegurar un tono uniforme.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white p-8 shadow-sm border border-zen-wine/5 rounded-2xl"
          >
            <div className="w-12 h-12 bg-zen-beige flex items-center justify-center rounded-full text-zen-brown mb-6">
              <Users className="w-6 h-6" />
            </div>
            <h4 className="font-sans font-semibold text-lg text-zen-wine mb-3">
              Cupos Exclusivos por Día
            </h4>
            <p className="font-sans text-sm text-zen-wine/80 leading-relaxed">
              El spa cuenta con un límite máximo de 3 camillas simultáneas para bronceado. Para garantizar un servicio premium y personalizado, limitamos el agendamiento a un máximo de 3 personas al día (o 1 sesión grupal de amigas).
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 shadow-sm border border-zen-wine/5 rounded-2xl"
          >
            <div className="w-12 h-12 bg-zen-pink/10 flex items-center justify-center rounded-full text-zen-pink mb-6">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h4 className="font-sans font-semibold text-lg text-zen-wine mb-3">
              Horario Límite de Agenda
            </h4>
            <p className="font-sans text-sm text-zen-wine/80 leading-relaxed">
              El servicio se realiza estrictamente antes de las 11:00 AM. Sin excepción, no se agendan citas en la tarde, ya que el calor del norte del Valle impide la correcta fijación de la marquinha.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
