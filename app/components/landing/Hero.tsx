import { Reveal } from "./Reveal";
import { CTAButton } from "./CTAButton";

const WHATSAPP_URL = "https://wa.me/5569993897171";

export function Hero() {
  return (
    <section
      id="topo"
      className="relative isolate overflow-hidden bg-hero pt-28 pb-20 md:pt-36 md:pb-28"
    >
      <div aria-hidden className="absolute inset-0 grid-bg opacity-70" />

      <div className="relative mx-auto max-w-5xl px-2 sm:px-6 lg:px-8 text-center">
        <Reveal direction="up" delay={0.1}>
          <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight">
            <span className="text-metal">Segurança</span>,{" "}
            <span className="text-metal">controle</span> e{" "}
            <span className="text-metal">tecnologia</span>
            <br className="hidden sm:block" /> que{" "}
            <span className="text-blue-900"> protegem</span> o que mais{" "}
            <span className="text-blue-900"> importa.</span>
          </h1>
        </Reveal>

        <Reveal direction="up" delay={0.2}>
          <p className="mt-10 mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground">
            Monitoramento, rastreamento e automação reunidos em uma única
            solução. Ideal para{" "}
            <strong className="text-foreground">veículos</strong>,{" "}
            <strong className="text-foreground">empresas</strong> e{" "}
            <strong className="text-foreground">residências</strong>.
          </p>
        </Reveal>

        <Reveal direction="up" delay={0.3}>
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <CTAButton
              href={WHATSAPP_URL}
              variant="whatsapp"
              size="lg"
              icon="whatsapp"
              ariaLabel="Falar agora pelo WhatsApp"
            >
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
          </div>
        </Reveal>
      </div>
    </section>
  );
}
