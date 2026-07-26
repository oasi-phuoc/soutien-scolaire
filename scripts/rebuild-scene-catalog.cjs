/**
 * Régénère CATALOG.md + scene-image-catalog.json à partir des fichiers
 * numérotés `N (k).ext` dans public/assets/expression/images/scene/.
 *
 * Les clés thématiques (slugs) et tags sont repris du catalogue JSON existant
 * quand la famille N est déjà connue. Les nouvelles variantes `N (k)` d’une
 * famille existante entrent automatiquement dans le pool.
 *
 * Usage:
 *   node scripts/rebuild-scene-catalog.cjs
 */
const fs = require("fs");
const path = require("path");

const root = process.cwd();
const sceneDir = path.join(root, "public/assets/expression/images/scene");
const catalogMd = path.join(sceneDir, "CATALOG.md");
const catalogJson = path.join(
  root,
  "lib/curriculum/content/communication/scene-image-catalog.json",
);

const GENERIC_TAGS = new Set([
  "illustration",
  "manga",
  "scène",
  "scene",
  "animé",
  "anime",
]);

const THEME_TITLES = {
  "visiter-zoo": "Visiter le zoo",
  "visiter-musee": "Visiter le musée",
  "visiter-appartement": "Visiter un appartement",
  "accepter-invitation": "Accepter / proposer une invitation",
  "recevoir-invitation": "Recevoir une invitation",
  "accueil-hotel": "Accueil à l'hôtel",
  "accueil-inscription": "Accueil / inscription",
};

const NUMBERED_RE = /^(\d+)\s+\((\d+)\)\.(webp|png|jpe?g)$/i;

function slugifyTag(raw) {
  return String(raw)
    .replace(/^#/, "")
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/œ/g, "oe")
    .replace(/æ/g, "ae")
    .replace(/['']/g, "")
    .replace(/\s+/g, "-");
}

