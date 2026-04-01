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

type TabId = "all" | ProductCategoryId;

const tabs: { id: TabId; label: string }[] = [
  { id: "all", label: "Todos" },
  ...PRODUCT_CATEGORIES.map((c) => ({ id: c.id, label: c.label })),
];

export function ProductsPageGrid() {
  const [active, setActive] = useState<TabId>("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(t);
  }, [active]);

  const filtered = useMemo(() => {
    if (active === "all") return PRODUCTS;
    return PRODUCTS.filter((p) => p.category === active);
  }, [active]);

  const categoryLabel = (id: ProductCategoryId) =>
    PRODUCT_CATEGORIES.find((c) => c.id === id)?.label ?? id;

  const gridKey = loading ? `sk-${active}` : `grid-${active}`;

  return (
    <>
      <div className="flex gap-2 overflow-x-auto pb-2 md:flex-wrap md:justify-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActive(tab.id)}
            className={cn(
              "whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200",
              active === tab.id
                ? "bg-primary text-white shadow-sm"
                : "border-2 border-surface-border bg-white text-text hover:border-primary/40"
            )}
          >
            {tab.label}
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
              ? Array.from({ length: 9 }).map((_, i) => (
                  <ProductCardSkeleton key={`sk-${i}`} />
                ))
              : filtered.map((p) => (
                  <motion.div
                    key={p.id}
                    layout
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
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
    </>
  );
}
