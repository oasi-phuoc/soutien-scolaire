import type { GrammarLesson } from "../../grammar-data";

/** Unité 32 — Les autres négations (G4.2) */
export const A1_GR_AUTRES_NEGATIONS: GrammarLesson = {
  slug: "a1-gr-autres-negations",
  code: "G4.2",
  level: "A1",
  title: "Les autres négations",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "plain_list",
      items: [
        "D'autres négations que {a}ne… pas{/a} précisent le temps, les personnes ou les choses.",
        "Temps : Je ne joue jamais aux échecs. ; Nous ne sommes pas encore prêts.",
        "Personnes / choses : Il n'y a personne. ; Je ne vois rien.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Ne… jamais, ne… plus, ne… pas encore",
    },
    {
      type: "highlight",
      label: "Ne… jamais",
      items: [
        "Pas une seule fois. Négation de toujours, souvent, quelquefois, déjà.",
        "Il n'envoie jamais de cartes postales.",
        "— Tu prends souvent le métro ? — Non, je ne le prends jamais !",
      ],
      noBulletItems: [1, 2],
    },
    {
      type: "highlight",
      label: "Ne… plus",
      items: [
        "Avant oui, maintenant c'est fini. Négation de encore / toujours (= encore).",
        "— Tu habites encore à Paris ? — Non, je n'habite plus en France.",
        "À l'oral, le {a}s{/a} de {a}plus{/a} est muet dans ce sens. → Je ne fume plus.",
      ],
      noBulletItems: [1, 2],
    },
    {
      type: "highlight",
      label: "Ne… pas encore",
      items: [
        "L'action n'a pas encore eu lieu. Négation de déjà.",
        "Le musée n'est pas encore ouvert. (= il va ouvrir plus tard)",
        "— Tu as déjà visité ce quartier ? — Non, pas encore.",
      ],
      noBulletItems: [1, 2],
    },
    {
      type: "heading",
      text: "Ne… personne / personne ne…, ne… rien / rien ne…",
    },
    {
      type: "plain_list",
      items: [
        "{a}Personne{/a} : pas une seule personne (≠ quelqu'un, tout le monde). Sujet ou complément. → Je ne connais personne. ; Personne ne me connaît.",
        "{a}Rien{/a} : pas une seule chose (≠ quelque chose, tout). → Je n'ai rien compris. ; Rien ne m'intéresse !",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Ne… que, ne… ni… ni",
    },
    {
      type: "plain_list",
      items: [
        "{a}Ne… que{/a} = seulement. → Je ne parle que français !",
        "{a}Ne… ni… ni{/a} : négation de et / ou. → Je n'aime ni le rock ni le rap.",
      ],
      allBullets: true,
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Autres négations",
      instruction: "Choisissez la négation correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Je ne joue ___ aux échecs.", choices: ["jamais", "plus", "rien"], correctIdx: 0 },
        { sentence: "Je n'habite ___ en France.", choices: ["plus", "jamais", "rien"], correctIdx: 0 },
        { sentence: "Le musée n'est ___ ouvert.", choices: ["pas encore", "jamais", "plus"], correctIdx: 0 },
        { sentence: "Je n'entends ___ .", choices: ["personne", "rien", "jamais"], correctIdx: 0 },
        { sentence: "Je ne vois ___ .", choices: ["rien", "personne", "jamais"], correctIdx: 0 },
        { sentence: "___ ne me connaît.", choices: ["Personne", "Rien", "Jamais"], correctIdx: 0 },
        { sentence: "___ ne m'intéresse !", choices: ["Rien", "Personne", "Jamais"], correctIdx: 0 },
        { sentence: "Je ne parle ___ français !", choices: ["que", "ni", "rien"], correctIdx: 0 },
        { sentence: "Je n'aime ___ le rock ___ le rap.", choices: ["ni… ni", "que… que", "pas… pas"], correctIdx: 0 },
        { sentence: "Toujours / souvent ↔ ___ .", choices: ["jamais", "plus", "rien"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Écrivez jamais, plus, encore, personne, rien, que ou ni.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Je ne le prends ___ !", hint: "≠ souvent", answer: "jamais" },
        { sentence: "Je n'habite ___ en France.", hint: "≠ encore", answer: "plus" },
        { sentence: "Le musée n'est pas ___ ouvert.", hint: "≠ déjà", answer: "encore" },
        { sentence: "Je ne connais ___ dans cette ville.", hint: "≠ quelqu'un", answer: "personne" },
        { sentence: "Je n'ai ___ vu.", hint: "≠ quelque chose", answer: "rien" },
        { sentence: "___ n'est venu.", hint: "sujet", answer: "Personne" },
        { sentence: "___ ne m'intéresse.", hint: "sujet chose", answer: "Rien" },
        { sentence: "Je ne parle ___ français.", hint: "= seulement", answer: "que" },
        { sentence: "Je n'aime ___ le rock ___ le rap.", hint: "ni… ni (1er)", answer: "ni" },
        { sentence: "Je ne fume ___ .", hint: "≠ encore", answer: "plus" },
      ],
    },
  ],
};
