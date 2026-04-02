/**
 * Vídeo da seção “Nossa estrutura” (/sobre).
 *
 * Opções (use só uma):
 * 1) YouTube: preencha `youtubeId` com o ID do vídeo (ex.: dQw4w9WgXcQ em youtube.com/watch?v=...)
 * 2) Arquivo local: coloque um .mp4 em `public/videos/` e defina `mp4` (ex.: "/videos/nossa-estrutura.mp4")
 *
 * Se `youtubeId` estiver vazio e `mp4` estiver vazio, mostra a foto `SITE_IMAGES.sobreEstrutura`.
 */
export const SITE_VIDEOS = {
  nossaEstrutura: {
    youtubeId: "",
    mp4: "/videos/nossa-estrutura.mp4",
    /** Capa antes de dar play; use a mesma foto da estrutura ou outra em public/images/ */
    poster: "/images/sobre-estrutura.jpg",
  },
} as const;
