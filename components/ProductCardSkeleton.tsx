import { cn } from "@/lib/utils";

export function ProductCardSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "animate-pulse overflow-hidden rounded-xl border border-surface-border bg-white",
        className
      )}
    >
      <div className="aspect-square bg-gray-200" />
      <div className="space-y-3 p-4">
        <div className="h-5 w-24 rounded-full bg-gray-200" />
        <div className="h-4 w-full rounded bg-gray-200" />
        <div className="h-4 w-[85%] rounded bg-gray-200" />
        <div className="h-4 w-20 rounded bg-gray-200 pt-2" />
      </div>
    </div>
  );
}
