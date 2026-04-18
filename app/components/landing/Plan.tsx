import { Reveal } from "./Reveal";
import { CTAButton } from "./CTAButton";
import { Check, Sparkles } from "./Icons";

const WHATSAPP_URL = "https://wa.me/5569993897171";

const benefits = [
  "Rastreamento via chip e satelital com cobertura nacional",
  "Plataforma web + aplicativo mobile",
  "Localização em tempo real e histórico de rotas",
  "Cerca virtual inteligente",
  "Alertas de velocidade, desvio e movimentação",
  "Suporte técnico especializado",
  "Integração com câmeras e automações ESE",
  "Instalação profissional",
];

export function Plan() {
  return (
    <section
      id="planos"
      aria-labelledby="plan-heading"
      className="relative py-20 md:py-28 bg-hero"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal direction="up" className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Plano ESE
          </span>
          <h2
            id="plan-heading"
            className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight"
          >
            Uma solução <span className="text-metal">completa</span> por um
            <span className="text-blue-900"> valor</span> que cabe no{" "}
            <span className="text-blue-900">bolso</span>
          </h2>
        </Reveal>

        <Reveal direction="up" delay={0.1}>
          <article className="relative overflow-hidden rounded-3xl border border-border bg-white shadow-card-hover">
            <div
              aria-hidden
              className="absolute -top-32 -right-32 h-80 w-80 rounded-full opacity-30 blur-3xl"
              style={{ background: "var(--gradient-metal)" }}
            />

            <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-0">
              <header className="lg:col-span-2 p-8 sm:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-border bg-secondary/40">
                <span className="inline-flex items-center gap-2 rounded-full bg-white border border-border px-3 py-1 text-xs font-medium text-muted-foreground shadow-card">
                  <Sparkles
                    className="h-3.5 w-3.5 text-[var(--graphite)]"
                    aria-hidden
                  />
                  Plano Inteligente
                </span>

                <h3 className="mt-5 font-display text-2xl font-semibold">
                  Monitoramento + Rastreamento + Automação
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Tudo o que você precisa para proteger sua família, sua empresa
                  e seu patrimônio.
                </p>

                {/* comentário  <div className="mt-8">
                  <div className="flex items-end gap-2">
                    <span className="text-sm text-muted-foreground mb-2">
                      R$
                    </span>
                    <span className="font-display text-6xl sm:text-7xl font-semibold tracking-tight text-metal leading-none">
                      99,90
                    </span>
                    <span className="text-sm text-muted-foreground mb-2">
                      /mês
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Sem complicação, ative em poucos passos.
                  </p>
                </div>
              */}

                <div className="mt-8">
                  <CTAButton
                    href={WHATSAPP_URL}
                    variant="primary"
                    size="lg"
                    icon="arrow"
                    className="w-full"
                    ariaLabel="Contratar plano ESE pelo WhatsApp"
                  >
                    Contratar
                  </CTAButton>
                  <p className="mt-3 text-xs text-center text-muted-foreground">
                    Atendimento humano via WhatsApp
                  </p>
                </div>
              </header>

              <section
                aria-labelledby="plan-includes-heading"
                className="lg:col-span-3 p-8 sm:p-10 lg:p-12"
              >
                <h3
                  id="plan-includes-heading"
                  className="font-display text-lg font-semibold"
                >
                  O que está incluso?
                </h3>
                <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[image:var(--gradient-metal)] text-primary-foreground shadow-mirror">
                        <Check className="h-3 w-3" aria-hidden />
                      </span>
                      <span className="text-foreground/90">{b}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
