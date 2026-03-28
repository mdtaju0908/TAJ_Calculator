"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Calculator, 
  Binary, 
  LineChart, 
  DollarSign, 
  Sigma,
  Moon,
  Sun,
  Menu,
  Briefcase,
  FileText,
  Code,
  Wand2,
  Calendar
} from "lucide-react";
import { useState, useEffect } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

const navItems = [
  { name: "Simple", href: "/calculator/simple", icon: Calculator },
  { name: "Scientific", href: "/calculator/scientific", icon: Sigma },
  { name: "Graphing", href: "/calculator/graphing", icon: LineChart },
  { name: "Financial", href: "/calculator/financial", icon: DollarSign },
  { name: "SIP", href: "/calculator/sip", icon: DollarSign },
  { name: "Age", href: "/calculator/age", icon: Calendar },
  { name: "Programmer", href: "/calculator/programmer", icon: Binary },
  { name: "CAS", href: "/calculator/cas", icon: Wand2 },
  { name: "Business", href: "/calculator/business", icon: Briefcase },
  { name: "Printing", href: "/calculator/printing", icon: FileText },
  { name: "Programmable", href: "/calculator/programmable", icon: Code },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState<boolean>(true);
  const [isLarge, setIsLarge] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(min-width: 1024px)");
    setIsLarge(mq.matches);
    setIsOpen(mq.matches);
    const onChange = (e: MediaQueryListEvent) => {
      setIsLarge(e.matches);
      setIsOpen(e.matches);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) root.classList.add("dark");
    else root.classList.remove("dark");
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    }
  }, [isDark]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const body = document.body;
    if (!isLarge && isOpen) {
      const prev = body.style.overflow;
      body.style.overflow = "hidden";
      return () => {
        body.style.overflow = prev;
      };
    }
  }, [isLarge, isOpen]);

  return (
    <>
      {!isLarge && isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden
        />
      )}
      <motion.aside
        animate={{ width: isLarge ? (isOpen ? 256 : 80) : (isOpen ? 288 : 64) }}
        transition={{ type: "spring", stiffness: 260, damping: 28 }}
        className={clsx(
          "fixed lg:static top-0 left-0 h-screen shrink-0 flex flex-col overflow-hidden transition-all duration-300 z-50",
          "backdrop-blur-xl bg-white/5 border-r border-white/10 shadow-2xl",
          isLarge
            ? (isOpen ? "w-64" : "w-20")
            : (isOpen ? "w-72" : "w-16")
        )}
        aria-label="Sidebar"
      >
        <div className="p-4 flex items-center justify-between border-b border-white/10">
          {isOpen && <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">TAJ Calculator</h1>}
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md hover:bg-white/10 transition-colors lg:opacity-100">
            <Menu size={20} />
          </button>
        </div>

        <nav className="flex-1 p-2 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(
                  "group relative flex items-center gap-3 px-3 py-2 rounded-xl transition-all",
                  isActive 
                    ? "bg-gradient-to-r from-indigo-600/30 to-blue-600/30 text-white ring-1 ring-white/10 shadow-lg"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                )}
              >
                {isActive && isOpen && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute left-0 h-6 w-1 rounded-r-full bg-gradient-to-b from-indigo-400 to-blue-400"
                  />
                )}
                <item.icon size={20} className="shrink-0" />
                {isOpen && <span className="font-medium">{item.name}</span>}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10">
          <button 
            onClick={() => setIsDark(!isDark)}
            className="flex items-center gap-3 w-full px-3 py-2 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
            {isOpen && <span>{isDark ? "Light Mode" : "Dark Mode"}</span>}
          </button>
        </div>
      </motion.aside>

      {!isLarge && !isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed left-3 top-3 z-50 lg:hidden h-10 w-10 rounded-full bg-transparent text-white border border-white/30 backdrop-blur-sm hover:bg-white/10 active:scale-95"
          aria-label="Open Sidebar"
          title="Menu"
        >
          <Menu className="mx-auto" size={20} />
        </button>
      )}
    </>
  );
}
