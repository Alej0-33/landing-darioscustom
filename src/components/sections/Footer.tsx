// src/components/sections/Footer.tsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/animations";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Enlaces para conectividad interna (SEO)
  const links = [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "Catálogo", href: "#catalogo" },
    { name: "Reseñas", href: "#opiniones" },
    { name: "Preguntas Frecuentes", href: "#preguntas" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <footer className="border-t border-industrial-border bg-[#09090B]">
      <motion.div
        className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        {/* Logo + Nombre + Descripción */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 flex items-center justify-center shrink-0">
              <Image
                src="/brand/darioscustom_logo2.png"
                alt="Darioscustomart Inc Logo"
                width={56}
                height={56}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-black text-lg tracking-wider text-white leading-none">
              DARIO'S CUSTOM <span className="text-brand-primary">IRON ART</span>
              <span className="block text-[9px] font-semibold tracking-[0.3em] text-zinc-500 mt-0.5">
                INC
              </span>
            </span>
          </div>
          <p className="text-[11px] text-zinc-500 text-center md:text-left max-w-xs">
            Taller y Forjado de Precisión en Miami, Florida. Diseñado para Máxima Resistencia Estructural.
          </p>
        </div>

        {/* Enlaces Internos (Internal Linking) */}
        <nav className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-3 max-w-lg">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-bold tracking-widest text-zinc-400 hover:text-brand-light uppercase transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </motion.div>
      
      {/* Barra Inferior (Copyright y E-E-A-T) */}
      <div className="border-t border-industrial-border/50">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          
          {/* Copyright usando la etiqueta <time> para rastreadores de agentes */}
          <div className="text-[11px] text-zinc-500">
            &copy; <time dateTime={`${currentYear}-01-01`}>{currentYear}</time> Dario's custom iron art Inc. Todos los derechos reservados.
          </div>
          
          {/* Políticas para señales de Confianza E-E-A-T */}
          <div className="flex gap-4 text-[11px] text-zinc-600 justify-center">
            <a href="#" className="hover:text-zinc-400 transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}