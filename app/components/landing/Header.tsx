"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "@/assets/ese-logo.png";
import { MessageCircle } from "./Icons";
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
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/70 backdrop-blur-xl border-b border-border/60 shadow-[0_1px_0_0_color-mix(in_oklab,var(--primary)_8%,transparent)]"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a
          href="#topo"
          className="flex items-center gap-2.5"
          aria-label="ESE — Início"
        >
          <Image
            src={logo}
            alt="Logo ESE — Segurança e Rastreamento"
            width={40}
            height={40}
            className="h-9 w-9 object-contain drop-shadow-sm"
          />
        </a>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[var(--whatsapp)] text-[var(--whatsapp-foreground)] px-4 sm:px-5 h-10 text-sm font-medium shadow-whatsapp hover:scale-[1.03] active:scale-[0.98] transition-transform"
          aria-label="Falar com a ESE no WhatsApp"
        >
          <MessageCircle className="h-4 w-4" aria-hidden />
          <span className="hidden sm:inline">WhatsApp</span>
          <span className="sm:hidden">Fale conosco</span>
        </a>
      </div>
    </header>
  );
}
