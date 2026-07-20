/**
 * Génère offline-manifest.json pour le mode hors connexion.
 *
 * N'inclut que les assets réellement référencés dans l'app :
 *  - dossiers UI / math / lettres / CO / PO / CE (entiers, hors exclus)
 *  - scene / heure / lecture / vocab : fichier par fichier selon usage
 *  - audio son_f (+ CO + nombres) ; son_m exclu
 *
 * Usage: node scripts/generate-offline-manifest.cjs
 */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const root = process.cwd();
const publicDir = path.join(root, "public");

const IMAGE_RE = /\.(webp|png|svg|jpe?g)$/i;
const AUDIO_RE = /\.(mp3|wav|ogg|m4a|aac)$/i;
const SOURCE_DIRS = ["lib", "components", "app"];

/**
 * Dossiers inclus en entier (hors scene / heure / lecture / vocab / lecture-2).
 * Exclus volontairement :
 *  - assets/words/lecture-2
 *  - assets/icons/consignes
 *  - assets/icons/competences
 *  - assets/math/digits
 */
const STATIC_IMAGE_DIRS = [
  "assets/icons/markers",
  "assets/math/cubes",
  "assets/letters/img",
  "assets/expression/images-temp",
  "assets/expression/images/ce",
  "assets/expression/images/comp",
  "assets/expression/co",
  "assets/expression/po",
  "expression/co/situations",
];

/** Audio pré-générés (lecture, vocab, CO, nombres maths). Voix féminine uniquement (son_m hors manifest). */
const STATIC_AUDIO_DIRS = [
  "assets/words/son_f/mots",
  "assets/words/son_f/syllable",
  "assets/words/son_f/vocab",
  "assets/letters/son",
  "assets/expression/co",
  "audio/nombres",
];

const FILTERED_PREFIXES = [
  "/assets/expression/images/scene/",
  "/assets/expression/images/heure/",
  "/assets/words/lecture/",
  "/assets/words/vocab/",
];

const ignored = new Set(["/offline-manifest.json", "/sw.js", "/app.apk"]);

function read(rel) {
  return fs.readFileSync(path.join(root, rel), "utf8");
}

function unique(values) {
  return [...new Set(values)].sort((a, b) => a.localeCompare(b, "fr"));
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

function walkPublicFiles(relDir, urlPrefix, fileRe) {
  const abs = path.join(publicDir, relDir);
  if (!fs.existsSync(abs)) return [];
  const out = [];
  function walk(currentAbs, currentPrefix) {
    for (const entry of fs.readdirSync(currentAbs, { withFileTypes: true })) {
      const childAbs = path.join(currentAbs, entry.name);
      const childUrl = `${currentPrefix}/${entry.name}`;
      if (entry.isDirectory()) walk(childAbs, childUrl);
      else if (fileRe.test(entry.name)) out.push(childUrl);
    }
  }
  walk(abs, urlPrefix);
  return out;
}

function walkPublicImages(relDir, urlPrefix) {
  return walkPublicFiles(relDir, urlPrefix, IMAGE_RE);
}

function walkPublicAudio(relDir, urlPrefix) {
  return walkPublicFiles(relDir, urlPrefix, AUDIO_RE);
}

function isFilteredImage(url) {
  return FILTERED_PREFIXES.some((p) => url.startsWith(p));
}

/** Parse WORD_IMAGE_INDEX + LECTURE_IMAGE_INDEX. */
function loadImageIndexes() {
  const source = read("lib/curriculum/content/communication/word-image-index.ts");
  const word = {};
  const lecture = {};
  const wordBlock = source.match(/export const WORD_IMAGE_INDEX[^=]*=\s*\{([\s\S]*?)\n\};/);
  const lecBlock = source.match(/export const LECTURE_IMAGE_INDEX[^=]*=\s*\{([\s\S]*?)\n\};/);
  const parse = (block, dest) => {
    if (!block) return;
    const re = /"([^"]+)":\s*"(\/assets\/[^"]+)"/g;
    let m;
    while ((m = re.exec(block[1]))) dest[m[1]] = m[2];
  };
  parse(wordBlock, word);
  parse(lecBlock, lecture);
  return { word, lecture };
}

function loadAliases() {
  try {
    const raw = JSON.parse(read("lib/curriculum/content/communication/word-image-aliases.json"));
    const out = {};
    for (const [k, v] of Object.entries(raw)) {
      if (k.startsWith("_")) continue;
      if (typeof v === "string") out[k] = v;
    }
    return out;
  } catch {
    return {};
  }
}

function baseSlug(value) {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\u0153/g, "oe")
    .replace(/\u0152/g, "oe")
    .replace(/\u00e6/g, "ae")
    .replace(/\u00c6/g, "ae")
    .toLowerCase();
}

