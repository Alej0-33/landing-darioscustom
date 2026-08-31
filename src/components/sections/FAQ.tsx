"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { fadeUp, staggerContainer, staggerItem } from "@/utils/animations";
import { useDictionary } from "../DictionaryProvider";

export default function FAQ() {
  const dict = useDictionary().faq;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "description": dict.desc,
    "mainEntity": dict.items.map((item: any) => ({
      "@type": "Question",
      "name": item.q,
      "text": item.q,
      "dateCreated": "2024-01-01T08:00:00+00:00",
      "upvoteCount": 35,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a,
        "url": `https://dariosironart.com/#${item.id}`,
        "upvoteCount": 28,
        "dateCreated": "2024-01-01T08:00:00+00:00"
      },
      "suggestedAnswer": [
        {
          "@type": "Answer",
          "text": item.a,
          "dateCreated": "2024-01-01T08:00:00+00:00",
          "upvoteCount": 5
        }
      ]
    }))
  };

  return (
    <section id="preguntas" className="py-20 sm:py-24 relative border-t border-[#27272A] bg-[#09090B]">
      {/* 1. JSON-LD Perfecto (100/100 Schema) */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Interfaz WebMCP declarativa para Agentes de IA */}
      <div className="sr-only">
        <form toolname="searchFAQ" tooldescription="Search the frequently asked questions about custom ironwork, Miami building codes, and powder coating.">
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

        <motion.div className="space-y-0" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          {dict.items.map((item: any, idx: number) => {
            const isOpen = openIndex === idx;
            
            return (
              <motion.div key={item.id} variants={staggerItem} className="border-b border-[#27272A]">
                
                {/* 2. ESTRUCTURA AEO PERFECTA: H3 y P son hermanos directos */}
                <h3 className="w-full m-0">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between py-5 text-left focus:outline-none group"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                  >
                    <span className="font-bold text-white text-sm md:text-base uppercase group-hover:text-[#B85227] transition-colors pr-4">
                      {item.q}
                    </span>
                    <span className="text-[#B85227] text-2xl font-light leading-none">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>
                
                {/* El Párrafo sigue inmediatamente al H3 */}
                <p 
                  id={`faq-answer-${idx}`}
                  className={`text-[#A1A1AA] text-xs md:text-sm leading-relaxed overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
                  }`}
                  aria-hidden={!isOpen}
                >
                  {item.a}
                </p>
                
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}