 "use client";
 
 import { motion, type HTMLMotionProps } from "framer-motion";
 import clsx from "clsx";
 
 type Variant = "number" | "operator" | "function" | "equal" | "special" | "accent";
 
 type Props = HTMLMotionProps<"button"> & {
   variant?: Variant;
   className?: string;
 };
 
 export default function CalcButton({ variant = "number", className, children, ...rest }: Props) {
   return (
     <motion.button
       whileTap={{ scale: 0.95 }}
       whileHover={{ y: -2 }}
       className={clsx(
         "calc-btn select-none text-base sm:text-lg font-medium",
         variant === "equal" && "calc-btn--equal",
         variant === "accent" && "calc-btn--accent",
         className
       )}
       {...rest}
     >
       {children}
     </motion.button>
   );
 }
