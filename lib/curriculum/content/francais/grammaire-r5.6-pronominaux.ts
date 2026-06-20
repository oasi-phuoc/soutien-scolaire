import type { GrammarLesson } from "../../grammar-data";

export const A1_GR_PRONOMINAUX_PASSE: GrammarLesson = {
  slug: "a1-gr-pronominaux-passe-compose",
  code: "R5.6",
  level: "A1",
  title: "Les verbes pronominaux au passé composé",
  theory: [
    { type: "heading", text: "Les verbes pronominaux au passé composé", trans: { en: "Reflexive verbs in the passé composé", ar: "الأفعال الانعكاسية في الماضي المركب", fa: "افعال انعکاسی در گذشته مرکب", ti: "ናይ ሕሉፍ ጊዜ ርእሰ-ጠቓሚ ግሳት", uk: "Займенникові дієслова в passé composé" } },
    {
      type: "highlight",
      label: "Formation",
      transLabel: { en: "Formation", ar: "التكوين", fa: "ساختار", ti: "ቅርጺ", uk: "Утворення" },
      items: [
        "Tous les verbes pronominaux utilisent l'auxiliaire {a}être{/a}.",
        "Sujet + pronom réfléchi + être + participe passé.",
        "Je me suis levé(e). / Nous nous sommes préparé(e)s.",
      ],
      transItems: {
        en: ["All reflexive verbs use the auxiliary {a}être{/a}.", "Subject + reflexive pronoun + être + past participle.", "Je me suis levé(e). (I got up.) / Nous nous sommes préparé(e)s. (We got ready.)"],
        ar: ["جميع الأفعال الانعكاسية تستخدم الفعل المساعد {a}être{/a}.", "الفاعل + الضمير الانعكاسي + être + اسم المفعول.", "Je me suis levé(e). (قمت.) / Nous nous sommes préparé(e)s. (استعددنا.)"],
        fa: ["تمام افعال انعکاسی از فعل کمکی {a}être{/a} استفاده می‌کنند.", "فاعل + ضمیر انعکاسی + être + صفت مفعولی.", "Je me suis levé(e). (بلند شدم.) / Nous nous sommes préparé(e)s. (آماده شدیم.)"],
        ti: ["ኩሎም ርእሰ-ጠቓሚ ግሳት ሓጋዚ {a}être{/a} ይጥቀሙ።", "ርእሲ + ናይ ርእሲ ጸጋ + être + ናይ ሕሉፍ ተሳታፋይ.", "Je me suis levé(e). (ተንሲኤ.) / Nous nous sommes préparé(e)s. (ተዳሊና.)"],
        uk: ["Усі займенникові дієслова вживаються з допоміжним {a}être{/a}.", "Підмет + зворотний займенник + être + дієприкметник.", "Je me suis levé(e). (Я встав/встала.) / Nous nous sommes préparé(e)s. (Ми приготувалися.)"],
      },
    },
    {
      type: "plain_list",
      items: [
        "Le participe passé s'accorde avec le sujet réel lorsque le pronom réfléchi est complément direct.",
        "Elle s'est lavée. / Ils se sont rencontrés.",
        "Il reste invariable lorsqu'un COD est placé après le verbe : elle s'est lavé les mains.",
      ],
      transItems: {
        en: ["The past participle agrees with the real subject when the reflexive pronoun is a direct object.", "Elle s'est lavée. (She washed herself.) / Ils se sont rencontrés. (They met.)", "It stays invariable when a COD comes after the verb: elle s'est lavé les mains. (She washed her hands.)"],
        ar: ["يتطابق اسم المفعول مع الفاعل الحقيقي عندما يكون الضمير الانعكاسي مفعولاً مباشراً.", "Elle s'est lavée. (اغتسلت.) / Ils se sont rencontrés. (التقيا.)", "يبقى ثابتاً عندما يأتي مفعول به مباشر بعد الفعل: elle s'est lavé les mains. (غسلت يديها.)"],
        fa: ["صفت مفعولی با فاعل اصلی مطابقت دارد وقتی ضمیر انعکاسی مفعول مستقیم باشد.", "Elle s'est lavée. (خودش را شست.) / Ils se sont rencontrés. (ملاقات کردند.)", "اگر مفعول مستقیم بعد از فعل بیاید، صفت مفعولی تغییر نمی‌کند: elle s'est lavé les mains. (دست‌هایش را شست.)"],
        ti: ["ናይ ሕሉፍ ተሳታፋይ ምስ ኣካላዊ ርእሲ ይሰማማዕ ናይ ርእሲ ጸጋ ቀጥታዊ ዕላማ ከሎ.", "Elle s'est lavée. (ነብሳ ተሓጺባ.) / Ils se sont rencontrés. (ተራኺቦም.)", "COD ድሕሪ ግሲ ምስ ዝመጽእ ኣይቕየርን: elle s'est lavé les mains. (ኣእዳዋ ሓጺባ.)"],
        uk: ["Дієприкметник узгоджується з реальним підметом, коли зворотний займенник є прямим додатком.", "Elle s'est lavée. (Вона помилася.) / Ils se sont rencontrés. (Вони зустрілися.)", "Залишається незмінним, коли прямий додаток стоїть після дієслова: elle s'est lavé les mains. (Вона помила руки.)"],
      },
    },
    {
      type: "highlight",
      label: "Négation",
      transLabel: { en: "Negation", ar: "النفي", fa: "نفی", ti: "ምኽፋል", uk: "Заперечення" },
      items: [
        "La négation encadre le pronom réfléchi et l'auxiliaire.",
        "Je {a}ne me suis pas{/a} levé tôt.",
        "Elles {a}ne se sont jamais{/a} rencontrées.",
      ],
      transItems: {
        en: ["The negation surrounds the reflexive pronoun and the auxiliary.", "Je {a}ne me suis pas{/a} levé tôt. (I didn't get up early.)", "Elles {a}ne se sont jamais{/a} rencontrées. (They have never met.)"],
        ar: ["تحيط النفي بالضمير الانعكاسي والفعل المساعد.", "Je {a}ne me suis pas{/a} levé tôt. (لم أستيقظ مبكراً.)", "Elles {a}ne se sont jamais{/a} rencontrées. (لم يلتقيا أبداً.)"],
        fa: ["نفی، ضمیر انعکاسی و فعل کمکی را در بر می‌گیرد.", "Je {a}ne me suis pas{/a} levé tôt. (زود از خواب بیدار نشدم.)", "Elles {a}ne se sont jamais{/a} rencontrées. (هرگز ملاقات نکرده‌اند.)"],
        ti: ["ምኽፋል ናይ ርእሲ ጸጋን ሓጋዚን ይኸብቦ.", "Je {a}ne me suis pas{/a} levé tôt. (ቀልጢፈ ኣይተንሳእኩን.)", "Elles {a}ne se sont jamais{/a} rencontrées. (ኣፍ ርእሰን ዳዕ ተራኺበን ኣይፈልጣን.)"],
        uk: ["Заперечення оточує зворотний займенник і допоміжне дієслово.", "Je {a}ne me suis pas{/a} levé tôt. (Я не вставав рано.)", "Elles {a}ne se sont jamais{/a} rencontrées. (Вони ніколи не зустрічалися.)"],
      },
    },
  ],
  exercises: [],
};
