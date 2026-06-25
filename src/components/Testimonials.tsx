"use client";

import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: 'Elkin Mondragón',
    text: 'Desde que descubrí Zen Spa, mi piel y mi energía han cambiado. Diana valora mi tiempo.',
  },
  {
    id: 2,
    name: 'Camila Aguirre',
    text: 'La fiesta de Mini Divas fue un sueño para mi hija. Cada detalle fue perfecto.',
  },
  {
    id: 3,
    name: 'Joachim O.',
    text: 'Como piloto de parapente, la recuperación muscular aquí es de otro nivel. Totalmente profesional.',
  },
];

export function Testimonials() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-zen-beige relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[40%] h-[60%] rounded-full bg-zen-pink/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30%] h-[50%] rounded-full bg-zen-brown/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="text-zen-brown text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
            Testimonios Reales
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-zen-wine">
            Experiencias <span className="italic text-zen-brown">Zen</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative p-8 md:p-10 bg-white border border-zen-brown/10 shadow-lg rounded-2xl flex flex-col justify-between"
            >
              {/* Seal / Quote Icon */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-zen-wine rounded-full flex items-center justify-center shadow-md border-2 border-zen-beige">
                <Quote className="w-5 h-5 text-zen-beige fill-current" />
              </div>

              <div className="mt-8 text-center flex flex-col items-center h-full justify-between">
                {/* Stars */}
                <div className="flex gap-1 mb-6 text-[#8c5c51]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Text */}
                <p className="font-sans italic text-base md:text-lg text-zen-wine/90 leading-relaxed mb-8 flex-grow">
                  {`\u201C${testimonial.text}\u201D`}
                </p>
                
                {/* Name */}
                <h4 className="font-sans text-xs md:text-sm font-semibold tracking-widest uppercase text-[#3f0c08] mt-auto">
                  {testimonial.name}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}