import type { Metadata } from "next";
import { CatalogHero } from "@/components/CatalogHero";
import { CustomCursor } from "@/components/CustomCursor";
import { FACIALES_HERO_IMAGE_SRC } from "./_components/faciales-constants";
import { FacialesIntroSection } from "./_components/FacialesIntroSection";
import { FacialesTreatmentsSection } from "./_components/FacialesTreatmentsSection";

export const metadata = {
  title: 'Limpieza Facial Profunda y Dermoestética',
  description: 'Desintoxica tu piel del calor y la pavesa agrícola del Valle. Tratamientos faciales dermoestéticos con pala ultrasónica y microdermoabrasión en Roldanillo.'
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
