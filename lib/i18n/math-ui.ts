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
    en: "Submit",
    ar: "تأكيد",
    fa: "تأیید",
    pt: "Validar",
    ti: "ኣረጋግጽ",
    uk: "Підтвердити",
  },
  checkAnswers: {
    fr: "Contrôler les réponses",
    en: "Check answers",
    ar: "التحقق من الإجابات",
    fa: "بررسی پاسخ‌ها",
    pt: "Verificar as respostas",
    ti: "ምርግጋጽ መልስታት",
    uk: "Перевірити відповіді",
  },
  expected: {
    fr: "Attendu",
    en: "Expected",
    ar: "المتوقع",
    fa: "پاسخ درست",
    pt: "Esperado",
    ti: "እተጸበየ",
    uk: "Очікувано",
  },
  yourAnswer: {
    fr: "Ta réponse",
    en: "Your answer",
    ar: "إجابتك",
    fa: "پاسخ تو",
    pt: "A tua resposta",
    ti: "መልስካ",
    uk: "Твоя відповідь",
  },
  correct: {
    fr: "Correct",
    en: "Correct",
    ar: "صحيح",
    fa: "درست",
    pt: "Correto",
    ti: "ትኽክር",
    uk: "Вірно",
  },
  incorrect: {
    fr: "À revoir",
    en: "Needs review",
    ar: "يحتاج مراجعة",
    fa: "نیاز به مرور",
    pt: "A rever",
    ti: "እንደገና ርአ",
    uk: "Потрібно попрактикуватися",
  },
  answersRecorded: {
    fr: "Réponses enregistrées. Tu peux afficher le contrôle.",
    en: "Answers saved. You can check them.",
    ar: "تم حفظ الإجابات. يمكنك التحقق.",
    fa: "پاسخ‌ها ثبت شد. می‌توانی بررسی کنی.",
    pt: "Respostas registadas. Podes verificar.",
    ti: "መልስታት ተሓቚሞም። ምርግጋጽ ክትገብር ትኽእል።",
    uk: "Відповіді збережено. Можеш перевірити.",
  },
  translateShow: {
    fr: "Traduire",
    en: "Translate",
    ar: "ترجمة",
    fa: "ترجمه",
    pt: "Traduzir",
    ti: "ምትርጓም",
    uk: "Переклад",
  },
  translateHide: {
    fr: "Masquer la traduction",
    en: "Hide translation",
    ar: "إخفاء الترجمة",
    fa: "پنهان کردن ترجمه",
    pt: "Esconder a tradução",
    ti: "ምትርጓም ምእላይ",
    uk: "Сховати переклад",
  },
};

export function mathExerciseUi(lang: PivotCode, key: MathExerciseUiKey): string {
  const row = STRINGS[key];
  return row[lang] ?? row.fr;
}

/** Libellés interface exercices en français (langue d'étude), comme les énoncés. */
export function mathExerciseFrenchUi(key: MathExerciseUiKey): string {
  return STRINGS[key].fr;
}
