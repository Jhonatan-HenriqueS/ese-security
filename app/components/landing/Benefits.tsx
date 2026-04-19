import { Reveal } from "./Reveal";
import { Camera, Cpu, CloudUpload, Smartphone, BellRing, Radar } from "./Icons";

const items = [
  {
    icon: Cpu,
    title: "Rastreamento via chip e satelital",
    desc: "Monitoramento em tempo real, histórico de rotas, alta precisão e cobertura nacional.",
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
  {
    icon: Camera,
    title: "Câmeras de monitoramento",
    desc: "Videovigilância em alta definição com acesso remoto e total controle.",
  },
  {
    icon: CloudUpload,
    title: "Armazenamento em nuvem",
    desc: "Gravações seguras e acesso rápido às evidências quando você precisar.",
  },
  {
    icon: Radar,
    title: "Câmeras 360°",
    desc: "Cobertura ampla com redução real de pontos cegos.",
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

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <Reveal
              as="li"
              key={it.title}
              direction={i % 2 === 0 ? "left" : "right"}
              delay={i * 0.04}
              className="h-full list-none"
            >
              <article className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-benefit-card p-6 text-white shadow-card transition-all duration-300 hover:scale-[1.025] hover:shadow-card-hover hover:brightness-110">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-70"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, color-mix(in oklab, white 8%, transparent), transparent 22%, transparent 78%, color-mix(in oklab, oklch(0.58 0.05 245) 18%, transparent))",
                  }}
                />
                <div className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/12 bg-white/8 text-white shadow-[0_12px_30px_-16px_color-mix(in_oklab,oklch(0.58_0.05_245)_55%,transparent)] backdrop-blur-[2px]">
                  <it.icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="relative mt-5 font-display text-lg font-semibold leading-tight text-white">
                  {it.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-white/76">
                  {it.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
