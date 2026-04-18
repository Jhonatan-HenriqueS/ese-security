"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import camera from "@/assets/camera-seguranca.jpg";
import rastreamento from "@/assets/rastreamento.webp";
import { Reveal } from "./Reveal";

const SLIDE_MS = 3000;

interface Slide {
  image: StaticImageData;
  alt: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    image: camera,
    alt: "Câmera de segurança IP de alta definição instalada em parede",
    title: "Câmeras de Segurança",
    description:
      "Videovigilância em alta definição, com acesso remoto pelo aplicativo e armazenamento em nuvem.",
  },
  {
    image: rastreamento,
    alt: "Cidade noturna com vários prédios e uma ilustração de vários pontos marcados no mapa representando o rastreamento",
    title: "Rastreamento inteligente",
    description:
      "Tenha total controle via satélite com nosso sistema de rastreamento via aplicativo. Tenha controle na palma da mão.",
  },
];

export function RotatingShowcase() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, SLIDE_MS);

    return () => window.clearInterval(timer);
  }, []);

  const active = slides[index];

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
            Tecnologia <span className="text-metal">visível</span> em ação
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Conheça os pilares da ESE: monitoramento por câmeras e automação
            inteligente. Integrados em uma única plataforma.
          </p>
        </Reveal>

        <Reveal direction="up" delay={0.1}>
          <div className="rounded-3xl bg-secondary/70 p-3 sm:p-5 shadow-card border border-border">
            <figure className="grid grid-cols-1 lg:grid-cols-5 gap-5 lg:gap-8 items-center">
              <div className="lg:col-span-3 relative aspect-[16/10] overflow-hidden rounded-2xl bg-muted">
                <div
                  key={active.title}
                  className="absolute inset-0"
                  style={{
                    animation:
                      "fadeScale 800ms cubic-bezier(0.22, 1, 0.36, 1) both",
                  }}
                >
                  <Image
                    src={active.image}
                    alt={active.alt}
                    fill
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none"
                />
              </div>

              <figcaption className="lg:col-span-2 px-2 sm:px-4 pb-2">
                <div
                  key={active.title}
                  className="will-change-transform"
                  style={{ animation: "fadeUp 500ms ease-out both" }}
                >
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    ESE Solutions
                  </span>
                  <h3 className="mt-2 font-display text-2xl sm:text-3xl font-semibold">
                    <span className="text-metal">{active.title}</span>
                  </h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {active.description}
                  </p>
                </div>

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
                      onClick={() => setIndex(slideIndex)}
                      className="group relative h-1.5 flex-1 rounded-full bg-border overflow-hidden"
                    >
                      <span
                        key={`${slideIndex}-${index}`}
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
