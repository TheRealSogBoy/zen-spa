const IMG_BASE = "/images/faciales";

export type FacialTreatment = {
  title: string;
  subtitle: string;
  description: string;
  price: string;
  priceNote?: string;
  duration?: string;
  includes?: string[];
  image: string;
  imageAlt: string;
  motionDelay?: number;
};

export const FACIAL_TREATMENTS: FacialTreatment[] = [
  {
    title: "Limpieza Facial Express",
    subtitle: "El mantenimiento esencial para tu rutina",
    description:
      "Este tratamiento está diseñado para limpiar y nutrir la piel en poco tiempo, ideal para mantener el rostro libre de impurezas entre tratamientos más profundos.",
    price: "$90.000 COP",
    duration: "45 min",
    includes: [
      "Higienización profesional",
      "Vapor ozono para abrir poros",
      "Extracción de comedones",
      "Nutrición celular",
    ],
    image: `${IMG_BASE}/express.webp`,
    imageAlt: "Limpieza facial express en Roldanillo para higienización rápida y nutrición celular frente a la radiación del norte del Valle",
  },
  {
    title: "Limpieza Facial Profunda",
    subtitle: "Renovación total con 5 tecnologías",
    description:
      "Nuestra experiencia más completa. Un ritual intensivo que combina aparatología avanzada para pulir y firmar la piel en una sola sesión. Perfecto para pieles que necesitan un cambio visible inmediato.",
    price: "$120.000 COP",
    duration: "1 hr 45 min",
    includes: [
      "Pala ultrasónica",
      "Microdermoabrasión para exfoliar",
      "Tratamiento de despigmentación",
      "Porcelanización para textura suave",
      "Todo el protocolo de la Limpieza Express",
    ],
    image: `${IMG_BASE}/profunda.webp`,
    imageAlt: "Tratamiento de limpieza facial profunda con punta de diamante en Roldanillo para remover la pavesa y el hollín de caña de azúcar",
    motionDelay: 0.1,
  },
  {
    title: "Hidratación Facial",
    subtitle: "Luminosidad y frescura inmediata",
    description:
      "Ideal para combatir la resequedad causada por el clima cálido. Devolvemos el agua y los nutrientes esenciales a tu piel para un efecto de \"cara lavada\" radiante y saludable.",
    price: "$50.000 COP",
    image: `${IMG_BASE}/hidratacion.webp`,
    imageAlt: "Hidratación facial molecular profunda en Zarzal para restaurar agua y lípidos protectores frente al clima cálido",
    motionDelay: 0.2,
  },
  {
    title: "Tratamiento Anti-Manchas",
    subtitle: "Unifica el tono y recupera la confianza",
    description:
      "Un protocolo enfocado en tratar hiperpigmentaciones solares u hormonales. Trabajamos para aclarar y unificar el tono de tu piel de manera segura y progresiva.",
    price: "Precio sujeto a valoración",
    priceNote: "Agendamos tu diagnóstico para personalizar el tratamiento",
    image: `${IMG_BASE}/tratamiento-anti-manchas.webp`,
    imageAlt: "Dermodespigmentación facial y peeling químico en La Unión para atenuar manchas causadas por el sol extremo",
  },
  {
    title: "Rejuvenecimiento Facial",
    subtitle: "Firmeza y juventud",
    description:
      "Nuestro tratamiento más avanzado para revertir los signos de la edad. Enfocado en la regeneración celular, mejora la elasticidad y suaviza líneas de expresión para una piel visiblemente más joven.",
    price: "$500.000 COP",
    image: `${IMG_BASE}/rejuvenecimiento-facial.webp`,
    imageAlt: "Rejuvenecimiento facial con aparatología activa en Toro para regeneración celular profunda y firmeza dérmica",
    motionDelay: 0.1,
  },
];
