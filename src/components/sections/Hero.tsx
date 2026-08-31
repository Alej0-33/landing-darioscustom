"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";
import { useDictionary } from "../DictionaryProvider";
import { slideFromLeft, slideFromRight, fadeUp, staggerContainer } from "../../utils/animations";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const dict = useDictionary().hero;

  return (
    <section ref={containerRef} className="relative w-full overflow-hidden min-h-screen flex items-center pt-24 pb-12">
      
      {/* Patrón de fondo opcional sutil */}
      <div className="absolute inset-0 industrial-grid opacity-20 pointer-events-none" />
      
      {/* Resplandor ambiental de fondo en toda la sección superior */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center w-full"
      >
        
        {/* Columna Izquierda (Textos y Botones) - Ocupa 5 columnas */}
        <motion.div variants={slideFromLeft} className="lg:col-span-5 flex flex-col items-start text-left z-20">
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6 uppercase text-white font-sans"
          >
            {dict.title1} <span className="text-brand-primary">{dict.highlight}</span> {dict.title2}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-zinc-400 text-base lg:text-lg mb-8 max-w-lg font-normal leading-relaxed"
          >
            {dict.desc}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Button
              variant="primary"
              className="w-full sm:w-auto"
              onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
              aria-label="Request a custom ironwork quote"
            >
              {dict.btnQuote} <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              variant="secondary"
              className="w-full sm:w-auto"
              onClick={() => document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" })}
              aria-label="Explore our custom metalwork catalog"
            >
              {dict.btnCatalog}
            </Button>
          </motion.div>
        </motion.div>

        {/* Columna Derecha (Video Gigante y Horizontal) - Ocupa 7 columnas */}
        <motion.div variants={slideFromRight} className="lg:col-span-7 relative flex flex-col justify-center items-center w-full mt-10 lg:mt-0">
          
          {/* Glow específico detrás del video */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-brand-primary/20 blur-[100px] -z-10 rounded-full pointer-events-none" />

          {/* Contenedor del video: sin límite de ancho (w-full), adaptándose a la proporción de 16:9 */}
          <div className="relative w-full overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl ring-1 ring-white/10 bg-industrial-bg/50 backdrop-blur-sm group">
            <video 
              src="/videos/cnc-laser-cutting-stainless-steel-business-awning.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-[1.02]"
            />
            {/* Efecto de marco interno muy sutil para darle profundidad a la pantalla */}
            <div className="absolute inset-0 rounded-xl sm:rounded-2xl shadow-[inset_0_0_40px_rgba(0,0,0,0.6)] pointer-events-none" />
            
            
          </div>
          
        </motion.div>

      </motion.div>
    </section>
  );
}