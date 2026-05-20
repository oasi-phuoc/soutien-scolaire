import type { GrammarLesson } from "../../grammar-data";

export const A1_GR_INTERRO: GrammarLesson = {
  slug: "a1-gr-interro",
  code: "G.8",
  level: "A1",
  title: "L'interrogation de base",
  theory: [
    { type: "heading", text: "Poser une question", trans: { en: "Asking a question", ar: "طرح سؤال", fa: "پرسیدن سوال", ti: "ሕቶ ምሓታት", uk: "Постановка питання" } },
    {
      type: "plain_list",
      items: [
        "Il y a plusieurs façons de poser une question en français.",
        "La plus simple : monter la voix à la fin.",
        "La plus courante : utiliser {a}est-ce que{/a}.",
      ],
      transItems: {
        en: ["There are several ways to ask a question in French.", "The simplest: raise your voice at the end.", "The most common: use {a}est-ce que{/a}."],
        ar: ["هناك عدة طرق لطرح سؤال بالفرنسية.", "الأبسط: رفع الصوت في النهاية.", "الأكثر شيوعاً: استخدام {a}est-ce que{/a}."],
        fa: ["روش‌های مختلفی برای پرسیدن سوال در فرانسه وجود دارد.", "ساده‌ترین: بالا بردن صدا در پایان.", "رایج‌ترین: استفاده از {a}est-ce que{/a}."],
        ti: ["ኣብ ፈረንሳዊ ሕቶ ንምሓታት ብዙሕ መንገድታት ኣሎ.", "ዝቐለለ: ድምጺ ኣብ መወዳእታ ምድራዕ.", "ዝበዝሐ: {a}est-ce que{/a} ምጥቃም."],
        uk: ["Є кілька способів поставити питання французькою.", "Найпростіший: підвищити голос наприкінці.", "Найпоширеніший: використовувати {a}est-ce que{/a}."],
      },
    },
    {
      type: "plain_list",
      items: [
        "{a}Est-ce que{/a} + sujet + verbe ?",
        "Devant une voyelle : {a}est-ce qu'{/a}",
      ],
      transItems: {
        en: ["{a}Est-ce que{/a} + subject + verb ?", "Before a vowel: {a}est-ce qu'{/a}"],
        ar: ["{a}Est-ce que{/a} + الفاعل + الفعل ?", "قبل حرف علة: {a}est-ce qu'{/a}"],
        fa: ["{a}Est-ce que{/a} + فاعل + فعل ?", "قبل از حرف صدادار: {a}est-ce qu'{/a}"],
        ti: ["{a}Est-ce que{/a} + ሓካይ + ግሲ ?", "ቅድሚ ሞዓዝ: {a}est-ce qu'{/a}"],
        uk: ["{a}Est-ce que{/a} + підмет + дієслово ?", "Перед голосною: {a}est-ce qu'{/a}"],
      },
    },
    {
      type: "grid",
      headers: ["Affirmatif", "Question"],
      rows: [
        ["Tu parles français.", "Est-ce que tu parles français ?"],
        ["Il est libre.", "Est-ce qu'il est libre ?"],
        ["Elle a cours.", "Est-ce qu'elle a cours ?"],
        ["Vous êtes prêts.", "Est-ce que vous êtes prêts ?"],
      ],
      transHeaders: {
        en: ["Affirmative", "Question"],
        ar: ["الإيجاب", "السؤال"],
        fa: ["مثبت", "سوال"],
        ti: ["ኣወንታ", "ሕቶ"],
        uk: ["Стверджувальна", "Питання"],
      },
      transRows: {
        en: [["You speak French.", "Do you speak French?"], ["He is free.", "Is he free?"], ["She has class.", "Does she have class?"], ["You are ready.", "Are you ready?"]],
        ar: [["تتكلم الفرنسية.", "هل تتكلم الفرنسية؟"], ["هو حر.", "هل هو حر؟"], ["هي لديها دروس.", "هل لديها دروس؟"], ["أنتم مستعدون.", "هل أنتم مستعدون؟"]],
        fa: [["تو فرانسه صحبت می‌کنی.", "آیا فرانسه صحبت می‌کنی؟"], ["او آزاد است.", "آیا او آزاد است؟"], ["او کلاس دارد.", "آیا او کلاس دارد؟"], ["شما آماده‌اید.", "آیا آماده‌اید؟"]],
        ti: [["ፈረንሳዊ ትዛረብ.", "ፈረንሳዊ ትዛረብ ዶ?"], ["ናጻ እዩ.", "ናጻ ዶ እዩ?"], ["ትምህርቲ ኣሎዋ.", "ትምህርቲ ኣሎዋ ዶ?"], ["ቅሩባት ኢኹም.", "ቅሩባት ዶ ኢኹም?"]],
        uk: [["Ти говориш французькою.", "Ти говориш французькою?"], ["Він вільний.", "Він вільний?"], ["У неї заняття.", "У неї заняття?"], ["Ви готові.", "Ви готові?"]],
      },
    },
    {
      type: "highlight",
      label: "Intonation montante",
      transLabel: { en: "Rising intonation", ar: "التنغيم الصاعد", fa: "آهنگ صعودی", ti: "ዝልዓለ ቃና", uk: "Висхідна інтонація" },
      items: [
        "Pour une question très simple, on monte la voix à la fin.",
        "Tu parles français ?",
        "Il est libre ?",
      ],
      transItems: {
        en: ["For a very simple question, raise your voice at the end.", "You speak French?", "He is free?"],
        ar: ["لسؤال بسيط جداً، ارفع صوتك في النهاية.", "تتكلم الفرنسية؟", "هو حر؟"],
        fa: ["برای یک سوال بسیار ساده، صدای خود را در پایان بالا ببرید.", "فرانسه صحبت می‌کنی؟", "او آزاد است؟"],
        ti: ["ንሓደ ቀሊል ሕቶ ድምጺ ኣብ መወዳእታ ኣልዕሎ.", "ፈረንሳዊ ትዛረብ?", "ናጻ እዩ?"],
        uk: ["Для дуже простого питання підвищте голос наприкінці.", "Ти говориш французькою?", "Він вільний?"],
      },
      noBulletItems: [0],
    },
  ],
  exercises: [],
};
