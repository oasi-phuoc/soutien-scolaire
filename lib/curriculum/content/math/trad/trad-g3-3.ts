import type { SubmoduleTrad } from "./trad-types";

const S = (fr: string, en: string, ar: string, fa: string, ti: string, uk: string, pt: string, so: string, tr: string, ps: string) =>
  ({ fr, en, ar, fa, ti, uk, pt, so, tr, ps });

const A = (fr: string[], en: string[], ar: string[], fa: string[], ti: string[], uk: string[], pt: string[], so: string[], tr: string[], ps: string[]) =>
  ({ fr, en, ar, fa, ti, uk, pt, so, tr, ps });

export const TRAD_G3_3: SubmoduleTrad = {
  submoduleId: "G3-3",
  title: {
    fr: "Périmètre du triangle",
    en: "Perimeter of a triangle",
    ar: "محيط المثلث",
    fa: "محیط مثلث",
    ti: "ናይ ሰለስ-ጎቦ ዙሪያ",
    uk: "Периметр трикутника",
  },
  blocks: [
    // 0 — heading "Triangle" (black)
    { text: S(
      "Triangle",
      "Triangle",
      "المثلث",
      "مثلث",
      "ሰለስ-ጎቦ",
      "Трикутник",
      "Triângulo",
      "Saddexgeesood",
      "Üçgen",
      "مثلث"
    ) },

    // 1 — plain "Un triangle a **3 côtés**..."
    { text: S(
      "Un triangle a **3 côtés**. Son périmètre est la somme des trois côtés, notés a, b, c.",
      "A triangle has **3 sides**. Its perimeter is the sum of the three sides, written a, b, c.",
      "المثلث له **3 أضلاع**. محيطه هو مجموع الثلاثة أضلاع، يُرمز لها بـ a, b, c.",
      "مثلث **3 ضلع** دارد. محیط آن برابر مجموع سه ضلع است که با a, b, c نشان داده می‌شوند.",
      "ሰለስ-ጎቦ **3 ጎቦ** ዘለዎ ዩ። ዙሪያኡ ናይ ሰለስቲ ጎቦ ድምር ዩ፣ a, b, c ተባሂሎም ዝጽወዑ።",
      "Трикутник має **3 сторони**. Його периметр — сума трьох сторін, позначених a, b, c.",
      "Um triângulo tem **3 lados**. O seu perímetro é a soma dos três lados, designados a, b, c.",
      "Saddexgeesoodku wuxuu leeyahay **3 dhinac**. Xadkiisu waa wadarta saddexda dhinac, oo la yidhaahdaa a, b, c.",
      "Bir üçgenin **3 kenarı** vardır. Çevresi, a, b, c olarak gösterilen üç kenarın toplamıdır.",
      "مثلث **3 اړخونه** لري. د هغه محیط د درېو اړخونو مجموعه ده، چې a, b, c ورته ویل کیږي."
    ) },

    // 2 — rule "Formule générale" itemsFr ["P = a + b + c"]
    { label: S(
      "Formule générale",
      "General formula",
      "الصيغة العامة",
      "فرمول عمومی",
      "ሓፈሻዊ ቅጥዒ",
      "Загальна формула",
      "Fórmula geral",
      "Qaacidada guud",
      "Genel formül",
      "عمومي فورمول"
    ), items: A(
      ["P = a + b + c"],
      ["P = a + b + c"],
      ["P = a + b + c"],
      ["P = a + b + c"],
      ["P = a + b + c"],
      ["P = a + b + c"],
      ["P = a + b + c"],
      ["P = a + b + c"],
      ["P = a + b + c"],
      ["P = a + b + c"]
    ) },

    // 3 — heading "Types de triangles" (black)
    { text: S(
      "Types de triangles",
      "Types of triangles",
      "أنواع المثلثات",
      "انواع مثلث",
      "ዓይነታት ሰለስ-ጎቦ",
      "Типи трикутників",
      "Tipos de triângulos",
      "Noocyada saddexgeesoodka",
      "Üçgen türleri",
      "د مثلث ډولونه"
    ) },

    // 4 — table headersFr ["Type", "Propriété", "Formule"]
    { headers: A(
      ["Type", "Propriété", "Formule"],
      ["Type", "Property", "Formula"],
      ["النوع", "الخاصية", "الصيغة"],
      ["نوع", "ویژگی", "فرمول"],
      ["ዓይነት", "ባህርያት", "ቅጥዒ"],
      ["Тип", "Властивість", "Формула"],
      ["Tipo", "Propriedade", "Fórmula"],
      ["Nooc", "Sifo", "Qaacidada"],
      ["Tür", "Özellik", "Formül"],
      ["ډول", "خاصیت", "فورمول"]
    ), items: A(
      ["Équilatéral\t3 côtés égaux\tP = 3a", "Isocèle\t2 côtés égaux (a), base (b)\tP = 2a + b", "Scalène\t3 côtés différents\tP = a + b + c"],
      ["Equilateral\t3 equal sides\tP = 3a", "Isosceles\t2 equal sides (a), base (b)\tP = 2a + b", "Scalene\t3 different sides\tP = a + b + c"],
      ["متساوي الأضلاع\t3 أضلاع متساوية\tP = 3a", "متساوي الساقين\t2 ضلعان متساويان (a)، قاعدة (b)\tP = 2a + b", "مختلف الأضلاع\t3 أضلاع مختلفة\tP = a + b + c"],
      ["متساوی‌الاضلاع\t3 ضلع مساوی\tP = 3a", "متساوی‌الساقین\t2 ضلع مساوی (a)، پایه (b)\tP = 2a + b", "مختلف‌الاضلاع\t3 ضلع متفاوت\tP = a + b + c"],
      ["ዕኩል ሰለስ-ጎቦ\tሰለስቲ ጎቦ ዕኩል\tP = 3a", "ክልተ-ዕኩል ሰለስ-ጎቦ\tክልተ ጎቦ ዕኩል (a)፣ ባህሪ (b)\tP = 2a + b", "ዝተፈላለዩ ጎቦ\tሰለስቲ ጎቦ ዝተፈላለዩ\tP = a + b + c"],
      ["Рівносторонній\t3 рівні сторони\tP = 3a", "Рівнобедрений\t2 рівні сторони (a), основа (b)\tP = 2a + b", "Різносторонній\t3 різні сторони\tP = a + b + c"],
      ["Equilátero\t3 lados iguais\tP = 3a", "Isósceles\t2 lados iguais (a), base (b)\tP = 2a + b", "Escaleno\t3 lados diferentes\tP = a + b + c"],
      ["La saddex-xagal\t3 dhinac oo siman\tP = 3a", "Laba-dhinac\t2 dhinac oo siman (a), xad (b)\tP = 2a + b", "Kala-duwan\t3 dhinac oo kala-duwan\tP = a + b + c"],
      ["Eşkenar\t3 eşit kenar\tP = 3a", "İkizkenar\t2 eşit kenar (a), taban (b)\tP = 2a + b", "Çeşitkenar\t3 farklı kenar\tP = a + b + c"],
      ["مساوي الاضلاع\t3 مساوي اړخونه\tP = 3a", "متساوي الساقین\t2 مساوي اړخونه (a)، اساس (b)\tP = 2a + b", "مختلف الاضلاع\t3 بېل اړخونه\tP = a + b + c"]
    ) },

    // 5 — svg_row with items captionFr "Scalène", "Isocèle", "Équilatéral"
    { items: A(
      ["Scalène", "Isocèle", "Équilatéral"],
      ["Scalene", "Isosceles", "Equilateral"],
      ["مختلف الأضلاع", "متساوي الساقين", "متساوي الأضلاع"],
      ["مختلف‌الاضلاع", "متساوی‌الساقین", "متساوی‌الاضلاع"],
      ["ዝተፈላለዩ ጎቦ", "ክልተ-ዕኩል", "ዕኩል ሰለስ-ጎቦ"],
      ["Різносторонній", "Рівнобедрений", "Рівносторонній"],
      ["Escaleno", "Isósceles", "Equilátero"],
      ["Kala-duwan", "Laba-dhinac", "La saddex-xagal"],
      ["Çeşitkenar", "İkizkenar", "Eşkenar"],
      ["مختلف الاضلاع", "متساوي الساقین", "مساوي الاضلاع"]
    ) },

    // 6 — highlight "Exemple"
    { text: S(
      "Exemple",
      "Example",
      "مثال",
      "مثال",
      "ምሳሌ",
      "Приклад",
      "Exemplo",
      "Tusaale",
      "Örnek",
      "بېلګه"
    ) },

    // 7 — section labelFr "" itemsFr ["Triangle de côtés 5, 7, 9 cm :", "P = 5 + 7 + 9 = **21 cm**"]
    { label: S("", "", "", "", "", "", "", "", "", ""),
      items: A(
        ["Triangle de côtés 5, 7, 9 cm :", "P = 5 + 7 + 9 = **21 cm**"],
        ["Triangle with sides 5, 7, 9 cm:", "P = 5 + 7 + 9 = **21 cm**"],
        ["مثلث بأضلاع 5، 7، 9 سم:", "P = 5 + 7 + 9 = **21 سم**"],
        ["مثلث با اضلاع 5، 7، 9 سانتیمتر:", "P = 5 + 7 + 9 = **21 سانتیمتر**"],
        ["ሰለስ-ጎቦ ናይ 5, 7, 9 ሰም ጎቦ:", "P = 5 + 7 + 9 = **21 ሰም**"],
        ["Трикутник зі сторонами 5, 7, 9 см:", "P = 5 + 7 + 9 = **21 см**"],
        ["Triângulo de lados 5, 7, 9 cm:", "P = 5 + 7 + 9 = **21 cm**"],
        ["Saddexgeesood dhinacyadiisu yihiin 5, 7, 9 cm:", "P = 5 + 7 + 9 = **21 cm**"],
        ["5, 7, 9 cm kenarlı üçgen:", "P = 5 + 7 + 9 = **21 cm**"],
        ["د 5، 7، 9 سم اړخونو لرونکی مثلث:", "P = 5 + 7 + 9 = **21 سم**"]
      )
    },

    // 8 — highlight "Inégalité triangulaire"
    { text: S(
      "Inégalité triangulaire",
      "Triangle inequality",
      "متراجحة المثلث",
      "نامساوی مثلث",
      "ናይ ሰለስ-ጎቦ ዘይምዕርርያ",
      "Нерівність трикутника",
      "Desigualdade triangular",
      "Sinnaansho-la'aanta saddexgeesoodka",
      "Üçgen eşitsizliği",
      "د مثلث نامساواتي"
    ) },

    // 9 — section labelFr "" itemsFr ["La somme de deux côtés...", "Exemple : 2, 3, 7 → ..."]
    { label: S("", "", "", "", "", "", "", "", "", ""),
      items: A(
        ["La somme de deux côtés quelconques doit être **supérieure** au troisième côté.", "Exemple : 2, 3, 7 → 2 + 3 = 5 < 7 → **impossible** !"],
        ["The sum of any two sides must be **greater than** the third side.", "Example: 2, 3, 7 → 2 + 3 = 5 < 7 → **impossible**!"],
        ["مجموع أي ضلعين يجب أن يكون **أكبر من** الضلع الثالث.", "مثال: 2، 3، 7 → 2 + 3 = 5 < 7 → **مستحيل** !"],
        ["مجموع هر دو ضلع باید از ضلع سوم **بزرگ‌تر** باشد.", "مثال: 2، 3، 7 → 2 + 3 = 5 < 7 → **ممکن نیست** !"],
        ["ድምር ዝኾኑ ክልተ ጎቦ ካብ ሳልሳይ ጎቦ **ዓቢ** ክኸውን ኣለዎ።", "ምሳሌ: 2, 3, 7 → 2 + 3 = 5 < 7 → **ዘይከኣል** !"],
        ["Сума будь-яких двох сторін має бути **більшою за** третю сторону.", "Приклад: 2, 3, 7 → 2 + 3 = 5 < 7 → **неможливо** !"],
        ["A soma de dois lados quaisquer deve ser **maior que** o terceiro lado.", "Exemplo: 2, 3, 7 → 2 + 3 = 5 < 7 → **impossível**!"],
        ["Wadarta laba dhinac kasta waa inay ka **weyn tahay** dhinaca saddexaad.", "Tusaale: 2, 3, 7 → 2 + 3 = 5 < 7 → **suurtogal ma'aha**!"],
        ["Herhangi iki kenarın toplamı üçüncü kenardan **büyük** olmalıdır.", "Örnek: 2, 3, 7 → 2 + 3 = 5 < 7 → **imkânsız**!"],
        ["د هر دو اړخونو مجموعه باید د دریم اړخ **لویه** وي.", "بېلګه: 2، 3، 7 → 2 + 3 = 5 < 7 → **ناممکن** !"]
      )
    },
  ],
  paragraphs: {
    fr: [
          "Le périmètre d'un triangle est la somme de ses trois côtés : P = a + b + c.",
          "Triangle équilatéral (3 côtés égaux) : P = 3a. Triangle isocèle (2 côtés égaux) : P = 2a + b.",
          "Exemple : triangle de côtés 5, 7, 9 cm → P = 5 + 7 + 9 = 21 cm.",
          "Inégalité triangulaire : la somme de deux côtés quelconques doit être supérieure au troisième côté.",
        ],
    en: [
          "The perimeter of a triangle is the sum of its three sides: P = a + b + c.",
          "Equilateral (3 equal sides): P = 3a. Isosceles (2 equal sides): P = 2a + b.",
          "Example: sides 5, 7, 9 cm → P = 21 cm.",
          "Triangle inequality: any two sides must sum to more than the third.",
        ],
    ar: [
          "محيط المثلث هو مجموع أضلاعه الثلاثة: P = a + b + c.",
          "متساوي الأضلاع: P = 3a. متساوي الساقين: P = 2a + b.",
          "مثال: أضلاع 5, 7, 9 سم → P = 21 سم.",
          "متراجحة المثلث: مجموع أي ضلعين أكبر من الثالث.",
        ],
    fa: [
          "محیط مثلث برابر مجموع سه ضلع آن است: P = a + b + c.",
          "متساوی‌الاضلاع: P = 3a. متساوی‌الساقین: P = 2a + b.",
          "مثال: اضلاع 5، 7، 9 سانتیمتر → P = 21 سانتیمتر.",
          "نامساوی مثلث: مجموع هر دو ضلع باید از ضلع سوم بزرگ‌تر باشد.",
        ],
    ti: [
          "ናይ ሰለስ-ጎቦ ዙሪያ ናይ ሰለስቲ ጎቦ ድምር ዩ: P = a + b + c.",
          "ዕኩል ሰለስ-ጎቦ: P = 3a. ክልተ-ዕኩል ሰለስ-ጎቦ: P = 2a + b.",
          "ምሳሌ: ጎቦ 5, 7, 9 ሰም → P = 21 ሰም.",
          "ናይ ሰለስ-ጎቦ ዘይምዕርርያ: ዝኾኑ ክልተ ጎቦ ድምር ካብ ሳልሳይ ዝዓቢ ክኸውን.",
        ],
    uk: [
          "Периметр трикутника — сума трьох його сторін: P = a + b + c.",
          "Рівносторонній: P = 3a. Рівнобедрений: P = 2a + b.",
          "Приклад: сторони 5, 7, 9 см → P = 21 см.",
          "Нерівність трикутника: сума будь-яких двох сторін більша за третю.",
        ],
  },
  consignes: {
    "g2-3-e1": { fr: "Calcule P : triangle de côtés 3, 4, 5 cm.", en: "Calculate P: triangle with sides 3, 4, 5 cm." },
    "g2-3-e2": { fr: "Triangle équilatéral de côté 8 cm. P = ?", en: "Equilateral triangle with side 8 cm. P = ?" },
    "g2-3-e3": { fr: "Triangle isocèle : deux côtés = 6 cm, base = 4 cm. P = ?", en: "Isosceles triangle: two sides = 6 cm, base = 4 cm. P = ?" },
    "g2-3-e4": { fr: "P d'un triangle = 30 cm. Deux côtés sont 8 et 11 cm. Troisième côté = ?", en: "The perimeter of a triangle is 30 cm. Two sides are 8 et 11 cm. Third side = ?" },
    "g2-3-e5": { fr: "Peut-on former un triangle avec les côtés 2, 3, 7 ? (oui/non)", en: "Can we form a triangle with sides 2, 3, 7? (yes/no)" },
  },
};
