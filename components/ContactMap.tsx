import { ExternalLink } from "lucide-react";
import { COMPANY, mapsEmbedUrl, mapsOpenUrl } from "@/lib/constants";

export function ContactMap() {
  const src = mapsEmbedUrl();

  return (
    <section
      className="border-t border-surface-border bg-surface-bg py-10 md:py-14"
      aria-labelledby="contact-map-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2
              id="contact-map-heading"
              className="text-xl font-bold text-primary md:text-2xl"
            >
              Como chegar
            </h2>
            <p className="mt-1 max-w-2xl text-sm text-text-muted">
              {COMPANY.address}
            </p>
          </div>
          <a
            href={mapsOpenUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-200 hover:text-primary-dark hover:underline"
          >
            Abrir no Google Maps
            <ExternalLink className="h-4 w-4" aria-hidden />
          </a>
        </div>

        <div className="relative w-full overflow-hidden rounded-2xl border border-surface-border bg-white shadow-sm">
          <div className="relative aspect-[4/3] w-full min-h-[220px] sm:aspect-video sm:min-h-[280px] md:min-h-[320px] lg:aspect-[21/9] lg:min-h-[360px]">
            <iframe
              title={`Mapa — ${COMPANY.name}`}
              src={src}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
