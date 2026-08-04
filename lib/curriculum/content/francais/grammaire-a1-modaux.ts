import type { GrammarLesson, VerbToggleVerb } from "../../grammar-data";
import { G1_EXERCISES } from "./g1-lesson-profiles";

const MODAL_VERBS: VerbToggleVerb[] = [
  {
    infinitive: "vouloir",
    radical: "",
    rows: [
      { pronoun: "je", ending: "veux" },
      { pronoun: "tu", ending: "veux" },
      { pronoun: "il / elle / on", ending: "veut" },
      { pronoun: "nous", ending: "voulons" },
      { pronoun: "vous", ending: "voulez" },
      { pronoun: "ils / elles", ending: "veulent" },
    ],
  },
  {
    infinitive: "pouvoir",
    radical: "",
    rows: [
      { pronoun: "je", ending: "peux" },
      { pronoun: "tu", ending: "peux" },
      { pronoun: "il / elle / on", ending: "peut" },
      { pronoun: "nous", ending: "pouvons" },
      { pronoun: "vous", ending: "pouvez" },
      { pronoun: "ils / elles", ending: "peuvent" },
    ],
  },
  {
    infinitive: "devoir",
    radical: "",
    rows: [
      { pronoun: "je", ending: "dois" },
      { pronoun: "tu", ending: "dois" },
      { pronoun: "il / elle / on", ending: "doit" },
      { pronoun: "nous", ending: "devons" },
      { pronoun: "vous", ending: "devez" },
      { pronoun: "ils / elles", ending: "doivent" },
    ],
  },
  {
    infinitive: "savoir",
    radical: "",
    rows: [
      { pronoun: "je", ending: "sais" },
      { pronoun: "tu", ending: "sais" },
      { pronoun: "il / elle / on", ending: "sait" },
      { pronoun: "nous", ending: "savons" },
      { pronoun: "vous", ending: "savez" },
      { pronoun: "ils / elles", ending: "savent" },
    ],
  },
  {
    infinitive: "falloir",
    radical: "",
    rows: [
      { pronoun: "il", ending: "faut" },
    ],
  },
];

