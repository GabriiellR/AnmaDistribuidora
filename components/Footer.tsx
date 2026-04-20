import Link from "next/link";
import { Instagram, ShoppingBag } from "lucide-react";
import { COMPANY } from "@/lib/constants";

const footerLinks = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/produtos", label: "Produtos" },
  { href: "/contato", label: "Contato" },
];

export function Footer() {
  return (
    <footer className="bg-footer text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-xl font-extrabold text-white">{COMPANY.name}</p>
            <p className="mt-1 text-sm font-medium text-accent">{COMPANY.tagline}</p>
            <p className="mt-3 text-sm leading-relaxed text-white/80">
              {COMPANY.description}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-accent">
              Telefone e WhatsApp
            </h3>
            <p className="mt-3 text-sm text-white/90">
              <span className="text-white/60">Fixo: </span>
              <a
                href={`tel:${COMPANY.phoneTel}`}
                className="transition-all duration-200 hover:text-accent"
              >
                {COMPANY.phone}
              </a>
            </p>
            <p className="mt-2 text-sm text-white/90">
              <span className="text-white/60">WhatsApp: </span>
              <a
                href={COMPANY.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-200 hover:text-accent"
              >
                {COMPANY.whatsappDisplay}
              </a>
            </p>
            <p className="mt-2 text-sm">
              <a
                href={`mailto:${COMPANY.email}`}
                className="text-white/90 transition-all duration-200 hover:text-accent"
              >
                {COMPANY.email}
              </a>
            </p>
            <p className="mt-2 text-sm text-white/70">{COMPANY.coverage}</p>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-accent">
              Endereço e horário
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/80">
              {COMPANY.addressShort}
            </p>
            <p className="mt-2 text-sm text-white/80">{COMPANY.hours}</p>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-accent">
              Links úteis
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/90 transition-all duration-200 hover:text-accent hover:underline"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 border-t border-white/10 pt-8 sm:justify-start">
          <a
            href={COMPANY.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 text-white/80 transition-all duration-200 hover:bg-white/10 hover:text-white"
            aria-label="Instagram ANMA Distribuidora"
          >
            <Instagram className="h-6 w-6" />
          </a>
          <span className="text-sm text-white/60">@anma.distribuidora</span>


          <a
            href="https://shopee.com.br/anmadistribuidora"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 text-white/80 transition-all duration-200 hover:bg-white/10 hover:text-white"
            aria-label="Instagram ANMA Distribuidora"
          >
            <ShoppingBag className="h-6 w-6" />
          </a>
          <span className="text-sm text-white/60">Shopee</span>

        </div>

        <p className="mt-8 text-center text-sm text-white/60 sm:text-left">
          © {COMPANY.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
