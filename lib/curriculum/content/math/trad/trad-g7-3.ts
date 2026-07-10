import type { SubmoduleTrad } from "./trad-types";

const S = (fr: string, en: string, ar: string, fa: string, ti: string, uk: string) =>
  ({ fr, en, ar, fa, ti, uk });

export const TRAD_G7_3: SubmoduleTrad = {
  submoduleId: "G7-3",
  title: S(
    "Symétrie centrale",
    "Central symmetry",
    "التماثل المركزي",
    "تقارن مرکزی",
    "ማእከላይ ምትእስሳር",
    "Центральна симетрія",
  ),
  blocks: [
    { text: S("Centre de symétrie", "Center of symmetry", "مركز التماثل", "مرکز تقارن", "ናይ ምትእስሳር ማእከል", "Центр симетрії") },
    { text: S(
      "La symétrie centrale de centre O associe à chaque point M son image M' telle que O est le milieu de [MM']. C'est une rotation de 180° autour de O.",
      "Central symmetry with center O maps each point M to M' so that O is the midpoint of [MM']. It is a 180° rotation about O.",
      "التماثل المركزي ذو المركز O يربط كل نقطة M بصورتها M' بحيث يكون O منتصف [MM']. وهو دوران 180° حول O.",
      "تقارن مرکزی با مرکز O هر نقطه M را به M' می‌برد طوری که O وسط [MM'] است. این چرخش ۱۸۰° حول O است.",
      "ማእከላይ ምትእስሳር ናይ O ማእከል ነፍሲ ወከፍ M ናብ M' የሰጋግር፣ O ማእከል ናይ [MM'] እዩ። 180° ምምቕቃሉ እዩ።",
      "Центральна симетрія з центром O відображає M у M' так, що O — середина [MM']. Це поворот на 180° навколо O.",
    ) },
    { text: S("Propriétés", "Properties", "الخصائص", "ویژگی‌ها", "ንብረታት", "Властивості") },
    { label: S("", "", "", "", "", ""), items: {
      fr: ["Conservation des distances, des angles et des aires.", "O est le milieu de chaque [MM']."],
      en: ["Distances, angles and areas are preserved.", "O is the midpoint of each [MM']."],
      ar: ["حفظ المسافات والزوايا والمساحات.", "O منتصف كل [MM']."],
      fa: ["فاصله‌ها، زوایا و مساحت‌ها حفظ می‌شوند.", "O وسط هر [MM'] است."],
      ti: ["ርሕቀት፣ ኩርናዓትን ሰፊሓን ይሕለዉ።", "O ማእከል ናይ ነፍሲ ወከፍ [MM'] እዩ።"],
      uk: ["Зберігаються відстані, кути й площі.", "O — середина кожного [MM']."],
    } },
  ],
  paragraphs: {
    fr: ["Symétrie centrale = rotation de 180° autour du centre O."],
    en: ["Central symmetry = 180° rotation about center O."],
  },
  consignes: {
    "g7-3-e1": S("La symétrie centrale conserve-t-elle les longueurs ? (oui/non)", "Does central symmetry preserve lengths? (yes/no)", "هل يحفظ التماثل المركزي الأطوال؟ (نعم/لا)", "آیا تقارن مرکزی طول‌ها را حفظ می‌کند؟ (بله/خیر)", "ማእከላይ ምትእስሳር ንውሓታት ይሕልዮ ድዩ? (እወ/ኣይፋል)", "Чи зберігає центральна симетрія довжини? (так/ні)"),
    "g7-3-e2": S("Le symétrique du point (2 ; 3) par rapport à O(0,0) est ?", "The image of (2 ; 3) through O(0,0) is?", "صورة النقطة (2 ؛ 3) بالنسبة إلى O(0,0)؟", "قرینه نقطه (۲ ؛ ۳) نسبت به O(۰,۰)؟", "ናይ (2 ; 3) ምስል ብO(0,0) እንታይ እዩ?", "Образ точки (2 ; 3) відносно O(0,0)?"),
    "g7-3-e3": S("Un triangle a-t-il généralement un centre de symétrie ? (oui/non)", "Does a triangle usually have a center of symmetry? (yes/no)", "هل للمثلث عادة مركز تماثل؟ (نعم/لا)", "آیا مثلث معمولاً مرکز تقارن دارد؟ (بله/خیر)", "ስሉሳይ ብተደጋጋሚ ማእከል ምትእስሳር ኣለዎ ድዩ? (እወ/ኣይፋል)", "Чи має трикутник зазвичай центр симетрії? (так/ні)"),
    "g7-3-e4": S("Un parallélogramme a-t-il un centre de symétrie ? (oui/non)", "Does a parallelogram have a center of symmetry? (yes/no)", "هل لمتوازي الأضلاع مركز تماثل؟ (نعم/لا)", "آیا متوازی‌الاضلاع مرکز تقارن دارد؟ (بله/خیر)", "ፓራለሎግራም ማእከል ምትእስሳር ኣለዎ ድዩ? (እወ/ኣይፋል)", "Чи має паралелограм центр симетрії? (так/ні)"),
    "g7-3-e5": S("La symétrie centrale est une rotation de combien de degrés ?", "Central symmetry is a rotation of how many degrees?", "التماثل المركزي دوران بكم درجة؟", "تقارن مرکزی چند درجه چرخش است؟", "ማእከላይ ምትእስሳር ክንደይ ዲግሪ ምምቕቃሉ እዩ?", "Центральна симетрія — поворот на скільки градусів?"),
  },
};
