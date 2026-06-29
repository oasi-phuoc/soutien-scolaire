const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const root = process.cwd();
const publicDir = path.join(root, "public");

function read(rel) {
  return fs.readFileSync(path.join(root, rel), "utf8");
}

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...walk(full));
    } else {
      out.push(full);
    }
  }
  return out;
}

function publicUrl(file) {
  return `/${path.relative(publicDir, file).replace(/\\/g, "/")}`;
}

function unique(values) {
  return [...new Set(values)].sort((a, b) => a.localeCompare(b));
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
    const slug = match[1];
    const tab = match[2];
    routes.push(`/francais/${tab}/${slug}`);
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
  "/offline.html",
];

const routes = unique([
  ...baseRoutes,
  ...mathRoutes(),
  ...lectureRoutes(),
  ...frenchRoutes(),
  ...communicationRoutes(),
]);

const ignored = new Set(["/offline-manifest.json", "/sw.js", "/app.apk"]);
const assets = unique(
  walk(publicDir)
    .map(publicUrl)
    .filter((url) => !ignored.has(url)),
);

function revisionFor(file) {
  return crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex").slice(0, 16);
}

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

console.log(`Generated offline manifest: ${routes.length} routes, ${assets.length} assets.`);
