"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { COMPANY } from "@/lib/constants";
import { SITE_IMAGES } from "@/lib/site-images";
import { motion, AnimatePresence } from "framer-motion";

/* ── nav links ──────────────────────────────────────────── */
const navLinks = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Quem Somos" },
  { href: "/produtos", label: "Produtos" },
  { href: "/sustentabilidade", label: "Sustentabilidade" },
  { href: "/contato", label: "Contato" },
  {
    label: "Mais",
    href: "#",
    children: [
      { href: "/#perguntas-frequentes", label: "Perguntas Frequentes" },
    ],
  },
];


function NavLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
}) {
  const [dropOpen, setDropOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handle(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setDropOpen(false);
      }
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  if (children) {
    return (
      <div ref={ref} className="relative">
        <button
          onClick={() => setDropOpen((v) => !v)}
          className="group flex items-center gap-1 text-xl font-medium text-white/70 hover:text-white transition-colors duration-200 py-1"
        >
          {label}
          <ChevronDown
            className={cn(
              "h-3.5 w-3.5 transition-transform duration-200",
              dropOpen && "rotate-180"
            )}
          />
        </button>
        <AnimatePresence>
          {dropOpen && (
            <motion.div
              initial={{ opacity: 0, y: 6, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.97 }}
              transition={{ duration: 0.18 }}
              className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-[#0d2418] border border-white/10 rounded-xl py-1.5 min-w-[200px] shadow-2xl shadow-black/40 z-50"
            >
              {children.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  onClick={() => setDropOpen(false)}
                  className="block px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors duration-150"
                >
                  {c.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <Link href={href} className="group relative flex flex-col py-1">
      <span className="text-xl font-medium text-white/70 group-hover:text-white transition-colors duration-200">
        {label}
      </span>
      {/* animated underline */}
      <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-gradient-to-r from-emerald-400 to-green-300 rounded-full group-hover:w-full transition-all duration-300 ease-out" />
    </Link>
  );
}

/* ── main component ─────────────────────────────────────── */
export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoOk, setLogoOk] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[#071810]/95 backdrop-blur-md border-b border-white/[0.06] shadow-lg shadow-black/30"
            : "bg-[#071810] border-b border-white/[0.06]"
        )}
      >
        {/* ── emerald accent line top ── */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-60" />

        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 md:px-6 lg:px-8">

          {/* LOGO */}
          <Link href="/" className="group flex items-center gap-3 shrink-0">
            {logoOk ? (
              <div className="relative">
                {/* glow on hover */}
                <div className="absolute -inset-2 rounded-lg bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                <Image
                  src={SITE_IMAGES.logo}
                  alt={COMPANY.name}
                  width={300}
                  height={96}
                  className="relative h-20 w-auto  object-contain object-left md:h-32"
                  onError={() => setLogoOk(false)}
                />
              </div>
            ) : (
              <div className="relative">
                <div className="absolute -inset-2 rounded-lg bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex flex-col leading-tight">
                  <span className="text-xl font-black tracking-tight text-white">
                    ANMA
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-400">
                    Distribuidora
                  </span>
                </span>
              </div>
            )}
          </Link>

          {/* DESKTOP NAV */}
          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Navegação principal"
          >
            {navLinks.map((item) => (
              <NavLink
                key={item.href + item.label}
                href={item.href}
                label={item.label}
                children={item.children}
              />
            ))}
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">
            {/* CTA button */}
            <a
              href={COMPANY.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all duration-200 hover:scale-105 shadow-md shadow-emerald-500/20"
            >
              {/* whatsapp icon inline */}
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Solicitar orçamento
            </a>

            {/* hamburger */}
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="rounded-xl p-2 text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200 lg:hidden"
              aria-expanded={mobileOpen}
              aria-label="Abrir menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE DRAWER ────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* drawer */}
            <motion.aside
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="fixed right-0 top-0 z-[70] flex h-full w-[min(100%,320px)] flex-col bg-[#071810] shadow-2xl lg:hidden"
            >
              {/* drawer header */}
              <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4">
                <span className="flex flex-col leading-tight">
                  <span className="text-lg font-black text-white">ANMA</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-400">
                    Distribuidora
                  </span>
                </span>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl p-2 text-white/50 hover:text-white hover:bg-white/10 transition-all duration-200"
                  aria-label="Fechar menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* links */}
              <nav className="flex flex-1 flex-col gap-0.5 overflow-y-auto p-4" aria-label="Mobile">
                {navLinks.map((item, i) => (
                  <motion.div
                    key={item.href + item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04 }}
                  >
                    {item.children ? (
                      <>
                        <p className="px-3 pt-4 pb-1 text-[10px] font-bold uppercase tracking-widest text-white/30">
                          {item.label}
                        </p>
                        {item.children.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            onClick={() => setMobileOpen(false)}
                            className="block rounded-xl px-3 py-3 text-sm font-medium text-white/60 hover:bg-white/5 hover:text-white transition-all duration-150 pl-5"
                          >
                            {c.label}
                          </Link>
                        ))}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="group flex items-center justify-between rounded-xl px-3 py-3.5 text-sm font-medium text-white/70 hover:bg-white/5 hover:text-white transition-all duration-150"
                      >
                        {item.label}
                        <span className="h-[1px] w-0 bg-emerald-400 group-hover:w-6 transition-all duration-300 rounded-full" />
                      </Link>
                    )}
                  </motion.div>
                ))}
              </nav>

              {/* drawer CTA */}
              <div className="border-t border-white/[0.08] p-4">
                <a
                  href={COMPANY.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-3.5 rounded-xl transition-all duration-200 text-sm"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Solicitar orçamento
                </a>
                <p className="mt-3 text-center text-[11px] text-white/30">
                  {COMPANY.hours}
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
