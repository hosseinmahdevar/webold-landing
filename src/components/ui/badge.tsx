import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "success" | "neutral" | "indigo";
}

export function Badge({ className, variant = "default", children, ...props }: BadgeProps) {
  const baseStyles = "inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded-full select-none";

  const variants = {
    default: "bg-[#1E2235] text-indigo-200 border border-indigo-500/20",
    outline: "border border-indigo-500/30 text-indigo-300 bg-transparent",
    success: "bg-emerald-950/60 text-emerald-300 border border-emerald-500/30",
    neutral: "bg-white/[0.04] text-neutral-200 border border-white/10",
    indigo: "bg-indigo-950/60 text-indigo-300 border border-indigo-500/30",
  };

  return (
    <div className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </div>
  );
}
