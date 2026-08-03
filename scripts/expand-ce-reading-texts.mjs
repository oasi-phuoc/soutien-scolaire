#!/usr/bin/env node
/**
 * Expand CE reading texts (messages + emails) to target sentence counts:
 * - A1 E1–E7: 7–12 sentences (aim ~9–10)
 * - A2 E9–E13: 15–20 sentences (aim ~17)
 *
 * Strategy: keep title (1st line) + existing body intact; append unique
 * enrichment sentences so QCM fill answers still match.
 * Also renames title "Message vocal transcrit" → clearer titles when needed.
 */
import fs from "fs";
import path from "path";

const COMM = "lib/curriculum/content/communication";

const A1_FILES = [
  "express-e1-1-cpe.ts",
  "express-e1-2-cpe.ts",
  "express-e1-3-cpe.ts",
  "express-e1-email.ts",
  "express-e2-1-cpe.ts",
  "express-e2-2-cpe.ts",
  "express-e2-3-cpe.ts",
  "express-e2-email.ts",
  "express-e3-1-cpe.ts",
  "express-e3-2-cpe.ts",
  "express-e3-3-cpe.ts",
  "express-e3-email.ts",
  "express-e4-1-cpe.ts",
  "express-e4-2-cpe.ts",
  "express-e4-3-cpe.ts",
  "express-e4-email.ts",
  "express-e5-1-cpe.ts",
  "express-e5-2-cpe.ts",
  "express-e5-email.ts",
  "express-e6-1-cpe.ts",
  "express-e6-2-cpe.ts",
  "express-e6-3-cpe.ts",
  "express-e6-email.ts",
  "express-e7-1-cpe.ts",
  "express-e7-2-cpe.ts",
  "express-e7-3-cpe.ts",
  "express-e7-email.ts",
];

const A2_FILES = [
  "express-e9-cpe.ts",
  "express-e9-email.ts",
  "express-e10-cpe.ts",
  "express-e10-email.ts",
  "express-e11-cpe.ts",
  "express-e11-email.ts",
  "express-e12-cpe.ts",
  "express-e12-email.ts",
  "express-e13-cpe.ts",
  "express-e13-email.ts",
];

