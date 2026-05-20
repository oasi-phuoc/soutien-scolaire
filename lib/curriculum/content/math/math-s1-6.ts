import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_S1_6_LESSON: MathSubmoduleLesson = {
  submoduleId: "S1-6",
  submoduleCode: "S1.6",
  theory: {
    title: {
      fr: "Diagrammes statistiques",
      en: "Statistical Diagrams",
      ar: "الرسوم البيانية الإحصائية",
      fa: "نمودارهای آماری",
      ti: "ናይ ስታቲስቲክስ ቀለጠፍቲ",
      uk: "Статистичні діаграми",
    },
    paragraphs: {
      fr: [
        "Un diagramme représente visuellement des données statistiques. Le choix du type de diagramme dépend de la nature des données et du message à transmettre.",
        "Diagramme en bâtons (barres) : pour des données discrètes ou qualitatives. L'axe vertical montre les effectifs ou fréquences, l'axe horizontal les modalités. Les barres ne se touchent pas si les données sont qualitatives.",
        "Diagramme en secteurs (camembert) : représente des parties d'un tout. Chaque secteur correspond à une modalité ; son angle = (effectif / total) × 360°.",
        "Histogramme : pour des données continues ou regroupées en classes. Les barres sont contiguës et les aires sont proportionnelles aux fréquences.",
        "Courbe des effectifs cumulés : utile pour lire la médiane et les quartiles graphiquement.",
      ],
      en: [
        "A diagram visually represents statistical data. The chart type chosen depends on the nature of the data and the message to convey.",
        "Bar chart: for discrete or qualitative data. The vertical axis shows frequencies, the horizontal axis shows categories. Bars do not touch for qualitative data.",
        "Pie chart: represents parts of a whole. Each slice corresponds to a category; its angle = (frequency / total) × 360°.",
        "Histogram: for continuous data or data grouped into classes. Bars are adjacent and areas are proportional to frequencies.",
        "Cumulative frequency curve: useful for reading the median and quartiles graphically.",
      ],
      ar: [
        "الرسم البياني يمثل البيانات الإحصائية بصريًا. يعتمد اختيار النوع على طبيعة البيانات والرسالة.",
        "المخطط العمودي (الأشرطة): للبيانات المتقطعة أو النوعية. المحور الرأسي للتكرارات، الأفقي للفئات.",
        "المخطط الدائري: يمثل أجزاء من كل. كل قطاع = (تكراره / الإجمالي) × 360°.",
        "الرسم البياني التكراري (الهستوغرام): للبيانات المستمرة أو المجمعة في فئات. الأشرطة متلاصقة.",
        "منحنى التكرار التراكمي: مفيد لقراءة الوسيط والربيعيات بيانيًا.",
      ],
      fa: [
        "نمودار داده‌های آماری را به صورت بصری نمایش می‌دهد. نوع نمودار بستگی به ماهیت داده‌ها و پیامی که می‌خواهید منتقل کنید دارد.",
        "نمودار میله‌ای: برای داده‌های گسسته یا کیفی. محور عمودی فراوانی‌ها و محور افقی طبقه‌ها را نشان می‌دهد.",
        "نمودار دایره‌ای: بخش‌هایی از یک کل را نشان می‌دهد. زاویه هر بخش = (فراوانی / کل) × ۳۶۰°.",
        "هیستوگرام: برای داده‌های پیوسته یا گروه‌بندی‌شده. میله‌ها به هم چسبیده‌اند.",
        "منحنی فراوانی تجمعی: برای خواندن میانه و چارک‌ها به صورت گرافیکی مفید است.",
      ],
      ti: [
        "ቀለጠፍቲ ናይ ስታቲስቲክስ ዳታ ብቕዲ ዕቤት ይቐርቡ። ዓይነት ቀለጠፍቲ ካብ ባህሪ ዳታን ዝሕልፍ መልእክትን ይምርኮስ።",
        "ናይ ሸተ ቀለጠፍቲ (ባሮ): ንዕሱር ወይ ዘይምቁር ዳታ። ቀጸላ ቤዛ ድርጊት ይሕብር፣ ሃርዞንታል ዓይነታት።",
        "ናይ ዑደት ቀለጠፍቲ: ክፋላት ናብ ሓደ ምሉእ ይቐርቡ። ናይ ነፍሲ ወከፍ ቀሲፍ = (ድርጊቱ / ጠቅላላ) × 360°.",
        "ሂስቶግራም: ንቐጻሊ ወይ ኣብ ዓይነታት ዝተጠርነፈ ዳታ። ሸናቆ ቀጻሊ እዮም።",
        "ናይ ዝተጠርነፈ ድርጊት ሊሂቅ: መቃዲን ርቡዕ-ምቅርራባትን ብቀለጠፍቲ ንምንባብ ጠቃሚ እዩ።",
      ],
      uk: [
        "Діаграма візуально відображає статистичні дані. Тип діаграми залежить від природи даних та повідомлення.",
        "Стовпчаста діаграма: для дискретних або якісних даних. Вертикальна вісь — частоти, горизонтальна — категорії.",
        "Кругова діаграма: відображає частки цілого. Кут кожного сектора = (частота / загальна кількість) × 360°.",
        "Гістограма: для неперервних або згрупованих даних. Стовпці суміжні.",
        "Крива накопичених частот: корисна для графічного зчитування медіани та квартилів.",
      ],
    },
  },
  exercises: [
    {
      id: "s1-6-e1",
      promptFr: "Un secteur d'un diagramme circulaire représente 25 % du total. Quel est son angle en degrés ?",
      type: "number",
      acceptable: ["90"],
    },
    {
      id: "s1-6-e2",
      promptFr: "Dans un diagramme en bâtons, la barre de la valeur 14 a une hauteur de 8. Il y a 40 élèves au total. Quelle est la fréquence relative de 14 ? (en %)",
      type: "number",
      acceptable: ["20"],
    },
    {
      id: "s1-6-e3",
      promptFr: "Quel type de diagramme utilise des barres contiguës (collées) pour représenter des données continues ?",
      type: "short_text",
      acceptable: ["histogramme", "l'histogramme"],
    },
    {
      id: "s1-6-e4",
      promptFr: "Dans un diagramme circulaire, un secteur a un angle de 72°. Quelle fraction du total représente-t-il ?",
      type: "short_text",
      acceptable: ["1/5", "72/360", "0,2", "0.2", "20%"],
    },
    {
      id: "s1-6-e5",
      promptFr: "Une série a 50 valeurs. 15 valeurs égalent 10. Quel angle (en degrés) représente la valeur 10 dans un diagramme en secteurs ?",
      type: "number",
      acceptable: ["108"],
    },
  ],
};
