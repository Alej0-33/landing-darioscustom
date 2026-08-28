import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { getDictionary } from "@/lib/dictionary";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang as any);
  return {
    title: `${dict.footer.terms} | Darioscustom`,
    description: "Terms of Service and conditions for Dario's Custom Iron Art Inc."
  };
}

export default async function TermsPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang as any);

  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen bg-[#09090B] pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-zinc-300 space-y-6">
          <h1 className="text-3xl md:text-5xl font-black uppercase text-white mb-8 border-b border-zinc-800 pb-4">
            {dict.footer.terms}
          </h1>
          <p>
            {resolvedParams.lang === 'es'
              ? "Al solicitar una cotización o contratar los servicios de Dario's Custom Iron Art Inc., usted acepta las siguientes condiciones. Todos los tiempos de entrega son estimados y están sujetos a la disponibilidad de materiales de alta gama (Aluminio, Hierro, Acero)."
              : "By requesting a quote or hiring the services of Dario's Custom Iron Art Inc., you agree to the following conditions. All delivery times are estimates and subject to the availability of high-end materials (Aluminum, Iron, Steel)."}
          </p>
          <p>
            {resolvedParams.lang === 'es'
              ? "Las cotizaciones iniciales enviadas por web o WhatsApp están basadas en medidas preliminares. El costo final puede ajustarse tras la visita técnica presencial (Site Visit) en su propiedad para la medición arquitectónica final."
              : "Initial quotes sent via web or WhatsApp are based on preliminary measurements. The final cost may be adjusted after the on-site technical visit to your property for final architectural measurement."}
          </p>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}