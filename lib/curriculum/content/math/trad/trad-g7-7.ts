import type { SubmoduleTrad } from "./trad-types";

const S = (fr: string, en: string, ar: string, fa: string, ti: string, uk: string) =>
  ({ fr, en, ar, fa, ti, uk });

export const TRAD_G7_7: SubmoduleTrad = {
  submoduleId: "G7-7",
  title: S("Isométries", "Isometries", "التقايسات", "ایزومتری‌ها", "ኢሶሜትሪ", "Ізометрії"),
  blocks: [
    { text: S("Transformations qui conservent les distances", "Transformations that preserve distances", "تحويلات تحفظ المسافات", "تبدیل‌هایی که فاصله را حفظ می‌کنند", "ርሕቀት ዝሕልዉ ለውጥታት", "Перетворення, що зберігають відстані") },
    { text: S(
      "Une isométrie conserve les distances. Les quatre types : translation, rotation, réflexion, symétrie glissante.",
      "An isometry preserves distances. Four types: translation, rotation, reflection, glide reflection.",
      "التقايس يحفظ المسافات. أربعة أنواع: انسحاب، دوران، انعكاس، انعكاس انزلاقي.",
      "ایزومتری فاصله‌ها را حفظ می‌کند. چهار نوع: انتقال، دوران، بازتاب، بازتاب لغزنده.",
      "ኢሶሜትሪ ንርሕቀታት ይሕል። ኣርባዕተ ዓይነት፡ ምስጋር፣ ምምቕቃሉ፣ ምንጽባር፣ ዝንቀሳቐስ ምንጽባር።",
      "Ізометрія зберігає відстані. Чотири типи: перенесення, поворот, відбиття, ковзне відбиття.",
    ) },
  ],
  paragraphs: {
    fr: ["Isométrie = conservation des distances. Homothétie (k ≠ ±1) n'en est pas une."],
    en: ["Isometry = distance-preserving. Homothety (k ≠ ±1) is not one."],
  },
  consignes: {
    "g7-7-e1": S("La translation est-elle une isométrie ? (oui/non)", "Is translation an isometry? (yes/no)", "هل الانسحاب تقايس؟ (نعم/لا)", "آیا انتقال ایزومتری است؟ (بله/خیر)", "ምስጋር ኢሶሜትሪ ድዩ? (እወ/ኣይፋል)", "Чи є перенесення ізометрією? (так/ні)"),
    "g7-7-e2": S("L'homothétie de rapport 2 est-elle une isométrie ? (oui/non)", "Is homothety of ratio 2 an isometry? (yes/no)", "هل التشابه بنسبة 2 تقايس؟ (نعم/لا)", "آیا همسانی با نسبت ۲ ایزومتری است؟ (بله/خیر)", "ሬሾ 2 ሆሞቴቲ ኢሶሜትሪ ድዩ? (እወ/ኣይፋል)", "Чи є гомотетія з k=2 ізометрією? (так/ні)"),
    "g7-7-e3": S("Cite deux isométries directes.", "Name two direct isometries.", "اذكر تقايسين مباشرين.", "دو ایزومتری مستقیم نام ببرید.", "ክልተ ቀጥታዊ ኢሶሜትሪ ጥቀስ።", "Назвіть дві прямі ізометрії."),
    "g7-7-e4": S("Une isométrie conserve-t-elle les aires ? (oui/non)", "Does an isometry preserve areas? (yes/no)", "هل يحفظ التقايس المساحات؟ (نعم/لا)", "آیا ایزومتری مساحت‌ها را حفظ می‌کند؟ (بله/خیر)", "ኢሶሜትሪ ንሰፊሓት ይሕልዮ ድዩ? (እወ/ኣይፋል)", "Чи зберігає ізометрія площі? (так/ні)"),
    "g7-7-e5": S("Combien d'isométries du plan (types fondamentaux) ?", "How many fundamental plane isometries?", "كم تقايسًا أساسيًا في المستوى؟", "چند ایزومتری بنیادی صفحه؟", "ክንደይ መሰረታዊ ኢሶሜትሪ ኣለዉ?", "Скільки основних ізометрій площини?"),
  },
};
