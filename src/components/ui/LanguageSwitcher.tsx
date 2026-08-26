'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { i18n } from '@/i18n.config';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <div className="flex gap-2">
      {i18n.locales.map((locale) => {
        const isActive = pathname?.startsWith(`/${locale}`);
        return (
          <Link 
            key={locale} 
            href={redirectedPathName(locale)} 
            aria-label={`Cambiar idioma a ${locale.toUpperCase()}`}
            className={`
              flex items-center justify-center font-bold tracking-widest uppercase transition-colors border
              
              /* MÓVIL / TABLET (Táctil y accesible: área de toque grande) */
              text-xs min-w-[44px] min-h-[44px] rounded-md
              
              /* ESCRITORIO (Consistente con tu diseño: tamaño más pequeño) */
              lg:text-[10px] lg:min-w-0 lg:min-h-0 lg:px-2 lg:py-1 lg:rounded-sm
              
              ${ isActive 
                  ? 'bg-[#B85227] text-white border-[#B85227]' 
                  : 'bg-transparent text-zinc-400 border-[#3F3F46] hover:text-white hover:border-zinc-300' 
              }
            `}
          >
            {locale}
          </Link>
        );
      })}
    </div>
  );
}