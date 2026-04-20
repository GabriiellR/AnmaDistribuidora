/**
 * Catálogo Anma Distribuidora — alinhado às fotos do material 2025.
 * PDF CATALOGO_2025.pdf é predominantemente imagem (texto não extraível).
 * Fotos: public/images/produtos/*.png — regenere com: node scripts/sync-product-images.mjs
 */
export const COMPANY = {
  name: "ANMA Distribuidora",
  foundedYear: 2023,
  tagline: "Embalagens inovadoras e sustentáveis",
  phone: "(31) 3965-3006",
  phoneTel: "+553139653006",
  whatsappDisplay: "(31) 99678-1146",
  whatsappTel: "+553196781146",
  whatsappUrl: "https://wa.me/553196781146",
  whatsappHeroUrl: "https://wa.me/553196781146",
  email: "comercial@anmadistribuidora.com.br",
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
    text: "Parabéns a todos da ANMA Distribuidora! Grandes produtos! Perfeito atendimento!",
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
    | "bobinas-sacos"      
    | "sacolas"
    | "etiquetas"
    | "acessorios";

export const PRODUCT_CATEGORIES: {
    id: ProductCategoryId;
    label: string;
}[] = [
        { id: "filme-stretch", label: "Filme stretch" },
        { id: "fitas-adesivas", label: "Fitas" },
        { id: "fitas-arquear", label: "Fitas de arquear" },
        { id: "plastico-protecao", label: "Plástico e proteção" },
        { id: "bobinas-sacos", label: "Bobinas e sacos" },  
        { id: "sacolas", label: "Sacolas" },
        { id: "etiquetas", label: "Etiqueta" },  
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

    // ── FILME STRETCH ─────────────────────────────────────────────────────────
    { id: "filme-stretch-ecologico-kg", name: "Filme Stretch c/Tubo Ecológico KG x 500mm x 0,025 Micras", category: "filme-stretch", image: `/images/produtos/${1186}.png` },
    { id: "filme-stretch-ecologico-3kg", name: "Filme Stretch c/Tubo Ecológico 3KG x 500mm x 0,025 Micras", category: "filme-stretch", image: `/images/produtos/${1186}.png` },
    { id: "filme-stretch-25kg", name: "Filme Stretch c/Tubete 2,5KG x 500mm x 0,025 Micras", category: "filme-stretch", image: `/images/produtos/${1165}.png` },
    { id: "filme-stretch-3kg-conv", name: "Filme Stretch Convencional c/Tubete 3KG x 500mm x 0,025 Micras", category: "filme-stretch", image: `/images/produtos/${1099}.png` },
    { id: "filme-stretch-3kg", name: "Filme Stretch c/Tubete 3KG x 500mm x 0,025 Micras", category: "filme-stretch", image: `/images/produtos/${1165}.png` },
    { id: "filme-stretch-35kg", name: "Filme Stretch c/Tubete 3,5KG x 500mm x 0,025 Micras", category: "filme-stretch", image: `/images/produtos/${1165}.png` },
    { id: "filme-stretch-4kg", name: "Filme Stretch c/Tubete 4KG x 500mm x 0,025 Micras", category: "filme-stretch", image: `/images/produtos/${1165}.png` },
    { id: "filme-stretch-10kg", name: "Filme Stretch c/Tubete 10KG x 500mm x 0,025 Micras", category: "filme-stretch", image: `/images/produtos/${1165}.png` },
    { id: "filme-stretch-16kg", name: "Filme Stretch c/Tubete 16KG x 500mm x 0,025 Micras", category: "filme-stretch", image: `/images/produtos/${1165}.png` },
    { id: "filme-stretch-preto-reforcado", name: "Filme Stretch Preto Reforçado 25 Micras 50cm x 250m", category: "filme-stretch", image: `/images/produtos/${1886}.png` },
    { id: "filme-stretch-preto-tubete", name: "Filme Stretch Preto c/Tubete 3KG x 500mm x 0,025 Micras", category: "filme-stretch", image: `/images/produtos/${1886}.png` },
    { id: "filme-stretch-automatico", name: "Filme Stretch High Automático 500mm x 0,030 Micras", category: "filme-stretch", image: `/images/produtos/${1167}.png` },
    { id: "filme-stretch-030", name: "Filme Stretch Convencional KG x 500mm x 0,030 Micras", category: "filme-stretch", image: `/images/produtos/${1165}.png` },
    { id: "filme-stretch-bobina-030", name: "Bobina Filme Stretch 0,030 Micras c/Tubete", category: "filme-stretch", image: `/images/produtos/${1107}.png` },
    { id: "filme-stretch-leitoso-4kg", name: "Bobina Filme Stretch Leitoso 4KG", category: "filme-stretch", image: `/images/produtos/${1099}.png` },
    { id: "filme-stretch-025-conv", name: "Filme Stretch Convencional KG x 500mm x 0,025 Micras", category: "filme-stretch", image: `/images/produtos/${1186}.png` },
    { id: "filme-stretch-sem-tubete", name: "Filme Stretch Sem Tubete", category: "filme-stretch", image: `/images/produtos/${1091}.png` },
    { id: "filme-stretch-st-3kg", name: "Filme Stretch s/Tubete 3KG x 500mm x 0,025 Micras", category: "filme-stretch", image: `/images/produtos/${1167}.png` },
    { id: "filme-stretch-st-35kg", name: "Filme Stretch s/Tubete 3,5KG x 0,025 Micras", category: "filme-stretch", image: `/images/produtos/${1167}.png` },
    { id: "filme-stretch-st-4kg", name: "Filme Stretch s/Tubete 4KG x 500mm x 0,025 Micras", category: "filme-stretch", image: `/images/produtos/${1167}.png` },
    { id: "filme-stretch-bobina-padrao", name: "Filme Stretch s/Tubo Bobina Padrão", category: "filme-stretch", image: `/images/produtos/${1106}.png` },
    { id: "filme-stretch-pre-estirado", name: "Filme Stretch Pré-Estirado com Tubete", category: "filme-stretch", image: `/images/produtos/${1099}.png` },
    { id: "filme-stretch-pre-estirado-manual", name: "Filme Stretch Pré-Estirado Manual 450mm x 10 x 2,5", category: "filme-stretch", image: `/images/produtos/${1099}.png` },
    { id: "stretchinho-aplicador", name: "Bobina jumbo 500MM X 0,025 x 0,030 c/ 50kg", category: "filme-stretch", image: `/images/produtos/${1107}.png` },
    { id: "stretchinho-manopla", name: "Stretchinho com Manopla 100m", category: "filme-stretch", image: `/images/produtos/${1009}.png` },

    // ── FITAS ADESIVAS ────────────────────────────────────────────────────────
    { id: "fita-adesiva-48x100", name: "Fita Adesiva 48mm x 100m TR 5/80", category: "fitas-adesivas", image: `/images/produtos/${1164}.png` },
    { id: "fita-adesiva-48x1200", name: "Fita Adesiva 48mm x 1200m", category: "fitas-adesivas", image: `/images/produtos/${1164}.png` },
    { id: "fita-adesiva-hotmelt-45x100", name: "Fita Adesiva Hot Melt 45mm x 100m c/5", category: "fitas-adesivas", image: `/images/produtos/${1515}.png` },
    { id: "fita-adesiva-hotmelt-48x1200", name: "Fita Adesiva Hot Melt 48mm x 1200m", category: "fitas-adesivas", image: `/images/produtos/${1515}.png` },
    { id: "fita-adesiva-transparente-45x100", name: "Fita Adesiva Transparente 45mm x 100m", category: "fitas-adesivas", image: `/images/produtos/${1163}.png` },
    { id: "fita-adesiva-transparente-45x40", name: "Fita Adesiva Transparente 45mm x 40m c/5", category: "fitas-adesivas", image: `/images/produtos/${1163}.png` },
    { id: "fita-adesiva-cristal-45x45", name: "Fita Adesiva Cristal 45mm x 45m", category: "fitas-adesivas", image: `/images/produtos/${1163}.png` },
    { id: "fita-adesiva-cristal-18x50", name: "Fita Adesiva Cristal 18mm x 50m", category: "fitas-adesivas", image: `/images/produtos/${1163}.png` },
    { id: "fita-adesiva-cristal-45x100", name: "Fita Adesiva Cristal 45mm x 100m c/5", category: "fitas-adesivas", image: `/images/produtos/${1163}.png` },
    { id: "fita-adesiva-fitpel-45x100", name: "Fita Adesiva Fit-Pel Cristal 45mm x 100m c/5", category: "fitas-adesivas", image: `/images/produtos/${1133}.png` },
    { id: "fita-kraft", name: "Fita Adesiva Kraft 48mm x 50m MR 1/16 CX", category: "fitas-adesivas", image: `/images/produtos/${1154}.png` },
    { id: "fita-koretape", name: "Fita Marrom 45mm x 40m c/5", category: "fitas-adesivas", image: `/images/produtos/${1140}.png` },
    { id: "fita-dupla-face-18mm", name: "Fita Dupla Face 18mm x 30m", category: "fitas-adesivas", image: `/images/produtos/${1136}.png` },
    { id: "fita-dupla-face-12mm", name: "Fita Dupla Face 12mm x 30m", category: "fitas-adesivas", image: `/images/produtos/${1136}.png` },
    { id: "fita-dupla-face-pp-48mm", name: "Fita Dupla Face PP 48mm x 30m 2/16", category: "fitas-adesivas", image: `/images/produtos/${1136}.png` },
    { id: "fita-crepe-48mm-45m", name: "Fita Crepe Uso Geral 48mm x 45m 2/16", category: "fitas-adesivas", image: `/images/produtos/${1166}.png` },
    { id: "fita-crepe-48mm-50m", name: "Fita Crepe Uso Geral 48mm x 50m 2/16", category: "fitas-adesivas", image: `/images/produtos/${1166}.png` },
    { id: "fita-crepe-24mm-45m", name: "Fita Crepe Uso Geral 24mm x 45m 4/32", category: "fitas-adesivas", image: `/images/produtos/${117912}.png` },
    { id: "fita-crepe-24mm-50m", name: "Fita Crepe Uso Geral 24mm x 50m 4/32", category: "fitas-adesivas", image: `/images/produtos/${117912}.png` },
    { id: "fita-crepe-18mm-10m", name: "Fita Crepe 18mm x 10m", category: "fitas-adesivas", image: `/images/produtos/${1181}.png` },
    { id: "fita-crepe-18mm-50m", name: "Fita Crepe Uso Geral 18mm x 50m 5/40", category: "fitas-adesivas", image: `/images/produtos/${1181}.png` },
    { id: "fita-gomada-parda", name: "Fita Gomada Parda 80mm", category: "fitas-adesivas", image: `/images/produtos/${1121}.png` },
    { id: "fita-gomada-sem-nylon", name: "Fita Gomada Sem Reforço Nylon", category: "fitas-adesivas", image: `/images/produtos/${1122}.png` },
    { id: "fita-gomada-com-nylon", name: "Fita Gomada com Reforço Nylon", category: "fitas-adesivas", image: `/images/produtos/${1122}.png` },

    // ── FITAS DE ARQUEAR ─────────────────────────────────────────────────────
    { id: "fita-pet-19mm", name: "Fita PET 19mm", category: "fitas-arquear", image: `/images/produtos/${1141}.png` },
    { id: "fita-pet-16mm", name: "Fita PET 16mm", category: "fitas-arquear", image: `/images/produtos/${1141}.png` },
    { id: "fita-pet-13mm", name: "Fita PET 13mm", category: "fitas-arquear", image: `/images/produtos/${1141}.png` },
    { id: "fita-phoenix-azul", name: "Fita Phoenix Azul", category: "fitas-arquear", image: `/images/produtos/${1126}.png` },
    { id: "fita-phoenix-preta", name: "Fita Phoenix Preta", category: "fitas-arquear", image: `/images/produtos/${1125}.png` },
    { id: "fita-phoenix-branca", name: "Fita Phoenix Branca", category: "fitas-arquear", image: `/images/produtos/${1124}.png` },
    { id: "fita-dba", name: "Fita DBA Rolo 10mm x 0,65", category: "fitas-arquear", image: `/images/produtos/${1123}.png` },
    { id: "fitilho-reciclado", name: "Fitilho Reciclado", category: "fitas-arquear", image: `/images/produtos/${1127}.png` },
    { id: "fitilho-comum", name: "Fitilho Comum", category: "fitas-arquear", image: `/images/produtos/${1128}.png` },

    // ── PLÁSTICO E PROTEÇÃO ──────────────────────────────────────────────────
    { id: "plastico-bolha", name: "Plástico Bolha Rolo 120x100m x 0,025 Micras", category: "plastico-protecao", image: `/images/produtos/${1105}.png` },
    { id: "papelao-ondulado", name: "Papelão Ondulado", category: "plastico-protecao", image: `/images/produtos/${1131}.jpg` },
    { id: "lona-preta", name: "Lona Preta 4x110 20KG", category: "plastico-protecao", image: `/images/produtos/${1187}.png` },
    { id: "filme-pvc-380x800", name: "Filme PVC 380mm x 800m", category: "plastico-protecao", image: `/images/produtos/${1173}.png` },
    { id: "filme-pvc-380x1000", name: "Filme PVC 380mm x 9 x 1000m", category: "plastico-protecao", image: `/images/produtos/${1173}.png` },
    { id: "filme-pvc-380x700", name: "Filme PVC 380mm x 9 x 700m", category: "plastico-protecao", image: `/images/produtos/${1173}.png` },

    // ── BOBINAS E SACOS ──────────────────────────────────────────────────────
    { id: "bobina-fundo-estrela-p", name: "Bobina Fundo Estrela Lisa P CX c/6", category: "bobinas-sacos", image: `/images/produtos/${1145}.png` },
    { id: "bobina-fundo-estrela-m", name: "Bobina Fundo Estrela Lisa 34x45 M CX c/6", category: "bobinas-sacos", image: `/images/produtos/${1145}.png` },
    { id: "bobina-fundo-estrela-g", name: "Bobina Fundo Estrela Lisa 38x55 G CX c/6", category: "bobinas-sacos", image: `/images/produtos/${1145}.png` },
    { id: "bobina-papel-ondulado", name: "Bobina Papel Ondulado 1,20cm", category: "bobinas-sacos", image: `/images/produtos/${1131}.jpg` },
    { id: "bobina-rb-20x35", name: "Bobina RB Solda Funda 20x35 1,60KG c/700", category: "bobinas-sacos", image: `/images/produtos/${1108}.png` },
    { id: "bobina-rb-25x35", name: "Bobina RB Solda Funda 25x35 1,87KG c/700", category: "bobinas-sacos", image: `/images/produtos/${1109}.png` },
    { id: "bobina-rb-30x40", name: "Bobina RB Solda Funda 30x40 2,70KG c/700", category: "bobinas-sacos", image: `/images/produtos/${1110}.png` },
    { id: "bobina-rb-35x50", name: "Bobina RB Solda Funda 35x50 3,00KG c/600", category: "bobinas-sacos", image: `/images/produtos/${1111}.png` },
    { id: "bobina-rb-40x60", name: "Bobina RB Solda Funda 40x60 3,75KG c/500", category: "bobinas-sacos", image: `/images/produtos/${1112}.png` },
    { id: "saco-bd-virgem", name: "Saco BD Virgem RC 35x45x0,06 c/1KG", category: "bobinas-sacos", image: `/images/produtos/${1113}.png` },
    { id: "saco-bd-15x30", name: "Saco Plástico BD 15x30 Pacote 1KG", category: "bobinas-sacos", image: `/images/produtos/${1113}.png` },
    { id: "saco-lixo-30l", name: "Saco de Lixo 30L c/100", category: "bobinas-sacos", image: `/images/produtos/${1152}.png` },
    { id: "saco-lixo-50l", name: "Saco de Lixo 50L Fardo c/100", category: "bobinas-sacos", image: `/images/produtos/${1152}.png` },
    { id: "saco-lixo-70x90", name: "Saco de Lixo Transparente 70x90 c/100", category: "bobinas-sacos", image: `/images/produtos/${1160}.png` },
    { id: "saco-lixo-100l", name: "Saco de Lixo 100L c/100", category: "bobinas-sacos", image: `/images/produtos/${1152}.png` },
    { id: "saco-lixo-200l", name: "Saco de Lixo 200L Fardo c/100", category: "bobinas-sacos", image: `/images/produtos/${1152}.png` },

    // ── SACOLAS ──────────────────────────────────────────────────────────────
    { id: "sacola-branca-38x48", name: "Sacola Plástica Branca PCT 1.000un 38x48", category: "sacolas", image: `/images/produtos/${1170}.png` },
    { id: "sacola-verde-60x75", name: "Sacola Verde 60x75 PCT 5KG c/250un", category: "sacolas", image: `/images/produtos/${11111}.png` },
    { id: "sacola-verde-50x60", name: "Sacola Verde 50x60 PCT 5KG c/350un", category: "sacolas", image: `/images/produtos/${11111}.png` },
    { id: "sacola-verde-48x50", name: "Sacola Verde 48x50 PCT 5KG c/450un", category: "sacolas", image: `/images/produtos/${11111}.png` },

    // ── ETIQUETAS E IMPRESSÃO ─────────────────────────────────────────────────
    { id: "bobina-etiqueta-100x150", name: "Bobina de Etiqueta 100x150mm c/30", category: "etiquetas", image: `/images/produtos/${333}.png` },
    { id: "ribbon-cera-110x74", name: "Ribbon de Cera 110x74 c/2", category: "etiquetas", image: `/images/produtos/${1886}.png` },
    { id: "bobina-termica-57mm", name: "Bobina Térmica 57mm x 50 CX c/30", category: "etiquetas", image: `/images/produtos/${12122}.png` },

    // ── ACESSÓRIOS ───────────────────────────────────────────────────────────
    { id: "aplicador-fita-a", name: "Aplicador de Fita Adesiva Modelo A", category: "acessorios", image: `/images/produtos/${1171}.png` },
    { id: "aplicador-fita-b", name: "Aplicador de Fita Adesiva Modelo B", category: "acessorios", image: `/images/produtos/${1171}.png` },
    { id: "aplicador-stretch", name: "Aplicador Manual de Filme Stretch", category: "acessorios", image: `/images/produtos/${1009.1}.png` },
    { id: "esticador-pet", name: "Esticador de Fita PET Reforçado 13mm/16mm/19mm", category: "acessorios", image: `/images/produtos/${1148}.png` },
    { id: "selador-pet-13mm", name: "Selador PET 13mm", category: "acessorios", image: `/images/produtos/${1149}.png` },
    { id: "selador-pet-16mm", name: "Selador 16mm", category: "acessorios", image: `/images/produtos/${1149}.png` },
    { id: "cantoneira", name: "Cantoneira Plástica para Arquear", category: "acessorios", image: `/images/produtos/${1117}.png` },
    { id: "selo-metal-13mm", name: "Selo de Metal para Fita PET 13mm c/1500un", category: "acessorios", image: `/images/produtos/${1120}.png` },
    { id: "selo-metal-16mm", name: "Selo de Metal para Fita PET 16mm c/1000un", category: "acessorios", image: `/images/produtos/${1120}.png` },
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
    q: "Como solicito orçamento?",
    a: "Use o botão de WhatsApp no site, o formulário de contato ou clique em “Saiba mais” no produto desejado — a mensagem já vem pré-preenchida.",
  },
  {
    q: "Posso comprar presencialmente?",
    a: "Não, as vendas são realizadas exclusivamente pelos canais digitais.",
  },
];
