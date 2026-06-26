import type { Metadata } from "next";
import { CatalogHero } from "@/components/CatalogHero";
import { CustomCursor } from "@/components/CustomCursor";
import { BronceoIntroSection } from "./_components/BronceoIntroSection";
import { BronceoPricingSection } from "./_components/BronceoPricingSection";

export const metadata = {
  title: 'Bronceo Brasilero con Sol',
  description: 'Consigue tu marquinha perfecta de forma segura antes de las 11:00 AM con DHA orgánica de caña en nuestro solárium privado de Roldanillo.'
};

export default function BronceadoPage() {
  return (
    <main className="relative min-h-screen bg-zen-beige pb-8 selection:bg-zen-pink selection:text-white">
      <CustomCursor />
      <CatalogHero
        title="Bronceado"
        subtitle="Catálogo de"
        backgroundImage="/images/bronceado/portada-bronceo.webp"
        imageAlt="Bronceo brasilero con sol en Roldanillo para fijar marquinha de forma segura y duradera"
      />
      <BronceoIntroSection />
      <BronceoPricingSection />
    </main>
  );
}
