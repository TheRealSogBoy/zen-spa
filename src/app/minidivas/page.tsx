import type { Metadata } from "next";
import { CatalogHero } from "@/components/CatalogHero";
import { CustomCursor } from "@/components/CustomCursor";
import { MINIDIVAS_HERO_IMAGE } from "./_components/constants";
import { MiniDivasPackages } from "./_components/MiniDivasPackages";
import { MiniDivasHomeSpa } from "./_components/MiniDivasHomeSpa";
import { MiniDivasGallery } from "./_components/MiniDivasGallery";

export const metadata = {
  title: 'Spa de Niñas Mini Divas | Fiestas Infantiles',
  description: 'Iniciación lúdica al amor propio y celebraciones de cumpleaños de niñas en Roldanillo. Planes compartidos madre-hija libre de estrés logístico.'
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
