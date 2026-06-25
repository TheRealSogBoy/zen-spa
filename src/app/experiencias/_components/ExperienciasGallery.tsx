"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

const GALLERY_IMAGES = [
  "/images/experiencias/spa-en-pareja-masaje-relajante-valle.webp",
  "/images/experiencias/dia-de-spa-para-amigas-roldanillo.webp",
  "/images/experiencias/jacuzzi-parejas-bienestar-zarzal.webp",
  "/images/experiencias/conexion-parejas-masaje-la-union.webp",
  "/images/experiencias/masaje-facial-parejas-roldanillo.webp",
  "/images/experiencias/ritual-spa-parejas-cumpleanos-toro.webp",
  "/images/experiencias/regalo-dia-de-spa-parejas-valle.webp",
  "/images/experiencias/ritual-nocturno-jacuzzi-roldanillo.webp",
  "/images/experiencias/experiencia-gallery-1.webp",
  "/images/experiencias/experiencia-gallery-2.webp",
  "/images/experiencias/experiencia-gallery-3.webp",
  "/images/experiencias/experiencia-gallery-4.webp",
  "/images/experiencias/experiencia-gallery-5.webp",
  "/images/experiencias/experiencia-gallery-6.webp",
  "/images/experiencias/experiencia-gallery-7.webp",
];

export function ExperienciasGallery() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 10);
      
      const totalScrollable = scrollWidth - clientWidth;
      if (totalScrollable > 0) {
        setScrollProgress((scrollLeft / totalScrollable) * 100);
      } else {
        setScrollProgress(0);
      }
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll);
      checkScroll();
      window.addEventListener("resize", checkScroll);
    }
    return () => {
      if (el) {
        el.removeEventListener("scroll", checkScroll);
      }
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;
      const scrollAmount = direction === "left" ? -clientWidth * 0.75 : clientWidth * 0.75;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative z-10 py-24 md:py-32 bg-white px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-zen-brown text-xs font-bold tracking-[0.3em] uppercase mb-4 block underline underline-offset-[10px] decoration-zen-brown/20">
            Momentos Zen
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-zen-wine">
            Experiencias de <span className="italic text-zen-brown">Conexión</span>
          </h2>
          <div className="w-12 h-px bg-zen-brown mx-auto mt-6 mb-6" />
          <p className="text-zen-wine/70 max-w-2xl mx-auto leading-relaxed font-sans">
            Una mirada íntima a las experiencias de relajación y complicidad en pareja y amigas que diseñamos en Roldanillo.
          </p>
        </motion.div>

        {/* Carousel Container Wrapper */}
        <div className="relative group/carousel">
          {/* Navigation Arrows */}
          <button
            onClick={() => handleScroll("left")}
            className={`absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border border-zen-brown/10 flex items-center justify-center text-zen-wine shadow-lg transition-all duration-300 hover:bg-zen-wine hover:text-white ${
              showLeftArrow ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
            }`}
            aria-label="Diapositiva anterior"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() => handleScroll("right")}
            className={`absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border border-zen-brown/10 flex items-center justify-center text-zen-wine shadow-lg transition-all duration-300 hover:bg-zen-wine hover:text-white ${
              showRightArrow ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
            }`}
            aria-label="Siguiente diapositiva"
          >
            <ChevronRight size={24} />
          </button>

          {/* Swipeable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 px-2 cursor-grab active:cursor-grabbing select-none"
            style={{ scrollbarWidth: "none" }}
          >
            {GALLERY_IMAGES.map((src, index) => (
              <div
                key={src}
                className="w-[280px] sm:w-[340px] aspect-[3/4] flex-shrink-0 snap-start relative overflow-hidden rounded-2xl group/item shadow-md ring-1 ring-zen-brown/10"
              >
                <Image
                  src={src}
                  alt={`Momento Zen Spa Parejas ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 280px, 340px"
                  loading="lazy"
                  className="object-cover transition-transform duration-[1200ms] group-hover/item:scale-105 pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zen-wine/20 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-xl text-center text-xs tracking-wider uppercase font-semibold flex items-center justify-center gap-1.5">
                  <Heart size={12} className="text-zen-pink fill-zen-pink animate-pulse" />
                  Zen Spa Parejas
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Progress Bar Indicator */}
        <div className="w-48 h-[2px] bg-zen-wine/10 mx-auto mt-10 rounded-full overflow-hidden relative">
          <div
            className="absolute top-0 left-0 h-full bg-zen-brown transition-all duration-150 rounded-full"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </div>
    </section>
  );
}
