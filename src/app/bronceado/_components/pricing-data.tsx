import type { ReactNode } from "react";

export type PriceCardFields = {
  title: string;
  description: string;
  price: string;
  duration?: string;
  savings?: string;
  includes?: string;
};

export type PricingGroup = {
  eyebrow: string;
  titleItalic: string;
  titleRest: string;
  blurb: string;
  cards: PriceCardFields[];
  aside?: ReactNode;
  image?: string;
};

export const PRICING_GROUPS: PricingGroup[] = [
  {
    eyebrow: "Experiencia Sol",
    titleRest: "Bronceo ",
    titleItalic: "Brasilero",
    blurb: "Para construir un bronceado real y fijar la marquinha de forma duradera.",
    image: "/images/bronceado/page3_img1.jpeg",
    aside: (
      <div className="bg-zen-pink/10 p-5 md:p-6 border-l-2 border-zen-pink rounded-r-lg max-w-sm">
        <p className="text-sm text-zen-wine/80 font-sans leading-relaxed">
          <strong className="block mb-2 font-bold tracking-widest uppercase text-xs text-zen-wine">
            Advertencia Fisiológica y Operativa
          </strong>
          Los bronceados se realizan estrictamente antes de las 11:00 AM. Fisiológicamente, el aumento de la temperatura corporal y la sudoración activa durante la tarde en la región del Valle del Cauca impiden la fijación homogénea de la DHA en la queratina de la piel, lo que puede provocar un tono final parchado o asimétrico.
        </p>
      </div>
    ),
    cards: [
      {
        title: "Sesión Individual",
        description: "Perfecta para un retoque o para probar la experiencia del sol.",
        price: "$90.000 COP",
        duration: "1 Sesión",
        includes: "Baño de luna, Copa de Vino y Botella de agua.",
      },
      {
        title: "Paquete Fija-Marquinha / Plan de Amigas",
        description: "Inversión de paquete recomendado de 3 sesiones, o espacio compartido para 3 amigas simultáneas.",
        duration: "3 Sesiones o 3 Amigas",
        price: "$200.000 COP",
        savings: "Ahorras hasta $70.000 COP",
      },
    ],
  },
];
