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
        { id: "fitas-adesivas", label: "Fitas adesivas" },
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
    // ── FILME STRETCH ──────────────────────────────────────────────
    {
        id: "filme-pvc-380x9x700",
        name: "Bob Filme de PVC 380x9x700",
        category: "filme-stretch",
        image: "/images/produtos/1173.png",
    },
    {
        id: "bobina-stretch-com-tubete-1107",
        name: "Bobina Filme Stretch Com Tubete",
        category: "filme-stretch",
        image: "/images/produtos/1107.png",
    },
    {
        id: "filme-stretch-com-tubete",
        name: "Filme Stretch Com Tubete",
        category: "filme-stretch",
        image: "/images/produtos/1099.png",
    },
    {
        id: "filme-stretch-sem-tubete",
        name: "Filme Stretch Sem Tubete",
        category: "filme-stretch",
        image: "/images/produtos/1091_1102_1100.png",
    },
    {
        id: "stretchinho-manopla",
        name: "Rolo Stretchinho Com Manopla 100 Metros",
        category: "filme-stretch",
        image: "/images/produtos/1009.png",
    },

    // ── FITAS ADESIVAS ─────────────────────────────────────────────
    {
        id: "fita-crepe",
        name: "Pct Fita Crepe",
        category: "fitas-adesivas",
        image: "/images/produtos/1179_1180.png",
    },
    {
        id: "fita-adesiva-transparente",
        name: "Und Fita Adesiva Transp.",
        category: "fitas-adesivas",
        image: "/images/produtos/1155.png",
    },
    {
        id: "fita-adesiva-cristal",
        name: "Pct Fita Adesiva Cristal",
        category: "fitas-adesivas",
        image: "/images/produtos/1133.png",
    },
    {
        id: "fita-gomada-sem-reforco",
        name: "Fita Gomada Sem Reforço Nylon",
        category: "fitas-adesivas",
        image: "/images/produtos/1121.png",
    },
    {
        id: "fita-gomada-com-reforco",
        name: "Fita Gomada Com Reforço Nylon",
        category: "fitas-adesivas",
        image: "/images/produtos/1122.png",
    },

    // ── FITAS DE ARQUEAR ───────────────────────────────────────────
    {
        id: "fita-pet-16mm-1163",
        name: "Rolo Fita PET 16MM",
        category: "fitas-arquear",
        image: "/images/produtos/1163.png",
    },
    {
        id: "fita-pet-16mm-1116",
        name: "Rolo Fita PET 16MM (alt.)",
        category: "fitas-arquear",
        image: "/images/produtos/1116.png",
    },
    {
        id: "fita-phoenix-azul",
        name: "Rolo Fita Phoenix Azul",
        category: "fitas-arquear",
        image: "/images/produtos/1126.png",
    },
    {
        id: "fita-phoenix-preta",
        name: "Rolo Fita Phoenix Preta",
        category: "fitas-arquear",
        image: "/images/produtos/1125.png",
    },
    {
        id: "fita-dba",
        name: "Rolo Fita DBA",
        category: "fitas-arquear",
        image: "/images/produtos/1123.png",
    },
    {
        id: "fitilho-reciclado",
        name: "Fitilho Reciclado",
        category: "fitas-arquear",
        image: "/images/produtos/1128.png",
    },
    {
        id: "fitilho-comum",
        name: "Fitilho Comum",
        category: "fitas-arquear",
        image: "/images/produtos/1127.png",
    },

    // ── PLÁSTICO E PROTEÇÃO ────────────────────────────────────────
    {
        id: "plastico-bolha",
        name: "Rolo Plástico Bolha",
        category: "plastico-protecao",
        image: "/images/produtos/1105.png",
    },
    {
        id: "papelao-ondulado",
        name: "Rolo Papelão Ondulado",
        category: "plastico-protecao",
        image: "/images/produtos/1131.png",
    },

    // ── BOBINAS E SACOS ────────────────────────────────────────────
    {
        id: "bobina-fundo-estrela",
        name: "Bobina Fundo Estrela",
        category: "bobinas-sacos",
        image: "/images/produtos/1145.png",
    },
    {
        id: "bobina-rb-solda-funda-25x35",
        name: "Bobina RB Solda Funda 25x35",
        category: "bobinas-sacos",
        image: "/images/produtos/1109.png",
    },
    {
        id: "bobina-rb-solda-funda-30x40",
        name: "Bobina RB Solda Funda 30x40",
        category: "bobinas-sacos",
        image: "/images/produtos/1110.png",
    },
    {
        id: "bobina-rb-solda-funda-40x60",
        name: "Bobina RB Solda Funda 40x60",
        category: "bobinas-sacos",
        image: "/images/produtos/1112.png",
    },
    {
        id: "saco-bd-virgem",
        name: "Saco BD Virgem",
        category: "bobinas-sacos",
        image: "/images/produtos/1113.png",
    },

    // ── SACOLAS ────────────────────────────────────────────────────
    // (adicione aqui sacolas plásticas quando houver)

    // ── ACESSÓRIOS ─────────────────────────────────────────────────
    {
        id: "aplicador-manual-stretch",
        name: "Aplicador Manual de Filme Stretch",
        category: "acessorios",
        image: "/images/produtos/1115.png",
    },
    {
        id: "cantoneira-plastica-arquear",
        name: "Caixa Cantoneira Plástica Para Fita de Arquear",
        category: "acessorios",
        image: "/images/produtos/1120.png",
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
