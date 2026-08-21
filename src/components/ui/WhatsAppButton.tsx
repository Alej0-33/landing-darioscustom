"use client";
import React from "react";
import { motion } from "framer-motion";
import { WhatsAppIcon } from "./Icons";

export default function WhatsAppButton() {
  const handleWhatsAppRedirect = () => {
    const phoneNumber = "13055550199"; // Reemplazar con el número real de Darioscustom
    const message = encodeURIComponent("Hola Darioscustom, me gustaría solicitar una cotización para un proyecto de herrería personalizada en Miami.");
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
        ¿Asesoría rápida? <span className="text-brand-light">Escríbenos</span>
      </motion.div>

      {/* Botón Flotante con diseño Industrial y Aura de Cobre */}
      <motion.button
        onClick={handleWhatsAppRedirect}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative bg-brand-primary hover:bg-brand-hover text-white p-4 rounded-full shadow-2xl border border-brand-light/30 cursor-pointer group"
        aria-label="Contactar por WhatsApp"
      >
        <span className="absolute -inset-1 rounded-full bg-brand-primary/30 blur-sm group-hover:bg-brand-primary/50 transition-all animate-ping" />
        <WhatsAppIcon className="w-6 h-6 relative z-10" />
      </motion.button>
    </div>
  );
}