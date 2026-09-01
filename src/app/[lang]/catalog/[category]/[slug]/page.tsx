import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { WhatsAppIcon } from "@/components/ui/Icons";
import ImageSlider from "@/components/ui/ImageSlider";
import { allProducts, getProductBySlug, getRelatedProducts, getCategorySlug } from "@/data/products";
import { getDictionary } from "@/lib/dictionary";

export const dynamicParams = false;

export function generateStaticParams() {
  const paths: { lang: string; category: string; slug: string }[] = [];
  
  for (const p of allProducts) {
    paths.push({ lang: "en", category: getCategorySlug(p.category, "en"), slug: p.slug });
    paths.push({ lang: "es", category: getCategorySlug(p.category, "es"), slug: p.slug });
  }
  
  return paths;
}

type Props = { params: Promise<{ category: string, slug: string, lang: string }> };

type ProductTranslation = {
  title?: string;
  description?: string;
  tags?: string[];
  extendedContent?: {
    subtitle: string;
    intro: string;
    sections: Array<{ heading: string; text: string }>;
    specificationsTable: Array<{ label: string; value: string }>;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug, lang } = await params;
  const product = getProductBySlug(slug);
  
  if (!product || getCategorySlug(product.category, lang) !== category) return {};
  
  const dictFull = await getDictionary(lang as any);
  const productsTranslations = dictFull.productsData as Record<number | string, ProductTranslation>;
  
  const localizedTitle = productsTranslations[product.id]?.title || product.title;
  const localizedDesc = productsTranslations[product.id]?.description || product.description;

  const canonicalUrl = `https://dariosironart.com/${lang}/catalog/${category}/${slug}/`;

  return {
    title: `${localizedTitle} | Darioscustom Miami`,
    description: localizedDesc,
    authors: [{ name: "Dario - Master Metal Craftsman", url: "https://dariosironart.com" }],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${localizedTitle} | Darioscustom`,
      description: localizedDesc,
      url: canonicalUrl,
      images: [{ url: `/images/${product.img}`, alt: localizedTitle }],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { category, slug, lang } = await params;
  const product = getProductBySlug(slug);
  
  if (!product || getCategorySlug(product.category, lang) !== category) notFound();

  const dictFull = await getDictionary(lang as any);
  const dict = dictFull.product;
  
  const productsTranslations = dictFull.productsData as Record<number | string, ProductTranslation>;
  
  const localizedTitle = productsTranslations[product.id]?.title || product.title;
  const localizedDesc = productsTranslations[product.id]?.description || product.description;
  const localizedTags = productsTranslations[product.id]?.tags || product.tags;
  const localizedExtended = productsTranslations[product.id]?.extendedContent || (product as any).extendedContent;

  const related = getRelatedProducts(product.id, product.category);

  const waMessage = encodeURIComponent(
    `${dictFull.catalog.msgPart1} "${localizedTitle}" ${dictFull.catalog.msgPart2}`
  );
  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "13055550199";
  const waLink = `https://wa.me/${waNumber}?text=${waMessage}`;

  const productImages = product.images && product.images.length > 0 
    ? product.images 
    : [product.img];

  // FAQ dinámica conectada al diccionario de traducción (en.json / es.json) con type assertion seguro
  const pFaq = (dictFull as any).productFaq || {};
  const formatText = (text: string) => text ? text.replace(/\{title\}/g, localizedTitle) : '';

  const productFaqs = [
    {
      q: formatText(pFaq.q1),
      a: formatText(pFaq.a1)
    },
    {
      q: formatText(pFaq.q2),
      a: formatText(pFaq.a2)
    },
    {
      q: formatText(pFaq.q3),
      a: formatText(pFaq.a3)
    },
    {
      q: formatText(pFaq.q4),
      a: formatText(pFaq.a4)
    }
  ];

  const productSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "name": localizedTitle,
        "sku": `DC-PROD-${product.id}-${product.slug}`,
        "image": `https://dariosironart.com/images/${product.img}`,
        "description": localizedDesc,
        "category": product.category,
        "brand": { 
          "@type": "Brand", 
          "name": "Darioscustom",
          "sameAs": [
            "https://www.instagram.com/darioscustomironart",
            "https://www.facebook.com/DariosCustomIronArt/"
          ]
        },
        "author": {
          "@type": "Person",
          "name": "Dario - Master Metal Craftsman"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "19"
        },
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", "p.text-zinc-300"]
        },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "USD",
          "priceRange": "$$$",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "HomeAndConstructionBusiness",
            "name": "Darioscustom",
            "image": "https://dariosironart.com/brand/darioscustom_logo.webp",
            "telephone": "+13055550199",
            "address": { "@type": "PostalAddress", "addressLocality": "Miami", "addressRegion": "FL", "addressCountry": "US" }
          }
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": productFaqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <Header />
      <main id="main-content" className="min-h-screen bg-industrial-bg">
        
        <section className="relative bg-industrial-bg border-b border-industrial-border overflow-hidden">
          
          {/* Efectos de fondo */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute inset-0 industrial-grid opacity-30 pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-industrial-border-high to-transparent" />

          <div className="max-w-[90rem] mx-auto px-6 pt-32 pb-20 relative z-10">
            
            {/* Migas de pan (Breadcrumbs) */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-10 text-[10px] font-bold tracking-widest uppercase">
              <Link href={`/${lang}/`} className="text-zinc-500 hover:text-brand-light transition-colors">{dict.home}</Link>
              <span className="text-zinc-700">/</span>
              <Link href={`/${lang}/#catalog`} className="text-zinc-500 hover:text-brand-light transition-colors">{dict.catalog}</Link>
              <span className="text-zinc-700">/</span>
              <span className="text-brand-light truncate max-w-[240px]">{localizedTitle}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start relative">
              
              {/* COLUMNA IZQUIERDA: Imagen (5 columnas en desktop grande) */}
              <div className="lg:col-span-6 xl:col-span-5 w-full" style={{ width: '100%', minHeight: '500px' }}>
                <div className="w-full h-full" style={{ aspectRatio: '4/5' }}>
                  <ImageSlider images={productImages} alt={localizedTitle} />
                </div>
              </div>

              {/* COLUMNA DERECHA: Información (Sticky para bajar junto con el scroll) */}
              <div className="lg:col-span-6 xl:col-span-7 flex flex-col lg:sticky lg:top-32 xl:pl-6 pt-4 lg:pt-0">
                
                <span className="text-xs uppercase tracking-[0.25em] text-brand-light font-bold mb-4 flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-brand-light/60 block"></span>
                  {(dictFull.catalog.categories as Record<string, string>)[product.category] || product.category}
                </span>

                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black uppercase tracking-tight text-white mb-6 leading-[1.1] drop-shadow-sm">
                  {localizedTitle}
                </h1>
                
                <p className="text-zinc-300 text-sm md:text-base lg:text-lg leading-relaxed mb-8 font-medium max-w-3xl">
                  {localizedDesc}
                </p>

                {/* Bloque optimizado para AEO / SAGE (Pregunta clave con párrafo ideal de 40-60 palabras) */}
                <div className="mb-8 border-l-2 border-brand-primary pl-4 py-1">
                  <h2 className="text-sm md:text-base font-bold text-white uppercase tracking-wider mb-2">
                    {lang === 'es' ? `¿Qué es y dónde se fabrica la ${localizedTitle}?` : `What is the ${localizedTitle} and where is it made?`}
                  </h2>
                  <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                    {lang === 'es' 
                      ? `La ${localizedTitle} es una obra maestra de herrería monumental diseñada exclusivamente para propiedades de lujo. Es fabricada a mano por maestros herreros en nuestro taller especializado ubicado en Miami, combinando técnicas de forja tradicional con ingeniería moderna resistente a huracanes para residencias del sur de Florida.`
                      : `The ${localizedTitle} is a monumental architectural metalwork piece designed exclusively for luxury properties. It is handcrafted by master blacksmiths in our specialized Miami workshop, combining traditional forging techniques with modern hurricane-resistant engineering for South Florida residences.`
                    }
                  </p>
                </div>

                {/* Caja de Características resaltada */}
                <div className="mb-10 bg-[#0d0d10]/50 p-6 rounded-xl border border-industrial-border/50 shadow-inner">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-4 block">
                    {dict.features}
                  </span>
                  <div className="flex flex-wrap gap-2.5">
                    {localizedTags.map((tag: string, idx: number) => (
                      <span key={idx} className="text-xs font-semibold uppercase tracking-wider text-zinc-200 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-md backdrop-blur-sm shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Botones de Acción */}
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <a 
                    href={waLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 bg-brand-primary hover:bg-brand-hover text-white text-xs font-bold uppercase tracking-widest px-8 py-5 rounded-xl shadow-[0_10px_30px_-10px_rgba(184,82,39,0.5)] border border-brand-primary/50 transition-all inline-flex items-center justify-center gap-3 group"
                  >
                    <WhatsAppIcon className="w-5 h-5 transition-transform group-hover:scale-110" /> 
                    {dict.quoteBtn}
                  </a>
                  
                  <Link 
                    href={`/${lang}/#catalog`} 
                    className="sm:flex-none bg-industrial-card hover:bg-industrial-border text-zinc-300 hover:text-white text-xs font-bold uppercase tracking-widest px-8 py-5 rounded-xl border border-industrial-border transition-all inline-flex items-center justify-center gap-3"
                  >
                    <ArrowLeft className="w-4 h-4" /> {dict.backBtn}
                  </Link>
                </div>

                {/* Sellos de Calidad inferior */}
                <div className="mt-auto grid grid-cols-3 gap-4 text-center border-t border-industrial-border pt-8">
                  {dict.badges?.map((badge: any, idx: number) => (
                    <div key={idx} className="flex flex-col gap-2 bg-[#09090B] border border-industrial-border/50 p-4 rounded-xl">
                      <span className="block text-[9px] font-bold uppercase tracking-widest text-zinc-500">{badge.label}</span>
                      <span className="block text-xs md:text-sm font-bold text-white tracking-wide">{badge.value}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* CONTENIDO EXTENDIDO (Si existe) */}
        {localizedExtended && (
          <section className="py-20 bg-[#09090B] relative border-b border-industrial-border industrial-dots">
            <div className="max-w-5xl mx-auto px-6 relative z-10">
              
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[10px] uppercase tracking-[0.3em] text-brand-light font-bold block mb-3">
                  {lang === 'es' ? 'Ingeniería y Herrería de Alta Gama' : 'Master Blacksmith Engineering'}
                </span>
                <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-tight">
                  {localizedExtended.subtitle}
                </h2>
                <div className="w-16 h-[2px] bg-brand-primary mx-auto mt-6" />
              </div>

              <div className="prose prose-invert max-w-none text-zinc-300 text-base md:text-lg leading-relaxed mb-16 bg-industrial-card border border-industrial-border p-8 md:p-12 rounded-xl shadow-xl">
                <p>{localizedExtended.intro}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {localizedExtended.sections.map((sec: any, idx: number) => (
                  <div key={idx} className="bg-industrial-card border border-industrial-border hover:border-brand-primary/50 p-8 rounded-xl transition-all duration-300 flex flex-col justify-between shadow-md">
                    <div>
                      <div className="text-brand-light font-mono text-xs font-bold mb-3 tracking-widest uppercase">
                        // 0{idx + 1} — SPECIFICATION
                      </div>
                      <h3 className="text-lg font-bold text-white uppercase tracking-wide mb-4">
                        {sec.heading}
                      </h3>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        {sec.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {localizedExtended.specificationsTable && (
                <div className="bg-industrial-card border border-industrial-border rounded-xl overflow-hidden mb-16 shadow-xl">
                  <div className="bg-industrial-border/30 px-6 py-4 border-b border-industrial-border flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-widest text-white">
                      {lang === 'es' ? 'Especificaciones Técnicas Detalladas' : 'Technical Specifications Sheet'}
                    </span>
                    <span className="text-[10px] font-mono text-brand-light uppercase tracking-widest">
                      Dario's Custom Iron Art — Miami, FL
                    </span>
                  </div>
                  <div className="divide-y divide-industrial-border">
                    {(localizedExtended.specificationsTable as Array<{label: string; value: string}>).map((spec, i) => (
                      <div key={i} className="grid grid-cols-1 md:grid-cols-3 px-6 py-4 text-sm">
                        <span className="font-bold text-zinc-400 uppercase tracking-wider text-xs md:text-sm flex items-center">
                          {spec.label}
                        </span>
                        <span className="md:col-span-2 text-zinc-200 font-medium mt-1 md:mt-0">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}
        <section className="py-16 bg-[#09090B] border-t border-industrial-border">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-8 text-center">
              {pFaq.title || (lang === 'es' ? 'Preguntas Frecuentes sobre este Diseño' : 'Frequently Asked Questions')}
            </h2>
            <div className="space-y-6">
              {productFaqs.map((faq, index) => (
                <div key={index} className="bg-industrial-card border border-industrial-border p-6 rounded-xl">
                  <h3 className="text-base font-bold text-white uppercase mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* PRODUCTOS RELACIONADOS */}
        {related.length > 0 && (
          <section className="py-24 bg-industrial-bg border-t border-industrial-border">
            <div className="max-w-[90rem] mx-auto px-6">
              <div className="mb-16">
                <span className="text-[10px] uppercase tracking-[0.3em] text-brand-light font-bold flex items-center gap-3 mb-2">
                  <span className="w-8 h-[1px] bg-brand-light/60 block"></span>
                  {dict.relatedTag}
                </span>
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white">
                  {dict.relatedTitle}
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {related.map((p) => {
                  const relatedTitle = productsTranslations[p.id]?.title || p.title;
                  const localizedTags = productsTranslations[p.id]?.tags || p.tags;
                  
                  return (
                    <div key={p.id} className="group relative flex flex-col bg-[#0d0d10] border border-industrial-border hover:border-brand-primary/40 rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(184,82,39,0.15)]">
                      <Link href={`/${lang}/catalog/${getCategorySlug(p.category, lang)}/${p.slug}/`} className="absolute inset-0 z-10" aria-label={`${dict.viewProd} ${relatedTitle}`} />
                      
                      <div className="relative aspect-[4/5] w-full overflow-hidden bg-zinc-950">
                        <img src={`/images/${p.img}`} alt={`${relatedTitle} — Darioscustom`} width={400} height={500} loading="lazy" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d10] via-[#0d0d10]/20 to-transparent opacity-90 pointer-events-none" />
                        
                        <div className="absolute top-4 left-4 z-20 pointer-events-none">
                          <span className="bg-[#09090B]/80 backdrop-blur-md border border-white/10 text-[9px] font-mono text-zinc-400 tracking-widest px-2.5 py-1 rounded-sm uppercase">
                            {dictFull.catalog.specId}{p.id}
                          </span>
                        </div>
                      </div>

                      <div className="p-6 pt-0 flex flex-col flex-grow relative z-20 -mt-8">
                        <h3 className="text-base font-black text-white uppercase mb-4 group-hover:text-brand-light transition-colors tracking-wide line-clamp-2 leading-snug drop-shadow-md">
                          {relatedTitle}
                        </h3>
                        
                        <div className="flex flex-wrap gap-2 mb-6 flex-grow content-start">
                          {localizedTags.slice(0, 3).map((tag: string, idx: number) => (
                            <span key={idx} className="text-[10px] font-semibold uppercase tracking-wider text-zinc-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md backdrop-blur-sm">
                              {tag}
                            </span>
                          ))}
                          {localizedTags.length > 3 && (
                            <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500 py-1">
                              +{localizedTags.length - 3}
                            </span>
                          )}
                        </div>

                        <div className="mt-auto">
                          <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-zinc-500 group-hover:text-brand-light transition-colors w-full">
                            {dict.viewProd} <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}
        
      </main>

      <Footer />
    </>
  );
}