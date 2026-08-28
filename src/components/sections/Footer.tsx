"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/animations";
import { usePathname } from "next/navigation";
import { useDictionary } from "../DictionaryProvider";

export default function Footer() {
  const dict = useDictionary().footer;
  const pathname = usePathname();
  const lang = pathname?.split('/')[1] || 'en';
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-industrial-border bg-[#09090B] pt-16">
      <motion.div className="max-w-7xl mx-auto px-6 pb-12 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <div className="flex flex-col items-center md:items-start text-center md:text-left md:col-span-6 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 flex items-center justify-center shrink-0">
              <Image src="/brand/darioscustom_logo2.webp" alt="Darioscustomart Inc Logo" width={56} height={56} className="w-full h-full object-contain" />
            </div>
            <span className="font-black text-lg tracking-wider text-white leading-none text-left">
              DARIO'S CUSTOM <span className="text-[#B85227]">IRON ART</span>
              <span className="block text-[9px] font-semibold tracking-[0.3em] text-zinc-500 mt-0.5">INC</span>
            </span>
          </div>
          <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">{dict.desc}</p>
        </div>
        <nav className="flex flex-col items-center md:items-start md:col-span-3 gap-4" aria-label="Navegación Principal">
          <p className="text-xs font-bold text-white uppercase tracking-widest mb-1">{dict.nav}</p>
          <ul className="flex flex-col gap-3 text-center md:text-left">
            {dict.links1.map((link: any) => (
              <li key={link.name}><a href={`/${lang}/${link.href}`} className="text-sm text-zinc-400 hover:text-[#B85227] transition-colors">{link.name}</a></li>
            ))}
          </ul>
        </nav>
        <nav className="flex flex-col items-center md:items-start md:col-span-3 gap-4" aria-label="Soporte y Contacto">
          <p className="text-xs font-bold text-white uppercase tracking-widest mb-1">{dict.support}</p>
          <ul className="flex flex-col gap-3 text-center md:text-left">
            {dict.links2.map((link: any) => (
              <li key={link.name}><a href={`/${lang}/${link.href}`} className="text-sm text-zinc-400 hover:text-[#B85227] transition-colors">{link.name}</a></li>
            ))}
          </ul>
        </nav>
      </motion.div>
      <div className="border-t border-zinc-800/50 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="text-xs text-zinc-500">&copy; <time dateTime={`${currentYear}-01-01`}>{currentYear}</time> {dict.rights}</div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-zinc-500">
            <a href={`/${lang}/privacy`} className="hover:text-zinc-300 transition-colors">{dict.privacy}</a>
            <a href={`/${lang}/terms`} className="hover:text-zinc-300 transition-colors">{dict.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}