"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { COMPANY } from "@/lib/constants";
import { SITE_IMAGES } from "@/lib/site-images";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/produtos", label: "Produtos" },
  { href: "/contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [logoOk, setLogoOk] = useState(true);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2 leading-tight">
          <span className="sr-only">{COMPANY.name}</span>
          {logoOk ? (
            <Image
              src={SITE_IMAGES.logo}
              alt={COMPANY.name}
              width={140}
              height={48}
              className="h-10 w-auto max-w-[140px] object-contain object-left md:h-12"
              onError={() => setLogoOk(false)}
            />
          ) : (
            <span className="flex flex-col leading-tight">
              <span className="text-xl font-extrabold tracking-tight text-primary md:text-2xl">
                ANMA
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary/80 md:text-xs">
                Distribuidora
              </span>
            </span>
          )}
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Principal">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-text transition-all duration-200 hover:text-primary hover:underline hover:decoration-accent hover:decoration-2 hover:underline-offset-4"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={COMPANY.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent-dark sm:inline-flex"
          >
            Solicitar orçamento
          </a>

          <button
            type="button"
            className="rounded-lg p-2 text-primary lg:hidden"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Abrir menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-[60] bg-black/40 transition-opacity lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      />
      <aside
        className={cn(
          "fixed right-0 top-0 z-[70] flex h-full w-[min(100%,320px)] flex-col bg-white shadow-xl transition-transform duration-300 ease-out lg:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between border-b border-surface-border px-4 py-3">
          <span className="font-bold text-primary">{COMPANY.name}</span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-lg p-2 text-text-muted"
            aria-label="Fechar menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col gap-1 p-4" aria-label="Mobile">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-text hover:bg-surface-bg hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={COMPANY.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 rounded-lg bg-accent px-3 py-3 text-center font-semibold text-white"
          >
            Solicitar orçamento
          </a>
        </nav>
      </aside>
    </header>
  );
}
