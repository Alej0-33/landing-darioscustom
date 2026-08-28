import type { Locale } from '@/i18n.config'

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  es: () => import('@/dictionaries/es.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => {
  if (typeof dictionaries[locale] === 'function') {
    return dictionaries[locale]()
  }
  return dictionaries['en']()
}