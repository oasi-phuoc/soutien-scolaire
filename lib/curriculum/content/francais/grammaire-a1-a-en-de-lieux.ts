import type { GrammarLesson } from "../../grammar-data";

/** Unité 35 — À, en, de avec les noms de villes, pays et continents (G4.5) */
export const A1_GR_A_EN_DE_LIEUX: GrammarLesson = {
  slug: "a1-gr-a-en-de-lieux",
  code: "G4.5",
  level: "A1",
  title: "À, en, de avec les noms de villes, pays et continents",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "plain_list",
      items: [
        "{a}À{/a}, {a}en{/a}, {a}de{/a} sont des prépositions de lieu.",
        "{a}À{/a} et {a}en{/a} : où l'on est ou où l'on va. → Il habite en France. ; Il va à Tokyo.",
        "{a}De{/a} : d'où l'on vient. → Il arrive de Rome.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Formes",
    },
    {
      type: "grid",
      headers: ["Lieu", "Être / aller", "Venir / arriver"],
      boldFirstCol: true,
      rows: [
        ["Ville", "à Paris", "de Madrid"],
        ["Pays masculin", "au Sénégal (à + le)", "du Sénégal (de + le)"],
        ["Pays pluriel", "aux États-Unis (à + les)", "des États-Unis (de + les)"],
        ["Pays féminin", "en France", "de France"],
        ["Pays / voyelle", "en Iran", "d'Iran"],
      ],
    },
    {
      type: "plain_list",
      items: [
        "Exemple : Je suis née au Kenya mais j'habite en Angleterre, à Londres.",
      ],
      noBulletItems: [0],
    },
    {
      type: "heading",
      text: "Prononciation et orthographe",
    },
    {
      type: "plain_list",
      items: [
        "Liaison avec {a}en{/a}, {a}aux{/a}, {a}des{/a}. → en Angleterre ; aux États-Unis ; des Antilles.",
        "Pas de liaison avec {a}en{/a} devant un pays en {a}h{/a}. → Je vais en Hongrie.",
        "{a}De{/a} → {a}d'{/a} devant une voyelle. → Je rentre d'Allemagne.",
      ],
      allBullets: true,
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "À / en / de",
      instruction: "Choisissez la préposition correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "J'habite ___ Londres.", choices: ["à", "en", "au"], correctIdx: 0 },
        { sentence: "J'habite ___ Angleterre.", choices: ["en", "à", "au"], correctIdx: 0 },
        { sentence: "Je suis née ___ Kenya.", choices: ["au", "en", "à"], correctIdx: 0 },
        { sentence: "Je viens ___ Madrid.", choices: ["de", "à", "en"], correctIdx: 0 },
        { sentence: "Je vais ___ États-Unis.", choices: ["aux", "au", "en"], correctIdx: 0 },
        { sentence: "Je viens ___ États-Unis.", choices: ["des", "du", "de"], correctIdx: 0 },
        { sentence: "Je suis né ___ France.", choices: ["en", "à", "au"], correctIdx: 0 },
        { sentence: "Il habite ___ Iran.", choices: ["en", "à", "au"], correctIdx: 0 },
        { sentence: "Elle revient ___ Iran.", choices: ["d'", "de", "du"], correctIdx: 0 },
        { sentence: "Je rentre ___ Allemagne.", choices: ["d'", "de", "en"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Écrivez à, en, au, aux, de, du, des ou d'.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Je suis ___ Paris.", hint: "ville", answer: "à" },
        { sentence: "Je viens ___ Madrid.", hint: "ville", answer: "de" },
        { sentence: "Je suis né ___ Sénégal.", hint: "pays ms", answer: "au" },
        { sentence: "Je viens ___ Sénégal.", hint: "pays ms", answer: "du" },
        { sentence: "Je vais ___ États-Unis.", hint: "pluriel", answer: "aux" },
        { sentence: "Je viens ___ États-Unis.", hint: "pluriel", answer: "des" },
        { sentence: "J'habite ___ France.", hint: "pays fs", answer: "en" },
        { sentence: "Je reviens ___ France.", hint: "pays fs", answer: "de" },
        { sentence: "Il habite ___ Iran.", hint: "voyelle", answer: "en" },
        { sentence: "Je rentre ___ Allemagne.", hint: "élision", answer: "d'" },
      ],
    },
  ],
};
