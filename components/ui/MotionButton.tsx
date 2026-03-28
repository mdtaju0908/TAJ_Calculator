"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import clsx from "clsx";
import { useRef } from "react";

type Props = HTMLMotionProps<"button"> & { className?: string };

export default function MotionButton({ className, onClick, children, ...rest }: Props) {
  const ref = useRef<HTMLButtonElement>(null);

  const handlePointerDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    const el = ref.current;
    if (!el) return;
    const ripple = document.createElement("span");
    const rect = el.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    ripple.className = "ripple";
    Object.assign(ripple.style, {
      width: `${size}px`,
      height: `${size}px`,
      left: `${x}px`,
      top: `${y}px`,
    });
    el.appendChild(ripple);
    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  return (
    <motion.button
      ref={ref}
      whileTap={{ scale: 0.95 }}
      whileHover={{ y: -1 }}
      onPointerDown={handlePointerDown}
      onClick={onClick}
      className={clsx("relative overflow-hidden", className)}
      {...rest}
    >
      {children}
    </motion.button>
  );
}
