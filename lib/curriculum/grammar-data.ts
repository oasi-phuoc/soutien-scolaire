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
  code: "G.6",
  level: "A1",
  title: "La négation et l'interrogation de base",
  theory: [
    {
      type: "heading",
      text: "La forme négative",
    },
    {
      type: "plain_list",
      items: [
        "La structure de la négation utilise {a}ne{/a} + {a}pas{/a}.",
        "Sujet + {a}ne{/a} + verbe + {a}pas{/a}",
      ],
    },
    {
      type: "heading",
      text: "Négation du verbe ÊTRE",
      sub: true,
    },
    {
      type: "grid",
      headers: ["Affirmatif", "Négatif"],
      rows: [
        ["Je suis content(e).", "Je {a}ne{/a} suis {a}pas{/a} content(e)."],
        ["Tu es à Genève.", "Tu {a}n'{/a}es {a}pas{/a} à Genève."],
        ["Il/Elle est médecin.", "Il/Elle {a}n'{/a}est {a}pas{/a} médecin."],
        ["Nous sommes prêts.", "Nous {a}ne{/a} sommes {a}pas{/a} prêts."],
        ["Vous êtes fatigués.", "Vous {a}n'{/a}êtes {a}pas{/a} fatigués."],
        ["Ils/Elles sont là.", "Ils/Elles {a}ne{/a} sont {a}pas{/a} là."],
      ],
    },
    {
      type: "heading",
      text: "Négation du verbe AVOIR",
      sub: true,
    },
    {
      type: "grid",
      headers: ["Affirmatif", "Négatif"],
      rows: [
        ["J'ai faim.", "Je {a}n'{/a}ai {a}pas{/a} faim."],
        ["Tu as un vélo.", "Tu {a}n'{/a}as {a}pas{/a} de vélo."],
        ["Il/Elle a 25 ans.", "Il/Elle {a}n'{/a}a {a}pas{/a} d'enfant."],
        ["Nous avons soif.", "Nous {a}n'{/a}avons {a}pas{/a} soif."],
        ["Vous avez raison.", "Vous {a}n'{/a}avez {a}pas{/a} raison."],
        ["Ils/Elles ont peur.", "Ils/Elles {a}n'{/a}ont {a}pas{/a} peur."],
      ],
    },
    {
      type: "highlight",
      label: "Astuce",
      inlineArrows: true,
      noBulletItems: [0],
      items: [
        "«ne» devant une voyelle (a e i o u y) → «n'»",
        "il n{s}e{/s} est pas là → il n'est pas là",
        "je n{s}e{/s} ai pas 5 ans → je n'ai pas 5 ans",
      ],
    },
  ],
  exercises: [],
};

const a1GrL03: GrammarLesson = {
  slug: "a1-gr-l03",
  code: "G.4",
  level: "A1",
  title: "Le genre des noms et des adjectifs",
  theory: [
    { type: "heading", text: "Le genre des noms" },
    { type: "plain_list", items: ["En français, les noms ont un genre. Un nom peut être :", "masculin", "féminin"] },
    { type: "heading", text: "Comment reconnaître le genre ?", sub: true },
    { type: "plain_list", items: ["Il n'y a pas toujours une règle. Il faut souvent apprendre le nom avec son article."] },
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
      items: ["La majorité des mots qui terminent par {a}-e{/a} sont féminins, mais il existe des exceptions."],
      noBulletItems: [0],
    },
    { type: "heading", text: "Les adjectifs" },
    { type: "plain_list", items: ["L'adjectif donne une information sur le nom.", "Les adjectifs changent aussi selon le genre."] },
    { type: "plain_list", items: ["On ajoute souvent {a}-e{/a} au féminin."] },
    {
      type: "grid",
      headers: ["Masculin", "Féminin"],
      rows: [
        ["Le sac est petit.", "La voiture est petit{a}e{/a}."],
        ["Un homme français parle.", "Une femme français{a}e{/a} parle."],
      ],
    },
    { type: "plain_list", items: ["On ajoute souvent {a}-s{/a} au pluriel."] },
    {
      type: "grid",
      headers: ["Singulier", "Pluriel"],
      rows: [
        ["Le sac est petit.", "Les sacs sont petit{a}s{/a}."],
        ["La voiture est petite.", "Les voitures sont petite{a}s{/a}."],
      ],
    },
    {
      type: "highlight",
      label: "Attention : adjectifs spéciaux",
      items: ["Certains adjectifs changent beaucoup."],
      noBulletItems: [0],
    },
    {
      type: "grid",
      headers: ["Masculin", "Féminin"],
      rows: [
        ["beau", "bell{a}e{/a}"],
        ["nouveau", "nouvell{a}e{/a}"],
        ["vieux", "vieil{a}le{/a}"],
      ],
    },
  ],
  exercises: [],
};

