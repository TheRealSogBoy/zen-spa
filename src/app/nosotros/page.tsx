import type { Metadata } from "next";
import Image from "next/image";
import { CustomCursor } from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Nuestra Historia | Zen Spa Bienestar Roldanillo",
  description:
    "Conozca la historia de Zen Spa Bienestar, un santuario de relajación en el corazón de Roldanillo, sobre la histórica Calle de los Poetas frente al Museo Rayo.",
  openGraph: {
    title: "Nuestra Historia | Zen Spa Bienestar Roldanillo",
    description:
      "Conozca la historia de Zen Spa Bienestar, un santuario de relajación en el corazón de Roldanillo, sobre la histórica Calle de los Poetas frente al Museo Rayo.",
    locale: "es_CO",
    type: "website",
  },
};

export default function NosotrosPage() {
  return (
    <main className="relative min-h-screen bg-zen-beige pb-0 selection:bg-zen-pink selection:text-white">
      <CustomCursor />

      {/* Hero section with video background */}
      <section className="relative w-full h-[60vh] min-h-[450px] overflow-hidden bg-zen-wine flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover opacity-60"
          >
            <source src="/videos/video-zen-spa-local.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/45 z-10" />
        </div>

        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <span className="text-[10px] sm:text-xs md:text-sm tracking-[0.3em] uppercase text-zen-beige/85 mb-4 block font-sans font-medium">
            Sobre Nosotros
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white leading-tight drop-shadow-lg">
            Nuestra Historia
          </h1>
          <p className="font-serif italic text-base sm:text-lg md:text-xl text-zen-pink mt-3">
            El refugio en el corazón de Roldanillo
          </p>
          <div className="h-px w-20 bg-zen-pink mx-auto mt-8 shadow-[0_0_8px_rgba(229,152,168,0.6)]" />
        </div>

        {/* Wave cap decorative element */}
        <div className="absolute bottom-0 left-0 w-full z-30 pointer-events-none translate-y-[1px]">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path
              d="M0 60L1440 60L1440 0C1440 0 1140 60 720 60C300 60 0 0 0 0L0 60Z"
              fill="#efdbd5"
            />
          </svg>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="relative z-10 py-20 bg-zen-beige px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Story column */}
            <div className="lg:col-span-7 space-y-6 text-zen-wine">
              <span className="text-xs tracking-[0.25em] uppercase text-zen-brown font-semibold block">
                Nuestra Esencia
              </span>
              <h2 className="font-serif text-3xl md:text-4xl leading-tight">
                El refugio en el corazón de <span className="italic text-zen-brown">Roldanillo</span>
              </h2>
              <div className="w-10 h-px bg-zen-brown/30" />
              
              <div className="font-sans text-base leading-relaxed text-zen-wine/80 font-light space-y-6">
                <p>
                  En el vibrante corredor peatonal del Museo Rayo, sobre la histórica Calle de los Poetas, nace un refugio diseñado para acallar el ruido del mundo exterior. Zen Spa Bienestar no es solo un centro dermoestético; es un santuario físico donde la calidez humana, el cuidado profesional de la piel y el descanso profundo se encuentran.
                </p>
                <p>
                  Desde nuestro espacio en Roldanillo, hemos creado una pausa consciente para la comunidad del norte del Valle. Un lugar donde cada detalle —desde la acústica insonorizada de nuestras cabinas hasta la delicada línea de tratamientos faciales de alta tecnología, rituales en pareja y el mágico universo infantil de Mini Divas— está pensado para devolver la frescura a tu cuerpo y reconectar con lo que verdaderamente importa: tu bienestar real y el de quienes más amas.
                </p>
              </div>
            </div>

            {/* Collage column */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md ring-1 ring-zen-brown/10 after:absolute after:inset-0 after:bg-zen-wine/5 after:mix-blend-multiply after:pointer-events-none">
                  <Image
                    src="/images/spa-local/interior.webp"
                    alt="Zen Spa Interior"
                    fill
                    sizes="(max-width: 1024px) 50vw, 250px"
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-md ring-1 ring-zen-brown/10 after:absolute after:inset-0 after:bg-zen-wine/5 after:mix-blend-multiply after:pointer-events-none">
                  <Image
                    src="/images/spa-local/sala-foto.webp"
                    alt="Zen Spa Sala"
                    fill
                    sizes="(max-width: 1024px) 50vw, 250px"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-md ring-1 ring-zen-brown/10 after:absolute after:inset-0 after:bg-zen-wine/5 after:mix-blend-multiply after:pointer-events-none">
                  <Image
                    src="/images/spa-local/sofa.webp"
                    alt="Zen Spa Sofá"
                    fill
                    sizes="(max-width: 1024px) 50vw, 250px"
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md ring-1 ring-zen-brown/10 after:absolute after:inset-0 after:bg-zen-wine/5 after:mix-blend-multiply after:pointer-events-none">
                  <Image
                    src="/images/spa-local/puerta-principal.webp"
                    alt="Zen Spa Puerta Principal"
                    fill
                    sizes="(max-width: 1024px) 50vw, 250px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
