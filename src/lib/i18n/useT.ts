'use client'

import { useLang } from './LanguageContext'
import en from './translations/en.json'
import es from './translations/es.json'
import fr from './translations/fr.json'
import de from './translations/de.json'

const dicts = { en, es, fr, de } as const
type Key = keyof typeof en

export function useT() {
  const { lang } = useLang()
  const dict = dicts[lang] as typeof en
  return (key: Key): string => dict[key] ?? en[key] ?? key
}
