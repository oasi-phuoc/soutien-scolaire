import type { GrammarLesson } from "../../grammar-data";

export const A2_GR_FUTUR_IRREGULIERS: GrammarLesson = {
  slug: "a2-gr-futur-irreguliers",
  code: "R4.5",
  level: "A2",
  title: "Les verbes irréguliers au futur simple",
  theory: [
    { type: "heading", text: "Les bases irrégulières du futur simple", trans: { en: "Irregular stems of the simple future", ar: "الجذور الشاذة للمستقبل البسيط", fa: "ریشه‌های بی‌قاعده‌ی آینده‌ی ساده", ti: "ዘይስሩዓት መሰረታት ናይ ቀሊል መጻኢ", uk: "Неправильні основи простого майбутнього" } },
    {
      type: "plain_list",
      items: ["La base change, mais les terminaisons restent toujours -ai, -as, -a, -ons, -ez, -ont."],
      transItems: {
        en: ["The stem changes, but the endings always stay -ai, -as, -a, -ons, -ez, -ont."],
        ar: ["يتغير الجذر، لكن النهايات تبقى دائماً -ai, -as, -a, -ons, -ez, -ont."],
        fa: ["ریشه تغییر می‌کند، اما پایانه‌ها همیشه -ai, -as, -a, -ons, -ez, -ont باقی می‌مانند."],
        ti: ["እቲ መሰረት ይቕየር፣ ግን እቶም መወዳእታታት ኩሉ ግዜ -ai, -as, -a, -ons, -ez, -ont ኮይኖም ይተርፉ።"],
        uk: ["Основа змінюється, але закінчення завжди залишаються -ai, -as, -a, -ons, -ez, -ont."],
      },
    },
    {
      type: "grid",
      headers: ["Verbe", "Base", "Exemple"],
      transHeaders: {
        en: ["Verb", "Stem", "Example"],
        ar: ["الفعل", "الجذر", "مثال"],
        fa: ["فعل", "ریشه", "مثال"],
        ti: ["ግሲ", "መሰረት", "ኣብነት"],
        uk: ["Дієслово", "Основа", "Приклад"],
      },
      rows: [
        ["être", "ser-", "je serai"], ["avoir", "aur-", "tu auras"], ["aller", "ir-", "il ira"],
        ["courir", "courr-", "nous courrons"], ["devoir", "devr-", "vous devrez"], ["envoyer", "enverr-", "ils enverront"],
        ["faire", "fer-", "je ferai"], ["falloir", "faudr-", "il faudra"], ["pouvoir", "pourr-", "tu pourras"],
        ["recevoir", "recevr-", "elle recevra"], ["savoir", "saur-", "nous saurons"], ["tenir", "tiendr-", "vous tiendrez"],
        ["venir", "viendr-", "ils viendront"], ["voir", "verr-", "je verrai"], ["vouloir", "voudr-", "tu voudras"],
      ],
      boldFirstCol: true,
    },
  ],
  exercises: [],
};
