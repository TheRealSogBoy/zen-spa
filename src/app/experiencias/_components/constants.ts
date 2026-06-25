export const EXPERIENCIAS_HERO_IMAGE = "/images/experiencias/portada-experiencias-zen.webp";

/** Background for the gift cards / rituals section */
export const EXPERIENCIAS_RITUALS_BG_IMAGE =
  "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80";

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
