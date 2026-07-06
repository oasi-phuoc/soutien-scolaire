#!/usr/bin/env node
/**
 * Génère co-questions-scolaire-base.ts à partir des transcriptions scolaire.
 * Usage: node scripts/generate-co-scolaire-questions.mjs
 */
import fs from "node:fs";

const transcripts = JSON.parse(
  fs.readFileSync("lib/curriculum/content/communication/co-transcripts-scolaire-base.json", "utf8"),
);

const CLOCK_RE = /\b(\d{1,2})\s*h(?:\s*(\d{2}))?\b/gi;
const EURO_RE = /(\d+)\s*euros?/gi;

function esc(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, " ");
}

function pickDistractors(correct, pool) {
  const out = [correct];
  for (const item of pool) {
    if (out.length >= 3) break;
    if (item !== correct && !out.includes(item)) out.push(item);
  }
  while (out.length < 3) out.push(`Option ${out.length}`);
  return out;
}

function shuffleCorrect(choices, correctIdx) {
  const correct = choices[correctIdx];
  const others = choices.filter((_, i) => i !== correctIdx);
  const pos = correct.length % 3;
  const ordered = [...others];
  ordered.splice(pos, 0, correct);
  return { choices: ordered.slice(0, 3), correct: pos };
}

function makeTextQ(id, textQ, correct, distractorPool, fillQ, fill) {
  const raw = pickDistractors(correct, distractorPool);
  const { choices, correct: textC } = shuffleCorrect(raw, 0);
  const img = choices.map((c) => (c.length > 18 ? c.slice(0, 16) + "…" : c));
  return `  {
    id: "${id}", textQ: "${esc(textQ)}", text: [${choices.map((c) => `"${esc(c)}"`).join(", ")}], textC: ${textC},
    img: [${img.map((c) => `"${esc(c)}"`).join(", ")}], imgC: ${textC},
    fillQ: "${esc(fillQ)}", fill: "${esc(fill)}", fillA: [${JSON.stringify(fill.toLowerCase())}],
  }`;
}

function questionsForMessage(num, t) {
  const slug = `message-${num}`;
  const qs = [];
  const times = [...t.matchAll(CLOCK_RE)].map((m) => (m[2] ? `${m[1]} h ${m[2]}` : `${m[1]} h`));
  if (times[0]) {
    const c = times[0].replace(" h ", " h ");
    qs.push(makeTextQ(`sm${num}-t`, "À quelle heure a lieu l'activité ?", c, ["10 h", "14 h 30", "18 h 15", "midi"], "L'activité est à ___ .", c.replace(" h ", "h").replace(" ", "")));
  }
  if (/foot|football|match/i.test(t)) {
    qs.push(makeTextQ(`sm${num}-a`, "Quel sport est mentionné ?", "Football", ["Tennis", "Basket", "Natation"], "Il s'agit de ___ .", "football"));
  }
  if (/bibliothèque/i.test(t)) {
    qs.push(makeTextQ(`sm${num}-l`, "Où propose-t-on de se retrouver ?", "À la bibliothèque", ["Au cinéma", "À la piscine", "Au parc"], "On se retrouve à la ___ .", "bibliothèque"));
  }
  if (/école|cantine|cours/i.test(t)) {
    qs.push(makeTextQ(`sm${num}-e`, "Le message parle surtout de…", "L'école", ["Les vacances", "Le travail", "La cuisine"], "Le sujet est l'___ .", "école"));
  }
  if (/manger|repas|glace|sandwich|pâtes/i.test(t)) {
    qs.push(makeTextQ(`sm${num}-m`, "Y a-t-il un repas ou un goûter ?", "Oui", ["Non", "Peut-être", "Je ne sais pas"], "Réponse : ___", "oui"));
  }
  if (/annulé|retard|absent/i.test(t)) {
    qs.push(makeTextQ(`sm${num}-x`, "Y a-t-il un problème ou un changement ?", "Oui", ["Non", "Un voyage", "Un cadeau"], "Il y a un ___ .", "problème"));
  }
  if (/piscine|parc|cinéma|musée|théâtre/i.test(t)) {
    const place = /piscine/i.test(t) ? "La piscine" : /musée/i.test(t) ? "Le musée" : /théâtre/i.test(t) ? "Le théâtre" : /cinéma/i.test(t) ? "Le cinéma" : "Le parc";
    qs.push(makeTextQ(`sm${num}-p`, "Quel lieu de sortie est mentionné ?", place, ["La gare", "Le supermarché", "L'hôpital"], "Ils vont au ___ .", place.toLowerCase().replace(/^le |^la /, "")));
  }
  if (qs.length < 3) {
    qs.push(makeTextQ(`sm${num}-g`, "Quel type de message est-ce ?", "Un message entre amis", ["Une annonce à la radio", "Un bulletin météo", "Une recette"], "C'est un message ___ .", "entre amis"));
  }
  return { slug, category: "message", activity: num, qs: qs.slice(0, 6) };
}

