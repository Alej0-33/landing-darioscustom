"use client";
import React from "react";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { fadeUp, staggerContainer, staggerItem } from "@/utils/animations";

const faqData = [
  {
    id: "cumplimiento-codigo-florida",
    q: "¿Darioscustom cumple con el Código de Edificación de Florida (FBC) para huracanes?",
    a: "Sí. Diseñamos y soldamos todas nuestras rejas de seguridad, portones y barandales cumpliendo estrictamente con el Código de Edificación de Florida (FBC) y los requisitos de carga del viento ASCE 7 para zonas propensas a tormentas y huracanes, con capacidades de resistencia al viento de hasta 175 mph según el sector."
  },
  {
    id: "diferencia-pintura-powder-coating",
    q: "¿Cuáles son las diferencias entre la pintura tradicional de herrería y el recubrimiento en polvo (Powder Coating)?",
    a: "La pintura convencional se desgasta y descascara rápido por el sol de Miami. Nosotros aplicamos pintura en polvo electrostática termoendurecida (Powder Coating) horneada a 400°F. Esto genera un blindaje grueso, uniforme y flexible que resiste golpes, rayos UV y la humedad sin oxidar el metal base."
  },
  {
    id: "areas-cobertura-sur-florida",
    q: "¿Qué áreas de servicio cubren en el Sur de Florida?",
    a: "Nuestra área de cobertura local para medición, entrega e instalación incluye Miami, Coral Gables, Doral, Brickell, Pinecrest, Key Biscayne, South Miami, Kendall y alrededores del condado de Miami-Dade."
  },
  {
    id: "mantenimiento-portones-rejas",
    q: "¿Qué tipo de mantenimiento requieren sus portones y rejas metálicas?",
    a: "Las estructuras con acabado galvanizado y pintura en polvo requieren un mantenimiento mínimo. Recomendamos lavarlas cada 3 a 6 meses con agua limpia y un jabón suave no abrasivo para retirar depósitos de polvo, sal marina e impurezas de la intemperie."
  },
  {
    id: "proceso-cotizacion-tecnica",
    q: "¿Cuál es el proceso para solicitar una cotización técnica para mi residencia o negocio?",
    a: "Puedes contactarnos vía formulario web o haciendo clic en el enlace de WhatsApp. Envíanos medidas preliminares, fotos de la zona de instalación o referencias estéticas. Evaluaremos la información y te entregaremos una propuesta económica precisa. Posteriormente, realizamos una visita para rectificar dimensiones."
  }
];

export default function FAQ() {
  return (
    <>
    {/* Aplicamos el bg-[#09090B] directo a la sección para forzar el fondo asfalto mate */}
    <section id="preguntas" className="py-20 sm:py-24 relative border-t border-[#27272A] bg-[#09090B]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <HelpCircle className="w-10 h-10 sm:w-12 sm:h-12 text-[#B85227] mx-auto mb-4" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4845F] font-bold">
            Preguntas Frecuentes
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tight text-[#FFFFFF] mt-2">
            Respuestas Técnicas e Ingeniería
          </h2>
          <div className="w-20 h-[3px] bg-[#B85227] mx-auto my-4" />
          <p className="text-[#A1A1AA] text-xs sm:text-sm">
            Toda la información clave estructurada sobre nuestros materiales, regulaciones locales en Miami-Dade y procesos de entrega.
          </p>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
        >
          {faqData.map((item, idx) => (
            <motion.div key={idx} variants={staggerItem}>
              {/* Tarjetas usando Acero oscuro bg-[#18181B] y hover sobre los bordes según la especificación */}
              <details
                className="bg-[#18181B] border border-[#27272A] hover:border-[#3F3F46] rounded-md p-4 sm:p-5 group transition-colors cursor-pointer"
              >
                <summary className="font-bold text-[#FFFFFF] text-xs sm:text-sm md:text-base uppercase tracking-wide list-none flex items-start justify-between gap-4">
                  <h3 id={item.id} className="flex-grow pr-2 m-0 text-inherit font-inherit">
                    {item.q}
                  </h3>
                  <span className="text-[#B85227] font-bold text-base group-open:rotate-45 transition-transform duration-300 shrink-0">
                    +
                  </span>
                </summary>
                {/* Texto secundario de polvo de acero para la respuesta */}
                <p className="text-[#A1A1AA] text-[11px] sm:text-xs md:text-sm leading-relaxed mt-4 pt-4 border-t border-[#27272A]">
                  {item.a}
                </p>
              </details>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
    </>
  );
}