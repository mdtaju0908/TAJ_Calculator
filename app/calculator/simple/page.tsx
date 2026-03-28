import SimpleCalculator from "@/components/SimpleCalculator";

export default function SimpleCalculatorPage() {
  return (
    <div className="p-8 h-full flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8 text-foreground">Simple Calculator</h1>
      <SimpleCalculator />
    </div>
  );
}
