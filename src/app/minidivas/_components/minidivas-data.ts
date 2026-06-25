/* ───────────────────────────────────────────────
 *  Mini Divas data — extracted from the 2026 catalog
 * ─────────────────────────────────────────────── */

export type PriceTier = {
  label: string;
  price: string;
};

export type MiniDivasPackage = {
  id: string;
  title: string;
  description: string;
  includes: string[];
  /** For shared packages that split "Para la Diva" / "Para Mamá/Papá" */
  includesForParent?: string[];
  priceTiers: PriceTier[];
  image: string;
  /** Optional badge text like "Spa Familiar"  */
  badge?: string;
  /** Optional note shown below the package title */
  note?: string;
};

/* ──────────────────────────────────────────────────────────────
 * SECTION 1: Paquetes de Ensueño Diva (solo niñas)
 * ────────────────────────────────────────────────────────────── */

export const DIVA_PACKAGES: MiniDivasPackage[] = [
  {
    id: "primer-dia",
    title: "Mi Primer Día de Spa",
    description:
      "La introducción perfecta al mundo del bienestar. Una tarde llena de detalles divertidos y relajantes para que se sienta como una princesa.",
    includes: [
      "Mascarilla facial",
      "Masaje relajante",
      "Mascarilla pepino natural",
      "Peinado fantasía",
      "Copa de helado",
    ],
    priceTiers: [
      { label: "1 Niña", price: "$135.000" },
      { label: "2 Niñas", price: "$215.000" },
      { label: "3 Niñas", price: "$280.000" },
    ],
    image: "/images/minidivas/primer-dia.webp",
  },
  {
    id: "diva-premium",
    title: "Experiencia Diva Premium",
    description:
      "Elevamos su día de spa con más mimos y sorpresas para que se sienta como una verdadera diva en una celebración inolvidable.",
    includes: [
      "Mascarilla facial",
      "Masaje relajante con aromaterapia",
      "Exfoliación de manos",
      "Manicura",
      "Peinado fantasía",
      "Maquillaje fantasía",
      "Snack",
      "Copa de helado",
    ],
    priceTiers: [
      { label: "1 Niña", price: "$160.000" },
      { label: "2 Niñas", price: "$290.000" },
      { label: "3 Niñas", price: "$380.000" },
    ],
    image: "/images/minidivas/experiencia-diva-premium.webp",
  },
  {
    id: "diva-vip",
    title: "Celebración Diva VIP",
    description:
      "La experiencia más exclusiva, donde cada detalle es personalizado para hacer sus sueños realidad. El día especial que nunca olvidará.",
    includes: [
      "Toda la experiencia del Paquete Diva Premium",
      "Decoración personalizada a su gusto",
      "Manicura y pedicura",
      "Refrigerio",
      "Video especial de recuerdo",
      "¡Regalo sorpresa!",
    ],
    priceTiers: [
      { label: "1 Niña", price: "$195.000" },
      { label: "2 Niñas", price: "$370.000" },
      { label: "3 Niñas", price: "$490.000" },
    ],
    image: "/images/minidivas/celebracion-diva-vip.webp",
  },
];

/* ──────────────────────────────────────────────────────────────
 * SECTION 2: Paquetes para Compartir (con Mamá o Papá)
 * ────────────────────────────────────────────────────────────── */

