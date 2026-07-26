/**
 * Enrichit les mots-clés du catalogue scène à partir de l'ancien catalogue
 * (sans #illustration / #manga / #scène), puis réécrit CATALOG.md + JSON.
 *
 * Usage: node scripts/enrich-scene-catalog-tags.cjs
 */
const fs = require("fs");
const path = require("path");

const root = process.cwd();
const sceneDir = path.join(root, "public/assets/expression/images/scene");
const catalogJsonPath = path.join(
  root,
  "lib/curriculum/content/communication/scene-image-catalog.json",
);
const legacyPath = path.join(root, "scripts/.scene-tags-legacy.json");
const catalogMdPath = path.join(sceneDir, "CATALOG.md");

const GENERIC = new Set(["illustration", "manga", "scène", "scene", "animé", "anime"]);

const THEME_TITLES = {
  "visiter-zoo": "Visiter le zoo",
  "visiter-musee": "Visiter le musée",
  "visiter-appartement": "Visiter un appartement",
  "accepter-invitation": "Accepter / proposer une invitation",
  "recevoir-invitation": "Recevoir une invitation",
  "accueil-hotel": "Accueil à l'hôtel",
  "accueil-inscription": "Accueil / inscription",
};

function normKey(t) {
  return t
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function clean(tags) {
  const out = [];
  const seen = new Set();
  for (const raw of tags || []) {
    const t = String(raw).replace(/^#/, "").trim();
    if (!t) continue;
    if (t.includes("\uFFFD") || /\?\?/.test(t)) continue;
    const k = normKey(t);
    if (GENERIC.has(k) || seen.has(k)) continue;
    seen.add(k);
    out.push(`#${t}`);
  }
  return out;
}

function tagsFromSlug(slug) {
  return slug
    .split(/[-.]+/)
    .filter((w) => w && !/^\d+$/.test(w) && !GENERIC.has(w))
    .map((w) => `#${w}`);
}

function titleFromSlug(slug) {
  if (THEME_TITLES[slug]) return THEME_TITLES[slug];
  return slug
    .split("-")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function main() {
  if (!fs.existsSync(legacyPath)) {
    console.error("Manquant:", legacyPath, "— régénère d’abord les tags legacy.");
    process.exit(1);
  }
  const legacy = JSON.parse(fs.readFileSync(legacyPath, "utf8"));
  const catalog = JSON.parse(fs.readFileSync(catalogJsonPath, "utf8"));

  let enriched = 0;
  for (const family of catalog.families) {
    const leg = legacy[family.key];
    for (const v of family.variants) {
      const fromLegacyFile = leg?.variants?.[v.file] || [];
      const fromLegacyFamily = leg?.family || [];
      const fromLegacy = fromLegacyFile.length ? fromLegacyFile : fromLegacyFamily;
      const current = (v.tags || []).map((t) => t.replace(/^#/, ""));
      const slugTags = tagsFromSlug(family.key).map((t) => t.slice(1));
      const isSlugOnly =
        current.length > 0 && current.every((t) => slugTags.includes(normKey(t)) || slugTags.includes(t));

      let merged;
      if (!isSlugOnly && current.length >= 3) {
        // Garder tags spécifiques (ex. mots-clés zoo/musée) + legacy utile
        merged = clean([
          ...current.map((t) => `#${t}`),
          ...fromLegacy.map((t) => `#${t}`),
        ]);
      } else if (fromLegacy.length) {
        merged = clean([
          ...fromLegacy.map((t) => `#${t}`),
          ...slugTags.map((t) => `#${t}`),
        ]);
        enriched += 1;
      } else {
        merged = clean(slugTags.map((t) => `#${t}`));
      }
      v.tags = merged;
    }

    const fam = [];
    const seen = new Set();
    for (const v of family.variants) {
      for (const t of v.tags) {
        const k = t.toLowerCase();
        if (seen.has(k)) continue;
        seen.add(k);
        fam.push(t);
      }
    }
    family.tags = fam;
  }

  const byPath = {};
  const byId = {};
  for (const f of catalog.families) {
    for (const v of f.variants) {
      byPath[v.path] = f.id;
      byId[v.id] = f.id;
    }
  }
  catalog.byPath = byPath;
  catalog.byId = byId;
  catalog.version = 2;
  catalog.description =
    "Catalogue scènes CE/CO : familles thématiques, variantes, mots-clés pertinents";

  fs.writeFileSync(catalogJsonPath, `${JSON.stringify(catalog, null, 2)}\n`, "utf8");

  const totalFiles = catalog.families.reduce((n, f) => n + f.variants.length, 0);
  const lines = [
    "# Catalogue des images scène",
    "",
    `Total familles : **${catalog.families.length}** — fichiers : **${totalFiles}**`,
    "",
    "Numérotation : `N` = image principale, `N.1`, `N.2`… = variantes du même thème.",
    "En CE/CO, une famille est tirée **aléatoirement** parmi ses variantes.",
    "",
  ];
  for (const family of catalog.families) {
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
  fs.writeFileSync(catalogMdPath, `${lines.join("\n").replace(/\n{3,}/g, "\n\n")}\n`, "utf8");

  console.log("Variantes enrichies depuis legacy:", enriched);
  const pain = catalog.families.find((f) => f.key === "acheter-pain");
  const zoo = catalog.families.find((f) => f.key === "visiter-zoo");
  console.log("acheter-pain:", pain?.tags?.join(" "));
  console.log("visiter-zoo:", zoo?.tags?.join(" "));
}

main();
