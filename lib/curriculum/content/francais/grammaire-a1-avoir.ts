import type { GrammarLesson } from "../../grammar-data";
import { G1_EXERCISES } from "./g1-lesson-profiles";

/** Unité 2 — Le verbe avoir (G1.3) */
export const A1_GR_AVOIR: GrammarLesson = {
  slug: "a1-gr-avoir",
  code: "G1.3",
  level: "A1",
  title: "Le verbe avoir",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
      trans: { en: "Usage", ar: "الاستخدام", fa: "کاربرد", ti: "ኣጠቓቕማ", uk: "Вживання" },
    },
    {
      type: "plain_list",
      items: [
        "Le verbe AVOIR sert à dire l'âge, de parler de la famille et des amis, de dire ce qu'on possède ou d'exprimer une sensation.",
      ],
      transItems: {
        en: ["The verb AVOIR is used to state age, talk about family and friends, say what one owns, or express a sensation."],
        ar: ["يُستخدم الفعل AVOIR لذكر العمر، والتحدث عن العائلة والأصدقاء، وقول ما نملكه، أو التعبير عن إحساس."],
        fa: ["فعل AVOIR برای بیان سن، صحبت دربارهٔ خانواده و دوستان، گفتن آنچه در اختیار داریم یا بیان یک احساس به کار می‌رود."],
        ti: ["ግሲ AVOIR ዕድመ ንምግላጽ፣ ብዛዕባ ስድራቤትን ኣዕሩኽን ንምዝራብ፣ ዘለና ነገር ንምግላጽ ወይ ስምዒት ንምግላጽ ይጥቀም።"],
        uk: ["Дієслово AVOIR вживається, щоб назвати вік, розповісти про сім'ю та друзів, сказати, чим хтось володіє, або висловити відчуття."],
      },
    },
    {
      type: "heading",
      text: "Exemple",
      sub: true,
      accent: true,
      trans: { en: "Example", ar: "مثال", fa: "مثال", ti: "ኣብነት", uk: "Приклад" },
    },
    {
      type: "grid",
      headers: ["", "Exemple"],
      transHeaders: {
        en: ["", "Example"],
        ar: ["", "مثال"],
        fa: ["", "مثال"],
        ti: ["", "ኣብነት"],
        uk: ["", "Приклад"],
      },
      boldFirstCol: true,
      rows: [
        ["Possession", "J'{a}ai{/a} un téléphone."],
        ["Âge", "Elle {a}a{/a} 25 ans."],
        ["Sensations", "Nous {a}avons{/a} faim."],
        ["Expressions", "Il {a}a{/a} de la chance."],
      ],
      transRows: {
        en: [["Possession", "J'{a}ai{/a} un téléphone."], ["Age", "Elle {a}a{/a} 25 ans."], ["Sensations", "Nous {a}avons{/a} faim."], ["Expressions", "Il {a}a{/a} de la chance."]],
        ar: [["الملكية", "J'{a}ai{/a} un téléphone."], ["العمر", "Elle {a}a{/a} 25 ans."], ["الأحاسيس", "Nous {a}avons{/a} faim."], ["التعبيرات", "Il {a}a{/a} de la chance."]],
        fa: [["مالکیت", "J'{a}ai{/a} un téléphone."], ["سن", "Elle {a}a{/a} 25 ans."], ["احساس‌ها", "Nous {a}avons{/a} faim."], ["عبارت‌ها", "Il {a}a{/a} de la chance."]],
        ti: [["ዋንነት", "J'{a}ai{/a} un téléphone."], ["ዕድመ", "Elle {a}a{/a} 25 ans."], ["ስምዒታት", "Nous {a}avons{/a} faim."], ["መግለጺታት", "Il {a}a{/a} de la chance."]],
        uk: [["Володіння", "J'{a}ai{/a} un téléphone."], ["Вік", "Elle {a}a{/a} 25 ans."], ["Відчуття", "Nous {a}avons{/a} faim."], ["Вирази", "Il {a}a{/a} de la chance."]],
      },
    },
    {
      type: "heading",
      text: "Conjugaison",
      trans: { en: "Conjugation", ar: "التصريف", fa: "صرف", ti: "ምጽራይ", uk: "Дієвідміна" },
    },
    {
      type: "grid",
      headers: ["Pronom sujet", "Verbe", "Exemple"],
      transHeaders: {
        en: ["Subject pronoun", "Verb", "Example"],
        ar: ["ضمير الفاعل", "الفعل", "مثال"],
        fa: ["ضمیر فاعلی", "فعل", "مثال"],
        ti: ["ተካኢ ስም ተግባሪ", "ግሲ", "ኣብነት"],
        uk: ["Займенник-підмет", "Дієслово", "Приклад"],
      },
      boldFirstCol: true,
      rows: [
        ["J'", "ai", "une sœur."],
        ["Tu", "as", "30 ans."],
        ["Il / Elle / On", "a", "faim."],
        ["Nous", "avons", "un chat."],
        ["Vous", "avez", "quel âge ?"],
        ["Ils / Elles", "ont", "chaud."],
      ],
    },
    {
      type: "heading",
      text: "Prononciation et orthographe",
      trans: { en: "Pronunciation and spelling", ar: "النطق والإملاء", fa: "تلفظ و املا", ti: "ኣደማምጻን ኣጸሓሕፋን", uk: "Вимова та правопис" },
    },
    {
      type: "plain_list",
      items: ["{a}1.{/a} On ne prononce pas le {a}e{/a} final de {a}elle{/a}."],
      transItems: {
        en: ["{a}1.{/a} The final {a}e{/a} in {a}elle{/a} is not pronounced."],
        ar: ["{a}1.{/a} لا يُنطق حرف {a}e{/a} الأخير في {a}elle{/a}."],
        fa: ["{a}1.{/a} حرف {a}e{/a} پایانی در {a}elle{/a} تلفظ نمی‌شود."],
        ti: ["{a}1.{/a} እቲ ናይ መወዳእታ {a}e{/a} ኣብ {a}elle{/a} ኣይድመጽን።"],
        uk: ["{a}1.{/a} Кінцева літера {a}e{/a} у слові {a}elle{/a} не вимовляється."],
      },
    },
    {
      type: "plain_list",
      items: ["{a}2.{/a} On fait la liaison."],
      transItems: {
        en: ["{a}2.{/a} A liaison is made."],
        ar: ["{a}2.{/a} نقوم بالوصل الصوتي."],
        fa: ["{a}2.{/a} پیوند آوایی انجام می‌شود."],
        ti: ["{a}2.{/a} ምትእስሳር ድምጺ ንገብር።"],
        uk: ["{a}2.{/a} Робимо зв'язування звуків (liaison)."],
      },
    },
    {
      type: "highlight",
      label: "",
      items: ["O{li}n|a{/li}, nou{li}s|a{/li}vons, vou{li}s|a{/li}vez, il{li}s|o{/li}nt, elle{li}s|o{/li}nt."],
      noBulletItems: [0],
    },
    {
      type: "plain_list",
      items: ["{a}3.{/a} Le pronom {a}je{/a} devient {a}j'{/a} devant une voyelle."],
      transItems: {
        en: ["{a}3.{/a} The pronoun {a}je{/a} becomes {a}j'{/a} before a vowel."],
        ar: ["{a}3.{/a} يتحول الضمير {a}je{/a} إلى {a}j'{/a} قبل حرف متحرك."],
        fa: ["{a}3.{/a} ضمیر {a}je{/a} پیش از یک حرف صدادار به {a}j'{/a} تبدیل می‌شود."],
        ti: ["{a}3.{/a} ተካኢ ስም {a}je{/a} ቅድሚ ኣድማጺ ፊደል ናብ {a}j'{/a} ይቕየር።"],
        uk: ["{a}3.{/a} Перед голосною займенник {a}je{/a} перетворюється на {a}j'{/a}."],
      },
    },
    {
      type: "highlight",
      label: "",
      items: ["{s}Je ai{/s} → {a}J'ai{/a} 20 ans."],
      noBulletItems: [0],
      inlineArrows: true,
    },
    {
      type: "heading",
      text: "Expressions avec AVOIR",
      trans: { en: "Expressions with AVOIR", ar: "تعبيرات مع AVOIR", fa: "عبارت‌های همراه با AVOIR", ti: "መግለጺታት ምስ AVOIR", uk: "Вирази з AVOIR" },
    },
    {
      type: "grid",
      headers: ["Expression", "Signification"],
      transHeaders: {
        en: ["Expression", "Meaning"],
        ar: ["التعبير", "المعنى"],
        fa: ["عبارت", "معنی"],
        ti: ["መግለጺ", "ትርጉም"],
        uk: ["Вираз", "Значення"],
      },
      equalCols: true,
      rows: [
        ["{a}Avoir faim{/a}", "vouloir manger"],
        ["{a}Avoir soif{/a}", "vouloir boire"],
        ["{a}Avoir froid{/a}", "ressentir le froid"],
        ["{a}Avoir chaud{/a}", "ressentir la chaleur"],
        ["{a}Avoir peur{/a}", "être effrayé(e)"],
        ["{a}Avoir mal{/a}", "ressentir une douleur"],
        ["{a}Avoir raison{/a}", "être correct(e)"],
        ["{a}Avoir tort{/a}", "se tromper"],
      ],
      transRows: {
        en: [["{a}Avoir faim{/a}", "to want to eat"], ["{a}Avoir soif{/a}", "to want to drink"], ["{a}Avoir froid{/a}", "to feel cold"], ["{a}Avoir chaud{/a}", "to feel hot"], ["{a}Avoir peur{/a}", "to be afraid"], ["{a}Avoir mal{/a}", "to feel pain"], ["{a}Avoir raison{/a}", "to be right"], ["{a}Avoir tort{/a}", "to be wrong"]],
        ar: [["{a}Avoir faim{/a}", "الرغبة في الأكل"], ["{a}Avoir soif{/a}", "الرغبة في الشرب"], ["{a}Avoir froid{/a}", "الشعور بالبرد"], ["{a}Avoir chaud{/a}", "الشعور بالحر"], ["{a}Avoir peur{/a}", "الشعور بالخوف"], ["{a}Avoir mal{/a}", "الشعور بالألم"], ["{a}Avoir raison{/a}", "أن يكون المرء محقًا"], ["{a}Avoir tort{/a}", "أن يكون المرء مخطئًا"]],
        fa: [["{a}Avoir faim{/a}", "میل به غذا خوردن"], ["{a}Avoir soif{/a}", "میل به نوشیدن"], ["{a}Avoir froid{/a}", "احساس سرما کردن"], ["{a}Avoir chaud{/a}", "احساس گرما کردن"], ["{a}Avoir peur{/a}", "ترسیدن"], ["{a}Avoir mal{/a}", "احساس درد کردن"], ["{a}Avoir raison{/a}", "حق داشتن"], ["{a}Avoir tort{/a}", "اشتباه کردن"]],
        ti: [["{a}Avoir faim{/a}", "ክትበልዕ ምድላይ"], ["{a}Avoir soif{/a}", "ክትሰቲ ምድላይ"], ["{a}Avoir froid{/a}", "ቁሪ ምስማዕ"], ["{a}Avoir chaud{/a}", "ሙቐት ምስማዕ"], ["{a}Avoir peur{/a}", "ምፍራሕ"], ["{a}Avoir mal{/a}", "ቃንዛ ምስማዕ"], ["{a}Avoir raison{/a}", "ቅኑዕ ምዃን"], ["{a}Avoir tort{/a}", "ምግጋይ"]],
        uk: [["{a}Avoir faim{/a}", "хотіти їсти"], ["{a}Avoir soif{/a}", "хотіти пити"], ["{a}Avoir froid{/a}", "відчувати холод"], ["{a}Avoir chaud{/a}", "відчувати спеку"], ["{a}Avoir peur{/a}", "боятися"], ["{a}Avoir mal{/a}", "відчувати біль"], ["{a}Avoir raison{/a}", "мати рацію"], ["{a}Avoir tort{/a}", "помилятися"]],
      },
    },
  ],
  exercises: G1_EXERCISES["G1.3"](),
};