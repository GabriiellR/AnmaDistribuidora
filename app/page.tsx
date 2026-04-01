import type { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { AboutSection } from "@/components/AboutSection";
import { ProductsSection } from "@/components/ProductsSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { ContactStrip } from "@/components/ContactStrip";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Início",
  description: `${COMPANY.name}: ${COMPANY.tagline}. Filme stretch, embalagens e insumos. ${COMPANY.coverage}.`,
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <ProductsSection />
      <WhyChooseSection />
      <ContactStrip />
    </>
  );
}
