"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { COMPANY } from "@/lib/constants";

const items = [
  {
    icon: MapPin,
    text: COMPANY.address,
    href: undefined as string | undefined,
  },
  {
    icon: Phone,
    text: COMPANY.phone,
    href: `tel:${COMPANY.phoneTel}`,
  },
  {
    icon: Mail,
    text: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
  },
  {
    icon: Clock,
    text: COMPANY.hours,
    href: undefined,
  },
];

export function ContactStrip() {
  return (
    <section className="border-t border-surface-border bg-surface-bg py-12 md:py-14">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => {
            const Icon = item.icon;
            const content = (
              <div className="flex gap-3">
                <Icon className="h-6 w-6 shrink-0 text-primary" aria-hidden />
                <span className="text-sm text-text">{item.text}</span>
              </div>
            );
            return (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    className="block transition-all duration-200 hover:text-primary"
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
