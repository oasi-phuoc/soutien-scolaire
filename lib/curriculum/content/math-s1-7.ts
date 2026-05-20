import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_S1_7_LESSON: MathSubmoduleLesson = {
  submoduleId: "S1-7",
  submoduleCode: "S1.7",
  theory: {
    title: {
      fr: "Lecture critique des statistiques",
      en: "Critical Reading of Statistics",
      ar: "القراءة النقدية للإحصاءات",
      fa: "خواندن انتقادی آمار",
      ti: "ሕሩይ ምንባብ ስታቲስቲክስ",
      uk: "Критичне читання статистики",
    },
    paragraphs: {
      fr: [
        "Les statistiques peuvent être utilisées pour informer honnêtement ou pour induire en erreur. Savoir lire un graphique de manière critique est une compétence essentielle.",
        "Pièges fréquents dans les graphiques : axe vertical qui ne commence pas à 0 (exagère les différences), échelle non uniforme, titre trompeur, échantillon non représentatif.",
        "Exemple : un graphique montrant les ventes passe de 100 à 110. Si l'axe Y commence à 95, la barre paraît doubler — alors que la hausse réelle n'est que de 10 %.",
        "Questions à se poser : Qui a collecté les données ? Quelle est la taille de l'échantillon ? Les données sont-elles récentes ? Y a-t-il un biais de sélection ? Les axes sont-ils bien étiquetés ?",
        "Corrélation ≠ causalité : deux variables peuvent évoluer ensemble sans que l'une cause l'autre. Exemple : le nombre de pirates a diminué et la température mondiale a augmenté, mais il n'y a pas de lien causal.",
      ],
      en: [
        "Statistics can be used to inform honestly or to mislead. Reading a graph critically is an essential skill.",
        "Common traps in graphs: vertical axis not starting at 0 (exaggerates differences), non-uniform scale, misleading title, non-representative sample.",
        "Example: a sales graph goes from 100 to 110. If the Y-axis starts at 95, the bar appears to double — when the real increase is only 10%.",
        "Questions to ask: Who collected the data? What is the sample size? Are the data recent? Is there selection bias? Are the axes well labelled?",
        "Correlation ≠ causation: two variables may move together without one causing the other.",
      ],
      ar: [
        "يمكن استخدام الإحصاءات للإعلام الصادق أو للتضليل. القراءة النقدية للرسوم البيانية مهارة أساسية.",
        "المصائد الشائعة: المحور الرأسي لا يبدأ من الصفر، مقياس غير منتظم، عنوان مضلل، عينة غير ممثلة.",
        "مثال: رسم يظهر مبيعات من 100 إلى 110. لو بدأ المحور Y من 95 تبدو الزيادة مضاعفة بينما هي 10% فقط.",
        "أسئلة للطرح: من جمع البيانات؟ ما حجم العينة؟ هل البيانات حديثة؟ هل هناك تحيز في الاختيار؟",
        "الترابط ≠ السببية: متغيران قد يتحركان معًا دون أن يسبب أحدهما الآخر.",
      ],
      fa: [
        "آمار می‌تواند برای اطلاع‌رسانی صادقانه یا گمراه‌کننده استفاده شود. خواندن انتقادی نمودار یک مهارت اساسی است.",
        "دام‌های رایج در نمودارها: محور عمودی که از صفر شروع نمی‌شود، مقیاس غیریکنواخت، عنوان گمراه‌کننده، نمونه غیرنماینده.",
        "مثال: نمودار فروش از ۱۰۰ به ۱۱۰ می‌رود. اگر محور Y از ۹۵ شروع شود، میله دوبرابر به نظر می‌رسد — در حالی که افزایش واقعی فقط ۱۰٪ است.",
        "سؤال‌هایی که باید بپرسی: چه کسی داده‌ها را جمع‌آوری کرده؟ حجم نمونه چیست؟ آیا داده‌ها به‌روز هستند؟ آیا سوگیری انتخاب وجود دارد؟",
        "همبستگی ≠ علیت: دو متغیر ممکن است با هم حرکت کنند بدون اینکه یکی علت دیگری باشد.",
      ],
      ti: [
        "ስታቲስቲክስ ብቕኑዕነት ንምሕባር ወይ ንምድናጋር ክጥቀሙሉ ይካኣሉ። ቀለጠፍቲ ብሕሩይ ምንባብ ዋና ክእለት እዩ።",
        "ናይ ቀለጠፍቲ ሓደጋታት: ቀጸላ ቤዛ ካብ ዜሮ ዘይጅምር፣ ዘይሰናኸለ ሚዛን፣ ዘስሕቅ ኣርእስቲ፣ ዘይምልካዊ ናሙና።",
        "ኣብነት: ቀለጠፍቲ ሽያጥ ካብ 100 ናብ 110 ይኸይድ። ምሰ ቤዛ ካብ 95 ዝጅምር፣ ሸተ ዝዓበየ ይርኤ - ዝሓቀቀ ዕቤት ግን 10% ጥራይ።",
        "ዝሓቱ ሕቶታት: መን ዳታ ኣኪቡ? ናሙና ክንደይ? ዳታ ሓድሽ ዶ? ምምርጻ ዝምክ ዶ?",
        "ርክብ ≠ ምኽንያት: ክልተ ተለዋዋጢ ምስ ሓድሕዶም ክዝውተሩ ይኽእሉ ሓደ ናይ ካልኣይ ምኽንያት ዘይኮኑ።",
      ],
      uk: [
        "Статистику можна використовувати для чесного інформування або для введення в оману. Критичне читання графіків — важлива навичка.",
        "Поширені пастки: вертикальна вісь не починається з нуля (перебільшує відмінності), нерівномірний масштаб, оманлива назва, нерепрезентативна вибірка.",
        "Приклад: графік продажів від 100 до 110. Якщо вісь Y починається з 95, стовпець здається вдвічі вищим, хоча реальне зростання лише 10%.",
        "Запитання для аналізу: Хто зібрав дані? Який розмір вибірки? Чи актуальні дані? Чи є упередженість вибірки?",
        "Кореляція ≠ причинно-наслідковий зв'язок: дві змінні можуть змінюватися разом без того, щоб одна спричиняла іншу.",
      ],
    },
  },
  exercises: [
    {
      id: "s1-7-e1",
      promptFr: "Un graphique montre l'axe Y commençant à 90 au lieu de 0. Quel est l'effet sur la perception des différences entre les barres ?",
      type: "short_text",
      acceptable: ["elles paraissent plus grandes", "exagérées", "amplifiées", "les différences semblent plus grandes"],
    },
    {
      id: "s1-7-e2",
      promptFr: "Un sondage est réalisé auprès de 10 personnes dans une ville de 100 000 habitants. Ce résultat est-il fiable ? Réponds par oui ou non.",
      type: "short_text",
      acceptable: ["non", "Non", "NON"],
    },
    {
      id: "s1-7-e3",
      promptFr: "On observe que les ventes de glaces et les noyades augmentent ensemble en été. Peut-on dire que les glaces causent les noyades ?",
      type: "short_text",
      acceptable: ["non", "Non", "NON"],
    },
    {
      id: "s1-7-e4",
      promptFr: "Complète la phrase : 'Deux variables qui évoluent ensemble ont une ___, mais pas nécessairement une relation de cause à effet.'",
      type: "short_text",
      acceptable: ["corrélation", "une corrélation"],
    },
    {
      id: "s1-7-e5",
      promptFr: "Un titre de graphique dit 'Les ventes ont explosé !' mais l'augmentation est de 2 %. Ce graphique est-il objectif ? Réponds par oui ou non.",
      type: "short_text",
      acceptable: ["non", "Non", "NON"],
    },
  ],
};
