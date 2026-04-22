import type { Metadata, Viewport } from "next";
import { Banner } from "@/components/landing/Banner";
import { Benefits } from "@/components/landing/Benefits";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Plan } from "@/components/landing/Plan";
import { RotatingShowcase } from "@/components/landing/RotatingShowcase";
import { Services } from "@/components/landing/Services";
import { TrackingMonitoring } from "@/components/landing/TrackingMonitoring";

const SITE_TITLE =
  "ESE | Rastreamento Veicular, Câmeras de Segurança e Automação Inteligente";
const SITE_DESCRIPTION =
  "Soluções ESE em rastreamento veicular, câmeras de segurança, automação residencial e comercial, alarmes e cercas elétricas. Monitoramento em tempo real, controle de frota e proteção 24h.";
const SITE_URL = "https://ese.com.br";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ESE",
  description: SITE_DESCRIPTION,
  image: `${SITE_URL}/og-image.jpg`,
  telephone: "+55 69 99389-7171",
  url: SITE_URL,
  areaServed: "BR",
  priceRange: "$$",
  serviceType: [
    "Rastreamento veicular",
    "Câmeras de segurança",
    "Automação residencial",
    "Automação comercial",
    "Alarmes e cercas elétricas",
    "Monitoramento",
    "Controle de frota",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    "rastreamento veicular",
    "câmeras de segurança",
    "automação residencial",
    "automação comercial",
    "alarmes",
    "cercas elétricas",
    "monitoramento",
    "controle de frota",
    "ESE",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#3a3a3f",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="conteudo-principal" className="flex-1">
        <Hero />
        <RotatingShowcase />
        <Banner />
        <TrackingMonitoring />
        <Services />
        {/*
        <Benefits />
       */}
        <Plan />
      </main>
      <Footer />
    </>
  );
}
