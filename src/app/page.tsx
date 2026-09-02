// src/app/page.tsx
import { redirect } from 'next/navigation';

export default function RootPage() {
  // En 'output: export', esto genera un index.html con un <meta refresh> instantáneo.
  // Cuando alguien entre a dariosironart.com será enviado automáticamente a la vista 
  // estilizada e indexada en dariosironart.com/en
  redirect('/en');
}