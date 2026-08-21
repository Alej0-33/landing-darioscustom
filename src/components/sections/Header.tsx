"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "Catálogo", href: "#catalogo" },
    { name: "Comparativa", href: "#comparativa" },
    { name: "Preguntas", href: "#preguntas" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-industrial-bg/95 backdrop-blur-md border-b border-industrial-border py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3">
          <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
            <img
              src="/brand/darioscustom_logo2.png"
              alt="Darioscustomart Inc Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-black text-lg md:text-xl tracking-wider text-white leading-none">
            DARIOSCUSTOM<span className="text-brand-primary">ART</span>
            <span className="block text-[9px] font-semibold tracking-[0.3em] text-zinc-500 mt-0.5">
              INC
            </span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-zinc-400 hover:text-brand-light text-xs font-bold tracking-widest uppercase transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contacto"
            className="bg-brand-primary hover:bg-brand-hover text-white text-[10px] font-bold tracking-widest uppercase py-2.5 px-5 rounded-sm transition-all border border-brand-primary shadow-lg shadow-brand-primary/10"
          >
            Cotizar Online
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-zinc-300 hover:text-white cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-industrial-bg border-b border-industrial-border px-6 py-8 flex flex-col gap-6"
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-zinc-300 hover:text-brand-primary text-sm font-semibold tracking-wider uppercase transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setIsOpen(false)}
              className="bg-brand-primary hover:bg-brand-hover text-white text-center py-3 rounded-sm font-bold tracking-wider uppercase text-xs transition-colors"
            >
              Solicitar Cotización
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}