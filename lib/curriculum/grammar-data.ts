// Grammar lesson content: types + data for all 28 A1/A2 grammar lessons.
// Types are imported from conjugation-data to avoid duplication.

import type { TheoryBlock, Exercise } from "./conjugation-data";

export type { TheoryBlock, Exercise };

export type GrammarLesson = {
  slug: string;
  code: string;
  level: "A1" | "A2";
  title: string;
  theory: TheoryBlock[];
  exercises: Exercise[];
};

// ── A1 Lessons ────────────────────────────────────────────────────────────────

const a1GrL01: GrammarLesson = {
  slug: "a1-gr-l01",
  code: "G.1",
  level: "A1",
  title: "Pronoms sujets et le verbe être",
  theory: [
    { type: "heading", text: "Les pronoms sujets" },
    {
      type: "table",
      tables: [
        {
          verb: "être",
          rows: [
            { pronoun: "je", form: "suis" },
            { pronoun: "tu", form: "es" },
            { pronoun: "il / elle", form: "est" },
            { pronoun: "nous", form: "sommes" },
            { pronoun: "vous", form: "êtes" },
            { pronoun: "ils / elles", form: "sont" },
          ],
        },
      ],
    },
    {
      type: "rule",
      text: "J'utilise ÊTRE pour la nationalité, la profession ou un adjectif.",
      examples: [
        { correct: "Je suis française." },
        { correct: "Il est professeur." },
        { correct: "Nous sommes étudiants." },
      ],
    },
    {
      type: "rule",
      text: "TU = informel (amis, famille) ; VOUS = formel ou pluriel.",
      examples: [
        { correct: "Salut ! Tu es française ? (informel)" },
        { correct: "Bonjour Madame, vous êtes française ? (formel)" },
      ],
    },
    {
      type: "note",
      text: "s'appeler : je m'appelle, tu t'appelles, il/elle s'appelle, nous nous appelons, vous vous appelez, ils/elles s'appellent",
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Pronoms et être",
      instruction: "Choisissez la forme correcte de ÊTRE.",
      items: [
        { sentence: "Je ___ étudiant.", choices: ["suis", "est", "es", "sommes"], correctIdx: 0 },
        { sentence: "Elle ___ française.", choices: ["est", "suis", "êtes", "sont"], correctIdx: 0 },
        { sentence: "Nous ___ professeurs.", choices: ["sommes", "êtes", "suis", "est"], correctIdx: 0 },
        { sentence: "Ils ___ japonais.", choices: ["sont", "est", "suis", "sommes"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez avec être ou s'appeler",
      instruction: "Conjuguez le verbe entre parenthèses.",
      items: [
        { sentence: "Je ___ (s'appeler) Marco.", hint: "s'appeler", answer: "m'appelle" },
        { sentence: "Tu ___ (être) anglais ?", hint: "être", answer: "es" },
        { sentence: "Elle ___ (s'appeler) Aiko.", hint: "s'appeler", answer: "s'appelle" },
        { sentence: "Nous ___ (être) étudiants.", hint: "être", answer: "sommes" },
        { sentence: "Vous ___ (être) professeur ?", hint: "être", answer: "êtes" },
      ],
    },
  ],
};

const a1GrL02: GrammarLesson = {
  slug: "a1-gr-l02",
  code: "G.2",
  level: "A1",
  title: "La négation et l'interrogation de base",
  theory: [
    { type: "heading", text: "La négation : ne … pas" },
    {
      type: "rule",
      text: "La négation est en 2 parties : NE … PAS autour du verbe.",
      examples: [
        { correct: "Il n'est pas français.", wrong: "Il est pas français." },
      ],
    },
    {
      type: "rule",
      text: "Devant une voyelle, NE → N' (élision).",
      examples: [
        { correct: "Elle n'est pas étudiante." },
        { correct: "Je n'ai pas cours." },
      ],
    },
    { type: "heading", text: "L'interrogation avec est-ce que" },
    {
      type: "rule",
      text: "Est-ce que + sujet + verbe ? → question formelle et neutre.",
      examples: [
        { correct: "Est-ce que tu parles français ?" },
        { correct: "Est-ce qu'il est libre ?" },
      ],
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Forme négative",
      instruction: "Choisissez la bonne négation.",
      items: [
        { sentence: "Elle ___ française, elle est belge.", choices: ["n'est pas", "ne est pas", "n'est", "pas est"], correctIdx: 0 },
        { sentence: "Je ___ cours le vendredi.", choices: ["n'ai pas", "ne ai pas", "n'ai", "ne pas ai"], correctIdx: 0 },
        { sentence: "Ils ___ étudiants.", choices: ["ne sont pas", "ne pas sont", "n'est pas", "sont ne pas"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Mettez à la forme négative",
      instruction: "Transformez la phrase à la forme négative.",
      items: [
        { sentence: "Je ___ (être) français. (négatif)", hint: "ne…pas", answer: "ne suis pas" },
        { sentence: "Tu ___ (avoir) cours le samedi. (négatif)", hint: "ne…pas", answer: "n'as pas" },
        { sentence: "Elle ___ (s'appeler) Zoe. (négatif)", hint: "ne…pas", answer: "ne s'appelle pas" },
        { sentence: "Ils ___ (être) disponibles. (négatif)", hint: "ne…pas", answer: "ne sont pas" },
      ],
    },
  ],
};

const a1GrL03: GrammarLesson = {
  slug: "a1-gr-l03",
  code: "G.3",
  level: "A1",
  title: "Le genre des noms et des adjectifs",
  theory: [
    { type: "heading", text: "Le féminin des adjectifs de nationalité" },
    {
      type: "rule",
      text: "Règle générale : masculin + -e = féminin.",
      examples: [
        { correct: "français → française" },
        { correct: "américain → américaine" },
        { correct: "espagnol → espagnole" },
      ],
    },
    {
      type: "rule",
      text: "Adjectifs en -en : + -ne → -enne.",
      examples: [
        { correct: "australien → australienne" },
        { correct: "italien → italienne" },
      ],
    },
    {
      type: "rule",
      text: "Adjectifs déjà en -e : masculin = féminin.",
      examples: [
        { correct: "russe / russe" },
        { correct: "belge / belge" },
        { correct: "suisse / suisse" },
      ],
    },
    { type: "heading", text: "Le pluriel des adjectifs" },
    {
      type: "rule",
      text: "Pluriel = + -s (prononciation identique).",
      examples: [
        { correct: "il est américain → ils sont américains" },
        { correct: "elle est française → elles sont françaises" },
      ],
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Masculin ou féminin ?",
      instruction: "Choisissez la forme correcte.",
      items: [
        { sentence: "Aiko est ___.", choices: ["japonaise", "japonais", "japonaisel", "japonaises"], correctIdx: 0 },
        { sentence: "Marco est ___.", choices: ["italien", "italienne", "italiens", "italiennes"], correctIdx: 0 },
        { sentence: "Sarah et Emma sont ___.", choices: ["américaines", "américain", "américaine", "américains"], correctIdx: 0 },
        { sentence: "Pablo est ___.", choices: ["argentin", "argentine", "argentines", "argentins"], correctIdx: 0 },
      ],
    },
    {
      type: "match",
      title: "Masculin → Féminin",
      instruction: "Associez le masculin avec le féminin.",
      pairs: [
        { left: "français", right: "française" },
        { left: "espagnol", right: "espagnole" },
        { left: "américain", right: "américaine" },
        { left: "australien", right: "australienne" },
        { left: "belge", right: "belge" },
      ],
    },
  ],
};

const a1GrL04: GrammarLesson = {
  slug: "a1-gr-l04",
  code: "G.4",
  level: "A1",
  title: "Les articles définis et indéfinis",
  theory: [
    { type: "heading", text: "Les articles indéfinis" },
    {
      type: "table",
      tables: [
        {
          verb: "Article indéfini",
          rows: [
            { pronoun: "Masculin sing.", form: "un cinéma" },
            { pronoun: "Féminin sing.", form: "une piscine" },
            { pronoun: "Pluriel", form: "des restaurants" },
          ],
        },
      ],
    },
    {
      type: "rule",
      text: "Articles indéfinis → chose non spécifique / introduire pour la première fois.",
      examples: [
        { correct: "Il y a un cinéma dans mon quartier." },
        { correct: "J'ai un ami français." },
      ],
    },
    { type: "heading", text: "Les articles définis" },
    {
      type: "table",
      tables: [
        {
          verb: "Article défini",
          rows: [
            { pronoun: "Masculin sing.", form: "le cinéma" },
            { pronoun: "Féminin sing.", form: "la piscine" },
            { pronoun: "Devant voyelle", form: "l'école" },
            { pronoun: "Pluriel", form: "les restaurants" },
          ],
        },
      ],
    },
    {
      type: "rule",
      text: "Articles définis → chose connue / spécifique.",
      examples: [
        { correct: "J'aime le cinéma. (en général)" },
        { correct: "Le cinéma de mon quartier est sympa." },
      ],
    },
    {
      type: "rule",
      text: "Avec la négation : un/une/des → de/d'.",
      examples: [
        { correct: "Il y a des musées. → Il n'y a pas de musées.", wrong: "Il n'y a pas des musées." },
      ],
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Quel article ?",
      instruction: "Choisissez l'article correct.",
      items: [
        { sentence: "Dans mon quartier, il y a ___ cinéma.", choices: ["un", "une", "le", "des"], correctIdx: 0 },
        { sentence: "J'aime ___ musique.", choices: ["la", "une", "de", "des"], correctIdx: 0 },
        { sentence: "Il n'y a pas ___ piscine ici.", choices: ["de", "une", "la", "des"], correctIdx: 0 },
        { sentence: "C'est ___ ami de Marco.", choices: ["un", "le", "une", "des"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez avec l'article",
      instruction: "Choisissez : un/une/des/le/la/l'/les.",
      items: [
        { sentence: "___ école est grande.", hint: "article défini féminin", answer: "L'" },
        { sentence: "Il y a ___ restaurants dans ma rue.", hint: "article indéfini pluriel", answer: "des" },
        { sentence: "J'adore ___ films français.", hint: "article défini pluriel", answer: "les" },
        { sentence: "C'est ___ professeur de français.", hint: "article indéfini masculin", answer: "un" },
      ],
    },
  ],
};

const a1GrL05: GrammarLesson = {
  slug: "a1-gr-l05",
  code: "G.5",
  level: "A1",
  title: "Le verbe avoir et les adjectifs possessifs",
  theory: [
    { type: "heading", text: "Le verbe AVOIR" },
    {
      type: "table",
      tables: [
        {
          verb: "avoir",
          rows: [
            { pronoun: "j'", form: "ai" },
            { pronoun: "tu", form: "as" },
            { pronoun: "il / elle", form: "a" },
            { pronoun: "nous", form: "avons" },
            { pronoun: "vous", form: "avez" },
            { pronoun: "ils / elles", form: "ont" },
          ],
        },
      ],
    },
    {
      type: "rule",
      text: "Avoir pour l'âge : avoir + nombre + ans.",
      examples: [
        { correct: "J'ai 25 ans.", wrong: "Je suis 25 ans." },
      ],
    },
    {
      type: "rule",
      text: "Élision : je + ai = j'ai devant voyelle.",
      examples: [
        { correct: "J'ai une question.", wrong: "Je ai une question." },
      ],
    },
    { type: "heading", text: "Les adjectifs possessifs" },
    {
      type: "table",
      tables: [
        {
          verb: "Adjectifs possessifs",
          rows: [
            { pronoun: "je", form: "mon / ma / mes" },
            { pronoun: "tu", form: "ton / ta / tes" },
            { pronoun: "il / elle", form: "son / sa / ses" },
            { pronoun: "nous", form: "notre / nos" },
            { pronoun: "vous", form: "votre / vos" },
            { pronoun: "ils / elles", form: "leur / leurs" },
          ],
        },
      ],
    },
    {
      type: "rule",
      text: "Devant voyelle au féminin singulier : ma/ta/sa → mon/ton/son.",
      examples: [
        { correct: "mon amie (féminin, voyelle)", wrong: "ma amie" },
      ],
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Verbe AVOIR",
      instruction: "Choisissez la forme correcte.",
      items: [
        { sentence: "Sophie ___ 30 ans.", choices: ["a", "ai", "as", "ont"], correctIdx: 0 },
        { sentence: "Nous ___ du temps libre.", choices: ["avons", "ai", "a", "avez"], correctIdx: 0 },
        { sentence: "___ un rendez-vous mardi.", choices: ["J'ai", "Je ai", "J'est", "J'être"], correctIdx: 0 },
      ],
    },
    {
      type: "qcm",
      title: "Adjectifs possessifs",
      instruction: "Choisissez le bon possessif.",
      items: [
        { sentence: "C'est ___ livre. (à moi)", choices: ["mon", "ton", "son", "ma"], correctIdx: 0 },
        { sentence: "C'est ___ amie. (à toi, féminin + voyelle)", choices: ["ton", "ta", "son", "mon"], correctIdx: 0 },
        { sentence: "Nous avons ___ cours le lundi.", choices: ["notre", "nos", "votre", "leur"], correctIdx: 0 },
        { sentence: "Ils ont ___ disponibilités le mardi.", choices: ["leurs", "leur", "son", "mes"], correctIdx: 0 },
      ],
    },
  ],
};

const a1GrL06: GrammarLesson = {
  slug: "a1-gr-l06",
  code: "G.6",
  level: "A1",
  title: "Être et avoir — révision",
  theory: [
    { type: "heading", text: "ÊTRE ou AVOIR ?" },
    {
      type: "rule",
      text: "ÊTRE + nationalité/profession/adjectif.",
      examples: [
        { correct: "Elle est française." },
        { correct: "Il est professeur." },
        { correct: "Ils sont dynamiques." },
      ],
    },
    {
      type: "rule",
      text: "AVOIR + âge / avoir + nom (avec article) / expressions.",
      examples: [
        { correct: "Elle a 45 ans." },
        { correct: "J'ai cours demain." },
        { correct: "Ils ont un bureau." },
      ],
    },
    {
      type: "table",
      tables: [
        {
          verb: "Expressions avec AVOIR",
          rows: [
            { pronoun: "avoir + âge", form: "avoir 20 ans" },
            { pronoun: "avoir cours", form: "avoir cours le lundi" },
            { pronoun: "avoir rendez-vous", form: "avoir rendez-vous avec quelqu'un" },
            { pronoun: "avoir du temps", form: "être disponible" },
          ],
        },
      ],
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Être ou Avoir ?",
      instruction: "Choisissez le bon verbe.",
      items: [
        { sentence: "Ivan ___ disponible le vendredi.", choices: ["est", "a", "sont", "ont"], correctIdx: 0 },
        { sentence: "Les professeurs ___ cours tous les jours.", choices: ["ont", "sont", "a", "est"], correctIdx: 0 },
        { sentence: "Julien et Charlotte ___ français.", choices: ["sont", "ont", "a", "est"], correctIdx: 0 },
        { sentence: "Elena ___ 25 ans.", choices: ["a", "est", "ont", "ai"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez avec être ou avoir",
      instruction: "Conjuguez le bon verbe à la forme correcte.",
      items: [
        { sentence: "Julien ___ (être/avoir) professeur.", hint: "être ou avoir ?", answer: "est" },
        { sentence: "Les tuteurs ___ (être/avoir) un bureau.", hint: "être ou avoir ?", answer: "ont" },
        { sentence: "Tu ___ (être/avoir) libre ce soir ?", hint: "être ou avoir ?", answer: "es" },
        { sentence: "Nous ___ (être/avoir) rendez-vous à 14h.", hint: "être ou avoir ?", answer: "avons" },
        { sentence: "Sophie ___ (être/avoir) jeune et dynamique.", hint: "être ou avoir ?", answer: "est" },
      ],
    },
  ],
};

const a1GrL10: GrammarLesson = {
  slug: "a1-gr-l10",
  code: "G.7",
  level: "A1",
  title: "L'interrogation avec les mots interrogatifs",
  theory: [
    { type: "heading", text: "Les mots interrogatifs" },
    {
      type: "table",
      tables: [
        {
          verb: "Mots interrogatifs",
          rows: [
            { pronoun: "Où ?", form: "localisation → Tu habites où ?" },
            { pronoun: "Quand ?", form: "temps → Vous partez quand ?" },
            { pronoun: "Qui ?", form: "personne → Qui est-ce que tu appelles ?" },
            { pronoun: "Comment ?", form: "manière → Comment tu t'appelles ?" },
            { pronoun: "Pourquoi ?", form: "raison → Pourquoi tu étudies le français ?" },
            { pronoun: "Combien ?", form: "quantité → Vous avez combien d'élèves ?" },
          ],
        },
      ],
    },
    {
      type: "rule",
      text: "Mot interrogatif + est-ce que + sujet + verbe ? (neutre)",
      examples: [
        { correct: "Où est-ce que tu habites ?" },
        { correct: "Quand est-ce qu'il arrive ?" },
      ],
    },
    {
      type: "rule",
      text: "Mot interrogatif en fin de phrase (informel oral).",
      examples: [
        { correct: "Tu habites où ?" },
        { correct: "Il arrive quand ?" },
      ],
    },
  ],
  exercises: [
    {
      type: "match",
      title: "Associez question et réponse",
      instruction: "Reliez chaque question à la bonne réponse.",
      pairs: [
        { left: "Tu habites où ?", right: "J'habite à Paris." },
        { left: "Tu t'appelles comment ?", right: "Je m'appelle Marco." },
        { left: "Tu pars quand ?", right: "Je pars demain." },
        { left: "Tu as combien d'amis ?", right: "J'ai beaucoup d'amis." },
        { left: "Pourquoi tu étudies ?", right: "Pour travailler en France." },
      ],
    },
    {
      type: "qcm",
      title: "Quel mot interrogatif ?",
      instruction: "Choisissez le mot interrogatif correct.",
      items: [
        { sentence: "___ tu t'appelles ?", choices: ["Comment", "Où", "Quand", "Combien"], correctIdx: 0 },
        { sentence: "___ tu habites ?", choices: ["Où", "Qui", "Comment", "Pourquoi"], correctIdx: 0 },
        { sentence: "___ est-ce que vous partez ?", choices: ["Quand", "Où", "Comment", "Combien"], correctIdx: 0 },
        { sentence: "___ tu étudies le français ?", choices: ["Pourquoi", "Où", "Qui", "Comment"], correctIdx: 0 },
      ],
    },
  ],
};

const a1GrL11: GrammarLesson = {
  slug: "a1-gr-l11",
  code: "G.8",
  level: "A1",
  title: "Les prépositions de lieu",
  theory: [
    { type: "heading", text: "Les prépositions de lieu statiques" },
    {
      type: "table",
      tables: [
        {
          verb: "Prépositions de lieu",
          rows: [
            { pronoun: "dans", form: "à l'intérieur → dans le sac" },
            { pronoun: "sur", form: "surface → sur la table" },
            { pronoun: "sous", form: "en dessous → sous la chaise" },
            { pronoun: "devant", form: "face avant → devant l'école" },
            { pronoun: "derrière", form: "face arrière → derrière la voiture" },
            { pronoun: "à côté de", form: "proximité → à côté du cinéma" },
            { pronoun: "en face de", form: "vis-à-vis → en face de la gare" },
          ],
        },
      ],
    },
    {
      type: "rule",
      text: "à + le = au / à + les = aux.",
      examples: [
        { correct: "Je vais au cinéma." },
        { correct: "Je suis aux États-Unis." },
      ],
    },
    {
      type: "rule",
      text: "de + le = du / de + les = des.",
      examples: [
        { correct: "Je viens du marché." },
        { correct: "Je viens des États-Unis." },
      ],
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Quelle préposition ?",
      instruction: "Choisissez la bonne préposition.",
      items: [
        { sentence: "Le livre est ___ la table.", choices: ["sur", "sous", "dans", "devant"], correctIdx: 0 },
        { sentence: "L'école est ___ le cinéma.", choices: ["en face de", "sur", "sous", "derrière"], correctIdx: 0 },
        { sentence: "Le chat est ___ la chaise.", choices: ["sous", "sur", "dans", "devant"], correctIdx: 0 },
        { sentence: "La boulangerie est ___ la pharmacie.", choices: ["à côté de", "sous", "dans", "sur"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Complétez avec la bonne préposition.",
      items: [
        { sentence: "Le sac est ___ la chaise.", hint: "au-dessous", answer: "sous" },
        { sentence: "Je vais ___ cinéma ce soir.", hint: "à + le", answer: "au" },
        { sentence: "Elle habite ___ de la gare.", hint: "vis-à-vis", answer: "en face" },
        { sentence: "Mon bureau est ___ la bibliothèque.", hint: "proximité", answer: "à côté de" },
      ],
    },
  ],
};

const a1GrL14: GrammarLesson = {
  slug: "a1-gr-l14",
  code: "G.9",
  level: "A1",
  title: "Les articles partitifs et la quantité",
  theory: [
    { type: "heading", text: "Les articles partitifs" },
    {
      type: "table",
      tables: [
        {
          verb: "Partitifs",
          rows: [
            { pronoun: "Masculin sing.", form: "du pain, du lait" },
            { pronoun: "Féminin sing.", form: "de la viande, de la musique" },
            { pronoun: "Voyelle", form: "de l'eau, de l'argent" },
            { pronoun: "Pluriel", form: "des légumes" },
          ],
        },
      ],
    },
    {
      type: "rule",
      text: "Partitifs = quantité indéterminée (une partie de quelque chose).",
      examples: [
        { correct: "Je mange du pain. (une partie du pain)" },
        { correct: "Je bois de l'eau." },
      ],
    },
    {
      type: "rule",
      text: "Avec négation : du/de la/de l'/des → de/d'.",
      examples: [
        { correct: "Je ne mange pas de viande.", wrong: "Je ne mange pas de la viande." },
      ],
    },
    { type: "heading", text: "La quantité déterminée" },
    {
      type: "rule",
      text: "quantité + de + nom (sans article).",
      examples: [
        { correct: "un kilo de pommes" },
        { correct: "beaucoup de lait" },
        { correct: "un peu de sucre" },
        { correct: "une bouteille d'eau" },
      ],
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Quel article partitif ?",
      instruction: "Choisissez l'article correct.",
      items: [
        { sentence: "Je bois ___ café le matin.", choices: ["du", "de la", "de l'", "des"], correctIdx: 0 },
        { sentence: "Elle mange ___ viande chaque jour.", choices: ["de la", "du", "de l'", "un"], correctIdx: 0 },
        { sentence: "Il y a ___ eau dans le frigo.", choices: ["de l'", "du", "de la", "des"], correctIdx: 0 },
        { sentence: "Je ne mange pas ___ sucre.", choices: ["de", "du", "de la", "des"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Choisissez le bon article ou la bonne préposition.",
      items: [
        { sentence: "Je voudrais un kilo ___ carottes.", hint: "quantité + ?", answer: "de" },
        { sentence: "Elle boit ___ thé tous les matins.", hint: "partitif masculin", answer: "du" },
        { sentence: "Il n'y a pas ___ beurre dans le frigo.", hint: "négation + partitif", answer: "de" },
        { sentence: "Beaucoup ___ gens aiment le café.", hint: "quantité + de", answer: "de" },
      ],
    },
  ],
};

const a1GrL17: GrammarLesson = {
  slug: "a1-gr-l17",
  code: "G.10",
  level: "A1",
  title: "Il y a et les prépositions dans la maison",
  theory: [
    { type: "heading", text: "Il y a / Il n'y a pas de" },
    {
      type: "rule",
      text: "Il y a + un/une/des + nom → existence affirmative.",
      examples: [
        { correct: "Dans mon quartier, il y a un cinéma." },
        { correct: "Il y a des restaurants." },
      ],
    },
    {
      type: "rule",
      text: "Il n'y a pas de + nom → existence négative.",
      examples: [
        { correct: "Il n'y a pas de métro.", wrong: "Il n'y a pas un métro." },
      ],
    },
    {
      type: "rule",
      text: "Devant voyelle : pas de → pas d'.",
      examples: [
        { correct: "Il n'y a pas d'école ici." },
      ],
    },
    { type: "heading", text: "Prépositions dans la maison" },
    {
      type: "table",
      tables: [
        {
          verb: "Localiser dans la maison",
          rows: [
            { pronoun: "dans la chambre", form: "dans + pièce" },
            { pronoun: "sur le lit", form: "sur + meuble" },
            { pronoun: "sous le lit", form: "sous + meuble" },
            { pronoun: "à côté du bureau", form: "à côté de + lieu" },
            { pronoun: "en face de la fenêtre", form: "en face de + lieu" },
          ],
        },
      ],
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Il y a ou Il n'y a pas ?",
      instruction: "Choisissez la forme correcte.",
      items: [
        { sentence: "Dans mon quartier, ___ un cinéma.", choices: ["il y a", "il n'y a pas de", "il y a de", "il n'y a"], correctIdx: 0 },
        { sentence: "Il ___ de piscine ici, c'est dommage.", choices: ["n'y a pas", "y a", "n'y a pas un", "n'y a"], correctIdx: 0 },
        { sentence: "Il n'y a pas ___ école dans ce quartier.", choices: ["d'", "de la", "un", "des"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Décrivez",
      instruction: "Complétez avec il y a ou il n'y a pas de/d'.",
      items: [
        { sentence: "___ un marché le samedi matin. (existence)", hint: "affirmatif", answer: "Il y a" },
        { sentence: "___ musées ici. (absence)", hint: "négatif", answer: "Il n'y a pas de" },
        { sentence: "___ tramway et des bus. (existence)", hint: "affirmatif", answer: "Il y a un" },
        { sentence: "___ restaurants dans ce quartier ? (question)", hint: "interrogatif", answer: "Il y a des" },
      ],
    },
  ],
};

const a1GrL18: GrammarLesson = {
  slug: "a1-gr-l18",
  code: "G.11",
  level: "A1",
  title: "Les adjectifs démonstratifs",
  theory: [
    { type: "heading", text: "Les adjectifs démonstratifs" },
    {
      type: "table",
      tables: [
        {
          verb: "Démonstratifs",
          rows: [
            { pronoun: "Masculin sing.", form: "ce livre / cet homme (voyelle)" },
            { pronoun: "Féminin sing.", form: "cette femme / cette école" },
            { pronoun: "Pluriel", form: "ces livres / ces femmes" },
          ],
        },
      ],
    },
    {
      type: "rule",
      text: "Masculin singulier devant voyelle ou H muet : ce → cet.",
      examples: [
        { correct: "cet appartement" },
        { correct: "cet hôtel", wrong: "ce appartement" },
      ],
    },
    {
      type: "rule",
      text: "Démonstratif = désigner quelque chose de proche ou mentionné.",
      examples: [
        { correct: "Regarde ce film !" },
        { correct: "J'aime cette ville." },
        { correct: "Ces étudiants sont sympas." },
      ],
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Quel démonstratif ?",
      instruction: "Choisissez le bon adjectif démonstratif.",
      items: [
        { sentence: "___ appartement est grand.", choices: ["Cet", "Ce", "Cette", "Ces"], correctIdx: 0 },
        { sentence: "___ école est connue.", choices: ["Cette", "Cet", "Ce", "Ces"], correctIdx: 0 },
        { sentence: "___ livres sont intéressants.", choices: ["Ces", "Ce", "Cet", "Cette"], correctIdx: 0 },
        { sentence: "___ film est super !", choices: ["Ce", "Cet", "Cette", "Ces"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Ajoutez le bon adjectif démonstratif.",
      items: [
        { sentence: "___ hôtel est très confortable.", hint: "masc. sing. + voyelle", answer: "Cet" },
        { sentence: "___ restaurants sont excellents.", hint: "pluriel", answer: "Ces" },
        { sentence: "___ ville est magnifique.", hint: "féminin singulier", answer: "Cette" },
        { sentence: "___ étudiant est sérieux.", hint: "masc. sing. + voyelle", answer: "Cet" },
      ],
    },
  ],
};

const a1GrL19: GrammarLesson = {
  slug: "a1-gr-l19",
  code: "G.12",
  level: "A1",
  title: "Les adjectifs possessifs",
  theory: [
    { type: "heading", text: "Les adjectifs possessifs" },
    {
      type: "table",
      tables: [
        {
          verb: "Possessifs",
          rows: [
            { pronoun: "je", form: "mon (m.) / ma (f.) / mes (pl.)" },
            { pronoun: "tu", form: "ton (m.) / ta (f.) / tes (pl.)" },
            { pronoun: "il / elle", form: "son (m.) / sa (f.) / ses (pl.)" },
            { pronoun: "nous", form: "notre / notre / nos" },
            { pronoun: "vous", form: "votre / votre / vos" },
            { pronoun: "ils / elles", form: "leur / leur / leurs" },
          ],
        },
      ],
    },
    {
      type: "rule",
      text: "Devant voyelle féminin : ma/ta/sa → mon/ton/son.",
      examples: [
        { correct: "mon amie (féminin + voyelle)" },
        { correct: "ton école", wrong: "ma amie" },
      ],
    },
    {
      type: "rule",
      text: "Le possessif s'accorde avec le NOM possédé (pas avec le possesseur).",
      examples: [
        { correct: "Il a sa voiture. (sa = féminin car voiture est féminin)" },
        { correct: "Elle a son livre. (son = masculin car livre est masculin)" },
      ],
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Quel possessif ?",
      instruction: "Choisissez le bon adjectif possessif.",
      items: [
        { sentence: "C'est ___ livre. (à moi, livre = masc.)", choices: ["mon", "ma", "son", "ton"], correctIdx: 0 },
        { sentence: "C'est ___ amie. (à toi, amie = fém. + voyelle)", choices: ["ton", "ta", "son", "mon"], correctIdx: 0 },
        { sentence: "Ce sont ___ parents. (à lui)", choices: ["ses", "sa", "son", "leurs"], correctIdx: 0 },
        { sentence: "C'est ___ voiture. (à nous)", choices: ["notre", "votre", "leur", "nos"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez avec le possessif",
      instruction: "Ajoutez le bon adjectif possessif.",
      items: [
        { sentence: "J'aime ___ professeur de français.", hint: "à moi, masc.", answer: "mon" },
        { sentence: "Elle a ___ cours le lundi.", hint: "à elle, masc.", answer: "son" },
        { sentence: "Ils ont ___ réunion demain.", hint: "à eux, fém.", answer: "leur" },
        { sentence: "C'est ___ école préférée. (à nous)", hint: "à nous, fém.", answer: "notre" },
      ],
    },
  ],
};

const a1GrL22: GrammarLesson = {
  slug: "a1-gr-l22",
  code: "G.13",
  level: "A1",
  title: "La fréquence",
  theory: [
    { type: "heading", text: "Les adverbes de fréquence" },
    {
      type: "table",
      tables: [
        {
          verb: "Fréquence (100% → 0%)",
          rows: [
            { pronoun: "toujours", form: "100% → Je travaille toujours le lundi." },
            { pronoun: "souvent", form: "~75% → Il va souvent au cinéma." },
            { pronoun: "parfois", form: "~50% → Elle mange parfois au restaurant." },
            { pronoun: "rarement", form: "~25% → Nous voyageons rarement." },
            { pronoun: "jamais", form: "0% → Je ne fais jamais de sport." },
          ],
        },
      ],
    },
    {
      type: "rule",
      text: "L'adverbe se place APRÈS le verbe (présent).",
      examples: [
        { correct: "Je travaille souvent le week-end.", wrong: "Je souvent travaille le week-end." },
      ],
    },
    {
      type: "rule",
      text: "Avec jamais : ne … jamais (structure de négation).",
      examples: [
        { correct: "Je ne mange jamais de viande.", wrong: "Je mange jamais de viande." },
      ],
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Quel adverbe de fréquence ?",
      instruction: "Choisissez l'adverbe correct.",
      items: [
        { sentence: "Je ___ mange au restaurant, une fois par an.", choices: ["rarement", "toujours", "souvent", "jamais"], correctIdx: 0 },
        { sentence: "Elle ___ au travail le lundi, c'est son jour.", choices: ["va toujours", "toujours va", "va jamais", "jamais va"], correctIdx: 0 },
        { sentence: "Je ne fais ___ de sport.", choices: ["jamais", "souvent", "toujours", "parfois"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Ajoutez l'adverbe de fréquence à la bonne place.",
      items: [
        { sentence: "Il ___ au cinéma le vendredi. (souvent)", hint: "après le verbe", answer: "va souvent" },
        { sentence: "Elle ne mange ___ de sucre. (jamais)", hint: "ne…jamais", answer: "jamais" },
        { sentence: "Nous ___ du yoga le matin. (parfois)", hint: "après le verbe", answer: "faisons parfois" },
      ],
    },
  ],
};

const a1GrL23: GrammarLesson = {
  slug: "a1-gr-l23",
  code: "G.14",
  level: "A1",
  title: "Les adjectifs qualificatifs",
  theory: [
    { type: "heading", text: "Le genre des adjectifs qualificatifs" },
    {
      type: "rule",
      text: "Masculin → féminin : ajouter -e (si pas déjà en -e).",
      examples: [
        { correct: "grand → grande" },
        { correct: "petit → petite" },
        { correct: "joli → jolie" },
      ],
    },
    {
      type: "rule",
      text: "Adjectifs déjà en -e : invariables.",
      examples: [
        { correct: "sympa / sympa" },
        { correct: "moderne / moderne" },
      ],
    },
    { type: "heading", text: "La place des adjectifs" },
    {
      type: "rule",
      text: "En général, l'adjectif se place APRÈS le nom.",
      examples: [
        { correct: "un film intéressant" },
        { correct: "une ville moderne" },
      ],
    },
    {
      type: "rule",
      text: "BAGS (Beauty, Age, Goodness, Size) = devant le nom.",
      examples: [
        { correct: "un beau film" },
        { correct: "une grande ville" },
        { correct: "un bon restaurant" },
        { correct: "un vieux quartier" },
      ],
    },
    { type: "heading", text: "Le pluriel" },
    {
      type: "rule",
      text: "Pluriel = + -s (sauf si déjà en -s ou -x).",
      examples: [
        { correct: "un film intéressant → des films intéressants" },
        { correct: "un beau livre → de beaux livres" },
      ],
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Masculin ou féminin ?",
      instruction: "Choisissez la forme correcte.",
      items: [
        { sentence: "Une ville ___.", choices: ["moderne", "moderné", "modernes", "modernes"], correctIdx: 0 },
        { sentence: "Une femme ___.", choices: ["grande", "grand", "grands", "grandes"], correctIdx: 0 },
        { sentence: "Un homme ___.", choices: ["sympa", "sympas", "sympe", "sympal"], correctIdx: 0 },
      ],
    },
    {
      type: "qcm",
      title: "Place de l'adjectif",
      instruction: "Choisissez la phrase correcte.",
      items: [
        { sentence: "Un ___ restaurant.", choices: ["bon", "intéressant", "moderne", "sympa"], correctIdx: 0 },
        { sentence: "Une ville ___.", choices: ["intéressante", "belle ville", "bonne", "grande"], correctIdx: 3 },
        { sentence: "Je lis un livre ___.", choices: ["passionnant", "bon livre", "vieux", "grand"], correctIdx: 0 },
      ],
    },
  ],
};

const a1GrL24: GrammarLesson = {
  slug: "a1-gr-l24",
  code: "G.15",
  level: "A1",
  title: "Le comparatif et le superlatif",
  theory: [
    { type: "heading", text: "Le comparatif" },
    {
      type: "table",
      tables: [
        {
          verb: "Comparatif",
          rows: [
            { pronoun: "supériorité", form: "plus + adj/adv + que" },
            { pronoun: "égalité", form: "aussi + adj/adv + que" },
            { pronoun: "infériorité", form: "moins + adj/adv + que" },
          ],
        },
      ],
    },
    {
      type: "rule",
      text: "Exemples de comparatif d'adjectifs.",
      examples: [
        { correct: "Paris est plus grande que Lyon." },
        { correct: "Ce film est aussi intéressant que l'autre." },
        { correct: "Ce restaurant est moins cher que l'autre." },
      ],
    },
    { type: "heading", text: "Le superlatif" },
    {
      type: "rule",
      text: "le/la/les + plus/moins + adjectif.",
      examples: [
        { correct: "C'est le plus beau quartier." },
        { correct: "C'est la moins chère option." },
        { correct: "Ce sont les meilleurs restaurants." },
      ],
    },
    {
      type: "note",
      text: "Comparatif irrégulier : bon → meilleur / bien → mieux.",
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Comparatif",
      instruction: "Choisissez la bonne forme.",
      items: [
        { sentence: "Paris est ___ Lyon.", choices: ["plus grande que", "plus grand que", "plus grande de", "aussi grande"], correctIdx: 0 },
        { sentence: "Ce film est ___ intéressant ___ l'autre.", choices: ["aussi ... que", "plus ... de", "moins ... que", "aussi ... de"], correctIdx: 0 },
        { sentence: "Ce restaurant est ___ cher ___ l'autre.", choices: ["moins ... que", "plus ... de", "aussi ... de", "moins ... de"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez avec le comparatif",
      instruction: "Utilisez plus/aussi/moins + que.",
      items: [
        { sentence: "Le TGV est ___ (rapide) ___ le bus. (+)", hint: "supériorité", answer: "plus rapide que" },
        { sentence: "Ce livre est ___ (cher) ___ l'autre. (=)", hint: "égalité", answer: "aussi cher que" },
        { sentence: "Cette ville est ___ (grande) ___ Paris. (-)", hint: "infériorité", answer: "moins grande que" },
      ],
    },
  ],
};

const a1GrL25: GrammarLesson = {
  slug: "a1-gr-l25",
  code: "G.16",
  level: "A1",
  title: "Savoir ou connaître ?",
  theory: [
    { type: "heading", text: "SAVOIR ou CONNAÎTRE ?" },
    {
      type: "table",
      tables: [
        {
          verb: "savoir",
          rows: [
            { pronoun: "je", form: "sais" },
            { pronoun: "tu", form: "sais" },
            { pronoun: "il / elle", form: "sait" },
            { pronoun: "nous", form: "savons" },
            { pronoun: "vous", form: "savez" },
            { pronoun: "ils / elles", form: "savent" },
          ],
        },
        {
          verb: "connaître",
          rows: [
            { pronoun: "je", form: "connais" },
            { pronoun: "tu", form: "connais" },
            { pronoun: "il / elle", form: "connaît" },
            { pronoun: "nous", form: "connaissons" },
            { pronoun: "vous", form: "connaissez" },
            { pronoun: "ils / elles", form: "connaissent" },
          ],
        },
      ],
    },
    {
      type: "rule",
      text: "SAVOIR = savoir faire quelque chose / savoir un fait. Savoir + infinitif ou que.",
      examples: [
        { correct: "Je sais nager." },
        { correct: "Je sais qu'il est français." },
      ],
    },
    {
      type: "rule",
      text: "CONNAÎTRE = connaître une personne, un lieu, une chose. Connaître + nom.",
      examples: [
        { correct: "Je connais Paris." },
        { correct: "Tu connais Marco ?", wrong: "Je sais Paris." },
      ],
    },
  ],
  exercises: [
    {
      type: "match",
      title: "Savoir ou Connaître ?",
      instruction: "Associez chaque phrase avec le bon verbe.",
      pairs: [
        { left: "Je ___ nager.", right: "sais" },
        { left: "Tu ___ Marco ?", right: "connais" },
        { left: "Il ___ Paris.", right: "connaît" },
        { left: "Nous ___ parler français.", right: "savons" },
        { left: "Elles ___ cette chanson.", right: "connaissent" },
      ],
    },
    {
      type: "qcm",
      title: "Savoir ou Connaître ?",
      instruction: "Choisissez le bon verbe.",
      items: [
        { sentence: "Tu ___ conduire ?", choices: ["sais", "connais", "savoir", "connaître"], correctIdx: 0 },
        { sentence: "Elle ___ bien ce quartier.", choices: ["connaît", "sait", "connais", "savons"], correctIdx: 0 },
        { sentence: "Je ne ___ pas son adresse.", choices: ["connais", "sais", "connaît", "savoir"], correctIdx: 0 },
      ],
    },
  ],
};

// ── A2 Lessons ────────────────────────────────────────────────────────────────

const a2GrL07: GrammarLesson = {
  slug: "a2-gr-l07",
  code: "G.17",
  level: "A2",
  title: "L'interrogation (questions fermées)",
  theory: [
    { type: "heading", text: "Les questions fermées : 3 façons" },
    {
      type: "rule",
      text: "1. Intonation montante (informel oral) : sujet + verbe + ?",
      examples: [
        { correct: "Tu parles français ?" },
        { correct: "Il comprend ?" },
      ],
    },
    {
      type: "rule",
      text: "2. Est-ce que + sujet + verbe ? (neutre)",
      examples: [
        { correct: "Est-ce que tu parles français ?" },
        { correct: "Est-ce qu'il comprend ?" },
      ],
    },
    {
      type: "rule",
      text: "3. Verbe + sujet (inversion) : formel.",
      examples: [
        { correct: "Parlez-vous français ?" },
        { correct: "Comprend-il ?" },
        { correct: "A-t-il le temps ? (t euphonique)" },
      ],
    },
    {
      type: "note",
      text: "Inversion avec -t- quand le verbe finit par voyelle + il/elle/on. Ex: va-t-il, a-t-elle.",
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Reformulez la question",
      instruction: "Choisissez la forme correcte avec inversion.",
      items: [
        { sentence: "Tu comprends ? → ___", choices: ["Comprends-tu ?", "Comprends-vous ?", "Comprend-tu ?", "Tu comprends ?"], correctIdx: 0 },
        { sentence: "Il part ? → ___", choices: ["Part-il ?", "Parte-il ?", "Il part-il ?", "Parti-il ?"], correctIdx: 0 },
        { sentence: "Elle va ? → ___", choices: ["Va-t-elle ?", "Vas-elle ?", "Elle va ?", "Va-elle ?"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Transformez",
      instruction: "Reformulez avec est-ce que.",
      items: [
        { sentence: "Tu aimes la musique ? → Est-ce que ___", hint: "est-ce que + sujet + verbe", answer: "tu aimes la musique ?" },
        { sentence: "Il comprend ? → Est-ce qu'___", hint: "élision devant voyelle", answer: "il comprend ?" },
        { sentence: "Vous prenez le bus ? → Est-ce que ___", hint: "est-ce que + sujet + verbe", answer: "vous prenez le bus ?" },
      ],
    },
  ],
};

const a2GrL09: GrammarLesson = {
  slug: "a2-gr-l09",
  code: "G.18",
  level: "A2",
  title: "Répondre aux questions fermées",
  theory: [
    { type: "heading", text: "Répondre : oui, non, si" },
    {
      type: "rule",
      text: "OUI = réponse affirmative à question affirmative.",
      examples: [
        { correct: "Tu aimes le café ? — Oui, j'aime le café." },
      ],
    },
    {
      type: "rule",
      text: "NON = réponse négative.",
      examples: [
        { correct: "Tu aimes le café ? — Non, je n'aime pas le café." },
      ],
    },
    {
      type: "rule",
      text: "SI = réponse AFFIRMATIVE à question NÉGATIVE.",
      examples: [
        { correct: "Tu ne parles pas français ? — Si, je parle français !", wrong: "Tu ne parles pas français ? — Oui, je parle français." },
      ],
    },
    { type: "heading", text: "Moi aussi / Moi non plus / Moi si" },
    {
      type: "table",
      tables: [
        {
          verb: "Accord/Désaccord",
          rows: [
            { pronoun: "+ → +", form: "J'aime le café. — Moi aussi !" },
            { pronoun: "- → -", form: "Je ne fume pas. — Moi non plus !" },
            { pronoun: "- → +", form: "Je n'aime pas le café. — Moi si !" },
            { pronoun: "+ → -", form: "J'aime le café. — Moi pas !" },
          ],
        },
      ],
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Oui, non ou si ?",
      instruction: "Choisissez la bonne réponse.",
      items: [
        { sentence: "Tu ne comprends pas ? — ___, je comprends très bien !", choices: ["Si", "Oui", "Non", "Moi si"], correctIdx: 0 },
        { sentence: "Tu aimes le cinéma ? — ___, je n'aime pas ça.", choices: ["Non", "Si", "Oui", "Moi non"], correctIdx: 0 },
        { sentence: "Tu ne viens pas demain ? — ___, je viens !", choices: ["Si", "Oui", "Non", "Moi"], correctIdx: 0 },
      ],
    },
    {
      type: "qcm",
      title: "Moi aussi / Moi non plus / Moi si",
      instruction: "Choisissez la réponse correcte.",
      items: [
        { sentence: "Je parle anglais. — ___", choices: ["Moi aussi !", "Moi non plus !", "Moi si !", "Moi pas !"], correctIdx: 0 },
        { sentence: "Je ne fume pas. — ___", choices: ["Moi non plus !", "Moi aussi !", "Moi si !", "Moi pas !"], correctIdx: 0 },
        { sentence: "Je n'aime pas le sport. — ___ (tu aimes le sport)", choices: ["Moi si !", "Moi aussi !", "Moi non plus !", "Moi pas !"], correctIdx: 0 },
      ],
    },
  ],
};

const a2GrL11: GrammarLesson = {
  slug: "a2-gr-l11",
  code: "G.19",
  level: "A2",
  title: "Les adjectifs — généralités",
  theory: [
    { type: "heading", text: "L'accord des adjectifs qualificatifs" },
    {
      type: "rule",
      text: "L'adjectif s'accorde en GENRE et en NOMBRE avec le nom.",
      examples: [
        { correct: "un homme intelligent → une femme intelligente" },
        { correct: "des hommes intelligents → des femmes intelligentes" },
      ],
    },
    {
      type: "rule",
      text: "Féminin : + -e (si consonne finale) / invariable si déjà en -e.",
      examples: [
        { correct: "grand → grande" },
        { correct: "petit → petite" },
        { correct: "rapide → rapide" },
      ],
    },
    {
      type: "rule",
      text: "Masculin irréguliers fréquents :",
      examples: [
        { correct: "-eux → -euse : heureux/heureuse" },
        { correct: "-eur → -eure : meilleur/meilleure" },
        { correct: "-ien → -ienne : ancien/ancienne" },
        { correct: "-al → -ale : normal/normale" },
      ],
    },
    {
      type: "rule",
      text: "Pluriel : + -s (sauf déjà -s ou -x).",
      examples: [
        { correct: "heureux → heureux (pluriel = idem)" },
        { correct: "normal → normaux" },
      ],
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Accord de l'adjectif",
      instruction: "Choisissez la forme correcte.",
      items: [
        { sentence: "Une ville ___.", choices: ["ancienne", "ancien", "anciens", "anciennes"], correctIdx: 0 },
        { sentence: "Des hommes ___.", choices: ["heureux", "heureuse", "heureuses", "heureux"], correctIdx: 0 },
        { sentence: "Elle est très ___.", choices: ["intelligente", "intelligent", "intelligents", "intelligentes"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Accordez l'adjectif",
      instruction: "Mettez l'adjectif à la bonne forme.",
      items: [
        { sentence: "C'est une ville ___. (ancien)", hint: "féminin singulier", answer: "ancienne" },
        { sentence: "Ils sont très ___. (heureux)", hint: "masculin pluriel", answer: "heureux" },
        { sentence: "Ce sont des règles ___. (normal)", hint: "féminin pluriel", answer: "normales" },
      ],
    },
  ],
};

const a2GrL12: GrammarLesson = {
  slug: "a2-gr-l12",
  code: "G.20",
  level: "A2",
  title: "Les adjectifs — cas particuliers et place",
  theory: [
    { type: "heading", text: "Adjectifs irréguliers : beau/bel, nouveau/nouvel, vieux/vieil" },
    {
      type: "table",
      tables: [
        {
          verb: "Formes spéciales",
          rows: [
            { pronoun: "masc. sing.", form: "beau / nouveau / vieux" },
            { pronoun: "masc. + voyelle", form: "bel / nouvel / vieil" },
            { pronoun: "féminin", form: "belle / nouvelle / vieille" },
            { pronoun: "pluriel masc.", form: "beaux / nouveaux / vieux" },
            { pronoun: "pluriel fém.", form: "belles / nouvelles / vieilles" },
          ],
        },
      ],
    },
    {
      type: "rule",
      text: "Adjectifs qui se placent AVANT le nom (BAGS) : beau, nouveau, vieux, grand, petit, bon, mauvais, jeune.",
      examples: [
        { correct: "un beau film" },
        { correct: "un nouvel appartement" },
        { correct: "une vieille ville" },
      ],
    },
    {
      type: "rule",
      text: "Adjectifs qui se placent APRÈS le nom (la plupart).",
      examples: [
        { correct: "un film français" },
        { correct: "une ville historique" },
        { correct: "un appartement moderne" },
      ],
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Beau, nouveau, vieux",
      instruction: "Choisissez la forme correcte.",
      items: [
        { sentence: "___ appartement (nouveau + voyelle, masc.)", choices: ["Nouvel", "Nouveau", "Nouvelle", "Nouveaux"], correctIdx: 0 },
        { sentence: "C'est ___ homme. (vieux + voyelle)", choices: ["un vieil", "un vieux", "une vieille", "des vieux"], correctIdx: 0 },
        { sentence: "J'ai ___ voiture. (beau, féminin)", choices: ["une belle", "un bel", "un beau", "des belles"], correctIdx: 0 },
      ],
    },
    {
      type: "qcm",
      title: "Place de l'adjectif",
      instruction: "Choisissez la phrase correcte.",
      items: [
        { sentence: "Logement spacieux :", choices: ["un grand appartement", "un appartement grand", "un grand-appartement", "appartement grand"], correctIdx: 0 },
        { sentence: "Film de qualité :", choices: ["un film intéressant", "un intéressant film", "film intéressant", "un intéressant-film"], correctIdx: 0 },
        { sentence: "Restaurant de qualité :", choices: ["un bon restaurant", "un restaurant bon", "bon restaurant", "un bon-restaurant"], correctIdx: 0 },
      ],
    },
  ],
};

const a2GrL18: GrammarLesson = {
  slug: "a2-gr-l18",
  code: "G.21",
  level: "A2",
  title: "Les prépositions de lieu",
  theory: [
    { type: "heading", text: "Prépositions de lieu" },
    {
      type: "table",
      tables: [
        {
          verb: "Prépositions",
          rows: [
            { pronoun: "dans", form: "à l'intérieur → dans le bureau" },
            { pronoun: "sur", form: "surface → sur le bureau" },
            { pronoun: "sous", form: "en dessous → sous la table" },
            { pronoun: "à côté de", form: "proximité → à côté de la gare" },
            { pronoun: "près de", form: "proche → près de l'école" },
            { pronoun: "loin de", form: "éloigné → loin du centre" },
            { pronoun: "en face de", form: "vis-à-vis → en face de la mairie" },
            { pronoun: "entre", form: "au milieu → entre les deux" },
            { pronoun: "derrière", form: "arrière → derrière le bâtiment" },
            { pronoun: "devant", form: "avant → devant l'entrée" },
          ],
        },
      ],
    },
    {
      type: "rule",
      text: "de + le = du / de + les = des (contraction obligatoire).",
      examples: [
        { correct: "loin du centre" },
        { correct: "près des magasins", wrong: "loin de le centre" },
      ],
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Quelle préposition ?",
      instruction: "Choisissez la bonne préposition.",
      items: [
        { sentence: "Je suis ___ de la station de métro.", choices: ["à côté", "loin", "dans", "sur"], correctIdx: 0 },
        { sentence: "Le bureau est ___ la mairie.", choices: ["en face de", "dans", "loin de", "entre"], correctIdx: 0 },
        { sentence: "Je suis dans un taxi, on est ___ le boulevard.", choices: ["sur", "dans", "sous", "loin"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Complétez avec la bonne préposition.",
      items: [
        { sentence: "Elle est ___ la station de métro, elle attend le bus.", hint: "proximité", answer: "près de" },
        { sentence: "Le café est ___ la boulangerie et la pharmacie.", hint: "au milieu de deux choses", answer: "entre" },
        { sentence: "Notre bureau est ___ du centre-ville.", hint: "éloigné", answer: "loin" },
      ],
    },
  ],
};

const a2GrL19: GrammarLesson = {
  slug: "a2-gr-l19",
  code: "G.22",
  level: "A2",
  title: "Les pronoms relatifs qui et que",
  theory: [
    { type: "heading", text: "Les pronoms relatifs QUI et QUE" },
    {
      type: "rule",
      text: "QUI = sujet du verbe qui suit. QUI remplace une personne ou une chose.",
      examples: [
        { correct: "C'est un professeur qui parle bien." },
        { correct: "C'est une école qui est connue." },
      ],
    },
    {
      type: "rule",
      text: "QUE = objet du verbe qui suit. QUE se place avant le sujet.",
      examples: [
        { correct: "C'est le film que j'aime." },
        { correct: "C'est la règle que nous apprenons." },
      ],
    },
    {
      type: "note",
      text: "QUE + voyelle = QU'. Exemple : le livre qu'il lit.",
    },
    {
      type: "rule",
      text: "Aide-mémoire : QUI + verbe directement ; QUE + sujet + verbe.",
      examples: [
        { correct: "le professeur qui parle (qui + verbe)" },
        { correct: "le professeur que j'aime (que + sujet + verbe)" },
      ],
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Qui ou Que ?",
      instruction: "Choisissez le pronom relatif correct.",
      items: [
        { sentence: "C'est le film ___ j'aime.", choices: ["que", "qui", "qu'", "dont"], correctIdx: 0 },
        { sentence: "C'est un professeur ___ parle très bien.", choices: ["qui", "que", "qu'", "dont"], correctIdx: 0 },
        { sentence: "C'est la règle ___ nous apprenons aujourd'hui.", choices: ["que", "qui", "qu'", "dont"], correctIdx: 0 },
        { sentence: "C'est l'étudiant ___ comprend vite.", choices: ["qui", "que", "qu'", "dont"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez avec qui ou que/qu'",
      instruction: "Choisissez qui ou que/qu'.",
      items: [
        { sentence: "C'est le livre ___ il recommande.", hint: "objet → que/qu'", answer: "qu'" },
        { sentence: "C'est une ville ___ est très belle.", hint: "sujet → qui", answer: "qui" },
        { sentence: "C'est la chanson ___ j'écoute tous les matins.", hint: "objet → que", answer: "que" },
        { sentence: "Le bus ___ passe ici va au centre.", hint: "sujet → qui", answer: "qui" },
      ],
    },
  ],
};

const a2GrL25: GrammarLesson = {
  slug: "a2-gr-l25",
  code: "G.23",
  level: "A2",
  title: "La négation — ne…pas, ne…plus, ne…que",
  theory: [
    { type: "heading", text: "Les formes de négation" },
    {
      type: "rule",
      text: "NE…PAS = action absente / inexistante.",
      examples: [
        { correct: "Je ne parle pas espagnol." },
      ],
    },
    {
      type: "rule",
      text: "NE…PLUS = action qui a cessé.",
      examples: [
        { correct: "Il ne travaille plus ici. (Il travaillait avant, mais plus maintenant.)" },
      ],
    },
    {
      type: "rule",
      text: "NE…QUE = restriction (= seulement).",
      examples: [
        { correct: "Je ne mange que des légumes. (= Je mange seulement des légumes.)" },
        { correct: "Il ne reste que 5 minutes." },
      ],
    },
    {
      type: "note",
      text: "NE → N' devant voyelle : il n'y a plus de café. / Elle n'a que 20 ans.",
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Quelle négation ?",
      instruction: "Choisissez la bonne forme de négation.",
      items: [
        { sentence: "Il travaille ici. (→ cessé) → Il ___ travaille ___ ici.", choices: ["ne…plus", "ne…pas", "ne…que", "ne…jamais"], correctIdx: 0 },
        { sentence: "Je mange des légumes seulement. → Je ___ mange ___ des légumes.", choices: ["ne…que", "ne…pas", "ne…plus", "ne…jamais"], correctIdx: 0 },
        { sentence: "Il ne vient ___ à cette école depuis 2 mois.", choices: ["plus", "pas", "que", "jamais"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Transformez",
      instruction: "Complétez avec la négation correcte.",
      items: [
        { sentence: "Je n'ai ___ d'argent. (seulement 10€)", hint: "restriction", answer: "que" },
        { sentence: "Il ne travaille ___ ici, il a déménagé.", hint: "cessation", answer: "plus" },
        { sentence: "Elle ne mange ___ de viande. (végétarienne)", hint: "absence", answer: "pas" },
      ],
    },
  ],
};

const a2GrL35: GrammarLesson = {
  slug: "a2-gr-l35",
  code: "G.24",
  level: "A2",
  title: "Les pronoms COD et COI",
  theory: [
    { type: "heading", text: "Les pronoms COD (Complément d'Objet Direct)" },
    {
      type: "table",
      tables: [
        {
          verb: "COD",
          rows: [
            { pronoun: "me / m'", form: "Je te vois. Tu me vois." },
            { pronoun: "te / t'", form: "Je t'appelle." },
            { pronoun: "le / l'", form: "Je le connais. (masc.)" },
            { pronoun: "la / l'", form: "Je la connais. (fém.)" },
            { pronoun: "nous", form: "Il nous aide." },
            { pronoun: "vous", form: "Je vous comprends." },
            { pronoun: "les", form: "Je les aime." },
          ],
        },
      ],
    },
    {
      type: "rule",
      text: "Le pronom COD se place AVANT le verbe.",
      examples: [
        { correct: "Je regarde le film → Je le regarde.", wrong: "Je regarde le." },
      ],
    },
    { type: "heading", text: "Les pronoms COI (Complément d'Objet Indirect)" },
    {
      type: "table",
      tables: [
        {
          verb: "COI",
          rows: [
            { pronoun: "me / m'", form: "Il me parle." },
            { pronoun: "te / t'", form: "Il te parle." },
            { pronoun: "lui", form: "Je lui parle. (il/elle)" },
            { pronoun: "nous", form: "Il nous écrit." },
            { pronoun: "vous", form: "Je vous écris." },
            { pronoun: "leur", form: "Je leur écris. (ils/elles)" },
          ],
        },
      ],
    },
    {
      type: "rule",
      text: "COD : verbe + quelqu'un/quelque chose (direct). COI : verbe + à + quelqu'un.",
      examples: [
        { correct: "J'appelle Marco → Je l'appelle. (COD)" },
        { correct: "Je parle à Marco → Je lui parle. (COI)" },
      ],
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "COD ou COI ?",
      instruction: "Choisissez le bon pronom.",
      items: [
        { sentence: "Je connais Marie. → Je ___ connais.", choices: ["la", "lui", "les", "me"], correctIdx: 0 },
        { sentence: "Je parle à Paul. → Je ___ parle.", choices: ["lui", "le", "la", "leur"], correctIdx: 0 },
        { sentence: "Elle appelle ses amis. → Elle ___ appelle.", choices: ["les", "leur", "lui", "le"], correctIdx: 0 },
        { sentence: "Il écrit à ses parents. → Il ___ écrit.", choices: ["leur", "les", "lui", "le"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Remplacez par un pronom",
      instruction: "Remplacez le groupe souligné par le bon pronom.",
      items: [
        { sentence: "Je regarde (le film) tous les soirs. → Je ___ regarde tous les soirs.", hint: "COD masculin", answer: "le" },
        { sentence: "Elle téléphone (à son amie) chaque jour. → Elle ___ téléphone chaque jour.", hint: "COI féminin sing.", answer: "lui" },
        { sentence: "Nous invitons (nos collègues). → Nous ___ invitons.", hint: "COD pluriel", answer: "les" },
      ],
    },
  ],
};

const a2GrL36: GrammarLesson = {
  slug: "a2-gr-l36",
  code: "G.25",
  level: "A2",
  title: "Les pronoms Y et EN",
  theory: [
    { type: "heading", text: "Le pronom Y" },
    {
      type: "rule",
      text: "Y remplace : à + lieu / à + chose (verbes construits avec à).",
      examples: [
        { correct: "Je vais à Paris → J'y vais." },
        { correct: "Je pense à ce projet → J'y pense." },
      ],
    },
    { type: "heading", text: "Le pronom EN" },
    {
      type: "rule",
      text: "EN remplace : de + nom (quantité) / partitif + nom.",
      examples: [
        { correct: "Je mange du pain → J'en mange." },
        { correct: "J'ai des amis → J'en ai." },
      ],
    },
    {
      type: "rule",
      text: "EN avec quantité : on garde le chiffre.",
      examples: [
        { correct: "J'ai deux chiens → J'en ai deux." },
        { correct: "Je veux un café → J'en veux un." },
      ],
    },
    {
      type: "note",
      text: "Y et EN se placent AVANT le verbe (comme tous les pronoms).",
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Y ou EN ?",
      instruction: "Choisissez le bon pronom.",
      items: [
        { sentence: "Je vais à Lyon demain. → J'___ vais demain.", choices: ["y", "en", "le", "lui"], correctIdx: 0 },
        { sentence: "Je mange du chocolat. → J'___ mange.", choices: ["en", "y", "le", "la"], correctIdx: 0 },
        { sentence: "Je pense souvent à mes vacances. → J'___ pense souvent.", choices: ["y", "en", "le", "les"], correctIdx: 0 },
        { sentence: "Il a des amis français. → Il ___ a.", choices: ["en", "y", "les", "leur"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Remplacez par Y ou EN",
      instruction: "Remplacez le groupe souligné.",
      items: [
        { sentence: "Tu vas au marché ? → Tu ___ vas ?", hint: "à + lieu → Y", answer: "y" },
        { sentence: "Elle mange de la salade. → Elle ___ mange.", hint: "partitif → EN", answer: "en" },
        { sentence: "Ils pensent à leur avenir. → Ils ___ pensent.", hint: "à + chose → Y", answer: "y" },
      ],
    },
  ],
};

const a2GrL39: GrammarLesson = {
  slug: "a2-gr-l39",
  code: "G.26",
  level: "A2",
  title: "Le comparatif",
  theory: [
    { type: "heading", text: "Le comparatif" },
    {
      type: "table",
      tables: [
        {
          verb: "Comparatif",
          rows: [
            { pronoun: "supériorité", form: "plus + adj/adv + que" },
            { pronoun: "égalité", form: "aussi + adj/adv + que" },
            { pronoun: "infériorité", form: "moins + adj/adv + que" },
          ],
        },
      ],
    },
    {
      type: "rule",
      text: "Comparatif d'adjectifs.",
      examples: [
        { correct: "Paris est plus grande que Lyon." },
        { correct: "Cette ville est aussi belle que l'autre." },
        { correct: "Ce restaurant est moins cher que celui-là." },
      ],
    },
    {
      type: "rule",
      text: "Comparatif de verbes : verbe + plus/autant/moins + que.",
      examples: [
        { correct: "Je travaille plus que toi." },
        { correct: "Il dort autant que moi." },
      ],
    },
    { type: "heading", text: "Formes irrégulières" },
    {
      type: "rule",
      text: "bon → meilleur(e)(s) ; bien → mieux.",
      examples: [
        { correct: "Ce restaurant est meilleur que l'autre." },
        { correct: "Elle parle mieux que lui.", wrong: "Ce restaurant est plus bon." },
      ],
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Comparatif",
      instruction: "Choisissez la forme correcte.",
      items: [
        { sentence: "Ce film est ___ intéressant ___ l'autre.", choices: ["plus ... que", "plus ... de", "aussi ... de", "moins ... à"], correctIdx: 0 },
        { sentence: "Elle chante ___ que son frère.", choices: ["mieux", "meilleur", "plus bien", "plus mieux"], correctIdx: 0 },
        { sentence: "Ce restaurant est ___ ___ l'autre.", choices: ["meilleur que", "plus bon que", "plus meilleur que", "bien que"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez le comparatif",
      instruction: "Utilisez plus/aussi/moins/meilleur/mieux + que.",
      items: [
        { sentence: "Le train est ___ (rapide) ___ le bus. (+)", hint: "supériorité", answer: "plus rapide que" },
        { sentence: "Ce hôtel est ___ (cher) ___ l'autre. (=)", hint: "égalité", answer: "aussi cher que" },
        { sentence: "Il cuisine ___ que l'année dernière. (amélioration)", hint: "mieux", answer: "mieux" },
      ],
    },
  ],
};

const a2GrL42: GrammarLesson = {
  slug: "a2-gr-l42",
  code: "G.27",
  level: "A2",
  title: "La négation — ne…jamais, ne…rien, ne…personne",
  theory: [
    { type: "heading", text: "Négation totale" },
    {
      type: "rule",
      text: "NE…JAMAIS = à aucun moment.",
      examples: [
        { correct: "Je ne mange jamais de viande." },
        { correct: "Il ne vient jamais à l'heure." },
      ],
    },
    {
      type: "rule",
      text: "NE…RIEN = aucune chose.",
      examples: [
        { correct: "Je ne fais rien ce soir." },
        { correct: "Il n'a rien compris." },
      ],
    },
    {
      type: "rule",
      text: "NE…PERSONNE = aucune personne.",
      examples: [
        { correct: "Je ne connais personne ici." },
        { correct: "Il ne parle à personne." },
      ],
    },
    {
      type: "rule",
      text: "RIEN et PERSONNE peuvent être sujets (en tête de phrase) sans NE.",
      examples: [
        { correct: "Rien n'est impossible." },
        { correct: "Personne ne parle." },
      ],
    },
    {
      type: "note",
      text: "Au passé composé : jamais/rien → AVANT le participe ; personne → APRÈS le participe. Ex: Je n'ai jamais voyagé. / Il n'a rien dit. / Nous n'avons vu personne.",
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Quelle négation totale ?",
      instruction: "Choisissez la bonne négation.",
      items: [
        { sentence: "Je ne mange ___ de poisson. (à aucun moment)", choices: ["jamais", "rien", "personne", "plus"], correctIdx: 0 },
        { sentence: "Elle ne connaît ___ dans cette ville. (aucune personne)", choices: ["personne", "rien", "jamais", "plus"], correctIdx: 0 },
        { sentence: "Il ne fait ___ ce week-end. (aucune chose)", choices: ["rien", "personne", "jamais", "plus"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Complétez avec jamais, rien ou personne.",
      items: [
        { sentence: "Je ne dis ___ à mes collègues.", hint: "aucune chose", answer: "rien" },
        { sentence: "___ ne comprend cette règle.", hint: "sujet + ne", answer: "Personne" },
        { sentence: "Il n'a ___ mangé au restaurant.", hint: "à aucun moment", answer: "jamais" },
      ],
    },
  ],
};

const a2GrL52: GrammarLesson = {
  slug: "a2-gr-l52",
  code: "G.28",
  level: "A2",
  title: "La cause et la conséquence",
  theory: [
    { type: "heading", text: "Exprimer la cause" },
    {
      type: "rule",
      text: "PARCE QUE / CAR + sujet + verbe (cause dans une phrase).",
      examples: [
        { correct: "Je prends des cours parce que je veux progresser." },
        { correct: "Elle est fatiguée car elle a travaillé toute la nuit." },
      ],
    },
    {
      type: "rule",
      text: "COMME + sujet + verbe (cause en début de phrase).",
      examples: [
        { correct: "Comme il fait beau, on sort." },
        { correct: "Comme j'ai faim, je mange." },
      ],
    },
    {
      type: "rule",
      text: "À CAUSE DE + nom (cause négative) / GRÂCE À + nom (cause positive).",
      examples: [
        { correct: "Il est en retard à cause du trafic." },
        { correct: "Elle a réussi grâce à son travail." },
      ],
    },
    { type: "heading", text: "Exprimer la conséquence" },
    {
      type: "rule",
      text: "DONC / C'EST POURQUOI / PAR CONSÉQUENT.",
      examples: [
        { correct: "Il pleut, donc je prends un parapluie." },
        { correct: "Il fait froid, c'est pourquoi je mets un manteau." },
      ],
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Cause ou conséquence ?",
      instruction: "Choisissez le connecteur correct.",
      items: [
        { sentence: "Elle a réussi ___ son travail acharné.", choices: ["grâce à", "à cause de", "parce que", "donc"], correctIdx: 0 },
        { sentence: "Il est en retard ___ les embouteillages.", choices: ["à cause de", "grâce à", "donc", "comme"], correctIdx: 0 },
        { sentence: "J'ai faim, ___ je vais manger.", choices: ["donc", "parce que", "comme", "grâce à"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Choisissez le bon connecteur.",
      items: [
        { sentence: "___ il fait beau, nous allons au parc.", hint: "cause en début de phrase", answer: "Comme" },
        { sentence: "Je prends des cours ___ je veux parler français.", hint: "cause = parce que/car", answer: "parce que" },
        { sentence: "Elle est malade, ___ elle ne vient pas.", hint: "conséquence = donc", answer: "donc" },
      ],
    },
  ],
};

// ── Registry ──────────────────────────────────────────────────────────────────

const ALL_GRAMMAR_LESSONS: GrammarLesson[] = [
  a1GrL01,
  a1GrL02,
  a1GrL03,
  a1GrL04,
  a1GrL05,
  a1GrL06,
  a1GrL10,
  a1GrL11,
  a1GrL14,
  a1GrL17,
  a1GrL18,
  a1GrL19,
  a1GrL22,
  a1GrL23,
  a1GrL24,
  a1GrL25,
  a2GrL07,
  a2GrL09,
  a2GrL11,
  a2GrL12,
  a2GrL18,
  a2GrL19,
  a2GrL25,
  a2GrL35,
  a2GrL36,
  a2GrL39,
  a2GrL42,
  a2GrL52,
];

export function getGrammarLesson(slug: string): GrammarLesson | undefined {
  return ALL_GRAMMAR_LESSONS.find((l) => l.slug === slug);
}

export function getAllGrammarLessons(): GrammarLesson[] {
  return ALL_GRAMMAR_LESSONS;
}
