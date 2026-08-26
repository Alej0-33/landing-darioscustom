# Catálogo, SEO Local y Optimización de IA (Darioscustom)

Este documento define la información comercial, los recursos gráficos y los lineamientos de optimización para motores de búsqueda (SEO) y motores de IA (AIO/GEO) para la ciudad de Miami, Florida.

---

## 1. Identidad de Marca y Recursos Gráficos
* **Nombre Comercial:** Darioscustom
* **Logotipo:** `/brand/darioscustom_logo.webp` (o `.jpg` según disponibilidad)
* **Ubicación Objetivo:** Miami, Florida (con enfoque en Coral Gables, Doral, Brickell, Key Biscayne y Pinecrest).

---

## 2. Estructura del Catálogo e Imágenes de Producto
El catálogo debe dividirse en 3 categorías bien definidas. Utiliza las imágenes de producto existentes (`public/images/product1.webp` a `product20.webp`) distribuidas de la siguiente manera:

1. **Rejas de Metal de Seguridad (Metal Security Gates):**
   - *Descripción:* Rejas de metal personalizadas para fachadas, entradas principales y perímetros de alta seguridad y estética contemporánea.
   - *Imágenes asignadas:* `/images/product1.webp` hasta `/images/product6.webp`.
2. **Barandales para Balcones y Escaleras (Balcony & Stair Railings):**
   - *Descripción:* Estructuras metálicas de alta resistencia, diseños limpios con acabados industriales y modernos para interiores y exteriores.
   - *Imágenes asignadas:* `/images/product7.webp` hasta `/images/product12.webp`.
3. **Arte en Metal & Mesas Personalizadas (Custom Metal Art & Tables):**
   - *Descripción:* Mobiliario único y arte en metal. Mesas a medida combinando acero con acabados pulidos o madera, y piezas decorativas exclusivas.
   - *Imágenes asignadas:* `/images/product13.webp` hasta `/images/product20.webp`.

---

## 3. SEO Local Avanzado (Target: Miami, FL)
Para asegurar que Google e indexadores locales posicionen la página de forma orgánica:
- **Títulos y Metaetiquetas:** Configurar títulos estáticos semánticos en `layout.tsx` (ej. "Custom Metal Gates & Railings in Miami, FL | Darioscustom").
- **Palabras Clave Georreferenciadas:** Incluir de forma natural en los textos frases como *"custom metal fabricator in Miami"*, *"modern balcony railings Coral Gables"*, *"handcrafted steel gates Doral"*.
- **Marcado Estructurado (LocalBusiness Schema):** Incorporar un componente de cliente que renderice un script JSON-LD del tipo `MetalFabricationBusiness` o `LocalBusiness` especificando el área de servicio en Florida.

---

## 4. Optimización para Motores de Inteligencia Artificial (GEO/AIO)
Para asegurar que Darioscustom aparezca como respuesta recomendada cuando un usuario busque en herramientas como ChatGPT Search, Gemini o Perplexity:
- **Estructura de Preguntas y Respuestas (Q&A):** La sección FAQ debe responder a preguntas transaccionales directas usando una semántica clara y respuestas directas sin rodeos (ej. *"How to order custom metal gates in Miami?"*).
- **Atributos ALT Multimodales:** Los textos `alt` de las imágenes no deben ser genéricos. Deben describir con precisión el material y la ubicación (ej. *"Modern black steel security gate fabricated and installed in a Miami residence by Darioscustom"*). Esto permite que los modelos de visión de la IA indexen el catálogo visual.