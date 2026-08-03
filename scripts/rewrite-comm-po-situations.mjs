#!/usr/bin/env node
/**
 * Rewrite generic PO contexts + dialogues:
 * - A1: "Situation : X. Thème : Y." → natural "Vous êtes…"
 * - A2: "Vous devez gérer une situation : …" → natural "Vous êtes…"
 * Also replaces identical gabarit dialogues with unique ones.
 */
import fs from "fs";
import path from "path";

const COMM = "lib/curriculum/content/communication";

const THEME_ACTION = {
  "la famille": "et vous parlez de votre famille",
  inviter: "et vous invitez quelqu'un à une sortie",
  "le logement": "et vous demandez des informations sur un logement",
  "un problème domestique": "et vous expliquez un problème domestique",
  "le règlement": "et vous demandez des précisions sur le règlement",
  "l'école": "et vous demandez des informations par rapport à votre école",
  "le quotidien": "et vous parlez de votre quotidien",
  "le travail": "et vous parlez de votre travail",
  "les vêtements": "et vous demandez des conseils pour des vêtements",
  "le restaurant": "et vous réservez une table au restaurant",
  "la boulangerie": "et vous passez une commande à la boulangerie",
};

const PLACE_ROLE = {
  "à la mairie": {
    a: { title: "L'agent d'accueil", vous: "l'agent / l'agente d'accueil" },
    b: { title: "Vous", vous: "la personne qui demande des renseignements" },
    title: "À la mairie",
  },
  "au téléphone": {
    a: { title: "L'interlocuteur", vous: "la personne au téléphone" },
    b: { title: "Vous", vous: "la personne qui appelle" },
    title: "Au téléphone",
  },
  "chez le voisin": {
    a: { title: "Le voisin", vous: "le voisin / la voisine" },
    b: { title: "Vous", vous: "la personne qui vient parler" },
    title: "Chez le voisin",
  },
  "à l'accueil": {
    a: { title: "L'accueil", vous: "la personne à l'accueil" },
    b: { title: "Vous", vous: "la personne qui demande de l'aide" },
    title: "À l'accueil",
  },
  "dans la rue": {
    a: { title: "Le passant", vous: "le passant / la passante" },
    b: { title: "Vous", vous: "la personne qui demande son chemin" },
    title: "Dans la rue",
  },
  "au bureau": {
    a: { title: "Le collègue", vous: "le collègue / la collègue" },
    b: { title: "Vous", vous: "le collègue / la collègue" },
    title: "Au bureau",
  },
  "à la réception": {
    a: { title: "Le réceptionniste", vous: "le / la réceptionniste" },
    b: { title: "Vous", vous: "le client / la cliente" },
    title: "À la réception",
  },
  "en visio": {
    a: { title: "Le correspondant", vous: "le correspondant / la correspondante" },
    b: { title: "Vous", vous: "la personne en visio" },
    title: "En visioconférence",
  },
  "au guichet": {
    a: { title: "L'employé", vous: "l'employé / l'employée du guichet" },
    b: { title: "Vous", vous: "le client / la cliente" },
    title: "Au guichet",
  },
  "dans un magasin": {
    a: { title: "Le vendeur", vous: "le vendeur / la vendeuse" },
    b: { title: "Vous", vous: "le client / la cliente" },
    title: "Dans un magasin",
  },
};

const A2_ACTION_PLACE = {
  "Demander des informations": "à l'accueil",
  "Résoudre un problème": "au guichet",
  "Prendre un rendez-vous": "au téléphone",
  "Confirmer un rendez-vous": "au téléphone",
  "Demander conseil à un proche": "chez un ami",
  "Signaler un retard": "au téléphone",
  "Faire une réclamation polie": "au service clients",
  "Obtenir un renseignement urgent": "à l'accueil",
  "Comparer deux options": "au bureau",
  "Remercier pour une aide": "en face à face",
};

