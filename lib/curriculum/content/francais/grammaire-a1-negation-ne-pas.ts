import type { GrammarLesson } from "../../grammar-data";

/** Unité 31 — La négation ne… pas, ne… pas de/d' (G4.1) */
export const A1_GR_NEGATION_NE_PAS: GrammarLesson = {
  slug: "a1-gr-negation-ne-pas",
  code: "G4.1",
  level: "A1",
  title: "La négation ne… pas, ne… pas de/d'",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "plain_list",
      items: [
        "La phrase négative exprime le contraire d'une phrase affirmative.",
        "Je suis marié. ≠ Je ne suis pas marié.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Formes",
    },
    {
      type: "highlight",
      label: "ne… pas",
      items: [
        "La négation est composée de deux mots placés de part et d'autre du verbe conjugué : {a}ne{/a} + verbe + {a}pas{/a}.",
        "Je ne suis pas célibataire.",
        "Tu ne travailles pas dans une banque.",
      ],
      noBulletItems: [1, 2],
    },
    {
      type: "highlight",
      label: "ne… pas de",
      items: [
        "L'article indéfini {a}un{/a}, {a}une{/a}, {a}des{/a} est remplacé par {a}de{/a} / {a}d'{/a}.",
        "Il a un frère ? → Non, il n'a pas de frère.",
        "Tu as une sœur ? → Non, je n'ai pas de sœur.",
        "Vous avez des petits-enfants ? → Non, nous n'avons pas de petits-enfants.",
      ],
      noBulletItems: [1, 2, 3],
    },
    {
      type: "heading",
      text: "Prononciation et orthographe",
    },
    {
      type: "plain_list",
      items: [
        "{a}Ne{/a} → {a}n'{/a} devant une voyelle ou un h muet. → Il n'est pas marié. ; Il n'habite pas à Lyon.",
        "{a}Pas de{/a} → {a}pas d'{/a} devant une voyelle ou un h muet. → Il n'a pas d'enfants.",
        "À l'oral, on ne prononce pas toujours le {a}e{/a} de {a}ne{/a}, ni parfois le {a}ne{/a} entier. → On (ne) joue pas au foot.",
      ],
      allBullets: true,
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Négation",
      instruction: "Choisissez la forme négative correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Je ___ français.", choices: ["ne suis pas", "suis ne pas", "ne pas suis", "pas suis ne"], correctIdx: 0 },
        { sentence: "Je ___ à Lyon.", choices: ["n'habite pas", "ne habite pas", "habite ne pas", "n'habite de pas"], correctIdx: 0 },
        { sentence: "Il n'a ___ frère.", choices: ["pas de", "pas un", "pas des", "ne pas"], correctIdx: 0 },
        { sentence: "Je n'ai ___ sœur.", choices: ["pas de", "pas une", "pas des", "pas"], correctIdx: 0 },
        { sentence: "Nous n'avons ___ petits-enfants.", choices: ["pas de", "pas des", "pas les", "ne pas"], correctIdx: 0 },
        { sentence: "Il ___ marié.", choices: ["n'est pas", "ne est pas", "est ne pas", "n'est de pas"], correctIdx: 0 },
        { sentence: "Il n'a ___ enfants.", choices: ["pas d'", "pas de", "pas des", "pas un"], correctIdx: 0 },
        { sentence: "Tu ___ dans une banque.", choices: ["ne travailles pas", "travailles ne pas", "ne pas travailles", "n'est pas"], correctIdx: 0 },
        { sentence: "Je suis marié. ≠ Je ___ marié.", choices: ["ne suis pas", "suis pas", "ne pas suis", "n'ai pas"], correctIdx: 0 },
        { sentence: "Devant une voyelle, ne devient ___ .", choices: ["n'", "ne", "pas", "de"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Mettez à la forme négative",
      instruction: "Complétez avec ne/n', pas, pas de ou pas d'.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Je ___ suis pas célibataire.", hint: "ne / n'", answer: "ne" },
        { sentence: "Il ___ est pas marié.", hint: "élision", answer: "n'" },
        { sentence: "Il n'a ___ frère.", hint: "un → de", answer: "pas de" },
        { sentence: "Je n'ai ___ sœur.", hint: "une → de", answer: "pas de" },
        { sentence: "Il n'a ___ enfants.", hint: "élision de", answer: "pas d'" },
        { sentence: "Tu ___ travailles pas ici.", hint: "ne / n'", answer: "ne" },
        { sentence: "Nous n'avons ___ petits-enfants.", hint: "des → de", answer: "pas de" },
        { sentence: "Il ___ habite pas à Lyon.", hint: "h muet", answer: "n'" },
        { sentence: "Je ne suis ___ français.", hint: "pas", answer: "pas" },
        { sentence: "On ___ joue pas au foot.", hint: "ne (écrit)", answer: "ne" },
      ],
    },
  ],
};
