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
    <div className="w-full flex flex-col gap-4">
      {/* Contenedor Principal responsivo */}
      <div className="relative aspect-square machined-corners border border-industrial-border-high overflow-hidden bg-zinc-950 rounded-md">
        
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
        </div>

        {/* Controles de Navegación adaptados a móviles */}
        {images.length > 1 && (
          <>
            {/* Botón Anterior */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-black/60 hover:bg-brand-primary text-white border border-industrial-border-high hover:border-brand-primary rounded-sm transition-all duration-300 cursor-pointer"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Botón Siguiente */}
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-black/60 hover:bg-brand-primary text-white border border-industrial-border-high hover:border-brand-primary rounded-sm transition-all duration-300 cursor-pointer"
              aria-label="Siguiente imagen"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Puntos Indicadores (Dots) */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-1 bg-black/40 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full border border-industrial-border/50 backdrop-blur-sm">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleDotClick(idx)}
                  className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx ? "bg-brand-primary scale-125" : "bg-zinc-600 hover:bg-zinc-400"
                  }`}
                  aria-label={`Ir a imagen ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Tira de Miniaturas (Thumbnails) con espaciado flexible */}
      {images.length > 1 && (
        <div className="grid grid-cols-5 gap-1.5 sm:gap-2.5">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`relative aspect-square rounded overflow-hidden bg-zinc-900 border transition-all duration-300 cursor-pointer ${
                currentIndex === idx
                  ? "border-brand-primary ring-1 ring-brand-primary"
                  : "border-industrial-border hover:border-zinc-500"
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