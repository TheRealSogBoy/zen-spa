"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { reveal } from "./constants";
import type { FriendPlan } from "./friends-data";

export function FriendPlanCard({ plan }: { plan: FriendPlan }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    [plan.motionDelay ? 60 : 30, plan.motionDelay ? -60 : -30]
  );

  return (
    <motion.div
      ref={ref}
      style={{ y: parallaxY }}
      className="h-full"
    >
      <motion.div
        {...reveal.fadeUpSmall(plan.motionDelay ?? 0)}
        className="bg-white/95 backdrop-blur-sm rounded-sm px-6 py-8 md:px-10 md:py-10 border border-zen-wine/10 text-left h-full shadow-md"
      >
        <h3 className="font-serif text-2xl md:text-3xl text-zen-wine mb-6 pb-4 border-b border-zen-wine/10 font-bold">
          {plan.title}
          {plan.subtitle && (
            <span className="text-sm font-sans text-zen-brown block mt-2">
              {plan.subtitle}
            </span>
          )}
        </h3>
        <ul className="space-y-3 text-lg text-zen-wine/90 font-serif list-disc pl-5">
          {plan.rows.map((row) => (
            <li
              key={row.label}
              className={`${row.highlight ? " text-zen-wine font-medium" : ""}`}
            >
              <span>{row.label} </span>
              <span className="font-bold">{row.price}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}
