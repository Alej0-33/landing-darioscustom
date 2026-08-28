import type { Metadata } from "next";
import { Montserrat, Geist } from "next/font/google";
import "../globals.css";
import "maplibre-gl/dist/maplibre-gl.css";
import { cn } from "@/lib/utils";
import { getDictionary } from "@/lib/dictionary";
import DictionaryProvider from "@/components/DictionaryProvider";
import { i18n } from "@/i18n.config"; 

const geist = Geist({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"], variable: "--font-montserrat", display: "swap" });
const SITE_URL = "https://dariosironart.com";

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang as any);
  
  return {
    title: dict.seo.title,
    description: dict.seo.description,
    keywords: dict.seo.keywords,
    authors: [{ name: "Dario - Master Metal Craftsman", url: SITE_URL }],
    metadataBase: new URL(SITE_URL),
    
    icons: {
      icon: '/icon.png',
      apple: '/icon.png',
    },
    
    alternates: { 
      canonical: `${SITE_URL}/${resolvedParams.lang}`,
      languages: { 
        "en-US": `${SITE_URL}/en`, 
        "es-US": `${SITE_URL}/es`,
        "x-default": `${SITE_URL}/en`
      } 
    },
    openGraph: { title: dict.seo.title, description: dict.seo.description, url: `${SITE_URL}/${resolvedParams.lang}`, siteName: "Darioscustom", images: [{ url: "/brand/darioscustom_logo.webp", width: 800, height: 600 }] },
  };
}

export default async function RootLayout({ children, params }: { children: React.ReactNode, params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang as any);
  const isEs = resolvedParams.lang === 'es';
  
  return (
    <html lang={resolvedParams.lang} data-scroll-behavior="smooth" className={cn("dark scroll-smooth", montserrat.variable, "font-sans", geist.variable)}>
      <head>
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </head>
      <body className="bg-[#09090B] text-[#FFFFFF] antialiased min-h-screen selection:bg-[#B85227] selection:text-white">
        <DictionaryProvider dictionary={dict}>
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-[#B85227] focus:text-white">
            {isEs ? "Saltar al contenido principal" : "Skip to main content"}
          </a>
          {children}
        </DictionaryProvider>
      </body>
    </html>
  );
}