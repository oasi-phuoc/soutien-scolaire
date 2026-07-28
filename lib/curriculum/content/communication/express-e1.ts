import { listeningPoolExercise, mcq, type CommunicationLesson } from "./express-types";
import { E1_1_EVAL_AUDIOS, E1_1_LISTENING_AUDIOS } from "./express-e1-1-listening";

const A1 = (n: string) => `/assets/expression/communication/A1/${n}.mp3`;

/* ═══════════════════════════════════════════════════════════════════════════
 * E1-1 — Se présenter
 * ═══════════════════════════════════════════════════════════════════════════ */

export const EXPRESS_E1_1: CommunicationLesson = {
  id: "E1-1",
  code: "E1.1",
  title: "Se présenter",
  prerequisiteFrenchSlugs: [
    "a1-conj-l00", // C1.1 — Les pronoms personnels sujets
    "a1-conj-l01", // C1.2 — Les verbes être et avoir
    "v1-nationalites", // V1.1
    "v1-professions", // V1.2
  ],
  theory: [
    { type: "heading", text: "Se présenter", black: true },
    {
      type: "prerequisites",
      items: [
        { code: "C1.1", title: "Les pronoms personnels sujets", href: "/francais/conjugaison/a1-conj-l00" },
        { code: "C1.2", title: "Les verbes être et avoir", href: "/francais/conjugaison/a1-conj-l01" },
        { code: "V1.1", title: "Les nationalités", href: "/francais/vocabulaire/v1-nationalites" },
        { code: "V1.2", title: "Les professions", href: "/francais/vocabulaire/v1-professions" },
      ],
    },
    {
      type: "plain",
      text: "Pour se présenter, on donne son **identité**, son **âge**, sa **nationalité**, son **adresse** et parfois sa **profession**. Les phrases sont courtes et claires.",
    },
    { type: "highlight", title: "Identité" },
    {
      type: "plain",
      text: "Pour dire son nom et son prénom, on utilise le verbe **s'appeler**.",
    },
    {
      type: "section",
      items: [
        "**Je m'appelle** Marie.",
        "**Je suis** Pierre Dupont.",
        "Mon prénom est Léa. Mon nom de famille est Martin.",
      ],
    },
    { type: "highlight", title: "Âge" },
    {
      type: "plain",
      text: "Pour dire son âge, on utilise le verbe **avoir** avec **ans**.",
    },
    {
      type: "section",
      items: [
        "**J'ai** 12 ans.",
        "**Il a** 30 ans.",
        "**Elle a** 8 ans.",
      ],
    },
    { type: "highlight", title: "Nationalité" },
    {
      type: "plain",
      text: "La nationalité s'accorde : un homme **français**, une femme **française**. On utilise le verbe **être**.",
    },
    {
      type: "section",
      items: [
        "**Je suis** français / française.",
        "**Il est** suisse.",
        "**Elle est** italienne.",
        "**Nous sommes** espagnols.",
        "**Je viens de** Paris. / **Je viens d'**Italie.",
      ],
    },
    { type: "highlight", title: "Adresse et lieu" },
    {
      type: "plain",
      text: "Pour dire où l'on habite, on utilise le verbe **habiter**.",
    },
    {
      type: "section",
      items: [
        "**J'habite** à Genève.",
        "**J'habite** en Suisse.",
        "Mon adresse est 12 rue du Lac.",
      ],
    },
    { type: "highlight", title: "Profession" },
    {
      type: "plain",
      text: "Pour parler de son métier, on utilise le verbe **être** ou **travailler**.",
    },
    {
      type: "section",
      items: [
        "**Je suis** élève / étudiant(e).",
        "**Je suis** professeur.",
        "**Je travaille** dans un magasin.",
        "**Je suis** au chômage. / **Je suis** à la retraite.",
      ],
    },
    {
      type: "table",
      accentHeader: true,
      headers: ["Question", "Réponse possible"],
      rows: [
        ["Comment tu t'appelles ?", "Je m'appelle Samira."],
        ["Tu as quel âge ?", "J'ai 14 ans."],
        ["Tu es de quelle nationalité ?", "Je suis marocaine."],
        ["Tu habites où ?", "J'habite à Lausanne."],
        ["Tu fais quoi dans la vie ?", "Je suis élève. / Je suis infirmier."],
      ],
    },
    { type: "heading", text: "Exemple de dialogue", black: true },
    {
      type: "dialogue",
      audioSrc: A1("009"),
      audioLabel: "Audio 009",
      lines: [
        { role: "A", text: "Bonjour ! Moi, c'est Paolo. Et vous ? Vous vous appelez comment ?" },
        { role: "B", text: "Je m'appelle Nicole. Tu peux dire « tu »." },
        { role: "A", text: "Enchanté Nicole ! Tu as un prénom français. Tu es française, non ?" },
        { role: "B", text: "Non, je suis allemande. Et toi ?" },
        { role: "A", text: "Je suis italien." },
        { role: "B", text: "Et tu as quel âge ?" },
        { role: "A", text: "J'ai 25 ans." },
        { role: "B", text: "Moi, j'ai 35 ans." },
        { role: "A", text: "Quelle est ta profession ?" },
        { role: "B", text: "Je suis journaliste. Voici ma carte de visite." },
        { role: "A", text: "Voici ma carte aussi." },
        { role: "B", text: "Merci ! C'est ton numéro de portable sur la carte ?" },
        { role: "A", text: "Non, mon portable, c'est le 06 18 14 33 11." },
        { role: "B", text: "Euh… tu peux répéter, s'il te plaît ?" },
      ],
    },
    {
      type: "vocab",
      items: [
        { fr: "je m'appelle…", example: "Je m'appelle Nora." },
        { fr: "j'ai … ans", example: "J'ai 25 ans." },
        { fr: "je suis + nationalité", example: "Je suis portugais." },
        { fr: "je viens de…", example: "Je viens de Tunisie." },
        { fr: "j'habite à / en…", example: "J'habite à Berne. / J'habite en France." },
        { fr: "je suis + métier", example: "Je suis médecin." },
        { fr: "enchanté(e)", example: "Enchanté de faire votre connaissance." },
      ],
    },
  ],
  exerciseCount: 4,
  exercises: E1_1_LISTENING_AUDIOS.map((a) =>
    listeningPoolExercise({
      id: a.id,
      audioSrc: a.audioSrc,
      audioLabel: a.audioLabel,
      instruction: a.instruction,
      transcript: a.transcript,
      questionPool: a.pool,
      questionCount: a.questionCount,
    }),
  ),
  evalExercises: E1_1_EVAL_AUDIOS.map((a) =>
    listeningPoolExercise({
      id: a.id,
      audioSrc: a.audioSrc,
      audioLabel: a.audioLabel,
      instruction: a.instruction,
      transcript: a.transcript,
      questionPool: a.pool,
      questionCount: a.questionCount,
    }),
  ),

};

