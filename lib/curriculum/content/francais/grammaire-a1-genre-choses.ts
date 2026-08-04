import type { GrammarLesson } from "../../grammar-data";

/** Unité 12 — Le genre des noms : choses (G2.2) */
export const A1_GR_GENRE_CHOSES: GrammarLesson = {
  slug: "a1-gr-genre-choses",
  code: "G2.2",
  level: "A1",
  title: "Le genre des noms : choses",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "plain_list",
      items: [
        "Les noms de choses désignent des objets, des lieux, des idées.",
      ],
      noBulletItems: [0],
    },
    {
      type: "heading",
      text: "Comment reconnaître le genre ?",
    },
    {
      type: "plain_list",
      items: [
        "Il n'y a pas toujours une règle. Il faut souvent apprendre le nom avec son article.",
      ],
    },
    {
      type: "highlight",
      label: "Souvent masculins",
      items: [
        "{a}-age{/a} → le village",
        "{a}-ment{/a} → le document",
        "{a}-eau{/a} → le bateau",
      ],
      inlineArrows: true,
    },
    {
      type: "highlight",
      label: "Souvent féminins",
      items: [
        "{a}-tion{/a} → la question",
        "{a}-ette{/a} → la tablette",
        "{a}-ure{/a} → la voiture",
      ],
      inlineArrows: true,
    },
    {
      type: "highlight",
      label: "Astuce",
      items: [
        "La majorité des mots qui terminent par {a}-e{/a} sont féminins, mais il existe des exceptions.",
      ],
      noBulletItems: [0],
    },
    {
      type: "heading",
      text: "Formes : masculin ou féminin ?",
    },
    {
      type: "plain_list",
      items: [
        "Il n'y a pas de règle absolue pour connaître le genre d'une chose. On s'aide de la terminaison et du déterminant : {a}un/le{/a} jardin, {a}une/la{/a} place.",
        "Souvent, il faut vérifier dans un dictionnaire et mémoriser le genre.",
      ],
      allBullets: true,
    },
    {
      type: "highlight",
      label: "Terminaisons souvent féminines",
      items: [
        "{a}-e, -é, -ée{/a} : la France, la ville, la table, la liberté, une journée… — Exceptions (masculin) : un livre, un dictionnaire, un café, un musée.",
        "{a}-tion, -ssion{/a} : la solution, la passion…",
      ],
    },
    {
      type: "highlight",
      label: "Terminaisons souvent masculines",
      items: [
        "{a}-a, -i, -o, -u{/a} : un agenda, un taxi, un vélo… — Exceptions (féminin) : l'eau, la photo…",
        "Une consonne : un pays, un magasin, un monument, un ordinateur… — Exceptions (féminin) : -son/-sion (la maison, la télévision…), certains -eur (la couleur, une erreur, la douceur…).",
        "{a}-age{/a} : le message, le visage, un étage… — Exceptions (féminin) : une page, une image…",
        "{a}-phone{/a} : un téléphone…",
      ],
    },
    {
      type: "heading",
      text: "Prononciation",
    },
    {
      type: "plain_list",
      items: [
        "Nom en {a}-e{/a} : le dernier son entendu est la consonne précédente. → musique, France, ville, immeuble, étage…",
        "Nom terminé par une consonne : cette consonne est en général muette ; on entend une voyelle. → un billet, un magasin, une maison…",
        "Noms masculins en {a}-l, -c, -r{/a} : la consonne finale se prononce. → un animal, un sac, un ordinateur, le soir…",
        "Exception : le {a}r{/a} ne s'entend pas dans les mots en {a}-ier{/a}. → un cahier, un escalier…",
        "{a}-tion{/a} et {a}-ssion{/a} se prononcent de la même façon. → la solution, la profession…",
      ],
      allBullets: true,
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Genre des noms (choses)",
      instruction: "Choisissez le bon déterminant.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "___ jardin est grand.", choices: ["Le", "La", "Une", "Des"], correctIdx: 0 },
        { sentence: "___ place est belle.", choices: ["La", "Le", "Un", "Du"], correctIdx: 0 },
        { sentence: "C'est ___ livre.", choices: ["un", "une", "la", "des"], correctIdx: 0 },
        { sentence: "C'est ___ table.", choices: ["une", "un", "le", "du"], correctIdx: 0 },
        { sentence: "___ solution est simple.", choices: ["La", "Le", "Un", "Du"], correctIdx: 0 },
        { sentence: "___ téléphone sonne.", choices: ["Le", "La", "Une", "Des"], correctIdx: 0 },
        { sentence: "___ message est clair.", choices: ["Le", "La", "Une", "Des"], correctIdx: 0 },
        { sentence: "___ page est intéressante.", choices: ["La", "Le", "Un", "Du"], correctIdx: 0 },
        { sentence: "___ maison est grande.", choices: ["La", "Le", "Un", "Du"], correctIdx: 0 },
        { sentence: "___ musée est fermé.", choices: ["Le", "La", "Une", "Des"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Un ou une ?",
      instruction: "Complétez avec un ou une.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "___ jardin", hint: "masculin", answer: "un" },
        { sentence: "___ place", hint: "féminin", answer: "une" },
        { sentence: "___ livre", hint: "masculin", answer: "un" },
        { sentence: "___ ville", hint: "féminin", answer: "une" },
        { sentence: "___ solution", hint: "féminin", answer: "une" },
        { sentence: "___ taxi", hint: "masculin", answer: "un" },
        { sentence: "___ message", hint: "masculin", answer: "un" },
        { sentence: "___ image", hint: "féminin", answer: "une" },
        { sentence: "___ téléphone", hint: "masculin", answer: "un" },
        { sentence: "___ photo", hint: "féminin", answer: "une" },
      ],
    },
  ],
};
