import type { Metadata } from "next";
import { CatalogHero } from "@/components/CatalogHero";
import { CustomCursor } from "@/components/CustomCursor";
import { MasajesIntroSection } from "./_components/MasajesIntroSection";
import { MasajesCatalogSection } from "./_components/MasajesCatalogSection";

export const metadata = {
  title: 'Masajes Relajantes y Descontracturantes',
  description: 'Terapia corporal profunda, reflexología podal y masajes de relajación con piedras volcánicas calientes y bambuterapia en Roldanillo.'
};

export default function MasajesPage() {
  return (
    <main className="relative min-h-screen bg-zen-beige pb-0 selection:bg-zen-pink selection:text-white">
      <CustomCursor />
      
      <CatalogHero
        title="Masajes"
        subtitle="Catálogo de Bienestar"
        backgroundImage="/images/masajes/portada-masajes.webp"
        imageAlt="Masaje relajante con piedras volcánicas y bambuterapia en cabina insonorizada en el norte del Valle"
      />

      <MasajesIntroSection />
      <MasajesCatalogSection />
    </main>
  );
}