/* ═══════════════════════════════════════════════════════════════════════════
 * E1-2 — Parler de sa famille
 * ═══════════════════════════════════════════════════════════════════════════ */

export const EXPRESS_E1_2: CommunicationLesson = {
  id: "E1-2",
  code: "E1.2",
  title: "Parler de sa famille",
  theory: [
    { type: "heading", text: "Parler de sa famille", black: true },
    {
      type: "plain",
      text: "Pour parler de sa famille, on nomme les **membres**, on dit leur **âge**, et on décrit parfois leur **caractère** ou leur **métier**.",
    },
    { type: "highlight", title: "Les membres de la famille" },
    {
      type: "table",
      accentHeader: true,
      headers: ["Personne", "Mot"],
      rows: [
        ["père / mère", "mon père, ma mère"],
        ["frère / sœur", "mon frère, ma sœur"],
        ["parents", "mes parents"],
        ["grand-père / grand-mère", "mon grand-père, ma grand-mère"],
        ["oncle / tante", "mon oncle, ma tante"],
        ["cousin / cousine", "mon cousin, ma cousine"],
        ["fils / fille", "mon fils, ma fille"],
        ["mari / femme", "mon mari, ma femme"],
      ],
    },
    { type: "highlight", title: "Les possessifs" },
    {
      type: "section",
      items: [
        "mon / ma / mes — mon frère, ma sœur, mes parents",
        "ton / ta / tes — ton père, ta mère, tes cousins",
        "son / sa / ses — son oncle, sa tante, ses enfants",
      ],
    },
    {
      type: "plain",
      text: "On choisit **mon / ma** selon le genre du nom : **mon** père (masculin), **ma** mère (féminin). Devant une voyelle : **mon** amie (même au féminin).",
    },
    { type: "highlight", title: "Décrire sa famille" },
    {
      type: "section",
      items: [
        "J'ai un frère et une sœur.",
        "Je n'ai pas de frères et sœurs. Je suis enfant unique.",
        "Ma mère a 42 ans. Elle est infirmière.",
        "Mon père s'appelle Ahmed. Il est gentil.",
        "Nous sommes une famille de quatre personnes.",
      ],
    },
    { type: "highlight", title: "Questions utiles" },
    {
      type: "bullets",
      items: [
        "**Tu as des frères et sœurs ?**",
        "**Comment s'appelle ta mère ?**",
        "**Ton père fait quoi ?**",
        "**Vous êtes combien dans ta famille ?**",
      ],
    },
    { type: "heading", text: "Exemple de dialogue", black: true },
    {
      type: "dialogue",
      lines: [
        { role: "A", text: "Tu as des frères et sœurs ?" },
        { role: "B", text: "Oui, j'ai une sœur et un petit frère." },
        { role: "A", text: "Ils ont quel âge ?" },
        { role: "B", text: "Ma sœur a 16 ans et mon frère a 9 ans." },
        { role: "A", text: "Et tes parents ?" },
        { role: "B", text: "Ma mère est enseignante. Mon père travaille dans un bureau." },
        { role: "A", text: "Vous habitez tous ensemble ?" },
        { role: "B", text: "Oui, nous habitons à Lausanne, avec mes grands-parents." },
      ],
    },
    {
      type: "vocab",
      items: [
        { fr: "la famille", example: "Ma famille est grande." },
        { fr: "enfant unique", example: "Je suis enfant unique." },
        { fr: "les parents", example: "Mes parents habitent à Lyon." },
        { fr: "les grands-parents", example: "Mes grands-parents sont à la retraite." },
        { fr: "gentil / sympa", example: "Mon frère est très gentil." },
        { fr: "être marié(e)", example: "Ma sœur est mariée." },
        { fr: "avoir … enfants", example: "Ils ont deux enfants." },
      ],
    },
    {
      type: "note",
      text: "Astuce : « J'ai un frère » (avoir + personne). « Mon frère s'appelle… » (possessif + s'appeler).",
    },
  ],
  exerciseCount: 8,
  exercisePool: [
    mcq("e1-2-t1-a", 1, "Comment dit-on « my mother » en français ?", "ma mère", [
      "mon mère",
      "mes mère",
      "la mère mon",
    ]),
    mcq("e1-2-t1-b", 1, "« J'___ un frère. »", "ai", [
      "suis",
      "fais",
      "habite",
    ]),
    mcq("e1-2-t1-c", 1, "Quel mot désigne le père et la mère ensemble ?", "les parents", [
      "les enfants",
      "les cousins",
      "les oncles",
    ]),
    mcq("e1-2-t1-d", 1, "« ___ père s'appelle Paul. »", "Mon", [
      "Ma",
      "Mes",
      "Ton mère",
    ]),
    mcq("e1-2-t2-a", 2, "Quelle phrase est correcte ?", "J'ai une sœur et un frère.", [
      "Je suis une sœur et un frère.",
      "J'ai un sœur et une frère.",
      "J'ai sœur et frère.",
    ]),
    mcq("e1-2-t2-b", 2, "Complétez : « ___ sœur a 10 ans. »", "Ma", [
      "Mon",
      "Mes",
      "Ton",
    ]),
    mcq("e1-2-t2-c", 2, "On te demande : « Tu as des frères et sœurs ? » Quelle réponse est correcte ?", "Oui, j'ai deux frères.", [
      "Oui, je suis deux frères.",
      "Oui, j'ai deux frère.",
      "Oui, mon ai deux frères.",
    ]),
    mcq("e1-2-t2-d", 2, "Quel possessif va avec « parents » ?", "mes", [
      "mon",
      "ma",
      "son",
    ]),
    mcq("e1-2-t3-a", 3, "Quelle réponse convient à « Comment s'appelle ton père ? »", "Il s'appelle Karim.", [
      "Il a appelle Karim.",
      "Il est appelle Karim.",
      "Mon père a Karim.",
    ]),
    mcq("e1-2-t3-b", 3, "Complétez : « Je n'ai pas de frères et sœurs. Je suis ___ . »", "enfant unique", [
      "seul parent",
      "grand frère",
      "famille unique",
    ]),
    mcq("e1-2-t3-c", 3, "Repérez l'erreur : « Mon mère est infirmière. » Quelle correction ?", "Ma mère est infirmière.", [
      "Mes mère est infirmière.",
      "Mon mère a infirmière.",
      "Ma mère a infirmière.",
    ]),
    mcq("e1-2-t3-d", 3, "« Nous sommes une famille de ___ personnes. » (parents + 2 enfants)", "quatre", [
      "deux",
      "trois",
      "cinq",
    ]),
    mcq("e1-2-t4-a", 4, "Quelle description de famille est correcte ?", "J'ai une sœur. Elle a 14 ans. Elle s'appelle Inès.", [
      "J'ai une sœur. Elle est 14 ans. Elle a appelle Inès.",
      "Je suis une sœur. Elle a 14 ans. Elle s'appelle Inès.",
      "J'ai un sœur. Elle a 14 ans. Elle est appelle Inès.",
    ]),
    mcq("e1-2-t4-b", 4, "A : « Ton père fait quoi ? » B : « ___ »", "Il travaille dans un bureau.", [
      "Il a travaille dans un bureau.",
      "Il est travaille un bureau.",
      "Il fait dans un bureau travail.",
    ]),
    mcq("e1-2-t4-c", 4, "Choisissez la phrase correcte avec « cousin ».", "Mon cousin habite à Paris.", [
      "Ma cousin habite à Paris.",
      "Mes cousin habite à Paris.",
      "Mon cousine habite à Paris.",
    ]),
    mcq("e1-2-t5-a", 5, "Quelle présentation de famille est la plus complète et correcte ?", "Nous sommes quatre : mes parents, ma sœur et moi. Ma mère est enseignante.", [
      "Nous sommes quatre : mon parents, mon sœur et moi. Ma mère a enseignante.",
      "Nous sommes quatre : mes parents, ma sœur et moi. Ma mère a enseignante.",
      "Nous sommes quatre : mes parent, ma sœur et je. Ma mère est enseignante.",
    ]),
    mcq("e1-2-t5-b", 5, "Repérez l'erreur : « J'ai un frère. Il est 9 ans. Il s'appelle Tom. » Correction ?", "J'ai un frère. Il a 9 ans. Il s'appelle Tom.", [
      "J'ai un frère. Il est 9 ans. Il a appelle Tom.",
      "Je suis un frère. Il a 9 ans. Il s'appelle Tom.",
      "J'ai un frère. Il a 9 ans. Il est appelle Tom.",
    ]),
    mcq("e1-2-t5-c", 5, "On te demande de parler de tes grands-parents. Quelle formulation est la meilleure ?", "Mes grands-parents habitent à Lyon. Ils sont à la retraite. Ils sont très gentils.", [
      "Mon grands-parents habitent à Lyon. Ils ont à la retraite. Ils sont très gentils.",
      "Mes grands-parents sont habitent à Lyon. Ils sont retraite. Ils ont très gentils.",
      "Mes grands-parents habitent à Lyon. Ils sont à la retraite. Ils ont très gentils.",
    ]),
  ],
};

