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
        "En français, tous les noms ont un genre : ils sont masculins ou féminins.",
        "Le genre ne dépend pas toujours du sens du mot. Il faut donc apprendre chaque nom avec son déterminant.",
      ],
      noBulletItems: [0, 1],
    },
    {
      type: "heading",
      text: "Comment reconnaître le genre ?",
    },
    {
      type: "plain_list",
      items: [
        "Il n'existe pas de règle absolue.",
        "Pour connaître le genre d'un nom, on peut :",
      ],
      noBulletItems: [0, 1],
    },
    {
      type: "plain_list",
      items: [
        "{a}1.{/a} regarder le déterminant (un, une, le, la) ;",
        "{a}2.{/a} observer la terminaison du mot ;",
        "{a}3.{/a} vérifier dans un dictionnaire ;",
        "{a}4.{/a} apprendre le nom avec son article.",
      ],
      noBulletItems: [0, 1, 2, 3],
    },
    {
      type: "selector",
      buttonCols: 2,
      tabs: [
        {
          label: "Masculin",
          content: [
            {
              type: "plain_list",
              items: [
                "Les noms qui se terminent par ces lettres sont souvent masculins.",
              ],
              noBulletItems: [0],
            },
            {
              type: "grid",
              headers: ["Terminaison", "Exemple"],
              rows: [
                ["{a}-age{/a}", "le village, le garage, le fromage"],
                ["{a}-ment{/a}", "le document, le médicament"],
                ["{a}-eau{/a}", "le bateau, le château"],
                ["{a}-phone{/a}", "le téléphone, le smartphone"],
                ["{a}-isme{/a}", "le tourisme, le réalisme"],
                ["{a}-oir{/a}", "le miroir, le couloir"],
                ["{a}-teur{/a}", "le moteur, le compteur"],
                ["{a}-ail{/a}", "le travail, le détail"],
                ["{a}-al{/a}", "le journal, le cheval"],
              ],
            },
          ],
        },
        {
          label: "Féminin",
          content: [
            {
              type: "plain_list",
              items: [
                "Les noms qui se terminent par ces lettres sont souvent féminins.",
              ],
              noBulletItems: [0],
            },
            {
              type: "grid",
              headers: ["Terminaison", "Exemple"],
              rows: [
                ["{a}-tion{/a}", "la question, la solution"],
                ["{a}-ssion{/a}", "la profession, la discussion"],
                ["{a}-ette{/a}", "la tablette, la bicyclette"],
                ["{a}-ure{/a}", "la voiture, la peinture"],
                ["{a}-té{/a}", "la liberté, la beauté"],
                ["{a}-ie{/a}", "la boulangerie, la pharmacie"],
                ["{a}-ance{/a}", "la chance, la connaissance"],
                ["{a}-ence{/a}", "la différence, la patience"],
                ["{a}-aison{/a}", "la maison, la comparaison"],
              ],
            },
          ],
        },
      ],
    },
    {
      type: "plain_list",
      items: [
        "La majorité des noms qui se terminent par {a}-e{/a} sont féminins.",
      ],
      noBulletItems: [0],
    },
    {
      type: "highlight",
      label: "",
      items: [
        "la table, la ville, la voiture, etc.",
      ],
      noBulletItems: [0],
    },
    {
      type: "plain_list",
      items: [
        "Les noms qui se terminent par une consonne ou une voyelle ({a}a{/a}, {a}i{/a}, {a}o{/a} ou {a}u{/a}) sont souvent masculins.",
      ],
      noBulletItems: [0],
    },
    {
      type: "highlight",
      label: "",
      items: [
        "le pays, le magasin, le monument, etc.",
        "un agenda, un taxi, un vélo, etc.",
      ],
      noBulletItems: [0, 1],
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
