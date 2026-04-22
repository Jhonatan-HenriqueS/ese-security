"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import camera from "@/assets/camera-seguranca.jpg";
import rastreamento from "@/assets/rastreamento.webp";
import { Reveal } from "./Reveal";

const SLIDE_MS = 5000;

interface Slide {
  image: StaticImageData;
  alt: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  /*
  {
    image: camera,
    alt: "Câmera de segurança IP de alta definição instalada em parede",
    title: "Câmeras de Segurança",
    description:
      "Videovigilância em alta definição. Controle todas as câmeras com acesso remoto pelo aplicativo e armazenamento em nuvem.",
  },
*/
  {
    image: rastreamento,
    alt: "Cidade noturna com vários prédios e uma ilustração de vários pontos marcados no mapa representando o rastreamento",
    title: "Rastreamento inteligente",
    description:
      "Tenha controle via satélite de seus veículos. Tenha acesso a rotas, velocidade, histórico de trajetos e alertas de desvios.",
  },
];

export function RotatingShowcase() {
  /*
  const [index, setIndex] = useState(0);
  const [cycleKey, setCycleKey] = useState(0);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIndex((current) => (current + 1) % slides.length);
      setCycleKey((current) => current + 1);
    }, SLIDE_MS);

    return () => window.clearTimeout(timer);
  }, [index, cycleKey]);

  const handleSelectSlide = (slideIndex: number) => {
    setIndex(slideIndex);
    setCycleKey((current) => current + 1);
  };

  const handleAdvanceSlide = () => {
    setIndex((current) => (current + 1) % slides.length);
    setCycleKey((current) => current + 1);
  };

  const active = slides[index];
 */

  return (
    <section
      aria-labelledby="showcase-heading"
      className="relative py-20 md:py-28 bg-soft"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal direction="up" className="text-center mb-12">
          <h2
            id="showcase-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight"
          >
            <span className="text-metal">Concheça os </span>{" "}
            <span className="text-blue-900 [text-shadow:0_0_18px_color-mix(in_oklab,rgb(30_58_138)_42%,transparent),0_0_34px_color-mix(in_oklab,rgb(30_58_138)_22%,transparent)]">
              principais
            </span>{" "}
            {""}
            <span className="text-metal">serviços</span>{" "}
          </h2>
          {/*
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            <strong className="text-foreground">
              Conheça os pilares da ESE:
            </strong>{" "}
            Monitoramento por câmeras e rastreamento inteligente. Tenha acesso
            ao seu sistema em qualquer lugar.
          </p>
          */}
        </Reveal>

        <Reveal direction="up" delay={0.1}>
          <div className="rounded-3xl border border-white/70 bg-secondary/70 p-3 shadow-showcase-metal sm:p-5">
            <figure className="grid grid-cols-1 lg:grid-cols-5 gap-5 lg:gap-8 items-center">
              <button
                type="button"
                //onClick={handleAdvanceSlide}
                aria-label="Mostrar próxima imagem"
                className="lg:col-span-3 relative aspect-[16/10] overflow-hidden rounded-2xl bg-muted cursor-pointer"
              >
                <div
                  // key={active.title}
                  className="absolute inset-0"
                  style={{
                    animation:
                      "fadeScale 800ms cubic-bezier(0.22, 1, 0.36, 1) both",
                  }}
                >
                  <Image
                    src={rastreamento}
                    //src={active.image}
                    //alt={active.alt}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none"
                />
              </button>

              <figcaption className="lg:col-span-2 px-2 sm:px-4 pb-2">
                <div
                  //key={active.title}
                  className="will-change-transform"
                  style={{ animation: "fadeUp 500ms ease-out both" }}
                >
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    ESE Solutions
                  </span>
                  <h3 className="mt-2 font-display text-2xl sm:text-3xl font-semibold">
                    <span className="text-metal">
                      {/*{active.title}*/}
                      Rastreamento inteligente
                    </span>
                  </h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {/* {active.description}*/}
                    Tenha controle via satélite de seus veículos. Tenha acesso a
                    rotas, velocidade, histórico de trajetos e alertas de
                    desvios.
                  </p>
                </div>

                {/*
                <div
                  className="mt-6 flex gap-2"
                  role="tablist"
                  aria-label="Indicador de slides"
                >
                  {slides.map((slide, slideIndex) => (
                    <button
                      key={slide.title}
                      type="button"
                      role="tab"
                      aria-selected={slideIndex === index}
                      aria-label={`Mostrar ${slide.title}`}
                      onClick={() => handleSelectSlide(slideIndex)}
                      className="group relative h-1.5 flex-1 rounded-full bg-border overflow-hidden"
                    >
                      <span
                        key={`${slideIndex}-${index}-${cycleKey}`}
                        className="absolute inset-y-0 left-0 bg-[image:var(--gradient-metal)] rounded-full"
                        style={{
                          width:
                            slideIndex === index
                              ? "100%"
                              : slideIndex < index
                                ? "100%"
                                : "0%",
                          animation:
                            slideIndex === index
                              ? `slideFill ${SLIDE_MS}ms linear forwards`
                              : undefined,
                        }}
                      />
                    </button>
                  ))}
                </div>
               */}
              </figcaption>
            </figure>
          </div>
        </Reveal>
      </div>

      <style>{`
        @keyframes fadeScale {
          from {
            opacity: 0;
            transform: scale(1.04);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideFill {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
