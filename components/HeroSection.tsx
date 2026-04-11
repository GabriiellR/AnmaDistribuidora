"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Package, ArrowRight } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { SitePhoto } from "@/components/SitePhoto";
import { COMPANY } from "@/lib/constants";
import { SITE_IMAGES } from "@/lib/site-images";

/* ── floating orbs ─────────────────────────────────────── */
const ORBS = [
  { w: 420, h: 420, l: -8, t: -10, delay: 0, dur: 14 },
  { w: 300, h: 300, l: 60, t: 55, delay: 2, dur: 18 },
  { w: 250, h: 250, l: 80, t: -5, delay: 4, dur: 12 },
  { w: 180, h: 180, l: 30, t: 70, delay: 1, dur: 20 },
];

/* ── word rotator ───────────────────────────────────────── */
const ROTATING_WORDS = ["segurança.", "eficiência.", "agilidade.", "confiança."];

function RotatingWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % ROTATING_WORDS.length), 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-block overflow-hidden align-bottom" style={{ minWidth: "10ch" }}>
      <motion.span
        key={index}
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        exit={{ y: "-100%", opacity: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300"
      >
        {ROTATING_WORDS[index]}
      </motion.span>
    </span>
  );
}

function StatPill({
  value,
  label,
  delay,
}: {
  value: string;
  label: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center gap-0.5 px-6 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
    >
      <span className="text-2xl md:text-3xl font-black text-white">{value}</span>
      <span className="text-[11px] font-semibold uppercase tracking-widest text-white/50">
        {label}
      </span>
    </motion.div>
  );
}

/* ── main component ─────────────────────────────────────── */
export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#071810]"
    >
      <div className="absolute inset-0 pointer-events-none">
        {ORBS.map((orb, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: orb.w,
              height: orb.h,
              left: `${orb.l}%`,
              top: `${orb.t}%`,
              background:
                i % 2 === 0
                  ? "radial-gradient(circle, rgba(34,197,94,0.18) 0%, transparent 70%)"
                  : "radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)",
            }}
            animate={{
              x: [0, (i % 2 === 0 ? 1 : -1) * 40],
              y: [0, (i % 3 === 0 ? 1 : -1) * 30],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: orb.dur,
              delay: orb.delay,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* ── dot grid ── */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='16' cy='16' r='1.2' fill='%2322c55e'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ── diagonal accent line ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute -right-32 top-0 h-full w-[60vw] opacity-[0.04]"
          viewBox="0 0 600 900"
          fill="none"
          preserveAspectRatio="none"
        >
          <line x1="0" y1="0" x2="600" y2="900" stroke="#22c55e" strokeWidth="120" />
        </svg>
      </div>

      {/* ── content ── */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto max-w-7xl w-full px-4 md:px-6 lg:px-8 "
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT */}
          <div>
            {/* eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex mt-2 items-center gap-2 bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Desde {COMPANY.foundedYear} · {COMPANY.coverage}
            </motion.div>

            {/* headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.15 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight"
            >
              Embalagens com
              <br />
              <RotatingWord />
            </motion.h1>

            {/* sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 text-base md:text-lg text-white/60 leading-relaxed max-w-md"
            >
              Filme stretch, fitas e insumos para paletização — com estoque,
              agilidade e atendimento direto.{" "}
              <span className="text-white/90 font-semibold">
                Do comércio à indústria, em todo o Brasil.
              </span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-10 flex flex-col sm:flex-row gap-3"
            >
              <a
                href={COMPANY.whatsappHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-7 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-emerald-500/25 text-sm"
                aria-label="Fale conosco no WhatsApp"
              >
                Fale no WhatsApp
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <a
                href="/produtos"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white/80 hover:text-white font-semibold px-7 py-4 rounded-xl transition-all duration-300 hover:bg-white/5 text-sm backdrop-blur-sm"
              >
                Ver produtos
              </a>
            </motion.div>

            {/* stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-12 flex flex-wrap gap-2  md:justify-start justify-center"
            >
              <StatPill value="B2B" label="e B2C" delay={0.65} />
              <StatPill value="100%" label="Brasil" delay={0.72} />
              <StatPill value="ESG" label="Sustentável" delay={0.79} />
            </motion.div>
          </div>

          {/* RIGHT — image card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* glow behind image */}
            <div className="absolute -inset-4 rounded-3xl bg-emerald-500/10 blur-2xl" />

            {/* main image frame */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <motion.div style={{ scale: imageScale }} className="origin-center">
                <SitePhoto
                  src={SITE_IMAGES.hero}
                  alt={`${COMPANY.name} — embalagens e distribuição`}
                  className="aspect-square w-full"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  priority
                  fallback={
                    <div className="flex aspect-square items-center justify-center bg-white/5">
                      <Package
                        className="h-40 w-40 text-white/20"
                        strokeWidth={1}
                        aria-hidden
                      />
                    </div>
                  }
                />
              </motion.div>

              {/* overlay gradient on image */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071810]/60 via-transparent to-transparent pointer-events-none" />

              {/* floating tag inside image */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-black/50 backdrop-blur-md rounded-xl px-4 py-3 border border-white/10"
              >
                <div>
                  <p className="text-white font-bold text-sm">{COMPANY.name}</p>
                  <p className="text-white/50 text-xs">{COMPANY.tagline}</p>
                </div>
                <div className="flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-500/40 rounded-full px-3 py-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-400 text-xs font-semibold">Online</span>
                </div>
              </motion.div>
            </div>

            {/* floating badge top-right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: 6 }}
              transition={{ delay: 0.9, duration: 0.5, type: "spring", stiffness: 200 }}
              className="absolute -top-4 -right-4 bg-emerald-500 text-white text-xs font-black px-4 py-2 rounded-xl shadow-lg shadow-emerald-500/40 rotate-6"
            >
              Anma Distribuidora
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* ── scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
        >
          <div className="w-0.5 h-2 bg-white/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