const a1GrL04: GrammarLesson = {
  slug: "a1-gr-l04",
  code: "G.3",
  level: "A1",
  title: "Les articles définis et indéfinis",
  theory: [
    { type: "heading", text: "Les articles définis" },
    { type: "plain_list", items: ["Les articles définis parlent de quelque chose de connu, précis et identifiable."] },
    {
      type: "grid",
      headers: ["Masculin", "Féminin", "Pluriel"],
      rows: [
        ["{a}le{/a} téléphone", "{a}la{/a} chaise", "{a}les{/a} élèves"],
      ],
    },
    {
      type: "highlight",
      label: "Attention",
      items: [
        "Devant une voyelle ou un {a}h{/a}, {a}le{/a} et {a}la{/a} deviennent {a}l'{/a}.",
        "{a}le{/a} → l'arbre",
        "{a}la{/a} → l'école",
      ],
      noBulletItems: [0],
      inlineArrows: true,
    },
    { type: "heading", text: "Les articles indéfinis" },
    { type: "plain_list", items: ["Les articles indéfinis parlent d'une chose en général, non précise ou inconnue."] },
    {
      type: "grid",
      headers: ["Masculin", "Féminin", "Pluriel"],
      rows: [
        ["{a}un{/a} livre", "{a}une{/a} voiture", "{a}des{/a} chaussures"],
      ],
    },
    { type: "heading", text: "Différence entre défini et indéfini", sub: true },
    {
      type: "highlight",
      label: "Article défini — chose précise",
      items: ["Je ferme {a}la{/a} porte.", "(la porte est connue)"],
      noBulletItems: [1],
    },
    {
      type: "highlight",
      label: "Article indéfini — chose non précise",
      items: ["Je cherche {a}une{/a} porte.", "(n'importe quelle porte)"],
      noBulletItems: [1],
    },
  ],
  exercises: [],
};

const a1GrL05: GrammarLesson = {
  slug: "a1-gr-l05",
  code: "G.14",
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
  exercises: [],
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
  exercises: [],
};

const a1GrL10: GrammarLesson = {
  slug: "a1-gr-l10",
  code: "G.11",
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
  exercises: [],
};

const a1GrL11: GrammarLesson = {
  slug: "a1-gr-l11",
  code: "G.12",
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
  exercises: [],
};

const a1GrL14: GrammarLesson = {
  slug: "a1-gr-l14",
  code: "G.13",
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
  exercises: [],
};

const a1GrL17: GrammarLesson = {
  slug: "a1-gr-l17",
  code: "G.15",
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
  exercises: [],
};

const a1GrL18: GrammarLesson = {
  slug: "a1-gr-l18",
  code: "G.16",
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
  exercises: [],
};

const a1GrL19: GrammarLesson = {
  slug: "a1-gr-l19",
  code: "G.17",
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
  exercises: [],
};

const a1GrL22: GrammarLesson = {
  slug: "a1-gr-l22",
  code: "G.18",
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
  exercises: [],
};

const a1GrL23: GrammarLesson = {
  slug: "a1-gr-l23",
  code: "G.19",
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
  exercises: [],
};

const a1GrL24: GrammarLesson = {
  slug: "a1-gr-l24",
  code: "G.25",
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
  exercises: [],
};

const a1GrL25: GrammarLesson = {
  slug: "a1-gr-l25",
  code: "G.26",
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
  exercises: [],
};

// ── New A1 Lessons (G.17–G.19) ────────────────────────────────────────────────

