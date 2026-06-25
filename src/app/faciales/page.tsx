import type { Metadata } from "next";
import { CatalogHero } from "@/components/CatalogHero";
import { CustomCursor } from "@/components/CustomCursor";
import { FACIALES_HERO_IMAGE_SRC } from "./_components/faciales-constants";
import { FacialesIntroSection } from "./_components/FacialesIntroSection";
import { FacialesTreatmentsSection } from "./_components/FacialesTreatmentsSection";

export const metadata: Metadata = {
  title: "Tratamientos Faciales y Limpieza Profunda en Roldanillo | Zen Spa Bienestar",
  description:
    "Limpieza facial profunda con punta de diamante, hidratación molecular y peeling químico para combatir manchas y acné por pavesa en cabinas de total privacidad en Roldanillo.",
  openGraph: {
    title: "Tratamientos Faciales y Limpieza Profunda en Roldanillo | Zen Spa Bienestar",
    description:
      "Limpieza facial profunda con punta de diamante, hidratación molecular y peeling químico para combatir manchas y acné por pavesa en cabinas de total privacidad en Roldanillo.",
    locale: "es_CO",
    type: "website",
  },
};

export default function FacialesPage() {
  return (
    <main className="relative min-h-screen bg-zen-beige pb-0 selection:bg-zen-pink selection:text-white">
      <CustomCursor />
      <CatalogHero
        title="Faciales"
        subtitle="Catálogo de Tratamientos"
        backgroundImage={FACIALES_HERO_IMAGE_SRC}
        imageAlt="Tratamientos Faciales Zen Spa Roldanillo — imagen de portada dermoestética"
      />
      <FacialesIntroSection />
      <FacialesTreatmentsSection />
    </main>
  );
}
