"use client";
import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { fadeUp } from "@/utils/animations";
import { GoogleGIcon } from "../ui/Icons";

// IMPORTACIÓN DE MAPCN
import { Map, MapMarker, MarkerContent, MapControls } from "@/components/ui/map";

// Coordenadas
const LNG = -80.2828942;
const LAT = 25.8417209;

// Deep Links universales (Respaldo/Escritorio)
const wazeUrl = `https://waze.com/ul?ll=${LAT},${LNG}&navigate=yes`;
const googleMapsDirUrl = `https://www.google.com/maps/dir/?api=1&destination=${LAT},${LNG}`;

export default function Location() {
  
  // Función inteligente para forzar la apertura de la App de Waze en Móviles
  const handleWazeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window === "undefined") return;
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
      e.preventDefault();
      // Intentar abrir la aplicación nativa
      window.location.href = `waze://?ll=${LAT},${LNG}&navigate=yes`;
      
      // Fallback: Si no tiene Waze instalado, en 1.5s lo lleva a la versión web
      setTimeout(() => {
        window.location.href = wazeUrl;
      }, 1500);
    }
  };

  // Función inteligente para Google Maps (iOS a veces bloquea el link universal)
  const handleGoogleMapsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window === "undefined") return;
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile && isIOS) {
      e.preventDefault();
      // Forzar esquema de Google Maps en iOS
      window.location.href = `comgooglemaps://?daddr=${LAT},${LNG}&directionsmode=driving`;
      
      setTimeout(() => {
        window.location.href = googleMapsDirUrl;
      }, 1500);
    }
    // En Android, el enlace web "https://..." abre la app automáticamente por defecto de forma nativa.
  };

  return (
    <section id="ubicacion" className="relative w-full h-[700px] md:h-[600px] border-t border-[#27272A] bg-[#09090B]">
      
      {/* MAPA - Hecho 100% con mapcn */}
      <div className="absolute inset-0 z-0 bg-[#09090B]">
        <Map
          center={[LNG, LAT]}
          zoom={15}
          theme="dark" // Mapcn inyecta automáticamente los mapas oscuros de Carto
          className="w-full h-full"
        >
          {/* Controles de Zoom ubicados arriba en móvil para que la tarjeta no los tape */}
          <div className="hidden md:block">
            <MapControls position="bottom-right" showZoom />
          </div>
          <div className="block md:hidden">
            <MapControls position="top-right" showZoom />
          </div>

          {/* Marcador del Negocio */}
          <MapMarker longitude={LNG} latitude={LAT}>
            <MarkerContent>
              <div className="bg-[#B85227] p-2.5 rounded-sm border border-white/20 shadow-[0_0_20px_rgba(184,82,39,0.4)] cursor-pointer hover:scale-110 transition-transform">
                <MapPin className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
            </MarkerContent>
          </MapMarker>
        </Map>
      </div>

      {/* OVERLAY / GRADIENTE RESPONSIVO: 
          - Móvil: Oscurece de abajo hacia arriba (dejando ver el mapa arriba).
          - PC: Oscurece de izquierda a derecha. */}
      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#09090B] via-[#09090B]/90 md:via-[#09090B]/80 to-transparent pointer-events-none z-10" />

      {/* TARJETA FLOTANTE INDUSTRIAL */}
      {/* Alineada abajo en móvil (items-end pb-8) y centrada en PC (md:items-center md:pb-0) */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-full relative z-20 flex items-end pb-8 md:items-center md:pb-0">
        <motion.div
          className="bg-[#18181B]/95 backdrop-blur-sm border border-[#27272A] p-6 md:p-10 rounded-sm shadow-2xl w-full max-w-md pointer-events-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="flex items-center gap-3 mb-5 md:mb-6">
            <div className="bg-[#B85227]/10 p-2 md:p-3 rounded border border-[#B85227]/30 shrink-0">
              <MapPin className="w-5 h-5 md:w-6 md:h-6 text-[#D4845F]" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4845F] font-bold">Cómo Llegar</span>
              <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white mt-0.5 md:mt-1">
                Visita Nuestro Taller
              </h2>
            </div>
          </div>

          <p className="text-[#A1A1AA] text-xs md:text-sm mb-6 leading-relaxed">
            Te invitamos a conocer el proceso de forjado de nuestros artesanos. Agenda tu cita y ven a discutir tu proyecto en persona.
          </p>

          <address className="not-italic flex flex-col gap-1 mb-6 md:mb-8 border-l-2 border-[#B85227] pl-4">
            <span className="text-white font-bold text-sm tracking-wide">Dario's Custom Iron Art, Inc</span>
            <span className="text-[#A1A1AA] text-sm">Miami, Florida</span>
            <span className="text-[#71717A] text-[10px] md:text-xs font-mono mt-1">Lat: 25.8417, Lng: -80.2828</span>
          </address>

          <hr className="border-[#27272A] mb-5 md:mb-6" />

          {/* BOTONES DIRECTOS (Deep Links GPS Inteligentes) */}
          <div className="flex flex-col gap-3">
            <a
              href={googleMapsDirUrl}
              onClick={handleGoogleMapsClick}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#FFFFFF] hover:bg-zinc-200 text-[#09090B] py-3.5 px-4 rounded-sm transition-colors text-xs font-black tracking-widest uppercase shadow-md"
            >
              <GoogleGIcon className="w-4 h-4" /> INICIAR GOOGLE MAPS
            </a>
            
            <a
              href={wazeUrl}
              onClick={handleWazeClick}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#33ccff]/10 hover:bg-[#33ccff]/20 text-[#33ccff] border border-[#33ccff]/30 py-3 px-4 rounded-sm transition-colors text-xs font-bold tracking-widest uppercase"
            >
              <Navigation className="w-4 h-4" /> INICIAR WAZE
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}