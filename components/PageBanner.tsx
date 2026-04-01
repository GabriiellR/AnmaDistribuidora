"use client";

import { motion } from "framer-motion";

type PageBannerProps = {
  title: string;
  subtitle?: string;
};

export function PageBanner({ title, subtitle }: PageBannerProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-[#15803d] py-16 text-white md:py-20">
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl"
        >
          {title}
        </motion.h1>
        {subtitle ? (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-3 max-w-2xl text-lg text-white/90"
          >
            {subtitle}
          </motion.p>
        ) : null}
      </div>
    </section>
  );
}
