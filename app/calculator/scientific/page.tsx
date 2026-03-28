import type { Metadata } from "next";
import Link from "next/link";
import ScientificCalculator from "@/components/ScientificCalculator";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Scientific Calculator Online - Fast & Free | TAJ Calculator",
  description:
    "Free online scientific calculator with advanced functions, trigonometry, logarithms, and more.",
  alternates: {
    canonical: "/calculator/scientific",
  },
  openGraph: {
    title: "Scientific Calculator Online - Fast & Free | TAJ Calculator",
    description:
      "Use a free scientific calculator online with functions like sin, cos, tan, log, ln, and exponentials.",
    url: "https://taj-calculator.mdtaju.tech/calculator/scientific",
    siteName: "TAJ Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scientific Calculator Online - Fast & Free | TAJ Calculator",
    description:
      "Advanced online scientific calculator with trigonometric and logarithmic functions.",
  },
  keywords: [
    "scientific calculator online",
    "online calculator",
    "free scientific calculator",
    "advanced calculator",
  ],
};

export default function ScientificCalculatorPage() {
  return (
    <div className="p-8 h-full flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8 text-foreground">Scientific Calculator</h1>
      <ScientificCalculator />
      <section className="mt-10 max-w-3xl text-sm text-muted-foreground space-y-4">
        <h2 className="text-xl font-semibold text-foreground">How to use scientific calculator</h2>
        <p>
          Enter expressions using parentheses and built-in functions like sin(x), cos(x), tan(x), log(x), ln(x), and power a^b. This scientific calculator is optimized for students and professionals.
        </p>
        <h3 className="text-lg font-semibold text-foreground">Formulas and examples</h3>
        <p>
          Example: sin(π/2) = 1, log10(1000) = 3, e^2 ≈ 7.389. Use degrees or radians per your needs.
        </p>
        <div className="pt-4 border-t border-border">
          <strong>Explore more calculators:</strong>{" "}
          <Link href="/calculator/simple" className="underline">Simple</Link>{" "}
          | <Link href="/calculator/graphing" className="underline">Graphing</Link>{" "}
          | <Link href="/calculator/sip" className="underline">SIP</Link>{" "}
          | <Link href="/calculator/programmer" className="underline">Programmer</Link>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Scientific Calculator - TAJ Calculator",
              url: "https://taj-calculator.mdtaju.tech/calculator/scientific",
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
                  name: "Is the scientific calculator free?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the scientific calculator is free to use.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which functions are supported?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Common functions like trigonometry, logarithms, exponentials, and more.",
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
