import { Reveal } from "./Reveal";
import { Camera, CloudUpload, Radar } from "./Icons";

const benefitCategories = [
  {
    id: "cameras",
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
        desc: "Gravações seguras e acesso rápido às evidências quando você precisar, tudo em um único aplicativo.",
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
            Câmeras ESE
          </span>
          <h2
            id="benefits-heading"
            className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight"
          >
            Câmeras para{""}
            <span className="text-blue-900 [text-shadow:0_0_18px_color-mix(in_oklab,rgb(30_58_138)_42%,transparent),0_0_34px_color-mix(in_oklab,rgb(30_58_138)_22%,transparent)]">
              {""} monitorar
            </span>{" "}
            com <span className="text-metal">mais controle</span>
          </h2>
        </Reveal>

        <div className="space-y-14">
          {benefitCategories.map((category, categoryIndex) => (
            <section key={category.id} aria-label="Recursos de câmeras ESE">
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
