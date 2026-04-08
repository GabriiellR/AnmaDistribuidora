"use client";

import { motion } from "framer-motion";
import { Package } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { SitePhoto } from "@/components/SitePhoto";
import { COMPANY } from "@/lib/constants";
import { SITE_IMAGES } from "@/lib/site-images";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-[#293b29] text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-20 lg:gap-16 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
            Desde {COMPANY.foundedYear} • {COMPANY.coverage}
          </p>
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl lg:text-5xl">
            Distribuição de embalagens para empresas e comércio em todo o Brasil.
          </h1>
          <p className="mt-4 text-lg font-semibold text-white md:text-xl">
            {COMPANY.tagline}
          </p>
          <p className="mt-5 max-w-xl text-base text-white/90 md:text-lg">
            Filme stretch, proteção de carga, fitas e insumos para paletização
            com estoque, agilidade e atendimento direto pelo WhatsApp.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CTAButton
              href={COMPANY.whatsappHeroUrl}
              external
              variant="primary"
              className="min-h-[48px]"
              ariaLabel="Fale conosco no WhatsApp"
            >
              Fale no WhatsApp
            </CTAButton>
            <CTAButton href="/produtos" variant="outlineWhite" className="min-h-[48px]">
              Ver produtos
            </CTAButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex justify-center md:justify-end"
        >
          <SitePhoto
            src={SITE_IMAGES.hero}
            alt={`${COMPANY.name} — embalagens e distribuição`}
            className="aspect-square w-full max-w-md rounded-2xl ring-2 ring-white/20"
            sizes="(max-width: 768px) 100vw, 400px"
            priority
            fallback={
              <div className="flex h-full min-h-[280px] items-center justify-center bg-white/10 p-12 backdrop-blur-sm md:min-h-0">
                <Package
                  className="h-40 w-40 text-white/90 md:h-48 md:w-48"
                  strokeWidth={1}
                  aria-hidden
                />
              </div>
            }
          />
        </motion.div>
      </div>
    </section>
  );
}
