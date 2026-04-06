import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { SobreContent } from "@/components/SobreContent";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sobre",
  description: `Conheça a ${COMPANY.name}: ${COMPANY.tagline}. Distribuição de embalagens, estrutura em Contagem-MG e atendimento em todo o Brasil.`,
};

export default function SobrePage() {
  return (
    <>
      <PageBanner title="Quem Somos" />
      <SobreContent />
    </>
  );
}
