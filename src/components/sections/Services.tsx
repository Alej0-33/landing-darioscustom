import { Shield, Home, Sparkles, Palette, Award } from "lucide-react";
import { Card } from "../ui/Card";

export default function Services() {
  const services = [
    {
      title: "Portones y Cercas",
      description: "Diseno y Fabricacion de cierres perimetrales. Cumplen normas de codigos y seguimiento de calculaciones de planos. ",
      icon: <Shield className="w-8 h-8 text-[#D4845F]" />
    },
    {
      title: "Barandales y Escaleras",
      description: "Sistemas para balcones y escaleras en acero inoxidable, hierro o aluminio. Terminacion de pintura de horno.",
      icon: <Home className="w-8 h-8 text-[#D4845F]" />
    },
    {
      title: "Corte Láser de Precisión CNC",
      description: "Paneles para privacidad y puertas decorativas con acabados personalizable para proyectos comrciales de lujo o el hogar.",
      icon: <Sparkles className="w-8 h-8 text-[#D4845F]" />
    },
    {
      title: "Esculturas de Arte",
      description: "Diseno de Candelabros, Muebles industriales y Esculturas metalicas abstractas. Pintura de horno con terminaciones de oro a mano.",
      icon: <Palette className="w-8 h-8 text-[#D4845F]" />
    }
  ];

  const materials = [
    {
      name: "Aluminio",
      resistance: "Extrema",
      resistanceLabel: "No se oxida",
      badgeColor: "bg-emerald-950/40 text-emerald-400 border-emerald-500/30",
    },
    {
      name: "Acero Inoxidable 304 o 316L",
      resistance: "Extrema",
      resistanceLabel: "Anticorrosivo",
      badgeColor: "bg-emerald-950/40 text-emerald-400 border-emerald-500/30",
    },
    {
      name: "Bronce",
      resistance: "Media / Alta",
      resistanceLabel: "Pátina Estructural",
      badgeColor: "bg-[#18181B] text-[#71717A] border-[#3F3F46]/40",
    },
    {
      name: "Hierro",
      resistance: "Media / Alta",
      resistanceLabel: "Pátina Estructural",
      badgeColor: "bg-[#18181B] text-[#71717A] border-[#3F3F46]/40",
    }
  ];

  return (
    <section id="servicios" className="py-24 relative border-t border-[#27272A] bg-[#09090B]">
      {/* Fondo técnico sutil */}
      <div className="absolute inset-0 industrial-dots opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Encabezado de la sección */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mt-2 mb-4">
            Ingeniería en Metal de Alta Durabilidad
          </h2>
          <div className="w-20 h-[3px] bg-[#B85227] mx-auto my-4" />
          <p className="text-[#A1A1AA] text-sm md:text-base leading-relaxed">
            Ofrecemos soluciones metálicas certificadas contra el clima húmedo de Florida para desarrollos residenciales y corporativos de primer nivel.
          </p>
        </div>

        {/* Tarjetas de servicios principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {services.map((service, index) => (
            <Card
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>

        {/* Comparativa Técnica de Materiales */}
        <div 
          id="comparativa" 
          className="bg-[#18181B] border border-[#27272A] p-6 md:p-10 rounded-lg relative machined-corners overflow-hidden"
        >
          {/* Línea de acento industrial */}
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#B85227]/45 to-transparent" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 border-b border-[#27272A] pb-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#09090B] border border-[#3F3F46] rounded-md shrink-0">
                <Award className="w-6 h-6 text-[#D4845F]" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-wider text-white mt-1">
                  Fabricamos los siguientes materiales
                </h3>
              </div>
            </div>
          </div>

          {/* Tabla de Comparativa Técnica - Ajustada a 2 columnas y 100% responsiva */}
          <div className="overflow-hidden">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-[#3F3F46] text-[#D4845F] uppercase tracking-widest font-bold text-[10px] bg-[#09090B]/40">
                  <th className="py-4 px-5 w-2/3">Material / Especificación</th>
                  <th className="py-4 px-5 text-center w-1/3">Resistencia al Salitre</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#27272A] text-[#A1A1AA]">
                {materials.map((mat, idx) => (
                  <tr 
                    key={idx} 
                    className="hover:bg-[#09090B]/30 transition-colors duration-200"
                  >
                    {/* Columna 1: Material */}
                    <td className="py-5 px-5">
                      <span className="block font-bold text-white text-xs sm:text-sm uppercase tracking-wide">
                        {mat.name}
                      </span>
                    </td>

                    {/* Columna 2: Resistencia */}
                    <td className="py-5 px-5 text-center">
                      <span className={`inline-flex flex-col items-center justify-center px-3 py-1 rounded-sm border text-[9px] sm:text-[10px] font-bold uppercase tracking-wider ${mat.badgeColor}`}>
                        <span>{mat.resistance}</span>
                        <span className="text-[8px] opacity-80 font-normal mt-0.5 font-mono">
                          {mat.resistanceLabel}
                        </span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}