import type { GrammarLesson } from "../../grammar-data";

/** Unité 4 — Les verbes en -er : cas général (G1.5) */
export const A1_GR_VERBES_ER: GrammarLesson = {
  slug: "a1-gr-verbes-er",
  code: "G1.5",
  level: "A1",
  title: "Les verbes en -er : cas général",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
      trans: { en: "Usage", ar: "الاستخدام", fa: "کاربرد", ti: "ኣጠቓቕማ", uk: "Вживання" },
    },
    {
      type: "plain_list",
      items: [
        "Les verbes en {a}-er{/a} sont les verbes les plus fréquents en français. Ils font partie du 1er groupe. Le présent de l'indicatif est utilisé pour :",
      ],
    },
    {
      type: "plain_list",
      items: ["1. Parler d'une action qui se passe au moment où l'on parle."],
    },
    {
      type: "highlight",
      label: "",
      items: ["Vous {a}regardez{/a} la télévision en ce moment ?"],
      noBulletItems: [0],
    },
    {
      type: "plain_list",
      items: ["2. Parler d'une action habituelle."],
    },
    {
      type: "highlight",
      label: "",
      items: ["Tous les matins, je {a}regarde{/a} mes mails."],
      noBulletItems: [0],
    },
    {
      type: "plain_list",
      items: ["3. Faire une description générale au présent, ou exprimer des goûts et des idées."],
    },
    {
      type: "highlight",
      label: "",
      items: ["Vous {a}habitez{/a} à Paris ?"],
      noBulletItems: [0],
    },

    {
      type: "heading",
      text: "Comment former le verbe ?",
      trans: { en: "How to form the verb?", ar: "كيف تصرّف الفعل؟", fa: "چگونه فعل را صرف کنیم؟", ti: "ግሲ ብኸመይ ትሰርሕ?", uk: "Як утворити дієслово?" },
    },
    {
      type: "plain_list",
      items: [
        "En général, les verbes en {a}-er{/a} ont une base verbale. On ajoute la terminaison {a}e, es, e, ons, ez, ent{/a} à cette base.",
      ],
    },
    {
      type: "grid",
      headers: ["Infinitif", "Pronom", "Verbe", "Complément"],
      boldFirstCol: true,
      rows: [
        ["regarder", "Je", "regard{a}e{/a}", "mes mails."],
        ["écouter", "Tu", "écout{a}es{/a}", "la radio."],
        ["habiter", "Il / Elle / On", "habit{a}e{/a}", "à Paris."],
        ["parler", "Nous", "parl{a}ons{/a}", "français."],
        ["aimer", "Vous", "aim{a}ez{/a}", "le football."],
        ["étudier", "Ils / Elles", "étudi{a}ent{/a}", "les relations internationales."],
      ],
    },
    {
      type: "plain_list",
      items: ["On prend le verbe et on enlève {a}-er{/a}."],
    },
    {
      type: "verb_toggle",
      verbs: [
        {
          infinitive: "parler",
          radical: "parl",
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
          infinitive: "aimer",
          radical: "aim",
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
          infinitive: "écouter",
          radical: "écout",
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
          infinitive: "habiter",
          radical: "habit",
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
          infinitive: "regarder",
          radical: "regard",
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
          infinitive: "étudier",
          radical: "étudi",
          rows: [
            { pronoun: "je", ending: "e" },
            { pronoun: "tu", ending: "es" },
            { pronoun: "il / elle / on", ending: "e" },
            { pronoun: "nous", ending: "ons" },
            { pronoun: "vous", ending: "ez" },
            { pronoun: "ils / elles", ending: "ent" },
          ],
        },
      ],
    },

    {
      type: "heading",
      text: "Prononciation et orthographe",
      trans: { en: "Pronunciation and spelling", ar: "النطق والإملاء", fa: "تلفظ و املا", ti: "ኣደማምጻን ኣጸሓሕፋን", uk: "Вимова та правопис" },
    },
    {
      type: "plain_list",
      items: ["On prononce la consonne finale du radical, mais on ne prononce pas les terminaisons {a}-e, -es, -ent{/a}."],
    },
    {
      type: "plain_list",
      items: ["On fait la liaison."],
    },
    {
      type: "highlight",
      label: "",
      items: ["O{li}n|a{/li}ime, nou{li}s|é{/li}coutons, vou{li}s|é{/li}tudiez, il{li}s|h{/li}abitent, elle{li}s|o{/li}ublient."],
      noBulletItems: [0],
    },
    {
      type: "plain_list",
      items: ["Le pronom {a}je{/a} devient {a}j'{/a} devant une voyelle ou un h muet."],
    },
    {
      type: "highlight",
      label: "",
      items: ["{s}Je aime{/s} → {a}J'aime{/a} ma ville. / {s}Je habite{/s} → {a}J'habite{/a} à Paris."],
      noBulletItems: [0],
      inlineArrows: true,
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Terminaisons des verbes en -er",
      instruction: "Choisissez la bonne terminaison.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Je regard__ la télé.", choices: ["e", "es", "ons", "ez"], correctIdx: 0 },
        { sentence: "Tu habit__ à Paris ?", choices: ["es", "e", "ez", "ent"], correctIdx: 0 },
        { sentence: "Il parl__ français.", choices: ["e", "es", "ons", "ent"], correctIdx: 0 },
        { sentence: "Nous travaill__ ici.", choices: ["ons", "ez", "e", "ent"], correctIdx: 0 },
        { sentence: "Vous jou__ au football.", choices: ["ez", "ons", "e", "es"], correctIdx: 0 },
        { sentence: "Ils étudi__ le français.", choices: ["ent", "e", "ons", "ez"], correctIdx: 0 },
        { sentence: "Elle aim__ danser.", choices: ["e", "es", "ons", "ent"], correctIdx: 0 },
        { sentence: "On écout__ la radio.", choices: ["e", "es", "ez", "ent"], correctIdx: 0 },
        { sentence: "Tu pens__ au quartier ?", choices: ["es", "e", "ez", "ons"], correctIdx: 0 },
        { sentence: "Nous habit__ en banlieue.", choices: ["ons", "ez", "ent", "e"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Conjuguez les verbes en -er",
      instruction: "Conjuguez le verbe entre parenthèses au présent.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Je ___ (habiter) en banlieue.", hint: "habiter → je", answer: "habite" },
        { sentence: "Tu ___ (travailler) ici ?", hint: "travailler → tu", answer: "travailles" },
        { sentence: "Il ___ (parler) français.", hint: "parler → il", answer: "parle" },
        { sentence: "Nous ___ (étudier) le français.", hint: "étudier → nous", answer: "étudions" },
        { sentence: "Vous ___ (habiter) dans le quartier ?", hint: "habiter → vous", answer: "habitez" },
        { sentence: "Ils ___ (aimer) danser.", hint: "aimer → ils", answer: "aiment" },
        { sentence: "Elle ___ (écouter) la radio.", hint: "écouter → elle", answer: "écoute" },
        { sentence: "On ___ (regarder) la télévision.", hint: "regarder → on", answer: "regarde" },
        { sentence: "Tu ___ (jouer) au football.", hint: "jouer → tu", answer: "joues" },
        { sentence: "Nous ___ (penser) au projet.", hint: "penser → nous", answer: "pensons" },
      ],
    },
  ],
};
