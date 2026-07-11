import { mcq, type CommunicationLesson } from "./express-types";

/* ═══════════════════════════════════════════════════════════════════════════
 * E2-1 — Raconter son passé
 * ═══════════════════════════════════════════════════════════════════════════ */

export const EXPRESS_E2_1: CommunicationLesson = {
  id: "E2-1",
  code: "E2.1",
  title: "Raconter son passé",
  theory: [
    { type: "heading", text: "Raconter son passé", black: true },
    {
      type: "plain",
      text: "Pour parler d'événements déjà vécus, on utilise surtout le **passé composé**. Pour décrire une situation, une habitude ou un décor dans le passé, on utilise l'**imparfait**.",
    },
    { type: "highlight", title: "Passé composé : une action terminée" },
    {
      type: "section",
      items: [
        "J'ai déménagé en Suisse en 2020.",
        "Nous avons visité le musée hier.",
        "Elle est allée à l'école ce matin.",
      ],
    },
    {
      type: "plain",
      text: "Le passé composé = auxiliaire (**avoir** ou **être**) + participe passé. Avec **être**, le participe s'accorde : elle est **partie**, ils sont **venus**.",
    },
    { type: "highlight", title: "Imparfait : description et habitude" },
    {
      type: "section",
      items: [
        "Quand j'étais petit, j'habitais à Lyon.",
        "Il faisait beau et les oiseaux chantaient.",
        "Tous les étés, nous allions à la mer.",
      ],
    },
    { type: "heading", text: "Organiser son récit", black: true },
    {
      type: "bullets",
      items: [
        "**D'abord** / **Au début** — commencer l'histoire",
        "**Ensuite** / **Puis** — enchaîner les actions",
        "**Après** / **Plus tard** — continuer",
        "**Finalement** / **Enfin** — terminer",
      ],
    },
    {
      type: "table",
      accentHeader: true,
      headers: ["Question", "Réponse possible"],
      rows: [
        ["Qu'est-ce que tu as fait hier ?", "Hier, j'ai fait mes devoirs puis j'ai regardé un film."],
        ["Où es-tu allé(e) en vacances ?", "Je suis allé(e) en Italie avec ma famille."],
        ["Comment était ton école ?", "Mon école était grande et sympathique."],
        ["Tu habitais où avant ?", "Avant, j'habitais à Marseille."],
      ],
    },
    { type: "heading", text: "Exemple de dialogue", black: true },
    {
      type: "dialogue",
      lines: [
        { role: "A", text: "Tu as passé un bon week-end ?" },
        { role: "B", text: "Oui ! Samedi, je suis allée au parc avec mes cousins." },
        { role: "A", text: "Il faisait beau ?" },
        { role: "B", text: "Oui, il faisait très beau. Ensuite, on a mangé une glace." },
        { role: "A", text: "Et dimanche ?" },
        { role: "B", text: "Dimanche, j'ai aidé ma mère à la maison. Et toi ?" },
        { role: "A", text: "Moi, j'ai joué au foot puis j'ai lu un livre." },
      ],
    },
    {
      type: "vocab",
      items: [
        { fr: "hier / avant-hier", example: "Hier, j'ai vu un film." },
        { fr: "la semaine dernière", example: "La semaine dernière, nous avons déménagé." },
        { fr: "il y a…", example: "Il y a deux ans, j'habitais en Espagne." },
        { fr: "quand j'étais petit(e)", example: "Quand j'étais petite, je jouais dehors." },
        { fr: "d'abord… ensuite… enfin", example: "D'abord j'ai rangé, ensuite j'ai sorti." },
        { fr: "être allé(e) / avoir fait", example: "Je suis allée au cinéma. J'ai fait du sport." },
        { fr: "habiter / vivre", example: "Avant, j'habitais à Paris." },
      ],
    },
    {
      type: "note",
      text: "Astuce : raconte d'abord le contexte à l'imparfait (il faisait froid…), puis les actions au passé composé (j'ai mis mon manteau).",
    },
  ],
  exerciseCount: 8,
  exercisePool: [
    mcq("e2-1-t1-a", 1, "Quel temps utilise-t-on pour une action terminée ?", "le passé composé", [
      "l'imparfait",
      "le futur",
      "le présent",
    ]),
    mcq("e2-1-t1-b", 1, "« Hier, j'___ au cinéma. » (aller)", "suis allé(e)", [
      "étais allé(e)",
      "vais",
      "allais",
    ]),
    mcq("e2-1-t1-c", 1, "Quel mot introduit souvent le début d'un récit ?", "D'abord", [
      "Finalement",
      "Pourtant",
      "Parce que",
    ]),
    mcq("e2-1-t2-a", 2, "Quelle phrase est au passé composé ?", "Nous avons mangé une pizza.", [
      "Nous mangions une pizza.",
      "Nous mangeons une pizza.",
      "Nous mangerons une pizza.",
    ]),
    mcq("e2-1-t2-b", 2, "Quelle phrase décrit une habitude dans le passé ?", "Tous les dimanches, je jouais au foot.", [
      "Hier, j'ai joué au foot.",
      "Demain, je jouerai au foot.",
      "Je joue au foot maintenant.",
    ]),
    mcq("e2-1-t2-c", 2, "Complétez : « Quand j'___ petit, j'habitais à Lyon. »", "étais", [
      "ai été",
      "suis",
      "serai",
    ]),
    mcq("e2-1-t2-d", 2, "Avec le verbe « aller », l'auxiliaire du passé composé est :", "être", [
      "avoir",
      "faire",
      "venir",
    ]),
    mcq("e2-1-t3-a", 3, "On te demande : « Qu'est-ce que tu as fait hier ? » Quelle réponse est correcte ?", "Hier, j'ai fait mes devoirs.", [
      "Hier, je faisais mes devoirs demain.",
      "Hier, je vais faire mes devoirs.",
      "Hier, je ferai mes devoirs.",
    ]),
    mcq("e2-1-t3-b", 3, "Complétez le dialogue. A : « Il faisait beau ? » B : « ___ »", "Oui, il faisait très beau.", [
      "Oui, il a fait très beau demain.",
      "Oui, il fera très beau.",
      "Oui, il fait beau hier.",
    ]),
    mcq("e2-1-t3-c", 3, "Quelle réponse convient à « Où es-tu allé(e) en vacances ? »", "Je suis allé(e) en Italie.", [
      "J'allais en Italie demain.",
      "Je vais en Italie hier.",
      "J'ai Italie.",
    ]),
    mcq("e2-1-t3-d", 3, "Choisissez la suite logique : « D'abord j'ai rangé ma chambre. Ensuite… »", "j'ai fait mes devoirs.", [
      "je ferai mes devoirs hier.",
      "je faisais mes devoirs demain.",
      "je suis mes devoirs.",
    ]),
    mcq("e2-1-t4-a", 4, "Dans ce récit, quel temps manque ? « Il ___ froid. J'ai mis mon manteau. »", "faisait", [
      "a fait",
      "fera",
      "fait",
    ]),
    mcq("e2-1-t4-b", 4, "Quelle phrase mélange correctement imparfait et passé composé ?", "Il pleuvait, alors j'ai pris mon parapluie.", [
      "Il a plu, alors je prenais mon parapluie demain.",
      "Il pleuvait, alors je prends mon parapluie hier.",
      "Il pleut, alors j'ai pris mon parapluie demain.",
    ]),
    mcq("e2-1-t4-c", 4, "Quelle formulation est la plus naturelle pour raconter ?", "Samedi, je suis allée au parc. Ensuite, on a mangé une glace.", [
      "Samedi, j'allais au parc. Ensuite, on mange une glace hier.",
      "Samedi, je vais au parc. Ensuite, on mangera une glace hier.",
      "Samedi, j'ai aller au parc. Ensuite, on a manger une glace.",
    ]),
    mcq("e2-1-t5-a", 5, "Repérez l'erreur : « Hier, je suis allé au cinéma et après je regardais un film. » Quelle correction est la meilleure ?", "Hier, je suis allé au cinéma et après j'ai regardé un film.", [
      "Hier, j'allais au cinéma et après je regardais un film demain.",
      "Hier, je vais au cinéma et après j'ai regardé un film.",
      "Hier, je suis allé au cinéma et après je regarde un film.",
    ]),
    mcq("e2-1-t5-b", 5, "Quelle phrase raconte le mieux un week-end passé ?", "Le week-end dernier, j'ai joué au foot puis j'ai lu un livre.", [
      "Le week-end dernier, je jouerai au foot puis je lis un livre.",
      "Le week-end dernier, je joue au foot puis je lisais un livre demain.",
      "Le week-end dernier, j'étais jouer au foot puis j'ai lire un livre.",
    ]),
    mcq("e2-1-t5-c", 5, "On te demande de raconter ton arrivée en Suisse. Quelle formulation est la meilleure ?", "Il y a deux ans, je suis arrivé(e) en Suisse. Au début, c'était difficile.", [
      "Dans deux ans, j'arrive en Suisse. Au début, c'est difficile hier.",
      "Il y a deux ans, j'arrivais en Suisse demain. Au début, c'a été difficile.",
      "Il y a deux ans, j'ai arriver en Suisse. Au début, c'était difficile demain.",
    ]),
  ],
};

