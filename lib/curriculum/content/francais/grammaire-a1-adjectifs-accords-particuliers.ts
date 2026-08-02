import type { GrammarLesson } from "../../grammar-data";

/** Unité 18 — L'adjectif : accords particuliers (G2.8) */
export const A1_GR_ADJ_ACCORDS_PART: GrammarLesson = {
  slug: "a1-gr-adjectifs-accords-particuliers",
  code: "G2.8",
  level: "A1",
  title: "L'adjectif : accords particuliers",
  theory: [
    {
      type: "heading",
      text: "Les adjectifs de couleur",
    },
    {
      type: "plain_list",
      items: [
        "En général, les adjectifs de couleur s'accordent en genre et en nombre. → une lumière bleue ; des chaussures rouges.",
      ],
      noBulletItems: [0],
    },
    {
      type: "highlight",
      label: "Invariables dans trois cas",
      items: [
        "Quand la couleur évoque une matière ou un objet : des yeux marron ; des chaises orange ; des cafés noisette. Exceptions qui s'accordent : roses, mauves, violettes ; châtains.",
        "Quand la couleur est précisée par un autre adjectif ou un nom : des chaussures bleu foncé ; une robe bleu ciel ; une veste bleu marine.",
        "Quand la couleur est exprimée par deux adjectifs : une veste noir et blanc.",
      ],
    },
    {
      type: "heading",
      text: "L'adjectif demi",
    },
    {
      type: "plain_list",
      items: [
        "Devant le nom, {a}demi{/a} est invariable (jamais au pluriel). → une demi-heure ; des demi-heures.",
        "Après le nom, il s'accorde seulement en genre. → une heure et demie ; deux heures et demie.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Les adjectifs numéraux",
    },
    {
      type: "plain_list",
      items: [
        "Les nombres sont en général invariables. → quatre semaines ; huit minutes ; onze mois ; mille fois…",
        "{a}Million{/a} et {a}milliard{/a} s'accordent. → quatre millions ; six milliards.",
        "{a}Vingt{/a} et {a}cent{/a} : invariables seuls ou suivis d'un autre nombre. → vingt personnes ; cent jours ; cent vingt personnes ; vingt-trois jours.",
        "Ils prennent un {a}s{/a} quand un nombre les multiplie, sauf s'ils sont suivis d'un autre nombre. → deux cents euros ; quatre-vingts euros ; mais deux cent dix euros ; quatre-vingt-huit euros.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Prononciation et orthographe",
    },
    {
      type: "plain_list",
      items: [
        "On fait la liaison devant un nom qui commence par une voyelle ou un h muet. → deux euros ; cent euros ; quatre-vingts euros.",
        "Trait d'union entre dizaines et unités. → trente-trois ; cent quatre-vingt-deux.",
        "Trait d'union avec {a}demi{/a} devant le nom. → une demi-heure.",
      ],
      allBullets: true,
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
        { sentence: "des chaussures ___", choices: ["rouges", "rouge", "rougs", "rougess"], correctIdx: 0 },
        { sentence: "des yeux ___", choices: ["marron", "marrons", "marrone", "marrones"], correctIdx: 0 },
        { sentence: "des chaises ___", choices: ["orange", "oranges", "orangé", "orangées"], correctIdx: 0 },
        { sentence: "des chaussures ___ foncé", choices: ["bleu", "bleues", "bleus", "bleue"], correctIdx: 0 },
        { sentence: "une veste ___", choices: ["noir et blanc", "noire et blanche", "noirs et blancs", "noire et blanc"], correctIdx: 0 },
        { sentence: "une ___ -heure", choices: ["demi", "demie", "demis", "demies"], correctIdx: 0 },
        { sentence: "une heure et ___", choices: ["demie", "demi", "demis", "demies"], correctIdx: 0 },
        { sentence: "deux ___ euros", choices: ["cents", "cent", "centes", "centz"], correctIdx: 0 },
        { sentence: "deux ___ dix euros", choices: ["cent", "cents", "centes", "centz"], correctIdx: 0 },
        { sentence: "quatre-___ euros", choices: ["vingts", "vingt", "vingtes", "vingtz"], correctIdx: 0 },
        { sentence: "quatre-___ -huit euros", choices: ["vingt", "vingts", "vingtes", "vingtz"], correctIdx: 0 },
        { sentence: "des chemises ___", choices: ["roses", "rose", "rosés", "rosées"], correctIdx: 0 },
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