const A2_TOPIC_NOUN = {
  invitations: "une invitation",
  rencontres: "une rencontre",
  événements: "un événement",
  "vie scolaire": "la vie scolaire",
  déplacements: "un déplacement",
  transports: "les transports",
  logement: "un logement",
  travail: "le travail",
  santé: "la santé",
  courses: "les courses",
  achats: "des achats",
  loisirs: "des loisirs",
  formation: "une formation",
  administration: "un dossier administratif",
  banque: "la banque",
  poste: "la poste",
  téléphone: "le téléphone",
  internet: "Internet",
  restaurant: "un restaurant",
  hôtel: "un hôtel",
  voyage: "un voyage",
  culture: "une sortie culturelle",
  sport: "le sport",
  famille: "la famille",
  voisinage: "le voisinage",
  "vie quotidienne": "la vie quotidienne",
};

function hash(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function pick(arr, seed) {
  return arr[seed % arr.length];
}

function a1Context(place, theme) {
  const action = THEME_ACTION[theme] || `et vous parlez de ${theme}`;
  return `Vous êtes ${place} ${action}.`;
}

function a1Dialogue(place, theme, seed) {
  const topicFull =
    theme === "inviter"
      ? "l'invitation"
      : theme === "un problème domestique"
        ? "le problème domestique"
        : theme;
  const openersA = [
    "Bonjour, je peux vous aider ?",
    "Bonjour ! Vous cherchez quelque chose ?",
    "Bonjour, vous désirez ?",
    "Oui, bonjour, je vous écoute.",
  ];
  const openersB = [
    `Bonjour, j'ai une question à propos de ${theme}.`,
    `Bonjour, je voudrais des informations sur ${theme}.`,
    `Bonjour, c'est au sujet de ${theme}.`,
    `Bonjour, je peux vous parler de ${theme} ?`,
  ];
  const mid = [
    [
      { role: "A", text: "Bien sûr. Que souhaitez-vous savoir exactement ?" },
      { role: "B", text: `Je voudrais comprendre comment ça marche pour ${topicFull}.` },
      { role: "A", text: "Je vais vous expliquer. Vous avez déjà un dossier ?" },
      { role: "B", text: "Pas encore. C'est la première fois." },
      { role: "A", text: "Pas de problème. Prenez ce formulaire et remplissez-le." },
      { role: "B", text: "D'accord. Je peux le rendre aujourd'hui ?" },
      { role: "A", text: "Oui, avant 17 heures, c'est parfait." },
      { role: "B", text: "Merci beaucoup pour votre aide !" },
    ],
    [
      { role: "A", text: "D'accord. Vous êtes déjà passé(e) ici pour ça ?" },
      { role: "B", text: "Non, c'est la première fois. Je suis un peu perdu(e)." },
      { role: "A", text: `Je comprends. Pour ${topicFull}, il faut d'abord prendre un numéro.` },
      { role: "B", text: "Et ensuite, j'attends où ?" },
      { role: "A", text: "Dans la salle d'attente, à droite. On vous appellera." },
      { role: "B", text: "Combien de temps ça prend, environ ?" },
      { role: "A", text: "En général, dix à quinze minutes." },
      { role: "B", text: "Parfait, merci beaucoup !" },
    ],
    [
      { role: "A", text: "Avec plaisir. C'est urgent ?" },
      { role: "B", text: "Oui, un peu. J'ai besoin d'une réponse rapidement." },
      { role: "A", text: `Pour ${topicFull}, je peux vous donner les infos principales.` },
      { role: "B", text: "Super. Est-ce que je dois apporter des documents ?" },
      { role: "A", text: "Oui : une pièce d'identité et un justificatif de domicile." },
      { role: "B", text: "Je les ai dans mon sac. Je peux les montrer maintenant ?" },
      { role: "A", text: "Oui, venez au bureau 2. Je vous suis." },
      { role: "B", text: "Merci, c'est très gentil !" },
    ],
    [
      { role: "A", text: "Bien sûr. Vous pouvez me donner plus de détails ?" },
      { role: "B", text: `Oui. Je cherche une solution simple pour ${topicFull}.` },
      { role: "A", text: "Il y a deux possibilités. Vous préférez le matin ou l'après-midi ?" },
      { role: "B", text: "L'après-midi, après 15 heures." },
      { role: "A", text: "Alors je vous propose jeudi à 15 h 30." },
      { role: "B", text: "C'est parfait. Vous m'envoyez une confirmation ?" },
      { role: "A", text: "Oui, par SMS. Vous avez noté mon nom ?" },
      { role: "B", text: "Oui. Merci et à jeudi !" },
    ],
  ];
  const variant = mid[seed % mid.length];
  const close =
    seed % 2 === 0
      ? [
          { role: "A", text: "Je vous en prie. Bonne journée !" },
          { role: "B", text: "Bonne journée à vous aussi !" },
        ]
      : [
          { role: "A", text: "Avec plaisir. À bientôt !" },
          { role: "B", text: "À bientôt, et merci encore !" },
        ];

  const lines = [
    { role: "A", text: pick(openersA, seed) },
    { role: "B", text: pick(openersB, seed + 3) },
    ...variant,
    ...close,
  ];

  return lines.slice(0, 10);
}

function parseA2Gerer(raw) {
  // "Demander des informations sur invitations."
  const t = raw.replace(/\.$/, "").trim();
  const patterns = [
    [/^Demander des informations sur\s+(.+)$/i, "Demander des informations"],
    [/^Résoudre un problème lié à\s+(.+)$/i, "Résoudre un problème"],
    [/^Prendre un rendez-vous pour\s+(.+)$/i, "Prendre un rendez-vous"],
    [/^Confirmer un rendez-vous\s+(.+)$/i, "Confirmer un rendez-vous"],
    [/^Demander conseil à un proche sur\s+(.+)$/i, "Demander conseil à un proche"],
    [/^Signaler un retard lié à\s+(.+)$/i, "Signaler un retard"],
    [/^Faire une réclamation polie sur\s+(.+)$/i, "Faire une réclamation polie"],
    [/^Obtenir un renseignement urgent sur\s+(.+)$/i, "Obtenir un renseignement urgent"],
    [/^Comparer deux options pour\s+(.+)$/i, "Comparer deux options"],
    [/^Remercier pour une aide concernant\s+(.+)$/i, "Remercier pour une aide"],
  ];
  for (const [re, actionKey] of patterns) {
    const m = t.match(re);
    if (m) return { actionKey, topic: m[1].trim(), actionLabel: actionKey };
  }
  return { actionKey: "Demander des informations", topic: t, actionLabel: t };
}

function a2Context(raw, seed) {
  const { actionKey, topic } = parseA2Gerer(raw);
  const place = A2_ACTION_PLACE[actionKey] || pick(
    ["à l'accueil", "au guichet", "au téléphone", "au bureau"],
    seed
  );
  const noun = A2_TOPIC_NOUN[topic] || topic;
  const templates = {
    "Demander des informations": `Vous êtes ${place} et vous demandez des informations sur ${noun}.`,
    "Résoudre un problème": `Vous êtes ${place} et vous voulez résoudre un problème lié à ${noun}.`,
    "Prendre un rendez-vous": `Vous êtes ${place} et vous voulez prendre un rendez-vous pour ${noun}.`,
    "Confirmer un rendez-vous": `Vous êtes ${place} et vous confirmez un rendez-vous concernant ${noun}.`,
    "Demander conseil à un proche": `Vous êtes ${place} et vous demandez conseil à un proche au sujet de ${noun}.`,
    "Signaler un retard": `Vous êtes ${place} et vous signalez un retard lié à ${noun}.`,
    "Faire une réclamation polie": `Vous êtes ${place} et vous faites une réclamation polie au sujet de ${noun}.`,
    "Obtenir un renseignement urgent": `Vous êtes ${place} et vous avez besoin d'un renseignement urgent sur ${noun}.`,
    "Comparer deux options": `Vous êtes ${place} et vous comparez deux options pour ${noun}.`,
    "Remercier pour une aide": `Vous êtes ${place} et vous remerciez quelqu'un pour son aide concernant ${noun}.`,
  };
  return templates[actionKey] || `Vous êtes ${place} et vous parlez de ${noun}.`;
}

function a2Dialogue(raw, seed) {
  const { actionKey, topic } = parseA2Gerer(raw);
  const noun = A2_TOPIC_NOUN[topic] || topic;
  const variants = [
    [
      { role: "A", text: "Bonjour ! Je peux vous aider ?" },
      { role: "B", text: `Bonjour, j'ai besoin d'aide au sujet de ${noun}.` },
      { role: "A", text: "D'accord. Pouvez-vous m'expliquer la situation ?" },
      { role: "B", text: `Oui. C'est important pour moi et j'aimerais une réponse claire.` },
      { role: "A", text: "Je comprends. Vous avez déjà contacté quelqu'un ?" },
      { role: "B", text: "Pas encore. C'est pour ça que je viens vous voir." },
      { role: "A", text: "Très bien. Je vais vérifier et vous expliquer les démarches." },
      { role: "B", text: "Est-ce que je dois remplir un formulaire ?" },
      { role: "A", text: "Oui, celui-ci. Ensuite je vous confirme par e-mail." },
      { role: "B", text: "Parfait, merci beaucoup !" },
    ],
    [
      { role: "A", text: "Bonjour, je vous écoute." },
      { role: "B", text: `Bonjour. Je voudrais avancer sur ${noun}.` },
      { role: "A", text: "Qu'est-ce qui bloque exactement ?" },
      { role: "B", text: "Je n'ai pas toutes les informations nécessaires." },
      { role: "A", text: "Je vais vous les donner. Vous avez une pièce d'identité ?" },
      { role: "B", text: "Oui, la voici." },
      { role: "A", text: "Merci. Je note votre demande dans le système." },
      { role: "B", text: "Quand aurai-je une réponse ?" },
      { role: "A", text: "Dans deux jours ouvrés, au plus tard." },
      { role: "B", text: "D'accord, merci pour votre aide !" },
    ],
    [
      { role: "A", text: "Service clients, bonjour !" },
      { role: "B", text: `Bonjour, j'appelle pour ${noun}.` },
      { role: "A", text: "Je vois. Que souhaitez-vous faire aujourd'hui ?" },
      { role: "B", text: `Je voudrais ${actionKey.toLowerCase()} de façon simple.` },
      { role: "A", text: "Très bien. Je vous propose deux créneaux : mardi 10 h ou jeudi 16 h." },
      { role: "B", text: "Jeudi 16 h me convient mieux." },
      { role: "A", text: "C'est noté. Je vous envoie une confirmation SMS." },
      { role: "B", text: "Pouvez-vous aussi m'envoyer un e-mail ?" },
      { role: "A", text: "Oui, bien sûr. À jeudi alors !" },
      { role: "B", text: "Merci, à jeudi !" },
    ],
    [
      { role: "A", text: "Bonjour ! Vous avez un numéro de dossier ?" },
      { role: "B", text: `Non, pas encore. Je viens pour ${noun}.` },
      { role: "A", text: "Pas de souci. Je crée un dossier maintenant." },
      { role: "B", text: "Combien de temps faut-il prévoir ?" },
      { role: "A", text: "Environ vingt minutes, si tout est en ordre." },
      { role: "B", text: "Et quels documents faut-il ?" },
      { role: "A", text: "Une pièce d'identité et un justificatif récent." },
      { role: "B", text: "Je les ai. On peut commencer ?" },
      { role: "A", text: "Oui, asseyez-vous. On y va." },
      { role: "B", text: "Merci beaucoup !" },
    ],
  ];
  return variants[seed % variants.length];
}

function formatRole(role) {
  return `{ title: ${JSON.stringify(role.title)}, vous: ${JSON.stringify(role.vous)} }`;
}

function formatLines(lines) {
  return lines
    .map((l) => `    { role: ${JSON.stringify(l.role)}, text: ${JSON.stringify(l.text)} },`)
    .join("\n");
}

function formatPoObject({ id, title, context, roleA, roleB, lines }) {
  return `{
  id: ${JSON.stringify(id)},
  title: ${JSON.stringify(title)},
  context: ${JSON.stringify(context)},
  roleA: ${formatRole(roleA)},
  roleB: ${formatRole(roleB)},
  lines: [
${formatLines(lines)}
  ],
}`;
}

function rewriteA1File(src) {
  let count = 0;
  const out = src.replace(
    /\{\s*id:\s*"(e[\d-]+-po-\d+)"\s*,\s*title:\s*"([^"]*)"\s*,\s*context:\s*"Situation\s*:\s*([^."]+)\.\s*Thème\s*:\s*([^."]+)\."\s*,\s*roleA:\s*\{[^}]*\}\s*,\s*roleB:\s*\{[^}]*\}\s*,\s*lines:\s*\[[\s\S]*?\]\s*,?\s*\}/g,
    (full, id, _oldTitle, placeRaw, themeRaw) => {
      const place = placeRaw.trim();
      const theme = themeRaw.trim();
      const meta = PLACE_ROLE[place] || {
        a: { title: "L'interlocuteur A", vous: "l'interlocuteur A" },
        b: { title: "Vous", vous: "l'interlocuteur B" },
        title: place,
      };
      const seed = hash(`${id}|${place}|${theme}`);
      const context = a1Context(place, theme);
      const lines = a1Dialogue(place, theme, seed);
      count++;
      return formatPoObject({
        id,
        title: meta.title,
        context,
        roleA: meta.a,
        roleB: meta.b,
        lines,
      });
    }
  );
  return { out, count };
}

