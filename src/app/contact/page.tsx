import type { Metadata } from "next";
import Contactus from "@/components/home/contact/Contactus";

export const metadata: Metadata = {
  title: "Contact Us | Euro International – Leather Manufacturer Kolkata",
  description:
    "Contact Euro International — leather goods manufacturer at Kolkata Leather Complex. Call +91 9883295681 or email info@euro-intl.com. Factory: ILPA Leather Goods Park, Kolkata Leather Complex.",
  alternates: {
    canonical: "https://www.euro-intl.com/contact",
  },
  openGraph: {
    url: "https://www.euro-intl.com/contact",
    title: "Contact Euro International | Leather Manufacturer Kolkata",
    description:
      "Reach Euro International at Kolkata Leather Complex. Phone: +91 9883295681. Email: info@euro-intl.com. Tannery & factory at ILPA Leather Goods Park, 24 Parganas South.",
  },
};

export default function ContactPage() {
  return (
    <div className="my-16 w-full min-h-screen">
      <Contactus />
    </div>
  );
}
