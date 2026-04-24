import type { Metadata } from "next";
import PrivacyPolicyContent from "@/components/PrivacyPolicyContent";

export const metadata: Metadata = {
  title: "Privacy Policy | Euro International",
  description:
    "Euro International privacy policy. Learn how we collect, use, and protect your personal information when you visit our website or purchase our premium leather goods.",
  alternates: {
    canonical: "https://www.euro-intl.com/privacy-policy",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="my-16 w-full min-h-screen">
      <PrivacyPolicyContent />
    </div>
  );
}
