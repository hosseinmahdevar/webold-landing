import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "success" | "neutral" | "pistachio";
}

export function Badge({ className, variant = "default", children, ...props }: BadgeProps) {
  const baseStyles = "inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded-full select-none";

  const variants = {
    default: "bg-[#EAF3EB] text-lime-800 dark:bg-[#17241C] dark:text-lime-300 border border-lime-600/20 dark:border-lime-400/20",
    outline: "border border-lime-600/30 dark:border-lime-400/30 text-lime-800 dark:text-lime-300 bg-transparent",
    success: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/30",
    neutral: "bg-black/[0.04] text-neutral-700 dark:bg-white/[0.04] dark:text-neutral-200 border border-neutral-200 dark:border-white/10",
    pistachio: "bg-lime-50 text-lime-800 dark:bg-lime-950/60 dark:text-lime-300 border border-lime-300 dark:border-lime-500/30",
  };

  return (
    <div className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </div>
  );
}
