import type { Metadata } from "next";
import { CustomCursor } from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Políticas de Privacidad y Habeas Data | Zen Spa Bienestar",
  description:
    "Políticas de tratamiento de datos personales de ZEN SPA BIENESTAR bajo la Ley 1581 de 2012 de Colombia. Conozca sus derechos y cómo protegemos su información.",
};

export default function PoliticasDePrivacidadPage() {
  return (
    <main className="relative min-h-screen bg-zen-beige pb-24 selection:bg-zen-pink selection:text-white pt-32 px-6">
      <CustomCursor />

      <div className="container mx-auto max-w-3xl bg-white p-8 md:p-16 rounded-3xl shadow-sm border border-zen-brown/10 text-zen-wine">
        <h1 className="font-serif text-3xl md:text-5xl text-center mb-4">
          Políticas de Privacidad
        </h1>
        <p className="font-serif italic text-zen-brown text-center text-sm md:text-base mb-10">
          Tratamiento de Datos Personales y Habeas Data (Ley 1581 de 2012)
        </p>

        <div className="h-px w-full bg-zen-brown/10 mb-10" />

        <div className="font-sans text-sm md:text-base leading-relaxed font-light space-y-8 text-justify">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl md:text-2xl text-zen-wine font-medium">
              1. Responsable del Tratamiento
            </h2>
            <p>
              El responsable del tratamiento de sus datos personales es{" "}
              <strong className="font-medium text-zen-wine">
                ZEN SPA BIENESTAR
              </strong>
              , establecimiento de comercio legalmente constituido e identificado con{" "}
              <strong className="font-medium text-zen-wine">NIT 1193587025-5</strong>{" "}
              y matrícula mercantil mercantil n.º{" "}
              <strong className="font-medium text-zen-wine">103284</strong> ante la{" "}
              <strong className="font-medium text-zen-wine">
                Cámara de Comercio de Cartago
              </strong>
              , con domicilio comercial en la CL 8 NRO 8-31 Barrio Centro, Roldanillo,
              Valle del Cauca.
            </p>
            <p>
              Para cualquier solicitud, rectificación, actualización o eliminación
              de datos, puede comunicarse a través del correo electrónico oficial de
              atención:{" "}
              <a
                href="mailto:zenspa.wc@gmail.com"
                className="text-zen-brown underline hover:text-zen-pink transition-colors font-medium"
              >
                zenspa.wc@gmail.com
              </a>
              .
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl md:text-2xl text-zen-wine font-medium">
              2. Datos Recolectados y Finalidad
            </h2>
            <p>
              ZEN SPA BIENESTAR recolecta y almacena datos personales de manera
              segura exclusivamente para la correcta gestión de reservas y la
              atención personalizada de nuestros clientes. Los datos solicitados
              incluyen:
            </p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Número de contacto de WhatsApp.</li>
              <li>Número de identificación (cédula de ciudadanía).</li>
              <li>Correo electrónico.</li>
              <li>Fecha de nacimiento (empleada únicamente para obsequios y promociones especiales de cumpleaños).</li>
              <li>Historial de tratamientos y servicios dermoestéticos recibidos.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl md:text-2xl text-zen-wine font-medium">
              3. Uso de Imagen Comercial (Uso de Imagen Voluntario)
            </h2>
            <p>
              En el desarrollo de nuestras actividades comerciales y campañas de marketing en redes sociales y medios digitales, se podrán capturar fotografías o videos dentro de las instalaciones. 
            </p>
            <p>
              Se establece de manera explícita que la aparición en cualquier material visual de difusión publicitaria es de carácter{" "}
              <strong className="font-medium text-zen-wine">estrictamente voluntario</strong>. Si en algún momento manifiesta su deseo de no aparecer o solicita la remoción de algún contenido previamente publicado, ZEN SPA BIENESTAR procederá de manera inmediata a retirar dicho material tras recibir la solicitud a través de nuestros canales de contacto oficiales.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl md:text-2xl text-zen-wine font-medium">
              4. Compromiso de No Transferencia y Confidencialidad
            </h2>
            <p>
              La seguridad de su información es un compromiso inquebrantable para nosotros.{" "}
              <strong className="font-medium text-zen-wine">ZEN SPA BIENESTAR</strong>{" "}
              garantiza que bajo ninguna circunstancia transferirá, venderá, alquilará o compartirá su información personal ni sus bases de datos con terceros para fines comerciales o de mercadeo externo. Su información es tratada bajo el más estricto secreto profesional.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl md:text-2xl text-zen-wine font-medium">
              5. Derechos de los Titulares
            </h2>
            <p>
              Como titular de datos personales en Colombia (Habeas Data), usted cuenta
              con los derechos consagrados en la Ley 1581 de 2012 y el Decreto 1377 de
              2013: conocer, actualizar, rectificar y suprimir sus datos en cualquier
              momento, así como revocar la autorización de su tratamiento enviando
              una solicitud escrita a{" "}
              <a
                href="mailto:zenspa.wc@gmail.com"
                className="text-zen-brown underline hover:text-zen-pink transition-colors font-medium"
              >
                zenspa.wc@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
