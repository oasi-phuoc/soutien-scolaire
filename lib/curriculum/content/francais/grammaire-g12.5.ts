import type { GrammarLesson } from "../../grammar-data";

/** Unité 56 — En ou de + pronom tonique / Y ou à + pronom tonique (G4.26) */
export const A1_GR_EN_Y_PRONOM_TONIQUE: GrammarLesson = {
  slug: "a1-gr-en-y-pronom-tonique",
  code: "G4.26",
  level: "A1",
  title: "En ou de + pronom tonique / Y ou à + pronom tonique",
  theory: [
    {
      type: "heading",
      text: "Formes et structure",
    },
    {
      type: "text",
      items: [
        "Certains verbes gardent {a}à{/a} ou {a}de{/a} pour une chose et pour une personne, mais le remplacement par un pronom change.",
        "Exemple : Il pense à son prochain film → Il y pense. ; Il pense à une actrice → Il pense à elle.",
      ],
      allBullets: true,
    },
    {
      type: "grid",
      headers: ["Construction", "Chose", "Personne"],
      boldFirstCol: true,
      rows: [
        ["verbe + à (penser à, s'intéresser à, faire attention à, s'habituer à, tenir à, rêver à…)", "y → Il y pense.", "à + tonique → Il pense à elle."],
        ["verbe + de (avoir besoin de, s'occuper de, avoir peur de, se souvenir de, parler de, se méfier de, se moquer de, rêver de…)", "en → Il en a besoin.", "de + tonique → Il a besoin d'elle."],
      ],
    },
    {
      type: "heading",
      text: "Verbes pronominaux + en / y",
    },
    {
      type: "text",
      items: [
        "{a}En{/a} et {a}y{/a} se placent après le pronom réfléchi.",
        "Avec {a}en{/a} : Je m'en occupe. ; tu t'en sers. ; elle s'en souvient. ; nous nous en occupons. ; vous vous en servez. ; ils s'en moquent.",
        "Avec {a}y{/a} : Je m'y intéresse. ; tu t'y habitues. ; on s'y inscrit. ; nous nous y habituons. ; vous vous y intéressez. ; elles s'y inscrivent.",
      ],
      allBullets: true,
    },
    {
      type: "note",
      text: "Négation : Je ne m'en occupe pas. ; Il ne s'y habitue pas.",
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "En / y ou pronom tonique",
      instruction: "Choisissez la forme correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Il pense à son film. → Il ___ pense.", choices: ["y", "en", "à lui"], correctIdx: 0 },
        { sentence: "Il pense à une actrice. → Il pense ___ .", choices: ["à elle", "y", "en"], correctIdx: 0 },
        { sentence: "Il a besoin d'un scénario. → Il ___ a besoin.", choices: ["en", "y", "de lui"], correctIdx: 0 },
        { sentence: "Il a besoin de cette actrice. → Il a besoin ___ .", choices: ["d'elle", "en", "y"], correctIdx: 0 },
        { sentence: "Je ___ occupe. (de ça)", choices: ["m'en", "m'y", "me"], correctIdx: 0 },
        { sentence: "Je ___ intéresse. (à ça)", choices: ["m'y", "m'en", "me"], correctIdx: 0 },
        { sentence: "Elle ___ souvient. (de ça)", choices: ["s'en", "s'y", "se"], correctIdx: 0 },
        { sentence: "On ___ inscrit. (à ça)", choices: ["s'y", "s'en", "se"], correctIdx: 0 },
        { sentence: "Je ne m'___ occupe pas.", choices: ["en", "y", "à"], correctIdx: 0 },
        { sentence: "Il ne s'___ habitue pas.", choices: ["y", "en", "à"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Écrivez y, en, à elle, d'elle, m'en ou m'y.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Il pense à son film. → Il ___ pense.", hint: "chose + à", answer: "y" },
        { sentence: "Il pense à Marie. → Il pense ___ .", hint: "personne", answer: "à elle" },
        { sentence: "Il a besoin d'aide. → Il ___ a besoin.", hint: "chose + de", answer: "en" },
        { sentence: "Il a besoin de Léa. → Il a besoin ___ .", hint: "personne", answer: "d'elle" },
        { sentence: "Je ___ occupe demain.", hint: "pronominal + en", answer: "m'en" },
        { sentence: "Je ___ intéresse beaucoup.", hint: "pronominal + y", answer: "m'y" },
        { sentence: "Tu t'___ sers souvent.", hint: "en", answer: "en" },
        { sentence: "Elle s'___ habitue.", hint: "y", answer: "y" },
        { sentence: "Nous nous ___ moquons.", hint: "en", answer: "en" },
        { sentence: "Vous vous ___ inscrivez ?", hint: "y", answer: "y" },
      ],
    },
  ],
};
