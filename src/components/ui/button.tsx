"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants = {
      primary:
        "bg-accent text-primary-600 font-bold hover:bg-accent-hover hover:shadow-md transition-all",
      secondary:
        "bg-secondary text-white font-bold hover:bg-primary-700 transition-all",
      outline:
        "border-2 border-white text-white font-bold hover:bg-white hover:text-primary-900 transition-all",
      ghost:
        "bg-transparent text-primary-600 hover:bg-primary-50 font-semibold",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transition-all duration-200",
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
