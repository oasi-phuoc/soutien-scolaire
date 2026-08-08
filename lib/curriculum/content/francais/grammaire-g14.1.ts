import type { GrammarLesson } from "../../grammar-data";

/** Unité 64 — Les adverbes d'intensité (G4.34) */
export const A1_GR_ADVERBES_INTENSITE: GrammarLesson = {
  slug: "a1-gr-adverbes-intensite",
  code: "G4.34",
  level: "A1",
  title: "Les adverbes d'intensité",
  theory: [
    {
      type: "heading",
      text: "Utilisation et formes",
    },
    {
      type: "plain_list",
      items: [
        "L'adverbe modifie un verbe, un adjectif ou un autre adverbe ; il est invariable.",
        "Intensité / qualité : {a}assez, très, presque, un peu, bien, mal, tout{/a}. → Il joue assez / très souvent. ; Il joue bien / mal.",
        "Quantité : {a}assez, beaucoup, trop, un peu{/a}. → Il voyage beaucoup / un peu. ; Il court trop vite.",
      ],
      allBullets: true,
    },
    {
      type: "note",
      text: "{a}Beaucoup{/a} + verbe ; {a}très{/a} + adjectif ou adverbe. → On mange beaucoup. ; C'est très bon.",
    },
    {
      type: "note",
      text: "{a}Trop{/a} exprime souvent un jugement négatif. → Il est très bavard. ≠ Il est trop bavard.",
    },
    {
      type: "note",
      text: "Avec {a}avoir faim/soif/envie/peur/chaud/froid/mal{/a}, {a}faire attention{/a} : {a}très{/a} ou {a}un peu{/a}. → J'ai très soif. ; Fais un peu attention !",
    },
    {
      type: "plain_list",
      items: [
        "Combinaisons fréquentes : très bien, très mal, assez bien, assez mal, beaucoup trop, un peu trop, presque trop.",
      ],
      noBulletItems: [0],
    },
    {
      type: "heading",
      text: "Place",
    },
    {
      type: "plain_list",
      items: [
        "Devant l'adjectif ou l'adverbe modifié. → très longue ; très vite.",
        "Avec un verbe : après le verbe (temps simple) ; entre auxiliaire et participe (temps composé) ; devant l'infinitif (semi-auxiliaire). → Il s'entraîne beaucoup. ; Il s'est beaucoup entraîné. ; Il va beaucoup s'entraîner.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Prononciation",
    },
    {
      type: "plain_list",
      items: [
        "Liaison avec {a}bien{/a} et {a}très{/a} devant voyelle. → bien entraîné ; très intéressant.",
        "En registre soigné, aussi avec {a}beaucoup{/a} et {a}trop{/a}.",
      ],
      allBullets: true,
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Adverbes d'intensité",
      instruction: "Choisissez la forme correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Il joue ___ !", choices: ["bien", "très", "beaucoup"], correctIdx: 0 },
        { sentence: "Il s'est ___ entraîné.", choices: ["beaucoup", "très", "trop de"], correctIdx: 0 },
        { sentence: "C'est ___ bon.", choices: ["très", "beaucoup", "trop de"], correctIdx: 0 },
        { sentence: "On mange ___ .", choices: ["beaucoup", "très", "trop de"], correctIdx: 0 },
        { sentence: "Il est ___ bavard. (négatif)", choices: ["trop", "très", "beaucoup"], correctIdx: 0 },
        { sentence: "J'ai ___ soif.", choices: ["très", "beaucoup", "trop de"], correctIdx: 0 },
        { sentence: "Cette course est ___ longue.", choices: ["très", "beaucoup", "trop de"], correctIdx: 0 },
        { sentence: "Il s'entraîne ___ . (temps simple)", choices: ["beaucoup", "très", "trop de"], correctIdx: 0 },
        { sentence: "Il va ___ s'entraîner.", choices: ["beaucoup", "très", "trop de"], correctIdx: 0 },
        { sentence: "Il a couru ___ trop vite.", choices: ["beaucoup", "très", "trop"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Écrivez très, beaucoup, trop, bien, assez ou un peu.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Il joue ___ .", hint: "qualité", answer: "bien" },
        { sentence: "Il s'entraîne ___ .", hint: "quantité + verbe", answer: "beaucoup" },
        { sentence: "C'est ___ intéressant.", hint: "+ adjectif", answer: "très" },
        { sentence: "Il est ___ bavard. (négatif)", hint: "excès", answer: "trop" },
        { sentence: "J'ai ___ soif.", hint: "expression", answer: "très" },
        { sentence: "Fais ___ attention !", hint: "légèrement", answer: "un peu" },
        { sentence: "Il court ___ vite.", hint: "+ adverbe", answer: "très" },
        { sentence: "Il s'est ___ entraîné.", hint: "composé", answer: "beaucoup" },
        { sentence: "Il va ___ s'entraîner.", hint: "semi-auxiliaire", answer: "beaucoup" },
        { sentence: "Il joue ___ souvent.", hint: "intensité", answer: "assez" },
      ],
    },
  ],
};
