import Image from "next/image";
import logo from "@/assets/ese-logo.png";
import MsgLogo from "@/assets/msgLogo.svg";

import { CTAButton } from "./CTAButton";
import { ShieldCheck } from "./Icons";

const WHATSAPP_URL = "https://wa.me/5569993897171";

export function Footer() {
  return (
    <footer className="relative bg-[image:var(--gradient-metal)] text-white">
      <div className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <section aria-label="Sobre a ESE">
            <div className="flex items-center gap-3">
              <Image
                src={logo}
                alt="Logo ESE"
                width={48}
                height={48}
                className="h-12 w-12 object-contain bg-white/90 rounded-xl p-1.5 backdrop-blur"
              />
            </div>
            <p className="mt-5 text-white/75 text-sm leading-relaxed max-w-sm">
              A ESE entrega tecnologia, segurança e controle inteligente para
              residências, empresas e frotas, com instalação profissional e
              suporte dedicado.
            </p>
          </section>

          <section aria-labelledby="footer-trust-heading">
            <h2
              id="footer-trust-heading"
              className="font-display text-base font-semibold text-white/90"
            >
              Autoridade e confiança
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-white/80" aria-hidden />
                Equipe técnica especializada
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-white/80" aria-hidden />
                Tecnologia de monitoramento de ponta
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-white/80" aria-hidden />
                Atendimento próximo, humano e ágil
              </li>
            </ul>
          </section>

          <address className="lg:justify-self-end w-full lg:max-w-xs not-italic">
            <h2 className="font-display text-base font-semibold text-white/90">
              Pronto para proteger o que é seu?
            </h2>
            <p className="mt-3 text-sm text-white/70">
              Fale com nossa equipe agora mesmo pelo WhatsApp.
            </p>
            <div className="mt-5">
              <CTAButton
                href={WHATSAPP_URL}
                variant="whatsapp"
                size="lg"
                className="w-full"
                ariaLabel="Falar com a ESE no WhatsApp"
              >
                <Image
                  src={MsgLogo}
                  alt="WhatsApp Logo"
                  width={1}
                  height={1}
                  className="h-10 w-10 shrink-0 object-contain"
                />{" "}
                Fale conosco
              </CTAButton>
            </div>
          </address>
        </div>

        <div className="mt-12 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>
            © {new Date().getFullYear()} ESE — Segurança, Rastreamento e
            Automação.
          </p>
          <p>Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
