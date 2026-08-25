"use client";
import { useState } from "react";
import { MapPin, Mail, Phone, ArrowRight, Send, Camera, Upload, X } from "lucide-react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Select } from "../ui/Select";
import { Textarea } from "../ui/Textarea";
import { WhatsAppIcon } from "../ui/Icons";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", phone: "", service: "Puertas", msg: "" });
  const [photo, setPhoto] = useState<File | null>(null);
  const [method, setMethod] = useState<"whatsapp" | "email">("whatsapp");
  const [submitted, setSubmitted] = useState(false);

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
        // Reseteo limpio al estado inicial
        setFormState({ name: "", email: "", phone: "", service: "Puertas", msg: "" });
        setPhoto(null);
      }, 3500);
    }
  };

  return (
    <section id="contacto" className="py-24 relative border-t border-industrial-border bg-[#0d0d10]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-[0.25em] text-brand-light font-bold">Ubicación y Datos</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mt-2 mb-6">
              Coordinemos tu Visita Técnica
            </h2>
            <p className="text-zinc-400 mb-8 text-sm md:text-base">
              Rellena el formulario inteligente de abajo para enviarnos tus requerimientos. Elige envío inmediato por WhatsApp para ser atendido en tiempo real por nuestro taller.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-industrial-card border border-industrial-border p-3 rounded-md text-brand-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider text-xs">Sede y Operación</h4>
                  <p className="text-zinc-400 text-xs">
                    {process.env.NEXT_PUBLIC_COMPANY_ADDRESS || "Miami, Coral Gables, Doral, Brickell, Pinecrest, Key Biscayne, FL"}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-industrial-card border border-industrial-border p-3 rounded-md text-brand-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider text-xs">Teléfono Oficina</h4>
                  <p className="text-zinc-400 text-xs">
                    {process.env.NEXT_PUBLIC_COMPANY_PHONE || "+1 (305) 555-0199"}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-industrial-card border border-industrial-border p-3 rounded-md text-brand-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider text-xs">Correo Electrónico</h4>
                  <p className="text-zinc-400 text-xs text-brand-light">
                    {process.env.NEXT_PUBLIC_COMPANY_EMAIL || "info@darioscustom.com"}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Formulario Derecho */}
          <div className="lg:col-span-7 bg-industrial-card border border-industrial-border p-8 rounded-lg relative overflow-hidden">
            <h3 className="text-lg font-bold uppercase tracking-wider mb-6 text-white">Formulario de Cotización</h3>

            {/* Selector de Método */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <button
                type="button"
                onClick={() => setMethod("whatsapp")}
                className={`py-3 text-xs font-bold uppercase tracking-wider rounded border cursor-pointer flex items-center justify-center gap-2 transition-all ${
                  method === "whatsapp"
                    ? "bg-emerald-600/20 border-emerald-500 text-emerald-400"
                    : "bg-[#09090B] border-industrial-border text-zinc-400"
                }`}
              >
                <WhatsAppIcon className="w-4 h-4" /> WhatsApp Rápido
              </button>
              <button
                type="button"
                onClick={() => setMethod("email")}
                className={`py-3 text-xs font-bold uppercase tracking-wider rounded border cursor-pointer flex items-center justify-center gap-2 transition-all ${
                  method === "email"
                    ? "bg-brand-primary/20 border-brand-primary text-brand-light"
                    : "bg-[#09090B] border-industrial-border text-zinc-400"
                }`}
              >
                <Send className="w-4 h-4" /> Correo Tradicional
              </button>
            </div>

            {submitted ? (
              <div className="bg-brand-primary/10 border border-brand-primary text-brand-light p-6 rounded text-center">
                <h4 className="font-bold text-lg uppercase mb-2">¡Mensaje de Correo Recibido con Éxito!</h4>
                <p className="text-sm">Analizaremos las especificaciones indicadas y nos comunicaremos en menos de 24 horas laborables.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    id="name"
                    label="Tu Nombre Completo"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Ej. Juan Pérez"
                  />
                  <Input
                    id="email"
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
                    label="Teléfono de Contacto"
                    type="tel"
                    required
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    placeholder="+1 (305) 555-0100"
                  />
                  
                  {/* Selector con las categorías exactas del catálogo simplificadas */}
                  <Select
                    id="service"
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
                  label="Mensaje y Dimensiones de tu Reja"
                  rows={4}
                  required
                  value={formState.msg}
                  onChange={(e) => setFormState({ ...formState, msg: e.target.value })}
                  placeholder="Describe las especificaciones o estilo del metal deseado..."
                />

                {/* Subida de Foto de Referencia (Opcional) */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Foto de Referencia (Opcional)
                  </label>
                  <div className="relative border border-dashed border-industrial-border hover:border-brand-primary/50 bg-[#09090B] rounded-md p-4 transition-colors group cursor-pointer flex flex-col items-center justify-center min-h-[90px]">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="absolute inset-0 opacity-0 cursor-pointer z-20"
                    />
                    {photo ? (
                      <div className="flex items-center justify-between w-full z-30">
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="bg-brand-primary/10 border border-brand-primary/20 p-2 rounded text-brand-light">
                            <Camera className="w-5 h-5" />
                          </div>
                          <div className="text-left min-w-0">
                            <p className="text-xs font-semibold text-white truncate max-w-[200px] sm:max-w-xs">
                              {photo.name}
                            </p>
                            <p className="text-[10px] text-zinc-500 font-mono">
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
                          className="text-zinc-400 hover:text-red-400 p-1 rounded-full hover:bg-zinc-800/50 transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center text-center gap-1.5 pointer-events-none">
                        <Upload className="w-5 h-5 text-zinc-500 group-hover:text-brand-light transition-colors" />
                        <p className="text-xs text-zinc-400">
                          <span className="text-brand-light font-bold">Haz clic para subir</span> o arrastra una foto
                        </p>
                        <p className="text-[10px] text-zinc-600">Formatos recomendados: JPG, PNG (Max 10MB)</p>
                      </div>
                    )}
                  </div>
                </div>

                <Button type="submit" variant="primary" className="w-full justify-center">
                  {method === "whatsapp" ? "Enviar a WhatsApp" : "Enviar Solicitud"} <ArrowRight className="w-4 h-4" />
                </Button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}