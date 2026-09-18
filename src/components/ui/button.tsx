import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:pointer-events-none disabled:opacity-40 select-none cursor-pointer";

    const variants = {
      primary: "bg-[#FAFAFA] text-[#0F172A] hover:bg-white hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] active:scale-[0.98]",
      secondary: "bg-[#18181B] text-white hover:bg-[#27272A] border border-white/10 hover:border-white/20 active:scale-[0.98]",
      outline: "bg-transparent text-white border border-white/15 hover:border-white/40 hover:bg-white/[0.05] active:scale-[0.98]",
      ghost: "bg-transparent text-neutral-400 hover:text-white hover:bg-white/5",
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
