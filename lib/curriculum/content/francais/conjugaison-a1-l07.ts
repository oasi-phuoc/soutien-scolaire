import type { ConjLesson } from "../../conjugation-data";

export const A1_CONJ_L07: ConjLesson = {
  slug: "a1-conj-l07",
  code: "G.5",
  level: "A1",
  title: "Les verbes en -er au présent",
  theory: [
    {
      type: "plain_list",
      items: [
        "Les verbes en {a}-er{/a} sont les verbes les plus fréquents en français. Ils font partie du 1er groupe.",
      ],
      transItems: {
        en: ["-er verbs are the most frequent verbs in French. They belong to the 1st group."],
        ar: ["أفعال {a}-er{/a} هي الأكثر شيوعاً في الفرنسية. تنتمي إلى المجموعة الأولى."],
        fa: ["افعال {a}-er{/a} رایج‌ترین افعال در زبان فرانسه هستند. آن‌ها به گروه اول تعلق دارند."],
        ti: ["ግሲያት {a}-er{/a} ዝበዝሑ ጊዜ ዝጥቀሱ ፈረንሳዊ ግሲያት እዮም. ናይ ቀዳማይ ጉጅለ እዮም."],
        uk: ["Дієслова на {a}-er{/a} є найпоширенішими у французькій мові. Вони належать до 1-ї групи."],
      },
    },
    { type: "heading", text: "Comment former le verbe ?", trans: { en: "How to form the verb?", ar: "كيف تصرّف الفعل؟", fa: "چگونه فعل را صرف کنیم؟", ti: "ግሲ ብኸመይ ትሰርሕ?", uk: "Як утворити дієслово?" } },
    {
      type: "plain_list",
      items: [
        "On prend le verbe et on enlève {a}-er{/a}.",
      ],
      transItems: {
        en: ["Take the verb and remove {a}-er{/a}."],
        ar: ["خذ الفعل وأزل {a}-er{/a}."],
        fa: ["فعل را بگیرید و {a}-er{/a} را حذف کنید."],
        ti: ["ንግሲ ውሰድ ንሱ {a}-er{/a} ኣርሕቕ."],
        uk: ["Беремо дієслово і прибираємо {a}-er{/a}."],
      },
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
      ],
    },
    {
      type: "highlight",
      label: "Attention",
      transLabel: { en: "Note", ar: "ملاحظة", fa: "توجه", ti: "ኣስተውዕል", uk: "Увага" },
      items: [
        "Quand le verbe commence par une {a}voyelle{/a} ou un {a}h{/a}, {a}je{/a} devient {a}j'{/a}.",
        "j{s}e{/s} aime → j'aime",
        "j{s}e{/s} écoute → j'écoute",
        "j{s}e{/s} habite → j'habite",
      ],
      transItems: {
        en: ["When the verb begins with a {a}vowel{/a} or {a}h{/a}, {a}je{/a} becomes {a}j'{/a}.", "j{s}e{/s} aime → j'aime", "j{s}e{/s} écoute → j'écoute", "j{s}e{/s} habite → j'habite"],
        ar: ["عندما يبدأ الفعل بـ{a}حرف علة{/a} أو {a}h{/a}، يصبح {a}je{/a} {a}j'{/a}.", "j{s}e{/s} aime → j'aime", "j{s}e{/s} écoute → j'écoute", "j{s}e{/s} habite → j'habite"],
        fa: ["وقتی فعل با {a}حرف صدادار{/a} یا {a}h{/a} شروع می‌شود، {a}je{/a} به {a}j'{/a} تبدیل می‌شود.", "j{s}e{/s} aime → j'aime", "j{s}e{/s} écoute → j'écoute", "j{s}e{/s} habite → j'habite"],
        ti: ["ግሲ ብ{a}ሞዓዝ{/a} ወይ {a}h{/a} ምስ ዝጅምር፣ {a}je{/a} {a}j'{/a} ይኸውን.", "j{s}e{/s} aime → j'aime", "j{s}e{/s} écoute → j'écoute", "j{s}e{/s} habite → j'habite"],
        uk: ["Коли дієслово починається з {a}голосної{/a} або {a}h{/a}, {a}je{/a} стає {a}j'{/a}.", "j{s}e{/s} aime → j'aime", "j{s}e{/s} écoute → j'écoute", "j{s}e{/s} habite → j'habite"],
      },
      noBulletItems: [0],
      inlineArrows: true,
    },
  ],
  exercises: [],
};
