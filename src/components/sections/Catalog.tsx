"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { allProducts, getCategorySlug, CATEGORY_SLUGS } from "@/data/products";
import { WhatsAppIcon } from "../ui/Icons";
import { fadeUp } from "@/utils/animations";
import { useDictionary } from "../DictionaryProvider";
import { Button } from "../ui/Button"; 

const categories = ["Todos", ...Object.keys(CATEGORY_SLUGS)];

const INITIAL_VISIBLE = 12;

export default function Catalog() {
  const dictFull = useDictionary();
  const dict = dictFull.catalog;
  const productsData = dictFull.productsData as Record<string | number, { title?: string; tags?: string[] }>;
  const pathname = usePathname();
  const lang = pathname?.split('/')[1] || 'en';
  
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const filteredProducts = activeCategory === "Todos" 
    ? allProducts 
    : allProducts.filter((p) => p.category === activeCategory);

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setVisibleCount(INITIAL_VISIBLE); 
  };

  const handleWhatsAppQuote = (e: React.MouseEvent, title: string) => {
    e.preventDefault();
    e.stopPropagation();
    const message = encodeURIComponent(`${dict.msgPart1} "${title}" ${dict.msgPart2}`);
    const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "13055550199";
    window.open(`https://wa.me/${waNumber}?text=${message}`, "_blank");
  };

  return (
    <>
    <section id="catalog" className="py-24 relative border-t border-industrial-border bg-industrial-bg overflow-hidden">
      <div className="absolute inset-0 industrial-dots opacity-10 pointer-events-none" />
      <div className="max-w-[90rem] mx-auto px-6 relative z-10">
        
        <motion.div className="text-center max-w-3xl mx-auto mb-20" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp}>
          <span className="text-xs uppercase tracking-[0.25em] text-brand-light font-bold">{dict.tag}</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mt-2 mb-4">{dict.title}</h2>
          <div className="w-20 h-[3px] bg-brand-primary mx-auto my-4" />
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">{dict.desc}</p>
        </motion.div>
        
        <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center mb-16 border-b border-industrial-border pb-px">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button 
                key={cat} 
                onClick={() => handleCategoryChange(cat)} 
                className={`relative pb-4 pt-2 text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer flex items-center border-b-2 ${ isActive ? "border-brand-primary text-white" : "border-transparent text-zinc-500 hover:text-zinc-300" }`}
              >
                <span>{(dict.categories as any)[cat]}</span>
              </button>
            );
          })}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {displayedProducts.map((p) => {
              const localizedTitle = productsData[p.id]?.title || p.title;
              const localizedTags = productsData[p.id]?.tags || p.tags;
              
              return (
                <motion.div 
                  layout 
                  initial={{ opacity: 0, scale: 0.96 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  exit={{ opacity: 0, scale: 0.96 }} 
                  transition={{ duration: 0.3 }} 
                  key={p.id} 
                  className="group relative flex flex-col bg-[#0d0d10] border border-industrial-border hover:border-brand-primary/40 rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(184,82,39,0.15)]"
                >
                  
                  {/* ENLACE PRINCIPAL */}
                  <Link href={`/${lang}/catalog/${getCategorySlug(p.category, lang)}/${p.slug}/`} className="absolute inset-0 z-10" aria-label={`${dict.viewProd} ${localizedTitle}`}>
                    <span className="sr-only">{dict.viewProd}: {localizedTitle}</span>
                  </Link>
                  
                  {/* CONTENEDOR DE IMAGEN (Full Bleed) */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-zinc-950">
                    <Image 
                      src={`/images/${p.img}`} 
                      alt={`${localizedTitle} - Darioscustom`} 
                      width={500} 
                      height={625} 
                      loading="lazy" 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100" 
                    />
                    
                    {/* Gradiente sutil inferior para fusionar con el fondo */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d10] via-[#0d0d10]/20 to-transparent opacity-90 pointer-events-none" />
                    
                    {/* Badge SPEC-ID Flotante Premium */}
                    <div className="absolute top-4 left-4 z-20 pointer-events-none">
                      <span className="bg-[#09090B]/80 backdrop-blur-md border border-white/10 text-[9px] font-mono text-zinc-400 tracking-widest px-2.5 py-1 rounded-sm uppercase">
                        {dict.specId}{p.id}
                      </span>
                    </div>
                  </div>

                  {/* CONTENEDOR DE TEXTOS Y BOTÓN */}
                  <div className="p-6 pt-0 flex flex-col flex-grow relative z-20 -mt-8">
                    
                    {/* Título */}
                    <h3 id={`product-${p.id}`} className="text-base md:text-lg font-black text-white uppercase mb-4 group-hover:text-brand-light transition-colors tracking-wide line-clamp-2 leading-snug drop-shadow-md">
                      {localizedTitle}
                    </h3>
                    
                    {/* TAGS CORREGIDOS: Mayor contraste, legibles y elegantes */}
                    <div className="flex flex-wrap gap-2 mb-6 flex-grow content-start">
                      {localizedTags.slice(0, 3).map((tag: string, idx: number) => (
                        <span 
                          key={idx} 
                          className="text-[10px] font-semibold uppercase tracking-wider text-zinc-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                      {localizedTags.length > 3 && (
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500 py-1">
                          +{localizedTags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Botón WhatsApp */}
                    <div className="mt-auto">
                      <button 
                        onClick={(e) => handleWhatsAppQuote(e, localizedTitle)} 
                        className="relative z-20 w-full bg-[#18181B] group-hover:bg-brand-primary text-zinc-400 group-hover:text-white border border-industrial-border-high group-hover:border-brand-primary py-3.5 text-[10px] font-bold uppercase tracking-widest rounded-md transition-all duration-500 flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                      >
                        <WhatsAppIcon className="w-4 h-4 shrink-0 transition-transform group-hover:scale-110" /> 
                        {dict.quoteBtn}
                      </button>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length > visibleCount && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="flex justify-center mt-16"
          >
            <Button 
              variant="secondary" 
              onClick={() => setVisibleCount((prev) => prev + INITIAL_VISIBLE)}
              className="px-8 py-4 text-xs tracking-widest"
            >
              {(dict as any).loadMore || (lang === 'en' ? 'Load More Products' : 'Cargar más productos')}
            </Button>
          </motion.div>
        )}

      </div>
    </section>
    </>
  );
}