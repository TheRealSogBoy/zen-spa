export type PackageCardFields = {
  title: string;
  description: string;
  duration?: string;
  price: string;
  includes: string[];
  image: string;
};

export const SPA_PACKAGES: PackageCardFields[] = [
  {
    title: "Dúo de Bienestar y Masaje",
    description:
      "Un regalo para agradecer la conexión más fuerte. Comparte un momento de paz y bienestar con tu persona favorita.",
    price: "$205.000 COP",
    includes: [
      "Masaje de relajación de cuerpo completo (50 min) para ambos.",
      "Baño de vapor para liberar tensiones.",
      "Hidratación facial.",
      "Infusión de hierbas calmantes al finalizar para prolongar el estado de paz.",
      "Copa de vino.",
    ],
    image: "/images/spa-local/camillas-pareja.webp",
  },
  {
    title: "Ritual de Conexión para Dos",
    description:
      "La experiencia perfecta para desconectar del mundo y reconectar con esa persona especial. Un ritual diseñado para reavivar la complicidad y la calma a través del tacto y la serenidad.",
    price: "$250.000 COP",
    includes: [
      "Masaje relajante de cuerpo completo (1h) sincronizado para los dos.",
      "Reflexología podal and bambuterapia.",
      "Hidratación facial con nutrición.",
      "Baño de vapor con aromaterapia y botella de agua.",
      "Copa de Vino o crema de Whisky.",
      "Snack.",
    ],
    image: "/images/spa-local/zona-masajes.webp",
  },
  {
    title: "Paquete Romántico Premium",
    description:
      "Un día de spa diseñado para el amor. Una experiencia que combina los tratamientos más exclusivos con un ambiente de lujo para que la conexión sea inolvidable.",
    price: "$290.000 COP",
    includes: [
      "Masaje relajante Premium de cuerpo completo (1h 15 min), con piedras volcánicas y bambuterapia.",
      "Reflexología podal para ambos.",
      "Baño de vapor con aromaterapia y botella de agua.",
      "Hidratación facial para ambos.",
      "Fresas con crema.",
      "Copa de vino o crema de whisky.",
      "Snack.",
    ],
    image: "/images/experiencias/plan-romantico-premium.webp",
  },
  {
    title: "Ritual Nocturno",
    description:
      "Una velada inolvidable en un ambiente íntimo y privado. Nuestro Ritual Nocturno es la máxima expresión de romance y bienestar, con decoración exclusiva y cena para celebrar un momento único.",
    price: "$350.000 COP",
    includes: [
      "Privacidad total: el spa solo para ustedes.",
      "Masaje relajante Premium de cuerpo completo (1h 15 min), con piedras volcánicas y bambuterapia.",
      "Reflexología podal para ambos.",
      "Baño de vapor con aromaterapia en un ambiente privado.",
      "Hidratación facial para ambos.",
      "Cena romántica.",
      "Copa de Vino.",
    ],
    image: "/images/experiencias/ritual-nocturno-romantico-roldanillo.webp",
  },
  {
    title: "Ritual Nocturno con Serenata",
    description:
      "Una variación del Ritual Nocturno que incluye una romántica serenata para esa persona especial.",
    price: "$470.000 COP",
    includes: [
      "Todo lo incluido en el Ritual Nocturno.",
      "Serenata en vivo.",
    ],
    image: "/images/experiencias/ritual-nocturno-serenata-parejas-roldanillo.webp",
  },
];
