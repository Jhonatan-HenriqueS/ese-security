"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "@/assets/ese-logo.png";
import MsgLogo from "@/assets/msgLogo.svg";
import { cn } from "@/lib/utils";

const WHATSAPP_URL = "https://wa.me/5569993897171";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-all",
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-border/60 shadow-[0_1px_0_0_color-mix(in_oklab,var(--primary)_8%,transparent)]"
          : "bg-white/70 backdrop-blur-xl",
      )}
    >
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8"
      >
        <a
          href="#topo"
          className="flex shrink-0 items-center justify-center"
          aria-label="ESE — Início"
        >
          <Image
            src={logo}
            alt="Logo ESE — Segurança e Rastreamento"
            width={80}
            height={80}
            priority
            className="object-contain drop-shadow-sm"
          />
        </a>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 mr-5 max-w-[calc(100vw-5.5rem)] shrink-0 items-center justify-center gap-2 rounded-full bg-[var(--whatsapp)] px-3 text-sm font-medium text-[var(--whatsapp-foreground)] shadow-whatsapp transition-transform hover:scale-[1.03] active:scale-[0.98] sm:px-5"
          aria-label="Falar com a ESE no WhatsApp"
        >
          <Image
            src={MsgLogo}
            alt="WhatsApp Logo"
            width={40}
            height={40}
            className="shrink-0 object-contain"
          />
          <span className="hidden whitespace-nowrap sm:inline">WhatsApp</span>
          <span className="whitespace-nowrap sm:hidden">Fale conosco</span>
        </a>
      </nav>
    </header>
  );
}
