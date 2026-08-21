# Especificación de Diseño: Industrial Moderna (Next.js + Tailwind CSS)

Este documento define el sistema de diseño visual para la landing page. El agente de desarrollo debe seguir estas especificaciones de manera estricta para asegurar una interfaz coherente, contemporánea y de alta conversión.

---

## 1. Paleta de Colores Extendida (Tailwind CSS)

Para dar más profundidad al diseño "Industrial", complementamos los colores base con tonos acero, asfalto y detalles de cobre oxidado para crear un contraste premium.

### Configuración sugerida para `tailwind.config.ts` o clases arbitrarias:
El agente de desarrollo debe usar los siguientes códigos de color exactos o extender la configuración de Tailwind:

* **Fondos Principales:**
  * `bg-[#09090B]` (Fondo base - Negro industrial mate, asfalto profundo)
  * `bg-[#18181B]` (Fondo secundario/Tarjetas - Gris carbón / Acero oscuro)
* **Texto:**
  * `text-[#FFFFFF]` (Texto principal - Blanco puro)
  * `text-[#A1A1AA]` (Texto secundario - Gris cemento/polvo de acero)
  * `text-[#71717A]` (Texto deshabilitado/sutil - Gris metálico oscuro)
* **Acentos Metálicos (Óxido / Cobre):**
  * `bg-[#B85227]` (Cobre / Óxido Base - Color primario de acción)
  * `hover:bg-[#9C411B]` (Óxido Oscuro - Color para estados hover)
  * `text-[#D4845F]` (Cobre Brillante - Para enlaces destacados o pequeñas etiquetas)
* **Líneas y Estructura:**
  * `border-[#27272A]` (Borde metálico sutil para separar secciones y tarjetas)
  * `border-[#3F3F46]` (Borde metálico destacado para botones secundarios o foco)

---

## 2. Tipografía (Next.js Google Fonts)

La tipografía debe ser **Montserrat**, la cual aporta una vibra geométrica, sólida, contemporánea y directa.

### Implementación en Next.js (`layout.tsx`):
El agente debe importar y configurar la fuente de la siguiente manera usando la optimización de Next.js:

```typescript
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800', '900'],
  variable: '--font-montserrat',
});

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${montserrat.variable} font-sans`}>
      <body className="bg-[#09090B] text-[#FFFFFF] antialiased">
        {children}
      </body>
    </html>
  );
}
