import type { GrammarLesson } from "../../grammar-data";

/** Unité 17 — L'accord des adjectifs (G3.3) */
export const A1_GR_ADJ_ACCORDS_PART: GrammarLesson = {
  slug: "a1-gr-adjectifs-accords-particuliers",
  code: "G3.3",
  level: "A1",
  title: "L'accord des adjectifs",
  theory: [
    {
      type: "heading",
      text: "Les adjectifs de couleur",
    },
    {
      type: "plain_list",
      items: [
        "En général, les adjectifs de couleur s'accordent en genre et en nombre avec le nom qu'ils qualifient.",
      ],
      noBulletItems: [0],
    },
    {
      type: "highlight",
      label: "",
      items: [
        "un pantalon noir → une jupe noir{a}e{/a}",
        "une voiture rouge → des voitures rouge{a}s{/a}",
      ],
      noBulletItems: [0, 1],
    },
    {
      type: "highlight",
      label: "Exception",
      items: [
        "Les adjectifs de couleur sont invariables dans trois cas.",
      ],
      noBulletItems: [0],
    },
    {
      type: "plain_list",
      items: [
        "1. Quand la couleur est un nom de matière, de fruit, de fleur ou d'objet",
      ],
      noBulletItems: [0],
    },
    {
      type: "highlight",
      label: "",
      items: [
        "des yeux marron",
        "des chaises orange",
        "des cafés noisette",
      ],
      noBulletItems: [0, 1, 2],
    },
    {
      type: "plain_list",
      items: [
        "Par contre, certains noms sont devenus de véritables adjectifs et s'accordent.",
      ],
      noBulletItems: [0],
    },
    {
      type: "highlight",
      label: "",
      items: [
        "des fleurs rose{a}s{/a}",
        "des tissus mauve{a}s{/a}",
        "des robes violett{a}es{/a}",
        "des cheveux châtain{a}s{/a}",
      ],
      noBulletItems: [0, 1, 2, 3],
    },
    {
      type: "plain_list",
      items: [
        "2. Quand la couleur est précisée par un autre adjectif ou un nom",
      ],
      noBulletItems: [0],
    },
    {
      type: "highlight",
      label: "",
      items: [
        "des chaussures bleu foncé",
        "une robe bleu ciel",
      ],
      noBulletItems: [0, 1],
    },
    {
      type: "plain_list",
      items: [
        "3. Quand la couleur est exprimée par deux adjectifs",
      ],
      noBulletItems: [0],
    },
    {
      type: "highlight",
      label: "",
      items: [
        "une veste noir et blanc",
      ],
      noBulletItems: [0],
    },
    {
      type: "heading",
      text: "L'adjectif demi",
    },
    {
      type: "highlight",
      label: "Devant le nom",
      items: [
        "Demi est invariable.",
      ],
      noBulletItems: [0],
    },
    {
      type: "highlight",
      label: "",
      items: [
        "une demi-heure",
        "une demi-journée",
        "des demi-portions",
      ],
      noBulletItems: [0, 1, 2],
    },
    {
      type: "highlight",
      label: "Après le nom",
      items: [
        "Demi s'accorde seulement en genre avec le nom.",
      ],
      noBulletItems: [0],
    },
    {
      type: "highlight",
      label: "",
      items: [
        "une heure et demi{a}e{/a}",
        "trois jours et demi",
      ],
      noBulletItems: [0, 1],
    },
    {
      type: "heading",
      text: "Les adjectifs numéraux",
    },
    {
      type: "plain_list",
      items: [
        "Les adjectifs numéraux indiquent une quantité ou un rang.",
      ],
      noBulletItems: [0],
    },
    {
      type: "highlight",
      label: "Les nombres cardinaux",
      items: [
        "Ils expriment une quantité et sont invariables.",
      ],
      noBulletItems: [0],
    },
    {
      type: "highlight",
      label: "",
      items: [
        "dix élèves",
        "quatre semaines",
      ],
      noBulletItems: [0, 1],
    },
    {
      type: "highlight",
      label: "Mille",
      items: [
        "Mille est toujours invariable.",
        "deux mille francs",
      ],
      noBulletItems: [0, 1],
    },
    {
      type: "highlight",
      label: "Vingt et cent",
      items: [
        "Ils sont invariables lorsqu'ils sont seuls ou suivis d'un autre nombre.",
      ],
      noBulletItems: [0],
    },
    {
      type: "highlight",
      label: "",
      items: [
        "vingt personnes",
        "cent jours",
        "quatre-vingt-huit francs",
      ],
      noBulletItems: [0, 1, 2],
    },
    {
      type: "plain_list",
      items: [
        "Ils prennent un {a}s{/a} lorsqu'ils sont multipliés et ne sont suivis d'aucun autre nombre.",
      ],
      noBulletItems: [0],
    },
    {
      type: "highlight",
      label: "",
      items: [
        "cinq cent{a}s{/a} mètres",
        "quatre-vingt{a}s{/a} voitures",
      ],
      noBulletItems: [0, 1],
    },
    {
      type: "highlight",
      label: "Million et milliard",
      items: [
        "Million et milliard sont des noms et ils s'accordent.",
      ],
      noBulletItems: [0],
    },
    {
      type: "highlight",
      label: "",
      items: [
        "deux million{a}s{/a} de livres",
        "six milliard{a}s{/a} d'habitants",
      ],
      noBulletItems: [0, 1],
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Accords particuliers",
      instruction: "Choisissez la forme correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "des chaussures ___", choices: ["rouges", "rouge", "rougs"], correctIdx: 0 },
        { sentence: "des yeux ___", choices: ["marron", "marrons", "marrone"], correctIdx: 0 },
        { sentence: "des chaises ___", choices: ["orange", "oranges", "orangé"], correctIdx: 0 },
        { sentence: "des chaussures ___ foncé", choices: ["bleu", "bleues", "bleus"], correctIdx: 0 },
        { sentence: "une veste ___", choices: ["noir et blanc", "noire et blanche", "noirs et blancs"], correctIdx: 0 },
        { sentence: "une ___ -heure", choices: ["demi", "demie", "demis"], correctIdx: 0 },
        { sentence: "une heure et ___", choices: ["demie", "demi", "demis"], correctIdx: 0 },
        { sentence: "deux ___ euros", choices: ["cents", "cent", "centes"], correctIdx: 0 },
        { sentence: "deux ___ dix euros", choices: ["cent", "cents", "centes"], correctIdx: 0 },
        { sentence: "quatre-___ euros", choices: ["vingts", "vingt", "vingtes"], correctIdx: 0 },
        { sentence: "quatre-___ -huit euros", choices: ["vingt", "vingts", "vingtes"], correctIdx: 0 },
        { sentence: "des chemises ___", choices: ["roses", "rose", "rosés"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Écrivez la forme correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "des chaussures ___ (rouge)", hint: "accord", answer: "rouges" },
        { sentence: "des yeux ___ (marron)", hint: "invariable", answer: "marron" },
        { sentence: "des chaussures ___ foncé (bleu)", hint: "invariable", answer: "bleu" },
        { sentence: "une ___ -heure (demi)", hint: "devant le nom", answer: "demi" },
        { sentence: "deux heures et ___ (demi)", hint: "après le nom", answer: "demie" },
        { sentence: "deux ___ euros (cent)", hint: "multiplié", answer: "cents" },
        { sentence: "deux ___ dix euros (cent)", hint: "suivi d'un nombre", answer: "cent" },
        { sentence: "quatre-___ euros (vingt)", hint: "multiplié", answer: "vingts" },
        { sentence: "quatre-___ -trois (vingt)", hint: "suivi d'un nombre", answer: "vingt" },
        { sentence: "des cheveux ___ (châtain)", hint: "exception qui s'accorde", answer: "châtains" },
      ],
    },
  ],
};
