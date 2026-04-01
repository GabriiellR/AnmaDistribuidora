"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

type SitePhotoProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  fallback: React.ReactNode;
};

/**
 * Mostra a imagem de `public/`; se o arquivo não existir ou falhar ao carregar, exibe o fallback.
 */
export function SitePhoto({
  src,
  alt,
  className,
  imgClassName,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority,
  fallback,
}: SitePhotoProps) {
  const [show, setShow] = useState(true);

  if (!show) {
    return (
      <div className={cn("relative overflow-hidden", className)}>{fallback}</div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn("object-cover", imgClassName)}
        onError={() => setShow(false)}
      />
    </div>
  );
}
