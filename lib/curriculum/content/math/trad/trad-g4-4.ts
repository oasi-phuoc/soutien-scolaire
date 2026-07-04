import type { SubmoduleTrad } from "./trad-types";

const S = (fr: string, en: string, ar: string, fa: string, ti: string, uk: string, pt: string, so: string, tr: string, ps: string) =>
  ({ fr, en, ar, fa, ti, uk, pt, so, tr, ps });

const A = (fr: string[], en: string[], ar: string[], fa: string[], ti: string[], uk: string[], pt: string[], so: string[], tr: string[], ps: string[]) =>
  ({ fr, en, ar, fa, ti, uk, pt, so, tr, ps });

export const TRAD_G4_4: SubmoduleTrad = {
  submoduleId: "G4-4",
  title: {
    fr: "Aire du parallélogramme",
    en: "Area of a parallelogram",
    ar: "مساحة متوازي الأضلاع",
    fa: "مساحت متوازی‌الاضلاع",
    ti: "ናይ ፓራሌሎግራም ሰፊሓ",
    uk: "Площа паралелограма",
  },
  blocks: [
    // 0 — heading "Parallélogramme" (black)
    { text: S(
      "Parallélogramme",
      "Parallelogram",
      "متوازي الأضلاع",
      "متوازی‌الاضلاع",
      "ፓራሌሎግራም",
      "Паралелограм",
      "Paralelogramo",
      "Parallelogram",
      "Paralel kenar dörtgen",
      "موازي الاضلاع"
    ) },

    // 1 — plain
    { text: S(
      "L'aire d'un parallélogramme dépend de sa **base (b)** et de sa **hauteur (h)**.",
      "The area of a parallelogram depends on its **base (b)** and its **height (h)**.",
      "مساحة متوازي الأضلاع تعتمد على **قاعدته (b)** وعلى **ارتفاعه (h)**.",
      "مساحت متوازی‌الاضلاع به **قاعده (b)** و **ارتفاع (h)** آن بستگی دارد.",
      "ሰፊሓ ናይ ፓራሌሎግራም ናይ **ሰረቱ (b)** ን **ቁመቱ (h)** ይምርኰስ።",
      "Площа паралелограма залежить від його **основи (b)** та **висоти (h)**.",
      "A área de um paralelogramo depende da sua **base (b)** e da sua **altura (h)**.",
      "Aagga parallelogram-ka wuxuu ku xidhan yahay **saldhiggiisa (b)** iyo **dhererkooda (h)**.",
      "Bir paralel kenar dörtgenin alanı **tabanına (b)** ve **yüksekliğine (h)** bağlıdır.",
      "د موازي الاضلاع مساحت د **قاعدې (b)** او **لوړوالي (h)** پورې اړه لري."
    ) },

    // 2 — rule "Formule"
    { label: S(
        "Formule", "Formula", "الصيغة", "فرمول", "ቅጥዒ", "Формула", "Fórmula", "Qaacidada", "Formül", "فورمول"
      ),
      items: A(
        ["A = b × h"],
        ["A = b × h"],
        ["A = b × h"],
        ["A = b × h"],
        ["A = b × h"],
        ["A = b × h"],
        ["A = b × h"],
        ["A = b × h"],
        ["A = b × h"],
        ["A = b × h"]
      )
    },

    // 3 — highlight "Attention : hauteur ≠ côté oblique"
    { text: S(
      "Attention : hauteur ≠ côté oblique",
      "Note: height ≠ slanted side",
      "تنبيه: الارتفاع ≠ الضلع المائل",
      "توجه: ارتفاع ≠ ضلع مایل",
      "ጥንቃቐ: ቁመት ≠ ጥምዙዝ ጎቦ",
      "Увага: висота ≠ похила сторона",
      "Atenção: altura ≠ lado oblíquo",
      "Digniin: dhererka ≠ dhinaca jeex-jeexan",
      "Dikkat: yükseklik ≠ eğik kenar",
      "پام: لوړوالی ≠ مایل اړخ"
    ) },

    // 4 — section (label="", items)
    { label: S("", "", "", "", "", "", "", "", "", ""),
      items: A(
        [
          "La **hauteur h** est la distance **perpendiculaire** entre les deux bases parallèles.",
          "Ce n'est **pas** la longueur du côté oblique du parallélogramme.",
        ],
        [
          "The **height h** is the **perpendicular** distance between the two parallel bases.",
          "It is **not** the length of the slanted side of the parallelogram.",
        ],
        [
          "**الارتفاع h** هو المسافة **العمودية** بين القاعدتين المتوازيتين.",
          "إنه **ليس** طول الضلع المائل لمتوازي الأضلاع.",
        ],
        [
          "**ارتفاع h** فاصله **عمودی** بین دو قاعده موازی است.",
          "طول ضلع مایل متوازی‌الاضلاع **نیست**.",
        ],
        [
          "**ቁመት h** ካብ ክልተ ፓራሌሎ ሰረት **ቀጥታ ርሕቀት** ዩ።",
          "ናይ ፓራሌሎግራም ጥምዙዝ ጎቦ ቁመት **ኣይኮነን**።",
        ],
        [
          "**Висота h** — це **перпендикулярна** відстань між двома паралельними основами.",
          "Це **не** довжина похилої сторони паралелограма.",
        ],
        [
          "A **altura h** é a distância **perpendicular** entre as duas bases paralelas.",
          "**Não** é o comprimento do lado oblíquo do paralelogramo.",
        ],
        [
          "**Dhererka h** waa masaafada **toosan** u dhexeysa labada saldhig ee is-wareega.",
          "**Ma aha** dhererka dhinaca jeex-jeexan ee parallelogram-ka.",
        ],
        [
          "**Yükseklik h**, iki paralel taban arasındaki **dik** mesafedir.",
          "Paralel kenar dörtgenin eğik kenarının uzunluğu **değildir**.",
        ],
        [
          "**لوړوالی h** د دوو موازي قاعدو تر مینځ **عمودي** واټن دی.",
          "د موازي الاضلاع مایل اړخ اوږدوالی **نه دی**.",
        ]
      )
    },

    // 5 — svg with captionFr
    { caption: S(
      "Parallélogramme — hauteur h mesurée à l'extérieur, perpendiculaire aux bases",
      "Parallelogram — height h measured outside, perpendicular to the bases",
      "متوازي الأضلاع — الارتفاع h قياس خارجي، عمودي على القاعدتين",
      "متوازی‌الاضلاع — ارتفاع h از خارج اندازه‌گیری، عمود بر قاعده‌ها",
      "ፓራሌሎግራም — ቁመት h ካብ ደገ ዝሕሰብ, ቀጥታዊ ናብ ሰረታት",
      "Паралелограм — висота h виміряна зовні, перпендикулярно до основ",
      "Paralelogramo — altura h medida no exterior, perpendicular às bases",
      "Parallelogram — dhererka h la cabiray dibadda, toosan saldhigyada",
      "Paralel kenar dörtgen — yükseklik h dışarıdan ölçülür, tabanlara dik",
      "موازي الاضلاع — لوړوالی h د بهر اندازه کول، قاعدو ته عمودي"
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
      "مثال"
    ) },

    // 7 — section (label="", items)
    { label: S("", "", "", "", "", "", "", "", "", ""),
      items: A(
        [
          "Parallélogramme base 10 cm, hauteur 4 cm :",
          "A = 10 × 4 = **40 cm²**",
        ],
        [
          "Parallelogram base 10 cm, height 4 cm:",
          "A = 10 × 4 = **40 cm²**",
        ],
        [
          "متوازي الأضلاع قاعدة 10 سم، ارتفاع 4 سم:",
          "A = 10 × 4 = **40 سم²**",
        ],
        [
          "متوازی‌الاضلاع قاعده 10 سانتیمتر، ارتفاع 4 سانتیمتر:",
          "A = 10 × 4 = **40 سانتیمتر²**",
        ],
        [
          "ፓራሌሎግራም ሰረት 10 ሰም, ቁመት 4 ሰም:",
          "A = 10 × 4 = **40 ሰም²**",
        ],
        [
          "Паралелограм основа 10 см, висота 4 см:",
          "A = 10 × 4 = **40 см²**",
        ],
        [
          "Paralelogramo base 10 cm, altura 4 cm:",
          "A = 10 × 4 = **40 cm²**",
        ],
        [
          "Parallelogram saldhig 10 cm, dherer 4 cm:",
          "A = 10 × 4 = **40 cm²**",
        ],
        [
          "Paralel kenar dörtgen taban 10 cm, yükseklik 4 cm:",
          "A = 10 × 4 = **40 cm²**",
        ],
        [
          "موازي الاضلاع قاعده 10 سم، لوړوالی 4 سم:",
          "A = 10 × 4 = **40 سم²**",
        ]
      )
    },

    // 8 — highlight "Intuition"
    { text: S(
      "Intuition",
      "Intuition",
      "البديهة",
      "شهود",
      "ሓሳብ",
      "Інтуїція",
      "Intuição",
      "Faham",
      "Sezgi",
      "احساس"
    ) },

    // 9 — section (label="", items)
    { label: S("", "", "", "", "", "", "", "", "", ""),
      items: A(
        [
          "On peut couper un triangle à une extrémité et le recoller de l'autre côté pour obtenir un **rectangle** de même base et hauteur.",
        ],
        [
          "You can cut a triangle from one end and reattach it on the other side to get a **rectangle** with the same base and height.",
        ],
        [
          "يمكن قطع مثلث من طرف وإلصاقه من الجانب الآخر للحصول على **مستطيل** بنفس القاعدة والارتفاع.",
        ],
        [
          "می‌توان یک مثلث را از یک طرف برید و به طرف دیگر چسباند تا یک **مستطیل** با قاعده و ارتفاع یکسان به دست آید.",
        ],
        [
          "ሓደ ሰለስ-ጎቦ ካብ ሓደ ወዲ ቆሪጽካ ናብ ካልኣይ ጎድኑ ብምጥጣፍ ናይ ሓደ ሰረት ን ቁመት ዘለዎ **ካሬ-ሓለቃ** ምርካብ ዝከኣሉ ዩ።",
        ],
        [
          "Можна відрізати трикутник з одного краю і перенести його на інший бік, щоб отримати **прямокутник** з тією ж основою і висотою.",
        ],
        [
          "Pode-se cortar um triângulo numa extremidade e colá-lo no outro lado para obter um **retângulo** com a mesma base e altura.",
        ],
        [
          "Waxaad xiran kartaa saddex-xagal dhinac kasta oo aad u dhejiso dhinaca kale si aad u hesho **wareegsanaanta** isku saldhig iyo dherer leh.",
        ],
        [
          "Bir kenardan üçgen kesip diğer tarafa yapıştırarak aynı taban ve yüksekliğe sahip bir **dikdörtgen** elde edebilirsiniz.",
        ],
        [
          "د یوه سر نه مثلث کول او د بل اړخ ته یې چسپول ممکن دي ترڅو ورته قاعدې او لوړوالي سره **مستطیل** تر لاسه شي.",
        ]
      )
    },
  ],
  paragraphs: {
    fr: [
          "Formule : A = base × hauteur.",
          "La hauteur est la distance perpendiculaire entre deux côtés parallèles (pas la longueur du côté oblique).",
          "Exemple : parallélogramme de base 10 cm et hauteur 4 cm → A = 10 × 4 = 40 cm².",
          "Astuce : le parallélogramme peut être transformé en rectangle de même base et hauteur (en découpant un triangle et le déplaçant).",
        ],
    en: [
          "Formula: A = base × height.",
          "Height is the perpendicular distance between the parallel sides (not the slant side).",
          "Example: base 10 cm, height 4 cm → A = 40 cm².",
          "Tip: a parallelogram can be rearranged into a rectangle with the same base and height.",
        ],
    ar: [
          "الصيغة: A = القاعدة × الارتفاع.",
          "الارتفاع المسافة العمودية بين الضلعين المتوازيين.",
          "مثال: قاعدة 10 سم، ارتفاع 4 سم → A = 40 سم².",
          "يمكن تحويل متوازي الأضلاع إلى مستطيل.",
        ],
    fa: [
          "فرمول: A = قاعده × ارتفاع.",
          "ارتفاع فاصله عمودی بین اضلاع موازی است (نه طول ضلع مایل).",
          "مثال: قاعده 10 سانتیمتر، ارتفاع 4 سانتیمتر → A = 40 سانتیمتر².",
          "متوازی‌الاضلاع به مستطیل با قاعده و ارتفاع یکسان تبدیل می‌شود.",
        ],
    ti: [
          "ቅጥዒ: A = ሰረት × ቁመት.",
          "ቁመት ካብ ፓራሌሎ ጎቦ ናብ ቁምብዛ ቀጥታ ርሕቀት ዩ.",
          "ምሳሌ: ሰረት 10 ሰም, ቁመት 4 ሰም → A = 40 ሰም².",
          "ፓራሌሎግራም ናብ ካሬ-ሓለቃ ናህሰ ሰረት ን ቁመት ምቕያሩ ዝከኣሉ ዩ.",
        ],
    uk: [
          "Формула: A = основа × висота.",
          "Висота — перпендикулярна відстань між паралельними сторонами.",
          "Приклад: основа 10 см, висота 4 см → A = 40 см².",
          "Паралелограм можна перетворити на прямокутник із тією ж основою і висотою.",
        ],
  },
  consignes: {
    "g3-4-e1": { fr: "Aire d'un parallélogramme : base 7 cm, hauteur 4 cm.", en: "Area of a parallelogram: base 7 cm, height 4 cm." },
    "g3-4-e2": { fr: "Aire d'un parallélogramme : base 11 cm, hauteur 5 cm.", en: "Area of a parallelogram: base 11 cm, height 5 cm." },
    "g3-4-e3": { fr: "Parallélogramme d'aire 48 cm² et base 8 cm. Hauteur = ?", en: "Parallelogram with area 48 cm² and base 8 cm. Height = ?" },
    "g3-4-e4": { fr: "Un rectangle est-il un cas particulier de parallélogramme ? (oui/non)", en: "Is a rectangle a special case of a parallelogram? (yes/no)" },
    "g3-4-e5": { fr: "Aire d'un parallélogramme : base 9 cm, hauteur 6 cm.", en: "Area of a parallelogram: base 9 cm, height 6 cm." },
  },
};
