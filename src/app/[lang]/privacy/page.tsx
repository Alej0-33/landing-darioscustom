import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { getDictionary } from "@/lib/dictionary";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang as any);
  return {
    title: `${dict.footer.privacy} | Darioscustom`,
    description: "Privacy Policy and data protection for Dario's Custom Iron Art Inc."
  };
}

export default async function PrivacyPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang as any);

  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen bg-[#09090B] pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-zinc-300 space-y-6">
          <h1 className="text-3xl md:text-5xl font-black uppercase text-white mb-8 border-b border-zinc-800 pb-4">
            {dict.footer.privacy}
          </h1>
          <p>
            {resolvedParams.lang === 'es' 
              ? "En Dario's Custom Iron Art Inc. respetamos su privacidad. Toda la información personal (como nombre, teléfono o email) recopilada a través de nuestros formularios o WhatsApp se utiliza exclusivamente para proveer cotizaciones y coordinar proyectos de herrería."
              : "At Dario's Custom Iron Art Inc. we respect your privacy. All personal information (such as name, phone, or email) collected through our forms or WhatsApp is used exclusively to provide quotes and coordinate ironwork projects."}
          </p>
          <p>
            {resolvedParams.lang === 'es'
              ? "No compartimos, vendemos ni alquilamos su información a terceros. Su información de contacto se almacena de forma segura y solo el personal autorizado de nuestro taller tiene acceso a ella."
              : "We do not share, sell, or rent your information to third parties. Your contact information is securely stored and only authorized workshop personnel have access to it."}
          </p>
          {/* Aquí puedes expandir el texto legal si tu cliente lo requiere en el futuro */}
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}