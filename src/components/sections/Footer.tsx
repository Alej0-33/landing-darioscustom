// src/components/sections/Footer.tsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/animations";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Enlaces divididos lógicamente para mejor UX y estructuración AEO
  const mainLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "Catálogo", href: "#catalogo" },
    { name: "Reseñas", href: "#opiniones" },
  ];

  const supportLinks = [
    { name: "Preguntas Frecuentes", href: "#preguntas" },
    { name: "Cotizar por WhatsApp", href: "#contacto" }, // Texto ancla optimizado (SEO)
  ];

  return (
    <footer className="border-t border-industrial-border bg-[#09090B] pt-16">
      <motion.div
        className="max-w-7xl mx-auto px-6 pb-12 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        {/* Columna 1: Marca y Descripción (Ocupa la mitad en desktop) */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left md:col-span-6 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 flex items-center justify-center shrink-0">
              <Image
                src="/brand/darioscustom_logo2.webp"
                alt="Darioscustomart Inc Logo"
                width={56}
                height={56}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-black text-lg tracking-wider text-white leading-none text-left">
              DARIO'S CUSTOM <span className="text-[#B85227]">IRON ART</span>
              <span className="block text-[9px] font-semibold tracking-[0.3em] text-zinc-500 mt-0.5">
                INC
              </span>
            </span>
          </div>
          <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
            Taller y Forjado de Precisión en Miami, Florida. Diseñamos soluciones en hierro y aluminio para máxima resistencia estructural y elegancia.
          </p>
        </div>

        {/* Columna 2: Navegación Principal (Listas estructuradas para AEO) */}
        <nav className="flex flex-col items-center md:items-start md:col-span-3 gap-4" aria-label="Navegación Principal">
          <p className="text-xs font-bold text-white uppercase tracking-widest mb-1">
            Navegación
          </p>
          <ul className="flex flex-col gap-3 text-center md:text-left">
            {mainLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm text-zinc-400 hover:text-[#B85227] transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Columna 3: Soporte y Contacto (Listas estructuradas para AEO) */}
        <nav className="flex flex-col items-center md:items-start md:col-span-3 gap-4" aria-label="Soporte y Contacto">
          <p className="text-xs font-bold text-white uppercase tracking-widest mb-1">
            Atención al Cliente
          </p>
          <ul className="flex flex-col gap-3 text-center md:text-left">
            {supportLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm text-zinc-400 hover:text-[#B85227] transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
      
      {/* Barra Inferior (Copyright y E-E-A-T) */}
      <div className="border-t border-zinc-800/50 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          
          {/* Copyright usando la etiqueta <time> para rastreadores de agentes */}
          <div className="text-xs text-zinc-500">
            &copy; <time dateTime={`${currentYear}-01-01`}>{currentYear}</time> Dario's Custom Iron Art Inc. Todos los derechos reservados.
          </div>
          
          {/* Políticas para señales de Confianza E-E-A-T */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-zinc-500">
            <a href="#" className="hover:text-zinc-300 transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}