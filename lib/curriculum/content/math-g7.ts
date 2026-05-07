import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G7_LESSONS: MathSubmoduleLesson[] = [
  {
    submoduleId: "G7-1",
    submoduleCode: "G7.1",
    theory: {
      title: {
        fr: "Triangle rectangle",
        en: "Right triangle",
        ar: "المثلث القائم",
        fa: "مثلث قائم‌الزاویه",
        ti: "ናይ ቀጥታ ኩርናዕ ሰለስ-ጎቦ",
        uk: "Прямокутний трикутник",
      },
      paragraphs: {
        fr: [
          "Un triangle rectangle est un triangle qui possède un angle droit (90°). Le côté opposé à l'angle droit s'appelle l'hypoténuse. Les deux autres côtés sont les cathètes (ou jambes).",
          "L'hypoténuse est toujours le côté le plus long du triangle rectangle.",
          "Exemple : triangle avec angles 90°, 30°, 60°. Le côté opposé au 90° est l'hypoténuse.",
          "Pour identifier un triangle rectangle : vérifier si un angle vaut exactement 90° ou si la relation a² + b² = c² est satisfaite.",
        ],
        en: [
          "A right triangle has one right angle (90°). The side opposite the right angle is the hypotenuse. The other two sides are legs (catheti).",
          "The hypotenuse is always the longest side.",
          "Example: triangle with angles 90°, 30°, 60°. The side opposite 90° is the hypotenuse.",
          "To identify a right triangle: check for a 90° angle or verify a² + b² = c².",
        ],
        ar: [
          "المثلث القائم لديه زاوية قائمة (90°). الضلع المقابل للزاوية القائمة هو الوتر. الضلعان الآخران هما الضلعان القائمان.",
          "الوتر هو دائماً الضلع الأطول.",
          "لتحديد مثلث قائم: تحقق من وجود زاوية 90° أو إذا كان a² + b² = c².",
        ],
        fa: [
          "مثلث قائم‌الزاویه یک زاویه قائمه (90°) دارد. ضلع مقابل زاویه قائمه وتر است. دو ضلع دیگر ساق‌های مثلث هستند.",
          "وتر همیشه بلندترین ضلع است.",
          "برای شناسایی مثلث قائم: یک زاویه 90° بیاب یا a² + b² = c² را بررسی کن.",
        ],
        ti: [
          "ናይ ቀጥታ ኩርናዕ ሰለስ-ጎቦ ሓደ ቀጥታ ኩርናዕ (90°) ዘለዎ ዩ. ናብ ቀጥታ ኩርናዕ ዝቃወሞ ጎቦ ቅምባ ዩ. ካልኦት ክልተ ጎቦ ኬቴቲ ዩ.",
          "ቅምባ ዘወጊ ዝዓቢ ጎቦ ዩ.",
          "ናይ ቀጥታ ኩርናዕ ሰለስ-ጎቦ ምፍላጥ: ናይ 90° ኩርናዕ ምርካብ ወይ a² + b² = c² ምፍተሻ.",
        ],
        uk: [
          "Прямокутний трикутник має один прямий кут (90°). Сторона, протилежна прямому куту — гіпотенуза. Інші дві сторони — катети.",
          "Гіпотенуза — завжди найдовша сторона.",
          "Для визначення прямокутного трикутника: знайти кут 90° або перевірити a² + b² = c².",
        ],
      },
    },
    exercises: [
      { id: "g7-1-e1", promptFr: "Dans un triangle rectangle, comment s'appelle le côté opposé à l'angle droit ?", type: "short_text", acceptable: ["hypoténuse", "hypotenuse"] },
      { id: "g7-1-e2", promptFr: "L'hypoténuse est-elle le côté le plus long ? (oui/non)", type: "short_text", acceptable: ["oui"] },
      { id: "g7-1-e3", promptFr: "Un triangle avec angles 90°, 45°, 45° est-il rectangle ? (oui/non)", type: "short_text", acceptable: ["oui"] },
      { id: "g7-1-e4", promptFr: "Combien d'angles droits a un triangle rectangle ?", type: "number", acceptable: ["1"] },
      { id: "g7-1-e5", promptFr: "Les deux côtés non-hypoténuse s'appellent ?", type: "short_text", acceptable: ["cathètes", "cathetes", "jambes"] },
    ],
  },
  {
    submoduleId: "G7-2",
    submoduleCode: "G7.2",
    theory: {
      title: {
        fr: "Énoncé du théorème : a² + b² = c²",
        en: "Statement of the theorem: a² + b² = c²",
        ar: "نص المبرهنة: a² + b² = c²",
        fa: "گزاره قضیه: a² + b² = c²",
        ti: "ናይ ቲዎሪም ቃለ-ቃለ: a² + b² = c²",
        uk: "Формулювання теореми: a² + b² = c²",
      },
      paragraphs: {
        fr: [
          "Le théorème de Pythagore : dans un triangle rectangle, le carré de l'hypoténuse est égal à la somme des carrés des deux cathètes.",
          "Formule : a² + b² = c², où c est l'hypoténuse et a, b sont les cathètes.",
          "Exemple : triangle avec cathètes 3 cm et 4 cm → c² = 3² + 4² = 9 + 16 = 25 → c = √25 = 5 cm.",
          "Le triplet (3, 4, 5) est le plus connu des triplets pythagoriciens. Autres : (5, 12, 13) ; (8, 15, 17).",
        ],
        en: [
          "Pythagoras' theorem: in a right triangle, the square of the hypotenuse equals the sum of the squares of the legs.",
          "Formula: a² + b² = c², where c is the hypotenuse.",
          "Example: legs 3 and 4 cm → c² = 9 + 16 = 25 → c = 5 cm.",
          "Pythagorean triples: (3,4,5); (5,12,13); (8,15,17).",
        ],
        ar: [
          "مبرهنة فيثاغورس: في المثلث القائم، مربع الوتر يساوي مجموع مربعَي الضلعين القائمين.",
          "الصيغة: a² + b² = c².",
          "مثال: ضلعان 3 و4 سم → c = 5 سم.",
          "الأطراف الفيثاغورسية: (3,4,5)؛ (5,12,13).",
        ],
        fa: [
          "قضیه فیثاغورس: در مثلث قائم‌الزاویه، مجذور وتر برابر مجموع مجذورات دو ساق است.",
          "فرمول: a² + b² = c².",
          "مثال: ساق‌های 3 و 4 سانتیمتر → c = 5 سانتیمتر.",
          "سه‌تایی‌های فیثاغورثی: (3,4,5)؛ (5,12,13).",
        ],
        ti: [
          "ናይ ፒታጎራስ ቲዎሪም: ናይ ቀጥታ ኩርናዕ ሰለስ-ጎቦ ናይ ቅምባ ካሬ ናብ ናይ ኬቴቲ ካሬ ድምር ዩ.",
          "ቅጥዒ: a² + b² = c².",
          "ምሳሌ: ኬቴቲ 3 ን 4 ሰም → c = 5 ሰም.",
          "ናይ ፒታጎራስ ስዕልቲ: (3,4,5); (5,12,13).",
        ],
        uk: [
          "Теорема Піфагора: у прямокутному трикутнику квадрат гіпотенузи дорівнює сумі квадратів катетів.",
          "Формула: a² + b² = c².",
          "Приклад: катети 3 і 4 см → c² = 9 + 16 = 25 → c = 5 см.",
          "Піфагорові трійки: (3,4,5); (5,12,13); (8,15,17).",
        ],
      },
    },
    exercises: [
      { id: "g7-2-e1", promptFr: "Cathètes 6 et 8 cm. Hypoténuse = ?", type: "number", acceptable: ["10"] },
      { id: "g7-2-e2", promptFr: "Cathètes 5 et 12 cm. Hypoténuse = ?", type: "number", acceptable: ["13"] },
      { id: "g7-2-e3", promptFr: "Cathètes 3 et 4 cm. c² = 3² + 4² = ?", type: "number", acceptable: ["25"] },
      { id: "g7-2-e4", promptFr: "Est-ce un triplet pythagoricien : (8, 15, 17) ? (oui/non)", type: "short_text", acceptable: ["oui"] },
      { id: "g7-2-e5", promptFr: "Cathètes 1 et 1 cm. Hypoténuse = √? cm.", type: "number", acceptable: ["2"] },
    ],
  },
  {
    submoduleId: "G7-3",
    submoduleCode: "G7.3",
    theory: {
      title: {
        fr: "Calculer l'hypoténuse",
        en: "Computing the hypotenuse",
        ar: "حساب الوتر",
        fa: "محاسبه وتر",
        ti: "ቅምባ ምሕሳብ",
        uk: "Обчислення гіпотенузи",
      },
      paragraphs: {
        fr: [
          "Quand on connaît les deux cathètes a et b, on trouve l'hypoténuse c : c = √(a² + b²).",
          "Méthode : (1) calculer a² et b² ; (2) les additionner ; (3) prendre la racine carrée.",
          "Exemple : a = 5, b = 12 → c² = 25 + 144 = 169 → c = √169 = 13.",
          "Si le résultat n'est pas un carré parfait, utiliser la calculatrice ou donner une valeur approchée.",
        ],
        en: [
          "Given legs a and b, find hypotenuse c: c = √(a² + b²).",
          "Method: (1) compute a² and b²; (2) add them; (3) take square root.",
          "Example: a=5, b=12 → c² = 169 → c = 13.",
          "If not a perfect square, use a calculator or give approximate value.",
        ],
        ar: [
          "بمعرفة الضلعين القائمين a وb: c = √(a² + b²).",
          "الطريقة: (1) احسب a² وb²؛ (2) اجمعهما؛ (3) خذ الجذر.",
          "مثال: a=5، b=12 → c = 13.",
          "إذا لم يكن مربعاً تاماً استخدم الآلة الحاسبة.",
        ],
        fa: [
          "با دانستن ساق‌های a و b: c = √(a² + b²).",
          "روش: (1) a² و b² را محاسبه کن؛ (2) جمع کن؛ (3) جذر بگیر.",
          "مثال: a=5، b=12 → c = 13.",
          "اگر مربع کامل نبود، ماشین حساب استفاده کن.",
        ],
        ti: [
          "ምስ ኬቴቲ a ን b ምፍላጥ: c = √(a² + b²).",
          "ኣፈጻጽማ: (1) a² ን b² ምሕሳብ; (2) ምኽፋሎ; (3) ስርወ-ካሬ.",
          "ምሳሌ: a=5, b=12 → c = 13.",
          "ፍጹም ካሬ ዘይኮነ ምስ ዝኸውን ካልኩሌተር ምጥቃም.",
        ],
        uk: [
          "Знаючи катети a і b: c = √(a² + b²).",
          "Метод: (1) обчислити a² і b²; (2) скласти; (3) взяти квадратний корінь.",
          "Приклад: a=5, b=12 → c = 13.",
          "Якщо не точний квадрат — скористатись калькулятором.",
        ],
      },
    },
    exercises: [
      { id: "g7-3-e1", promptFr: "a = 3, b = 4. c = ?", type: "number", acceptable: ["5"] },
      { id: "g7-3-e2", promptFr: "a = 6, b = 8. c = ?", type: "number", acceptable: ["10"] },
      { id: "g7-3-e3", promptFr: "a = 9, b = 12. c = ?", type: "number", acceptable: ["15"] },
      { id: "g7-3-e4", promptFr: "a = 1, b = 1. c = √? (donne le nombre sous la racine)", type: "number", acceptable: ["2"] },
      { id: "g7-3-e5", promptFr: "a = 8, b = 15. c = ?", type: "number", acceptable: ["17"] },
    ],
  },
  {
    submoduleId: "G7-4",
    submoduleCode: "G7.4",
    theory: {
      title: {
        fr: "Calculer une cathète",
        en: "Computing a leg",
        ar: "حساب ضلع قائم",
        fa: "محاسبه ساق",
        ti: "ኬቴቲ ምሕሳብ",
        uk: "Обчислення катета",
      },
      paragraphs: {
        fr: [
          "Quand on connaît l'hypoténuse c et une cathète a, on trouve l'autre cathète b : b = √(c² − a²).",
          "Méthode : on réarrange a² + b² = c² → b² = c² − a² → b = √(c² − a²).",
          "Exemple : c = 13, a = 5 → b² = 169 − 25 = 144 → b = 12.",
          "Vérification : 5² + 12² = 25 + 144 = 169 = 13² ✓.",
        ],
        en: [
          "Given hypotenuse c and leg a, find the other leg b: b = √(c² − a²).",
          "Rearrange: b² = c² − a².",
          "Example: c=13, a=5 → b² = 144 → b = 12.",
          "Check: 5² + 12² = 169 = 13² ✓.",
        ],
        ar: [
          "بمعرفة الوتر c والضلع a: b = √(c² − a²).",
          "إعادة الترتيب: b² = c² − a².",
          "مثال: c=13، a=5 → b = 12.",
          "تحقق: 5² + 12² = 13² ✓.",
        ],
        fa: [
          "با دانستن وتر c و ساق a: b = √(c² − a²).",
          "بازآرایی: b² = c² − a².",
          "مثال: c=13، a=5 → b = 12.",
          "تأیید: 5² + 12² = 13² ✓.",
        ],
        ti: [
          "ምስ ቅምባ c ን ኬቴቲ a ምፍላጥ: b = √(c² − a²).",
          "ምስፍሓ: b² = c² − a².",
          "ምሳሌ: c=13, a=5 → b = 12.",
          "ፍተሻ: 5² + 12² = 13² ✓.",
        ],
        uk: [
          "Знаючи гіпотенузу c і катет a: b = √(c² − a²).",
          "Перетворення: b² = c² − a².",
          "Приклад: c=13, a=5 → b = 12.",
          "Перевірка: 5² + 12² = 13² ✓.",
        ],
      },
    },
    exercises: [
      { id: "g7-4-e1", promptFr: "c = 10, a = 6. b = ?", type: "number", acceptable: ["8"] },
      { id: "g7-4-e2", promptFr: "c = 13, a = 12. b = ?", type: "number", acceptable: ["5"] },
      { id: "g7-4-e3", promptFr: "c = 5, a = 3. b = ?", type: "number", acceptable: ["4"] },
      { id: "g7-4-e4", promptFr: "c = 17, a = 8. b = ?", type: "number", acceptable: ["15"] },
      { id: "g7-4-e5", promptFr: "c = 25, a = 7. b² = 25² − 7² = ?", type: "number", acceptable: ["576"] },
    ],
  },
  {
    submoduleId: "G7-5",
    submoduleCode: "G7.5",
    theory: {
      title: {
        fr: "Réciproque du théorème",
        en: "Converse of the theorem",
        ar: "عكس المبرهنة",
        fa: "عکس قضیه",
        ti: "ናይ ቲዎሪም ተቃራኒ",
        uk: "Обернена теорема",
      },
      paragraphs: {
        fr: [
          "Réciproque de Pythagore : si dans un triangle ABC on a a² + b² = c² (où c est le plus grand côté), alors le triangle est rectangle (angle droit en face de c).",
          "Utilisation : pour vérifier si un triangle est rectangle sans mesurer les angles.",
          "Exemple : triangle de côtés 6, 8, 10. 6² + 8² = 36 + 64 = 100 = 10². Donc rectangle !",
          "Contre-exemple : côtés 5, 6, 8. 5² + 6² = 61 ≠ 64 = 8². Pas rectangle.",
        ],
        en: [
          "Converse of Pythagoras: if a² + b² = c² (c being the longest side), then the triangle is right-angled.",
          "Use: to check if a triangle is right-angled without measuring angles.",
          "Example: sides 6, 8, 10: 36 + 64 = 100. Right triangle!",
          "Counter-example: 5, 6, 8: 25 + 36 = 61 ≠ 64. Not right-angled.",
        ],
        ar: [
          "عكس فيثاغورس: إذا كان a² + b² = c² (c أكبر ضلع) فالمثلث قائم.",
          "الاستخدام: التحقق مما إذا كان المثلث قائماً.",
          "مثال: أضلاع 6, 8, 10: 36 + 64 = 100. مثلث قائم!",
          "مثال مضاد: 5, 6, 8: 61 ≠ 64. ليس قائماً.",
        ],
        fa: [
          "عکس فیثاغورس: اگر a² + b² = c² (c بزرگ‌ترین ضلع)، مثلث قائم‌الزاویه است.",
          "استفاده: برای تشخیص مثلث قائم بدون اندازه‌گیری زاویه.",
          "مثال: اضلاع 6، 8، 10: 36 + 64 = 100. مثلث قائم!",
          "نقیض: 5، 6، 8: 61 ≠ 64. قائم نیست.",
        ],
        ti: [
          "ናይ ፒታጎራስ ተቃራኒ: a² + b² = c² (c ዝዓቢ ጎቦ) ምስ ዝኸውን ሰለስ-ጎቦ ቀጥታ ዩ.",
          "ኣጠቓቕማ: ሰለስ-ጎቦ ቀጥታ ምዃኑ ምፍለጥ.",
          "ምሳሌ: ጎቦ 6, 8, 10: 36 + 64 = 100. ቀጥታ ሰለስ-ጎቦ!",
          "ተቃራኒ ምሳሌ: 5, 6, 8: 61 ≠ 64. ቀጥታ ዘይኮነ.",
        ],
        uk: [
          "Обернена теорема Піфагора: якщо a² + b² = c² (c — найдовша сторона), то трикутник прямокутний.",
          "Застосування: перевірити прямокутність без вимірювання кутів.",
          "Приклад: сторони 6, 8, 10: 36 + 64 = 100. Прямокутний!",
          "Контрприклад: 5, 6, 8: 61 ≠ 64. Не прямокутний.",
        ],
      },
    },
    exercises: [
      { id: "g7-5-e1", promptFr: "Triangle de côtés 3, 4, 5. Est-il rectangle ? (oui/non)", type: "short_text", acceptable: ["oui"] },
      { id: "g7-5-e2", promptFr: "Triangle de côtés 5, 6, 7. Est-il rectangle ? (oui/non)", type: "short_text", acceptable: ["non"] },
      { id: "g7-5-e3", promptFr: "Triangle de côtés 9, 12, 15. Est-il rectangle ? (oui/non)", type: "short_text", acceptable: ["oui"] },
      { id: "g7-5-e4", promptFr: "Pour prouver qu'un triangle est rectangle, on vérifie a² + b² = ? (donne le côté)", type: "short_text", acceptable: ["c²", "hypoténuse au carré"] },
      { id: "g7-5-e5", promptFr: "Triangle côtés 7, 24, 25. 7² + 24² = 49 + 576 = ? Est-ce = 25² = 625 ?", type: "number", acceptable: ["625"] },
    ],
  },
  {
    submoduleId: "G7-6",
    submoduleCode: "G7.6",
    theory: {
      title: {
        fr: "Applications",
        en: "Applications",
        ar: "التطبيقات",
        fa: "کاربردها",
        ti: "ኣሰፋ",
        uk: "Застосування",
      },
      paragraphs: {
        fr: [
          "Le théorème de Pythagore a de nombreuses applications pratiques : calcul de distances, hauteurs, diagonales.",
          "Exemple 1 — diagonale d'un rectangle : rectangle 6 × 8 cm. Diagonale = √(6² + 8²) = √100 = 10 cm.",
          "Exemple 2 — hauteur d'un triangle isocèle : base 10 cm, côtés égaux 13 cm. La hauteur coupe la base en 5 cm. h = √(13² − 5²) = √(169 − 25) = √144 = 12 cm.",
          "Exemple 3 — distance GPS : point A(0,0), B(3,4). Distance = √(3² + 4²) = 5 unités.",
        ],
        en: [
          "Pythagoras has many applications: distances, heights, diagonals.",
          "Ex. 1 — rectangle diagonal: 6×8 cm → √(36+64) = 10 cm.",
          "Ex. 2 — isosceles triangle height: base 10, sides 13 → h = √(169−25) = 12 cm.",
          "Ex. 3 — GPS distance: A(0,0) to B(3,4) = √(9+16) = 5.",
        ],
        ar: [
          "للمبرهنة تطبيقات عديدة: مسافات، ارتفاعات، أقطار.",
          "مثال 1: قطر مستطيل 6×8 سم = 10 سم.",
          "مثال 2: ارتفاع مثلث متساوي الساقين: قاعدة 10، أضلاع 13 → h = 12 سم.",
          "مثال 3: مسافة GPS: A(0,0) إلى B(3,4) = 5 وحدات.",
        ],
        fa: [
          "قضیه فیثاغورس کاربردهای فراوانی دارد: فاصله‌ها، ارتفاع‌ها، قطرها.",
          "مثال 1: قطر مستطیل 6×8 = 10 سانتیمتر.",
          "مثال 2: ارتفاع مثلث متساوی‌الساقین: قاعده 10، ساق 13 → h = 12 سانتیمتر.",
          "مثال 3: فاصله GPS: A(0,0) تا B(3,4) = 5 واحد.",
        ],
        ti: [
          "ናይ ፒታጎራስ ቲዎሪም ብዙሕ ኣሰፋ ዘለዎ ዩ: ርሕቀት, ቁመት, ዲያጎናሎ.",
          "ምሳሌ 1: ናይ ካሬ-ሓለቃ 6×8 ዲያጎናሎ = 10 ሰም.",
          "ምሳሌ 2: ናይ ክልተ-ዕኩል ሰለስ-ጎቦ ቁመት: ሰረት 10, ጎቦ 13 → h = 12 ሰም.",
          "ምሳሌ 3: GPS ርሕቀት: A(0,0) ናብ B(3,4) = 5 ኣሃዱ.",
        ],
        uk: [
          "Теорема Піфагора має численні застосування: відстані, висоти, діагоналі.",
          "Приклад 1: діагональ прямокутника 6×8 = 10 см.",
          "Приклад 2: висота рівнобедреного трикутника з основою 10 і сторонами 13 → h = 12 см.",
          "Приклад 3: відстань GPS: A(0,0) до B(3,4) = 5 одиниць.",
        ],
      },
    },
    exercises: [
      { id: "g7-6-e1", promptFr: "Diagonale d'un carré de côté 1 cm. d = √? cm (donne le nombre sous la racine).", type: "number", acceptable: ["2"] },
      { id: "g7-6-e2", promptFr: "Diagonale d'un rectangle 5×12 cm.", type: "number", acceptable: ["13"] },
      { id: "g7-6-e3", promptFr: "Une échelle de 10 m appuyée contre un mur à 6 m du pied. Hauteur atteinte = ? m.", type: "number", acceptable: ["8"] },
      { id: "g7-6-e4", promptFr: "Distance entre A(0;0) et B(6;8).", type: "number", acceptable: ["10"] },
      { id: "g7-6-e5", promptFr: "Triangle isocèle : base 16 cm, côtés 17 cm. Hauteur = ?", type: "number", acceptable: ["15"] },
    ],
  },
];
