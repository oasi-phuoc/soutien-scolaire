/**
 * Classify every "QCM image" answer label used in CO (and CE) image questions
 * to decide what is illustrable and what should lose the image format.
 *
 * Categories:
 *   time      → générer une horloge
 *   price     → générer une image de prix
 *   percent   → non illustrable (à retirer)
 *   number    → nombres / dates / quantités / téléphones (à retirer)
 *   object    → mot illustrable (image existante dans le pool ou vocab-temp)
 *   other     → prénoms, villes, pays, lieux, phrases abstraites (à retirer)
 *
 * Usage:  node scripts/analyze-image-answers.cjs
 * Output: ref/image-answers-analysis.md  + prints summary
 */

const fs = require("fs");
const path = require("path");

const root = process.cwd();
const commDir = "lib/curriculum/content/communication";
const outMd = path.join(root, "ref/image-answers-analysis.md");

function read(rel) { return fs.readFileSync(path.join(root, rel), "utf8"); }
function strings(body) { return [...body.matchAll(/"([^"]*)"/g)].map((m) => m[1]); }

// ---- image index (pool réellement câblé + vocab-temp pour info) -----------
const IMG_RE = /\.(webp|png|svg|jpe?g)$/i;
function baseSlug(v) { return v.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\u0153/g, "oe").replace(/\u00e6/g, "ae").toLowerCase(); }
function addFrom(dir, set) { if (!fs.existsSync(dir)) return; for (const f of fs.readdirSync(dir)) if (IMG_RE.test(f)) set.add(baseSlug(f.replace(IMG_RE, ""))); }
function buildIndex(includeTemp) {
  const s = new Set();
  addFrom(path.join(root, "public/assets/words/lecture"), s);
  const vocab = path.join(root, "public/assets/words/vocab");
  if (fs.existsSync(vocab)) for (const d of fs.readdirSync(vocab)) { const p = path.join(vocab, d); if (fs.statSync(p).isDirectory()) addFrom(p, s); }
  if (includeTemp) addFrom(path.join(root, "public/vocab-temp"), s);
  return s;
}
const WIRED = buildIndex(false);
const WITH_TEMP = buildIndex(true);

