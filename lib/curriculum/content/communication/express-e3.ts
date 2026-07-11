import { mcq, type CommunicationLesson } from "./express-types";

/** E3-1 — Argumenter et convaincre */
export const EXPRESS_E3_1: CommunicationLesson = {
  id: "E3-1",
  code: "E3.1",
  title: "Argumenter et convaincre",
  theory: [
    { type: "heading", text: "Argumenter et convaincre", black: true },
    {
      type: "plain",
      text: "À l'oral, argumenter, c'est défendre une opinion avec des raisons claires. Convaincre, c'est amener l'autre à partager votre point de vue, sans l'agresser.",
    },
    { type: "highlight", title: "Les trois étapes d'une argumentation" },
    {
      type: "section",
      items: [
        "1. Annoncer son avis : « À mon avis… », « Je pense que… »",
        "2. Donner des arguments : raisons, exemples, faits.",
        "3. Conclure ou proposer une solution.",
      ],
    },
    { type: "highlight", title: "Exprimer son opinion" },
    {
      type: "table",
      accentHeader: true,
      headers: ["Intention", "Formules utiles"],
      rows: [
        ["Donner son avis", "À mon avis… / Selon moi… / Je trouve que…"],
        ["Être d'accord", "Je suis d'accord. / Tout à fait. / Exactement."],
        ["Nuancer", "Oui, mais… / En partie. / Cela dépend."],
        ["Pas d'accord", "Je ne suis pas d'accord. / Au contraire…"],
        ["Convaincre", "Il faudrait… / On devrait… / N'oublions pas que…"],
      ],
    },
    { type: "highlight", title: "Connecteurs pour enchaîner" },
    {
      type: "bullets",
      items: [
        "Ajouter : de plus, en outre, également",
        "Expliquer : parce que, car, en effet, puisque",
        "Illustrer : par exemple, notamment, ainsi",
        "Opposer : cependant, pourtant, en revanche",
        "Conclure : donc, par conséquent, en conclusion",
      ],
    },
    { type: "highlight", title: "Exemple de dialogue" },
    {
      type: "dialogue",
      lines: [
        {
          role: "A",
          text: "Tu penses qu'il faut interdire les voitures en centre-ville ?",
        },
        {
          role: "B",
          text: "À mon avis, oui. D'abord, l'air serait moins pollué. Ensuite, les rues seraient plus sûres pour les piétons.",
        },
        {
          role: "A",
          text: "Oui, mais les commerçants auraient moins de clients, non ?",
        },
        {
          role: "B",
          text: "Pas forcément. On pourrait améliorer les transports publics. En conclusion, c'est une bonne idée si on propose des alternatives.",
        },
      ],
    },
    {
      type: "vocab",
      items: [
        { fr: "un argument", example: "Son meilleur argument, c'est le coût." },
        { fr: "convaincre", example: "Elle a réussi à me convaincre." },
        { fr: "nuancer", example: "Il faut nuancer : ce n'est pas si simple." },
        { fr: "un point de vue", example: "Chacun a son point de vue." },
        { fr: "une objection", example: "J'ai une objection : et le budget ?" },
        { fr: "par conséquent", example: "Il pleut ; par conséquent, on reste." },
      ],
    },
    {
      type: "note",
      text: "Pour convaincre, restez calme, écoutez l'autre et répondez à ses objections avec des exemples concrets.",
    },
  ],
  exercisePool: [
    mcq(
      "e3-1-01",
      1,
      "Quelle formule sert à donner son avis ?",
      "À mon avis, c'est une bonne idée.",
      [
        "Quelle heure est-il ?",
        "Où habitez-vous ?",
        "Combien ça coûte ?",
      ],
    ),
    mcq(
      "e3-1-02",
      1,
      "Quel connecteur ajoute une idée ?",
      "De plus",
      ["Parce que", "Pourtant", "Donc"],
    ),
    mcq(
      "e3-1-03",
      1,
      "Pour dire qu'on n'est pas d'accord, on peut dire :",
      "Je ne suis pas d'accord.",
      [
        "Je m'appelle Paul.",
        "J'habite à Genève.",
        "Bonne journée !",
      ],
    ),
    mcq(
      "e3-1-04",
      2,
      "Quel connecteur introduit une explication ?",
      "Parce que",
      ["Ensuite", "Enfin", "Aussi"],
    ),
    mcq(
      "e3-1-05",
      2,
      "« Par exemple » sert à :",
      "Illustrer une idée avec un cas concret.",
      [
        "Saluer quelqu'un.",
        "Demander l'heure.",
        "Refuser une invitation.",
      ],
    ),
    mcq(
      "e3-1-06",
      2,
      "Quelle phrase conclut une argumentation ?",
      "En conclusion, je pense qu'il faut agir maintenant.",
      [
        "Bonjour, comment allez-vous ?",
        "Où se trouve la gare ?",
        "Je voudrais un café, s'il vous plaît.",
      ],
    ),
    mcq(
      "e3-1-07",
      3,
      "On vous dit : « Les réseaux sociaux font perdre du temps. » Quelle réponse argumente le mieux ?",
      "Je suis d'accord en partie, car on peut aussi y trouver des informations utiles.",
      [
        "Oui.",
        "Je m'appelle Sara.",
        "Il fait beau aujourd'hui.",
      ],
    ),
    mcq(
      "e3-1-08",
      3,
      "Votre ami dit : « Le sport n'est pas important. » Quelle réponse convient ?",
      "Au contraire, le sport aide à rester en bonne santé et à se sentir mieux.",
      [
        "À demain !",
        "Quel est ton numéro ?",
        "Je prends le bus.",
      ],
    ),
    mcq(
      "e3-1-09",
      3,
      "On vous demande votre avis sur les transports publics. Quelle réponse est la plus complète ?",
      "Selon moi, ils sont utiles parce qu'ils coûtent moins cher et polluent moins.",
      [
        "Oui, peut-être.",
        "Je ne sais pas.",
        "C'est comme ça.",
      ],
    ),
    mcq(
      "e3-1-10",
      4,
      "Quel connecteur marque le mieux une opposition ?",
      "Cependant",
      ["En effet", "Ainsi", "Également"],
    ),
    mcq(
      "e3-1-11",
      4,
      "Dans un débat formel, quelle formulation est la plus adaptée ?",
      "Je comprends votre point de vue ; toutefois, je ne le partage pas entièrement.",
      [
        "T'as complètement tort, c'est n'importe quoi !",
        "Bof, on s'en fiche.",
        "Arrête de parler.",
      ],
    ),
    mcq(
      "e3-1-12",
      4,
      "Quelle phrase utilise correctement « puisque » ?",
      "Puisque le train est en retard, nous prendrons le bus.",
      [
        "Puisque je vais au cinéma demain soir.",
        "Puisque bonjour, comment ça va ?",
        "Puisque le pain, s'il vous plaît.",
      ],
    ),
    mcq(
      "e3-1-13",
      5,
      "Quelle formulation argumente le mieux pour convaincre une mairie d'installer plus de pistes cyclables ?",
      "Les pistes cyclables réduiraient la pollution et amélioreraient la sécurité ; par conséquent, c'est un investissement utile.",
      [
        "Les vélos, c'est cool.",
        "Il faut des pistes, point final.",
        "Moi, j'aime le vélo.",
      ],
    ),
    mcq(
      "e3-1-14",
      5,
      "Repérez la phrase la plus convaincante (avis + raison + exemple).",
      "Je pense qu'il faut limiter le téléphone à table, car cela favorise la conversation : par exemple, chez nous, le dîner est plus agréable sans écran.",
      [
        "Le téléphone, non.",
        "Je n'aime pas les téléphones.",
        "Les gens regardent trop leur téléphone.",
      ],
    ),
    mcq(
      "e3-1-15",
      5,
      "Quelle phrase contient une erreur de logique argumentative ?",
      "Je suis contre les examens parce que j'aime le chocolat.",
      [
        "Je suis contre les examens trop fréquents, car ils stressent les élèves sans toujours mesurer leurs progrès.",
        "Les examens peuvent être utiles s'ils aident à identifier les difficultés.",
        "Selon moi, il faudrait moins d'examens et plus d'évaluation continue.",
      ],
    ),
    mcq(
      "e3-1-16",
      5,
      "Quelle réponse traite le mieux une objection ?",
      "Vous avez raison de parler du coût ; cependant, à long terme, cela permettrait d'économiser sur les soins de santé.",
      [
        "Non.",
        "Ce n'est pas mon problème.",
        "Vous dites n'importe quoi.",
      ],
    ),
    mcq(
      "e3-1-17",
      3,
      "Complétez : « Le télétravail a des avantages. ____, il faut un bon espace de travail à la maison. »",
      "Cependant",
      ["Bonjour", "Combien", "Où"],
    ),
    mcq(
      "e3-1-18",
      4,
      "Quelle expression invite l'autre à réfléchir sans l'attaquer ?",
      "N'oublions pas que tout le monde n'a pas les mêmes moyens.",
      [
        "Tu ne comprends rien.",
        "C'est idiot ce que tu dis.",
        "Ferme-la.",
      ],
    ),
  ],
  exerciseCount: 8,
};

