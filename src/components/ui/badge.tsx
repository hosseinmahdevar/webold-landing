import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "success" | "neutral";
}

export function Badge({ className, variant = "default", children, ...props }: BadgeProps) {
  const baseStyles = "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded-full select-none";

  const variants = {
    default: "bg-neutral-900 text-neutral-300 border border-white/10",
    outline: "border border-white/15 text-neutral-400 bg-transparent",
    success: "bg-emerald-950/60 text-emerald-300 border border-emerald-500/30",
    neutral: "bg-white/5 text-white/80 border border-white/10",
  };

  return (
    <div className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </div>
  );
}