/* ═══════════════════════════════════════════════════════════════════════════
 * E1-3 — Décrire son logement
 * ═══════════════════════════════════════════════════════════════════════════ */

export const EXPRESS_E1_3: CommunicationLesson = {
  id: "E1-3",
  code: "E1.3",
  title: "Décrire son logement",
  theory: [
    { type: "heading", text: "Décrire son logement", black: true },
    {
      type: "plain",
      text: "Pour décrire où l'on habite, on dit le **type de logement**, les **pièces**, la **taille**, et on peut ajouter des **adjectifs** (grand, petit, lumineux…).",
    },
    { type: "highlight", title: "Types de logement" },
    {
      type: "section",
      items: [
        "J'habite dans un appartement.",
        "J'habite dans une maison.",
        "J'habite dans un studio.",
        "Nous habitons dans un immeuble.",
      ],
    },
    { type: "highlight", title: "Les pièces" },
    {
      type: "table",
      accentHeader: true,
      headers: ["Pièce", "Exemple"],
      rows: [
        ["la cuisine", "La cuisine est petite."],
        ["le salon / le séjour", "Le salon est grand et lumineux."],
        ["la chambre", "J'ai une chambre."],
        ["la salle de bain", "La salle de bain est moderne."],
        ["les toilettes (WC)", "Les toilettes sont près de l'entrée."],
        ["le balcon / le jardin", "Il y a un balcon."],
      ],
    },
    { type: "highlight", title: "Il y a / Il n'y a pas" },
    {
      type: "section",
      items: [
        "Il y a trois chambres.",
        "Il y a une cuisine et un salon.",
        "Il n'y a pas d'ascenseur.",
        "Il n'y a pas de jardin.",
      ],
    },
    { type: "highlight", title: "Adjectifs utiles" },
    {
      type: "bullets",
      items: [
        "**grand / petit** — Ma chambre est petite.",
        "**lumineux / sombre** — Le salon est lumineux.",
        "**calme / bruyant** — L'appartement est calme.",
        "**moderne / ancien** — C'est un immeuble moderne.",
        "**confortable** — Mon lit est confortable.",
      ],
    },
    {
      type: "table",
      accentHeader: true,
      headers: ["Question", "Réponse possible"],
      rows: [
        ["Tu habites où ?", "J'habite à Fribourg, dans un appartement."],
        ["C'est grand ?", "Non, c'est un petit appartement."],
        ["Il y a combien de pièces ?", "Il y a quatre pièces."],
        ["Tu as une chambre ?", "Oui, j'ai ma propre chambre."],
      ],
    },
    { type: "heading", text: "Exemple de dialogue", black: true },
    {
      type: "dialogue",
      lines: [
        { role: "A", text: "Tu habites dans une maison ou un appartement ?" },
        { role: "B", text: "Dans un appartement, au troisième étage." },
        { role: "A", text: "Il y a combien de pièces ?" },
        { role: "B", text: "Il y a un salon, une cuisine, deux chambres et une salle de bain." },
        { role: "A", text: "C'est lumineux ?" },
        { role: "B", text: "Oui, le salon est très lumineux. Il y a aussi un petit balcon." },
        { role: "A", text: "Et le quartier ?" },
        { role: "B", text: "Le quartier est calme. J'habite près d'un parc." },
      ],
    },
    {
      type: "vocab",
      items: [
        { fr: "un appartement / une maison", example: "J'habite dans une maison." },
        { fr: "un étage", example: "J'habite au deuxième étage." },
        { fr: "il y a…", example: "Il y a trois chambres." },
        { fr: "près de / loin de", example: "J'habite près de l'école." },
        { fr: "le quartier", example: "Mon quartier est animé." },
        { fr: "meublé / vide", example: "L'appartement est meublé." },
        { fr: "louer / être locataire", example: "Nous louons un appartement." },
      ],
    },
    {
      type: "note",
      text: "Astuce : « Il y a » + nom pour décrire. « Il n'y a pas de » + nom pour dire l'absence (pas de jardin).",
    },
  ],
  exerciseCount: 8,
  exercisePool: [
    mcq("e1-3-t1-a", 1, "Où cuisine-t-on ?", "dans la cuisine", [
      "dans le salon",
      "dans la chambre",
      "dans le balcon",
    ]),
    mcq("e1-3-t1-b", 1, "« J'habite ___ un appartement. »", "dans", [
      "à",
      "en",
      "sur",
    ]),
    mcq("e1-3-t1-c", 1, "Quelle pièce sert à dormir ?", "la chambre", [
      "la cuisine",
      "le salon",
      "les toilettes",
    ]),
    mcq("e1-3-t1-d", 1, "Comment dit-on qu'il existe trois chambres ?", "Il y a trois chambres.", [
      "Il a trois chambres.",
      "Il est trois chambres.",
      "Il fait trois chambres.",
    ]),
    mcq("e1-3-t2-a", 2, "Quelle phrase est correcte ?", "Il n'y a pas de jardin.", [
      "Il n'y a pas jardin.",
      "Il n'a pas de jardin.",
      "Il n'est pas de jardin.",
    ]),
    mcq("e1-3-t2-b", 2, "Complétez : « Le salon est ___ . » (beaucoup de lumière)", "lumineux", [
      "sombre",
      "bruyant",
      "petit",
    ]),
    mcq("e1-3-t2-c", 2, "On te demande : « Tu habites où ? » Quelle réponse est correcte ?", "J'habite à Berne, dans un appartement.", [
      "Je suis à Berne, un appartement.",
      "J'ai Berne dans un appartement.",
      "J'habite Berne un appartement.",
    ]),
    mcq("e1-3-t2-d", 2, "« J'habite au ___ étage. » (3)", "troisième", [
      "trois",
      "troisièmement",
      "troisème",
    ]),
    mcq("e1-3-t3-a", 3, "Quelle réponse convient à « Il y a combien de pièces ? »", "Il y a quatre pièces.", [
      "Il a quatre pièces.",
      "Il est quatre pièces.",
      "J'ai quatre pièce.",
    ]),
    mcq("e1-3-t3-b", 3, "Complétez : « L'appartement est ___ : il n'y a pas de bruit. »", "calme", [
      "bruyant",
      "sombre",
      "vide",
    ]),
    mcq("e1-3-t3-c", 3, "Repérez l'erreur : « Il a un balcon. » Correction pour décrire le logement ?", "Il y a un balcon.", [
      "Il est un balcon.",
      "Il fait un balcon.",
      "Il a y un balcon.",
    ]),
    mcq("e1-3-t3-d", 3, "Quelle phrase décrit correctement une maison ?", "J'habite dans une maison avec un jardin.", [
      "J'habite dans un maison avec un jardin.",
      "J'habite une maison avec jardin un.",
      "Je suis dans une maison avec un jardin ans.",
    ]),
    mcq("e1-3-t4-a", 4, "Quelle description est correcte et naturelle ?", "Mon appartement a deux chambres. Le salon est grand et lumineux.", [
      "Mon appartement a deux chambre. Le salon est grand et lumineux.",
      "Mon appartement est deux chambres. Le salon a grand et lumineux.",
      "Mon appartement a deux chambres. Le salon est grand et lumière.",
    ]),
    mcq("e1-3-t4-b", 4, "A : « C'est près de l'école ? » B : « ___ »", "Oui, j'habite près de l'école.", [
      "Oui, j'habite loin près l'école.",
      "Oui, je suis près école.",
      "Oui, j'ai près de l'école.",
    ]),
    mcq("e1-3-t4-c", 4, "Choisissez la négation correcte.", "Il n'y a pas d'ascenseur.", [
      "Il n'y a pas ascenseur.",
      "Il n'a pas d'ascenseur.",
      "Il n'y est pas d'ascenseur.",
    ]),
    mcq("e1-3-t5-a", 5, "Quelle description de logement est la plus complète et correcte ?", "J'habite dans un petit appartement au deuxième étage. Il y a un salon, une cuisine et une chambre. Le quartier est calme.", [
      "J'habite un petit appartement au deux étage. Il a un salon, une cuisine et une chambre. Le quartier est calme.",
      "J'habite dans un petit appartement au deuxième étage. Il a un salon, une cuisine et une chambre. Le quartier a calme.",
      "Je suis dans un petit appartement au deuxième étage. Il y a un salon, une cuisine et une chambre. Le quartier est calme ans.",
    ]),
    mcq("e1-3-t5-b", 5, "Repérez l'erreur : « Il y a une cuisine. Le salon est lumineux. Il n'y a pas jardin. » Correction ?", "Il y a une cuisine. Le salon est lumineux. Il n'y a pas de jardin.", [
      "Il a une cuisine. Le salon est lumineux. Il n'y a pas de jardin.",
      "Il y a une cuisine. Le salon a lumineux. Il n'y a pas de jardin.",
      "Il y a une cuisine. Le salon est lumineux. Il n'a pas de jardin.",
    ]),
    mcq("e1-3-t5-c", 5, "On te demande de décrire ton logement. Quelle formulation est la meilleure ?", "Nous habitons dans une maison. Il y a quatre pièces et un jardin. C'est calme et confortable.", [
      "Nous habitons une maison. Il a quatre pièces et un jardin. C'est calme et confortable.",
      "Nous sommes dans une maison. Il y a quatre pièce et un jardin. C'est calme et confortable.",
      "Nous habitons dans une maison. Il y a quatre pièces et un jardin. C'est calme et confort.",
    ]),
  ],
};

