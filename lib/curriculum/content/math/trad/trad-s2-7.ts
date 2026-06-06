import type { SubmoduleTrad } from "./trad-types";

export const TRAD_S2_7: SubmoduleTrad = {
  submoduleId: "S2-7",
  title: {
    fr: "Introduction aux combinaisons",
    en: "Introduction to Combinations",
    ar: "مقدمة في التوافيق",
    fa: "مقدمه‌ای بر ترکیب‌ها",
    ti: "መፈለምታ ናይ ጥምረታት",
    uk: "Вступ до комбінацій",
  },
  paragraphs: {
    fr: [
          "Dénombrer les résultats possibles d'une expérience est essentiel pour calculer des probabilités classiques. Plus les résultats sont nombreux, plus on a besoin de méthodes systématiques.",
          "Principe multiplicatif : si une expérience se déroule en deux étapes indépendantes avec n₁ résultats possibles à la première et n₂ à la seconde, le nombre total de résultats possibles est n₁ × n₂.",
          "Exemple : on choisit un plat parmi 3 entrées et 4 desserts → 3 × 4 = 12 menus possibles. On lance 2 dés → 6 × 6 = 36 résultats possibles.",
          "Arrangement avec répétition de k objets parmi n : nᵏ résultats. Exemple : 3 chiffres de 0 à 9 (avec répétition) → 10³ = 1000 combinaisons.",
          "Combinaison (choix sans ordre ni répétition) de k éléments parmi n : C(n,k) = n! / (k! × (n−k)!). Exemple : choisir 2 élèves parmi 5 → C(5,2) = 10.",
        ],
    en: [
          "Counting possible outcomes of an experiment is essential for calculating classical probabilities. The more outcomes, the more systematic methods are needed.",
          "Multiplication principle: if an experiment has two independent stages with n₁ possible outcomes at stage 1 and n₂ at stage 2, the total number of outcomes is n₁ × n₂.",
          "Example: choose from 3 starters and 4 desserts → 3 × 4 = 12 possible menus. Roll 2 dice → 6 × 6 = 36 outcomes.",
          "Arrangement with repetition of k objects from n: nᵏ outcomes. Example: 3 digits from 0–9 (with repetition) → 10³ = 1000 combinations.",
          "Combination (unordered, without repetition) of k elements from n: C(n,k) = n! / (k! × (n−k)!). Example: choose 2 students from 5 → C(5,2) = 10.",
        ],
    ar: [
          "عدّ النتائج الممكنة أساسي لحساب الاحتمالات الكلاسيكية. كلما كثرت النتائج احتجنا إلى أساليب منهجية أكثر.",
          "مبدأ الضرب: إذا اشتملت التجربة على مرحلتين مستقلتين بـ n₁ نتيجة في الأولى و n₂ في الثانية، فالعدد الإجمالي = n₁ × n₂.",
          "مثال: اختيار من 3 مقبلات و4 حلويات → 3 × 4 = 12 قائمة. رمي نردين → 36 نتيجة.",
          "التنسيق بتكرار لـ k عنصر من n: nᵏ نتيجة. مثال: 3 أرقام من 0-9 → 10³ = 1000.",
          "التوافيق (اختيار بدون ترتيب أو تكرار) من k من n: C(n,k) = n! / (k! × (n−k)!). مثال: اختيار 2 طلاب من 5 → C(5,2) = 10.",
        ],
    fa: [
          "شمارش نتایج ممکن یک آزمایش برای محاسبه احتمال‌های کلاسیک ضروری است.",
          "اصل ضرب: اگر آزمایش دارای دو مرحله مستقل با n₁ نتیجه در مرحله اول و n₲ در مرحله دوم باشد، تعداد کل نتایج = n₁ × n₂.",
          "مثال: انتخاب از ۳ پیش‌غذا و ۴ دسر → ۳ × ۴ = ۱۲ منو. انداختن ۲ تاس → ۶ × ۶ = ۳۶ نتیجه.",
          "چینش با تکرار k شیء از n: nᵏ نتیجه. مثال: ۳ رقم از ۰–۹ (با تکرار) → ۱۰³ = ۱۰۰۰.",
          "ترکیب (بدون ترتیب و بدون تکرار) k عنصر از n: C(n,k) = n! / (k! × (n−k)!). مثال: انتخاب ۲ دانش‌آموز از ۵ → C(5,2) = 10.",
        ],
    ti: [
          "ናይ ፈተነ ክኾኑ ዝኽእሉ ውጽኢታት ምቑጻር ናይ ክላሲካዊ ዕድሎ ምሕሳብ ኣድላዪ እዩ።",
          "ሕጊ ናይ ማባዛሕ: ፈተነ ብክልተ ናጻ ምዕራፋት ምስ ዝህሉ n₁ ኣብ ቀዳምን n₂ ኣብ ካልኣይን ጠቅላላ ውጽኢታት = n₁ × n₂.",
          "ኣብነት: ካብ 3 ቀዳሞት ምዕሶ 4 ጣፍ ምምራጽ → 3 × 4 = 12 ዝዕቐናዉ ሜኑ. ክልተ ቀለዓ ምድርባይ → 36 ውጽኢታት.",
          "ምስ ድግሚ k ካብ n ምልቃቕ: nᵏ ውጽኢታት. ኣብነት: 3 ቁጽርታት ካብ 0-9 → 10³ = 1000.",
          "ጥምረታት (ካብ k ናብ n ብዘይ ስርዓትን ድግሚን): C(n,k) = n! / (k! × (n−k)!). ኣብነት: 2 ተምሃሮ ካብ 5 → C(5,2) = 10.",
        ],
    uk: [
          "Підрахунок можливих результатів досліду є основою для обчислення класичних імовірностей.",
          "Принцип множення: якщо дослід має два незалежні етапи з n₁ результатами на першому та n₂ на другому, загальна кількість результатів = n₁ × n₂.",
          "Приклад: вибір із 3 закусок і 4 десертів → 3 × 4 = 12 меню. Кидання 2 кубиків → 36 результатів.",
          "Розміщення з повторенням k об'єктів із n: nᵏ результатів. Приклад: 3 цифри з 0–9 → 10³ = 1000.",
          "Комбінація (вибір без порядку і повторень) k елементів із n: C(n,k) = n! / (k! × (n−k)!). Приклад: вибрати 2 учнів із 5 → C(5,2) = 10.",
        ],
  },
};
