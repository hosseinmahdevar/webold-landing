import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0D13] disabled:pointer-events-none disabled:opacity-40 select-none cursor-pointer";

    const variants = {
      primary: "bg-indigo-600 text-white hover:bg-indigo-500 hover:shadow-[0_0_25px_rgba(99,102,241,0.45)] active:scale-[0.98]",
      secondary: "bg-[#1E2235] text-white hover:bg-[#252B42] border border-indigo-500/20 hover:border-indigo-500/40 active:scale-[0.98]",
      outline: "bg-transparent text-[#EEF2F6] border border-indigo-500/25 hover:border-indigo-400/60 hover:bg-indigo-500/10 active:scale-[0.98]",
      ghost: "bg-transparent text-neutral-400 hover:text-white hover:bg-indigo-500/10",
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
