import Link from "next/link";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
  href?: string;
  external?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabled?: boolean;
  onClick?: () => void;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary/90 shadow",
  secondary:
    "bg-card border border-border text-foreground hover:bg-muted",
};

const baseStyles =
  "inline-flex items-center justify-center rounded-xl px-6 py-3 font-medium transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed";

export default function Button({
  variant = "primary",
  children,
  className,
  href,
  external,
  type,
  disabled,
  onClick,
}: ButtonProps): React.JSX.Element {
  const styles = cn(baseStyles, variantStyles[variant], className);

  // Link version
  if (href) {
    const isExternal =
      external ||
      href.startsWith("http") ||
      href.startsWith("tel:") ||
      href.startsWith("mailto:");

    if (isExternal) {
      return (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={styles}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  // Button version
  return (
    <button
      type={type || "button"}
      disabled={disabled}
      onClick={onClick}
      className={styles}
    >
      {children}
    </button>
  );
}
