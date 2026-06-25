export type B2BSolution = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const CORPORATE_SOLUTIONS: B2BSolution[] = [
  {
    id: "in-house",
    title: "Jornadas de Bienestar In-House",
    description:
      "Llevamos el santuario de Zen Spa directamente a su lugar de trabajo para ofrecer masajes de relajación en camilla o mini faciales exprés sin necesidad de desplazamientos.",
    image: "/images/corporativo/in-house.webp",
    imageAlt: "Terapeuta certificada realizando masaje de relajación en oficina a empleado corporativo",
  },
  {
    id: "gift-cards",
    title: "Beneficios y Recompensas (Gift Cards)",
    description:
      "Reconozca el esfuerzo de su equipo con Gift Cards digitales o impresas personalizadas con el logo de su empresa para premiar el rendimiento o celebrar cumpleaños.",
    image: "/images/corporativo/gift-cards.webp",
    imageAlt: "Tarjetas de regalo físicas y digitales de Zen Spa para incentivos corporativos",
  },
  {
    id: "eventos",
    title: "Eventos Exclusivos (Zen Day)",
    description:
      "Cierre Zen Spa de forma exclusiva para su equipo. Una experiencia de team building de lujo de media jornada o jornada completa con masajes, tratamientos faciales y barra de alimentos saludables.",
    image: "/images/corporativo/eventos.webp",
    imageAlt: "Colaboradores corporativos en bata relajándose durante una jornada de Zen Day en spa privado",
  },
  {
    id: "talleres",
    title: "Charlas y Talleres de Bienestar",
    description:
      "Eduque y empodere a su equipo con conocimiento práctico dirigido por especialistas en temas como: Postura y pausas activas, Nutrición para la productividad, Manejo del estrés y Mindful Fitness (estiramiento guiado).",
    image: "/images/corporativo/talleres.webp",
    imageAlt: "Especialista dictando taller de higiene postural y manejo de estrés a ejecutivos en sala de conferencias",
  },
  {
    id: "suscripcion",
    title: "Alianzas Estratégicas y Planes de Suscripción",
    description:
      "Diseñamos planes de suscripción mensuales o trimestrales con tarifas corporativas especiales para asegurar que el autocuidado de su equipo se convierta en una rutina, no en un evento.",
    image: "/images/corporativo/suscripcion.webp",
    imageAlt: "Lobby minimalista de Zen Spa mostrando información sobre membresías de bienestar corporativo",
  },
];

export const VALUE_PROPOSITIONS = [
  {
    title: "Aumentar la Productividad",
    description:
      "Empleados más sanos y libres de estrés son más creativos, enfocados y productivos.",
    icon: "mdi:trending-up",
  },
  {
    title: "Reducir la Rotación y el Ausentismo",
    description:
      "Un equipo que se siente valorado y cuidado es un equipo con mayor tasa de retención.",
    icon: "mdi:account-multiple-check",
  },
  {
    title: "Mejorar el Clima Laboral",
    description:
      "Ofrecer beneficios innovadores lo posiciona como un empleador atractivo, listo para competir por el mejor talento.",
    icon: "mdi:emoticon-happy-outline",
  },
];

export const CORPORATE_WHATSAPP_HREF =
  "https://wa.me/573156881765?text=Hola%20Zen%20Spa!%20%F0%9F%92%BC%20Me%20interesa%20recibir%20una%20propuesta%20personalizada%20de%20Bienestar%20Corporativo%20B2B%20para%20mi%20empresa.";
