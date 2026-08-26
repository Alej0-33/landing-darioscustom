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

// Schema Markup específico para las Preguntas Frecuentes (FAQPage)
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Darioscustom cumple con el Código de Edificación de Florida (FBC) para huracanes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Diseñamos y soldamos todas nuestras rejas de seguridad, portones y barandales cumpliendo estrictamente con el Código de Edificación de Florida (FBC) y los requisitos de carga del viento ASCE 7 para zonas propensas a tormentas y huracanes, con capacidades de resistencia al viento de hasta 175 mph según el sector."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuáles son las diferencias entre la pintura tradicional de herrería y el recubrimiento en polvo (Powder Coating)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La pintura convencional se desgasta y descascara rápido por el sol de Miami. Nosotros aplicamos pintura en polvo electrostática termoendurecida (Powder Coating) horneada a 400°F. Esto genera un blindaje grueso, uniforme y flexible que resiste golpes, rayos UV y la humedad sin oxidar el metal base."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué áreas de servicio cubren en el Sur de Florida?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nuestra área de cobertura local para medición, entrega e instalación incluye Miami, Coral Gables, Doral, Brickell, Pinecrest, Key Biscayne, South Miami, Kendall y alrededores del condado de Miami-Dade."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué tipo de mantenimiento requieren sus portones y rejas metálicas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Las estructuras con acabado galvanizado y pintura en polvo requieren un mantenimiento mínimo. Recomendamos lavarlas cada 3 a 6 meses con agua limpia y un jabón suave no abrasivo para retirar depósitos de polvo, sal marina e impurezas de la intemperie."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuál es el proceso para solicitar una cotización técnica para mi residencia o negocio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Puedes contactarnos vía formulario web o haciendo clic en el enlace de WhatsApp. Envíanos medidas preliminares, fotos de la zona de instalación o referencias estéticas. Evaluaremos la información y te entregaremos una propuesta económica precisa. Posteriormente, realizamos una visita para rectificar dimensiones."
      }
    }
  ]
};

export default function Home() {
  return (
    <>
      {/* Inyección del JSON-LD en el DOM para rastreadores */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main id="inicio" className="min-h-screen overflow-x-hidden">
        <Hero />
        <Services />
        <Catalog />
        <WhyChooseUs />
        <Reviews />
        <Location/>
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}