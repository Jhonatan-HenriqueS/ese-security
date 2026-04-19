import Image from "next/image";
import { Reveal } from "./Reveal";
import MsgLogo from "@/assets/msgLogo.svg";
import { CTAButton } from "./CTAButton";

const WHATSAPP_URL = "https://wa.me/5569993897171";

export function Hero() {
  return (
    <section
      id="topo"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-hero pt-28 pb-20 md:pt-36 md:pb-28"
    >
      <div aria-hidden className="absolute inset-0 grid-bg opacity-70" />

      <div className="relative mx-auto max-w-5xl px-3 sm:px-6 lg:px-8 text-center">
        <Reveal direction="up" delay={0.1}>
          <header>
            <h1
              id="hero-heading"
              className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight"
            >
              <span className="text-metal">Segurança</span>,{" "}
              <span className="text-metal">controle</span> e{" "}
              <span className="text-metal">tecnologia</span>
              <br className="hidden sm:block" /> que{" "}
              <span className="text-blue-900 [text-shadow:0_0_18px_color-mix(in_oklab,rgb(30_58_138)_42%,transparent),0_0_34px_color-mix(in_oklab,rgb(30_58_138)_22%,transparent)]">
                {" "}
                protegem
              </span>{" "}
              o que mais{" "}
              <span className="text-blue-900 [text-shadow:0_0_18px_color-mix(in_oklab,rgb(30_58_138)_42%,transparent),0_0_34px_color-mix(in_oklab,rgb(30_58_138)_22%,transparent)]">
                {" "}
                importa
              </span>
            </h1>
          </header>
        </Reveal>

        <Reveal direction="up" delay={0.2}>
          <p className="mt-10 mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground">
            Monitoramento e rastreamento inteligente. Ideal para{" "}
            <strong className="text-foreground">veículos</strong>,{" "}
            <strong className="text-foreground">empresas</strong> e{" "}
            <strong className="text-foreground">residências</strong>.
          </p>
        </Reveal>

        <Reveal direction="up" delay={0.3}>
          <nav
            aria-label="Ações principais da página"
            className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <CTAButton
              href={WHATSAPP_URL}
              variant="whatsapp"
              size="lg"
              ariaLabel="Falar agora pelo WhatsApp"
            >
              <Image
                src={MsgLogo}
                alt="WhatsApp Logo"
                width={1}
                height={1}
                className="h-10 w-10 shrink-0 object-contain"
              />
              Falar pelo WhatsApp
            </CTAButton>
            <CTAButton
              href="#planos"
              variant="outline"
              size="lg"
              icon="arrow"
              className="bg-gray-400 hover:bg-gray-500"
            >
              Ver plano completo
            </CTAButton>
          </nav>
        </Reveal>
      </div>
    </section>
  );
}
