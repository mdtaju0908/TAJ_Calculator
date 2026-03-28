import type { Metadata } from "next";
import Link from "next/link";
import ProgrammableCalculator from "@/components/ProgrammableCalculator";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Programmable Calculator - Custom Formula Evaluator | TAJ Calculator",
  description:
    "Free online programmable calculator to evaluate custom formulas with variables.",
  alternates: {
    canonical: "/calculator/programmable",
  },
  openGraph: {
    title: "Programmable Calculator - Custom Formula Evaluator | TAJ Calculator",
    description:
      "Evaluate custom formulas and variables with a free programmable calculator.",
    url: "https://taj-calculator.mdtaju.tech/calculator/programmable",
    siteName: "TAJ Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Programmable Calculator - Custom Formula Evaluator | TAJ Calculator",
    description:
      "Use variables and formulas to compute results instantly.",
  },
  keywords: [
    "programmable calculator",
    "formula calculator",
    "custom calculator",
    "online calculator",
  ],
};

export default function ProgrammableCalculatorPage() {
  return (
    <div className="p-8 h-full flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8 text-foreground">Programmable Calculator</h1>
      <ProgrammableCalculator />
      <section className="mt-10 max-w-3xl text-sm text-muted-foreground space-y-4">
        <h2 className="text-xl font-semibold text-foreground">How to use programmable calculator</h2>
        <p>
          Enter a formula and define variables to evaluate results dynamically. Ideal for quick computations and experimentation.
        </p>
        <h3 className="text-lg font-semibold text-foreground">Examples</h3>
        <p>
          Try a*b + c with variables a=2, b=3, c=4 to get 10. Extend with functions supported by the engine.
        </p>
        <div className="pt-4 border-t border-border">
          <strong>Explore more calculators:</strong>{" "}
          <Link href="/calculator/scientific" className="underline">Scientific</Link>{" "}
          | <Link href="/calculator/programmer" className="underline">Programmer</Link>{" "}
          | <Link href="/calculator/simple" className="underline">Simple</Link>{" "}
          | <Link href="/calculator/cas" className="underline">CAS</Link>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Programmable Calculator - TAJ Calculator",
              url: "https://taj-calculator.mdtaju.tech/calculator/programmable",
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
                  name: "Is the programmable calculator free?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, it is free and flexible for custom formulas.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I add new variables?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, use the Add button to add more variables to your formula.",
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
