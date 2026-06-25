"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const services = [
  {
    id: 'experiencias',
    title: 'Experiencias',
    description: 'Rituales de conexión y paz profunda',
    image: '/images/servicios/card-experiencias.webp',
    className: 'md:col-span-2 md:row-span-2',
    href: '/experiencias',
  },
  {
    id: 'faciales',
    title: 'Tratamientos Faciales',
    description: 'Alquimia para una piel radiante y rejuvenecida',
    image: '/images/servicios/card-faciales.webp',
    className: 'md:col-span-1 md:row-span-1',
    href: '/faciales',
  },
  {
    id: 'bronceo',
    title: 'Bronceo',
    description: 'Tono dorado brasilero perfecto y saludable',
    image: '/images/servicios/card-bronceo.webp',
    className: 'md:col-span-1 md:row-span-1',
    href: '/bronceado',
  },
  {
    id: 'mini-divas',
    title: 'Mini Divas Zen Spa',
    description: 'Magia, color y cuidado para las más pequeñas',
    image: '/images/servicios/card-minidivas.webp',
    className: 'md:col-span-1 md:row-span-1',
    href: '/minidivas',
  },
  {
    id: 'b2b',
    title: 'Spa para Empresas',
    description: 'Productividad y ROI a través del bienestar corporativo',
    image: '/images/servicios/card-corporativo.webp',
    className: 'md:col-span-1 md:row-span-1',
    href: '/corporativo',
  },
  {
    id: 'masajes',
    title: 'Masajes Individuales',
    description: 'Descanso y restauración física profunda',
    image: '/images/servicios/card-masajes.webp',
    className: 'md:col-span-1 md:row-span-1',
    href: '/masajes',
  },
];

export function ServicesGrid() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-zen-brown text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
            Portfolio Editorial
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-zen-wine">
            Nuestros <span className="italic text-zen-brown">Servicios</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[350px]">
          {services.map((service, index) => {
            const CardContent = (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`group relative h-full w-full overflow-hidden bg-zen-beige cursor-pointer ${service.className} after:absolute after:inset-0 after:bg-zen-wine/5 after:mix-blend-multiply after:pointer-events-none`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zen-wine/90 via-zen-wine/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                    <h3 className="text-2xl md:text-3xl font-serif text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-zen-beige/90 font-sans text-sm tracking-wide opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );

            return service.href === '#' ? (
              <div key={service.id} className={service.className}>
                {CardContent}
              </div>
            ) : (
              <Link key={service.id} href={service.href} className={service.className + ' block h-full w-full'}>
                {CardContent}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
