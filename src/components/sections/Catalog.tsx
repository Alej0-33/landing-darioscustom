"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { allProducts } from "@/data/products";
import { WhatsAppIcon } from "../ui/Icons";

const categories = ["Todos", "Iluminación", "Puertas", "Barandales", "Portones", "Arte", "Miscelaneas"];

// Índices técnicos asignados a cada categoría para lograr un estilo de índice de ingeniería
const categoryIndices: Record<string, string> = {
  "Todos": "00",
  "Iluminación": "01",
  "Puertas": "02",
  "Barandales": "03",
  "Portones": "04",
  "Arte": "05",
  "Miscelaneas": "06"
};

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProducts =
    activeCategory === "Todos"
      ? allProducts
      : allProducts.filter((p) => p.category === activeCategory);

  const handleWhatsAppQuote = (e: React.MouseEvent, title: string) => {
    e.preventDefault();
    e.stopPropagation();
    const message = encodeURIComponent(
      `Hola Darioscustom, estoy interesado en cotizar el producto "${title}" de su catálogo online.`
    );
    const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "13055550199";
    window.open(`https://wa.me/${waNumber}?text=${message}`, "_blank");
  };

  return (
    <section id="catalogo" className="py-24 relative border-t border-industrial-border bg-industrial-bg overflow-hidden">
      {/* Retícula técnica de fondo sutil usando las utilidades de globals.css */}
      <div className="absolute inset-0 industrial-dots opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Encabezado Principal */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-light font-bold">Catálogo Detallado</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mt-2 mb-4">
            HERRERIA ARTESANAL HECHA A TU MEDIDA
          </h2>
          <div className="w-20 h-[3px] bg-brand-primary mx-auto my-4" />
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            Explora nuestra colección con las principales piezas desarrolladas por nuestros herreros en Florida. Filtra por categoría y cotiza directamente tu diseño ideal.
          </p>
        </div>

        {/* Filtros Estilo Tabulador de Planos */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center mb-16 border-b border-industrial-border pb-px">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative pb-4 pt-2 text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer flex items-center gap-1.5 border-b-2 ${
                  isActive
                    ? "border-brand-primary text-white"
                    : "border-transparent text-zinc-500 hover:text-zinc-300"
                }`}
              >
                <span className="font-mono text-[8px] opacity-50">
                  [{categoryIndices[cat] || "••"}]
                </span>
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Grilla de Catálogo */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((p) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                key={p.id}
                className="relative bg-industrial-card/40 border border-industrial-border p-4 rounded-sm overflow-hidden flex flex-col group hover:border-brand-primary/40 transition-all duration-300 machined-corners"
              >
                {/* Overlay de navegación completo */}
                <Link
                  href={`/catalogo/${p.slug}`}
                  className="absolute inset-0 z-10"
                  aria-label={`Ver detalles de ${p.title}`}
                />

                {/* Contenedor de la Imagen */}
                <div className="relative aspect-square overflow-hidden bg-zinc-950 rounded-sm border border-industrial-border flex items-center justify-center">
                  <img
                    src={`/images/${p.img}`}
                    alt={`${p.title} - Darioscustom Metal Gates`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>

                {/* Detalles Técnicos */}
                <div className="pt-5 flex flex-col flex-grow">
                  {/* Código SKU/Identificador de Registro */}
                  <span className="font-mono text-[8px] text-zinc-500 tracking-wider">
                    SPEC-ID // DC-00{p.id}
                  </span>
                  
                  <h3 className="text-sm font-bold text-white uppercase mt-1 mb-3 group-hover:text-brand-light transition-colors tracking-wide truncate">
                    {p.title}
                  </h3>

                  {/* Etiquetas de características técnicas */}
                  <div className="flex flex-wrap gap-1 mb-5 flex-grow content-start">
                    {p.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[8px] font-mono uppercase tracking-wider text-zinc-500 bg-[#09090B]/30 border border-industrial-border/40 px-2 py-0.5 rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Acción del Producto */}
                  <button
                    onClick={(e) => handleWhatsAppQuote(e, p.title)}
                    className="relative z-20 w-full bg-[#09090B] hover:bg-brand-primary text-zinc-400 hover:text-white border border-industrial-border-high hover:border-brand-primary py-3 text-[9px] font-bold uppercase tracking-widest rounded-sm transition-all duration-300 cursor-pointer inline-flex items-center justify-center gap-2"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />
                    Cotizar vía WhatsApp
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}