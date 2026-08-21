"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Rejas Modernas de Entrada",
    category: "Rejas",
    location: "Coral Gables, FL",
    desc: "Puertas monumentales con pivote moderno y cerradura inteligente."
  },
  {
    title: "Barandal Industrial Flotante",
    category: "Barandales",
    location: "Brickell, Miami",
    desc: "Escalera con barandal de metal de vigas expuestas y soldadura pulida."
  },
  {
    title: "Escultura Mural Abstracta",
    category: "Arte",
    location: "Pinecrest, FL",
    desc: "Pieza decorativa de acero corten tratada de forma artesanal."
  },
  {
    title: "Barandales de Balcón Marino",
    category: "Barandales",
    location: "Key Biscayne, FL",
    desc: "Aluminio lacado con pintura electrostática anticorrosión."
  },
  {
    title: "Portón Corredizo Automatizado",
    category: "Rejas",
    location: "Doral, FL",
    desc: "Estructura de seguridad perimetral de acero galvanizado pesado."
  },
  {
    title: "Panel Divisor Corte CNC",
    category: "Arte",
    location: "Miami Design District",
    desc: "Separadores de ambientes arquitectónicos cortados con láser de alta precisión."
  }
];

const categories = ["Todos", "Rejas", "Barandales", "Arte"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProjects = activeCategory === "Todos"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="proyectos" className="py-24 relative border-t border-industrial-border bg-[#0d0d10]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-brand-light font-bold">Galería</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mt-2">
              Proyectos Destacados
            </h2>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all rounded-sm border cursor-pointer ${
                  activeCategory === cat
                    ? "bg-brand-primary border-brand-primary text-white"
                    : "border-industrial-border bg-industrial-card text-zinc-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((proj) => (
            <motion.div
              layout
              key={proj.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-industrial-card border border-industrial-border rounded-md overflow-hidden group hover:border-industrial-border-high transition-colors"
            >
              <div className="h-56 bg-zinc-900 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-industrial-bg to-transparent opacity-70 z-10" />
                <span className="text-zinc-800 text-8xl font-black select-none pointer-events-none uppercase">
                  {proj.category[0]}
                </span>
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="bg-brand-primary/20 text-brand-light border border-brand-primary/30 px-2.5 py-0.5 text-[10px] font-bold uppercase rounded-full">
                    {proj.location}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <span className="text-xs text-zinc-500 uppercase font-semibold tracking-wider">{proj.category}</span>
                <h3 className="text-lg font-bold text-white uppercase mt-1 mb-2 tracking-wide group-hover:text-brand-light transition-colors">
                  {proj.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{proj.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
