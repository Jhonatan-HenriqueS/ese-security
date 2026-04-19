import { Reveal } from "./Reveal";
import { Camera, Check, Cpu, MapPinned } from "./Icons";

const services = [
  {
    icon: Camera,
    tag: "Câmeras",
    title: "Videovigilância de alta performance",
    highlight: "monitoramento mais completo",
    items: [
      "Instalação de câmeras IP, analógicas e HD",
      "Acesso remoto via aplicativo",
      "Câmeras 360° com cobertura ampla",
      "Armazenamento em nuvem",
      "Ideal para residências, empresas, garagens, pátios e frotas",
      "Aplicativo próprio para monitoramento",
    ],
  },
  {
    icon: MapPinned,
    tag: "Rastreamento",
    title: "Rastreio em tempo real",
    highlight: "cobertura nacional",
    items: [
      "Rastreamento via chip e satelital",
      "Localização em tempo real",
      "Histórico completo de percurso",
      "Alertas de velocidade e desvio de rota",
      "Veículos leves, pesados, motos e máquinas agrícolas",
      "Aplicativo próprio para visualizar localização",
    ],
  },
  {
    icon: Cpu,
    tag: "Rastreamento & Segurança",
    title: "Controle inteligente na palma da mão",
    highlight: "instalação especializada",
    items: [
      "Integração com app e smartphone",
      "Aplciativo próprio e profissional para cada serviço",
      "Projeto e instalação por equipe especializada",
      "Suporte técnico dedicado",
      "Tenha controle total, monitore e proteja o que mais importa",
    ],
  },
];

export function Services() {
  return (
    <section
      id="servicos"
      aria-labelledby="services-heading"
      className="relative py-20 md:py-28 bg-soft"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal direction="up" className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Serviços
          </span>
          <h2
            id="services-heading"
            className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight"
          >
            Soluções <span className="text-metal">completas</span> para{" "}
            <span className="text-blue-900">proteger</span> {""}
            você
          </h2>
        </Reveal>

        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {services.map((s, i) => (
            <Reveal
              as="li"
              key={s.tag}
              direction="up"
              delay={i * 0.08}
              className="h-full list-none"
            >
              <article className="group relative h-full overflow-hidden rounded-3xl border border-border bg-white p-7 shadow-card transition-all duration-300 hover:scale-[1.015] hover:shadow-card-hover hover:bg-secondary/60">
                <div
                  aria-hidden
                  className="absolute -top-24 -right-24 h-56 w-56 rounded-full opacity-30 blur-3xl"
                  style={{ background: "var(--gradient-metal)" }}
                />
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[image:var(--gradient-metal)] text-primary-foreground shadow-mirror">
                      <s.icon className="h-5 w-5" aria-hidden />
                    </div>
                    <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {s.tag}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-2xl font-semibold leading-tight">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Tecnologia premium com{" "}
                    <span className="text-metal font-semibold">
                      {s.highlight}
                    </span>
                    .
                  </p>

                  <ul className="mt-6 space-y-3">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-start gap-3 text-sm">
                        <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary text-[var(--graphite)]">
                          <Check className="h-3.5 w-3.5" aria-hidden />
                        </span>
                        <span className="text-foreground/90">{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
