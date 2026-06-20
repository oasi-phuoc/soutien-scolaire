import type { ConjLesson } from "../../conjugation-data";

export const A1_CONJ_L30: ConjLesson = {
  slug: "a1-conj-l30",
  code: "R5.3",
  level: "A1",
  title: "Passé composé avec être",
  theory: [
    { type: "heading", text: "Le passé composé avec être", trans: { en: "The passé composé with «être»", ar: "الماضي المركّب مع «être»", fa: "گذشته‌ی نقلی با «être»", ti: "ሕሉፍ ግዜ ምስ «être»", uk: "Passé composé з «être»" } },
    {
      type: "plain_list",
      items: [
        "Certains verbes utilisent {a}être{/a} (et non avoir) comme auxiliaire.",
        "Structure : {a}être{/a} (présent) + {a}participe passé{/a} (accordé avec le sujet)",
      ],
      transItems: {
        en: ["Some verbs use {a}être{/a} (not avoir) as the auxiliary.", "Structure: {a}être{/a} (present) + {a}past participle{/a} (agreeing with the subject)"],
        ar: ["بعض الأفعال تستخدم {a}être{/a} (وليس avoir) كفعل مساعد.", "البنية: {a}être{/a} (المضارع) + {a}اسم المفعول{/a} (مطابق للفاعل)"],
        fa: ["برخی افعال از {a}être{/a} (نه avoir) به عنوان فعل کمکی استفاده می‌کنند.", "ساختار: {a}être{/a} (حال) + {a}اسم مفعول{/a} (مطابق با فاعل)"],
        ti: ["ገለ ግሲታት {a}être{/a} (ኣይኮነን avoir) ከም ሓጋዚ ይጥቀሙ።", "ቅርጺ፦ {a}être{/a} (ህሉው) + {a}ክፍሊ-ግሲ{/a} (ምስ ርእሲ ዝሰማማዕ)"],
        uk: ["Деякі дієслова вживають {a}être{/a} (а не avoir) як допоміжне.", "Структура: {a}être{/a} (теперішній) + {a}дієприкметник{/a} (узгоджений з підметом)"],
      },
    },
    {
      type: "table",
      tables: [
        {
          verb: "aller — exemple avec être",
          accentForms: true,
          rows: [
            { pronoun: "je (masc.)", form: "suis allé" },
            { pronoun: "je (fém.)", form: "suis allée" },
            { pronoun: "tu (masc.)", form: "es allé" },
            { pronoun: "il / on", form: "est allé" },
            { pronoun: "elle", form: "est allée" },
            { pronoun: "nous (masc.)", form: "sommes allés" },
            { pronoun: "vous (mixte)", form: "êtes allés" },
            { pronoun: "ils", form: "sont allés" },
            { pronoun: "elles", form: "sont allées" },
          ],
        },
      ],
    },
    { type: "heading", text: "Les 17 verbes avec être (DR MRS VANDERTRAMP)", sub: true, accent: true, trans: { en: "The 17 verbs with «être» (DR MRS VANDERTRAMP)", ar: "الأفعال الـ17 مع «être» (DR MRS VANDERTRAMP)", fa: "۱۷ فعل با «être» (DR MRS VANDERTRAMP)", ti: "እቶም 17 ግሲታት ምስ «être» (DR MRS VANDERTRAMP)", uk: "17 дієслів з «être» (DR MRS VANDERTRAMP)" } },
    {
      type: "grid",
      headers: ["Infinitif", "Participe passé", "Infinitif", "Participe passé"],
      transHeaders: {
        en: ["Infinitive", "Past participle", "Infinitive", "Past participle"],
        ar: ["المصدر", "اسم المفعول", "المصدر", "اسم المفعول"],
        fa: ["مصدر", "اسم مفعول", "مصدر", "اسم مفعول"],
        ti: ["መሰረታዊ ግሲ", "ክፍሊ-ግሲ", "መሰረታዊ ግሲ", "ክፍሊ-ግሲ"],
        uk: ["Інфінітив", "Дієприкметник", "Інфінітив", "Дієприкметник"],
      },
      rows: [
        ["{a}D{/a}escendre", "descendu(e)", "{a}V{/a}enir", "venu(e)"],
        ["{a}R{/a}ester", "resté(e)", "{a}A{/a}ller", "allé(e)"],
        ["{a}M{/a}onter", "monté(e)", "{a}N{/a}aître", "né(e)"],
        ["{a}R{/a}etourner", "retourné(e)", "{a}D{/a}evenir", "devenu(e)"],
        ["{a}S{/a}ortir", "sorti(e)", "{a}E{/a}ntrer", "entré(e)"],
        ["{a}V{/a}enir", "venu(e)", "{a}R{/a}evenir", "revenu(e)"],
        ["{a}A{/a}rriver", "arrivé(e)", "{a}T{/a}omber", "tombé(e)"],
        ["{a}N{/a}aître", "né(e)", "{a}R{/a}entrer", "rentré(e)"],
        ["{a}P{/a}artir", "parti(e)", "{a}A{/a}ller", "allé(e)"],
        ["{a}M{/a}ourir", "mort(e)", "{a}P{/a}asser", "passé(e)"],
      ],
    },
    { type: "heading", text: "Accord du participe passé avec être", sub: true, accent: true, trans: { en: "Agreement of the past participle with «être»", ar: "مطابقة اسم المفعول مع «être»", fa: "مطابقت اسم مفعول با «être»", ti: "ምስምማዕ ክፍሊ-ግሲ ምስ «être»", uk: "Узгодження дієприкметника з «être»" } },
    {
      type: "grid",
      headers: ["Sujet", "Participe", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["Masculin singulier", "→ (base)", "Il est parti."],
        ["Féminin singulier", "→ + {a}e{/a}", "Elle est partie{a}e{/a}."],
        ["Masculin pluriel", "→ + {a}s{/a}", "Ils sont partis{a}s{/a}."],
        ["Féminin pluriel", "→ + {a}es{/a}", "Elles sont parties{a}es{/a}."],
      ],
      transHeaders: {
        en: ["Subject", "Participle", "Example"],
        ar: ["الفاعل", "اسم المفعول", "مثال"],
        fa: ["فاعل", "اسم مفعول", "مثال"],
        ti: ["ርእሲ", "ክፍሊ-ግሲ", "ኣብነት"],
        uk: ["Підмет", "Дієприкметник", "Приклад"],
      },
      transRows: {
        en: [["Masculine singular", "→ (base)", "Il est parti. (He left.)"], ["Feminine singular", "→ + {a}e{/a}", "Elle est partie{a}e{/a}. (She left.)"], ["Masculine plural", "→ + {a}s{/a}", "Ils sont partis{a}s{/a}. (They left.)"], ["Feminine plural", "→ + {a}es{/a}", "Elles sont parties{a}es{/a}. (They left.)"]],
        ar: [["مذكر مفرد", "← (الأساس)", "Il est parti. (غادر.)"], ["مؤنث مفرد", "← + {a}e{/a}", "Elle est partie{a}e{/a}. (غادرت.)"], ["مذكر جمع", "← + {a}s{/a}", "Ils sont partis{a}s{/a}. (غادروا.)"], ["مؤنث جمع", "← + {a}es{/a}", "Elles sont parties{a}es{/a}. (غادرن.)"]],
        fa: [["مذکر مفرد", "← (پایه)", "Il est parti. (رفت.)"], ["مؤنث مفرد", "← + {a}e{/a}", "Elle est partie{a}e{/a}. (رفت.)"], ["مذکر جمع", "← + {a}s{/a}", "Ils sont partis{a}s{/a}. (رفتند.)"], ["مؤنث جمع", "← + {a}es{/a}", "Elles sont parties{a}es{/a}. (رفتند.)"]],
        ti: [["ተባዕታይ ነጠላ", "→ (መሰረት)", "Il est parti. (ከይዱ።)"], ["ኣንስታይ ነጠላ", "→ + {a}e{/a}", "Elle est partie{a}e{/a}. (ከይዳ።)"], ["ተባዕታይ ብዙሕ", "→ + {a}s{/a}", "Ils sont partis{a}s{/a}. (ከይዶም።)"], ["ኣንስታይ ብዙሕ", "→ + {a}es{/a}", "Elles sont parties{a}es{/a}. (ከይደን።)"]],
        uk: [["Чоловічий рід однини", "→ (основа)", "Il est parti. (Він пішов.)"], ["Жіночий рід однини", "→ + {a}e{/a}", "Elle est partie{a}e{/a}. (Вона пішла.)"], ["Чоловічий рід множини", "→ + {a}s{/a}", "Ils sont partis{a}s{/a}. (Вони пішли.)"], ["Жіночий рід множини", "→ + {a}es{/a}", "Elles sont parties{a}es{/a}. (Вони пішли.)"]],
      },
    },
    {
      type: "highlight",
      label: "Tous les verbes pronominaux utilisent aussi être",
      items: [
        "Elle {a}s'est levée{/a}. (se lever → participe accordé avec elle)",
        "Ils {a}se sont parlé{/a}. (se parler → COI, pas d'accord)",
        "Nous {a}nous sommes rencontrés{/a}.",
      ],
      transLabel: { en: "All reflexive verbs also use «être»", ar: "كل الأفعال الانعكاسية تستخدم أيضاً «être»", fa: "همه‌ی افعال انعکاسی نیز از «être» استفاده می‌کنند", ti: "ኩሎም ናይ ርእሰ-ግሲታት እውን «être» ይጥቀሙ", uk: "Усі зворотні дієслова теж вживають «être»" },
      transItems: {
        en: ["Elle {a}s'est levée{/a}. (se lever → participle agrees with elle)", "Ils {a}se sont parlé{/a}. (se parler → indirect object, no agreement)", "Nous {a}nous sommes rencontrés{/a}. (We met.)"],
        ar: ["Elle {a}s'est levée{/a}. (se lever ← اسم المفعول يطابق elle)", "Ils {a}se sont parlé{/a}. (se parler ← مفعول غير مباشر، لا مطابقة)", "Nous {a}nous sommes rencontrés{/a}. (التقينا.)"],
        fa: ["Elle {a}s'est levée{/a}. (se lever ← اسم مفعول با elle مطابقت دارد)", "Ils {a}se sont parlé{/a}. (se parler ← مفعول غیرمستقیم، بدون مطابقت)", "Nous {a}nous sommes rencontrés{/a}. (همدیگر را ملاقات کردیم.)"],
        ti: ["Elle {a}s'est levée{/a}. (se lever → ክፍሊ-ግሲ ምስ elle ይሰማማዕ)", "Ils {a}se sont parlé{/a}. (se parler → ተዘዋዋሪ ተሳላፊ፣ ምስምማዕ የለን)", "Nous {a}nous sommes rencontrés{/a}. (ተራኺብና።)"],
        uk: ["Elle {a}s'est levée{/a}. (se lever → дієприкметник узгоджується з elle)", "Ils {a}se sont parlé{/a}. (se parler → непрямий додаток, без узгодження)", "Nous {a}nous sommes rencontrés{/a}. (Ми зустрілися.)"],
      },
    },
  ],
  exercises: [],
};
