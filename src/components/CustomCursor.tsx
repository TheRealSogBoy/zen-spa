"use client";

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isOverDark, setIsOverDark] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      if (target) {
        // Hover state for links and buttons
        if (
          target.tagName.toLowerCase() === 'a' ||
          target.tagName.toLowerCase() === 'button' ||
          target.closest('a') ||
          target.closest('button')
        ) {
          setIsHovering(true);
        } else {
          setIsHovering(false);
        }

        // Contrast adjustment for dark backgrounds
        const overDark = !!(
          target.closest('footer') ||
          target.closest('.bg-zen-wine') ||
          target.closest('.bg-cacao-elegante')
        );
        setIsOverDark(overDark);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <>
      <motion.div
        className={`fixed top-0 left-0 w-12 h-12 rounded-full pointer-events-none z-[100] blur-md transition-colors duration-300 ${
          isOverDark ? 'bg-white/35' : 'bg-zen-pink/30'
        }`}
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 28, mass: 0.5 }}
      />
      <motion.div
        className={`fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[101] transition-colors duration-300 ${
          isOverDark ? 'bg-zen-beige' : 'bg-zen-wine'
        }`}
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 0 : 1,
        }}
        transition={{ type: 'spring', stiffness: 800, damping: 28, mass: 0.1 }}
      />
    </>
  );
}
