import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
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
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug, lang } = await params;
  const product = getProductBySlug(slug);
  
  if (!product || getCategorySlug(product.category, lang) !== category) return {};
  
  const dictFull = await getDictionary(lang as any);
  const productsTranslations = dictFull.productsData as Record<number | string, ProductTranslation>;
  
  const localizedTitle = productsTranslations[product.id]?.title || product.title;
  const localizedDesc = productsTranslations[product.id]?.description || product.description;

  return {
    title: `${localizedTitle} | Darioscustom Miami`,
    description: localizedDesc,
    openGraph: {
      title: `${localizedTitle} | Darioscustom`,
      description: localizedDesc,
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

  const related = getRelatedProducts(product.id, product.category);

  const waMessage = encodeURIComponent(
    `${dictFull.catalog.msgPart1} "${localizedTitle}" ${dictFull.catalog.msgPart2}`
  );
  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "13055550199";
  const waLink = `https://wa.me/${waNumber}?text=${waMessage}`;

  const productImages = product.images && product.images.length > 0 
    ? product.images 
    : [product.img];

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": localizedTitle,
    "image": `https://dariosironart.com/images/${product.img}`,
    "description": localizedDesc,
    "category": product.category,
    "brand": { "@type": "Brand", "name": "Darioscustom" },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "priceRange": "$$$",
      "seller": {
        "@type": "HomeAndConstructionBusiness",
        "name": "Darioscustom",
        "image": "https://dariosironart.com/brand/darioscustom_logo.webp",
        "telephone": "+13055550199",
        "address": { "@type": "PostalAddress", "addressLocality": "Miami", "addressRegion": "FL", "addressCountry": "US" }
      }
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <Header />
      <main id="main-content" className="min-h-screen bg-industrial-bg">
        <section className="relative bg-[#0d0d10] border-b border-industrial-border overflow-hidden">
          
          {/* Fondo Premium (Resplandor Suave) */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute inset-0 industrial-grid opacity-20 pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-industrial-border-high to-transparent" />

          <div className="max-w-[90rem] mx-auto px-6 pt-32 pb-20 relative z-10">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-10 text-[10px] font-bold tracking-widest uppercase">
              <Link href={`/${lang}/`} className="text-zinc-500 hover:text-brand-light transition-colors">{dict.home}</Link>
              <span className="text-zinc-700">/</span>
              <Link href={`/${lang}/#catalog`} className="text-zinc-500 hover:text-brand-light transition-colors">{dict.catalog}</Link>
              <span className="text-zinc-700">/</span>
              <span className="text-brand-light truncate max-w-[240px]">{localizedTitle}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
              <div className="lg:col-span-7">
                <ImageSlider images={productImages} alt={localizedTitle} />
              </div>
              <div className="lg:col-span-5 flex flex-col pt-4">
                <span className="text-xs uppercase tracking-[0.25em] text-brand-light font-bold mb-3 flex items-center gap-3">
                  <span className="w-6 h-[1px] bg-brand-light/50 block"></span>
                  {(dictFull.catalog.categories as Record<string, string>)[product.category] || product.category}
                </span>

                <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-6 leading-[1.1] drop-shadow-md">
                  {localizedTitle}
                </h1>
                
                <div className="w-16 h-[2px] bg-brand-primary mb-8" />
                
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-10">
                  {localizedDesc}
                </p>

                {/* TAGS (Diseño Glassmorphism Premium) */}
                <div className="mb-12">
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-4 block">{dict.features}</span>
                  <div className="flex flex-wrap gap-2.5">
                    {localizedTags.map((tag: string, idx: number) => (
                      <span key={idx} className="text-[10px] font-semibold uppercase tracking-wider text-zinc-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-md backdrop-blur-sm shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* BOTONES (Más grandes y redondeados) */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-bold uppercase tracking-widest px-6 py-4 rounded-xl shadow-[0_10px_30px_-10px_rgba(5,150,105,0.5)] border border-emerald-500/50 hover:border-emerald-400 transition-all inline-flex items-center justify-center gap-3">
                    <WhatsAppIcon className="w-4 h-4" /> {dict.quoteBtn}
                  </a>
                  <Link href={`/${lang}/#catalog`} className="sm:flex-none bg-[#18181B] hover:bg-[#27272A] text-zinc-300 hover:text-white text-[11px] font-bold uppercase tracking-widest px-6 py-4 rounded-xl border border-white/5 hover:border-white/10 shadow-lg transition-all inline-flex items-center justify-center gap-3">
                    <ArrowLeft className="w-4 h-4" /> {dict.backBtn}
                  </Link>
                </div>

                {/* BADGES (Info adicional refinada) */}
                <div className="mt-12 pt-8 border-t border-industrial-border/50 grid grid-cols-3 gap-4 text-center">
                  {dict.badges.map((badge: any, idx: number) => (
                    <div key={idx} className="flex flex-col gap-1.5">
                      <span className="block text-[9px] font-bold uppercase tracking-widest text-zinc-500">{badge.label}</span>
                      <span className="block text-xs font-bold text-white drop-shadow-sm">{badge.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section className="py-24 bg-industrial-bg border-t border-industrial-border">
            <div className="max-w-[90rem] mx-auto px-6">
              <div className="mb-16">
                <span className="text-[10px] uppercase tracking-[0.3em] text-brand-light font-bold flex items-center gap-3 mb-2">
                  <span className="w-8 h-[1px] bg-brand-light/50 block"></span>
                  {dict.relatedTag}
                </span>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white drop-shadow-md">
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
                        <img src={`/images/${p.img}`} alt={`${relatedTitle} — Darioscustom`} loading="lazy" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d10] via-[#0d0d10]/20 to-transparent opacity-90 pointer-events-none" />
                        
                        <div className="absolute top-4 left-4 z-20 pointer-events-none">
                          <span className="bg-[#09090B]/80 backdrop-blur-md border border-white/10 text-[9px] font-mono text-zinc-400 tracking-widest px-2.5 py-1 rounded-sm uppercase">
                            {dictFull.catalog.specId}{p.id}
                          </span>
                        </div>
                      </div>

                      <div className="p-6 pt-0 flex flex-col flex-grow relative z-20 -mt-8">
                        <h3 className="text-base md:text-lg font-black text-white uppercase mb-4 group-hover:text-brand-light transition-colors tracking-wide line-clamp-2 leading-snug drop-shadow-md">
                          {relatedTitle}
                        </h3>
                        
                        <div className="flex flex-wrap gap-2 mb-6 flex-grow content-start">
                          {localizedTags.slice(0, 2).map((tag: string, idx: number) => (
                            <span key={idx} className="text-[10px] font-semibold uppercase tracking-wider text-zinc-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md backdrop-blur-sm">
                              {tag}
                            </span>
                          ))}
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
      <WhatsAppButton />
    </>
  );
}