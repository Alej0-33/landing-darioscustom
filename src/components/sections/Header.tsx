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

  // ✅ AQUÍ AGREGAMOS EL ENLACE AL "ABOUT US"
  const links = [
    { name: dict.links.home, href: `/${lang}/#inicio` },
    { name: dict.links.about, href: `/${lang}/#sobre-nosotros` }, // <-- NUEVO ENLACE
    { name: dict.links.services, href: `/${lang}/#servicios` },
    { name: dict.links.catalog, href: `/${lang}/#catalogo` },
    { name: dict.links.reviews, href: `/${lang}/#opiniones` },
    { name: dict.links.faq, href: `/${lang}/#preguntas` },
    { name: lang === 'es' ? "Contacto" : "Contact", href: `/${lang}/#contacto` },
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
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${ scrolled ? "bg-industrial-bg/95 backdrop-blur-md border-b border-industrial-border py-3" : "bg-transparent py-5" }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href={`/${lang}/#inicio`} className="flex items-center gap-2 sm:gap-3 min-w-0" aria-label="Go to homepage">
            <div className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center shrink-0">
              <Image src="/brand/darioscustom_logo2.webp" alt="Darioscustomart Inc Logo" width={64} height={64} priority className="w-full h-full object-contain" />
            </div>
            <span className="font-black text-xs sm:text-base md:text-lg lg:text-xl tracking-wider text-white leading-none truncate">
              DARIO'S CUSTOM <span className="text-brand-primary">IRON ART</span>
              <span className="block text-[8px] sm:text-[9px] font-semibold tracking-[0.3em] text-zinc-500 mt-0.5">INC</span>
            </span>
          </a>
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation desktop">
            {links.map((link) => (
              <a key={link.name} href={link.href} className="text-zinc-400 hover:text-brand-light text-[11px] font-bold tracking-widest uppercase transition-colors">{link.name}</a>
            ))}
            <LanguageSwitcher />
            <a href={`/${lang}/#contacto`} className="bg-brand-primary hover:bg-brand-hover text-white text-[10px] font-bold tracking-widest uppercase py-2.5 px-5 rounded-sm transition-all border border-brand-primary">
              {dict.quote}
            </a>
          </nav>
          <div className="flex items-center gap-4 lg:hidden">
            <LanguageSwitcher />
            <button className="text-zinc-300 hover:text-white cursor-pointer shrink-0 p-1" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-label="Toggle Menu">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="lg:hidden absolute top-full left-0 right-0 bg-[#09090B] border-b border-industrial-border px-6 py-8 flex flex-col gap-6 shadow-2xl max-h-[calc(100vh-80px)] overflow-y-auto">
              {links.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-zinc-300 hover:text-brand-primary text-sm font-semibold tracking-wider uppercase transition-colors py-2 border-b border-industrial-border/30">{link.name}</a>
              ))}
              <a href={`/${lang}/#contacto`} onClick={() => setIsOpen(false)} className="bg-brand-primary hover:bg-brand-hover text-white text-center py-3 rounded-sm font-bold tracking-wider uppercase text-xs transition-colors">{dict.quote}</a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}