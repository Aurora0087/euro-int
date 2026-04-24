'use client'

import Wrapper from '@/components/home/Wrapper'
import { motion } from 'framer-motion'
import Link from 'next/link'

const cookieTypes = [
  {
    name: 'Essential Cookies',
    description:
      'These cookies are strictly necessary for the website to function. They enable core features such as security, network management, and accessibility. You cannot opt out of these cookies as the site would not work without them.',
    examples: 'Session management, security tokens, load balancing.',
    canDisable: false,
  },
  {
    name: 'Analytics Cookies',
    description:
      'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. They allow us to measure and improve the performance of our site.',
    examples: 'Google Analytics — pages visited, time on site, traffic sources.',
    canDisable: true,
  },
  {
    name: 'Functional Cookies',
    description:
      'These cookies enable enhanced functionality and personalisation, such as remembering your preferences and settings. They may be set by us or by third-party providers whose services we use.',
    examples: 'Language preferences, cookie consent choice.',
    canDisable: true,
  },
  {
    name: 'Marketing Cookies',
    description:
      'These cookies track your browsing habits to enable us to show advertising that is more likely to be of interest to you. They are placed by third-party advertising networks with our permission.',
    examples: 'Remarketing, social media pixels.',
    canDisable: true,
  },
]

const translate: any = {
  initial: { y: '100%', opacity: 0 },
  enter: () => ({
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
  }),
  exit: () => ({
    y: '100%',
    opacity: 0,
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
  }),
}

