"use client";

import { motion } from "framer-motion";
import { Layers, Truck, Leaf } from "lucide-react";
import { FEATURES_HOME } from "@/lib/constants";
import { cn } from "@/lib/utils";

const icons = {
  layers: Layers,
  truck: Truck,
  leaf: Leaf,
};

export function FeaturesSection() {
  return (
    <section className="bg-surface-bg py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {FEATURES_HOME.map((f, i) => {
            const Icon = icons[f.icon];
            return (
              <motion.article
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                className={cn(
                  "rounded-xl border border-surface-border bg-white p-6 shadow-sm",
                  "border-l-4 border-l-accent"
                )}
              >
                <Icon className="h-10 w-10 text-primary" aria-hidden />
                <h2 className="mt-4 text-lg font-bold text-text">{f.title}</h2>
                <p className="mt-2 text-text-muted">{f.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