const a1GrLCest: GrammarLesson = {
  slug: "a1-gr-l07",
  code: "G.17",
  level: "A1",
  title: "C'est / Il est",
  theory: [
    { type: "heading", text: "C'est ou Il/Elle est ?" },
    {
      type: "grid",
      headers: ["Forme", "Usage", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["C'est", "article + nom → identifier", "C'est le professeur."],
        ["Ce sont", "article + nom pluriel → identifier", "Ce sont mes amis."],
        ["Il/Elle est", "adjectif ou profession → caractériser", "Il est très sympa."],
        ["Ils/Elles sont", "adjectif ou profession pluriel → caractériser", "Elles sont françaises."],
      ],
      transHeaders: {
        en: ["Form", "Usage", "Example"],
        ar: ["الصيغة", "الاستخدام", "مثال"],
        fa: ["فرم", "کاربرد", "مثال"],
        ti: ["ቅርጺ", "ኣጠቃቅማ", "ኣብነት"],
        uk: ["Форма", "Вживання", "Приклад"],
      },
      transRows: {
        en: [
          ["C'est", "article + noun → identify", "He is the teacher."],
          ["Ce sont", "article + noun (plural) → identify", "They are my friends."],
          ["Il/Elle est", "adjective or profession → characterise", "He is very nice."],
          ["Ils/Elles sont", "adjective or profession (plural) → characterise", "They are French."],
        ],
      },
    },
    {
      type: "rule",
      text: "Après «il/elle est» + profession : PAS d'article ! → «Il est médecin» (et non «Il est un médecin»).",
      examples: [
        { correct: "C'est un médecin. (identification avec article)" },
        { correct: "Il est médecin. (profession, sans article)" },
        { correct: "C'est Julia. Elle est très sympa." },
      ],
    },
    {
      type: "note",
      text: "C'est / Ce sont = on identifie. Il/Elle est = on caractérise.",
    },
  ],
  exercises: [],
};

const a1GrLQuel: GrammarLesson = {
  slug: "a1-gr-l08",
  code: "G.18",
  level: "A1",
  title: "L'interrogation avec quel(le)(s)",
  theory: [
    { type: "heading", text: "Quel, Quelle, Quels, Quelles" },
    {
      type: "grid",
      headers: ["", "Singulier", "Pluriel"],
      boldFirstCol: true,
      rows: [
        ["Masculin", "Quel", "Quels"],
        ["Féminin", "Quelle", "Quelles"],
      ],
      transHeaders: {
        en: ["", "Singular", "Plural"],
        ar: ["", "المفرد", "الجمع"],
        fa: ["", "مفرد", "جمع"],
        ti: ["", "ነጠላ", "ብዙሓት"],
        uk: ["", "Однина", "Множина"],
      },
      transRows: {
        en: [["Masculine", "Which/What", "Which/What"], ["Feminine", "Which/What", "Which/What"]],
      },
    },
    {
      type: "note",
      text: "Tous se prononcent [kɛl] — même prononciation !",
    },
    {
      type: "rule",
      text: "Quel(le)(s) + est/sont + nom ?",
      examples: [
        { correct: "Quel est ton prénom ?" },
        { correct: "Quelle est ta nationalité ?" },
        { correct: "Quels sont tes objectifs ?" },
        { correct: "Quelles sont tes langues ?" },
      ],
    },
    {
      type: "rule",
      text: "Quel(le)(s) + nom (sans verbe) ?",
      examples: [
        { correct: "Quelle heure est-il ?" },
        { correct: "Quel cours tu préfères ?" },
      ],
    },
  ],
  exercises: [],
};

const a1GrLFutur: GrammarLesson = {
  slug: "a1-gr-l09",
  code: "G.19",
  level: "A1",
  title: "Le futur proche",
  theory: [
    { type: "heading", text: "Le futur proche : aller + infinitif" },
    {
      type: "grid",
      headers: ["Sujet", "ALLER", "Exemple"],
      rows: [
        ["je", "vais", "Je vais partir."],
        ["tu", "vas", "Tu vas manger ?"],
        ["il / elle / on", "va", "Elle va arriver."],
        ["nous", "allons", "Nous allons travailler."],
        ["vous", "allez", "Vous allez voyager."],
        ["ils / elles", "vont", "Ils vont finir."],
      ],
      transHeaders: {
        en: ["Subject", "TO GO", "Example"],
        ar: ["الفاعل", "يذهب", "مثال"],
        fa: ["فاعل", "رفتن", "مثال"],
        ti: ["ተካኢ", "ምኻድ", "ኣብነት"],
        uk: ["Підмет", "ЙТИ", "Приклад"],
      },
      transRows: {
        en: [
          ["I", "am going to", "I am going to leave."],
          ["you", "are going to", "Are you going to eat?"],
          ["he / she / one", "is going to", "She is going to arrive."],
          ["we", "are going to", "We are going to work."],
          ["you (pl.)", "are going to", "You are going to travel."],
          ["they", "are going to", "They are going to finish."],
        ],
      },
    },
    {
      type: "rule",
      text: "Futur proche = aller (présent) + infinitif. Exprime une action proche ou planifiée.",
      examples: [
        { correct: "Ce soir, je vais regarder un film." },
        { correct: "Demain, nous allons visiter Paris." },
        { correct: "Je ne vais pas partir. (négatif)" },
      ],
    },
    {
      type: "note",
      text: "Forme négative : ne + aller + pas + infinitif → «Il ne va pas venir.»",
    },
  ],
  exercises: [],
};