/* ═══════════════════════════════════════════════════════════════════════════
 * E1-4 — Les activités quotidiennes
 * ═══════════════════════════════════════════════════════════════════════════ */

export const EXPRESS_E1_4: CommunicationLesson = {
  id: "E1-4",
  code: "E1.4",
  title: "Les activités quotidiennes",
  theory: [
    { type: "heading", text: "Les activités quotidiennes", black: true },
    {
      type: "plain",
      text: "Pour parler de sa journée, on utilise le **présent**, des **verbes du quotidien** et des **marqueurs de temps** (le matin, à 8 heures, ensuite…).",
    },
    { type: "highlight", title: "Verbes du quotidien" },
    {
      type: "table",
      accentHeader: true,
      headers: ["Verbe", "Exemple"],
      rows: [
        ["se lever", "Je me lève à 7 heures."],
        ["se laver / se doucher", "Je me douche le matin."],
        ["s'habiller", "Je m'habille rapidement."],
        ["prendre le petit-déjeuner", "Je prends le petit-déjeuner à 7 h 30."],
        ["aller à l'école / au travail", "Je vais à l'école à pied."],
        ["déjeuner / dîner", "Nous déjeunons à midi."],
        ["faire ses devoirs", "Je fais mes devoirs le soir."],
        ["se coucher", "Je me couche à 22 heures."],
      ],
    },
    { type: "highlight", title: "Les verbes pronominaux" },
    {
      type: "section",
      items: [
        "je me lève — tu te lèves — il/elle se lève",
        "nous nous levons — vous vous levez — ils/elles se lèvent",
        "Attention : je **me** douche, je **m'**habille (devant une voyelle).",
      ],
    },
    { type: "highlight", title: "Organiser la journée" },
    {
      type: "bullets",
      items: [
        "**Le matin** — Je me lève, je me lave, je prends le petit-déjeuner.",
        "**À midi** — Je déjeune à la cantine.",
        "**L'après-midi** — Je vais en cours / je travaille.",
        "**Le soir** — Je dîne, je fais mes devoirs, je me couche.",
        "**D'abord… ensuite… puis… enfin…** — pour enchaîner.",
      ],
    },
    {
      type: "table",
      accentHeader: true,
      headers: ["Question", "Réponse possible"],
      rows: [
        ["Tu te lèves à quelle heure ?", "Je me lève à 6 h 30."],
        ["Tu vas à l'école comment ?", "J'y vais en bus / à pied / à vélo."],
        ["Tu fais quoi le soir ?", "Je fais mes devoirs puis je regarde la télé."],
        ["Tu te couches tard ?", "Non, je me couche vers 21 heures."],
      ],
    },
    { type: "heading", text: "Exemple de dialogue", black: true },
    {
      type: "dialogue",
      lines: [
        { role: "A", text: "Tu te lèves à quelle heure le matin ?" },
        { role: "B", text: "Je me lève à 7 heures. Et toi ?" },
        { role: "A", text: "Moi, à 6 h 45. Ensuite, je prends le petit-déjeuner." },
        { role: "B", text: "Moi aussi. Après, je vais à l'école en bus." },
        { role: "A", text: "Et le soir, tu fais quoi ?" },
        { role: "B", text: "D'abord je fais mes devoirs, puis je joue un peu. Je me couche à 21 h 30." },
        { role: "A", text: "Moi, je me couche un peu plus tard, vers 22 heures." },
      ],
    },
    {
      type: "vocab",
      items: [
        { fr: "le matin / le soir", example: "Le matin, je me lève tôt." },
        { fr: "à … heures", example: "Je dîne à 19 heures." },
        { fr: "d'abord / ensuite / puis", example: "D'abord je mange, ensuite je sors." },
        { fr: "tous les jours", example: "Je vais à l'école tous les jours." },
        { fr: "parfois / souvent / jamais", example: "Je ne regarde jamais la télé le matin." },
        { fr: "tôt / tard", example: "Je me couche tôt." },
        { fr: "à pied / en bus / à vélo", example: "Je vais au collège à pied." },
      ],
    },
    {
      type: "note",
      text: "Astuce : avec les verbes pronominaux, n'oublie pas le pronom : **je me lève** (pas « je lève »).",
    },
  ],
  exerciseCount: 8,
  exercisePool: [
    mcq("e1-4-t1-a", 1, "Quel verbe signifie « get up » ?", "se lever", [
      "se coucher",
      "s'habiller",
      "se laver",
    ]),
    mcq("e1-4-t1-b", 1, "« Je ___ lève à 7 heures. »", "me", [
      "te",
      "se",
      "nous",
    ]),
    mcq("e1-4-t1-c", 1, "Quand mange-t-on le petit-déjeuner ?", "le matin", [
      "le soir",
      "à minuit",
      "l'après-midi seulement",
    ]),
    mcq("e1-4-t1-d", 1, "« Je ___ à 22 heures. » (go to bed)", "me couche", [
      "me lève",
      "me douche",
      "m'habille",
    ]),
    mcq("e1-4-t2-a", 2, "Quelle phrase est correcte ?", "Je me douche le matin.", [
      "Je douche le matin.",
      "Je se douche le matin.",
      "Je me doucher le matin.",
    ]),
    mcq("e1-4-t2-b", 2, "Complétez : « Ensuite, je ___ le petit-déjeuner. »", "prends", [
      "prendre",
      "prend",
      "prenez",
    ]),
    mcq("e1-4-t2-c", 2, "On te demande : « Tu te lèves à quelle heure ? » Quelle réponse est correcte ?", "Je me lève à 7 heures.", [
      "Je lève à 7 heures.",
      "Je me lever à 7 heures.",
      "Je suis lève à 7 heures.",
    ]),
    mcq("e1-4-t2-d", 2, "Quel mot introduit souvent la première action ?", "D'abord", [
      "Enfin",
      "Pourtant",
      "Parce que",
    ]),
    mcq("e1-4-t3-a", 3, "Quelle réponse convient à « Tu vas à l'école comment ? »", "J'y vais en bus.", [
      "Je vais y en bus.",
      "J'ai vais en bus.",
      "Je suis en bus école.",
    ]),
    mcq("e1-4-t3-b", 3, "Complétez : « Le soir, je ___ mes devoirs. »", "fais", [
      "fait",
      "faire",
      "faites",
    ]),
    mcq("e1-4-t3-c", 3, "Repérez l'erreur : « Je lève à 6 heures. » Correction ?", "Je me lève à 6 heures.", [
      "Je se lève à 6 heures.",
      "Je me lever à 6 heures.",
      "Je suis lève à 6 heures.",
    ]),
    mcq("e1-4-t3-d", 3, "« Nous ___ levons tôt. »", "nous", [
      "me",
      "se",
      "vous",
    ]),
    mcq("e1-4-t4-a", 4, "Quelle description de journée est correcte ?", "Le matin, je me lève, je me douche, puis je prends le petit-déjeuner.", [
      "Le matin, je lève, je douche, puis je prends le petit-déjeuner.",
      "Le matin, je me lève, je me douche, puis je prendre le petit-déjeuner.",
      "Le matin, je me lever, je me douche, puis je prends le petit-déjeuner.",
    ]),
    mcq("e1-4-t4-b", 4, "A : « Tu te couches tard ? » B : « ___ »", "Non, je me couche vers 21 heures.", [
      "Non, je couche vers 21 heures.",
      "Non, je me coucher vers 21 heures.",
      "Non, je suis couche vers 21 heures.",
    ]),
    mcq("e1-4-t4-c", 4, "Choisissez la suite logique : « D'abord je dîne. Ensuite… »", "je fais mes devoirs.", [
      "je me lève à 7 heures.",
      "je prends le petit-déjeuner hier.",
      "je me suis lever.",
    ]),
    mcq("e1-4-t5-a", 5, "Quelle description de journée est la plus complète et correcte ?", "Je me lève à 7 h. Ensuite je m'habille et je vais à l'école. Le soir, je fais mes devoirs et je me couche à 22 h.", [
      "Je lève à 7 h. Ensuite je habille et je vais à l'école. Le soir, je fais mes devoirs et je couche à 22 h.",
      "Je me lève à 7 h. Ensuite je m'habille et je vais à l'école. Le soir, je fait mes devoirs et je me couche à 22 h.",
      "Je me lever à 7 h. Ensuite je m'habille et je vais à l'école. Le soir, je fais mes devoirs et je me coucher à 22 h.",
    ]),
    mcq("e1-4-t5-b", 5, "Repérez l'erreur : « Je me lève. Je douche. Je m'habille. » Correction ?", "Je me lève. Je me douche. Je m'habille.", [
      "Je lève. Je me douche. Je m'habille.",
      "Je me lève. Je se douche. Je m'habille.",
      "Je me lève. Je me douche. Je habille.",
    ]),
    mcq("e1-4-t5-c", 5, "On te demande de raconter ta journée type. Quelle formulation est la meilleure ?", "Tous les jours, je me lève à 6 h 30. Je vais à l'école à pied. Le soir, je dîne en famille puis je me couche.", [
      "Tous les jours, je lève à 6 h 30. Je vais à l'école à pied. Le soir, je dîne en famille puis je couche.",
      "Tous les jours, je me lève à 6 h 30. Je vais à l'école à pied. Le soir, je dîner en famille puis je me couche.",
      "Tous les jours, je me suis lève à 6 h 30. Je vais à l'école à pied. Le soir, je dîne en famille puis je me couche.",
    ]),
  ],
};