function labelToAssetSlug(label) {
  return String(label)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/['’]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

const DETERMINERS = new Set([
  "le", "la", "les", "l", "un", "une", "des", "du", "de", "d", "au", "aux",
  "mon", "ma", "mes", "ton", "ta", "tes", "son", "sa", "ses",
  "ce", "cet", "cette", "ces", "the", "a",
]);

function tokenize(label) {
  return baseSlug(label)
    .replace(/['’]/g, " ")
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/[\s-]+/)
    .filter(Boolean);
}

function stripDeterminers(tokens) {
  const out = [...tokens];
  while (out.length > 1 && DETERMINERS.has(out[0])) out.shift();
  return out;
}

function candidateSlugs(label) {
  const tokens = tokenize(label);
  if (!tokens.length) return [];
  const stripped = stripDeterminers(tokens);
  const set = new Set();
  const push = (arr) => {
    if (!arr.length) return;
    set.add(arr.join("-"));
    set.add(arr.join(""));
  };
  push(stripped);
  push(tokens);
  return [...set];
}

function timeSlug(label) {
  const t = String(label).trim().toLowerCase().replace(/^à\s+/, "");
  if (t === "midi") return "horloge-12h00";
  if (t === "minuit") return "horloge-00h00";
  if (/^midi\s+et\s+quart$/.test(t)) return "horloge-12h15";
  if (/^midi\s+et\s+demie?$/.test(t)) return "horloge-12h30";
  const m = t.match(/^(\d{1,2})\s*h\s*(\d{1,2})?$/) || t.match(/^(\d{1,2})h(\d{2})?$/);
  if (!m) return null;
  const h = parseInt(m[1], 10);
  const mn = m[2] ? parseInt(m[2], 10) : 0;
  if (h > 23 || mn > 59) return null;
  return `horloge-${String(h).padStart(2, "0")}h${String(mn).padStart(2, "0")}`;
}

function makeResolver(WORD_IMAGE_INDEX, LECTURE_IMAGE_INDEX, ALIASES) {
  function lookupAlias(slug) {
    return ALIASES[slug];
  }
  function isVocabImagePath(p) {
    return p.startsWith("/assets/words/vocab/");
  }
  function resolveLectureSlug(slug) {
    const direct = LECTURE_IMAGE_INDEX[slug];
    if (direct) return direct;
    const alias = lookupAlias(slug);
    if (alias) {
      if (/^https?:\/\//i.test(alias) || alias.startsWith("/")) return alias;
      if (LECTURE_IMAGE_INDEX[alias]) return LECTURE_IMAGE_INDEX[alias];
    }
    return null;
  }
  function resolveVocabSlug(slug) {
    const direct = WORD_IMAGE_INDEX[slug];
    if (direct && isVocabImagePath(direct)) return direct;
    const alias = lookupAlias(slug);
    if (alias) {
      if (/^https?:\/\//i.test(alias) || (alias.startsWith("/") && isVocabImagePath(alias))) {
        return alias;
      }
      const aliased = WORD_IMAGE_INDEX[alias];
      if (aliased && isVocabImagePath(aliased)) return aliased;
    }
    return null;
  }
  function resolveCeCoIndexedSlug(slug) {
    const alias = lookupAlias(slug);
    if (alias) {
      if (/^https?:\/\//i.test(alias) || alias.startsWith("/assets/")) return alias;
      const aliased = WORD_IMAGE_INDEX[alias];
      if (aliased && !isVocabImagePath(aliased)) return aliased;
    }
    const direct = WORD_IMAGE_INDEX[slug];
    if (direct && !isVocabImagePath(direct)) return direct;
    const lecture = resolveLectureSlug(slug);
    if (lecture) return lecture;
    if (alias) {
      const aliased = WORD_IMAGE_INDEX[alias];
      if (aliased) return aliased;
    }
    return resolveVocabSlug(slug);
  }
  function resolveCeCoWordImage(label) {
    if (!label) return null;
    const time = timeSlug(label);
    if (time) {
      const clock = resolveCeCoIndexedSlug(time);
      if (clock) return clock;
    }
    for (const candidate of candidateSlugs(label)) {
      const resolved = resolveCeCoIndexedSlug(candidate);
      if (resolved) return resolved;
    }
    return null;
  }
  function resolveLectureWord(word) {
    const viaCeCo = resolveCeCoWordImage(word);
    if (viaCeCo) return viaCeCo;
    const slug = labelToAssetSlug(word);
    if (LECTURE_IMAGE_INDEX[slug]) return LECTURE_IMAGE_INDEX[slug];
    const lower = String(word).toLowerCase();
    if (LECTURE_IMAGE_INDEX[lower]) return LECTURE_IMAGE_INDEX[lower];
    const fallback = `/assets/words/lecture/${lower}.webp`;
    return fileExists(fallback) ? fallback : null;
  }
  return { resolveCeCoWordImage, resolveLectureWord };
}

function resolveVocabImage(image, folder) {
  if (!image) return undefined;
  if (/^https?:\/\//i.test(image)) return undefined;
  if (image.startsWith("/assets/words/vocab/")) return image;
  if (image.startsWith("/assets/words/lecture/")) return image;
  if (image.startsWith("/assets/expression/")) return image;
  if (image.startsWith("/assets/words/img/")) {
    return image.replace("/assets/words/img/", "/assets/words/lecture/");
  }
  if (image.startsWith("/vocab/images/")) {
    return `/assets/words/vocab/${image.replace("/vocab/images/", "")}`;
  }
  if (image.startsWith("/")) return image;
  if (folder) return `/assets/words/vocab/${folder}/${image}`;
  return `/assets/words/lecture/${image}`;
}

/** Chemins d'images cités explicitement dans le code source. */
function imageUrlsFromSourceScan() {
  const urls = [];
  const pattern = /["'`](\/(?:assets|gram|expression|vocab|logo)[^"'`]+\.(?:webp|png|svg|jpe?g))["'`]/gi;
  for (const rel of SOURCE_DIRS) {
    for (const file of walkSourceFiles(rel)) {
      if (file.endsWith("word-image-index.ts")) continue;
      const source = fs.readFileSync(path.join(root, file), "utf8");
      for (const match of source.matchAll(pattern)) urls.push(match[1]);
    }
  }
  return urls;
}

/** Images vocab V1–V10 depuis les thèmes (image: + section/imageFolder). */
function imageUrlsFromVocabThemes() {
  const dir = path.join(root, "lib/curriculum/content/francais");
  const urls = [];
  if (!fs.existsSync(dir)) return urls;
  for (const name of fs.readdirSync(dir)) {
    if (!/^vocab-v\d/i.test(name) || !name.endsWith(".ts")) continue;
    const source = fs.readFileSync(path.join(dir, name), "utf8");
    const sectionMatch = source.match(/\bsection:\s*"([^"]+)"/);
    const folderMatch = source.match(/\bimageFolder:\s*"([^"]+)"/);
    const folder = folderMatch?.[1] || sectionMatch?.[1];
    for (const m of source.matchAll(/\bimage:\s*"([^"]+)"/g)) {
      const resolved = resolveVocabImage(m[1], folder);
      if (resolved && !/^https?:\/\//i.test(resolved)) urls.push(resolved);
    }
  }
  return urls;
}

/** Labels CE/CO susceptibles d'être illustrés (choix QCM image). */
function collectCeCoImageLabels() {
  const labels = new Set();
  const commDir = path.join(root, "lib/curriculum/content/communication");
  const files = [];
  function walk(d) {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, e.name);
      if (e.isDirectory()) walk(p);
      else if (/\.tsx?$/.test(e.name)) files.push(p);
    }
  }
  if (fs.existsSync(commDir)) walk(commDir);

  for (const file of walkSourceFiles("components/communication").concat(
    walkSourceFiles("components/placement"),
  )) {
    files.push(path.join(root, file));
  }

  for (const file of files) {
    if (file.endsWith("word-image-index.ts")) continue;
    let source;
    try {
      source = fs.readFileSync(file, "utf8");
    } catch {
      continue;
    }

    // CO RawQ : img: ["a", "b", "c"]
    for (const m of source.matchAll(/\bimg:\s*\[([^\]]+)\]/g)) {
      for (const s of m[1].matchAll(/"([^"]+)"/g)) labels.add(s[1]);
    }

    // ceQ(id, question, ["a","b","c"], ...)
    for (const m of source.matchAll(
      /ceQ\(\s*"(?:[^"\\]|\\.)*"\s*,\s*"(?:[^"\\]|\\.)*"\s*,\s*\[([^\]]+)\]/gs,
    )) {
      for (const s of m[1].matchAll(/"([^"]+)"/g)) labels.add(s[1]);
    }

    // ceImgChoice("label")
    for (const m of source.matchAll(/ceImgChoice\(\s*"([^"]+)"\s*\)/g)) {
      labels.add(m[1]);
    }

    // objet-pick : label: "..."
    if (file.includes("objet-pick") || file.includes("ObjetPick")) {
      for (const m of source.matchAll(/\blabel:\s*"([^"]+)"/g)) labels.add(m[1]);
    }

    // choices: [{ label: "...", image: "..." }]
    for (const m of source.matchAll(/\blabel:\s*"([^"]+)"\s*,\s*image:\s*"/g)) {
      labels.add(m[1]);
    }
  }

  return [...labels];
}

/** Ajoute les chaînes d'un pool JSON (tableaux de mots ou objets {label|word}). */
function collectWordsFromJsonValue(data, words) {
  const stack = [data];
  while (stack.length) {
    const cur = stack.pop();
    if (typeof cur === "string") {
      // Mots / graphemes pools : pas les phonèmes "/a/" ni les clés techniques
      if (cur.length >= 2 && cur.length < 40 && !cur.startsWith("/") && !cur.includes("/")) {
        words.add(cur);
      }
    } else if (Array.isArray(cur)) {
      for (const x of cur) stack.push(x);
    } else if (cur && typeof cur === "object") {
      if (typeof cur.label === "string") words.add(cur.label);
      if (typeof cur.word === "string") words.add(cur.word);
      for (const v of Object.values(cur)) stack.push(v);
    }
  }
}

/** Mots lecture utilisés dans les pools. */
function collectLectureWords() {
  const words = new Set();

  const wordPool = read("lib/curriculum/word-pool.ts");
  for (const m of wordPool.matchAll(/\blabel:\s*"([^"]+)"/g)) words.add(m[1]);

  // TOOL_WORD_POOLS : tableaux de chaînes dans word-pool.ts
  const toolBlock = wordPool.match(/export const TOOL_WORD_POOLS[\s\S]*?=\s*\{([\s\S]*?)\n\};/);
  if (toolBlock) {
    for (const m of toolBlock[1].matchAll(/"([^"]+)"/g)) words.add(m[1]);
  }

  const jsonFiles = [
    "lib/curriculum/grapheme-word-pools-data.json",
    "lib/curriculum/lecture-image-word-items.json",
    "lib/curriculum/lecture-revision-bisyllable-pools.json",
    "lib/curriculum/lecture-pronounce-pools.json",
  ];
  for (const rel of jsonFiles) {
    const abs = path.join(root, rel);
    if (!fs.existsSync(abs)) continue;
    collectWordsFromJsonValue(JSON.parse(fs.readFileSync(abs, "utf8")), words);
  }

  try {
    const longSrc = read("lib/curriculum/lecture-long-pronounce.ts");
    for (const m of longSrc.matchAll(/\bword:\s*"([^"]+)"/g)) words.add(m[1]);
    for (const m of longSrc.matchAll(/\blabel:\s*"([^"]+)"/g)) words.add(m[1]);
  } catch { /* ignore */ }

  // Les entrées « horloge-* » du pool image ne sont pas des mots lecture :
  // les horloges CE/CO sont résolues à part via les libellés d'heure.
  return [...words].filter((w) => !/^horloge-/i.test(w));
}

/**
 * Images scene / heure / lecture / vocab réellement atteignables.
 */
function imageUrlsFromFilteredUsage() {
  const { word: WORD_IMAGE_INDEX, lecture: LECTURE_IMAGE_INDEX } = loadImageIndexes();
  const ALIASES = loadAliases();
  const { resolveCeCoWordImage, resolveLectureWord } = makeResolver(
    WORD_IMAGE_INDEX,
    LECTURE_IMAGE_INDEX,
    ALIASES,
  );

  const used = new Set();

  // 1) URLs directes (déjà scannées ailleurs) — on les refiltre ici aussi
  for (const url of imageUrlsFromSourceScan()) {
    if (isFilteredImage(url)) used.add(url);
  }

  // 2) Vocab thèmes
  for (const url of imageUrlsFromVocabThemes()) {
    if (isFilteredImage(url) || url.startsWith("/assets/words/")) used.add(url);
  }

  // 3) Labels CE/CO → résolution
  for (const label of collectCeCoImageLabels()) {
    const url = resolveCeCoWordImage(label);
    if (url && (isFilteredImage(url) || url.startsWith("/assets/words/") || url.startsWith("/assets/expression/"))) {
      used.add(url);
    }
  }

  // 4) Mots lecture
  for (const word of collectLectureWords()) {
    const url = resolveLectureWord(word);
    if (url && isFilteredImage(url)) used.add(url);
  }

  // 5) Objet-pick → convention lecture/${slug}.webp (+ alias baskets)
  try {
    const objet = read("lib/curriculum/content/communication/co-questions-objet-pick.ts");
    for (const m of objet.matchAll(/\blabel:\s*"([^"]+)"/g)) {
      const slug = labelToAssetSlug(m[1]);
      const url = slug === "chaussures-de-sport"
        ? "/assets/words/lecture/baskets.webp"
        : `/assets/words/lecture/${slug}.webp`;
      if (fileExists(url)) used.add(url);
      const via = resolveCeCoWordImage(m[1]);
      if (via) used.add(via);
    }
  } catch { /* ignore */ }

  return [...used].filter((url) => isFilteredImage(url) && fileExists(url));
}

function collectReferencedAssets() {
  const filteredUsed = imageUrlsFromFilteredUsage();

  const assets = new Set([
    ...imageUrlsFromSourceScan().filter((u) => !isFilteredImage(u)),
    ...filteredUsed,
    ...STATIC_IMAGE_DIRS.flatMap((dir) => walkPublicImages(dir, `/${dir}`)),
    ...STATIC_AUDIO_DIRS.flatMap((dir) => walkPublicAudio(dir, `/${dir}`)),
    "/offline.html",
  ]);

  // Ne jamais réintroduire les dossiers exclus / lecture-2
  const EXCLUDED_PREFIXES = [
    "/assets/words/lecture-2/",
    "/assets/icons/consignes/",
    "/assets/icons/competences/",
    "/assets/math/digits/",
  ];

  return unique(
    [...assets].filter(
      (url) =>
        !ignored.has(url)
        && fileExists(url)
        && !EXCLUDED_PREFIXES.some((p) => url.startsWith(p)),
    ),
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
const audioCount = assets.filter((u) => AUDIO_RE.test(u)).length;
const imageCount = assets.length - audioCount;

function countPrefix(prefix) {
  return assets.filter((u) => u.startsWith(prefix)).length;
}

console.log(
  `Generated offline manifest: ${routes.length} routes, ${imageCount} images + ${audioCount} audio (${mb} Mo).`,
);
console.log(
  `  filtered: scene=${countPrefix("/assets/expression/images/scene/")} `
  + `heure=${countPrefix("/assets/expression/images/heure/")} `
  + `lecture=${countPrefix("/assets/words/lecture/")} `
  + `vocab=${countPrefix("/assets/words/vocab/")} `
  + `lecture-2=${countPrefix("/assets/words/lecture-2/")} `
  + `digits=${countPrefix("/assets/math/digits/")} `
  + `consignes=${countPrefix("/assets/icons/consignes/")} `
  + `competences=${countPrefix("/assets/icons/competences/")}`,
);
