'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Cookie, X } from 'lucide-react'
import { useT } from '@/lib/i18n/useT'

export default function CookieConsent() {
  const t = useT()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.97 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-9999 w-[calc(100vw-3rem)] max-w-sm"
        >
          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5 shadow-2xl shadow-black/40">
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Cookie className="w-4 h-4 text-white" />
                </div>
                <span className="text-white font-bold tracking-widest text-sm uppercase">
                  {t('cookie_title')}
                </span>
              </div>
              <button onClick={decline} aria-label={t('cookie_close')} className="text-zinc-500 hover:text-white transition-colors mt-0.5">
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="font-sans text-zinc-400 text-sm leading-relaxed mb-4">
              {t('cookie_text_before')}{' '}
              <Link href="/cookies-policy" className="text-white underline underline-offset-2 hover:text-zinc-300 transition-colors">
                {t('cookie_policy_link')}
              </Link>{' '}
              {t('cookie_text_after')}
            </p>

            <div className="flex gap-2">
              <button
                onClick={accept}
                className="flex-1 py-2.5 rounded-full bg-white text-zinc-950 text-xs font-bold font-sans uppercase tracking-widest hover:bg-zinc-200 transition-colors"
              >
                {t('cookie_accept')}
              </button>
              <button
                onClick={decline}
                className="flex-1 py-2.5 rounded-full border border-zinc-700 text-zinc-300 text-xs font-sans uppercase tracking-widest hover:border-zinc-500 hover:text-white transition-colors"
              >
                {t('cookie_decline')}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
