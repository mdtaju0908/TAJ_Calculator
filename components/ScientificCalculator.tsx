"use client";

import { useState, useEffect, useCallback } from "react";
import * as math from "mathjs";
import clsx from "clsx";
import { motion } from "framer-motion";
import CalcButton from "@/components/ui/CalcButton"

export default function ScientificCalculator() {
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

  const handleCalculate = useCallback(() => {
    try {
      if (!input) return;
      const res = math.evaluate(input);
      setResult(res.toString());
    } catch (err) {
      setResult("Error");
    }
  }, [input]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key;
      if (/^[0-9.]$/.test(key) || ['+', '-', '*', '/', '%', '(', ')', '^'].includes(key)) {
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

  const buttons = [
    ["sin(", "cos(", "tan(", "AC"],
    ["log(", "sqrt(", "^", "⌫"],
    ["pi", "e", "%", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", "00", ".", "="],
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
        {buttons.flat().map((btn, idx) => {
          return (
            <CalcButton
              key={idx}
              onClick={() => {
                if (btn === "AC") handleClear();
                else if (btn === "⌫") handleDelete();
                else if (btn === "=") handleCalculate();
                else handlePress(btn);
              }}
              variant={
                btn === "="
                  ? "equal"
                  : btn === "AC"
                  ? "accent"
                  : ["/", "*", "-", "+", "%", "sin(", "cos(", "tan(", "log(", "sqrt(", "^", "pi", "e"].includes(btn)
                  ? "operator"
                  : /^[0-9.]+$/.test(btn)
                  ? "number"
                  : "special"
              }
            >
              {btn.replace('(', '')}
            </CalcButton>
          )
        })}
      </div>
    </div>
  );
}
