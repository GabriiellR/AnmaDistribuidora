"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { FAQ_ITEMS } from "@/lib/constants";

export function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl space-y-3" id="perguntas-frequentes">
      {FAQ_ITEMS.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            className="overflow-hidden rounded-xl border border-surface-border bg-white shadow-sm"
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-all duration-200 hover:bg-surface-bg"
              aria-expanded={isOpen}
            >
              <span className="font-bold text-text">{item.q}</span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 text-primary transition-transform duration-200",
                  isOpen && "rotate-180"
                )}
                aria-hidden
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <p className="border-t border-surface-border px-5 py-4 text-text-muted">
                    {item.a}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
