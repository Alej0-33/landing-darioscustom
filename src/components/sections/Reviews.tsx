"use client";
import { motion } from "framer-motion";
import { Star, ExternalLink, ArrowRight } from "lucide-react";
import { fadeUp } from "@/utils/animations";
import { GoogleGIcon } from "../ui/Icons";
import { useDictionary } from "../DictionaryProvider";

const googleProfileUrl = "https://www.google.com/maps/place/Dario's+Custom+Iron+Art,+Inc/@25.8417209,-80.2854691,17z/data=!4m6!3m5!1s0x88d9afd0a8154f4d:0xb27220b3bbeada8f!8m2!3d25.8417209!4d-80.2828942!16s%2Fg%2F11clwn4wjm?entry=ttu&g_ep=EgoyMDI2MDgxOS4wIKXMDSoASAFQAw%3D%3D";

export default function Reviews() {
  const dict = useDictionary().reviews;

  return (
    <section id="opiniones" className="py-24 relative border-t border-industrial-border bg-[#0d0d10] overflow-hidden">
      <div className="absolute inset-0 industrial-dots opacity-15 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp}>
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-brand-light font-bold">{dict.tag}</span>
            <h2 id="reviews-title" className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mt-2 mb-4">{dict.title}</h2>
            <p className="text-zinc-400 text-sm md:text-base max-w-2xl leading-relaxed">{dict.desc}</p>
          </div>
          <div className="flex items-center gap-4 bg-industrial-card border border-industrial-border p-5 rounded-md self-start lg:self-auto shrink-0 shadow-lg">
            <div className="p-3 bg-industrial-bg border border-industrial-border-high rounded"><GoogleGIcon className="w-5 h-5" /></div>
            <div>
              <div className="flex items-center gap-1 text-white font-bold text-lg tracking-wide">
                <span>5.0</span><span className="text-xs text-zinc-500 font-normal">/ 5.0</span>
                <div className="flex items-center text-brand-light ml-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-brand-light" />)}
                </div>
              </div>
              <p className="text-[10px] text-zinc-400 font-mono uppercase tracking-wider mt-1">{dict.verified}</p>
            </div>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dict.list.map((rev: any, index: number) => (
            <motion.article key={index} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.05 }} className="bg-industrial-card border border-industrial-border p-6 rounded-md relative machined-corners overflow-hidden group flex flex-col justify-between min-h-[250px] transition-all hover:border-industrial-border-high">
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="min-w-0">
                    <h3 id={`review-${index}`} className="font-bold text-white text-sm uppercase tracking-wide truncate">{rev.name}</h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[10px] text-zinc-500 font-mono uppercase">{rev.role}</span>
                      <span className="text-[10px] text-[#71717A]">•</span>
                      <span className="text-[10px] text-brand-light font-semibold tracking-wide">{rev.location}</span>
                    </div>
                  </div>
                  <div className="opacity-60 group-hover:opacity-100 transition-opacity text-white"><GoogleGIcon className="w-5 h-5" /></div>
                </div>
                <div className="flex items-center text-brand-light gap-0.5 mb-4">
                  {[...Array(rev.stars)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-brand-light stroke-brand-light" />)}
                </div>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 italic">"{rev.text}"</p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-industrial-border/60">
                <span className="text-[10px] text-[#71717A] font-mono">{rev.date}</span>
                {/* Fixed SEO generic link text: Replaced hidden tag dependency with clear, readable anchor */}
                <a href={rev.link} target="_blank" rel="noopener noreferrer" aria-label={`Read Google Review by ${rev.name}`} className="flex items-center gap-1.5 text-[10px] font-bold text-zinc-400 hover:text-brand-light transition-colors uppercase tracking-widest">
                  Read Review <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href={googleProfileUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 bg-industrial-card border border-industrial-border hover:border-industrial-border-high text-white text-xs font-bold tracking-widest uppercase py-4 px-8 rounded-sm transition-all hover:bg-industrial-card/80">
            {dict.btnMaps} <ArrowRight className="w-4 h-4 text-brand-light" />
          </a>
        </div>
      </div>
    </section>
  );
}