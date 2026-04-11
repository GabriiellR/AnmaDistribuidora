"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { NossaEstruturaMedia } from "@/components/NossaEstruturaMedia";
import { SitePhoto } from "@/components/SitePhoto";
import { COMPANY } from "@/lib/constants";
import { SITE_IMAGES } from "@/lib/site-images";

const mvv = [
  {
    title: "Missão",
    body: "Distribuir embalagens e insumos com qualidade, agilidade e preço justo, apoiando empresas e comércios a protegerem suas cargas e otimizarem a logística.",
  },
  {
    title: "Visão",
    body: "Ser referência em distribuição de filme stretch e soluções de embalagem em Minas Gerais e no Brasil, reconhecidos pelo atendimento e pela confiança dos clientes.",
  },
  {
    title: "Valores",
    body: (
      <ul className="mt-2 list-disc space-y-1 pl-5 text-text-muted">
        <li>Transparência no orçamento e nas condições</li>
        <li>Compromisso com prazo e com o cliente</li>
        <li>Respeito às pessoas e parceiros</li>
        <li>Foco em soluções sustentáveis e eficientes</li>
      </ul>
    ),
  },
];

const parceiroBenefits = [
  "Estoque para atender pedidos com agilidade",
  "Linha voltada a filme stretch e proteção de carga",
  "Atendimento B2B e B2C",
  "Entrega em todo o Brasil",
];

export function SobreContent() {
  return (
    <>
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-h-[400px] lg:max-h-[480px]"
            >
              <SitePhoto
                src={SITE_IMAGES.sobrePrincipal}
                alt={`${COMPANY.name} — quem somos`}
                className="aspect-square max-h-[400px] rounded-2xl bg-gray-200 lg:max-h-[480px]"
                sizes="(max-width: 1024px) 100vw, 45vw"
                fallback={<div className="h-full min-h-[280px] bg-gray-200" />}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-bold uppercase tracking-wider text-accent">
                SOBRE A
              </p>
              <h1 className="mt-2 text-3xl font-extrabold text-primary md:text-4xl">
                {COMPANY.name}
              </h1>
              <p className="mt-4 font-bold text-text">{COMPANY.tagline}</p>
              <p className="mt-4 text-text-muted text-left">
                A Anma nasce da visão empreendedora de dois profissionais do 
setor financeiro, mineiros, que identificaram a oportunidade de 
transformar o mercado de embalagens por meio de inovação, 
eficiência e responsabilidade ambiental.
Nosso propósito é oferecer soluções em embalagens 
inovadoras e sustentáveis, que atendam às necessidades dos 
clientes com qualidade, segurança e inteligência operacional. 
Atuamos com foco na excelência dos produtos e serviços, 
comprometidos com a redução dos impactos ambientais e 
com a adoção de práticas comerciais éticas e transparentes.
              </p>
              {/* <p className="mt-4 text-text-muted">
                Acreditamos em {COMPANY.tagline.toLowerCase()}: buscamos
                eficiência no uso de materiais, parcerias de confiança e
                atendimento direto — principalmente pelo WhatsApp — para tornar
                seu pedido simples e rápido.
              </p> */}
              <div className="mt-8">
                <CTAButton href={COMPANY.whatsappUrl} external variant="primary">
                  Chamar no WhatsApp
                </CTAButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-surface-bg py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {mvv.map((card, i) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-xl border border-surface-border border-t-4 border-t-accent bg-white p-6 shadow-sm"
              >
                <h2 className="text-xl font-bold text-primary">{card.title}</h2>
                {typeof card.body === "string" ? (
                  <p className="mt-3 text-text-muted">{card.body}</p>
                ) : (
                  card.body
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-2xl font-extrabold text-primary md:text-3xl">
                Nossa estrutura
              </h2>
              <p className="mt-4 text-text-muted">
                Nossa empresa está localizada na cidade de Contagem em Minas Gerais.
                Contamos com amplo portifólio de produtos para atender a todo tipo de negócio,
                desde transportadoras, armazéns logísticos, supermercados, hortifrútis e indústrias
                em geral. 
              </p>
              <p className="mt-4 text-text-muted">Entrega própria em todo Brasil. Atendemos todos os tipos de volumes,
                conforme disponibilidade do produto — sempre com transparência no pedido e prazo.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 w-full lg:order-2"
            >
              <NossaEstruturaMedia />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-surface-bg py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-2xl font-extrabold text-primary md:text-3xl">
              Um parceiro para sua operação de embalagem
            </h2>
            <ul className="mt-8 space-y-3 text-left">
              {parceiroBenefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-text">{b}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-text-muted">
              Trabalhamos com filme stretch, embalagens industriais em geral, fitas de arquear e acessórios, 
              ideais para quem precisa proteger produtos e unitizar paletes com segurança.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
