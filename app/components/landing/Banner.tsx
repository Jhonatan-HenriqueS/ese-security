import { Reveal } from "./Reveal";

export function Banner() {
  return (
    <section aria-label="Diferenciais ESE" className="relative py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal direction="up">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-[image:var(--gradient-metal)] p-8 sm:p-12 text-center shadow-mirror">
            <div
              aria-hidden
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(ellipse at top, white, transparent 60%)",
              }}
            />
            <p className="relative font-display text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight text-white">
              <span className="opacity-80">Mais</span> segurança{" "}
              <span className="opacity-80">,</span> controle{" "}
              <span className="opacity-80">e</span> tecnologia.
            </p>
            <p className="relative mt-3 text-white/75 max-w-2xl mx-auto text-sm sm:text-base">
              Proteção em tempo real para casas, empresas e veículos. Uma
              solução moderna, inteligente e acessível.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
