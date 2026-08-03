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
      label: "Le présent de l'indicatif est utilisé pour :",
      items: [
        "parler d'une action qui se passe au moment où l'on parle. → Vous regardez la télévision en ce moment ?",
        "parler d'une action habituelle. → Tous les matins, je regarde mes mails.",
        "faire une description générale au présent, ou exprimer des goûts et des idées. → Vous habitez à Paris ? Tu aimes danser ?",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Conjugaison",
      trans: { en: "Conjugation", ar: "التصريف", fa: "صرف", ti: "ምጽራይ", uk: "Дієвідміна" },
    },
    {
      type: "plain_list",
      items: [
        "La majorité des verbes français ont un infinitif en {a}-er{/a}.",
        "On ajoute les terminaisons {a}e, es, e, ons, ez, ent{/a} au radical du verbe.",
      ],
      allBullets: true,
    },
    {
      type: "grid",
      headers: ["Infinitif", "Pronom", "Verbe", "Complément"],
      boldFirstCol: true,
      rows: [
        ["regard{a}er{/a}", "Je", "regard{a}e{/a}", "mes mails."],
        ["écout{a}er{/a}", "Tu", "écout{a}es{/a}", "la radio."],
        ["habit{a}er{/a}", "Il / Elle / On", "habit{a}e{/a}", "à Paris."],
        ["parl{a}er{/a}", "Nous", "parl{a}ons{/a}", "français."],
        ["jou{a}er{/a}", "Vous", "jou{a}ez{/a}", "au football."],
        ["étudi{a}er{/a}", "Ils / Elles", "étudi{a}ent{/a}", "les relations internationales."],
      ],
    },
    {
      type: "heading",
      text: "Prononciation et orthographe",
      trans: { en: "Pronunciation and spelling", ar: "النطق والإملاء", fa: "تلفظ و املا", ti: "ኣደማምጻን ኣጸሓሕፋን", uk: "Вимова та правопис" },
    },
    {
      type: "plain_list",
      items: [
        "On prononce la consonne finale du radical, mais on ne prononce pas les terminaisons {a}-e, -es, -ent{/a}.",
        "On fait la liaison. → On aime, nous écoutons, vous étudiez, ils habitent, elles oublient.",
        "Le pronom {a}je{/a} devient {a}j'{/a} devant une voyelle ou un h muet. → {s}Je aime{/s} → {a}J'aime{/a} ma ville. / {s}Je habite{/s} → {a}J'habite{/a} à Paris.",
      ],
      allBullets: true,
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
