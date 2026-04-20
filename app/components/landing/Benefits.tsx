import { Reveal } from "./Reveal";
import {
  Camera,
  Cpu,
  CloudUpload,
  Smartphone,
  BellRing,
  Radar,
  MapPinned,
} from "./Icons";

const benefitCategories = [
  {
    id: "rastreamento",
    title: "Rastreamento",
    description: "Localização, rotas e controle em tempo real.",
    items: [
      {
        icon: Cpu,
        title: "Rastreamento via chip e satelital",
        desc: "Monitoramento em tempo real, histórico de rotas, alta precisão e cobertura nacional. Tenha tudo isso integrado .",
      },
      {
        icon: Smartphone,
        title: "Plataforma + aplicativo",
        desc: "Painel web, acesso mobile, notificações e gestão simplificada da sua frota e de suas câmeras.",
      },
      {
        icon: BellRing,
        title: "Relatórios e alertas",
        desc: "Acompanhamento inteligente com relatórios detalhando trajetos, velocidade, paradas e entre outras diversas funcionalidades.",
      },
    ],
  },
  {
    id: "cameras",
    title: "Câmeras",
    description: "Monitoramento visual com cobertura ampla e acesso remoto.",
    items: [
      {
        icon: Camera,
        title: "Câmeras de monitoramento",
        desc: "Videovigilância em alta definição com acesso remoto pelo aplicativo. Tenha total controle de seus bens.",
      },
      {
        icon: Radar,
        title: "Câmeras 360°",
        desc: "Cobertura ampla com redução real de pontos cegos. Ideal para monitorar áreas extensas como garagens, pátios...",
      },
      {
        icon: CloudUpload,
        title: "Armazenamento em nuvem",
        desc: "Gravações seguras e acesso rápido às evidências quando você precisar.",
      },
    ],
  },
];

export function Benefits() {
  return (
    <section
      id="beneficios"
      aria-labelledby="benefits-heading"
      className="relative py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal direction="up" className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Benefícios
          </span>
          <h2
            id="benefits-heading"
            className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight"
          >
            Tudo que sua{" "}
            <span className="text-blue-900 [text-shadow:0_0_18px_color-mix(in_oklab,rgb(30_58_138)_42%,transparent),0_0_34px_color-mix(in_oklab,rgb(30_58_138)_22%,transparent)]">
              {" "}
              segurança{" "}
            </span>
            precisa em <span className="text-metal">um só lugar</span>
          </h2>
        </Reveal>

        <div className="space-y-14">
          {benefitCategories.map((category, categoryIndex) => (
            <section
              key={category.id}
              aria-labelledby={`benefits-${category.id}-heading`}
            >
              <Reveal
                direction="up"
                delay={categoryIndex * 0.04}
                className="mb-5"
              >
                <h3
                  id={`benefits-${category.id}-heading`}
                  className="mt-2 font-display text-2xl font-semibold tracking-tight text-blue-900 [text-shadow:0_0_18px_color-mix(in_oklab,rgb(30_58_138)_42%,transparent),0_0_34px_color-mix(in_oklab,rgb(30_58_138)_22%,transparent)]"
                >
                  {category.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                  {category.description}
                </p>
              </Reveal>

              <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((it, itemIndex) => (
                  <Reveal
                    as="li"
                    key={it.title}
                    direction={itemIndex % 2 === 0 ? "left" : "right"}
                    delay={(categoryIndex + itemIndex) * 0.04}
                    className="h-full list-none"
                  >
                    <article className="group h-full overflow-hidden rounded-2xl border border-sky-100/80 bg-benefit-card p-6 shadow-card transition-all duration-300 hover:scale-[1.025] hover:shadow-card-hover">
                      <div className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl border border-sky-200/80 bg-white/80 text-sky-900 shadow-[0_12px_30px_-16px_color-mix(in_oklab,oklch(0.76_0.04_220)_45%,transparent)] backdrop-blur-[2px]">
                        <it.icon className="h-5 w-5" aria-hidden />
                      </div>
                      <h4 className="relative mt-5 font-display text-lg font-semibold leading-tight text-foreground">
                        {it.title}
                      </h4>
                      <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                        {it.desc}
                      </p>
                    </article>
                  </Reveal>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
