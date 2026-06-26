import type { Metadata } from "next";
import { CatalogHero } from "@/components/CatalogHero";
import { CustomCursor } from "@/components/CustomCursor";
import { EXPERIENCIAS_HERO_IMAGE } from "./_components/constants";
import { ExperienciasPackagesSection } from "./_components/ExperienciasPackagesSection";
import { ExperienciasRitualsSection } from "./_components/ExperienciasRitualsSection";
import { ExperienciasGallery } from "./_components/ExperienciasGallery";

export const metadata = {
  title: 'Experiencias de Spa en Pareja y Amigas',
  description: 'Disfruta de absoluta privacidad acústica y confort premium en nuestro santuario de Roldanillo. Rituales con baño de vapor, masajes y cenas románticas.'
};

export default function ExperienciasPage() {
  return (
    <main className="relative min-h-screen bg-zen-beige pb-0 selection:bg-zen-pink selection:text-white">
      <CustomCursor />
      
      <CatalogHero
        title="Experiencias"
        subtitle="Catálogo de Bienestar"
        backgroundImage={EXPERIENCIAS_HERO_IMAGE}
        imageAlt="Ritual de spa en pareja en Roldanillo con copas de vino y masajes relajantes de cuerpo completo"
      />

      {/* Paquetes de Parejas y Amigas */}
      <ExperienciasPackagesSection />
      
      {/* Bonos de Regalo (Rituales excluvos) */}
      <ExperienciasRitualsSection />

      {/* Galería de fotos interactiva */}
      <ExperienciasGallery />
    </main>
  );
}