/* ═══════════════════════════════════════════════════════════════════════════
 * E1-5 — Faire des achats
 * ═══════════════════════════════════════════════════════════════════════════ */

export const EXPRESS_E1_5: CommunicationLesson = {
  id: "E1-5",
  code: "E1.5",
  title: "Faire des achats",
  theory: [
    { type: "heading", text: "Faire des achats", black: true },
    {
      type: "plain",
      text: "Au magasin, on **salue**, on **demande** un produit, on parle du **prix**, de la **taille** ou de la **quantité**, puis on **paie** et on **remercie**.",
    },
    { type: "highlight", title: "Formules pour demander" },
    {
      type: "section",
      items: [
        "Bonjour, je voudrais…",
        "Est-ce que vous avez… ?",
        "Je cherche un / une…",
        "Vous pouvez me montrer… ?",
        "Je prends ça. / Je vais prendre…",
      ],
    },
    { type: "highlight", title: "Prix et paiement" },
    {
      type: "section",
      items: [
        "Ça coûte combien ? / C'est combien ?",
        "Ça fait 15 euros / 20 francs.",
        "Je paie par carte / en espèces.",
        "Voilà. / Merci. Au revoir !",
      ],
    },
    { type: "highlight", title: "Quantité et taille" },
    {
      type: "table",
      accentHeader: true,
      headers: ["Situation", "Formule"],
      rows: [
        ["Nourriture", "Je voudrais 200 grammes de fromage."],
        ["Fruit / pain", "Une baguette, s'il vous plaît."],
        ["Vêtements", "Vous avez en taille M ?"],
        ["Couleur", "Est-ce que vous l'avez en bleu ?"],
        ["Trop cher", "C'est un peu cher. Vous avez moins cher ?"],
      ],
    },
    { type: "highlight", title: "Lieux d'achat" },
    {
      type: "bullets",
      items: [
        "**la boulangerie** — pain, croissants",
        "**la boucherie** — viande",
        "**le supermarché** — courses générales",
        "**le magasin de vêtements** — habits",
        "**la pharmacie** — médicaments",
      ],
    },
    { type: "heading", text: "Exemple de dialogue", black: true },
    {
      type: "dialogue",
      lines: [
        { role: "A", text: "Bonjour, je voudrais une baguette, s'il vous plaît." },
        { role: "B", text: "Bien sûr. Et avec ceci ?" },
        { role: "A", text: "Deux croissants aussi, s'il vous plaît." },
        { role: "B", text: "Ça fait 5 francs 50." },
        { role: "A", text: "Je paie par carte. Voilà." },
        { role: "B", text: "Merci. Au revoir !" },
        { role: "A", text: "Au revoir, bonne journée !" },
      ],
    },
    {
      type: "vocab",
      items: [
        { fr: "je voudrais…", example: "Je voudrais un kilo de pommes." },
        { fr: "s'il vous plaît / merci", example: "Un café, s'il vous plaît." },
        { fr: "c'est combien ?", example: "C'est combien, ce pull ?" },
        { fr: "trop cher / en solde", example: "Ce manteau est en solde." },
        { fr: "essayer", example: "Je peux l'essayer ?" },
        { fr: "la caisse", example: "Passez à la caisse, s'il vous plaît." },
        { fr: "le ticket / le reçu", example: "Vous voulez le ticket ?" },
      ],
    },
    {
      type: "note",
      text: "Astuce : « Je voudrais » est plus poli que « Je veux ». Ajoute toujours **s'il vous plaît** et **merci**.",
    },
  ],
  exerciseCount: 8,
  exercisePool: [
    mcq("e1-5-t1-a", 1, "Quelle formule est polie pour demander un produit ?", "Je voudrais une baguette, s'il vous plaît.", [
      "Donne baguette.",
      "Je veux maintenant baguette.",
      "Baguette moi.",
    ]),
    mcq("e1-5-t1-b", 1, "Comment demande-t-on le prix ?", "C'est combien ?", [
      "C'est qui ?",
      "C'est où ?",
      "C'est quand ?",
    ]),
    mcq("e1-5-t1-c", 1, "Où achète-t-on du pain ?", "à la boulangerie", [
      "à la pharmacie",
      "à la boucherie",
      "à la banque",
    ]),
    mcq("e1-5-t1-d", 1, "« Je paie ___ carte. »", "par", [
      "à",
      "en",
      "de",
    ]),
    mcq("e1-5-t2-a", 2, "Quelle phrase est correcte ?", "Est-ce que vous avez des pommes ?", [
      "Est-ce que vous a des pommes ?",
      "Est-ce que tu avez des pomme ?",
      "Est-ce vous avez pommes ?",
    ]),
    mcq("e1-5-t2-b", 2, "Complétez : « Ça ___ 10 euros. »", "fait", [
      "coûte fait",
      "est fait",
      "a",
    ]),
    mcq("e1-5-t2-c", 2, "Le vendeur dit : « Et avec ceci ? » Que signifie cette question ?", "Vous voulez autre chose ?", [
      "C'est combien ?",
      "Vous payez comment ?",
      "Où habitez-vous ?",
    ]),
    mcq("e1-5-t2-d", 2, "« Je paie ___ espèces. »", "en", [
      "par",
      "à",
      "de",
    ]),
    mcq("e1-5-t3-a", 3, "Quelle réponse convient à « C'est combien ? »", "Ça fait 12 francs.", [
      "Ça est 12 francs.",
      "Ça a 12 francs.",
      "Ça fait suis 12 francs.",
    ]),
    mcq("e1-5-t3-b", 3, "Au magasin de vêtements, quelle question est correcte ?", "Vous avez en taille M ?", [
      "Vous avez en taille moi ?",
      "Vous avez taille le M ?",
      "Vous êtes en taille M ?",
    ]),
    mcq("e1-5-t3-c", 3, "Repérez l'erreur : « Je veux un kilo de fromage. » Quelle version est plus polie ?", "Je voudrais un kilo de fromage, s'il vous plaît.", [
      "Je veux un kilo de fromage, s'il te plaît monsieur.",
      "Donnez fromage kilo un.",
      "Je voudrais un kilo fromage.",
    ]),
    mcq("e1-5-t3-d", 3, "« Est-ce que je peux ___ ce pantalon ? »", "essayer", [
      "acheter essayer",
      "essaie",
      "essayé",
    ]),
    mcq("e1-5-t4-a", 4, "Quel dialogue d'achat est correct ?", "A : Bonjour, je voudrais deux croissants. B : Ça fait 4 francs. A : Voilà, merci.", [
      "A : Bonjour, je veux deux croissant. B : Ça est 4 francs. A : Voilà, merci.",
      "A : Bonjour, je voudrais deux croissants. B : Ça a 4 francs. A : Voilà, merci.",
      "A : Bonjour, donne deux croissants. B : Ça fait 4 francs. A : Voilà, merci.",
    ]),
    mcq("e1-5-t4-b", 4, "A : « C'est un peu cher. » Quelle suite est naturelle ?", "Vous avez quelque chose de moins cher ?", [
      "Vous avez quelque chose de plus âge ?",
      "Vous êtes quelque chose de moins cher ?",
      "Vous avez quelque chose moins le cher ?",
    ]),
    mcq("e1-5-t4-c", 4, "Choisissez la formule correcte pour terminer l'achat.", "Merci. Au revoir, bonne journée !", [
      "Merci. Bonjour, bonne journée !",
      "De rien. Au revoir, bonne journée !",
      "S'il vous plaît. Au revoir, bonne journée !",
    ]),
    mcq("e1-5-t5-a", 5, "Quelle scène d'achat est la plus complète et correcte ?", "Bonjour, je voudrais 200 grammes de jambon, s'il vous plaît. — Ça fait 6 francs. — Je paie par carte. Merci !", [
      "Bonjour, je veux 200 grammes jambon. — Ça est 6 francs. — Je paie par carte. Merci !",
      "Bonjour, je voudrais 200 grammes de jambon, s'il vous plaît. — Ça a 6 francs. — Je paie en carte. Merci !",
      "Bonjour, je voudrais 200 grammes de jambon, s'il vous plaît. — Ça fait 6 francs. — Je paie par carte. De rien !",
    ]),
    mcq("e1-5-t5-b", 5, "Repérez l'erreur : « Je cherche un pull. Vous avez en bleu ? C'est combien il ? » Correction ?", "Je cherche un pull. Vous l'avez en bleu ? C'est combien ?", [
      "Je cherche un pull. Vous avez en bleu ? C'est combien il coûte ça ?",
      "Je cherche un pull. Vous l'avez en bleu ? C'est qui ?",
      "Je cherche un pull. Vous avez en bleu ? Ça a combien ?",
    ]),
    mcq("e1-5-t5-c", 5, "Situation : tu es à la caisse. Quelle formulation est la meilleure ?", "Je paie par carte, s'il vous plaît. Vous me donnez le ticket ?", [
      "Je paie carte, s'il vous plaît. Vous me donnez le ticket ?",
      "Je paie par carte, s'il vous plaît. Vous me donnez le tickets ?",
      "Je suis paie par carte, s'il vous plaît. Vous me donnez le ticket ?",
    ]),
  ],
};

/** Toutes les leçons Expression orale — module E1 (Base). */
export const EXPRESS_E1_LESSONS: CommunicationLesson[] = [
  EXPRESS_E1_1,
  EXPRESS_E1_2,
  EXPRESS_E1_3,
  EXPRESS_E1_4,
  EXPRESS_E1_5,
];
