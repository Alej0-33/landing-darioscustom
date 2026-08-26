import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Catalog from "@/components/sections/Catalog";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Reviews from "@/components/sections/Reviews";
import Location from "@/components/sections/Location";
import { getDictionary } from "@/lib/dictionary";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang as any);
  
  // URL base para el Schema
  const SITE_URL = "https://landing-darioscustom-zxg8k.ondigitalocean.app";

  // SAGE SEO/AEO/GEO: Schema Graph unificado (LocalBusiness + WebPage + FAQ) adaptado al idioma
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
        "telephone": process.env.NEXT_PUBLIC_COMPANY_PHONE || "+13056478966",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Miami",
          "addressRegion": "FL",
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
        "isPartOf": { "@id": `${SITE_URL}/#website` },
        "about": { "@id": `${SITE_URL}/#organization` },
        "author": {
          "@type": "Person",
          "name": "Dario - Master Metal Craftsman",
          "url": SITE_URL
        },
        "datePublished": "2024-01-01T08:00:00+00:00", 
        "dateModified": new Date().toISOString(), // Señal de frescura automática (Freshness signal)
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["#inicio", "#servicios"]
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/${resolvedParams.lang}/#faq`,
        "mainEntity": dict.faq.items.map((item: any) => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": { "@type": "Answer", "text": item.a }
        }))
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }} />
      <Header />
      <main id="inicio" className="min-h-screen overflow-x-hidden">
        <Hero />
        <Services />
        <Catalog />
        <WhyChooseUs />
        <Reviews />
        <Location />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}