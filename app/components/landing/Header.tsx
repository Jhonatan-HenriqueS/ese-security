"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "@/assets/ese-logo.png";
import MsgLogo from "@/assets/msgLogo.svg";
import { cn } from "@/lib/utils";

const WHATSAPP_URL = "https://wa.me/5569993897171";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [topInset, setTopInset] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const viewport = window.visualViewport;

    const updateTopInset = () => {
      const viewportHeight = viewport?.height ?? window.innerHeight;
      const viewportTop = viewport?.offsetTop ?? 0;
      const nextTopInset = Math.max(
        0,
        Math.round(window.innerHeight - viewportHeight - viewportTop),
      );

      setTopInset((currentTopInset) =>
        currentTopInset === nextTopInset ? currentTopInset : nextTopInset,
      );
    };

    updateTopInset();

    viewport?.addEventListener("resize", updateTopInset);
    viewport?.addEventListener("scroll", updateTopInset);
    window.addEventListener("resize", updateTopInset);
    window.addEventListener("orientationchange", updateTopInset);

    return () => {
      viewport?.removeEventListener("resize", updateTopInset);
      viewport?.removeEventListener("scroll", updateTopInset);
      window.removeEventListener("resize", updateTopInset);
      window.removeEventListener("orientationchange", updateTopInset);
    };
  }, []);

  return (
    <header
      style={{ top: topInset > 0 ? `${topInset}px` : undefined }}
      className={cn(
        "fixed inset-x-0 z-50 h-16 min-h-16 overflow-visible transition-[background-color,border-color,box-shadow] duration-300",
        scrolled
          ? "border-b border-border/60 bg-white/92 shadow-[0_1px_0_0_color-mix(in_oklab,var(--primary)_8%,transparent)] md:bg-white/70 md:backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex h-full max-w-7xl items-center justify-between px-7"
      >
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
            className="h-13 w-13 object-contain drop-shadow-sm"
          />
        </a>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[var(--whatsapp)] text-[var(--whatsapp-foreground)] px-4 sm:px-5 h-10 text-sm font-medium shadow-whatsapp hover:scale-[1.03] active:scale-[0.98] transition-transform"
          aria-label="Falar com a ESE no WhatsApp"
        >
          <Image
            src={MsgLogo}
            alt="WhatsApp Logo"
            width={1}
            height={1}
            className="h-10 w-10 shrink-0 object-contain"
          />
          <span className="hidden sm:inline">WhatsApp</span>
          <span className="sm:hidden">Fale conosco</span>
        </a>
      </nav>
    </header>
  );
}
