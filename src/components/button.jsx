import React from "react";
// import { twMerge } from "tailwind-merge";
import twMerge from "tailwind-merge";


export default function Button({ as = "button", className = "", variant = "primary", ...props }) {
  const Tag = as;
  const base = "rounded-xl px-3.5 py-2 text-sm font-medium transition focus-visible:ring-2";
  const variants = {
    primary: "bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:opacity-90",
    ghost: "bg-transparent hover:bg-[color-mix(in oklab, var(--color-foreground) 12%, transparent)]",
    outline: "border border-[var(--color-border)] hover:bg-[var(--color-card)]",
    danger: "bg-[var(--color-destructive)] text-[var(--color-destructive-foreground)] hover:opacity-90",
  };
  return <Tag className={twMerge(base, variants[variant], className)} {...props} />;
}