export default function CookiesPolicyContent() {
  return (
    <div className="my-16 flex flex-col gap-16">
      {/* Hero */}
      <Wrapper>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-[1.61fr_1fr] min-h-[50vh] items-end">
          <div className="flex flex-col gap-8">
            <div className="overflow-hidden">
              <motion.h1
                custom={[0.3, 0]}
                variants={translate}
                initial="initial"
                whileInView="enter"
                exit="exit"
                className="whitespace-nowrap w-fit text-5xl md:text-[10vw]"
              >
                Cookies Policy.
              </motion.h1>
            </div>
            <div className="font-sans flex flex-col gap-4 text-primary/80">
              <p>
                This Cookies Policy explains what cookies are, how Euro International
                (<strong className="text-primary">euro-intl.com</strong>) uses them, and how you can
                control them. Last updated:{' '}
                <strong className="text-primary">April 2025</strong>.
              </p>
              <p>
                By continuing to use our website you consent to our use of cookies in
                accordance with this policy. If you do not agree, you may decline via the
                banner or your browser settings.
              </p>
            </div>
          </div>
          <div className="hidden md:flex flex-col gap-3 p-6 border border-primary rounded-xl font-sans text-sm text-primary/70">
            <p className="font-bold text-primary uppercase tracking-widest text-xs">Quick links</p>
            <a href="#what-are-cookies" className="hover:text-primary transition-colors">What are cookies?</a>
            <a href="#types" className="hover:text-primary transition-colors">Types of cookies we use</a>
            <a href="#control" className="hover:text-primary transition-colors">How to control cookies</a>
            <a href="#third-party" className="hover:text-primary transition-colors">Third-party cookies</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact us</a>
          </div>
        </div>
      </Wrapper>

      {/* What are cookies */}
      <Wrapper>
        <div id="what-are-cookies" className="grid grid-cols-1 md:grid-cols-[1fr_1.61fr] gap-8 border-t border-primary pt-12">
          <div className="overflow-hidden">
            <motion.h2
              custom={[0.3, 0]}
              variants={translate}
              initial="initial"
              whileInView="enter"
              exit="exit"
              className="text-5xl md:text-[5vw]"
            >
              What are cookies?
            </motion.h2>
          </div>
          <div className="font-sans flex flex-col gap-4 text-primary/80">
            <p>
              Cookies are small text files that are stored on your device (computer, tablet, or
              mobile) when you visit a website. They are widely used to make websites work more
              efficiently, as well as to provide information to the owners of the site.
            </p>
            <p>
              Cookies do not typically contain any information that personally identifies a user,
              but personal information that we store about you may be linked to the information
              stored in and obtained from cookies.
            </p>
          </div>
        </div>
      </Wrapper>

      {/* Types of cookies */}
      <Wrapper>
        <div id="types">
          <div className="overflow-hidden mb-12">
            <motion.h2
              custom={[0.3, 0]}
              variants={translate}
              initial="initial"
              whileInView="enter"
              exit="exit"
              className="text-5xl md:text-[5vw]"
            >
              Types we use.
            </motion.h2>
          </div>
          <div className="border-t border-primary font-sans">
            {cookieTypes.map((c, i) => (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-[1fr_2fr_3fr_auto] gap-x-8 gap-y-4 border-b border-primary py-8 items-start"
              >
                <span className="text-primary/40 text-sm">{`0${i + 1}`}</span>
                <div>
                  <h3 className="text-2xl mb-1">{c.name}</h3>
                  <span
                    className={`text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${
                      c.canDisable
                        ? 'bg-primary/10 text-primary/60'
                        : 'bg-primary text-white'
                    }`}
                  >
                    {c.canDisable ? 'Optional' : 'Required'}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-primary/80">{c.description}</p>
                  <p className="text-primary/50 text-xs">
                    <strong>Examples:</strong> {c.examples}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>

      {/* How to control */}
      <Wrapper>
        <div id="control" className="grid grid-cols-1 md:grid-cols-[1fr_1.61fr] gap-8 border-t border-primary pt-12">
          <div className="overflow-hidden">
            <motion.h2
              custom={[0.3, 0]}
              variants={translate}
              initial="initial"
              whileInView="enter"
              exit="exit"
              className="text-5xl md:text-[5vw]"
            >
              How to control cookies.
            </motion.h2>
          </div>
          <div className="font-sans flex flex-col gap-4 text-primary/80">
            <p>
              You can control and/or delete cookies as you wish. You can delete all cookies
              that are already on your computer and you can set most browsers to prevent them
              from being placed.
            </p>
            <p>
              <strong className="text-primary">Browser settings:</strong> Most web browsers allow
              some control of most cookies through the browser settings. To find out more about
              cookies, including how to see what cookies have been set, visit{' '}
              <a
                href="https://www.aboutcookies.org"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary hover:text-primary/60 transition-colors"
              >
                aboutcookies.org
              </a>
              .
            </p>
            <p>
              <strong className="text-primary">Consent banner:</strong> You can withdraw your
              consent at any time by clearing your browser's local storage and refreshing the
              page — the consent banner will reappear.
            </p>
            <p className="text-primary/50 text-sm">
              Note: If you disable or decline cookies, some parts of the website may become
              inaccessible or not function properly.
            </p>
          </div>
        </div>
      </Wrapper>

      {/* Third-party */}
      <Wrapper>
        <div id="third-party" className="grid grid-cols-1 md:grid-cols-[1fr_1.61fr] gap-8 border-t border-primary pt-12">
          <div className="overflow-hidden">
            <motion.h2
              custom={[0.3, 0]}
              variants={translate}
              initial="initial"
              whileInView="enter"
              exit="exit"
              className="text-5xl md:text-[5vw]"
            >
              Third-party cookies.
            </motion.h2>
          </div>
          <div className="font-sans flex flex-col gap-4 text-primary/80">
            <p>
              In addition to our own cookies, we may also use various third-party cookies to
              report usage statistics of the website and deliver advertisements on and through
              the website.
            </p>
            <p>
              These third parties have their own privacy policies governing their use of such
              information. We encourage you to review the privacy policies of any third-party
              services before providing them with personal information.
            </p>
          </div>
        </div>
      </Wrapper>

      {/* Contact */}
      <Wrapper>
        <div id="contact" className="rounded-xl border border-primary w-full h-[50vh] flex justify-center items-center gap-8 flex-col p-4">
          <div className="bg-primary w-24 h-1 rounded-full" />
          <p className="font-sans text-center text-primary/70 max-w-md">
            Questions about this policy? Email us at{' '}
            <a
              href="mailto:info@euro-intl.com"
              className="text-primary font-bold underline hover:text-primary/60 transition-colors"
            >
              info@euro-intl.com
            </a>
            .
          </p>
          <Link
            className="p-4 px-16 rounded-full bg-primary text-white font-sans font-bold w-fit hover:bg-primary/50"
            href="/contact"
          >
            Get In Touch
          </Link>
        </div>
      </Wrapper>
    </div>
  )
}
