'use client';

import Image from 'next/image';
import Link from 'next/link';

interface BlogWhatsAppCTAProps {
  whatsappMsg: string;
  serviceUrl: string;
  serviceLabel: string;
}

export function BlogWhatsAppCTA({ whatsappMsg, serviceUrl, serviceLabel }: BlogWhatsAppCTAProps) {
  const href = `https://wa.me/573156881765?text=${whatsappMsg}`;

  return (
    <div className="my-10 rounded-2xl overflow-hidden bg-gradient-to-br from-zen-wine to-zen-brown shadow-lg">
      <div className="px-8 py-8 md:px-12 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
        {/* Icon */}
        <div className="flex-shrink-0 w-16 h-16 bg-white/15 rounded-full flex items-center justify-center text-3xl">
          🌿
        </div>

        <div className="flex-1">
          <p className="font-serif text-white text-xl md:text-2xl leading-snug mb-1">
            ¿Lista para vivir esta experiencia?
          </p>
          <p className="text-zen-beige/80 text-sm font-sans">
            Escríbenos directamente y un asesor te responderá de inmediato.
          </p>
        </div>

        <div className="flex flex-col gap-3 flex-shrink-0">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            id={`whatsapp-cta-${serviceUrl.replace('/', '')}`}
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20b558] text-white font-bold text-sm px-7 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 active:scale-95"
            aria-label="Agendar por WhatsApp"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.444h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.48-8.447zm-8.475 18.303h-.006c-1.775 0-3.513-.477-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm5.454-7.403c-.3-.149-1.773-.875-2.048-.975-.275-.099-.475-.149-.675.15-.2.3-.773.975-.947 1.174-.174.2-.348.225-.648.075-.3-.149-1.265-.465-2.411-1.487-.892-.795-1.494-1.776-1.669-2.074-.174-.3-.018-.461.131-.61.134-.133.3-.347.449-.52.149-.174.199-.299.299-.498.099-.199.05-.374-.025-.524-.075-.149-.675-1.624-.925-2.224-.244-.586-.491-.507-.675-.516l-.575-.01c-.2 0-.525.075-.8.374-.275.3-1.05 1.024-1.05 2.498 0 1.475 1.075 2.9 1.224 3.099.149.2 2.1 3.197 5.086 4.483.712.308 1.267.491 1.7.628.714.227 1.364.195 1.878.118.573-.085 1.773-.724 2.023-1.423.249-.7.249-1.3.174-1.424-.075-.124-.275-.199-.575-.348z"/>
            </svg>
            Agendar por WhatsApp
          </a>

          <Link
            href={serviceUrl}
            id={`service-link-cta-${serviceUrl.replace('/', '')}`}
            className="text-center text-zen-beige/70 hover:text-white text-xs underline underline-offset-2 transition-colors"
          >
            {serviceLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}
