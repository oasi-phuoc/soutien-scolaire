import type { PivotCode } from "@/lib/pivot-langs";
import type { VocabWord } from "@/lib/curriculum/vocabulary-data";
import { builtInVocabDefinition } from "@/lib/curriculum/vocab-definition-translations";

type DefinitionValue = string | string[] | undefined;

const LABELS: Record<PivotCode, string> = {
  fr: "Définition",
  sq: "Përkufizim",
  en: "Definition",
  ar: "التعريف",
  am: "ትርጉም",
  prs: "تعریف",
  es: "Definición",
  it: "Definizione",
  fa: "تعریف",
  ps: "تعریف",
  pt: "Definição",
  ru: "Определение",
  so: "Qeexid",
  ti: "ትርጉም",
  tr: "Tanım",
  uk: "Визначення",
};

const FALLBACK_PREFIX: Record<PivotCode, string> = {
  fr: "",
  sq: "Kuptim i thjeshtë:",
  en: "Simple meaning:",
  ar: "المعنى البسيط:",
  am: "ቀላል ትርጉም:",
  prs: "معنای ساده:",
  es: "Significado sencillo:",
  it: "Significato semplice:",
  fa: "معنای ساده:",
  ps: "ساده مانا:",
  pt: "Significado simples:",
  ru: "Простое значение:",
  so: "Macne fudud:",
  ti: "ቀላል ትርጉም:",
  tr: "Basit anlam:",
  uk: "Просте значення:",
};

export function firstDefinition(value: DefinitionValue): string | undefined {
  if (Array.isArray(value)) return value.find((item) => item.trim().length > 0);
  return value?.trim() ? value : undefined;
}

export function definitionLabel(lang: PivotCode): string {
  return LABELS[lang] ?? LABELS.fr;
}

export function pickWordDefinition(word: VocabWord, lang: PivotCode, showPivot: boolean): { text?: string; translated: boolean } {
  const frDefinition = firstDefinition(word.definition);
  if (!showPivot || lang === "fr") return { text: frDefinition, translated: false };

  const pivotDefinition = firstDefinition(word.definitionPivot?.[lang]);
  if (pivotDefinition) return { text: pivotDefinition, translated: true };

  const builtInDefinition = builtInVocabDefinition(word.word, lang);
  if (builtInDefinition) return { text: builtInDefinition, translated: true };

  if (!frDefinition) return { text: undefined, translated: false };
  return { text: `${FALLBACK_PREFIX[lang] ?? FALLBACK_PREFIX.en} ${frDefinition}`, translated: false };
}
