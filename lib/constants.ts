/**
 * Catálogo Anma Distribuidora — alinhado às fotos do material 2025.
 * PDF CATALOGO_2025.pdf é predominantemente imagem (texto não extraível).
 * Fotos: public/images/produtos/*.png — regenere com: node scripts/sync-product-images.mjs
 */
export const COMPANY = {
  name: "Anma Distribuidora",
  foundedYear: 2022,
  tagline: "Embalagens inovadoras e sustentáveis",
  phone: "(31) 3965-3006",
  phoneTel: "+553139653006",
  whatsappDisplay: "(31) 9678-1146",
  whatsappTel: "+553196781146",
  whatsappUrl: "https://wa.me/553196781146",
  whatsappHeroUrl: "https://wa.me/553196781146",
  email: "contato@anmadistribuidora.com.br",
  address: "Rua CC 342, Galpão 3 – Arvoredo, Contagem – MG, 32113-215",
  addressShort: "Rua CC 342, Galpão 3 – Arvoredo, Contagem – MG",
  hours: "Das 08h às 18h",
  coverage: "Atendimento em todo o Brasil",
  social: {
    instagram: "https://www.instagram.com/anma.distribuidora/",
  },
  description:
    "Distribuidora de embalagens com foco em filme stretch, proteção de carga e insumos para sua operação — do comércio à indústria.",
} as const;

export const MAPS_ADDRESS_QUERY =
  "Rua CC 342, Galpão 3, Arvoredo, Contagem, MG, 32113-215";

export function mapsEmbedUrl() {
  return `https://maps.google.com/maps?q=${encodeURIComponent(MAPS_ADDRESS_QUERY)}&hl=pt&z=15&output=embed`;
}

