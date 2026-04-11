/**
 * Catálogo Anma Distribuidora — alinhado às fotos do material 2025.
 * PDF CATALOGO_2025.pdf é predominantemente imagem (texto não extraível).
 * Fotos: public/images/produtos/*.png — regenere com: node scripts/sync-product-images.mjs
 */
export const COMPANY = {
  name: "Anma Distribuidora",
  foundedYear: 2023,
  tagline: "Embalagens inovadoras e sustentáveis",
  phone: "(31) 3965-3006",
  phoneTel: "+553139653006",
  whatsappDisplay: "(31) 99678-1146",
  whatsappTel: "+553196781146",
  whatsappUrl: "https://wa.me/553196781146",
  whatsappHeroUrl: "https://wa.me/553196781146",
  email: "contato@anmadistribuidora.com.br",
  address: "Rua CC 342, Galpão 3 – Arvoredo, Contagem – MG, 32113-215",
  addressShort: "Rua CC 342, Galpão 3 – Arvoredo, Contagem – MG",
  hours: "De segunda a Quinta 07:00 às 17:00, Sextas 07:00 às 16:00",
  coverage: "Atendimento em todo o Brasil",
  social: {
    instagram: "https://www.instagram.com/anma.distribuidora/",
    Shoppe: "https://www.instagram.com/anma.distribuidora/",
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
    | "bobinas-sacos"       // ← NOVA: bobinas termossoldáveis e sacos
    | "sacolas"
    | "acessorios";

export const PRODUCT_CATEGORIES: {
    id: ProductCategoryId;
    label: string;
}[] = [
        { id: "filme-stretch", label: "Filme stretch" },
        { id: "fitas-adesivas", label: "Fitas" },
        { id: "fitas-arquear", label: "Fitas de arquear" },
        { id: "plastico-protecao", label: "Plástico e proteção" },
        { id: "bobinas-sacos", label: "Bobinas e sacos" },   // ← NOVA
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
    // ── FILME STRETCH ─────────────────────────────
    { id: "filme-stretch-ecologico", name: "Filme Stretch com Tubo Ecológico 500mm 0,025 Micras", category: "filme-stretch", image: `/images/produtos/${1186}.png` },
    { id: "filme-stretch-25kg", name: "Filme Stretch com Tubete 2,5kg 500mm 0,025 Micras", category: "filme-stretch", image: `/images/produtos/${1165}.png` },
    { id: "filme-stretch-3kg", name: "Filme Stretch Convencional com Tubete 3kg", category: "filme-stretch", image: `/images/produtos/${1099}.png` },
    { id: "filme-stretch-preto-reforcado", name: "Filme Stretch Preto Reforçado 25 Micras", category: "filme-stretch", image: `/images/produtos/${1886}.png` },
    { id: "filme-stretch-automatico", name: "Filme Stretch High Automático 500mm", category: "filme-stretch", image: `/images/produtos/${1167}.png` },
    { id: "filme-stretch-030", name: "Filme Stretch Convencional 0,30 Micras", category: "filme-stretch", image: `/images/produtos/${1165}.png` },
    { id: "filme-stretch-16kg", name: "Filme Stretch com Tubete 16kg", category: "filme-stretch" },
    { id: "filme-stretch-sem-tubete", name: "Filme Stretch Sem Tubete", category: "filme-stretch", image: `/images/produtos/${1091_1102_1100}.png` },
    { id: "filme-stretch-pre-estirado", name: "Filme Stretch Pré Estirado Manual", category: "filme-stretch" },
    { id: "stretchinho-manopla", name: "Stretchinho com Manopla 100m", category: "filme-stretch" },

    // ── FITAS GERAL ───────────────────────────
    { id: "fita-adesiva-48x100", name: "Fita Adesiva 48mm x 100m", category: "fitas-adesivas", image: `/images/produtos/${1164}.png` },
    { id: "fita-adesiva-hotmelt", name: "Fita Adesiva Hot Melt", category: "fitas-adesivas", image: `/images/produtos/${1515}.png` },
    { id: "fita-adesiva-transparente", name: "Fita Adesiva Transparente", category: "fitas-adesivas", image: `/images/produtos/${1163}.png` },
    { id: "fita-adesiva-cristal", name: "Fita Adesiva Cristal", category: "fitas-adesivas", image: `/images/produtos/${1163}.png` },
    { id: "fita-kraft", name: "Fita Adesiva Kraft", category: "fitas-adesivas", image: `/images/produtos/${1154}.png` },
    { id: "fita-koretape", name: "Fita Koretape Marrom", category: "fitas-adesivas", image: `/images/produtos/${1140}.png` },
    { id: "fita-dupla-face-18mm", name: "Fita Dupla Face 18mm x 30m", category: "fitas-adesivas", image: `/images/produtos/${1136}.png` },
    { id: "fita-dupla-face-12mm", name: "Fita Dupla Face 12mm x 30m", category: "fitas-adesivas", image: `/images/produtos/${1136}.png` },
    { id: "fita-crepe-48mm", name: "Fita Crepe Uso Geral 48mm x 45m", category: "fitas-adesivas", image: `/images/produtos/${1166}.png` },
    { id: "fita-crepe-24mm", name: "Fita Crepe 24mm", category: "fitas-adesivas", image: `/images/produtos/${117912}.png` },
    { id: "fita-crepe-18mm", name: "Fita Crepe 18mm", category: "fitas-adesivas", image: `/images/produtos/${1181}.png` },
    { id: "fita-gomada", name: "Fita Gomada", category: "fitas-adesivas", image: `/images/produtos/${1121}.png` },

    // ── FITAS DE ARQUEAR ─────────────────────────
    { id: "fita-pet-19mm", name: "Fita PET 19mm", category: "fitas-arquear", image: `/images/produtos/${1141}.png` },
    { id: "fita-pet-16mm", name: "Fita PET 16mm", category: "fitas-arquear", image: `/images/produtos/${1141}.png` },
    { id: "fita-pet-13mm", name: "Fita PET 13mm", category: "fitas-arquear", image: `/images/produtos/${1141}.png` },
    { id: "fita-phoenix-azul", name: "Fita Phoenix Azul", category: "fitas-arquear" },
    { id: "fita-phoenix-preta", name: "Fita Phoenix Preta", category: "fitas-arquear" },
    { id: "fita-phoenix-branca", name: "Fita Phoenix Branca", category: "fitas-arquear" },
    { id: "fita-dba", name: "Fita DBA", category: "fitas-arquear" },
    { id: "fitilho-reciclado", name: "Fitilho Reciclado", category: "fitas-arquear" },
    { id: "fitilho-comum", name: "Fitilho Comum", category: "fitas-arquear" },

    // ── PLÁSTICO E PROTEÇÃO ──────────────────────
    { id: "plastico-bolha", name: "Plástico Bolha Rolo", category: "plastico-protecao" },
    { id: "papelao-ondulado", name: "Papelão Ondulado", category: "plastico-protecao" },
    { id: "lona-preta", name: "Lona Preta", category: "plastico-protecao", image: `/images/produtos/${1187}.png` },
    { id: "filme-pvc", name: "Filme PVC", category: "plastico-protecao", image: `/images/produtos/${1173}.png` },

    // ── BOBINAS E SACOS ──────────────────────────
    { id: "bobina-fundo-estrela", name: "Bobina Fundo Estrela", category: "bobinas-sacos", image: `/images/produtos/${1145}.png` },
    { id: "bobina-papel-ondulado", name: "Bobina Papel Ondulado 1,20 CM", category: "bobinas-sacos", image: `/images/produtos/${1131}.png`},
    { id: "bobina-rb-20x35", name: "Bobina RB Solda Funda 20x35", category: "bobinas-sacos", image: `/images/produtos/${1108}.png` },
    { id: "bobina-rb-25x35", name: "Bobina RB Solda Funda 25x35", category: "bobinas-sacos", image: `/images/produtos/${1109}.png` },
    { id: "bobina-rb-30x40", name: "Bobina RB Solda Funda 30x40", category: "bobinas-sacos", image: `/images/produtos/${1110}.png` },
    { id: "bobina-rb-35x50", name: "Bobina RB Solda Funda 35x50", category: "bobinas-sacos", image: `/images/produtos/${1111}.png` },
    { id: "bobina-rb-40x60", name: "Bobina RB Solda Funda 40x60", category: "bobinas-sacos", image: `/images/produtos/${1112}.png` },
    { id: "saco-bd-virgem", name: "Saco BD Virgem", category: "bobinas-sacos", image: `/images/produtos/${1113}.png` },
    { id: "saco-lixo-30l", name: "Saco de Lixo 30L", category: "bobinas-sacos", image: `/images/produtos/${1152}.png` },
    { id: "saco-lixo-50l", name: "Saco de Lixo 50L", category: "bobinas-sacos", image: `/images/produtos/${1152}.png` },
    { id: "saco-lixo-100l", name: "Saco de Lixo 100L", category: "bobinas-sacos", image: `/images/produtos/${1152}.png` },
    { id: "saco-lixo-200l", name: "Saco de Lixo 200L", category: "bobinas-sacos", image: `/images/produtos/${1152}.png` },

    // ── SACOLAS ──────────────────────────────────
    { id: "sacola-branca", name: "Sacola Plástica Branca", category: "sacolas", image: `/images/produtos/${1160}.png` },
    { id: "sacola-verde", name: "Sacola Plástica Verde", category: "sacolas", image: `/images/produtos/${11111}.png` },

    // ── ACESSÓRIOS ───────────────────────────────
    { id: "aplicador-fita", name: "Aplicador de Fita Adesiva", category: "acessorios", image: `/images/produtos/${1171}.png` },
    { id: "aplicador-stretch", name: "Aplicador Manual de Filme Stretch", category: "acessorios", image: `/images/produtos/${1009.1}.png` },
    { id: "esticador-pet", name: "Esticador de Fita PET", category: "acessorios", image: `/images/produtos/${1148}.png` },
    { id: "selador-pet", name: "Selador PET", category: "acessorios", image: `/images/produtos/${1149}.png` },
    { id: "cantoneira", name: "Cantoneira Plástica para Arquear", category: "acessorios" },
    { id: "selo-metal", name: "Selo de Metal para Fita PET", category: "acessorios", image: `/images/produtos/${1120}.png` },
    { id: "carrinho-desbobinador", name: "Carrinho Desbobinador", category: "acessorios", image: `/images/produtos/${1161}.png` },
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
    a: "Sim. Organizamos envio para todo o território nacional. Prazo e frete são informados no orçamento.",
  },
  {
    q: "Trabalham com a linha Koretech?",
    a: "Sim. Temos fitas adesivas Koretech em diversas medidas. Consulte disponibilidade e quantidade mínima pelo WhatsApp.",
  },
  {
    q: "Como solicito orçamento?",
    a: "Use o botão de WhatsApp no site, o formulário de contato ou clique em “Saiba mais” no produto desejado — a mensagem já vem pré-preenchida.",
  },
  {
    q: "Posso comprar presencialmente?",
    a: "Não, as vendas são realizadas exclusivamente pelos canais digitais.",
  },
];