/** E3-2 — Décrire des expériences */
export const EXPRESS_E3_2: CommunicationLesson = {
  id: "E3-2",
  code: "E3.2",
  title: "Décrire des expériences",
  theory: [
    { type: "heading", text: "Décrire des expériences", black: true },
    {
      type: "plain",
      text: "Raconter une expérience, c'est faire vivre un moment passé à l'autre : le contexte, les événements, les émotions et le bilan.",
    },
    { type: "highlight", title: "Structure d'un récit oral" },
    {
      type: "section",
      items: [
        "1. Situer : quand, où, avec qui ?",
        "2. Décrire le déroulement : d'abord, ensuite, puis, enfin.",
        "3. Exprimer ses sentiments : j'étais content(e), inquiet(ète), surpris(e)…",
        "4. Faire un bilan : j'ai appris que… / Si c'était à refaire…",
      ],
    },
    { type: "highlight", title: "Temps utiles" },
    {
      type: "table",
      accentHeader: true,
      headers: ["Temps", "Usage", "Exemple"],
      rows: [
        ["Passé composé", "Actions terminées", "J'ai rencontré un ami."],
        ["Imparfait", "Contexte, habitude, description", "Il faisait beau. / Je travaillais là-bas."],
        ["Plus-que-parfait", "Action antérieure", "J'avais déjà réservé."],
        ["Présent", "Commentaire / bilan", "Aujourd'hui, je pense que…"],
      ],
    },
    { type: "highlight", title: "Connecteurs de récit" },
    {
      type: "bullets",
      items: [
        "Ordre : d'abord, ensuite, puis, après, enfin",
        "Temps : un jour, soudain, pendant que, lorsque",
        "Cause / conséquence : comme, donc, c'est pourquoi",
        "Émotion : heureusement, malheureusement, à ma grande surprise",
      ],
    },
    { type: "highlight", title: "Exemple de dialogue" },
    {
      type: "dialogue",
      lines: [
        { role: "A", text: "Tu m'as dit que tu avais changé de travail. Comment ça s'est passé ?" },
        {
          role: "B",
          text: "L'année dernière, je travaillais dans un magasin. Un jour, j'ai vu une annonce pour un poste d'assistant administratif.",
        },
        { role: "A", text: "Tu étais stressé pour l'entretien ?" },
        {
          role: "B",
          text: "Oui, un peu. Heureusement, j'avais préparé des exemples. Finalement, j'ai été pris. J'ai appris qu'il fallait oser postuler.",
        },
      ],
    },
    {
      type: "vocab",
      items: [
        { fr: "une expérience", example: "C'était une expérience enrichissante." },
        { fr: "se souvenir de", example: "Je me souviens de ce voyage." },
        { fr: "ressentir", example: "J'ai ressenti beaucoup de joie." },
        { fr: "un défi", example: "Apprendre le français était un vrai défi." },
        { fr: "enrichissant", example: "Ce stage a été enrichissant." },
        { fr: "si c'était à refaire", example: "Si c'était à refaire, je partirais plus tôt." },
      ],
    },
    {
      type: "note",
      text: "Alternez imparfait (décor) et passé composé (actions) pour rendre le récit vivant et clair.",
    },
  ],
  exercisePool: [
    mcq(
      "e3-2-01",
      1,
      "Quel mot introduit souvent le début d'un récit ?",
      "D'abord",
      ["Combien", "Où", "Qui"],
    ),
    mcq(
      "e3-2-02",
      1,
      "Pour situer une expérience dans le temps, on peut dire :",
      "L'année dernière, j'ai déménagé.",
      [
        "Je voudrais un café.",
        "Comment vous appelez-vous ?",
        "À quelle heure ferme le magasin ?",
      ],
    ),
    mcq(
      "e3-2-03",
      1,
      "Quel connecteur marque la fin d'un récit ?",
      "Enfin",
      ["Soudain", "Pendant", "Comme"],
    ),
    mcq(
      "e3-2-04",
      2,
      "Quel temps décrit souvent le contexte (le temps qu'il faisait, une habitude) ?",
      "L'imparfait",
      ["Le futur simple", "L'impératif", "Le conditionnel"],
    ),
    mcq(
      "e3-2-05",
      2,
      "Quelle phrase exprime une émotion dans un récit ?",
      "J'étais très inquiet avant l'examen.",
      [
        "Le bus part à huit heures.",
        "Où est la bibliothèque ?",
        "Je m'appelle Nadia.",
      ],
    ),
    mcq(
      "e3-2-06",
      2,
      "« Heureusement » sert à :",
      "Souligner un aspect positif de l'expérience.",
      [
        "Demander une adresse.",
        "Compter de l'argent.",
        "Saluer formellement.",
      ],
    ),
    mcq(
      "e3-2-07",
      3,
      "On vous demande : « Comment s'est passé ton premier jour de travail ? » Quelle réponse est la plus riche ?",
      "Au début, j'étais nerveux, puis mes collègues m'ont aidé ; finalement, j'ai passé une bonne journée.",
      ["Oui.", "C'était bien.", "Je travaille."],
    ),
    mcq(
      "e3-2-08",
      3,
      "Complétez : « Il ____ beau quand nous sommes arrivés. »",
      "faisait",
      ["a fait", "fera", "faire"],
    ),
    mcq(
      "e3-2-09",
      3,
      "Quelle phrase fait un bilan d'expérience ?",
      "J'ai appris qu'il fallait mieux préparer mon voyage.",
      [
        "Où habites-tu ?",
        "Tu veux un thé ?",
        "Le train est à l'heure.",
      ],
    ),
    mcq(
      "e3-2-10",
      4,
      "Quelle phrase combine correctement imparfait et passé composé ?",
      "Je marchais dans la rue quand j'ai vu un accident.",
      [
        "Je marche dans la rue quand j'ai vu un accident.",
        "Je marchais dans la rue quand je vois un accident.",
        "Je vais marcher dans la rue quand j'ai vu un accident.",
      ],
    ),
    mcq(
      "e3-2-11",
      4,
      "Quel connecteur convient le mieux ? « ____, le courant a été coupé. »",
      "Soudain",
      ["De plus", "En conclusion", "Également"],
    ),
    mcq(
      "e3-2-12",
      4,
      "Quelle formulation est la plus naturelle pour un récit oral élaboré ?",
      "Comme je n'avais pas réservé, j'ai dû attendre longtemps.",
      [
        "Pas réservé, attendre longtemps.",
        "Moi attendre car pas réservation.",
        "Longtemps j'attends parce que non.",
      ],
    ),
    mcq(
      "e3-2-13",
      5,
      "Quelle version raconte le mieux une expérience de bénévolat ?",
      "L'été dernier, je faisais du bénévolat dans une association. Au début, j'avais peur de mal m'exprimer, puis j'ai gagné en confiance. Aujourd'hui, je suis fier de cette expérience.",
      [
        "Bénévolat été. Peur. Confiance. Fier.",
        "J'aime le bénévolat.",
        "Le bénévolat existe.",
      ],
    ),
    mcq(
      "e3-2-14",
      5,
      "Repérez la meilleure formulation pour exprimer un regret.",
      "Si c'était à refaire, je poserais plus de questions pendant la formation.",
      [
        "Je refais questions formation.",
        "Questions plus, formation avant.",
        "Formation questions je.",
      ],
    ),
    mcq(
      "e3-2-15",
      5,
      "Quelle phrase contient une incohérence temporelle ?",
      "Hier, je vais au marché et j'achète des fruits.",
      [
        "Hier, je suis allé au marché et j'ai acheté des fruits.",
        "Hier, pendant que je faisais les courses, j'ai rencontré un voisin.",
        "Hier, il pleuvait quand je suis sorti.",
      ],
    ),
    mcq(
      "e3-2-16",
      5,
      "Quelle conclusion d'expérience est la plus pertinente ?",
      "Cette expérience m'a montré l'importance de demander de l'aide quand on ne comprend pas.",
      [
        "Voilà.",
        "C'est tout.",
        "Fin.",
      ],
    ),
    mcq(
      "e3-2-17",
      3,
      "On vous dit : « Tu as déjà voyagé seul ? » Quelle réponse développe l'expérience ?",
      "Oui, l'année dernière. Au début, c'était stressant, mais j'ai appris à m'organiser et j'ai rencontré des gens intéressants.",
      ["Oui.", "Non.", "Peut-être."],
    ),
    mcq(
      "e3-2-18",
      4,
      "Quel mot convient ? « À ma grande ____, le test était plus facile que prévu. »",
      "surprise",
      ["adresse", "heure", "couleur"],
    ),
  ],
  exerciseCount: 8,
};