const a1GrLImperatif: GrammarLesson = {
  slug: "a1-gr-l20",
  code: "G.20",
  level: "A1",
  title: "L'impératif",
  theory: [
    { type: "heading", text: "L'impératif : donner un ordre ou un conseil" },
    {
      type: "grid",
      headers: ["Personne", "Présent → Impératif", "Exemple"],
      rows: [
        ["tu", "-s supprimé pour -ER", "Tu parles → Parle !"],
        ["nous", "= présent", "Nous parlons → Parlons !"],
        ["vous", "= présent", "Vous parlez → Parlez !"],
      ],
      transHeaders: {
        en: ["Person", "Present → Imperative", "Example"],
        ar: ["الشخص", "المضارع → الأمر", "مثال"],
        fa: ["شخص", "حال → امر", "مثال"],
        ti: ["ሰብ", "ሕጂ → ኣዝዝ", "ኣብነት"],
        uk: ["Особа", "Теперішній → Наказовий", "Приклад"],
      },
    },
    {
      type: "grid",
      headers: ["", "parler", "finir", "prendre", "aller"],
      rows: [
        ["tu", "Parle !", "Finis !", "Prends !", "Va !"],
        ["nous", "Parlons !", "Finissons !", "Prenons !", "Allons !"],
        ["vous", "Parlez !", "Finissez !", "Prenez !", "Allez !"],
      ],
    },
    {
      type: "rule",
      text: "Négatif : ne + verbe + pas → «Ne parle pas !» / «Ne mangez pas !»",
      examples: [
        { correct: "Viens à partir de 20 h !" },
        { correct: "Ne venez pas à 19 h !" },
        { correct: "Prenons un taxi !" },
      ],
    },
    {
      type: "note",
      text: "Attention : ÊTRE → Sois / Soyons / Soyez — AVOIR → Aie / Ayons / Ayez",
    },
  ],
  exercises: [],
};

// ── A2 Lessons ────────────────────────────────────────────────────────────────

const a2GrL07: GrammarLesson = {
  slug: "a2-gr-l07",
  code: "G.30",
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
  exercises: [],
};

const a2GrL09: GrammarLesson = {
  slug: "a2-gr-l09",
  code: "G.31",
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
  exercises: [],
};

const a2GrL11: GrammarLesson = {
  slug: "a2-gr-l11",
  code: "G.35",
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
  exercises: [],
};

const a2GrL12: GrammarLesson = {
  slug: "a2-gr-l12",
  code: "G.36",
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
  exercises: [],
};

const a2GrL18: GrammarLesson = {
  slug: "a2-gr-l18",
  code: "G.34",
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
  exercises: [],
};

const a2GrL19: GrammarLesson = {
  slug: "a2-gr-l19",
  code: "G.37",
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
  exercises: [],
};

const a2GrL25: GrammarLesson = {
  slug: "a2-gr-l25",
  code: "G.38",
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
  exercises: [],
};

const a2GrL35: GrammarLesson = {
  slug: "a2-gr-l35",
  code: "G.40",
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
  exercises: [],
};

const a2GrL36: GrammarLesson = {
  slug: "a2-gr-l36",
  code: "G.41",
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
  exercises: [],
};

const a2GrL39: GrammarLesson = {
  slug: "a2-gr-l39",
  code: "G.45",
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
  exercises: [],
};

const a2GrL42: GrammarLesson = {
  slug: "a2-gr-l42",
  code: "G.39",
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
  exercises: [],
};

const a2GrL52: GrammarLesson = {
  slug: "a2-gr-l52",
  code: "G.46",
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
  exercises: [],
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
  a1GrLCest,
  a1GrLQuel,
  a1GrLFutur,
  a1GrLImperatif,
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
