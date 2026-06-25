import type { Metadata } from "next";
import { CatalogHero } from "@/components/CatalogHero";
import { CustomCursor } from "@/components/CustomCursor";
import { MINIDIVAS_HERO_IMAGE } from "./_components/constants";
import { MiniDivasPackages } from "./_components/MiniDivasPackages";
import { MiniDivasHomeSpa } from "./_components/MiniDivasHomeSpa";
import { MiniDivasGallery } from "./_components/MiniDivasGallery";

export const metadata: Metadata = {
  title: "Mini Divas: Spa Infantil y Familiar en Roldanillo | Zen Spa Bienestar",
  description:
    "Descubre la magia del autocuidado lúdico para niñas en Roldanillo y el norte del Valle. Planes individuales, grupales de cumpleaños y servicio a domicilio de mimos.",
  openGraph: {
    title: "Mini Divas: Spa Infantil y Familiar en Roldanillo | Zen Spa Bienestar",
    description:
      "Descubre la magia del autocuidado lúdico para niñas en Roldanillo y el norte del Valle. Planes individuales, grupales de cumpleaños y servicio a domicilio de mimos.",
    locale: "es_CO",
    type: "website",
  },
};

export default function MiniDivasPage() {
  return (
    <main className="relative min-h-screen bg-zen-beige pb-0 selection:bg-zen-pink selection:text-white">
      <CustomCursor />
      
      {/* Hero Section */}
      <CatalogHero
        title="Mini Divas"
        subtitle="Su Momento de Brillar"
        backgroundImage={MINIDIVAS_HERO_IMAGE}
        imageAlt="Mini Divas Spa infantil en Roldanillo - tarde de mascarillas de pepino, peinado fantasía y helado"
        overlayDepth="deep"
      />

      {/* Main Content Sections */}
      <MiniDivasPackages />
      <MiniDivasHomeSpa />
      <MiniDivasGallery />

    </main>
  );
}
