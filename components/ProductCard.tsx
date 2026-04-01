import Link from "next/link";
import { Package } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ProductCategoryId } from "@/lib/constants";

const badgeColors: Record<ProductCategoryId, string> = {
  "filme-stretch": "bg-emerald-100 text-emerald-900",
  "nucleos-tubos": "bg-amber-100 text-amber-950",
  "plastico-protecao": "bg-sky-100 text-sky-900",
  "fitas-arqueacao": "bg-lime-100 text-lime-950",
  acessorios: "bg-slate-200 text-slate-800",
};

type ProductCardProps = {
  name: string;
  categoryLabel: string;
  categoryId: ProductCategoryId;
  href?: string;
  className?: string;
};

export function ProductCard({
  name,
  categoryLabel,
  categoryId,
  href = "#",
  className,
}: ProductCardProps) {
  const isExternal = href.startsWith("http");

  const linkClass =
    "mt-auto pt-4 text-sm font-semibold text-primary transition-all duration-200 hover:text-primary-dark hover:underline";

  return (
    <article
      className={cn(
        "flex flex-col overflow-hidden rounded-xl border border-surface-border bg-white shadow-sm transition-all duration-200 hover:shadow-md",
        className
      )}
    >
      <div className="flex aspect-square items-center justify-center bg-gray-200">
        <Package className="h-16 w-16 text-gray-400" aria-hidden />
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
