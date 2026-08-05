/**
 * Restructure G5–G19: update REORGANIZED_CODES + french-data lesson list.
 * Content merges must already be done (or done after) for merge targets.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");

/** Final slug → code after full restructure */
const FINAL_CODES = {
  // unchanged modules abbreviated — only overrides listed; full map rebuilt below
};

// Build complete map from current + overrides
const grammarDataPath = path.join(ROOT, "lib/curriculum/grammar-data.ts");
const frenchDataPath = path.join(ROOT, "lib/curriculum/french-data.ts");

let grammar = fs.readFileSync(grammarDataPath, "utf8");
let french = fs.readFileSync(frenchDataPath, "utf8");

const CODE_OVERRIDES = {
  // G5
  "a1-gr-phrases": "G5.1",
  "a2-gr-l35": "G5.2",
  "a1-gr-interro": "G5.3",
  "a1-gr-question-totale": "G5.4",
  "a1-gr-question-ouverte-qui": "G5.5",
  "a1-gr-negation-ne-pas": "G5.6",
  "a1-gr-autres-negations": "G5.7",
  "a1-gr-phrase-exclamative": "G5.8",
  // G4 merges
  "a1-gr-articles-contractes": "G4.2",
  "a1-conj-l08": "G4.2", // G19.33 into G4.2 — code alias; content merge separate
  "a1-gr-article-partitif": "G4.3",
  // G7
  "a1-gr-a-en-de-lieux": "G7.1",
  // G8
  "a1-gr-passe-compose-avoir": "G8.1",
  "a1-gr-passe-compose-etre": "G8.2",
  "a1-gr-verbes-double-auxiliaire": "G8.3",
  "a1-gr-pronominaux-passe-compose": "G8.4",
  "a1-gr-imparfait": "G8.5",
  "a1-gr-passe-recent": "G8.6",
  "a1-gr-imparfait-passe-compose": "G8.7",
  "a1-gr-plus-que-parfait": "G8.8",
  "a1-gr-accord-participe-passe": "G8.9",
  // G9
  "a1-gr-futur-proche": "G9.1",
  "a1-gr-futur-simple": "G9.2",
  "a2-gr-futur-simple-ou-proche": "G9.3",
  "a2-gr-hypothese-futur": "G9.4",
  "a1-gr-futur-anterieur": "G9.5",
  // G10
  "a1-gr-comparaison-adj-adv": "G10.1",
  "a1-gr-superlatif": "G10.3",
  // G11
  "a1-gr-expression-temps-moment": "G11.1",
  // G12
  "a1-gr-pronom-en": "G12.3",
  "a1-gr-pronoms-relatifs-qui-que-ou": "G12.10",
  // G14
  "a1-gr-adverbes-ment": "G14.2",
  "a1-gr-l22": "G14.3",
  // G16
  "a1-gr-gerondif": "G16.3",
  "a1-gr-subjonctif-present": "G16.4",
  "a1-gr-conditionnel-present": "G16.8",
  // G17
  "a1-gr-expression-cause": "G17.1",
  "a1-gr-expression-consequence": "G17.2",
};

/** Slugs removed from curriculum (merged away or deleted) */
const REMOVED_SLUGS = new Set([
  "a1-gr-question-ouverte-ou",
  "a1-gr-question-inversion",
  "a1-gr-l02", // merged into negation-ne-pas
  "a1-gr-l10", // merged into question-ouverte-qui
  "a1-gr-l14", // will merge into article-partitif — keep until merge done; then remove from nav
  "a1-gr-l23", // G19.8 deleted
  "a2-gr-l07",
  "a2-gr-l09",
  "a1-gr-expressions-temps", // merge into G11.1
  "a2-gr-l39", // merge into G10.1
  "a2-gr-bon-bien-meilleur-mieux", // merge into G10.3
  "a2-gr-superlatif", // merge into G10.3
  "a2-gr-l42", // merged into autres-negations
  "a2-gr-l19", // merge into G12.10
  "a2-gr-l36", // merge into G12.3
  "gr-marqueurs-temps-complet", // merge into G17.2
  "a2-gr-l52", // merge into G17.1
  "a2-gr-adverbes-types", // merge into G14.2
  "a2-gr-passe-compose-ou-imparfait", // merge into G8.7
  "a2-gr-imparfait-irreguliers", // merge into G8.5
  "a2-gr-futur-irreguliers", // merge into G9.2
  "a2-gr-conditionnel", // merge into G16.8
  "a2-gr-gerondif", // merge into G16.3
  "a2-gr-subjonctif", // merge into G16.4
  "a1-gr-l11", // merge into G7.1
  // a1-conj-l08 stays as alias for G4.2 after merge
]);

