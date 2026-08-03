import type { GrammarLesson } from "../../grammar-data";
import { A1_CONJ_L00 } from "./grammaire-r1.1b";

/** G1.1 — Les pronoms sujets */
export const A1_GR_L01: GrammarLesson = {
  slug: "a1-gr-l01",
  code: "G1.1",
  level: "A1",
  title: "Les pronoms sujets",
  theory: [
    {
      type: "heading",
      text: "Pourquoi utiliser un pronom ?",
      trans: { en: "Why use a pronoun?", ar: "لماذا نستخدم ضميرًا؟", fa: "چرا از ضمیر استفاده می‌کنیم؟", ti: "ስለምንታይ ተካኢ ስም ንጥቀም?", uk: "Навіщо вживати займенник?" },
    },
    {
      type: "plain_list",
      items: [
        "Un pronom remplace une personne ou un nom pour éviter la répétition.",
      ],
      transItems: {
        en: ["A pronoun replaces a person or a noun to avoid repetition."],
        ar: ["يحلّ الضمير محل شخص أو اسم لتجنّب التكرار."],
        fa: ["ضمیر جای یک شخص یا اسم را می‌گیرد تا از تکرار جلوگیری شود."],
        ti: ["ተካኢ ስም ድግግም ንምውጋድ ኣብ ክንዲ ሰብ ወይ ስም ይኣቱ።"],
        uk: ["Займенник замінює особу або іменник, щоб уникнути повторення."],
      },
    },
    {
      type: "highlight",
      label: "",
      items: [
        "Ali parle français.",
        "{a}Il{/a} habite en Suisse.",
      ],
      noBulletItems: [0, 1],
    },
    {
      type: "heading",
      text: "Les pronoms personnels sujets",
      trans: { en: "Subject personal pronouns", ar: "ضمائر الفاعل الشخصية", fa: "ضمیرهای شخصی فاعلی", ti: "ናይ ተግባሪ ውልቃዊ ተካእቲ ስማት", uk: "Особові займенники-підмети" },
    },
    {
      type: "grid",
      pronounGrid: true,
      headers: ["Singulier", "Pluriel"],
      transHeaders: {
        en: ["Singular", "Plural"],
        ar: ["المفرد", "الجمع"],
        fa: ["مفرد", "جمع"],
        ti: ["ንጽል", "ብዙሕ"],
        uk: ["Однина", "Множина"],
      },
      rows: [
        ["je → moi", "nous → plusieurs personnes et moi"],
        ["tu → un ami", "vous → plusieurs personnes"],
        ["il → un homme", "ils → plusieurs hommes"],
        ["elle → une femme", "elles → plusieurs femmes"],
      ],
      transRows: {
        en: [
          ["je → me", "nous → several people and me"],
          ["tu → a friend", "vous → several people"],
          ["il → a man", "ils → several men"],
          ["elle → a woman", "elles → several women"],
        ],
        ar: [
          ["je → أنا", "nous → عدة أشخاص وأنا"],
          ["tu → صديق", "vous → عدة أشخاص"],
          ["il → رجل", "ils → عدة رجال"],
          ["elle → امرأة", "elles → عدة نساء"],
        ],
        fa: [
          ["je → من", "nous → چند نفر و من"],
          ["tu → یک دوست", "vous → چند نفر"],
          ["il → یک مرد", "ils → چند مرد"],
          ["elle → یک زن", "elles → چند زن"],
        ],
        ti: [
          ["je → ኣነ", "nous → ብዙሓት ሰባትን ኣነን"],
          ["tu → ሓደ ዓርኪ", "vous → ብዙሓት ሰባት"],
          ["il → ሓደ ሰብኣይ", "ils → ብዙሓት ሰብኡት"],
          ["elle → ሓንቲ ሰበይቲ", "elles → ብዙሓት ኣንስቲ"],
        ],
        uk: [
          ["je → я", "nous → кілька осіб і я"],
          ["tu → друг", "vous → кілька осіб"],
          ["il → чоловік", "ils → кілька чоловіків"],
          ["elle → жінка", "elles → кілька жінок"],
        ],
      },
    },
    {
      type: "heading",
      text: "Cas spéciaux",
      trans: { en: "Special cases", ar: "حالات خاصة", fa: "حالت‌های خاص", ti: "ፍሉያት ኩነታት", uk: "Особливі випадки" },
    },
    {
      type: "highlight",
      label: "ON",
      noBulletItems: [0, 1],
      inlineArrows: true,
      items: [
        "{a}On{/a} va au magasin. → {a}Nous{/a} allons au magasin.",
        "En Suisse, {a}on{/a} parle français. → {a}Les gens{/a} parlent français.",
      ],
      transLabel: { en: "ON", ar: "ON", fa: "ON", ti: "ON", uk: "ON" },
    },
    {
      type: "plain_list",
      items: [
        "On utilise « {a}on{/a} » pour représenter plusieurs personnes (= nous). Il est très utilisé à l'oral familier. Le verbe est toujours au singulier.",
      ],
      transItems: {
        en: ["We use {a}on{/a} to represent several people (= nous). It is very common in informal spoken French. The verb is always singular."],
        ar: ["نستخدم {a}on{/a} لتمثيل عدة أشخاص (= nous). ويُستخدم كثيرًا في الفرنسية المحكية غير الرسمية. ويكون الفعل دائمًا في صيغة المفرد."],
        fa: ["از {a}on{/a} برای نشان دادن چند نفر (= nous) استفاده می‌کنیم. این ضمیر در گفتار غیررسمی بسیار رایج است. فعل همیشه مفرد است."],
        ti: ["{a}on{/a} ንብዙሓት ሰባት (= nous) ንምውካል ንጥቀመሉ። ኣብ ዘይወግዓዊ ዘረባ ብዙሕ ይጥቀሙሉ። እቲ ግሲ ኩሉ ግዜ ንጽል እዩ።"],
        uk: ["{a}On{/a} вживаємо на позначення кількох осіб (= nous). Цей займенник дуже поширений у неформальному усному мовленні. Дієслово завжди стоїть в однині."],
      },
    },
    {
      type: "highlight",
      label: "TU",
      noBulletItems: [0],
      items: [
        "{a}Tu{/a} (= un ami) es fatigué ?",
      ],
      transLabel: { en: "TU", ar: "TU", fa: "TU", ti: "TU", uk: "TU" },
    },
    {
      type: "plain_list",
      items: [
        "On utilise « {a}tu{/a} » pour parler à une personne qu'on connaît, dans une situation familière.",
      ],
      transItems: {
        en: ["We use {a}tu{/a} to speak to someone we know in an informal situation."],
        ar: ["نستخدم {a}tu{/a} لمخاطبة شخص نعرفه في موقف غير رسمي."],
        fa: ["از {a}tu{/a} برای صحبت با فردی که می‌شناسیم، در یک موقعیت غیررسمی، استفاده می‌کنیم."],
        ti: ["{a}tu{/a} ንእንፈልጦ ሰብ ኣብ ዘይወግዓዊ ኩነታት ንምዝራብ ንጥቀመሉ።"],
        uk: ["{a}Tu{/a} вживаємо, коли звертаємося до знайомої людини в неформальній ситуації."],
      },
    },
    {
      type: "highlight",
      label: "VOUS",
      noBulletItems: [0],
      items: [
        "Madame, {a}vous{/a} allez bien ?",
      ],
      transLabel: { en: "VOUS", ar: "VOUS", fa: "VOUS", ti: "VOUS", uk: "VOUS" },
    },
    {
      type: "plain_list",
      items: [
        "On utilise « {a}vous{/a} » quand on ne connaît pas la personne ou que le statut est différent (élève–professeur). On appelle cela la forme de politesse.",
      ],
      transItems: {
        en: ["We use {a}vous{/a} when we do not know the person or when the social roles are different (student–teacher). This is called the polite form."],
        ar: ["نستخدم {a}vous{/a} عندما لا نعرف الشخص أو عندما يختلف الوضع الاجتماعي (طالب–أستاذ). وتُسمّى هذه صيغة الاحترام."],
        fa: ["از {a}vous{/a} زمانی استفاده می‌کنیم که فرد را نمی‌شناسیم یا جایگاه‌ها متفاوت‌اند (دانش‌آموز–معلم). به این حالت، صورت مؤدبانه می‌گویند."],
        ti: ["{a}vous{/a} ነቲ ሰብ ምስ ዘይንፈልጦ ወይ ደረጃና ዝተፈላለየ ምስ ዝኸውን (ተማሃራይ–መምህር) ንጥቀመሉ። እዚ ናይ ኣኽብሮት ቅርጺ ይበሃል።"],
        uk: ["{a}Vous{/a} вживаємо, коли не знаємо людину або коли співрозмовники мають різний статус (учень–викладач). Це називається ввічливою формою."],
      },
    },
    {
      type: "highlight",
      label: "ILS",
      noBulletItems: [0],
      inlineArrows: true,
      items: [
        "Ali ♂ et Alona ♀ vont au cinéma → {a}Ils{/a} vont au cinéma.",
      ],
      transLabel: { en: "ILS", ar: "ILS", fa: "ILS", ti: "ILS", uk: "ILS" },
    },
    {
      type: "plain_list",
      items: [
        "On utilise « {a}ils{/a} » quand il y a un groupe mixte de femmes et d'hommes. Même s'il y a beaucoup de femmes et un seul homme.",
      ],
      transItems: {
        en: ["We use {a}ils{/a} for a mixed group of women and men, even if there are many women and only one man."],
        ar: ["نستخدم {a}ils{/a} عندما تكون المجموعة مختلطة من النساء والرجال، حتى لو كان فيها عدد كبير من النساء ورجل واحد فقط."],
        fa: ["از {a}ils{/a} برای گروهی ترکیبی از زنان و مردان استفاده می‌کنیم، حتی اگر زنان زیاد و فقط یک مرد در گروه باشد."],
        ti: ["{a}ils{/a} ኣንስትን ሰብኡትን ኣብ ዘለውዎ ሕውስዋስ ጉጅለ ንጥቀመሉ። ብዙሓት ኣንስትን ሓደ ሰብኣይ ጥራይን እንተሃለዉ እውን።"],
        uk: ["{a}Ils{/a} вживаємо для змішаної групи жінок і чоловіків, навіть якщо в ній багато жінок і лише один чоловік."],
      },
    },
    {
      type: "heading",
      text: "Comment choisir ?",
      trans: { en: "How to choose?", ar: "كيف نختار؟", fa: "چگونه انتخاب کنیم؟", ti: "ብኸመይ ንመርጽ?", uk: "Як вибрати?" },
    },
    {
      type: "grid",
      headers: ["Nom", "Pronom"],
      transHeaders: {
        en: ["Noun", "Pronoun"],
        ar: ["الاسم", "الضمير"],
        fa: ["اسم", "ضمیر"],
        ti: ["ስም", "ተካኢ ስም"],
        uk: ["Іменник", "Займенник"],
      },
      rows: [
        ["Ali ♂", "il"],
        ["Alona ♀", "elle"],
        ["Ali ♂ et moi", "nous"],
        ["Alona ♀ et toi", "vous"],
        ["Ali ♂ et Hamed ♂", "ils"],
        ["Alona ♀ et Iryna ♀", "elles"],
        ["Ali ♂ et Alona ♀", "ils"],
      ],
    },
    {
      type: "highlight",
      label: "Astuce",
      noFirstBullet: true,
      items: [
        "Posez la question « Qui fait l'action ? », c'est le sujet de la phrase.",
      ],
      transLabel: { en: "Tip", ar: "نصيحة", fa: "نکته", ti: "ምኽሪ", uk: "Порада" },
      transItems: {
        en: ["Ask the question “Who is doing the action?” The answer is the subject of the sentence."],
        ar: ["اطرح السؤال «من يقوم بالفعل؟»، فالجواب هو فاعل الجملة."],
        fa: ["پرسش «چه کسی کار را انجام می‌دهد؟» را مطرح کنید؛ پاسخ، فاعل جمله است."],
        ti: ["«መን እዩ ነቲ ተግባር ዝገብር?» ኢልኩም ሕተቱ፤ መልሱ ተግባሪ ናይቲ ሓሳብ እዩ።"],
        uk: ["Поставте запитання «Хто виконує дію?». Відповідь — це підмет речення."],
      },
    },
    {
      type: "grid",
      headers: ["Phrase", "Question", "Sujet", "Résultat"],
      transHeaders: {
        en: ["Sentence", "Question", "Subject", "Result"],
        ar: ["الجملة", "السؤال", "الفاعل", "النتيجة"],
        fa: ["جمله", "پرسش", "فاعل", "نتیجه"],
        ti: ["ሓሳብ", "ሕቶ", "ተግባሪ", "ውጽኢት"],
        uk: ["Речення", "Запитання", "Підмет", "Результат"],
      },
      rows: [
        ["Alona ♀ mange.", "Qui mange ?", "Alona", "Elle mange."],
        ["Ali ♂ et Alona ♀ jouent.", "Qui jouent ?", "Ali et Alona", "Ils jouent."],
      ],
    },
  ],
  // Exercices pronoms (anciens exercices de la leçon conjugaison / fusion actuelle)
  exercises: A1_CONJ_L00.exercises,
};
