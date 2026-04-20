import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { SobreContent } from "@/components/SobreContent";
import { COMPANY } from "@/lib/constants";
import { FAQAccordion } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Sobre",
  description: `Conheça a ${COMPANY.name}: ${COMPANY.tagline}. Distribuição de embalagens, estrutura em Contagem-MG e atendimento em todo o Brasil.`,
};

export default function SobrePage() {
  return (
    <>
      <PageBanner title="Quem Somos" />
      <SobreContent />
      <section className="border-t border-surface-border bg-surface-bg py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-extrabold text-primary md:text-3xl">
            Perguntas frequentes
          </h2>
          <div className="mt-10">
            <FAQAccordion />
          </div>
        </div>
      </section>
    </>
  );
}