// Slugs that MOVE into nav at new codes (were G19, now main track)
const MOVED_INTO_MAIN = {
  "a1-gr-phrases": { code: "G5.1", level: "A1", title: "Les phrases", desc: "Structure Sujet + Verbe + Complément : reconnaître et construire une phrase simple." },
  "a2-gr-l35": { code: "G5.2", level: "A2", title: "Les pronoms COD et COI", desc: "Me/te/le/la/les/lui/leur : place, négation, construction avec deux verbes." },
  "a1-gr-interro": { code: "G5.3", level: "A1", title: "L'interrogation de base", desc: "Est-ce que et l'intonation montante : construire une question simple." },
  "a1-gr-verbes-double-auxiliaire": { code: "G8.3", level: "A1", title: "Les verbes à double auxiliaire", desc: "Sortir, rentrer, entrer, passer, monter, descendre et retourner : être ou avoir." },
  "a1-gr-pronominaux-passe-compose": { code: "G8.4", level: "A1", title: "Les verbes pronominaux au passé composé", desc: "Auxiliaire être, accord avec le sujet réel et négation." },
  "a2-gr-futur-simple-ou-proche": { code: "G9.3", level: "A2", title: "Futur simple ou futur proche ?", desc: "Choisir selon la proximité, l'intention, la promesse ou la prévision." },
  "a2-gr-hypothese-futur": { code: "G9.4", level: "A2", title: "L'hypothèse sur le futur", desc: "Si + présent, puis futur simple ; condition, conséquence et élision avec il." },
  "a1-gr-l22": { code: "G14.3", level: "A1", title: "Les adverbes de fréquence", desc: "Toujours, souvent, parfois, rarement, jamais : situer une action dans le temps." },
};

