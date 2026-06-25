import type { Metadata } from "next";
import { CatalogHero } from "@/components/CatalogHero";
import { CustomCursor } from "@/components/CustomCursor";
import { EXPERIENCIAS_HERO_IMAGE } from "./_components/constants";
import { ExperienciasPackagesSection } from "./_components/ExperienciasPackagesSection";
import { ExperienciasRitualsSection } from "./_components/ExperienciasRitualsSection";
import { ExperienciasGallery } from "./_components/ExperienciasGallery";

export const metadata: Metadata = {
  title: "Rituales de Pareja y Conexión en Roldanillo | Zen Spa Bienestar",
  description:
    "Disfruta de una pausa consciente en pareja o con amigas en Roldanillo. Masajes relajantes de cuerpo completo, baño de vapor y copas de vino en total privacidad acústica.",
  openGraph: {
    title: "Rituales de Pareja y Conexión en Roldanillo | Zen Spa Bienestar",
    description:
      "Disfruta de una pausa consciente en pareja o con amigas en Roldanillo. Masajes relajantes de cuerpo completo, baño de vapor y copas de vino en total privacidad acústica.",
    locale: "es_CO",
    type: "website",
  },
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
