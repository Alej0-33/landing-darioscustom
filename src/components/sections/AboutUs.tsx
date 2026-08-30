"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, fadeIn } from "@/utils/animations";
import { useDictionary } from "../DictionaryProvider";

export default function AboutUs() {
  const dict = useDictionary().about;

  return (
    <section id="sobre-nosotros" className="py-24 relative bg-[#09090B] border-t border-industrial-border overflow-hidden">
      <div className="absolute inset-0 industrial-grid opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,rgba(184,82,39,0.05),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <motion.div 
            className="lg:col-span-5 flex flex-col justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <span className="text-xs uppercase tracking-[0.25em] text-brand-light font-bold mb-3 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-brand-light/50 block"></span>
              {dict.tag}
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-6 leading-tight">
              {dict.title}
            </h2>
            
            <div className="w-16 h-[2px] bg-brand-primary mb-8" />
            
            <div className="space-y-6 text-zinc-400 text-sm md:text-base leading-relaxed mb-10">
              <p>{dict.desc1}</p>
              <p>{dict.desc2}</p>
            </div>

            <div className="grid grid-cols-3 gap-4 border-t border-industrial-border pt-8">
              {dict.stats.map((stat: any, idx: number) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-black text-white mb-1">{stat.value}</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <div className="grid grid-cols-12 gap-4 h-full">
              <div className="col-span-12 md:col-span-8 relative aspect-[4/5] bg-industrial-card border border-industrial-border machined-corners overflow-hidden group shadow-2xl">
                {/* Explicitly added loading="lazy" for performance optimization */}
                <Image 
                  src="/images/dario's.webp" 
                  alt="Maestro Herrero Dario" 
                  fill 
                  loading="lazy"
                  className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 grayscale hover:grayscale-0 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-transparent opacity-80 pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="bg-[#09090B]/80 backdrop-blur-sm border border-industrial-border-high text-brand-light text-[10px] px-3 py-1.5 font-bold uppercase tracking-widest inline-flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-pulse"></span>
                    Master Craftsman
                  </span>
                </div>
              </div>

              <div className="col-span-12 md:col-span-4 flex md:flex-col gap-4">
                <div className="relative flex-1 md:flex-auto md:h-1/2 min-h-[160px] bg-industrial-card border border-industrial-border machined-corners overflow-hidden group shadow-lg">
                  {/* Explicit loading="lazy" */}
                  <Image 
                    src="/images/dario's3.webp" 
                    alt="Trabajo de Forja en Taller" 
                    fill 
                    loading="lazy"
                    className="object-cover opacity-60 group-hover:opacity-100 transition-all duration-500 grayscale hover:grayscale-0 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-[#B85227]/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                </div>
                
                <div className="relative flex-1 md:flex-auto md:h-1/2 min-h-[160px] bg-industrial-card border border-industrial-border machined-corners overflow-hidden group shadow-lg">
                  {/* Explicit loading="lazy" */}
                  <Image 
                    src="/images/dario's6.webp" 
                    alt="Detalle de Soldadura y Metal" 
                    fill 
                    loading="lazy"
                    className="object-cover opacity-60 group-hover:opacity-100 transition-all duration-500 grayscale hover:grayscale-0 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-[#B85227]/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}