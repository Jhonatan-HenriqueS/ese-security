import { Reveal } from "./Reveal";

export function Banner() {
  return (
    <aside
      aria-labelledby="banner-heading"
      className="relative py-16 md:py-20"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal direction="up">
          <section className="relative overflow-hidden rounded-3xl border border-border bg-[image:var(--gradient-metal)] p-8 sm:p-12 text-center shadow-mirror">
            <div
              aria-hidden
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(ellipse at top, white, transparent 60%)",
              }}
            />
            <h2
              id="banner-heading"
              className="relative font-display text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight text-white"
            >
              <span className="opacity-80">Mais</span> segurança{" "}
              <span className="opacity-80">,</span> controle{" "}
              <span className="opacity-80">e</span> tecnologia.
            </h2>
            <p className="relative mt-3 text-white/75 max-w-2xl mx-auto text-sm sm:text-base">
              Proteção em tempo real para casas, empresas e veículos. Uma
              solução moderna, inteligente e acessível.
            </p>
          </section>
        </Reveal>
      </div>
    </aside>
  );
}
