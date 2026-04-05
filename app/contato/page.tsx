import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { ContactForm } from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock, Instagram, ShoppingBag } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contato",
  description: `Fale com a ${COMPANY.name}: telefone, WhatsApp, e-mail, endereço em Contagem-MG e horário de atendimento.`,
};

export default function ContatoPage() {
  return (
    <>
      <PageBanner title="Contato" />
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2 md:px-6 lg:gap-16 lg:px-8">
          <ContactForm />
          <div>
            <h2 className="text-xl font-bold text-primary md:text-2xl">
              Fale com a gente
            </h2>
            <p className="mt-2 text-text-muted">Entre em contato</p>
            <ul className="mt-8 space-y-4">
              <li className="flex gap-3 rounded-xl border border-surface-border bg-surface-bg p-4">
                <MapPin className="h-6 w-6 shrink-0 text-primary" aria-hidden />
                <span className="text-sm text-text">{COMPANY.address}</span>
              </li>
              <li className="flex gap-3 rounded-xl border border-surface-border bg-surface-bg p-4">
                <Phone className="h-6 w-6 shrink-0 text-primary" aria-hidden />
                <a
                  href={`tel:${COMPANY.phoneTel}`}
                  className="text-sm font-medium text-text transition-all duration-200 hover:text-primary"
                >
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex gap-3 rounded-xl border border-surface-border bg-surface-bg p-4">
                <Mail className="h-6 w-6 shrink-0 text-primary" aria-hidden />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-sm text-text transition-all duration-200 hover:text-primary"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex gap-3 rounded-xl border border-surface-border bg-surface-bg p-4">
                <Clock className="h-6 w-6 shrink-0 text-primary" aria-hidden />
                <span className="text-sm text-text">
                  Horário: {COMPANY.hours}
                </span>
              </li>
            </ul>
            <div className="mt-8">
              <p className="text-sm font-semibold text-text">Redes</p>
              <div className="flex gap-3">
                <a
                  href={COMPANY.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 rounded-lg border border-surface-border px-4 py-3 text-primary transition-all duration-200 hover:bg-surface-bg"
                >
                  <Instagram className="h-5 w-5" />
                  @anma.distribuidora
                </a>

                <a
                  href="https://shopee.com.br/anmadistribuidora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 rounded-lg border border-surface-border px-4 py-3 text-primary transition-all duration-200 hover:bg-surface-bg"
                >
                  <ShoppingBag className="h-5 w-5" />
                  Shoppe
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
