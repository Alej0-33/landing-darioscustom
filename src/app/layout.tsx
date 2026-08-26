// src/app/layout.tsx
import type { Metadata } from "next";
import { Montserrat, Geist } from "next/font/google";
import "./globals.css";
import "maplibre-gl/dist/maplibre-gl.css"; // <-- Agrega esta línea
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

// Enlace temporal unificado (cámbialo cuando compres el dominio real)
const SITE_URL = "https://landing-darioscustom-zxg8k.ondigitalocean.app";

// Metadatos globales optimizados para SEO y límites de caracteres
export const metadata: Metadata = {
  title: "Herrería y Diseño a Medida en Miami | Cotizar por WhatsApp",
  description:
    "Taller de herrería y forja artística en Miami. Diseño exclusivo en hierro y aluminio: balcones, puertas y portones. Cotizar hoy con Darioscustom.",
  keywords: [
    "herrería a medida miami",
    "diseño de hierro y aluminio",
    "cotizar herrería por whatsapp",
    "forja artistica miami",
    "balcones de hierro miami",
    "portones de aluminio miami",
    "Darioscustom",
  ],
  authors: [{ name: "Dario - Master Metal Craftsman", url: SITE_URL }],
  creator: "Darioscustom",
  publisher: "Darioscustom",
  metadataBase: new URL(SITE_URL),
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
    url: SITE_URL,
    siteName: "Darioscustom",
    images: [
      {
        url: "/brand/darioscustom_logo.webp",
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
    images: ["/brand/darioscustom_logo.webp"],
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

// JSON-LD enriquecido con E-E-A-T, fechas y enlaces temporales
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "HomeAndConstructionBusiness"],
      "@id": `${SITE_URL}/#organization`,
      "name": "Darioscustom",
      "image": `${SITE_URL}/brand/darioscustom_logo.webp`,
      "logo": `${SITE_URL}/brand/darioscustom_logo.webp`, // Propiedad recomendada
      "email": "darios_art@yahoo.com", // Propiedad recomendada
      "description": "Taller de herrería de alta costura en Miami. Diseño y fabricación en hierro y aluminio para balcones, portones y puertas a medida.",
      "url": SITE_URL,
      "telephone": "+13055550199", // Recuerda actualizar este número si tienes uno diferente
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
        "https://www.instagram.com/darioscustomironart",
        "https://www.google.com/maps/place/Dario's+Custom+Iron+Art,+Inc/@25.8417209,-80.2854691,17z/data=!4m6!3m5!1s0x88d9afd0a8154f4d:0xb27220b3bbeada8f!8m2!3d25.8417209!4d-80.2828942!16s%2Fg%2F11clwn4wjm?entry=ttu&g_ep=EgoyMDI2MDgxOS4wIKXMDSoASAFQAw%3D%3D",
        "https://www.facebook.com/DariosCustomIronArt",
        "https://www.tiktok.com/@darioscustomironart"
      ],
      "founder": {
        "@type": "Person",
        "name": "Dario",
        "jobTitle": "Master Metal Craftsman & Founder",
        "sameAs": [
          "https://www.instagram.com/darioscustomironart",
          "https://www.tiktok.com/@darioscustomironart"
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      "url": SITE_URL,
      "name": "Darioscustom",
      "publisher": { "@id": `${SITE_URL}/#organization` },
      "inLanguage": "es-US"
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      "url": SITE_URL,
      "name": "Herrería y Diseño a Medida en Miami",
      "isPartOf": { "@id": `${SITE_URL}/#website` },
      "about": { "@id": `${SITE_URL}/#organization` },
      
      // CAMBIO 1: Añadida la propiedad 'author' para E-E-A-T
      "author": {
        "@type": "Person",
        "name": "Dario - Master Metal Craftsman",
        "url": SITE_URL
      },
      
      // CAMBIO 2: Añadidas fechas de publicación y modificación (Freshness signals)
      // Te puse una fecha base, actualiza el datePublished a la fecha en que lances la web
      "datePublished": "2024-01-01T08:00:00+00:00", 
      "dateModified": "2024-08-25T12:00:00+00:00",

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
    <html lang="es" className={cn("dark scroll-smooth", montserrat.variable, "font-sans", geist.variable)} data-scroll-behavior="smooth">
      <head>
        {/* NOTA SOBRE SCRIPTS BLOQUEANTES: */}
        {/* El JSON-LD usando <script> estándar NO bloquea el renderizado. Es la manera recomendada por Next.js para schemas. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#09090B] text-[#FFFFFF] antialiased min-h-screen selection:bg-[#B85227] selection:text-white">
        
        {/* CAMBIO 3: Enlace "Skip to content". Ya lo tenías implementado, solo asegúrate de que el <main> en tu page.tsx tenga id="inicio" */}
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