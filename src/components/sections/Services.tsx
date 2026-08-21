import { Shield, Home, Sparkles, Anchor, Award, CheckCircle2 } from "lucide-react";
import { Card } from "../ui/Card";

export default function Services() {
  const services = [
    {
      title: "Rejas de Seguridad Avanzadas",
      description: "Diseño y soldadura de marcos perimetrales pesados. Cumplen normas contra intentos de intrusión y resisten cargas de impacto.",
      icon: <Shield className="w-8 h-8 text-[#D4845F]" />
    },
    {
      title: "Barandales de Alta Resistencia",
      description: "Sistemas para balcones y escaleras en acero inoxidable y aluminio anodizado. Perfectamente nivelados y soldados bajo norma AWS.",
      icon: <Home className="w-8 h-8 text-[#D4845F]" />
    },
    {
      title: "Corte Láser de Precisión CNC",
      description: "Paneles personalizados y puertas decorativas de privacidad con acabados uniformes para proyectos comerciales de lujo.",
      icon: <Sparkles className="w-8 h-8 text-[#D4845F]" />
    },
    {
      title: "Acabado de Grado Exterior",
      description: "Proceso de galvanizado en caliente y aplicación de pintura en polvo termoendurecida. Evita la penetración de salitre.",
      icon: <Anchor className="w-8 h-8 text-[#D4845F]" />
    }
  ];

  const materials = [
    {
      name: "Aluminio de Grado Marino",
      spec: "Aleación 6061-T6",
      finish: "Pintura Electrostática (Powder Coating)",
      resistance: "Extrema",
      resistanceLabel: "No se oxida",
      badgeColor: "bg-emerald-950/40 text-emerald-400 border-emerald-500/30",
      optimal: "Balcones frente al mar, barandales costeros expuestos directamente a la brisa marina."
    },
    {
      name: "Acero Inoxidable 316",
      spec: "Grado Náutico A4",
      finish: "Pulido Mecánico Satinado (Grano 240)",
      resistance: "Extrema",
      resistanceLabel: "Anticorrosivo",
      badgeColor: "bg-emerald-950/40 text-emerald-400 border-emerald-500/30",
      optimal: "Barandales de cable tensor, escaleras flotantes modernas y pasamanos de alta gama."
    },
    {
      name: "Acero de Carbono Estructural",
      spec: "ASTM A36 Heavy Duty",
      finish: "Galvanizado en Caliente + Powder Coat",
      resistance: "Alta",
      resistanceLabel: "Protección Dual",
      badgeColor: "bg-orange-950/30 text-[#D4845F] border-[#B85227]/30",
      optimal: "Portones corredizos de carga pesada, rejas perimetrales de seguridad y herrería pesada."
    },
    {
      name: "Acero Corten Auto-protegido",
      spec: "ASTM A242",
      finish: "Oxidación Controlada Natural Activa",
      resistance: "Media / Alta",
      resistanceLabel: "Pátina Estructural",
      badgeColor: "bg-[#18181B] text-[#71717A] border-[#3F3F46]/40",
      optimal: "Paneles CNC decorativos, fachadas arquitectónicas y esculturas artísticas de exterior."
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
                <span className="text-[9px] font-mono tracking-widest text-[#71717A] uppercase block">
                  Estándares de Ingeniería • Miami-Dade
                </span>
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-wider text-white mt-1">
                  Guía de Materiales para el Sur de Florida
                </h3>
              </div>
            </div>
            <p className="text-[#A1A1AA] text-xs md:text-sm max-w-xl leading-relaxed lg:text-right">
              Los ingenieros estructurales recomiendan evaluar los metales según su nivel de exposición costera. Comparamos los metales utilizados bajo normas de soldadura <span className="text-white font-semibold">AWS D1.1</span>.
            </p>
          </div>

          {/* Tabla de Comparativa Técnica */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse min-w-[750px]">
              <thead>
                <tr className="border-b border-[#3F3F46] text-[#D4845F] uppercase tracking-widest font-bold text-[10px] bg-[#09090B]/40">
                  <th className="py-4 px-5">Material / Especificación</th>
                  <th className="py-4 px-5">Acabado Técnico</th>
                  <th className="py-4 px-5 text-center">Resistencia al Salitre</th>
                  <th className="py-4 px-5">Aplicación Óptima</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#27272A] text-[#A1A1AA]">
                {materials.map((mat, idx) => (
                  <tr 
                    key={idx} 
                    className="hover:bg-[#09090B]/30 transition-colors duration-200"
                  >
                    {/* Material */}
                    <td className="py-5 px-5">
                      <span className="block font-bold text-white text-sm uppercase tracking-wide">
                        {mat.name}
                      </span>
                      <span className="block text-[9px] font-mono text-[#71717A] mt-1 uppercase">
                        SPEC: {mat.spec}
                      </span>
                    </td>

                    {/* Acabado */}
                    <td className="py-5 px-5 font-medium text-white/90">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4845F] shrink-0" />
                        <span>{mat.finish}</span>
                      </div>
                    </td>

                    {/* Resistencia */}
                    <td className="py-5 px-5 text-center">
                      <span className={`inline-flex flex-col items-center justify-center px-3 py-1 rounded-sm border text-[10px] font-bold uppercase tracking-wider ${mat.badgeColor}`}>
                        <span>{mat.resistance}</span>
                        <span className="text-[8px] opacity-80 font-normal mt-0.5 font-mono">
                          {mat.resistanceLabel}
                        </span>
                      </span>
                    </td>

                    {/* Aplicación */}
                    <td className="py-5 px-5 max-w-[280px]">
                      <p className="text-xs leading-relaxed text-[#A1A1AA]">
                        {mat.optimal}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Nota de cumplimiento al pie */}
          <div className="mt-6 pt-4 border-t border-[#27272A] flex flex-col sm:flex-row justify-between items-center gap-3 text-[9px] font-mono text-[#71717A]">
            <span>AWS D1.1 STRUCTURAL WELDING CODE COMPLIANT</span>
            <span>DESIGN SPECIFICATION FOR HIGH-VELOCITY HURRICANE ZONES (HVHZ)</span>
          </div>
        </div>

      </div>
    </section>
  );
}