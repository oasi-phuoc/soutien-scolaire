import type { GrammarLesson } from "../../grammar-data";

/** Unité 69 — Le gérondif (G4.39) */
export const A1_GR_GERONDIF: GrammarLesson = {
  slug: "a1-gr-gerondif",
  code: "G4.39",
  level: "A1",
  title: "Le gérondif",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "plain_list",
      items: [
        "Le gérondif indique que deux actions sont faites en même temps par le même sujet.",
        "Temps : Il mange en lisant.",
        "Manière : J'ai maigri en faisant un régime et du sport.",
        "Condition : En conduisant moins vite, on a moins d'accidents.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Forme",
    },
    {
      type: "plain_list",
      items: [
        "Formation : {a}en{/a} + participe présent.",
        "Participe présent : même radical que le {a}nous{/a} du présent + {a}-ant{/a}.",
      ],
      allBullets: true,
    },
    {
      type: "grid",
      headers: ["Verbe", "nous (présent)", "Participe", "Gérondif"],
      boldFirstCol: true,
      rows: [
        ["lire", "nous lisons", "lisant", "en lisant"],
        ["faire", "nous faisons", "faisant", "en faisant"],
        ["avancer", "nous avançons", "avançant", "en avançant"],
        ["manger", "nous mangeons", "mangeant", "en mangeant"],
      ],
    },
    {
      type: "grid",
      headers: ["Exception", "Participe", "Gérondif"],
      boldFirstCol: true,
      rows: [
        ["avoir", "ayant", "en ayant"],
        ["être", "étant", "en étant"],
        ["savoir", "sachant", "en sachant"],
      ],
    },
    {
      type: "note",
      text: "Forme invariable. Le sujet du gérondif = sujet du verbe principal. → Il écoute de la musique en courant.",
    },
    {
      type: "note",
      text: "Négation : {a}en ne{/a} + participe + {a}pas{/a}. → En ne conduisant pas vite…",
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Gérondif",
      instruction: "Choisissez la forme correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Ils maigrissent ___ du sport.", choices: ["en faisant", "faisant", "en faire", "à faire"], correctIdx: 0 },
        { sentence: "Il mange ___ .", choices: ["en lisant", "lisant", "en lire", "à lire"], correctIdx: 0 },
        { sentence: "___ moins vite, on a moins d'accidents.", choices: ["En conduisant", "Conduisant", "En conduire", "À conduire"], correctIdx: 0 },
        { sentence: "lire → en ___", choices: ["lisant", "lisantant", "lisont", "lire"], correctIdx: 0 },
        { sentence: "faire → en ___", choices: ["faisant", "faisent", "faire", "fait"], correctIdx: 0 },
        { sentence: "manger → en ___", choices: ["mangeant", "mangant", "manger", "mange"], correctIdx: 0 },
        { sentence: "avoir → en ___", choices: ["ayant", "avonsant", "ayantant", "avoir"], correctIdx: 0 },
        { sentence: "être → en ___", choices: ["étant", "estant", "sommesant", "être"], correctIdx: 0 },
        { sentence: "savoir → en ___", choices: ["sachant", "savant", "savoir", "sachent"], correctIdx: 0 },
        { sentence: "En ___ pas vite…", choices: ["ne conduisant", "conduisant ne", "ne conduire", "pas conduisant"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Écrivez le gérondif (en + -ant).",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Il écoute de la musique ___ . (courir)", hint: "gérondif", answer: "en courant" },
        { sentence: "J'ai maigri ___ du sport. (faire)", hint: "gérondif", answer: "en faisant" },
        { sentence: "Il mange ___ . (lire)", hint: "gérondif", answer: "en lisant" },
        { sentence: "___ moins vite… (conduire)", hint: "condition", answer: "En conduisant" },
        { sentence: "___ , on progresse. (avancer)", hint: "gérondif", answer: "En avançant" },
        { sentence: "Il étudie ___ . (manger)", hint: "gérondif", answer: "en mangeant" },
        { sentence: "___ raison… (avoir)", hint: "exception", answer: "En ayant" },
        { sentence: "___ patient… (être)", hint: "exception", answer: "En étant" },
        { sentence: "___ cela… (savoir)", hint: "exception", answer: "En sachant" },
        { sentence: "En ___ pas trop… (manger)", hint: "négation", answer: "ne mangeant" },
      ],
    },
  ],
};
