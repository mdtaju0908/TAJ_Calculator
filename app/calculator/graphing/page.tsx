export default function GraphingCalculatorPage() {
  return (
    <div className="p-8 h-full flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8 text-foreground">Graphing Calculator</h1>
      <div className="w-full max-w-4xl h-[420px] sm:h-[520px] md:h-[600px] bg-white rounded-xl shadow-xl overflow-hidden border border-border">
        <iframe 
          src="https://www.desmos.com/calculator" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }}
          title="Desmos Graphing Calculator"
        />
      </div>
    </div>
  );
}
