import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-11 w-full rounded-xl border border-lime-600/20 dark:border-lime-400/20 bg-white dark:bg-[#0D140F] px-4 py-2.5 text-sm text-[#0E1F12] dark:text-[#F4FAF5] placeholder:text-neutral-400 dark:placeholder:text-neutral-500 transition-all duration-200 focus:border-lime-600 dark:focus:border-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-500/25 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";
