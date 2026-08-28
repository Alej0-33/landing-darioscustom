"use client";
import { motion } from "framer-motion";
import { ShieldAlert, Award, Hammer, Clock } from "lucide-react";
import { slideFromLeft, staggerContainer, staggerItem } from "@/utils/animations";
import { useDictionary } from "../DictionaryProvider";

export default function WhyChooseUs() {
  const dict = useDictionary().whyus;
  const icons = [
    <Award className="w-10 h-10 text-brand-primary" />,
    <ShieldAlert className="w-10 h-10 text-brand-primary" />,
    <Hammer className="w-10 h-10 text-brand-primary" />,
    <Clock className="w-10 h-10 text-brand-primary" />
  ];

  return (
    <section id="por-que-nosotros" className="py-24 relative border-t border-industrial-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={slideFromLeft}>
            <span className="text-xs uppercase tracking-[0.25em] text-brand-light font-bold">{dict.tag}</span>
            {/* ✅ ID en el H2 principal */}
            <h2 id="whyus-title" className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mt-2 mb-6">{dict.title}</h2>
            <p className="text-zinc-400 mb-6 leading-relaxed">{dict.desc1}</p>
            <p className="text-zinc-400 leading-relaxed mb-8">{dict.desc2}</p>
            <div className="border-l-4 border-brand-primary pl-4 py-2 italic text-zinc-300 bg-industrial-card/50 p-4 rounded-r">
              {dict.quote}
            </div>
          </motion.div>
          
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={staggerContainer}>
            {dict.items.map((item: any, idx: number) => (
              <motion.article key={idx} variants={staggerItem} className="bg-industrial-card border border-industrial-border p-6 rounded-md hover:border-brand-primary/40 transition-all duration-300">
                <div className="mb-4">{icons[idx]}</div>
                {/* ✅ Convertido a H3 con ID único para Deep Linking */}
                <h3 id={`why-feature-${idx}`} className="text-lg font-bold text-white uppercase tracking-wide mb-2">{item.title}</h3>
                <p className="text-zinc-400 text-xs leading-relaxed m-0">{item.desc}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}