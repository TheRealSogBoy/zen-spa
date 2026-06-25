export const MINIDIVAS_HERO_IMAGE = "/images/minidivas/portada-mini-divas.webp";

export const reveal = {
  fadeUpIntro: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" as const },
    transition: { duration: 0.8 },
  },
  fadeUpCard: (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, delay },
  }),
};
