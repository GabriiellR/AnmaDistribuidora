"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Package } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ProductCategoryId } from "@/lib/constants";

const badgeColors: Record<ProductCategoryId, string> = {
  "filme-stretch": "bg-emerald-100 text-emerald-900",
  "fitas-adesivas": "bg-amber-100 text-amber-950",
  "fitas-arquear": "bg-lime-100 text-lime-950",
  "plastico-protecao": "bg-sky-100 text-sky-900",
  sacolas: "bg-green-100 text-green-900",
  acessorios: "bg-slate-200 text-slate-800",
  "bobinas-sacos": "bg-purple-100 text-purple-950",
};

type ProductCardProps = {
  name: string;
  categoryLabel: string;
  categoryId: ProductCategoryId;
  imageSrc: string;
  href?: string;
  className?: string;
};

export function ProductCard({
  name,
  categoryLabel,
  categoryId,
  imageSrc,
  href = "#",
  className,
}: ProductCardProps) {
  const isExternal = href.startsWith("http");
  const [imgOk, setImgOk] = useState(true);

  const linkClass =
    "mt-auto pt-4 text-sm font-semibold text-primary transition-all duration-200 hover:text-primary-dark hover:underline";

  return (
    <article
      className={cn(
        "flex flex-col overflow-hidden rounded-xl border border-surface-border bg-white shadow-sm transition-all duration-200 hover:shadow-md",
        className
      )}
    >
      <div className="relative aspect-video w-full bg-gray-200">
        {imgOk ? (
          <Image
            src={imageSrc}
            alt={name}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onError={() => setImgOk(false)}
          />
        ) : null}
        {!imgOk ? (
          <div className="flex h-full min-h-[160px] items-center justify-center">
            <Package className="h-16 w-16 text-gray-400" aria-hidden />
          </div>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <span
          className={cn(
            "mb-2 inline-block w-fit rounded-full px-2 py-0.5 text-xs font-semibold",
            badgeColors[categoryId]
          )}
        >
          {categoryLabel}
        </span>
        <h3 className="text-sm font-bold uppercase leading-snug text-text md:text-base">
          {name}
        </h3>
        {isExternal ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Saiba mais
          </a>
        ) : (
          <Link href={href} className={linkClass}>
            Saiba mais
          </Link>
        )}
      </div>
    </article>
  );
}
