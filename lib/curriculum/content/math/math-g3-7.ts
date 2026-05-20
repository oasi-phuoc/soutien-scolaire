import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G3_7_LESSON: MathSubmoduleLesson = {
    submoduleId: "G3-7",
    submoduleCode: "G3.7",
    theory: {
      title: {
        fr: "Figures composées",
        en: "Composite figures",
        ar: "الأشكال المركبة",
        fa: "اشکال ترکیبی",
        ti: "ምጥርናፍ ቅርጺ",
        uk: "Складені фігури",
      },
      paragraphs: {
        fr: [
          "Une figure composée est formée de plusieurs figures simples. On calcule son aire en additionnant les aires des parties.",
          "Méthode : (1) identifier les figures simples qui composent la figure ; (2) calculer l'aire de chaque partie ; (3) additionner.",
          "Exemple : un stade (rectangle + deux demi-cercles) = rectangle + disque complet.",
          "Astuce : dessiner les figures simples séparément pour éviter les erreurs.",
        ],
        en: [
          "A composite figure is made up of several simple shapes. Compute its area by adding the areas of each part.",
          "Method: (1) identify the simple shapes; (2) compute each area; (3) add them.",
          "Example: a stadium shape = rectangle + full circle.",
          "Tip: sketch the parts separately to avoid errors.",
        ],
        ar: [
          "الشكل المركب يتكون من أشكال بسيطة متعددة. نحسب مساحته بجمع مساحات الأجزاء.",
          "الطريقة: (1) حدد الأشكال البسيطة؛ (2) احسب كل مساحة؛ (3) اجمعها.",
          "مثال: شكل الملعب = مستطيل + دائرة كاملة.",
          "نصيحة: ارسم الأجزاء منفصلة لتجنب الأخطاء.",
        ],
        fa: [
          "شکل ترکیبی از چند شکل ساده تشکیل شده. مساحتش با جمع مساحات هر قسمت محاسبه می‌شود.",
          "روش: (1) شکل‌های ساده را شناسایی کن؛ (2) مساحت هر کدام را محاسبه کن؛ (3) جمع کن.",
          "مثال: شکل استادیوم = مستطیل + دایره کامل.",
          "نکته: قسمت‌ها را جداگانه رسم کن تا خطا نکنی.",
        ],
        ti: [
          "ምጥርናፍ ቅርጺ ካብ ብዙሕ ቀሊል ቅርጺ ዝቖምሉ ዩ. ሰፊሓ ናይ ክፋሉ ምኽፋሎ ዩ.",
          "ኣፈጻጽማ: (1) ቀሊል ቅርጺ ምፍላጥ; (2) ናይ ነፍሲ ወከፍ ሰፊሓ ምሕሳብ; (3) ምኽፋሎ.",
          "ምሳሌ: ናይ ስታዲዩም ቅርጺ = ካሬ-ሓለቃ + ምሉእ ዓውዲ.",
          "ምኽሪ: ክፋሉ ብተናጸሉ ምስሳሎ.",
        ],
        uk: [
          "Складена фігура утворена кількома простими фігурами. Площа = сума площ частин.",
          "Метод: (1) визначити прості фігури; (2) обчислити площу кожної; (3) скласти.",
          "Приклад: форма стадіону = прямокутник + повне коло.",
          "Порада: малювати частини окремо, щоб уникнути помилок.",
        ],
      },
    },
    exercises: [
      { id: "g3-7-e1", promptFr: "Figure : rectangle 6×4 cm + triangle base 6 cm hauteur 3 cm. Aire totale = ?", type: "number", acceptable: ["33"] },
      { id: "g3-7-e2", promptFr: "Demi-disque de rayon 5 cm (π ≈ 3,14). Aire = ?", type: "number", acceptable: ["39,25", "39.25"] },
      { id: "g3-7-e3", promptFr: "Carré 8×8 cm + demi-cercle de diamètre 8 cm (π ≈ 3,14). Aire totale ≈ ?", type: "number", acceptable: ["89,12", "89.12"] },
      { id: "g3-7-e4", promptFr: "Deux rectangles 5×3 cm et 4×2 cm côte à côte. Aire totale = ?", type: "number", acceptable: ["23"] },
      { id: "g3-7-e5", promptFr: "Rectangle 10×6 cm avec triangle intérieur de base 10 et hauteur 4 coupé. Aire restante = ?", type: "number", acceptable: ["40"] },
    ],
  };
