"use client";
import { motion } from "framer-motion";
import { Shield, Home, Sparkles, Palette, Award } from "lucide-react";
import { Card } from "../ui/Card";
import { fadeUp, staggerContainer, staggerItem } from "@/utils/animations";
import { useDictionary } from "../DictionaryProvider";

export default function Services() {
  const dict = useDictionary().services;

  const icons = [
    <Shield key="shield" className="w-8 h-8 text-[#D4845F]" />,
    <Home key="home" className="w-8 h-8 text-[#D4845F]" />,
    <Sparkles key="sparkles" className="w-8 h-8 text-[#D4845F]" />,
    <Palette key="palette" className="w-8 h-8 text-[#D4845F]" />
  ];

  const badgeColors = [
    "bg-emerald-950/40 text-emerald-400 border-emerald-500/30",
    "bg-emerald-950/40 text-emerald-400 border-emerald-500/30",
    "bg-[#18181B] text-[#71717A] border-[#3F3F46]/40",
    "bg-[#18181B] text-[#71717A] border-[#3F3F46]/40"
  ];
  
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": dict.howTo.title,
    "description": "Step-by-step process to request and install a custom ironwork design.",
    "image": "https://dariosironart.com/images/black-aluminum-double-front-door2.webp", 
    "totalTime": "P14D", 
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "1500" 
    },
    "step": dict.howTo.steps.map((step: any, idx: number) => ({
      "@type": "HowToStep",
      "position": idx + 1,
      "name": step.title,
      "text": step.desc
    }))
  };

  return (
    <section id="servicios" className="py-20 sm:py-24 relative border-t border-[#27272A] bg-[#09090B]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <div className="absolute inset-0 industrial-dots opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <motion.div className="text-center max-w-3xl mx-auto mb-16" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp}>
          <h2 id="services-title" className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tight text-white mt-2 mb-4">
            {dict.title}
          </h2>
          <div className="w-20 h-[3px] bg-[#B85227] mx-auto my-4" />
          <p className="text-[#A1A1AA] text-xs sm:text-sm md:text-base leading-relaxed">
            {dict.desc}
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={staggerContainer}>
          {dict.items.map((service: any, index: number) => (
            <motion.div key={index} variants={staggerItem} id={`service-item-${index}`}>
              <Card title={service.title} description={service.desc} icon={icons[index]} />
            </motion.div>
          ))}
        </motion.div>

        {/* ✅ AEO/GEO: Added direct definition and answer paragraph before Ordered List */}
        <motion.div className="mb-24" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp}>
          <div className="text-center mb-12">
            <h2 id="how-it-works-title" className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-6">
              {dict.howTo.title}
            </h2>
            <p className="text-zinc-400 max-w-3xl mx-auto text-sm leading-relaxed">
              <strong>Custom ironwork is</strong> the specialized craft of designing, heating, and shaping metals to create personalized architectural structures. If you are looking to install custom metalwork in Miami, our 4-step process ensures a perfect fit, starting from a digital layout to final structural installation complying with Florida codes.
            </p>
          </div>
          {/* ✅ SAGE Request: Uso de listas ordenadas (ol) para los pasos */}
          <ol className="grid grid-cols-1 md:grid-cols-4 gap-6 list-none p-0 m-0 relative">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-[1px] bg-industrial-border-high z-0" aria-hidden="true" />
            
            {dict.howTo.steps.map((step: any, idx: number) => (
              <li key={idx} className="relative z-10 bg-industrial-card border border-industrial-border p-6 rounded-md shadow-lg flex flex-col h-full hover:border-brand-primary/50 transition-colors">
                <div className="w-10 h-10 rounded-full bg-brand-primary text-white flex items-center justify-center font-black mb-4 mx-auto md:mx-0 shadow-[0_0_15px_rgba(184,82,39,0.4)]">
                  {idx + 1}
                </div>
                <p className="text-zinc-400 text-xs leading-relaxed text-center md:text-left">
                  {/* Se cambia H3 por Strong para que Google lea el <li> como un bloque de texto continuo para Snippets */}
                  <strong id={`how-to-step-${idx + 1}`} className="block text-sm font-bold text-white uppercase tracking-wide mb-2">
                    {step.title}
                  </strong>
                  {step.desc}
                </p>
              </li>
            ))}
          </ol>
        </motion.div>

        <motion.div id="comparativa" className="bg-[#18181B] border border-[#27272A] p-4 sm:p-10 rounded-lg relative machined-corners overflow-hidden" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp}>
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#B85227]/45 to-transparent" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 border-b border-[#27272A] pb-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#09090B] border border-[#3F3F46] rounded-md shrink-0">
                <Award className="w-6 h-6 text-[#D4845F]" />
              </div>
              <div>
                <h3 id="materials-title" className="text-lg sm:text-xl md:text-2xl font-black uppercase tracking-wider text-white mt-1">
                  {dict.matTitle}
                </h3>
              </div>
            </div>
          </div>

          <div className="overflow-hidden">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-[#3F3F46] text-[#D4845F] uppercase tracking-widest font-bold text-[9px] sm:text-[10px] bg-[#09090B]/40">
                  <th className="py-4 px-3 sm:px-5 w-3/12">{dict.matHeaders[0]}</th>
                  <th className="py-4 px-3 sm:px-5 text-center w-2/12">{dict.matHeaders[1]}</th>
                  <th className="py-4 px-3 sm:px-5 w-7/12">{dict.matHeaders[2]}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#27272A] text-[#A1A1AA]">
                {dict.materials.map((mat: any, idx: number) => (
                  <tr key={idx} className="hover:bg-[#09090B]/30 transition-colors duration-200">
                    <td className="py-4 px-3 sm:px-5">
                      <span className="block font-bold text-white text-[11px] sm:text-xs md:text-sm uppercase tracking-wide break-words">
                        {mat.name}
                      </span>
                    </td>
                    <td className="py-4 px-3 sm:px-5 text-center">
                      <span className={`inline-flex items-center justify-center px-2 py-1 sm:px-3 sm:py-1 rounded-sm border text-[8px] sm:text-[10px] font-bold uppercase tracking-wider ${badgeColors[idx]}`}>
                        {mat.res}
                      </span>
                    </td>
                    <td className="py-4 px-3 sm:px-5">
                      <p className="text-zinc-400 text-[10px] sm:text-xs leading-relaxed max-w-lg">
                        {mat.desc}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

      </div>
    </section>
  );
}