/** E3-3 — Donner des conseils */
export const EXPRESS_E3_3: CommunicationLesson = {
  id: "E3-3",
  code: "E3.3",
  title: "Donner des conseils",
  theory: [
    { type: "heading", text: "Donner des conseils", black: true },
    {
      type: "plain",
      text: "Donner un conseil, c'est proposer une solution utile tout en respectant la personne. Le ton et le registre comptent autant que le contenu.",
    },
    { type: "highlight", title: "Formules pour conseiller" },
    {
      type: "table",
      accentHeader: true,
      headers: ["Niveau", "Formules"],
      rows: [
        ["Doux / poli", "Tu pourrais… / Vous pourriez… / Si j'étais toi…"],
        ["Neutre", "Je te conseille de… / Il vaut mieux…"],
        ["Plus fort", "Tu devrais… / Il faut que tu… (+ subjonctif)"],
        ["Mise en garde", "Attention à… / Évite de… / Fais attention…"],
      ],
    },
    { type: "highlight", title: "Structures utiles" },
    {
      type: "bullets",
      items: [
        "Conditionnel : Tu pourrais prendre des notes.",
        "Impératif : Essaie de dormir davantage.",
        "Il vaut mieux + infinitif : Il vaut mieux arriver tôt.",
        "Si + imparfait : Si j'étais toi, je demanderais de l'aide.",
        "Pourquoi ne pas… ? : Pourquoi ne pas en parler au professeur ?",
      ],
    },
    { type: "highlight", title: "Conseiller sans juger" },
    {
      type: "section",
      items: [
        "Écoutez d'abord le problème.",
        "Proposez une ou deux pistes concrètes.",
        "Expliquez brièvement pourquoi.",
        "Laissez à l'autre le choix final.",
      ],
    },
    { type: "highlight", title: "Exemple de dialogue" },
    {
      type: "dialogue",
      lines: [
        { role: "A", text: "J'ai du mal à mémoriser le vocabulaire. Tu as un conseil ?" },
        {
          role: "B",
          text: "Tu pourrais réviser un peu chaque jour plutôt qu'une seule fois par semaine.",
        },
        { role: "A", text: "Oui, mais je manque de temps le soir." },
        {
          role: "B",
          text: "Dans ce cas, pourquoi ne pas utiliser les trajets en bus ? Dix minutes suffisent. Si j'étais toi, j'essaierais pendant une semaine.",
        },
      ],
    },
    {
      type: "vocab",
      items: [
        { fr: "conseiller", example: "Je te conseille de te reposer." },
        { fr: "recommander", example: "Je recommande ce livre." },
        { fr: "éviter de", example: "Évite de te coucher trop tard." },
        { fr: "il vaut mieux", example: "Il vaut mieux vérifier deux fois." },
        { fr: "une piste", example: "Voici une piste pour progresser." },
        { fr: "prendre en compte", example: "Il faut prendre en compte ton emploi du temps." },
      ],
    },
    {
      type: "note",
      text: "Avec quelqu'un qu'on connaît peu, préférez le conditionnel (« vous pourriez… ») : c'est plus poli qu'un ordre.",
    },
  ],
  exercisePool: [
    mcq(
      "e3-3-01",
      1,
      "Quelle phrase donne un conseil ?",
      "Tu devrais te reposer.",
      [
        "Quelle heure est-il ?",
        "Je m'appelle Lina.",
        "Le magasin est fermé.",
      ],
    ),
    mcq(
      "e3-3-02",
      1,
      "Quelle formule est polie pour conseiller ?",
      "Vous pourriez essayer demain.",
      [
        "Fais ça maintenant !",
        "Tais-toi !",
        "Dépêche-toi !",
      ],
    ),
    mcq(
      "e3-3-03",
      1,
      "« Il vaut mieux » est suivi de :",
      "un infinitif (il vaut mieux partir tôt)",
      [
        "un adjectif seulement",
        "un nom de ville",
        "une date obligatoire",
      ],
    ),
    mcq(
      "e3-3-04",
      2,
      "Quelle phrase est une mise en garde ?",
      "Attention à ne pas oublier ton passeport.",
      [
        "Bonjour tout le monde.",
        "Où habitez-vous ?",
        "J'aime le chocolat.",
      ],
    ),
    mcq(
      "e3-3-05",
      2,
      "Complétez : « Je te ____ de parler plus lentement. »",
      "conseille",
      ["habite", "mange", "ouvre"],
    ),
    mcq(
      "e3-3-06",
      2,
      "Quelle structure correspond à un conseil conditionnel ?",
      "Si j'étais toi, je demanderais de l'aide.",
      [
        "Je suis toi, je demande.",
        "Toi aide maintenant.",
        "Demande aide hier.",
      ],
    ),
    mcq(
      "e3-3-07",
      3,
      "Un ami dit : « Je stresse avant les examens. » Quel conseil convient ?",
      "Tu pourrais faire une liste de révision et te reposer la veille.",
      [
        "Ce n'est pas mon problème.",
        "Les examens n'existent pas.",
        "Quelle est ta couleur préférée ?",
      ],
    ),
    mcq(
      "e3-3-08",
      3,
      "On vous demande un conseil pour mieux dormir. Quelle réponse est utile ?",
      "Évite les écrans juste avant de te coucher et essaie de te coucher à heure fixe.",
      ["Dors.", "Oui.", "Non."],
    ),
    mcq(
      "e3-3-09",
      3,
      "Complétez : « Pourquoi ne pas ____ au médecin ? »",
      "aller",
      ["vas", "allé", "allant"],
    ),
    mcq(
      "e3-3-10",
      4,
      "Dans un contexte professionnel, quelle formulation est la plus adaptée ?",
      "Vous pourriez peut-être préciser la date dans le message.",
      [
        "Écris correctement, bon sang !",
        "T'es nul en mails.",
        "Fais ce que je dis.",
      ],
    ),
    mcq(
      "e3-3-11",
      4,
      "Quelle phrase utilise correctement « il faut que » ?",
      "Il faut que tu arrives à l'heure.",
      [
        "Il faut que tu arriver à l'heure.",
        "Il faut que tu arrives à l'heure hier.",
        "Il faut que arriver tu.",
      ],
    ),
    mcq(
      "e3-3-12",
      4,
      "Quel conseil est le plus nuancé ?",
      "Si tu as le temps, tu pourrais réviser dix minutes chaque jour.",
      [
        "Tu dois réviser toute la nuit !",
        "Réviser ou rien.",
        "Sans révision, tu es perdu.",
      ],
    ),
    mcq(
      "e3-3-13",
      5,
      "Quelle réponse donne un conseil complet (écoute + proposition + raison) ?",
      "Je comprends que tu sois fatigué ; tu pourrais te coucher plus tôt, car le sommeil aide vraiment la concentration.",
      [
        "Dors plus.",
        "Fatigué = problème.",
        "Ce n'est pas grave.",
      ],
    ),
    mcq(
      "e3-3-14",
      5,
      "Repérez le conseil le moins approprié (trop agressif).",
      "Arrête d'être idiot et fais enfin un effort !",
      [
        "Tu pourrais demander de l'aide à un camarade.",
        "Il vaut mieux commencer par les exercices les plus simples.",
        "Si j'étais toi, je parlerais au professeur.",
      ],
    ),
    mcq(
      "e3-3-15",
      5,
      "Quelle formulation convient le mieux pour conseiller un inconnu ?",
      "Si vous voulez, vous pourriez prendre le tram numéro 12.",
      [
        "Prends le 12, point barre.",
        "Tu sais pas te débrouiller ?",
        "Bouge-toi et trouve le tram.",
      ],
    ),
    mcq(
      "e3-3-16",
      5,
      "Quelle phrase combine conseil et alternative ?",
      "Tu pourrais appeler le secrétariat ; sinon, envoie un e-mail pour expliquer ton retard.",
      [
        "Appelle.",
        "E-mail.",
        "Retard mauvais.",
      ],
    ),
    mcq(
      "e3-3-17",
      3,
      "Un collègue dit : « Je n'ose pas parler en réunion. » Quel conseil est pertinent ?",
      "Tu pourrais préparer une phrase à l'avance et la dire au début, pour te sentir plus à l'aise.",
      [
        "Ne parle jamais.",
        "Les réunions sont inutiles.",
        "Change de travail demain.",
      ],
    ),
    mcq(
      "e3-3-18",
      4,
      "Quel verbe convient ? « Je te ____ d'éviter les plats trop gras. »",
      "recommande",
      ["voyage", "chante", "ouvre"],
    ),
  ],
  exerciseCount: 8,
};

