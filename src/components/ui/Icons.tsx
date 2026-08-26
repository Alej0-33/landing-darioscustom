import React from "react";

interface IconProps {
  className?: string;
}

/** Logo oficial de WhatsApp */
export function WhatsAppIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.041 0C5.406 0 .01 5.373.01 11.99c0 2.113.554 4.177 1.607 5.995L0 24l6.184-1.612a12.05 12.05 0 0 0 5.856 1.492h.005c6.635 0 12.031-5.373 12.031-11.99C24.076 5.373 18.68 0 12.041 0zm0 21.937h-.004a9.933 9.933 0 0 1-5.062-1.387l-.363-.216-3.66.954.978-3.564-.237-.366a9.912 9.912 0 0 1-1.522-5.372c0-5.484 4.464-9.945 9.951-9.945 2.658 0 5.157 1.036 7.036 2.916a9.884 9.884 0 0 1 2.913 7.032c-.002 5.483-4.466 9.948-10.03 9.948z" />
    </svg>
  );
}

/** Logo oficial de Google "G" */
export function GoogleGIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={`${className} shrink-0`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.08H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.92l2.85-2.22.81-.6z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.08l3.66 2.84c.87-2.6 3.3-4.54 6.16-4.54z" fill="#EA4335"/>
    </svg>
  );
}

/** Logo oficial de Instagram */
export function InstagramIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${className} shrink-0`} aria-hidden="true">
      <defs>
        <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#405DE6" />
          <stop offset="30%" stopColor="#C13584" />
          <stop offset="60%" stopColor="#F56040" />
          <stop offset="100%" stopColor="#FCAF45" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="url(#instagram-gradient)" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="url(#instagram-gradient)" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="url(#instagram-gradient)" />
    </svg>
  );
}

/** Logo oficial de Facebook */
export function FacebookIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="#1877F2" className={`${className} shrink-0`} aria-hidden="true">
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z" />
    </svg>
  );
}

/** Logo oficial de TikTok (Colores y efecto 3D reales) */
export function TikTokIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`${className} shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      {/* Sombras oficiales para el efecto glitch de TikTok */}
      <defs>
        <filter id="tiktok-glitch" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="-1" dy="-1" stdDeviation="0" floodColor="#25F4EE" />
          <feDropShadow dx="1" dy="1" stdDeviation="0" floodColor="#FE2C55" />
        </filter>
      </defs>
      <path 
        d="M12.525.02c1.31-.02 2.61-.01 3.91 0 .73 2.05 2.22 3.32 4.36 3.66v4.21c-1.63-.06-3.05-.56-4.15-1.45v8.36c-.03 3.93-3.15 7.15-7.07 7.2-3.8.05-7.14-2.92-7.25-6.72-.1-3.69 2.76-6.86 6.45-7.16v4.28c-1.39.2-2.39 1.4-2.38 2.82.01 1.49 1.18 2.66 2.67 2.68 1.48.01 2.72-1.12 2.75-2.61V.02h.71z" 
        fill="#FFFFFF" 
        filter="url(#tiktok-glitch)" 
      />
    </svg>
  );
}