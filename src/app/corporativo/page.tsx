import type { Metadata } from "next";
import { CustomCursor } from "@/components/CustomCursor";
import { CorporativoHero } from "./_components/CorporativoHero";
import { CorporativoPropuesta } from "./_components/CorporativoPropuesta";
import { CorporativoSoluciones } from "./_components/CorporativoSoluciones";
import { CorporativoSocialProof } from "./_components/CorporativoSocialProof";

export const metadata: Metadata = {
  title: "Bienestar Corporativo y Planes de Salud B2B | Zen Spa Roldanillo",
  description:
    "Soluciones estratégicas de bienestar corporativo en el Valle del Cauca. Reduzca el ausentismo y aumente la productividad de su equipo con jornadas in-house, Zen Day exclusivo y gift cards personalizadas.",
  openGraph: {
    title: "Bienestar Corporativo y Planes de Salud B2B | Zen Spa Roldanillo",
    description:
      "Soluciones estratégicas de bienestar corporativo en el Valle del Cauca. Reduzca el ausentismo y aumente la productividad de su equipo con jornadas in-house, Zen Day exclusivo y gift cards personalizadas.",
    locale: "es_CO",
    type: "website",
  },
};

export default function CorporativoPage() {
  return (
    <main
      id="corporativo-page"
      className="relative min-h-screen bg-zen-beige pb-0 selection:bg-zen-pink selection:text-white"
    >
      {/* Premium Custom Cursor */}
      <CustomCursor />

      {/* Hero Section */}
      <CorporativoHero />

      {/* Value Proposition Grid (Data-driven) */}
      <CorporativoPropuesta />

      {/* Solutions Portfolio Section (Interactive Tabs) */}
      <CorporativoSoluciones />

      {/* Institutional Social Proof & Allies */}
      <CorporativoSocialProof />
    </main>
  );
}
