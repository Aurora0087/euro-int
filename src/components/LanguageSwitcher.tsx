'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe } from 'lucide-react'
import { useLang, type Lang } from '@/lib/i18n/LanguageContext'

const languages: { code: Lang; label: string; name: string }[] = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'es', label: 'ES', name: 'Español' },
  { code: 'fr', label: 'FR', name: 'Français' },
  { code: 'de', label: 'DE', name: 'Deutsch' },
]

export default function LanguageSwitcher({ variant = 'dark' }: { variant?: 'dark' | 'light' }) {
  const { lang, setLang } = useLang()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const current = languages.find(l => l.code === lang)!

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const isLight = variant === 'light'

  return (
    <div ref={ref} className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(o => !o)}
        aria-label="Select language"
        className={`flex items-center gap-1.5 px-4 py-3 rounded-full border text-sm font-medium tracking-wider transition-colors ${
          isLight
            ? 'bg-zinc-900/10 border-zinc-900/20 text-zinc-900 hover:bg-zinc-900/20'
            : 'bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20'
        }`}
      >
        <Globe className="w-4 h-4" />
        <span>{current.label}</span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.96 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full mt-2 right-0 z-50 bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl min-w-37.5"
          >
            {languages.map(l => (
              <button
                key={l.code}
                onClick={() => { setLang(l.code); setOpen(false) }}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-sans hover:bg-zinc-800 transition-colors ${
                  lang === l.code ? 'text-white bg-zinc-900' : 'text-zinc-400'
                }`}
              >
                <span className="w-6 text-center font-bold">{l.label}</span>
                <span>{l.name}</span>
                {lang === l.code && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
