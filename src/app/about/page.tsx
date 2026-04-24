import type { Metadata } from "next";
import AboutContent from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About Us | Leather Goods Manufacturer Kolkata – Since 1999",
  description:
    "Learn about Euro International — BLC UK certified leather goods manufacturer at Kolkata Leather Complex since 1999. Premium handcrafted leather bags & accessories. Serving world-leading retailers for 20+ years.",
  alternates: {
    canonical: "https://www.euro-intl.com/about",
  },
  openGraph: {
    url: "https://www.euro-intl.com/about",
    title: "About Euro International | Leather Manufacturer Kolkata India",
    description:
      "BLC UK certified leather goods manufacturer at Kolkata Leather Complex since 1999. Premium full-grain leather bags & accessories with generational craftsmanship and sustainable practices.",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