function questionsForAnnonce(num, t) {
  const qs = [];
  if (/fermé|ferme|fermée/i.test(t)) {
    qs.push(makeTextQ(`sa${num}-f`, "Un lieu est-il fermé ?", "Oui", ["Non", "On ne sait pas", "Toujours ouvert"], "Réponse : ___", "oui"));
  }
  if (/métro|bus|train|ligne/i.test(t)) {
    qs.push(makeTextQ(`sa${num}-t`, "Le message concerne les transports ?", "Oui", ["Non", "La cuisine", "Le sport"], "C'est une info sur les ___ .", "transports"));
  }
  if (/zoo|musée|gymnase|stade/i.test(t)) {
    const p = /zoo/i.test(t) ? "Le zoo" : /musée/i.test(t) ? "Le musée" : /stade/i.test(t) ? "Le stade" : "Le gymnase";
    qs.push(makeTextQ(`sa${num}-p`, "Quel lieu public est concerné ?", p, ["La bibliothèque", "La poste", "La banque"], "Lieu : ___", p.toLowerCase().replace(/^le /, "")));
  }
  if (/sport|basket|course|foot/i.test(t)) {
    qs.push(makeTextQ(`sa${num}-s`, "Le message parle de sport ?", "Oui", ["Non", "De cuisine", "De mode"], "Réponse : ___", "oui"));
  }
  if (qs.length < 3) {
    qs.push(makeTextQ(`sa${num}-g`, "Où entend-on ce message ?", "Dans un lieu public", ["À la radio uniquement", "Dans un cours", "Au téléphone"], "C'est une ___ .", "annonce"));
  }
  return { slug: `annonce-${num}`, category: "annonce", activity: num, qs: qs.slice(0, 6) };
}

function questionsForRadio(num, t) {
  const qs = [];
  if (/météo|pluie|soleil|degrés|chaud|vent/i.test(t)) {
    qs.push(makeTextQ(`sr${num}-w`, "Quel est le thème principal ?", "La météo", ["Le sport", "La politique", "La mode"], "C'est la ___ .", "météo"));
  }
  if (/concert|musique|chanson|groupe/i.test(t)) {
    qs.push(makeTextQ(`sr${num}-m`, "Le message parle de musique ?", "Oui", ["Non", "De cuisine", "De jardinage"], "Réponse : ___", "oui"));
  }
  if (/musée|lecture|livre|librairie/i.test(t)) {
    qs.push(makeTextQ(`sr${num}-c`, "Quel thème culturel est évoqué ?", "La culture", ["Le sport", "La météo", "La cuisine"], "Thème : ___", "culture"));
  }
  if (/restaurant|menu|plat|manger/i.test(t)) {
    qs.push(makeTextQ(`sr${num}-r`, "Parle-t-on de nourriture ?", "Oui", ["Non", "De transport", "D'école"], "Réponse : ___", "oui"));
  }
  const euros = [...t.matchAll(EURO_RE)].map((m) => `${m[1]} euros`);
  if (euros[0]) {
    qs.push(makeTextQ(`sr${num}-p`, "Quel prix est mentionné ?", euros[0], ["5 euros", "50 euros", "100 euros"], "Prix : ___", euros[0].replace(" euros", "")));
  }
  if (qs.length < 3) {
    qs.push(makeTextQ(`sr${num}-g`, "Il s'agit d'une émission de…", "Radio", ["Télévision", "Cinéma", "Théâtre"], "C'est à la ___ .", "radio"));
  }
  return { slug: `radio-${num}`, category: "radio", activity: num, qs: qs.slice(0, 6) };
}

const pools = [];

for (const [key, text] of Object.entries(transcripts)) {
  if (text.length < 40) continue;
  const m = key.match(/^(message|annonce|radio)-(\d+)$/);
  if (!m) continue;
  const [, cat, num] = m;
  let entry;
  if (cat === "message") entry = questionsForMessage(num, text);
  else if (cat === "annonce") entry = questionsForAnnonce(num, text);
  else entry = questionsForRadio(num, text);
  if (
    entry.qs.length >= 3
    && !(cat === "message" && ["1", "2", "3", "4", "6", "7", "8", "9", "11", "13", "14", "15", "16", "17", "19", "20"].includes(num))
    && !(cat === "annonce" && ["21", "22", "23", "24", "25", "26", "27", "28", "29", "30"].includes(num))
    && !(cat === "radio" && ["31", "32", "33", "34"].includes(num))
  ) pools.push(entry);
}

let out = `import { buildPool, type COMultiQuestion } from "./co-questions-helpers";
import { SCOLAIRE_ANNONCES_BOOK, SCOLAIRE_MESSAGES_BOOK } from "./co-questions-scolaire-messages";

/** Pools QCM / saisie — CO base scolaire (généré depuis transcriptions). */\n`;

const exports = {};
for (const p of pools) {
  const constName = `SCOLAIRE_${p.category.toUpperCase()}_${p.activity}`;
  out += `\nconst ${constName} = buildPool("base", "scolaire-${p.slug}", [\n${p.qs.join(",\n")}\n]);\n`;
  exports[`base-scolaire-${p.category}-${p.activity}`] = constName;
}

out += `\nexport const CO_QUESTION_POOLS_SCOLAIRE_BASE: Record<string, COMultiQuestion[]> = {\n`;
for (const [k, v] of Object.entries(exports)) {
  out += `  "${k}": ${v},\n`;
}
out += `  ...SCOLAIRE_ANNONCES_BOOK,\n`;
out += `  ...SCOLAIRE_MESSAGES_BOOK,\n`;
out += `};\n`;

fs.writeFileSync("lib/curriculum/content/communication/co-questions-scolaire-base.ts", out);
console.log(`Generated ${pools.length} pools → co-questions-scolaire-base.ts`);
