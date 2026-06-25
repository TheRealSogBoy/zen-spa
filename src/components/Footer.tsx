"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

const MAPS_QUERY =
  "https://www.google.com/maps/search/?api=1&query=Calle+8+8-31,+Roldanillo,+Valle+del+Cauca,+Colombia";
const WHATSAPP_HREF = "https://wa.me/573156881765";

export function Footer() {
  return (
    <footer className="relative z-30 mt-auto shrink-0 bg-zen-wine text-zen-beige py-16 px-6 md:px-12 lg:px-24 border-t border-zen-brown/10">
      <div className="max-w-7xl mx-auto">
        {/* Redesigned 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          
          {/* Column 1: Brand Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Image
              src="/logo-zen-spa-blanco.png"
              alt="Zen Spa Logo"
              width={260}
              height={260}
              className="mb-6 h-20 w-auto object-contain md:h-24"
              sizes="(max-width: 768px) 192px, 256px"
              priority
            />
            <p className="font-sans text-xs md:text-sm text-zen-beige/85 leading-relaxed font-light max-w-xs">
              Un santuario de calma y desconexión en el corazón de Roldanillo.
              Cuidado profesional dermoestético y rituales de bienestar para
              reconectar con lo esencial.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-serif text-lg md:text-xl text-zen-pink font-medium tracking-wide mb-6">
              NUESTROS SERVICIOS
            </h4>
            <ul className="flex flex-col gap-3 font-sans text-xs md:text-sm text-zen-beige/80">
              <li>
                <Link
                  href="/bronceado"
                  className="hover:text-zen-pink transition-colors duration-300"
                >
                  Bronceado Brasilero
                </Link>
              </li>
              <li>
                <Link
                  href="/faciales"
                  className="hover:text-zen-pink transition-colors duration-300"
                >
                  Tratamientos Faciales
                </Link>
              </li>
              <li>
                <Link
                  href="/masajes"
                  className="hover:text-zen-pink transition-colors duration-300"
                >
                  Masajes Individuales
                </Link>
              </li>
              <li>
                <Link
                  href="/experiencias"
                  className="hover:text-zen-pink transition-colors duration-300"
                >
                  Experiencias para Dos
                </Link>
              </li>
              <li>
                <Link
                  href="/minidivas"
                  className="hover:text-zen-pink transition-colors duration-300"
                >
                  Mini Divas (Spa de Niñas)
                </Link>
              </li>
              <li>
                <Link
                  href="/corporativo"
                  className="hover:text-zen-pink transition-colors duration-300"
                >
                  Bienestar Corporativo B2B
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Location */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-serif text-lg md:text-xl text-zen-pink font-medium tracking-wide mb-6">
              CONTACTO & RESERVAS
            </h4>
            <ul className="flex flex-col gap-4 font-sans text-xs md:text-sm text-zen-beige/80 mb-6">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Icon icon="mdi:map-marker" className="h-5 w-5 text-zen-pink shrink-0" />
                <a
                  href={MAPS_QUERY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zen-pink transition-colors duration-300 text-left"
                >
                  Calle 8 #8-31, Roldanillo, Valle del Cauca (Calle de los Poetas)
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Icon icon="mdi:whatsapp" className="h-5 w-5 text-zen-pink shrink-0" />
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zen-pink transition-colors duration-300 tabular-nums"
                >
                  +57 315 6881765
                </a>
              </li>
            </ul>

            {/* Social icons row */}
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://instagram.com/zenspa.wc"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zen-beige text-zen-pink transition-colors duration-300"
                aria-label="Instagram"
              >
                <Icon icon="mdi:instagram" className="h-6 w-6 hover:text-zen-beige transition-colors duration-300" />
              </a>
              <a
                href="https://tiktok.com/@zenspa.wc"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zen-beige text-zen-pink transition-colors duration-300"
                aria-label="TikTok"
              >
                <Icon icon="ic:baseline-tiktok" className="h-6 w-6 hover:text-zen-beige transition-colors duration-300" />
              </a>
              <a
                href="https://facebook.com/zenspa.wc"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zen-beige text-zen-pink transition-colors duration-300"
                aria-label="Facebook"
              >
                <Icon icon="mdi:facebook" className="h-6 w-6 hover:text-zen-beige transition-colors duration-300" />
              </a>
              <a
                href="https://linkedin.com/company/zenspa-roldanillo"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zen-beige text-zen-pink transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Icon icon="mdi:linkedin" className="h-6 w-6 hover:text-zen-beige transition-colors duration-300" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom row */}
        <div className="h-px w-full bg-white/10 mb-8 border-t border-white/10 pt-6" />
        <div className="flex flex-col items-center text-center">
          <p className="font-serif italic text-base md:text-lg mb-4 text-zen-pink">
            &ldquo;Wellness is a routine, not an event&rdquo;
          </p>
          <div className="flex flex-col gap-2 items-center text-[10px] tracking-widest uppercase font-sans text-zen-beige/65">
            <Link
              href="/politicas-de-privacidad"
              className="hover:text-zen-pink hover:underline transition-colors mb-2"
            >
              Políticas de Privacidad
            </Link>
            <p>
              © 2026 ZEN SPA 360°. TODOS LOS DERECHOS RESERVADOS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