function titleFromSlug(slug) {
  if (THEME_TITLES[slug]) return THEME_TITLES[slug];
  return String(slug)
    .split(/[-.]+/)
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function tagsFromSlug(slug) {
  return String(slug)
    .split(/[-.]+/)
    .filter((w) => w && !/^\d+$/.test(w))
    .filter((w) => !GENERIC_TAGS.has(w))
    .map((w) => `#${w}`);
}

function cleanTags(tags) {
  const out = [];
  const seen = new Set();
  for (const raw of tags || []) {
    const t = String(raw).replace(/^#/, "").trim();
    if (!t || t.includes("\uFFFD") || /\?\?/.test(t)) continue;
    const k = slugifyTag(t);
    if (!k || GENERIC_TAGS.has(k) || seen.has(k)) continue;
    seen.add(k);
    out.push(`#${t}`);
  }
  return out;
}

function loadPrevCatalog() {
  if (!fs.existsSync(catalogJson)) return { byId: new Map(), tagsByFile: new Map() };
  const prev = JSON.parse(fs.readFileSync(catalogJson, "utf8"));
  /** @type {Map<string, { key: string, tags: string[], variantTags: Map<string, string[]> }>} */
  const byId = new Map();
  const tagsByFile = new Map();
  for (const family of prev.families || []) {
    const variantTags = new Map();
    for (const v of family.variants || []) {
      variantTags.set(v.file, cleanTags(v.tags));
      tagsByFile.set(v.file, cleanTags(v.tags));
    }
    byId.set(String(family.id), {
      key: family.key,
      tags: cleanTags(family.tags),
      variantTags,
    });
  }
  return { byId, tagsByFile };
}

function collectNumberedFamilies(prevById) {
  const files = fs.readdirSync(sceneDir).filter((f) => NUMBERED_RE.test(f));

  /** @type {Map<number, { index: number, file: string }[]>} */
  const groups = new Map();
  for (const file of files) {
    const m = file.match(NUMBERED_RE);
    const familyNum = Number(m[1]);
    const index = Number(m[2]);
    const list = groups.get(familyNum) || [];
    list.push({ index, file });
    groups.set(familyNum, list);
  }

  const familyNums = [...groups.keys()].sort((a, b) => a - b);
  const families = [];

  for (const familyNum of familyNums) {
    const id = String(familyNum);
    const items = groups.get(familyNum).sort((a, b) => a.index - b.index || a.file.localeCompare(b.file, "fr"));
    const prev = prevById.get(id);
    const key = prev?.key || `theme-${id}`;

    const variants = items.map((item, vIdx) => {
      const prevTags = prev?.variantTags?.get(item.file);
      // Si nouveau fichier (ex. 9 (10)), tags famille par défaut
      const tags =
        prevTags && prevTags.length
          ? prevTags
          : prev?.tags?.length
            ? prev.tags
            : tagsFromSlug(key);
      const vid = vIdx === 0 ? id : `${id}.${vIdx}`;
      return {
        id: vid,
        familyId: id,
        familyKey: key,
        file: item.file,
        path: `/assets/expression/images/scene/${item.file}`,
        tags: cleanTags(tags),
      };
    });

    const familyTags = [];
    const seen = new Set();
    const seedTags = prev?.tags?.length ? prev.tags : [];
    for (const t of [...seedTags, ...variants.flatMap((v) => v.tags)]) {
      const k = t.toLowerCase();
      if (seen.has(k)) continue;
      if (GENERIC_TAGS.has(slugifyTag(t))) continue;
      seen.add(k);
      familyTags.push(t.startsWith("#") ? t : `#${t}`);
    }

    families.push({
      id,
      key,
      tags: familyTags.length ? familyTags : tagsFromSlug(key),
      variants,
    });
  }

  return families;
}

function writeCatalogMd(families) {
  const totalFiles = families.reduce((n, f) => n + f.variants.length, 0);
  const lines = [];
  lines.push("# Catalogue des images scène");
  lines.push("");
  lines.push(`Total familles : **${families.length}** — fichiers : **${totalFiles}**`);
  lines.push("");
  lines.push("Fichiers : `N (1)`, `N (2)`… = variantes du thème N (noms courts).");
  lines.push("Numérotation catalogue : `N` = principale, `N.1`, `N.2`… = variantes.");
  lines.push("En CE/CO, une famille est tirée **aléatoirement** parmi ses variantes.");
  lines.push("Ajouter `N (k)` puis relancer ce script → entre dans le pool aléatoire.");
  lines.push("");

  for (const family of families) {
    lines.push(`## Famille ${family.id} — ${titleFromSlug(family.key)}`);
    lines.push("");
    lines.push(`\`${family.key}\``);
    lines.push("");
    if (family.tags.length) lines.push(family.tags.join(" "));
    lines.push("");
    for (const v of family.variants) {
      lines.push(`- **${v.id}** — \`${v.file}\``);
      if (v.tags.length) lines.push(`  ${v.tags.join(" ")}`);
    }
    lines.push("");
  }

  fs.writeFileSync(catalogMd, `${lines.join("\n").replace(/\n{3,}/g, "\n\n")}\n`, "utf8");
  console.log("→", path.relative(root, catalogMd));
}

function writeCatalogJson(families) {
  const byPath = {};
  const byId = {};
  for (const family of families) {
    for (const v of family.variants) {
      byPath[v.path] = family.id;
      byId[v.id] = family.id;
    }
  }

  const payload = {
    version: 3,
    description:
      "Catalogue scènes CE/CO : fichiers N (k), familles thématiques (clé slug), variantes aléatoires",
    families: families.map(({ id, key, tags, variants }) => ({
      id,
      key,
      tags,
      variants,
    })),
    byPath,
    byId,
  };

  fs.writeFileSync(catalogJson, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
  console.log("→", path.relative(root, catalogJson));
}

function main() {
  const { byId } = loadPrevCatalog();
  const families = collectNumberedFamilies(byId);

  const leftover = fs
    .readdirSync(sceneDir)
    .filter((f) => /\.(webp|png|jpe?g)$/i.test(f))
    .filter((f) => !NUMBERED_RE.test(f));
  if (leftover.length) {
    console.warn(
      `Attention: ${leftover.length} fichier(s) non numéroté(s) ignoré(s):`,
      leftover.slice(0, 8).join(", "),
      leftover.length > 8 ? "…" : "",
    );
  }

  writeCatalogMd(families);
  writeCatalogJson(families);

  const multi = families.filter((f) => f.variants.length > 1).length;
  const images = families.reduce((n, f) => n + f.variants.length, 0);
  console.log(`Familles: ${families.length}, images: ${images}, multi: ${multi}`);
}

main();
