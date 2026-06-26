import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import Script from 'next/script';
import { GoogleAnalytics } from '@next/third-parties/google';

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
      <head>
        {/* Google Search Console */}
        <meta name="google-site-verification" content="A2kp0tKvRD0vFRzvhYTdyj449dwzFc4KagU1PxUFxGU" />
        
        {/* Marcado Estructurado JSON-LD (SEO y Google Business Profile) */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "DaySpa",
              "name": "Zen Spa Bienestar",
              "image": [
                "https://zenspa.com.co/images/spa-local/entrada.webp"
              ],
              "@id": "https://www.google.com/maps/place/Zen+Spa+Bienestar+Roldanillo/@4.409895,-76.153954,17z",
              "url": "https://zenspa.com.co",
              "telephone": "+573156881765",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "CL 8 NRO 8-31 Barrio Centro, Calle de los Poetas (Al lado del Museo Rayo)",
                "addressLocality": "Roldanillo",
                "addressRegion": "Valle del Cauca",
                "postalCode": "761560",
                "addressCountry": "CO"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 4.409895,
                "longitude": -76.153954
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "17:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "08:00",
                  "closes": "14:00"
                }
              ],
              "sameAs": [
                "https://instagram.com/zenspa.wc",
                "https://tiktok.com/@zenspa.wc",
                "https://facebook.com/zenspa.wc",
                "https://linkedin.com/company/zenspa-roldanillo"
              ]
            })
          }}
        />

        {/* Meta Pixel de Facebook */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}
            (window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1765954530751258');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1765954530751258&ev=PageView&noscript=1"
            alt="facebook-pixel-fallback"
          />
        </noscript>
      </head>
      <body
        className="relative flex min-h-dvh flex-col font-sans"
        suppressHydrationWarning
      >
        <Navbar />
        {/* min-h-0 lets the main column grow with content so the footer stays in flow and scrollable */}
        <div className="relative z-0 flex min-h-0 flex-1 flex-col">{children}</div>
        <Footer />
        <WhatsAppButton />

        {/* Google Analytics 4 */}
        <GoogleAnalytics gaId="G-XZVNVZ1FLC" />
      </body>
    </html>
  );
}

