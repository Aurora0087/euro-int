import type { Metadata } from "next";
import HomeClient from "@/components/home/HomeClient";

export const metadata: Metadata = {
  title: "Euro International | Leather Goods Manufacturer & Exporter – Kolkata, India",
  description:
    "Euro International — premier leather goods manufacturer & exporter at Kolkata Leather Complex, India since 1999. BLC UK certified. Handcrafted full-grain leather bags & accessories for global brands.",
  alternates: {
    canonical: "https://www.euro-intl.com",
  },
  openGraph: {
    url: "https://www.euro-intl.com",
    title: "Euro International | Leather Goods Manufacturer & Exporter – Kolkata, India",
    description:
      "Premier leather goods manufacturer & exporter at Kolkata Leather Complex, India since 1999. BLC UK certified. Handcrafted leather bags & accessories for global brands.",
  },
};

export default function Home() {
  return <HomeClient />;
}
