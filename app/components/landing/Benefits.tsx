import { Reveal } from "./Reveal";
import {
  Aperture,
  BellRing,
  Camera,
  CloudUpload,
  DoorOpen,
  MapPinned,
  Satellite,
  Siren,
  Smartphone,
} from "./Icons";

const items = [
  {
    icon: Satellite,
    title: "Rastreamento via chip e satelital",
    desc: "Monitoramento em tempo real, histórico de rotas, alta precisão e cobertura nacional.",
  },
  {
    icon: Smartphone,
    title: "Plataforma + aplicativo",
    desc: "Painel web, acesso mobile, notificações e gestão simplificada da sua frota.",
  },
  {
    icon: BellRing,
    title: "Relatórios e alertas",
    desc: "Acompanhamento inteligente com relatórios detalhados e alertas personalizados.",
  },
  {
    icon: MapPinned,
    title: "Cerca virtual inteligente",
    desc: "Delimite áreas e receba avisos instantâneos de entrada e saída.",
  },
  {
    icon: Camera,
    title: "Câmeras de monitoramento",
    desc: "Videovigilância em alta definição com acesso remoto e total controle.",
  },
  {
    icon: Aperture,
    title: "Câmeras 360°",
    desc: "Cobertura ampla com redução real de pontos cegos.",
  },
  {
    icon: CloudUpload,
    title: "Armazenamento em nuvem",
    desc: "Gravações seguras e acesso rápido às evidências quando você precisar.",
  },
  {
    icon: DoorOpen,
    title: "Automação de acessos",
    desc: "Portões, acessos e ambientes automatizados com mais praticidade.",
  },
  {
    icon: Siren,
    title: "Alarmes, cercas e sensores",
    desc: "Proteção perimetral, detecção de movimento e reforço de segurança.",
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal direction="up" className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Benefícios
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            Tudo que sua segurança precisa em <span className="text-metal">um só lugar</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <Reveal key={it.title} direction={i % 2 === 0 ? "left" : "right"} delay={i * 0.04}>
              <article className="group h-full rounded-2xl border border-border bg-white p-6 shadow-card transition-all duration-300 hover:scale-[1.025] hover:shadow-card-hover hover:bg-secondary/60">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[image:var(--gradient-metal)] text-primary-foreground shadow-mirror">
                  <it.icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold leading-tight">
                  {it.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
