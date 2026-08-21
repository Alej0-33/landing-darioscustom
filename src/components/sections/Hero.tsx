"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ShieldCheck, Flame, Anchor, RefreshCw } from "lucide-react";
import { Button } from "../ui/Button";

export default function Hero() {
  const containerRef = useRef(null);
  const [showProduct, setShowProduct] = useState(false);

  // 1. Detección de Scroll para la transformación
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Conforme el usuario hace scroll, cambiamos la opacidad del plano (de 1 a 0)
  // y la opacidad del producto real (de 0 a 1)
  const blueprintOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const productOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  // 2. Temporizador Automático (esperar 3 segundos para mostrar el producto final si no scrollea)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowProduct(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="inicio"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-28 overflow-hidden bg-industrial-bg"
    >
      {/* Fondo con textura técnica */}
      <div className="absolute inset-0 industrial-grid opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(184,82,39,0.08),transparent_70%)] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-industrial-border-high to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12">
        {/* Lado Izquierdo: Textos */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tight leading-[1.08] mb-6 uppercase text-white font-sans"
          >
            Herrería de <span className="text-brand-primary">Alta Costura</span> y Portones a Medida
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 text-base md:text-lg mb-8 max-w-xl font-normal leading-relaxed"
          >
            Fabricación de rejas de seguridad, barandales arquitectónicos y portones residenciales certificados contra huracanes, con recubrimiento electrostático resistente al salitre marino.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Button
              variant="primary"
              onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
            >
              Cotizar mi Proyecto <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              variant="secondary"
              onClick={() => document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explorar Catálogo
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-industrial-border pt-8 w-full"
          >
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-brand-primary shrink-0" />
              <div>
                <h4 className="text-white font-bold uppercase tracking-wider text-xs">Cumplimiento ASCE 7</h4>
                <p className="text-zinc-500 text-[10px]">Carga de viento contra tormentas</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Anchor className="w-8 h-8 text-brand-primary shrink-0" />
              <div>
                <h4 className="text-white font-bold uppercase tracking-wider text-xs">Garantía Marina</h4>
                <p className="text-zinc-500 text-[10px]">Protección electrostática anticorrosiva</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Flame className="w-8 h-8 text-brand-primary shrink-0" />
              <div>
                <h4 className="text-white font-bold uppercase tracking-wider text-xs">Instalación Local</h4>
                <p className="text-zinc-500 text-[10px]">Servicio directo en todo el condado</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Lado Derecho: Contenedor Interactivo CAD / PRODUCTO FINAL */}
        <div className="lg:col-span-5 relative flex flex-col justify-center items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-[4/5] max-w-[450px] border border-industrial-border-high bg-[#0d0d10] rounded-lg shadow-2xl machined-corners overflow-hidden group"
          >
            
            {/* CAPA 1: El Plano Técnico (CAD Blueprint) */}
            <motion.div 
              style={{ opacity: showProduct ? 0 : 1 }} // Al activarse el timer, se oculta temporalmente
              className="absolute inset-0 p-6 flex flex-col justify-between transition-opacity duration-1000 ease-in-out z-20"
            >
              <div className="absolute inset-0 industrial-dots opacity-45 pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent" />
              
              {/* Marco técnico del plano */}
              <div className="absolute inset-3 border border-industrial-border/40 pointer-events-none flex flex-col justify-between p-2">
                <div className="flex justify-between text-[8px] text-zinc-600 font-mono">
                  <span>LAT: 25.7617° N | LON: 80.1918° W</span>
                  <span>SYS_SPEC_V5</span>
                </div>
                <div className="flex justify-between text-[8px] text-zinc-600 font-mono">
                  <span>SCALE: NTS</span>
                  <span>AWS D1.1 STANDARD</span>
                </div>
              </div>

              {/* Contenido del Esquema */}
              <div className="relative h-full w-full flex flex-col justify-between py-6 px-4 z-10">
                <div className="border-b border-industrial-border pb-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-brand-light font-bold">Dibujo de Taller</span>
                    <span className="text-[9px] font-mono text-zinc-500">DWG #409-MIAMI</span>
                  </div>
                  <h3 className="text-md font-bold uppercase text-white tracking-wider">REJA ARQUITECTÓNICA DE PRIVACIDAD</h3>
                </div>

                <div className="flex-grow flex items-center justify-center py-6">
                  <div className="w-4/5 h-24 border-2 border-dashed border-brand-primary/20 relative flex items-center justify-around">
                    <div className="absolute top-0 bottom-0 left-1/4 w-[1px] bg-brand-primary/30" />
                    <div className="absolute top-0 bottom-0 left-2/4 w-[1px] bg-brand-primary/30" />
                    <div className="absolute top-0 bottom-0 left-3/4 w-[1px] bg-brand-primary/30" />
                    <div className="absolute top-0 left-0 w-8 h-[1px] bg-brand-primary/40 rotate-45 origin-top-left" />
                    <div className="absolute bottom-0 right-0 w-8 h-[1px] bg-brand-primary/40 rotate-45 origin-bottom-right" />
                    
                    <div className="absolute -top-5 inset-x-0 flex justify-between items-center text-[8px] font-mono text-brand-light">
                      <span>|</span>
                      <span className="border-b border-brand-light/40 flex-grow mx-1 text-center">W: 14.50 FT</span>
                      <span>|</span>
                    </div>
                    <div className="absolute -left-5 inset-y-0 flex flex-col justify-between items-center text-[8px] font-mono text-brand-light">
                      <span>-</span>
                      <span className="rotate-90">H: 8.00 FT</span>
                      <span>-</span>
                    </div>
                    
                    <span className="text-[9px] font-mono text-zinc-500 bg-[#0d0d10] px-2 z-10 border border-industrial-border">
                      MODEL: DC-PRIVACY-04
                    </span>
                  </div>
                </div>

                <div className="border-t border-industrial-border pt-4 flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="block text-[8px] uppercase tracking-wider text-zinc-500 font-bold">Especificaciones Generales:</span>
                    <span className="block text-[11px] font-bold text-white uppercase tracking-wider">Darioscustom Corp.</span>
                    <span className="block text-[8px] text-zinc-500">Forjado & Solidez • Miami, FL</span>
                  </div>
                  <div className="w-14 h-14 bg-industrial-card border border-brand-primary/35 p-2 rounded relative machined-corners flex items-center justify-center shadow-lg">
                    <img 
                      src="/brand/darioscustom_logo.png" 
                      alt="Darioscustom" 
                      className="w-full h-full object-contain filter brightness-110" 
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CAPA 2: El Producto Terminado Real */}
            <motion.div 
              style={{ opacity: showProduct ? 1 : 0 }} // Controlado por el temporizador
              className="absolute inset-0 transition-opacity duration-1000 ease-in-out z-10"
            >
              {/* Imagen del producto real */}
              <img 
                src="/images/product19.png" // Reemplaza por tu imagen real
                alt="Proyecto Terminado Darioscustom"
                className="w-full h-full object-cover"
              />
              {/* Overlay oscuro para mantener legibilidad y diseño premium */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              
              {/* Etiqueta flotante informativa */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between z-10">
                <div>
                  <span className="text-[9px] font-bold text-brand-light tracking-widest uppercase">PROYECTO FINALIZADO</span>
                  <h4 className="text-white text-sm font-bold uppercase">Resultado en Obra</h4>
                </div>
                <div className="bg-brand-primary text-white text-[9px] font-bold py-1 px-3 rounded uppercase tracking-wider">
                  100% Acero
                </div>
              </div>
            </motion.div>

            {/* CAPA DE CONTROL DE SCROLL EXCLUSIVA (Para cuando el usuario haga scroll de verdad) */}
            <motion.div 
              style={{ opacity: productOpacity }} 
              className="absolute inset-0 z-30 pointer-events-none"
            >
              <img 
                src="/images/product19.png" 
                alt="Proyecto Terminado"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/10 to-transparent" />
            </motion.div>

          </motion.div>

          {/* Botón interactivo debajo para alternar manualmente */}
          <button 
            onClick={() => setShowProduct(!showProduct)}
            className="mt-4 flex items-center gap-2 text-zinc-500 hover:text-brand-light text-[10px] font-mono tracking-widest uppercase transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5 animate-spin-slow" />
            <span>Alternar vista (Plano / Real)</span>
          </button>

        </div>
      </div>
    </section>
  );
}