const DET = new Set(["le","la","les","l","un","une","des","du","de","d","au","aux","mon","ma","mes","ce","cet","cette","ces"]);
function tokens(label) { return baseSlug(label).replace(/['’]/g, " ").replace(/[^a-z0-9\s-]/g, " ").split(/[\s-]+/).filter(Boolean); }
function stripDet(t) { const o = [...t]; while (o.length > 1 && DET.has(o[0])) o.shift(); return o; }
function candidates(label) { const t = tokens(label); if (!t.length) return []; const s = stripDet(t); const set = new Set(); const p = (a) => { if (a.length) { set.add(a.join("-")); set.add(a.join("")); } }; p(s); p(t); return [...set]; }
function resolvable(label, index) { return candidates(label).some((c) => index.has(c)); }

// ---- classifiers ----------------------------------------------------------
const MONTHS = /(janv|févr|fevr|mars|avril|mai|juin|juil|août|aout|sept|oct|nov|déc|dec)\b/i;

function isTime(s) {
  const t = s.trim();
  if (/^(à\s+)?\d{1,2}\s*h(\s*\d{1,2})?$/i.test(t)) return true;      // 9 h, 9 h 30, À 8 h 30
  if (/^\d{1,2}\s*h\s*\d{2}$/i.test(t)) return true;
  if (/^\d{1,2}h(\d{2})?$/i.test(t)) return true;                     // 9h, 9h30
  if (/^(midi|minuit)(\s+(et\s+)?(quart|demie?|le?\s*quart))?$/i.test(t)) return true;
  if (/\d{1,2}\s*h(\s*\d{2})?\s*[–-]\s*\d{1,2}\s*h/i.test(t)) return true; // plage horaire
  if (/^\d{1,2}h\d{2}[–-]\d{1,2}h\d{2}$/i.test(t)) return true;
  return false;
}
function isPrice(s) {
  return /€|(\bchf\b)|(\bfrancs?\b)|(\beuros?\b)/i.test(s);
}
function isPercent(s) { return /%/.test(s); }
function isNumberLike(s) {
  const t = s.trim();
  if (/^[\d\s.,'’\-+/²°:]+$/.test(t)) return true;                    // 10, 3/4, 1-2, 100 000, 2003
  if (/^\d/.test(t) && /\b(kg|km\/h|km|m²|m|cm|min|minutes?|g|lux|M|milliard|million|ans?|jours?|mois|semaines?|nuits?|personnes?|pays|doses?|croissants?|sandwichs?|viennoiseries?|enfants?|moteurs?|roues?)\b/i.test(t)) return true;
  if (MONTHS.test(t) && /\d/.test(t)) return true;                    // 13 nov., 17 sept. 1979
  if (/^\d{2}(\s\d{2}){2,}$/.test(t)) return true;                    // n° de téléphone
  if (/^(1[5-9]|20)\d\d$/.test(t)) return true;                       // années
  return false;
}

function classify(label, index) {
  if (isTime(label)) return "time";
  if (isPrice(label)) return "price";
  if (isPercent(label)) return "percent";
  if (isNumberLike(label)) return "number";
  if (resolvable(label, index)) return "object";
  return "other";
}

// ---- collect CO image answers (pools) + questions -------------------------
const CO_FILES = ["co-questions-base-messages.ts","co-questions-base-other.ts","co-questions-moyen.ts","co-questions-avance.ts","co-questions-avance-extra.ts"];
function coQuestions() {
  const qs = [];
  for (const file of CO_FILES) {
    const src = read(`${commDir}/${file}`);
    const startRe = /buildPool\(\s*"([^"]+)"\s*,\s*"([^"]+)"\s*,\s*\[/g;
    const starts = []; let m;
    while ((m = startRe.exec(src))) starts.push({ slug: m[2], arrStart: m.index + m[0].length });
    for (let i = 0; i < starts.length; i++) {
      const end = i + 1 < starts.length ? starts[i + 1].arrStart : src.length;
      const block = src.slice(starts[i].arrStart, end);
      const itemRe = /id:\s*"([^"]+)"[\s\S]*?img:\s*\[([^\]]*)\][\s\S]*?imgC:\s*(\d+)/g;
      let im;
      while ((im = itemRe.exec(block))) qs.push({ group: starts[i].slug, id: im[1], labels: strings(im[2]) });
    }
  }
  return qs;
}

function main() {
  const includeTemp = process.argv.includes("--with-temp");
  const index = includeTemp ? WITH_TEMP : WIRED;
  const qs = coQuestions();

  const cats = {};
  const examples = {};
  const distinct = new Set();
  for (const q of qs) for (const l of q.labels) distinct.add(l);
  for (const l of distinct) {
    const c = classify(l, index);
    cats[c] = (cats[c] || 0) + 1;
    (examples[c] = examples[c] || []).push(l);
  }

  // Canonical clock/price slugs (mirror of the resolver) — illustrable only if generated.
  const timeSlugOf = (label) => {
    const t = label.trim().toLowerCase().replace(/^à\s+/, "");
    if (t === "midi") return "horloge-12h00";
    if (t === "minuit") return "horloge-00h00";
    if (/^midi\s+et\s+quart$/.test(t)) return "horloge-12h15";
    if (/^midi\s+et\s+demie?$/.test(t)) return "horloge-12h30";
    const m = t.match(/^(\d{1,2})\s*h\s*(\d{1,2})?$/) || t.match(/^(\d{1,2})h(\d{2})?$/);
    if (!m) return null;
    const h = parseInt(m[1], 10), mn = m[2] ? parseInt(m[2], 10) : 0;
    if (h > 23 || mn > 59) return null;
    return `horloge-${String(h).padStart(2, "0")}h${String(mn).padStart(2, "0")}`;
  };
  const priceSlugOf = (label) => {
    const m = label.trim().match(/^(\d+(?:[.,]\d+)?)\s*(€|euros?|francs?|chf)(\s*ht)?$/i);
    if (!m) return null;
    const cur = /€|euro/i.test(m[2]) ? "eur" : /franc/i.test(m[2]) ? "fr" : "chf";
    return `prix-${m[1].replace(/[.,]/g, "-")}-${cur}${m[3] ? "-ht" : ""}`;
  };
  // Per-question decision: image kept iff the 3 labels are all illustrable
  // (real object image, or a generated clock/price image that exists).
  const illustrable = (l) => {
    const ts = timeSlugOf(l); if (ts && index.has(baseSlug(ts))) return true;
    const ps = priceSlugOf(l); if (ps && index.has(baseSlug(ps))) return true;
    return resolvable(l, index);
  };
  let keep = 0, remove = 0;
  const removeByReason = {};
  for (const q of qs) {
    if (q.labels.every(illustrable)) keep++;
    else {
      remove++;
      const reasons = [...new Set(q.labels.filter((l) => !illustrable(l)).map((l) => classify(l, index)))].sort().join("+");
      removeByReason[reasons] = (removeByReason[reasons] || 0) + 1;
    }
  }

  // distinct times / prices to generate
  const times = [...distinct].filter(isTime).sort();
  const prices = [...distinct].filter((l) => isPrice(l) && !isTime(l)).sort();

  const L = [];
  L.push("# Analyse des réponses « QCM image » (CO)");
  L.push("");
  L.push(`_Généré par \`scripts/analyze-image-answers.cjs\`${includeTemp ? " --with-temp" : ""} — ${new Date().toISOString().slice(0, 10)}_`);
  L.push("");
  L.push(`Index d'images utilisé : ${includeTemp ? "pool câblé **+ vocab-temp**" : "**pool câblé uniquement**"} (${index.size} slugs).`);
  L.push("");
  L.push(`Questions CO à image analysées : **${qs.length}** · libellés distincts : **${distinct.size}**`);
  L.push("");
  L.push("## Catégories de libellés (distincts)");
  L.push("");
  L.push("| Catégorie | Nb | Décision | Exemples |");
  L.push("| --- | --- | --- | --- |");
  const decision = { time: "→ horloge (garder)", price: "→ image prix (garder)", object: "garder (image)", percent: "RETIRER", number: "RETIRER", other: "RETIRER" };
  for (const c of ["time", "price", "object", "percent", "number", "other"]) {
    const ex = (examples[c] || []).slice(0, 12).map((x) => x.replace(/\|/g, "/")).join(", ");
    L.push(`| ${c} | ${cats[c] || 0} | ${decision[c]} | ${ex} |`);
  }
  L.push("");
  L.push("## Décision par question");
  L.push("");
  L.push(`- Questions gardant la forme image (3 options illustrables) : **${keep}**`);
  L.push(`- Questions perdant la forme image : **${remove}**`);
  L.push("");
  L.push("Raisons de retrait (types non illustrables présents) :");
  for (const [r, n] of Object.entries(removeByReason).sort((a, b) => b[1] - a[1])) L.push(`- ${r} : ${n}`);
  L.push("");
  const tGen = times.filter((l) => { const s = timeSlugOf(l); return s && index.has(baseSlug(s)); });
  const tSkip = times.filter((l) => !tGen.includes(l));
  const pGen = prices.filter((l) => { const s = priceSlugOf(l); return s && index.has(baseSlug(s)); });
  const pSkip = prices.filter((l) => !pGen.includes(l));
  L.push(`## Temps — horloges générées (${tGen.length}) ; ignorés / plages horaires (${tSkip.length})`);
  L.push("");
  L.push(`**Générés :** ${tGen.join(" · ")}`);
  L.push("");
  L.push(`**Ignorés (plages, format non horaire) → forme image retirée :** ${tSkip.join(" · ")}`);
  L.push("");
  L.push(`## Prix — images générées (${pGen.length}) ; ignorés (${pSkip.length})`);
  L.push("");
  L.push(`**Générés :** ${pGen.join(" · ")}`);
  L.push("");
  L.push(`**Ignorés (plages, faux positifs comme « Euro 2002 », « Francs-Moisins », « Oui, 1 € ») → forme image retirée :** ${pSkip.join(" · ")}`);
  L.push("");

  fs.mkdirSync(path.dirname(outMd), { recursive: true });
  fs.writeFileSync(outMd, L.join("\n"), "utf8");

  console.log(`Questions=${qs.length} distinct labels=${distinct.size}`);
  console.log("Categories:", cats);
  console.log(`Keep image=${keep}  Remove image=${remove}`);
  console.log(`Distinct times=${times.length}  prices=${prices.length}`);
  console.log(`Report → ${path.relative(root, outMd)}`);
}

main();
