import type { SubmoduleTrad } from "./trad-types";

export const TRAD_G3_8: SubmoduleTrad = {
  submoduleId: "G3-8",
  title: {
    fr: "Figures à trous",
    en: "Figures with holes",
    ar: "الأشكال ذات الفراغات",
    fa: "اشکال با حفره",
    ti: "ቅርጺ ምስ ቀዳዳ",
    uk: "Фігури з отворами",
  },
  paragraphs: {
    fr: [
          "Une figure à trou est une grande figure dont on a retiré une figure intérieure. On calcule l'aire en soustrayant.",
          "Formule : A = A_grande − A_trou.",
          "Exemple : cadre rectangulaire extérieur 12×8 cm, intérieur 8×4 cm → A = (12×8) − (8×4) = 96 − 32 = 64 cm².",
          "Exemple anneau : grand disque r=6 cm, trou r=3 cm → A = π×6² − π×3² = π(36−9) = 27π ≈ 84,8 cm².",
        ],
    en: [
          "A figure with a hole is a large figure with an interior removed. Compute by subtracting areas.",
          "Formula: A = A_large − A_hole.",
          "Example: outer rectangle 12×8 cm, inner 8×4 cm → A = 96 − 32 = 64 cm².",
          "Ring example: outer r=6, inner r=3 → A = π(36−9) = 27π ≈ 84.8 cm².",
        ],
    ar: [
          "الشكل ذو الثقب شكل كبير يُزال منه شكل داخلي. نحسب بالطرح.",
          "الصيغة: A = A_كبير − A_ثقب.",
          "مثال: مستطيل خارجي 12×8، داخلي 8×4 → A = 64 سم².",
          "حلقة: r_خارج=6، r_داخل=3 → A = 27π ≈ 84.8 سم².",
        ],
    fa: [
          "شکل با حفره یک شکل بزرگ است که یک شکل داخلی از آن حذف شده. با تفریق محاسبه می‌کنیم.",
          "فرمول: A = A_بزرگ − A_حفره.",
          "مثال: مستطیل خارجی 12×8، داخلی 8×4 → A = 64 سانتیمتر².",
          "حلقه: r بیرونی=6، r داخلی=3 → A = 27π ≈ 84.8 سانتیمتر².",
        ],
    ti: [
          "ቅርጺ ምስ ቀዳዳ ዓቢ ቅርጺ ካብ ውሽጠ ዝኾነ ቅርጺ ዝኻናን ዩ. ብምቕናስ ምሕሳቡ.",
          "ቅጥዒ: A = A_ዓቢ − A_ቀዳዳ.",
          "ምሳሌ: ናይ ደገ ካሬ-ሓለቃ 12×8 ናይ ውሽጠ 8×4 → A = 64 ሰም².",
          "ቀለቤት: r ደገ=6, r ውሽጠ=3 → A ≈ 84.8 ሰም².",
        ],
    uk: [
          "Фігура з отвором — велика фігура, з якої вирізана менша. Площа = площа великої − площа вирізки.",
          "Формула: A = A_велика − A_отвір.",
          "Приклад: зовнішній прямокутник 12×8, внутрішній 8×4 → A = 64 см².",
          "Кільце: r=6 і r=3 → A = 27π ≈ 84,8 см².",
        ],
  },
};
