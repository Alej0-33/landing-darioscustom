// src/app/layout.tsx
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

// Metadatos globales optimizados para SEO y límites de caracteres
export const metadata: Metadata = {
  title: "Herrería y Diseño a Medida en Miami | Cotizar por WhatsApp", // 59 chars - Óptimo (<60)
  description:
    "Taller de herrería y forja artística en Miami. Diseño exclusivo en hierro y aluminio: balcones, puertas y portones. Cotizar hoy con Darioscustom.", // 146 chars - Óptimo (50-160)
  keywords: [
    "herrería a medida miami",
    "diseño de hierro y aluminio",
    "cotizar herrería por whatsapp",
    "forja artistica miami",
    "balcones de hierro miami",
    "portones de aluminio miami",
    "Darioscustom",
  ],
  authors: [{ name: "Dario - Master Metal Craftsman", url: "https://darioscustom.com" }],
  creator: "Darioscustom",
  publisher: "Darioscustom",
  metadataBase: new URL("https://darioscustom.com"),
  alternates: {
    canonical: "/",
    languages: {
      "es-US": "/",
    },
  },
  openGraph: {
    title: "Herrería y Diseño a Medida en Miami | Darioscustom",
    description:
      "Taller de herrería y forja artística en Miami. Diseño exclusivo en hierro y aluminio: balcones, puertas y portones.",
    url: "https://darioscustom.com",
    siteName: "Darioscustom",
    images: [
      {
        url: "/brand/darioscustom_logo.png",
        width: 800,
        height: 600,
        alt: "Darioscustom - Herrería y Balcones a Medida en Miami",
      },
    ],
    locale: "es_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Herrería y Diseño a Medida en Miami | Darioscustom",
    description:
      "Taller de herrería y forja artística en Miami. Diseño exclusivo en hierro y aluminio.",
    images: ["/brand/darioscustom_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// JSON-LD enriquecido con Organization, WebSite y Speakable para GEO/AEO/Voice
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "HomeAndConstructionBusiness"],
      "@id": "https://darioscustom.com/#organization",
      "name": "Darioscustom",
      "image": "https://darioscustom.com/brand/darioscustom_logo.png",
      "description": "Taller de herrería de alta costura en Miami. Diseño y fabricación en hierro y aluminio para balcones, portones y puertas a medida.",
      "url": "https://darioscustom.com",
      "telephone": "+13055550199",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Miami",
        "addressRegion": "FL",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 25.7617,
        "longitude": -80.1918
      },
      "areaServed": [
        { "@type": "City", "name": "Miami" },
        { "@type": "City", "name": "Coral Gables" },
        { "@type": "City", "name": "Doral" },
        { "@type": "City", "name": "Brickell" },
        { "@type": "City", "name": "Key Biscayne" }
      ],
      "priceRange": "$$$",
      "openingHours": "Mo-Sa 08:00-18:00",
      "sameAs": [
        "https://www.instagram.com/darioscustomart",
        "https://g.page/r/darioscustomart",
        "https://www.facebook.com/darioscustom"
      ],
      "founder": {
        "@type": "Person",
        "name": "Dario",
        "jobTitle": "Master Metal Craftsman & Founder",
        "sameAs": ["https://www.instagram.com/darioscustomart"]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://darioscustom.com/#website",
      "url": "https://darioscustom.com",
      "name": "Darioscustom",
      "publisher": { "@id": "https://darioscustom.com/#organization" },
      "inLanguage": "es-US"
    },
    {
      "@type": "WebPage",
      "@id": "https://darioscustom.com/#webpage",
      "url": "https://darioscustom.com",
      "name": "Herrería y Diseño a Medida en Miami",
      "isPartOf": { "@id": "https://darioscustom.com/#website" },
      "about": { "@id": "https://darioscustom.com/#organization" },
      // Solución directa al error "No speakable schema property found"
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["#inicio", "#servicios"]
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} font-sans scroll-smooth`} data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#09090B] text-[#FFFFFF] antialiased min-h-screen selection:bg-[#B85227] selection:text-white">
        {/* Enlace "Skip to content" oculto visualmente pero accesible para Lectores de Pantalla e IA */}
        <a 
          href="#inicio" 
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-[#B85227] focus:text-white"
        >
          Saltar al contenido principal
        </a>
        
        {children}
      </body>
    </html>
  );
}