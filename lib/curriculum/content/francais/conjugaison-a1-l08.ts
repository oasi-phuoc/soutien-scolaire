import type { ConjLesson } from "../../conjugation-data";

export const A1_CONJ_L08: ConjLesson = {
  slug: "a1-conj-l08",
  code: "G.9",
  level: "A1",
  title: "Les verbes de mouvement",
  theory: [
    {
      type: "heading",
      text: "Les verbes de mouvement au présent",
      trans: { en: "Movement verbs in the present", ar: "أفعال الحركة في المضارع", fa: "افعال حرکتی در زمان حال", ti: "ግሲያት ምቅስቃስ ኣብ ሕጂ ጊዜ", uk: "Дієслова руху у теперішньому часі" },
    },
    {
      type: "plain_list",
      items: [
        "Ces verbes expriment un déplacement ou un mouvement. Clique sur chaque verbe pour voir sa conjugaison.",
      ],
      noBulletItems: [0],
      transItems: {
        en: ["These verbs express movement or displacement. Click each verb to see its conjugation."],
        ar: ["تعبّر هذه الأفعال عن الحركة أو التنقل. انقر على كل فعل لرؤية تصريفه."],
        fa: ["این افعال حرکت یا جابجایی را بیان می‌کنند. روی هر فعل کلیک کنید تا صرف آن را ببینید."],
        ti: ["ነዚ ግሲያት ምቅስቃስ ወይ ምንቅስቓስ ይገልጹ. ንኹሉ ግሲ ጠውቕ ናይ ምቕያር ንምርካብ."],
        uk: ["Ці дієслова виражають рух або переміщення. Клацніть на кожне дієслово, щоб побачити відмінювання."],
      },
    },
    {
      type: "verb_toggle",
      buttonCols: 5,
      verbs: [
        {
          infinitive: "aller",
          radical: "",
          rows: [
            { pronoun: "je", ending: "vais" },
            { pronoun: "tu", ending: "vas" },
            { pronoun: "il / elle / on", ending: "va" },
            { pronoun: "nous", ending: "allons" },
            { pronoun: "vous", ending: "allez" },
            { pronoun: "ils / elles", ending: "vont" },
          ],
        },
        {
          infinitive: "venir",
          radical: "",
          rows: [
            { pronoun: "je", ending: "viens" },
            { pronoun: "tu", ending: "viens" },
            { pronoun: "il / elle / on", ending: "vient" },
            { pronoun: "nous", ending: "venons" },
            { pronoun: "vous", ending: "venez" },
            { pronoun: "ils / elles", ending: "viennent" },
          ],
        },
        {
          infinitive: "partir",
          radical: "par",
          rows: [
            { pronoun: "je", ending: "s" },
            { pronoun: "tu", ending: "s" },
            { pronoun: "il / elle / on", ending: "t" },
            { pronoun: "nous", ending: "tons" },
            { pronoun: "vous", ending: "tez" },
            { pronoun: "ils / elles", ending: "tent" },
          ],
        },
        {
          infinitive: "arriver",
          radical: "arriv",
          rows: [
            { pronoun: "j'", ending: "e" },
            { pronoun: "tu", ending: "es" },
            { pronoun: "il / elle / on", ending: "e" },
            { pronoun: "nous", ending: "ons" },
            { pronoun: "vous", ending: "ez" },
            { pronoun: "ils / elles", ending: "ent" },
          ],
        },
        {
          infinitive: "entrer",
          radical: "entr",
          rows: [
            { pronoun: "j'", ending: "e" },
            { pronoun: "tu", ending: "es" },
            { pronoun: "il / elle / on", ending: "e" },
            { pronoun: "nous", ending: "ons" },
            { pronoun: "vous", ending: "ez" },
            { pronoun: "ils / elles", ending: "ent" },
          ],
        },
        {
          infinitive: "sortir",
          radical: "sor",
          rows: [
            { pronoun: "je", ending: "s" },
            { pronoun: "tu", ending: "s" },
            { pronoun: "il / elle / on", ending: "t" },
            { pronoun: "nous", ending: "tons" },
            { pronoun: "vous", ending: "tez" },
            { pronoun: "ils / elles", ending: "tent" },
          ],
        },
        {
          infinitive: "monter",
          radical: "mont",
          rows: [
            { pronoun: "je", ending: "e" },
            { pronoun: "tu", ending: "es" },
            { pronoun: "il / elle / on", ending: "e" },
            { pronoun: "nous", ending: "ons" },
            { pronoun: "vous", ending: "ez" },
            { pronoun: "ils / elles", ending: "ent" },
          ],
        },
        {
          infinitive: "descendre",
          radical: "descend",
          rows: [
            { pronoun: "je", ending: "s" },
            { pronoun: "tu", ending: "s" },
            { pronoun: "il / elle / on", ending: "" },
            { pronoun: "nous", ending: "ons" },
            { pronoun: "vous", ending: "ez" },
            { pronoun: "ils / elles", ending: "ent" },
          ],
        },
        {
          infinitive: "marcher",
          radical: "march",
          rows: [
            { pronoun: "je", ending: "e" },
            { pronoun: "tu", ending: "es" },
            { pronoun: "il / elle / on", ending: "e" },
            { pronoun: "nous", ending: "ons" },
            { pronoun: "vous", ending: "ez" },
            { pronoun: "ils / elles", ending: "ent" },
          ],
        },
        {
          infinitive: "courir",
          radical: "cour",
          rows: [
            { pronoun: "je", ending: "s" },
            { pronoun: "tu", ending: "s" },
            { pronoun: "il / elle / on", ending: "t" },
            { pronoun: "nous", ending: "ons" },
            { pronoun: "vous", ending: "ez" },
            { pronoun: "ils / elles", ending: "ent" },
          ],
        },
      ],
    },
  ],
  exercises: [],
};
