import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080B09] disabled:pointer-events-none disabled:opacity-40 select-none cursor-pointer";

    const variants = {
      primary: "bg-lime-600 text-white dark:bg-[#A3E635] dark:text-[#06180A] font-semibold hover:bg-lime-700 dark:hover:bg-[#BEF264] hover:shadow-[0_0_25px_rgba(163,230,53,0.4)] active:scale-[0.98]",
      secondary: "bg-[#EAF3EB] text-[#0E1F12] dark:bg-[#17241C] dark:text-white hover:bg-[#DEEDE0] dark:hover:bg-[#1F3025] border border-lime-600/20 dark:border-lime-400/20 active:scale-[0.98]",
      outline: "bg-transparent text-[#0E1F12] dark:text-[#F4FAF5] border border-lime-600/30 dark:border-lime-400/25 hover:border-lime-600/60 dark:hover:border-lime-400/60 hover:bg-lime-500/10 active:scale-[0.98]",
      ghost: "bg-transparent text-neutral-600 dark:text-neutral-400 hover:text-[#0E1F12] dark:hover:text-white hover:bg-lime-500/10",
    };

    const sizes = {
      sm: "min-h-[36px] px-3.5 text-xs rounded-lg gap-1.5",
      md: "min-h-[44px] px-5 text-sm rounded-xl gap-2",
      lg: "min-h-[48px] px-7 text-base rounded-xl gap-2.5",
    };

    return (
      <button ref={ref} className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
