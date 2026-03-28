import ScientificCalculator from "@/components/ScientificCalculator";

export default function ScientificCalculatorPage() {
  return (
    <div className="p-8 h-full flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8 text-foreground">Scientific Calculator</h1>
      <ScientificCalculator />
    </div>
  );
}
