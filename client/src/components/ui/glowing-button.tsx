import { ButtonHTMLAttributes, forwardRef } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface GlowingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  as?: "button" | "a";
  href?: string;
  target?: string;
  rel?: string;
}

export const GlowingButton = forwardRef<HTMLButtonElement, GlowingButtonProps>(
  ({ className, as = "button", ...props }, ref) => {
    const baseClasses = cn(
      "relative inline-flex items-center justify-center overflow-hidden rounded-md bg-primary text-primary-foreground shadow-md transition-all hover:scale-105",
      "before:absolute before:inset-0 before:animate-pulse before:bg-primary/50 before:blur-xl before:transition-all",
      "hover:before:scale-150 hover:before:animate-none",
      className
    );

    if (as === "a") {
      return (
        <a
          className={baseClasses}
          {...(props as any)}
        >
          <span className="relative z-10 px-4 py-2 flex items-center">
            {props.children}
          </span>
        </a>
      );
    }

    return (
      <Button
        ref={ref}
        className={baseClasses}
        {...props}
      >
        <span className="relative z-10">
          {props.children}
        </span>
      </Button>
    );
  }
);

GlowingButton.displayName = "GlowingButton";
