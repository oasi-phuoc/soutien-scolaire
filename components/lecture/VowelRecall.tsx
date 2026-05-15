"use client";

import { speak } from "@/lib/utils/speech";
import { usePivotLang } from "@/components/math/usePivotLang";
import { lectureUi } from "@/lib/i18n/lecture-ui";

const VOWELS = [
  { letter: "A", phoneme: "/a/" },
  { letter: "O", phoneme: "/o/" },
  { letter: "I", phoneme: "/i/" },
  { letter: "U", phoneme: "/y/" },
  { letter: "E", phoneme: "/e/" },
  { letter: "Y", phoneme: "/i/" },
];

export function VowelRecall() {
  const lang = usePivotLang();
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Rappel des sons déjà vus</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">Touchez chaque lettre pour entendre son son.</p>
      <p className="border-l-2 border-[var(--color-accent-lecture)]/40 pl-2 text-xs italic text-[var(--color-text-secondary)]" dir={lang === "ar" || lang === "fa" ? "rtl" : "ltr"} lang={lang}>
        {lectureUi(lang, "tapLetterToHear")}
      </p>
      <div className="grid grid-cols-3 gap-2">
        {VOWELS.map(({ letter, phoneme }) => (
          <button
            key={letter}
            type="button"
            onClick={() => speak(letter)}
            className="flex flex-col items-center justify-center gap-1 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] py-4 active:scale-95 transition-transform"
          >
            <span className="text-2xl font-bold text-[var(--color-text-primary)]">{letter}</span>
            <span className="text-xs text-[var(--color-accent-alg)]">{phoneme}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
