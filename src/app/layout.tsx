import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Custom Metal Gates, Railings & Metal Art in Miami, FL | Darioscustom",
  description:
    "Fabricación e instalación de rejas de seguridad, barandales para balcones/escaleras y piezas exclusivas de arte en metal en Miami, Coral Gables, Doral, Brickell y Pinecrest.",
  keywords: [
    "custom metal fabricator in Miami",
    "modern balcony railings Coral Gables",
    "handcrafted steel gates Doral",
    "metal railings Miami",
    "custom metal art Miami",
    "rejas de metal Miami",
    "barandales modernos Miami",
    "Darioscustom",
  ],
  authors: [{ name: "Darioscustom" }],
  creator: "Darioscustom",
  publisher: "Darioscustom",
  metadataBase: new URL("https://darioscustom.com"),
  openGraph: {
    title: "Darioscustom | Metal Fabrication & Custom Steel in Miami, FL",
    description:
      "Especialistas en rejas de seguridad, barandales arquitectónicos y arte en metal a medida con acabados industriales de alta durabilidad en Miami, Florida.",
    url: "https://darioscustom.com",
    siteName: "Darioscustom",
    images: [
      {
        url: "/brand/darioscustom_logo.png",
        width: 800,
        height: 600,
        alt: "Darioscustom - Custom Metal Fabrication in Miami",
      },
    ],
    locale: "es_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Darioscustom | Custom Metal Gates & Railings in Miami, FL",
    description:
      "Fabricación de rejas de seguridad, barandales y arte en metal en Miami, Florida.",
    images: ["/brand/darioscustom_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Darioscustom",
  "image": "https://darioscustom.com/brand/darioscustom_logo.png",
  "description":
    "Custom metal fabrication specializing in security gates, balcony railings, stair railings, and handcrafted metal art in Miami, Florida.",
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
    { "@type": "City", "name": "Key Biscayne" },
    { "@type": "City", "name": "Pinecrest" }
  ],
  "priceRange": "$$",
  "openingHours": "Mo-Sa 08:00-18:00"
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
        {children}
      </body>
    </html>
  );
}
