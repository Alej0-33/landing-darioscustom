"use client";
import React from "react";
import { motion } from "framer-motion";
import { WhatsAppIcon } from "./Icons";
import { useDictionary } from "../DictionaryProvider";

export default function WhatsAppButton() {
  const dict = useDictionary().whatsappBtn;

  const handleWhatsAppRedirect = () => {
    // Uso de variable de entorno para el número de WhatsApp per-link
    const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "13055550199";
    const message = encodeURIComponent(dict.defaultMessage);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Mensaje de ayuda en hover */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2 }}
        className="hidden sm:block bg-industrial-card border border-industrial-border px-4 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-300 rounded-md shadow-2xl"
      >
        {dict.hoverMsg1} <span className="text-brand-light">{dict.hoverMsg2}</span>
      </motion.div>

      {/* Botón Flotante con diseño Industrial y Aura de Cobre */}
      <motion.button
        onClick={handleWhatsAppRedirect}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative bg-brand-primary hover:bg-brand-hover text-white p-4 rounded-full shadow-2xl border border-brand-light/30 cursor-pointer group"
        aria-label={dict.ariaLabel}
      >
        <span className="absolute -inset-1 rounded-full bg-brand-primary/30 blur-sm group-hover:bg-brand-primary/50 transition-all animate-ping" />
        <WhatsAppIcon className="w-6 h-6 relative z-10" />
      </motion.button>
    </div>
  );
}
