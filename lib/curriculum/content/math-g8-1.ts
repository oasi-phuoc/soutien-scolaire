import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G8_1_LESSON: MathSubmoduleLesson = {
    submoduleId: "G8-1",
    submoduleCode: "G8.1",
    theory: {
      title: {
        fr: "Reconnaître les solides",
        en: "Recognizing solids",
        ar: "التعرف على المجسمات",
        fa: "شناسایی اجسام",
        ti: "ናይ ደቂቅ ምፍላጥ",
        uk: "Розпізнавання тіл",
      },
      paragraphs: {
        fr: [
          "Les solides (ou polyèdres) sont des figures à trois dimensions. Les principaux : cube, pavé droit (cuboid), prisme, pyramide, cylindre, cône, sphère.",
          "Cube : 6 faces carrées égales, 8 sommets, 12 arêtes. Pavé droit : 6 faces rectangulaires, 8 sommets, 12 arêtes.",
          "Cylindre : deux bases circulaires et une surface latérale courbe. Cône : une base circulaire et un apex. Sphère : surface courbe équidistante d'un centre.",
          "Prisme : deux bases polygonales parallèles reliées par des rectangles. Pyramide : une base polygonale et des triangles convergeant en un sommet.",
        ],
        en: [
          "Solids (polyhedra) are three-dimensional figures. Main types: cube, cuboid, prism, pyramid, cylinder, cone, sphere.",
          "Cube: 6 equal square faces, 8 vertices, 12 edges. Cuboid: 6 rectangular faces.",
          "Cylinder: two circular bases + curved surface. Cone: one circular base + apex. Sphere: equidistant surface from center.",
          "Prism: two parallel polygon bases + rectangles. Pyramid: polygon base + triangles meeting at apex.",
        ],
        ar: [
          "المجسمات أشكال ثلاثية الأبعاد. الرئيسية: مكعب، متوازي مستطيلات، منشور، هرم، أسطوانة، مخروط، كرة.",
          "المكعب: 6 وجوه مربعة متساوية، 8 رؤوس، 12 حرفاً.",
          "الأسطوانة: قاعدتان دائريتان وسطح جانبي منحن.",
          "المنشور: قاعدتان مضلعتان متوازيتان. الهرم: قاعدة مضلعة ورأس.",
        ],
        fa: [
          "اجسام سه‌بعدی هستند. انواع اصلی: مکعب، مکعب مستطیل، منشور، هرم، استوانه، مخروط، کره.",
          "مکعب: 6 وجه مربع مساوی، 8 رأس، 12 یال.",
          "استوانه: دو قاعده دایره‌ای + سطح جانبی منحنی.",
          "منشور: دو قاعده چندضلعی موازی. هرم: قاعده چندضلعی + رأس.",
        ],
        ti: [
          "ደቂቅ (ፖሊሄድሮን) ሰለስቲ-ዓቐን ቅርጺ ዩ. ዋና ዓይነት: ኩብ, ፓቬ, ፕሪዝም, ፒራሚድ, ሲሊንደር, ኮን, ስፒር.",
          "ኩብ: 6 ዕኩል ካሬ ፊት, 8 ርእሲ, 12 ጥርዓ.",
          "ሲሊንደር: ክልተ ዓውዲ ሰረት + ካርቭ ጥሰርዊ ሰፊሓ.",
          "ፕሪዝም: ክልተ ፓራሌሎ ሰረት + ካሬ-ሓለቃ. ፒራሚድ: ሰረት + ርእሲ.",
        ],
        uk: [
          "Тіла (многогранники) — тривимірні фігури. Основні: куб, прямокутний паралелепіпед, призма, піраміда, циліндр, конус, куля.",
          "Куб: 6 рівних квадратних граней, 8 вершин, 12 ребер.",
          "Циліндр: дві кругові основи + бічна поверхня. Конус: кругова основа + вершина.",
          "Призма: дві паралельні многокутні основи + бічні прямокутники.",
        ],
      },
    },
    exercises: [
      { id: "g8-1-e1", promptFr: "Combien de faces a un cube ?", type: "number", acceptable: ["6"] },
      { id: "g8-1-e2", promptFr: "Quel solide a une base circulaire et un apex ?", type: "short_text", acceptable: ["cône", "cone"] },
      { id: "g8-1-e3", promptFr: "Combien d'arêtes a un cube ?", type: "number", acceptable: ["12"] },
      { id: "g8-1-e4", promptFr: "Quel solide a toute sa surface équidistante d'un centre ?", type: "short_text", acceptable: ["sphère", "sphere"] },
      { id: "g8-1-e5", promptFr: "Un prisme triangulaire a combien de faces au total ?", type: "number", acceptable: ["5"] },
    ],
  };
