import type { Metadata } from "next";
import { CustomCursor } from "@/components/CustomCursor";
import { CorporativoHero } from "./_components/CorporativoHero";
import { CorporativoPropuesta } from "./_components/CorporativoPropuesta";
import { CorporativoSoluciones } from "./_components/CorporativoSoluciones";
import { CorporativoSocialProof } from "./_components/CorporativoSocialProof";

export const metadata = {
  title: 'Bienestar Corporativo B2B | Salud Laboral',
  description: 'Soluciones estratégicas de bienestar para empresas en el Valle del Cauca. Jornadas de masajes in-house, gift cards y alianzas gubernamentales.'
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
