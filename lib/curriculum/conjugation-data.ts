// Conjugaison lesson content: types + data for all 18 A1/A2 conjugation lessons.

export type ConjugRow = { pronoun: string; form: string; phonetic?: string };
export type ConjugTable = { verb: string; rows: ConjugRow[] };

type Trans = Partial<Record<"en" | "ar" | "fa" | "ti" | "uk", string>>;
type TransList = Partial<Record<"en" | "ar" | "fa" | "ti" | "uk", string[]>>;

export type TheoryBlock =
  | { type: "heading"; text: string; trans?: Trans }
  | { type: "table"; tables: ConjugTable[] }
  | { type: "rule"; text: string; examples?: { correct: string; wrong?: string }[] }
  | { type: "note"; text: string }
  | { type: "vocab"; title: string; items: string[] }
  | { type: "grid"; headers: string[]; rows: string[][]; transHeaders?: TransList; transRows?: Partial<Record<"en" | "ar" | "fa" | "ti" | "uk", string[][]>> }
  | { type: "plain_list"; label?: string; items: string[]; transItems?: TransList }
  | { type: "highlight"; label: string; items: string[]; transLabel?: Trans; transItems?: TransList };

export type QcmItem = { sentence: string; choices: string[]; correctIdx: number };
export type FillItem = { sentence: string; hint: string; answer: string };
export type MatchPair = { left: string; right: string };

export type Exercise =
  | { type: "qcm"; title: string; instruction: string; items: QcmItem[]; pool?: QcmItem[]; poolSize?: number }
  | { type: "fill"; title: string; instruction: string; items: FillItem[]; pool?: FillItem[]; poolSize?: number }
  | { type: "match"; title: string; instruction: string; pairs: MatchPair[]; pool?: MatchPair[]; poolSize?: number };

export type ConjLesson = {
  slug: string;
  code: string;
  level: "A1" | "A2";
  title: string;
  theory: TheoryBlock[];
  theory2?: TheoryBlock[];
  exercises: Exercise[];
};

// ── A1 Lessons ────────────────────────────────────────────────────────────────