/** Unité 6 — Pouvoir, vouloir, devoir, savoir et falloir (G1.7) */
export const A1_GR_MODAUX: GrammarLesson = {
  slug: "a1-gr-modaux",
  code: "G1.7",
  level: "A1",
  title: "Les verbes modaux",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
      trans: { en: "Usage", ar: "الاستخدام", fa: "کاربرد", ti: "ኣጠቓቕማ", uk: "Вживання" },
    },
    {
      type: "plain_list",
      items: [
        "Ces verbes expriment un état, une capacité ou une obligation. Ils sont toujours suivis d'un infinitif.",
      ],
      transItems: {
        en: ["These verbs express a state, an ability or an obligation. They are always followed by an infinitive."],
        ar: ["تعبّر هذه الأفعال عن حالة أو قدرة أو التزام. ويتبعها دائماً فعل في المصدر."],
        fa: ["این فعل‌ها حالت، توانایی یا الزام را بیان می‌کنند. همیشه پس از آن‌ها یک فعل در حالت مصدر می‌آید."],
        ti: ["እዞም ግሲታት ኩነታት፣ ዓቕሚ ወይ ግዴታ ይገልጹ። ወትሩ መሰረታዊ ግሲ ይስዕቦም።"],
        uk: ["Ці дієслова виражають стан, здатність або обов'язок. Після них завжди вживається інфінітив."],
      },
    },

    {
      type: "plain_list",
      items: ["{a}Vouloir{/a} sert à exprimer un désir ou une volonté."],
      transItems: {
        en: ["{a}Vouloir{/a} is used to express a desire or an intention."],
        ar: ["يُستخدم {a}Vouloir{/a} للتعبير عن رغبة أو إرادة."],
        fa: ["{a}Vouloir{/a} برای بیان خواسته یا اراده به کار می‌رود."],
        ti: ["{a}Vouloir{/a} ድሌት ወይ ፍቓድ ንምግላጽ ይጥቀም።"],
        uk: ["{a}Vouloir{/a} вживається для вираження бажання або наміру."],
      },
    },
    {
      type: "grid",
      headers: ["Emploi", "Exemple"],
      transHeaders: {
        en: ["Use", "Example"],
        ar: ["الاستخدام", "مثال"],
        fa: ["کاربرد", "مثال"],
        ti: ["ኣጠቓቕማ", "ኣብነት"],
        uk: ["Вживання", "Приклад"],
      },
      colWidths: ["33%", "67%"],
      rows: [
        ["Désir", "Je {a}veux{/a} manger une pizza."],
        ["Volonté", "Je {a}veux{/a} apprendre le français."],
      ],
      transRows: {
        en: [["Desire", "Je {a}veux{/a} manger une pizza."], ["Intention", "Je {a}veux{/a} apprendre le français."]],
        ar: [["رغبة", "Je {a}veux{/a} manger une pizza."], ["إرادة", "Je {a}veux{/a} apprendre le français."]],
        fa: [["خواسته", "Je {a}veux{/a} manger une pizza."], ["اراده", "Je {a}veux{/a} apprendre le français."]],
        ti: [["ድሌት", "Je {a}veux{/a} manger une pizza."], ["ፍቓድ", "Je {a}veux{/a} apprendre le français."]],
        uk: [["Бажання", "Je {a}veux{/a} manger une pizza."], ["Намір", "Je {a}veux{/a} apprendre le français."]],
      },
    },

    {
      type: "plain_list",
      items: [
        "{a}Pouvoir{/a} sert à exprimer une capacité, une possibilité, une autorisation ou une interdiction (à la forme négative).",
      ],
      transItems: {
        en: ["{a}Pouvoir{/a} is used to express an ability, a possibility, permission or a prohibition (in the negative form)."],
        ar: ["يُستخدم {a}Pouvoir{/a} للتعبير عن قدرة أو إمكانية أو إذن أو منع (في صيغة النفي)."],
        fa: ["{a}Pouvoir{/a} برای بیان توانایی، امکان، اجازه یا ممنوعیت (در صورت منفی) به کار می‌رود."],
        ti: ["{a}Pouvoir{/a} ዓቕሚ፣ ተኽእሎ፣ ፍቓድ ወይ ክልከላ (ብኣሉታዊ ቅርጺ) ንምግላጽ ይጥቀም።"],
        uk: ["{a}Pouvoir{/a} вживається для вираження здатності, можливості, дозволу або заборони (у заперечній формі)."],
      },
    },
    {
      type: "grid",
      headers: ["Emploi", "Exemple"],
      transHeaders: {
        en: ["Use", "Example"],
        ar: ["الاستخدام", "مثال"],
        fa: ["کاربرد", "مثال"],
        ti: ["ኣጠቓቕማ", "ኣብነት"],
        uk: ["Вживання", "Приклад"],
      },
      colWidths: ["33%", "67%"],
      rows: [
        ["Capacité", "Je {a}peux{/a} nager."],
        ["Possibilité", "Nous {a}pouvons{/a} partir maintenant."],
        ["Autorisation", "Est-ce que je {a}peux{/a} entrer ?"],
        ["Interdiction", "Vous ne {a}pouvez{/a} pas fumer ici."],
      ],
      transRows: {
        en: [["Ability", "Je {a}peux{/a} nager."], ["Possibility", "Nous {a}pouvons{/a} partir maintenant."], ["Permission", "Est-ce que je {a}peux{/a} entrer ?"], ["Prohibition", "Vous ne {a}pouvez{/a} pas fumer ici."]],
        ar: [["قدرة", "Je {a}peux{/a} nager."], ["إمكانية", "Nous {a}pouvons{/a} partir maintenant."], ["إذن", "Est-ce que je {a}peux{/a} entrer ?"], ["منع", "Vous ne {a}pouvez{/a} pas fumer ici."]],
        fa: [["توانایی", "Je {a}peux{/a} nager."], ["امکان", "Nous {a}pouvons{/a} partir maintenant."], ["اجازه", "Est-ce que je {a}peux{/a} entrer ?"], ["ممنوعیت", "Vous ne {a}pouvez{/a} pas fumer ici."]],
        ti: [["ዓቕሚ", "Je {a}peux{/a} nager."], ["ተኽእሎ", "Nous {a}pouvons{/a} partir maintenant."], ["ፍቓድ", "Est-ce que je {a}peux{/a} entrer ?"], ["ክልከላ", "Vous ne {a}pouvez{/a} pas fumer ici."]],
        uk: [["Здатність", "Je {a}peux{/a} nager."], ["Можливість", "Nous {a}pouvons{/a} partir maintenant."], ["Дозвіл", "Est-ce que je {a}peux{/a} entrer ?"], ["Заборона", "Vous ne {a}pouvez{/a} pas fumer ici."]],
      },
    },

    {
      type: "plain_list",
      items: [
        "{a}Devoir{/a} sert à exprimer une obligation, une nécessité, une interdiction (à la forme négative) ou une somme à payer.",
      ],
      transItems: {
        en: ["{a}Devoir{/a} is used to express an obligation, a necessity, a prohibition (in the negative form) or an amount to be paid."],
        ar: ["يُستخدم {a}Devoir{/a} للتعبير عن التزام أو ضرورة أو منع (في صيغة النفي) أو مبلغ يجب دفعه."],
        fa: ["{a}Devoir{/a} برای بیان الزام، ضرورت، ممنوعیت (در صورت منفی) یا مبلغی برای پرداخت به کار می‌رود."],
        ti: ["{a}Devoir{/a} ግዴታ፣ ኣድላይነት፣ ክልከላ (ብኣሉታዊ ቅርጺ) ወይ ክኽፈል ዘለዎ ገንዘብ ንምግላጽ ይጥቀም።"],
        uk: ["{a}Devoir{/a} вживається для вираження обов'язку, необхідності, заборони (у заперечній формі) або суми до сплати."],
      },
    },
    {
      type: "grid",
      headers: ["Emploi", "Exemple"],
      transHeaders: {
        en: ["Use", "Example"],
        ar: ["الاستخدام", "مثال"],
        fa: ["کاربرد", "مثال"],
        ti: ["ኣጠቓቕማ", "ኣብነት"],
        uk: ["Вживання", "Приклад"],
      },
      colWidths: ["33%", "67%"],
      rows: [
        ["Obligation", "Je {a}dois{/a} faire mes devoirs."],
        ["Nécessité", "Nous {a}devons{/a} partir tôt."],
        ["Interdiction", "Tu ne {a}dois{/a} pas courir."],
        ["Somme à payer", "Je vous {a}dois{/a} 20 francs."],
      ],
      transRows: {
        en: [["Obligation", "Je {a}dois{/a} faire mes devoirs."], ["Necessity", "Nous {a}devons{/a} partir tôt."], ["Prohibition", "Tu ne {a}dois{/a} pas courir."], ["Amount to be paid", "Je vous {a}dois{/a} 20 francs."]],
        ar: [["التزام", "Je {a}dois{/a} faire mes devoirs."], ["ضرورة", "Nous {a}devons{/a} partir tôt."], ["منع", "Tu ne {a}dois{/a} pas courir."], ["مبلغ للدفع", "Je vous {a}dois{/a} 20 francs."]],
        fa: [["الزام", "Je {a}dois{/a} faire mes devoirs."], ["ضرورت", "Nous {a}devons{/a} partir tôt."], ["ممنوعیت", "Tu ne {a}dois{/a} pas courir."], ["مبلغ قابل پرداخت", "Je vous {a}dois{/a} 20 francs."]],
        ti: [["ግዴታ", "Je {a}dois{/a} faire mes devoirs."], ["ኣድላይነት", "Nous {a}devons{/a} partir tôt."], ["ክልከላ", "Tu ne {a}dois{/a} pas courir."], ["ክኽፈል ዘለዎ ገንዘብ", "Je vous {a}dois{/a} 20 francs."]],
        uk: [["Обов'язок", "Je {a}dois{/a} faire mes devoirs."], ["Необхідність", "Nous {a}devons{/a} partir tôt."], ["Заборона", "Tu ne {a}dois{/a} pas courir."], ["Сума до сплати", "Je vous {a}dois{/a} 20 francs."]],
      },
    },

    {
      type: "plain_list",
      items: [
        "{a}Il faut{/a} sert à exprimer une nécessité générale ou une interdiction (à la forme négative).",
      ],
      transItems: {
        en: ["{a}Il faut{/a} is used to express a general necessity or a prohibition (in the negative form)."],
        ar: ["تُستخدم {a}Il faut{/a} للتعبير عن ضرورة عامة أو منع (في صيغة النفي)."],
        fa: ["{a}Il faut{/a} برای بیان ضرورت کلی یا ممنوعیت (در صورت منفی) به کار می‌رود."],
        ti: ["{a}Il faut{/a} ሓፈሻዊ ኣድላይነት ወይ ክልከላ (ብኣሉታዊ ቅርጺ) ንምግላጽ ይጥቀም።"],
        uk: ["{a}Il faut{/a} вживається для вираження загальної необхідності або заборони (у заперечній формі)."],
      },
    },
    {
      type: "grid",
      headers: ["Emploi", "Exemple"],
      transHeaders: {
        en: ["Use", "Example"],
        ar: ["الاستخدام", "مثال"],
        fa: ["کاربرد", "مثال"],
        ti: ["ኣጠቓቕማ", "ኣብነት"],
        uk: ["Вживання", "Приклад"],
      },
      colWidths: ["33%", "67%"],
      rows: [
        ["Nécessité générale", "Il {a}faut{/a} un passeport pour voyager. / Il {a}faut{/a} arriver à l'heure."],
        ["Interdiction", "Il ne {a}faut{/a} pas parler pendant l'examen."],
      ],
      transRows: {
        en: [["General necessity", "Il {a}faut{/a} un passeport pour voyager. / Il {a}faut{/a} arriver à l'heure."], ["Prohibition", "Il ne {a}faut{/a} pas parler pendant l'examen."]],
        ar: [["ضرورة عامة", "Il {a}faut{/a} un passeport pour voyager. / Il {a}faut{/a} arriver à l'heure."], ["منع", "Il ne {a}faut{/a} pas parler pendant l'examen."]],
        fa: [["ضرورت کلی", "Il {a}faut{/a} un passeport pour voyager. / Il {a}faut{/a} arriver à l'heure."], ["ممنوعیت", "Il ne {a}faut{/a} pas parler pendant l'examen."]],
        ti: [["ሓፈሻዊ ኣድላይነት", "Il {a}faut{/a} un passeport pour voyager. / Il {a}faut{/a} arriver à l'heure."], ["ክልከላ", "Il ne {a}faut{/a} pas parler pendant l'examen."]],
        uk: [["Загальна необхідність", "Il {a}faut{/a} un passeport pour voyager. / Il {a}faut{/a} arriver à l'heure."], ["Заборона", "Il ne {a}faut{/a} pas parler pendant l'examen."]],
      },
    },

    {
      type: "plain_list",
      items: [
        "{a}Savoir{/a} sert à exprimer une connaissance ou une compétence.",
      ],
      transItems: {
        en: ["{a}Savoir{/a} is used to express knowledge or a skill."],
        ar: ["يُستخدم {a}Savoir{/a} للتعبير عن معرفة أو مهارة."],
        fa: ["{a}Savoir{/a} برای بیان دانش یا مهارت به کار می‌رود."],
        ti: ["{a}Savoir{/a} ፍልጠት ወይ ክእለት ንምግላጽ ይጥቀም።"],
        uk: ["{a}Savoir{/a} вживається для вираження знання або навички."],
      },
    },
    {
      type: "grid",
      headers: ["Emploi", "Exemple"],
      transHeaders: {
        en: ["Use", "Example"],
        ar: ["الاستخدام", "مثال"],
        fa: ["کاربرد", "مثال"],
        ti: ["ኣጠቓቕማ", "ኣብነት"],
        uk: ["Вживання", "Приклад"],
      },
      colWidths: ["33%", "67%"],
      rows: [
        ["Connaissance", "Je {a}sais{/a} où habite Marie."],
        ["Compétence", "Elle {a}sait{/a} cuisiner."],
      ],
      transRows: {
        en: [["Knowledge", "Je {a}sais{/a} où habite Marie."], ["Skill", "Elle {a}sait{/a} cuisiner."]],
        ar: [["معرفة", "Je {a}sais{/a} où habite Marie."], ["مهارة", "Elle {a}sait{/a} cuisiner."]],
        fa: [["دانش", "Je {a}sais{/a} où habite Marie."], ["مهارت", "Elle {a}sait{/a} cuisiner."]],
        ti: [["ፍልጠት", "Je {a}sais{/a} où habite Marie."], ["ክእለት", "Elle {a}sait{/a} cuisiner."]],
        uk: [["Знання", "Je {a}sais{/a} où habite Marie."], ["Навичка", "Elle {a}sait{/a} cuisiner."]],
      },
    },

    {
      type: "heading",
      text: "La forme affirmative",
      trans: { en: "The affirmative form", ar: "صيغة الإثبات", fa: "صورت مثبت", ti: "ኣረጋጋጺ ቅርጺ", uk: "Стверджувальна форма" },
    },
    { type: "verb_toggle", buttonCols: 3, verbs: MODAL_VERBS },

    {
      type: "heading",
      text: "La forme négative",
      trans: { en: "The negative form", ar: "صيغة النفي", fa: "صورت منفی", ti: "ኣሉታዊ ቅርጺ", uk: "Заперечна форма" },
    },
    { type: "verb_toggle", buttonCols: 3, negation: true, verbs: MODAL_VERBS },

    {
      type: "heading",
      text: "Remarques",
      trans: { en: "Notes", ar: "ملاحظات", fa: "نکات", ti: "መተሓሳሰቢታት", uk: "Зауваження" },
    },
    {
      type: "plain_list",
      items: [
        "Pour demander quelque chose de façon polie, on utilise souvent {a}Je voudrais{/a} à la place de {a}Je veux{/a}.",
      ],
      transItems: {
        en: ["To ask for something politely, {a}Je voudrais{/a} is often used instead of {a}Je veux{/a}."],
        ar: ["لطلب شيء بأدب، نستخدم غالباً {a}Je voudrais{/a} بدلاً من {a}Je veux{/a}."],
        fa: ["برای درخواست مؤدبانهٔ چیزی، اغلب به‌جای {a}Je veux{/a} از {a}Je voudrais{/a} استفاده می‌شود."],
        ti: ["ገለ ነገር ብኣኽብሮት ንምሕታት፣ ኣብ ክንዲ {a}Je veux{/a} መብዛሕትኡ ግዜ {a}Je voudrais{/a} ንጥቀም።"],
        uk: ["Щоб ввічливо попросити щось, часто вживають {a}Je voudrais{/a} замість {a}Je veux{/a}."],
      },
    },
    {
      type: "highlight",
      label: "",
      items: ["{a}Je voudrais{/a} un ticket de métro, s'il vous plaît."],
      noBulletItems: [0],
    },
  ],
  exercises: G1_EXERCISES["G1.7"](),
};
