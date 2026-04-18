import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { ArrowRight, MessageCircle } from "./Icons";

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "whatsapp" | "outline";
  size?: "md" | "lg";
  icon?: "arrow" | "whatsapp" | "none" | "message-circle";
  className?: string;
  ariaLabel?: string;
}

export function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  icon = "message-circle",
  className,
  ariaLabel,
}: CTAButtonProps) {
  const isExternalHref =
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:");

  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 will-change-transform hover:scale-[1.03] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--primary)]";
  const sizes = {
    md: "h-11 px-6 text-sm",
    lg: "h-14 px-8 text-base",
  } as const;
  const variants = {
    primary:
      "text-primary-foreground bg-[image:var(--gradient-metal)] shadow-mirror hover:brightness-110",
    whatsapp:
      "bg-[var(--whatsapp)] text-[var(--whatsapp-foreground)] shadow-whatsapp hover:brightness-105",
    outline:
      "border border-border bg-white/70 backdrop-blur text-foreground hover:bg-secondary",
  } as const;

  const Icon =
    icon === "whatsapp" ? MessageCircle : icon === "arrow" ? ArrowRight : null;

  return (
    <a
      href={href}
      target={isExternalHref ? "_blank" : undefined}
      rel={isExternalHref ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel}
      className={cn(base, sizes[size], variants[variant], className)}
    >
      <span>{children}</span>
      {Icon ? <Icon className="h-4 w-4" aria-hidden /> : null}
    </a>
  );
}
