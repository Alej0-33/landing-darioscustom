'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { i18n } from '@/i18n.config';
import { CATEGORY_SLUGS } from '@/data/products'; 

export default function LanguageSwitcher() {
  const pathname = usePathname();
  
  const redirectedPathName = (targetLocale: string) => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    
    // ✅ LOGICA DE TRADUCCIÓN DE RUTAS DINÁMICAS
    // Verifica si estamos en una URL del catálogo: ej. /en/catalog/doors/slug/
    if (segments[2] === 'catalog' && segments[3]) {
      const currentCategorySlug = segments[3];
      
      // Busca la categoría original basándose en el slug actual
      const categoryKey = Object.keys(CATEGORY_SLUGS).find(key => 
        CATEGORY_SLUGS[key].en === currentCategorySlug || 
        CATEGORY_SLUGS[key].es === currentCategorySlug
      );

      // Si encuentra la categoría, reemplaza la palabra en la URL (doors -> puertas)
      if (categoryKey) {
        segments[3] = CATEGORY_SLUGS[categoryKey][targetLocale as 'en' | 'es'];
      }
    }

    // Finalmente, cambia el idioma principal de la ruta (/en/ -> /es/)
    segments[1] = targetLocale;
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