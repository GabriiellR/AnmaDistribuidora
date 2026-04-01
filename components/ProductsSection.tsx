"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PRODUCT_CATEGORIES,
  PRODUCTS,
  whatsappProductLink,
  type ProductCategoryId,
} from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ProductCard } from "@/components/ProductCard";
import { ProductCardSkeleton } from "@/components/ProductCardSkeleton";
import { CTAButton } from "@/components/CTAButton";

export function ProductsSection() {
  const [active, setActive] = useState<ProductCategoryId>("filme-stretch");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, [active]);

  const filtered = useMemo(
    () => PRODUCTS.filter((p) => p.category === active),
    [active]
  );

  const categoryLabel = (id: ProductCategoryId) =>
    PRODUCT_CATEGORIES.find((c) => c.id === id)?.label ?? id;

  const gridKey = loading ? `sk-${active}` : `grid-${active}`;

  return (
    <section className="bg-surface-bg py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="text-center"
        >
          <p className="text-sm font-bold uppercase tracking-wider text-accent">
            PORTFÓLIO
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-primary md:text-4xl">
            Nossos produtos
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-text-muted">
            Soluções para embalar e proteger sua carga — consulte bitolas e
            disponibilidade pelo WhatsApp.
          </p>
        </motion.div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {PRODUCT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActive(cat.id)}
              className={cn(
                "rounded-full border-2 px-4 py-2 text-sm font-semibold transition-all duration-200",
                active === cat.id
                  ? "border-primary bg-primary text-white"
                  : "border-primary/30 bg-white text-primary hover:border-accent hover:bg-emerald-50"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={gridKey}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="contents"
            >
              {loading
                ? Array.from({ length: 6 }).map((_, i) => (
                    <ProductCardSkeleton key={`sk-${i}`} />
                  ))
                : filtered.map((p) => (
                    <motion.div
                      key={p.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <ProductCard
                        name={p.name}
                        categoryId={p.category}
                        categoryLabel={categoryLabel(p.category)}
                        href={whatsappProductLink(p.name)}
                      />
                    </motion.div>
                  ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-12 text-center">
          <CTAButton href="/produtos" variant="outline" className="inline-flex">
            Ver todos os produtos
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
