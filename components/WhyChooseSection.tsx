"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { COMPANY } from "@/lib/constants";

const benefits = [
  "Estoque e logística para agilizar seu pedido",
  "Linha focada em filme stretch e proteção de carga",
  "Atendimento para indústria, comércio e revenda",
  "Orçamento rápido pelo WhatsApp",
  "Envio para todo o Brasil",
];

export function WhyChooseSection() {
  return (
    <section className="bg-primary py-16 text-white md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-2xl font-extrabold md:text-3xl lg:text-4xl">
            Por que escolher a nossa empresa?
          </h2>
          <ul className="mt-10 space-y-4 text-left">
            {benefits.map((b, i) => (
              <motion.li
                key={b}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex items-start gap-3"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/20">
                  <Check className="h-4 w-4 text-accent" aria-hidden />
                </span>
                <span className="text-base text-white/95">{b}</span>
              </motion.li>
            ))}
          </ul>
          <div className="mt-10">
            <CTAButton
              href={COMPANY.whatsappHeroUrl}
              external
              variant="primary"
              ariaLabel="Fale conosco no WhatsApp"
            >
              Fale no WhatsApp
            </CTAButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
