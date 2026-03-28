 "use client";
 
 import { useState } from "react";
 
 export default function BusinessCalculator() {
   const [cost, setCost] = useState("");
   const [price, setPrice] = useState("");
   const [margin, setMargin] = useState<number | null>(null);
   const [markup, setMarkup] = useState<number | null>(null);
 
   const calculate = () => {
     const c = parseFloat(cost);
     const p = parseFloat(price);
     if (!c || !p) return;
     setMargin(((p - c) / p) * 100);
     setMarkup(((p - c) / c) * 100);
   };
 
   return (
     <div className="w-full max-w-md bg-card border border-border rounded-2xl shadow-xl p-6 space-y-4">
       <div>
         <label className="block text-sm font-medium text-muted-foreground mb-1">Cost</label>
         <input
           type="number"
           value={cost}
           onChange={(e) => setCost(e.target.value)}
           className="w-full bg-muted/50 border border-border rounded-lg p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
           placeholder="e.g. 75"
         />
       </div>
       <div>
         <label className="block text-sm font-medium text-muted-foreground mb-1">Price</label>
         <input
           type="number"
           value={price}
           onChange={(e) => setPrice(e.target.value)}
           className="w-full bg-muted/50 border border-border rounded-lg p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
           placeholder="e.g. 100"
         />
       </div>
       <button
         onClick={calculate}
         className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
       >
         Calculate
       </button>
       {(margin !== null || markup !== null) && (
         <div className="grid grid-cols-2 gap-4">
           <div className="p-4 bg-muted/30 rounded-lg border border-border text-center">
             <div className="text-sm text-muted-foreground mb-1">Margin</div>
             <div className="text-2xl font-bold text-foreground">
               {margin?.toFixed(2)}%
             </div>
           </div>
           <div className="p-4 bg-muted/30 rounded-lg border border-border text-center">
             <div className="text-sm text-muted-foreground mb-1">Markup</div>
             <div className="text-2xl font-bold text-foreground">
               {markup?.toFixed(2)}%
             </div>
           </div>
         </div>
       )}
     </div>
   );
 }
