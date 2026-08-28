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
      "text": item.q, // Solicitado por SAGE
      "dateCreated": "2024-01-01T08:00:00+00:00",
      "upvoteCount":35,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a.replace(/<\/?[^>]+(>|$)/g, ""), // Limpiamos HTML para el JSON-LD
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
              <details className="bg-[#18181B] border border-[#27272A] hover:border-[#3F3F46] rounded-md p-4 group cursor-pointer">
                <summary className="font-bold text-white text-sm md:text-base uppercase list-none flex justify-between">
                  <h3 id={item.id} className="flex-grow">{item.q}</h3>
                  <span className="text-[#B85227]">+</span>
                </summary>
                <p className="text-[#A1A1AA] text-xs md:text-sm mt-4 pt-4 border-t border-[#27272A]" dangerouslySetInnerHTML={{ __html: item.a }}></p>
              </details>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}