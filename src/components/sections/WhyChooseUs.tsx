"use client";
import { motion } from "framer-motion";
import { ShieldAlert, Award, Hammer, Clock } from "lucide-react";
import { slideFromLeft, staggerContainer, staggerItem } from "@/utils/animations";

export default function WhyChooseUs() {
  const items = [
    {
      icon: <Award className="w-10 h-10 text-brand-primary" />,
      title: "Acabados Exclusivos",
      desc: "Procesos de pintura electroestatica en polvo y terminados premium."
    },
    {
      icon: <ShieldAlert className="w-10 h-10 text-brand-primary" />,
      title: "Estructura de Alta Resistencia",
      desc: "Especialmente fabricados para ofrecer durabilidad ante el clima del sur de Florida."
    },
    {
      icon: <Hammer className="w-10 h-10 text-brand-primary" />,
      title: "Métodos Tradicionales y Láser",
      desc: "Fusionamos la solidez de la herrería tradicional con formacion artesanal."
    },
    {
      icon: <Clock className="w-10 h-10 text-brand-primary" />,
      title: "Compromiso de Tiempos",
      desc: "Entregas programadas con cronogramas claros de inicio a fina con seguimiento."
    }
  ];

  return (
    <section id="por-que-nosotros" className="py-24 relative border-t border-industrial-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={slideFromLeft}
          >
            <span className="text-xs uppercase tracking-[0.25em] text-brand-light font-bold">Nuestra Diferencia</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mt-2 mb-6">
              Excelencia Técnica en Cada Unión de Acero
            </h2>
            <p className="text-zinc-400 mb-6 leading-relaxed">
              En Dario's nos enfocamos en diseñar elementos arquitectónicos distinguidos a tu gusto personal, integrándose armónicamente con el diseño exterior o interior.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-8">
              Atendemos proyectos residenciales y comerciales garantizando acabados minuciosos en la preparación de las uniones metálicas.
            </p>
            <div className="border-l-4 border-brand-primary pl-4 py-2 italic text-zinc-300 bg-industrial-card/50 p-4 rounded-r">
              &quot;La excelencia en la herrería se define por la precisión que no se ve a simple vista.&quot;
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
          >
            {items.map((item, idx) => (
              <motion.div key={idx} variants={staggerItem} className="bg-industrial-card border border-industrial-border p-6 rounded-md hover:border-brand-primary/40 transition-all duration-300">
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-lg font-bold text-white uppercase tracking-wide mb-2">{item.title}</h4>
                <p className="text-zinc-400 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
