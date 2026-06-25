import type { Metadata } from "next";
import { CatalogHero } from "@/components/CatalogHero";
import { CustomCursor } from "@/components/CustomCursor";
import { MasajesIntroSection } from "./_components/MasajesIntroSection";
import { MasajesCatalogSection } from "./_components/MasajesCatalogSection";

export const metadata: Metadata = {
  title: "Masajes Relajantes en Roldanillo | Zen Spa Bienestar",
  description:
    "Disfruta de masajes relajantes individuales con piedras volcánicas, bambuterapia y reflexología podal en cabinas insonorizadas con total privacidad en Roldanillo.",
  openGraph: {
    title: "Masajes Relajantes en Roldanillo | Zen Spa Bienestar",
    description:
      "Disfruta de masajes relajantes individuales con piedras volcánicas, bambuterapia y reflexología podal en cabinas insonorizadas con total privacidad en Roldanillo.",
    locale: "es_CO",
    type: "website",
  },
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
