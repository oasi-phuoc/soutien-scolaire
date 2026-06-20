import type { GrammarLesson } from "../../grammar-data";

export const A1_GR_L24: GrammarLesson = {
  slug: "a1-gr-l24",
  code: "RX.7",
  level: "A1",
  title: "Le comparatif et le superlatif",
  theory: [
    { type: "heading", text: "Le comparatif", trans: { en: "The comparative", ar: "صيغة المقارنة", fa: "صفت تفضیلی (مقایسه‌ای)", ti: "ናይ ምውድዳር ቅርጺ", uk: "Порівняльний ступінь" } },
    {
      type: "plain_list",
      items: [
        "Le comparatif permet de comparer deux éléments.",
        "Structure : {a}plus / aussi / moins + adjectif + que{/a}",
      ],
      transItems: {
        en: ["The comparative is used to compare two elements.", "Structure: {a}plus / aussi / moins + adjective + que{/a}"],
        ar: ["صيغة المقارنة تُستخدم لمقارنة عنصرين.", "البنية: {a}plus / aussi / moins + الصفة + que{/a}"],
        fa: ["صفت مقایسه‌ای برای مقایسه‌ی دو عنصر به کار می‌رود.", "ساختار: {a}plus / aussi / moins + صفت + que{/a}"],
        ti: ["ናይ ምውድዳር ቅርጺ ክልተ ነገራት ንምውድዳር የገልግል።", "ቅርጺ፦ {a}plus / aussi / moins + ቅጽል + que{/a}"],
        uk: ["Порівняльний ступінь використовується для порівняння двох елементів.", "Структура: {a}plus / aussi / moins + прикметник + que{/a}"],
      },
    },
    {
      type: "grid",
      headers: ["Type", "Structure", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["{a}Supériorité{/a}", "plus + adj + que", "Paris est {a}plus grande que{/a} Lyon."],
        ["{a}Égalité{/a}", "aussi + adj + que", "Ce film est {a}aussi intéressant que{/a} l'autre."],
        ["{a}Infériorité{/a}", "moins + adj + que", "Ce resto est {a}moins cher que{/a} l'autre."],
      ],
      transHeaders: {
        en: ["Type", "Structure", "Example"],
        ar: ["النوع", "البنية", "مثال"],
        fa: ["نوع", "ساختار", "مثال"],
        ti: ["ዓይነት", "ቅርጺ", "ኣብነት"],
        uk: ["Тип", "Структура", "Приклад"],
      },
      transRows: {
        en: [["{a}Superiority{/a}", "plus + adj + que", "Paris est {a}plus grande que{/a} Lyon. (Paris is bigger than Lyon.)"], ["{a}Equality{/a}", "aussi + adj + que", "Ce film est {a}aussi intéressant que{/a} l'autre. (This film is as interesting as the other.)"], ["{a}Inferiority{/a}", "moins + adj + que", "Ce resto est {a}moins cher que{/a} l'autre. (This restaurant is less expensive than the other.)"]],
        ar: [["{a}الأفضلية{/a}", "plus + الصفة + que", "Paris est {a}plus grande que{/a} Lyon. (باريس أكبر من ليون.)"], ["{a}المساواة{/a}", "aussi + الصفة + que", "Ce film est {a}aussi intéressant que{/a} l'autre. (هذا الفيلم مشوّق مثل الآخر.)"], ["{a}الأدنوية{/a}", "moins + الصفة + que", "Ce resto est {a}moins cher que{/a} l'autre. (هذا المطعم أقل تكلفة من الآخر.)"]],
        fa: [["{a}برتری{/a}", "plus + صفت + que", "Paris est {a}plus grande que{/a} Lyon. (پاریس بزرگ‌تر از لیون است.)"], ["{a}برابری{/a}", "aussi + صفت + que", "Ce film est {a}aussi intéressant que{/a} l'autre. (این فیلم به اندازه‌ی دیگری جالب است.)"], ["{a}کهتری{/a}", "moins + صفت + que", "Ce resto est {a}moins cher que{/a} l'autre. (این رستوران ارزان‌تر از دیگری است.)"]],
        ti: [["{a}ብልጫ{/a}", "plus + ቅጽል + que", "Paris est {a}plus grande que{/a} Lyon. (ፓሪስ ካብ ሊዮን ትዓቢ።)"], ["{a}ማዕርነት{/a}", "aussi + ቅጽል + que", "Ce film est {a}aussi intéressant que{/a} l'autre. (እዚ ፊልም ከም እቲ ካልእ ዘገድስ እዩ።)"], ["{a}ትሕትና{/a}", "moins + ቅጽል + que", "Ce resto est {a}moins cher que{/a} l'autre. (እዚ ቤት መግቢ ካብቲ ካልእ ዝሓሰረ እዩ።)"]],
        uk: [["{a}Вищість{/a}", "plus + прикм. + que", "Paris est {a}plus grande que{/a} Lyon. (Париж більший за Ліон.)"], ["{a}Рівність{/a}", "aussi + прикм. + que", "Ce film est {a}aussi intéressant que{/a} l'autre. (Цей фільм такий же цікавий, як інший.)"], ["{a}Меншість{/a}", "moins + прикм. + que", "Ce resto est {a}moins cher que{/a} l'autre. (Цей ресторан дешевший за інший.)"]],
      },
    },
    { type: "heading", text: "Comparatif de quantité (verbe ou nom)", sub: true, trans: { en: "Comparative of quantity (verb or noun)", ar: "مقارنة الكمية (فعل أو اسم)", fa: "مقایسه‌ی مقدار (فعل یا اسم)", ti: "ናይ መጠን ምውድዳር (ግሲ ወይ ስም)", uk: "Порівняння кількості (дієслово або іменник)" } },
    {
      type: "grid",
      headers: ["Type", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["plus de + nom", "J'ai {a}plus de{/a} temps que toi."],
        ["autant de + nom", "Elle a {a}autant de{/a} travail que moi."],
        ["moins de + nom", "Il a {a}moins d'{/a}argent que nous."],
      ],
      transHeaders: {
        en: ["Type", "Example"],
        ar: ["النوع", "مثال"],
        fa: ["نوع", "مثال"],
        ti: ["ዓይነት", "ኣብነት"],
        uk: ["Тип", "Приклад"],
      },
      transRows: {
        en: [["plus de + noun", "J'ai {a}plus de{/a} temps que toi. (I have more time than you.)"], ["autant de + noun", "Elle a {a}autant de{/a} travail que moi. (She has as much work as me.)"], ["moins de + noun", "Il a {a}moins d'{/a}argent que nous. (He has less money than us.)"]],
        ar: [["plus de + اسم", "J'ai {a}plus de{/a} temps que toi. (لديّ وقت أكثر منك.)"], ["autant de + اسم", "Elle a {a}autant de{/a} travail que moi. (لديها عمل بقدر ما لديّ.)"], ["moins de + اسم", "Il a {a}moins d'{/a}argent que nous. (لديه مال أقل منا.)"]],
        fa: [["plus de + اسم", "J'ai {a}plus de{/a} temps que toi. (من بیشتر از تو وقت دارم.)"], ["autant de + اسم", "Elle a {a}autant de{/a} travail que moi. (او به اندازه‌ی من کار دارد.)"], ["moins de + اسم", "Il a {a}moins d'{/a}argent que nous. (او کمتر از ما پول دارد.)"]],
        ti: [["plus de + ስም", "J'ai {a}plus de{/a} temps que toi. (ካባኻ ዝበዝሐ ግዜ ኣለኒ።)"], ["autant de + ስም", "Elle a {a}autant de{/a} travail que moi. (ከማይ ዝኣክል ስራሕ ኣለዋ።)"], ["moins de + ስም", "Il a {a}moins d'{/a}argent que nous. (ካባና ዝወሓደ ገንዘብ ኣለዎ።)"]],
        uk: [["plus de + іменник", "J'ai {a}plus de{/a} temps que toi. (У мене більше часу, ніж у тебе.)"], ["autant de + іменник", "Elle a {a}autant de{/a} travail que moi. (У неї стільки ж роботи, скільки в мене.)"], ["moins de + іменник", "Il a {a}moins d'{/a}argent que nous. (У нього менше грошей, ніж у нас.)"]],
      },
    },
    { type: "heading", text: "Le superlatif", trans: { en: "The superlative", ar: "صيغة التفضيل العليا", fa: "صفت عالی", ti: "ናይ ዝለዓለ ደረጃ ቅርጺ", uk: "Найвищий ступінь" } },
    {
      type: "plain_list",
      items: [
        "Le superlatif exprime le degré le plus élevé ou le plus bas.",
        "Structure : {a}le / la / les + plus / moins + adjectif{/a}",
      ],
      transItems: {
        en: ["The superlative expresses the highest or lowest degree.", "Structure: {a}le / la / les + plus / moins + adjective{/a}"],
        ar: ["صيغة التفضيل العليا تعبّر عن أعلى أو أدنى درجة.", "البنية: {a}le / la / les + plus / moins + الصفة{/a}"],
        fa: ["صفت عالی بالاترین یا پایین‌ترین درجه را بیان می‌کند.", "ساختار: {a}le / la / les + plus / moins + صفت{/a}"],
        ti: ["ናይ ዝለዓለ ደረጃ ቅርጺ ዝለዓለ ወይ ዝተሓተ ደረጃ የመልክት።", "ቅርጺ፦ {a}le / la / les + plus / moins + ቅጽል{/a}"],
        uk: ["Найвищий ступінь виражає найвищу або найнижчу межу.", "Структура: {a}le / la / les + plus / moins + прикметник{/a}"],
      },
    },
    {
      type: "grid",
      headers: ["Type", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["le/la/les + plus + adj", "C'est {a}le plus beau{/a} quartier de la ville."],
        ["le/la/les + moins + adj", "C'est {a}la moins chère{/a} des options."],
      ],
      transHeaders: {
        en: ["Type", "Example"],
        ar: ["النوع", "مثال"],
        fa: ["نوع", "مثال"],
        ti: ["ዓይነት", "ኣብነት"],
        uk: ["Тип", "Приклад"],
      },
      transRows: {
        en: [["le/la/les + plus + adj", "C'est {a}le plus beau{/a} quartier de la ville. (It's the most beautiful district in the city.)"], ["le/la/les + moins + adj", "C'est {a}la moins chère{/a} des options. (It's the least expensive of the options.)"]],
        ar: [["le/la/les + plus + الصفة", "C'est {a}le plus beau{/a} quartier de la ville. (إنه أجمل حي في المدينة.)"], ["le/la/les + moins + الصفة", "C'est {a}la moins chère{/a} des options. (إنه الخيار الأقل تكلفة.)"]],
        fa: [["le/la/les + plus + صفت", "C'est {a}le plus beau{/a} quartier de la ville. (زیباترین محله‌ی شهر است.)"], ["le/la/les + moins + صفت", "C'est {a}la moins chère{/a} des options. (ارزان‌ترین گزینه است.)"]],
        ti: [["le/la/les + plus + ቅጽል", "C'est {a}le plus beau{/a} quartier de la ville. (እቲ ዝጸበቐ ከባቢ ናይታ ከተማ እዩ።)"], ["le/la/les + moins + ቅጽል", "C'est {a}la moins chère{/a} des options. (እቲ ዝሓሰረ ምርጫ እዩ።)"]],
        uk: [["le/la/les + plus + прикм.", "C'est {a}le plus beau{/a} quartier de la ville. (Це найкрасивіший район міста.)"], ["le/la/les + moins + прикм.", "C'est {a}la moins chère{/a} des options. (Це найдешевший із варіантів.)"]],
      },
    },
    {
      type: "highlight",
      label: "Formes irrégulières",
      items: [
        "{a}bon{/a} → comparatif : {a}meilleur{/a} (pas : plus bon)",
        "{a}bien{/a} → comparatif : {a}mieux{/a} (pas : plus bien)",
        "{a}mauvais{/a} → comparatif : {a}pire{/a} ou {a}plus mauvais{/a}",
        "C'est {a}meilleur{/a} que ça. / Il va {a}mieux{/a} aujourd'hui.",
      ],
      transLabel: { en: "Irregular forms", ar: "صيغ شاذة", fa: "صورت‌های بی‌قاعده", ti: "ዘይስሩዓት ቅርጽታት", uk: "Неправильні форми" },
      transItems: {
        en: ["{a}bon{/a} (good) → comparative: {a}meilleur{/a} (better) (not: plus bon)", "{a}bien{/a} (well) → comparative: {a}mieux{/a} (better) (not: plus bien)", "{a}mauvais{/a} (bad) → comparative: {a}pire{/a} or {a}plus mauvais{/a} (worse)", "C'est {a}meilleur{/a} que ça. (It's better than that.) / Il va {a}mieux{/a} aujourd'hui. (He is better today.)"],
        ar: ["{a}bon{/a} (جيد) ← المقارنة: {a}meilleur{/a} (أفضل) (وليس: plus bon)", "{a}bien{/a} (جيداً) ← المقارنة: {a}mieux{/a} (أفضل) (وليس: plus bien)", "{a}mauvais{/a} (سيئ) ← المقارنة: {a}pire{/a} أو {a}plus mauvais{/a} (أسوأ)", "C'est {a}meilleur{/a} que ça. (هذا أفضل من ذلك.) / Il va {a}mieux{/a} aujourd'hui. (هو أفضل اليوم.)"],
        fa: ["{a}bon{/a} (خوب) ← مقایسه‌ای: {a}meilleur{/a} (بهتر) (نه: plus bon)", "{a}bien{/a} (خوب/قید) ← مقایسه‌ای: {a}mieux{/a} (بهتر) (نه: plus bien)", "{a}mauvais{/a} (بد) ← مقایسه‌ای: {a}pire{/a} یا {a}plus mauvais{/a} (بدتر)", "C'est {a}meilleur{/a} que ça. (این بهتر از آن است.) / Il va {a}mieux{/a} aujourd'hui. (او امروز بهتر است.)"],
        ti: ["{a}bon{/a} (ጽቡቕ) → ምውድዳር፦ {a}meilleur{/a} (ዝሓሸ) (ኣይኮነን፦ plus bon)", "{a}bien{/a} (ጽቡቕ ኣገባብ) → ምውድዳር፦ {a}mieux{/a} (ዝሓሸ) (ኣይኮነን፦ plus bien)", "{a}mauvais{/a} (ሕማቕ) → ምውድዳር፦ {a}pire{/a} ወይ {a}plus mauvais{/a} (ዝኸፍአ)", "C'est {a}meilleur{/a} que ça. (ካብኡ ዝሓሸ እዩ።) / Il va {a}mieux{/a} aujourd'hui. (ሎሚ ዝሓሸ ኣለዎ።)"],
        uk: ["{a}bon{/a} (хороший) → порівняльний: {a}meilleur{/a} (кращий) (не: plus bon)", "{a}bien{/a} (добре) → порівняльний: {a}mieux{/a} (краще) (не: plus bien)", "{a}mauvais{/a} (поганий) → порівняльний: {a}pire{/a} або {a}plus mauvais{/a} (гірший)", "C'est {a}meilleur{/a} que ça. (Це краще за те.) / Il va {a}mieux{/a} aujourd'hui. (Йому сьогодні краще.)"],
      },
    },
  ],
  exercises: [],
};