function patchReorganizedCodes(src) {
  // Replace each "slug": "Gxx.y" for overrides; delete removed G19 entries
  let out = src;
  for (const [slug, code] of Object.entries(CODE_OVERRIDES)) {
    const re = new RegExp(`("${slug.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}":\\s*")G[\\d.]+(")`);
    if (re.test(out)) {
      out = out.replace(re, `$1${code}$2`);
    } else {
      // insert before closing of REORGANIZED_CODES if missing
      console.warn("missing code entry for", slug, "- will insert");
      out = out.replace(
        /(const REORGANIZED_CODES: Record<string, string> = \{)/,
        `$1\n  "${slug}": "${code}",`,
      );
    }
  }
  // Remove codes for fully deleted/merged-away slugs (except those still aliased)
  for (const slug of REMOVED_SLUGS) {
    if (CODE_OVERRIDES[slug]) continue;
    const re = new RegExp(`\\n\\s*"${slug.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}":\\s*"G[\\d.]+",?`, "g");
    out = out.replace(re, "");
  }
  // Remove old G5 codes that no longer apply
  out = out.replace(/\n\s*"a1-gr-question-ouverte-ou":\s*"G[\d.]+",?/, "");
  out = out.replace(/\n\s*"a1-gr-question-inversion":\s*"G[\d.]+",?/, "");
  return out;
}

function rebuildFrenchG5ThroughG19(src) {
  const g5Block = `  // ── G5 — La structure de la phrase ──
  lesson("A1", "a1-gr-phrases", "G5.1", "Les phrases", "Structure Sujet + Verbe + Complément : reconnaître et construire une phrase simple.", "grammaire"),
  lesson("A2", "a2-gr-l35", "G5.2", "Les pronoms COD et COI", "Me/te/le/la/les/lui/leur : place, négation, construction avec deux verbes.", "grammaire"),
  lesson("A1", "a1-gr-interro", "G5.3", "L'interrogation de base", "Est-ce que et l'intonation montante : construire une question simple.", "grammaire"),
  lesson("A1", "a1-gr-question-totale", "G5.4", "Les questions fermées", "Intonation, est-ce que, inversion ; répondre oui / non / si.", "grammaire"),
  lesson("A1", "a1-gr-question-ouverte-qui", "G5.5", "Les questions ouvertes", "Qui, quoi, où, quand, comment, pourquoi, combien, quel / lequel.", "grammaire"),
  lesson("A1", "a1-gr-negation-ne-pas", "G5.6", "La négation", "Ne… pas et formes de base de la négation.", "grammaire"),
  lesson("A1", "a1-gr-autres-negations", "G5.7", "Les autres négations", "Jamais, plus, rien, personne, ne… que, ni… ni.", "grammaire"),
  lesson("A1", "a1-gr-phrase-exclamative", "G5.8", "La phrase exclamative", "Quel, que, comme, qu'est-ce que… comme : exprimer un sentiment.", "grammaire"),
`;

  const g8Block = `  // ── G8 — Le passé ──
  lesson("A1", "a1-gr-passe-compose-avoir", "G8.1", "Le passé composé avec avoir", "Auxiliaire avoir + participe passé ; verbes en -er et formes fréquentes.", "grammaire"),
  lesson("A1", "a1-gr-passe-compose-etre", "G8.2", "Le passé composé avec être", "Verbes de déplacement, accord du participe et verbes pronominaux.", "grammaire"),
  lesson("A1", "a1-gr-verbes-double-auxiliaire", "G8.3", "Les verbes à double auxiliaire", "Sortir, rentrer, entrer, passer, monter, descendre et retourner : être ou avoir.", "grammaire"),
  lesson("A1", "a1-gr-pronominaux-passe-compose", "G8.4", "Les verbes pronominaux au passé composé", "Auxiliaire être, accord avec le sujet réel et négation.", "grammaire"),
  lesson("A1", "a1-gr-imparfait", "G8.5", "L'imparfait", "Description et habitude passées ; formation et irréguliers.", "grammaire"),
  lesson("A1", "a1-gr-passe-recent", "G8.6", "Le passé récent", "Venir de + infinitif : une action toute proche du moment présent.", "grammaire"),
  lesson("A1", "a1-gr-imparfait-passe-compose", "G8.7", "L'imparfait / Le passé composé", "Décor et habitude (imparfait) vs actions délimitées (passé composé).", "grammaire"),
  lesson("A1", "a1-gr-plus-que-parfait", "G8.8", "Le plus-que-parfait", "Action antérieure dans un récit au passé ; auxiliaire à l'imparfait + participe.", "grammaire"),
  lesson("A1", "a1-gr-accord-participe-passe", "G8.9", "L'accord du participe passé", "Accord avec être, avec le COD antéposé après avoir ; exception en.", "grammaire"),
`;

  const g9Block = `  // ── G9 — Le futur ──
  lesson("A1", "a1-gr-futur-proche", "G9.1", "Le futur proche", "Aller + infinitif : projet et événement immédiat.", "grammaire"),
  lesson("A1", "a1-gr-futur-simple", "G9.2", "Le futur simple", "Prévisions, promesses ; formation et radicaux irréguliers.", "grammaire"),
  lesson("A2", "a2-gr-futur-simple-ou-proche", "G9.3", "Futur simple ou futur proche ?", "Choisir selon la proximité, l'intention, la promesse ou la prévision.", "grammaire"),
  lesson("A2", "a2-gr-hypothese-futur", "G9.4", "L'hypothèse sur le futur", "Si + présent, puis futur simple ; condition et conséquence.", "grammaire"),
  lesson("A1", "a1-gr-futur-anterieur", "G9.5", "Le futur antérieur", "Action antérieure à un futur ou un impératif ; quand, dès que…", "grammaire"),
`;

  const g14Block = `  // ── G14 — Les adverbes ──
  lesson("A2", "a1-gr-adverbes-intensite", "G14.1", "Les adverbes d'intensité", "Très, beaucoup, trop, assez… : emploi et place.", "grammaire"),
  lesson("A2", "a1-gr-adverbes-ment", "G14.2", "Les adverbes en -ment", "Formation (féminin, -amment/-emment) et place.", "grammaire"),
  lesson("A1", "a1-gr-l22", "G14.3", "Les adverbes de fréquence", "Toujours, souvent, parfois, rarement, jamais : situer une action dans le temps.", "grammaire"),
`;

  let out = src;
  out = out.replace(
    /  \/\/ ── G5 —[\s\S]*?(?=  \/\/ ── G6 —)/,
    g5Block,
  );
  out = out.replace(
    /  \/\/ ── G8 —[\s\S]*?(?=  \/\/ ── G9 —)/,
    g8Block,
  );
  out = out.replace(
    /  \/\/ ── G9 —[\s\S]*?(?=  \/\/ ── G10 —)/,
    g9Block,
  );
  out = out.replace(
    /  \/\/ ── G14 —[\s\S]*?(?=  \/\/ ── G15 —)/,
    g14Block,
  );
  // Remove entire G19 section
  out = out.replace(
    /  \/\/ ── G19 —[\s\S]*?(?= \];\n)/,
    "",
  );

  // Update REORGANIZED_GRAMMAR_CODES mirror in french-data
  for (const [slug, code] of Object.entries(CODE_OVERRIDES)) {
    const re = new RegExp(`("${slug.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}":\\s*")G[\\d.]+(")`);
    if (re.test(out)) out = out.replace(re, `$1${code}$2`);
  }
  for (const slug of REMOVED_SLUGS) {
    if (CODE_OVERRIDES[slug]) continue;
    const re = new RegExp(`\\n\\s*"${slug.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}":\\s*"G[\\d.]+",?`, "g");
    out = out.replace(re, "");
  }
  out = out.replace(/\n\s*"a1-gr-question-ouverte-ou":\s*"G[\d.]+",?/, "");
  out = out.replace(/\n\s*"a1-gr-question-inversion":\s*"G[\d.]+",?/, "");
  // strip remaining G19.* from REORGANIZED_GRAMMAR_CODES
  out = out.replace(/\n\s*"[^"]+":\s*"G19\.\d+",?/g, "");

  return out;
}

