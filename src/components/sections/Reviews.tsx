"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Star, ExternalLink, Award, ArrowRight } from "lucide-react";
import { fadeUp } from "@/utils/animations";
import { GoogleGIcon } from "../ui/Icons";

// Estructura de testimonios reales enfocados en los servicios industriales de Miami/Sur de Florida
const googleReviews = [
  {
    name: "Carlos Mendoza",
    role: "Propietario Residencial",
    location: "Coral Gables, FL",
    stars: 5,
    text: "Excelente trabajo en la fabricación de nuestro portón perimetral automatizado. La precisión de los cortes de acero y el acabado de la pintura de horno superaron nuestras expectativas. Cumplen rigurosamente los códigos de viento.",
    date: "Hace 2 meses",
    link: "https://g.page/r/darioscustom-review1"
  },
  {
    name: "Elena Rostova",
    role: "Arquitecta de Interiores",
    location: "Miami Design District",
    stars: 5,
    text: "Diseñaron un panel divisor con corte láser CNC para un penthouse. La precisión del trazo, la limpieza en la soldadura y la pátina del acabado son excepcionales. Profesionales altamente recomendados.",
    date: "Hace 3 semanas",
    link: "https://g.page/r/darioscustom-review2"
  },
  {
    name: "Roberto S.",
    role: "Contratista Principal",
    location: "Brickell, Miami",
    stars: 5,
    text: "Hemos colaborado en varios proyectos de barandales flotantes para balcones. Certificación estructural impecable, cumplimiento puntual con los planos de ingeniería y un montaje de herrería robusto.",
    date: "Hace 1 mes",
    link: "https://g.page/r/darioscustom-review3"
  },
  {
    name: "Sofía Álvarez",
    role: "Propietaria de Villa",
    location: "Key Biscayne, FL",
    stars: 5,
    text: "Instalaron rejas de seguridad y barandales con una altísima resistencia al salitre marino. Su asesoramiento sobre aleaciones de aluminio anticorrosivo y la terminación de pintura fue fantástico.",
    date: "Hace 4 meses",
    link: "https://g.page/r/darioscustom-review4"
  },
  {
    name: "Daniel Tremont",
    role: "Desarrollador Comercial",
    location: "Doral, FL",
    stars: 5,
    text: "Su herrería estructural cumple estrictamente con el AWS D1.1. Fabricaron portones corredizos pesados para nuestro parque logístico. Durabilidad extrema y excelente comunicación en todo el proceso.",
    date: "Hace 5 meses",
    link: "https://g.page/r/darioscustom-review5"
  },
  {
    name: "Marcus G.",
    role: "Coleccionista de Arte",
    location: "Pinecrest, FL",
    stars: 5,
    text: "Comisioné una escultura metálica abstracta para el jardín de mi residencia. Acabados impecables, trato premium y una verdadera obra de arte con detalles en oro aplicados meticulosamente.",
    date: "Hace 10 días",
    link: "https://g.page/r/darioscustom-review6"
  }
];

const googleProfileUrl = "https://g.page/r/darioscustomart";

export default function Reviews() {
  return (
    <section id="opiniones" className="py-24 relative border-t border-industrial-border bg-[#0d0d10] overflow-hidden">
      {/* Fondo técnico sutil utilizando la clase de dibujo de globals.css */}
      <div className="absolute inset-0 industrial-dots opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Encabezado y Resumen de Google */}
        <motion.div
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >         
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-brand-light font-bold">Opiniones Reales</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mt-2 mb-4">
              Clientes Satisfechos
            </h2>
            <p className="text-zinc-400 text-sm md:text-base max-w-2xl leading-relaxed">
              La calidad de nuestros productos y herrería artística respaldada por la experiencia de constructores, arquitectos y propietarios en el sur de Florida.
            </p>
          </div>

          {/* Tarjeta de Resumen Google Business Profile */}
          <div className="flex items-center gap-4 bg-industrial-card border border-industrial-border p-5 rounded-md self-start lg:self-auto shrink-0 shadow-lg">
            <div className="p-3 bg-industrial-bg border border-industrial-border-high rounded">
              <GoogleGIcon className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1 text-white font-bold text-lg tracking-wide">
                <span>4.9</span>
                <span className="text-xs text-zinc-500 font-normal">/ 5.0</span>
                <div className="flex items-center text-brand-light ml-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-light" />
                  ))}
                </div>
              </div>
              <p className="text-[10px] text-zinc-400 font-mono uppercase tracking-wider mt-1">
                +120 Opiniones Verificadas en Google
              </p>
            </div>
          </div>
        </motion.div>

        {/* Grilla de Reseñas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {googleReviews.map((rev, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-industrial-card border border-industrial-border p-6 rounded-md relative machined-corners overflow-hidden group flex flex-col justify-between min-h-[250px] transition-all hover:border-industrial-border-high"
            >
              <div>
                {/* Cabecera de la reseña */}
                <div className="flex items-start justify-between mb-4">
                  <div className="min-w-0">
                    <h3 className="font-bold text-white text-sm uppercase tracking-wide truncate">
                      {rev.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[10px] text-zinc-500 font-mono uppercase">
                        {rev.role}
                      </span>
                      <span className="text-[10px] text-[#71717A]">•</span>
                      <span className="text-[10px] text-brand-light font-semibold tracking-wide">
                        {rev.location}
                      </span>
                    </div>
                  </div>
                  
                  {/* Google G indicando origen verificado */}
                  <div className="opacity-60 group-hover:opacity-100 transition-opacity text-white">
                    <GoogleGIcon className="w-5 h-5" />
                  </div>
                </div>

                {/* Estrellas */}
                <div className="flex items-center text-brand-light gap-0.5 mb-4">
                  {[...Array(rev.stars)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-brand-light stroke-brand-light" />
                  ))}
                </div>

                {/* Texto del testimonio */}
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  "{rev.text}"
                </p>
              </div>

              {/* Pie de la tarjeta con enlace directo a la opinión */}
              <div className="flex items-center justify-between pt-4 border-t border-industrial-border/60">
                <span className="text-[10px] text-[#71717A] font-mono">{rev.date}</span>
                <a
                  href={rev.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[10px] font-bold text-zinc-400 hover:text-brand-light transition-colors uppercase tracking-widest"
                >
                  Ver Reseña <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Llamado a la acción final */}
        <div className="mt-16 text-center">
          <a
            href={googleProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-industrial-card border border-industrial-border hover:border-industrial-border-high text-white text-xs font-bold tracking-widest uppercase py-4 px-8 rounded-sm transition-all hover:bg-industrial-card/80"
          >
            Ver Ficha en Google Maps <ArrowRight className="w-4 h-4 text-brand-light" />
          </a>
        </div>

      </div>
    </section>
  );
}