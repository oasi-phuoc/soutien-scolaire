/**
 * Génère offline-manifest.json pour le mode hors connexion.
 *
 * N'inclut que les assets réellement référencés dans l'app (index images,
 * contenu curriculum, icônes UI, math, lettres…) — pas tout le dossier public/.
 *
 * Usage: node scripts/generate-offline-manifest.cjs
 */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const root = process.cwd();
const publicDir = path.join(root, "public");

const IMAGE_RE = /\.(webp|png|svg|jpe?g)$/i;
const SOURCE_DIRS = ["lib", "components", "app"];
const STATIC_IMAGE_DIRS = [
  "assets/icons",
  "assets/math",
  "assets/letters/img",
  "assets/expression/images-temp",
];

const ignored = new Set(["/offline-manifest.json", "/sw.js", "/app.apk"]);

function read(rel) {
  return fs.readFileSync(path.join(root, rel), "utf8");
}

function unique(values) {
  return [...new Set(values)].sort((a, b) => a.localeCompare(b, "fr"));
}

function publicUrl(absPath) {
  return `/${path.relative(publicDir, absPath).replace(/\\/g, "/")}`;
}

function fileExists(url) {
  return fs.existsSync(path.join(publicDir, url.slice(1)));
}

function walkSourceFiles(dir, out = []) {
  const full = path.join(root, dir);
  if (!fs.existsSync(full)) return out;
  for (const entry of fs.readdirSync(full, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name === ".next") continue;
    const child = path.join(dir, entry.name);
    if (entry.isDirectory()) walkSourceFiles(child, out);
    else if (/\.(ts|tsx)$/.test(entry.name)) out.push(child);
  }
  return out;
}

function walkPublicImages(relDir, urlPrefix) {
  const abs = path.join(publicDir, relDir);
  if (!fs.existsSync(abs)) return [];
  const out = [];
  function walk(currentAbs, currentPrefix) {
    for (const entry of fs.readdirSync(currentAbs, { withFileTypes: true })) {
      const childAbs = path.join(currentAbs, entry.name);
      const childUrl = `${currentPrefix}/${entry.name}`;
      if (entry.isDirectory()) walk(childAbs, childUrl);
      else if (IMAGE_RE.test(entry.name)) out.push(childUrl);
    }
  }
  walk(abs, urlPrefix);
  return out;
}

/** Toutes les URLs d'images dans word-image-index.ts (lecture, vocab, CE/CO). */
function imageUrlsFromWordIndex() {
  const source = read("lib/curriculum/content/communication/word-image-index.ts");
  const urls = [];
  for (const match of source.matchAll(/"(\/[^"]+\.(?:webp|png|svg|jpe?g))"/gi)) {
    urls.push(match[1]);
  }
  return urls;
}

/** Chemins d'images cités explicitement dans le code source. */
function imageUrlsFromSourceScan() {
  const urls = [];
  const pattern = /"(\/(?:assets|gram|expression|vocab|logo)[^"]+\.(?:webp|png|svg|jpe?g))"/gi;
  for (const rel of SOURCE_DIRS) {
    for (const file of walkSourceFiles(rel)) {
      const source = fs.readFileSync(path.join(root, file), "utf8");
      for (const match of source.matchAll(pattern)) urls.push(match[1]);
    }
  }
  return urls;
}

function collectReferencedAssets() {
  const assets = new Set([
    ...imageUrlsFromWordIndex(),
    ...imageUrlsFromSourceScan(),
    ...STATIC_IMAGE_DIRS.flatMap((dir) => walkPublicImages(dir, `/${dir}`)),
    "/offline.html",
  ]);

  return unique(
    [...assets].filter((url) => !ignored.has(url) && fileExists(url)),
  );
}

function mathRoutes() {
  const source = read("lib/curriculum/math-data.ts");
  const routes = [];
  for (const match of source.matchAll(/sm\("([^"]+)"/g)) {
    const id = match[1].replace(/\./g, "-");
    routes.push(`/mathematiques/${id}`);
    routes.push(`/mathematiques/${id}/evaluation`);
  }
  return routes;
}

function lectureRoutes() {
  const progress = read("lib/progress/lecture-progress.ts");
  const routes = [];
  for (const match of progress.matchAll(/\{\s*moduleId:\s*"([^"]+)",\s*letterId:\s*"([^"]+)"\s*\}/g)) {
    routes.push(`/lecture/${match[1]}/${match[2]}`);
  }
  for (const match of progress.matchAll(/pair:\s*"([^"]+)"/g)) {
    routes.push(`/lecture/revision/${match[1]}`);
  }
  return routes;
}

function frenchRoutes() {
  const source = read("lib/curriculum/french-data.ts");
  const routes = [];
  const lessonPattern = /lesson\(\s*"[^"]+",\s*"([^"]+)"[\s\S]*?"(vocabulaire|grammaire|conjugaison)"\s*\)/g;
  for (const match of source.matchAll(lessonPattern)) {
    routes.push(`/francais/${match[2]}/${match[1]}`);
  }
  const generalPattern = /t\(\s*"[^"]+",\s*"([^"]+)"/g;
  for (const match of source.matchAll(generalPattern)) {
    routes.push(`/francais/${match[1]}`);
  }
  return routes;
}

function communicationRoutes() {
  const source = read("lib/curriculum/communication-data.ts");
  const routes = [];
  for (const match of source.matchAll(/\{\s*id:\s*"([^"]+)"/g)) {
    if (match[1].includes("-")) routes.push(`/communication/${match[1]}`);
  }
  for (const match of source.matchAll(/lessonId:\s*"([^"]+)"/g)) {
    routes.push(`/communication/${match[1]}`);
  }
  return routes;
}

function storyRoutes() {
  const source = read("lib/curriculum/lecture-data.ts");
  const block = source.split("export const STORIES")[1]?.split("export function")[0] ?? "";
  const routes = [];
  for (const match of block.matchAll(/id:\s*"([^"]+)"/g)) {
    routes.push(`/lecture/histoires/${match[1]}`);
  }
  return routes;
}

const baseRoutes = [
  "/",
  "/lecture",
  "/lecture/evaluation",
  "/lecture/histoires",
  "/francais",
  "/mathematiques",
  "/mathematiques/test-de-placement",
  "/mathematiques/test-de-placement/statistiques",
  "/communication",
  "/compte",
  "/messagerie",
  "/placement",
  "/placement/mathematiques",
  "/placement/francais",
  "/placement/francais/entrainement",
  "/placement/statistiques",
  "/conditions-utilisation",
  "/avant-propos",
  "/offline.html",
];

const routes = unique([
  ...baseRoutes,
  ...mathRoutes(),
  ...lectureRoutes(),
  ...storyRoutes(),
  ...frenchRoutes(),
  ...communicationRoutes(),
]);

function revisionFor(file) {
  return crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex").slice(0, 16);
}

const assets = collectReferencedAssets();

const assetEntries = assets.map((url) => {
  const file = path.join(publicDir, url.slice(1));
  const stats = fs.statSync(file);
  return {
    url,
    size: stats.size,
    revision: revisionFor(file),
  };
});

const totalBytes = assetEntries.reduce((sum, asset) => sum + asset.size, 0);

const manifest = {
  version: Date.now(),
  totalBytes,
  routes,
  assets,
  assetEntries,
};

fs.writeFileSync(
  path.join(publicDir, "offline-manifest.json"),
  `${JSON.stringify(manifest, null, 2)}\n`,
);

const mb = (totalBytes / 1024 / 1024).toFixed(1);
console.log(`Generated offline manifest: ${routes.length} routes, ${assets.length} image assets (${mb} Mo).`);
