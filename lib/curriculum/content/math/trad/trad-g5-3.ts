import type { SubmoduleTrad } from "./trad-types";

export const TRAD_G5_3: SubmoduleTrad = {
  submoduleId: "G5-3",
  title: {
    fr: "Translation",
    en: "Translation",
    ar: "الإزاحة",
    fa: "انتقال",
    ti: "ምስቅቅልዋ",
    uk: "Паралельне перенесення",
  },
  paragraphs: {
    fr: [
          "Une translation est un déplacement de toute la figure dans une direction et d'une distance fixées, sans rotation ni réflexion.",
          "Elle est définie par un vecteur de translation → v = (a ; b). Chaque point M(x, y) devient M'(x+a, y+b).",
          "Propriétés : conservation des distances, des angles et des aires. Les segments MM' sont tous parallèles et de même longueur.",
          "Exemple : translation de vecteur (3 ; −2) : le point (1, 4) devient (1+3, 4+(−2)) = (4, 2).",
        ],
    en: [
          "A translation shifts the entire figure by a fixed direction and distance, without rotation or reflection.",
          "Defined by vector → v = (a; b). Each point M(x, y) becomes M'(x+a, y+b).",
          "Properties: distances, angles, areas preserved. All MM' segments are parallel and equal.",
          "Example: vector (3; −2): point (1, 4) → (4, 2).",
        ],
    ar: [
          "الإزاحة تنقل الشكل بالكامل في اتجاه ومسافة ثابتين دون دوران أو انعكاس.",
          "تُعرف بشعاع → v = (a; b). كل نقطة M(x,y) تصبح M'(x+a, y+b).",
          "الخصائص: حفظ المسافات والزوايا والمساحات.",
          "مثال: شعاع (3; −2): النقطة (1, 4) → (4, 2).",
        ],
    fa: [
          "انتقال کل شکل را در یک جهت و فاصله ثابت جابجا می‌کند، بدون چرخش یا بازتاب.",
          "با بردار v = (a; b) تعریف می‌شود. هر نقطه M(x,y) به M'(x+a, y+b) می‌رود.",
          "ویژگی‌ها: فاصله‌ها، زوایا و مساحت‌ها حفظ می‌شوند.",
          "مثال: بردار (3; −2): نقطه (1, 4) → (4, 2).",
        ],
    ti: [
          "ምስቅቅልዋ ናይ ምሉእ ቅርጺ ናብ ቋሚ ሸነኽ ን ርሕቀት ምቅይያር ዩ ብዘይ ምምቕቃሉ ወይ ምቅዋም.",
          "ብቬክቶር v = (a; b) ዝውሰን ዩ. ነፍሲ ወከፍ ነጥቢ M(x,y) M'(x+a, y+b) ይኸውን.",
          "ንብረታት: ርሕቀት, ኩርናዓት, ሰፊሓ ዕቃቤ.",
          "ምሳሌ: ቬክቶር (3; −2): ነጥቢ (1, 4) → (4, 2).",
        ],
    uk: [
          "Паралельне перенесення зміщує всю фігуру на фіксований вектор без повороту чи відображення.",
          "Задається вектором → v = (a; b). Кожна точка M(x, y) → M'(x+a, y+b).",
          "Властивості: зберігаються відстані, кути, площі. Усі відрізки MM' паралельні й рівні.",
          "Приклад: вектор (3; −2): точка (1, 4) → (4, 2).",
        ],
  },
  consignes: {
    "g5-3-e1": { fr: "Translation de vecteur (2 ; 3). Point (1 ; 1) → ?", en: "Translation by vector (2 ; 3). Point (1 ; 1) → ? ?" },
    "g5-3-e2": { fr: "Translation de vecteur (−1 ; 4). Point (5 ; 2) → x-coordonnée = ?", en: "Translation by vector (−1 ; 4). Point (5 ; 2) → x-coordonnee = ? ?" },
    "g5-3-e3": { fr: "La translation conserve-t-elle les distances ? (oui/non)", en: "Does translation preserve distances? (yes/no)" },
    "g5-3-e4": { fr: "Translation de vecteur (0 ; 5). Le point (3 ; 2) devient (3 ; ?)", en: "Translation by vector (0 ; 5). The point (3 ; 2) becomes (3 ; ?)" },
    "g5-3-e5": { fr: "Après une translation, la figure image est-elle de même taille ? (oui/non)", en: "After a translation, is the image figure the same size? (yes/no)" },
  },
};