import type { VocabLesson } from "../../vocabulary-data";

export const VACANCES_PLAGE: VocabLesson = {
  slug: "vacances-plage",
  code: "V.12b",
  level: "A1",
  title: "Les vacances et la plage",
  theory: [
    {
      type: "plain_list",
      items: ["Vocabulaire des vacances et de la plage :"],
      noBulletItems: [0],
    },
    {
      type: "word_cards",
      cols: 3,
      items: [
        "la station balnéaire", "la plage", "la mer",
        "la vague", "la baignade", "le maillot de bain",
        "la combinaison", "la planche de surf", "la serviette",
        "le parasol", "la crème solaire", "le coup de soleil",
        "faire une sieste", "nager", "se baigner",
        "bronzer",
      ],
    },
    {
      type: "plain_list",
      items: [
        "Activités et expressions utiles :",
        "faire de la plongée — aller à la plage — prendre un bain de soleil",
        "avoir trop chaud — chercher l'ombre — construire un château de sable",
      ],
      noBulletItems: [0],
    },
  ],
  exercises: [
    {
      type: "fill",
      title: "Complétez avec le bon mot",
      instruction: "Complétez chaque phrase avec le bon mot.",
      items: [],
      pool: [
        { sentence: "Elle met de la ___ avant d'aller à la plage.", hint: "protection contre le soleil", answer: "crème solaire" },
        { sentence: "Il a attrapé un ___ parce qu'il est resté trop longtemps au soleil.", hint: "brûlure du soleil", answer: "coup de soleil" },
        { sentence: "Les enfants aiment jouer dans les ___.", hint: "mouvements de l'eau", answer: "vagues" },
        { sentence: "Elle étend sa ___ sur le sable pour se reposer.", hint: "tissu de bain", answer: "serviette" },
        { sentence: "Nous allons dans une ___ au bord de la mer.", hint: "ville balnéaire", answer: "station balnéaire" },
        { sentence: "Il met son ___ pour aller nager.", hint: "vêtement de bain", answer: "maillot de bain" },
        { sentence: "Ils font de la ___ avec leur planche.", hint: "sport sur les vagues", answer: "planche de surf" },
        { sentence: "Elle se met sous le ___ pour éviter le soleil.", hint: "grand parapluie de plage", answer: "parasol" },
        { sentence: "Après le déjeuner, ils font une ___.", hint: "courte sieste", answer: "sieste" },
        { sentence: "Les enfants adorent ___ dans la mer.", hint: "nager et jouer dans l'eau", answer: "se baigner" },
        { sentence: "Elle aime ___ au soleil sur la plage.", hint: "devenir bronzée", answer: "bronzer" },
        { sentence: "Le surfeur enfile sa ___ pour se protéger du froid.", hint: "tenue néoprène", answer: "combinaison" },
      ],
      poolSize: 5,
    },
    {
      type: "qcm",
      title: "Choisissez la bonne réponse",
      instruction: "Choisissez la bonne réponse.",
      items: [
        {
          sentence: "Qu'est-ce qu'une station balnéaire ?",
          choices: [
            "Une ville au bord de la mer",
            "Un type de crème solaire",
            "Un sport nautique",
            "Un vêtement de bain",
          ],
          correctIdx: 0,
        },
        {
          sentence: "Que met-on pour éviter les coups de soleil ?",
          choices: ["la crème solaire", "le parasol", "la serviette", "le maillot"],
          correctIdx: 0,
        },
        {
          sentence: "Quel verbe signifie devenir plus foncé sous le soleil ?",
          choices: ["bronzer", "nager", "se baigner", "plonger"],
          correctIdx: 0,
        },
        {
          sentence: "Qu'est-ce qu'une vague ?",
          choices: [
            "Un mouvement de l'eau de mer",
            "Un type de parasol",
            "Une planche pour surfer",
            "Un coup de soleil",
          ],
          correctIdx: 0,
        },
        {
          sentence: "Quel objet protège du soleil sur la plage ?",
          choices: ["le parasol", "la serviette", "le maillot de bain", "la vague"],
          correctIdx: 0,
        },
      ],
    },
    {
      type: "write",
      title: "Production écrite",
      instruction: "Vous proposez à un(e) ami(e) de prendre des cours de surf avec vous cet été. Écrivez un message pour lui présenter cette idée, décrire ce dont vous aurez besoin et expliquer pourquoi c'est une bonne idée. (60-80 mots)",
      prompts: [
        "Vous proposez à un(e) ami(e) de prendre des cours de surf avec vous cet été. Écrivez un message pour lui présenter cette idée, décrire ce dont vous aurez besoin et expliquer pourquoi c'est une bonne idée. (60-80 mots)",
      ],
    },
  ],
};
