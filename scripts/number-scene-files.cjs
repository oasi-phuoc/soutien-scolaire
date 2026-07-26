/**
 * Renomme les images scène en noms courts `N (k).ext`
 * (N = id famille catalogue, k = indice variante 1-based).
 * Met à jour scene-image-catalog.json + CATALOG.md.
 *
 * Usage: node scripts/number-scene-files.cjs
 */
const fs = require("fs");
const path = require("path");

const root = process.cwd();
const sceneDir = path.join(root, "public/assets/expression/images/scene");
const catalogJsonPath = path.join(
  root,
  "lib/curriculum/content/communication/scene-image-catalog.json",
);
const catalogMdPath = path.join(sceneDir, "CATALOG.md");

const THEME_TITLES = {
  "visiter-zoo": "Visiter le zoo",
  "visiter-musee": "Visiter le musée",
  "visiter-appartement": "Visiter un appartement",
  "accepter-invitation": "Accepter / proposer une invitation",
  "recevoir-invitation": "Recevoir une invitation",
  "accueil-hotel": "Accueil à l'hôtel",
  "accueil-inscription": "Accueil / inscription",
};

function titleFromSlug(slug) {
  if (THEME_TITLES[slug]) return THEME_TITLES[slug];
  return String(slug)
    .split(/[-.]+/)
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function extOf(file) {
  const m = String(file).match(/(\.[^.]+)$/);
  return m ? m[1] : ".webp";
}

function numberedName(familyId, variantIndex1, ext) {
  return `${familyId} (${variantIndex1})${ext}`;
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

  fs.writeFileSync(catalogMdPath, `${lines.join("\n").replace(/\n{3,}/g, "\n\n")}\n`, "utf8");
  console.log("→", path.relative(root, catalogMdPath));
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

  fs.writeFileSync(catalogJsonPath, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
  console.log("→", path.relative(root, catalogJsonPath));
}

function main() {
  const catalog = JSON.parse(fs.readFileSync(catalogJsonPath, "utf8"));
  const renames = [];

  for (const family of catalog.families) {
    family.variants.forEach((variant, idx) => {
      const ext = extOf(variant.file);
      const destName = numberedName(family.id, idx + 1, ext);
      if (variant.file === destName) return;
      renames.push({
        from: variant.file,
        to: destName,
        familyId: family.id,
        key: family.key,
      });
    });
  }

  // Détecter collisions destination
  const destCount = new Map();
  for (const r of renames) {
    destCount.set(r.to, (destCount.get(r.to) || 0) + 1);
  }
  const collisions = [...destCount.entries()].filter(([, n]) => n > 1);
  if (collisions.length) {
    console.error("Collisions destinations:", collisions.slice(0, 10));
    process.exit(1);
  }

  // Phase 1 → noms temporaires (évite écrasement croisé)
  const phase1 = [];
  for (let i = 0; i < renames.length; i++) {
    const r = renames[i];
    const src = path.join(sceneDir, r.from);
    if (!fs.existsSync(src)) {
      console.warn("Manquant:", r.from);
      continue;
    }
    const tmp = path.join(sceneDir, `__renum_${i}${extOf(r.from)}`);
    fs.renameSync(src, tmp);
    phase1.push({ ...r, tmp });
  }

  // Phase 2 → N (k).ext
  let done = 0;
  for (const r of phase1) {
    const dest = path.join(sceneDir, r.to);
    if (fs.existsSync(dest)) {
      console.error("Collision finale:", r.to);
      process.exit(1);
    }
    fs.renameSync(r.tmp, dest);
    done += 1;
  }
  console.log(`Renommages: ${done}`);

  // Mettre à jour le catalogue en mémoire (ordre familles inchangé)
  const families = catalog.families.map((family) => {
    const variants = family.variants.map((variant, idx) => {
      const ext = extOf(variant.file);
      const file = numberedName(family.id, idx + 1, ext);
      const vid = idx === 0 ? family.id : `${family.id}.${idx}`;
      return {
        id: vid,
        familyId: family.id,
        familyKey: family.key,
        file,
        path: `/assets/expression/images/scene/${file}`,
        tags: variant.tags || [],
      };
    });
    return {
      id: family.id,
      key: family.key,
      tags: family.tags || [],
      variants,
    };
  });

  writeCatalogMd(families);
  writeCatalogJson(families);

  // Mapping utile pour refs hardcodées
  const mapPath = path.join(root, "scripts/.scene-number-map.json");
  const map = {};
  for (const family of families) {
    map[family.key] = family.variants.map((v) => v.file);
  }
  fs.writeFileSync(mapPath, `${JSON.stringify(map, null, 2)}\n`, "utf8");
  console.log("→", path.relative(root, mapPath));

  const multi = families.filter((f) => f.variants.length > 1).length;
  console.log(`Familles: ${families.length}, multi: ${multi}`);
}

main();
