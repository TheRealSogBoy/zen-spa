import type { Metadata } from "next";
import { CatalogHero } from "@/components/CatalogHero";
import { CustomCursor } from "@/components/CustomCursor";
import { BronceoIntroSection } from "./_components/BronceoIntroSection";
import { BronceoPricingSection } from "./_components/BronceoPricingSection";

export const metadata: Metadata = {
  title: "Bronceo Brasilero en Roldanillo | Zen Spa Bienestar",
  description:
    "Consigue tu marquinha soñada de forma segura en Roldanillo, Valle del Cauca. Agenda tu sesión antes de las 11:00 AM para una fijación perfecta de DHA de caña de azúcar.",
  openGraph: {
    title: "Bronceo Brasilero en Roldanillo | Zen Spa Bienestar",
    description:
      "Consigue tu marquinha soñada de forma segura en Roldanillo, Valle del Cauca. Agenda tu sesión antes de las 11:00 AM para una fijación perfecta de DHA.",
    locale: "es_CO",
    type: "website",
  },
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
