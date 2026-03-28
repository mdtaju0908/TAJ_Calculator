"use client";

import { useRef, useState } from "react";

export default function PrintingCalculatorPage() {
  const [tape, setTape] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const addLine = () => {
    const val = inputRef.current?.value?.trim();
    if (!val) return;
    setTape((prev) => [...prev, val]);
    if (inputRef.current) inputRef.current.value = "";
  };

  const onPrint = () => {
    const content = tape.join("\n");
    const win = window.open("", "PRINT", "height=600,width=800");
    if (!win) return;
    win.document.write(`<pre style="font-family: monospace; font-size: 14px">${content}</pre>`);
    win.document.close();
    win.focus();
    win.print();
    win.close();
  };

  return (
    <div className="p-8 h-full flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8 text-foreground">Printing Calculator</h1>
      <div className="w-full max-w-3xl bg-card border border-border rounded-2xl shadow-xl p-6 space-y-4">
        <div className="flex gap-2">
          <input 
            ref={inputRef}
            type="text"
            className="flex-1 bg-muted/50 border border-border rounded-lg p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Type entry like 12 + 7 = 19"
            onKeyDown={(e) => {
              if (e.key === "Enter") addLine();
            }}
          />
          <button onClick={addLine} className="bg-accent text-accent-foreground rounded-lg px-4 hover:bg-accent/80">Add</button>
          <button onClick={onPrint} className="bg-primary text-primary-foreground rounded-lg px-4 hover:bg-primary/90">Print</button>
        </div>
        <div className="h-96 overflow-auto bg-muted/30 border border-border rounded-lg p-4">
          <pre className="whitespace-pre-wrap text-foreground text-sm font-mono">{tape.join("\n") || "Tape is empty"}</pre>
        </div>
      </div>
    </div>
  );
}
