/**
 * 1) Renomme les images temporaires `N (M).webp` selon `0 mot clé.txt`
 * 2) Régénère CATALOG.md + scene-image-catalog.json
 *
 * Usage: node scripts/rebuild-scene-catalog.cjs
 */
const fs = require("fs");
const path = require("path");

const root = process.cwd();
const sceneDir = path.join(root, "public/assets/expression/images/scene");
const keywordsFile = path.join(sceneDir, "0 mot clé.txt");
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

/** Thème numérique → slug famille (convention existante). */
const THEME_SLUGS = {
  1: "visiter-zoo",
  2: "visiter-musee",
  3: "visiter-appartement",
  4: "accepter-invitation",
  5: "recevoir-invitation",
  6: "accueil-hotel",
  7: "accueil-inscription",
};

const THEME_TITLES = {
  "visiter-zoo": "Visiter le zoo",
  "visiter-musee": "Visiter le musée",
  "visiter-appartement": "Visiter un appartement",
  "accepter-invitation": "Accepter / proposer une invitation",
  "recevoir-invitation": "Recevoir une invitation",
  "accueil-hotel": "Accueil à l'hôtel",
  "accueil-inscription": "Accueil / inscription",
};

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

function toHashtag(tag) {
  const t = tag.replace(/^#/, "").trim();
  return t ? `#${t}` : null;
}

function parseKeywordsFile(text) {
  /** @type {Map<string, { theme: number, index: number, tags: string[] }>} */
  const byTempName = new Map();
  const lines = text.split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("//")) continue;
    const m = trimmed.match(/^(\d+)\s*\((\d+)\)\s*(.*)$/);
    if (!m) continue;
    let theme = Number(m[1]);
    let index = Number(m[2]);
    const tags = (m[3].match(/#[^\s#]+/g) || [])
      .map((t) => t.slice(1).trim())
      .filter(Boolean)
      .filter((t) => !GENERIC_TAGS.has(slugifyTag(t)));

    // Correction: 1 (2) lion en double → 1 (3)
    const key = `${theme} (${index})`;
    if (byTempName.has(key) && theme === 1 && index === 2) {
      index = 3;
    }
    byTempName.set(`${theme} (${index})`, { theme, index, tags });
  }
  return byTempName;
}

function titleFromSlug(slug) {
  if (THEME_TITLES[slug]) return THEME_TITLES[slug];
  return slug
    .split("-")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function tagsFromSlug(slug) {
  return slug
    .split(/[-.]+/)
    .filter((w) => w && !/^\d+$/.test(w))
    .filter((w) => !GENERIC_TAGS.has(w))
    .map((w) => `#${w}`);
}

function variantFileName(slug, variantIndex) {
  // variantIndex 0 → slug.webp ; 1 → slug (2).webp ; 2 → slug (3).webp
  if (variantIndex === 0) return `${slug}.webp`;
  return `${slug} (${variantIndex + 1}).webp`;
}

function familyKeyFromFile(file) {
  const base = file.replace(/\.(webp|png|jpe?g)$/i, "");
  // "name (2)" / "name (10)" → name
  const paren = base.match(/^(.*)\s+\((\d+)\)$/);
  if (paren) return paren[1].trim();
  return base;
}

function variantOrderFromFile(file) {
  const base = file.replace(/\.(webp|png|jpe?g)$/i, "");
  const paren = base.match(/^(.*)\s+\((\d+)\)$/);
  if (paren) return Number(paren[2]);
  return 1; // principal
}

/** Reconstruit tagsByFile après renommage (fichiers déjà au bon nom). */
function rebuildTagsFromKeywordsOnly(keywordMap) {
  const tagsByFile = new Map();
  /** @type {Map<number, { index: number, tags: string[] }[]>} */
  const byTheme = new Map();
  for (const info of keywordMap.values()) {
    const list = byTheme.get(info.theme) || [];
    list.push({ index: info.index, tags: info.tags });
    byTheme.set(info.theme, list);
  }
  for (const [theme, items] of byTheme) {
    const slug = THEME_SLUGS[theme];
    if (!slug) continue;
    items.sort((a, b) => a.index - b.index);
    const existing = fs
      .readdirSync(sceneDir)
      .filter((f) => /\.(webp|png)$/i.test(f))
      .filter((f) => familyKeyFromFile(f) === slug);
    const existingMaxBefore = existing.filter((f) => {
      // Fichiers qui existaient avant la série mots-clés : ceux sans tags dédiés
      return true;
    }).length;
    // Associer dans l’ordre numérique des fichiers du slug
    const ordered = existing.sort(
      (a, b) => variantOrderFromFile(a) - variantOrderFromFile(b) || a.localeCompare(b, "fr"),
    );
    // Si plus de fichiers que d’entrées mots-clés, les premiers « en trop »
    // (ex. visiter-musee.webp préexistant) gardent des tags slug ; les suivants
    // reçoivent les tags mots-clés dans l’ordre.
    const extra = Math.max(0, ordered.length - items.length);
    items.forEach((item, i) => {
      const file = ordered[extra + i];
      if (!file) return;
      tagsByFile.set(
        file,
        item.tags.map((t) => `#${t}`),
      );
    });
  }
  return { tagsByFile, renames: [] };
}

function renameTempImages(keywordMap) {
  /** tags par fichier final */
  const tagsByFile = new Map();
  const renames = [];

  // Grouper par thème
  /** @type {Map<number, { index: number, tags: string[], temp: string }[]>} */
  const byTheme = new Map();
  for (const [temp, info] of keywordMap) {
    const list = byTheme.get(info.theme) || [];
    list.push({ index: info.index, tags: info.tags, temp });
    byTheme.set(info.theme, list);
  }

  for (const [theme, items] of byTheme) {
    const slug = THEME_SLUGS[theme];
    if (!slug) {
      console.warn("Thème inconnu:", theme);
      continue;
    }
    items.sort((a, b) => a.index - b.index);

    // S'il existe déjà slug.webp hors série temporaire, les nouvelles
    // variantes commencent après les fichiers existants du même slug.
    const existing = fs
      .readdirSync(sceneDir)
      .filter((f) => /\.(webp|png)$/i.test(f))
      .filter((f) => familyKeyFromFile(f) === slug)
      .filter((f) => !/^\d+\s+\(\d+\)\./.test(f));

    const existingMax = existing.reduce((max, f) => {
      const n = variantOrderFromFile(f);
      return Math.max(max, n);
    }, 0);

    // Si aucun fichier existant, index 1 = principal ; sinon on ajoute (existingMax+1)…
    let nextNum = existingMax > 0 ? existingMax + 1 : 1;

    for (const item of items) {
      const srcName = `${item.temp}.webp`;
      const src = path.join(sceneDir, srcName);
      if (!fs.existsSync(src)) {
        console.warn("Manquant:", srcName);
        continue;
      }
      const destName = nextNum === 1 ? `${slug}.webp` : `${slug} (${nextNum}).webp`;
      const dest = path.join(sceneDir, destName);
      if (path.resolve(src) !== path.resolve(dest)) {
        if (fs.existsSync(dest)) {
          console.warn("Collision, skip:", destName);
          continue;
        }
        fs.renameSync(src, dest);
        console.log(`rename ${srcName} → ${destName}`);
      }
      tagsByFile.set(destName, item.tags.map((t) => `#${t}`));
      renames.push({ from: srcName, to: destName, slug, tags: item.tags });
      nextNum += 1;
    }
  }
  return { tagsByFile, renames };
}

function collectFamilies(tagsByFile) {
  const files = fs
    .readdirSync(sceneDir)
    .filter((f) => /\.(webp|png)$/i.test(f))
    .filter((f) => !/^\d+\s+\(\d+\)\./.test(f))
    .sort((a, b) => a.localeCompare(b, "fr"));

  /** @type {Map<string, string[]>} */
  const groups = new Map();
  for (const file of files) {
    const key = familyKeyFromFile(file);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(file);
  }

  // Trier variantes : principal (sans paren) puis (2), (3)…
  for (const [key, list] of groups) {
    list.sort((a, b) => variantOrderFromFile(a) - variantOrderFromFile(b) || a.localeCompare(b, "fr"));
    groups.set(key, list);
  }

  const keys = [...groups.keys()].sort((a, b) => a.localeCompare(b, "fr"));
  const families = [];

  keys.forEach((key, idx) => {
    const id = String(idx + 1);
    const filesInFamily = groups.get(key);
    const variantTagLists = filesInFamily.map((file) => {
      if (tagsByFile.has(file)) return tagsByFile.get(file);
      // fallback : tags dérivés du slug (sans génériques)
      return tagsFromSlug(key);
    });

    // Tags famille = union ordonnée (première variante en tête, puis spécifiques)
    const familyTags = [];
    const seen = new Set();
    for (const tags of variantTagLists) {
      for (const t of tags) {
        const k = t.toLowerCase();
        if (seen.has(k)) continue;
        // skip génériques
        if (GENERIC_TAGS.has(slugifyTag(t))) continue;
        seen.add(k);
        familyTags.push(t.startsWith("#") ? t : `#${t}`);
      }
    }

    const variants = filesInFamily.map((file, vIdx) => {
      const vid = vIdx === 0 ? id : `${id}.${vIdx}`;
      const tags = (variantTagLists[vIdx] || []).map((t) => (t.startsWith("#") ? t : `#${t}`));
      return {
        id: vid,
        familyId: id,
        familyKey: key,
        file,
        path: `/assets/expression/images/scene/${file}`,
        tags,
      };
    });

    families.push({
      id,
      key,
      title: titleFromSlug(key),
      tags: familyTags,
      variants,
    });
  });

  return families;
}

function writeCatalogMd(families) {
  const totalFiles = families.reduce((n, f) => n + f.variants.length, 0);
  const lines = [];
  lines.push("# Catalogue des images scène");
  lines.push("");
  lines.push(`Total familles : **${families.length}** — fichiers : **${totalFiles}**`);
  lines.push("");
  lines.push("Numérotation : `N` = image principale, `N.1`, `N.2`… = variantes du même thème.");
  lines.push("En CE/CO, une famille est tirée **aléatoirement** parmi ses variantes.");
  lines.push("");

  for (const family of families) {
    lines.push(`## Famille ${family.id} — ${family.title}`);
    lines.push("");
    lines.push(`\`${family.key}\``);
    lines.push("");
    if (family.tags.length) lines.push(family.tags.join(" "));
    lines.push("");
    for (const v of family.variants) {
      const label = v.id.includes(".") ? v.id : family.id;
      // Afficher N / N.1
      const displayId = v.id;
      lines.push(`- **${displayId}** — \`${v.file}\``);
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

  // JSON consommé par scene-image-catalog.ts (sans champ title)
  const payload = {
    version: 2,
    description:
      "Catalogue scènes CE/CO : familles thématiques, variantes (N.1, N.2), mots-clés pertinents",
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
  if (!fs.existsSync(keywordsFile)) {
    console.error("Fichier mots-clés introuvable:", keywordsFile);
    process.exit(1);
  }

  const keywordMap = parseKeywordsFile(fs.readFileSync(keywordsFile, "utf8"));
  console.log("Entrées mots-clés:", keywordMap.size);

  const noRename = process.argv.includes("--catalog-only");
  const { tagsByFile, renames } = noRename
    ? rebuildTagsFromKeywordsOnly(keywordMap)
    : renameTempImages(keywordMap);
  console.log(noRename ? "Mode catalog-only" : `Renommages: ${renames.length}`);

  const families = collectFamilies(tagsByFile);
  writeCatalogMd(families);
  writeCatalogJson(families);

  const multi = families.filter((f) => f.variants.length > 1).length;
  console.log(`Familles: ${families.length}, multi-variantes: ${multi}`);
}

main();
