import type { SubmoduleTrad } from "./trad-types";

export const TRAD_A2_4: SubmoduleTrad = {
  submoduleId: "A2-4",
  title: {
    fr: "Problèmes",
    en: "Word problems",
    ar: "مسائل",
    fa: "مسئله‌ها",
    ti: "ጸገማት",
    uk: "Задачі",
    pt: "Problemas",
    so: "Su'aalo xisaabeed",
    tr: "Problemler",
    ps: "مسئلې",
  },
  blocks: [
    { text: { en: "Problems with **more than** and **less than**" } },
    { text: { en: "The important rule" } },
    {
      label: { en: "When you read a problem, you must find:" },
      items: {
        en: [
          "**1.** Who has the known quantity?",
          "**2.** Who has more or less?",
          "**3.** Who is asked for in the question?",
        ],
      },
    },
    { text: { en: "A. With **more than**" } },
    { text: { en: "Case 1: we are looking for the person who has **more**" } },
    {
      label: { en: "Problem:" },
      items: { en: ["Ali has 5 apples.", "Sophie has 3 more apples than Ali.", "How many apples does Sophie have?"] },
    },
    { label: { en: "Analysis:" }, items: { en: ["Sophie has **more**.", "We do **+**."] } },
    { label: { en: "Calculation:" }, items: { en: ["5 + 3 = **8**"] } },
    { label: { en: "Answer:" }, items: { en: ["Sophie has **8 apples**."] } },
    { text: { en: "Case 2: we are looking for the person who has **less**" } },
    {
      label: { en: "Problem:" },
      items: { en: ["Ali has 5 more apples than Sophie.", "Ali has 12 apples.", "How many apples does Sophie have?"] },
    },
    { label: { en: "Analysis:" }, items: { en: ["Ali has **more**.", "Sophie has **less**.", "We remove the difference."] } },
    { label: { en: "Calculation:" }, items: { en: ["12 − 5 = **7**"] } },
    { label: { en: "Answer:" }, items: { en: ["Sophie has **7 apples**."] } },
    { text: { en: "B. With **less than**" } },
    { text: { en: "Case 1: we are looking for the person who has **less**" } },
    {
      label: { en: "Problem:" },
      items: { en: ["Ali has 10 apples.", "Sophie has 4 fewer apples than Ali.", "How many apples does Sophie have?"] },
    },
    { label: { en: "Analysis:" }, items: { en: ["Sophie has **less**.", "We do **−**."] } },
    { label: { en: "Calculation:" }, items: { en: ["10 − 4 = **6**"] } },
    { label: { en: "Answer:" }, items: { en: ["Sophie has **6 apples**."] } },
    { text: { en: "Case 2: we are looking for the person who has **more**" } },
    {
      label: { en: "Problem:" },
      items: { en: ["Ali has 4 fewer apples than Sophie.", "Ali has 6 apples.", "How many apples does Sophie have?"] },
    },
    { label: { en: "Analysis:" }, items: { en: ["Ali has **less**.", "Sophie has **more**.", "We add the difference."] } },
    { label: { en: "Calculation:" }, items: { en: ["6 + 4 = **10**"] } },
    { label: { en: "Answer:" }, items: { en: ["Sophie has **10 apples**."] } },
    { text: { en: "Simple method" } },
    {
      label: { en: "Question 1:" },
      items: {
        en: [
          "Does the person we are looking for have **more** or **less**?",
          "They have **more** → we do **+**.",
          "They have **less** → we do **−**.",
        ],
      },
    },
    { text: { en: "Summary table" } },
    {
      headers: { en: ["Sentence", "Question", "Operation"] },
      items: {
        en: [
          "Sophie has 3 more than Ali. Ali has 5. | How many does Sophie have? | 5 + 3",
          "Ali has 3 more than Sophie. Ali has 8. | How many does Sophie have? | 8 − 3",
          "Sophie has 3 less than Ali. Ali has 8. | How many does Sophie have? | 8 − 3",
          "Ali has 3 less than Sophie. Ali has 5. | How many does Sophie have? | 5 + 3",
        ],
      },
    },
    { text: { en: "Common verbs and expressions" } },
    {
      label: { en: "Often add" },
      items: {
        en: [
          "**receive**",
          "**win**",
          "**add**",
          "**buy more**",
          "**increase**",
          "**in addition**",
          "**more**",
          "**total**",
          "**in all**",
          "**together**",
        ],
      },
    },
    {
      label: { en: "Often subtract" },
      items: {
        en: [
          "**lose**",
          "**spend**",
          "**give**",
          "**take away**",
          "**remove**",
          "**sell**",
          "**decrease**",
          "**there remains**",
          "**less**",
          "**difference**",
        ],
      },
    },
    {
      text: {
        en: "Careful: the words **more than** and **less than** are not enough. Always ask: **does the person I am looking for have more or less?**",
      },
    },
    { text: { en: "Example to remember" } },
    {
      label: { en: "Problem:" },
      items: { en: ["Ali has 5 more apples than Sophie.", "Ali has 12 apples.", "How many apples does Sophie have?"] },
    },
    { label: { en: "Analysis:" }, items: { en: ["Ali has **more**.", "So Sophie has **less**."] } },
    { label: { en: "Calculation:" }, items: { en: ["12 − 5 = **7**"] } },
    { label: { en: "Answer:" }, items: { en: ["Sophie has **7 apples**."] } },
  ],
  consignes: {
    wordProblems: {
      fr: "Résolvez les problèmes. Écrivez uniquement la réponse numérique.",
      en: "Solve the problems. Write only the numerical answer.",
      ar: "حلّ المسائل. اكتب الإجابة الرقمية فقط.",
      fa: "مسئله‌ها را حل کنید. فقط پاسخ عددی را بنویسید.",
      ti: "ነቶም ጸገማት ፍታሕ። ቁጽራዊ መልሲ ጥራይ ጻሕፍ።",
      uk: "Розв'яжи задачі. Запиши лише числову відповідь.",
      pt: "Resolve os problemas. Escreve apenas a resposta numérica.",
      so: "Xalli su'aalaha. Qor kaliya jawaabta tiro ahaan.",
      tr: "Problemleri çöz. Yalnızca sayısal cevabı yaz.",
      ps: "مسئلې حل کړه. یوازې عددي ځواب ولیکه.",
    },
  },
};