export const SHARED_PACKAGES: MiniDivasPackage[] = [
  {
    id: "conexion-magica",
    title: "Conexión Mágica",
    badge: "Con Mamá o Papá",
    description:
      "La experiencia más exclusiva, donde cada detalle es personalizado para hacer sus sueños realidad. El día especial que nunca olvidará.",
    includes: [
      "Incluye toda la experiencia del Paquete 1 \"Mi Primer Día de Spa\"",
    ],
    includesForParent: [
      "Masaje relajante de 45 min e hidratación facial",
    ],
    priceTiers: [
      { label: "1 Niña + 1 Adulto", price: "$245.000" },
      { label: "1 Niña + 2 Adultos", price: "$370.000" },
      { label: "2 Niñas + 1 Adulto", price: "$320.000" },
      { label: "2 Niñas + 2 Adultos", price: "$440.000" },
    ],
    image: "/images/minidivas/conexion-magica.webp",
  },
  {
    id: "vinculo-premium",
    title: "Vínculo Premium",
    badge: "Con Mamá o Papá",
    description:
      "Una experiencia de lujo para consentirse mutuamente y fortalecer lazos.",
    includes: [
      "Incluye toda la experiencia del Paquete 2 \"Experiencia Diva Premium\"",
    ],
    includesForParent: [
      "Copa de vino",
      "Masaje relajante de 1 hora con piedras volcánicas",
      "Hidratación facial",
      "Reflexología podal",
    ],
    priceTiers: [
      { label: "1 Niña + 1 Adulto", price: "$280.000" },
      { label: "1 Niña + 2 Adultos", price: "$410.000" },
      { label: "2 Niñas + 1 Adulto", price: "$395.000" },
      { label: "2 Niñas + 2 Adultos", price: "$530.000" },
    ],
    image: "/images/minidivas/vinculo-premium.webp",
  },
  {
    id: "recuerdo-vip",
    title: "Recuerdo VIP",
    badge: "Con Mamá o Papá",
    description:
      "La experiencia más completa para una celebración familiar de alto nivel.",
    includes: [
      "Incluye toda la experiencia del Paquete 3 \"Celebración Diva VIP\"",
    ],
    includesForParent: [
      "Masaje relajante con piedras volcánicas y bambuterapia",
      "Limpieza facial",
      "Copa de vino",
      "Refrigerio",
    ],
    priceTiers: [
      { label: "1 Niña + 1 Adulto", price: "$330.000" },
      { label: "1 Niña + 2 Adultos", price: "$480.000" },
      { label: "2 Niñas + 1 Adulto", price: "$485.000" },
      { label: "2 Niñas + 2 Adultos", price: "$630.050" },
    ],
    image: "/images/spa-local/poster-minidivas.webp",
  },
];

/* ──────────────────────────────────────────────────────────────
 * SECTION 3: Fiestas (¡El Cumple de sus Sueños! / Mini Divas en tu Casa)
 * ────────────────────────────────────────────────────────────── */

export const PARTY_PACKAGES: MiniDivasPackage[] = [
  {
    id: "cumple-suenos",
    title: "¡El Cumple de sus Sueños!",
    description:
      "Regala una experiencia de autocuidado junto a sus amigas que nunca olvidará.",
    note: "Transformamos Zen Spa en un mundo de fantasía privado para ella y todas sus amigas. Nos encargamos de cada detalle para crear una fiesta de cumpleaños que nunca olvidará: desde la decoración temática y la comida, hasta la música y las sorpresas.",
    includes: [
      "Decoración especial",
      "Tarjeta virtual de invitación para todas sus amigas",
      "Actividades de spa para todas las invitadas",
      "Mesa de dulces, snacks y torta",
      "Regalos y sorpresas",
      "Y mucho más...",
    ],
    priceTiers: [],
    image: "/images/spa-local/sala.webp",
  },
  {
    id: "minidivas-en-casa",
    title: "¡Mini Divas en tu Casa!",
    description:
      "Regala una experiencia de autocuidado junto a sus amigas que nunca olvidará.",
    note: "Llevamos la magia del spa directamente a tu hogar. Montamos un spa privado en tu casa para que ella y sus amigas vivan una experiencia única con todo el cuidado profesional.",
    includes: [
      "Montaje de spa en casa",
      "Tarjeta virtual para todas las invitadas",
      "Batas y estaciones temáticas",
      "Actividades de spa para todas",
      "Personal especializado",
      "Regalos y sorpresas",
      "Y mucho más...",
    ],
    priceTiers: [],
    image: "/images/minidivas/minidivas-en-casa.webp",
  },
];

/* ──────────────────────────────────────────────────────────────
 * GALLERY: The real photos from the catalog
 * ────────────────────────────────────────────────────────────── */

export const GALLERY_IMAGES: string[] = [
  "/images/minidivas/spa-infantil-cumpleanos-roldanillo.webp",
  "/images/minidivas/tarde-de-spa-ninas-valle.webp",
  "/images/minidivas/celebracion-infantil-roldanillo.webp",
  "/images/minidivas/spa-infantil-domicilio-zarzal.webp",
  "/images/minidivas/mimos-para-ninas-roldanillo.webp",
  "/images/minidivas/fiesta-spa-ninas-toro.webp",
  "/images/minidivas/salon-spa-infantil-bolivar.webp",
  "/images/minidivas/minidivas-gallery-1.webp",
  "/images/minidivas/minidivas-gallery-2.webp",
  "/images/minidivas/minidivas-gallery-3.webp",
  "/images/minidivas/minidivas-gallery-4.webp",
  "/images/minidivas/minidivas-gallery-5.webp",
  "/images/minidivas/minidivas-gallery-6.webp",
];