export function mapsOpenUrl() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_ADDRESS_QUERY)}`;
}

export const TESTIMONIALS = [
  {
    id: "1",
    author: "Raphael Castilho",
    meta: "Local Guide · 21 avaliações",
    date: "2 meses atrás",
    text: "Quando quero agilidade e preço justo, sempre conto com a Luciana Lisboa. Me atende com pontualidade há anos!",
    likes: 2,
  },
  {
    id: "2",
    author: "Fábio Deodoro",
    meta: "Local Guide · 16 avaliações · 3 fotos",
    date: "2 meses atrás",
    text: "Atendimento ágil e descomplicado, uma atenção muito especial, relação custo benefício ótima, qualidade do produto acima do esperado. Parabéns à equipe da ANMA.",
    likes: 1,
  },
  {
    id: "3",
    author: "Rodrigo Soares",
    meta: "6 avaliações",
    date: "6 meses atrás",
    text: "Parabéns a todos da Anma Distribuidora! Grandes produtos! Perfeito atendimento!",
    likes: 3,
  },
  {
    id: "4",
    author: "Andre Pereira Soares",
    meta: "2 avaliações",
    date: "5 meses atrás",
    text: "Ótima empresa — sempre que faço pedido chega muito rápido, os entregadores têm o maior carinho com a gente. Ficamos muito satisfeitos com nossas compras.",
    likes: 0,
  },
] as const;

export function whatsappProductLink(productName: string) {
  const text = `Olá! Vim pelo site da ${COMPANY.name} e gostaria de informações/orçamento sobre: ${productName}`;
  return `${COMPANY.whatsappUrl}?text=${encodeURIComponent(text)}`;
}

export function whatsappGenericMessage(message: string) {
  return `${COMPANY.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

/** Caminho da foto: use o campo image ou /images/produtos/{id}.png */
export function productImageSrc(product: { id: string; image?: string }) {
  if (product.image?.trim()) return product.image.trim();
  return `/images/produtos/${product.id}.png`;
}

export type ProductCategoryId =
  | "filme-stretch"
  | "fitas-adesivas"
  | "fitas-arquear"
  | "plastico-protecao"
  | "sacolas"
  | "acessorios";

export const PRODUCT_CATEGORIES: {
  id: ProductCategoryId;
  label: string;
}[] = [
  { id: "filme-stretch", label: "Filme stretch" },
  { id: "fitas-adesivas", label: "Fitas adesivas" },
  { id: "fitas-arquear", label: "Fitas de arquear" },
  { id: "plastico-protecao", label: "Plástico e proteção" },
  { id: "sacolas", label: "Sacolas" },
  { id: "acessorios", label: "Acessórios" },
];

export interface ProductItem {
  id: string;
  name: string;
  category: ProductCategoryId;
  /** Caminho em /public — ex.: /images/produtos/slug.png */
  image?: string;
}

/**
 * IDs devem coincidir com os arquivos .png gerados pelo sync-product-images.mjs
 * (slug = nome do arquivo sem extensão).
 */
export const PRODUCTS: ProductItem[] = [
  {
    id: "filme-stretch-piramide",
    name: "Filme stretch transparente — bobinas para paletização",
    category: "filme-stretch",
    image: "/images/produtos/filme-stretch-piramide.png",
  },
  {
    id: "filme-stretch-duas-bobinas",
    name: "Filme stretch — duas bobinas (manual / industrial)",
    category: "filme-stretch",
    image: "/images/produtos/filme-stretch-duas-bobinas.png",
  },
  {
    id: "filme-stretch-com-tubete",
    name: "Filme stretch com tubete — núcleo reforçado",
    category: "filme-stretch",
    image: "/images/produtos/filme-stretch-com-tubete.png",
  },
  {
    id: "stretch-bobinas-empilhadas-alt",
    name: "Filme stretch — outras micras, larguras e pré-estirado (consulte)",
    category: "filme-stretch",
    image: "/images/produtos/stretch-bobinas-empilhadas-alt.png",
  },
  {
    id: "fita-kraft-reforcada",
    name: "Fita papel kraft reforçada — fios sintéticos (alta resistência)",
    category: "fitas-adesivas",
    image: "/images/produtos/fita-kraft-reforcada.png",
  },
  {
    id: "fita-gomada-kraft",
    name: "Fita gomada kraft — papel natural para fechamento de caixas",
    category: "fitas-adesivas",
    image: "/images/produtos/fita-gomada-kraft.png",
  },
  {
    id: "koretech-transparente-48x100",
    name: "Koretech — fita adesiva transparente 48 mm × 100 m (empacotamento)",
    category: "fitas-adesivas",
    image: "/images/produtos/koretech-transparente-48x100.png",
  },
  {
    id: "koretech-marrom-45x40",
    name: "Koretech — fita adesiva marrom BOPP 45 mm × 40 m",
    category: "fitas-adesivas",
    image: "/images/produtos/koretech-marrom-45x40.png",
  },
  {
    id: "koretech-transparente-45x40",
    name: "Koretech — fita adesiva transparente 45 mm × 40 m (BOPP)",
    category: "fitas-adesivas",
    image: "/images/produtos/koretech-transparente-45x40.png",
  },
  {
    id: "koretech-transparente-18x50-pct10",
    name: "Koretech — fita transparente 18 mm × 50 m — pacote com 10 rolos",
    category: "fitas-adesivas",
    image: "/images/produtos/koretech-transparente-18x50-pct10.png",
  },
  {
    id: "koretech-kraft-48x50",
    name: "Koretech — fita adesiva kraft 48 mm × 50 m (hot melt)",
    category: "fitas-adesivas",
    image: "/images/produtos/koretech-kraft-48x50.png",
  },
  {
    id: "koretech-marrom-pack-alt",
    name: "Koretech — fita marrom empacotamento (outras medidas sob consulta)",
    category: "fitas-adesivas",
    image: "/images/produtos/koretech-marrom-pack-alt.png",
  },
  {
    id: "koretech-transp-pack-alt",
    name: "Koretech — fita transparente — linha display / revenda",
    category: "fitas-adesivas",
    image: "/images/produtos/koretech-transp-pack-alt.png",
  },
  {
    id: "fita-pp-preta-arquear",
    name: "Fita PP preta para arqueação — texturizada",
    category: "fitas-arquear",
    image: "/images/produtos/fita-pp-preta-arquear.png",
  },
  {
    id: "fita-preta-texturizada-alt",
    name: "Fita de arquear PP preta — alto desempenho",
    category: "fitas-arquear",
    image: "/images/produtos/fita-preta-texturizada-alt.png",
  },
  {
    id: "fita-pp-azul-arquear",
    name: "Fita PP azul para arqueação de cargas",
    category: "fitas-arquear",
    image: "/images/produtos/fita-pp-azul-arquear.png",
  },
  {
    id: "fita-pp-branca-arquear",
    name: "Fita PP branca para arqueação",
    category: "fitas-arquear",
    image: "/images/produtos/fita-pp-branca-arquear.png",
  },
  {
    id: "fita-pet-verde-selo-mcpack",
    name: "Fita PET verde + selo MCPACK — kit arqueação",
    category: "fitas-arquear",
    image: "/images/produtos/fita-pet-verde-selo-mcpack.png",
  },
  {
    id: "plastico-bolha-nopc",
    name: "Plástico bolha — bobinas para proteção de produtos",
    category: "plastico-protecao",
    image: "/images/produtos/plastico-bolha-nopc.png",
  },
  {
    id: "manta-protecao",
    name: "Manta / filme de proteção — diversas aplicações",
    category: "plastico-protecao",
    image: "/images/produtos/manta-protecao.png",
  },
  {
    id: "sacolas-plasticas-verdes",
    name: "Sacolas plásticas verdes tipo camiseta — revenda",
    category: "sacolas",
    image: "/images/produtos/sacolas-plasticas-verdes.png",
  },
  {
    id: "fitilho-plastico",
    name: "Fitilho plástico para amarração e embalagem",
    category: "acessorios",
    image: "/images/produtos/fitilho-plastico.png",
  },
  {
    id: "lacres-acessorios",
    name: "Selos, lacres e complementos para arqueação (consulte)",
    category: "acessorios",
    image: "/images/produtos/lacres-acessorios.png",
  },
];

export const FEATURES_HOME = [
  {
    icon: "layers" as const,
    title: "Tudo para embalar e proteger",
    description:
      "Filme stretch, fitas Koretech, PP/PET para arqueação, plástico bolha, sacolas e fitilho — linha completa para sua operação.",
  },
  {
    icon: "truck" as const,
    title: "Entrega e logística",
    description:
      "Estrutura com estoque e frota para atender pedidos com agilidade. Envio para todo o Brasil em parceria com transportadoras.",
  },
  {
    icon: "leaf" as const,
    title: "Inovação e sustentabilidade",
    description:
      "Compromisso com soluções que valorizam eficiência no uso de materiais e boas práticas — alinhados ao nosso lema de embalagens inovadoras e sustentáveis.",
  },
];

export const FAQ_ITEMS = [
  {
    q: "Vocês atendem pessoa física e empresas?",
    a: "Sim. Atendemos tanto empresas (B2B) quanto clientes do comércio (B2C), conforme disponibilidade do produto e quantidade. Chame no WhatsApp para orçamento.",
  },
  {
    q: "Os produtos são entregues em todo o Brasil?",
    a: "Sim. Organizamos envio para todo o território nacional com transportadoras parceiras. Prazo e frete são informados no orçamento.",
  },
  {
    q: "Trabalham com a linha Koretech?",
    a: "Sim. Temos fitas adesivas Koretech em diversas medidas. Consulte disponibilidade e quantidade mínima pelo WhatsApp.",
  },
  {
    q: "Como solicito orçamento?",
    a: "Use o botão de WhatsApp no site, o formulário de contato ou clique em “Saiba mais” no produto desejado — a mensagem já vem pré-preenchida.",
  },
];