/** E3-4 — Comparer et opposer */
export const EXPRESS_E3_4: CommunicationLesson = {
  id: "E3-4",
  code: "E3.4",
  title: "Comparer et opposer",
  theory: [
    { type: "heading", text: "Comparer et opposer", black: true },
    {
      type: "plain",
      text: "Comparer, c'est montrer des ressemblances et des différences. Opposer, c'est mettre en contraste deux idées, deux situations ou deux choix.",
    },
    { type: "highlight", title: "Structures de comparaison" },
    {
      type: "table",
      accentHeader: true,
      headers: ["Type", "Structure", "Exemple"],
      rows: [
        ["Égalité", "aussi… que / autant… que", "Il est aussi rapide que toi."],
        ["Supériorité", "plus… que", "Ce train est plus confortable que le bus."],
        ["Infériorité", "moins… que", "Cette solution est moins chère."],
        ["Préférence", "préférer… à / plutôt… que", "Je préfère marcher plutôt que conduire."],
      ],
    },
    { type: "highlight", title: "Connecteurs pour opposer" },
    {
      type: "bullets",
      items: [
        "mais, pourtant, cependant, toutefois",
        "en revanche, au contraire, or",
        "d'un côté… de l'autre…",
        "alors que, tandis que, bien que (+ subjonctif)",
      ],
    },
    { type: "highlight", title: "Organiser une comparaison orale" },
    {
      type: "section",
      items: [
        "Présenter les deux éléments comparés.",
        "Donner un point commun.",
        "Donner une ou deux différences.",
        "Conclure avec une préférence ou un bilan nuancé.",
      ],
    },
    { type: "highlight", title: "Exemple de dialogue" },
    {
      type: "dialogue",
      lines: [
        { role: "A", text: "Tu préfères habiter en ville ou à la campagne ?" },
        {
          role: "B",
          text: "D'un côté, la ville est plus pratique pour les transports. De l'autre, la campagne est plus calme.",
        },
        { role: "A", text: "Et toi, tu choisis quoi ?" },
        {
          role: "B",
          text: "Je préfère la ville, même si elle est plus bruyante. En revanche, j'essaie de sortir souvent dans les parcs.",
        },
      ],
    },
    {
      type: "vocab",
      items: [
        { fr: "comparer", example: "Comparons ces deux propositions." },
        { fr: "s'opposer à", example: "Son avis s'oppose au mien." },
        { fr: "un contraste", example: "Il y a un fort contraste entre les deux." },
        { fr: "similaire", example: "Les deux situations sont similaires." },
        { fr: "différent de", example: "Ce métier est différent du précédent." },
        { fr: "en revanche", example: "Le loyer est élevé ; en revanche, le quartier est calme." },
      ],
    },
    {
      type: "note",
      text: "Évitez de tout présenter en noir et blanc : une bonne comparaison reconnaît aussi les avantages de chaque option.",
    },
  ],
  exercisePool: [
    mcq(
      "e3-4-01",
      1,
      "Quelle structure exprime une comparaison d'égalité ?",
      "aussi… que",
      ["parce que", "il faut", "bonjour"],
    ),
    mcq(
      "e3-4-02",
      1,
      "Pour dire qu'une chose est supérieure, on utilise :",
      "plus… que",
      ["moins… que seulement", "jamais… que", "où… que"],
    ),
    mcq(
      "e3-4-03",
      1,
      "Quel connecteur oppose deux idées ?",
      "Cependant",
      ["Ensuite", "Aussi", "Par exemple"],
    ),
    mcq(
      "e3-4-04",
      2,
      "Complétez : « Ce film est ____ intéressant que le précédent. »",
      "plus",
      ["très", "beaucoup", "trop de"],
    ),
    mcq(
      "e3-4-05",
      2,
      "Quelle phrase exprime une préférence ?",
      "Je préfère le train à la voiture.",
      [
        "Le train existe.",
        "Où est la gare ?",
        "Il est huit heures.",
      ],
    ),
    mcq(
      "e3-4-06",
      2,
      "« D'un côté… de l'autre… » sert à :",
      "Présenter deux aspects opposés d'une situation.",
      [
        "Demander l'addition.",
        "Compter les objets.",
        "Saluer un ami.",
      ],
    ),
    mcq(
      "e3-4-07",
      3,
      "On vous demande de comparer le bus et le métro. Quelle réponse est la plus claire ?",
      "Le métro est souvent plus rapide, mais le bus est moins cher et s'arrête plus près de chez moi.",
      [
        "Bus métro.",
        "Oui, les deux.",
        "Je prends parfois quelque chose.",
      ],
    ),
    mcq(
      "e3-4-08",
      3,
      "Complétez : « Elle travaille beaucoup, ____ elle trouve toujours le temps d'aider. »",
      "pourtant",
      ["où", "qui", "combien"],
    ),
    mcq(
      "e3-4-09",
      3,
      "Quelle phrase compare correctement deux quantités ?",
      "J'ai autant de devoirs que toi.",
      [
        "J'ai aussi devoirs que toi.",
        "J'ai plus devoirs toi.",
        "J'ai devoirs autant.",
      ],
    ),
    mcq(
      "e3-4-10",
      4,
      "Quel connecteur convient le mieux ? « Le salaire est correct ; ____, les horaires sont difficiles. »",
      "en revanche",
      ["également", "ainsi", "notamment"],
    ),
    mcq(
      "e3-4-11",
      4,
      "Quelle phrase utilise correctement « alors que » ?",
      "Il veut partir tôt, alors que nous préférons rester.",
      [
        "Il veut partir tôt, alors que.",
        "Alors que le pain, s'il vous plaît.",
        "Alors que bonjour.",
      ],
    ),
    mcq(
      "e3-4-12",
      4,
      "Dans un registre soigné, quelle opposition est la plus naturelle ?",
      "Le projet est ambitieux ; toutefois, le budget reste limité.",
      [
        "Projet cool mais fric zéro.",
        "Budget nul, projet super.",
        "Bof, ça passe.",
      ],
    ),
    mcq(
      "e3-4-13",
      5,
      "Quelle comparaison est la plus complète (points communs + différences + bilan) ?",
      "Les deux formations durent un an. La première est plus théorique, la seconde plus pratique ; personnellement, je choisis la seconde.",
      [
        "Formations différentes.",
        "Je choisis.",
        "Une an.",
      ],
    ),
    mcq(
      "e3-4-14",
      5,
      "Repérez la formulation incorrecte.",
      "Ce livre est plus intéressant de l'autre.",
      [
        "Ce livre est plus intéressant que l'autre.",
        "Ce livre est aussi intéressant que l'autre.",
        "Ce livre est moins intéressant que l'autre.",
      ],
    ),
    mcq(
      "e3-4-15",
      5,
      "Quelle phrase nuance le mieux une opposition ?",
      "Le télétravail offre plus de flexibilité ; cependant, il peut aussi isoler si l'on ne voit jamais ses collègues.",
      [
        "Télétravail = bien.",
        "Télétravail = mal.",
        "Pas de collègues.",
      ],
    ),
    mcq(
      "e3-4-16",
      5,
      "Quelle conclusion de comparaison est la plus pertinente ?",
      "En résumé, chaque option a des avantages ; mon choix dépend surtout de mon budget et de mon temps.",
      [
        "Voilà c'est tout.",
        "Je gagne.",
        "Fin de la comparaison.",
      ],
    ),
    mcq(
      "e3-4-17",
      3,
      "On vous dit : « Cours en présentiel ou en ligne ? » Quelle réponse oppose clairement ?",
      "En présentiel, on parle davantage ; en ligne, c'est plus flexible, mais on se distrait plus facilement.",
      ["Oui.", "Les deux.", "Je ne sais pas."],
    ),
    mcq(
      "e3-4-18",
      4,
      "Complétez : « Bien qu'il ____ fatigué, il est venu à la réunion. »",
      "soit",
      ["est", "était être", "sera"],
    ),
  ],
  exerciseCount: 8,
};

export const EXPRESS_E3_LESSONS: CommunicationLesson[] = [
  EXPRESS_E3_1,
  EXPRESS_E3_2,
  EXPRESS_E3_3,
  EXPRESS_E3_4,
];