/* ═══════════════════════════════════════════════════════════════════════════
 * E2-2 — Parler de ses projets
 * ═══════════════════════════════════════════════════════════════════════════ */

export const EXPRESS_E2_2: CommunicationLesson = {
  id: "E2-2",
  code: "E2.2",
  title: "Parler de ses projets",
  theory: [
    { type: "heading", text: "Parler de ses projets", black: true },
    {
      type: "plain",
      text: "Pour parler de ce que tu vas faire bientôt, on utilise souvent le **futur proche** : **aller + infinitif**. Pour des projets plus lointains ou des prévisions, on peut utiliser le **futur simple**.",
    },
    { type: "highlight", title: "Futur proche" },
    {
      type: "section",
      items: [
        "Je vais voyager cet été.",
        "Nous allons déménager en septembre.",
        "Tu vas commencer un nouveau cours ?",
      ],
    },
    { type: "highlight", title: "Futur simple" },
    {
      type: "section",
      items: [
        "Un jour, je parlerai bien français.",
        "L'année prochaine, nous habiterons à Lausanne.",
        "Elle réussira son examen.",
      ],
    },
    { type: "heading", text: "Exprimer une intention", black: true },
    {
      type: "bullets",
      items: [
        "**J'aimerais…** — souhait poli",
        "**Je voudrais…** — désir / projet",
        "**J'ai l'intention de…** — projet sérieux",
        "**Je compte…** — projet prévu",
        "**Mon rêve, c'est de…** — ambition",
      ],
    },
    {
      type: "table",
      accentHeader: true,
      headers: ["Question", "Réponse possible"],
      rows: [
        ["Qu'est-ce que tu vas faire ce week-end ?", "Je vais rendre visite à ma grand-mère."],
        ["Tu as des projets pour les vacances ?", "Oui, j'aimerais aller à la montagne."],
        ["Que feras-tu plus tard ?", "Plus tard, je voudrais devenir infirmier."],
        ["Tu comptes rester ici ?", "Oui, je compte rester encore deux ans."],
      ],
    },
    { type: "heading", text: "Exemple de dialogue", black: true },
    {
      type: "dialogue",
      lines: [
        { role: "A", text: "Tu as des projets pour cet été ?" },
        { role: "B", text: "Oui ! Je vais passer deux semaines chez mon oncle." },
        { role: "A", text: "C'est où ?" },
        { role: "B", text: "À Nice. Et toi, qu'est-ce que tu vas faire ?" },
        { role: "A", text: "Moi, j'aimerais travailler un peu, puis partir en camping." },
        { role: "B", text: "Super ! On pourra se raconter nos vacances en septembre." },
        { role: "A", text: "D'accord, avec plaisir !" },
      ],
    },
    {
      type: "vocab",
      items: [
        { fr: "je vais + infinitif", example: "Je vais étudier ce soir." },
        { fr: "cet été / l'année prochaine", example: "Cet été, nous allons voyager." },
        { fr: "j'aimerais / je voudrais", example: "J'aimerais apprendre l'espagnol." },
        { fr: "avoir l'intention de", example: "J'ai l'intention de changer d'école." },
        { fr: "compter + infinitif", example: "Je compte déménager bientôt." },
        { fr: "plus tard", example: "Plus tard, je voudrais voyager." },
        { fr: "un projet / un rêve", example: "Mon projet, c'est de devenir médecin." },
      ],
    },
    {
      type: "note",
      text: "Pour un projet proche et sûr, préfère « je vais… ». Pour un souhait, utilise « j'aimerais… » ou « je voudrais… ».",
    },
  ],
  exerciseCount: 8,
  exercisePool: [
    mcq("e2-2-t1-a", 1, "Le futur proche se forme avec :", "aller + infinitif", [
      "avoir + infinitif",
      "être + participe passé",
      "faire + imparfait",
    ]),
    mcq("e2-2-t1-b", 1, "Complétez : « Je ___ voyager cet été. »", "vais", [
      "suis",
      "ai",
      "fais",
    ]),
    mcq("e2-2-t1-c", 1, "Quelle expression introduit un souhait ?", "J'aimerais…", [
      "J'ai fait…",
      "Je suis…",
      "J'habitais…",
    ]),
    mcq("e2-2-t2-a", 2, "Quelle phrase parle d'un projet futur ?", "Nous allons déménager en septembre.", [
      "Nous avons déménagé en septembre.",
      "Nous déménagions en septembre.",
      "Nous déménageons hier.",
    ]),
    mcq("e2-2-t2-b", 2, "Complétez : « L'année prochaine, nous ___ à Lausanne. » (habiter, futur simple)", "habiterons", [
      "habitons",
      "habitions",
      "avons habité",
    ]),
    mcq("e2-2-t2-c", 2, "Quelle phrase exprime une intention claire ?", "J'ai l'intention de changer d'école.", [
      "J'ai changé d'école hier.",
      "Je changeais d'école avant.",
      "Je suis école.",
    ]),
    mcq("e2-2-t2-d", 2, "« Je compte rester encore deux ans » signifie :", "Je prévois de rester deux ans.", [
      "Je suis resté deux ans.",
      "Je reste deux ans hier.",
      "Je ne veux pas rester.",
    ]),
    mcq("e2-2-t3-a", 3, "A : « Qu'est-ce que tu vas faire ce week-end ? » B : « ___ »", "Je vais rendre visite à ma grand-mère.", [
      "J'ai rendu visite à ma grand-mère hier.",
      "Je rendais visite à ma grand-mère demain.",
      "Je suis visite ma grand-mère.",
    ]),
    mcq("e2-2-t3-b", 3, "A : « Tu as des projets pour les vacances ? » Quelle réponse est la plus adaptée ?", "Oui, j'aimerais aller à la montagne.", [
      "Oui, j'allais à la montagne hier.",
      "Oui, j'ai allé à la montagne.",
      "Oui, je suis montagne.",
    ]),
    mcq("e2-2-t3-c", 3, "Complétez : « Plus tard, je voudrais ___ infirmier. »", "devenir", [
      "devenu",
      "devenirai",
      "suis devenu",
    ]),
    mcq("e2-2-t3-d", 3, "Quelle réponse convient à « Tu vas commencer un nouveau cours ? »", "Oui, je vais commencer lundi.", [
      "Oui, j'ai commencé lundi demain.",
      "Oui, je commençais lundi hier.",
      "Oui, je suis commencé lundi.",
    ]),
    mcq("e2-2-t4-a", 4, "Dans le dialogue, quelle réplique parle d'un projet d'été ?", "Je vais passer deux semaines chez mon oncle.", [
      "J'ai passé deux semaines chez mon oncle.",
      "Je passais deux semaines chez mon oncle hier.",
      "Je suis passé deux semaines chez mon oncle demain.",
    ]),
    mcq("e2-2-t4-b", 4, "Choisissez la meilleure formulation pour un rêve :", "Mon rêve, c'est de devenir médecin.", [
      "Mon rêve, c'était de devenir médecin demain.",
      "Mon rêve, j'ai devenir médecin.",
      "Mon rêve, je suis médecin hier.",
    ]),
    mcq("e2-2-t4-c", 4, "Futur proche ou souhait ? « ___ travailler un peu, puis partir en camping. »", "J'aimerais", [
      "J'ai",
      "J'étais",
      "J'habite",
    ]),
    mcq("e2-2-t5-a", 5, "Repérez la meilleure phrase pour parler d'un projet proche et sûr :", "Cet été, je vais passer deux semaines à Nice.", [
      "Cet été, j'aimerais peut-être éventuellement éventuellement aller quelque part.",
      "Cet été, j'ai passé deux semaines à Nice.",
      "Cet été, je passais deux semaines à Nice demain.",
    ]),
    mcq("e2-2-t5-b", 5, "Quelle formulation est incorrecte ?", "Je vais à voyager cet été.", [
      "Je vais voyager cet été.",
      "J'aimerais voyager cet été.",
      "Je compte voyager cet été.",
    ]),
    mcq("e2-2-t5-c", 5, "Situation : tu expliques tes projets scolaires. Quelle phrase est la plus claire ?", "L'année prochaine, je vais changer d'école. Plus tard, je voudrais devenir infirmier.", [
      "L'année prochaine, j'ai changé d'école. Plus tard, je suis infirmier hier.",
      "L'année prochaine, je changeais d'école. Plus tard, j'ai devenir infirmier.",
      "L'année prochaine, je suis changer d'école. Plus tard, je vais infirmier.",
    ]),
  ],
};

