"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { allProducts } from "@/data/products";

const categories = ["Todos", "Iluminación", "Rejas", "Puertas", "Mesas", "Barandales", "Portones", "Arte"];

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
    <section id="catalogo" className="py-24 relative border-t border-industrial-border bg-[#0d0d10]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-light font-bold">Catálogo Detallado</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mt-2 mb-4">
            Estructuras Forjadas a Medida
          </h2>
          <div className="w-20 h-1 bg-brand-primary mx-auto my-4" />
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            Explora nuestra colección con las 20 principales piezas desarrolladas por nuestros herreros. Filtra por categoría y cotiza directamente tu diseño ideal.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all rounded-sm border cursor-pointer ${
                activeCategory === cat
                  ? "bg-brand-primary border-brand-primary text-white"
                  : "border-industrial-border bg-industrial-card text-zinc-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((p) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={p.id}
                className="relative bg-industrial-card border border-industrial-border rounded-md overflow-hidden flex flex-col group hover:border-industrial-border-high transition-all"
              >
                {/* ── Overlay de navegación ────────────────────────────
                    Cubre toda la card en z-10. El botón de WhatsApp
                    está en z-20 y llama stopPropagation, así que
                    coexisten sin conflicto.
                ─────────────────────────────────────────────────────── */}
                <Link
                  href={`/catalogo/${p.slug}`}
                  className="absolute inset-0 z-10"
                  aria-label={`Ver detalles de ${p.title}`}
                />

                <div className="relative aspect-square overflow-hidden bg-zinc-950 flex items-center justify-center">
                  <img
                    src={`/images/${p.img}`}
                    alt={`${p.title} - Darioscustom Metal Gates`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <span className="text-[10px] text-brand-light font-bold uppercase tracking-widest">
                    {p.category}
                  </span>
                  <h3 className="text-md font-bold text-white uppercase mt-1 mb-3 group-hover:text-brand-light transition-colors">
                    {p.title}
                  </h3>

                  <div className="flex flex-wrap gap-1.5 mb-5 flex-grow">
                    {p.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-[#09090B] border border-industrial-border text-zinc-500 text-[9px] px-2 py-0.5 rounded-sm font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={(e) => handleWhatsAppQuote(e, p.title)}
                    className="relative z-20 w-full bg-[#09090B] hover:bg-brand-primary text-zinc-300 hover:text-white border border-industrial-border-high py-2.5 text-[10px] font-bold uppercase tracking-wider rounded-sm transition-all cursor-pointer inline-flex items-center justify-center gap-2"
                  >
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