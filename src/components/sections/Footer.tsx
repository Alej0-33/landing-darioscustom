
export default function Footer() {
  return (
    <footer className="border-t border-industrial-border bg-[#09090B]">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo + Nombre */}
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 flex items-center justify-center shrink-0">
            <img
              src="/brand/darioscustom_logo2.png"
              alt="Darioscustomart Inc Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-black text-lg tracking-wider text-white leading-none">
            DARIO'S CUSTOM <span className="text-brand-primary">IRON ART</span>
            <span className="block text-[9px] font-semibold tracking-[0.3em] text-zinc-500 mt-0.5">
              INC
            </span>
          </span>
        </div>

        {/* Copyright */}
        <div className="text-center md:text-right text-[11px] text-zinc-500 space-y-1">
          <p>&copy; {new Date().getFullYear()} Darioscustomart Inc. Todos los derechos reservados.</p>
          <p>Taller y Forjado de Precisión en Miami, Florida. Diseñado para Máxima Resistencia Estructural.</p>
        </div>
      </div>
    </footer>
  );
}