import Link from "next/link";
import { cn } from "@/lib/utils";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "outlineWhite";
  className?: string;
  external?: boolean;
  ariaLabel?: string;
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  className,
  external,
  ariaLabel,
}: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

  const styles = {
    primary:
      "bg-accent text-white hover:bg-accent-dark shadow-sm",
    secondary: "bg-primary text-white hover:bg-primary-dark",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    outlineWhite:
      "border-2 border-white text-white hover:bg-white/10",
  };

  const classes = cn(base, styles[variant], className);

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
