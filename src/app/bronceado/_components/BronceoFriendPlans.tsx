"use client";

import Image from "next/image";
import { FRIEND_PLANS } from "./friends-data";
import { FriendPlanCard } from "./FriendPlanCard";

export function BronceoFriendPlans() {
  return (
    <div className="mt-20 pt-16 border-t border-zen-wine/10 relative pb-10">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image 
          src="/images/friend-plans-bg.png" 
          alt="Experiencia con amigas" 
          fill 
          className="object-cover object-center" 
          quality={90}
        />
        <div className="absolute inset-0 bg-zen-beige/30 backdrop-blur-[1px]"></div>
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#e5cfc2] px-6 md:px-10 py-1.5 z-10 whitespace-nowrap">
        <span className="text-[#8c5031] text-[10px] md:text-xs font-semibold tracking-[0.25em] md:tracking-[0.3em] uppercase">
          Vivan la experiencia juntas
        </span>
      </div>
      
      <div className="text-center mb-16 relative z-10">
        <div className="inline-block bg-[#e5cfc2] px-8 py-3 mb-8 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-sans tracking-widest text-[#8c5031] uppercase">
            Planes de Amigas
          </h2>
        </div>
        <p className="text-xl md:text-2xl text-zen-wine mb-2 text-center max-w-2xl mx-auto drop-shadow-sm">
          Invita a tus amigas y vivan la experiencia juntas.
        </p>
        <p className="text-xl md:text-2xl text-zen-wine mb-8 text-center max-w-2xl mx-auto drop-shadow-sm">
          Válido para Bronceo (Sol), (Sin Sol) o Híbrido en 1 Día.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto relative z-10 px-4 md:px-0">
        {FRIEND_PLANS.map((plan) => (
          <FriendPlanCard key={plan.title} plan={plan} />
        ))}
      </div>
    </div>
  );
}