const a1ConjL00: ConjLesson = {
  slug: "a1-conj-l00",
  code: "C.1",
  level: "A1",
  title: "Les pronoms personnels sujets",
  theory: [
    {
      type: "heading",
      text: "Pourquoi utiliser un pronom ?",
      trans: { en: "Why use a pronoun?", ar: "لماذا نستخدم ضميراً؟", fa: "چرا از ضمیر استفاده می‌کنیم؟", ti: "ስለምንታይ ጸጋ ቃል ንጥቀም?", uk: "Навіщо використовувати займенник?" },
    },
    {
      type: "plain_list",
      items: [
        "Un pronom remplace une personne ou un nom pour éviter la répétition.",
        "Ali parle. Ali travaille. Ali habite en Suisse.",
        "→ Ali parle. Il travaille. Il habite en Suisse.",
      ],
      transItems: {
        en: ["A pronoun replaces a person or a noun to avoid repetition.", "Ali speaks. Ali works. Ali lives in Switzerland.", "→ Ali speaks. He works. He lives in Switzerland."],
        ar: ["الضمير يحل محل شخص أو اسم لتجنب التكرار.", "علي يتكلم. علي يعمل. علي يسكن في سويسرا.", "→ علي يتكلم. هو يعمل. هو يسكن في سويسرا."],
        fa: ["ضمیر یک شخص یا اسم را جایگزین می‌کند تا از تکرار جلوگیری شود.", "علی صحبت می‌کند. علی کار می‌کند. علی در سوئیس زندگی می‌کند.", "→ علی صحبت می‌کند. او کار می‌کند. او در سوئیس زندگی می‌کند."],
        ti: ["ጸጋ ቃል ሰብ ወይ ስም ንምምካን ናይ ምድጋም ሸልሚ ዝካፍሎ ቃል እዩ።", "ዓሊ ይዛረብ። ዓሊ ይሰርሕ። ዓሊ ኣብ ስዊዘርላንድ ይቐንዕ።", "→ ዓሊ ይዛረብ። ንሱ ይሰርሕ። ንሱ ኣብ ስዊዘርላንድ ይቐንዕ።"],
        uk: ["Займенник замінює особу або іменник, щоб уникнути повторення.", "Алі говорить. Алі працює. Алі живе у Швейцарії.", "→ Алі говорить. Він працює. Він живе у Швейцарії."],
      },
    },
    {
      type: "heading",
      text: "Les pronoms personnels sujets",
      trans: { en: "Subject personal pronouns", ar: "ضمائر الفاعل الشخصية", fa: "ضمایر شخصی فاعلی", ti: "ናይ ርእሲ ውልቃዊ ጸጋ ቃላት", uk: "Особові займенники підмета" },
    },
    {
      type: "grid",
      headers: ["Singulier", "Pluriel"],
      rows: [
        ["je → moi", "nous → plusieurs personnes et moi"],
        ["tu → un ami, la famille", "vous → plusieurs personnes"],
        ["il → un homme", "ils → plusieurs hommes"],
        ["elle → une femme", "elles → plusieurs femmes"],
      ],
      transHeaders: {
        en: ["Singular", "Plural"],
        ar: ["المفرد", "الجمع"],
        fa: ["مفرد", "جمع"],
        ti: ["ነጠላ", "ብዙሕ"],
        uk: ["Однина", "Множина"],
      },
      transRows: {
        en: [["je → me / I", "nous → we (me + others)"], ["tu → a friend, family", "vous → several people"], ["il → a man", "ils → several men"], ["elle → a woman", "elles → several women"]],
        ar: [["je → أنا", "nous → نحن (أنا + الآخرون)"], ["tu → صديق، عائلة", "vous → عدة أشخاص"], ["il → رجل", "ils → عدة رجال"], ["elle → امرأة", "elles → عدة نساء"]],
        fa: [["je → من", "nous → ما (من + دیگران)"], ["tu → دوست، خانواده", "vous → چند نفر"], ["il → مرد", "ils → چند مرد"], ["elle → زن", "elles → چند زن"]],
        ti: [["je → ኣነ", "nous → ንሕና (ኣነ + ካልኦት)"], ["tu → ዓርኪ፡ ስድራ", "vous → ሓያሎ ሰባት"], ["il → ሓደ ወዲ", "ils → ሓያሎ ኣወዳት"], ["elle → ሓንቲ ጓል", "elles → ሓያሎ ኣዋልድ"]],
        uk: [["je → я", "nous → ми (я + інші)"], ["tu → друг, сім'я", "vous → кілька осіб"], ["il → чоловік", "ils → кілька чоловіків"], ["elle → жінка", "elles → кілька жінок"]],
      },
    },
    {
      type: "heading",
      text: "Cas spéciaux",
      trans: { en: "Special cases", ar: "حالات خاصة", fa: "موارد ویژه", ti: "ፍሉያት ጉዳያት", uk: "Особливі випадки" },
    },
    {
      type: "highlight",
      label: "ON",
      items: [
        "On utilise « on » pour représenter une ou plusieurs personnes (= nous).",
        "Il est très utilisé à l'oral familier.",
        "Le verbe est toujours au singulier.",
        "On va au magasin. → Nous allons au magasin.",
        "En Suisse, on parle français. → Les gens parlent français.",
      ],
      transLabel: { en: "ON", ar: "ON", fa: "ON", ti: "ON", uk: "ON" },
      transItems: {
        en: ["«On» represents one or more people (= we).", "Very common in spoken French.", "The verb is always singular.", "On va au magasin. → We go to the shop.", "En Suisse, on parle français. → People speak French in Switzerland."],
        ar: ["«on» يعبّر عن شخص واحد أو أكثر (= نحن).", "شائع جداً في الفرنسية المحكية.", "الفعل دائماً في صيغة المفرد.", "On va au magasin. → نحن نذهب إلى المتجر.", "En Suisse, on parle français. → الناس يتكلمون الفرنسية في سويسرا."],
        fa: ["«on» یک یا چند نفر را نشان می‌دهد (= ما).", "در فرانسه محاوره‌ای بسیار رایج است.", "فعل همیشه مفرد است.", "On va au magasin. → ما به فروشگاه می‌رویم.", "En Suisse, on parle français. → مردم در سوئیس فرانسوی صحبت می‌کنند."],
        ti: ["«on» ሓደ ወይ ሓያሎ ሰባት ይወክል (= ንሕና).", "ኣብ ኣፋዊ ፈረንሳዊ ብዙሕ ይጥቀሙሉ.", "ግሲ ኩሉ ሳዕ ነጠላ እዩ.", "On va au magasin. → ናብ ዕዳጋ ንኸይድ.", "En Suisse, on parle français. → ሰባት ኣብ ስዊዘርላንድ ፈረንሳይ ይዛረቡ."],
        uk: ["«on» представляє одну або кілька осіб (= ми).", "Дуже поширене в розмовній французькій.", "Дієслово завжди в однині.", "On va au magasin. → Ми йдемо до магазину.", "En Suisse, on parle français. → У Швейцарії люди говорять французькою."],
      },
    },
    {
      type: "highlight",
      label: "VOUS",
      items: [
        "On utilise « vous » quand on ne connaît pas la personne ou que le statut est différent (élève–professeur).",
        "On appelle cela la forme de politesse.",
        "Madame, vous allez bien ?",
      ],
      transLabel: { en: "VOUS", ar: "VOUS", fa: "VOUS", ti: "VOUS", uk: "VOUS" },
      transItems: {
        en: ["«Vous» is used when you don't know the person or the status is different (student–teacher).", "This is called the polite/formal form.", "Madame, vous allez bien ? → Madam, are you well?"],
        ar: ["«vous» يُستخدم عندما لا تعرف الشخص أو عندما يختلف المستوى الاجتماعي (طالب–أستاذ).", "يُسمى هذا الصيغة المؤدّبة.", "Madame, vous allez bien ? → سيدتي، هل أنتِ بخير؟"],
        fa: ["از «vous» استفاده می‌شود وقتی شخص را نمی‌شناسید یا جایگاه متفاوت است (دانش‌آموز–استاد).", "این را فرم رسمی/مودبانه می‌نامند.", "Madame, vous allez bien ? → خانم، حالتان خوب است؟"],
        ti: ["«vous» ከምዘይትፈልጥዎ ሰብ ወይ ደረጃ ዝተፈለየ ምስ ዝኸውን ትጥቀሙሉ (ተምሃራይ–መምህር).", "እዚ ናይ ክብሪ ቅጺ ይብሃሃሉ.", "Madame, vous allez bien ? → ወይዘሮ፣ ጽቡቕ ዶ ሎኹም?"],
        uk: ["«vous» використовується, коли ви не знаєте людину або є різниця в статусі (учень–вчитель).", "Це називається форма ввічливості.", "Madame, vous allez bien ? → Пані, ви добре?"],
      },
    },
    {
      type: "highlight",
      label: "ILS",
      items: [
        "On utilise « ils » quand il y a un groupe mixte de femmes et d'hommes.",
        "Même s'il y a beaucoup de femmes et un seul homme → ils.",
        "Ali ♂ et Alona ♀ → ils",
      ],
      transLabel: { en: "ILS", ar: "ILS", fa: "ILS", ti: "ILS", uk: "ILS" },
      transItems: {
        en: ["«Ils» is used for a mixed group of women and men.", "Even if there are many women and only one man → ils.", "Ali ♂ and Alona ♀ → ils"],
        ar: ["«ils» يُستخدم للمجموعة المختلطة من الرجال والنساء.", "حتى لو كان هناك نساء كثيرات ورجل واحد → ils.", "علي ♂ وألونا ♀ → ils"],
        fa: ["از «ils» برای گروه مختلط زنان و مردان استفاده می‌شود.", "حتی اگر زنان زیاد و یک مرد باشد → ils.", "علی ♂ و آلونا ♀ → ils"],
        ti: ["«ils» ንዝሓወሰ ጉጅለ ደቂ ኣንስትዮን ደቂ ተባዕትዮን ትጥቀሙሉ.", "ብዙሕ ኣዋልድ ሓደ ወዲ እኳ ተዀኑ → ils.", "ዓሊ ♂ ን ኣሎና ♀ → ils"],
        uk: ["«Ils» використовується для змішаної групи жінок і чоловіків.", "Навіть якщо багато жінок і лише один чоловік → ils.", "Алі ♂ і Алона ♀ → ils"],
      },
    },
    {
      type: "heading",
      text: "Comment choisir ?",
      trans: { en: "How to choose?", ar: "كيف تختار؟", fa: "چطور انتخاب کنیم؟", ti: "ብኸመይ ትምረጽ?", uk: "Як вибрати?" },
    },
    {
      type: "grid",
      headers: ["Nom", "Pronom"],
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
      items: [
        "Posez la question « Qui fait l'action ? », c'est le sujet de la phrase.",
      ],
      transLabel: { en: "Tip", ar: "نصيحة", fa: "نکته", ti: "ሓጋዚ ሓሳብ", uk: "Порада" },
      transItems: {
        en: ["Ask «Who is doing the action?» — that is the subject of the sentence."],
        ar: ["اسأل «من يقوم بالفعل؟» — هذا هو فاعل الجملة."],
        fa: ["بپرسید «چه کسی کار را انجام می‌دهد؟» — این فاعل جمله است."],
        ti: ["ሕቶ «መን ምዃኑ ዝገብሮ?» ሕተት — እዚ እዩ ርእሲ ሓሳቡ."],
        uk: ["Запитайте «Хто виконує дію?» — це підмет речення."],
      },
    },
    {
      type: "grid",
      headers: ["Phrase", "Question", "Sujet", "Résultat"],
      rows: [
        ["Alona ♀ mange.", "Qui mange ?", "Alona", "Elle mange."],
        ["Ali ♂ et Alona ♀ jouent.", "Qui jouent ?", "Ali et Alona", "Ils jouent."],
      ],
      transHeaders: {
        en: ["Sentence", "Question", "Subject", "Result"],
        ar: ["الجملة", "السؤال", "الفاعل", "النتيجة"],
        fa: ["جمله", "سؤال", "فاعل", "نتیجه"],
        ti: ["ሓሳብ", "ሕቶ", "ርእሲ", "ውጺኢት"],
        uk: ["Речення", "Питання", "Підмет", "Результат"],
      },
      transRows: {
        en: [["Alona ♀ eats.", "Who eats?", "Alona", "She eats."], ["Ali ♂ and Alona ♀ play.", "Who plays?", "Ali and Alona", "They play."]],
        ar: [["ألونا ♀ تأكل.", "من يأكل؟", "ألونا", "هي تأكل."], ["علي ♂ وألونا ♀ يلعبان.", "من يلعب؟", "علي وألونا", "هم يلعبون."]],
        fa: [["آلونا ♀ می‌خورد.", "چه کسی می‌خورد؟", "آلونا", "او می‌خورد."], ["علی ♂ و آلونا ♀ بازی می‌کنند.", "چه کسی بازی می‌کند؟", "علی و آلونا", "آن‌ها بازی می‌کنند."]],
        ti: [["ኣሎና ♀ ትበልዕ.", "መን ይበልዕ?", "ኣሎና", "ንሳ ትበልዕ."], ["ዓሊ ♂ ን ኣሎና ♀ ይጻወቱ.", "መን ይጻወት?", "ዓሊ ን ኣሎና", "ንሳቶም ይጻወቱ."]],
        uk: [["Алона ♀ їсть.", "Хто їсть?", "Алона", "Вона їсть."], ["Алі ♂ і Алона ♀ грають.", "Хто грає?", "Алі і Алона", "Вони грають."]],
      },
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Exercice 1 — Choisis le bon pronom",
      instruction: "Sélectionne le pronom correct pour chaque personne ou groupe.",
      items: [],
      poolSize: 6,
      pool: [
        { sentence: "Samira ♀ →", choices: ["il", "elle", "ils"], correctIdx: 1 },
        { sentence: "Viktor ♂ →", choices: ["il", "elle", "elles"], correctIdx: 0 },
        { sentence: "Ahmed ♂ et moi →", choices: ["nous", "vous", "ils"], correctIdx: 0 },
        { sentence: "Mariam ♀ et Youssef ♂ →", choices: ["elles", "ils", "nous"], correctIdx: 1 },
        { sentence: "Toi et Olena ♀ →", choices: ["vous", "nous", "ils"], correctIdx: 0 },
        { sentence: "Le chat ♂ →", choices: ["il", "elle", "ils"], correctIdx: 0 },
        { sentence: "Ma mère ♀ →", choices: ["il", "elle", "elles"], correctIdx: 1 },
        { sentence: "Mon père ♂ →", choices: ["il", "elle", "ils"], correctIdx: 0 },
        { sentence: "Iryna ♀ →", choices: ["il", "elle", "elles"], correctIdx: 1 },
        { sentence: "Hamid ♂ →", choices: ["il", "elle", "ils"], correctIdx: 0 },
        { sentence: "Lemlem ♀ et Selam ♀ →", choices: ["elles", "ils", "nous"], correctIdx: 0 },
        { sentence: "Alona ♀ et Dmytro ♂ →", choices: ["elles", "ils", "vous"], correctIdx: 1 },
        { sentence: "Hassan ♂ et Omar ♂ →", choices: ["ils", "elles", "nous"], correctIdx: 0 },
        { sentence: "Ma sœur ♀ →", choices: ["il", "elle", "ils"], correctIdx: 1 },
        { sentence: "Mon frère ♂ →", choices: ["il", "elle", "elles"], correctIdx: 0 },
        { sentence: "Tesfay ♂ →", choices: ["il", "elle", "elles"], correctIdx: 0 },
        { sentence: "Nour ♀ →", choices: ["il", "elle", "ils"], correctIdx: 1 },
        { sentence: "Zara ♀ et Parisa ♀ →", choices: ["ils", "elles", "nous"], correctIdx: 1 },
        { sentence: "Mon professeur ♂ →", choices: ["il", "elle", "ils"], correctIdx: 0 },
        { sentence: "Natalia ♀ et Ivan ♂ →", choices: ["elles", "ils", "nous"], correctIdx: 1 },
        { sentence: "Le chien ♂ →", choices: ["il", "elle", "ils"], correctIdx: 0 },
        { sentence: "La voiture ♀ →", choices: ["il", "elle", "ils"], correctIdx: 1 },
        { sentence: "Rasoul ♂ →", choices: ["il", "elle", "ils"], correctIdx: 0 },
        { sentence: "Maryam ♀ →", choices: ["il", "elle", "elles"], correctIdx: 1 },
        { sentence: "Oleksiy ♂ et moi →", choices: ["nous", "vous", "ils"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Exercice 2 — Remplace par le bon pronom",
      instruction: "Écris le pronom qui remplace le nom souligné.",
      items: [],
      poolSize: 6,
      pool: [
        { sentence: "___ parle français. (Fatima ♀)", hint: "Fatima ♀ = ?", answer: "Elle" },
        { sentence: "___ jouent. (Hamed ♂ et Omar ♂)", hint: "groupe masculin", answer: "Ils" },
        { sentence: "___ habite à Genève. (Iryna ♀)", hint: "Iryna ♀ = ?", answer: "Elle" },
        { sentence: "___ étudient. (Zahra ♀ et Olena ♀)", hint: "groupe féminin", answer: "Elles" },
        { sentence: "___ travaillent. (Ahmed ♂ et Alona ♀)", hint: "groupe mixte", answer: "Ils" },
        { sentence: "___ mange. (le chat ♂)", hint: "le chat ♂ = ?", answer: "Il" },
        { sentence: "___ dort. (ma mère ♀)", hint: "ma mère ♀ = ?", answer: "Elle" },
        { sentence: "___ court. (mon père ♂)", hint: "mon père ♂ = ?", answer: "Il" },
        { sentence: "___ apprennent le français. (Hamid ♂ et Parisa ♀)", hint: "groupe mixte", answer: "Ils" },
        { sentence: "___ chante. (Selam ♀)", hint: "Selam ♀ = ?", answer: "Elle" },
        { sentence: "___ travaille. (Tesfay ♂)", hint: "Tesfay ♂ = ?", answer: "Il" },
        { sentence: "___ sont à l'école. (Lemlem ♀ et Miriam ♀)", hint: "groupe féminin", answer: "Elles" },
        { sentence: "___ part demain. (Viktor ♂)", hint: "Viktor ♂ = ?", answer: "Il" },
        { sentence: "___ parle doucement. (Nour ♀)", hint: "Nour ♀ = ?", answer: "Elle" },
        { sentence: "___ jouent ensemble. (Dmytro ♂ et Oleksiy ♂)", hint: "groupe masculin", answer: "Ils" },
        { sentence: "___ mange. (ma sœur ♀)", hint: "ma sœur ♀ = ?", answer: "Elle" },
        { sentence: "___ rit. (mon frère ♂)", hint: "mon frère ♂ = ?", answer: "Il" },
        { sentence: "___ lisent. (Natalia ♀ et Iryna ♀)", hint: "groupe féminin", answer: "Elles" },
        { sentence: "___ travaille à Genève. (Ibrahim ♂)", hint: "Ibrahim ♂ = ?", answer: "Il" },
        { sentence: "___ apprend vite. (Mariam ♀)", hint: "Mariam ♀ = ?", answer: "Elle" },
        { sentence: "___ joue. (le chien ♂)", hint: "le chien ♂ = ?", answer: "Il" },
        { sentence: "___ roule vite. (la voiture ♀)", hint: "la voiture ♀ = ?", answer: "Elle" },
        { sentence: "___ étudient. (Rasoul ♂ et Zara ♀)", hint: "groupe mixte", answer: "Ils" },
      ],
    },
    {
      type: "qcm",
      title: "Exercice 3 — Mettre au pluriel",
      instruction: "Choisis le pronom pluriel qui correspond.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "il → au pluriel :", choices: ["ils", "elles", "nous"], correctIdx: 0 },
        { sentence: "elle → au pluriel :", choices: ["elles", "ils", "nous"], correctIdx: 0 },
        { sentence: "je → au pluriel :", choices: ["nous", "vous", "ils"], correctIdx: 0 },
        { sentence: "tu → au pluriel :", choices: ["vous", "nous", "ils"], correctIdx: 0 },
        { sentence: "Il parle. → ___ parlent.", choices: ["Ils", "Elles", "Nous"], correctIdx: 0 },
        { sentence: "Elle chante. → ___ chantent.", choices: ["Elles", "Ils", "Nous"], correctIdx: 0 },
        { sentence: "Je mange. → ___ mangeons.", choices: ["Nous", "Vous", "Ils"], correctIdx: 0 },
        { sentence: "Tu parles. → ___ parlez.", choices: ["Vous", "Nous", "Ils"], correctIdx: 0 },
        { sentence: "Il travaille. → ___ travaillent.", choices: ["Ils", "Elles", "Vous"], correctIdx: 0 },
        { sentence: "Elle étudie. → ___ étudient.", choices: ["Elles", "Ils", "Nous"], correctIdx: 0 },
        { sentence: "on (= nous) → au pluriel :", choices: ["nous", "vous", "ils"], correctIdx: 0 },
      ],
    },
    {
      type: "qcm",
      title: "Exercice 4 — Mettre au singulier",
      instruction: "Choisis le pronom singulier qui correspond.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "ils → au singulier :", choices: ["il", "elle", "on"], correctIdx: 0 },
        { sentence: "elles → au singulier :", choices: ["elle", "il", "on"], correctIdx: 0 },
        { sentence: "nous → au singulier :", choices: ["je", "tu", "on"], correctIdx: 0 },
        { sentence: "vous → au singulier :", choices: ["tu", "je", "il"], correctIdx: 0 },
        { sentence: "Ils parlent. → ___ parle.", choices: ["Il", "Elle", "On"], correctIdx: 0 },
        { sentence: "Elles étudient. → ___ étudie.", choices: ["Elle", "Il", "On"], correctIdx: 0 },
        { sentence: "Nous mangeons. → ___ mange.", choices: ["Je", "Tu", "Il"], correctIdx: 0 },
        { sentence: "Vous parlez. → ___ parles.", choices: ["Tu", "Je", "Il"], correctIdx: 0 },
        { sentence: "Ils travaillent. → ___ travaille.", choices: ["Il", "Elle", "On"], correctIdx: 0 },
        { sentence: "Elles chantent. → ___ chante.", choices: ["Elle", "Il", "On"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Exercice 5 — Réécris avec le pronom",
      instruction: "Remplace le nom par le bon pronom et réécris uniquement le pronom.",
      items: [],
      poolSize: 6,
      pool: [
        { sentence: "Fatima ♀ mange. → ___ mange.", hint: "Fatima ♀ = ?", answer: "Elle" },
        { sentence: "Ali ♂ travaille. → ___ travaille.", hint: "Ali ♂ = ?", answer: "Il" },
        { sentence: "Iryna ♀ et Olena ♀ étudient. → ___ étudient.", hint: "groupe féminin", answer: "Elles" },
        { sentence: "Hamid ♂ et Maryam ♀ parlent. → ___ parlent.", hint: "groupe mixte", answer: "Ils" },
        { sentence: "Le chat ♂ dort. → ___ dort.", hint: "le chat ♂ = ?", answer: "Il" },
        { sentence: "Ma mère ♀ cuisine. → ___ cuisine.", hint: "ma mère ♀ = ?", answer: "Elle" },
        { sentence: "Tesfay ♂ et Berhe ♂ jouent. → ___ jouent.", hint: "groupe masculin", answer: "Ils" },
        { sentence: "Selam ♀ étudie. → ___ étudie.", hint: "Selam ♀ = ?", answer: "Elle" },
        { sentence: "Viktor ♂ parle. → ___ parle.", hint: "Viktor ♂ = ?", answer: "Il" },
        { sentence: "Alona ♀ et Natalia ♀ chantent. → ___ chantent.", hint: "groupe féminin", answer: "Elles" },
        { sentence: "Ahmed ♂ et Hamid ♂ arrivent. → ___ arrivent.", hint: "groupe masculin", answer: "Ils" },
        { sentence: "La voiture ♀ roule. → ___ roule.", hint: "la voiture ♀ = ?", answer: "Elle" },
        { sentence: "Mon père ♂ travaille. → ___ travaille.", hint: "mon père ♂ = ?", answer: "Il" },
        { sentence: "Rasoul ♂ et Zara ♀ arrivent. → ___ arrivent.", hint: "groupe mixte", answer: "Ils" },
        { sentence: "Nour ♀ et Mariam ♀ parlent. → ___ parlent.", hint: "groupe féminin", answer: "Elles" },
      ],
    },
  ],
};

const a1ConjL01: ConjLesson = {
  slug: "a1-conj-l01",
  code: "C.2",
  level: "A1",
  title: "Les verbes être et avoir",
  theory: [
    { type: "heading", text: "Le verbe ÊTRE" },
    {
      type: "table",
      tables: [
        {
          verb: "être",
          rows: [
            { pronoun: "je", form: "suis" },
            { pronoun: "tu", form: "es" },
            { pronoun: "il / elle / on", form: "est" },
            { pronoun: "nous", form: "sommes" },
            { pronoun: "vous", form: "êtes" },
            { pronoun: "ils / elles", form: "sont" },
          ],
        },
      ],
    },
    {
      type: "vocab",
      title: "Utiliser ÊTRE pour",
      items: ["l'identité", "la nationalité", "la profession", "la description", "la situation"],
    },
    {
      type: "plain_list",
      label: "Exemples",
      items: [
        "Je suis Ali. (identité)",
        "Elle est française. (nationalité)",
        "Nous sommes étudiants. (profession)",
        "Il est grand. (description)",
      ],
    },
    { type: "heading", text: "Le verbe AVOIR" },
    {
      type: "table",
      tables: [
        {
          verb: "avoir",
          rows: [
            { pronoun: "j'", form: "ai" },
            { pronoun: "tu", form: "as" },
            { pronoun: "il / elle / on", form: "a" },
            { pronoun: "nous", form: "avons" },
            { pronoun: "vous", form: "avez" },
            { pronoun: "ils / elles", form: "ont" },
          ],
        },
      ],
    },
    {
      type: "vocab",
      title: "Utiliser AVOIR pour",
      items: ["la possession", "l'âge", "les sensations", "les expressions"],
    },
    {
      type: "plain_list",
      label: "Exemples",
      items: [
        "J'ai un téléphone. (possession)",
        "Elle a 25 ans. (âge)",
        "Nous avons faim. (sensation)",
        "Il a de la chance. (expression)",
      ],
    },
    { type: "heading", text: "Expressions avec AVOIR" },
    {
      type: "grid",
      headers: ["Expression", "Signification"],
      rows: [
        ["avoir faim", "vouloir manger"],
        ["avoir soif", "vouloir boire"],
        ["avoir froid", "ressentir le froid"],
        ["avoir chaud", "ressentir la chaleur"],
        ["avoir peur", "être effrayé(e)"],
        ["avoir mal", "ressentir une douleur"],
        ["avoir raison", "être correct(e)"],
        ["avoir tort", "se tromper"],
      ],
    },
    { type: "heading", text: "Forme négative" },
    {
      type: "plain_list",
      items: [
        "ÊTRE : je ne suis pas, tu n'es pas, il n'est pas…",
        "AVOIR : je n'ai pas, tu n'as pas, il n'a pas…",
      ],
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Exercice 1 — Être ou avoir ?",
      instruction: "Choisissez le bon verbe pour compléter la phrase.",
      items: [],
      poolSize: 6,
      pool: [
        { sentence: "Fatima ♀ ___ 23 ans.", choices: ["est", "a", "ont"], correctIdx: 1 },
        { sentence: "Je ___ étudiant.", choices: ["suis", "ai", "est"], correctIdx: 0 },
        { sentence: "Nous ___ faim.", choices: ["sommes", "avons", "sont"], correctIdx: 1 },
        { sentence: "Viktor ♂ ___ ukrainien.", choices: ["est", "a", "ont"], correctIdx: 0 },
        { sentence: "Ils ___ un appartement à Genève.", choices: ["sont", "ont", "avez"], correctIdx: 1 },
        { sentence: "Tu ___ peur ?", choices: ["es", "as", "est"], correctIdx: 1 },
        { sentence: "Elle ___ professeure.", choices: ["est", "a", "ont"], correctIdx: 0 },
        { sentence: "Vous ___ soif ?", choices: ["êtes", "avez", "ont"], correctIdx: 1 },
        { sentence: "On ___ fatigués.", choices: ["est", "a", "ont"], correctIdx: 0 },
        { sentence: "Ils ___ afghans.", choices: ["ont", "sont", "avons"], correctIdx: 1 },
        { sentence: "J'___ froid.", choices: ["suis", "ai", "est"], correctIdx: 1 },
        { sentence: "Hamid ♂ ___ un vélo.", choices: ["est", "a", "ont"], correctIdx: 1 },
        { sentence: "Nous ___ érythréens.", choices: ["avons", "sommes", "sont"], correctIdx: 1 },
        { sentence: "Tu ___ raison.", choices: ["es", "as", "est"], correctIdx: 1 },
        { sentence: "Elle ___ chaud.", choices: ["est", "a", "ont"], correctIdx: 1 },
      ],
    },
    {
      type: "fill",
      title: "Exercice 2 — Conjugue le verbe",
      instruction: "Écris la bonne forme du verbe indiqué entre parenthèses.",
      items: [],
      poolSize: 6,
      pool: [
        { sentence: "Ali ♂ ___ ingénieur. (être)", hint: "il → est", answer: "est" },
        { sentence: "Nous ___ à Genève. (être)", hint: "nous → sommes", answer: "sommes" },
        { sentence: "J'___ 30 ans. (avoir)", hint: "j' → ai", answer: "ai" },
        { sentence: "Elles ___ faim. (avoir)", hint: "elles → ont", answer: "ont" },
        { sentence: "Tu ___ érythréen ? (être)", hint: "tu → es", answer: "es" },
        { sentence: "Vous ___ un rendez-vous ? (avoir)", hint: "vous → avez", answer: "avez" },
        { sentence: "On ___ froid. (avoir)", hint: "on → a", answer: "a" },
        { sentence: "Iryna ♀ ___ ukrainienne. (être)", hint: "elle → est", answer: "est" },
        { sentence: "Ils ___ tort. (avoir)", hint: "ils → ont", answer: "ont" },
        { sentence: "Je ___ étudiant(e). (être)", hint: "je → suis", answer: "suis" },
        { sentence: "Hamid ♂ ___ 28 ans. (avoir)", hint: "il → a", answer: "a" },
        { sentence: "Nous ___ peur. (avoir)", hint: "nous → avons", answer: "avons" },
        { sentence: "Viktor ♂ ___ médecin. (être)", hint: "il → est", answer: "est" },
        { sentence: "Tu ___ soif ? (avoir)", hint: "tu → as", answer: "as" },
        { sentence: "Elles ___ afghanes. (être)", hint: "elles → sont", answer: "sont" },
      ],
    },
    {
      type: "match",
      title: "Exercice 3 — Associe l'expression",
      instruction: "Relie chaque expression AVOIR à sa signification.",
      pairs: [
        { left: "avoir faim", right: "vouloir manger" },
        { left: "avoir soif", right: "vouloir boire" },
        { left: "avoir peur", right: "être effrayé" },
        { left: "avoir froid", right: "ressentir le froid" },
        { left: "avoir raison", right: "être correct" },
        { left: "avoir tort", right: "se tromper" },
      ],
    },
  ],
};

const a1ConjL07: ConjLesson = {
  slug: "a1-conj-l07",
  code: "C.3",
  level: "A1",
  title: "Les verbes en -er au présent",
  theory: [
    { type: "heading", text: "Conjugaison des verbes en -er" },
    {
      type: "table",
      tables: [
        {
          verb: "parler",
          rows: [
            { pronoun: "je", form: "parle" },
            { pronoun: "tu", form: "parles" },
            { pronoun: "il / elle / on", form: "parle" },
            { pronoun: "nous", form: "parlons" },
            { pronoun: "vous", form: "parlez" },
            { pronoun: "ils / elles", form: "parlent" },
          ],
        },
      ],
    },
    {
      type: "rule",
      text: "Formation : infinitif sans -r + terminaisons : -e, -es, -e, -ons, -ez, -ent.",
      examples: [
        { correct: "parler → je parle, tu parles, il parle…" },
        { correct: "aimer → j'aime, tu aimes, elle aime…" },
      ],
    },
    {
      type: "note",
      text: "Élision : je + voyelle → j' (j'aime, j'étudie, j'habite).",
    },
    {
      type: "vocab",
      title: "Verbes en -er courants",
      items: ["aimer", "habiter", "travailler", "étudier", "parler", "manger", "regarder", "écouter"],
    },
    {
      type: "rule",
      text: "Forme négative : ne … pas autour du verbe.",
      examples: [
        { correct: "je ne parle pas", wrong: "je parle pas" },
        { correct: "je n'aime pas", wrong: "je aime pas" },
      ],
    },
  ],
  exercises: [
    {
      type: "match",
      title: "Associer le pronom et la forme",
      instruction: "Reliez chaque pronom sujet à la bonne forme de « parler ».",
      pairs: [
        { left: "Je", right: "parle" },
        { left: "Tu", right: "parles" },
        { left: "Il / Elle", right: "parle" },
        { left: "Nous", right: "parlons" },
        { left: "Vous", right: "parlez" },
        { left: "Ils / Elles", right: "parlent" },
      ],
    },
    {
      type: "fill",
      title: "Compléter les phrases",
      instruction: "Conjuguez le verbe entre parenthèses au présent.",
      items: [
        { sentence: "Hiro ___ anglais ?", hint: "parler", answer: "parle" },
        { sentence: "Je ___ à Paris.", hint: "habiter", answer: "habite" },
        { sentence: "Nous ___ le français.", hint: "étudier", answer: "étudions" },
        { sentence: "Tu ___ le samedi ?", hint: "travailler", answer: "travailles" },
        { sentence: "Elles ___ la musique.", hint: "aimer", answer: "aiment" },
        { sentence: "Vous ___ quoi ?", hint: "étudier", answer: "étudiez" },
      ],
    },
    {
      type: "qcm",
      title: "Choisir la bonne forme",
      instruction: "Sélectionnez la forme correcte du verbe.",
      items: [
        {
          sentence: "Charlotte ___ le matin.",
          choices: ["travaille", "travailles", "travaillent", "travaillons"],
          correctIdx: 0,
        },
        {
          sentence: "Nous ___ à Paris.",
          choices: ["habitons", "habitez", "habites", "habite"],
          correctIdx: 0,
        },
        {
          sentence: "Ils ___ le français.",
          choices: ["parlent", "parle", "parlez", "parlons"],
          correctIdx: 0,
        },
        {
          sentence: "Tu ___ l'anglais ?",
          choices: ["parles", "parlons", "parle", "parlez"],
          correctIdx: 0,
        },
      ],
    },
  ],
};

const a1ConjL08: ConjLesson = {
  slug: "a1-conj-l08",
  code: "C.4",
  level: "A1",
  title: "Les verbes aller et venir",
  theory: [
    { type: "heading", text: "Aller et venir au présent" },
    {
      type: "table",
      tables: [
        {
          verb: "aller",
          rows: [
            { pronoun: "je", form: "vais" },
            { pronoun: "tu", form: "vas" },
            { pronoun: "il / elle", form: "va" },
            { pronoun: "nous", form: "allons" },
            { pronoun: "vous", form: "allez" },
            { pronoun: "ils / elles", form: "vont" },
          ],
        },
        {
          verb: "venir",
          rows: [
            { pronoun: "je", form: "viens" },
            { pronoun: "tu", form: "viens" },
            { pronoun: "il / elle", form: "vient" },
            { pronoun: "nous", form: "venons" },
            { pronoun: "vous", form: "venez" },
            { pronoun: "ils / elles", form: "viennent" },
          ],
        },
      ],
    },
    {
      type: "rule",
      text: "aller + à / au / aux / en (destination) ; venir + de (origine)",
      examples: [
        { correct: "Je vais au cinéma." },
        { correct: "Je viens de France." },
      ],
    },
  ],
  exercises: [
    {
      type: "match",
      title: "Aller — associer pronom et forme",
      instruction: "Reliez chaque pronom sujet à la bonne forme de « aller ».",
      pairs: [
        { left: "Je", right: "vais" },
        { left: "Tu", right: "vas" },
        { left: "Il", right: "va" },
        { left: "Nous", right: "allons" },
        { left: "Vous", right: "allez" },
        { left: "Ils", right: "vont" },
      ],
    },
    {
      type: "fill",
      title: "Compléter avec aller ou venir",
      instruction: "Conjuguez le verbe entre parenthèses au présent.",
      items: [
        { sentence: "Je ___ au cinéma ce soir.", hint: "aller", answer: "vais" },
        { sentence: "Tu ___ d'où ?", hint: "venir", answer: "viens" },
        { sentence: "Nous ___ en France cet été.", hint: "aller", answer: "allons" },
        { sentence: "Ils ___ de Paris.", hint: "venir", answer: "viennent" },
        { sentence: "Vous ___ au marché ?", hint: "aller", answer: "allez" },
      ],
    },
    {
      type: "qcm",
      title: "Choisir la bonne forme",
      instruction: "Sélectionnez la forme correcte du verbe.",
      items: [
        {
          sentence: "Elle ___ au travail en bus.",
          choices: ["va", "vais", "vont", "allez"],
          correctIdx: 0,
        },
        {
          sentence: "Ils ___ de Lyon.",
          choices: ["viennent", "vient", "venons", "venez"],
          correctIdx: 0,
        },
        {
          sentence: "Tu ___ à la bibliothèque ?",
          choices: ["vas", "vais", "allez", "vont"],
          correctIdx: 0,
        },
      ],
    },
  ],
};

const a1ConjL09: ConjLesson = {
  slug: "a1-conj-l09",
  code: "C.5",
  level: "A1",
  title: "Les verbes pronominaux",
  theory: [
    { type: "heading", text: "Les verbes pronominaux au présent" },
    {
      type: "table",
      tables: [
        {
          verb: "s'appeler",
          rows: [
            { pronoun: "je", form: "m'appelle" },
            { pronoun: "tu", form: "t'appelles" },
            { pronoun: "il / elle", form: "s'appelle" },
            { pronoun: "nous", form: "nous appelons" },
            { pronoun: "vous", form: "vous appelez" },
            { pronoun: "ils / elles", form: "s'appellent" },
          ],
        },
        {
          verb: "se lever",
          rows: [
            { pronoun: "je", form: "me lève" },
            { pronoun: "tu", form: "te lèves" },
            { pronoun: "il / elle", form: "se lève" },
            { pronoun: "nous", form: "nous levons" },
            { pronoun: "vous", form: "vous levez" },
            { pronoun: "ils / elles", form: "se lèvent" },
          ],
        },
      ],
    },
    {
      type: "rule",
      text: "Les verbes pronominaux ont un pronom réfléchi (me / te / se / nous / vous / se) AVANT le verbe.",
    },
    {
      type: "note",
      text: "me / te / se → m' / t' / s' devant une voyelle.",
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Choisir la bonne forme",
      instruction: "Sélectionnez la forme pronominale correcte.",
      items: [
        {
          sentence: "Je ___ à 7 heures.",
          choices: ["me lève", "te lèves", "se lève", "nous levons"],
          correctIdx: 0,
        },
        {
          sentence: "Il ___ Paul.",
          choices: ["s'appelle", "m'appelle", "t'appelles", "vous appelez"],
          correctIdx: 0,
        },
        {
          sentence: "Nous ___ tôt le matin.",
          choices: ["nous levons", "se lèvent", "vous levez", "me lève"],
          correctIdx: 0,
        },
      ],
    },
    {
      type: "fill",
      title: "Compléter avec le verbe pronominal",
      instruction: "Conjuguez le verbe pronominal au présent.",
      items: [
        { sentence: "Je ___ Marie.", hint: "s'appeler", answer: "m'appelle" },
        { sentence: "Il ___ à 22h.", hint: "se coucher", answer: "se couche" },
        { sentence: "Tu ___ à quelle heure ?", hint: "se lever", answer: "te lèves" },
        { sentence: "Nous ___ vite le matin.", hint: "s'habiller", answer: "nous habillons" },
        { sentence: "Elles ___ ensemble.", hint: "se préparer", answer: "se préparent" },
      ],
    },
  ],
};

const a1ConjL12: ConjLesson = {
  slug: "a1-conj-l12",
  code: "C.6",
  level: "A1",
  title: "Les verbes de mouvement",
  theory: [
    { type: "heading", text: "Verbes de mouvement au présent" },
    {
      type: "table",
      tables: [
        {
          verb: "partir",
          rows: [
            { pronoun: "je", form: "pars" },
            { pronoun: "tu", form: "pars" },
            { pronoun: "il / elle", form: "part" },
            { pronoun: "nous", form: "partons" },
            { pronoun: "vous", form: "partez" },
            { pronoun: "ils / elles", form: "partent" },
          ],
        },
        {
          verb: "sortir",
          rows: [
            { pronoun: "je", form: "sors" },
            { pronoun: "tu", form: "sors" },
            { pronoun: "il / elle", form: "sort" },
            { pronoun: "nous", form: "sortons" },
            { pronoun: "vous", form: "sortez" },
            { pronoun: "ils / elles", form: "sortent" },
          ],
        },
      ],
    },
    {
      type: "vocab",
      title: "Autres verbes de mouvement",
      items: ["arriver", "entrer", "monter", "descendre"],
    },
    {
      type: "rule",
      text: "Ces verbes se conjuguent en 2 bases : radical court (je / tu / il) + radical long (nous / vous / ils).",
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Choisir la bonne forme",
      instruction: "Sélectionnez la forme correcte du verbe.",
      items: [
        {
          sentence: "Elle ___ du bureau à 18h.",
          choices: ["sort", "sortir", "sortons", "sortez"],
          correctIdx: 0,
        },
        {
          sentence: "Nous ___ de Paris demain.",
          choices: ["partons", "partez", "partent", "pars"],
          correctIdx: 0,
        },
        {
          sentence: "Le train ___ à 8h30.",
          choices: ["arrive", "arriver", "arrivons", "arrivez"],
          correctIdx: 0,
        },
      ],
    },
    {
      type: "fill",
      title: "Compléter les phrases",
      instruction: "Conjuguez le verbe entre parenthèses au présent.",
      items: [
        { sentence: "Je ___ en vacances demain.", hint: "partir", answer: "pars" },
        { sentence: "Tu ___ ce soir ?", hint: "sortir", answer: "sors" },
        { sentence: "Ils ___ à l'aéroport à 10h.", hint: "arriver", answer: "arrivent" },
        { sentence: "Nous ___ dans le train.", hint: "monter", answer: "montons" },
      ],
    },
  ],
};

const a1ConjL15: ConjLesson = {
  slug: "a1-conj-l15",
  code: "C.7",
  level: "A1",
  title: "Vouloir, pouvoir, devoir",
  theory: [
    { type: "heading", text: "Les trois verbes modaux" },
    {
      type: "table",
      tables: [
        {
          verb: "vouloir",
          rows: [
            { pronoun: "je", form: "veux" },
            { pronoun: "tu", form: "veux" },
            { pronoun: "il / elle", form: "veut" },
            { pronoun: "nous", form: "voulons" },
            { pronoun: "vous", form: "voulez" },
            { pronoun: "ils / elles", form: "veulent" },
          ],
        },
        {
          verb: "pouvoir",
          rows: [
            { pronoun: "je", form: "peux" },
            { pronoun: "tu", form: "peux" },
            { pronoun: "il / elle", form: "peut" },
            { pronoun: "nous", form: "pouvons" },
            { pronoun: "vous", form: "pouvez" },
            { pronoun: "ils / elles", form: "peuvent" },
          ],
        },
        {
          verb: "devoir",
          rows: [
            { pronoun: "je", form: "dois" },
            { pronoun: "tu", form: "dois" },
            { pronoun: "il / elle", form: "doit" },
            { pronoun: "nous", form: "devons" },
            { pronoun: "vous", form: "devez" },
            { pronoun: "ils / elles", form: "doivent" },
          ],
        },
      ],
    },
    {
      type: "rule",
      text: "Ces verbes sont suivis d'un infinitif.",
      examples: [
        { correct: "Je veux manger." },
        { correct: "Tu peux partir." },
        { correct: "Elle doit étudier." },
      ],
    },
  ],
  exercises: [
    {
      type: "match",
      title: "Associer pronom et forme",
      instruction: "Reliez chaque pronom à la bonne forme de « vouloir ».",
      pairs: [
        { left: "je", right: "veux" },
        { left: "tu", right: "peux" },
        { left: "il", right: "doit" },
        { left: "nous", right: "voulons" },
        { left: "vous", right: "pouvez" },
        { left: "ils", right: "doivent" },
      ],
    },
    {
      type: "qcm",
      title: "Choisir la bonne forme modale",
      instruction: "Sélectionnez la forme correcte du verbe.",
      items: [
        {
          sentence: "Je ___ partir maintenant.",
          choices: ["dois", "doit", "devons", "devez"],
          correctIdx: 0,
        },
        {
          sentence: "Tu ___ m'aider ?",
          choices: ["peux", "peut", "peuvent", "pouvons"],
          correctIdx: 0,
        },
        {
          sentence: "Ils ___ travailler ce weekend.",
          choices: ["veulent", "veut", "voulons", "voulez"],
          correctIdx: 0,
        },
      ],
    },
    {
      type: "fill",
      title: "Compléter avec le bon modal",
      instruction: "Conjuguez le verbe entre parenthèses au présent.",
      items: [
        { sentence: "Je ___ venir demain.", hint: "pouvoir", answer: "peux" },
        { sentence: "Elle ___ partir maintenant.", hint: "devoir", answer: "doit" },
        { sentence: "Nous ___ apprendre le français.", hint: "vouloir", answer: "voulons" },
        { sentence: "Vous ___ m'aider ?", hint: "pouvoir", answer: "pouvez" },
      ],
    },
  ],
};

const a1ConjL20: ConjLesson = {
  slug: "a1-conj-l20",
  code: "C.8",
  level: "A1",
  title: "Le futur proche",
  theory: [
    { type: "heading", text: "Le futur proche : aller + infinitif" },
    {
      type: "rule",
      text: "Structure : aller (conjugué au présent) + infinitif",
      examples: [
        { correct: "Je vais manger." },
        { correct: "Tu vas partir." },
        { correct: "Il va pleuvoir." },
        { correct: "Nous allons étudier." },
      ],
    },
    {
      type: "rule",
      text: "Forme négative : ne … pas encadre « aller ».",
      examples: [
        { correct: "Je ne vais pas manger.", wrong: "Je vais ne pas manger." },
        { correct: "Elle ne va pas venir.", wrong: "Elle va ne pas venir." },
      ],
    },
    {
      type: "note",
      text: "Le futur proche exprime un événement imminent ou prévu avec certitude.",
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Choisir la bonne forme d'aller",
      instruction: "Sélectionnez la forme correcte du verbe « aller ».",
      items: [
        {
          sentence: "Il ___ partir en vacances.",
          choices: ["va", "vais", "vont", "allez"],
          correctIdx: 0,
        },
        {
          sentence: "Nous ___ manger au restaurant ce soir.",
          choices: ["allons", "allez", "vais", "va"],
          correctIdx: 0,
        },
        {
          sentence: "Elle ne ___ pas venir à la fête.",
          choices: ["va", "vais", "vont", "allons"],
          correctIdx: 0,
        },
      ],
    },
    {
      type: "fill",
      title: "Former le futur proche",
      instruction: "Construisez le futur proche avec les éléments donnés.",
      items: [
        { sentence: "Je ___ demain.", hint: "aller + étudier", answer: "vais étudier" },
        { sentence: "Tu ___ à Paris ?", hint: "aller + partir", answer: "vas partir" },
        { sentence: "Nous ___ un film.", hint: "aller + regarder", answer: "allons regarder" },
        { sentence: "Ils ___ bientôt.", hint: "aller + arriver", answer: "vont arriver" },
      ],
    },
  ],
};

const a1ConjL27: ConjLesson = {
  slug: "a1-conj-l27",
  code: "C.9",
  level: "A1",
  title: "Pronominaux réfléchis et réciproques",
  theory: [
    { type: "heading", text: "Réfléchis et réciproques" },
    {
      type: "rule",
      text: "Réfléchis : le sujet est aussi l'objet de l'action.",
      examples: [{ correct: "Je me lave. (I wash myself)" }],
    },
    {
      type: "table",
      tables: [
        {
          verb: "se laver",
          rows: [
            { pronoun: "je", form: "me lave" },
            { pronoun: "tu", form: "te laves" },
            { pronoun: "il / elle", form: "se lave" },
            { pronoun: "nous", form: "nous lavons" },
            { pronoun: "vous", form: "vous lavez" },
            { pronoun: "ils / elles", form: "se lavent" },
          ],
        },
      ],
    },
    {
      type: "rule",
      text: "Réciproques : les sujets agissent l'un sur l'autre.",
      examples: [{ correct: "Nous nous parlons. (we talk to each other)" }],
    },
    {
      type: "vocab",
      title: "Verbes réciproques courants",
      items: ["se regarder", "se parler", "s'écrire", "se téléphoner"],
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Choisir la bonne forme pronominale",
      instruction: "Sélectionnez la forme correcte.",
      items: [
        {
          sentence: "Le matin, je ___ les dents.",
          choices: ["me brosse", "te brosses", "se brosse", "nous brossons"],
          correctIdx: 0,
        },
        {
          sentence: "Ils ___ tous les jours.",
          choices: ["se téléphonent", "me téléphone", "te téléphones", "vous téléphonez"],
          correctIdx: 0,
        },
      ],
    },
    {
      type: "fill",
      title: "Compléter avec le pronominal",
      instruction: "Conjuguez le verbe pronominal au présent.",
      items: [
        { sentence: "Elle ___ avant de sortir.", hint: "se maquiller", answer: "se maquille" },
        { sentence: "Nous ___ en français.", hint: "se parler", answer: "nous parlons" },
        { sentence: "Tu ___ ?", hint: "se dépêcher", answer: "te dépêches" },
        { sentence: "Ils ___ dans les yeux.", hint: "se regarder", answer: "se regardent" },
      ],
    },
  ],
};

const a1ConjL28: ConjLesson = {
  slug: "a1-conj-l28",
  code: "C.10",
  level: "A1",
  title: "Passé récent et présent continu",
  theory: [
    { type: "heading", text: "Passé récent : venir de + infinitif" },
    {
      type: "table",
      tables: [
        {
          verb: "venir de (passé récent)",
          rows: [
            { pronoun: "je", form: "viens de" },
            { pronoun: "tu", form: "viens de" },
            { pronoun: "il / elle", form: "vient de" },
            { pronoun: "nous", form: "venons de" },
            { pronoun: "vous", form: "venez de" },
            { pronoun: "ils / elles", form: "viennent de" },
          ],
        },
      ],
    },
    {
      type: "rule",
      text: "Passé récent = action qui vient de se passer.",
      examples: [{ correct: "Je viens de manger. (I just ate.)" }],
    },
    { type: "heading", text: "Présent continu : être en train de + infinitif" },
    {
      type: "rule",
      text: "Présent continu = action en cours au moment où l'on parle.",
      examples: [{ correct: "Je suis en train de travailler. (I'm working right now.)" }],
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Passé récent ou présent continu ?",
      instruction: "Sélectionnez la bonne option.",
      items: [
        {
          sentence: "Je ___ de finir mon travail.",
          choices: ["viens", "vais", "suis", "fais"],
          correctIdx: 0,
        },
        {
          sentence: "Il est ___ lire un livre.",
          choices: ["en train de", "en train à", "au train de", "en cours à"],
          correctIdx: 0,
        },
      ],
    },
    {
      type: "fill",
      title: "Construire les formes",
      instruction: "Complétez avec la structure indiquée.",
      items: [
        { sentence: "Je ___.", hint: "venir de + manger", answer: "viens de manger" },
        { sentence: "Elle ___.", hint: "être en train de + travailler", answer: "est en train de travailler" },
        { sentence: "Nous ___.", hint: "venir de + arriver", answer: "venons d'arriver" },
        { sentence: "Ils ___.", hint: "être en train de + discuter", answer: "sont en train de discuter" },
      ],
    },
  ],
};

const a1ConjL29: ConjLesson = {
  slug: "a1-conj-l29",
  code: "C.11",
  level: "A1",
  title: "Passé composé avec avoir",
  theory: [
    { type: "heading", text: "Le passé composé avec avoir" },
    {
      type: "rule",
      text: "Structure : avoir (présent) + participe passé",
    },
    {
      type: "table",
      tables: [
        {
          verb: "avoir (auxiliaire)",
          rows: [
            { pronoun: "j'", form: "ai" },
            { pronoun: "tu", form: "as" },
            { pronoun: "il / elle", form: "a" },
            { pronoun: "nous", form: "avons" },
            { pronoun: "vous", form: "avez" },
            { pronoun: "ils / elles", form: "ont" },
          ],
        },
      ],
    },
    {
      type: "rule",
      text: "Participes réguliers : -er → -é (parler → parlé) ; -ir → -i (finir → fini)",
    },
    {
      type: "vocab",
      title: "Participes irréguliers",
      items: [
        "faire → fait",
        "dire → dit",
        "prendre → pris",
        "voir → vu",
        "avoir → eu",
        "être → été",
      ],
    },
    {
      type: "rule",
      text: "Forme négative : ne … pas encadre l'auxiliaire.",
      examples: [
        { correct: "Je n'ai pas parlé.", wrong: "Je n'ai parlé pas." },
      ],
    },
  ],
  exercises: [
    {
      type: "match",
      title: "Infinitif → participe passé",
      instruction: "Reliez chaque infinitif à son participe passé.",
      pairs: [
        { left: "parler", right: "parlé" },
        { left: "finir", right: "fini" },
        { left: "faire", right: "fait" },
        { left: "voir", right: "vu" },
        { left: "prendre", right: "pris" },
        { left: "dire", right: "dit" },
      ],
    },
    {
      type: "qcm",
      title: "Choisir la bonne forme",
      instruction: "Sélectionnez la forme correcte du passé composé.",
      items: [
        {
          sentence: "Hier, j'___ un film.",
          choices: ["ai regardé", "ai regarder", "avoir regardé", "a regardé"],
          correctIdx: 0,
        },
        {
          sentence: "Nous ___ notre déjeuner.",
          choices: ["avons fini", "ont fini", "avez fini", "ai fini"],
          correctIdx: 0,
        },
        {
          sentence: "Elle ___ ses clés !",
          choices: ["a perdu", "ai perdu", "ont perdu", "avons perdu"],
          correctIdx: 0,
        },
      ],
    },
    {
      type: "fill",
      title: "Former le passé composé",
      instruction: "Conjuguez le verbe au passé composé.",
      items: [
        { sentence: "J'___ à ma mère hier.", hint: "téléphoner", answer: "ai téléphoné" },
        { sentence: "Tu ___ tes devoirs ?", hint: "finir", answer: "as fini" },
        { sentence: "Il ___ le bus ce matin.", hint: "prendre", answer: "a pris" },
      ],
    },
  ],
};

const a1ConjL30: ConjLesson = {
  slug: "a1-conj-l30",
  code: "C.12",
  level: "A1",
  title: "Passé composé avec être",
  theory: [
    { type: "heading", text: "Le passé composé avec être" },
    {
      type: "vocab",
      title: "17 verbes qui se conjuguent avec être",
      items: [
        "aller", "venir", "arriver", "partir", "entrer", "sortir",
        "monter", "descendre", "naître", "mourir", "rester", "tomber",
        "retourner", "passer", "rentrer", "revenir", "devenir",
      ],
    },
    {
      type: "note",
      text: "Moyen mnémotechnique : DR & MRS VANDERTRAMP",
    },
    {
      type: "rule",
      text: "Le participe passé s'accorde avec le SUJET : -e pour féminin, -s pour pluriel.",
      examples: [
        { correct: "Elle est allée." },
        { correct: "Ils sont partis." },
        { correct: "Elles sont venues." },
      ],
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Choisir la bonne forme avec être",
      instruction: "Sélectionnez la forme correcte du passé composé.",
      items: [
        {
          sentence: "Marie ___ à Paris hier.",
          choices: ["est allée", "a allé", "est allé", "ont allé"],
          correctIdx: 0,
        },
        {
          sentence: "Les enfants ___ à 18h.",
          choices: ["sont rentrés", "ont rentrés", "est rentré", "sont rentré"],
          correctIdx: 0,
        },
        {
          sentence: "Paul et Claire ___ du cinéma à 22h.",
          choices: ["sont sortis", "ont sorti", "est sorti", "sont sortie"],
          correctIdx: 0,
        },
      ],
    },
    {
      type: "fill",
      title: "Former le passé composé avec être",
      instruction: "Conjuguez le verbe au passé composé avec être. Accordez le participe.",
      items: [
        { sentence: "Elle ___ en voyage.", hint: "partir", answer: "est partie" },
        { sentence: "Ils ___ hier soir.", hint: "arriver", answer: "sont arrivés" },
        { sentence: "Nous ___ en train.", hint: "venir", answer: "sommes venus" },
        { sentence: "Tu ___ en quelle année ?", hint: "naître", answer: "es né(e)" },
      ],
    },
  ],
};

// ── A2 Lessons ────────────────────────────────────────────────────────────────

const a2ConjL01: ConjLesson = {
  slug: "a2-conj-l01",
  code: "C.13",
  level: "A2",
  title: "Les verbes en -er — révision et particularités",
  theory: [
    { type: "heading", text: "Particularités des verbes en -er" },
    {
      type: "rule",
      text: "Verbes en -ger : ajouter un -e devant -ons pour conserver le son [ʒ].",
      examples: [
        { correct: "nous mangeons", wrong: "nous mangons" },
      ],
    },
    {
      type: "rule",
      text: "Verbes en -cer : remplacer le c par ç devant -ons.",
      examples: [
        { correct: "nous commençons", wrong: "nous commencons" },
      ],
    },
    {
      type: "table",
      tables: [
        {
          verb: "préférer (deux bases)",
          rows: [
            { pronoun: "je", form: "préfère" },
            { pronoun: "tu", form: "préfères" },
            { pronoun: "il / elle", form: "préfère" },
            { pronoun: "nous", form: "préférons" },
            { pronoun: "vous", form: "préférez" },
            { pronoun: "ils / elles", form: "préfèrent" },
          ],
        },
        {
          verb: "appeler (deux bases)",
          rows: [
            { pronoun: "j'", form: "appelle" },
            { pronoun: "tu", form: "appelles" },
            { pronoun: "il / elle", form: "appelle" },
            { pronoun: "nous", form: "appelons" },
            { pronoun: "vous", form: "appelez" },
            { pronoun: "ils / elles", form: "appellent" },
          ],
        },
        {
          verb: "acheter (deux bases)",
          rows: [
            { pronoun: "j'", form: "achète" },
            { pronoun: "tu", form: "achètes" },
            { pronoun: "il / elle", form: "achète" },
            { pronoun: "nous", form: "achetons" },
            { pronoun: "vous", form: "achetez" },
            { pronoun: "ils / elles", form: "achètent" },
          ],
        },
      ],
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Choisir la bonne forme",
      instruction: "Sélectionnez la forme correcte du verbe.",
      items: [
        {
          sentence: "Nous ___ de la pizza.",
          choices: ["mangeons", "mangons", "mangez", "mangent"],
          correctIdx: 0,
        },
        {
          sentence: "Je ___ aller en vacances en été.",
          choices: ["préfère", "préférons", "préférez", "préfèrent"],
          correctIdx: 0,
        },
        {
          sentence: "Ils ___ le français au lycée.",
          choices: ["commencent", "commençons", "commencer", "commencez"],
          correctIdx: 0,
        },
      ],
    },
    {
      type: "fill",
      title: "Compléter les phrases",
      instruction: "Conjuguez le verbe entre parenthèses au présent.",
      items: [
        { sentence: "Nous ___ le cours à 9h.", hint: "commencer", answer: "commençons" },
        { sentence: "J'___ ma mère tous les soirs.", hint: "appeler", answer: "appelle" },
        { sentence: "Tu ___ quoi au marché ?", hint: "acheter", answer: "achètes" },
        { sentence: "Nous ___ ensemble ce midi ?", hint: "manger", answer: "mangeons" },
      ],
    },
  ],
};

const a2ConjL02: ConjLesson = {
  slug: "a2-conj-l02",
  code: "C.14",
  level: "A2",
  title: "Les verbes en -ir (2e et 3e groupes)",
  theory: [
    { type: "heading", text: "Verbes en -ir : deux groupes distincts" },
    {
      type: "table",
      tables: [
        {
          verb: "finir (2e groupe)",
          rows: [
            { pronoun: "je", form: "finis" },
            { pronoun: "tu", form: "finis" },
            { pronoun: "il / elle", form: "finit" },
            { pronoun: "nous", form: "finissons" },
            { pronoun: "vous", form: "finissez" },
            { pronoun: "ils / elles", form: "finissent" },
          ],
        },
        {
          verb: "partir (3e groupe)",
          rows: [
            { pronoun: "je", form: "pars" },
            { pronoun: "tu", form: "pars" },
            { pronoun: "il / elle", form: "part" },
            { pronoun: "nous", form: "partons" },
            { pronoun: "vous", form: "partez" },
            { pronoun: "ils / elles", form: "partent" },
          ],
        },
        {
          verb: "ouvrir (3e groupe)",
          rows: [
            { pronoun: "j'", form: "ouvre" },
            { pronoun: "tu", form: "ouvres" },
            { pronoun: "il / elle", form: "ouvre" },
            { pronoun: "nous", form: "ouvrons" },
            { pronoun: "vous", form: "ouvrez" },
            { pronoun: "ils / elles", form: "ouvrent" },
          ],
        },
      ],
    },
    {
      type: "rule",
      text: "2e groupe : ajouter -iss- avant les terminaisons nous / vous / ils.",
      examples: [
        { correct: "nous finissons", wrong: "nous finons" },
      ],
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Choisir la bonne forme",
      instruction: "Sélectionnez la forme correcte du verbe.",
      items: [
        {
          sentence: "Nous ___ notre travail à midi.",
          choices: ["finissons", "finons", "finissez", "finons"],
          correctIdx: 0,
        },
        {
          sentence: "Le magasin ___ à 9h.",
          choices: ["ouvre", "ouvrir", "ouvrons", "ouvert"],
          correctIdx: 0,
        },
        {
          sentence: "Tu ___ quand ?",
          choices: ["pars", "partir", "partz", "part"],
          correctIdx: 0,
        },
      ],
    },
    {
      type: "fill",
      title: "Compléter les phrases",
      instruction: "Conjuguez le verbe entre parenthèses au présent.",
      items: [
        { sentence: "Je ___ le menu végétarien.", hint: "choisir", answer: "choisis" },
        { sentence: "Ils ___ en vacances demain.", hint: "partir", answer: "partent" },
        { sentence: "Elle ___ la fenêtre.", hint: "ouvrir", answer: "ouvre" },
        { sentence: "Nous ___ le projet vendredi.", hint: "finir", answer: "finissons" },
      ],
    },
  ],
};

const a2ConjL03: ConjLesson = {
  slug: "a2-conj-l03",
  code: "C.15",
  level: "A2",
  title: "Les verbes irréguliers courants",
  theory: [
    { type: "heading", text: "Verbes irréguliers courants au présent" },
    {
      type: "table",
      tables: [
        {
          verb: "faire",
          rows: [
            { pronoun: "je", form: "fais" },
            { pronoun: "tu", form: "fais" },
            { pronoun: "il / elle", form: "fait" },
            { pronoun: "nous", form: "faisons" },
            { pronoun: "vous", form: "faites" },
            { pronoun: "ils / elles", form: "font" },
          ],
        },
        {
          verb: "prendre",
          rows: [
            { pronoun: "je", form: "prends" },
            { pronoun: "tu", form: "prends" },
            { pronoun: "il / elle", form: "prend" },
            { pronoun: "nous", form: "prenons" },
            { pronoun: "vous", form: "prenez" },
            { pronoun: "ils / elles", form: "prennent" },
          ],
        },
        {
          verb: "connaître",
          rows: [
            { pronoun: "je", form: "connais" },
            { pronoun: "tu", form: "connais" },
            { pronoun: "il / elle", form: "connaît" },
            { pronoun: "nous", form: "connaissons" },
            { pronoun: "vous", form: "connaissez" },
            { pronoun: "ils / elles", form: "connaissent" },
          ],
        },
      ],
    },
    {
      type: "note",
      text: "boire, croire, voir suivent des patterns similaires à prendre.",
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Choisir la bonne forme",
      instruction: "Sélectionnez la forme correcte du verbe.",
      items: [
        {
          sentence: "Qu'est-ce que tu ___ ?",
          choices: ["fais", "fait", "faites", "faisons"],
          correctIdx: 0,
        },
        {
          sentence: "Nous ___ le bus tous les matins.",
          choices: ["prenons", "prend", "prennent", "prenez"],
          correctIdx: 0,
        },
        {
          sentence: "Il ___ bien Paris.",
          choices: ["connaît", "connait", "connais", "connaissons"],
          correctIdx: 0,
        },
      ],
    },
    {
      type: "fill",
      title: "Compléter les phrases",
      instruction: "Conjuguez le verbe entre parenthèses au présent.",
      items: [
        { sentence: "Je ___ du sport le matin.", hint: "faire", answer: "fais" },
        { sentence: "Ils ___ le train.", hint: "prendre", answer: "prennent" },
        { sentence: "Tu ___ ce quartier ?", hint: "connaître", answer: "connais" },
        { sentence: "Nous ___ la cuisine ensemble.", hint: "faire", answer: "faisons" },
      ],
    },
  ],
};

const a2ConjL04: ConjLesson = {
  slug: "a2-conj-l04",
  code: "C.16",
  level: "A2",
  title: "Le conditionnel de politesse",
  theory: [
    { type: "heading", text: "Le conditionnel présent" },
    {
      type: "rule",
      text: "Formation : infinitif + terminaisons de l'imparfait (-ais, -ais, -ait, -ions, -iez, -aient)",
    },
    {
      type: "vocab",
      title: "Formes conditionnelles clés",
      items: [
        "vouloir → voudrais / voudrais / voudrait / voudrions / voudriez / voudraient",
        "pouvoir → pourrais / pourrais / pourrait / pourrions / pourriez / pourraient",
        "aimer → aimerais / aimerais / aimerait / aimerions / aimeriez / aimeraient",
        "devoir → devrais / devrais / devrait / devrions / devriez / devraient",
      ],
    },
    {
      type: "rule",
      text: "Usages du conditionnel de politesse",
      examples: [
        { correct: "Je voudrais un café. (demande polie)" },
        { correct: "Tu devrais étudier plus. (conseil)" },
      ],
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Choisir la bonne forme conditionnelle",
      instruction: "Sélectionnez la forme correcte du conditionnel.",
      items: [
        {
          sentence: "Je ___ un verre d'eau, s'il vous plaît.",
          choices: ["voudrais", "veux", "voulons", "voulez"],
          correctIdx: 0,
        },
        {
          sentence: "Vous ___ m'aider ?",
          choices: ["pourriez", "pouvez", "peuvent", "pourrions"],
          correctIdx: 0,
        },
        {
          sentence: "Tu ___ faire plus de sport.",
          choices: ["devrais", "dois", "devez", "devrait"],
          correctIdx: 0,
        },
      ],
    },
    {
      type: "fill",
      title: "Former le conditionnel",
      instruction: "Conjuguez le verbe entre parenthèses au conditionnel présent.",
      items: [
        { sentence: "Je ___ visiter Paris un jour.", hint: "aimer", answer: "aimerais" },
        { sentence: "Nous ___ se retrouver demain ?", hint: "pouvoir", answer: "pourrions" },
        { sentence: "Il ___ partir plus tôt.", hint: "devoir", answer: "devrait" },
      ],
    },
  ],
};

const a2ConjL05: ConjLesson = {
  slug: "a2-conj-l05",
  code: "C.17",
  level: "A2",
  title: "L'impératif",
  theory: [
    { type: "heading", text: "L'impératif présent" },
    {
      type: "rule",
      text: "Formation : présent de l'indicatif sans pronom sujet (formes tu / nous / vous).",
    },
    {
      type: "vocab",
      title: "Terminaisons régulières",
      items: [
        "tu : parle (pas de -s pour les -er !), finis, pars",
        "nous : parlons, finissons, partons",
        "vous : parlez, finissez, partez",
      ],
    },
    {
      type: "vocab",
      title: "Impératifs irréguliers",
      items: [
        "être → sois / soyons / soyez",
        "avoir → aie / ayons / ayez",
        "aller → va / allons / allez",
        "savoir → sache / sachons / sachez",
      ],
    },
    {
      type: "rule",
      text: "Forme négative : Ne … pas encadre le verbe.",
      examples: [
        { correct: "Ne parle pas !", wrong: "Parle ne pas !" },
        { correct: "Ne mangez pas !", wrong: "Mangez ne pas !" },
      ],
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Choisir la bonne forme impérative",
      instruction: "Sélectionnez la forme correcte de l'impératif.",
      items: [
        {
          sentence: "___ tes devoirs avant de jouer !",
          choices: ["Fais", "Faire", "Faisons", "Faisez"],
          correctIdx: 0,
        },
        {
          sentence: "___ calme ! (tu)",
          choices: ["Sois", "Être", "Êtes", "Sommes"],
          correctIdx: 0,
        },
        {
          sentence: "___ à la maison ! (vous)",
          choices: ["Restez", "Restez-vous", "Rester", "Reste"],
          correctIdx: 0,
        },
      ],
    },
    {
      type: "fill",
      title: "Former l'impératif",
      instruction: "Donnez la forme impérative du verbe.",
      items: [
        { sentence: "___ moins vite !", hint: "parler (tu)", answer: "Parle" },
        { sentence: "___ ce travail ensemble !", hint: "finir (nous)", answer: "Finissons" },
        { sentence: "Ne ___ pas encore !", hint: "partir (vous)", answer: "partez" },
      ],
    },
  ],
};

const a2ConjL06: ConjLesson = {
  slug: "a2-conj-l06",
  code: "C.18",
  level: "A2",
  title: "Le passé composé — avoir et être",
  theory: [
    { type: "heading", text: "Révision complète du passé composé" },
    {
      type: "rule",
      text: "Auxiliaire AVOIR : la grande majorité des verbes.",
      examples: [
        { correct: "J'ai mangé." },
        { correct: "Tu as fini." },
      ],
    },
    {
      type: "rule",
      text: "Auxiliaire ÊTRE : 17 verbes de mouvement/état + TOUS les pronominaux.",
    },
    {
      type: "rule",
      text: "Double auxiliaire : sortir, rentrer, entrer, passer, monter, descendre, retourner → avoir si COD, être sinon.",
      examples: [
        { correct: "J'ai sorti la poubelle. (COD = la poubelle)" },
        { correct: "Je suis sorti. (sans COD)" },
      ],
    },
    {
      type: "rule",
      text: "Accord du participe passé avec être : accord avec le sujet.",
      examples: [
        { correct: "Elle est arrivée." },
        { correct: "Ils sont partis." },
      ],
    },
    {
      type: "note",
      text: "Pronominaux : toujours conjugués avec être. Elle s'est levée.",
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Choisir la bonne forme",
      instruction: "Sélectionnez la forme correcte du passé composé.",
      items: [
        {
          sentence: "Elle ___ à 8h.",
          choices: ["s'est levée", "s'a levée", "s'est levé", "a levée"],
          correctIdx: 0,
        },
        {
          sentence: "J'___ la porte.",
          choices: ["ai ouvert", "suis ouvert", "ai ouvrit", "a ouvert"],
          correctIdx: 0,
        },
        {
          sentence: "Ils ___ leurs clés.",
          choices: ["ont perdu", "sont perdu", "a perdu", "avons perdu"],
          correctIdx: 0,
        },
      ],
    },
    {
      type: "fill",
      title: "Former le passé composé",
      instruction: "Conjuguez le verbe au passé composé. Faites les accords nécessaires.",
      items: [
        { sentence: "Elle ___ à 6h ce matin.", hint: "se réveiller", answer: "s'est réveillée" },
        { sentence: "Nous ___ les poubelles hier.", hint: "sortir (avec COD)", answer: "avons sorti" },
        { sentence: "Il ___ au cinéma.", hint: "aller", answer: "est allé" },
      ],
    },
  ],
};

const a2ConjL07: ConjLesson = {
  slug: "a2-conj-l07",
  code: "C.19",
  level: "A2",
  title: "L'imparfait",
  theory: [
    { type: "heading", text: "L'imparfait : formation et emploi" },
    {
      type: "rule",
      text: "Formation : base « nous » au présent + terminaisons -ais / -ais / -ait / -ions / -iez / -aient",
      examples: [
        { correct: "nous parlons → je parlais, tu parlais, il parlait, nous parlions, vous parliez, ils parlaient" },
      ],
    },
    {
      type: "note",
      text: "SEUL irrégulier : être → j'étais, tu étais, il était, nous étions, vous étiez, ils étaient.",
    },
    {
      type: "rule",
      text: "Emplois de l'imparfait",
      examples: [
        { correct: "Avant, je mangeais souvent au restaurant. (habitude)" },
        { correct: "Il faisait beau quand je suis arrivé. (contexte d'une action)" },
      ],
    },
    {
      type: "rule",
      text: "PC vs imparfait : passé composé = action ponctuelle ; imparfait = habitude ou description.",
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Choisir la bonne forme",
      instruction: "Sélectionnez la forme correcte : imparfait ou passé composé ?",
      items: [
        {
          sentence: "Quand j'étais enfant, je ___ beaucoup.",
          choices: ["jouais", "ai joué", "joue", "jouerai"],
          correctIdx: 0,
        },
        {
          sentence: "Il ___ beau quand nous sommes arrivés.",
          choices: ["faisait", "a fait", "fait", "fera"],
          correctIdx: 0,
        },
        {
          sentence: "Avant, tu ___ le train pour aller au travail.",
          choices: ["prenais", "as pris", "prends", "prendras"],
          correctIdx: 0,
        },
      ],
    },
    {
      type: "fill",
      title: "Compléter à l'imparfait",
      instruction: "Conjuguez le verbe entre parenthèses à l'imparfait.",
      items: [
        {
          sentence: "Quand j'___ petit, j'___ à Lyon.",
          hint: "être / habiter",
          answer: "étais / habitais",
        },
        {
          sentence: "Il ___ tous les soirs à cette époque.",
          hint: "travailler",
          answer: "travaillait",
        },
        {
          sentence: "Nous ___ la télé tous les dimanches.",
          hint: "regarder",
          answer: "regardions",
        },
      ],
    },
  ],
};

const a2ConjL08: ConjLesson = {
  slug: "a2-conj-l08",
  code: "C.20",
  level: "A2",
  title: "Le futur simple",
  theory: [
    { type: "heading", text: "Le futur simple : formation et emploi" },
    {
      type: "rule",
      text: "Formation régulière : infinitif + terminaisons -ai / -as / -a / -ons / -ez / -ont",
    },
    {
      type: "table",
      tables: [
        {
          verb: "parler (futur simple)",
          rows: [
            { pronoun: "je", form: "parlerai" },
            { pronoun: "tu", form: "parleras" },
            { pronoun: "il / elle", form: "parlera" },
            { pronoun: "nous", form: "parlerons" },
            { pronoun: "vous", form: "parlerez" },
            { pronoun: "ils / elles", form: "parleront" },
          ],
        },
      ],
    },
    {
      type: "vocab",
      title: "Bases irrégulières au futur",
      items: [
        "être → ser- : je serai",
        "avoir → aur- : j'aurai",
        "aller → ir- : j'irai",
        "faire → fer- : je ferai",
        "pouvoir → pourr- : je pourrai",
        "vouloir → voudr- : je voudrai",
        "venir → viendr- : je viendrai",
      ],
    },
    {
      type: "rule",
      text: "Usage : événement futur certain ; hypothèse si + présent → futur simple.",
      examples: [
        { correct: "Si tu étudies, tu réussiras." },
      ],
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Choisir la bonne forme",
      instruction: "Sélectionnez la forme correcte du futur simple.",
      items: [
        {
          sentence: "Demain, je ___ mes parents.",
          choices: ["appellerai", "appelais", "appelle", "appelé"],
          correctIdx: 0,
        },
        {
          sentence: "S'il fait beau, nous ___ au parc.",
          choices: ["irons", "allons", "allions", "serons allés"],
          correctIdx: 0,
        },
        {
          sentence: "Elle ___ médecin plus tard.",
          choices: ["sera", "est", "serait", "était"],
          correctIdx: 0,
        },
      ],
    },
    {
      type: "fill",
      title: "Former le futur simple",
      instruction: "Conjuguez le verbe entre parenthèses au futur simple.",
      items: [
        { sentence: "Demain, il ___ beau.", hint: "faire", answer: "fera" },
        { sentence: "Je ___ te voir ce weekend.", hint: "venir", answer: "viendrai" },
        { sentence: "Si tu travailles, tu ___.", hint: "réussir", answer: "réussiras" },
        { sentence: "Nous ___ une réunion vendredi.", hint: "avoir", answer: "aurons" },
      ],
    },
  ],
};

// ── Registry ──────────────────────────────────────────────────────────────────

const ALL_LESSONS: ConjLesson[] = [
  a1ConjL00,
  a1ConjL01,
  a1ConjL07,
  a1ConjL08,
  a1ConjL09,
  a1ConjL12,
  a1ConjL15,
  a1ConjL20,
  a1ConjL27,
  a1ConjL28,
  a1ConjL29,
  a1ConjL30,
  a2ConjL01,
  a2ConjL02,
  a2ConjL03,
  a2ConjL04,
  a2ConjL05,
  a2ConjL06,
  a2ConjL07,
  a2ConjL08,
];

export function getConjLesson(slug: string): ConjLesson | undefined {
  return ALL_LESSONS.find((l) => l.slug === slug);
}

export function getAllConjLessons(): ConjLesson[] {
  return ALL_LESSONS;
}
