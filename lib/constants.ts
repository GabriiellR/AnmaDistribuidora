/**
 * Dados da Anma Distribuidora.
 * E-mail: confira no catálogo PDF e atualize se for diferente do placeholder abaixo.
 * Produtos: o PDF parece escaneado (sem texto extraível); ajuste a lista conforme o catálogo impresso.
 */
export const COMPANY = {
  name: "Anma Distribuidora",
  /** Ano provisório até confirmar com a empresa */
  foundedYear: 2022,
  tagline: "Embalagens inovadoras e sustentáveis",
  phone: "(31) 97250-2023",
  phoneTel: "+5531972502023",
  /** Único WhatsApp comercial */
  whatsappUrl: "https://wa.me/5531972502023",
  /** Mesmo número nos CTAs do hero */
  whatsappHeroUrl: "https://wa.me/5531972502023",
  /** Atualize com o e-mail oficial do catálogo quando tiver */
  email: "contato@anmadistribuidora.com.br",
  address:
    "Rua CC 342, Galpão 3 – Arvoredo, Contagem – MG, 32113-215",
  addressShort: "Rua CC 342, Galpão 3 – Arvoredo, Contagem – MG",
  hours: "Das 08h às 18h",
  coverage: "Atendimento em todo o Brasil",
  social: {
    instagram: "https://www.instagram.com/anma.distribuidora/",
  },
  description:
    "Distribuidora de embalagens com foco em filme stretch, proteção de carga e insumos para sua operação — do comércio à indústria.",
} as const;

/** Mensagem pré-preenchida no WhatsApp para orçamento de um produto */
export function whatsappProductLink(productName: string) {
  const text = `Olá! Vim pelo site da ${COMPANY.name} e gostaria de informações/orçamento sobre: ${productName}`;
  return `${COMPANY.whatsappUrl}?text=${encodeURIComponent(text)}`;
}

export function whatsappGenericMessage(message: string) {
  return `${COMPANY.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

export type ProductCategoryId =
  | "filme-stretch"
  | "nucleos-tubos"
  | "plastico-protecao"
  | "fitas-arqueacao"
  | "acessorios";

export const PRODUCT_CATEGORIES: {
  id: ProductCategoryId;
  label: string;
}[] = [
  { id: "filme-stretch", label: "Filme stretch" },
  { id: "nucleos-tubos", label: "Núcleos e tubos" },
  { id: "plastico-protecao", label: "Plástico bolha e proteção" },
  { id: "fitas-arqueacao", label: "Fitas e arqueação" },
  { id: "acessorios", label: "Acessórios logísticos" },
];

export interface ProductItem {
  id: string;
  name: string;
  category: ProductCategoryId;
}

/** Catálogo baseado no segmento (frota/estoque); edite para espelhar o PDF 2025 */
export const PRODUCTS: ProductItem[] = [
  { id: "fs-1", name: "Filme stretch manual — bobinas diversas", category: "filme-stretch" },
  { id: "fs-2", name: "Filme stretch para uso automático / máquina", category: "filme-stretch" },
  { id: "fs-3", name: "Filme stretch pré-estirado", category: "filme-stretch" },
  { id: "fs-4", name: "Filme stretch transparente alta performance", category: "filme-stretch" },
  { id: "fs-5", name: "Filme stretch para unitização de paletes", category: "filme-stretch" },
  { id: "fs-6", name: "Filme stretch — consulte bitolas e micras", category: "filme-stretch" },
  { id: "nt-1", name: "Tubos / núcleos de papelão para bobinas", category: "nucleos-tubos" },
  { id: "nt-2", name: "Núcleos industriais para embalagem", category: "nucleos-tubos" },
  { id: "nt-3", name: "Tubos de papelão sob consulta", category: "nucleos-tubos" },
  { id: "pp-1", name: "Plástico bolha para proteção de produtos", category: "plastico-protecao" },
  { id: "pp-2", name: "Manta / plástico bolha em bobina", category: "plastico-protecao" },
  { id: "pp-3", name: "Filme bolha — diversas larguras", category: "plastico-protecao" },
  { id: "fa-1", name: "Fita adesiva para embalagem", category: "fitas-arqueacao" },
  { id: "fa-2", name: "Fita PET para arqueação", category: "fitas-arqueacao" },
  { id: "fa-3", name: "Fita PP para arqueação", category: "fitas-arqueacao" },
  { id: "fa-4", name: "Kit arqueação — consulte modelos", category: "fitas-arqueacao" },
  { id: "ac-1", name: "Acessórios para paletização", category: "acessorios" },
  { id: "ac-2", name: "Suprimentos para fechamento de caixas", category: "acessorios" },
  { id: "ac-3", name: "Demais itens de embalagem — sob consulta", category: "acessorios" },
];

export const FEATURES_HOME = [
  {
    icon: "layers" as const,
    title: "Tudo para embalar e proteger",
    description:
      "Filme stretch, plástico bolha, fitas, núcleos e acessórios para unitizar cargas, proteger produtos e agilizar sua operação — empresas e comércio.",
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
    q: "Posso comprar em quantidades menores?",
    a: "Depende do item. Consulte nossa equipe pelo WhatsApp informando produto e quantidade desejada.",
  },
  {
    q: "Como solicito orçamento?",
    a: "Use o botão de WhatsApp no site, o formulário de contato ou clique em “Saiba mais” no produto desejado — a mensagem já vem pré-preenchida.",
  },
];
