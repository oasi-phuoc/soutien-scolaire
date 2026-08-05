import type { GrammarLesson } from "../../grammar-data";

/** Unité 54 — Le pronom complément en (G4.24) */
export const A1_GR_PRONOM_EN: GrammarLesson = {
  slug: "a1-gr-pronom-en",
  code: "G4.24",
  level: "A1",
  title: "Le pronom complément en",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "plain_list",
      items: [
        "{a}En{/a} remplace un nom (personne ou chose) précédé d'une expression de quantité. Seul ou suivi d'une quantité.",
        "Articles partitifs / indéfinis ({a}du, de la, de l', un, une, des{/a}). → Tu veux du café ? — J'en veux bien.",
        "Nombres. → J'ai deux frères, et toi ? — J'en ai trois.",
        "Adverbes ou noms de quantité ({a}beaucoup de, un peu de, trop de, un kilo de…{/a}). → Il y a beaucoup d'invités → Il y en a beaucoup. ; J'ai acheté un paquet de café → J'en ai acheté un.",
        "Réponse fréquente à {a}combien de… ?{/a} → Tu mets combien d'œufs ? — J'en mets quatre.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Place et structure",
    },
    {
      type: "plain_list",
      items: [
        "Devant le verbe ou l'auxiliaire. → Oui, j'en ai trois. ; Il en a invité sept.",
        "Avec deux verbes : devant l'infinitif. → Il va en inviter trois.",
      ],
      allBullets: true,
    },
    {
      type: "note",
      text: "Négation : Je n'en ai pas. ; Elle n'en a pas acheté. ; Il ne va pas en acheter.",
    },
    {
      type: "heading",
      text: "Prononciation",
    },
    {
      type: "plain_list",
      items: [
        "Liaison devant voyelle ou {a}h{/a} muet. → J'en ai beaucoup. ; J'en organise souvent.",
        "À l'oral, le {a}ne{/a} de la négation tombe souvent. → J'en ai pas. ; Il y en a pas.",
      ],
      allBullets: true,
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Pronom en",
      instruction: "Choisissez la forme correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Je n'___ ai plus. (des croissants)", choices: ["en", "y", "les"], correctIdx: 0 },
        { sentence: "Tu veux du café ? — J'___ veux bien.", choices: ["en", "y", "le"], correctIdx: 0 },
        { sentence: "J'ai deux frères. — J'___ ai trois.", choices: ["en", "y", "les"], correctIdx: 0 },
        { sentence: "Il y a beaucoup d'invités. → Il y ___ a beaucoup.", choices: ["en", "les", "des"], correctIdx: 0 },
        { sentence: "J'ai acheté un paquet de café. → J'___ ai acheté un.", choices: ["en", "y", "le"], correctIdx: 0 },
        { sentence: "Tu mets combien d'œufs ? — J'___ mets quatre.", choices: ["en", "y", "les"], correctIdx: 0 },
        { sentence: "Il va ___ inviter trois.", choices: ["en", "y", "les"], correctIdx: 0 },
        { sentence: "Je n'___ ai pas.", choices: ["en", "y", "les"], correctIdx: 0 },
        { sentence: "Il ne va pas ___ acheter.", choices: ["en", "y", "les"], correctIdx: 0 },
        { sentence: "« En » remplace un nom précédé d'une ___ .", choices: ["quantité", "préposition à", "préposition sur"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Écrivez en ou la quantité qui manque.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Désolée, je n'___ ai plus.", hint: "pronom", answer: "en" },
        { sentence: "Tu veux du thé ? — J'___ veux bien.", hint: "pronom", answer: "en" },
        { sentence: "Vous avez des frères ? — Oui, j'en ai ___ .", hint: "nombre", answer: "trois" },
        { sentence: "Il ___ a invité sept.", hint: "pronom", answer: "en" },
        { sentence: "Il va ___ inviter trois.", hint: "pronom", answer: "en" },
        { sentence: "Elle n'___ a pas acheté.", hint: "pronom", answer: "en" },
        { sentence: "Il y ___ a beaucoup.", hint: "pronom", answer: "en" },
        { sentence: "J'___ mets quatre.", hint: "pronom", answer: "en" },
        { sentence: "Il ne va pas ___ acheter.", hint: "pronom", answer: "en" },
        { sentence: "Des fêtes, j'___ organise souvent.", hint: "pronom", answer: "en" },
      ],
    },
  ],
};
