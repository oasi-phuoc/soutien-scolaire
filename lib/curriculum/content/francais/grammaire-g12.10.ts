import type { GrammarLesson } from "../../grammar-data";

/** G12.10 — Les pronoms relatifs qui, que, où, enrichis avec G19.17 */
export const A1_GR_PRONOMS_RELATIFS_QUI_QUE_OU: GrammarLesson = {
  slug: "a1-gr-pronoms-relatifs-qui-que-ou",
  code: "G12.10",
  level: "A1",
  title: "Les pronoms relatifs qui, que, où",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "text",
      items: [
        "Les pronoms relatifs remplacent un nom et permettent de réunir deux phrases.",
        "Tu connais cette fille ? Elle sort avec Lucas. → Tu connais cette fille qui sort avec Lucas ?",
        "Le choix dépend de la fonction du pronom par rapport au verbe qui suit.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Formes",
    },
    {
      type: "text",
      label: "Qui",
      items: [
        "Personne ou chose ; sujet du second verbe. → les jeunes mariés qui habitent à côté ; un appartement qui donne sur un parc.",
      ],
    },
    {
      type: "text",
      label: "Que",
      items: [
        "Personne ou chose ; COD du second verbe. → le couple que nous avons rencontré ; un studio que ses parents ont acheté.",
      ],
    },
    {
      type: "text",
      label: "Où",
      items: [
        "Complément de lieu ou de temps. → l'université où j'ai terminé mes études ; le jour où j'ai soutenu ma thèse.",
      ],
    },
    {
      type: "text",
      items: [
        "{a}Qui{/a} et {a}que{/a} peuvent remplacer un pronom tonique. → C'est toi qui m'as présenté cette fille ? ; C'est elle que je connais le mieux.",
        "Avec {a}qui{/a}, le verbe s'accorde avec la personne du pronom.",
        "{a}Que → qu'{/a} devant voyelle ou {a}h{/a} muet. → une ville qu'il adore.",
        "{a}Qui{/a} ne s'élide pas. → la fille qui est là.",
      ],
      allBullets: true,
    },
    { type: "heading", text: "Les pronoms relatifs : relier deux phrases", trans: { en: "Relative pronouns: linking two sentences", ar: "الضمائر الموصولة: ربط جملتين", fa: "ضمایر موصولی: پیوند دو جمله", ti: "ኣዛመድቲ ቃላት፦ ምትእስሳር ክልተ ሓረግ", uk: "Відносні займенники: з'єднання двох речень" } },
    {
      type: "text",
      allBullets: true,
      text: "Un pronom relatif permet de {a}relier deux phrases{/a} en évitant une répétition.",
      transText: {
        en: "A relative pronoun allows you to {a}link two sentences{/a} while avoiding a repetition.",
        ar: "يسمح الضمير الموصول بـ{a}ربط جملتين{/a} مع تجنب التكرار.",
        fa: "ضمیر موصولی امکان {a}پیوند دو جمله{/a} را بدون تکرار فراهم می‌کند.",
        ti: "ኣዛማዲ ቃል {a}ክልተ ሓረግ ብምትእስሳር{/a} ምድግጋም የወግድ።",
        uk: "Відносний займенник дозволяє {a}з'єднати два речення{/a}, уникаючи повтору.",
      },
      items: [
        "Les deux principaux : {a}qui{/a} (sujet) et {a}que / qu'{/a} (objet direct).",
      ],
      transItems: {
        en: [
          "The two main ones: {a}qui{/a} (subject) and {a}que / qu'{/a} (direct object).",
        ],
        ar: [
          "الرئيسيان: {a}qui{/a} (الفاعل) و{a}que / qu'{/a} (المفعول المباشر).",
        ],
        fa: [
          "دو ضمیر اصلی: {a}qui{/a} (فاعل) و {a}que / qu'{/a} (مفعول مستقیم).",
        ],
        ti: [
          "እቶም ክልተ ቀንዲ፦ {a}qui{/a} (ባዕሉ) ከምኡውን {a}que / qu'{/a} (ቀጥታዊ ኣቕሓ)።",
        ],
        uk: [
          "Два основні: {a}qui{/a} (підмет) і {a}que / qu'{/a} (прямий додаток).",
        ],
      },
    },
    {
      type: "grid",
      headers: ["Pronom", "Fonction", "Ce qu'il suit directement"],
      transHeaders: {
        en: ["Pronoun", "Function", "What it directly precedes"],
        ar: ["الضمير", "الوظيفة", "ما يتبعه مباشرة"],
        fa: ["ضمیر", "نقش", "آنچه مستقیماً پس از آن می‌آید"],
        ti: ["ቃል", "ተግባር", "ብቐጥታ ዝስዕቦ"],
        uk: ["Займенник", "Функція", "Що йде безпосередньо за ним"],
      },
      boldFirstCol: true,
      rows: [
        ["{a}qui{/a}", "sujet de la proposition relative", "qui + {a}verbe{/a} directement"],
        ["{a}que / qu'{/a}", "objet direct de la proposition relative", "que + {a}sujet + verbe{/a}"],
      ],
      transRows: {
        en: [["{a}qui{/a}", "subject of the relative clause", "qui + {a}verb{/a} directly"], ["{a}que / qu'{/a}", "direct object of the relative clause", "que + {a}subject + verb{/a}"]],
        ar: [["{a}qui{/a}", "فاعل الجملة الموصولة", "qui + {a}الفعل{/a} مباشرة"], ["{a}que / qu'{/a}", "مفعول مباشر للجملة الموصولة", "que + {a}الفاعل + الفعل{/a}"]],
        fa: [["{a}qui{/a}", "فاعل جمله موصولی", "qui + {a}فعل{/a} مستقیماً"], ["{a}que / qu'{/a}", "مفعول مستقیم جمله موصولی", "que + {a}فاعل + فعل{/a}"]],
        ti: [["{a}qui{/a}", "ባዕሉ ናይ ኣዛማዲ ሓረግ", "qui + {a}ግሲ{/a} ብቐጥታ"], ["{a}que / qu'{/a}", "ቀጥታዊ ኣቕሓ ናይ ኣዛማዲ ሓረግ", "que + {a}ባዕሉ + ግሲ{/a}"]],
        uk: [["{a}qui{/a}", "підмет підрядного речення", "qui + {a}дієслово{/a} безпосередньо"], ["{a}que / qu'{/a}", "прямий додаток підрядного речення", "que + {a}підмет + дієслово{/a}"]],
      },
    },
    { type: "heading", text: "QUI — sujet", sub: true, accent: true, trans: { en: "QUI — subject", ar: "QUI — الفاعل", fa: "QUI — فاعل", ti: "QUI — ባዕሉ", uk: "QUI — підмет" } },
    {
      type: "grid",
      headers: ["Deux phrases", "→ Phrase avec QUI"],
      transHeaders: {
        en: ["Two sentences", "→ Sentence with QUI"],
        ar: ["جملتان", "← جملة مع QUI"],
        fa: ["دو جمله", "← جمله با QUI"],
        ti: ["ክልተ ሓረግ", "→ ሓረግ ምስ QUI"],
        uk: ["Два речення", "→ Речення з QUI"],
      },
      rows: [
        ["J'ai un ami. Cet ami parle japonais.", "J'ai un ami {a}qui{/a} parle japonais."],
        ["Tu vois l'homme. L'homme porte une veste bleue.", "Tu vois l'homme {a}qui{/a} porte une veste bleue ?"],
        ["C'est une école. Cette école est connue.", "C'est une école {a}qui{/a} est connue."],
        ["Je cherche un appartement. Il est proche du centre.", "Je cherche un appartement {a}qui{/a} est proche du centre."],
      ],
      transRows: {
        en: [["J'ai un ami. Cet ami parle japonais. (I have a friend. This friend speaks Japanese.)", "J'ai un ami {a}qui{/a} parle japonais."], ["C'est une école. Cette école est connue. (It's a school. This school is well-known.)", "C'est une école {a}qui{/a} est connue."], ["Je cherche un appartement. Il est proche du centre. (I'm looking for a flat. It is near the centre.)", "Je cherche un appartement {a}qui{/a} est proche du centre."]],
        ar: [["J'ai un ami. Cet ami parle japonais. (لديّ صديق. هذا الصديق يتكلم اليابانية.)", "J'ai un ami {a}qui{/a} parle japonais."], ["C'est une école. Cette école est connue. (إنها مدرسة. هذه المدرسة معروفة.)", "C'est une école {a}qui{/a} est connue."], ["Je cherche un appartement. Il est proche du centre. (أبحث عن شقة. إنها قريبة من المركز.)", "Je cherche un appartement {a}qui{/a} est proche du centre."]],
        fa: [["J'ai un ami. Cet ami parle japonais. (یک دوست دارم. این دوست ژاپنی صحبت می‌کند.)", "J'ai un ami {a}qui{/a} parle japonais."], ["C'est une école. Cette école est connue. (این یک مدرسه است. این مدرسه شناخته‌شده است.)", "C'est une école {a}qui{/a} est connue."], ["Je cherche un appartement. Il est proche du centre. (دنبال یک آپارتمان می‌گردم. نزدیک مرکز است.)", "Je cherche un appartement {a}qui{/a} est proche du centre."]],
        ti: [["J'ai un ami. Cet ami parle japonais. (ሓደ ዓርኪ ኣለኒ። እዚ ዓርኪ ጃፓንኛ ይዛረብ።)", "J'ai un ami {a}qui{/a} parle japonais."], ["C'est une école. Cette école est connue. (እዚ ቤት ትምህርቲ እዩ። እዚ ቤት ትምህርቲ ፍሉጥ እዩ።)", "C'est une école {a}qui{/a} est connue."], ["Je cherche un appartement. Il est proche du centre. (ኣፓርትመንት እደሊ ኣለኹ። ናብቲ ማእከል ቀረባ እዩ።)", "Je cherche un appartement {a}qui{/a} est proche du centre."]],
        uk: [["J'ai un ami. Cet ami parle japonais. (У мене є друг. Цей друг говорить японською.)", "J'ai un ami {a}qui{/a} parle japonais."], ["C'est une école. Cette école est connue. (Це школа. Ця школа відома.)", "C'est une école {a}qui{/a} est connue."], ["Je cherche un appartement. Il est proche du centre. (Я шукаю квартиру. Вона біля центру.)", "Je cherche un appartement {a}qui{/a} est proche du centre."]],
      },
    },
    { type: "heading", text: "QUE / QU' — objet direct", sub: true, accent: true, trans: { en: "QUE / QU' — direct object", ar: "QUE / QU' — المفعول المباشر", fa: "QUE / QU' — مفعول مستقیم", ti: "QUE / QU' — ቀጥታዊ ኣቕሓ", uk: "QUE / QU' — прямий додаток" } },
    {
      type: "grid",
      headers: ["Deux phrases", "→ Phrase avec QUE"],
      transHeaders: {
        en: ["Two sentences", "→ Sentence with QUE"],
        ar: ["جملتان", "← جملة مع QUE"],
        fa: ["دو جمله", "← جمله با QUE"],
        ti: ["ክልተ ሓረግ", "→ ሓረግ ምስ QUE"],
        uk: ["Два речення", "→ Речення з QUE"],
      },
      rows: [
        ["C'est un film. J'aime ce film.", "C'est un film {a}que{/a} j'aime."],
        ["Voici la règle. Nous apprenons cette règle.", "Voici la règle {a}que{/a} nous apprenons."],
        ["C'est un livre. Il lit ce livre.", "C'est un livre {a}qu'{/a}il lit."],
      ],
      transRows: {
        en: [["C'est un film. J'aime ce film. (It's a film. I like this film.)", "C'est un film {a}que{/a} j'aime."], ["Voici la règle. Nous apprenons cette règle. (Here is the rule. We are learning this rule.)", "Voici la règle {a}que{/a} nous apprenons."], ["C'est un livre. Il lit ce livre. (It's a book. He is reading this book.)", "C'est un livre {a}qu'{/a}il lit."]],
        ar: [["C'est un film. J'aime ce film. (إنه فيلم. أحب هذا الفيلم.)", "C'est un film {a}que{/a} j'aime."], ["Voici la règle. Nous apprenons cette règle. (هذه هي القاعدة. نتعلم هذه القاعدة.)", "Voici la règle {a}que{/a} nous apprenons."], ["C'est un livre. Il lit ce livre. (إنه كتاب. يقرأ هذا الكتاب.)", "C'est un livre {a}qu'{/a}il lit."]],
        fa: [["C'est un film. J'aime ce film. (این یک فیلم است. این فیلم را دوست دارم.)", "C'est un film {a}que{/a} j'aime."], ["Voici la règle. Nous apprenons cette règle. (این قاعده است. این قاعده را یاد می‌گیریم.)", "Voici la règle {a}que{/a} nous apprenons."], ["C'est un livre. Il lit ce livre. (این یک کتاب است. او این کتاب را می‌خواند.)", "C'est un livre {a}qu'{/a}il lit."]],
        ti: [["C'est un film. J'aime ce film. (እዚ ፊልም እዩ። ነዚ ፊልም እፈትዎ።)", "C'est un film {a}que{/a} j'aime."], ["Voici la règle. Nous apprenons cette règle. (እዚ እቲ ሕጊ እዩ። ነዚ ሕጊ ንመሃር ኣለና።)", "Voici la règle {a}que{/a} nous apprenons."], ["C'est un livre. Il lit ce livre. (እዚ መጽሓፍ እዩ። ነዚ መጽሓፍ የንብብ።)", "C'est un livre {a}qu'{/a}il lit."]],
        uk: [["C'est un film. J'aime ce film. (Це фільм. Мені подобається цей фільм.)", "C'est un film {a}que{/a} j'aime."], ["Voici la règle. Nous apprenons cette règle. (Ось правило. Ми вивчаємо це правило.)", "Voici la règle {a}que{/a} nous apprenons."], ["C'est un livre. Il lit ce livre. (Це книга. Він читає цю книгу.)", "C'est un livre {a}qu'{/a}il lit."]],
      },
    },
    {
      type: "text",
      label: "Comment choisir : qui ou que ?",
      items: [
        "{a}QUI{/a} → le pronom est {a}sujet{/a} : le verbe suivant n'a pas de sujet explicite.",
        "{a}QUE{/a} → le pronom est {a}objet{/a} : le verbe suivant a déjà son sujet.",
        "Astuce : si après le pronom vient directement un verbe conjugué → {a}QUI{/a}.",
        "Astuce : si après le pronom vient un sujet puis un verbe → {a}QUE{/a}.",
      ],
      transLabel: { en: "How to choose: qui or que?", ar: "كيف تختار: qui أم que؟", fa: "چگونه انتخاب کنیم: qui یا que؟", ti: "ከመይ ጌርካ ትመርጽ፦ qui ወይ que?", uk: "Як обрати: qui чи que?" },
      transItems: {
        en: ["{a}QUI{/a} → the pronoun is the {a}subject{/a}: the following verb has no explicit subject.", "{a}QUE{/a} → the pronoun is the {a}object{/a}: the following verb already has its subject.", "Tip: if a conjugated verb comes directly after the pronoun → {a}QUI{/a}.", "Tip: if a subject then a verb comes after the pronoun → {a}QUE{/a}."],
        ar: ["{a}QUI{/a} ← الضمير هو {a}الفاعل{/a}: الفعل التالي ليس له فاعل صريح.", "{a}QUE{/a} ← الضمير هو {a}المفعول{/a}: الفعل التالي له فاعله بالفعل.", "نصيحة: إذا جاء فعل مصرّف مباشرة بعد الضمير ← {a}QUI{/a}.", "نصيحة: إذا جاء فاعل ثم فعل بعد الضمير ← {a}QUE{/a}."],
        fa: ["{a}QUI{/a} ← ضمیر {a}فاعل{/a} است: فعل بعدی فاعل صریح ندارد.", "{a}QUE{/a} ← ضمیر {a}مفعول{/a} است: فعل بعدی فاعل خود را دارد.", "نکته: اگر بلافاصله پس از ضمیر یک فعل صرف‌شده بیاید ← {a}QUI{/a}.", "نکته: اگر پس از ضمیر یک فاعل و سپس یک فعل بیاید ← {a}QUE{/a}."],
        ti: ["{a}QUI{/a} → እቲ ቃል {a}ባዕሉ{/a} እዩ፦ እቲ ዝስዕብ ግሲ ግሁድ ባዕሉ የብሉን።", "{a}QUE{/a} → እቲ ቃል {a}ኣቕሓ{/a} እዩ፦ እቲ ዝስዕብ ግሲ ድሮ ባዕሉ ኣለዎ።", "ምኽሪ፦ ድሕሪ እቲ ቃል ብቐጥታ ዝተዘርዘረ ግሲ እንተመጺኡ → {a}QUI{/a}።", "ምኽሪ፦ ድሕሪ እቲ ቃል ባዕሉ ሰዓብ ግሲ እንተመጺኡ → {a}QUE{/a}።"],
        uk: ["{a}QUI{/a} → займенник є {a}підметом{/a}: наступне дієслово не має явного підмета.", "{a}QUE{/a} → займенник є {a}додатком{/a}: наступне дієслово вже має свій підмет.", "Підказка: якщо одразу після займенника йде відмінюване дієслово → {a}QUI{/a}.", "Підказка: якщо після займенника йде підмет, а потім дієслово → {a}QUE{/a}."],
      },
    },
    { type: "heading", text: "Accord du participe avec QUE au passé composé", sub: true, accent: true, trans: { en: "Agreement of the participle with QUE in the passé composé", ar: "مطابقة اسم المفعول مع QUE في الماضي المركّب", fa: "مطابقت وجه وصفی با QUE در ماضی نقلی", ti: "ስምምዕ ኣካፋዊ ምስ QUE ኣብ passé composé", uk: "Узгодження дієприкметника з QUE в passé composé" } },
    {
      type: "grid",
      headers: ["Exemple", "Accord"],
      transHeaders: {
        en: ["Example", "Agreement"],
        ar: ["مثال", "المطابقة"],
        fa: ["مثال", "مطابقت"],
        ti: ["ኣብነት", "ስምምዕ"],
        uk: ["Приклад", "Узгодження"],
      },
      rows: [
        ["La lettre qu'il a écrit{a}e{/a}.", "que = la lettre (fém.) → écrite"],
        ["Les films que j'ai regard{a}és{/a}.", "que = les films (masc. plur.) → regardés"],
        ["Les filles qu'il a invit{a}ées{/a}.", "que = les filles (fém. plur.) → invitées"],
      ],
      transRows: {
        en: [["La lettre qu'il a écrit{a}e{/a}.", "que = la lettre (fem.) → écrite"], ["Les films que j'ai regard{a}és{/a}.", "que = les films (masc. plur.) → regardés"], ["Les filles qu'il a invit{a}ées{/a}.", "que = les filles (fem. plur.) → invitées"]],
        ar: [["La lettre qu'il a écrit{a}e{/a}.", "que = la lettre (مؤنث) ← écrite"], ["Les films que j'ai regard{a}és{/a}.", "que = les films (مذكر جمع) ← regardés"], ["Les filles qu'il a invit{a}ées{/a}.", "que = les filles (مؤنث جمع) ← invitées"]],
        fa: [["La lettre qu'il a écrit{a}e{/a}.", "que = la lettre (مؤنث) ← écrite"], ["Les films que j'ai regard{a}és{/a}.", "que = les films (مذکر جمع) ← regardés"], ["Les filles qu'il a invit{a}ées{/a}.", "que = les filles (مؤنث جمع) ← invitées"]],
        ti: [["La lettre qu'il a écrit{a}e{/a}.", "que = la lettre (ኣንስታይ) → écrite"], ["Les films que j'ai regard{a}és{/a}.", "que = les films (ተባዕታይ ብዙሕ) → regardés"], ["Les filles qu'il a invit{a}ées{/a}.", "que = les filles (ኣንስታይ ብዙሕ) → invitées"]],
        uk: [["La lettre qu'il a écrit{a}e{/a}.", "que = la lettre (жін.) → écrite"], ["Les films que j'ai regard{a}és{/a}.", "que = les films (чол. мн.) → regardés"], ["Les filles qu'il a invit{a}ées{/a}.", "que = les filles (жін. мн.) → invitées"]],
      },
    },
  ],
  exercises: [],
};
