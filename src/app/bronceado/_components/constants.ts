/** Cubic-bezier for motion/react (must be a tuple, not `number[]`). */
const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

export const SECTION_PAD = "py-32 px-6 md:px-12 lg:px-24";
export const CONTAINER = "max-w-7xl mx-auto";

export const reveal = {
  fadeUp: (delay = 0, margin = "-50px") => ({
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin } as const,
    transition: { duration: 1, ease: EASE_OUT_EXPO, delay },
  }),
  fadeUpSlow: {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" as const },
    transition: { duration: 1.2, ease: EASE_OUT_EXPO },
  },
  fromLeft: {
    initial: { opacity: 0, x: -40 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-50px" as const },
    transition: { duration: 1, ease: EASE_OUT_EXPO },
  },
  fromRight: {
    initial: { opacity: 0, x: 40 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-50px" as const },
    transition: { duration: 1, ease: EASE_OUT_EXPO },
  },
  fadeUpSmall: (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-30px" as const },
    transition: { duration: 0.8, ease: EASE_OUT_EXPO, delay },
  }),
};
