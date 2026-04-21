import Image from "next/image";
import tracking from "@/assets/Rastreamento.jpg";
import { Reveal } from "./Reveal";
import { BellRing, Check, Cpu, MapPinned, Radar, Smartphone } from "./Icons";

const trackingFeatures = [
  {
    icon: MapPinned,
    title: "Localização em tempo real",
    description:
      "Acompanhe seus veículos com precisão e tenha mais controle sobre cada deslocamento.",
  },
  {
    icon: Radar,
    title: "Histórico de rotas",
    description:
      "Veja trajetos, paradas e horários com clareza para maior segurança.",
  },
  {
    icon: Smartphone,
    title: "Aplicativo próprio",
    description: "Monitore tudo pelo celular com praticidade e agilidade.",
  },
  {
    icon: BellRing,
    title: "Alertas inteligentes",
    description:
      "Receba avisos importantes antes que pequenos riscos virem problemas.",
  },
];

const trackingHighlights = [
  "Rastreamento via chip e satelital com cobertura nacional",
  "Gestão simplificada para veículos e frotas",
  "Relatórios de rotas, paradas e velocidades",
  "Proteção confiável para seu patrimônio e operação",
];

export function TrackingMonitoring() {
  return (
    <section
      id="rastreamento"
      aria-labelledby="tracking-monitoring-heading"
      className="relative py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal direction="up" className="mx-auto mb-14 max-w-3xl text-center">
          <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Rastreamento ESE
          </span>
          <h2
            id="tracking-monitoring-heading"
            className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl"
          >
            Controle seus veículos com{" "}
            <span className="text-metal">precisão</span> e acompanhe tudo pelo{" "}
            <span className="text-blue-900 [text-shadow:0_0_18px_color-mix(in_oklab,rgb(30_58_138)_42%,transparent),0_0_34px_color-mix(in_oklab,rgb(30_58_138)_22%,transparent)]">
              aplicativo
            </span>
          </h2>
        </Reveal>

        <Reveal direction="up" delay={0.1}>
          <article className="overflow-hidden rounded-3xl border border-border bg-white shadow-card-hover">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <figure className="relative min-h-[320px] overflow-hidden bg-muted sm:min-h-[420px] lg:col-span-2 lg:min-h-full">
                <Image
                  src={tracking}
                  alt="Mapa digital com pontos de localização representando rastreamento em tempo real"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent lg:bg-gradient-to-r"
                />
                <figcaption className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/25 bg-white/85 p-4 shadow-card backdrop-blur">
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Posição, rota e alertas
                  </span>
                  <p className="mt-2 font-display text-lg font-semibold leading-tight text-foreground">
                    Rastreamento conectado para acompanhar seus veículos com
                    mais controle.
                  </p>
                </figcaption>
              </figure>

              <div className="lg:col-span-3">
                <div className="border-b border-sky-100/80 bg-benefit-card p-7 sm:p-9 lg:p-10">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[image:var(--gradient-metal)] text-primary-foreground shadow-mirror">
                    <Cpu className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold leading-tight sm:text-3xl">
                    Rastreamento profissional para mais{" "}
                    <span className="text-blue-900 [text-shadow:0_0_18px_color-mix(in_oklab,rgb(30_58_138)_42%,transparent),0_0_34px_color-mix(in_oklab,rgb(30_58_138)_22%,transparent)]">
                      Segurança
                    </span>{" "}
                    e{" "}
                    <span className="text-blue-900 [text-shadow:0_0_18px_color-mix(in_oklab,rgb(30_58_138)_42%,transparent),0_0_34px_color-mix(in_oklab,rgb(30_58_138)_22%,transparent)]">
                      Controle
                    </span>
                    .
                  </h3>
                  <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {trackingHighlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-3 text-sm"
                      >
                        <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[image:var(--gradient-metal)] text-primary-foreground shadow-mirror">
                          <Check className="h-3 w-3" aria-hidden />
                        </span>
                        <span className="text-foreground/90">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-7 sm:p-9 lg:p-10">
                  <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    {trackingFeatures.map((feature) => (
                      <li key={feature.title} className="flex gap-4">
                        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-sky-200/80 bg-white/80 text-sky-900 shadow-[0_12px_30px_-16px_color-mix(in_oklab,oklch(0.76_0.04_220)_45%,transparent)]">
                          <feature.icon className="h-5 w-5" aria-hidden />
                        </span>
                        <span>
                          <strong className="block font-display text-base font-semibold leading-tight text-foreground">
                            {feature.title}
                          </strong>
                          <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
                            {feature.description}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
