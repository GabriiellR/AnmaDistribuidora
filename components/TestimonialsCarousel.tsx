"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Heart, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const AUTO_MS = 6500;

export function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const n = TESTIMONIALS.length;

  const next = useCallback(() => setIndex((i) => (i + 1) % n), [n]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + n) % n), [n]);

  useEffect(() => {
    const t = setInterval(next, AUTO_MS);
    return () => clearInterval(t);
  }, [next]);

  const t = TESTIMONIALS[index];

  return (
    <section className="border-y border-surface-border bg-white py-14 md:py-16">
      <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
        <p className="text-center text-sm font-bold uppercase tracking-wider text-accent">
          Avaliações
        </p>
        <h2 className="mt-2 text-center text-2xl font-extrabold text-primary md:text-3xl">
          O que dizem nossos clientes
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-sm text-text-muted">
          Depoimentos de quem já compra com a gente
        </p>

        <div className="relative mt-10 min-h-[200px] md:min-h-[180px]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={t.id}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.35 }}
              className="rounded-2xl border border-surface-border bg-surface-bg px-6 py-8 shadow-sm md:px-10"
            >
              <Quote
                className="h-8 w-8 text-primary/25"
                aria-hidden
              />
              <p className="mt-3 text-base leading-relaxed text-text md:text-lg">
                “{t.text}”
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-surface-border pt-4">
                <div>
                  <p className="font-bold text-primary">{t.author}</p>
                  <p className="text-sm text-text-muted">{t.meta}</p>
                  <p className="text-xs text-text-muted">{t.date}</p>
                </div>
                {t.likes > 0 ? (
                  <span className="inline-flex items-center gap-1 text-sm text-text-muted">
                    <Heart className="h-4 w-4 fill-red-500 text-red-500" aria-hidden />
                    {t.likes}
                  </span>
                ) : null}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={prev}
              className="rounded-full border border-surface-border p-2 text-primary transition-all duration-200 hover:bg-surface-bg"
              aria-label="Avaliação anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-1.5 px-2">
              {TESTIMONIALS.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-200",
                    i === index ? "w-6 bg-primary" : "w-2 bg-surface-border hover:bg-primary/40"
                  )}
                  aria-label={`Ir para avaliação ${i + 1}`}
                  aria-current={i === index}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="rounded-full border border-surface-border p-2 text-primary transition-all duration-200 hover:bg-surface-bg"
              aria-label="Próxima avaliação"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
