"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageSliderProps {
  images: string[];
  alt?: string;
}

export default function ImageSlider({ images, alt = "Product Image" }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  if (!images || images.length === 0) return null;

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <div className="w-full flex flex-col gap-4 md:gap-6">
      {/* CONTENEDOR PRINCIPAL PREMIUM */}
      <div className="relative aspect-square lg:aspect-[4/5] rounded-2xl border border-industrial-border overflow-hidden bg-zinc-950 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] group">
        
        {/* Renderizado de Imágenes animadas */}
        <div className="absolute inset-0 z-10 w-full h-full">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.img
              key={currentIndex}
              src={`/images/${images[currentIndex]}`}
              alt={`${alt} — Vista ${currentIndex + 1}`}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="w-full h-full object-cover select-none"
            />
          </AnimatePresence>
          {/* Viñeta para darle profundidad y estilo de revista */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/60 via-transparent to-black/20 pointer-events-none" />
        </div>

        {/* Controles de Navegación Premium */}
        {images.length > 1 && (
          <>
            {/* Botón Anterior */}
            <button
              onClick={handlePrev}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#09090B]/40 backdrop-blur-md hover:bg-brand-primary text-white border border-white/10 hover:border-brand-primary rounded-full transition-all duration-300 cursor-pointer shadow-xl opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Botón Siguiente */}
            <button
              onClick={handleNext}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#09090B]/40 backdrop-blur-md hover:bg-brand-primary text-white border border-white/10 hover:border-brand-primary rounded-full transition-all duration-300 cursor-pointer shadow-xl opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
              aria-label="Siguiente imagen"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Puntos Indicadores (Dots) */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2 bg-[#09090B]/60 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md shadow-lg">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleDotClick(idx)}
                  className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx 
                      ? "bg-brand-primary w-4 sm:w-6 shadow-[0_0_8px_rgba(184,82,39,0.8)]" 
                      : "bg-white/40 hover:bg-white/80"
                  }`}
                  aria-label={`Ir a imagen ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Tira de Miniaturas (Thumbnails) */}
      {images.length > 1 && (
        <div className="grid grid-cols-5 gap-2 sm:gap-4">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`relative aspect-square rounded-xl overflow-hidden bg-zinc-950 border transition-all duration-300 cursor-pointer ${
                currentIndex === idx
                  ? "border-brand-primary shadow-[0_0_15px_rgba(184,82,39,0.3)] opacity-100"
                  : "border-white/5 hover:border-white/20 opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={`/images/${img}`}
                alt={`${alt} miniatura ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}