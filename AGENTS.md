# AGENTS.md - Instrucciones de Desarrollo para Darioscustom

<!-- BEGIN:nextjs-agent-rules -->
# Next.js: Lee SIEMPRE la documentación local antes de programar
Antes de cualquier tarea en Next.js, busca y lee la documentación correspondiente en `node_modules/next/dist/docs/`. Tus datos de entrenamiento podrían estar desactualizados; la documentación local es la única fuente de verdad.
<!-- END:nextjs-agent-rules -->

---

## REGLAS DE DESARROLLO DEL PROYECTO (MANDATORIAS)

### 1. Gestor de Paquetes
- **Prohibido usar NPM.** Todas las instalaciones de dependencias y scripts de ejecución deben realizarse exclusivamente con **Yarn** (ej. `yarn add`, `yarn build`).

### 2. Arquitectura SSG (Static Site Generation)
- Este proyecto compila a HTML/CSS estático mediante `output: 'export'` en `next.config.mjs`.
- No utilices funciones dinámicas de servidor (`headers()`, `cookies()`, etc.) en componentes de servidor.
- Si un componente requiere interactividad del usuario, extrae la lógica a un archivo propio y usa `'use client'`.

### 3. Sistema de Diseño (Estilo Industrial Moderno)
- Antes de diseñar cualquier sección de la landing page, lee detalladamente el archivo de especificaciones `./design_spec.md`.
- **Paleta estética:** Fondos oscuros asfalto/carbón (`bg-[#09090B]`), textos blanco puro, y botones de acción principal en tono cobre/óxido (`bg-[#B85227]`).
- **Tipografía:** Usa estrictamente Montserrat importada desde Google Fonts.
- **Geometría:** Usa esquinas rectas o bordes finos de un pixel en lugar de degradados llamativos de IA o esquinas ultra redondeadas.