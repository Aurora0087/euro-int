import type { Metadata } from 'next'
import CookiesPolicyContent from '@/components/CookiesPolicyContent'

export const metadata: Metadata = {
  title: 'Cookies Policy | Euro International',
  description:
    'Learn how Euro International uses cookies on euro-intl.com — types of cookies, how to control them, and third-party services.',
  alternates: {
    canonical: 'https://www.euro-intl.com/cookies-policy',
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function CookiesPolicyPage() {
  return (
    <div className="my-16 w-full min-h-screen">
      <CookiesPolicyContent />
    </div>
  )
}
