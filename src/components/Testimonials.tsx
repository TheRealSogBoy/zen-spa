"use client";

import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";
import { useState } from "react";

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  stars: number;
  avatarUrl?: string; // Fallback con iniciales si no hay foto
}

export const testimonials: Testimonial[] = [
  {
    id: "g_01",
    name: "María Camila Aguirre Garzón",
    text: "Ayer tuve una cita en este maravilloso lugar: una tarde de amigas brindándonos mucho amor, paz y bienestar. El lugar está totalmente recomendado, desde que entras percibes un ambiente de tranquilidad, su atención es hermosa.",
    stars: 5
  },
  {
    id: "g_02",
    name: "Ligia Caicedo",
    text: "Pasamos un momento en familia realmente especial en Zen Spa. Fue una experiencia profundamente relajante y llena de tranquilidad, ideal para desconectarnos del ritmo diario. La atención fue cálida y muy profesional, y el lugar transmite bienestar.",
    stars: 5
  },
  {
    id: "g_03",
    name: "Lina Marcela Vallejo",
    text: "¡Una experiencia maravillosa de principio a fin! Visité este spa recientemente y la experiencia superó todas mis expectativas. Desde el momento en que llegué, el ambiente me envolvió con una sensación de paz y relajación total.",
    stars: 5
  },
  {
    id: "g_04",
    name: "Marly Anayibe Hortúa",
    text: "Me encantó el lugar, todo muy personalizado a la ocasión: la comida, el masaje, el lugar, la música... Superó todas mis expectativas, estoy muy agradecida por la atención.",
    stars: 5
  },
  {
    id: "g_05",
    name: "Cristian Leonardo Cardona Ortiz",
    text: "Muy rico el masaje, las niñas que atienden son muy formales. Muy bueno todo.",
    stars: 5
  },
  {
    id: "g_06",
    name: "Angie Ayala",
    text: "Tuve una experiencia bastante buena y cómoda, me agradó el lugar. Las personas que trabajan allí son súper formales y agradables, se los recomiendo.",
    stars: 5
  },
  {
    id: "g_07",
    name: "Vanessa Giraldo León",
    text: "Es un sitio muy agradable, la masajista que me tocó espectacular. Hace tiempo no me hacían un masaje donde realmente liberaran restricciones musculares, quedé como nueva. Muchas gracias, ¡volveré! ☺️💆🏻♀️",
    stars: 5
  },
  {
    id: "g_08",
    name: "Melanny Oliveros Rivas",
    text: "Muy bueno el servicio, muchas gracias por la experiencia tan linda y agradable. 💗",
    stars: 5
  },
  {
    id: "g_09",
    name: "Mayerly Orjuela",
    text: "Una noche mágica y espectacular junto a mi amor. Gracias por hacer de esta velada un momento único, con un trabajo impecable y una atención inigualable.",
    stars: 5
  },
  {
    id: "g_10",
    name: "Gloria López",
    text: "Fue una maravillosa experiencia. Un lugar hermoso de relajación. Lo recomiendo al 100%.",
    stars: 5
  },
  {
    id: "g_11",
    name: "Diego Juan Cano Cardona",
    text: "Excelente atención y muy buen servicio, relajación total.",
    stars: 5
  },
  {
    id: "g_12",
    name: "Maximiliano Obando Castaño",
    text: "Excelente atención, un hermoso lugar súper recomendado para relajarse y compartir en familia.",
    stars: 5
  },
  {
    id: "g_13",
    name: "Missol Solti",
    text: "Fue una gran experiencia, desde que entramos fueron muy atentas y nos trataron siempre muy bien. Además de que fue una experiencia muy relajante y única. Definitivamente lo recomiendo.",
    stars: 5
  },
  {
    id: "g_14",
    name: "D. Shary Rivas Caicedo",
    text: "Muy bueno todo, me encantó la experiencia.",
    stars: 5
  },
  {
    id: "g_15",
    name: "Néstor",
    text: "Excelente servicio, 100% recomendado. Salí como nuevo. 👌",
    stars: 5
  },
  {
    id: "g_16",
    name: "Elkin Eduardo Mondragón Sandoval",
    text: "Súper recomendado, una experiencia inolvidable. La mejor atención desde que entras hasta que sales, sin duda alguna uno de mis lugares favoritos. Recomiendo no saltarse esta experiencia.",
    stars: 5
  },
  {
    id: "g_17",
    name: "Leonora Jaramillo Arango",
    text: "El lugar es hermoso, el ambiente relajante y el equipo es súper querido. Confío en que esto se reflejará en todo lo que me harán en mi día de spa.",
    stars: 5
  },
  {
    id: "g_18",
    name: "Nazly Johanna Rojas Posso",
    text: "Una experiencia espectacular, un sitio único. ¡Gracias por el excelente trato y por dejarnos como nuevos! Un regalo maravilloso.",
    stars: 5
  },
  {
    id: "g_19",
    name: "Maricel Vinasco",
    text: "Un lugar acogedor, relajante, romántico y con excelente atención. Nos brindan buenos momentos, nos ayudan a vernos más hermosas y nos enseñan a amarnos más. Recomendado 10/10.",
    stars: 5
  },
  {
    id: "g_20",
    name: "Diana Patricia Ramírez Botero",
    text: "Un sitio excelente para relajarse y encontrarse con uno mismo. Hay personas muy profesionales en lo que hacen y les quiero dar las gracias.",
    stars: 5
  },
  {
    id: "g_21",
    name: "Lali Mbm",
    text: "Es un spa maravilloso, agradable, su personal es muy profesional y brinda una gran atención. Un ambiente divino. 😊👍 Se los recomiendo.",
    stars: 5
  },
  {
    id: "g_22",
    name: "Alexis Tonuzco Valencia",
    text: "Lugar muy agradable y excelente atención. 👏",
    stars: 5
  },
  {
    id: "g_23",
    name: "Zuley Agudelo",
    text: "La atención desde que ingresas a pedir información es de personas muy amables y con un carisma excelente. Te hacen sentir parte de la familia. Los resultados son excelentes, con una calidad impecable en todo y muy profesionales. El ambiente es muy enriquecedor. Se los recomiendo.",
    stars: 5
  },
  {
    id: "g_24",
    name: "Juliana Andrea Leiva Vásquez",
    text: "Lo mejor, muy buena atención. Los invito a que conozcan este maravilloso lugar, ¡es un espacio mágico! Recomendadísimo.",
    stars: 5
  },
  {
    id: "g_25",
    name: "Jose Luis Hurtado Izquierdo",
    text: "Excelente servicio, muy buenas energías y una atención totalmente personalizada. Recomendadísimo.",
    stars: 5
  },
  {
    id: "g_26",
    name: "Yuye",
    text: "Lo recomiendo, es genial tener la oportunidad de que te hagan sentir tan bien. 👍",
    stars: 5
  },
  {
    id: "g_27",
    name: "Yulieth Burgos",
    text: "Excelente lugar, recomendadísimo.",
    stars: 5
  },
  {
    id: "g_28",
    name: "Seb El Elefante",
    text: "Muy buena experiencia.",
    stars: 5
  },
  {
    id: "g_29",
    name: "Martha Morales",
    text: "Excelente servicio y muy buena la atención. Pasamos un rato agradable de relajación.",
    stars: 5
  },
  {
    id: "g_30",
    name: "Alexandra Calderón",
    text: "Me encantó el lugar, todo está muy bonito, y me gustó mucho el trato de su equipo de trabajo.",
    stars: 5
  },
  {
    id: "g_31",
    name: "Joachim Oberhauser",
    text: "Masaje de alta calidad para recuperarse de vuelos largos. Saludos.",
    stars: 5
  }
];

