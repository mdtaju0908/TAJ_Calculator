import type { Metadata } from "next";
import Link from "next/link";
import SIPCalculator from "@/components/SIPCalculator";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Free SIP Calculator - Monthly Investment Returns | TAJ Calculator",
  description:
    "Free online SIP calculator to estimate maturity amount from monthly investments with expected annual returns.",
  alternates: {
    canonical: "/calculator/sip",
  },
  openGraph: {
    title: "Free SIP Calculator - Monthly Investment Returns | TAJ Calculator",
    description:
      "Estimate SIP returns with a free online calculator. Input monthly amount, annual rate, and years.",
    url: "https://taj-calculator.mdtaju.tech/calculator/sip",
    siteName: "TAJ Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free SIP Calculator - Monthly Investment Returns | TAJ Calculator",
    description:
      "Online SIP calculator for quick financial planning and maturity estimation.",
  },
  keywords: [
    "free SIP calculator",
    "SIP calculator online",
    "investment calculator",
    "online calculator",
  ],
};

export default function SIPCalculatorPage() {
  return (
    <div className="p-8 h-full flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8 text-foreground">SIP Calculator</h1>
      <SIPCalculator />
      <section className="mt-10 max-w-3xl text-sm text-muted-foreground space-y-4">
        <h2 className="text-xl font-semibold text-foreground">How to use SIP calculator</h2>
        <p>
          Enter your monthly investment, expected annual return, and investment duration in years. The calculator estimates the maturity using standard SIP compounding.
        </p>
        <h3 className="text-lg font-semibold text-foreground">Formula</h3>
        <p>
          SIP maturity ≈ P × [(1 + r)^n − 1] / r × (1 + r), where P is monthly amount, r is monthly rate, and n is number of months.
        </p>
        <div className="pt-4 border-t border-border">
          <strong>Explore more calculators:</strong>{" "}
          <Link href="/calculator/financial" className="underline">Financial</Link>{" "}
          | <Link href="/calculator/simple" className="underline">Simple</Link>{" "}
          | <Link href="/calculator/scientific" className="underline">Scientific</Link>{" "}
          | <Link href="/calculator/business" className="underline">Business</Link>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "SIP Calculator - TAJ Calculator",
              url: "https://taj-calculator.mdtaju.tech/calculator/sip",
              applicationCategory: "Calculator",
              operatingSystem: "Web",
              offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the SIP calculator free?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, it is free and works on all devices.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What inputs are required?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Monthly investment, expected annual rate, and investment years.",
                  },
                },
              ],
            }),
          }}
        />
      </section>
    </div>
  );
}
