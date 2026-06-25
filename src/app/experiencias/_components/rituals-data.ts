export type RitualVariant = "beige" | "wine";

export type RitualCardData = {
  title: string;
  price: string;
  description: string;
  variant: RitualVariant;
  motionDelay?: number;
};

export const RITUAL_CARDS: RitualCardData[] = [
  {
    title: "Bono de Masaje Relajante Completo",
    price: "$100.000 / $120.000 COP",
    description:
      "Alivia el estrés y la tensión muscular con un masaje relajante que combina movimientos suaves y aromaterapia para un bienestar total.",
    variant: "beige",
  },
  {
    title: "Bono de Masaje Relajante (60 MIN)",
    price: "$150.000 COP",
    description:
      "Eleva el bienestar con un masaje de lujo. Incluye piedras volcánicas, bambuterapia, copa de vino y reflexología podal para una relajación total.",
    variant: "wine",
    motionDelay: 0.1,
  },
  {
    title: "Bono de Masaje + Hidratación Facial",
    price: "$90.000 / $120.000 / $170.000 COP",
    description:
      "La combinación perfecta. Un masaje relajante para liberar el estrés y un mini-facial para devolverle la luz a tu piel.",
    variant: "beige",
    motionDelay: 0.2,
  },
  {
    title: "Bono de Limpieza Facial Profunda",
    price: "$120.000 COP",
    description:
      "El regalo ideal para una piel radiante. Una sesión de limpieza profunda que purifica y revitaliza el rostro, dejándolo con un brillo natural.",
    variant: "wine",
  },
  {
    title: "Bono Masaje + Limpieza Facial",
    price: "$170.000 COP",
    description:
      "Una experiencia completa de cuidado facial y relajación corporal en una misma sesión.",
    variant: "beige",
    motionDelay: 0.1,
  },
  {
    title: "Bono de Limpieza Facial Express",
    price: "$90.000 COP",
    description:
      "Una pausa rápida para nutrir el rostro. Un mini-facial que hidrata y refresca la piel, ideal para un respiro en la rutina.",
    variant: "wine",
    motionDelay: 0.2,
  },
  {
    title: "Bono de Tratamiento Reductor",
    price: "Requiere Valoración",
    description:
      "El regalo perfecto para moldear la figura. Una sesión de masaje reductor y drenaje linfático para definir la silueta y sentirse más ligera.",
    variant: "beige",
  },
  {
    title: "Bono de Tratamiento para Manchas",
    price: "Requiere Valoración",
    description:
      "El regalo de una piel radiante. Una sesión de despigmentación enfocada en atenuar manchas y unificar el tono del rostro.",
    variant: "wine",
    motionDelay: 0.1,
  },
  {
    title: "Bono de Depilación con Cera",
    price: "Precio según la Zona",
    description:
      "Regala suavidad duradera. Un bono para una sesión de depilación en la zona que elija, para una piel libre de vello por más tiempo.",
    variant: "beige",
    motionDelay: 0.2,
  },
];
