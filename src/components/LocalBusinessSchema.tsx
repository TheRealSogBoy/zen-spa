import Script from "next/script";

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "DaySpa",
    "name": "Zen Spa Bienestar Roldanillo",
    "image": [
      "https://zen-rho-ten.vercel.app/images/spa-local/entrada.webp"
    ],
    "@id": "https://www.google.com/maps/place/Zen+Spa+Bienestar+Roldanillo/@4.409895,-76.153954,17z",
    "url": "https://zen-rho-ten.vercel.app",
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
      "https://linkedin.com/company/zenspa-roldanillo",
      "https://share.google/ptbRVLfakM5YP4AG0"
    ]
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
