"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useDictionary } from "../DictionaryProvider";
import LanguageSwitcher from "../ui/LanguageSwitcher";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const lang = pathname?.split('/')[1] || 'en';
  const dict = useDictionary().header;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: dict.links.home, href: `/${lang}/#inicio` },
    { name: dict.links.about, href: `/${lang}/#sobre-nosotros` },
    { name: dict.links.services, href: `/${lang}/#servicios` },
    { name: dict.links.catalog, href: `/${lang}/#catalog` }, // ID actualizado a #catalog
    { name: dict.links.reviews, href: `/${lang}/#opiniones` },
    { name: dict.links.faq, href: `/${lang}/#preguntas` },
    { name: dict.links.contact, href: `/${lang}/#contacto` },
  ];
  
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Darios Custom Iron Art",
        "item": `https://dariosironart.com/${lang}/`
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <nav aria-label="Breadcrumb" className="sr-only">
        <ol>
          <li><a href={`/${lang}/`}>{dict.links.home}</a></li>
        </ol>
      </nav>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${ scrolled ? "bg-industrial-bg/95 backdrop-blur-md border-b border-industrial-border py-3" : "bg-transparent py-4 sm:py-5" }`}>
        <div className="max-w-[90rem] mx-auto px-4 md:px-6 flex items-center justify-between">
          
          {/* SECCIÓN DEL LOGO: Ajustado para no cortarse ni robar espacio excesivo */}
          <a href={`/${lang}/#inicio`} className="flex items-center gap-2 sm:gap-3 shrink-0" aria-label="Go to homepage">
            <div className="w-10 h-10 sm:w-12 sm:h-12 xl:w-14 xl:h-14 flex items-center justify-center shrink-0">
              <Image src="/brand/darioscustom_logo2.webp" alt="Darioscustomart Inc Logo" width={64} height={64} priority className="w-full h-full object-contain" />
            </div>
            <span className="font-black text-[10px] sm:text-xs md:text-sm xl:text-base tracking-wider text-white leading-none whitespace-nowrap">
              DARIO'S CUSTOM <span className="text-brand-primary">IRON ART</span>
              <span className="block text-[7px] sm:text-[8px] font-semibold tracking-[0.3em] text-zinc-500 mt-0.5">INC</span>
            </span>
          </a>

          {/* MENÚ DE ESCRITORIO (Laptop / PC) */}
          {/* Se usa xl:gap-5 para monitores grandes y gap-3 para laptops estándar */}
          <nav className="hidden lg:flex items-center gap-3 xl:gap-5" aria-label="Main navigation desktop">
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-zinc-400 hover:text-brand-light text-[9px] xl:text-[10px] font-bold tracking-wider xl:tracking-widest uppercase transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
            
            <div className="pl-2 xl:pl-4 border-l border-industrial-border h-4 flex items-center gap-3 xl:gap-5">
              <LanguageSwitcher />
              <a 
                href={`/${lang}/#contacto`} 
                className="bg-brand-primary hover:bg-brand-hover text-white text-[9px] xl:text-[10px] font-bold tracking-wider xl:tracking-widest uppercase py-2 px-3 xl:py-2.5 xl:px-5 rounded-sm transition-all border border-brand-primary whitespace-nowrap"
              >
                {dict.quote}
              </a>
            </div>
          </nav>

          {/* BOTÓN MENÚ MÓVIL Y SELECTOR DE IDIOMA MÓVIL */}
          <div className="flex items-center gap-1.5 lg:hidden shrink-0">
            {/* Contenedor que reduce el tamaño del selector de idiomas al 80% en móviles */}
            <div className="scale-[0.80] sm:scale-100 origin-right">
              <LanguageSwitcher />
            </div>
            <button className="text-zinc-300 hover:text-white cursor-pointer p-1" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-label="Toggle Menu">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* DESPLEGABLE MÓVIL */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -10 }} 
              className="lg:hidden absolute top-full left-0 right-0 bg-[#09090B] border-b border-industrial-border px-6 py-8 flex flex-col gap-6 shadow-2xl max-h-[calc(100vh-80px)] overflow-y-auto"
            >
              {links.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)} 
                  className="text-zinc-300 hover:text-brand-primary text-sm font-semibold tracking-wider uppercase transition-colors py-2 border-b border-industrial-border/30"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href={`/${lang}/#contacto`} 
                onClick={() => setIsOpen(false)} 
                className="bg-brand-primary hover:bg-brand-hover text-white text-center py-3 rounded-sm font-bold tracking-wider uppercase text-xs transition-colors mt-2"
              >
                {dict.quote}
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}