import type { PivotCode } from "@/lib/pivot-langs";

export type MathExerciseUiKey =
  | "validate"
  | "checkAnswers"
  | "expected"
  | "yourAnswer"
  | "correct"
  | "incorrect"
  | "answersRecorded"
  | "translateShow"
  | "translateHide";

const STRINGS: Record<MathExerciseUiKey, Record<"fr" | PivotCode, string>> = {
  validate: {
    fr: "Valider",
    ar: "تأكيد",
    fa: "تأیید",
    ti: "ኣረጋግጽ",
    uk: "Підтвердити",
  },
  checkAnswers: {
    fr: "Contrôler les réponses",
    ar: "التحقق من الإجابات",
    fa: "بررسی پاسخ‌ها",
    ti: "ምርግጋጽ መልስታት",
    uk: "Перевірити відповіді",
  },
  expected: {
    fr: "Attendu",
    ar: "المتوقع",
    fa: "پاسخ درست",
    ti: "እተጸበየ",
    uk: "Очікувано",
  },
  yourAnswer: {
    fr: "Ta réponse",
    ar: "إجابتك",
    fa: "پاسخ تو",
    ti: "መልስካ",
    uk: "Твоя відповідь",
  },
  correct: {
    fr: "Correct",
    ar: "صحيح",
    fa: "درست",
    ti: "ትኽክር",
    uk: "Вірно",
  },
  incorrect: {
    fr: "À revoir",
    ar: "يحتاج مراجعة",
    fa: "نیاز به مرور",
    ti: "እንደገና ርአ",
    uk: "Потрібно попрактикуватися",
  },
  answersRecorded: {
    fr: "Réponses enregistrées. Tu peux afficher le contrôle.",
    ar: "تم حفظ الإجابات. يمكنك التحقق.",
    fa: "پاسخ‌ها ثبت شد. می‌توانی بررسی کنی.",
    ti: "መልስታት ተሓቚሞም። ምርግጋጽ ክትገብር ትኽእል።",
    uk: "Відповіді збережено. Можеш перевірити.",
  },
  translateShow: {
    fr: "Traduire",
    ar: "ترجمة",
    fa: "ترجمه",
    ti: "ምትርጓም",
    uk: "Переклад",
  },
  translateHide: {
    fr: "Masquer la traduction",
    ar: "إخفاء الترجمة",
    fa: "پنهان کردن ترجمه",
    ti: "ምትርጓም ምእላይ",
    uk: "Сховати переклад",
  },
};

export function mathExerciseUi(lang: PivotCode, key: MathExerciseUiKey): string {
  const row = STRINGS[key];
  return row[lang] ?? row.fr;
}
