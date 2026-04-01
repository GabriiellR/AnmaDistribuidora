import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { ProductsPageGrid } from "@/components/ProductsPageGrid";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTAButton } from "@/components/CTAButton";
import { COMPANY, whatsappGenericMessage } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Produtos",
  description: `Catálogo ${COMPANY.name}: filme stretch, núcleos e tubos, plástico bolha, fitas e acessórios. Orçamento pelo WhatsApp.`,
};

const orcamentoLink = whatsappGenericMessage(
  `Olá! Vim pelo site da ${COMPANY.name} e gostaria de um orçamento personalizado.`
);

export default function ProdutosPage() {
  return (
    <>
      <PageBanner title="Nossos produtos" />
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-wider text-accent">
            PORTFÓLIO
          </p>
          <h1 className="mt-2 text-3xl font-extrabold text-primary md:text-4xl">
            Nossos produtos
          </h1>
          <p className="mt-3 max-w-2xl text-text-muted">
            Alta qualidade e variedade para o seu negócio. Clique em “Saiba mais”
            para falar no WhatsApp sobre o item desejado.
          </p>
          <div className="mt-10">
            <ProductsPageGrid />
          </div>
        </div>
      </section>

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

      <section className="bg-surface-bg py-14 md:py-16">
        <div className="mx-auto max-w-4xl rounded-2xl border border-surface-border bg-white px-6 py-10 text-center shadow-sm md:px-12">
          <h2 className="text-xl font-extrabold text-primary md:text-2xl">
            Não encontrou o que precisa? Peça um orçamento
          </h2>
          <p className="mt-4 text-text-muted">
            Cada operação é diferente. Envie sua necessidade pelo WhatsApp e
            nossa equipe retorna com opções e prazos.
          </p>
          <div className="mt-8 flex justify-center">
            <CTAButton
              href={orcamentoLink}
              external
              variant="primary"
              ariaLabel="Pedir orçamento no WhatsApp"
            >
              Fale no WhatsApp
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