function rewriteA2File(src) {
  let count = 0;
  const out = src.replace(
    /\{\s*id:\s*"(e[\d-]+-po-\d+)"\s*,\s*title:\s*"([^"]*)"\s*,\s*context:\s*"Vous devez gérer une situation\s*:\s*([^"]+)"\s*,\s*roleA:\s*\{[^}]*\}\s*,\s*roleB:\s*\{[^}]*\}\s*,\s*lines:\s*\[[\s\S]*?\]\s*,?\s*\}/g,
    (full, id, oldTitle, gererRaw) => {
      const seed = hash(`${id}|${gererRaw}`);
      const context = a2Context(gererRaw, seed);
      const lines = a2Dialogue(gererRaw, seed);
      count++;
      return formatPoObject({
        id,
        title: oldTitle,
        context,
        roleA: { title: "L'interlocuteur", vous: "l'interlocuteur / l'interlocutrice" },
        roleB: { title: "Vous", vous: "la personne qui parle" },
        lines,
      });
    }
  );
  return { out, count };
}

function main() {
  const files = fs.readdirSync(COMM).filter((f) => /express-e.*-cpe\.ts$/.test(f));
  let a1 = 0;
  let a2 = 0;
  for (const f of files) {
    const p = path.join(COMM, f);
    let src = fs.readFileSync(p, "utf8");
    const r1 = rewriteA1File(src);
    src = r1.out;
    a1 += r1.count;
    const r2 = rewriteA2File(src);
    src = r2.out;
    a2 += r2.count;
    if (r1.count || r2.count) {
      fs.writeFileSync(p, src);
      console.log(`${f}: A1=${r1.count} A2=${r2.count}`);
    }
  }
  console.log(`Total rewritten: A1=${a1} A2=${a2}`);
}

main();
