"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, ArrowRight, Send, Camera, Upload, X, Copy, Check } from "lucide-react";
import { slideFromLeft, slideFromRight } from "@/utils/animations";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Select } from "../ui/Select";
import { Textarea } from "../ui/Textarea";
import { WhatsAppIcon, InstagramIcon, FacebookIcon, TikTokIcon } from "../ui/Icons";
import { useDictionary } from "../DictionaryProvider";

export default function Contact() {
  const dict = useDictionary().contact;
  const [formState, setFormState] = useState({ name: "", email: "", phone: "", service: "Puertas", msg: "" });
  const [photo, setPhoto] = useState<File | null>(null);
  const [method, setMethod] = useState<"whatsapp" | "email">("whatsapp");
  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Centralización de Variables de Entorno
  const phoneValue = process.env.NEXT_PUBLIC_COMPANY_PHONE || "+1 (305) 647-8966";
  const emailValue = process.env.NEXT_PUBLIC_COMPANY_EMAIL || "darios_art@yahoo.com";
  const addressValue = process.env.NEXT_PUBLIC_COMPANY_ADDRESS || "40 West 22nd Street, Bay 3, Hialeah, FL 33010, USA";

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (method === "whatsapp") {
      const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "13056478966";
      const photoNotice = photo ? `%0A${dict.waFormatPhoto} ${dict.waFormatPhotoYes}${photo.name}${dict.waFormatPhotoYesSuffix}` : `%0A${dict.waFormatPhoto} ${dict.waFormatPhotoNo}`;
      const formattedText = `${dict.waFormatNew}%0A%0A${dict.waFormatName} ${formState.name}%0A${dict.waFormatEmail} ${formState.email}%0A${dict.waFormatPhone} ${formState.phone}%0A${dict.waFormatService} ${formState.service}%0A${dict.waFormatMsg} ${formState.msg}${photoNotice}`;
      window.open(`https://wa.me/${waNumber}?text=${formattedText}`, "_blank");
    } else {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormState({ name: "", email: "", phone: "", service: "Puertas", msg: "" });
        setPhoto(null);
      }, 3500);
    }
  };

  const actionSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://dariosironart.com/#contacto",
    "url": "https://dariosironart.com/#contacto",
    "name": "Contact Dario's Custom Iron Art",
    "description": "Submit a request to get a custom ironwork quote via email or WhatsApp.",
    "potentialAction": {
      "@type": "ContactAction",
      "name": "SubmitQuoteRequest",
      "description": "Submit a request to get a custom ironwork quote via email or WhatsApp.",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://dariosironart.com/#contacto",
        "inLanguage": ["en-US", "es-US"],
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      }
    }
  };

  return (
    <section id="contacto" className="py-20 sm:py-24 relative border-t border-industrial-border bg-[#0d0d10]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(actionSchema) }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* FORMULARIO */}
          <motion.div className="lg:col-span-7 lg:order-1 order-1 bg-industrial-card border border-industrial-border p-4 sm:p-8 rounded-lg relative overflow-hidden w-full" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={slideFromRight}>
            <h3 className="text-md sm:text-lg font-bold uppercase tracking-wider mb-6 text-white">{dict.formTitle}</h3>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
              <button type="button" onClick={() => setMethod("whatsapp")} className={`py-2.5 sm:py-3 px-1 sm:px-4 text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded border cursor-pointer flex items-center justify-center gap-1.5 sm:gap-2 transition-all ${ method === "whatsapp" ? "bg-emerald-600/20 border-emerald-500 text-emerald-400" : "bg-[#09090B] border-industrial-border text-zinc-400" }`}>
                <WhatsAppIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" /> {dict.waQuick}
              </button>
              <button type="button" onClick={() => setMethod("email")} className={`py-2.5 sm:py-3 px-1 sm:px-4 text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded border cursor-pointer flex items-center justify-center gap-1.5 sm:gap-2 transition-all ${ method === "email" ? "bg-brand-primary/20 border-brand-primary text-brand-light" : "bg-[#09090B] border-industrial-border text-zinc-400" }`}>
                <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" /> {dict.emailTrad}
              </button>
            </div>
            {submitted ? (
              <div className="bg-brand-primary/10 border border-brand-primary text-brand-light p-6 rounded text-center">
                <h3 className="font-bold text-lg uppercase mb-2">{dict.successTitle}</h3>
                <p className="text-sm">{dict.successDesc}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input id="name" name="name" label={dict.fName} type="text" required value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} placeholder={dict.fNamePl} />
                  <Input id="email" name="email" label={dict.fEmail} type="email" required value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} placeholder={dict.fEmailPl} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input id="phone" name="phone" label={dict.fPhone} type="tel" required value={formState.phone} onChange={(e) => setFormState({ ...formState, phone: e.target.value })} placeholder={dict.fPhonePl} />
                  <Select id="service" name="service" label={dict.fService} value={formState.service} onChange={(e) => setFormState({ ...formState, service: e.target.value })}>
                    <option value="Puertas">{(dict.fServiceOpts as any).Puertas}</option>
                    <option value="Portones">{(dict.fServiceOpts as any).Portones}</option>
                    <option value="Barandales">{(dict.fServiceOpts as any).Barandales}</option>
                    <option value="Arte">{(dict.fServiceOpts as any).Arte}</option>
                    <option value="Iluminación">{(dict.fServiceOpts as any).Iluminación}</option>
                    <option value="Miscelaneas">{(dict.fServiceOpts as any).Miscelaneas}</option>
                  </Select>
                </div>
                <Textarea id="msg" name="msg" label={dict.fMsg} rows={4} required value={formState.msg} onChange={(e) => setFormState({ ...formState, msg: e.target.value })} placeholder={dict.fMsgPl} />
                <div className="space-y-2">
                  <label htmlFor="photo_upload" className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400">{dict.fPhoto}</label>
                  <div className="relative border border-dashed border-industrial-border hover:border-brand-primary/50 bg-[#09090B] rounded-md p-4 transition-colors group cursor-pointer flex flex-col items-center justify-center min-h-[90px]">
                    <input id="photo_upload" name="photo_upload" type="file" accept="image/*" onChange={(e) => setPhoto(e.target.files ? e.target.files[0] : null)} className="absolute inset-0 opacity-0 cursor-pointer z-20" aria-label="Subir foto de referencia" />
                    {photo ? (
                      <div className="flex items-center justify-between w-full z-30 gap-2">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="bg-brand-primary/10 border border-brand-primary/20 p-2 rounded text-brand-light shrink-0"><Camera className="w-4 h-4 sm:w-5 sm:h-5" /></div>
                          <div className="text-left min-w-0">
                            <p className="text-[11px] sm:text-xs font-semibold text-white truncate max-w-[140px] xs:max-w-[200px] sm:max-w-xs">{photo.name}</p>
                            <p className="text-[9px] text-zinc-500 font-mono">{(photo.size / (1024 * 1024)).toFixed(2)} MB</p>
                          </div>
                        </div>
                        <button type="button" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setPhoto(null); }} className="text-zinc-400 hover:text-red-400 p-1 rounded-full hover:bg-zinc-800/50 transition-colors shrink-0" aria-label="Eliminar foto"><X className="w-4 h-4" /></button>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center text-center gap-1.5 pointer-events-none">
                        <Upload className="w-5 h-5 text-zinc-500 group-hover:text-brand-light transition-colors" />
                        <p className="text-[11px] sm:text-xs text-zinc-400"><span className="text-brand-light font-bold">{dict.uploadClick}</span> {dict.uploadDrag}</p>
                        <p className="text-[9px] text-zinc-600 font-mono uppercase tracking-wider">JPG, PNG (Max 10MB)</p>
                      </div>
                    )}
                  </div>
                </div>
                <Button type="submit" variant="primary" className="w-full justify-center" aria-label="Enviar formulario">
                  {method === "whatsapp" ? dict.sendWa : dict.sendEmail} <ArrowRight className="w-4 h-4" />
                </Button>
              </form>
            )}
          </motion.div>

          <motion.div className="lg:col-span-5 lg:order-2 order-2" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={slideFromLeft}>
            <span className="text-xs uppercase tracking-[0.25em] text-brand-light font-bold">{dict.tag}</span>
            <h2 id="contact-title" className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tight text-white mt-2 mb-6">{dict.title}</h2>
            <p className="text-zinc-400 mb-8 text-xs sm:text-sm md:text-base">{dict.desc}</p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-industrial-card border border-industrial-border p-3 rounded-md text-brand-primary shrink-0"><MapPin className="w-5 h-5" /></div>
                <div className="min-w-0">
                  <h3 className="font-bold text-white uppercase tracking-wider text-xs">{dict.hq}</h3>
                  <div className="flex items-start gap-2 mt-0.5">
                    <p className="text-zinc-400 text-xs leading-relaxed break-words">{addressValue}</p>
                    <button type="button" onClick={() => handleCopy(addressValue, "address")} className="text-zinc-500 hover:text-brand-light p-1 rounded hover:bg-zinc-800/40 transition-colors shrink-0 -mt-1" aria-label="Copiar dirección">
                      {copiedField === "address" ? <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> : <Copy className="w-3.5 h-3.5 shrink-0" />}
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-industrial-card border border-industrial-border p-3 rounded-md text-brand-primary shrink-0"><Phone className="w-5 h-5" /></div>
                <div className="min-w-0">
                  <h3 className="font-bold text-white uppercase tracking-wider text-xs">{dict.phone}</h3>
                  <div className="flex items-center gap-2 mt-0.5">
                    <p className="text-zinc-400 text-xs font-mono">{phoneValue}</p>
                    <button type="button" onClick={() => handleCopy(phoneValue, "phone")} className="text-zinc-500 hover:text-brand-light p-1 rounded hover:bg-zinc-800/40 transition-colors shrink-0" aria-label="Copiar teléfono">
                      {copiedField === "phone" ? <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> : <Copy className="w-3.5 h-3.5 shrink-0" />}
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-industrial-card border border-industrial-border p-3 rounded-md text-brand-primary shrink-0"><Mail className="w-5 h-5" /></div>
                <div className="min-w-0">
                  <h3 className="font-bold text-white uppercase tracking-wider text-xs">{dict.email}</h3>
                  <div className="flex items-center gap-2 mt-0.5">
                    <p className="text-zinc-400 text-xs text-brand-light break-all font-mono">{emailValue}</p>
                    <button type="button" onClick={() => handleCopy(emailValue, "email")} className="text-zinc-500 hover:text-brand-light p-1 rounded hover:bg-zinc-800/40 transition-colors shrink-0" aria-label="Copiar correo">
                      {copiedField === "email" ? <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> : <Copy className="w-3.5 h-3.5 shrink-0" />}
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-industrial-card border border-industrial-border p-3 rounded-md shrink-0"><InstagramIcon className="w-5 h-5" /></div>
                <div className="min-w-0">
                  <h3 className="font-bold text-white uppercase tracking-wider text-xs">Instagram</h3>
                  <div className="mt-0.5">
                    <a href="https://www.instagram.com/darioscustomironart" target="_blank" aria-label="Visit our Instagram page" className="text-zinc-400 hover:text-brand-light text-xs font-mono break-all inline-flex items-center gap-1.5 group">
                      <span>@darioscustomironart</span> <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-brand-light shrink-0" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-industrial-card border border-industrial-border p-3 rounded-md shrink-0"><FacebookIcon className="w-5 h-5" /></div>
                <div className="min-w-0">
                  <h3 className="font-bold text-white uppercase tracking-wider text-xs">Facebook</h3>
                  <div className="mt-0.5">
                    <a href="https://www.facebook.com/DariosCustomIronArt/" target="_blank" aria-label="Visit our Facebook page" className="text-zinc-400 hover:text-brand-light text-xs font-mono break-all inline-flex items-center gap-1.5 group">
                      <span>DariosCustomIronArt</span> <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-brand-light shrink-0" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-industrial-card border border-industrial-border p-3 rounded-md shrink-0"><TikTokIcon className="w-5 h-5" /></div>
                <div className="min-w-0">
                  <h3 className="font-bold text-white uppercase tracking-wider text-xs">TikTok</h3>
                  <div className="mt-0.5">
                    <a href="https://www.tiktok.com/@darioscustomironart" target="_blank" aria-label="Visit our TikTok page" className="text-zinc-400 hover:text-brand-light text-xs font-mono break-all inline-flex items-center gap-1.5 group">
                      <span>@darioscustomironart</span> <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-brand-light shrink-0" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}