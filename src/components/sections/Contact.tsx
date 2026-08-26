// src/components/sections/Contact.tsx
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Mail, 
  Phone, 
  ArrowRight, 
  Send, 
  Camera, 
  Upload, 
  X, 
  Copy, 
  Check 
} from "lucide-react";
import { slideFromLeft, slideFromRight } from "@/utils/animations";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Select } from "../ui/Select";
import { Textarea } from "../ui/Textarea";
import { WhatsAppIcon, InstagramIcon, FacebookIcon, TikTokIcon  } from "../ui/Icons";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", phone: "", service: "Puertas", msg: "" });
  const [photo, setPhoto] = useState<File | null>(null);
  const [method, setMethod] = useState<"whatsapp" | "email">("whatsapp");
  const [submitted, setSubmitted] = useState(false);
  
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const phoneValue = process.env.NEXT_PUBLIC_COMPANY_PHONE || "+1 (305) 647-8966";
  const emailValue = process.env.NEXT_PUBLIC_COMPANY_EMAIL || "darios_art@yahoo.com";

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };

  const removePhoto = () => {
    setPhoto(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (method === "whatsapp") {
      const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "13055550199";
      
      const photoNotice = photo 
        ? `%0A*Foto de referencia:* Sí (nombre: ${photo.name}) - _Favor de adjuntar la imagen en este chat_` 
        : "%0A*Foto de referencia:* No especificada";

      const formattedText = `*NUEVA COTIZACIÓN WEB DARIO'S CUSTOM IRON ART*%0A%0A*Nombre:* ${formState.name}%0A*Correo:* ${formState.email}%0A*Teléfono:* ${formState.phone}%0A*Servicio:* ${formState.service}%0A*Mensaje:* ${formState.msg}${photoNotice}`;
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

  return (
    <section id="contacto" className="py-20 sm:py-24 relative border-t border-industrial-border bg-[#0d0d10]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <motion.div
            className="lg:col-span-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={slideFromLeft}
          >
            <span className="text-xs uppercase tracking-[0.25em] text-brand-light font-bold">Ubicación y Datos</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tight text-white mt-2 mb-6">
              Coordinemos tu Visita Técnica
            </h2>
            <p className="text-zinc-400 mb-8 text-xs sm:text-sm md:text-base">
              Rellena el formulario inteligente de abajo para enviarnos tus requerimientos. Elige envío inmediato por WhatsApp para ser atendido en tiempo real por nuestro taller.
            </p>

            <div className="space-y-6">
              {/* Sede y Operación */}
              <div className="flex items-start gap-4">
                <div className="bg-industrial-card border border-industrial-border p-3 rounded-md text-brand-primary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider text-xs">Sede y Operación</h4>
                  <p className="text-zinc-400 text-xs mt-0.5">
                    {process.env.NEXT_PUBLIC_COMPANY_ADDRESS || "Miami, Coral Gables, Doral, Brickell, Pinecrest, Key Biscayne, FL"}
                  </p>
                </div>
              </div>

              {/* Teléfono Oficina con copiado integrado */}
              <div className="flex items-start gap-4">
                <div className="bg-industrial-card border border-industrial-border p-3 rounded-md text-brand-primary shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-white uppercase tracking-wider text-xs">Teléfono Oficina</h4>
                  <div className="flex items-center gap-2 mt-0.5">
                    <p className="text-zinc-400 text-xs font-mono">
                      {phoneValue}
                    </p>
                    <button
                      type="button"
                      onClick={() => handleCopy(phoneValue, "phone")}
                      className="text-zinc-500 hover:text-brand-light p-1 rounded hover:bg-zinc-800/40 transition-colors shrink-0"
                      title="Copiar teléfono"
                    >
                      {copiedField === "phone" ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 shrink-0" />
                      )}
                    </button>
                    {copiedField === "phone" && (
                      <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-wider animate-pulse">
                        ¡Copiado!
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Correo Electrónico con copiado integrado */}
              <div className="flex items-start gap-4">
                <div className="bg-industrial-card border border-industrial-border p-3 rounded-md text-brand-primary shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-white uppercase tracking-wider text-xs">Correo Electrónico</h4>
                  <div className="flex items-center gap-2 mt-0.5">
                    <p className="text-zinc-400 text-xs text-brand-light break-all font-mono">
                      {emailValue}
                    </p>
                    <button
                      type="button"
                      onClick={() => handleCopy(emailValue, "email")}
                      className="text-zinc-500 hover:text-brand-light p-1 rounded hover:bg-zinc-800/40 transition-colors shrink-0"
                      title="Copiar correo"
                    >
                      {copiedField === "email" ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 shrink-0" />
                      )}
                    </button>
                    {copiedField === "email" && (
                      <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-wider animate-pulse">
                        ¡Copiado!
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Redes Sociales... */}
              <div className="flex items-start gap-4">
                <div className="bg-industrial-card border border-industrial-border p-3 rounded-md shrink-0">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-white uppercase tracking-wider text-xs">Instagram</h4>
                  <div className="mt-0.5">
                    <a
                      href="https://www.instagram.com/darioscustomironart"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-brand-light text-xs font-mono break-all inline-flex items-center gap-1.5 group"
                    >
                      <span>@darioscustomironart</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-brand-light shrink-0" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-industrial-card border border-industrial-border p-3 rounded-md shrink-0">
                  <FacebookIcon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-white uppercase tracking-wider text-xs">Facebook</h4>
                  <div className="mt-0.5">
                    <a
                      href="https://www.facebook.com/DariosCustomIronArt/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-brand-light text-xs font-mono break-all inline-flex items-center gap-1.5 group"
                    >
                      <span>DariosCustomIronArt</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-brand-light shrink-0" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-industrial-card border border-industrial-border p-3 rounded-md shrink-0">
                  <TikTokIcon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-white uppercase tracking-wider text-xs">TikTok</h4>
                  <div className="mt-0.5">
                    <a
                      href="https://www.tiktok.com/@darioscustomironart"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-brand-light text-xs font-mono break-all inline-flex items-center gap-1.5 group"
                    >
                      <span>@darioscustomironart</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-brand-light shrink-0" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Formulario Derecho */}
          <motion.div
            className="lg:col-span-7 bg-industrial-card border border-industrial-border p-4 sm:p-8 rounded-lg relative overflow-hidden w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={slideFromRight}
          >
            <h3 className="text-md sm:text-lg font-bold uppercase tracking-wider mb-6 text-white">Formulario de Cotización</h3>

            {/* Selector de Método */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
              <button
                type="button"
                onClick={() => setMethod("whatsapp")}
                className={`py-2.5 sm:py-3 px-1 sm:px-4 text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded border cursor-pointer flex items-center justify-center gap-1.5 sm:gap-2 transition-all ${
                  method === "whatsapp"
                    ? "bg-emerald-600/20 border-emerald-500 text-emerald-400"
                    : "bg-[#09090B] border-industrial-border text-zinc-400"
                }`}
              >
                <WhatsAppIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" /> WhatsApp Rápido
              </button>
              <button
                type="button"
                onClick={() => setMethod("email")}
                className={`py-2.5 sm:py-3 px-1 sm:px-4 text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded border cursor-pointer flex items-center justify-center gap-1.5 sm:gap-2 transition-all ${
                  method === "email"
                    ? "bg-brand-primary/20 border-brand-primary text-brand-light"
                    : "bg-[#09090B] border-industrial-border text-zinc-400"
                }`}
              >
                <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" /> Correo Tradicional
              </button>
            </div>

            {submitted ? (
              <div className="bg-brand-primary/10 border border-brand-primary text-brand-light p-6 rounded text-center">
                <h4 className="font-bold text-lg uppercase mb-2">¡Mensaje de Correo Recibido con Éxito!</h4>
                <p className="text-sm">Analizaremos las especificaciones indicadas y nos comunicaremos en menos de 24 horas laborables.</p>
              </div>
            ) : (
              <>
              {/* Formulario optimizado para WebMCP y Agentes IA */}
              <form 
                onSubmit={handleSubmit} 
                className="space-y-5"
                data-toolname="solicitarCotizacion"
                data-tooldescription="Envía una solicitud de cotización para proyectos de herrería al equipo de Darioscustom."
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    id="name"
                    name="name"
                    label="Tu Nombre Completo"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Ej. Juan Pérez"
                  />
                  <Input
                    id="email"
                    name="email"
                    label="Correo de Contacto"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="ejemplo@correo.com"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    id="phone"
                    name="phone"
                    label="Teléfono de Contacto"
                    type="tel"
                    required
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    placeholder="+1 (305) 555-0100"
                  />
                  
                  <Select
                    id="service"
                    name="service"
                    label="Categoría del Proyecto"
                    value={formState.service}
                    onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                  >
                    <option value="Puertas">Puertas Metalicas o de Hierro</option>
                    <option value="Portones">Portones de Aluminio o de Entrada</option>
                    <option value="Barandales">Barandales para Escaleras o Balcones</option>
                    <option value="Arte">Arte Metalúrgico o Paneles CNC</option>
                    <option value="Iluminación">Lámparas y Candelabros</option>
                    <option value="Miscelaneas">Otros Diseños Personalizados</option>
                  </Select>
                </div>

                <Textarea
                  id="msg"
                  name="msg"
                  label="Mensaje y Dimensiones de tu Reja"
                  rows={4}
                  required
                  value={formState.msg}
                  onChange={(e) => setFormState({ ...formState, msg: e.target.value })}
                  placeholder="Describe las especificaciones o estilo del metal deseado..."
                />

                {/* Subida de Foto de Referencia (Corregido accesibilidad label/id) */}
                <div className="space-y-2">
                  <label htmlFor="photo_upload" className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                    Foto de Referencia (Opcional)
                  </label>
                  <div className="relative border border-dashed border-industrial-border hover:border-brand-primary/50 bg-[#09090B] rounded-md p-4 transition-colors group cursor-pointer flex flex-col items-center justify-center min-h-[90px]">
                    <input
                      id="photo_upload"
                      name="photo_upload"
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="absolute inset-0 opacity-0 cursor-pointer z-20"
                      aria-label="Subir foto de referencia"
                    />
                    {photo ? (
                      <div className="flex items-center justify-between w-full z-30 gap-2">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="bg-brand-primary/10 border border-brand-primary/20 p-2 rounded text-brand-light shrink-0">
                            <Camera className="w-4 h-4 sm:w-5 sm:h-5" />
                          </div>
                          <div className="text-left min-w-0">
                            <p className="text-[11px] sm:text-xs font-semibold text-white truncate max-w-[140px] xs:max-w-[200px] sm:max-w-xs">
                              {photo.name}
                            </p>
                            <p className="text-[9px] text-zinc-500 font-mono">
                              {(photo.size / (1024 * 1024)).toFixed(2)} MB
                            </p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            removePhoto();
                          }}
                          className="text-zinc-400 hover:text-red-400 p-1 rounded-full hover:bg-zinc-800/50 transition-colors shrink-0"
                          aria-label="Eliminar foto"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center text-center gap-1.5 pointer-events-none">
                        <Upload className="w-5 h-5 text-zinc-500 group-hover:text-brand-light transition-colors" />
                        <p className="text-[11px] sm:text-xs text-zinc-400">
                          <span className="text-brand-light font-bold">Haz clic para subir</span> o arrastra una foto
                        </p>
                        <p className="text-[9px] text-zinc-600 font-mono uppercase tracking-wider">JPG, PNG (Max 10MB)</p>
                      </div>
                    )}
                  </div>
                </div>

                <Button type="submit" variant="primary" className="w-full justify-center">
                  {method === "whatsapp" ? "Enviar a WhatsApp" : "Enviar Solicitud"} <ArrowRight className="w-4 h-4" />
                </Button>
              </form>
              </>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}