import type {
  Exercise,
  ExerciseDifficulty,
  FillItem,
  QcmItem,
} from "../../grammar-data";

type GrammarCase = {
  sentence: string;
  answer: string;
};

type GrammarProfile = {
  label: string;
  choices: string[];
  cases: GrammarCase[];
};

const TRANSFORMATION_TASKS: Record<string, string[]> = {
  "a1-conj-l01": [
    "Changez la personne grammaticale", "Mettez la phrase au pluriel", "Réécrivez au négatif",
    "Posez une question", "Identifiez le sujet, le verbe et le complément",
  ],
  "a1-gr-expressions-temps": [
    "Changez le repère temporel", "Changez le temps du verbe", "Répondez à la question : Quand ?",
    "Classez le marqueur : passé, présent ou futur", "Corrigez l'expression de temps si nécessaire",
  ],
  "a2-gr-bon-bien-meilleur-mieux": [
    "Corrigez l'erreur éventuelle", "Classez le mot : adjectif ou adverbe", "Transformez au comparatif",
    "Transformez au superlatif", "Mettez le groupe nominal au pluriel", "Mettez au masculin ou au féminin",
  ],
  "a2-gr-superlatif": [
    "Transformez au comparatif", "Changez le genre", "Mettez au pluriel",
    "Corrigez l'accord", "Mettez au masculin ou au féminin", "Répondez avec un superlatif",
  ],
  "a1-gr-l14": [
    "Réécrivez au négatif", "Mettez le nom au pluriel", "Corrigez l'article partitif",
    "Remplacez le groupe par le pronom en", "Mettez au masculin ou au féminin", "Posez une question sur la quantité",
  ],
  "a1-gr-l18": [
    "Changez le genre du nom", "Mettez le groupe nominal au pluriel", "Corrigez le démonstratif",
    "Remplacez le nom par un autre nom", "Mettez au masculin ou au féminin", "Posez une question avec quel",
  ],
  "a1-gr-l19": [
    "Changez le possesseur", "Mettez le groupe nominal au pluriel", "Corrigez le possessif",
    "Remplacez le groupe nominal par un pronom", "Mettez au masculin ou au féminin", "Posez une question sur l'appartenance",
  ],
  "a1-gr-l22": [
    "Changez la fréquence", "Réécrivez au négatif", "Corrigez la place de l'adverbe",
    "Répondez à la question : à quelle fréquence ?", "Identifiez le sujet, le verbe et l'adverbe",
  ],
  "a1-gr-l23": [
    "Changez le genre", "Mettez au pluriel", "Corrigez l'accord de l'adjectif",
    "Classez les mots : nom ou adjectif", "Mettez au masculin ou au féminin", "Identifiez le sujet, le verbe et le complément",
  ],
  "a2-gr-l07": [
    "Transformez avec est-ce que", "Transformez par inversion", "Corrigez la question",
    "Répondez à la question", "Identifiez le sujet et le verbe",
  ],
  "a2-gr-l09": [
    "Donnez une réponse affirmative", "Donnez une réponse négative", "Répondez avec si",
    "Transformez la réponse avec moi aussi ou moi non plus", "Posez la question correspondante",
  ],
  "a2-gr-l19": [
    "Réunissez les deux phrases avec un pronom relatif", "Remplacez le nom répété",
    "Corrigez le pronom relatif", "Mettez l'antécédent au pluriel", "Identifiez le sujet du verbe relatif",
  ],
  "a2-gr-l35": [
    "Remplacez le complément par un pronom", "Réécrivez au négatif", "Mettez le complément au pluriel",
    "Corrigez la place du pronom", "Identifiez le COD ou le COI",
  ],
  "a2-gr-l36": [
    "Remplacez le complément par y ou en", "Réécrivez au négatif", "Corrigez la place du pronom",
    "Posez la question correspondante", "Identifiez le complément remplacé",
  ],
  "a2-gr-l39": [
    "Transformez au superlatif", "Inversez les deux éléments comparés", "Corrigez le comparatif",
    "Mettez les groupes nominaux au pluriel", "Mettez au masculin ou au féminin", "Répondez en utilisant une comparaison",
  ],
  "a2-gr-l42": [
    "Réécrivez à la forme affirmative", "Réécrivez avec une autre négation", "Corrigez la négation",
    "Placez rien ou personne comme sujet", "Posez la question correspondante",
  ],
  "a2-gr-l52": [
    "Remplacez le connecteur par un équivalent", "Transformez la cause en conséquence",
    "Transformez la conséquence en cause", "Corrigez le connecteur", "Réunissez les deux idées en une phrase",
  ],
};