export function Testimonials() {
  const [visibleCount, setVisibleCount] = useState(3);

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-zen-beige relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[40%] h-[60%] rounded-full bg-zen-pink/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30%] h-[50%] rounded-full bg-zen-brown/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="text-zen-brown text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
            Testimonios Reales
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-zen-wine">
            Experiencias <span className="italic text-zen-brown">Zen</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.slice(0, visibleCount).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: (index % 3) * 0.2 }}
              className="relative p-8 md:p-10 bg-white border border-zen-brown/10 shadow-lg rounded-2xl flex flex-col justify-between"
            >
              {/* Seal / Quote Icon */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-zen-wine rounded-full flex items-center justify-center shadow-md border-2 border-zen-beige">
                <Quote className="w-5 h-5 text-zen-beige fill-current" />
              </div>

              <div className="mt-8 text-center flex flex-col items-center h-full justify-between">
                {/* Stars */}
                <div className="flex gap-1 mb-6 text-[#8c5c51]">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Text */}
                <p className="font-sans italic text-base md:text-lg text-zen-wine/90 leading-relaxed mb-8 flex-grow">
                  {`\u201C${testimonial.text}\u201D`}
                </p>
                
                {/* Name */}
                <h4 className="font-sans text-xs md:text-sm font-semibold tracking-widest uppercase text-[#3f0c08] mt-auto">
                  {testimonial.name}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < testimonials.length && (
          <div className="text-center mt-16">
            <button
              onClick={() => setVisibleCount((prev) => Math.min(prev + 6, testimonials.length))}
              className="inline-flex border border-zen-wine text-zen-wine hover:bg-zen-wine hover:text-zen-beige transition-colors duration-300 px-8 py-3.5 font-sans text-[11px] tracking-widest uppercase rounded-sm shadow-sm cursor-pointer"
            >
              Ver más opiniones
            </button>
          </div>
        )}
      </div>
    </section>
  );
}