/* ═══════════════════════════════════════════════════════════════════════════
 * E2-3 — Donner son opinion
 * ═══════════════════════════════════════════════════════════════════════════ */

export const EXPRESS_E2_3: CommunicationLesson = {
  id: "E2-3",
  code: "E2.3",
  title: "Donner son opinion",
  theory: [
    { type: "heading", text: "Donner son opinion", black: true },
    {
      type: "plain",
      text: "Pour donner ton avis, commence par une formule claire, puis explique **pourquoi**. Tu peux aussi être d'accord ou pas d'accord avec quelqu'un de façon polie.",
    },
    { type: "highlight", title: "Formules pour donner son avis" },
    {
      type: "section",
      items: [
        "À mon avis, …",
        "Je pense que… / Je trouve que…",
        "Selon moi, …",
        "Pour moi, …",
        "Je suis d'accord. / Je ne suis pas d'accord.",
      ],
    },
    { type: "heading", text: "Justifier son opinion", black: true },
    {
      type: "bullets",
      items: [
        "**parce que** — donner une raison",
        "**car** — expliquer (un peu plus soutenu)",
        "**en effet** — confirmer / développer",
        "**par exemple** — illustrer",
      ],
    },
    {
      type: "table",
      accentHeader: true,
      headers: ["Situation", "Phrase utile"],
      rows: [
        ["Donner un avis", "À mon avis, ce film est intéressant."],
        ["Être d'accord", "Je suis d'accord avec toi."],
        ["Pas d'accord (poli)", "Je comprends, mais je ne suis pas d'accord."],
        ["Nuancer", "Oui, mais d'un autre côté…"],
        ["Demander un avis", "Qu'est-ce que tu en penses ?"],
      ],
    },
    { type: "heading", text: "Exemple de dialogue", black: true },
    {
      type: "dialogue",
      lines: [
        { role: "A", text: "Tu as vu le nouveau film d'animation ?" },
        { role: "B", text: "Oui ! À mon avis, il est super. Les images sont magnifiques." },
        { role: "A", text: "Je trouve aussi. Et l'histoire ?" },
        { role: "B", text: "Je pense que l'histoire est un peu longue, mais elle est touchante." },
        { role: "A", text: "D'accord. Qu'est-ce que tu en penses du personnage principal ?" },
        { role: "B", text: "Selon moi, il est courageux. J'ai beaucoup aimé." },
        { role: "A", text: "Moi aussi. On pourrait le recommander à nos amis." },
      ],
    },
    {
      type: "vocab",
      items: [
        { fr: "à mon avis / selon moi", example: "À mon avis, c'est une bonne idée." },
        { fr: "je pense que / je trouve que", example: "Je trouve que ce livre est facile." },
        { fr: "être d'accord", example: "Je suis d'accord avec toi." },
        { fr: "ne pas être d'accord", example: "Je ne suis pas d'accord." },
        { fr: "parce que / car", example: "J'aime ce sport parce qu'il est amusant." },
        { fr: "qu'est-ce que tu en penses ?", example: "Qu'est-ce que tu en penses de ce projet ?" },
        { fr: "d'un autre côté", example: "D'un autre côté, c'est un peu cher." },
      ],
    },
    {
      type: "note",
      text: "Évite de dire seulement « c'est bien » ou « c'est nul ». Ajoute toujours une raison : « parce que… ».",
    },
  ],
  exerciseCount: 8,
  exercisePool: [
    mcq("e2-3-t1-a", 1, "Quelle formule sert à donner son avis ?", "À mon avis", [
      "Hier",
      "S'il vous plaît",
      "Combien",
    ]),
    mcq("e2-3-t1-b", 1, "Complétez : « Je ___ que ce film est intéressant. »", "pense", [
      "vais",
      "suis",
      "fais",
    ]),
    mcq("e2-3-t1-c", 1, "Pour demander l'avis de quelqu'un, on dit :", "Qu'est-ce que tu en penses ?", [
      "Qu'est-ce que tu as fait hier ?",
      "Où habites-tu ?",
      "Quel âge as-tu ?",
    ]),
    mcq("e2-3-t2-a", 2, "Quelle phrase exprime un désaccord poli ?", "Je comprends, mais je ne suis pas d'accord.", [
      "Tu as tort, c'est nul.",
      "Je suis d'accord complètement.",
      "Je n'ai pas d'avis hier.",
    ]),
    mcq("e2-3-t2-b", 2, "Complétez : « J'aime ce sport ___ il est amusant. »", "parce que", [
      "pendant",
      "avant",
      "où",
    ]),
    mcq("e2-3-t2-c", 2, "Quelle phrase donne une opinion complète ?", "Selon moi, ce livre est facile parce que les phrases sont courtes.", [
      "Selon moi.",
      "Ce livre.",
      "Parce que.",
    ]),
    mcq("e2-3-t2-d", 2, "« Je suis d'accord avec toi » signifie :", "Ton avis me convient.", [
      "Je ne comprends pas.",
      "Je change d'avis demain.",
      "Je n'ai pas d'opinion.",
    ]),
    mcq("e2-3-t3-a", 3, "A : « Ce restaurant est trop cher. » B : « ___ » (nuancer)", "Oui, mais d'un autre côté, la nourriture est excellente.", [
      "Oui, j'ai mangé hier.",
      "Oui, je vais au cinéma.",
      "Oui, j'habite ici.",
    ]),
    mcq("e2-3-t3-b", 3, "A : « Qu'est-ce que tu en penses de ce projet ? » B : « ___ »", "À mon avis, c'est une bonne idée.", [
      "Hier, j'ai fait mes devoirs.",
      "Je vais à l'école.",
      "J'habite à Genève.",
    ]),
    mcq("e2-3-t3-c", 3, "Complétez : « Je trouve aussi. Et l'histoire ? » — réponse adaptée :", "Je pense que l'histoire est un peu longue, mais elle est touchante.", [
      "Je pense que j'habite à Lyon.",
      "Je pense que hier il pleuvait demain.",
      "Je pense que je vais.",
    ]),
    mcq("e2-3-t3-d", 3, "Quelle réponse montre que tu es d'accord ?", "Je trouve aussi. On pourrait le recommander à nos amis.", [
      "Je ne suis pas d'accord du tout, sans raison.",
      "Je n'ai rien vu.",
      "Je suis allé au parc hier.",
    ]),
    mcq("e2-3-t4-a", 4, "Dans un débat, quelle phrase est la plus polie pour contredire ?", "Je comprends ton point de vue, mais je ne suis pas d'accord.", [
      "Tu as complètement tort.",
      "C'est stupide.",
      "Non.",
    ]),
    mcq("e2-3-t4-b", 4, "Choisissez la meilleure structure d'opinion :", "À mon avis, ce film est super parce que les images sont magnifiques.", [
      "À mon avis parce que.",
      "Ce film super images.",
      "Parce que à mon avis magnifiques.",
    ]),
    mcq("e2-3-t4-c", 4, "Quel connecteur illustre une idée ?", "par exemple", [
      "hier",
      "bonjour",
      "combien",
    ]),
    mcq("e2-3-t5-a", 5, "Repérez la phrase la plus convaincante :", "Je pense que ce club est utile car on y parle français tous les jours.", [
      "Je pense que ce club est utile.",
      "Ce club.",
      "Utile parce que.",
    ]),
    mcq("e2-3-t5-b", 5, "Quelle formulation est incorrecte ?", "Je suis d'accord que toi.", [
      "Je suis d'accord avec toi.",
      "À mon avis, tu as raison.",
      "Je ne suis pas d'accord.",
    ]),
    mcq("e2-3-t5-c", 5, "Situation : un ami dit que les devoirs sont inutiles. Quelle réponse est la meilleure ?", "Je comprends, mais selon moi ils sont utiles parce qu'ils aident à progresser.", [
      "Tu as tort, c'est nul ce que tu dis.",
      "Je suis d'accord hier.",
      "Les devoirs j'ai fait.",
    ]),
  ],
};

