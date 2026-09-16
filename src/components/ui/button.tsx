import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer";

    const variants = {
      primary: "bg-white text-black hover:bg-neutral-200 active:scale-[0.98] shadow-sm",
      secondary: "bg-neutral-900 text-white hover:bg-neutral-800 border border-white/10 active:scale-[0.98]",
      outline: "bg-transparent text-white border border-white/15 hover:border-white/40 hover:bg-white/5 active:scale-[0.98]",
      ghost: "bg-transparent text-neutral-400 hover:text-white hover:bg-white/5",
    };

    const sizes = {
      sm: "h-9 px-3.5 text-xs rounded-md gap-1.5",
      md: "h-11 px-5 text-sm rounded-lg gap-2",
      lg: "h-13 px-7 text-base rounded-lg gap-2.5",
    };

    return (
      <button ref={ref} className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
