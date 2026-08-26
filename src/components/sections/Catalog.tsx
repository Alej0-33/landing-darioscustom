"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { allProducts } from "@/data/products";
import { WhatsAppIcon } from "../ui/Icons";
import { fadeUp } from "@/utils/animations";
import { useDictionary } from "../DictionaryProvider";

const categories = ["Todos", "Iluminación", "Puertas", "Barandales", "Portones", "Arte", "Miscelaneas"];
const categoryIndices: Record<string, string> = { "Todos": "00", "Iluminación": "01", "Puertas": "02", "Barandales": "03", "Portones": "04", "Arte": "05", "Miscelaneas": "06" };

export default function Catalog() {
  const dictFull = useDictionary();
  const dict = dictFull.catalog;
  const productsData = dictFull.productsData as Record<string | number, { title?: string; tags?: string[] }>;
  const pathname = usePathname();
  const lang = pathname?.split('/')[1] || 'en';
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProducts = activeCategory === "Todos" ? allProducts : allProducts.filter((p) => p.category === activeCategory);

  const handleWhatsAppQuote = (e: React.MouseEvent, title: string) => {
    e.preventDefault();
    e.stopPropagation();
    const message = encodeURIComponent(`${dict.msgPart1} "${title}" ${dict.msgPart2}`);
    const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "13055550199";
    window.open(`https://wa.me/${waNumber}?text=${message}`, "_blank");
  };

  return (
    <section id="catalogo" className="py-24 relative border-t border-industrial-border bg-industrial-bg overflow-hidden">
      <div className="absolute inset-0 industrial-dots opacity-10 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div className="text-center max-w-3xl mx-auto mb-20" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp}>
          <span className="text-xs uppercase tracking-[0.25em] text-brand-light font-bold">{dict.tag}</span>
          <h2 id="catalog-title" className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mt-2 mb-4">{dict.title}</h2>
          <div className="w-20 h-[3px] bg-brand-primary mx-auto my-4" />
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">{dict.desc}</p>
        </motion.div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center mb-16 border-b border-industrial-border pb-px">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button key={cat} onClick={() => setActiveCategory(cat)} className={`relative pb-4 pt-2 text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer flex items-center gap-1.5 border-b-2 ${ isActive ? "border-brand-primary text-white" : "border-transparent text-zinc-500 hover:text-zinc-300" }`}>
                <span className="font-mono text-[8px] opacity-50">[{categoryIndices[cat] || "••"}]</span>
                <span>{(dict.categories as any)[cat]}</span>
              </button>
            );
          })}
        </div>
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((p) => {
              const localizedTitle = productsData[p.id]?.title || p.title;
              const localizedTags = productsData[p.id]?.tags || p.tags;
              return (
                <motion.div layout initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.3 }} key={p.id} className="relative bg-industrial-card/40 border border-industrial-border p-4 rounded-sm overflow-hidden flex flex-col group hover:border-brand-primary/40 transition-all duration-300 machined-corners">
                  <Link href={`/${lang}/catalogo/${p.slug}`} className="absolute inset-0 z-10" aria-label={`Ver detalles de ${localizedTitle}`} />
                  <div className="relative aspect-square overflow-hidden bg-zinc-950 rounded-sm border border-industrial-border flex items-center justify-center">
                    <Image src={`/images/${p.img}`} alt={`${localizedTitle} - Darioscustom Metal Gates`} width={500} height={500} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-transparent opacity-60 pointer-events-none" />
                  </div>
                  <div className="pt-5 flex flex-col flex-grow">
                    <span className="font-mono text-[8px] text-zinc-500 tracking-wider">{dict.specId}{p.id}</span>
                    <h3 className="text-sm font-bold text-white uppercase mt-1 mb-3 group-hover:text-brand-light transition-colors tracking-wide truncate">{localizedTitle}</h3>
                    <div className="flex flex-wrap gap-1 mb-5 flex-grow content-start">
                      {localizedTags.map((tag: string, idx: number) => (
                        <span key={idx} className="text-[8px] font-mono uppercase tracking-wider text-zinc-500 bg-[#09090B]/30 border border-industrial-border/40 px-2 py-0.5 rounded-sm">{tag}</span>
                      ))}
                    </div>
                    <button onClick={(e) => handleWhatsAppQuote(e, localizedTitle)} className="relative z-20 w-full bg-[#09090B] hover:bg-brand-primary text-zinc-400 hover:text-white border border-industrial-border-high hover:border-brand-primary py-3 text-[9px] font-bold uppercase tracking-widest rounded-sm transition-all duration-300 cursor-pointer inline-flex items-center justify-center gap-2">
                      <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" /> {dict.quoteBtn}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}