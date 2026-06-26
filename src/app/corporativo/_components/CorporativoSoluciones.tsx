"use client";

import { motion } from "motion/react";
import { CORPORATE_WHATSAPP_HREF } from "./corporativo-data";

type B2BSimplifiedSolution = {
  num: string;
  title: string;
  description: string;
};

const B2B_SOLUTIONS: B2BSimplifiedSolution[] = [
  {
    num: "01",
    title: "Jornadas de Bienestar In-House",
    description:
      "Llevamos el santuario de Zen Spa directamente a su lugar de trabajo. Esta es la solución ideal para liberar la tensión acumulada y ofrecer una pausa activa de alto impacto (masajes de relajación en camilla o mini faciales exprés) sin necesidad de que su equipo se desplace.",
  },
  {
    num: "02",
    title: "Beneficios y Recompensas (Gift Cards)",
    description:
      "Reconozca el esfuerzo de su equipo con Gift Cards digitales o impresas personalizadas con el logo de su empresa para premiar el rendimiento, celebrar cumpleaños o incentivar el logro de metas corporativas.",
  },
  {
    num: "03",
    title: "Eventos Exclusivos (Zen Day)",
    description:
      "Una experiencia de team building de lujo diseñada para fortalecer lazos. Cierre Zen Spa de forma exclusiva para su equipo, permitiéndoles disfrutar de masajes, tratamientos faciales y barra de alimentación saludable en un ambiente de total privacidad.",
  },
  {
    num: "04",
    title: "Charlas y Talleres de Bienestar",
    description:
      "Eduque y empodere a su equipo con conocimiento práctico. Sesiones dirigidas por especialistas en temas como: Postura y pausas activas (prevención de dolor de espalda por sedentarismo), Nutrición para la productividad y Manejo del estrés cotidiano.",
  },
  {
    num: "05",
    title: "Alianzas Estratégicas y Planes de Suscripción",
    description:
      "Cree un programa de bienestar continuo para sus empleados. Diseñamos planes de suscripción mensuales o trimestrales con tarifas especiales corporativas para asegurar que el autocuidado se convierta en una rutina, no en un evento.",
  },
];

export function CorporativoSoluciones() {
  return (
    <section className="relative z-10 py-24 md:py-32 bg-white px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 md:mb-28"
        >
          <span className="text-zen-pink text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
            Nuestro Portafolio
          </span>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-zen-wine">
            Soluciones de Bienestar <span className="italic text-zen-brown">B2B</span>
          </h2>
          <div className="w-12 h-px bg-zen-brown/30 mx-auto mt-6" />
        </motion.div>

        {/* Linear Vertical Stack */}
        <div className="flex flex-col gap-12 md:gap-16">
          {B2B_SOLUTIONS.map((sol, index) => (
            <motion.div
              key={sol.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group border-b border-zen-wine/10 pb-12 md:pb-16 flex flex-col md:flex-row gap-6 md:gap-10 items-start last:border-0"
            >
              {/* Large Serif Number */}
              <span className="font-serif text-5xl md:text-6xl lg:text-7xl text-zen-brown/20 font-light select-none tracking-tighter shrink-0 leading-none">
                {sol.num}
              </span>

              {/* Content */}
              <div className="flex-1 space-y-4">
                <h3 className="font-serif text-2xl md:text-3xl text-zen-wine leading-tight">
                  {sol.title}
                </h3>
                
                <p className="font-sans text-sm md:text-base text-zen-wine/80 leading-relaxed font-light">
                  {sol.description}
                </p>

                <div className="pt-4">
                  <button
                    onClick={() => {
                      if (typeof window !== "undefined") {
                        window.dispatchEvent(
                          new CustomEvent("open-booking-modal", {
                            detail: {
                              section: "corporativo",
                              serviceName: sol.title,
                              price: 0,
                            },
                          })
                        );
                      }
                    }}
                    className="inline-flex items-center justify-center bg-zen-wine text-zen-beige hover:bg-zen-brown px-6 py-3 font-sans text-[11px] tracking-widest uppercase transition-colors duration-300 rounded-sm shadow-md cursor-pointer"
                  >
                    Cotizar Solución Corporativa
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
