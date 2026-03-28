 "use client";
 
 import { useState } from "react";
 import nerdamer from "nerdamer";
 import "nerdamer/Algebra";
 import "nerdamer/Calculus";
 import "nerdamer/Solve";
 
 export default function CASCalculator() {
   const [expression, setExpression] = useState("");
   const [result, setResult] = useState("");
 
   const handleSolve = () => {
     try {
       if (!expression) return;
       const res = nerdamer(expression).evaluate().text();
       setResult(res);
     } catch {
       setResult("Error evaluating expression");
     }
   };
 
   const handleSimplify = () => {
     try {
       if (!expression) return;
       const res = nerdamer(expression).text();
       setResult(res);
     } catch {
       setResult("Error simplifying expression");
     }
   };
 
   const handleDerivative = () => {
     try {
       if (!expression) return;
       const res = nerdamer(`diff(${expression}, x)`).text();
       setResult(res);
     } catch {
       setResult("Error finding derivative");
     }
   };
 
   const handleIntegrate = () => {
     try {
       if (!expression) return;
       const res = nerdamer(`integrate(${expression}, x)`).text();
       setResult(res);
     } catch {
       setResult("Error integrating");
     }
   };
 
   return (
     <div className="w-full max-w-2xl bg-card border border-border rounded-2xl shadow-xl p-6 space-y-6">
       <div>
         <label className="block text-sm font-medium text-muted-foreground mb-2">
           Expression (in terms of x)
         </label>
         <input
           type="text"
           value={expression}
           onChange={(e) => setExpression(e.target.value)}
           className="w-full bg-muted/50 border border-border rounded-lg p-4 text-xl font-mono text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
           placeholder="e.g. x^2 + 2*x + 1"
         />
       </div>
 
       <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
         <button
           onClick={handleSolve}
           className="bg-primary text-primary-foreground py-2 rounded-lg font-medium hover:bg-primary/90"
         >
           Evaluate
         </button>
         <button
           onClick={handleSimplify}
           className="bg-accent text-accent-foreground py-2 rounded-lg font-medium hover:bg-accent/80"
         >
           Simplify
         </button>
         <button
           onClick={handleDerivative}
           className="bg-secondary text-secondary-foreground border border-border py-2 rounded-lg font-medium hover:bg-muted"
         >
           Derivative (d/dx)
         </button>
         <button
           onClick={handleIntegrate}
           className="bg-secondary text-secondary-foreground border border-border py-2 rounded-lg font-medium hover:bg-muted"
         >
           Integrate (∫dx)
         </button>
       </div>
 
       {result && (
         <div className="mt-6 p-6 bg-muted/30 rounded-xl border border-border">
           <div className="text-sm text-muted-foreground mb-2">Result</div>
           <div className="text-2xl font-mono text-foreground break-all">{result}</div>
         </div>
       )}
     </div>
   );
 }
