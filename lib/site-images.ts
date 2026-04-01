/** Caminhos relativos à pasta `public/`. Copie seus arquivos para `public/images/` com estes nomes (jpg, png ou webp). */
export const SITE_IMAGES = {
  /** Hero (ex.: frota, produtos) — recomendado ~1200×1200px ou proporção quadrada */
  hero: "/images/hero.jpg",
  /** Seção “Sobre” na página inicial */
  sobreHome: "/images/sobre-home.jpg",
  /** Primeira foto na página /sobre */
  sobrePrincipal: "/images/sobre-principal.jpg",
  /** Foto “Nossa estrutura” na página /sobre */
  sobreEstrutura: "/images/sobre-estrutura.jpg",
  /** Logo no header (opcional). Se não existir, o texto ANMA continua aparecendo */
  logo: "/images/logo.png",
} as const;
