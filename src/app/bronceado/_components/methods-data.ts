export type MethodCardData = {
  image: string;
  alt: string;
  tag: string;
  title: string;
  description: string;
  durationLabel: string;
  motionDelay?: number;
};

export const METHOD_CARDS: MethodCardData[] = [
  {
    image: "/images/bronceado/page3_img1.jpeg",
    alt: "Bronceo Brasilero",
    tag: "Con Sol",
    title: "Bronceo Brasilero",
    description:
      "Ritual de sol con cintas para una marquinha definida. Crea un bronceado natural, profundo y duradero. Ideal para quien busca la experiencia del sol.",
    durationLabel: "Duración: ~2h",
  },
  {
    image: "/images/bronceado/page3_img2.jpeg",
    alt: "Bronceo Orgánico",
    tag: "Sin Sol",
    title: "Bronceo Orgánico",
    description:
      "Aplicación express sin sol con aerógrafo (DHA). Color dorado inmediato que dura 12 días. Perfecto para eventos o quien necesita un resultado rápido.",
    durationLabel: "Duración: ~30 min",
    motionDelay: 0.1,
  },
];
