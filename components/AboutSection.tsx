"use client";

import { motion } from "framer-motion";
import { Zap, CheckCircle2, Handshake, Banknote } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { SitePhoto } from "@/components/SitePhoto";
import { COMPANY } from "@/lib/constants";
import { SITE_IMAGES } from "@/lib/site-images";

const pillars = [
  { icon: Zap, text: "Agilidade no atendimento" },
  { icon: CheckCircle2, text: "Produtos para operação real" },
  { icon: Handshake, text: "B2B e B2C" },
  { icon: Banknote, text: "Orçamento pelo WhatsApp" },
];

export function AboutSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="order-2 lg:order-1"
          >
            <SitePhoto
              src={SITE_IMAGES.sobreHome}
              alt={`${COMPANY.name} — estoque e produtos`}
              className="aspect-square max-h-[420px] rounded-2xl bg-gray-200 lg:max-h-none"
              sizes="(max-width: 1024px) 100vw, 50vw"
              fallback={<div className="h-full min-h-[240px] bg-gray-200" />}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="order-1 lg:order-2"
          >
            <p className="text-sm font-bold uppercase tracking-wider text-accent">
              SOBRE A
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-primary md:text-4xl">
              {COMPANY.name}
            </h2>
            <p className="mt-4 font-bold text-text">{COMPANY.tagline}</p>
            <p className="mt-4 text-text-muted text-justify">
              A {COMPANY.name} atua na distribuição de embalagens e insumos para
              quem precisa proteger, unitizar e transportar cargas com segurança.
              Com estoque e estrutura em Contagem (MG), atendemos desde o comércio
              local até empresas em todo o Brasil, com foco em filme stretch,
              plástico bolha, fitas e itens complementares.
            </p>
            <p className="mt-4 text-text-muted text-justify">
              Nosso compromisso é unir qualidade, prazo e transparência no
              orçamento — com atendimento direto pelo WhatsApp e entrega
              organizada com transportadoras parceiras.
            </p>
            <CTAButton href="/sobre" variant="secondary" className="mt-8">
              Saiba mais
            </CTAButton>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6">
              {pillars.map((p) => (
                <div
                  key={p.text}
                  className="flex items-start gap-2 rounded-lg border border-surface-border bg-surface-bg p-3"
                >
                  <p.icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm font-medium text-text">{p.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
