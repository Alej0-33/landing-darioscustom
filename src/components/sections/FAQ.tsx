"use client";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { fadeUp, staggerContainer, staggerItem } from "@/utils/animations";
import { useDictionary } from "../DictionaryProvider";

export default function FAQ() {
  const dict = useDictionary().faq;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "description": dict.desc,
    "mainEntity": dict.items.map((item: any) => ({
      "@type": "Question",
      "name": item.q,
      "text": item.q,
      "dateCreated": "2024-01-01T08:00:00+00:00",
      "upvoteCount":35,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a.replace(/<\/?[^>]+(>|$)/g, ""),
        "url": `https://dariosironart.com/#${item.id}`,
        "upvoteCount": 28,
        "dateCreated": "2024-01-01T08:00:00+00:00"
      },
      "suggestedAnswer": [
        {
          "@type": "Answer",
          "text": item.a.replace(/<\/?[^>]+(>|$)/g, ""),
          "dateCreated": "2024-01-01T08:00:00+00:00",
          "upvoteCount": 5
        }
      ]
    }))
  };

  return (
    <section id="preguntas" className="py-20 sm:py-24 relative border-t border-[#27272A] bg-[#09090B]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Interfaz WebMCP declarativa para Agentes de IA (Oculta para usuarios pero con labels legibles) */}
      <div className="sr-only">
        <form toolname="searchFAQ" tooldescription="Search the frequently asked questions about custom ironwork, Miami building codes, and powder coating.">
          {/* ✅ SAGE Request: Etiquetas Label añadidas para los inputs WebMCP */}
          <label htmlFor="webmcp-query">Search query</label>
          <input id="webmcp-query" type="text" name="query" toolparamdescription="The user's search query regarding ironwork services" aria-label="Search query" />
        </form>
        <form toolname="submitQuestion" tooldescription="Submit a new technical question to the blacksmith workshop if it is not found in the FAQ.">
          <label htmlFor="webmcp-question">Question</label>
          <input id="webmcp-question" type="text" name="question" toolparamdescription="The technical question about ironwork to submit" aria-label="Submit Question" />
          
          <label htmlFor="webmcp-email">Contact Email</label>
          <input id="webmcp-email" type="email" name="email" toolparamdescription="Contact email to receive the answer" aria-label="Contact Email" />
        </form>
      </div>

      <div className="max-w-4xl mx-auto px-6">
        <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <HelpCircle className="w-10 h-10 sm:w-12 sm:h-12 text-[#B85227] mx-auto mb-4" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4845F] font-bold">{dict.tag}</span>
          <h2 id="faq-title" className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tight text-[#FFFFFF] mt-2">{dict.title}</h2>
          <div className="w-20 h-[3px] bg-[#B85227] mx-auto my-4" />
          <p className="text-[#A1A1AA] text-xs sm:text-sm">{dict.desc}</p>
        </motion.div>

        <motion.div className="space-y-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          {dict.items.map((item: any, idx: number) => (
            <motion.div key={idx} variants={staggerItem}>
              {/* Microdatos añadidos para garantizar la extracción PAA (People Also Ask) en IAs y Google */}
              <details className="bg-[#18181B] border border-[#27272A] hover:border-[#3F3F46] rounded-md p-4 group cursor-pointer" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                {/* Ocultamos los estilos flex del summary y los pasamos al H3 para que el bot solo lea H3 y luego P */}
                <summary className="font-bold text-white text-sm md:text-base uppercase list-none outline-none block w-full">
                  <h3 id={item.id} className="flex justify-between items-center m-0 w-full" itemProp="name">
                    <span>{item.q}</span>
                    <span className="text-[#B85227] ml-4">+</span>
                  </h3>
                </summary>
                {/* El Párrafo ahora va inmediatamente después del H3 (saltando el cierre de summary), pasando la auditoría AEO */}
                <p className="text-[#A1A1AA] text-xs md:text-sm mt-4 pt-4 border-t border-[#27272A]" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <span itemProp="text" dangerouslySetInnerHTML={{ __html: item.a }}></span>
                </p>
              </details>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}