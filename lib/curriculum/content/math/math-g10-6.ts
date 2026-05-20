import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G10_6_LESSON: MathSubmoduleLesson = {
    submoduleId: "G10-6",
    submoduleCode: "G10.6",
    theory: {
      title: {
        fr: "Applications de la trigonométrie",
        en: "Applications of Trigonometry",
        ar: "تطبيقات المثلثومترية",
        fa: "کاربردهای مثلثات",
        ti: "ምጥቃም ትሪጎኖሜትሪ",
        uk: "Застосування тригонометрії",
      },
      paragraphs: {
        fr: [
          "La trigonométrie permet de résoudre des problèmes réels : mesurer la hauteur d'un bâtiment sans y monter, calculer une distance inaccessible, déterminer un angle d'inclinaison.",
          "Angle d'élévation : angle mesuré depuis l'horizontale vers le haut en direction d'un objet. Angle de dépression : angle mesuré depuis l'horizontale vers le bas.",
          "Exemple — hauteur d'un arbre : si tu te trouves à 20 m de la base et que l'angle d'élévation vers le sommet est 35°, alors hauteur = 20 × tan(35°) ≈ 14 m.",
          "Stratégie générale : 1) Dessine un croquis. 2) Identifie le triangle rectangle. 3) Nomme les côtés et l'angle connu. 4) Choisis sin, cos ou tan. 5) Résous.",
          "Les applications classiques incluent : hauteur de bâtiment / tour, largeur d'une rivière, longueur d'une rampe ou d'un câble, navigation.",
        ],
        en: [
          "Trigonometry solves real-world problems: measuring a building's height without climbing it, calculating an inaccessible distance, or finding an angle of inclination.",
          "Angle of elevation: angle measured from horizontal upward toward an object. Angle of depression: angle measured from horizontal downward.",
          "Example — tree height: if you are 20 m from the base and the elevation angle to the top is 35°, height = 20 × tan(35°) ≈ 14 m.",
          "General strategy: 1) Draw a sketch. 2) Identify the right triangle. 3) Name the sides and known angle. 4) Choose sin, cos or tan. 5) Solve.",
          "Classic applications: building/tower height, river width, ramp or cable length, navigation.",
        ],
        ar: [
          "تُحلُّ المثلثومترية مسائل واقعية: قياس ارتفاع مبنى دون تسلقه، حساب مسافة بعيدة، تحديد زاوية ميل.",
          "زاوية الارتفاع: مقاسة من الأفق للأعلى. زاوية الانحدار: مقاسة من الأفق للأسفل.",
          "مثال: إذا كنت على بُعد 20 م من قاعدة شجرة وزاوية الارتفاع 35°، فإن الارتفاع = 20 × tan(35°) ≈ 14 م.",
          "الاستراتيجية: 1) ارسم مخططًا. 2) حدِّد المثلث القائم. 3) سمِّ الأضلاع والزاوية. 4) اختر sin أو cos أو tan. 5) احسب.",
          "التطبيقات الكلاسيكية: ارتفاع مبنى، عرض نهر، طول منحدر أو كابل.",
        ],
        fa: [
          "مثلثات مسائل واقعی را حل می‌کند: اندازه‌گیری ارتفاع ساختمان، محاسبه فاصله‌های دور، تعیین زاویه شیب.",
          "زاویه ارتفاع: از افق به بالا. زاویه فرود: از افق به پایین.",
          "مثال: اگر 20 متر از پایه درخت فاصله داری و زاویه ارتفاع 35° است، ارتفاع = 20 × tan(35°) ≈ 14 متر.",
          "راهبرد: ۱) طرح بکش. ۲) مثلث قائم را مشخص کن. ۳) اضلاع و زاویه را نام‌گذاری کن. ۴) sin، cos یا tan را انتخاب کن. ۵) حل کن.",
          "کاربردهای کلاسیک: ارتفاع ساختمان/برج، عرض رودخانه، طول رمپ یا کابل، ناوبری.",
        ],
        ti: [
          "ትሪጎኖሜትሪ ናይ ኣካላዊ ዓለም ጸገማት ይፈትሕ: ቁመት ህንጻ ምዕቃን፣ ርሕቀት ዘይምቁር ምሕሳብ፣ ዝምታ ማእዘን ምውሳን።",
          "ማእዘን ምብራቕ: ካብ ሃርዞንታል ናብ ላዕሊ ዝሕሳብ። ማእዘን ምዝራብ: ካብ ሃርዞንታል ናብ ታሕቲ።",
          "ኣብነት: ካብ መሰረት ዕጨይቲ 20 ሜ ምስ ትርሕቕ ማእዘን ምብራቕ 35° ምስ ዝኾን፣ ቁመት = 20 × tan(35°) ≈ 14 ሜ.",
          "ሓፈሻዊ ስትራቴጂ: 1) ስልኪ ዕቅዲ ስሓቡ። 2) ማእዘን ቅኑዕ ሶስተ ሸነኽ ኣለሊ። 3) ጎናታትን ማእዘን ሰምዮ። 4) sin፣ cos ወይ tan ምረጽ። 5) ፍትሓዮ.",
          "ክላሲካዊ ምጥቃምታት: ቁመት ህንጻ/ግምቢ፣ ሰፊሕ ወሓዚ፣ ቁመት ሽርጢ.",
        ],
        uk: [
          "Тригонометрія вирішує реальні задачі: вимірювання висоти будівлі без підйому, обчислення недоступних відстаней, визначення кутів нахилу.",
          "Кут підвищення: вимірюється від горизонталі вгору. Кут зниження: від горизонталі вниз.",
          "Приклад: якщо ти стоїш за 20 м від основи дерева, а кут підвищення до верхівки 35°, то висота = 20 × tan(35°) ≈ 14 м.",
          "Загальна стратегія: 1) Намалюй ескіз. 2) Визнач прямокутний трикутник. 3) Назви сторони та відомий кут. 4) Обери sin, cos або tan. 5) Розв'яжи.",
          "Класичні застосування: висота будівлі/вежі, ширина річки, довжина пандуса або кабелю, навігація.",
        ],
      },
    },
    exercises: [
      {
        id: "g10-6-e1",
        promptFr: "Tu te trouves à 30 m de la base d'un arbre. L'angle d'élévation vers son sommet est 45°. Quelle est la hauteur de l'arbre ? (tan 45° = 1)",
        type: "number",
        acceptable: ["30"],
      },
      {
        id: "g10-6-e2",
        promptFr: "Une rampe monte d'une hauteur de 5 m sur une longueur horizontale de 12 m. Quel rapport trigonométrique te donne directement tan(α) ?",
        type: "short_text",
        acceptable: ["5/12", "opposé/adjacent", "hauteur/base"],
      },
      {
        id: "g10-6-e3",
        promptFr: "Un câble de 20 m fait un angle de 60° avec le sol horizontal. À quelle hauteur est fixé le câble au poteau ? (sin 60° ≈ 0,866)",
        type: "short_text",
        acceptable: ["17,32", "17.32", "17,3", "17.3"],
      },
      {
        id: "g10-6-e4",
        promptFr: "Depuis le sommet d'une falaise de 50 m, l'angle de dépression vers un bateau est 30°. Quelle est la distance horizontale du bateau à la base de la falaise ? (tan 30° ≈ 0,577)",
        type: "short_text",
        acceptable: ["86,6", "86.6", "87", "86,7", "86.7"],
      },
      {
        id: "g10-6-e5",
        promptFr: "Une pente de ski est longue de 500 m et fait un angle de 20° avec l'horizontale. Quelle est la hauteur verticale de la pente ? (sin 20° ≈ 0,342)",
        type: "short_text",
        acceptable: ["171", "171,0", "171.0"],
      },
    ],
  };
