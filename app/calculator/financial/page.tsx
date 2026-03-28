import type { Metadata } from "next";
import Link from "next/link";
import FinancialCalculator from "@/components/FinancialCalculator";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Financial Calculator (EMI) - Monthly Payment | TAJ Calculator",
  description:
    "Free online financial calculator to compute EMI (monthly payment) based on principal, interest rate, and tenure.",
  alternates: {
    canonical: "/calculator/financial",
  },
  openGraph: {
    title: "Financial Calculator (EMI) - Monthly Payment | TAJ Calculator",
    description:
      "Calculate EMI quickly using a free online financial calculator.",
    url: "https://taj-calculator.mdtaju.tech/calculator/financial",
    siteName: "TAJ Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Financial Calculator (EMI) - Monthly Payment | TAJ Calculator",
    description:
      "Compute EMI with principal, annual rate, and tenure using a free online calculator.",
  },
  keywords: [
    "financial calculator",
    "EMI calculator",
    "online calculator",
    "monthly payment calculator",
  ],
};

export default function FinancialCalculatorPage() {
  return (
    <div className="p-8 h-full flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8 text-foreground">Financial Calculator (EMI)</h1>
      <FinancialCalculator />
      <section className="mt-10 max-w-3xl text-sm text-muted-foreground space-y-4">
        <h2 className="text-xl font-semibold text-foreground">How to calculate EMI</h2>
        <p>
          Provide principal amount, annual interest rate, and loan tenure in years. Click Calculate to see your monthly EMI.
        </p>
        <h3 className="text-lg font-semibold text-foreground">Formula</h3>
        <p>
          EMI = P × r × (1 + r)^n ÷ [(1 + r)^n − 1], where P is principal, r is monthly rate, and n is total months.
        </p>
        <div className="pt-4 border-t border-border">
          <strong>Explore more calculators:</strong>{" "}
          <Link href="/calculator/sip" className="underline">SIP</Link>{" "}
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
              name: "Financial Calculator (EMI) - TAJ Calculator",
              url: "https://taj-calculator.mdtaju.tech/calculator/financial",
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
                  name: "Is the EMI calculator free?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, it is free and works on mobile and desktop.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What details are needed?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Principal amount, annual interest rate, and loan tenure in years.",
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
