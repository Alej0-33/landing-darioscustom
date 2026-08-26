import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { WhatsAppIcon } from "@/components/ui/Icons";
import ImageSlider from "@/components/ui/ImageSlider";
import { allProducts, getProductBySlug, getRelatedProducts } from "@/data/products";
import { getDictionary } from "@/lib/dictionary";

export const dynamicParams = false;

export function generateStaticParams() {
  return allProducts.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string, lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, lang } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  
  const dictFull = await getDictionary(lang as any);
  const localizedTitle = dictFull.productsData[product.id]?.title || product.title;
  const localizedDesc = dictFull.productsData[product.id]?.description || product.description;

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
  const { slug, lang } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  // Diccionario de idiomas
  const dictFull = await getDictionary(lang as any);
  const dict = dictFull.product;
  
  const localizedTitle = dictFull.productsData[product.id]?.title || product.title;
  const localizedDesc = dictFull.productsData[product.id]?.description || product.description;
  const localizedTags = dictFull.productsData[product.id]?.tags || product.tags;

  const related = getRelatedProducts(product.id, product.category);

  // Generador de Mensaje de WhatsApp multi-idioma
  const waMessage = encodeURIComponent(
    `${dictFull.catalog.msgPart1} "${localizedTitle}" ${dictFull.catalog.msgPart2}`
  );
  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "13055550199";
  const waLink = `https://wa.me/${waNumber}?text=${waMessage}`;

  const productImages = product.images && product.images.length > 0 
    ? product.images 
    : [product.img];

  // Esquema de Producto semántico para indexadores y motores de IA (AIO/GEO)
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": localizedTitle,
    "image": `https://darioscustom.com/images/${product.img}`,
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
        "image": "https://darioscustom.com/brand/darioscustom_logo.webp",
        "telephone": "+13055550199",
        "address": { "@type": "PostalAddress", "addressLocality": "Miami", "addressRegion": "FL", "addressCountry": "US" }
      }
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <Header />
      <main className="min-h-screen bg-[#09090B]">
        <section className="relative bg-[#0d0d10] border-b border-industrial-border overflow-hidden">
          <div className="absolute inset-0 industrial-grid opacity-20 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(184,82,39,0.06),transparent_70%)] pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-industrial-border-high to-transparent" />

          <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-10 text-[10px] font-bold tracking-widest uppercase">
              <Link href={`/${lang}/`} className="text-zinc-500 hover:text-brand-light transition-colors">{dict.home}</Link>
              <span className="text-zinc-700">/</span>
              <Link href={`/${lang}/#catalogo`} className="text-zinc-500 hover:text-brand-light transition-colors">{dict.catalog}</Link>
              <span className="text-zinc-700">/</span>
              <span className="text-brand-light truncate max-w-[240px]">{localizedTitle}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-7">
                <ImageSlider images={productImages} alt={localizedTitle} />
              </div>
              <div className="lg:col-span-5 flex flex-col">
                <span className="text-xs uppercase tracking-[0.25em] text-brand-light font-bold mb-2">
                  {(dictFull.catalog.categories as Record<string, string>)[product.category] || product.category}
                </span>

                <h1 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white mb-4 leading-[1.1]">
                  {localizedTitle}
                </h1>
                <div className="w-12 h-[2px] bg-brand-primary mb-6" />
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8">{localizedDesc}</p>

                <div className="mb-10">
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-3 block">{dict.features}</span>
                  <div className="flex flex-wrap gap-2">
                    {localizedTags.map((tag: string, idx: number) => (
                      <span key={idx} className="bg-industrial-card border border-industrial-border text-zinc-400 text-[10px] px-3 py-1.5 font-semibold uppercase tracking-wider rounded-sm">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <a href={waLink} target="_blank" rel="noopener noreferrer" className="bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-bold uppercase tracking-widest px-6 py-4 rounded-sm border border-emerald-500 transition-all inline-flex items-center justify-center gap-3">
                    <WhatsAppIcon className="w-4 h-4" /> {dict.quoteBtn}
                  </a>
                  <Link href={`/${lang}/#catalogo`} className="bg-industrial-card hover:bg-zinc-800 text-zinc-300 hover:text-white text-[11px] font-bold uppercase tracking-widest px-6 py-4 rounded-sm border border-industrial-border-high transition-all inline-flex items-center justify-center gap-3">
                    <ArrowLeft className="w-4 h-4" /> {dict.backBtn}
                  </Link>
                </div>

                <div className="mt-8 pt-6 border-t border-industrial-border grid grid-cols-3 gap-4 text-center">
                  {dict.badges.map((badge: any, idx: number) => (
                    <div key={idx}>
                      <span className="block text-[9px] font-bold uppercase tracking-widest text-zinc-500">{badge.label}</span>
                      <span className="block text-xs font-bold text-white mt-0.5">{badge.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section className="py-20 bg-[#09090B] border-t border-industrial-border">
            <div className="max-w-7xl mx-auto px-6">
              <div className="mb-12">
                <span className="text-xs uppercase tracking-[0.25em] text-brand-light font-bold">
                  {dict.relatedTag} {(dictFull.catalog.categories as Record<string, string>)[product.category] || product.category}
                </span>
                <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white mt-2">{dict.relatedTitle}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((p) => {
                  const relatedTitle = dictFull.productsData[p.id]?.title || p.title;
                  return (
                    <Link key={p.id} href={`/${lang}/catalogo/${p.slug}`} className="bg-industrial-card border border-industrial-border rounded-md overflow-hidden group hover:border-industrial-border-high transition-all">
                      <div className="relative aspect-square overflow-hidden bg-zinc-950">
                        <img src={`/images/${p.img}`} alt={`${relatedTitle} — Darioscustom`} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-transparent opacity-60" />
                      </div>
                      <div className="p-5">
                        <span className="text-[10px] text-brand-light font-bold uppercase tracking-widest">
                          {(dictFull.catalog.categories as Record<string, string>)[p.category] || p.category}
                        </span>
                        <h3 className="text-sm font-bold text-white uppercase mt-1 mb-3 group-hover:text-brand-light transition-colors leading-snug">{relatedTitle}</h3>
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-zinc-500 group-hover:text-brand-light transition-colors">
                          {dict.viewProd} <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </Link>
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
