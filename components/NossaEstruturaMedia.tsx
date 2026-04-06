"use client";

import { useState } from "react";
import { SitePhoto } from "@/components/SitePhoto";
import { COMPANY } from "@/lib/constants";
import { SITE_IMAGES } from "@/lib/site-images";
import { SITE_VIDEOS } from "@/lib/site-videos";

export function NossaEstruturaMedia() {
  const { youtubeId, mp4, poster } = SITE_VIDEOS.nossaEstrutura;
  const [useVideoFallback, setUseVideoFallback] = useState(false);

  const showYoutube = Boolean(youtubeId?.trim());
  const showMp4 = Boolean(mp4?.trim()) && !showYoutube && !useVideoFallback;

  if (showYoutube) {
    return (
      <div className="aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-md ring-1 ring-surface-border">
        <iframe
          title={`${COMPANY.name} — nossa estrutura`}
          src={`https://www.youtube-nocookie.com/embed/${youtubeId.trim()}?rel=0`}
          className="h-full w-full min-h-[220px]"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  if (showMp4) {
    return (
      <video
        className="aspect-video w-full max-h-[420px] rounded-2xl bg-black object-cover shadow-md ring-1 ring-surface-border"
        autoPlay
        muted
        playsInline
        preload="metadata"
        poster={poster?.trim() ? poster : undefined}
        onError={() => setUseVideoFallback(true)}
      >
        <source src={mp4.trim()} type="video/mp4" />
        Seu navegador não suporta vídeo HTML5.
      </video>
    );
  }

  return (
    <SitePhoto
      src={SITE_IMAGES.sobreEstrutura}
      alt={`${COMPANY.name} — estrutura e galpão`}
      className="aspect-square max-h-[400px] rounded-2xl bg-gray-200 lg:max-h-[420px]"
      sizes="(max-width: 1024px) 100vw, 45vw"
      fallback={<div className="h-full min-h-[280px] bg-gray-200" />}
    />
  );
}