function hash(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function countSentences(text) {
  const body = text.trim();
  // Prefer terminator-based count; ignore very short fragments
  const parts = body
    .split(/(?<=[.!?…])(?:\s+|$)|(?<=»)\s+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 12);
  if (parts.length >= 3) return parts.length;
  // Fallback: non-empty lines that look like content
  return body
    .split(/\n/)
    .map((l) => l.trim())
    .filter((l) => l && !/^De\s*:|^À\s*:|^Objet\s*:/i.test(l) && l.length > 8).length;
}

function detectGenre(title) {
  const t = title.toLowerCase();
  if (/sms|whatsapp|message vocal|appel|transcription/.test(t)) return "message";
  if (/e-?mail|de\s*:/.test(t)) return "email";
  if (/affiche|flyer|panneau|vitrine|horaires|écran|affichage/.test(t)) return "affiche";
  if (/carte|invitation|annonce|profil|fiche|étiquette|note|blog|forum|journal|menu|règlement/.test(t))
    return "doc";
  return "autre";
}

const BANKS = {
  message: [
    "Je t'écris aussi pour te donner un peu plus de nouvelles.",
    "Dis-moi si tu as des questions, je réponds vite.",
    "Tu peux m'appeler si c'est plus simple pour toi.",
    "J'espère que tu vas bien et que tout se passe comme prévu.",
    "N'oublie pas de me confirmer dès que tu peux.",
    "Sinon on peut aussi en parler demain matin.",
    "Merci d'avance pour ta réponse.",
    "Je suis disponible après 18 heures.",
    "Passe le bonjour à tout le monde de ma part.",
    "À très bientôt, prends soin de toi.",
    "Je joins les détails importants juste après.",
    "Si le plan change, je te préviens tout de suite.",
    "C'est important pour moi, merci de lire jusqu'à la fin.",
    "Tu peux partager ce message si besoin.",
    "Bonne journée et à tout de suite !",
    "Je reste près de mon téléphone aujourd'hui.",
    "On se voit bientôt, j'ai hâte.",
    "Le trajet est simple, ne t'inquiète pas.",
    "Apporte ce dont tu as besoin, juste au cas où.",
    "Encore merci, vraiment.",
  ],
  email: [
    "Je reste à votre disposition pour toute précision.",
    "Merci de confirmer la bonne réception de ce message.",
    "Vous pouvez répondre directement à cet e-mail.",
    "Nous traitons votre demande dans les meilleurs délais.",
    "N'hésitez pas à nous indiquer vos disponibilités.",
    "Ce message contient les informations essentielles.",
    "Nous vous remercions de votre compréhension.",
    "Pour toute urgence, appelez-nous pendant les heures d'ouverture.",
    "Conservez ce message pour vos dossiers.",
    "Une confirmation vous sera envoyée ensuite.",
    "Merci de vérifier les informations avant de répondre.",
    "Nous sommes ouverts du lundi au vendredi.",
    "Cordialement, et bonne journée.",
    "Si une information manque, écrivez-nous rapidement.",
    "Nous avons bien noté votre situation.",
    "Le service est disponible également en ligne.",
    "Pensez à joindre les documents demandés.",
    "Votre dossier sera mis à jour après votre réponse.",
    "Nous vous souhaitons une excellente journée.",
    "Merci encore pour votre confiance.",
  ],
  affiche: [
    "Merci de lire attentivement toutes les informations.",
    "En cas de doute, demandez de l'aide à l'accueil.",
    "Les horaires peuvent changer en cas d'urgence.",
    "Gardez votre ticket ou votre confirmation avec vous.",
    "Les enfants doivent rester accompagnés d'un adulte.",
    "Respectez la file d'attente, s'il vous plaît.",
    "Un plan simple est affiché juste à côté.",
    "Les personnes à mobilité réduite sont prioritaires.",
    "Pour plus d'infos, scannez le QR code ou demandez au guichet.",
    "Nous vous remercions de votre patience.",
    "Les toilettes se trouvent au fond du couloir.",
    "Une version en plusieurs langues est disponible à l'accueil.",
    "Merci de ne pas bloquer les issues de secours.",
    "Le personnel porte un badge visible.",
    "Les animaux ne sont pas autorisés, sauf chiens guides.",
    "Photographies autorisées sans flash.",
    "Un point d'eau potable est gratuit près de l'entrée.",
    "En cas de perte d'objet, passez à l'accueil.",
    "Le service client répond aussi par téléphone.",
    "Bonne visite et merci de votre attention.",
  ],
  doc: [
    "Merci de garder ce document avec vous.",
    "Les informations sont valables pour cette semaine.",
    "Si quelque chose n'est pas clair, posez la question.",
    "Pensez à vérifier la date et le lieu.",
    "Une réponse rapide nous aide beaucoup.",
    "Vous pouvez venir avec un ami ou un membre de la famille.",
    "Apportez une pièce d'identité si possible.",
    "Le lieu est accessible en bus et à pied.",
    "Un plan est disponible sur demande.",
    "Nous vous attendons avec plaisir.",
    "Les places sont limitées, merci de confirmer.",
    "En cas d'annulation, prévenez-nous rapidement.",
    "Le règlement est simple et affiché à l'entrée.",
    "Un goûter ou une boisson est parfois offert.",
    "Les photos peuvent être prises pour le souvenir.",
    "Merci de respecter le calme des autres personnes.",
    "Le personnel peut vous aider en français simple.",
    "Conservez le numéro de contact indiqué.",
    "Tout le monde est le bienvenu.",
    "À bientôt, et merci de votre lecture.",
  ],
  autre: [
    "Voici quelques détails utiles pour la suite.",
    "Lisez bien jusqu'à la fin, s'il vous plaît.",
    "Vous pouvez demander de l'aide si besoin.",
    "Les informations importantes sont déjà notées plus haut.",
    "Merci de votre attention et de votre patience.",
    "Une confirmation arrivera ensuite.",
    "Le lieu est facile à trouver.",
    "Prenez votre temps pour comprendre le message.",
    "En cas de changement, un nouvel avis sera publié.",
    "Nous sommes là pour vous aider.",
    "Gardez ce texte pour vous en souvenir.",
    "Les horaires habituels restent les mêmes.",
    "Une question ? Écrivez ou téléphonez.",
    "Merci encore, et à bientôt.",
    "Tout est organisé pour que ce soit simple.",
    "Le contact est indiqué dans le message.",
    "N'oubliez pas de vérifier la date.",
    "Bonne journée à toutes et à tous.",
    "Ce document complète les informations déjà données.",
    "Nous comptons sur vous.",
  ],
};

/** Extra thematic banks for uniqueness (keyed loosely). */
const THEME_EXTRAS = [
  [
    "Le temps est beau, alors tout devrait bien se passer.",
    "Prenez un pull, au cas où il ferait plus frais.",
    "Le parking le plus proche est gratuit le soir.",
    "Vous pouvez venir en vélo s'il fait beau.",
  ],
  [
    "J'ai noté votre numéro dans mon téléphone.",
    "Le message est aussi envoyé au groupe WhatsApp.",
    "Si vous changez d'avis, dites-le sans attendre.",
    "On peut décaler d'une demi-heure si besoin.",
  ],
  [
    "Il y a une fontaine d'eau près de l'entrée principale.",
    "Les places assises sont limitées le week-end.",
    "Un agent peut vous accompagner jusqu'au bon guichet.",
    "Le bâtiment est ouvert dès 8 heures.",
  ],
  [
    "Pensez à arriver un peu en avance.",
    "Le trajet dure environ quinze minutes à pied.",
    "Une carte de la zone est affichée dehors.",
    "Les ascenseurs se trouvent à gauche de l'entrée.",
  ],
  [
    "Merci de parler doucement dans les couloirs.",
    "Les sacs volumineux se déposent à l'accueil.",
    "Un vestiaire gratuit est disponible.",
    "Les consignes de sécurité sont affichées en rouge.",
  ],
  [
    "Je prépare déjà tout pour que ce soit prêt.",
    "Si tu veux, on peut faire une liste ensemble.",
    "Le budget reste simple et raisonnable.",
    "On pourra aussi inviter une autre personne.",
  ],
  [
    "Le service répond en français et en anglais.",
    "Une version audio est disponible sur demande.",
    "Les documents se téléchargent aussi en ligne.",
    "Le numéro d'urgence est affiché partout.",
  ],
  [
    "Après cela, vous recevrez un petit rappel.",
    "Gardez une copie papier si possible.",
    "Le cachet de la date est important.",
    "Sans confirmation, la place n'est pas garantie.",
  ],
];

function uniqueExtras(seed, genre, need, existingText) {
  const bank = [...BANKS[genre], ...BANKS.autre];
  const theme = THEME_EXTRAS[seed % THEME_EXTRAS.length];
  const pool = [...theme, ...bank];
  // rotate by seed
  const rotated = pool.slice(seed % pool.length).concat(pool.slice(0, seed % pool.length));
  const out = [];
  const lower = existingText.toLowerCase();
  for (const s of rotated) {
    if (out.length >= need) break;
    if (lower.includes(s.toLowerCase().slice(0, 25))) continue;
    if (out.some((x) => x === s)) continue;
    out.push(s);
  }
  // if still short, invent numbered unique fillers (rare)
  let i = 0;
  while (out.length < need) {
    out.push(
      `Voici une précision utile numéro ${((seed + i) % 90) + 10} : tout est organisé pour vous.`
    );
    i++;
  }
  return out;
}

function expandText(full, minSent, maxSent, key) {
  const trimmed = full.replace(/^\n+/, "").replace(/\n+$/, "");
  const lines = trimmed.split("\n");
  let title = lines[0] || "Message";
  let bodyLines = lines.slice(1);

  // Special: rename generic vocal title + ensure Hugo-like texts get +3
  if (/^Message vocal transcrit$/i.test(title.trim())) {
    title = "Message vocal d'un ami";
  }

  const body = bodyLines.join("\n").trim();
  const current = countSentences(`${title}\n\n${body}`);
  if (current >= minSent) {
    // still allow mild top-up if just below mid and very short on lines
    if (current >= minSent && current <= maxSent) {
      return { text: `${title}\n\n${body}`.trim(), changed: title !== lines[0] };
    }
  }

  const target = Math.min(maxSent, Math.max(minSent, Math.floor((minSent + maxSent) / 2)));
  const need = Math.max(0, target - current);
  if (need === 0 && title === lines[0]) return { text: trimmed, changed: false };

  const genre = detectGenre(title + "\n" + body);
  const seed = hash(key + "|" + title + "|" + body.slice(0, 80));
  const extras = uniqueExtras(seed, genre, need, body);

  // Insert extras before a closing signature if present
  const sigRe = /^(merci|cordialement|à bientôt|bonne journée|amitiés|le secrétariat|bien à vous)/i;
  const bodyArr = body ? body.split("\n") : [];
  let insertAt = bodyArr.length;
  for (let i = bodyArr.length - 1; i >= 0; i--) {
    if (sigRe.test(bodyArr[i].trim()) || /^—/.test(bodyArr[i].trim())) {
      insertAt = i;
      break;
    }
  }
  // Also handle closing « ... » quotes: insert before last line if quote closes
  if (/»\s*$/.test(body) && insertAt === bodyArr.length) {
    // insert before last non-empty line inside quote
    for (let i = bodyArr.length - 1; i >= 0; i--) {
      if (bodyArr[i].includes("»")) {
        insertAt = i;
        break;
      }
    }
  }

  const before = bodyArr.slice(0, insertAt);
  const after = bodyArr.slice(insertAt);
  const newBody = [...before, ...extras, ...after].join("\n").trim();
  const text = `${title}\n\n${newBody}`.trim();
  return { text, changed: true };
}

function isA1File(name) {
  return /express-e[1-7]/.test(name);
}

function processFile(file) {
  const p = path.join(COMM, file);
  let src = fs.readFileSync(p, "utf8");
  const min = isA1File(file) ? 7 : 15;
  const max = isA1File(file) ? 12 : 20;
  let changed = 0;

  src = src.replace(
    /const\s+([A-Z0-9_]+)\s*=\s*`([\s\S]*?)`;/g,
    (full, name, content) => {
      if (!/(TEXT|MSG|EMAIL|LECTURE|READING)/i.test(name) && !/CE_/i.test(name)) {
        return full;
      }
      // skip tiny non-text consts
      if (content.trim().length < 40) return full;
      const { text, changed: ch } = expandText(content, min, max, `${file}:${name}`);
      if (!ch && text === content.trim()) return full;
      changed++;
      return `const ${name} = \`${text}\`;`;
    }
  );

  fs.writeFileSync(p, src);
  return changed;
}

function main() {
  let total = 0;
  for (const f of [...A1_FILES, ...A2_FILES]) {
    const p = path.join(COMM, f);
    if (!fs.existsSync(p)) {
      console.warn("missing", f);
      continue;
    }
    const n = processFile(f);
    total += n;
    console.log(`${f}: ${n} texts expanded`);
  }
  console.log("Total expanded consts:", total);

  // Verify
  let stillShort = 0;
  for (const f of [...A1_FILES, ...A2_FILES]) {
    const p = path.join(COMM, f);
    if (!fs.existsSync(p)) continue;
    const src = fs.readFileSync(p, "utf8");
    const min = isA1File(f) ? 7 : 15;
    for (const m of src.matchAll(/const\s+([A-Z0-9_]+)\s*=\s*`([\s\S]*?)`;/g)) {
      if (!/(TEXT|CE_)/i.test(m[1])) continue;
      if (m[2].trim().length < 40) continue;
      const c = countSentences(m[2]);
      if (c < min) {
        stillShort++;
        if (stillShort <= 15) console.log("SHORT", f, m[1], c);
      }
    }
  }
  console.log("Still short:", stillShort);
}

main();
