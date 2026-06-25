import type { ReactNode } from "react";

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="text-zen-brown text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
      {children}
    </span>
  );
}

export function SectionTitle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`text-4xl md:text-5xl lg:text-6xl font-serif text-zen-wine leading-tight mb-8 ${className}`}
    >
      {children}
    </h2>
  );
}

export function DividerLine({ className = "" }: { className?: string }) {
  return <div className={`w-12 h-px bg-zen-brown ${className}`} />;
}
