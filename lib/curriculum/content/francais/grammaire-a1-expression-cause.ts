import type { GrammarLesson } from "../../grammar-data";

/** Unité 76 — L'expression de la cause (G4.46) */
export const A1_GR_EXPRESSION_CAUSE: GrammarLesson = {
  slug: "a1-gr-expression-cause",
  code: "G4.46",
  level: "A1",
  title: "L'expression de la cause",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "plain_list",
      items: [
        "Donner des explications sur des faits réels, présentées comme certaines.",
        "{a}Puisque{/a} tu es fatigué, pourquoi tu ne te reposes pas ? — {a}Parce que{/a} je veux finir ce soir !",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Conjonctions",
    },
    {
      type: "highlight",
      label: "parce que",
      items: [
        "Répond à la question {a}pourquoi{/a}.",
        "Sauf réponse directe à {a}pourquoi ?{/a}, {a}parce que{/a} n'est pas en tête de phrase.",
        "Je ne me repose pas {a}parce que{/a} je veux finir ce soir.",
        "— Pourquoi tu n'es pas venu ? — {a}Parce que{/a} j'étais malade.",
      ],
    },
    {
      type: "highlight",
      label: "comme",
      items: [
        "Relie cause et conséquence ; toujours en tête de phrase.",
        "{a}Comme{/a} je veux finir ce soir, je ne peux pas m'arrêter maintenant.",
      ],
    },
    {
      type: "highlight",
      label: "puisque",
      items: [
        "Insiste sur une cause évidente / connue ; deux places possibles.",
        "{a}Puisque{/a} tu es fatigué, va te reposer ! = Va te reposer {a}puisque{/a} tu es fatigué !",
      ],
    },
    {
      type: "note",
      text: "Avec {a}comme{/a} / {a}puisque{/a} en tête : virgule après l'explication. Deux causes : {a}que{/a} devant la seconde. → … parce que je suis fatigué et {a}que{/a} je dois me lever tôt.",
    },
    {
      type: "heading",
      text: "Prépositions",
    },
    {
      type: "highlight",
      label: "à cause de / grâce à / en raison de",
      items: [
        "{a}À cause de{/a} + nom/tonique : cause négative. → … à cause de toi et du mauvais temps.",
        "{a}Grâce à{/a} + nom/tonique : cause positive. → … grâce à toi et à tes conseils.",
        "{a}En raison de{/a} + nom : raison officielle. → La route est fermée en raison du mauvais temps.",
      ],
    },
    {
      type: "note",
      text: "Articles contractés : {a}à cause du{/a} mauvais temps ; {a}grâce au{/a} soleil ; {a}en raison des{/a} pluies.",
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Expression de la cause",
      instruction: "Choisissez la forme qui convient.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Je ne me repose pas ___ je veux finir.", choices: ["parce que", "comme", "grâce à"], correctIdx: 0 },
        { sentence: "___ je veux finir ce soir, je ne m'arrête pas.", choices: ["Comme", "Parce que", "Grâce à"], correctIdx: 0 },
        { sentence: "___ tu es fatigué, va te reposer !", choices: ["Puisque", "Parce que", "Grâce à"], correctIdx: 0 },
        { sentence: "Je suis en retard ___ toi.", choices: ["à cause de", "grâce à", "parce que"], correctIdx: 0 },
        { sentence: "Je finis plus vite ___ toi.", choices: ["grâce à", "à cause de", "parce que"], correctIdx: 0 },
        { sentence: "La route est fermée ___ mauvais temps.", choices: ["en raison du", "grâce au", "parce que le"], correctIdx: 0 },
        { sentence: "___ est toujours en tête de phrase.", choices: ["Comme", "Parce que", "Afin que"], correctIdx: 0 },
        { sentence: "… parce que je suis fatigué et ___ je dois me lever tôt.", choices: ["que", "parce que", "comme"], correctIdx: 0 },
        { sentence: "— Pourquoi ? — ___ j'étais malade.", choices: ["Parce que", "Comme", "Grâce à"], correctIdx: 0 },
        { sentence: "___ soleil, on est sortis. (positif)", choices: ["Grâce au", "À cause du", "Parce que le"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Complétez avec l'expression de cause attendue.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Je ne me repose pas ___ je veux finir.", hint: "pourquoi", answer: "parce que" },
        { sentence: "___ je veux finir, je ne m'arrête pas.", hint: "en tête", answer: "Comme" },
        { sentence: "___ tu es fatigué, va te reposer !", hint: "évident", answer: "Puisque" },
        { sentence: "Je suis en retard ___ toi.", hint: "négatif", answer: "à cause de" },
        { sentence: "Je finis plus vite ___ toi.", hint: "positif", answer: "grâce à" },
        { sentence: "La route est fermée ___ mauvais temps.", hint: "officiel + contraction", answer: "en raison du" },
        { sentence: "… parce que je suis fatigué et ___ je dois me lever tôt.", hint: "2e cause", answer: "que" },
        { sentence: "___ mauvais temps… (négatif, contraction)", hint: "à cause", answer: "À cause du" },
        { sentence: "___ soleil… (positif, contraction)", hint: "grâce", answer: "Grâce au" },
        { sentence: "Va te reposer ___ tu es fatigué !", hint: "2e place", answer: "puisque" },
      ],
    },
  ],
};
