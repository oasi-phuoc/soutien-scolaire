import type { SubmoduleTrad } from "./trad-types";

const S = (fr: string, en: string, ar: string, fa: string, ti: string, uk: string, pt: string, so: string, tr: string, ps: string) =>
  ({ fr, en, ar, fa, ti, uk, pt, so, tr, ps });
const A = (fr: string[], en: string[], ar: string[], fa: string[], ti: string[], uk: string[], pt: string[], so: string[], tr: string[], ps: string[]) =>
  ({ fr, en, ar, fa, ti, uk, pt, so, tr, ps });

export const TRAD_A8_2: SubmoduleTrad = {
  submoduleId: "A8-2",
  title: S("Calcul de puissances", "Computing powers", "حساب القوى", "محاسبه توان‌ها", "ምሕሳብ ሓይልታት", "Обчислення степенів", "Cálculo de potências", "Xisaabinta awoodaha", "Üslü sayıları hesaplama", "د توانونو حساب"),
  blocks: [
    { text: S("Comment calculer une puissance", "How to compute a power", "كيف نحسب قوة", "چگونه توان را محاسبه کنیم", "ሓይሊ ከመይ ንሕስቦ", "Як обчислити степінь", "Como calcular uma potência", "Sida awood loo xisaabiyo", "Üs nasıl hesaplanır", "توان څنګه حسابېږي") },
    { text: S(
      "Pour calculer une puissance, on multiplie la **base** par elle-même autant de fois que l'indique l'**exposant**.",
      "To compute a power, multiply the **base** by itself as many times as the **exponent** indicates.",
      "لحساب قوة نضرب **الأساس** في نفسه بعدد المرات الذي يحدده **الأس**.",
      "برای محاسبه توان، **پایه** را به تعداد دفعاتی که **نما** نشان می‌دهد در خودش ضرب می‌کنیم.",
      "ሓይሊ ንምሕሳብ፣ **መሰረት** ብርእሱ ክንደይ ግዜ ከምዝበዝሕ **ኤክስፖናንት** ይሕብር።",
      "Щоб обчислити степінь, множимо **основу** саму на себе стільки разів, скільки показує **показник**.",
      "Para calcular uma potência, multiplica-se a **base** por ela própria tantas vezes quanto indica o **expoente**.",
      "Si loo xisaabiyo awood, **saldhigga** ayaa la isku dhuftaa inta jeer ee **jibbaarku** muujiyo.",
      "Bir üssü hesaplamak için **taban**, **üs** kadar kez kendisiyle çarpılır.",
      "د توان د حساب لپاره **بنسټ** د **توان** په شمېر له خپل ځان سره ضربېږي."
    ) },
    { headers: A(
      ["Puissance", "Développement", "Résultat"],
      ["Power", "Expanded form", "Result"],
      ["القوة", "النشر", "النتيجة"],
      ["توان", "گسترش", "نتیجه"],
      ["ሓይሊ", "ምዝርጋሕ", "ውጽኢት"],
      ["Степінь", "Розклад", "Результат"],
      ["Potência", "Desenvolvimento", "Resultado"],
      ["Awood", "Fidin", "Natiijo"],
      ["Üs", "Açılım", "Sonuç"],
      ["توان", "پراختيا", "پايله"]
    ) },
    { text: S("Propriétés des puissances (même base)", "Properties of powers (same base)", "خواص القوى (نفس الأساس)", "ویژگی‌های توان‌ها (پایه یکسان)", "ባህርያት ሓይልታት (ተመሳሳሊ መሰረት)", "Властивості степенів (однакова основа)", "Propriedades das potências (mesma base)", "Sifooyinka awoodaha (saldhig isku mid ah)", "Üslerin özellikleri (aynı taban)", "د توانونو ځانګړنې (يو بنسټ)") },
    { text: S("Règles de calcul", "Calculation rules", "قواعد الحساب", "قانون‌های محاسبه", "ሕግታት ሕሳብ", "Правила обчислення", "Regras de cálculo", "Xeerarka xisaabta", "Hesap kuralları", "د حساب قاعدې"), items: A(
      ["aⁿ × aᵐ = aⁿ⁺ᵐ  (on **additionne** les exposants)", "aⁿ ÷ aᵐ = aⁿ⁻ᵐ  (on **soustrait** les exposants)"],
      ["aⁿ × aᵐ = aⁿ⁺ᵐ  (we **add** the exponents)", "aⁿ ÷ aᵐ = aⁿ⁻ᵐ  (we **subtract** the exponents)"],
      ["aⁿ × aᵐ = aⁿ⁺ᵐ  (نقوم **بجمع** الأسس)", "aⁿ ÷ aᵐ = aⁿ⁻ᵐ  (نقوم **بطرح** الأسس)"],
      ["aⁿ × aᵐ = aⁿ⁺ᵐ  (**نماها را جمع** می‌کنیم)", "aⁿ ÷ aᵐ = aⁿ⁻ᵐ  (**نماها را کم** می‌کنیم)"],
      ["aⁿ × aᵐ = aⁿ⁺ᵐ  (ኤክስፖናንትታት **ንደምር**)", "aⁿ ÷ aᵐ = aⁿ⁻ᵐ  (ኤክስፖናንትታት **ንንክይ**)"],
      ["aⁿ × aᵐ = aⁿ⁺ᵐ  (**додаємо** показники)", "aⁿ ÷ aᵐ = aⁿ⁻ᵐ  (**віднімаємо** показники)"],
      ["aⁿ × aᵐ = aⁿ⁺ᵐ  (**somamos** os expoentes)", "aⁿ ÷ aᵐ = aⁿ⁻ᵐ  (**subtraímos** os expoentes)"],
      ["aⁿ × aᵐ = aⁿ⁺ᵐ  (jibbaarada waa **la isku daraa**)", "aⁿ ÷ aᵐ = aⁿ⁻ᵐ  (jibbaarada waa **la kala jaraa**)"],
      ["aⁿ × aᵐ = aⁿ⁺ᵐ  (üsleri **toplarız**)", "aⁿ ÷ aᵐ = aⁿ⁻ᵐ  (üsleri **çıkarırız**)"],
      ["aⁿ × aᵐ = aⁿ⁺ᵐ  (توانونه **جمع** کوو)", "aⁿ ÷ aᵐ = aⁿ⁻ᵐ  (توانونه **تفريق** کوو)"]
    ) },
    { text: S("Exemples d'application", "Application examples", "أمثلة تطبيقية", "مثال‌های کاربردی", "ተግባራዊ ኣብነታት", "Приклади застосування", "Exemplos de aplicação", "Tusaalooyin adeegsi", "Uygulama örnekleri", "عملي بېلګې") },
    { items: A(
      ["2³ × 2² = 2³⁺² = 2⁵ = 32", "3⁵ ÷ 3² = 3⁵⁻² = 3³ = 27", "5⁴ × 5¹ = 5⁵ = 3 125"],
      ["2³ × 2² = 2³⁺² = 2⁵ = 32", "3⁵ ÷ 3² = 3⁵⁻² = 3³ = 27", "5⁴ × 5¹ = 5⁵ = 3,125"],
      ["2³ × 2² = 2³⁺² = 2⁵ = 32", "3⁵ ÷ 3² = 3⁵⁻² = 3³ = 27", "5⁴ × 5¹ = 5⁵ = 3 125"],
      ["2³ × 2² = 2³⁺² = 2⁵ = 32", "3⁵ ÷ 3² = 3⁵⁻² = 3³ = 27", "5⁴ × 5¹ = 5⁵ = 3 125"],
      ["2³ × 2² = 2³⁺² = 2⁵ = 32", "3⁵ ÷ 3² = 3⁵⁻² = 3³ = 27", "5⁴ × 5¹ = 5⁵ = 3 125"],
      ["2³ × 2² = 2³⁺² = 2⁵ = 32", "3⁵ ÷ 3² = 3⁵⁻² = 3³ = 27", "5⁴ × 5¹ = 5⁵ = 3 125"],
      ["2³ × 2² = 2³⁺² = 2⁵ = 32", "3⁵ ÷ 3² = 3⁵⁻² = 3³ = 27", "5⁴ × 5¹ = 5⁵ = 3 125"],
      ["2³ × 2² = 2³⁺² = 2⁵ = 32", "3⁵ ÷ 3² = 3⁵⁻² = 3³ = 27", "5⁴ × 5¹ = 5⁵ = 3 125"],
      ["2³ × 2² = 2³⁺² = 2⁵ = 32", "3⁵ ÷ 3² = 3⁵⁻² = 3³ = 27", "5⁴ × 5¹ = 5⁵ = 3 125"],
      ["2³ × 2² = 2³⁺² = 2⁵ = 32", "3⁵ ÷ 3² = 3⁵⁻² = 3³ = 27", "5⁴ × 5¹ = 5⁵ = 3 125"]
    ) },
    { text: S(
      "Ces règles ne s'appliquent que lorsque les bases sont identiques. On ne peut pas simplifier 2³ × 3² directement avec ces règles.",
      "These rules apply only when the bases are the same. You cannot simplify 2³ × 3² directly with these rules.",
      "تطبق هذه القواعد فقط عندما تكون الأساسات متطابقة. لا يمكن تبسيط 2³ × 3² مباشرة بهذه القواعد.",
      "این قواعد فقط وقتی کاربرد دارند که پایه‌ها یکسان باشند. نمی‌توان 2³ × 3² را مستقیما با این قواعد ساده کرد.",
      "እዞም ሕግታት መሰረታት ተመሳሳሊ እንተኾይኖም ጥራይ ይሰርሑ። 2³ × 3² ብቐጥታ በዞም ሕግታት ክትቕልሎ ኣይትኽእልን።",
      "Ці правила діють лише тоді, коли основи однакові. Вираз 2³ × 3² не можна прямо спростити цими правилами.",
      "Estas regras só se aplicam quando as bases são iguais. Não se pode simplificar diretamente 2³ × 3² com estas regras.",
      "Xeerarkani waxay shaqeeyaan oo keliya marka saldhigyadu isku mid yihiin. 2³ × 3² si toos ah looguma fududayn karo xeerarkan.",
      "Bu kurallar yalnızca tabanlar aynı olduğunda uygulanır. 2³ × 3² bu kurallarla doğrudan sadeleştirilemez.",
      "دا قاعدې يوازې هغه وخت کار کوي چې بنسټونه يو شان وي. 2³ × 3² په مستقيم ډول په دې قاعدو نه ساده کېږي."
    ) },
  ],
};