/* ═══════════════════════════════════════════════════════════════════════════
 * E2-4 — Demander et donner des informations
 * ═══════════════════════════════════════════════════════════════════════════ */

export const EXPRESS_E2_4: CommunicationLesson = {
  id: "E2-4",
  code: "E2.4",
  title: "Demander et donner des informations",
  theory: [
    { type: "heading", text: "Demander et donner des informations", black: true },
    {
      type: "plain",
      text: "Pour obtenir une information, on pose une **question claire**. Pour répondre, on donne l'essentiel : le lieu, l'heure, le prix, le chemin, etc. On reste poli avec **s'il te plaît** / **s'il vous plaît**.",
    },
    { type: "highlight", title: "Questions utiles" },
    {
      type: "section",
      items: [
        "Où se trouve… ? / Où est… ?",
        "À quelle heure… ?",
        "Combien ça coûte ?",
        "Comment aller à… ?",
        "Est-ce que vous avez… ?",
        "Pouvez-vous m'indiquer… ?",
      ],
    },
    { type: "heading", text: "Répondre clairement", black: true },
    {
      type: "bullets",
      items: [
        "**C'est à gauche / à droite / tout droit.**",
        "**C'est ouvert de… à…**",
        "**Ça coûte… euros.**",
        "**Il faut prendre le bus / le tram…**",
        "**Je ne sais pas, désolé(e).** — si tu ne connais pas la réponse",
      ],
    },
    {
      type: "table",
      accentHeader: true,
      headers: ["Question", "Réponse possible"],
      rows: [
        ["Où est la bibliothèque ?", "Elle est au bout de la rue, à gauche."],
        ["À quelle heure ouvre le magasin ?", "Il ouvre à 9 heures."],
        ["Combien coûte ce billet ?", "Il coûte 12 euros."],
        ["Comment aller à la gare ?", "Prenez le tram numéro 3 jusqu'au centre."],
        ["Vous avez une carte de la ville ?", "Oui, tenez. / Non, désolé(e)."],
      ],
    },
    { type: "heading", text: "Exemple de dialogue", black: true },
    {
      type: "dialogue",
      lines: [
        { role: "A", text: "Pardon, vous pouvez m'aider ?" },
        { role: "B", text: "Oui, bien sûr. Qu'est-ce que vous cherchez ?" },
        { role: "A", text: "Où se trouve la poste, s'il vous plaît ?" },
        { role: "B", text: "Allez tout droit, puis tournez à droite. Elle est en face du café." },
        { role: "A", text: "Et elle est ouverte maintenant ?" },
        { role: "B", text: "Oui, jusqu'à 18 heures." },
        { role: "A", text: "Merci beaucoup !" },
        { role: "B", text: "Je vous en prie." },
      ],
    },
    {
      type: "vocab",
      items: [
        { fr: "où se trouve… ?", example: "Où se trouve la gare ?" },
        { fr: "à quelle heure… ?", example: "À quelle heure commence le cours ?" },
        { fr: "combien ça coûte ?", example: "Combien ça coûte, ce livre ?" },
        { fr: "tout droit / à gauche / à droite", example: "Allez tout droit, puis à gauche." },
        { fr: "en face de / à côté de", example: "La poste est en face du café." },
        { fr: "s'il vous plaît / merci", example: "Pouvez-vous m'indiquer le chemin, s'il vous plaît ?" },
        { fr: "je vous en prie", example: "— Merci ! — Je vous en prie." },
        { fr: "désolé(e), je ne sais pas", example: "Désolé, je ne connais pas ce quartier." },
      ],
    },
    {
      type: "note",
      text: "Avec une personne inconnue, utilise **vous**. Avec un ami, tu peux utiliser **tu**.",
    },
  ],
  exerciseCount: 8,
  exercisePool: [
    mcq("e2-4-t1-a", 1, "Pour demander un lieu, on dit souvent :", "Où se trouve… ?", [
      "Combien coûte… ?",
      "Quel âge… ?",
      "Comment t'appelles-tu ?",
    ]),
    mcq("e2-4-t1-b", 1, "« Combien ça coûte ? » sert à demander :", "le prix", [
      "l'heure",
      "le chemin",
      "le nom",
    ]),
    mcq("e2-4-t1-c", 1, "Pour être poli avec un inconnu, on ajoute :", "s'il vous plaît", [
      "hier",
      "parce que",
      "à mon avis",
    ]),
    mcq("e2-4-t2-a", 2, "Quelle réponse indique une direction ?", "Allez tout droit, puis tournez à droite.", [
      "Il coûte 12 euros.",
      "Il ouvre à 9 heures.",
      "Je m'appelle Marc.",
    ]),
    mcq("e2-4-t2-b", 2, "Complétez : « La poste est ___ du café. »", "en face", [
      "parce que",
      "combien",
      "hier",
    ]),
    mcq("e2-4-t2-c", 2, "Quelle question demande l'horaire ?", "À quelle heure ouvre le magasin ?", [
      "Où habites-tu ?",
      "Combien ça coûte ?",
      "Comment tu t'appelles ?",
    ]),
    mcq("e2-4-t2-d", 2, "Réponse correcte à « Merci beaucoup ! » :", "Je vous en prie.", [
      "À mon avis.",
      "Combien ?",
      "Hier soir.",
    ]),
    mcq("e2-4-t3-a", 3, "A : « Où est la bibliothèque ? » B : « ___ »", "Elle est au bout de la rue, à gauche.", [
      "Elle coûte 12 euros.",
      "Elle ouvre parce que.",
      "Elle s'appelle Marie.",
    ]),
    mcq("e2-4-t3-b", 3, "A : « Comment aller à la gare ? » B : « ___ »", "Prenez le tram numéro 3 jusqu'au centre.", [
      "Je pense que le film est bien.",
      "J'ai mangé une pizza hier.",
      "Je vais voyager cet été.",
    ]),
    mcq("e2-4-t3-c", 3, "A : « Elle est ouverte maintenant ? » B : « ___ »", "Oui, jusqu'à 18 heures.", [
      "Oui, j'habite à Lyon.",
      "Oui, ça coûte cher.",
      "Oui, je suis d'accord.",
    ]),
    mcq("e2-4-t3-d", 3, "Tu ne connais pas la réponse. Que dis-tu ?", "Désolé(e), je ne sais pas.", [
      "Allez tout droit.",
      "Ça coûte 10 euros.",
      "À mon avis, c'est bien.",
    ]),
    mcq("e2-4-t4-a", 4, "Dans le dialogue, quelle question est la plus polie ?", "Pardon, vous pouvez m'aider ?", [
      "Dis-moi où c'est !",
      "Où poste ?",
      "Tu sais ou quoi ?",
    ]),
    mcq("e2-4-t4-b", 4, "Registre : tu parles à un agent d'accueil. Quelle forme est correcte ?", "Pouvez-vous m'indiquer la sortie, s'il vous plaît ?", [
      "Tu peux me dire la sortie ?",
      "Dis-moi la sortie maintenant.",
      "La sortie où ?",
    ]),
    mcq("e2-4-t4-c", 4, "Quelle réponse donne une information complète ?", "Le magasin ouvre à 9 heures et ferme à 19 heures.", [
      "Le magasin.",
      "Oui.",
      "À heures.",
    ]),
    mcq("e2-4-t5-a", 5, "Repérez l'erreur : « Où se trouve la gare, s'il te plaît ? » (tu parles à un inconnu adulte)", "Il faut dire « s'il vous plaît » avec vous.", [
      "Il ne faut jamais dire « s'il vous plaît ».",
      "On ne demande jamais où est la gare.",
      "« Où se trouve » est incorrect.",
    ]),
    mcq("e2-4-t5-b", 5, "Quelle formulation est la meilleure pour demander le prix d'un billet ?", "Combien coûte ce billet, s'il vous plaît ?", [
      "Le billet combien tu ?",
      "Prix billet maintenant.",
      "Ça coûte le billet où ?",
    ]),
    mcq("e2-4-t5-c", 5, "Situation : quelqu'un te demande le chemin de la poste. Quelle réponse est la plus claire ?", "Allez tout droit, puis tournez à droite. Elle est en face du café.", [
      "C'est là-bas quelque part.",
      "Je ne sais pas, allez tout droit à gauche à droite peut-être.",
      "La poste oui.",
    ]),
  ],
};