const LEVEL_PREFIXES: Record<ExerciseDifficulty, [string, string]> = {
  A1: ["", "Aujourd'hui, "],
  A2: ["Dans cette situation, ", "Pour préciser le contexte, "],
  B1: [
    "Même si la phrase est plus développée, ",
    "Lorsque l'on analyse attentivement le contexte, ",
  ],
};

function lowerFirst(text: string): string {
  return text.charAt(0).toLocaleLowerCase("fr-CH") + text.slice(1);
}

function levelPool(profile: GrammarProfile, difficulty: ExerciseDifficulty): FillItem[] {
  return Array.from({ length: 20 }, (_, index) => {
    const sample = profile.cases[index % profile.cases.length]!;
    const prefix = LEVEL_PREFIXES[difficulty][index < 10 ? 0 : 1];
    return {
      sentence: prefix ? `${prefix}${lowerFirst(sample.sentence)}` : sample.sentence,
      hint: profile.choices.join(" / "),
      answer: sample.answer,
      difficulty,
    };
  });
}

function buildExercises(slug: string, profile: GrammarProfile): Exercise[] {
  const fillPool = (["A1", "A2", "B1"] as const).flatMap((level) => levelPool(profile, level));
  const qcmPool: QcmItem[] = fillPool.map((item) => ({
    sentence: item.sentence,
    choices: profile.choices,
    correctIdx: Math.max(0, profile.choices.indexOf(item.answer)),
    difficulty: item.difficulty,
  }));
  const orderPool = fillPool.map((item) => {
    const sentence = item.sentence.replace("___", item.answer);
    return {
      sentence,
      words: sentence.split(/\s+/u),
      difficulty: item.difficulty,
    };
  });
  const writingPrompts = Object.fromEntries(
    (["A1", "A2", "B1"] as const).map((level) => [
      level,
      levelPool(profile, level).map((item) => {
        const completed = item.sentence.replace("___", item.answer);
        if (level === "A1") {
          return `Écrivez une phrase simple sur le même modèle : « ${completed} »`;
        }
        if (level === "A2") {
          return `Écrivez deux phrases liées à ${profile.label.toLocaleLowerCase("fr-CH")} en vous inspirant de : « ${completed} »`;
        }
        return `Rédigez un court paragraphe de trois à quatre phrases utilisant correctement ${profile.label.toLocaleLowerCase("fr-CH")}. Vous pouvez partir de cette idée : « ${completed} »`;
      }),
    ]),
  ) as Record<ExerciseDifficulty, string[]>;
  const tasks = TRANSFORMATION_TASKS[slug] ?? [
    "Changez la personne grammaticale", "Corrigez l'erreur", "Réécrivez au négatif",
    "Mettez au pluriel", "Posez une question",
  ];
  const transformationPrompts = Object.fromEntries(
    (["A1", "A2", "B1"] as const).map((level) => [
      level,
      levelPool(profile, level).map((item, index) => {
        const sentence = item.sentence.replace("___", item.answer);
        return `${tasks[index % tasks.length]} : « ${sentence} »`;
      }),
    ]),
  ) as Record<ExerciseDifficulty, string[]>;

  return [
    {
      type: "fill",
      title: `Exercice 1 — ${profile.label}`,
      instruction: "Complétez chaque phrase avec la forme correcte.",
      items: [],
      pool: fillPool,
      poolSize: 5,
    },
    {
      type: "qcm",
      title: `Exercice 2 — ${profile.label}`,
      instruction: "Choisissez la forme correcte pour compléter chaque phrase.",
      items: [],
      pool: qcmPool,
      poolSize: 5,
      inlineChoices: true,
    },
    {
      type: "word_order",
      title: `Exercice 3 — ${profile.label}`,
      instruction: "Remettez les mots dans le bon ordre.",
      items: [],
      pool: orderPool,
      poolSize: 5,
      allowPartialValidation: true,
    },
    {
      type: "write",
      title: `Exercice 4 — Transformer une phrase : ${profile.label}`,
      instruction: "Transformez la phrase en respectant précisément la consigne.",
      levelPromptPools: transformationPrompts,
      promptPoolSize: 5,
      promptLayout: "stacked",
    },
    {
      type: "write",
      title: `Exercice 5 — Production écrite : ${profile.label}`,
      instruction: "Rédigez le texte demandé en respectant la notion de la leçon.",
      levelPromptPools: writingPrompts,
      promptPoolSize: 5,
      promptLayout: "stacked",
    },
  ];
}

