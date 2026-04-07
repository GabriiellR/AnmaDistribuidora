/**
 * Copia fotos da pasta assets do Cursor para public/images/produtos/
 * Execute: node scripts/sync-product-images.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.join(__dirname, "..");
const destDir = path.join(repoRoot, "public", "images", "produtos");
const assetsDir = path.join(
  process.env.USERPROFILE || "",
  ".cursor",
  "projects",
  "c-Users-estagio-analise-source-repos-AnmaDistribuidora",
  "assets"
);

/** slug destino → parte única do nome do arquivo em assets */
const MAP = {
  "filme-stretch-piramide": "images_1167-",
  "filme-stretch-duas-bobinas": "images_1187-",
  "filme-stretch-com-tubete": "filme-stretch-com-tubete",
  "fita-kraft-reforcada": "images_1186-",
  "fita-gomada-kraft": "images_1184-",
  "koretech-transparente-48x100": "images_1109-",
  "koretech-marrom-45x40": "images_1112-",
  "koretech-transparente-45x40": "images_1110-",
  "koretech-transparente-18x50-pct10": "images_1117-",
  "koretech-kraft-48x50": "images_1181-",
  "fita-pp-preta-arquear": "images_1165-",
  "fita-pp-azul-arquear": "images_1178-",
  "fita-pp-branca-arquear": "images_1173-",
  "fita-pet-verde-selo-mcpack": "images_1170-",
  "sacolas-plasticas-verdes": "images_1166-",
  "fitilho-plastico": "images_1172-",
  "fita-preta-texturizada-alt": "images_1164-",
  "stretch-bobinas-empilhadas-alt": "images_1163-",
  "koretech-marrom-pack-alt": "images_1113-",
  "koretech-transp-pack-alt": "images_1111-",
  "plastico-bolha-nopc": "images_1155-",
  "manta-protecao": "images_1154-",
  "lacres-acessorios": "images_1150-",
  "embalagem-flexivel": "images_1149-",
  "fita-adesiva-industrial": "images_1148-",
  "suprimentos-caixa": "images_1145-",
  "kit-embalagem": "images_1143-",
  "stretch-manual-bobina": "images_1141-",
  "protecao-carga": "images_1140-",
  "filme-paletizacao": "images_1139-",
  "insumos-logistica": "images_1135-",
  "bobina-industrial": "images_1134-",
  "stretch-industrial": "images_1133-",
  "embalagem-seguranca": "images_1131-",
  "filme-estiravel": "images_1129-",
  "stretch-automatico": "images_1128-",
  "unitizador-pallets": "images_1127-",
  "filme-encolhivel-alt": "images_1126-",
  "protecao-unitaria": "images_1125-",
  "embalagem-b2b": "images_1124-",
  "stretch-premium": "images_1123-",
  "filme-industrial": "images_1122-",
  "bobina-stretch-alt": "images_1121-",
  "paletizacao-pro": "images_1120-",
  "embalagem-resistente": "images_1116-",
  "fita-multiuso": "images_1115-",
  "suprimento-embalagem": "images_1108-",
  "fechamento-caixa": "images_1107-",
  "adesivo-industrial": "images_1105-",
  "manta-diversas": "images_1104-",
  "protecao-geral": "images_1099-",
  "catalogo-extra-1": "images_1009-1d7f2cf5",
  "catalogo-extra-2": "images_1886-",
};

function main() {
  if (!fs.existsSync(assetsDir)) {
    console.error("Pasta assets não encontrada:", assetsDir);
    console.error("Ajuste assetsDir no script ou copie as PNG para public/images/produtos manualmente.");
    process.exit(1);
  }
  fs.mkdirSync(destDir, { recursive: true });
  const files = fs.readdirSync(assetsDir).filter((f) => f.toLowerCase().endsWith(".png"));
  let ok = 0;
  for (const [slug, needle] of Object.entries(MAP)) {
    const match = files.find((f) => f.includes(needle));
    if (!match) {
      console.warn("Não achado:", needle);
      continue;
    }
    const from = path.join(assetsDir, match);
    const to = path.join(destDir, `${slug}.png`);
    fs.copyFileSync(from, to);
    console.log(slug, "<-", match);
    ok++;
  }
  console.log("\nCopiados:", ok, "de", Object.keys(MAP).length);
}

main();