/* ═══════════════════════════════════════════════════════════════════════════
 * E2-5 — Exprimer ses sentiments
 * ═══════════════════════════════════════════════════════════════════════════ */

export const EXPRESS_E2_5: CommunicationLesson = {
  id: "E2-5",
  code: "E2.5",
  title: "Exprimer ses sentiments",
  theory: [
    { type: "heading", text: "Exprimer ses sentiments", black: true },
    {
      type: "plain",
      text: "Pour parler de ce que tu ressens, on utilise **être + adjectif** (je suis content) ou des verbes comme **avoir peur**, **avoir envie**, **se sentir**. On peut aussi expliquer la cause avec **parce que**.",
    },
    { type: "highlight", title: "Sentiments positifs" },
    {
      type: "section",
      items: [
        "Je suis content(e) / heureux(se) / ravi(e).",
        "Je suis fier / fière de…",
        "J'ai hâte de…",
        "Ça me fait plaisir.",
      ],
    },
    { type: "highlight", title: "Sentiments négatifs ou mixtes" },
    {
      type: "section",
      items: [
        "Je suis triste / déçu(e) / inquiet(ète).",
        "J'ai peur de… / J'ai honte de…",
        "Je suis fatigué(e) / stressé(e).",
        "Ça m'énerve. / Je suis en colère.",
      ],
    },
    { type: "heading", text: "Parler de ses émotions", black: true },
    {
      type: "bullets",
      items: [
        "**Je me sens…** — décrire son état",
        "**Ça me…** — réaction (ça me plaît, ça m'inquiète)",
        "**J'ai envie de…** — désir",
        "**Je n'ai pas envie de…** — refus doux",
      ],
    },
    {
      type: "table",
      accentHeader: true,
      headers: ["Question", "Réponse possible"],
      rows: [
        ["Comment tu te sens ?", "Je me sens un peu stressé(e) aujourd'hui."],
        ["Tu es content(e) ?", "Oui, je suis ravi(e) parce que j'ai réussi mon test."],
        ["Qu'est-ce qui ne va pas ?", "Je suis déçu(e) : mon match est annulé."],
        ["Tu as peur ?", "Un peu. J'ai peur de parler devant la classe."],
      ],
    },
    { type: "heading", text: "Exemple de dialogue", black: true },
    {
      type: "dialogue",
      lines: [
        { role: "A", text: "Tu as l'air fatigué. Ça va ?" },
        { role: "B", text: "Pas vraiment. Je suis un peu stressé à cause de l'examen." },
        { role: "A", text: "Je comprends. Tu as peur d'échouer ?" },
        { role: "B", text: "Oui… Mais j'ai aussi hâte que ce soit fini !" },
        { role: "A", text: "Tu vas y arriver. Et après, tu seras soulagé." },
        { role: "B", text: "Merci. Ça me fait plaisir que tu sois là." },
        { role: "A", text: "Bien sûr ! On révise ensemble si tu veux." },
      ],
    },
    {
      type: "vocab",
      items: [
        { fr: "être content(e) / triste", example: "Je suis content de te voir." },
        { fr: "se sentir", example: "Je me sens bien aujourd'hui." },
        { fr: "avoir peur / avoir hâte", example: "J'ai hâte de partir en vacances." },
        { fr: "être déçu(e) / fier(ère)", example: "Je suis fier de mon travail." },
        { fr: "ça me fait plaisir", example: "Ça me fait plaisir de t'aider." },
        { fr: "à cause de / grâce à", example: "Je suis stressé à cause de l'examen." },
        { fr: "être soulagé(e)", example: "Quand c'est fini, je serai soulagé." },
      ],
    },
    {
      type: "note",
      text: "Accorde l'adjectif : **je suis content** (garçon) / **je suis contente** (fille). Avec « se sentir », on dit **je me sens**, **tu te sens**, **il/elle se sent**.",
    },
  ],
  exerciseCount: 8,
  exercisePool: [
    mcq("e2-5-t1-a", 1, "Quelle phrase exprime un sentiment positif ?", "Je suis content(e).", [
      "Je suis triste.",
      "J'ai peur.",
      "Je suis en colère.",
    ]),
    mcq("e2-5-t1-b", 1, "Complétez : « Je ___ fatigué aujourd'hui. »", "suis", [
      "ai",
      "vais",
      "fais",
    ]),
    mcq("e2-5-t1-c", 1, "« J'ai hâte de… » signifie :", "J'attends ça avec impatience.", [
      "J'ai peur de ça.",
      "Je suis en colère.",
      "Je suis triste.",
    ]),
    mcq("e2-5-t2-a", 2, "Quelle phrase utilise correctement « se sentir » ?", "Je me sens un peu stressé(e).", [
      "Je suis me sens stressé(e).",
      "J'ai me sens stressé(e).",
      "Je se sens stressé(e).",
    ]),
    mcq("e2-5-t2-b", 2, "Complétez : « J'ai peur ___ parler devant la classe. »", "de", [
      "à",
      "pour",
      "avec",
    ]),
    mcq("e2-5-t2-c", 2, "Quelle phrase exprime la déception ?", "Je suis déçu(e) : mon match est annulé.", [
      "Je suis ravi(e) : mon match est annulé.",
      "J'ai hâte que mon match soit annulé.",
      "Ça me fait plaisir que mon match soit annulé.",
    ]),
    mcq("e2-5-t2-d", 2, "« Ça me fait plaisir » exprime :", "un sentiment positif", [
      "la colère",
      "la peur",
      "la tristesse",
    ]),
    mcq("e2-5-t3-a", 3, "A : « Comment tu te sens ? » B : « ___ »", "Je me sens un peu stressé(e) aujourd'hui.", [
      "Je vais à la bibliothèque.",
      "J'habite à Genève.",
      "Je pense que le film est bien.",
    ]),
    mcq("e2-5-t3-b", 3, "A : « Tu es content(e) ? » B : « ___ »", "Oui, je suis ravi(e) parce que j'ai réussi mon test.", [
      "Oui, j'ai peur parce que j'ai réussi mon test.",
      "Oui, je suis en colère parce que j'ai réussi mon test.",
      "Oui, je suis triste parce que j'ai réussi mon test.",
    ]),
    mcq("e2-5-t3-c", 3, "A : « Tu as l'air fatigué. Ça va ? » B : « ___ »", "Pas vraiment. Je suis un peu stressé à cause de l'examen.", [
      "Oui, j'habite ici.",
      "Oui, ça coûte 10 euros.",
      "Oui, allez tout droit.",
    ]),
    mcq("e2-5-t3-d", 3, "Quelle réponse montre du soutien ?", "Tu vas y arriver. On révise ensemble si tu veux.", [
      "Ce n'est pas mon problème.",
      "Tu as tort d'avoir peur.",
      "Je ne sais pas où est la poste.",
    ]),
    mcq("e2-5-t4-a", 4, "Choisissez la bonne cause : « Je suis stressé ___ l'examen. »", "à cause de", [
      "grâce à",
      "en face de",
      "à côté de",
    ]),
    mcq("e2-5-t4-b", 4, "Accord : une fille dit…", "Je suis contente.", [
      "Je suis content.",
      "Je suis contents.",
      "Je suis contentes.",
    ]),
    mcq("e2-5-t4-c", 4, "Dans le dialogue, quelle phrase exprime à la fois peur et impatience ?", "Oui… Mais j'ai aussi hâte que ce soit fini !", [
      "Je vais à Nice cet été.",
      "La poste est en face du café.",
      "À mon avis, c'est intéressant.",
    ]),
    mcq("e2-5-t5-a", 5, "Repérez la formulation incorrecte :", "Je suis peur de l'examen.", [
      "J'ai peur de l'examen.",
      "Je suis stressé à cause de l'examen.",
      "Je me sens inquiet avant l'examen.",
    ]),
    mcq("e2-5-t5-b", 5, "Quelle phrase exprime le mieux un soulagement futur ?", "Quand l'examen sera fini, je serai soulagé(e).", [
      "Quand l'examen sera fini, j'ai peur.",
      "Quand l'examen sera fini, je suis en colère hier.",
      "Quand l'examen sera fini, j'avais hâte demain.",
    ]),
    mcq("e2-5-t5-c", 5, "Situation : un ami est triste. Quelle réaction est la plus adaptée ?", "Je comprends. Qu'est-ce qui ne va pas ? Je suis là si tu veux parler.", [
      "Ce n'est rien, arrête.",
      "Moi aussi j'habite à Lyon.",
      "Combien ça coûte ?",
    ]),
  ],
};

/** Toutes les leçons Expression orale — module E2 (Moyen). */
export const EXPRESS_E2_LESSONS: CommunicationLesson[] = [
  EXPRESS_E2_1,
  EXPRESS_E2_2,
  EXPRESS_E2_3,
  EXPRESS_E2_4,
  EXPRESS_E2_5,
];
