import type { Metadata } from "next";
import Link from "next/link";
import BusinessCalculator from "@/components/BusinessCalculator";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Business Calculator - Margin and Markup | TAJ Calculator",
  description:
    "Free online business calculator to compute margin and markup from cost and price.",
  alternates: {
    canonical: "/calculator/business",
  },
  openGraph: {
    title: "Business Calculator - Margin and Markup | TAJ Calculator",
    description:
      "Calculate profit margin and markup quickly with a free online business calculator.",
    url: "https://taj-calculator.mdtaju.tech/calculator/business",
    siteName: "TAJ Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Calculator - Margin and Markup | TAJ Calculator",
    description:
      "Compute margin and markup for pricing strategies using a free online calculator.",
  },
  keywords: [
    "business calculator",
    "margin calculator",
    "markup calculator",
    "online calculator",
  ],
};

export default function BusinessCalculatorPage() {
  return (
    <div className="p-8 h-full flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8 text-foreground">Business Calculator</h1>
      <BusinessCalculator />
      <section className="mt-10 max-w-3xl text-sm text-muted-foreground space-y-4">
        <h2 className="text-xl font-semibold text-foreground">How to use business calculator</h2>
        <p>
          Enter cost and selling price to compute margin and markup percentages. Useful for pricing and profitability analysis.
        </p>
        <h3 className="text-lg font-semibold text-foreground">Formulas</h3>
        <p>
          Margin% = (Price − Cost) ÷ Price × 100; Markup% = (Price − Cost) ÷ Cost × 100.
        </p>
        <div className="pt-4 border-t border-border">
          <strong>Explore more calculators:</strong>{" "}
          <Link href="/calculator/financial" className="underline">Financial</Link>{" "}
          | <Link href="/calculator/sip" className="underline">SIP</Link>{" "}
          | <Link href="/calculator/simple" className="underline">Simple</Link>{" "}
          | <Link href="/calculator/printing" className="underline">Printing</Link>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Business Calculator - TAJ Calculator",
              url: "https://taj-calculator.mdtaju.tech/calculator/business",
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
                  name: "Is the business calculator free?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, you can use it for free.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What does margin vs markup mean?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Margin is profit as a percentage of price; markup is profit as a percentage of cost.",
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
