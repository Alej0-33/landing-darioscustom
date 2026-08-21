"use client";
import React from "react";
import { HelpCircle } from "lucide-react";

const faqData = [
  {
    q: "¿Darioscustom cumple con el Código de Edificación de Florida (FBC) para huracanes?",
    a: "Sí. Diseñamos y soldamos todas nuestras rejas de seguridad, portones y barandales cumpliendo estrictamente con el Código de Edificación de Florida (FBC) y los requisitos de carga del viento ASCE 7 para zonas propensas a tormentas y huracanes, con capacidades de resistencia al viento de hasta 175 mph según el sector."
  },
  {
    q: "¿Cuáles son las diferencias entre la pintura tradicional de herrería y el recubrimiento en polvo (Powder Coating)?",
    a: "La pintura convencional se desgasta y descascara rápido por el sol de Miami. Nosotros aplicamos pintura en polvo electrostática termoendurecida (Powder Coating) horneada a 400°F. Esto genera un blindaje grueso, uniforme y flexible que resiste golpes, rayos UV y la humedad sin oxidar el metal base."
  },
  {
    q: "¿Qué áreas de servicio cubren en el Sur de Florida?",
    a: "Nuestra área de cobertura local para medición, entrega e instalación incluye Miami, Coral Gables, Doral, Brickell, Pinecrest, Key Biscayne, South Miami, Kendall y alrededores del condado de Miami-Dade."
  },
  {
    q: "¿Qué tipo de mantenimiento requieren sus portones y rejas metálicas?",
    a: "Las estructuras con acabado galvanizado y pintura en polvo requieren un mantenimiento mínimo. Recomendamos lavarlas cada 3 a 6 meses con agua limpia y un jabón suave no abrasivo para retirar depósitos de polvo, sal marina e impurezas de la intemperie."
  },
  {
    q: "¿Cuál es el proceso para solicitar una cotización técnica para mi residencia o negocio?",
    a: "Puedes contactarnos vía formulario web o haciendo clic en el enlace de WhatsApp. Envíanos medidas preliminares, fotos de la zona de instalación o referencias estéticas. Evaluaremos la información y te entregaremos una propuesta económica precisa. Posteriormente, realizamos una visita para rectificar dimensiones."
  }
];

export default function FAQ() {
  return (
    <section id="preguntas" className="py-24 relative border-t border-industrial-border">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <HelpCircle className="w-12 h-12 text-brand-primary mx-auto mb-4" />
          <span className="text-xs uppercase tracking-[0.25em] text-brand-light font-bold">Preguntas Frecuentes</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mt-2">
            Respuestas Técnicas e Ingeniería
          </h2>
          <div className="w-20 h-1 bg-brand-primary mx-auto my-4" />
          <p className="text-zinc-400 text-xs md:text-sm">
            Toda la información clave estructurada sobre nuestros materiales, regulaciones locales en Miami-Dade y procesos de entrega.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, idx) => (
            <details
              key={idx}
              className="bg-industrial-card border border-industrial-border hover:border-industrial-border-high rounded-md p-5 group transition-colors cursor-pointer"
            >
              <summary className="font-bold text-white text-sm md:text-base uppercase tracking-wide list-none flex items-center justify-between">
                <span>{item.q}</span>
                <span className="text-brand-primary group-open:rotate-45 transition-transform duration-300 ml-4">+</span>
              </summary>
              <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mt-4 pt-4 border-t border-industrial-border">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
