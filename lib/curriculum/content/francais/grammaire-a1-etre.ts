import type { GrammarLesson } from "../../grammar-data";
import { G1_EXERCISES } from "./g1-lesson-profiles";

/** G1.2 — Le verbe être */
export const A1_GR_ETRE: GrammarLesson = {
  slug: "a1-gr-etre",
  code: "G1.2",
  level: "A1",
  title: "Le verbe être",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
      trans: { en: "Usage", ar: "الاستخدام", fa: "کاربرد", ti: "ኣጠቓቕማ", uk: "Вживання" },
    },
    {
      type: "plain_list",
      items: [
        "Le verbe ÊTRE sert à donner des informations sur une personne, comme son identité ou décrire quelqu'un.",
      ],
      transItems: {
        en: ["The verb ÊTRE is used to give information about a person, such as their identity, or to describe someone."],
        ar: ["يُستخدم الفعل ÊTRE لإعطاء معلومات عن شخص، مثل هويته، أو لوصف شخص ما."],
        fa: ["فعل ÊTRE برای دادن اطلاعات دربارهٔ یک شخص، مانند هویت او، یا برای توصیف کسی به کار می‌رود."],
        ti: ["ግሲ ÊTRE ብዛዕባ ሓደ ሰብ፣ ንኣብነት መንነቱ፣ ሓበሬታ ንምሃብ ወይ ሓደ ሰብ ንምግላጽ ይጥቀም።"],
        uk: ["Дієслово ÊTRE вживається, щоб повідомити інформацію про людину, наприклад її особу, або описати когось."],
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
        ["Identité", "Je {a}suis{/a} Ali."],
        ["Nationalité", "Elle {a}est{/a} française."],
        ["Profession", "Nous {a}sommes{/a} étudiants."],
        ["Description", "Il {a}est{/a} grand."],
        ["Situation", "Tu {a}es{/a} à Genève."],
      ],
      transRows: {
        en: [["Identity", "Je {a}suis{/a} Ali."], ["Nationality", "Elle {a}est{/a} française."], ["Profession", "Nous {a}sommes{/a} étudiants."], ["Description", "Il {a}est{/a} grand."], ["Location", "Tu {a}es{/a} à Genève."]],
        ar: [["الهوية", "Je {a}suis{/a} Ali."], ["الجنسية", "Elle {a}est{/a} française."], ["المهنة", "Nous {a}sommes{/a} étudiants."], ["الوصف", "Il {a}est{/a} grand."], ["المكان", "Tu {a}es{/a} à Genève."]],
        fa: [["هویت", "Je {a}suis{/a} Ali."], ["ملیت", "Elle {a}est{/a} française."], ["شغل", "Nous {a}sommes{/a} étudiants."], ["توصیف", "Il {a}est{/a} grand."], ["موقعیت", "Tu {a}es{/a} à Genève."]],
        ti: [["መንነት", "Je {a}suis{/a} Ali."], ["ዜግነት", "Elle {a}est{/a} française."], ["ሞያ", "Nous {a}sommes{/a} étudiants."], ["መግለጺ", "Il {a}est{/a} grand."], ["ቦታ", "Tu {a}es{/a} à Genève."]],
        uk: [["Особа", "Je {a}suis{/a} Ali."], ["Національність", "Elle {a}est{/a} française."], ["Професія", "Nous {a}sommes{/a} étudiants."], ["Опис", "Il {a}est{/a} grand."], ["Місце", "Tu {a}es{/a} à Genève."]],
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
        ["Je", "suis", "brésilien."],
        ["Tu", "es", "espagnol."],
        ["Il / Elle / On", "est", "belge."],
        ["Nous", "sommes", "polonais."],
        ["Vous", "êtes", "chinois."],
        ["Ils / Elles", "sont", "suisses."],
      ],
    },
    {
      type: "heading",
      text: "Prononciation",
      trans: { en: "Pronunciation", ar: "النطق", fa: "تلفظ", ti: "ኣደማምጻ", uk: "Вимова" },
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
      items: ["O{li}n|e{/li}st, vou{li}s|ê{/li}tes."],
      noBulletItems: [0],
    },
  ],
  exercises: G1_EXERCISES["G1.2"](),
};