grammar = patchReorganizedCodes(grammar);
// Also strip remaining G19 from REORGANIZED_CODES in grammar-data
grammar = grammar.replace(/\n\s*"[^"]+":\s*"G19\.\d+",?/g, "");
// Re-add moved slugs that were G19 (stripped) with new codes
for (const [slug, code] of Object.entries(CODE_OVERRIDES)) {
  if (!new RegExp(`"${slug.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`).test(grammar)) {
    grammar = grammar.replace(
      /(const REORGANIZED_CODES: Record<string, string> = \{)/,
      `$1\n  "${slug}": "${code}",`,
    );
  }
}

french = rebuildFrenchG5ThroughG19(french);

fs.writeFileSync(grammarDataPath, grammar);
fs.writeFileSync(frenchDataPath, french);
console.log("Updated grammar-data.ts and french-data.ts registry");

// Show G5/G8/G9/G14 lines
const g5 = french.match(/\/\/ ── G5 —[\s\S]*?\/\/ ── G6 —/)?.[0];
console.log("--- G5 ---\n", g5);
const g8 = french.match(/\/\/ ── G8 —[\s\S]*?\/\/ ── G9 —/)?.[0];
console.log("--- G8 ---\n", g8);
const g9 = french.match(/\/\/ ── G9 —[\s\S]*?\/\/ ── G10 —/)?.[0];
console.log("--- G9 ---\n", g9);
console.log("G19 leftovers in french:", (french.match(/G19\./g) || []).length);
console.log("G19 leftovers in grammar codes:", (grammar.match(/G19\./g) || []).length);