const PROFILES: Record<string, GrammarProfile> = {
  "a1-conj-l01": {
    label: "Être ou avoir",
    choices: ["suis", "es", "est", "sommes", "êtes", "sont", "ai", "as", "a", "avons", "avez", "ont"],
    cases: [
      { sentence: "Je ___ en classe.", answer: "suis" },
      { sentence: "Tu ___ un rendez-vous.", answer: "as" },
      { sentence: "Elle ___ à Lausanne.", answer: "est" },
      { sentence: "Nous ___ deux enfants.", answer: "avons" },
      { sentence: "Vous ___ en retard.", answer: "êtes" },
      { sentence: "Ils ___ une voiture.", answer: "ont" },
      { sentence: "J'___ un cours de français.", answer: "ai" },
      { sentence: "Tu ___ très patient.", answer: "es" },
      { sentence: "On ___ à la maison.", answer: "est" },
      { sentence: "Nous ___ prêts pour partir.", answer: "sommes" },
    ],
  },
  "a1-gr-expressions-temps": {
    label: "Les expressions de temps",
    choices: ["aujourd'hui", "demain", "hier", "après-demain", "la semaine prochaine"],
    cases: [
      { sentence: "___, je travaille jusqu'à midi.", answer: "aujourd'hui" },
      { sentence: "___, nous irons à Genève.", answer: "demain" },
      { sentence: "___, elle a téléphoné au médecin.", answer: "hier" },
      { sentence: "___, le magasin sera fermé.", answer: "après-demain" },
      { sentence: "___, nous commencerons le nouveau cours.", answer: "la semaine prochaine" },
      { sentence: "Je dois terminer ce travail ___.", answer: "aujourd'hui" },
      { sentence: "Le train partira ___.", answer: "demain" },
      { sentence: "Il a reçu la lettre ___.", answer: "hier" },
      { sentence: "La réunion aura lieu ___.", answer: "après-demain" },
      { sentence: "Nous passerons l'examen ___.", answer: "la semaine prochaine" },
    ],
  },
  "a2-gr-bon-bien-meilleur-mieux": {
    label: "Bon, bien, meilleur ou mieux",
    choices: ["bon", "bien", "meilleur", "meilleure", "mieux"],
    cases: [
      { sentence: "Ce café est très ___.", answer: "bon" },
      { sentence: "Elle parle français ___.", answer: "bien" },
      { sentence: "Ce restaurant est ___ que l'autre.", answer: "meilleur" },
      { sentence: "Aujourd'hui, je me sens ___.", answer: "mieux" },
      { sentence: "Il a choisi un ___ livre.", answer: "bon" },
      { sentence: "Vous travaillez vraiment ___.", answer: "bien" },
      { sentence: "Cette solution est la ___.", answer: "meilleure" },
      { sentence: "Elle comprend ___ avec un exemple.", answer: "mieux" },
      { sentence: "C'est un ___ conseil.", answer: "bon" },
      { sentence: "Son deuxième résultat est ___.", answer: "meilleur" },
    ],
  },
  "a2-gr-superlatif": {
    label: "Le superlatif",
    choices: ["le plus", "la plus", "les plus", "le moins", "le mieux", "le meilleur"],
    cases: [
      { sentence: "C'est ___ grand bâtiment de la ville.", answer: "le plus" },
      { sentence: "Lina est ___ rapide de l'équipe.", answer: "la plus" },
      { sentence: "Ce sont ___ beaux paysages de la région.", answer: "les plus" },
      { sentence: "C'est le trajet ___ long.", answer: "le moins" },
      { sentence: "Parmi nous, elle chante ___.", answer: "le mieux" },
      { sentence: "C'est ___ restaurant du quartier.", answer: "le meilleur" },
      { sentence: "Cette rue est ___ calme du centre.", answer: "la plus" },
      { sentence: "Ce sont ___ chers du magasin.", answer: "les plus" },
      { sentence: "Il explique ___.", answer: "le mieux" },
      { sentence: "Ce choix est ___.", answer: "le meilleur" },
    ],
  },
  "a1-gr-l14": {
    label: "Les articles partitifs",
    choices: ["du", "de la", "de l'", "des", "de"],
    cases: [
      { sentence: "Je voudrais ___ pain.", answer: "du" },
      { sentence: "Elle achète ___ farine.", answer: "de la" },
      { sentence: "Nous buvons ___ eau.", answer: "de l'" },
      { sentence: "Il prépare ___ légumes.", answer: "des" },
      { sentence: "Je ne mange pas ___ viande.", answer: "de" },
      { sentence: "Ajoutez ___ sel.", answer: "du" },
      { sentence: "Il reste ___ soupe.", answer: "de la" },
      { sentence: "Vous voulez ___ huile ?", answer: "de l'" },
      { sentence: "Elle commande ___ frites.", answer: "des" },
      { sentence: "Nous n'avons plus ___ café.", answer: "de" },
    ],
  },
  "a1-gr-l18": {
    label: "Les adjectifs démonstratifs",
    choices: ["ce", "cet", "cette", "ces"],
    cases: [
      { sentence: "Je prends ___ bus.", answer: "ce" },
      { sentence: "J'aime ___ appartement.", answer: "cet" },
      { sentence: "Regardez ___ affiche.", answer: "cette" },
      { sentence: "___ chaussures sont confortables.", answer: "ces" },
      { sentence: "___ monsieur est mon professeur.", answer: "ce" },
      { sentence: "___ hôtel est complet.", answer: "cet" },
      { sentence: "___ rue est très calme.", answer: "cette" },
      { sentence: "Je connais ___ personnes.", answer: "ces" },
      { sentence: "___ formulaire est important.", answer: "ce" },
      { sentence: "___ exercice est difficile.", answer: "cet" },
    ],
  },
  "a1-gr-l19": {
    label: "Les adjectifs possessifs",
    choices: ["mon", "ma", "mes", "ton", "ta", "tes", "son", "sa", "ses", "notre", "votre", "leurs"],
    cases: [
      { sentence: "Je cherche ___ téléphone.", answer: "mon" },
      { sentence: "Je présente ___ sœur.", answer: "ma" },
      { sentence: "Voici ___ documents.", answer: "mes" },
      { sentence: "Tu prends ___ sac.", answer: "ton" },
      { sentence: "Tu appelles ___ mère.", answer: "ta" },
      { sentence: "Elle retrouve ___ clés.", answer: "ses" },
      { sentence: "Il parle à ___ responsable.", answer: "son" },
      { sentence: "Nous visitons ___ appartement.", answer: "notre" },
      { sentence: "Vous donnez ___ adresse.", answer: "votre" },
      { sentence: "Ils accompagnent ___ enfants.", answer: "leurs" },
    ],
  },
  "a1-gr-l22": {
    label: "Les adverbes de fréquence",
    choices: ["toujours", "souvent", "parfois", "rarement", "jamais"],
    cases: [
      { sentence: "Je prends ___ le bus à sept heures.", answer: "toujours" },
      { sentence: "Nous allons ___ au marché le samedi.", answer: "souvent" },
      { sentence: "Elle mange ___ au restaurant.", answer: "parfois" },
      { sentence: "Il regarde ___ la télévision.", answer: "rarement" },
      { sentence: "Je ne fume ___.", answer: "jamais" },
      { sentence: "Le magasin est ___ ouvert le lundi.", answer: "toujours" },
      { sentence: "Vous arrivez ___ en avance.", answer: "souvent" },
      { sentence: "On travaille ___ à la maison.", answer: "parfois" },
      { sentence: "Ils voyagent ___ en avion.", answer: "rarement" },
      { sentence: "Elle n'oublie ___ ses clés.", answer: "jamais" },
    ],
  },
  "a1-gr-l23": {
    label: "L'accord des adjectifs qualificatifs",
    choices: ["content", "contente", "contents", "contentes", "beau", "belle", "beaux", "belles"],
    cases: [
      { sentence: "Paul est ___.", answer: "content" },
      { sentence: "Sarah est ___.", answer: "contente" },
      { sentence: "Les garçons sont ___.", answer: "contents" },
      { sentence: "Les filles sont ___.", answer: "contentes" },
      { sentence: "C'est un ___ quartier.", answer: "beau" },
      { sentence: "C'est une ___ maison.", answer: "belle" },
      { sentence: "Ce sont de ___ jardins.", answer: "beaux" },
      { sentence: "Elle porte de ___ chaussures.", answer: "belles" },
      { sentence: "Mon voisin semble ___.", answer: "content" },
      { sentence: "Mes collègues sont ___.", answer: "contents" },
    ],
  },
  "a2-gr-l07": {
    label: "Les questions fermées",
    choices: ["Est-ce que", "Est-ce qu'", "Habitez-vous", "Avez-vous"],
    cases: [
      { sentence: "___ vous travaillez demain ?", answer: "Est-ce que" },
      { sentence: "___ elle vient avec nous ?", answer: "Est-ce qu'" },
      { sentence: "___ à Sion ?", answer: "Habitez-vous" },
      { sentence: "___ un abonnement ?", answer: "Avez-vous" },
      { sentence: "___ tu comprends la consigne ?", answer: "Est-ce que" },
      { sentence: "___ il connaît cette ville ?", answer: "Est-ce qu'" },
      { sentence: "___ près de la gare ?", answer: "Habitez-vous" },
      { sentence: "___ vos papiers ?", answer: "Avez-vous" },
      { sentence: "___ le magasin est ouvert ?", answer: "Est-ce que" },
      { sentence: "___ on peut entrer ?", answer: "Est-ce qu'" },
    ],
  },
  "a2-gr-l09": {
    label: "Les réponses aux questions fermées",
    choices: ["oui", "non", "si", "moi aussi", "moi non plus", "moi si"],
    cases: [
      { sentence: "Vous habitez à Sion ? — ___, j'habite à Sion.", answer: "oui" },
      { sentence: "Tu viens demain ? — ___, je ne peux pas.", answer: "non" },
      { sentence: "Vous n'avez pas reçu la lettre ? — ___, je l'ai reçue.", answer: "si" },
      { sentence: "J'aime ce film. — ___.", answer: "moi aussi" },
      { sentence: "Je ne bois pas de café. — ___.", answer: "moi non plus" },
      { sentence: "Je ne pars pas ce soir. — ___, je pars à huit heures.", answer: "moi si" },
      { sentence: "Elle travaille ici ? — ___, depuis janvier.", answer: "oui" },
      { sentence: "Il n'est pas disponible ? — ___, il est dans son bureau.", answer: "si" },
      { sentence: "Je fais du sport. — ___.", answer: "moi aussi" },
      { sentence: "Je ne connais personne. — ___.", answer: "moi non plus" },
    ],
  },
  "a2-gr-l19": {
    label: "Les pronoms relatifs",
    choices: ["qui", "que", "où"],
    cases: [
      { sentence: "C'est la personne ___ travaille avec moi.", answer: "qui" },
      { sentence: "Voici le livre ___ je cherche.", answer: "que" },
      { sentence: "La ville ___ j'habite est petite.", answer: "où" },
      { sentence: "Le bus ___ arrive va à la gare.", answer: "qui" },
      { sentence: "C'est un film ___ nous aimons.", answer: "que" },
      { sentence: "Le jour ___ je suis arrivé, il neigeait.", answer: "où" },
      { sentence: "J'ai un voisin ___ parle italien.", answer: "qui" },
      { sentence: "La lettre ___ tu as envoyée est arrivée.", answer: "que" },
      { sentence: "Voilà l'école ___ elle étudie.", answer: "où" },
      { sentence: "Le professeur ___ explique est patient.", answer: "qui" },
    ],
  },
  "a2-gr-l35": {
    label: "Les pronoms COD et COI",
    choices: ["le", "la", "les", "lui", "leur"],
    cases: [
      { sentence: "Je prends le bus. Je ___ prends à sept heures.", answer: "le" },
      { sentence: "J'appelle Marie. Je ___ appelle ce soir.", answer: "la" },
      { sentence: "Nous regardons les photos. Nous ___ regardons ensemble.", answer: "les" },
      { sentence: "Il téléphone à Paul. Il ___ téléphone demain.", answer: "lui" },
      { sentence: "Elle parle aux élèves. Elle ___ parle lentement.", answer: "leur" },
      { sentence: "Je connais ce quartier. Je ___ connais bien.", answer: "le" },
      { sentence: "Tu aides ta voisine. Tu ___ aides souvent.", answer: "la" },
      { sentence: "Il écrit à sa mère. Il ___ écrit chaque semaine.", answer: "lui" },
      { sentence: "Nous invitons nos amis. Nous ___ invitons samedi.", answer: "les" },
      { sentence: "Vous répondez aux clients. Vous ___ répondez rapidement.", answer: "leur" },
    ],
  },
  "a2-gr-l36": {
    label: "Les pronoms Y et EN",
    choices: ["y", "en"],
    cases: [
      { sentence: "Tu vas à Genève ? — Oui, j'___ vais demain.", answer: "y" },
      { sentence: "Vous voulez du café ? — Oui, j'___ veux.", answer: "en" },
      { sentence: "Il pense à son examen. Il ___ pense souvent.", answer: "y" },
      { sentence: "Elle parle de son travail. Elle ___ parle beaucoup.", answer: "en" },
      { sentence: "Nous allons au marché. Nous ___ allons à pied.", answer: "y" },
      { sentence: "J'achète trois pommes. J'___ achète trois.", answer: "en" },
      { sentence: "Ils habitent en Suisse. Ils ___ habitent depuis deux ans.", answer: "y" },
      { sentence: "Tu as besoin d'aide ? — Oui, j'___ ai besoin.", answer: "en" },
      { sentence: "Elle participe au cours. Elle ___ participe chaque lundi.", answer: "y" },
      { sentence: "Nous revenons de Lausanne. Nous ___ revenons ce soir.", answer: "en" },
    ],
  },
  "a2-gr-l39": {
    label: "Le comparatif",
    choices: ["plus", "aussi", "moins", "autant"],
    cases: [
      { sentence: "Ce train est ___ rapide que le bus.", answer: "plus" },
      { sentence: "Cette chambre est ___ grande que l'autre.", answer: "aussi" },
      { sentence: "Le vélo est ___ cher que la voiture.", answer: "moins" },
      { sentence: "Elle travaille ___ que son collègue.", answer: "autant" },
      { sentence: "Aujourd'hui, il fait ___ froid qu'hier.", answer: "moins" },
      { sentence: "Ce quartier est ___ calme que le centre.", answer: "plus" },
      { sentence: "Il parle ___ clairement que sa professeure.", answer: "aussi" },
      { sentence: "Nous avons ___ de temps que vous.", answer: "autant" },
      { sentence: "Cette solution coûte ___ cher.", answer: "moins" },
      { sentence: "Le second exercice est ___ difficile que le premier.", answer: "plus" },
    ],
  },
  "a2-gr-l42": {
    label: "La négation",
    choices: ["jamais", "rien", "personne", "plus"],
    cases: [
      { sentence: "Je ne prends ___ le train le dimanche.", answer: "jamais" },
      { sentence: "Elle ne comprend ___.", answer: "rien" },
      { sentence: "Il ne connaît ___ dans cette ville.", answer: "personne" },
      { sentence: "Nous ne travaillons ___ ici.", answer: "plus" },
      { sentence: "___ ne répond au téléphone.", answer: "personne" },
      { sentence: "___ ne fonctionne dans cette machine.", answer: "rien" },
      { sentence: "Vous ne voyagez ___ en avion.", answer: "jamais" },
      { sentence: "Je n'ai ___ besoin de ce document.", answer: "plus" },
      { sentence: "Elle ne dit ___ pendant la réunion.", answer: "rien" },
      { sentence: "Ils ne voient ___ devant la porte.", answer: "personne" },
    ],
  },
  "a2-gr-l52": {
    label: "La cause et la conséquence",
    choices: ["parce que", "car", "comme", "grâce à", "à cause de", "donc"],
    cases: [
      { sentence: "Je reste chez moi ___ je suis malade.", answer: "parce que" },
      { sentence: "Il prend un taxi, ___ le dernier bus est parti.", answer: "car" },
      { sentence: "___ il pleut, nous annulons la sortie.", answer: "comme" },
      { sentence: "Elle a réussi ___ son travail régulier.", answer: "grâce à" },
      { sentence: "Le train est en retard ___ la neige.", answer: "à cause de" },
      { sentence: "Le magasin est fermé, ___ nous reviendrons demain.", answer: "donc" },
      { sentence: "Nous sommes partis tôt ___ la route était longue.", answer: "parce que" },
      { sentence: "___ votre aide, le dossier est terminé.", answer: "grâce à" },
      { sentence: "Il a raté son rendez-vous ___ un accident.", answer: "à cause de" },
      { sentence: "Elle connaît le chemin, ___ elle nous accompagne.", answer: "donc" },
    ],
  },
};

export function generatedGrammarExercises(slug: string): Exercise[] {
  const profile = PROFILES[slug];
  return profile ? buildExercises(slug, profile) : [];
}

export const GENERATED_GRAMMAR_SLUGS = Object.freeze(Object.keys(PROFILES));
