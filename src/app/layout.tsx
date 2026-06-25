import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Zen Spa 360° - Donde el tiempo se detiene",
    template: "%s | Zen Spa 360°",
  },
  description:
    "Ciencia, técnica y calidez en el corazón de Roldanillo. Spa integral y bienestar 360°",
  icons: {
    icon: "/favicon-zen-spa.ico",
  },
  openGraph: {
    title: "Zen Spa 360° - Donde el tiempo se detiene",
    description:
      "Ciencia, técnica y calidez en el corazón de Roldanillo. Spa integral y bienestar 360°",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zen Spa 360° - Donde el tiempo se detiene",
    description:
      "Ciencia, técnica y calidez en el corazón de Roldanillo. Spa integral y bienestar 360°",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`relative min-h-full antialiased ${montserrat.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body
        className="relative flex min-h-dvh flex-col font-sans"
        suppressHydrationWarning
      >
        <Navbar />
        {/* min-h-0 lets the main column grow with content so the footer stays in flow and scrollable */}
        <div className="relative z-0 flex min-h-0 flex-1 flex-col">{children}</div>
        <Footer />
        <WhatsAppButton />
        <LocalBusinessSchema />
      </body>
    </html>
  );
}
