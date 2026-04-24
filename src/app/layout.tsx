import type { Metadata } from "next";
import { EB_Garamond, Bebas_Neue } from "next/font/google";
import "./globals.css";
import LenisScroll from "@/components/LenisScroll";
import CookieConsent from "@/components/CookieConsent";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import ScrollToTop from "@/components/ScrollToTop";

const siteUrl = "https://www.euro-intl.com";

const eb_Garamond = EB_Garamond({
  variable: "--font-eb-gramond",
  subsets: ["latin"],
});
const bebas_neue = Bebas_Neue({ weight: "400" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Euro International | Leather Goods Manufacturer & Exporter – Kolkata, India",
    template: "%s | Euro International",
  },
  description:
    "Euro International — premier leather goods manufacturer & exporter at Kolkata Leather Complex since 1999. BLC UK certified. Handcrafted full-grain leather bags & accessories for global brands.",
  keywords: [
    "leather goods manufacturer Kolkata",
    "leather manufacturer India",
    "Euro International leather",
    "euro leather Kolkata",
    "euro-intl",
    "Kolkata Leather Complex manufacturer",
    "leather bags manufacturer India",
    "leather accessories manufacturer Kolkata",
    "leather goods exporter India",
    "leather goods exporter Kolkata",
    "premium leather goods India",
    "handcrafted leather bags Kolkata",
    "full grain leather goods India",
    "leather export house Kolkata",
    "BLC certified leather manufacturer India",
    "ILPA leather goods park",
    "leather manufacturer West Bengal",
    "leather goods 24 Parganas South",
    "leather manufacturer 24 PGS",
  ],
  authors: [{ name: "Euro International", url: siteUrl }],
  creator: "Euro International",
  publisher: "Euro International",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Euro International",
    title: "Euro International | Leather Goods Manufacturer & Exporter – Kolkata, India",
    description:
      "Premier leather goods manufacturer & exporter at Kolkata Leather Complex since 1999. BLC UK certified. Handcrafted leather bags & accessories for global brands.",
    images: [
      {
        url: "/images/hero/l3.webp",
        width: 1200,
        height: 630,
        alt: "Euro International – Premium Leather Goods Manufacturer at Kolkata Leather Complex, India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Euro International | Leather Goods Manufacturer Kolkata India",
    description:
      "Premier leather goods manufacturer & exporter at Kolkata Leather Complex since 1999. BLC UK certified.",
    images: ["/images/hero/l3.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "Leather Goods Manufacturing",
  verification: {
    google: "wGSHBV2SaUELzNYK1Lhrhw1BgBeJpgsY-gI44OMjZRY",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Euro International",
      alternateName: ["Euro Leather", "euro-intl", "Euro International Leather"],
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
      image: `${siteUrl}/images/hero/l3.webp`,
      description:
        "Euro International is a premier leather goods manufacturer and exporter based at Kolkata Leather Complex, India. Since 1999, we craft premium full-grain leather bags and accessories for global brands, certified by BLC Leather Technology Centre, UK.",
      foundingDate: "1999",
      telephone: ["+91-9883295681", "+91-7003611874"],
      email: ["info@euro-intl.com", "akhter@euro-intl.com"],
      address: [
        {
          "@type": "PostalAddress",
          name: "Factory",
          streetAddress: "Plot No. 1603, Zone - 9, ILPA Leather Goods Park, Phase - 7",
          addressLocality: "Kolkata Leather Complex",
          addressRegion: "West Bengal",
          addressCountry: "IN",
        },
        {
          "@type": "PostalAddress",
          name: "Tannery",
          streetAddress: "Plot: 98, Zone - 10A",
          addressLocality: "Kolkata Leather Complex, 24 Parganas South",
          addressRegion: "West Bengal",
          addressCountry: "IN",
        },
      ],
      areaServed: "Worldwide",
      knowsAbout: [
        "Leather goods manufacturing",
        "Leather bags",
        "Leather accessories",
        "Leather export",
        "Full-grain leather",
        "Kolkata Leather Complex",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#localbusiness`,
      name: "Euro International",
      description:
        "Premier leather goods manufacturer and exporter at Kolkata Leather Complex, India since 1999.",
      url: siteUrl,
      telephone: "+91-9883295681",
      email: "info@euro-intl.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Plot No. 1603, Zone - 9, ILPA Leather Goods Park, Phase - 7",
        addressLocality: "Kolkata Leather Complex",
        addressRegion: "West Bengal",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 22.3989,
        longitude: 88.4662,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:30",
        closes: "18:00",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Premium Leather Goods & Accessories",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Leather Bags",
              description: "Handcrafted full-grain leather bags for men and women",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Leather Accessories",
              description: "Premium leather accessories crafted with generational craftsmanship",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Euro International",
      description:
        "Premium leather goods manufacturer and exporter – Kolkata Leather Complex, India",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="no-scrollbar">
      <LenisScroll>
        <body
          className={`${bebas_neue.className} relative max-w-screen overflow-x-hidden min-h-screen grid`}
        >
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          />
          <LanguageProvider>
            {children}
            <ScrollToTop />
            <CookieConsent />
          </LanguageProvider>
        </body>
      </LenisScroll>
    </html>
  );
}
