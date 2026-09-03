"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "@/utils/animations"; 
import { useDictionary } from "../DictionaryProvider";

export default function AboutUs() { 
  const dict = useDictionary().about;

  return (   
    <section id="sobre-nosotros" className="py-24 md:py-32 relative overflow-hidden bg-industrial-bg border-t border-industrial-border"> 
      
      {/* Resplandor ambiental de fondo para aspecto premium */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-full md:w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[90rem] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* TEXTO - COLUMNA IZQUIERDA */}
          <motion.div 
            className="lg:col-span-5 flex flex-col justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-brand-light font-bold mb-4 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-brand-light/50 block"></span>
              {dict.tag}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-8 leading-[1.1] drop-shadow-md">
              {dict.title}
            </h2>
            
            <div className="w-16 h-[3px] bg-brand-primary mb-10" />
            
            <div className="space-y-6 text-zinc-400 text-sm md:text-base leading-relaxed mb-12">
              <p>{dict.desc1}</p>
              <p>{dict.desc2}</p>
            </div>

            {/* Estadísticas rediseñadas */}
            <div className="grid grid-cols-3 gap-6 border-t border-industrial-border/50 pt-10">
              {dict.stats.map((stat: any, idx: number) => (
                <div key={idx} className="flex flex-col gap-1">
                  <span className="text-3xl md:text-4xl font-black text-white tracking-tight drop-shadow-sm">{stat.value}</span>
                  <span className="text-[9px] md:text-[10px] uppercase font-bold tracking-widest text-zinc-500 leading-tight">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* GALERÍA DE IMÁGENES PREMIUM - COLUMNA DERECHA */}
          <motion.div 
            className="lg:col-span-7 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer} 
          >
            <div className="grid grid-cols-12 gap-4 md:gap-6 h-full">
              
              {/* Imagen Principal (Grande) */}
              <motion.div 
                variants={staggerItem} 
                className="col-span-12 md:col-span-8 relative aspect-[4/5] bg-zinc-950 rounded-xl overflow-hidden group shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] border border-industrial-border hover:border-brand-primary/30 transition-all duration-500"
              >
                <Image 
                  src="/images/dario's7.webp" 
                  alt="Maestro Herrero Dario" 
                  fill 
                  loading="lazy"
                  className="object-cover transition-all duration-1000 opacity-100 grayscale-0 md:opacity-80 md:grayscale md:group-hover:opacity-100 md:group-hover:grayscale-0 md:group-hover:scale-105" 
                />
                
                {/* Gradiente oscuro inferior */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/90 via-[#09090B]/20 to-transparent pointer-events-none opacity-80" />
                
                {/* Badge Premium (Glassmorphism) */}
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="bg-[#09090B]/60 backdrop-blur-md border border-white/10 text-white text-[10px] px-4 py-2 font-bold uppercase tracking-widest inline-flex items-center gap-3 rounded-md shadow-xl">
                    <span className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-pulse shadow-[0_0_8px_rgba(184,82,39,1)]"></span>
                    Master Craftsman
                  </span>
                </div>
              </motion.div>

              {/* Imágenes Secundarias (Pequeñas) */}
              <div className="col-span-12 md:col-span-4 flex md:flex-col gap-4 md:gap-6">
                
                {/* Imagen Secundaria 1 */}
                <motion.div 
                  variants={staggerItem} 
                  className="relative flex-1 md:flex-auto md:h-1/2 min-h-[180px] bg-zinc-950 rounded-xl overflow-hidden group shadow-xl border border-industrial-border hover:border-brand-primary/30 transition-all duration-500"
                >
                  <Image 
                    src="/images/dario's3.webp" 
                    alt="Trabajo de Forja en Taller" 
                    fill 
                    loading="lazy"
                    className="object-cover transition-all duration-1000 opacity-100 grayscale-0 md:opacity-60 md:grayscale md:group-hover:opacity-100 md:group-hover:grayscale-0 md:group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-[#B85227]/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none mix-blend-overlay" />
                </motion.div>
                
                {/* Imagen Secundaria 2 */}
                <motion.div 
                  variants={staggerItem} 
                  className="relative flex-1 md:flex-auto md:h-1/2 min-h-[180px] bg-zinc-950 rounded-xl overflow-hidden group shadow-xl border border-industrial-border hover:border-brand-primary/30 transition-all duration-500"
                >
                  <Image 
                    src="/images/dario's9.webp" 
                    alt="Detalle de Soldadura y Metal" 
                    fill 
                    loading="lazy"
                    className="object-cover transition-all duration-1000 opacity-100 grayscale-0 md:opacity-60 md:grayscale md:group-hover:opacity-100 md:group-hover:grayscale-0 md:group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-[#B85227]/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none mix-blend-overlay" />
                </motion.div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  ); 
}