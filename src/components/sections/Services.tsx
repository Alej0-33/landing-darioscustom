"use client";
import { motion } from "framer-motion";
import { Shield, Home, Sparkles, Palette, Award } from "lucide-react";
import { Card } from "../ui/Card";
import { fadeUp, staggerContainer, staggerItem } from "@/utils/animations";

export default function Services() {
  const services = [
    {
      title: "Portones y Cercas",
      description: "Diseño y fabricación de cierres perimetrales. Cumplen normas de códigos y seguimiento de cálculos de planos.",
      icon: <Shield className="w-8 h-8 text-[#D4845F]" />
    },
    {
      title: "Barandales y Escaleras",
      description: "Sistemas para balcones y escaleras en acero inoxidable, hierro o aluminio. Terminación de pintura al horno.",
      icon: <Home className="w-8 h-8 text-[#D4845F]" />
    },
    {
      title: "Corte Láser de Precisión CNC",
      description: "Paneles para privacidad y puertas decorativas con acabados personalizables para proyectos comerciales de lujo o el hogar.",
      icon: <Sparkles className="w-8 h-8 text-[#D4845F]" />
    },
    {
      title: "Esculturas de Arte",
      description: "Diseño de candelabros, muebles industriales y esculturas metálicas abstractas. Pintura al horno con terminaciones de oro a mano.",
      icon: <Palette className="w-8 h-8 text-[#D4845F]" />
    }
  ];

  const materials = [
    {
      name: "Aluminio",
      resistance: "Extrema",
      description: "No se oxida. Excelente opción para zonas costeras y ambientes con salitre.",
      badgeColor: "bg-emerald-950/40 text-emerald-400 border-emerald-500/30",
    },
    {
      name: "Acero Inoxidable 304 o 316L",
      resistance: "Extrema",
      description: "Altamente resistente a la corrosión. El 316L es especialmente recomendado para ambientes marinos y zonas cercanas al mar.",
      badgeColor: "bg-emerald-950/40 text-emerald-400 border-emerald-500/30",
    },
    {
      name: "Bronce",
      resistance: "Media / Alta",
      description: "Buena resistencia al ambiente costero. Con el tiempo, desarrolla una pátina natural que cambia su apariencia, pero ayuda a proteger el material.",
      badgeColor: "bg-[#18181B] text-[#71717A] border-[#3F3F46]/40",
    },
    {
      name: "Hierro",
      resistance: "Media / Alta",
      description: "Requiere pintura y tratamiento anticorrosivo para protegerlo del salitre. Necesita más mantenimiento que el aluminio o el acero inoxidable.",
      badgeColor: "bg-[#18181B] text-[#71717A] border-[#3F3F46]/40",
    }
  ];

  return (
    <section id="servicios" className="py-20 sm:py-24 relative border-t border-[#27272A] bg-[#09090B]">
      <div className="absolute inset-0 industrial-dots opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Encabezado Principal (H2) */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tight text-white mt-2 mb-4">
            Ingeniería en Metal de Alta Durabilidad
          </h2>
          <div className="w-20 h-[3px] bg-[#B85227] mx-auto my-4" />
          <p className="text-[#A1A1AA] text-xs sm:text-sm md:text-base leading-relaxed">
            Ofrecemos soluciones metálicas certificadas contra el clima húmedo de Florida para desarrollos residenciales y corporativos de primer nivel.
          </p>
        </motion.div>

        {/* Tarjetas (Usan H3 internamente en Card.tsx) */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={staggerItem}>
              <Card
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Comparativa Técnica de Materiales */}
        <motion.div
          id="comparativa"
          className="bg-[#18181B] border border-[#27272A] p-4 sm:p-10 rounded-lg relative machined-corners overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#B85227]/45 to-transparent" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 border-b border-[#27272A] pb-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#09090B] border border-[#3F3F46] rounded-md shrink-0">
                <Award className="w-6 h-6 text-[#D4845F]" />
              </div>
              <div>
                {/* Título Secundario (H3) respetando la jerarquía */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-black uppercase tracking-wider text-white mt-1">
                  Materiales de Alta Gama y Acabado Artístico
                </h3>
              </div>
            </div>
          </div>

          <div className="overflow-hidden">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-[#3F3F46] text-[#D4845F] uppercase tracking-widest font-bold text-[9px] sm:text-[10px] bg-[#09090B]/40">
                  <th className="py-4 px-3 sm:px-5 w-3/12">Material</th>
                  <th className="py-4 px-3 sm:px-5 text-center w-2/12">Resistencia</th>
                  <th className="py-4 px-3 sm:px-5 w-7/12">Uso y Herrería Artística</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#27272A] text-[#A1A1AA]">
                {materials.map((mat, idx) => (
                  <tr 
                    key={idx} 
                    className="hover:bg-[#09090B]/30 transition-colors duration-200"
                  >
                    <td className="py-4 px-3 sm:px-5">
                      <span className="block font-bold text-white text-[11px] sm:text-xs md:text-sm uppercase tracking-wide break-words">
                        {mat.name}
                      </span>
                    </td>
                    <td className="py-4 px-3 sm:px-5 text-center">
                      <span className={`inline-flex items-center justify-center px-2 py-1 sm:px-3 sm:py-1 rounded-sm border text-[8px] sm:text-[10px] font-bold uppercase tracking-wider ${mat.badgeColor}`}>
                        {mat.resistance}
                      </span>
                    </td>
                    <td className="py-4 px-3 sm:px-5">
                      <p className="text-zinc-400 text-[10px] sm:text-xs leading-relaxed max-w-lg">
                        {mat.description}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

      </div>
    </section>
  );
}