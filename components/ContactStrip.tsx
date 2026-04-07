"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/constants";

const items = [
  {
    key: "addr",
    icon: MapPin,
    node: <span className="text-sm text-text">{COMPANY.address}</span>,
  },
  {
    key: "tel",
    icon: Phone,
    node: (
      <a
        href={`tel:${COMPANY.phoneTel}`}
        className="text-sm font-medium text-text transition-all duration-200 hover:text-primary"
      >
        Fixo {COMPANY.phone}
      </a>
    ),
  },
  {
    key: "zap",
    icon: MessageCircle,
    node: (
      <a
        href={COMPANY.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-medium text-text transition-all duration-200 hover:text-primary"
      >
        WhatsApp {COMPANY.whatsappDisplay}
      </a>
    ),
  },
  {
    key: "mail",
    icon: Mail,
    node: (
      <a
        href={`mailto:${COMPANY.email}`}
        className="text-sm text-text transition-all duration-200 hover:text-primary"
      >
        {COMPANY.email}
      </a>
    ),
  },
  {
    key: "hours",
    icon: Clock,
    node: <span className="text-sm text-text">{COMPANY.hours}</span>,
  },
];

export function ContactStrip() {
  return (
    <section className="border-t border-surface-border bg-surface-bg py-12 md:py-14">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex gap-3"
              >
                <Icon className="h-6 w-6 shrink-0 text-primary" aria-hidden />
                <div className="min-w-0">{item.node}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
