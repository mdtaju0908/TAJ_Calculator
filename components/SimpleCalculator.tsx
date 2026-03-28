"use client";

import { useState, useEffect, useCallback } from "react";
import * as math from "mathjs";
import clsx from "clsx";
import { motion } from "framer-motion";
import CalcButton from "@/components/ui/CalcButton";

export default function SimpleCalculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handlePress = useCallback((val: string) => {
    setInput((prev) => prev + val);
  }, []);

  const handleClear = useCallback(() => {
    setInput("");
    setResult("");
  }, []);

  const handleDelete = useCallback(() => {
    setInput((prev) => prev.slice(0, -1));
  }, []);

  const handleCalculate = useCallback(async () => {
    try {
      if (!input) return;
      const res = math.evaluate(input);
      const resStr = res.toString();
      setResult(resStr);
    } catch (err) {
      setResult("Error");
    }
  }, [input]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key;
      if (/^[0-9.]$/.test(key) || ['+', '-', '*', '/', '%'].includes(key)) {
        handlePress(key);
      } else if (key === 'Enter' || key === '=') {
        e.preventDefault();
        handleCalculate();
      } else if (key === 'Backspace') {
        handleDelete();
      } else if (key === 'Escape') {
        handleClear();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePress, handleCalculate, handleDelete, handleClear]);

  const buttons: Array<{ label: string; colSpan?: number }> = [
    { label: "AC" }, { label: "⌫" }, { label: "%" }, { label: "/" },
    { label: "7" }, { label: "8" }, { label: "9" }, { label: "*" },
    { label: "4" }, { label: "5" }, { label: "6" }, { label: "-" },
    { label: "1" }, { label: "2" }, { label: "3" }, { label: "+" },
    { label: "0" }, { label: "." }, { label: "=", colSpan: 2 },
  ];

  return (
    <div className="w-full max-w-md sm:max-w-lg md:max-w-xl rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
      <div className="p-6 border-b border-white/10 bg-white/5">
        <div className="text-white/60 text-sm h-6 overflow-hidden">{input}</div>
        <motion.div 
          key={result}
          initial={{ filter: "drop-shadow(0 0 0 rgba(99,102,241,0))", opacity: 0.9 }}
          animate={{ filter: "drop-shadow(0 0 12px rgba(99,102,241,0.45))", opacity: 1 }}
          transition={{ duration: 0.25 }}
          className="mt-2 text-5xl font-semibold text-white/90 tracking-tight font-mono flex justify-end"
        >
          {result || "0"}
        </motion.div>
      </div>
      <div className="grid grid-cols-4 gap-3 p-5">
        {buttons.map((btn, idx) => {
          return (
            <CalcButton
              key={idx}
              onClick={() => {
                if (btn.label === "AC") handleClear();
                else if (btn.label === "⌫") handleDelete();
                else if (btn.label === "=") handleCalculate();
                else handlePress(btn.label);
              }}
              className={clsx(
                btn.colSpan === 2 && "col-span-2"
              )}
              variant={
                btn.label === "="
                  ? "equal"
                  : btn.label === "AC"
                  ? "accent"
                  : ["/", "*", "-", "+", "%"].includes(btn.label)
                  ? "operator"
                  : /^[0-9.]+$/.test(btn.label)
                  ? "number"
                  : "special"
              }
            >
              {btn.label}
            </CalcButton>
          )
        })}
      </div>
    </div>
  );
}
