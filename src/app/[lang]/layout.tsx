import type { Metadata } from "next";
import { Montserrat, Geist } from "next/font/google";
import "../globals.css";
import "maplibre-gl/dist/maplibre-gl.css";
import { cn } from "@/lib/utils";
import { getDictionary } from "@/lib/dictionary";
import DictionaryProvider from "@/components/DictionaryProvider";
import { i18n } from "@/i18n.config"; 
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"], variable: "--font-montserrat", display: "swap" });
const SITE_URL = "https://dariosironart.com";

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const dict = await getDictionary(lang as any);

  return {
    title: {
      template: `%s | Darioscustom`,
      default: dict.seo.title,
    },
    description: dict.seo.description,
    keywords: dict.seo.keywords,
    authors: [{ name: "Dario - Master Metal Craftsman", url: SITE_URL }],
    metadataBase: new URL(SITE_URL),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: '48x48', type: 'image/x-icon' },
        { url: '/icon.png', type: 'image/png', sizes: '192x192' }
      ],
      apple: [
        { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }
      ]
    },
    openGraph: { 
      title: dict.seo.title, 
      description: dict.seo.description, 
      url: `${SITE_URL}/${lang}/`, 
      siteName: "Darioscustom", 
      locale: lang === 'es' ? 'es_US' : 'en_US',
      alternateLocale: lang === 'es' ? 'en_US' : 'es_US',
      images: [{ url: "/brand/darioscustom_logo.webp", width: 800, height: 600 }] 
    },
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
          <WhatsAppButton />
        </DictionaryProvider>
      </body>
    </html>
  );
}