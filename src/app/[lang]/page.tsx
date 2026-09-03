import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Catalog from "@/components/sections/Catalog";
import AboutUs from "@/components/sections/AboutUs";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import type { Metadata } from "next";
import Reviews from "@/components/sections/Reviews";
import Location from "@/components/sections/Location";
import { getDictionary } from "@/lib/dictionary";
import { i18n } from "@/i18n.config";

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const SITE_URL = "https://dariosironart.com";

  return {
    alternates: {
      canonical: `${SITE_URL}/${resolvedParams.lang}/`,
      languages: {
        "en": `${SITE_URL}/en/`,
        "es": `${SITE_URL}/es/`,
        "x-default": `${SITE_URL}/en/` // Le dice a Google que por defecto (si el usuario no es español) muestre inglés
      }
    }
  };
}

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang as any);
  
  const SITE_URL = "https://dariosironart.com";
  const COMPANY_PHONE = process.env.NEXT_PUBLIC_COMPANY_PHONE || "+13056478966";

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "HomeAndConstructionBusiness", "LocalBusiness"],
        "@id": `${SITE_URL}/#organization`,
        "name": "Dario's Custom Iron Art Inc",
        "image": `${SITE_URL}/brand/darioscustom_logo2.webp`,
        "logo": `${SITE_URL}/brand/darioscustom_logo2.webp`,
        "email": process.env.NEXT_PUBLIC_COMPANY_EMAIL || "darios_art@yahoo.com",
        "description": dict.seo.description,
        "url": SITE_URL,
        "telephone": COMPANY_PHONE,
        // ✅ 1. IA Semantic Trigger: Lo que ustedes saben hacer de verdad
        "knowsAbout": [
          "Custom Wrought Iron Chandeliers", 
          "High Ceiling Lighting Installation",
          "Aluminum Driveway Gates",
          "Custom Metal Fabrication From Scratch",
          "Powder Coating Finishes",
          "Stainless Steel Railings",
          "Florida Building Code Compliance"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": COMPANY_PHONE,
          "contactType": "customer service",
          "areaServed": "US",
          "availableLanguage": ["English", "Spanish"]
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "40 West 22nd Street, Bay 3",
          "addressLocality": "Hialeah",
          "addressRegion": "FL",
          "postalCode": "33010",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 25.8417209,
          "longitude": -80.2828942
        },
        "areaServed": [
          { "@type": "City", "name": "Miami" },
          { "@type": "City", "name": "Coral Gables" },
          { "@type": "City", "name": "Doral" },
          { "@type": "City", "name": "Brickell" },
          { "@type": "City", "name": "Pinecrest" },
          { "@type": "City", "name": "Key Biscayne" }
        ],
        "priceRange": "$$$",
        "openingHours": "Mo-Sa 08:00-18:00",
        "sameAs": [
          "https://www.instagram.com/darioscustomironart",
          "https://www.google.com/maps/place/Dario's+Custom+Iron+Art,+Inc/@25.8417209,-80.2854691,17z/data=!4m6!3m5!1s0x88d9afd0a8154f4d:0xb27220b3bbeada8f!8m2!3d25.8417209!4d-80.2828942!16s%2Fg%2F11clwn4wjm?entry=ttu&g_ep=EgoyMDI2MDgxOS4wIKXMDSoASAFQAw%3D%3D",
          "https://www.facebook.com/DariosCustomIronArt/",
          "https://www.tiktok.com/@darioscustomironart"
        ],
        "founder": {
          "@type": "Person",
          "name": "Dario",
          "jobTitle": "Master Metal Craftsman",
          "url": SITE_URL,
          "image": `${SITE_URL}/brand/darioscustom_logo2.webp`,
          "sameAs": [
            "https://www.instagram.com/darioscustomironart"
          ]
        }
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/${resolvedParams.lang}/#webpage`,
        "url": `${SITE_URL}/${resolvedParams.lang}/`,
        "name": dict.seo.title,
        "description": dict.seo.description,
        "isPartOf": { "@id": `${SITE_URL}/#website` },
        "about": { "@id": `${SITE_URL}/#organization` },
        "author": {
          "@type": "Person",
          "name": "Dario",
          "jobTitle": "Master Metal Craftsman",
          "url": SITE_URL,
          "image": `${SITE_URL}/brand/darioscustom_logo2.webp`,
          "sameAs": [
             "https://www.instagram.com/darioscustomironart"
          ]
        },
        "datePublished": "2024-01-01T08:00:00+00:00", 
        "dateModified": new Date().toISOString(),
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["#inicio", "#servicios"]
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/${resolvedParams.lang}/#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": dict.header.links.home,
            "item": `${SITE_URL}/${resolvedParams.lang}/`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Custom Ironwork Miami",
            "item": `${SITE_URL}/${resolvedParams.lang}/#servicios`
          }
        ]
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }} />
      <Header />
      <main id="main-content" className="min-h-screen overflow-x-hidden">
        <div id="inicio" aria-hidden="true" className="absolute -top-20"></div>
        
        {/* Breadcrumb Navigation for AEO & SEO */}
        <nav aria-label="breadcrumb" className="absolute w-full z-10 pt-24 px-4 sm:px-8 lg:px-16 pointer-events-none opacity-0 md:opacity-50 md:pointer-events-auto flex text-xs text-zinc-400 max-w-7xl mx-auto">
          <ol className="flex space-x-2 items-center">
            <li><a href={`/${resolvedParams.lang}/`} className="hover:text-white transition-colors">{dict.header.links.home}</a></li>
            <li><span aria-hidden="true">/</span></li>
            <li aria-current="page" className="text-[#B85227] font-medium">{resolvedParams.lang === 'es' ? 'Herrería a Medida Miami' : 'Custom Ironwork Miami'}</li>
          </ol>
        </nav>

        <Hero />
        <Services />
        <Catalog />
        <AboutUs/>
        <WhyChooseUs />
        <Reviews />
        <Location />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}