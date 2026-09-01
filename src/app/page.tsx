// app/page.tsx
import type { Metadata } from "next";
import HomeView, { generateStaticParams as genParams } from "./[lang]/page";
import { getDictionary } from "@/lib/dictionary";
import  DictionaryProvider  from "@/components/DictionaryProvider";

export const generateStaticParams = genParams;

const SITE_URL = "https://dariosironart.com";

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary("en");
  
  return {
    title: dict.seo.title,
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
      icon: '/icon.png',
      apple: '/icon.png',
    },
    alternates: { 
      // La canónica de la raíz apunta por defecto a /en/ o a la raíz limpia según prefieras. 
      // Para alinearla exactamente con SAGE que busca https://dariosironart.com/en:
      canonical: `${SITE_URL}/en/`,
      languages: { 
        "en": `${SITE_URL}/en/`,
        "es": `${SITE_URL}/es/`,
        "en-US": `${SITE_URL}/en/`, 
        "es-US": `${SITE_URL}/es/`,
        "x-default": `${SITE_URL}/en/`
      } 
    },
    openGraph: { 
      title: dict.seo.title, 
      description: dict.seo.description, 
      url: `${SITE_URL}/en/`, 
      siteName: "Darioscustom", 
      locale: 'en_US',
      alternateLocale: 'es_US',
      images: [{ url: "/brand/darioscustom_logo.webp", width: 800, height: 600 }] 
    },
  };
}

export default async function Page() {
  const dict = await getDictionary("en");
  return (
    <DictionaryProvider dictionary={dict}>
      <HomeView params={Promise.resolve({ lang: "en" })} />
    </DictionaryProvider>
  );
}