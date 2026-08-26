// src/types/webmcp.d.ts
import 'react';

declare module 'react' {
  // Extendemos los atributos HTML nativos de React para que acepte los de IA
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    toolname?: string;
    tooldescription?: string;
    toolparamdescription?: string;
  }
}